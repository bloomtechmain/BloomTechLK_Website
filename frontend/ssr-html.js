// React 19 + react-helmet-async renders <title>/<meta>/<link>/<script> tags as literal
// children at the start of the rendered tree (inside <div id="root">) rather than hoisting
// them into <head> the way plain react-helmet-async did pre-React 19. Since our SSR root is
// a <div>, not a full document, React never gets the chance to hoist them. This pulls those
// tags back out and places them in <head> so search engines actually see them (and so the
// template's static placeholder <title> doesn't end up duplicated alongside the real one).
export function mergeAppHtml(template, appHtml) {
  let html = template.replace('<!--app-html-->', appHtml);
  html = html.replace(/<title>[\s\S]*?<\/title>/, '');

  const rootOpenTag = '<div id="root">';
  const rootStart = html.indexOf(rootOpenTag);
  if (rootStart === -1) return html;

  let cursor = rootStart + rootOpenTag.length;
  let extracted = '';
  const patterns = [
    /^<title>[\s\S]*?<\/title>/,
    /^<meta\b[^>]*\/?>/,
    /^<link\b[^>]*\/?>/,
    /^<base\b[^>]*\/?>/,
    /^<script\b[^>]*>[\s\S]*?<\/script>/,
    /^<noscript\b[^>]*>[\s\S]*?<\/noscript>/,
  ];

  while (true) {
    const remaining = html.slice(cursor);
    let matched = null;
    for (const pattern of patterns) {
      const m = remaining.match(pattern);
      if (m) { matched = m[0]; break; }
    }
    if (!matched) break;
    extracted += matched;
    cursor += matched.length;
  }

  html = html.slice(0, rootStart + rootOpenTag.length) + html.slice(cursor);
  if (extracted) {
    html = html.replace('</head>', `${extracted}</head>`);
  }
  return html;
}
