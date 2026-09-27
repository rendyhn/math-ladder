/* ==========================================================================
   Interactive figures: sliders that redraw a figure while you move them.
   A lesson places ${Ix('name', caption)}; app.js calls mountIx() after the
   lesson renders. Each IX entry has ctrls (id, label(), min, max, step,
   value, fmt) and draw(vals) returning { svg, read } (plain text, no TeX,
   so redrawing never waits for MathJax).
   ========================================================================== */
const IX = {};
const Ix = (name, cap) => `<figure class="fig ix" data-ix="${name}"><div class="ix-out"></div><div class="ix-ctrls no-print"></div>${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
const ixF = (x, d = 1) => F(+(+x).toFixed(d));   // a rounded plain-text number
function mountIx(root) {
  root.querySelectorAll('.ix[data-ix]').forEach(fig => {
    const def = IX[fig.dataset.ix]; if (!def || fig.dataset.mounted) return;
    fig.dataset.mounted = '1';
    const out = fig.querySelector('.ix-out'), box = fig.querySelector('.ix-ctrls'), vals = {};
    const show = c => (c.fmt ? c.fmt(vals[c.id]) : ixF(vals[c.id], 2));
    box.innerHTML = def.ctrls.map(c => { vals[c.id] = c.value; return `<label class="ix-ctrl"><span class="ix-lab">${c.label()}</span><input type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" data-k="${c.id}"><output>${show(c)}</output></label>`; }).join('');
    const draw = () => { const r = def.draw(vals); out.innerHTML = r.svg + (r.read ? `<p class="ix-read">${r.read}</p>` : ''); };
    box.addEventListener('input', e => { const k = e.target.dataset.k; if (!k) return; vals[k] = +e.target.value; e.target.nextElementSibling.textContent = show(def.ctrls.find(c => c.id === k)); draw(); });
    draw();
  });
}

/* ---------- y = ax² + bx + c ---------- */
IX.parabola = {
  ctrls: [
    { id: 'a', label: () => 'a', min: -3, max: 3, step: 0.5, value: 1 },
    { id: 'b', label: () => 'b', min: -6, max: 6, step: 1, value: -2 },
    { id: 'c', label: () => 'c', min: -6, max: 6, step: 1, value: -3 },
  ],
  draw({ a, b, c }) {
    const f = x => a * x * x + b * x + c, pts = [], co = (k, first) => (k === 1 ? (first ? '' : '+ ') : k === -1 ? (first ? '−' : '− ') : (k < 0 ? (first ? '−' : '− ') : first ? '' : '+ ') + ixF(Math.abs(k))), name = 'y = ' + [a ? co(a, true) + 'x²' : '', b ? co(b, !a) + 'x' : '', c || (!a && !b) ? (c < 0 ? (a || b ? '− ' : '−') : a || b ? '+ ' : '') + ixF(Math.abs(c)) : ''].filter(Boolean).join(' ');
    let read;
    if (!a) {
      read = T`With a = 0 the graph is a straight line, not a parabola.`;
      if (b) pts.push([-c / b, 0, ixF(-c / b, 2), 'start']);
    } else {
      const h = -b / (2 * a), k = f(h), D = b * b - 4 * a * c;
      pts.push([h, k, `(${ixF(h, 2)}, ${ixF(k, 2)})`, 'start', false, 7, a > 0 ? 18 : -8]);
      const roots = (D > 0 ? [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)] : D === 0 ? [h] : []).sort((u, v) => u - v);
      roots.forEach(r => pts.push([r, 0, '', 'start', true]));
      const rs = roots.length ? roots.map(r => 'x = ' + ixF(r, 2)).join(', ') : T`no real roots`;
      read = T`Opens ${a > 0 ? T`upwards (a > 0)` : T`downwards (a < 0)`}. Vertex (${ixF(h, 2)}, ${ixF(k, 2)}), axis of symmetry x = ${ixF(h, 2)}. Discriminant D = b² − 4ac = ${ixF(D, 2)}, so ${rs}.`;
    }
    return { svg: planeSvg({ W: 460, H: 330, x: [-6, 6], y: [-8, 8], step: [1, 1], tickX: 2, tickY: 2, fns: [{ f, cls: 'mf-c1' }], pts, texts: [[-5.8, 7.2, name, 'start', 'mf-lab']], label: T`Graph of the parabola y = ax² + bx + c for the chosen a, b and c` }), read };
  },
};

/* ---------- y = A sin(Bx) + D ---------- */
IX.sine = {
  ctrls: [
    { id: 'A', label: () => T`amplitude A`, min: 0.5, max: 3, step: 0.5, value: 2 },
    { id: 'B', label: () => T`frequency B`, min: 0.5, max: 3, step: 0.5, value: 1 },
    { id: 'D', label: () => T`vertical shift D`, min: -2, max: 2, step: 0.5, value: 0 },
  ],
  draw({ A, B, D }) {
    const f = x => A * Math.sin(B * x * Math.PI / 180) + D;
    return {
      svg: planeSvg({ W: 460, H: 300, x: [0, 360], y: [-5, 5], step: [30, 1], tickX: 90, tickY: 1, xl: 'x (°)', fns: [{ f: x => Math.sin(x * Math.PI / 180), cls: 'mf-c2', dash: true }, { f, cls: 'mf-c1' }], segs: [[0, D, 360, D, 'mf-thin', true]], label: T`Graph of y = A sin(Bx) + D for the chosen A, B and D, with y = sin x dashed for comparison` }),
      read: T`y = ${A === 1 ? '' : ixF(A) + ' '}sin ${B === 1 ? 'x' : `(${ixF(B)}x)`}${D ? ` ${D < 0 ? '−' : '+'} ${ixF(Math.abs(D))}` : ''}: amplitude ${ixF(A)}, period 360° ÷ ${ixF(B)} = ${ixF(360 / B)}°, maximum ${ixF(A + D)}, minimum ${ixF(D - A)}. Dashed: y = sin x.`,
    };
  },
};
