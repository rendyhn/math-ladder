/* ==========================================================================
   LEVEL 1 — Elementary School (Grades 1–6)
   ========================================================================== */
(() => {
const colDiff = (a, b) => { const A = String(a), B = String(b).padStart(A.length, '0'); return +[...A].map((c, i) => Math.abs(+c - +B[i])).join(''); };
const hFrac = T`Type a fraction such as 7/12 (improper fractions are fine).`;
const shapesSvg = () => `<svg viewBox="0 0 520 150" role="img" aria-label="${T`A rectangle with length l and width w, a triangle with base b and perpendicular height h, and a trapezoid with parallel sides a and b and height h`}">
<rect class="fig-shape" x="10" y="30" width="140" height="80"/>
<text class="fig-text" x="80" y="132" text-anchor="middle">l</text><text class="fig-text" x="160" y="75">w</text>
<polygon class="fig-shape" points="200,110 340,110 250,30"/><line class="fig-dash" x1="250" y1="30" x2="250" y2="110"/>
<text class="fig-text" x="270" y="132" text-anchor="middle">b</text><text class="fig-text" x="257" y="80">h</text>
<polygon class="fig-shape" points="380,110 510,110 480,30 410,30"/><line class="fig-dash" x1="440" y1="30" x2="440" y2="110"/>
<text class="fig-text" x="445" y="22" text-anchor="middle">a</text><text class="fig-text" x="445" y="132" text-anchor="middle">b</text><text class="fig-text" x="447" y="80">h</text>
</svg>`;

level({
  id: 'elementary', name: 'Elementary School', short: 'Elementary', band: 'Grades 1–6', color: 'lv1',
  blurb: 'Number sense, the four operations, fractions, decimals, percentages, measurement and first geometry.',
  topics: [
/* ------------------------------------------------------------------ */
{
  id: 'place-value', title: 'Place Value & Rounding',
  blurb: 'What each digit is worth, expanded form, comparing whole numbers and rounding.',
  lesson: () => T`
<p>Our number system uses ten digits, 0 to 9. The <b>place</b> of a digit tells you its <b>value</b>: every place is worth ten times the place to its right.</p>
${Tbl([T`Millions`, T`Hundred thousands`, T`Ten thousands`, T`Thousands`, T`Hundreds`, T`Tens`, T`Ones`], [['5', '3', '8', '2', '4', '1', '7']])}
<p>In <b>5,382,417</b> the digit 8 sits in the ten thousands place, so it is worth $8 \times 10{,}000 = 80{,}000$. The digit 3 is worth $300{,}000$.</p>
<h3>Expanded form</h3>
<p>Writing a number as the sum of its place values shows what each digit is worth:</p>
${Fm(T`4{,}307 = 4{,}000 + 300 + 7`)}
<p>The 0 in the tens place is a <b>placeholder</b>. Without it, 4,307 would collapse into 437.</p>
<h3>Comparing numbers</h3>
<p>A whole number with more digits is larger. If two numbers have the same number of digits, compare them digit by digit from the left; the first place where they differ decides. So $52{,}814 \gt 52{,}781$ because in the hundreds place $8 \gt 7$.</p>
<h3>Rounding</h3>
${Key(T`<p>To round to a place, look at the digit <b>one place to its right</b>.</p><ul><li>5 or more: round <b>up</b> (add one to the rounding digit).</li><li>4 or less: round <b>down</b> (keep the rounding digit).</li></ul><p>Every digit after the rounding place becomes 0.</p>`)}
${Ex(T`<p>Round 3,462 to the nearest hundred.</p><ol><li>The hundreds digit is 4. The digit to its right (tens) is 6.</li><li>6 is 5 or more, so round up: the 4 becomes 5.</li><li>Answer: <b>3,500</b>.</li></ol><p>To the nearest ten, 3,462 is 3,460; to the nearest thousand it is 3,000.</p>`)}
${Tip(T`<p>Only look at the next digit. 3,449 rounds to 3,400 (nearest hundred), not 3,500 — never round in stages.</p>`)}`,
  gens: [
    () => {
      const names = [T`ones`, T`tens`, T`hundreds`, T`thousands`, T`ten thousands`, T`hundred thousands`, T`millions`];
      let n, p, d;
      do { const len = ri(4, 7); n = ri(10 ** (len - 1), 10 ** len - 1); p = ri(1, len - 1); d = Math.floor(n / 10 ** p) % 10; } while (d === 0);
      return { q: T`In the number <b>${F(n)}</b>, what is the value of the digit in the <b>${names[p]}</b> place?`, a: d * 10 ** p, w: [d, d * 10 ** (p + 1), d * 10 ** (p - 1)],
        s: T`The digit in the ${names[p]} place is ${d}, so its value is $${d} \times ${M(10 ** p)} = ${M(d * 10 ** p)}$.` };
    },
    () => {
      const n = ri(1000, 99999);
      const [p, near, place] = pick([[10, T`ten`, T`tens`], [100, T`hundred`, T`hundreds`], [1000, T`thousand`, T`thousands`]]);
      const a = Math.round(n / p) * p, next = Math.floor(n / (p / 10)) % 10;
      return { q: T`Round <b>${F(n)}</b> to the nearest ${near}.`, a, w: [Math.floor(n / p) * p, Math.ceil(n / p) * p, Math.round(n / (p * 10)) * p * 10, a + p, a - p],
        s: T`The digit just after the ${place} place is ${next}. ${next >= 5 ? T`It is 5 or more, so round up` : T`It is less than 5, so round down`}: ${F(n)} ≈ <b>${F(a)}</b>.` };
    },
    () => {
      let n; do { n = ri(1001, 99999); } while (!/0/.test(String(n)) || /^\d0+$/.test(String(n)));
      const s = String(n), L = s.length;
      const parts = [...s].map((c, i) => +c * 10 ** (L - 1 - i)).filter(x => x > 0);
      return { q: T`Which number is equal to $${parts.map(x => M(x)).join(' + ')}$?`, a: n,
        w: [+s.replace(/0/g, ''), n * 10, +(s[0] + '0' + s.slice(1)), +[...s].reverse().join('')],
        s: T`Add the place values: $${parts.map(x => M(x)).join(' + ')} = ${M(n)}$. The zeros hold the empty places.` };
    },
    () => {
      const digs = sample(range(0, 9), 5);
      if (digs[0] === 0) [digs[0], digs[1]] = [digs[1], digs[0]];
      const set = new Set([+digs.join('')]); let guard = 0;
      while (set.size < 4 && guard++ < 60) { const p = shuffle(digs); if (p[0] !== 0) set.add(+p.join('')); }
      const nums = [...set], big = chance();
      const a = big ? Math.max(...nums) : Math.min(...nums);
      const sorted = nums.slice().sort((x, y) => (big ? y - x : x - y));
      const list = nums.map(x => F(x)).join(LS() + '&nbsp;');
      return { q: big ? T`Which of these numbers is the <b>greatest</b>?<br>${list}` : T`Which of these numbers is the <b>smallest</b>?<br>${list}`, a, w: nums.filter(x => x !== a),
        s: T`They all have five digits, so compare from the left. From ${big ? T`greatest to smallest` : T`smallest to greatest`}: ${sorted.map(x => F(x)).join(LS())}.` };
    },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'add-sub', title: 'Addition & Subtraction',
  blurb: 'Column addition with carrying, subtraction with borrowing, missing numbers and word problems.',
  lesson: () => T`
<p>Addition combines amounts; subtraction finds what is left or the <b>difference</b> between two amounts. For large numbers we use the <b>column method</b>: line the digits up by place value and work from the ones column to the left.</p>
<h3>Adding with carrying</h3>
<p>When a column adds up to 10 or more, write the ones digit and <b>carry</b> the ten into the next column.</p>
${Ex(T`<p>$4{,}587 + 2{,}846$</p><ol><li>Ones: $7 + 6 = 13$ → write 3, carry 1.</li><li>Tens: $8 + 4 + 1 = 13$ → write 3, carry 1.</li><li>Hundreds: $5 + 8 + 1 = 14$ → write 4, carry 1.</li><li>Thousands: $4 + 2 + 1 = 7$.</li></ol><p>Answer: <b>7,433</b>.</p>`)}
<h3>Subtracting with borrowing</h3>
<p>If the top digit in a column is smaller than the bottom digit, <b>borrow</b> (regroup) one from the next column: that adds 10 to the current column.</p>
${Ex(T`<p>$6{,}204 - 1{,}758$</p><ol><li>Ones: 4 is less than 8. The tens digit is 0, so borrow from the hundreds: 204 becomes 1 hundred, 9 tens, 14 ones. $14 - 8 = 6$.</li><li>Tens: $9 - 5 = 4$.</li><li>Hundreds: 1 is less than 7, so borrow a thousand: $11 - 7 = 4$.</li><li>Thousands: $5 - 1 = 4$.</li></ol><p>Answer: <b>4,446</b>.</p>`)}
${Key(T`<p>Addition and subtraction undo each other. Check a subtraction by adding: $4{,}446 + 1{,}758 = 6{,}204$ ✓. This also finds missing numbers: if $\square + 348 = 1{,}000$, then $\square = 1{,}000 - 348 = 652$.</p>`)}
<h3>Word problems</h3>
<p>Words like <i>altogether, total, more, increased</i> usually mean add. Words like <i>left, remain, difference, how many more, fewer</i> usually mean subtract. Always ask what the question really wants.</p>
${Tip(T`<p>A common error is subtracting the smaller digit from the larger in every column (e.g. writing $52 - 38 = 26$). Borrow instead: $52 - 38 = 14$.</p>`)}`,
  gens: [
    () => { const a = ri(1000, 9999), b = ri(100, 9999); return { q: T`Calculate $${M(a)} + ${M(b)}$.`, a: a + b, w: [a + b - 10, a + b + 10, a + b - 100, a + b + 100], s: T`Line up the digits by place value and add from the ones column, carrying whenever a column reaches 10 or more: $${M(a)} + ${M(b)} = ${M(a + b)}$.` }; },
    () => { const a = ri(1000, 9999), b = ri(100, a - 100); return { q: T`Calculate $${M(a)} - ${M(b)}$.`, a: a - b, w: [colDiff(a, b), a - b + 10, a - b - 10, a - b + 100], s: T`Subtract column by column from the ones, borrowing when the top digit is smaller: $${M(a)} - ${M(b)} = ${M(a - b)}$. Check: $${M(a - b)} + ${M(b)} = ${M(a)}$.` }; },
    () => { const t = pick([100, 500, 1000, 2000, 5000, 10000]), b = ri(Math.ceil(t / 10), t - 1); return { q: T`What number goes in the box? $\square + ${M(b)} = ${M(t)}$`, a: t - b, w: [t + b, t - b + 10, t - b - 10, t - b + 1], s: T`Subtraction undoes addition: $${M(t)} - ${M(b)} = ${M(t - b)}$.` }; },
    () => { const s0 = ri(300, 900), r = ri(40, 300), l = ri(50, 400); return { q: T`A library had ${F(s0)} books. It received ${F(r)} new books and then lent out ${F(l)} books. How many books are left in the library?`, a: s0 + r - l, w: [s0 + r + l, s0 - r + l, s0 - l, s0 + r - l + 10], s: T`Add the new books, then subtract the ones lent out: $${M(s0)} + ${M(r)} - ${M(l)} = ${M(s0 + r - l)}$.` }; },
    () => { const [p1, p2] = pick([[T`Mia`, T`Leo`], [T`Sari`, T`Budi`], [T`Ana`, T`Tom`], [T`Dewi`, T`Raka`]]); const x = ri(1200, 9800), y = ri(300, x - 100); return { q: T`${p1} scored ${F(x)} points in a game and ${p2} scored ${F(y)} points. How many more points did ${p1} score?`, a: x - y, w: [x + y, x - y + 100, x - y - 10, colDiff(x, y)], s: T`"How many more" asks for the difference: $${M(x)} - ${M(y)} = ${M(x - y)}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'mul-div', title: 'Multiplication & Division',
  blurb: 'Times tables, multi-digit multiplication, division with and without remainders.',
  lesson: () => T`
<p><b>Multiplication</b> is repeated addition of equal groups: $4 \times 6$ means 4 groups of 6, which is $6 + 6 + 6 + 6 = 24$. <b>Division</b> splits an amount into equal groups: $24 \div 6 = 4$.</p>
${Key(T`<p>Multiplication and division undo each other: $4 \times 6 = 24 \iff 24 \div 6 = 4$.</p><ul><li>Order doesn't matter in multiplication: $a \times b = b \times a$.</li><li>Multiplication spreads over addition: $a \times (b + c) = a \times b + a \times c$.</li></ul>`)}
<h3>Multiplying bigger numbers</h3>
<p>Split one number into place values, multiply each part, and add (this is the distributive law at work):</p>
${Fm(T`347 \times 26 = 347 \times 20 + 347 \times 6 = 6{,}940 + 2{,}082 = 9{,}022`)}
<h3>Division and remainders</h3>
<p>When a number does not divide exactly, the amount left over is the <b>remainder</b>. It is always smaller than the divisor.</p>
${Fm(T`47 \div 5 = 9 \text{ remainder } 2 \qquad \text{because } 5 \times 9 + 2 = 47`)}
${Ex(T`<p>150 students go on a trip. Each bus holds 40 students. How many buses are needed?</p><p>$150 \div 40 = 3$ remainder 30. Three buses carry 120 students; the other 30 still need a bus, so <b>4 buses</b> are needed.</p>`)}
${Tip(T`<p>In word problems, decide what the remainder means. "How many buses are <i>needed</i>" rounds up; "how many boxes can be <i>completely filled</i>" rounds down.</p>`)}`,
  gens: [
    () => { const a = ri(2, 12), b = ri(2, 12); return { q: T`Calculate $${a} \times ${b}$.`, a: a * b, w: [a * b + a, a * b - b, (a + 1) * (b + 1), a + b], s: T`$${a} \times ${b} = ${a * b}$ — that is ${b} groups of ${a}.` }; },
    () => { const a = ri(12, 999), b = ri(3, 29), t = Math.floor(b / 10) * 10, o = b % 10; return { q: T`Calculate $${M(a)} \times ${b}$.`, a: a * b, w: [a * b + 10, a * b - a, a * (b + 1), a * b + 100], s: t && o ? T`Split ${b} into ${t} + ${o}: $${M(a)} \times ${t} + ${M(a)} \times ${o} = ${M(a * t)} + ${M(a * o)} = ${M(a * b)}$.` : T`$${M(a)} \times ${b} = ${M(a * b)}$.` }; },
    () => { const b = ri(2, 12), c = ri(11, 99), n = b * c; return { q: T`Calculate $${M(n)} \div ${b}$.`, a: c, w: [c + 1, c - 1, c + 10, c - 10], s: T`Division undoes multiplication: $${b} \times ${c} = ${M(n)}$, so $${M(n)} \div ${b} = ${c}$.` }; },
    () => { const d = ri(3, 9); let n = ri(20, 200); if (n % d === 0) n += ri(1, d - 1); const q = Math.floor(n / d), r = n % d; return { q: T`What is the remainder when ${n} is divided by ${d}?`, a: r, w: [q, d - r, r + 1, r - 1], s: T`$${d} \times ${q} = ${d * q}$ and $${n} - ${d * q} = ${r}$, so $${n} \div ${d} = ${q}$ remainder <b>${r}</b>.` }; },
    () => {
      const b = pick([6, 8, 10, 12, 24]); let n = ri(50, 400); if (n % b === 0) n += ri(1, b - 1);
      const needed = chance(), item = pick([T`eggs`, T`cupcakes`, T`pencils`, T`bottles`]);
      const a = needed ? Math.ceil(n / b) : Math.floor(n / b);
      return { q: needed ? T`${F(n)} ${item} are packed into boxes that hold ${b} each. How many boxes are needed to pack all of them?` : T`A shop packs ${F(n)} ${item} into boxes of ${b}. How many boxes can be <b>completely</b> filled?`,
        a, w: [needed ? a - 1 : a + 1, a + 2, a - 2, n % b],
        s: T`$${M(n)} \div ${b} = ${Math.floor(n / b)}$ remainder ${n % b}. ${needed ? T`The ${n % b} leftover ${item} still need a box, so <b>${a}</b> boxes are needed.` : T`Only <b>${a}</b> boxes are full; ${n % b} ${item} are left over.`}` };
    },
    () => { const r = ri(12, 40), s = ri(15, 45); return { q: T`A hall has ${r} rows of chairs with ${s} chairs in each row. How many chairs are there altogether?`, a: r * s, w: [r + s, r * s + r, r * s - s, (r + 1) * s], s: T`Equal rows mean multiplication: $${r} \times ${s} = ${M(r * s)}$ chairs.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'order-ops', title: 'Order of Operations',
  blurb: 'Brackets, powers, then multiplication and division, then addition and subtraction.',
  lesson: () => T`
<p>When a calculation has several operations, everyone must do them in the same order, or the same expression would give different answers. The agreed order is often remembered as <b>BODMAS</b> or <b>PEMDAS</b>.</p>
${Tbl([T`Step`, T`Operation`, T`Example`], [['1', T`Brackets / Parentheses`, T`$(2 + 3) \times 4 = 5 \times 4$`], ['2', T`Orders / Exponents (powers, roots)`, T`$2 + 3^2 = 2 + 9$`], ['3', T`Division and Multiplication — left to right`, T`$12 \div 3 \times 2 = 4 \times 2$`], ['4', T`Addition and Subtraction — left to right`, T`$10 - 4 + 3 = 6 + 3$`]])}
${Key(T`<p>Multiplication and division have <b>equal</b> priority, and so do addition and subtraction. Within the same level, work from <b>left to right</b>.</p>`)}
${Ex(T`<p>Evaluate $20 - 8 \div 2 \times 3 + 1$.</p><ol><li>Division and multiplication first, left to right: $8 \div 2 = 4$, then $4 \times 3 = 12$.</li><li>Now $20 - 12 + 1$, left to right: $8 + 1 = 9$.</li></ol><p>Answer: <b>9</b>.</p>`)}
${Ex(T`<p>Evaluate $(8 + 4) \times 3 - 2^3$.</p><ol><li>Brackets: $8 + 4 = 12$.</li><li>Powers: $2^3 = 8$.</li><li>Multiply: $12 \times 3 = 36$.</li><li>Subtract: $36 - 8 = 28$.</li></ol>`)}
${Tip(T`<p>"PEMDAS" does not mean multiplication before division. $12 \div 3 \times 2 = 8$, not $12 \div 6 = 2$.</p>`)}`,
  gens: [
    () => { const a = ri(2, 20), b = ri(2, 9), c = ri(2, 9); return { q: T`Evaluate $${a} + ${b} \times ${c}$.`, a: a + b * c, w: [(a + b) * c, a * b + c, a + b + c], s: T`Multiply first: $${b} \times ${c} = ${b * c}$. Then add: $${a} + ${b * c} = ${a + b * c}$.` }; },
    () => { const a = ri(2, 12), b = ri(2, 12), c = ri(2, 6), d = ri(1, 20), v = (a + b) * c - d; return { q: T`Evaluate $(${a} + ${b}) \times ${c} - ${d}$.`, a: v, w: [a + b * c - d, (a + b) * (c - d), (a + b) * c + d], s: T`Brackets: $${a} + ${b} = ${a + b}$. Multiply: $${a + b} \times ${c} = ${(a + b) * c}$. Subtract: $${(a + b) * c} - ${d} = ${v}$.` }; },
    () => { const c = ri(2, 6), k = ri(2, 8), b = c * k, d = ri(2, 5), a = k * d + ri(1, 30), v = a - k * d; return { q: T`Evaluate $${a} - ${b} \div ${c} \times ${d}$.`, a: v, w: [a - b / (c * d), ((a - b) / c) * d, a - k + d, a - k - d].filter(Number.isInteger), s: T`Division and multiplication first, left to right: $${b} \div ${c} = ${k}$, then $${k} \times ${d} = ${k * d}$. Finally $${a} - ${k * d} = ${v}$.` }; },
    () => { const a = ri(2, 30), b = ri(2, 9), c = ri(1, a + b * b - 1), v = a + b * b - c; return { q: T`Evaluate $${a} + ${b}^2 - ${c}$.`, a: v, w: [(a + b) ** 2 - c, a + 2 * b - c, a + b * b + c], s: T`Powers first: $${b}^2 = ${b * b}$. Then left to right: $${a} + ${b * b} - ${c} = ${v}$.` }; },
    () => { const d = ri(2, 6), k = ri(2, 6), b = ri(1, d * k - 1), c = d * k - b, a = ri(2, 9); return { q: T`Evaluate $${a} \times (${b} + ${c}) \div ${d}$.`, a: a * k, w: [a * b + c / d, a * (b + c / d), a * k + d].filter(Number.isInteger), s: T`Brackets: $${b} + ${c} = ${b + c}$. Then left to right: $${a} \times ${b + c} = ${a * (b + c)}$ and $${a * (b + c)} \div ${d} = ${a * k}$.` }; },
    () => { const a = ri(30, 60), b = ri(2, 15), c = ri(2, 15); return { q: T`Evaluate $${a} - ${b} + ${c}$.`, a: a - b + c, w: [a - b - c, a + b + c, a + b - c], s: T`Addition and subtraction have equal priority, so go left to right: $${a} - ${b} = ${a - b}$, then $${a - b} + ${c} = ${a - b + c}$. Adding $${b} + ${c}$ first would wrongly give ${a - b - c}.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'factors', title: 'Factors, Multiples & Primes',
  blurb: 'Factors and multiples, prime numbers, prime factorization, GCF and LCM.',
  lesson: () => T`
<p>A <b>factor</b> of a number divides it exactly. A <b>multiple</b> of a number is that number times a whole number.</p>
<ul><li>Factors of 12: 1, 2, 3, 4, 6, 12 (they come in pairs: $1 \times 12$, $2 \times 6$, $3 \times 4$).</li><li>Multiples of 12: 12, 24, 36, 48, …</li></ul>
<h3>Prime and composite numbers</h3>
<p>A <b>prime</b> number has exactly two factors: 1 and itself (2, 3, 5, 7, 11, 13, …). A <b>composite</b> number has more than two factors. The number 1 is neither prime nor composite, and 2 is the only even prime.</p>
${Tbl([T`Divisible by`, T`Rule`], [['2', T`last digit is even`], ['3', T`digit sum is divisible by 3`], ['4', T`last two digits form a multiple of 4`], ['5', T`last digit is 0 or 5`], ['6', T`divisible by both 2 and 3`], ['9', T`digit sum is divisible by 9`], ['10', T`last digit is 0`]])}
<h3>Prime factorization</h3>
<p>Every whole number greater than 1 can be written as a product of primes in exactly one way. Use a factor tree: keep splitting until every branch ends in a prime.</p>
${Fm(T`360 = 36 \times 10 = (4 \times 9) \times (2 \times 5) = 2^3 \times 3^2 \times 5`)}
<h3>GCF and LCM</h3>
${Key(T`<p>The <b>greatest common factor</b> (GCF, also called HCF or GCD) is the largest number dividing both numbers. The <b>least common multiple</b> (LCM) is the smallest number both divide into.</p><p>Using prime factorizations: the GCF takes each shared prime with its <b>smallest</b> power; the LCM takes every prime with its <b>largest</b> power.</p>`)}
${Ex(T`<p>$24 = 2^3 \times 3$ and $36 = 2^2 \times 3^2$.</p><p>GCF $= 2^2 \times 3 = 12$. &nbsp; LCM $= 2^3 \times 3^2 = 72$.</p><p>Check: $\text{GCF} \times \text{LCM} = 12 \times 72 = 864 = 24 \times 36$ ✓ (this is always true for two numbers).</p>`)}
${Tip(T`<p>GCF problems are about <i>splitting into equal groups</i> (the largest group size). LCM problems are about <i>things happening together again</i> (the first time cycles line up).</p>`)}`,
  gens: [
    () => { const g = ri(2, 12); let m, n; do { m = ri(2, 9); n = ri(2, 9); } while (m === n || gcd(m, n) !== 1); const a = g * m, b = g * n; return { q: T`What is the greatest common factor (GCF) of ${a} and ${b}?`, a: g, w: [lcm(a, b), g * 2, Math.min(m, n), Math.min(a, b)], s: T`Factors of ${a}: ${divisors(a).join(LS())}.<br>Factors of ${b}: ${divisors(b).join(LS())}.<br>The largest factor they share is <b>${g}</b>.` }; },
    () => { let a, b; do { a = ri(3, 15); b = ri(3, 15); } while (a === b || a % b === 0 || b % a === 0); const L = lcm(a, b); return { q: T`What is the least common multiple (LCM) of ${a} and ${b}?`, a: L, w: [a * b, gcd(a, b), L * 2, L + a], s: T`Multiples of ${a}: ${range(1, L / a).map(k => k * a).join(LS())}, …<br>Multiples of ${b}: ${range(1, L / b).map(k => k * b).join(LS())}, …<br>The first one they share is <b>${L}</b>.` }; },
    () => { const p = pick(PRIMES.filter(x => x > 10 && x < 100)); const comps = sample([21, 27, 33, 39, 49, 51, 57, 63, 69, 77, 81, 87, 91, 93, 111, 119], 3); return { q: T`Which of these numbers is <b>prime</b>?`, a: p, w: comps, only: 'mc', s: T`${p} has exactly two factors, 1 and ${p}. The others are composite: ${comps.map(c => { const f = divisors(c)[1]; return `${c} = ${f} × ${c / f}`; }).join('; ')}.` }; },
    () => { const n = pick([12, 16, 18, 20, 24, 28, 30, 32, 36, 40, 42, 45, 48, 50, 54, 56, 60, 63, 64, 72, 75, 80, 81, 84, 90, 96, 100]); const ds = divisors(n); return { q: T`How many factors does ${n} have?`, a: ds.length, w: [ds.length - 1, ds.length + 1, ds.length - 2, ds.length + 2], s: T`List the factor pairs: ${ds.filter(d => d * d <= n).map(d => `${d} × ${n / d}`).join(LS())}. The factors are ${ds.join(LS())} — that is <b>${ds.length}</b> factors.` }; },
    () => {
      let n, f; do { n = pick([2, 2, 2, 3, 3, 5, 7]) * pick([2, 3, 5, 7]) * pick([2, 2, 3, 5, 11]) * pick([1, 2, 3]); f = primeFactors(n); } while (Object.keys(f).length < 2 || n < 24);
      const show = g => '$' + Object.keys(g).map(Number).sort((x, y) => x - y).map(p => (g[p] > 1 ? `${p}^{${g[p]}}` : `${p}`)).join(T` \times `) + '$';
      const ks = Object.keys(f).map(Number).sort((x, y) => x - y);
      const f1 = { ...f }; f1[ks[0]]++;
      const f2 = { ...f }; f2[ks[ks.length - 1]]++;
      const f3 = { ...f }; const last = ks[ks.length - 1], nx = { 2: 3, 3: 5, 5: 7, 7: 11, 11: 13 }[last]; if (!f3[nx]) { f3[nx] = f3[last]; delete f3[last]; }
      const d = divisors(n).find(x => x > 3 && !isPrime(x) && n / x > 1);
      return { q: T`What is the prime factorization of ${n}?`, a: show(f), w: [show(f1), show(f2), show(f3), d ? T`$${d} \times ${n / d}$` : null], s: T`Keep dividing by primes: ${n} = ${show(f)}. Every factor is prime, and multiplying back gives ${n}.` };
    },
    () => { const g = ri(3, 12); let m, n; do { m = ri(2, 7); n = ri(2, 7); } while (m === n || gcd(m, n) !== 1); const r = g * m, b = g * n; return { q: T`Hana has ${r} red beads and ${b} blue beads. She makes identical bracelets that use all the beads, each with the same number of red and the same number of blue beads. What is the greatest number of bracelets she can make?`, a: g, w: [lcm(r, b), m + n, Math.min(r, b), g * 2], s: T`The number of bracelets must divide both ${r} and ${b}, so find the GCF: $\text{GCF}(${r}, ${b}) = ${g}$. She can make <b>${g}</b> bracelets, each with ${m} red and ${n} blue beads.` }; },
    () => { let a, b; do { a = ri(4, 18); b = ri(4, 18); } while (a === b || a % b === 0 || b % a === 0); const L = lcm(a, b); return { q: T`Two lights have just flashed together. One flashes every ${a} seconds and the other every ${b} seconds. After how many seconds will they next flash together?`, a: L, u: T`seconds`, w: [a * b, a + b, gcd(a, b), L * 2], s: T`They flash together at the common multiples of ${a} and ${b}. The first is the LCM: <b>${L}</b> seconds.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'fractions', title: 'Fractions',
  blurb: 'Equivalent fractions, simplifying, comparing, mixed numbers and all four operations.',
  lesson: () => T`
<p>A <b>fraction</b> $\frac{a}{b}$ means $a$ parts out of $b$ equal parts. The top number is the <b>numerator</b>; the bottom number is the <b>denominator</b>.</p>
<h3>Equivalent fractions and simplest form</h3>
<p>Multiplying or dividing the numerator and the denominator by the same number gives an equal fraction: $\frac{2}{3} = \frac{4}{6} = \frac{10}{15}$. To <b>simplify</b>, divide both by their GCF:</p>
${Fm(T`\frac{18}{24} = \frac{18 \div 6}{24 \div 6} = \frac{3}{4}`)}
<h3>Mixed numbers</h3>
<p>$2\frac{1}{3}$ means $2 + \frac{1}{3}$. As an improper fraction: $2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$.</p>
<h3>Adding and subtracting</h3>
${Key(T`<p>You can only add or subtract fractions with the <b>same denominator</b>. Rewrite them over a common denominator (the LCM of the denominators), then add or subtract the numerators.</p>`)}
${Ex(T`<p>$\frac{2}{3} + \frac{3}{4} = \frac{8}{12} + \frac{9}{12} = \frac{17}{12} = 1\frac{5}{12}$</p>`)}
<h3>Multiplying and dividing</h3>
${Fm(T`\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \qquad\qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}`)}
<p>To divide, <b>keep</b> the first fraction, <b>change</b> ÷ to ×, and <b>flip</b> the second fraction.</p>
${Ex(T`<p>$\frac{3}{5} \div \frac{9}{10} = \frac{3}{5} \times \frac{10}{9} = \frac{30}{45} = \frac{2}{3}$</p>`)}
<h3>Fraction of an amount</h3>
<p>Divide by the denominator, then multiply by the numerator: $\frac{3}{8}$ of $40 = (40 \div 8) \times 3 = 15$.</p>
${Tip(T`<p>Never add the denominators: $\frac{1}{2} + \frac{1}{3}$ is $\frac{5}{6}$, not $\frac{2}{5}$.</p>`)}`,
  gens: [
    () => { const [n, d] = properFrac(3, 12), k = ri(2, 9), N = n * k, D = d * k; const pf = [2, 3, 5, 7].find(p => k % p === 0 && k !== p); return { q: T`Write $\frac{${N}}{${D}}$ in simplest form.`, a: fx(n, d), alt: [`${n}/${d}`], h: T`Type a fraction such as 3/4.`, w: [pf ? rawF(N / pf, D / pf) : fx(n, d + 1), n > 1 ? rawF(d, n) : `$${d}$`, fx(n + 1, d + 1)], s: T`The GCF of ${N} and ${D} is ${k}. Divide both by ${k}: $\frac{${N} \div ${k}}{${D} \div ${k}} = \frac{${n}}{${d}}$.` }; },
    () => { let a, b; do { a = properFrac(2, 12); b = properFrac(2, 12); } while (a[1] === b[1]); const [n1, d1] = a, [n2, d2] = b, L = lcm(d1, d2), N = n1 * (L / d1) + n2 * (L / d2); return { q: T`Calculate $\frac{${n1}}{${d1}} + \frac{${n2}}{${d2}}$. Give the answer in simplest form.`, ...FR(N, L), h: hFrac, w: [fx(n1 + n2, d1 + d2), fx(n1 + n2, d1 * d2), fx(n1 * n2, d1 * d2), fx(N + 1, L)], s: T`Common denominator ${L}: $\frac{${n1 * (L / d1)}}{${L}} + \frac{${n2 * (L / d2)}}{${L}} = \frac{${N}}{${L}}${gcd(N, L) > 1 ? T` = ${frT(N, L)}` : ''}$.` }; },
    () => { let a, b; do { a = properFrac(2, 12); b = properFrac(2, 12); } while (a[1] === b[1] || a[0] / a[1] <= b[0] / b[1]); const [n1, d1] = a, [n2, d2] = b, L = lcm(d1, d2), N = n1 * (L / d1) - n2 * (L / d2); return { q: T`Calculate $\frac{${n1}}{${d1}} - \frac{${n2}}{${d2}}$. Give the answer in simplest form.`, ...FR(N, L), h: hFrac, w: [fx(n1 * d2 + n2 * d1, d1 * d2), fx(N + 1, L), fx(Math.max(1, Math.abs(n1 - n2)), Math.max(2, Math.abs(d1 - d2))), fx(n1 * n2, d1 * d2)], s: T`Common denominator ${L}: $\frac{${n1 * (L / d1)}}{${L}} - \frac{${n2 * (L / d2)}}{${L}} = \frac{${N}}{${L}}${gcd(N, L) > 1 ? T` = ${frT(N, L)}` : ''}$.` }; },
    () => { const [n1, d1] = properFrac(2, 10), [n2, d2] = properFrac(2, 10); return { q: T`Calculate $\frac{${n1}}{${d1}} \times \frac{${n2}}{${d2}}$. Give the answer in simplest form.`, ...FR(n1 * n2, d1 * d2), h: hFrac, w: [fx(n1 * d2, d1 * n2), fx(n1 + n2, d1 + d2), fx(n1 * n2, d1 + d2), fx(n1 * n2 + 1, d1 * d2)], s: T`Multiply tops and bottoms: $\frac{${n1} \times ${n2}}{${d1} \times ${d2}} = \frac{${n1 * n2}}{${d1 * d2}}${gcd(n1 * n2, d1 * d2) > 1 ? T` = ${frT(n1 * n2, d1 * d2)}` : ''}$.` }; },
    () => { const [n1, d1] = properFrac(2, 10), [n2, d2] = properFrac(2, 10); return { q: T`Calculate $\frac{${n1}}{${d1}} \div \frac{${n2}}{${d2}}$. Give the answer in simplest form.`, ...FR(n1 * d2, d1 * n2), h: hFrac, w: [fx(n1 * n2, d1 * d2), fx(d1 * n2, n1 * d2), fx(n1 + d2, d1 + n2)], s: T`Keep, change, flip: $\frac{${n1}}{${d1}} \times \frac{${d2}}{${n2}} = \frac{${n1 * d2}}{${d1 * n2}}${gcd(n1 * d2, d1 * n2) > 1 ? T` = ${frT(n1 * d2, d1 * n2)}` : ''}$.` }; },
    () => { const [n, d] = properFrac(2, 10), amt = d * ri(2, 15); return { q: T`What is $\frac{${n}}{${d}}$ of ${amt}?`, a: (amt / d) * n, w: [amt / d, amt * n, amt - (amt / d) * n, amt / n], s: T`Divide by the denominator, then multiply by the numerator: $${amt} \div ${d} = ${amt / d}$ and $${amt / d} \times ${n} = ${(amt / d) * n}$.` }; },
    () => { const w0 = ri(1, 9), [n, d] = properFrac(2, 9), N = w0 * d + n; return { q: T`Write $${w0}\frac{${n}}{${d}}$ as an improper fraction.`, a: rawF(N, d), alt: [`${N}/${d}`], h: T`Type a fraction such as 11/4.`, w: [rawF(w0 * n + d, d), rawF(w0 + n, d), rawF(N, w0 * d + 1), rawF(w0 * d - n, d)], s: T`Whole number × denominator + numerator: $${w0} \times ${d} + ${n} = ${N}$. Keep the denominator: $\frac{${N}}{${d}}$.` }; },
    () => { const fs = []; while (fs.length < 4) { const f = properFrac(3, 12); if (!fs.some(g => g[0] * f[1] === f[0] * g[1])) fs.push(f); } const big = chance(); const best = fs.reduce((x, y) => ((big ? y[0] / y[1] > x[0] / x[1] : y[0] / y[1] < x[0] / x[1]) ? y : x)); const cmp = fs.map(f => `$\\frac{${f[0]}}{${f[1]}} \\approx ${M(rnd(f[0] / f[1], 3))}$`).join(LS()); return { q: big ? T`Which fraction is the <b>largest</b>?` : T`Which fraction is the <b>smallest</b>?`, a: fx(...best), w: fs.filter(f => f !== best).map(f => fx(...f)), only: 'mc', s: big ? T`Compare them as decimals (or over a common denominator): ${cmp}. The largest is $${frT(...best)}$.` : T`Compare them as decimals (or over a common denominator): ${cmp}. The smallest is $${frT(...best)}$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'decimals', title: 'Decimals',
  blurb: 'Tenths, hundredths and thousandths; comparing, rounding and calculating with decimals.',
  lesson: () => T`
<p>Decimals extend place value to the right of the ones place. Each place is one tenth of the place to its left.</p>
${Tbl([T`Tens`, T`Ones`, I18N.conf.dec, T`Tenths`, T`Hundredths`, T`Thousandths`], [['4', '7', I18N.conf.dec, '3', '0', '5']])}
<p>So $47.305 = 40 + 7 + \frac{3}{10} + \frac{0}{100} + \frac{5}{1000}$.</p>
<h3>Comparing decimals</h3>
<p>Give the numbers the same number of decimal places by adding zeros, then compare: $0.5 = 0.50 \gt 0.45$. A longer decimal is not necessarily larger!</p>
<h3>Adding and subtracting</h3>
${Key(T`<p>Line up the <b>decimal points</b>, fill empty places with zeros, then add or subtract as with whole numbers.</p>`)}
${Ex(T`<p>$12.7 + 3.45$: write $12.70 + 3.45 = 16.15$.</p>`)}
<h3>Multiplying</h3>
<p>Multiply as if there were no decimal points, then count the total number of decimal places in the factors — the answer has that many.</p>
${Fm(T`1.3 \times 0.24: \quad 13 \times 24 = 312 \;\Rightarrow\; 0.312 \quad (1 + 2 = 3 \text{ places})`)}
<h3>Dividing and converting</h3>
<p>Multiplying by 10, 100, 1000 moves the digits 1, 2, 3 places left (the number grows); dividing moves them right. A fraction becomes a decimal by dividing the numerator by the denominator: $\frac{3}{8} = 3 \div 8 = 0.375$.</p>
<h3>Rounding decimals</h3>
<p>Same rule as whole numbers: look at the next digit. $6.847$ to the nearest tenth is $6.8$; to the nearest hundredth it is $6.85$.</p>
${Tip(T`<p>$\frac{3}{4}$ is 0.75, not 3.4. The fraction bar means divide.</p>`)}`,
  gens: [
    () => { const A = ri(100, 9999), B = ri(10, 999), a = A / 100, b = B / 10; const r = (A + B * 10) / 100; return { q: T`Calculate $${M(a)} + ${M(b)}$.`, a: r, w: [(A * 10 + B) / 1000, r + 1, (A + B * 10 - 10) / 100, (A + B) / 100], s: T`Line up the decimal points (write ${F(b)} as ${F(b, 2)}) and add: $${M(a)} + ${M(b)} = ${M(r)}$.` }; },
    () => { const A = ri(500, 9999), B = ri(10, A - 10); return { q: T`Calculate $${M(A / 100)} - ${M(B / 100)}$.`, a: (A - B) / 100, w: [(A - B + 10) / 100, (A - B - 1) / 100, (A + B) / 100, (A - B) / 10], s: T`Line up the decimal points and subtract: $${M(A / 100)} - ${M(B / 100)} = ${M((A - B) / 100)}$.` }; },
    () => { const A = ri(11, 99), whole = chance(), B = whole ? ri(2, 9) : ri(11, 49), P = A * B, res = whole ? P / 10 : P / 100; return { q: T`Calculate $${M(A / 10)} \times ${M(whole ? B : B / 10)}$.`, a: res, w: [whole ? P / 100 : P / 10, whole ? P : P / 1000, whole ? res + 1 : res + 0.1], s: T`Ignore the decimal points: $${A} \times ${B} = ${P}$. There ${whole ? T`is 1 decimal place` : T`are 2 decimal places`} in the question, so the answer is <b>${F(res)}</b>.` }; },
    () => { const d = pick([2, 4, 5, 8, 10, 20, 25, 50]); let n; do { n = ri(1, d - 1); } while (gcd(n, d) !== 1); return { q: T`Write $\frac{${n}}{${d}}$ as a decimal.`, a: n / d, w: [parseFloat(`${n}.${d}`), (n / d) * 10, n / (d * 10)], s: T`Divide the numerator by the denominator: $${n} \div ${d} = ${M(n / d)}$.` }; },
    () => { let k; do { k = ri(1000, 99999); } while (k % 10 === 0); const [p, near, place] = pick([[100, T`tenth`, T`tenths`], [10, T`hundredth`, T`hundredths`], [1000, T`whole number`, T`ones`]]); const a = (Math.round(k / p) * p) / 1000; return { q: T`Round ${F(k / 1000)} to the nearest ${near}.`, a, w: [(Math.floor(k / p) * p) / 1000, (Math.ceil(k / p) * p) / 1000 === a ? (Math.floor(k / p) * p) / 1000 : (Math.ceil(k / p) * p) / 1000, (Math.round(k / (p === 1000 ? 100 : p * 10)) * (p === 1000 ? 100 : p * 10)) / 1000, (Math.round(k / (p === 10 ? 100 : 10)) * (p === 10 ? 100 : 10)) / 1000], s: T`Look at the digit right after the ${place} place and round ${F(k / 1000)} to <b>${F(a)}</b>.` }; },
    () => { let d1, d2; do { d1 = ri(1, 9); d2 = ri(1, 9); } while (d1 === d2); const nums = sample([...new Set([`0.${d1}${d2}`, `0.${d2}${d1}`, `0.${d1}`, `0.${d2}`, `0.${d1}0${d2}`, `0.0${d1}${d2}`].map(Number))], 4); const big = chance(), a = big ? Math.max(...nums) : Math.min(...nums); const list = nums.map(x => F(x)).join(LS() + '&nbsp;'), three = nums.map(x => F(x, 3)).join(LS()); return { q: big ? T`Which decimal is the <b>greatest</b>? &nbsp;${list}` : T`Which decimal is the <b>smallest</b>? &nbsp;${list}`, a, w: nums.filter(x => x !== a), s: big ? T`Write them all with three decimal places: ${three}. The greatest is <b>${F(a)}</b>.` : T`Write them all with three decimal places: ${three}. The smallest is <b>${F(a)}</b>.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'percent', title: 'Percentages',
  blurb: 'Percent of an amount, converting between forms, discounts and percentage change.',
  lesson: () => T`
<p><b>Percent</b> means "out of 100": $35\% = \frac{35}{100} = 0.35$.</p>
${Tbl([T`Fraction`, T`Decimal`, T`Percent`], [[T`$\frac{1}{2}$`, F(0.5), '50%'], [T`$\frac{1}{4}$`, F(0.25), '25%'], [T`$\frac{3}{4}$`, F(0.75), '75%'], [T`$\frac{1}{5}$`, F(0.2), '20%'], [T`$\frac{1}{10}$`, F(0.1), '10%'], [T`$\frac{1}{8}$`, F(0.125), F(12.5) + '%']])}
<h3>The three basic questions</h3>
${Key(T`<ul><li><b>Percent of an amount:</b> $p\% \text{ of } N = \frac{p}{100} \times N$.</li><li><b>What percent is $a$ of $b$?</b> $\frac{a}{b} \times 100\%$.</li><li><b>Percentage change:</b> $\frac{\text{change}}{\text{original}} \times 100\%$.</li></ul>`)}
${Ex(T`<p>$15\%$ of $240 = 0.15 \times 240 = 36$. &nbsp; Mental shortcut: $10\% = 24$, $5\% = 12$, total $36$.</p>`)}
<h3>Increase, decrease and discounts</h3>
<p>A $20\%$ discount on 80 dollars saves $0.2 \times 80 = 16$ dollars, so the sale price is $80 - 16 = 64$ dollars. Faster: pay $80\%$ of the price, $0.8 \times 80 = 64$.</p>
<p>An increase of $p\%$ multiplies by $1 + \frac{p}{100}$; a decrease multiplies by $1 - \frac{p}{100}$.</p>
${Tip(T`<p>Percentage change always divides by the <b>original</b> value. A price rising from 50 to 60 is a $\frac{10}{50} = 20\%$ increase, not $\frac{10}{60}$.</p>`)}`,
  gens: [
    () => { const p = pick([5, 10, 12, 15, 20, 25, 30, 40, 50, 60, 75, 80, 120, 150]), N = ri(2, 40) * 20; return { q: T`What is ${p}% of ${F(N)}?`, a: (p * N) / 100, w: [N / p, (p * N) / 10, N - (p * N) / 100, (p * N) / 1000], s: T`$${p}\% \text{ of } ${M(N)} = \frac{${p}}{100} \times ${M(N)} = ${M((p * N) / 100)}$.` }; },
    () => { let b, p; do { b = pick([20, 25, 40, 50, 80, 120, 150, 200, 250, 400, 500]); p = ri(1, 19) * 5; } while ((b * p) % 100 !== 0); const a = (b * p) / 100; return { q: T`What percent of ${b} is ${a}?`, a: p, u: '%', w: [(b / a) * 100, a, 100 - p, p * 2], s: T`$\frac{${a}}{${b}} \times 100\% = ${p}\%$.` }; },
    () => { const d = pick([2, 4, 5, 10, 20, 25, 50]); let n; do { n = ri(1, d - 1); } while (gcd(n, d) !== 1); return { q: T`Write $\frac{${n}}{${d}}$ as a percentage.`, a: (n * 100) / d, u: '%', w: [n / d, n * d, 100 - (n * 100) / d, (n * 10) / d], s: T`$\frac{${n}}{${d}} = \frac{${(n * 100) / d}}{100} = ${(n * 100) / d}\%$.` }; },
    () => { const price = ri(4, 40) * 5, p = pick([10, 15, 20, 25, 30, 40, 50]), disc = (price * p) / 100; return { q: T`A jacket costs ${price} dollars. It is on sale with ${p}% off. What is the sale price?`, a: price - disc, u: T`dollars`, w: [disc, price + disc, price - p], s: T`Discount $= ${p}\% \times ${price} = ${M(disc)}$. Sale price $= ${price} - ${M(disc)} = ${M(price - disc)}$ dollars.` }; },
    () => { const N = ri(20, 90) * 100, p = pick([5, 10, 15, 20, 25, 30]); return { q: T`A town has ${F(N)} people. The population increases by ${p}%. What is the new population?`, a: (N * (100 + p)) / 100, w: [(N * p) / 100, N + p, (N * (100 - p)) / 100], s: T`Increase $= ${p}\% \times ${M(N)} = ${M((N * p) / 100)}$. New population $= ${M(N)} + ${M((N * p) / 100)} = ${M((N * (100 + p)) / 100)}$.` }; },
    () => { const old = ri(2, 20) * 20, p = pick([10, 20, 25, 30, 40, 50, 75]), up = chance() || p === 75 ? true : false, nw = (old * (up ? 100 + p : 100 - p)) / 100, ch = Math.abs(nw - old); const frm = T`$\frac{${M(ch)}}{${old}} \times 100\% = ${p}\%$`; return { q: up ? T`The price of a book changes from ${old} dollars to ${F(nw)} dollars. What is the percentage increase?` : T`The price of a book changes from ${old} dollars to ${F(nw)} dollars. What is the percentage decrease?`, a: p, u: '%', w: [ch, rnd((ch / nw) * 100, 1), p / 2, 100 - p], s: up ? T`Change: ${F(ch)} dollars. Percentage increase: ${frm} — always divide by the <b>original</b> price.` : T`Change: ${F(ch)} dollars. Percentage decrease: ${frm} — always divide by the <b>original</b> price.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'measurement', title: 'Measurement & Units',
  blurb: 'Metric units of length, mass and capacity, and working with time.',
  lesson: () => T`
<p>The metric system is built on powers of ten, with prefixes that tell you the size of a unit.</p>
${Tbl([T`Prefix`, T`Meaning`, T`Examples`], [[T`kilo- (k)`, F(1000) + ' ×', un('km, kg')], [T`centi- (c)`, T`$\frac{1}{100}$`, un('cm')], [T`milli- (m)`, T`$\frac{1}{1000}$`, un('mm, mg, mL')]])}
${Tbl([T`Quantity`, T`Conversions`], [[T`Length`, un('1 km = ' + F(1000) + ' m · 1 m = 100 cm · 1 cm = 10 mm')], [T`Mass`, T`1 t (tonne) = 1,000 kg · 1 kg = 1,000 g`], [T`Capacity`, un('1 L = ' + F(1000) + ' mL')], [T`Time`, T`1 min = 60 s · 1 h = 60 min · 1 day = 24 h · 1 week = 7 days`]])}
${Key(T`<p>Going from a <b>bigger</b> unit to a <b>smaller</b> unit, you need more of them — <b>multiply</b>. Going from smaller to bigger — <b>divide</b>.</p>`)}
${Ex(T`<p>$3.5 \text{ km} = 3.5 \times 1000 = 3{,}500 \text{ m}$. &nbsp; $2{,}750 \text{ g} = 2{,}750 \div 1000 = 2.75 \text{ kg}$.</p>`)}
<h3>Time</h3>
<p>Time is <i>not</i> decimal: an hour has 60 minutes, not 100. To find elapsed time, count on in steps: from 09:35 to 13:10 is 25 min (to 10:00) + 3 h (to 13:00) + 10 min = 3 h 35 min = 215 minutes.</p>
${Tip(T`<p>Don't subtract times like ordinary numbers: $13{:}10 - 9{:}35$ is not $1310 - 935 = 375$ minutes.</p>`)}`,
  gens: [
    () => { const [big, small, f] = pick([['km', 'm', 1000], ['m', 'cm', 100], ['cm', 'mm', 10], ['m', 'mm', 1000], ['kg', 'g', 1000], ['L', 'mL', 1000], ['t', 'kg', 1000]]); const down = chance(); let v, a; if (down) { v = chance() ? ri(2, 60) : ri(12, 95) / 10; a = rnd(v * f, 4); } else { v = ri(5, 9999); a = v / f; } const from = down ? big : small, to = down ? small : big; return { q: T`Convert ${F(v)} ${un(from)} to ${un(to)}.`, a, u: to, w: [down ? v / f : v * f, down ? v * f * 10 : v / (f * 10), down ? (v * f) / 10 : (v * 10) / f], s: T`1 ${un(big)} = ${F(f)} ${un(small)}. ${down ? T`Bigger to smaller unit, so multiply: $${M(v)} \times ${M(f)} = ${M(a)}$` : T`Smaller to bigger unit, so divide: $${M(v)} \div ${M(f)} = ${M(a)}$`} ${un(to)}.` }; },
    () => { if (chance()) { const h = ri(1, 9), m = ri(1, 59); return { q: T`How many minutes are there in ${h} h ${m} min?`, a: 60 * h + m, u: T`minutes`, w: [100 * h + m, 60 * h, 60 * h - m, h * m], s: T`1 hour = 60 minutes: $${h} \times 60 + ${m} = ${60 * h + m}$ minutes.` }; } const m = ri(2, 20), s = ri(1, 59); return { q: T`How many seconds are there in ${m} min ${s} s?`, a: 60 * m + s, u: T`seconds`, w: [100 * m + s, 60 * m, 60 * m - s], s: T`1 minute = 60 seconds: $${m} \times 60 + ${s} = ${60 * m + s}$ seconds.` }; },
    () => { const h1 = ri(6, 14), m1 = ri(0, 11) * 5, dur = ri(7, 70) * 5, t1 = h1 * 60 + m1, t2 = t1 + dur; const hm = t => `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`; const naive = (Math.floor(t2 / 60) * 100 + (t2 % 60)) - (h1 * 100 + m1); return { q: T`A train leaves at ${hm(t1)} and arrives at ${hm(t2)} on the same day. How many minutes does the journey take?`, a: dur, u: T`minutes`, w: [naive, dur + 40, dur - 40, dur + 60], s: T`From ${hm(t1)} to ${hm(t2)} is ${Math.floor(dur / 60)} h ${dur % 60} min, which is $${Math.floor(dur / 60)} \times 60 + ${dur % 60} = ${dur}$ minutes.` }; },
    () => { const a1 = ri(1, 9), b1 = ri(10, 95), a2 = ri(1, 9), b2 = ri(10, 95), tot = (a1 + a2) * 100 + b1 + b2; return { q: T`Add ${a1} m ${b1} cm and ${a2} m ${b2} cm. Give the answer in centimetres.`, a: tot, u: 'cm', w: [(a1 + a2) * 100 + ((b1 + b2) % 100), (a1 + a2) * 10 + b1 + b2, tot + 100], s: T`${a1} m ${b1} cm = ${a1 * 100 + b1} cm and ${a2} m ${b2} cm = ${a2 * 100 + b2} cm. Total: $${a1 * 100 + b1} + ${a2 * 100 + b2} = ${tot}$ cm.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'perimeter-area', title: 'Perimeter & Area',
  blurb: 'Perimeter and area of rectangles, squares, triangles, parallelograms, trapezoids and composite shapes.',
  lesson: () => T`
<p>The <b>perimeter</b> is the total distance around a shape (measured in cm, m, …). The <b>area</b> is the amount of surface it covers (measured in square units: cm², m², …).</p>
${Fig(shapesSvg(), T`Rectangle, triangle and trapezoid — the height is always measured at right angles to the base.`)}
${Tbl([T`Shape`, T`Perimeter`, T`Area`], [[T`Rectangle`, T`$2(l + w)$`, T`$l \times w$`], [T`Square (side $s$)`, T`$4s$`, T`$s^2$`], [T`Triangle`, T`sum of the three sides`, T`$\frac{1}{2} b h$`], [T`Parallelogram`, T`sum of the sides`, T`$b h$`], [T`Trapezoid`, T`sum of the sides`, T`$\frac{1}{2}(a + b) h$`]])}
${Key(T`<p>A triangle is half of a rectangle (or parallelogram) with the same base and height — that is where the $\frac{1}{2}$ comes from.</p>`)}
${Ex(T`<p>A rectangle is 12 m by 5 m. Perimeter $= 2(12 + 5) = 34$ m. Area $= 12 \times 5 = 60$ m².</p>`)}
<h3>Composite shapes</h3>
<p>Split an L-shape or other composite shape into rectangles and triangles, then add the areas — or take a big rectangle and subtract the missing piece.</p>
${Tip(T`<p>Perimeter uses ordinary units (m); area uses square units (m²). Also, the height of a triangle is perpendicular to the base — not the slanted side.</p>`)}`,
  gens: [
    () => { const l = ri(4, 40), w = ri(2, l - 1); return { q: T`A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter?`, a: 2 * (l + w), u: 'cm', w: [l * w, l + w, 2 * l + w], s: T`$P = 2(l + w) = 2(${l} + ${w}) = ${2 * (l + w)}$ cm.` }; },
    () => { const l = ri(4, 30), w = ri(2, l - 1); return { q: T`A rectangular garden is ${l} m long and ${w} m wide. What is its area?`, a: l * w, u: 'm²', w: [2 * (l + w), l + w, l * w * 2], s: T`$A = l \times w = ${l} \times ${w} = ${l * w}$ m².` }; },
    () => { const s = ri(3, 15); return chance() ? { q: T`A square has an area of ${s * s} cm². What is its perimeter?`, a: 4 * s, u: 'cm', w: [s, (s * s) / 4, 2 * s, s * s], s: T`Side $= \sqrt{${s * s}} = ${s}$ cm, so the perimeter is $4 \times ${s} = ${4 * s}$ cm.` } : { q: T`A square has a perimeter of ${4 * s} cm. What is its area?`, a: s * s, u: 'cm²', w: [4 * s, 16 * s * s, 2 * s * s], s: T`Side $= ${4 * s} \div 4 = ${s}$ cm, so the area is $${s} \times ${s} = ${s * s}$ cm².` }; },
    () => { const b = ri(3, 30); let h = ri(2, 20); if ((b * h) % 2) h++; return { q: T`A triangle has a base of ${b} cm and a height of ${h} cm. What is its area?`, a: (b * h) / 2, u: 'cm²', w: [b * h, b + h, 2 * (b + h)], s: T`$A = \frac{1}{2} \times ${b} \times ${h} = ${(b * h) / 2}$ cm².` }; },
    () => { const b = ri(4, 25), h = ri(3, 15); return { q: T`A parallelogram has a base of ${b} m and a perpendicular height of ${h} m. What is its area?`, a: b * h, u: 'm²', w: [(b * h) / 2, 2 * (b + h), b + h], s: T`$A = b \times h = ${b} \times ${h} = ${b * h}$ m².` }; },
    () => { const a = ri(3, 15), b = ri(a + 1, 25); let h = ri(2, 12); if (((a + b) * h) % 2) h++; return { q: T`A trapezoid has parallel sides of ${a} cm and ${b} cm and a height of ${h} cm. What is its area?`, a: ((a + b) * h) / 2, u: 'cm²', w: [(a + b) * h, a * b * h, a + b + h], s: T`$A = \frac{1}{2}(a + b)h = \frac{1}{2}(${a} + ${b}) \times ${h} = ${((a + b) * h) / 2}$ cm².` }; },
    () => { const l = ri(6, 30), w = ri(2, l - 1), P = 2 * (l + w); return { q: T`A rectangle has a perimeter of ${P} m and a length of ${l} m. What is its width?`, a: w, u: 'm', w: [P - l, P / 2, P - 2 * l, P / 2 - l + 2], s: T`$2(l + w) = ${P}$, so $l + w = ${P / 2}$ and $w = ${P / 2} - ${l} = ${w}$ m.` }; },
    () => { const L = ri(8, 20), W = ri(6, L), a = ri(2, Math.floor(L / 2)), b = ri(2, Math.floor(W / 2)); return { q: T`An L-shaped floor is made by cutting a ${a} m × ${b} m rectangle out of one corner of a ${L} m × ${W} m rectangle. What is the area of the floor?`, a: L * W - a * b, u: 'm²', w: [L * W, L * W + a * b, 2 * (L + W)], s: T`Big rectangle minus the cut-out: $${L} \times ${W} - ${a} \times ${b} = ${L * W} - ${a * b} = ${L * W - a * b}$ m².` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'volume-basic', title: 'Volume & Surface Area',
  blurb: 'Volume of cubes and cuboids, capacity in litres, and surface area of boxes.',
  lesson: () => T`
<p><b>Volume</b> is the space a solid takes up, counted in <b>cubic units</b> (cm³, m³). A cube with 1 cm edges has a volume of 1 cm³.</p>
${Fm(T`\text{Cuboid: } V = l \times w \times h \qquad\qquad \text{Cube: } V = s^3`)}
${Key(T`<p>Capacity links to volume: $1 \text{ cm}^3 = 1 \text{ mL}$ and $1{,}000 \text{ cm}^3 = 1 \text{ L}$. Also $1 \text{ m}^3 = 1{,}000 \text{ L}$.</p>`)}
${Ex(T`<p>A fish tank is 50 cm long, 30 cm wide and 40 cm high.</p><p>$V = 50 \times 30 \times 40 = 60{,}000 \text{ cm}^3 = 60 \text{ L}$.</p>`)}
<h3>Surface area</h3>
<p>The surface area is the total area of all the faces. A cuboid has three pairs of equal rectangles:</p>
${Fm(T`SA = 2(lw + lh + wh) \qquad\qquad \text{Cube: } SA = 6s^2`)}
${Tip(T`<p>Volume uses cubic units (cm³); surface area uses square units (cm²). If you know the volume and two edges, divide to find the third: $h = \frac{V}{l \times w}$.</p>`)}`,
  gens: [
    () => { const s = ri(2, 12); return { q: T`A cube has edges of length ${s} cm. What is its volume?`, a: s ** 3, u: 'cm³', w: [6 * s * s, s * s, 3 * s, 12 * s], s: T`$V = s^3 = ${s}^3 = ${s ** 3}$ cm³.` }; },
    () => { const l = ri(2, 15), w = ri(2, 12), h = ri(2, 10); return { q: T`A box is ${l} cm long, ${w} cm wide and ${h} cm high. What is its volume?`, a: l * w * h, u: 'cm³', w: [2 * (l * w + l * h + w * h), l + w + h, l * w], s: T`$V = ${l} \times ${w} \times ${h} = ${l * w * h}$ cm³.` }; },
    () => { const l = ri(3, 15), w = ri(2, 10), h = ri(2, 12), V = l * w * h; return { q: T`A cuboid has a volume of ${V} cm³. Its length is ${l} cm and its width is ${w} cm. What is its height?`, a: h, u: 'cm', w: [V - l * w, h + 1, h * 2, l * w], s: T`$h = \frac{V}{l \times w} = \frac{${V}}{${l} \times ${w}} = \frac{${V}}{${l * w}} = ${h}$ cm.` }; },
    () => { const l = 10 * ri(2, 8), w = 10 * ri(2, 6), h = 10 * ri(2, 6), V = l * w * h; return { q: T`A tank is ${l} cm long, ${w} cm wide and ${h} cm high. How many litres of water can it hold?`, a: V / 1000, u: 'L', w: [V / 100, V / 10000, V], s: T`$V = ${l} \times ${w} \times ${h} = ${M(V)}$ cm³, and $1{,}000 \text{ cm}^3 = 1 \text{ L}$, so it holds $${M(V)} \div 1000 = ${M(V / 1000)}$ L.` }; },
    () => { const l = ri(3, 12), w = ri(2, 10), h = ri(2, 9); return { q: T`Find the total surface area of a cuboid measuring ${l} cm × ${w} cm × ${h} cm.`, a: 2 * (l * w + l * h + w * h), u: 'cm²', w: [l * w * h, l * w + l * h + w * h, 6 * l * w], s: T`$SA = 2(lw + lh + wh) = 2(${l * w} + ${l * h} + ${w * h}) = ${2 * (l * w + l * h + w * h)}$ cm².` }; },
    () => { const s = ri(2, 10); return { q: T`A cube has a volume of ${s ** 3} cm³. How long is each edge?`, a: s, u: 'cm', w: [(s ** 3) / 3, s * s, s + 1, (s ** 3) / 6], s: T`We need $s^3 = ${s ** 3}$. Since $${s} \times ${s} \times ${s} = ${s ** 3}$, each edge is ${s} cm.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'angles-shapes', title: 'Angles & Shapes',
  blurb: 'Types of angles, angle facts on lines and in polygons, and triangle properties.',
  lesson: () => T`
<p>Angles measure turn, in <b>degrees</b> (°). A full turn is $360^\circ$.</p>
${Tbl([T`Type`, T`Size`], [[T`Acute`, T`less than $90^\circ$`], [T`Right`, T`exactly $90^\circ$`], [T`Obtuse`, T`between $90^\circ$ and $180^\circ$`], [T`Straight`, T`exactly $180^\circ$`], [T`Reflex`, T`between $180^\circ$ and $360^\circ$`]])}
${Key(T`<ul><li>Angles on a straight line add up to $180^\circ$.</li><li>Angles around a point add up to $360^\circ$.</li><li>Vertically opposite angles are equal.</li><li>The angles in a triangle add up to $180^\circ$; in a quadrilateral, $360^\circ$.</li></ul>`)}
<h3>Triangles</h3>
<p><b>Equilateral</b>: three equal sides, every angle $60^\circ$. <b>Isosceles</b>: two equal sides and two equal base angles. <b>Scalene</b>: no equal sides. A <b>right</b> triangle has one $90^\circ$ angle.</p>
<h3>Polygons</h3>
<p>A polygon with $n$ sides can be cut into $n - 2$ triangles from one corner, so</p>
${Fm(T`\text{sum of interior angles} = (n - 2) \times 180^\circ`)}
<p>In a <b>regular</b> polygon all angles are equal, so each is $\frac{(n-2) \times 180^\circ}{n}$. A regular hexagon has angles of $\frac{4 \times 180^\circ}{6} = 120^\circ$.</p>
${Ex(T`<p>A triangle has angles $48^\circ$ and $75^\circ$. The third angle is $180^\circ - 48^\circ - 75^\circ = 57^\circ$.</p>`)}`,
  gens: [
    () => { const A = ri(20, 110), B = ri(15, 160 - A), C = 180 - A - B; return { q: T`Two angles of a triangle are $${A}^\circ$ and $${B}^\circ$. What is the third angle?`, a: C, u: '°', w: [360 - A - B, 180 - A, 180 - B, C + 10], s: T`Angles in a triangle sum to $180^\circ$: $180^\circ - ${A}^\circ - ${B}^\circ = ${C}^\circ$.` }; },
    () => { const x = ri(15, 165); return { q: T`Two angles lie together on a straight line. One of them is $${x}^\circ$. What is the other?`, a: 180 - x, u: '°', w: [360 - x, 90 - x, x, 190 - x], s: T`Angles on a straight line sum to $180^\circ$: $180^\circ - ${x}^\circ = ${180 - x}^\circ$.` }; },
    () => { const a = ri(40, 120), b = ri(40, 120), c = ri(30, Math.min(120, 330 - a - b)), d = 360 - a - b - c; return { q: T`Four angles meet at a point. Three of them are $${a}^\circ$, $${b}^\circ$ and $${c}^\circ$. What is the fourth?`, a: d, u: '°', w: [d + 20, d - 20, Math.abs(180 - a - b - c) || d + 30], s: T`Angles around a point sum to $360^\circ$: $360^\circ - ${a}^\circ - ${b}^\circ - ${c}^\circ = ${d}^\circ$.` }; },
    () => { const kinds = [[T`Acute`, 5, 89], [T`Right`, 90, 90], [T`Obtuse`, 91, 179], [T`Straight`, 180, 180], [T`Reflex`, 181, 355]]; const [name, lo, hi] = kinds[pick([0, 0, 1, 2, 2, 3, 4, 4])], x = ri(lo, hi); return { q: T`What type of angle measures $${x}^\circ$?`, a: name, alt: [name], w: shuffle(kinds.map(k => k[0]).filter(n => n !== name)).slice(0, 3), s: T`Acute $\lt 90^\circ$; right $= 90^\circ$; obtuse between $90^\circ$ and $180^\circ$; straight $= 180^\circ$; reflex between $180^\circ$ and $360^\circ$. So $${x}^\circ$ is <b>${name.toLowerCase()}</b>.` }; },
    () => { const a = ri(60, 130), b = ri(60, 130), c = ri(50, Math.min(130, 310 - a - b)), d = 360 - a - b - c; return { q: T`A quadrilateral has angles $${a}^\circ$, $${b}^\circ$ and $${c}^\circ$. What is the fourth angle?`, a: d, u: '°', w: [180 - Math.min(a, b), d + 10, 540 - a - b - c], s: T`The angles of a quadrilateral sum to $360^\circ$: $360^\circ - ${a}^\circ - ${b}^\circ - ${c}^\circ = ${d}^\circ$.` }; },
    () => { const names = { 5: T`pentagon`, 6: T`hexagon`, 8: T`octagon`, 9: T`nonagon`, 10: T`decagon`, 12: T`dodecagon` }, n = pick([5, 6, 8, 9, 10, 12]); return chance() ? { q: T`What is the sum of the interior angles of a ${n}-sided polygon (${names[n]})?`, a: (n - 2) * 180, u: '°', w: [n * 180, (n - 1) * 180, 360], s: T`It splits into $${n} - 2 = ${n - 2}$ triangles: $${n - 2} \times 180^\circ = ${(n - 2) * 180}^\circ$.` } : { q: T`What is the size of each interior angle of a regular ${n}-sided polygon (${names[n]})?`, a: ((n - 2) * 180) / n, u: '°', w: [360 / n, (n - 2) * 180, 180 - 360 / n + 10], s: T`Sum $= (${n} - 2) \times 180^\circ = ${(n - 2) * 180}^\circ$, shared by ${n} equal angles: $${(n - 2) * 180}^\circ \div ${n} = ${((n - 2) * 180) / n}^\circ$.` }; },
    () => { const x = 2 * ri(10, 80); return { q: T`In an isosceles triangle, the angle between the two equal sides is $${x}^\circ$. What is each of the other two angles?`, a: (180 - x) / 2, u: '°', w: [180 - x, x, (180 - x) / 2 + 10], s: T`The two base angles are equal: $\frac{180^\circ - ${x}^\circ}{2} = ${(180 - x) / 2}^\circ$.` }; },
  ],
},
/* ------------------------------------------------------------------ */
{
  id: 'data-basic', title: 'Data & Averages',
  blurb: 'Reading tables and charts; mean, median, mode and range.',
  lesson: () => T`
<p>Data is information we collect, such as test scores or favourite fruits. A <b>frequency table</b> records how often each value occurs; <b>bar charts</b> and <b>pictographs</b> show the same information visually.</p>
<h3>Four summary numbers</h3>
${Tbl([T`Measure`, T`How to find it`, T`For 3, 7, 7, 8, 10`], [[T`Mean`, T`add all values, divide by how many`, T`$\frac{35}{5} = 7$`], [T`Median`, T`middle value after sorting`, '7'], [T`Mode`, T`most frequent value`, '7'], [T`Range`, T`largest − smallest`, T`$10 - 3 = 7$`]])}
${Key(T`<p>If there is an <b>even</b> number of values, the median is the mean of the two middle values: the median of 2, 4, 9, 11 is $\frac{4 + 9}{2} = 6.5$.</p>`)}
${Ex(T`<p>Scores: 12, 5, 9, 12, 7.</p><ul><li>Mean $= \frac{12 + 5 + 9 + 12 + 7}{5} = \frac{45}{5} = 9$</li><li>Sorted: 5, 7, 9, 12, 12 → median 9</li><li>Mode 12 · Range $12 - 5 = 7$</li></ul>`)}
${Tip(T`<p>Always <b>sort</b> the data before finding the median. The middle of the unsorted list is usually wrong.</p>`)}`,
  gens: [
    () => { const n = ri(4, 7), vals = range(1, n).map(() => ri(2, 30)), r = sum(vals) % n; if (r) vals[n - 1] += n - r; const tot = sum(vals), m = tot / n, list = shuffle(vals); return { q: T`Find the mean of: ${list.join(LS())}.`, a: m, w: [median(list), tot, m + 1, m - 1], s: T`Add the values and divide by how many there are: $\frac{${tot}}{${n}} = ${m}$.` }; },
    () => { const n = pick([5, 7, 9]), vals = range(1, n).map(() => ri(1, 50)), s = vals.slice().sort((a, b) => a - b), k = (n - 1) / 2; return { q: T`Find the median of: ${vals.join(LS())}.`, a: s[k], w: [vals[k], rnd(sum(vals) / n, 1), s[k + 1], s[k - 1]], s: T`Sort first: ${s.join(LS())}. The middle value — number ${k + 1} in the sorted list — is <b>${s[k]}</b>.` }; },
    () => { const m = ri(1, 20), o = sample(range(1, 25).filter(x => x !== m), 4), vals = shuffle([m, m, m, o[0], o[0], o[1], o[2], o[3]]); return { q: T`Find the mode of: ${vals.join(LS())}.`, a: m, w: [o[0], median(vals), Math.max(...vals)], s: T`${m} appears 3 times — more than any other value — so the mode is <b>${m}</b>.` }; },
    () => { const vals = range(1, ri(6, 8)).map(() => ri(3, 60)), mx = Math.max(...vals), mn = Math.min(...vals); return { q: T`Find the range of: ${vals.join(LS())}.`, a: mx - mn, w: [mx, mx + mn, vals[vals.length - 1] - vals[0]], s: T`Range = largest − smallest $= ${mx} - ${mn} = ${mx - mn}$.` }; },
    () => {
      const cats = sample([T`Apples`, T`Bananas`, T`Mangoes`, T`Grapes`, T`Oranges`, T`Durians`, T`Papayas`], 4), f = cats.map(() => ri(3, 20));
      const table = qTable([[T`Fruit`, ...cats], [T`Students`, ...f]], true);
      if (chance()) return { q: T`A class voted for their favourite fruit.${table}How many students voted altogether?`, a: sum(f), w: [sum(f) - f[0], Math.max(...f) * 4, sum(f) + 10], s: T`Add the frequencies: $${f.join(' + ')} = ${sum(f)}$.` };
      let i, j; do { i = ri(0, 3); j = ri(0, 3); } while (i === j || f[i] === f[j]);
      const [hi, lo] = f[i] > f[j] ? [i, j] : [j, i];
      return { q: T`A class voted for their favourite fruit.${table}How many more students chose ${cats[hi]} than ${cats[lo]}?`, a: f[hi] - f[lo], w: [f[hi] + f[lo], f[hi], f[lo]], s: T`$${f[hi]} - ${f[lo]} = ${f[hi] - f[lo]}$ more students.` };
    },
  ],
},
  ],
});
})();
