/* ==========================================================================
   LEVEL 2 — Junior High School (Grades 7–9)
   ========================================================================== */
(() => {
const hFrac = T`Type a whole number or a fraction such as -3/4.`;
const hPi = T`Type an answer such as 49pi.`;
const vennSvg = () => `<svg viewBox="0 0 320 180" role="img" aria-label="${T`Venn diagram: two overlapping circles A and B inside a rectangle U. The overlap is A intersect B.`}">
<rect class="fig-frame" x="4" y="4" width="312" height="172" rx="4"/>
<circle class="fig-shape fig-alpha" cx="125" cy="94" r="62"/><circle class="fig-shape fig-alpha" cx="195" cy="94" r="62"/>
<text class="fig-text" x="16" y="26">U</text><text class="fig-text" x="74" y="42">A</text><text class="fig-text" x="238" y="42">B</text>
<text class="fig-small" x="96" y="98" text-anchor="middle">${T`A only`}</text><text class="fig-small" x="160" y="98" text-anchor="middle">A ∩ B</text><text class="fig-small" x="224" y="98" text-anchor="middle">${T`B only`}</text>
<text class="fig-small" x="160" y="170" text-anchor="middle">${T`outside both: (A ∪ B)′`}</text></svg>`;
const rightTriSvg = () => `<svg viewBox="0 0 260 170" role="img" aria-label="${T`Right triangle with legs a and b and hypotenuse c opposite the right angle`}">
<polygon class="fig-shape" points="30,140 230,140 30,30"/><polyline class="fig-line" points="30,122 48,122 48,140"/>
<text class="fig-text" x="130" y="162" text-anchor="middle">b</text><text class="fig-text" x="14" y="92">a</text><text class="fig-text" x="138" y="78">c</text></svg>`;
const circleSvg = () => `<svg viewBox="0 0 300 200" role="img" aria-label="${T`Circle with centre O, a radius r, a diameter, a chord and a shaded sector`}">
<path class="fig-sector" d="M150 100 L230 100 A80 80 0 0 0 190 30.72 Z"/><circle class="fig-line" cx="150" cy="100" r="80"/>
<line class="fig-line" x1="70" y1="100" x2="230" y2="100"/><line class="fig-line" x1="150" y1="100" x2="190" y2="30.72"/>
<line class="fig-line" x1="74.8" y1="127.4" x2="190" y2="169.3"/><circle class="fig-dot" cx="150" cy="100" r="3"/>
<text class="fig-text" x="140" y="118">O</text><text class="fig-text" x="176" y="60">r</text><text class="fig-small" x="104" y="94">${T`diameter`}</text>
<text class="fig-small" x="236" y="72">${T`sector`}</text><text class="fig-small" x="104" y="170">${T`chord`}</text></svg>`;

level({
  id: 'junior', name: 'Junior High School', short: 'Junior High', band: 'Grades 7–9', color: 'lv2',
  blurb: 'Integers, powers, algebra and linear equations, sets, geometry of circles and solids, and first statistics and probability.',
  topics: [
/* ------------------------------------------------------------------ */
{
  id: 'integers', title: 'Integers',
  blurb: 'Negative numbers on the number line and the sign rules for all four operations.',
  lesson: () => T`
<p>The <b>integers</b> are the whole numbers and their opposites: $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$ On a number line, numbers increase to the right, so $-7 \lt -2$ even though 7 is bigger than 2.</p>
<p>The <b>absolute value</b> $|a|$ is the distance from 0: $|-6| = 6$ and $|6| = 6$.</p>
<h3>Adding and subtracting</h3>
${Key(T`<ul><li><b>Same signs:</b> add the sizes, keep the sign. $-4 + (-9) = -13$.</li><li><b>Different signs:</b> subtract the sizes, take the sign of the larger size. $-11 + 5 = -6$.</li><li><b>Subtracting</b> means adding the opposite: $3 - (-8) = 3 + 8 = 11$.</li></ul>`)}
<h3>Multiplying and dividing</h3>
${Tbl([T`Signs`, T`Result`, T`Example`], [[T`+ and +`, T`positive`, T`$6 \times 3 = 18$`], [T`− and −`, T`positive`, T`$(-6) \times (-3) = 18$`], [T`+ and −`, T`negative`, T`$6 \times (-3) = -18$`], [T`− and +`, T`negative`, T`$-18 \div 3 = -6$`]])}
${Ex(T`<p>$-5 \times (-4) - (-7) = 20 + 7 = 27$</p>`)}
<p>Real-world uses: temperatures below zero, heights below sea level, debts, and floors below ground.</p>
${Tip(T`<p>$-3^2 = -9$ but $(-3)^2 = 9$. Without brackets, the power applies only to the 3.</p>`)}`,
  gens: [
    () => { const a = rnz(-30, 30), b = rnz(-30, 30); return { q: T`Calculate $${a} + ${pn(b)}$.`, a: a + b, neg: true, w: [a - b, -(a + b), Math.abs(a) + Math.abs(b)], s: T`${Math.sign(a) === Math.sign(b) ? T`Same signs: add the sizes and keep the sign.` : T`Different signs: subtract the sizes and keep the sign of the larger one.`} $${a} + ${pn(b)} = ${a + b}$.` }; },
    () => { const a = rnz(-30, 30), b = rnz(-30, 30); return { q: T`Calculate $${a} - ${pn(b)}$.`, a: a - b, neg: true, w: [a + b, b - a, -(a + b)], s: T`Subtracting means adding the opposite: $${a} - ${pn(b)} = ${a} + ${pn(-b)} = ${a - b}$.` }; },
    () => { if (chance()) { const a = rnz(-12, 12), b = rnz(-12, 12); return { q: T`Calculate $${pn(a)} \times ${pn(b)}$.`, a: a * b, neg: true, w: [-a * b, a + b, a * b + (a * b > 0 ? 1 : -1)], s: T`${(a < 0) === (b < 0) ? T`Same signs give a positive result` : T`Different signs give a negative result`}: $${pn(a)} \times ${pn(b)} = ${a * b}$.` }; } const b = rnz(-12, 12), c = rnz(-12, 12), a = b * c; return { q: T`Calculate $${a} \div ${pn(b)}$.`, a: c, neg: true, w: [-c, a - b, a + b], s: T`${(a < 0) === (b < 0) ? T`Same signs give a positive result` : T`Different signs give a negative result`}: $${a} \div ${pn(b)} = ${c}$.` }; },
    () => { const a = rnz(-9, 9), b = rnz(-9, 9), c = rnz(-20, 20), v = a * b - c; return { q: T`Evaluate $${a} \times ${pn(b)} - ${pn(c)}$.`, a: v, neg: true, w: [a * b + c, -a * b - c, a * (b - c)], s: T`Multiply first: $${a} \times ${pn(b)} = ${a * b}$. Then $${a * b} - ${pn(c)} = ${a * b} + ${pn(-c)} = ${v}$.` }; },
    () => { const t0 = ri(-15, 5), up = ri(5, 20), dn = ri(3, 25), t = t0 + up - dn; return { q: T`At 6 a.m. the temperature was $${t0}^\circ\text{C}$. By noon it had risen by $${up}^\circ\text{C}$, and by midnight it had fallen $${dn}^\circ\text{C}$ from the noon temperature. What was the temperature at midnight?`, a: t, u: '°C', neg: true, w: [t0 - up + dn, t0 + up + dn, -t], s: T`$${t0} + ${up} - ${dn} = ${t}$, so it was $${t}^\circ\text{C}$.` }; },
    () => { const a = rnz(-20, 20), b = rnz(-20, 20), v = Math.abs(a) - Math.abs(b); return { q: T`Evaluate $|${a}| - |${b}|$.`, a: v, neg: true, w: [a - b, Math.abs(a - b), Math.abs(a) + Math.abs(b)], s: T`$|${a}| = ${Math.abs(a)}$ and $|${b}| = ${Math.abs(b)}$, so the value is $${Math.abs(a)} - ${Math.abs(b)} = ${v}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'exponents', title: 'Exponents & Roots',
  blurb: 'Powers, the laws of exponents, zero and negative exponents, square and cube roots, simplifying surds.',
  lesson: () => T`
<p>An <b>exponent</b> (power) counts repeated multiplication: $a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ factors}}$. In $2^5 = 32$, 2 is the <b>base</b> and 5 is the <b>exponent</b>.</p>
<h3>Laws of exponents</h3>
${Tbl([T`Law`, T`Example`], [[T`$a^m \cdot a^n = a^{m+n}$`, T`$x^3 \cdot x^4 = x^7$`], [T`$\dfrac{a^m}{a^n} = a^{m-n}$`, T`$\dfrac{y^9}{y^2} = y^7$`], [T`$(a^m)^n = a^{mn}$`, T`$(k^2)^5 = k^{10}$`], [T`$(ab)^n = a^n b^n$`, T`$(3x)^2 = 9x^2$`], [T`$a^0 = 1$ ($a \ne 0$)`, T`$7^0 = 1$`], [T`$a^{-n} = \dfrac{1}{a^n}$`, T`$2^{-3} = \dfrac{1}{8}$`]])}
${Ex(T`<p>Simplify $(2x^3)(5x^4)$: multiply the numbers and add the exponents, $10x^{7}$.</p>`)}
<h3>Roots</h3>
<p>The square root undoes squaring: $\sqrt{81} = 9$ because $9^2 = 81$. The cube root undoes cubing: $\sqrt[3]{64} = 4$ because $4^3 = 64$.</p>
${Key(T`<p>To simplify a square root, pull out the largest square factor: $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$.</p>$$\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$$`)}
${Tip(T`<p>$x^3 \cdot x^4$ is $x^7$, not $x^{12}$ — multiply the bases, <i>add</i> the exponents. And $\sqrt{9 + 16} = 5$, not $3 + 4$.</p>`)}`,
  gens: [
    () => { const [b, n] = pick([[2, ri(3, 10)], [3, ri(2, 6)], [4, ri(2, 4)], [5, ri(2, 4)], [ri(6, 9), ri(2, 3)], [10, ri(2, 6)]]); const isN = chance(0.25) && n <= 5, base = isN ? -b : b, v = base ** n, B = isN ? `(${base})` : `${base}`; return { q: T`Evaluate $${B}^{${n}}$.`, a: v, neg: true, w: [base * n, base ** (n - 1), -v, b ** n + b], s: T`$${B}^{${n}}$ means ${n} factors of ${pn(base)}: $${Array(n).fill(pn(base)).join(T` \times `)} = ${M(v)}$.${isN ? (n % 2 ? T` An odd number of negative factors gives a negative answer.` : T` An even number of negative factors gives a positive answer.`) : ''}` }; },
    () => { const p = ri(2, 9), q = ri(2, 9), a = ri(2, 8), b = ri(2, 8), v = pick(['x', 'y', 'a', 'm']), P = (c, e) => `$${c}${v}^{${e}}$`; return { q: T`Simplify $(${p}${v}^{${a}})(${q}${v}^{${b}})$.`, a: P(p * q, a + b), w: [P(p + q, a + b), P(p * q, a * b), P(p * q, a + b + 1), P(p + q, a * b), P(p * q, a + b - 1), P(p * q + 1, a + b)], s: T`Multiply the numbers and <b>add</b> the exponents: $${p} \times ${q} = ${p * q}$ and $${v}^{${a}} \cdot ${v}^{${b}} = ${v}^{${a + b}}$. Answer: $${p * q}${v}^{${a + b}}$.` }; },
    () => { const p = ri(2, 9), q = ri(2, 6), a = ri(2, 7), b = ri(1, 6), v = pick(['x', 'y', 'n']), P = (c, e) => (e === 1 ? `$${c}${v}$` : `$${c}${v}^{${e}}$`); return { q: T`Simplify $\dfrac{${p * q}${v}^{${a + b}}}{${q}${v}^{${b}}}$.`, a: P(p, a), w: [P(p, a + 2 * b), P(p * q, a), P(p, a + 1), P(p * q * q, a + b)], s: T`Divide the numbers and <b>subtract</b> the exponents: $${p * q} \div ${q} = ${p}$ and $${v}^{${a + b} - ${b}} = ${v}^{${a}}$.` }; },
    () => { const a = ri(2, 6), b = ri(2, 5), c = ri(2, 4), v = pick(['x', 'a', 'k']); return { q: T`Simplify $(${c}${v}^{${a}})^{${b}}$.`, a: `$${M(c ** b)}${v}^{${a * b}}$`, w: [`$${M(c ** b)}${v}^{${a + b}}$`, `$${c * b}${v}^{${a * b}}$`, `$${c}${v}^{${a * b}}$`, `$${M(c ** b)}${v}^{${a * b + 1}}$`, `$${M(c ** b + c)}${v}^{${a * b}}$`], s: T`Raise each factor to the power ${b}: $${c}^{${b}} = ${M(c ** b)}$ and $(${v}^{${a}})^{${b}} = ${v}^{${a * b}}$.` }; },
    () => { const b = pick([2, 3, 4, 5, 10]), n = ri(1, 3), d = b ** n; if (chance(0.3)) { const a = ri(2, 9); return { q: T`Evaluate $${a}^0 + ${b}^{-${n}}$.`, ...FR(d + 1, d), h: T`Type a fraction such as 9/8.`, w: [fx(1, d), fx(a * d + 1, d), fx(d - 1, d)], s: T`$${a}^0 = 1$ and $${b}^{-${n}} = \frac{1}{${M(d)}}$, so the sum is $1 + \frac{1}{${M(d)}} = \frac{${M(d + 1)}}{${M(d)}}$.` }; } return { q: T`Evaluate $${b}^{-${n}}$.`, ...FR(1, d), h: T`Type a fraction such as 1/8.`, w: [`$${M(-d)}$`, fx(1, b * n), `$${M(-b * n)}$`, `$${M(d)}$`], s: T`A negative exponent means "one over": $${b}^{-${n}} = \frac{1}{${b}^{${n}}} = \frac{1}{${M(d)}}$.` }; },
    () => { if (chance()) { const n = ri(2, 30); return { q: T`Evaluate $\sqrt{${n * n}}$.`, a: n, w: [(n * n) / 2, n + 1, n - 1, 2 * n], s: T`$${n} \times ${n} = ${n * n}$, so $\sqrt{${n * n}} = ${n}$.` }; } const n = ri(2, 10); return { q: T`Evaluate $\sqrt[3]{${M(n ** 3)}}$.`, a: n, w: [n * n, (n ** 3) / 3, n + 1], s: T`$${n} \times ${n} \times ${n} = ${M(n ** 3)}$, so $\sqrt[3]{${M(n ** 3)}} = ${n}$.` }; },
    () => { const k = ri(2, 6), m = pick([2, 3, 5, 6, 7]); return { q: T`Simplify $\sqrt{${k * k * m}}$.`, a: `$${surdT(k, m)}$`, v: k * Math.sqrt(m), h: T`Type an answer such as 3sqrt(2).`, w: [`$${surdT(k - 1, m)}$`, `$${surdT(k * k, m)}$`, `$${M(k * m)}$`, k === 4 ? `$${surdT(k + 1, m)}$` : `$${surdT(m, k)}$`], s: T`Find the largest square factor: $${k * k * m} = ${k * k} \times ${m}$. So $\sqrt{${k * k * m}} = \sqrt{${k * k}} \cdot \sqrt{${m}} = ${surdT(k, m)}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'sci-notation', title: 'Scientific Notation',
  blurb: 'Writing very large and very small numbers as a × 10ⁿ, and calculating with them.',
  lesson: () => T`
<p>Scientists write very large or very small numbers compactly as</p>
${Fm(T`a \times 10^{n}, \qquad 1 \le a \lt 10, \quad n \text{ an integer}`)}
<ul><li>The distance to the Sun, about $150{,}000{,}000$ km, is $1.5 \times 10^{8}$ km.</li><li>A red blood cell, about $0.000\,008$ m wide, is $8 \times 10^{-6}$ m.</li></ul>
${Key(T`<p>Count how many places the decimal point moves to leave exactly one non-zero digit in front of it. Big numbers (moving left) give a <b>positive</b> exponent; numbers less than 1 (moving right) give a <b>negative</b> exponent.</p>`)}
<h3>Calculating</h3>
<p>Multiply (or divide) the front numbers, and add (or subtract) the exponents. Then fix the front number if it is not between 1 and 10:</p>
${Fm(T`(4 \times 10^{5}) \times (3 \times 10^{7}) = 12 \times 10^{12} = 1.2 \times 10^{13}`)}
${Fm(T`\frac{6 \times 10^{9}}{8 \times 10^{3}} = 0.75 \times 10^{6} = 7.5 \times 10^{5}`)}
${Tip(T`<p>$23 \times 10^{4}$ has the right value but is not in scientific notation — the front number must be less than 10.</p>`)}`,
  gens: [
    () => { const md = String(ri(11, 999)).replace(/0+$/, ''), n = ri(Math.max(3, md.length), 9), A = M(parseFloat(md.length > 1 ? md[0] + '.' + md.slice(1) : md)), std = Number(md + '0'.repeat(n - md.length + 1)), S = e => `$${A} \\times 10^{${e}}$`; return { q: T`Write ${F(std)} in scientific notation.`, a: S(n), w: [S(n + 1), S(n - 1), S(-n), S(n + 2)], only: 'mc', s: T`Move the decimal point ${n} places to the left so one digit is in front: $${M(std)} = ${A} \times 10^{${n}}$.` }; },
    () => { const md = String(ri(11, 999)).replace(/0+$/, ''), n = ri(2, 6), A = M(parseFloat(md.length > 1 ? md[0] + '.' + md.slice(1) : md)), std = parseFloat('0.' + '0'.repeat(n - 1) + md), S = e => `$${A} \\times 10^{${e}}$`; return { q: T`Write ${F(std)} in scientific notation.`, a: S(-n), w: [S(n), S(-(n + 1)), S(-(n - 1)), S(-(n + 2))], only: 'mc', s: T`Move the decimal point ${n} places to the right so one non-zero digit is in front: $${M(std)} = ${A} \times 10^{-${n}}$.` }; },
    () => { const md = String(ri(11, 999)).replace(/0+$/, ''), A = md[0] + (md.length > 1 ? '.' + md.slice(1) : ''), big = chance(), n = big ? ri(Math.max(2, md.length - 1), 7) : -ri(1, 4), v = Number(`${A}e${n}`); return { q: T`Write $${M(parseFloat(A))} \times 10^{${n}}$ as an ordinary number.`, a: v, w: [Number(`${A}e${n + 1}`), Number(`${A}e${n - 1}`), Number(`${A}e${-n}`)], s: n > 0 ? T`Move the decimal point ${n} places to the right: <b>${F(v)}</b>.` : n === -1 ? T`Move the decimal point 1 place to the left: <b>${F(v)}</b>.` : T`Move the decimal point ${-n} places to the left: <b>${F(v)}</b>.` }; },
    () => { const a = ri(2, 9), b = ri(2, 9), m = ri(2, 8), n = ri(2, 8), P = a * b, big = P >= 10, mant = big ? P / 10 : P, e = m + n + (big ? 1 : 0), S = (x, k) => `$${M(x)} \\times 10^{${k}}$`; return { q: T`Calculate $(${a} \times 10^{${m}}) \times (${b} \times 10^{${n}})$. Give the answer in scientific notation.`, a: S(mant, e), w: [S(mant, m * n + (big ? 1 : 0)), S(mant, big ? m + n : m + n + 1), S(a + b >= 10 ? (a + b) / 10 : a + b, e), S(mant, e + 2)], only: 'mc', s: T`Multiply the front numbers and add the exponents: $${a} \times ${b} = ${P}$ and $10^{${m}} \times 10^{${n}} = 10^{${m + n}}$. ${big ? T`Since ${P} is not less than 10, rewrite $${P} \times 10^{${m + n}} = ${M(mant)} \times 10^{${e}}$.` : T`Answer: $${P} \times 10^{${e}}$.`}` }; },
    () => { const [a, b] = pick([[8, 2], [9, 3], [6, 2], [8, 4], [6, 3], [3, 6], [2, 8], [4, 8], [9, 6], [5, 2], [7, 2], [3, 4], [9, 4], [1, 2], [1, 4], [2, 5], [3, 5], [7, 5]]), r = a / b, m = ri(6, 12), n = ri(2, m - 2), small = r < 1, mant = small ? r * 10 : r, e = m - n - (small ? 1 : 0), S = (x, k) => `$${M(x)} \\times 10^{${k}}$`; return { q: T`Calculate $\dfrac{${a} \times 10^{${m}}}{${b} \times 10^{${n}}}$. Give the answer in scientific notation.`, a: S(mant, e), w: [S(mant, m + n), S(mant, small ? m - n : m - n - 1), S(b / a >= 1 ? b / a : (b / a) * 10, e), S(mant, e + 1)], only: 'mc', s: T`Divide the front numbers and subtract the exponents: $${a} \div ${b} = ${M(r)}$ and $10^{${m} - ${n}} = 10^{${m - n}}$.${small ? T` Since ${M(r)} is less than 1, rewrite $${M(r)} \times 10^{${m - n}} = ${M(mant)} \times 10^{${e}}$.` : ''}` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'ratio', title: 'Ratio, Rates & Proportion',
  blurb: 'Simplifying ratios, sharing in a ratio, direct and inverse proportion, map scales and speed.',
  lesson: () => T`
<p>A <b>ratio</b> $a : b$ compares two quantities. Like fractions, ratios can be simplified by dividing both parts by their GCF: $18 : 24 = 3 : 4$.</p>
<h3>Sharing in a ratio</h3>
${Ex(T`<p>Share 60 sweets in the ratio $2 : 3$.</p><ol><li>Total parts: $2 + 3 = 5$.</li><li>One part: $60 \div 5 = 12$.</li><li>Shares: $2 \times 12 = 24$ and $3 \times 12 = 36$.</li></ol>`)}
<h3>Rates and unit rates</h3>
<p>A <b>rate</b> compares quantities with different units: km per hour, dollars per kg. Finding the value of <b>one</b> unit (the unit rate) solves most problems.</p>
${Fm(T`\text{speed} = \frac{\text{distance}}{\text{time}} \qquad \text{distance} = \text{speed} \times \text{time}`)}
<h3>Direct and inverse proportion</h3>
${Key(T`<ul><li><b>Direct:</b> both quantities grow together, $y = kx$. Twice as many notebooks cost twice as much.</li><li><b>Inverse:</b> one grows as the other shrinks, $xy = k$. Twice as many workers finish in half the time.</li></ul>`)}
${Ex(T`<p>6 workers build a wall in 10 days. The job is $6 \times 10 = 60$ worker-days, so 4 workers need $60 \div 4 = 15$ days.</p>`)}
<h3>Map scales</h3>
<p>A scale of $1 : 50{,}000$ means 1 cm on the map is $50{,}000$ cm $= 500$ m $= 0.5$ km in reality.</p>
${Tip(T`<p>Before comparing, make the units the same. And check whether a situation is direct or inverse — "more workers, fewer days" is inverse.</p>`)}`,
  gens: [
    () => { const g = ri(2, 12); let a, b; do { a = ri(1, 9); b = ri(1, 9); } while (a === b || gcd(a, b) !== 1); return { q: T`Simplify the ratio ${a * g} : ${b * g}.`, a: `${a} : ${b}`, alt: [`${a}:${b}`], h: T`Type the ratio like 3:4.`, w: [`${b} : ${a}`, `${a * 2} : ${b * 2}`, `${a + 1} : ${b + 1}`], s: T`Divide both parts by their GCF, ${g}: ${a * g} : ${b * g} = ${a} : ${b}.` }; },
    () => { const [p1, p2] = pick([[T`Ali`, T`Budi`], [T`Siti`, T`Rina`], [T`Sam`, T`Kim`]]); let a, b; do { a = ri(1, 7); b = ri(1, 7); } while (a === b || gcd(a, b) !== 1); const k = ri(3, 15), tot = (a + b) * k, first = chance(), x = first ? a : b; return { q: T`${F(tot)} marbles are shared between ${p1} and ${p2} in the ratio ${a} : ${b}. How many marbles does ${first ? p1 : p2} get?`, a: x * k, w: [(first ? b : a) * k, tot / 2, tot / x], s: T`There are $${a} + ${b} = ${a + b}$ parts, each worth $${tot} \div ${a + b} = ${k}$. ${first ? p1 : p2} gets $${x} \times ${k} = ${x * k}$.` }; },
    () => { const unit = ri(3, 15), n1 = ri(2, 9); let n2; do { n2 = ri(2, 15); } while (n2 === n1); const item = pick([T`notebooks`, T`pens`, T`mangoes`, T`tickets`]); return { q: T`${n1} ${item} cost ${unit * n1} dollars. At the same price each, how much do ${n2} ${item} cost?`, a: unit * n2, u: T`dollars`, w: [unit * n1 + n2 - n1, unit * n1 * n2, unit * (n2 + 1)], s: T`One costs $${unit * n1} \div ${n1} = ${unit}$ dollars, so ${n2} cost $${n2} \times ${unit} = ${unit * n2}$ dollars.` }; },
    () => { let w1, d1, w2; do { w1 = ri(3, 12); d1 = ri(4, 20); w2 = ri(2, 15); } while (w2 === w1 || (w1 * d1) % w2 !== 0); const d2 = (w1 * d1) / w2; return { q: T`${w1} workers can build a wall in ${d1} days. Working at the same rate, how many days would ${w2} workers take?`, a: d2, u: T`days`, w: [(d1 * w2) / w1, d1 + w1 - w2, d1], s: T`This is inverse proportion. The job takes $${w1} \times ${d1} = ${w1 * d1}$ worker-days, so ${w2} workers need $${w1 * d1} \div ${w2} = ${d2}$ days.` }; },
    () => { const sc = pick([25000, 50000, 100000, 200000, 250000]), cm = ri(2, 12), km = (cm * sc) / 100000; return { q: T`A map has a scale of 1 : ${F(sc)}. Two towns are ${cm} cm apart on the map. How far apart are they in reality, in kilometres?`, a: km, u: 'km', w: [km * 10, km / 10, km * 100], s: T`Real distance $= ${cm} \times ${M(sc)} = ${M(cm * sc)}$ cm. Since $1 \text{ km} = 100{,}000 \text{ cm}$, that is $${M(km)}$ km.` }; },
    () => { const v = ri(8, 20) * 5, t = pick([0.5, 1.5, 2, 2.5, 3, 4]), d = v * t, k = ri(0, 2); if (k === 0) return { q: T`A car travels ${F(d)} km in ${F(t)} hours. What is its average speed?`, a: v, u: 'km/h', w: [d * t, d + t, d / (t + 1)], s: T`$\text{speed} = \frac{\text{distance}}{\text{time}} = \frac{${M(d)}}{${M(t)}} = ${v}$ km/h.` }; if (k === 1) return { q: T`A bus travels at ${v} km/h for ${F(t)} hours. How far does it travel?`, a: d, u: 'km', w: [v / t, v + t, v * (t + 1)], s: T`$\text{distance} = \text{speed} \times \text{time} = ${v} \times ${M(t)} = ${M(d)}$ km.` }; return { q: T`How many hours does it take to travel ${F(d)} km at ${v} km/h?`, a: t, u: T`hours`, w: [v / d, t * 60, t + 0.5, d * v], s: T`$\text{time} = \frac{\text{distance}}{\text{speed}} = \frac{${M(d)}}{${v}} = ${M(t)}$ hours.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'algebra-expr', title: 'Algebraic Expressions',
  blurb: 'Like terms, expanding brackets, factorising, substitution and special products.',
  lesson: () => T`
<p>In the expression $5x^2 - 3xy + 7$: the <b>terms</b> are $5x^2$, $-3xy$ and $7$; the <b>coefficients</b> are 5 and $-3$; 7 is the <b>constant</b>. <b>Like terms</b> have exactly the same variables and powers ($4ab$ and $-ab$ are like; $x^2$ and $x$ are not).</p>
<h3>Simplifying</h3>
<p>Combine like terms by adding their coefficients: $6a + 2b - 4a + 5b = 2a + 7b$.</p>
<h3>Expanding brackets</h3>
${Key(T`<p><b>Distributive law:</b> $a(b + c) = ab + ac$. Multiply <i>every</i> term inside by the term outside.</p><p><b>Two brackets (FOIL):</b> $(x + a)(x + b) = x^2 + (a + b)x + ab$.</p>`)}
${Ex(T`<p>$(x + 3)(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$</p>`)}
<h3>Special products</h3>
${Fm(T`(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2`)}
<h3>Factorising</h3>
<p>Factorising is expanding in reverse. Take out the greatest common factor: $12x - 18 = 6(2x - 3)$.</p>
<h3>Substitution</h3>
<p>Replace each letter with its value, using brackets for negatives: if $x = -2$, then $3x^2 - x = 3(-2)^2 - (-2) = 12 + 2 = 14$.</p>
${Tip(T`<p>$(x + 4)^2 \ne x^2 + 16$. The middle term $2 \cdot 4 \cdot x = 8x$ is easy to forget.</p>`)}`,
  gens: [
    () => { const v1 = pick(['x', 'a', 'm']), v2 = { x: 'y', a: 'b', m: 'n' }[v1]; let a, b, c, d; do { a = rnz(-9, 9); b = rnz(-9, 9); c = rnz(-9, 9); d = rnz(-9, 9); } while (a + c === 0 || b + d === 0); const A = (p, q) => `$${terms([[p, v1], [q, v2]])}$`; return { q: T`Simplify $${terms([[a, v1], [b, v2], [c, v1], [d, v2]])}$.`, a: A(a + c, b + d), w: [A(a - c, b + d), A(a + c, b - d), `$${terms([[a + b + c + d, v1 + v2]])}$`, A(b + d, a + c)], s: T`Collect like terms: $(${M(a)} ${sg(c)})${v1} + (${M(b)} ${sg(d)})${v2} = ${terms([[a + c, v1], [b + d, v2]])}$.` }; },
    () => { const a = pick([-1, 1]) * ri(2, 9), b = rnz(-9, 9), c = rnz(-12, 12); return { q: T`Expand $${a}(${lin(b, c)})$.`, a: `$${lin(a * b, a * c)}$`, w: [`$${lin(a * b, c)}$`, `$${lin(a + b, a * c)}$`, `$${lin(a * b, -a * c)}$`, `$${lin(b, a * c)}$`], s: T`Multiply every term inside the bracket by ${pn(a)}: $${pn(a)} \times ${xt(b)} = ${xt(a * b)}$ and $${pn(a)} \times ${pn(c)} = ${M(a * c)}$. Result: $${lin(a * b, a * c)}$.` }; },
    () => { const a = rnz(-5, 5), b = rnz(-9, 9), c = ri(-12, 12), k = rnz(-4, 4), v = a * k * k + b * k + c; return { q: T`Evaluate $${poly([a, b, c])}$ when $x = ${k}$.`, a: v, neg: true, w: [-a * k * k + b * k + c, 2 * a * k + b * k + c, a * k * k - b * k + c], s: T`Substitute, using brackets: $${M(a)}(${M(k)})^2 ${sg(b)}(${M(k)}) ${sg(c)} = ${M(a * k * k)} ${sg(b * k)} ${sg(c)} = ${M(v)}$.` }; },
    () => { const g = ri(2, 9), v = pick(['x', 'y', 'a']); let p, q; do { p = ri(1, 9); q = rnz(-12, 12); } while (gcd(p, q) !== 1); return { q: T`Factorise completely: $${lin(g * p, g * q, v)}$.`, a: `$${g}(${lin(p, q, v)})$`, w: [`$${g}(${lin(p, g * q, v)})$`, `$${g}(${lin(p, -q, v)})$`, `$${g + 1}(${lin(p, q, v)})$`, `$${g * p}(${lin(1, q, v)})$`], s: T`The GCF of ${g * p} and ${Math.abs(g * q)} is ${g}: $${lin(g * p, g * q, v)} = ${g}(${lin(p, q, v)})$. Check by expanding.` }; },
    () => { const a = rnz(-9, 9), b = rnz(-9, 9); return { q: T`Expand and simplify $(x ${sg(a)})(x ${sg(b)})$.`, a: `$${poly([1, a + b, a * b])}$`, w: [`$${poly([1, 0, a * b])}$`, `$${poly([1, a * b, a + b])}$`, `$${poly([1, a - b, a * b])}$`, `$${poly([1, a + b, -a * b])}$`], s: T`FOIL: $${terms([[1, 'x^2'], [b, 'x'], [a, 'x'], [a * b, '']])} = ${poly([1, a + b, a * b])}$.` }; },
    () => { const a = rnz(-9, 9); return { q: T`Expand $(x ${sg(a)})^2$.`, a: `$${poly([1, 2 * a, a * a])}$`, w: [`$${poly([1, 0, a * a])}$`, `$${poly([1, a, a * a])}$`, `$${poly([1, 2 * a, 2 * a])}$`, `$${poly([1, 2 * a, -a * a])}$`], s: T`$(x ${sg(a)})^2 = (x ${sg(a)})(x ${sg(a)}) = ${terms([[1, 'x^2'], [a, 'x'], [a, 'x'], [a * a, '']])} = ${poly([1, 2 * a, a * a])}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'linear-eq', title: 'Linear Equations',
  blurb: 'Solving one-variable equations with brackets, fractions and unknowns on both sides; word problems.',
  lesson: () => T`
<p>An equation says two expressions are equal. Think of a balance: whatever you do to one side, do to the other, and it stays balanced. The aim is to get the unknown alone.</p>
${Key(T`<p>Undo operations in reverse order using <b>inverse operations</b>: addition ↔ subtraction, multiplication ↔ division.</p>`)}
${Ex(T`<p>Solve $5x - 7 = 2x + 11$.</p><ol><li>Subtract $2x$ from both sides: $3x - 7 = 11$.</li><li>Add 7: $3x = 18$.</li><li>Divide by 3: $x = 6$.</li></ol><p>Check: $5(6) - 7 = 23$ and $2(6) + 11 = 23$ ✓</p>`)}
<h3>Brackets and fractions</h3>
<p>Expand brackets first (or divide both sides by the number outside). Clear fractions by multiplying every term by the common denominator:</p>
${Fm(T`\frac{x}{3} + 4 = 10 \;\Rightarrow\; \frac{x}{3} = 6 \;\Rightarrow\; x = 18`)}
<h3>Word problems</h3>
<ol><li>Choose a letter for the unknown and say what it stands for.</li><li>Translate the sentences into an equation.</li><li>Solve, then check the answer makes sense in the story.</li></ol>
${Ex(T`<p>The sum of three consecutive integers is 72. Let them be $n$, $n + 1$, $n + 2$: $3n + 3 = 72$, so $n = 23$. The integers are 23, 24, 25.</p>`)}
${Tip(T`<p>When you move a term across the equals sign, its sign changes — because you are really subtracting (or adding) it on both sides.</p>`)}`,
  gens: [
    () => { const x = rnz(-10, 12), a = pick([-1, 1]) * ri(2, 9), b = rnz(-20, 20), c = a * x + b; return { q: T`Solve $${lin(a, b)} = ${c}$.`, a: x, neg: true, h: T`Type the value of x.`, w: [(c + b) / a, (c - b) * a, -x, c - b].filter(Number.isInteger), s: T`${moveTxt(b)}: $${xt(a)} = ${c - b}$. Divide by ${M(a)}: $x = ${x}$.` }; },
    () => { const x = rnz(-9, 9); let a, c; do { a = rnz(-9, 9); c = rnz(-9, 9); } while (a === c); const b = rnz(-15, 15), d = (a - c) * x + b; return { q: T`Solve $${lin(a, b)} = ${lin(c, d)}$.`, a: x, neg: true, w: [-x, (d + b) / (a - c), (d - b) / (a + c), x + 1].filter(Number.isInteger), s: T`Collect $x$ terms on the left and numbers on the right: $${xt(a - c)} = ${M(d - b)}$, so $x = ${x}$.` }; },
    () => { const x = rnz(-9, 12), a = ri(2, 9), b = rnz(-9, 9), c = a * (x + b); return { q: T`Solve $${a}(x ${sg(b)}) = ${c}$.`, a: x, neg: true, w: [c / a + b, c - b, (c - b) / a].filter(Number.isInteger), s: T`Divide both sides by ${a}: $x ${sg(b)} = ${c / a}$. Then $x = ${c / a} ${sg(-b)} = ${x}$.` }; },
    () => { const a = ri(2, 9), k = rnz(-8, 10), x = a * k, b = rnz(-10, 10), c = k + b; return { q: T`Solve $\frac{x}{${a}} ${sg(b)} = ${c}$.`, a: x, neg: true, w: [k, (c + b) * a, c * a - b], s: T`${moveTxt(b)}: $\frac{x}{${a}} = ${k}$. Multiply both sides by ${a}: $x = ${x}$.` }; },
    () => { const n = ri(5, 60), S = 3 * n + 3, big = chance(); return { q: big ? T`The sum of three consecutive integers is ${S}. What is the largest of them?` : T`The sum of three consecutive integers is ${S}. What is the smallest of them?`, a: big ? n + 2 : n, w: [n + 1, big ? n : n + 2, S / 3 + 2], s: T`Call them $n$, $n + 1$, $n + 2$. Then $3n + 3 = ${S}$, so $3n = ${S - 3}$ and $n = ${n}$. The integers are ${n}, ${n + 1}, ${n + 2}.` }; },
    () => { const b = ri(5, 30), k = ri(2, 15), S = 2 * b + k, [p1, p2] = pick([[T`Andi`, T`Budi`], [T`Maya`, T`Nina`], [T`Omar`, T`Pablo`]]); return { q: T`${p1} is ${k} years older than ${p2}. The sum of their ages is ${S}. How old is ${p2}?`, a: b, u: T`years`, w: [b + k, (S + k) / 2, S - k].filter(Number.isInteger), s: T`Let ${p2}'s age be $x$. Then $x + (x + ${k}) = ${S}$, so $2x = ${S - k}$ and $x = ${b}$.` }; },
    () => { const x = ri(2, 30), a = ri(2, 9), b = ri(1, 20), c = a * x - b; return { q: T`I think of a number, multiply it by ${a}, then subtract ${b}. The result is ${c}. What was my number?`, a: x, w: [(c - b) / a, c / a + b, c + b].filter(Number.isInteger), s: T`$${a}x - ${b} = ${c}$, so $${a}x = ${c + b}$ and $x = ${x}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'inequalities', title: 'Linear Inequalities',
  blurb: 'Inequality symbols, number lines, solving inequalities and the sign-flip rule.',
  lesson: () => T`
<p>An <b>inequality</b> compares two expressions: $\lt$ (less than), $\gt$ (greater than), $\le$ (less than or equal), $\ge$ (greater than or equal). Its solution is usually a whole range of numbers.</p>
<p>On a number line, $x \gt 2$ is drawn with an <b>open</b> circle at 2 (2 is not included) and an arrow to the right; $x \le 2$ uses a <b>filled</b> circle and an arrow to the left.</p>
<h3>Solving</h3>
<p>Solve exactly like an equation — add, subtract, multiply or divide both sides — with one extra rule:</p>
${Key(T`<p>When you <b>multiply or divide by a negative number</b>, reverse the inequality sign.</p>$$-3x \gt 12 \;\Rightarrow\; x \lt -4$$`)}
<p>Why? $2 \lt 5$, but multiplying both sides by $-1$ gives $-2$ and $-5$, and $-2 \gt -5$.</p>
${Ex(T`<p>Solve $7 - 2x \ge 1$.</p><ol><li>Subtract 7: $-2x \ge -6$.</li><li>Divide by $-2$ and flip: $x \le 3$.</li></ol>`)}
<h3>Double inequalities</h3>
<p>Do the same operation to all three parts: $-1 \lt 2x + 3 \le 9 \Rightarrow -4 \lt 2x \le 6 \Rightarrow -2 \lt x \le 3$. The integer solutions are $-1, 0, 1, 2, 3$.</p>
${Tip(T`<p>"Smallest integer with $x \gt 4$" is 5, not 4 — a strict inequality excludes its endpoint.</p>`)}`,
  gens: [
    () => { const k = rnz(-8, 10), a = ri(2, 9), b = rnz(-15, 15), c = a * k + b, s = pick(['lt', 'gt', 'le', 'ge']), X = (sy, v) => `$x ${SYM[sy]} ${M(v)}$`, alt = (c + b) / a; return { q: T`Solve $${lin(a, b)} ${SYM[s]} ${c}$.`, a: X(s, k), w: [X(FLIP[s], k), X(s, -k), X(FLIP[s], -k), Number.isInteger(alt) && alt !== k ? X(s, alt) : X(s, k + 1)], s: T`${moveTxt(b)}: $${xt(a)} ${SYM[s]} ${c - b}$. Divide by ${a} (positive, so the sign stays): $x ${SYM[s]} ${k}$.` }; },
    () => { const k = rnz(-8, 10), a = -ri(2, 9), b = rnz(-15, 15), c = a * k + b, s = pick(['lt', 'gt', 'le', 'ge']), X = (sy, v) => `$x ${SYM[sy]} ${M(v)}$`; return { q: T`Solve $${lin(a, b)} ${SYM[s]} ${c}$.`, a: X(FLIP[s], k), w: [X(s, k), X(FLIP[s], -k), X(s, -k)], s: T`${moveTxt(b)}: $${xt(a)} ${SYM[s]} ${c - b}$. Divide by ${a}. It is <b>negative</b>, so reverse the sign: $x ${SYM[FLIP[s]]} ${k}$.` }; },
    () => { const a = ri(2, 9), b = rnz(-15, 15), k = rnz(-8, 10), strict = chance(), up = chance(), s = up ? (strict ? 'gt' : 'ge') : (strict ? 'lt' : 'le'), c = a * k + b, ans = up ? (strict ? k + 1 : k) : (strict ? k - 1 : k); const ineq = `${lin(a, b)} ${SYM[s]} ${c}`, why = up ? (strict ? T`The smallest integer greater than ${k} is <b>${ans}</b>.` : T`The smallest integer greater than or equal to ${k} is <b>${ans}</b>.`) : (strict ? T`The largest integer less than ${k} is <b>${ans}</b>.` : T`The largest integer less than or equal to ${k} is <b>${ans}</b>.`); return { q: up ? T`What is the smallest integer $x$ that satisfies $${ineq}$?` : T`What is the largest integer $x$ that satisfies $${ineq}$?`, a: ans, neg: true, w: [strict ? k : up ? k + 1 : k - 1, up ? k - 1 : k + 1, -ans], s: T`Solving gives $x ${SYM[s]} ${k}$. ${why}` }; },
    () => { const a = ri(2, 5), b = rnz(-10, 10), x1 = ri(-6, 3), x2 = x1 + ri(2, 7), lo = a * x1 + b, hi = a * x2 + b, [s1, s2] = pick([['lt', 'le'], ['le', 'lt'], ['le', 'le'], ['lt', 'lt']]); const ints = range(s1 === 'lt' ? x1 + 1 : x1, s2 === 'lt' ? x2 - 1 : x2); return { q: T`How many integers $x$ satisfy $${lo} ${SYM[s1]} ${lin(a, b)} ${SYM[s2]} ${hi}$?`, a: ints.length, w: [ints.length + 1, ints.length - 1, ints.length + 2], s: T`${moveTxt(b, T`every part`)}, then divide by ${a}: $${x1} ${SYM[s1]} x ${SYM[s2]} ${x2}$. The integers are ${ints.join(LS())}, so there are <b>${ints.length}</b>.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'sets', title: 'Sets & Venn Diagrams',
  blurb: 'Set notation, subsets, union, intersection, complement and counting with Venn diagrams.',
  lesson: () => T`
<p>A <b>set</b> is a well-defined collection of objects, its <b>elements</b>. We write $A = \{2, 4, 6, 8\}$ and $4 \in A$ ("4 is an element of A"), $5 \notin A$. $n(A)$ is the number of elements; here $n(A) = 4$. The <b>empty set</b> $\varnothing$ has no elements; the <b>universal set</b> $U$ contains everything under discussion.</p>
${Fig(vennSvg(), T`A Venn diagram: each region is a different combination of "in A" and "in B".`)}
${Tbl([T`Notation`, T`Meaning`, T`Example with A = {1,2,3,4}, B = {3,4,5}`], [[T`$A \cap B$`, T`intersection: in both`, T`$\{3, 4\}$`], [T`$A \cup B$`, T`union: in either (or both)`, T`$\{1, 2, 3, 4, 5\}$`], [T`$A - B$`, T`in A but not in B`, T`$\{1, 2\}$`], [T`$A'$`, T`complement: in U but not in A`, T`everything else in U`], [T`$A \subseteq B$`, T`every element of A is in B`, T`$\{3\} \subseteq B$`]])}
${Key(T`$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$<p>We subtract the overlap because it was counted twice. A set with $n$ elements has $2^n$ subsets (including $\varnothing$ and the set itself).</p>`)}
${Ex(T`<p>In a class of 35, 20 play football, 18 play basketball and 8 play both. Then $n(F \cup B) = 20 + 18 - 8 = 30$ play at least one sport, and $35 - 30 = 5$ play neither.</p>`)}
${Tip(T`<p>"How many play only football?" is $20 - 8 = 12$, not 20. Fill in the overlap of a Venn diagram first, then work outwards.</p>`)}`,
  gens: [
    () => { const both = ri(3, 10), a = ri(both + 3, 20), b = ri(both + 3, 20), N = a + b - both + ri(1, 10), neither = N - (a + b - both); return chance() ? { q: T`In a class of ${N} students, ${a} like football, ${b} like basketball and ${both} like both. How many students like neither sport?`, a: neither, w: [N - a - b, N - (a + b + both), a + b - both, neither + both], s: T`$n(F \cup B) = ${a} + ${b} - ${both} = ${a + b - both}$. Neither: $${N} - ${a + b - both} = ${neither}$.` } : { q: T`In a group, ${a} people speak English, ${b} speak French and ${both} speak both. How many speak at least one of the two languages?`, a: a + b - both, w: [a + b, a + b - 2 * both, a + b + both], s: T`$n(E \cup F) = n(E) + n(F) - n(E \cap F) = ${a} + ${b} - ${both} = ${a + b - both}$.` }; },
    () => { const n = ri(2, 6), els = sample(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'p', 'q', 'r', 's'], n).sort(), proper = chance(); const setA = `A = \\{${els.join(LS())}\\}`; return { q: proper ? T`How many <b>proper</b> subsets does $${setA}$ have?` : T`How many subsets does $${setA}$ have?`, a: proper ? 2 ** n - 1 : 2 ** n, w: [2 * n, n * n, proper ? 2 ** n : 2 ** n - 1, 2 ** (n - 1)], s: proper ? T`A set with ${n} elements has $2^{${n}} = ${2 ** n}$ subsets; leaving out $A$ itself gives ${2 ** n - 1} proper subsets.` : T`A set with ${n} elements has $2^{${n}} = ${2 ** n}$ subsets.` }; },
    () => { let A, B, I; do { A = sample(range(1, 15), ri(4, 6)).sort((x, y) => x - y); B = sample(range(1, 15), ri(4, 6)).sort((x, y) => x - y); I = A.filter(x => B.includes(x)); } while (I.length < 1 || I.length === A.length || I.length === B.length); const U = [...new Set([...A, ...B])].sort((x, y) => x - y), AmB = A.filter(x => !B.includes(x)), BmA = B.filter(x => !A.includes(x)), S = arr => `$${setT(arr)}$`, op = pick(['cap', 'cup', 'minus']), ans = { cap: I, cup: U, minus: AmB }[op], opT = { cap: T`\cap`, cup: T`\cup`, minus: '-' }[op], mean = { cap: T`elements in both sets`, cup: T`elements in either set`, minus: T`elements of A that are not in B` }[op]; return { q: T`Let $A = ${setT(A)}$ and $B = ${setT(B)}$. Find $A ${opT} B$.`, a: S(ans), w: [S(I), S(U), S(AmB), S(BmA)], s: T`$A ${opT} B$ contains the ${mean}: $${setT(ans)}$.` }; },
    () => { const N = ri(10, 15), A = sample(range(1, N), ri(3, 7)).sort((x, y) => x - y); return { q: T`$U = \{1, 2, 3, \ldots, ${N}\}$ and $A = ${setT(A)}$. How many elements are in $A'$, the complement of $A$?`, a: N - A.length, w: [A.length, N, N - A.length + 1], s: T`$A'$ contains the elements of $U$ not in $A$: $n(A') = n(U) - n(A) = ${N} - ${A.length} = ${N - A.length}$.` }; },
    () => { const k = ri(12, 40), [kind, f] = pick([[T`prime numbers`, isPrime], [T`even numbers`, x => x % 2 === 0], [T`multiples of 3`, x => x % 3 === 0], [T`perfect squares`, x => Number.isInteger(Math.sqrt(x))]]), els = range(1, k - 1).filter(f); return { q: T`$A$ is the set of positive integers less than ${k} that are ${kind}. Find $n(A)$.`, a: els.length, w: [els.length + 1, els.length - 1, k - els.length], s: T`$A = ${setT(els)}$, so $n(A) = ${els.length}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'linear-functions', title: 'Linear Functions & Graphs',
  blurb: 'Coordinates, gradient, intercepts, equations of lines, and parallel and perpendicular lines.',
  lesson: () => T`
<p>A <b>linear function</b> has a straight-line graph. In <b>gradient–intercept form</b></p>
${Fm(T`y = mx + c`)}
<p>$m$ is the <b>gradient</b> (slope): how much $y$ changes when $x$ increases by 1. $c$ is the <b>$y$-intercept</b>, where the line crosses the $y$-axis. In function notation we write $f(x) = mx + c$, so $f(3)$ means "the value when $x = 3$".</p>
<h3>Gradient from two points</h3>
${Fm(T`m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}`)}
${Ex(T`<p>Through $(1, 2)$ and $(4, 11)$: $m = \frac{11 - 2}{4 - 1} = 3$. Substitute $(1, 2)$ into $y = 3x + c$: $2 = 3 + c$, so $c = -1$ and the line is $y = 3x - 1$.</p>`)}
<h3>Intercepts and other forms</h3>
<p>Set $x = 0$ to find the $y$-intercept and $y = 0$ to find the $x$-intercept. A line may be written $ax + by = c$; rearrange to $y = -\frac{a}{b}x + \frac{c}{b}$ to read off the gradient. Through a point $(x_1, y_1)$ with gradient $m$: $y - y_1 = m(x - x_1)$.</p>
${Key(T`<ul><li><b>Parallel</b> lines have equal gradients: $m_1 = m_2$.</li><li><b>Perpendicular</b> lines have gradients that multiply to $-1$: $m_1 m_2 = -1$, so $m_2 = -\frac{1}{m_1}$.</li></ul>`)}
${Tip(T`<p>Keep the order consistent: if you use $y_2 - y_1$ on top, use $x_2 - x_1$ underneath. A positive gradient rises to the right; a negative one falls.</p>`)}`,
  gens: [
    () => { let x1, y1, x2, y2; do { x1 = ri(-8, 8); y1 = ri(-8, 8); x2 = ri(-8, 8); y2 = ri(-8, 8); } while (x1 === x2 || y1 === y2); const dy = y2 - y1, dx = x2 - x1; return { q: T`Find the gradient of the line through $${pt(x1, y1)}$ and $${pt(x2, y2)}$.`, ...FR(dy, dx), h: hFrac, w: [fx(dx, dy), fx(-dy, dx), fx(y2 + y1, x2 + x1 || 1)], s: T`$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{${M(y2)} - ${pn(y1)}}{${M(x2)} - ${pn(x1)}} = \frac{${dy}}{${dx}}${gcd(dy, dx) > 1 || dx < 0 ? T` = ${frT(dy, dx)}` : ''}$.` }; },
    () => { const m = rnz(-7, 7), c = ri(-12, 12), k = rnz(-6, 6); return { q: T`Given $f(x) = ${lin(m, c)}$, find $f(${k})$.`, a: m * k + c, neg: true, w: [m + k + c, m * k - c, -m * k + c], s: T`$f(${k}) = ${M(m)}(${M(k)}) ${sg(c)} = ${m * k + c}$.` }; },
    () => { const b = pick([-1, 1]) * ri(1, 6), a = rnz(-9, 9), y0 = rnz(-8, 8), c = b * y0, eq = `${terms([[a, 'x'], [b, 'y']])} = ${c}`; if (chance()) return { q: T`What is the $y$-intercept of the line $${eq}$?`, a: y0, neg: true, w: [c, -y0, a, y0 + b].filter(v => v !== y0), s: T`Put $x = 0$: $${xt(b, 'y')} = ${c}$, so $y = ${y0}$.` }; return { q: T`What is the gradient of the line $${eq}$?`, ...FR(-a, b), h: hFrac, w: [fx(a, b), fx(-b, a), fx(b, a)], s: T`Make $y$ the subject: $y = \frac{${M(-a)}x ${sg(c)}}{${M(b)}}$. The gradient is the coefficient of $x$: $${frT(-a, b)}$.` }; },
    () => { const m = rnz(-5, 5), c = rnz(-9, 9); let x1, x2; do { x1 = ri(-4, 4); x2 = ri(-4, 4); } while (x1 === x2); const Y = x => m * x + c, L = (mm, cc) => `$y = ${lin(mm, cc)}$`; return { q: T`Which equation describes the line through $${pt(x1, Y(x1))}$ and $${pt(x2, Y(x2))}$?`, a: L(m, c), w: [L(-m, c), L(m, -c), L(c, m), L(m, c + m)], s: T`Gradient: $m = \frac{${Y(x2)} - ${pn(Y(x1))}}{${x2} - ${pn(x1)}} = ${m}$. Substitute $${pt(x1, Y(x1))}$ into $y = ${xt(m)} + c$: $c = ${Y(x1)} - ${pn(m * x1)} = ${c}$.` }; },
    () => { const [n, d] = frac(rnz(-6, 6), ri(1, 6)); return { q: T`A line has gradient $${frT(n, d)}$. What is the gradient of a line perpendicular to it?`, ...FR(-d, n), h: hFrac, w: [fx(n, d), fx(d, n), fx(-n, d)], s: T`Perpendicular gradients multiply to $-1$: $m_2 = -\frac{1}{m_1} = ${frT(-d, n)}$.` }; },
    () => { const m = rnz(-6, 6), r = rnz(-8, 8), c = -m * r; return { q: T`At what value of $x$ does the line $y = ${lin(m, c)}$ cross the $x$-axis?`, a: r, neg: true, w: [c, -r, m], s: T`On the $x$-axis, $y = 0$: $${xt(m)} ${sg(c)} = 0$, so $x = \frac{${M(-c)}}{${M(m)}} = ${r}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'systems', title: 'Systems of Linear Equations',
  blurb: 'Solving two equations in two unknowns by substitution and elimination; word problems.',
  lesson: () => T`
<p>A <b>system</b> of two linear equations in $x$ and $y$ asks for values that make <i>both</i> equations true. Graphically, the solution is the point where the two lines cross.</p>
<h3>Substitution</h3>
${Ex(T`$$\begin{cases} y = 2x - 1 \\ 3x + y = 14 \end{cases}$$<p>Substitute the first into the second: $3x + (2x - 1) = 14$, so $5x = 15$, $x = 3$, and $y = 2(3) - 1 = 5$. Solution: $(3, 5)$.</p>`)}
<h3>Elimination</h3>
${Ex(T`$$\begin{cases} 2x + 3y = 12 \\ 5x - 3y = 9 \end{cases}$$<p>Add the equations to eliminate $y$: $7x = 21$, so $x = 3$. Then $2(3) + 3y = 12$ gives $y = 2$.</p>`)}
${Key(T`<p>Multiply one or both equations first so a variable has equal (or opposite) coefficients, then subtract (or add) to eliminate it. Always check the answer in <b>both</b> original equations.</p>`)}
<h3>Special cases</h3>
<p>Parallel lines (same gradient, different intercepts) never meet: <b>no solution</b>. Identical lines give <b>infinitely many</b> solutions.</p>
<h3>Word problems</h3>
<p>Two unknowns need two facts. "A farm has 30 heads and 84 legs among chickens and cows": $c + h = 30$ and $4c + 2h = 84$.</p>
${Tip(T`<p>When subtracting equations, subtract <i>every</i> term, including the right-hand sides — sign slips here cause most errors.</p>`)}`,
  gens: [
    () => { let x, y, a1, b1, a2, b2; do { x = rnz(-6, 9); y = rnz(-6, 9); a1 = rnz(-5, 6); b1 = rnz(-5, 6); a2 = rnz(-5, 6); b2 = rnz(-5, 6); } while (a1 * b2 - a2 * b1 === 0); const c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y, ask = pick(['x', 'y', 'x + y']), val = { x, y, 'x + y': x + y }[ask]; return { q: T`Solve the system and give the value of $${ask}$: $$\begin{cases} ${terms([[a1, 'x'], [b1, 'y']])} = ${c1} \\ ${terms([[a2, 'x'], [b2, 'y']])} = ${c2} \end{cases}$$`, a: val, neg: true, w: [ask === 'x' ? y : x, -val, x - y, val + 1], s: T`Eliminate $x$: multiply the first equation by ${pn(a2)} and the second by ${pn(a1)}, then subtract: $${M(a2 * b1 - a1 * b2)}y = ${M(a2 * c1 - a1 * c2)}$, so $y = ${y}$. Substituting back gives $x = ${x}$${ask === 'x + y' ? T`, so $x + y = ${x + y}$` : ''}.` }; },
    () => { let x, y, a1, b1, a2, b2; do { x = rnz(-6, 9); y = rnz(-6, 9); a1 = rnz(-4, 5); b1 = rnz(-4, 5); a2 = rnz(-4, 5); b2 = rnz(-4, 5); } while (a1 * b2 - a2 * b1 === 0 || x === y); const c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y, P = (p, q) => `$${pt(p, q)}$`; return { q: T`Solve: $$\begin{cases} ${terms([[a1, 'x'], [b1, 'y']])} = ${c1} \\ ${terms([[a2, 'x'], [b2, 'y']])} = ${c2} \end{cases}$$`, a: P(x, y), v: [x, y], ord: true, h: T`Type the solution as x, y — for example 3, -2.`, w: [P(y, x), P(-x, y), P(x, -y)], s: T`Eliminating one variable gives $x = ${x}$ and $y = ${y}$. Check: $${M(a1)}(${x}) + ${pn(b1)}(${y}) = ${c1}$ ✓ and $${M(a2)}(${x}) + ${pn(b2)}(${y}) = ${c2}$ ✓` }; },
    () => { const pa = ri(6, 15), pc = ri(2, pa - 2), A = ri(10, 80), C = ri(10, 80), n = A + C, R = pa * A + pc * C; return { q: T`A cinema sold ${n} tickets for a total of ${F(R)} dollars. Adult tickets cost ${pa} dollars and child tickets cost ${pc} dollars. How many child tickets were sold?`, a: C, w: [A, Math.floor(n / 2), C + 5, C - 5], s: T`Let $a$ = adult and $c$ = child tickets: $a + c = ${n}$ and $${pa}a + ${pc}c = ${M(R)}$. Substitute $a = ${n} - c$: $${M(pa * n)} - ${pa - pc}c = ${M(R)}$, so $c = ${C}$.` }; },
    () => { const cows = ri(3, 30), hens = ri(3, 30), H = cows + hens, L = 4 * cows + 2 * hens, askC = chance(); return { q: askC ? T`A farm has chickens and cows. Together they have ${H} heads and ${L} legs. How many cows are there?` : T`A farm has chickens and cows. Together they have ${H} heads and ${L} legs. How many chickens are there?`, a: askC ? cows : hens, w: [askC ? hens : cows, Math.floor(L / 4), Math.floor(H / 2)], s: T`Let $c$ = cows and $h$ = chickens: $c + h = ${H}$ and $4c + 2h = ${L}$. Subtract twice the first equation: $2c = ${L - 2 * H}$, so $c = ${cows}$ and $h = ${hens}$.` }; },
    () => { const x = ri(10, 60), y = ri(2, x - 1), big = chance(); return { q: big ? T`Two numbers add up to ${x + y} and differ by ${x - y}. What is the larger number?` : T`Two numbers add up to ${x + y} and differ by ${x - y}. What is the smaller number?`, a: big ? x : y, w: [big ? y : x, (x + y) / 2, x - y], s: T`$a + b = ${x + y}$ and $a - b = ${x - y}$. Adding: $2a = ${2 * x}$, so $a = ${x}$ and $b = ${y}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'pythagoras', title: 'Pythagorean Theorem',
  blurb: 'Finding sides of right triangles, Pythagorean triples, distances and testing for right angles.',
  lesson: () => T`
<p>In a right triangle the longest side, opposite the right angle, is the <b>hypotenuse</b> $c$. The other two sides are the <b>legs</b> $a$ and $b$.</p>
${Fig(rightTriSvg())}
${Key(T`$$a^2 + b^2 = c^2$$<p>To find the hypotenuse, add the squares; to find a leg, subtract: $b = \sqrt{c^2 - a^2}$.</p>`)}
${Ex(T`<p>A 10 m ladder leans against a wall with its foot 6 m from the wall. Height reached: $\sqrt{10^2 - 6^2} = \sqrt{64} = 8$ m.</p>`)}
<h3>Pythagorean triples</h3>
<p>Whole-number solutions are worth remembering, together with their multiples: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$, $(7, 24, 25)$, and $(6, 8, 10)$, $(9, 12, 15)$, …</p>
<h3>Distance between two points</h3>
${Fm(T`d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`)}
<h3>The converse</h3>
<p>With $c$ the longest side: if $a^2 + b^2 = c^2$ the triangle is <b>right</b>; if $a^2 + b^2 \gt c^2$ it is <b>acute</b>; if $a^2 + b^2 \lt c^2$ it is <b>obtuse</b>.</p>
${Tip(T`<p>$\sqrt{a^2 + b^2} \ne a + b$. For legs 3 and 4 the hypotenuse is 5, not 7.</p>`)}`,
  gens: [
    () => { const [a, b, c] = pick(TRIPLES), k = c < 20 ? ri(1, 3) : 1, [p, q] = shuffle([k * a, k * b]); return { q: T`A right triangle has legs of ${p} cm and ${q} cm. How long is the hypotenuse?`, a: k * c, u: 'cm', w: [p + q, k * c + 1, Math.abs(p - q), k * c * 2], s: T`$c^2 = ${p}^2 + ${q}^2 = ${p * p} + ${q * q} = ${(k * c) ** 2}$, so $c = \sqrt{${(k * c) ** 2}} = ${k * c}$ cm.` }; },
    () => { const [a, b, c] = pick(TRIPLES), k = c < 20 ? ri(1, 3) : 1, sw = chance(), L = k * (sw ? a : b), X = k * (sw ? b : a); return { q: T`The hypotenuse of a right triangle is ${k * c} m and one leg is ${L} m. How long is the other leg?`, a: X, u: 'm', w: [k * c - L, Math.round(Math.sqrt((k * c) ** 2 + L * L)), X + 1], s: T`$b = \sqrt{c^2 - a^2} = \sqrt{${(k * c) ** 2} - ${L * L}} = \sqrt{${X * X}} = ${X}$ m.` }; },
    () => { const [a, b, c] = pick(TRIPLES.slice(0, 3)), k = c <= 5 ? ri(1, 2) : 1, x1 = ri(-6, 6), y1 = ri(-6, 6), sx = pick([-1, 1]), sy = pick([-1, 1]), [dx, dy] = chance() ? [k * a, k * b] : [k * b, k * a], x2 = x1 + sx * dx, y2 = y1 + sy * dy; return { q: T`Find the distance between $${pt(x1, y1)}$ and $${pt(x2, y2)}$.`, a: k * c, w: [dx + dy, k * c + 2, Math.abs(dx - dy)], s: T`$d = \sqrt{(${M(x2)} - ${pn(x1)})^2 + (${M(y2)} - ${pn(y1)})^2} = \sqrt{${dx * dx} + ${dy * dy}} = \sqrt{${(k * c) ** 2}} = ${k * c}$.` }; },
    () => { const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17], [7, 24, 25]]), sw = chance(), foot = sw ? a : b, up = sw ? b : a; return { q: T`A ${c} m ladder leans against a vertical wall. Its foot is ${foot} m from the base of the wall. How high up the wall does the ladder reach?`, a: up, u: 'm', w: [c - foot, c + foot, Math.round(Math.sqrt(c * c + foot * foot))], s: T`The ladder is the hypotenuse: $h = \sqrt{${c}^2 - ${foot}^2} = \sqrt{${c * c - foot * foot}} = ${up}$ m.` }; },
    () => { let a, b, c2; do { a = ri(2, 15); b = ri(2, 15); c2 = a * a + b * b; } while (Number.isInteger(Math.sqrt(c2))); const c = rnd(Math.sqrt(c2), 2); return { q: T`A right triangle has legs ${a} cm and ${b} cm. Find the hypotenuse, rounded to 2 decimal places.`, a: c, tol: 0.011, u: 'cm', w: [a + b, rnd(Math.sqrt(Math.abs(a * a - b * b)), 2), rnd(c + 0.5, 2)], s: T`$c = \sqrt{${a}^2 + ${b}^2} = \sqrt{${c2}} \approx ${c}$ cm.` }; },
    () => { const type = pick(['Right', 'Acute', 'Obtuse']); let s; if (type === 'Right') { const [a, b, c] = pick(TRIPLES.slice(0, 4)), k = c < 10 ? ri(1, 3) : 1; s = [k * a, k * b, k * c]; } else { do { s = [ri(3, 15), ri(3, 15), ri(3, 15)].sort((x, y) => x - y); } while (s[0] + s[1] <= s[2] || (s[0] ** 2 + s[1] ** 2 > s[2] ** 2 ? 'Acute' : s[0] ** 2 + s[1] ** 2 < s[2] ** 2 ? 'Obtuse' : 'Right') !== type); } const [a, b, c] = s, lhs = a * a + b * b, L = { Right: [T`Right triangle`, T`right`], Acute: [T`Acute triangle`, T`acute`], Obtuse: [T`Obtuse triangle`, T`obtuse`] }; return { q: T`A triangle has sides ${shuffle(s).join(LS())}. What kind of triangle is it?`, a: L[type][0], alt: [L[type][1], L[type][0]], w: [L.Right[0], L.Acute[0], L.Obtuse[0]], s: T`Compare with the longest side ${c}: $${a}^2 + ${b}^2 = ${lhs}$ and $${c}^2 = ${c * c}$. Since $${lhs} ${lhs === c * c ? '=' : lhs > c * c ? '\\gt' : '\\lt'} ${c * c}$, the triangle is <b>${L[type][1]}</b>.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'circles', title: 'Circles',
  blurb: 'Circumference, area, arcs and sectors, and angles in circles.',
  lesson: () => T`
${Fig(circleSvg(), T`Parts of a circle. The diameter is twice the radius: d = 2r.`)}
<p>The ratio of any circle's circumference to its diameter is the same number, $\pi \approx 3.14159\ldots$ (often approximated as $3.14$ or $\frac{22}{7}$).</p>
${Key(T`$$C = 2\pi r = \pi d \qquad\qquad A = \pi r^2$$`)}
${Ex(T`<p>Radius 5 cm: $C = 2\pi(5) = 10\pi \approx 31.4$ cm, and $A = \pi(5)^2 = 25\pi \approx 78.5$ cm². Leaving answers "in terms of $\pi$" keeps them exact.</p>`)}
<h3>Arcs and sectors</h3>
<p>A sector with central angle $\theta$ is the fraction $\frac{\theta}{360^\circ}$ of the whole circle:</p>
${Fm(T`\text{arc length} = \frac{\theta}{360^\circ} \times 2\pi r \qquad \text{sector area} = \frac{\theta}{360^\circ} \times \pi r^2`)}
<h3>Angles in circles</h3>
<ul><li>The angle at the centre is <b>twice</b> the angle at the circumference standing on the same arc.</li><li>An angle in a semicircle is $90^\circ$.</li><li>A tangent is perpendicular to the radius at the point of contact.</li></ul>
${Tip(T`<p>Check whether you are given the radius or the diameter. Using $d$ in $\pi r^2$ makes the area four times too big.</p>`)}`,
  gens: [
    () => { if (chance()) { const r = ri(2, 20), useD = chance(), C = rnd(2 * 3.14 * r, 2); return { q: useD ? T`Using $\pi \approx 3.14$, find the circumference of a circle with diameter ${2 * r} cm.` : T`Using $\pi \approx 3.14$, find the circumference of a circle with radius ${r} cm.`, a: C, tol: 0.01, u: 'cm', w: [rnd(3.14 * r * r, 2), rnd(3.14 * r, 2), rnd(4 * 3.14 * r, 2)], s: T`$C = ${useD ? T`\pi d = 3.14 \times ${2 * r}` : T`2\pi r = 2 \times 3.14 \times ${r}`} = ${M(C)}$ cm.` }; } const r = 7 * ri(1, 5); return { q: T`Using $\pi \approx \frac{22}{7}$, find the circumference of a circle with radius ${r} cm.`, a: (44 * r) / 7, u: 'cm', w: [(22 * r * r) / 7, (22 * r) / 7, (88 * r) / 7], s: T`$C = 2\pi r = 2 \times \frac{22}{7} \times ${r} = ${(44 * r) / 7}$ cm.` }; },
    () => { const r = ri(2, 15), useD = chance(0.3); return { q: useD ? T`Find the area of a circle with diameter ${2 * r} cm. Leave your answer in terms of $\pi$.` : T`Find the area of a circle with radius ${r} cm. Leave your answer in terms of $\pi$.`, ...PI(r * r), u: 'cm²', h: hPi, w: [pix(2 * r), pix(4 * r * r), pix(r), pix(2 * r * r)], s: T`${useD ? T`The radius is half the diameter: ${r} cm. ` : ''}$A = \pi r^2 = \pi \times ${r}^2 = ${piT(r * r)}$ cm².` }; },
    () => { const th = pick([30, 45, 60, 72, 90, 120, 135, 150, 180, 240, 270]), r = ri(2, 12); return { q: T`A sector has radius ${r} cm and central angle $${th}^\circ$. Find its arc length in terms of $\pi$.`, ...PI(th * r, 180), u: 'cm', h: hPi, w: [pix(th * r * r, 360), pix(th * r, 360), pix(2 * r)], s: T`Arc $= \frac{${th}}{360} \times 2\pi \times ${r} = ${piT(th * r, 180)}$ cm.` }; },
    () => { const th = pick([30, 45, 60, 72, 90, 120, 135, 150, 180, 240, 270]), r = ri(2, 12); return { q: T`A sector has radius ${r} cm and central angle $${th}^\circ$. Find its area in terms of $\pi$.`, ...PI(th * r * r, 360), u: 'cm²', h: hPi, w: [pix(th * r, 180), pix(r * r), pix(th * r * r, 180)], s: T`Area $= \frac{${th}}{360} \times \pi \times ${r}^2 = ${piT(th * r * r, 360)}$ cm².` }; },
    () => { const r = ri(2, 15); return { q: T`A circle has circumference $${piT(2 * r)}$ cm. Find its area in terms of $\pi$.`, ...PI(r * r), u: 'cm²', h: hPi, w: [pix(4 * r * r), pix(2 * r), pix(r)], s: T`$2\pi r = ${piT(2 * r)}$ gives $r = ${r}$. Then $A = \pi r^2 = ${piT(r * r)}$ cm².` }; },
    () => { const x = ri(15, 85); return chance() ? { q: T`An inscribed angle in a circle measures $${x}^\circ$. What is the central angle standing on the same arc?`, a: 2 * x, u: '°', w: [x, 180 - x, 360 - 2 * x], s: T`The angle at the centre is twice the angle at the circumference: $2 \times ${x}^\circ = ${2 * x}^\circ$.` } : { q: T`A central angle of a circle measures $${2 * x}^\circ$. What is an inscribed angle standing on the same arc?`, a: x, u: '°', w: [2 * x, 4 * x, 180 - 2 * x], s: T`The angle at the circumference is half the central angle: $\frac{${2 * x}^\circ}{2} = ${x}^\circ$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'solids', title: 'Surface Area & Volume of Solids',
  blurb: 'Prisms, cylinders, pyramids, cones and spheres.',
  lesson: () => T`
<p>A <b>prism</b> has the same cross-section all the way through, so its volume is simply the area of that cross-section times its length. A pyramid or cone that fits inside it has exactly one third of that volume.</p>
${Tbl([T`Solid`, T`Volume`, T`Surface area`], [[T`Prism`, T`$A_{\text{base}} \times h$`, T`sum of all faces`], [T`Cylinder`, T`$\pi r^2 h$`, T`$2\pi r^2 + 2\pi r h$`], [T`Pyramid`, T`$\frac{1}{3} A_{\text{base}} \times h$`, T`base + triangles`], [T`Cone`, T`$\frac{1}{3}\pi r^2 h$`, T`$\pi r^2 + \pi r s$`], [T`Sphere`, T`$\frac{4}{3}\pi r^3$`, T`$4\pi r^2$`]])}
<p>For a cone, $s$ is the <b>slant height</b>; by Pythagoras, $s = \sqrt{r^2 + h^2}$.</p>
${Ex(T`<p>A cylinder with $r = 3$ cm and $h = 10$ cm:</p><p>$V = \pi (3)^2 (10) = 90\pi$ cm³ $\approx 282.7$ cm³. &nbsp; $SA = 2\pi(9) + 2\pi(3)(10) = 18\pi + 60\pi = 78\pi$ cm².</p>`)}
${Key(T`<p>A cylinder's curved surface unrolls into a rectangle: one side is the height $h$, the other is the circumference $2\pi r$. That is where $2\pi r h$ comes from.</p>`)}
${Tip(T`<p>Hemispheres: half the sphere's volume, but the surface area is $2\pi r^2$ (curved part) $+ \pi r^2$ (flat circle) $= 3\pi r^2$.</p>`)}`,
  gens: [
    () => { const r = ri(2, 10), h = ri(2, 15); return { q: T`Find the volume of a cylinder with radius ${r} cm and height ${h} cm, in terms of $\pi$.`, ...PI(r * r * h), u: 'cm³', h: hPi, w: [pix(2 * r * h), pix(r * h), pix(2 * r * r * h), pix(r * r * h + 2 * r * r)], s: T`$V = \pi r^2 h = \pi \times ${r * r} \times ${h} = ${piT(r * r * h)}$ cm³.` }; },
    () => { let r, h; do { r = ri(2, 10); h = ri(2, 15); } while ((r * r * h) % 3 !== 0); return { q: T`Find the volume of a cone with radius ${r} cm and height ${h} cm, in terms of $\pi$.`, ...PI(r * r * h, 3), u: 'cm³', h: hPi, w: [pix(r * r * h), pix(r * h, 3), pix(2 * r * r * h, 3)], s: T`$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \times ${r * r} \times ${h} = ${piT(r * r * h, 3)}$ cm³.` }; },
    () => { const r = ri(1, 9); return chance() ? { q: T`Find the volume of a sphere with radius ${r} cm, in terms of $\pi$.`, ...PI(4 * r ** 3, 3), u: 'cm³', h: hPi, w: [pix(4 * r * r), pix(4 * r ** 3), pix(r ** 3, 3)], s: T`$V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi \times ${r ** 3} = ${piT(4 * r ** 3, 3)}$ cm³.` } : { q: T`Find the surface area of a sphere with radius ${r} cm, in terms of $\pi$.`, ...PI(4 * r * r), u: 'cm²', h: hPi, w: [pix(4 * r ** 3, 3), pix(2 * r * r), pix(r * r)], s: T`$SA = 4\pi r^2 = 4\pi \times ${r * r} = ${piT(4 * r * r)}$ cm².` }; },
    () => { const r = ri(2, 9), h = ri(2, 15); return { q: T`Find the total surface area of a closed cylinder with radius ${r} cm and height ${h} cm, in terms of $\pi$.`, ...PI(2 * r * r + 2 * r * h), u: 'cm²', h: hPi, w: [pix(r * r + 2 * r * h), pix(2 * r * h), pix(r * r * h)], s: T`$SA = 2\pi r^2 + 2\pi r h = ${piT(2 * r * r)} + ${piT(2 * r * h)} = ${piT(2 * r * r + 2 * r * h)}$ cm².` }; },
    () => { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10]]), sw = chance(), r = sw ? a : b, h = sw ? b : a; return chance() ? { q: T`A cone has radius ${r} cm and height ${h} cm. What is its slant height?`, a: c, u: 'cm', w: [r + h, Math.abs(h - r), c + 1], s: T`$s = \sqrt{r^2 + h^2} = \sqrt{${r * r} + ${h * h}} = ${c}$ cm.` } : { q: T`A cone has radius ${r} cm and slant height ${c} cm. Find its total surface area in terms of $\pi$.`, ...PI(r * r + r * c), u: 'cm²', h: hPi, w: [pix(r * c), pix(r * r + r * h), pix(r * r * c)], s: T`$SA = \pi r^2 + \pi r s = ${piT(r * r)} + ${piT(r * c)} = ${piT(r * r + r * c)}$ cm².` }; },
    () => { let a, h; do { a = ri(2, 12); h = ri(3, 15); } while ((a * a * h) % 3 !== 0); return { q: T`A pyramid has a square base of side ${a} cm and a height of ${h} cm. What is its volume?`, a: (a * a * h) / 3, u: 'cm³', w: [a * a * h, (a * a * h) / 2, (a * h) / 3], s: T`$V = \frac{1}{3} \times \text{base} \times h = \frac{1}{3} \times ${a * a} \times ${h} = ${(a * a * h) / 3}$ cm³.` }; },
    () => { let b, t; do { b = ri(3, 12); t = ri(2, 10); } while ((b * t) % 2); const L = ri(5, 20); return { q: T`A triangular prism has a triangular cross-section with base ${b} cm and height ${t} cm. The prism is ${L} cm long. What is its volume?`, a: (b * t * L) / 2, u: 'cm³', w: [b * t * L, (b * t * L) / 3, (b + t) * L], s: T`Cross-section area $= \frac{1}{2} \times ${b} \times ${t} = ${(b * t) / 2}$ cm². Volume $= ${(b * t) / 2} \times ${L} = ${(b * t * L) / 2}$ cm³.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'statistics-jh', title: 'Statistics: Centre & Spread',
  blurb: 'Mean, median and mode from lists and frequency tables, and how new data changes them.',
  lesson: () => T`
<p>A <b>measure of centre</b> summarises a data set with one typical value; a <b>measure of spread</b> says how scattered the values are.</p>
${Tbl([T`Measure`, T`Best when…`], [[T`Mean`, T`data has no extreme values (outliers)`], [T`Median`, T`data is skewed or has outliers — e.g. house prices`], [T`Mode`, T`data is categorical — e.g. favourite colour`], [T`Range`, T`a quick sense of spread (but sensitive to outliers)`]])}
<h3>Mean from a frequency table</h3>
${Fm(T`\bar{x} = \frac{\sum f x}{\sum f}`)}
${Ex(T`${qTable([[T`Score $x$`, '1', '2', '3', '4'], [T`Frequency $f$`, '3', '5', '8', '4']], true)}<p>$\sum f = 20$ and $\sum fx = 3 + 10 + 24 + 16 = 53$, so the mean is $\frac{53}{20} = 2.65$. The mode is 3 (highest frequency). The median is the mean of the 10th and 11th values — both 3 — so the median is 3.</p>`)}
<h3>Working backwards</h3>
${Key(T`<p>$\text{total} = \text{mean} \times \text{count}$. If 5 numbers have mean 12, their total is 60 — so if four of them sum to 47, the fifth is 13.</p>`)}
<p>With an even number of values, the median is the mean of the two middle values.</p>
${Tip(T`<p>In a frequency table, divide $\sum fx$ by the total frequency $\sum f$, not by the number of rows.</p>`)}`,
  gens: [
    () => { const n = pick([6, 8]), vals = range(1, n).map(() => ri(1, 60)), s = vals.slice().sort((a, b) => a - b), m1 = s[n / 2 - 1], m2 = s[n / 2], med = (m1 + m2) / 2; return { q: T`Find the median of: ${vals.join(LS())}.`, a: med, w: [m1, m2, rnd(sum(vals) / n, 1), (vals[n / 2 - 1] + vals[n / 2]) / 2], s: T`Sorted: ${s.join(LS())}. There are ${n} values, so the median is the mean of the two middle ones: $\frac{${m1} + ${m2}}{2} = ${M(med)}$.` }; },
    () => { const x0 = ri(0, 5), xs = range(x0, x0 + 4), fs = xs.map(() => ri(1, 9)), N = sum(fs), S = sum(xs.map((x, i) => x * fs[i])), m = rnd(S / N, 2); return { q: T`Find the mean score from the frequency table. Round to 2 decimal places if needed.${qTable([[T`Score`, ...xs], [T`Frequency`, ...fs]], true)}`, a: m, tol: 0.011, w: [rnd(sum(xs) / 5, 2), rnd(S / 5, 2), rnd(N / 5, 2)], s: T`$\sum f = ${N}$ and $\sum fx = ${xs.map((x, i) => `${x} \\times ${fs[i]}`).join(' + ')} = ${S}$. Mean $= \frac{${S}}{${N}} ${Number.isInteger(S / N * 100) ? '=' : '\\approx'} ${M(m)}$.` }; },
    () => { const vals = range(1, 5).map(() => ri(2, 30)), r = sum(vals) % 5; if (r) vals[4] += 5 - r; const m = sum(vals) / 5, known = vals.slice(0, 4); return { q: T`The mean of five numbers is ${m}. Four of them are ${known.join(LS())}. What is the fifth number?`, a: vals[4], w: [m, 5 * m - sum(known) + m, sum(known) / 4], s: T`The five numbers total $5 \times ${m} = ${5 * m}$. The four known ones sum to ${sum(known)}, so the fifth is $${5 * m} - ${sum(known)} = ${vals[4]}$.` }; },
    () => { let n, m1, m2, v; do { n = ri(3, 9); m1 = ri(55, 85); m2 = m1 + rnz(-4, 4); v = (n + 1) * m2 - n * m1; } while (v <= 0 || v > 100); return { q: T`After ${n} tests, Rudi's mean score is ${m1}. After one more test, his mean score is ${m2}. What did he score on the last test?`, a: v, w: [m2, m2 + (m2 - m1), (m1 + m2) / 2 | 0, v + n], s: T`Total before: $${n} \times ${m1} = ${n * m1}$. Total after: $${n + 1} \times ${m2} = ${(n + 1) * m2}$. Last score $= ${(n + 1) * m2} - ${n * m1} = ${v}$.` }; },
    () => { const xs = sample(range(1, 12), 5).sort((a, b) => a - b); let fs; do { fs = xs.map(() => ri(1, 12)); } while (fs.filter(f => f === Math.max(...fs)).length > 1); const mode = xs[fs.indexOf(Math.max(...fs))]; return { q: T`What is the mode of the data in this table?${qTable([[T`Number of books read`, ...xs], [T`Number of students`, ...fs]], true)}`, a: mode, w: [Math.max(...fs), xs[2], Math.max(...xs)], s: T`The mode is the value with the highest frequency. ${mode} has frequency ${Math.max(...fs)}, the largest.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'probability-jh', title: 'Probability',
  blurb: 'Sample spaces, the probability of an event, complements and expected frequency.',
  lesson: () => T`
<p>An <b>experiment</b> (rolling a die, drawing a card) has possible <b>outcomes</b>. The set of all outcomes is the <b>sample space</b> $S$; an <b>event</b> $E$ is a set of outcomes. When all outcomes are equally likely:</p>
${Fm(T`P(E) = \frac{n(E)}{n(S)}`)}
${Key(T`<ul><li>$0 \le P(E) \le 1$: 0 means impossible, 1 means certain.</li><li><b>Complement:</b> $P(\text{not } E) = 1 - P(E)$.</li><li><b>Expected frequency</b> in $n$ trials $= P(E) \times n$.</li></ul>`)}
${Ex(T`<p>A bag has 3 red, 5 blue and 2 green marbles. $P(\text{blue}) = \frac{5}{10} = \frac{1}{2}$, and $P(\text{not green}) = 1 - \frac{2}{10} = \frac{4}{5}$.</p>`)}
<h3>Two dice</h3>
<p>Rolling two dice gives $6 \times 6 = 36$ equally likely outcomes. A sum of 7 happens in 6 ways — (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — so $P(\text{sum} = 7) = \frac{6}{36} = \frac{1}{6}$. In general, the number of ways to get a sum $s$ is $6 - |s - 7|$.</p>
<h3>A deck of cards</h3>
<p>52 cards: 4 suits (♠ ♣ black, ♥ ♦ red) of 13 ranks (A, 2–10, J, Q, K). There are 12 face cards (J, Q, K).</p>
${Tip(T`<p>Experimental probability (from real trials) gets closer to theoretical probability as the number of trials grows — but it rarely matches exactly.</p>`)}`,
  gens: [
    () => { const c = { red: ri(1, 9), blue: ri(1, 9), green: ri(1, 9) }, n = c.red + c.blue + c.green, col = pick(['red', 'blue', 'green']), k = c[col], nm = { red: T`red`, blue: T`blue`, green: T`green` }[col]; return { q: T`A bag contains ${c.red} red, ${c.blue} blue and ${c.green} green balls. One ball is picked at random. What is the probability that it is ${nm}?`, ...FR(k, n), h: T`Type a fraction such as 2/7.`, w: [fx(k, n - k), fx(1, 3), fx(k, n + 1), fx(n - k, n)], s: T`$P(\text{${nm}}) = \frac{\text{${nm} balls}}{\text{all balls}} = \frac{${k}}{${n}}${gcd(k, n) > 1 ? ` = ${frT(k, n)}` : ''}$.` }; },
    () => { const s = ri(2, 12), ways = 6 - Math.abs(s - 7); return { q: T`Two fair dice are rolled. What is the probability that the sum is ${s}?`, ...FR(ways, 36), h: T`Type a fraction such as 5/36.`, w: [fx(1, 11), fx(ways, 12), fx(ways + 1, 36), fx(1, 6)], s: T`There are 36 equally likely outcomes, and a sum of ${s} happens in ${ways} of them. $P = \frac{${ways}}{36}${gcd(ways, 36) > 1 ? T` = ${frT(ways, 36)}` : ''}$.` }; },
    () => { const p = ri(5, 95) / 100, ev = pick([T`it rains tomorrow`, T`a bus is late`, T`a seed germinates`, T`a team wins its next match`]); return { q: T`The probability that ${ev} is ${F(p)}. What is the probability that this does <b>not</b> happen?`, a: rnd(1 - p, 2), w: [p, rnd(1 / p, 2), rnd(0.5 - p, 2)], s: T`$P(\text{not } E) = 1 - P(E) = 1 - ${M(p)} = ${M(rnd(1 - p, 2))}$.` }; },
    () => { const [desc, k] = pick([[T`a six`, 1], [T`an even number`, 3], [T`a number greater than 4`, 2], [T`a prime number`, 3], [T`a multiple of 3`, 2]]), n = 6 * ri(5, 40); return { q: T`A fair die is rolled ${n} times. How many times would you expect to roll ${desc}?`, a: (n * k) / 6, w: [n / 6, (n * k) / 3, n / k], s: T`$P = \frac{${k}}{6}$, so the expected number is $\frac{${k}}{6} \times ${n} = ${(n * k) / 6}$.` }; },
    () => { const [desc, set] = pick([[T`an even number`, [2, 4, 6]], [T`a number less than 3`, [1, 2]], [T`a prime number`, [2, 3, 5]], [T`a factor of 6`, [1, 2, 3, 6]], [T`a number greater than 1`, [2, 3, 4, 5, 6]], [T`a square number`, [1, 4]]]); return { q: T`A fair six-sided die is rolled. What is the probability of rolling ${desc}?`, ...FR(set.length, 6), h: T`Type a fraction such as 1/3.`, w: [fx(1, 6), fx(set.length, 5), fx(6 - set.length, 6)], s: T`Favourable outcomes: ${set.join(LS())} — that is ${set.length} of 6. $P = \frac{${set.length}}{6}${gcd(set.length, 6) > 1 ? T` = ${frT(set.length, 6)}` : ''}$.` }; },
    () => { const [desc, k, why] = pick([[T`a heart`, 13, T`13 hearts`], [T`a king`, 4, T`4 kings`], [T`a red card`, 26, T`26 red cards`], [T`a red king`, 2, T`2 red kings`], [T`a face card (J, Q or K)`, 12, T`12 face cards`], [T`an ace or a king`, 8, T`4 aces and 4 kings`], [T`a black 7`, 2, T`the 7 of spades and 7 of clubs`]]); return { q: T`A card is drawn at random from a standard 52-card deck. What is the probability that it is ${desc}?`, ...FR(k, 52), h: T`Type a fraction such as 1/13.`, w: [fx(k, 13), fx(1, k), fx(k + 1, 52), fx(k, 26)], s: T`There are ${why} out of 52 cards: $P = \frac{${k}}{52} = ${frT(k, 52)}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'social-arith', title: 'Money Maths: Profit, Discount & Interest',
  blurb: 'Profit and loss, percentage profit, discount and tax, simple interest, gross and net weight.',
  lesson: () => T`
<p>Everyday money questions are percentage questions in disguise.</p>
${Tbl([T`Term`, T`Meaning`], [[T`Cost price (CP)`, T`what the seller paid`], [T`Selling price (SP)`, T`what the buyer pays`], [T`Profit`, T`SP − CP (when SP > CP)`], [T`Loss`, T`CP − SP (when SP < CP)`]])}
${Key(T`$$\text{profit \%} = \frac{\text{profit}}{\text{cost price}} \times 100\% \qquad\qquad \text{SP} = \text{CP} \times \left(1 + \frac{p}{100}\right)$$`)}
${Ex(T`<p>A phone bought for 400 dollars is sold for 460 dollars. Profit $= 60$, so profit % $= \frac{60}{400} \times 100\% = 15\%$.</p>`)}
<h3>Discount and tax</h3>
<p>Apply percentages one after another: a 20% discount then 10% tax on 150 dollars gives $150 \times 0.8 \times 1.1 = 132$ dollars.</p>
<h3>Simple interest</h3>
${Fm(T`I = P \times r \times t \qquad \text{(principal} \times \text{yearly rate} \times \text{years)}`)}
<p>1,500 dollars saved at 6% per year for 3 years earns $1{,}500 \times 0.06 \times 3 = 270$ dollars; the total becomes 1,770 dollars. For months, use $t = \frac{\text{months}}{12}$.</p>
<h3>Gross, tare and net</h3>
<p><b>Gross</b> = total weight; <b>tare</b> = weight of the packaging; <b>net</b> = gross − tare. A 50 kg sack with 2% tare has net weight $50 \times 0.98 = 49$ kg.</p>
${Tip(T`<p>Profit percentage is always based on the <b>cost</b> price, not the selling price.</p>`)}`,
  gens: [
    () => { const C = ri(3, 50) * 20, p = pick([5, 10, 15, 20, 25, 30, 40, 50]), profit = chance(), S = (C * (profit ? 100 + p : 100 - p)) / 100; return { q: profit ? T`A trader buys a bicycle for ${F(C)} dollars and sells it for ${F(S)} dollars. What is the percentage profit?` : T`A trader buys a bicycle for ${F(C)} dollars and sells it for ${F(S)} dollars. What is the percentage loss?`, a: p, u: '%', w: [rnd((Math.abs(S - C) / S) * 100, 1), Math.abs(S - C), 100 - p], s: T`${profit ? T`Profit` : T`Loss`} $= ${M(Math.abs(S - C))}$. Percentage $= \frac{${M(Math.abs(S - C))}}{${M(C)}} \times 100\% = ${p}\%$.` }; },
    () => { const C = ri(3, 50) * 20, p = pick([5, 10, 15, 20, 25, 30, 40, 50]); return { q: T`A shop buys a lamp for ${F(C)} dollars and wants to make a ${p}% profit. What should the selling price be?`, a: (C * (100 + p)) / 100, u: T`dollars`, w: [(C * p) / 100, C + p, (C * (100 - p)) / 100], s: T`$\text{SP} = ${M(C)} \times ${M((100 + p) / 100)} = ${M((C * (100 + p)) / 100)}$ dollars.` }; },
    () => { const P = ri(2, 40) * 500, r = ri(3, 12), t = ri(1, 5), I = (P * r * t) / 100, total = chance(); const period = t === 1 ? T`for 1 year` : T`for ${t} years`; return { q: total ? T`${F(P)} dollars is invested at ${r}% simple interest per year ${period}. What is the total amount at the end?` : T`${F(P)} dollars is invested at ${r}% simple interest per year ${period}. How much interest is earned?`, a: total ? P + I : I, u: T`dollars`, w: total ? [I, P + I / t, P * (1 + r / 100)] : [(P * r) / 100, P + I, I * 2], s: T`$I = P r t = ${M(P)} \times ${M(r / 100)} \times ${t} = ${M(I)}$ dollars.${total ? T` Total $= ${M(P)} + ${M(I)} = ${M(P + I)}$ dollars.` : ''}` }; },
    () => { const price = ri(4, 40) * 5, d = pick([10, 20, 25, 30]), tx = pick([5, 10, 11]), res = rnd(price * (1 - d / 100) * (1 + tx / 100), 2); return { q: T`A pair of shoes costs ${price} dollars. There is a ${d}% discount, and then ${tx}% sales tax is added to the discounted price. What is the final price?`, a: res, u: T`dollars`, tol: 0.01, w: [rnd(price * (1 - (d - tx) / 100), 2), rnd(price * (1 - d / 100), 2), rnd(price * (1 + tx / 100), 2)], s: T`$${price} \times ${M(1 - d / 100)} = ${M(price * (1 - d / 100))}$, then $\times ${M(1 + tx / 100)} = ${M(res)}$ dollars.` }; },
    () => { const G = ri(20, 100), t = pick([1, 2, 2.5, 3, 4, 5]), net = rnd(G * (1 - t / 100), 2); return { q: T`A sack of rice has a gross weight of ${G} kg. The tare is ${F(t)}% of the gross weight. What is the net weight?`, a: net, u: 'kg', w: [rnd((G * t) / 100, 2), G - t, rnd(G * (1 + t / 100), 2)], s: T`Tare $= ${M(t)}\% \times ${G} = ${M(rnd((G * t) / 100, 2))}$ kg. Net $= ${G} - ${M(rnd((G * t) / 100, 2))} = ${M(net)}$ kg.` }; },
    () => { const C = ri(3, 50) * 20, p = pick([10, 20, 25, 50]), S = (C * (100 + p)) / 100; return { q: T`A watch is sold for ${F(S)} dollars at a profit of ${p}%. What was the cost price?`, a: C, u: T`dollars`, w: [rnd(S * (1 - p / 100), 2), S - p, rnd(S / (1 - p / 100), 2)], s: T`$\text{SP} = \text{CP} \times ${M(1 + p / 100)}$, so $\text{CP} = \frac{${M(S)}}{${M(1 + p / 100)}} = ${M(C)}$ dollars. (Taking ${p}% off the selling price would be wrong.)` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'patterns', title: 'Number Patterns & Sequences',
  blurb: 'Arithmetic and geometric patterns, the nth term, and special number sequences.',
  lesson: () => T`
<p>A <b>sequence</b> is an ordered list of numbers called <b>terms</b>. Spotting the rule lets you continue the pattern or jump straight to any term.</p>
<h3>Arithmetic sequences</h3>
<p>The same number $d$ (the <b>common difference</b>) is added each time: 5, 8, 11, 14, … has $d = 3$.</p>
${Key(T`$$u_n = a + (n - 1)d$$<p>where $a$ is the first term. For 5, 8, 11, …: $u_n = 5 + 3(n - 1) = 3n + 2$, so $u_{50} = 152$.</p>`)}
<h3>Geometric sequences</h3>
<p>Each term is multiplied by the same <b>ratio</b> $r$: 3, 6, 12, 24, … ($r = 2$); 80, 40, 20, … ($r = \frac{1}{2}$).</p>
<h3>Special sequences</h3>
${Tbl([T`Name`, T`Terms`, T`nth term`], [[T`Square numbers`, [1, 4, 9, 16, 25, '…'].join(LS()), T`$n^2$`], [T`Cube numbers`, [1, 8, 27, 64, '…'].join(LS()), T`$n^3$`], [T`Triangular numbers`, [1, 3, 6, 10, 15, '…'].join(LS()), T`$\frac{n(n+1)}{2}$`], [T`Fibonacci`, [1, 1, 2, 3, 5, 8, '…'].join(LS()), T`each term = sum of the previous two`]])}
${Ex(T`<p>Which term of 7, 11, 15, … equals 95? $u_n = 4n + 3 = 95$, so $n = 23$: it is the 23rd term.</p>`)}
${Tip(T`<p>The coefficient of $n$ in the nth-term formula is the common difference — not the first term.</p>`)}`,
  gens: [
    () => { const a = rnz(-20, 30), d = rnz(-9, 12), t = range(0, 4).map(i => a + i * d); return { q: T`What is the next term in the sequence ${t.join(LS())}, …?`, a: a + 5 * d, neg: true, w: [a + 6 * d, a + 4 * d + 1, t[4] - d, t[4] * 2], s: T`The common difference is ${d}, so the next term is $${t[4]} ${sg(d)} = ${a + 5 * d}$.` }; },
    () => { const a = rnz(-10, 20), d = rnz(-6, 9), n = ri(10, 60), t = range(0, 3).map(i => a + i * d); return { q: T`Find the term $u_{${n}}$ of the sequence ${listF(t)}, …`, a: a + (n - 1) * d, neg: true, w: [a + n * d, n * d, a * n], s: T`$a = ${a}$, $d = ${d}$. $u_{${n}} = ${a} + (${n} - 1)(${d}) = ${a + (n - 1) * d}$.` }; },
    () => { const d = ri(2, 9), c = rnz(-9, 9), t = range(1, 4).map(n => d * n + c), L = (p, q) => `$${lin(p, q, 'n')}$`; return { q: T`Which formula gives the nth term of ${t.join(LS())}, …?`, a: L(d, c), w: [L(d, c + d), L(1, d), L(c + d, d), L(d, -c)], s: T`The terms increase by ${d}, so the formula starts $${d}n$. For $n = 1$, $${d}(1) + c = ${t[0]}$ gives $c = ${c}$: $u_n = ${lin(d, c, 'n')}$.` }; },
    () => { const a = ri(1, 5), r = pick([2, 3, -2, -3, 4]), t = range(0, 3).map(i => a * r ** i); return { q: T`What is the next term in the sequence ${t.join(LS())}, …?`, a: a * r ** 4, neg: true, w: [t[3] + (t[3] - t[2]), -a * r ** 4, a * r ** 5], s: T`Each term is multiplied by ${r}, so the next term is $${pn(t[3])} \times ${pn(r)} = ${a * r ** 4}$.` }; },
    () => { const a = rnz(-10, 20), d = ri(2, 9), n = ri(10, 40), v = a + (n - 1) * d, t = range(0, 3).map(i => a + i * d); return { q: T`Which term of the sequence ${t.join(LS())}, … is equal to ${v}?`, a: n, w: [n + 1, n - 1, Math.round(v / d)], s: T`$u_n = ${a} + (n - 1) \times ${d} = ${v}$, so $(n - 1) \times ${d} = ${v - a}$, $n - 1 = ${n - 1}$ and $n = ${n}$.` }; },
    () => { const n = ri(8, 30); return chance() ? { q: T`The triangular numbers are 1, 3, 6, 10, 15, … Find the triangular number $T_{${n}}$.`, a: (n * (n + 1)) / 2, w: [n * n, (n * (n - 1)) / 2, ((n + 1) * (n + 2)) / 2], s: T`$T_n = \frac{n(n + 1)}{2} = \frac{${n} \times ${n + 1}}{2} = ${(n * (n + 1)) / 2}$.` } : { q: T`The sequence 1, 4, 9, 16, 25, … continues. Find its term $u_{${n}}$.`, a: n * n, w: [2 * n, (n * (n + 1)) / 2, (n + 1) ** 2], s: T`These are square numbers, $u_n = n^2$, so $u_{${n}} = ${n * n}$.` }; },
    () => { const t = [ri(1, 6), ri(1, 6)]; while (t.length < 7) t.push(t[t.length - 1] + t[t.length - 2]); return { q: T`In a sequence, each term after the second is the sum of the two terms before it. The first two terms are ${t[0]} and ${t[1]}. What is the 7th term?`, a: t[6], w: [t[5], t[6] + t[4], t[7 - 1] - 1], s: T`The terms are ${t.join(LS())}. The 7th term is ${t[6]}.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'similarity', title: 'Transformations & Similarity',
  blurb: 'Translations, reflections, rotations and dilations; similar figures and scale factors.',
  lesson: () => T`
<p>A <b>transformation</b> moves or resizes a shape. Under translations, reflections and rotations the image is <b>congruent</b> (same shape and size); under a dilation it is <b>similar</b> (same shape, different size).</p>
${Tbl([T`Transformation`, T`Rule for a point (x, y)`], [[T`Translation by $\binom{a}{b}$`, `$(x + a${LS().trim()}\\; y + b)$`], [T`Reflection in the $x$-axis`, `$(x${LS().trim()}\\; -y)$`], [T`Reflection in the $y$-axis`, `$(-x${LS().trim()}\\; y)$`], [T`Reflection in $y = x$`, `$(y${LS().trim()}\\; x)$`], [T`Rotation $90^\circ$ anticlockwise about O`, `$(-y${LS().trim()}\\; x)$`], [T`Rotation $180^\circ$ about O`, `$(-x${LS().trim()}\\; -y)$`], [T`Rotation $90^\circ$ clockwise about O`, `$(y${LS().trim()}\\; -x)$`], [T`Dilation, scale factor $k$, centre O`, `$(kx${LS().trim()}\\; ky)$`]])}
<h3>Similar figures</h3>
${Key(T`<p>In similar figures, corresponding angles are equal and corresponding sides are in the same ratio, the <b>scale factor</b> $k$. Areas scale by $k^2$ and volumes by $k^3$.</p>`)}
${Ex(T`<p>Triangles $ABC$ and $PQR$ are similar with $AB = 6$, $BC = 8$ and $PQ = 9$. Scale factor $k = \frac{9}{6} = 1.5$, so $QR = 8 \times 1.5 = 12$. If triangle $ABC$ has area 24, triangle $PQR$ has area $24 \times 1.5^2 = 54$.</p>`)}
${Ex(T`<p>A 1.5 m pole casts a 2 m shadow at the same moment a tree casts a 12 m shadow. The triangles are similar: $\frac{h}{12} = \frac{1.5}{2}$, so $h = 9$ m.</p>`)}
${Tip(T`<p>Similar sides differ by a <b>multiple</b>, not by a fixed amount. If one side grows from 6 to 9, a side of 8 grows to 12, not 11.</p>`)}`,
  gens: [
    () => { const x = rnz(-8, 8), y = rnz(-8, 8), tx = rnz(-6, 6), ty = rnz(-6, 6); const tr = [[T`a reflection in the $x$-axis`, [x, -y], '(x, y) → (x, −y)'], [T`a reflection in the $y$-axis`, [-x, y], '(x, y) → (−x, y)'], [T`a reflection in the line $y = x$`, [y, x], '(x, y) → (y, x)'], [T`a rotation of $90^\circ$ anticlockwise about the origin`, [-y, x], '(x, y) → (−y, x)'], [T`a rotation of $180^\circ$ about the origin`, [-x, -y], '(x, y) → (−x, −y)'], [T`a rotation of $90^\circ$ clockwise about the origin`, [y, -x], '(x, y) → (y, −x)'], [T`a translation by $${colv([tx, ty])}$`, [x + tx, y + ty], `(x, y) → (x ${tx < 0 ? '−' : '+'} ${Math.abs(tx)}, y ${ty < 0 ? '−' : '+'} ${Math.abs(ty)})`]]; const i = ri(0, tr.length - 1), [name, [ax, ay], rule] = tr[i], P = p => `$${pt(...p)}$`; return { q: T`The point $P${pt(x, y)}$ is mapped by ${name}. What are the coordinates of its image?`, a: P([ax, ay]), v: [ax, ay], ord: true, h: T`Type the coordinates as x, y.`, w: shuffle(tr.filter((_, j) => j !== i).map(t => P(t[1]))), s: T`The rule is ${rule.replace(/, /g, LS())}, so the image is $${pt(ax, ay)}$.` }; },
    () => { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [4, 6, 7], [5, 7, 9], [2, 3, 4], [6, 7, 8]]), [p, q] = pick([[2, 1], [3, 1], [3, 2], [5, 2], [4, 3], [1, 2]]), m = ri(1, 2), S = [a, b, c].map(v => v * q * m), L = S.map(v => (v * p) / q), nm = ['PQ', 'QR', 'RP'], i = ri(0, 2); let j; do { j = ri(0, 2); } while (j === i); return { q: T`Triangles $ABC$ and $PQR$ are similar, with $AB \leftrightarrow PQ$, $BC \leftrightarrow QR$ and $CA \leftrightarrow RP$. Given $AB = ${S[0]}$, $BC = ${S[1]}$, $CA = ${S[2]}$ and $${nm[i]} = ${L[i]}$, find $${nm[j]}$.`, a: L[j], w: [S[j] + L[i] - S[i], S[j], L[i], (S[j] * q) / p], s: T`Scale factor $k = \frac{${L[i]}}{${S[i]}} = ${frT(p, q)}$. So $${nm[j]} = ${S[j]} \times ${frT(p, q)} = ${M(L[j])}$.` }; },
    () => { const k = pick([2, 3, 4, 5]), A = ri(3, 20), vol = chance(); return vol ? { q: T`Two similar solids have a scale factor of ${k}. The smaller one has a volume of ${A} cm³. What is the volume of the larger one?`, a: A * k ** 3, u: 'cm³', w: [A * k, A * k * k, A * k * 3], s: T`Volumes scale by $k^3 = ${k ** 3}$: $${A} \times ${k ** 3} = ${A * k ** 3}$ cm³.` } : { q: T`Two similar shapes have a scale factor of ${k}. The smaller one has an area of ${A} cm². What is the area of the larger one?`, a: A * k * k, u: 'cm²', w: [A * k, A * k * 2, A * k ** 3], s: T`Areas scale by $k^2 = ${k * k}$: $${A} \times ${k * k} = ${A * k * k}$ cm².` }; },
    () => { const h1 = pick([1, 1.2, 1.5, 2]), s1 = pick([2, 2.5, 3, 4]), k = ri(2, 12), s2 = rnd(s1 * k, 2), h2 = rnd(h1 * k, 2); return { q: T`A ${F(h1)} m stick casts a shadow ${F(s1)} m long. At the same time, a tree casts a shadow ${F(s2)} m long. How tall is the tree?`, a: h2, u: 'm', w: [rnd((s1 * s2) / h1, 2), rnd(s2 - s1 + h1, 2), rnd((s2 * h1) / s1 + 1, 2)], s: T`The triangles are similar: $\frac{h}{${M(s2)}} = \frac{${M(h1)}}{${M(s1)}}$, so $h = ${M(s2)} \times \frac{${M(h1)}}{${M(s1)}} = ${M(h2)}$ m.` }; },
    () => { const k = pick([2, 3, -2, 0.5]), x = k === 0.5 ? 2 * rnz(-5, 5) : rnz(-6, 6), y = k === 0.5 ? 2 * rnz(-5, 5) : rnz(-6, 6), P = (p, q) => `$${pt(p, q)}$`; return { q: T`The point $${pt(x, y)}$ is dilated with centre at the origin and scale factor ${F(k)}. Where is its image?`, a: P(k * x, k * y), v: [k * x, k * y], ord: true, h: T`Type the coordinates as x, y.`, w: [P(x + k, y + k), P(-k * x, -k * y), P(k * y, k * x), P(x * k, y)], s: T`Multiply both coordinates by ${F(k)}: $(${F(k)} \times ${pn(x)},\; ${F(k)} \times ${pn(y)}) = ${pt(k * x, k * y)}$.` }; },
  ],
},
  ],
});
})();
