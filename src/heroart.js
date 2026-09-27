/* Decorative background behind the home-page hero: faint, subject-themed doodles (aria-hidden, drawn in a 1200 × 640 box). */
const HERO_ART = (() => {
  const tf = (x, y, rot) => (rot ? ` transform="rotate(${rot} ${x} ${y})"` : '');
  // text: t(x, y, content, size, { rot, cls, font, anchor })
  const t = (x, y, s, size, { rot = 0, cls = '', font = 'serif', anchor = 'start' } = {}) => `<text x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}" class="hb-t hb-${font} ${cls}"${tf(x, y, rot)}>${s}</text>`;
  const p = (d, cls = '') => `<path d="${d}" class="hb-l ${cls}"/>`;
  const c = (x, y, r, cls = '') => `<circle cx="${x}" cy="${y}" r="${r}" class="hb-l ${cls}"/>`;
  const dot = (x, y, r, cls = '') => `<circle cx="${x}" cy="${y}" r="${r}" class="hb-f ${cls}"/>`;
  const e = (x, y, rx, ry, rot, cls = '') => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" class="hb-l ${cls}"${tf(x, y, rot)}/>`;
  const wave = (x0, y0, len, amp, per) => { let d = `M${x0} ${y0}`; for (let x = 0; x <= len; x += 4) d += `L${(x0 + x).toFixed(1)} ${(y0 - amp * Math.sin(2 * Math.PI * x / per)).toFixed(1)}`; return d; };
  const poly = (cx, cy, r, n, a0 = -Math.PI / 2) => 'M' + [...Array(n)].map((_, k) => { const a = a0 + 2 * Math.PI * k / n; return `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`; }).join('L') + 'Z';
  const parts = [];
  // top strip
  parts.push(p('M232 10h130v80h-130zM232 10h80v80M312 10v50h50M312 60h30v30') + p('M232 90A80 80 0 0 1 312 10A50 50 0 0 1 362 60A30 30 0 0 1 332 90', 'hbc2'));
  parts.push(t(400, 66, 'e<tspan dy="-13" font-size="62%">iπ</tspan><tspan dy="13"> + 1 = 0</tspan>', 32));
  parts.push(t(610, 30, '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …', 20, { font: 'mono' }));
  // gap column between the text and the cards
  parts.push(t(612, 200, '∞', 64, { cls: 'hbc3', anchor: 'middle' }));
  parts.push(t(628, 430, 'sin²θ + cos²θ = 1', 20, { rot: -90 }));
  parts.push(t(612, 540, 'π', 60, { cls: 'hbc1', anchor: 'middle' }));
  // behind the text: faint line drawings only
  parts.push(p('M440 330V250L560 330Z') + p('M440 316h14v14'));
  parts.push(c(520, 470, 44) + p('M520 470H564M520 470L551 439'));
  parts.push(p('M150 560h120M160 570V470') + p('M170 478Q210 600 262 478'));
  // bottom strip
  parts.push(t(130, 640, '∑', 96, { cls: 'hbc1' }));
  parts.push(t(210, 624, '1 + 2 + … + n = n(n + 1) / 2', 20, { font: 'mono' }));
  parts.push(t(560, 628, 'a² + b² = c²', 28, { rot: -3 }));
  parts.push(p(wave(740, 614, 330, 14, 110), 'hbc3'));
  parts.push(t(1070, 638, 'x = (−b ± √(b² − 4ac)) / 2a', 18, { anchor: 'end' }));
  // outer edges (visible on wide screens)
  parts.push(t(40, 300, '∫', 90, { cls: 'hbc4' }) + t(30, 470, 'dy/dx', 24, { rot: -90 }) + t(1130, 200, '√2', 40) + t(1110, 420, 'Δ', 50, { font: 'sans' }));
  for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) parts.push(dot(1100 + i * 24, 480 + j * 24, 3));
  return '<svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' + parts.join('') + '</svg>';
})();
