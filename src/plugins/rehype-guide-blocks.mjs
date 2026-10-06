/**
 * Turns three plain markdown sections into designed blocks at build time,
 * so page files stay simple markdown:
 *
 *   ## The jargon: ...   + a list of "- **Term:** meaning"  -> jargon card
 *                          (term boxes, plus a "Show what they mean" toggle)
 *   ## Related           + a list of "- [Page](/path/): note" -> link tiles
 *   ## Next up           + paragraph(s) ending with a link    -> next-up box
 *
 * Blocks carry Starlight's not-content class so its default content styles
 * (details markers, list spacing) stay out of the way; custom.css styles them.
 * Works whether or not Starlight has already wrapped the heading in its
 * anchor-link wrapper. Anything it does not recognise is left untouched.
 */

const el = (tagName, properties = {}, children = []) => ({ type: 'element', tagName, properties, children });
const txt = (value) => ({ type: 'text', value });

function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

/** Returns the h2 element if this top-level node is an h2 or a wrapper around one. */
function h2Of(node) {
  if (!node || node.type !== 'element') return null;
  if (node.tagName === 'h2') return node;
  if (node.tagName === 'div') {
    const h = (node.children || []).find((c) => c.type === 'element' && c.tagName === 'h2');
    if (h) return h;
  }
  return null;
}

const isBlank = (n) => n.type === 'text' && !n.value.trim();

/** Strips a leading separator like ": " from the first text node of a list of nodes. */
function stripLead(nodes, re) {
  const out = nodes.map((n) => ({ ...n }));
  while (out.length && isBlank(out[0])) out.shift();
  if (out[0] && out[0].type === 'text') {
    out[0] = txt(out[0].value.replace(re, ''));
    if (!out[0].value) out.shift();
  }
  return out;
}

function liItems(ul) {
  return (ul.children || []).filter((c) => c.type === 'element' && c.tagName === 'li').map((li) => {
    // Unwrap a single <p> inside loose list items
    const kids = li.children.filter((c) => !isBlank(c));
    if (kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'p') return kids[0].children;
    return li.children;
  });
}

function buildJargon(headingNode, ul) {
  const items = liItems(ul)
    .map((kids) => {
      const k = kids.filter((c) => !isBlank(c));
      const strong = k[0];
      if (!strong || strong.type !== 'element' || strong.tagName !== 'strong') return null;
      const term = textOf(strong).replace(/:\s*$/, '').trim();
      const meaning = stripLead(kids.slice(kids.indexOf(strong) + 1), /^\s*:?\s*/);
      return { term, meaning };
    })
    .filter(Boolean);
  if (!items.length) return null;
  const n = items.length;
  return el('section', { className: ['guide-jargon', 'not-content'] }, [
    headingNode,
    el('p', { className: ['guide-jargon-count'] }, [txt(`${n} ${n === 1 ? 'term' : 'terms'} you will meet below`)]),
    el('ul', { className: ['guide-jargon-terms'] }, items.map((i) => el('li', {}, [txt(i.term)]))),
    el('details', { className: ['guide-jargon-details'] }, [
      el('summary', {}, [
        el('span', { className: ['when-closed'] }, [txt('Show what they mean')]),
        el('span', { className: ['when-open'] }, [txt('Hide the meanings')]),
        el('span', { className: ['chev'], ariaHidden: 'true' }, [txt('▾')]),
      ]),
      el('dl', { className: ['guide-jargon-defs'] }, items.map((i) => el('div', {}, [el('dt', {}, [txt(i.term)]), el('dd', {}, i.meaning)]))),
    ]),
  ]);
}

function buildRelated(headingNode, ul) {
  const tiles = [];
  for (const kids of liItems(ul)) {
    const k = kids.filter((c) => !isBlank(c));
    const a = k[0];
    if (!a || a.type !== 'element' || a.tagName !== 'a') return null; // unusual list: leave as is
    const note = stripLead(kids.slice(kids.indexOf(a) + 1), /^\s*[:,-]?\s*/);
    tiles.push(
      el('a', { ...a.properties, className: ['guide-related-tile'] }, [
        el('span', { className: ['guide-related-title'] }, a.children),
        ...(note.length ? [el('span', { className: ['guide-related-note'] }, note)] : []),
      ]),
    );
  }
  if (!tiles.length) return null;
  return el('section', { className: ['guide-related', 'not-content'] }, [headingNode, el('div', { className: ['guide-related-grid'] }, tiles)]);
}

function lastLink(nodes) {
  let found = null;
  const walk = (n) => {
    if (n.type === 'element' && n.tagName === 'a') found = n;
    (n.children || []).forEach(walk);
  };
  nodes.forEach(walk);
  return found;
}

function buildNext(headingNode, body) {
  const link = lastLink(body);
  const content = [el('div', { className: ['guide-next-text'] }, [headingNode, ...body])];
  if (link) {
    content.push(
      el('a', { href: link.properties.href, className: ['guide-next-button'] }, [
        txt(textOf(link).replace(/^\w/, (c) => c.toUpperCase())),
        el('span', { ariaHidden: 'true' }, [txt(' →')]),
      ]),
    );
  }
  return el('section', { className: ['guide-next', 'not-content'] }, content);
}

export default function rehypeGuideBlocks() {
  return (tree) => {
    const kids = tree.children;
    const out = [];
    for (let i = 0; i < kids.length; i++) {
      const node = kids[i];
      const h2 = h2Of(node);
      const title = h2 ? textOf(h2).trim() : '';
      if (h2 && (/^The jargon/i.test(title) || /^Related$/i.test(title))) {
        let j = i + 1;
        while (j < kids.length && isBlank(kids[j])) j++;
        const ul = kids[j];
        if (ul && ul.type === 'element' && ul.tagName === 'ul') {
          const block = /^The jargon/i.test(title) ? buildJargon(node, ul) : buildRelated(node, ul);
          if (block) {
            out.push(block);
            i = j;
            continue;
          }
        }
      }
      if (h2 && /^Next up$/i.test(title)) {
        let j = i + 1;
        const body = [];
        while (j < kids.length && !h2Of(kids[j])) {
          if (!isBlank(kids[j])) body.push(kids[j]);
          j++;
        }
        out.push(buildNext(node, body));
        i = j - 1;
        continue;
      }
      out.push(node);
    }
    tree.children = out;
  };
}
