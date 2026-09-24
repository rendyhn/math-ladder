/* Deutsch — Oberstufe (Polynome → Integrale) */
addT('de', {
  // polynomials
  '1dv82xempy': R`
<p>Ein <b>Polynom</b> ist eine Summe von Termen $a_n x^n + \cdots + a_1 x + a_0$ mit natürlichen Exponenten. Sein <b>Grad</b> ist der höchste Exponent; $a_n$ ist der <b>Leitkoeffizient</b>. Beim Multiplizieren von Polynomen addieren sich die Grade und die Leitkoeffizienten werden multipliziert.</p>
<h3>Division</h3>
<p>Die Division von $P(x)$ durch $(x - a)$ liefert einen Quotienten $Q(x)$ und einen Rest $R$: $P(x) = (x - a)Q(x) + R$. Das <b>Horner-Schema</b> erledigt das schnell nur mit den Koeffizienten.</p>
⟦0⟧
⟦1⟧
<h3>Nullstellen eines kubischen Polynoms</h3>
<p>Für $ax^3 + bx^2 + cx + d = 0$ mit den Nullstellen $r_1, r_2, r_3$ gilt:</p>
⟦2⟧
⟦3⟧`,
  '16v6jrymjv2': R`<p>$(x^3 - 4x^2 + x + 6) \div (x - 2)$ mit dem Horner-Schema:</p>⟦0⟧<p>Quotient $x^2 - 2x - 3$, Rest 0.</p>`,
  'agfsjitvd': R`<p><b>Restsatz:</b> Der Rest bei der Division von $P(x)$ durch $(x - a)$ ist $P(a)$.</p><p><b>Linearfaktorsatz:</b> $(x - a)$ ist genau dann ein Faktor von $P(x)$, wenn $P(a) = 0$.</p>`,
  'sqyu8zjvtn': R`<p>Division durch $(x + 3)$ bedeutet $a = -3$: Berechne $P(-3)$, nicht $P(3)$.</p>`,
  'u4dg9by4un': R`Bestimme den Rest bei der Division von $P(x) = ⟦0⟧$ durch $(x ⟦1⟧)$.`,
  '212dl6gy5gu': R`Nach dem Restsatz ist der Rest $P(⟦0⟧) = ⟦1⟧(⟦2⟧)^3 ⟦3⟧(⟦4⟧)^2 ⟦5⟧(⟦6⟧) ⟦7⟧ = ⟦8⟧$.`,
  '20swcfjanfa': R`$(x ⟦0⟧)$ ist ein Faktor von $P(x) = ⟦1⟧$. Bestimme $k$.`,
  '2cscisbqmyg': R`Nach dem Linearfaktorsatz ist $P(⟦0⟧) = 0$: $⟦1⟧ ⟦2⟧ ⟦3⟧k ⟦4⟧ = 0$, also $⟦5⟧k = ⟦6⟧$ und $k = ⟦7⟧$.`,
  '28czzdou58n': R`Für $ax^3 + bx^2 + cx + d = 0$ gilt: ⟦0⟧.`,
  '1uakfcji416': R`Die Summe der Nullstellen ist $-\frac{b}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1cl4qeneyhq': R`Das Produkt der Nullstellen ist $-\frac{d}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1h1il3vuozs': R`Dividiere $⟦0⟧$ durch $(x ⟦1⟧)$. Wie lautet der Quotient?`,
  '1432prhuyml': R`Das Horner-Schema mit ⟦0⟧ auf die Koeffizienten ⟦1⟧ ergibt ⟦2⟧ und den Rest 0, also ist der Quotient $⟦3⟧$.`,
  '1v0pp8s5fwz': R`Betrachte $⟦0⟧$. Welchen Grad hat das Produkt?`,
  '79jcaurtjl': R`Betrachte $⟦0⟧$. Wie lautet der Leitkoeffizient des Produkts?`,
  'lgw9ke18qe': R`Betrachte $⟦0⟧$. Wie lautet das absolute Glied des Produkts?`,
  '18bitz7l1ry': R`Beim Multiplizieren addieren sich die Grade: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '1x77krhanqb': R`Multipliziere die höchsten Glieder: $⟦0⟧ \cdot ⟦1⟧ = ⟦2⟧$, also ist der Leitkoeffizient ⟦3⟧.`,
  '1uusi8yg5sk': R`Das absolute Glied ist das Produkt der absoluten Glieder: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,

  // matrices
  '104wb071wss': R`
<p>Eine <b>Matrix</b> ist ein rechteckiges Zahlenschema. Eine $m \times n$-Matrix hat $m$ Zeilen und $n$ Spalten; $a_{ij}$ ist der Eintrag in Zeile $i$, Spalte $j$.</p>
<h3>Rechenoperationen</h3>
<ul><li><b>Addieren/Subtrahieren</b> eintragsweise (nur bei gleicher Größe).</li><li><b>Skalare Multiplikation</b>: jeden Eintrag multiplizieren.</li><li><b>Multiplizieren</b> $AB$: Eintrag $(i, j)$ ist Zeile $i$ von $A$ „mal“ Spalte $j$ von $B$. Dazu muss (Spaltenzahl von $A$) = (Zeilenzahl von $B$) sein; eine $m \times n$- mal eine $n \times p$-Matrix ergibt eine $m \times p$-Matrix.</li></ul>
⟦0⟧
⟦1⟧
<h3>Determinante und Inverse (2 × 2)</h3>
⟦2⟧
<p>Ist $\det A = 0$, so ist die Matrix <b>singulär</b> und hat keine Inverse. Mit Inversen löst man Gleichungssysteme: $AX = B \Rightarrow X = A^{-1}B$.</p>
⟦3⟧`,
  '4bk6hc9is8': R`<p>Die Matrixmultiplikation ist <b>nicht kommutativ</b>: Meist ist $AB \ne BA$.</p>`,
  '4ckwr8umw4': R`<p>Für die Inverse: $a$ und $d$ <b>vertauschen</b>, $b$ und $c$ <b>mit −1 multiplizieren</b>, dann durch die Determinante teilen.</p>`,
  '1h6gnxjh2g6': R`Berechne die Determinante von $⟦0⟧$.`,
  '1gfhimaac6g': R`Berechne $AB$ mit $A = ⟦0⟧$ und $B = ⟦1⟧$.`,
  '1dy8pvpnep7': R`Gib die vier Einträge zeilenweise ein, zum Beispiel 19; 22; 43; 50.`,
  'xfxhg5b3o2': R`Zeile mal Spalte: $AB = \begin{pmatrix} ⟦0⟧\cdot⟦1⟧ + ⟦2⟧\cdot⟦3⟧ & \cdots \\ \cdots & \cdots \end{pmatrix} = ⟦4⟧$.`,
  '27lrdslcvs8': R`Bestimme die Inverse von $⟦0⟧$.`,
  'ea7d95erhp': R`Gib die vier Einträge zeilenweise durch Semikolons getrennt ein.`,
  '2euzxos9ar7': R`$\det = (⟦0⟧)(⟦1⟧) - (⟦2⟧)(⟦3⟧) = ⟦4⟧$. $a$ und $d$ vertauschen, $b$ und $c$ mit −1 multiplizieren, durch ⟦5⟧ teilen: $⟦6⟧$.`,
  '2fs8fio5g5w': R`Für welchen Wert von $x$ ist $⟦0⟧$ singulär?`,
  'et7lf19q4x': R`Singulär heißt $\det = 0$: $⟦0⟧x - (⟦1⟧)(⟦2⟧) = 0$, also $x = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '2280y15nq4f': R`$A = ⟦0⟧$ und $B = ⟦1⟧$. Bestimme den Eintrag in Zeile ⟦2⟧, Spalte ⟦3⟧ von $⟦4⟧A - ⟦5⟧B$.`,
  'h3p6r4d6o': R`$A = ⟦0⟧$ und $B = ⟦1⟧$. Bestimme den Eintrag in Zeile ⟦2⟧, Spalte ⟦3⟧ von $AB$.`,
  'xdj657lej': R`Zeile ⟦0⟧ von $A$ mal Spalte ⟦1⟧ von $B$: $⟦2⟧ = ⟦3⟧$. (Eine $2 \times 3$- mal eine $3 \times 2$-Matrix ergibt eine $2 \times 2$-Matrix.)`,

  // vectors
  '1gljxtukffx': R`
<p>Ein <b>Vektor</b> hat Länge und Richtung. In Koordinaten: $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ oder $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$. Der Vektor von $P$ nach $Q$ ist $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  'i7t2goihqv': R`Betrag`,
  '1czax49eh4c': R`Addition`,
  'q2ntocofkn': R`Koordinaten addieren`,
  'oswzhgqxwz': R`Skalare Multiplikation`,
  '1bnyaikchfp': R`$k\mathbf{a}$: jede Koordinate mit $k$ multiplizieren`,
  '28hldv2q33s': R`Einheitsvektor`,
  '214ftyeo0vg': R`Skalarprodukt`,
  '1xghg9dwzeq': R`$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta \qquad\Longrightarrow\qquad \cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$<p>Zwei vom Nullvektor verschiedene Vektoren sind genau dann <b>orthogonal</b>, wenn $\mathbf{a}\cdot\mathbf{b} = 0$.</p>`,
  '1w9baxb120w': R`<p>$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$: $\mathbf{a}\cdot\mathbf{b} = 15 + 48 = 63$, $|\mathbf{a}| = 5$, $|\mathbf{b}| = 13$, also $\cos\theta = \frac{63}{65}$ und $\theta \approx 14{,}3^\circ$.</p>`,
  '6pzkmdncqf': R`<p>Das Skalarprodukt zweier Vektoren ist eine <b>Zahl</b>, kein Vektor.</p>`,
  '4u2plhe47g': R`Bestimme den Betrag von $⟦0⟧$.`,
  '252q8tpxn2p': R`Berechne $\mathbf{a}\cdot\mathbf{b}$ für $\mathbf{a} = ⟦0⟧$ und $\mathbf{b} = ⟦1⟧$.`,
  '17ht25mwywu': R`Gegeben sind $\mathbf{a} = ⟦0⟧$ und $\mathbf{b} = ⟦1⟧$. Berechne $⟦2⟧\mathbf{a} ⟦3⟧ ⟦4⟧\mathbf{b}$.`,
  '2gdqizkyobq': R`Gib die Koordinaten der Reihe nach durch Semikolons getrennt ein.`,
  '1mpyqj0mwgx': R`Koordinatenweise rechnen: $⟦0⟧ = ⟦1⟧$.`,
  '14p7yoy4f3a': R`Bestimme $k$ so, dass $⟦0⟧$ und $⟦1⟧$ orthogonal sind.`,
  '127php4kbc3': R`Orthogonal heißt Skalarprodukt 0: $⟦0⟧k + (⟦1⟧)(⟦2⟧) = 0$, also $k = ⟦3⟧$.`,
  '1kydmvss2ex': R`Bestimme $\cos\theta$, wobei $\theta$ der Winkel zwischen $⟦0⟧$ und $⟦1⟧$ ist.`,
  '1b0azawmrlf': R`Bestimme den Einheitsvektor in Richtung von $⟦0⟧$.`,
  '280s3ajjt4e': R`Gib die Koordinaten durch ein Semikolon getrennt ein, zum Beispiel 3/5; -4/5.`,
  '22ii0i40ri': R`$|\mathbf{v}| = ⟦0⟧$. Teile jede Koordinate durch ⟦1⟧: $\hat{\mathbf{v}} = ⟦2⟧$.`,

  // limits
  '239kmg9x5mj': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$ bedeutet: $f(x)$ kommt $L$ beliebig nahe, wenn $x$ gegen $a$ geht — egal, was genau bei $x = a$ passiert.</p>
<h3>Methoden</h3>
<ol><li><b>Direktes Einsetzen</b> funktioniert bei Polynomen und anderen stetigen Funktionen: $\lim_{x \to 2}(x^2 + 3x) = 10$.</li><li><b>Faktorisieren und kürzen</b> bei $\frac{0}{0}$: $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$.</li><li><b>Erweitern mit dem konjugierten Term</b> bei Wurzelausdrücken.</li></ol>
⟦0⟧
<h3>Grenzwerte im Unendlichen</h3>
⟦1⟧
<h3>Ein besonderer trigonometrischer Grenzwert</h3>
⟦2⟧
<h3>Stetigkeit</h3>
<p>$f$ ist stetig in $a$, wenn $\lim_{x \to a} f(x) = f(a)$: keine Lücken, Sprünge oder Asymptoten dort. Bei einer abschnittsweise definierten Funktion müssen die beiden Teile an der Nahtstelle zusammenpassen.</p>
⟦3⟧`,
  '25jnb5snm7z': R`<p>Bei einer gebrochenrationalen Funktion teilst du Zähler und Nenner durch die höchste Potenz von $x$ im Nenner:</p><ul><li>gleicher Grad → Quotient der Leitkoeffizienten;</li><li>Zählergrad kleiner → 0;</li><li>Zählergrad größer → kein endlicher Grenzwert ($\pm\infty$).</li></ul>`,
  'extw7corym': R`<p>$\frac{0}{0}$ ist weder „0“ noch „nicht definiert“ — es zeigt, dass mehr Arbeit nötig ist (faktorisieren, erweitern).</p>`,
  '18znpgymeuk': R`Berechne $\displaystyle\lim_{x \to ⟦0⟧} (⟦1⟧)$.`,
  '1tq4b7d4h53': R`Die Funktion ist ein Polynom, also einsetzen: $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧$.`,
  '1n96bgorw1d': R`Berechne $\displaystyle\lim_{x \to ⟦0⟧} \frac{⟦1⟧}{x ⟦2⟧}$.`,
  '295o4zt7f3w': R`Einsetzen ergibt $\frac{0}{0}$. Faktorisieren: $\frac{(x ⟦0⟧)(x ⟦1⟧)}{x ⟦2⟧} = x ⟦3⟧$, also ist der Grenzwert $⟦4⟧ ⟦5⟧ = ⟦6⟧$.`,
  '1rjdd048rzk': R`Berechne $\displaystyle\lim_{x \to \infty} \frac{⟦0⟧}{⟦1⟧}$.`,
  '229ply6f2l2': R`Der Zähler hat einen kleineren Grad als der Nenner; teilt man durch $x^2$, gehen alle Zählerterme gegen 0, also ist der Grenzwert $0$.`,
  '1m8u7pc3qh1': R`Gleicher Grad, also ist der Grenzwert der Quotient der Leitkoeffizienten: $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  '1ynpy6v2s15': R`Berechne $\displaystyle\lim_{x \to 0} \frac{⟦0⟧}{⟦1⟧}$.`,
  'if95qf815v': R`Nutze $\frac{\sin u}{u} \to 1$ (und $\frac{\tan u}{u} \to 1$): Der Ausdruck verhält sich wie $\frac{⟦0⟧x}{⟦1⟧x} = ⟦2⟧$.`,
  'blyu2go12i': R`Berechne $\displaystyle\lim_{x \to 0} \frac{\sqrt{x + ⟦0⟧} - ⟦1⟧}{x}$.`,
  'fj8u70cngg': R`Mit dem konjugierten Term erweitern: $\frac{(x + ⟦0⟧) - ⟦1⟧}{x(\sqrt{x + ⟦2⟧} + ⟦3⟧)} = \frac{1}{\sqrt{x + ⟦4⟧} + ⟦5⟧} \to \frac{1}{⟦6⟧}$.`,
  '1kmmd6tilgi': R`Bestimme $k$ so, dass $f(x) = \begin{cases} x^2 + k, & x \lt ⟦0⟧ \\ ⟦1⟧, & x \ge ⟦2⟧ \end{cases}$ an der Stelle $x = ⟦3⟧$ stetig ist.`,
  '1l84k7ifkz6': R`Die Teile müssen bei $x = ⟦0⟧$ zusammenpassen: $(⟦1⟧)^2 + k = ⟦2⟧(⟦3⟧) ⟦4⟧$, also $⟦5⟧ + k = ⟦6⟧$ und $k = ⟦7⟧$.`,

  // derivatives
  '1pv2wkwyvwg': R`
<p>Die <b>Ableitung</b> $f'(x)$ ist die momentane Änderungsrate von $f$ — die Steigung der Tangente an der Stelle $x$. Sie ist durch einen Grenzwert definiert:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Tangenten</h3>
<p>Bei $x = a$ hat die Tangente die Steigung $m = f'(a)$ und geht durch $(a; f(a))$: $y - f(a) = f'(a)(x - a)$.</p>
<h3>Stationäre Stellen</h3>
<p>Wo $f'(x) = 0$ ist, verläuft der Graph kurz waagerecht. Nutze die zweite Ableitung: $f''(a) \gt 0$ → lokales Minimum; $f''(a) \lt 0$ → lokales Maximum. $f$ ist steigend, wo $f' \gt 0$, und fallend, wo $f' \lt 0$.</p>
<h3>Optimierung</h3>
⟦3⟧
⟦4⟧`,
  '1kddytp99dm': R`Regeln`,
  '21wooetnwi8': R`<p>Mit 100 m Zaun wird ein Rechteck an einem Fluss eingezäunt (an der Flussseite kein Zaun). Mit den Seiten $x, y, x$: $2x + y = 100$, Fläche $A = x(100 - 2x)$. $A'(x) = 100 - 4x = 0$ ergibt $x = 25$, also $A_{\max} = 25 \times 50 = 1250$ m².</p>`,
  '14x6kebc9en': R`<p>Die Ableitung einer Konstanten ist 0 — nimm das absolute Glied nicht mit in $f'(x)$.</p>`,
  'sk165jmy0e': R`Bestimme $f'(x)$ für $f(x) = ⟦0⟧$.`,
  '1z8enx6jmxw': R`Wende die Potenzregel auf jeden Term an: $f'(x) = ⟦0⟧$ (die Konstante fällt weg).`,
  'rdfbrjf6fd': R`Gegeben ist $f(x) = ⟦0⟧$. Bestimme $f'(⟦1⟧)$.`,
  '12fn6a7y0fo': R`$f'(x) = ⟦0⟧$, also $f'(⟦1⟧) = ⟦2⟧$.`,
  '13xytl77ctg': R`Bestimme die Gleichung der Tangente an $y = ⟦0⟧$ bei $x = ⟦1⟧$.`,
  'zxpf5t25tk': R`Steigung: $y' = 2x ⟦0⟧$, also $m = ⟦1⟧$ bei $x = ⟦2⟧$. Punkt: $(⟦3⟧; ⟦4⟧)$. Dann $y - ⟦5⟧ = ⟦6⟧(x - ⟦7⟧)$, d. h. $y = ⟦8⟧$.`,
  '6or380e65b': R`$x = ⟦0⟧ \text{ und } x = ⟦1⟧$`,
  '1ib3oh8we5r': R`Bestimme die $x$-Koordinaten der stationären Stellen von $f(x) = ⟦0⟧$.`,
  '8cxs5u8eb2': R`$f'(x) = ⟦0⟧ = 3(x ⟦1⟧)(x ⟦2⟧) = 0$, also $x = ⟦3⟧$ oder $x = ⟦4⟧$.`,
  '2diynqfs1vm': R`An welcher Stelle $x$ hat $f(x) = ⟦0⟧$ ein lokales Minimum?`,
  'qiab8fav1k': R`$f'(x) = 3(x ⟦0⟧)(x ⟦1⟧)$ ist null bei $x = ⟦2⟧$ und $x = ⟦3⟧$. $f''(x) = 6x ⟦4⟧$ ist bei $x = ⟦5⟧$ positiv, also liegt dort das lokale Minimum.`,
  '2bfp82dmoiw': R`Ein Landwirt hat ⟦0⟧ m Zaun, um ein rechteckiges Feld an einem geraden Fluss einzuzäunen. Entlang des Flusses ist kein Zaun nötig. Wie groß ist die größtmögliche Fläche?`,
  '1sgjbqwzp29': R`Seiten $x, y, x$ mit $2x + y = ⟦0⟧$. $A = x(⟦1⟧ - 2x)$, $A' = ⟦2⟧ - 4x = 0$ ergibt $x = ⟦3⟧$, $y = ⟦4⟧$ und $A = ⟦5⟧$ m².`,
  '1dz6162q97e': R`Ein Rechteck hat einen Umfang von ⟦0⟧ cm. Wie groß kann sein Flächeninhalt höchstens sein?`,
  '12er060agfx': R`Bei der Breite $x$ ist die Länge $⟦0⟧ - x$ und $A = x(⟦1⟧ - x)$. $A' = ⟦2⟧ - 2x = 0$ ergibt $x = ⟦3⟧$ — ein Quadrat — mit dem Flächeninhalt $⟦4⟧$ cm².`,
  'jksdr4ukrw': R`Leite $y = ⟦0⟧$ ab.`,
  '1gytk3lwm2l': R`$\frac{d}{dx}\sin x = \cos x$ und $\frac{d}{dx}\cos x = -\sin x$, also $y' = ⟦0⟧$.`,
  't51ufxvzbf': R`Ein Teilchen hat die Position $s(t) = ⟦0⟧$ Meter. Bestimme seine Beschleunigung zum Zeitpunkt $t = ⟦1⟧$ s.`,
  'bakv4or3q9': R`$v(t) = s'(t) = ⟦0⟧$ und $a(t) = v'(t) = ⟦1⟧$. Bei $t = ⟦2⟧$: $a = ⟦3⟧$ m/s².`,
  'twj64cwqj6': R`Ein Teilchen hat die Position $s(t) = ⟦0⟧$ Meter. Bestimme seine Geschwindigkeit zum Zeitpunkt $t = ⟦1⟧$ s.`,
  '1yi10f0kgm7': R`$v(t) = s'(t) = ⟦0⟧$, also $v(⟦1⟧) = ⟦2⟧$ m/s.`,

  // integrals
  '1wdt9h7s66j': R`
<p>Integrieren kehrt das Ableiten um. Eine <b>Stammfunktion</b> von $f$ ist jede Funktion $F$ mit $F' = f$; das <b>unbestimmte Integral</b> enthält die Integrationskonstante:</p>
⟦0⟧
⟦1⟧
<h3>Bestimmte Integrale</h3>
⟦2⟧
<p>Für $f \ge 0$ ist das die Fläche unter der Kurve zwischen $x = a$ und $x = b$. Flächen unterhalb der $x$-Achse zählen negativ — teile das Integral an den Nullstellen, wenn du die Gesamtfläche willst.</p>
⟦3⟧
<h3>Eine Funktion aus ihrer Ableitung bestimmen</h3>
<p>Ist $f'(x) = 6x + 2$ und $f(1) = 10$, dann ist $f(x) = 3x^2 + 2x + C$, und $3 + 2 + C = 10$ ergibt $C = 5$.</p>
⟦4⟧`,
  '20z1821bwrr': R`<p>$\int (6x^2 - 4x + 3)\,dx = 2x^3 - 2x^2 + 3x + C$. Probe durch Ableiten.</p>`,
  '1jsx5j8bwuv': R`Hauptsatz der Differential- und Integralrechnung`,
  'k8jg70602j': R`<p>Fläche zwischen $y = x^2$ und $y = 2x$: Sie schneiden sich bei $x = 0$ und $x = 2$, dazwischen ist $2x \ge x^2$, also $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.</p>`,
  '2645ntoenmj': R`<p>Vergiss das $+ C$ bei unbestimmten Integralen nicht — und lass es bei bestimmten weg (es hebt sich auf).</p>`,
  '1a4h4aolv1n': R`Bestimme $\displaystyle\int (⟦0⟧)\,dx$.`,
  '14w03nftsp9': R`Jeden Exponenten um eins erhöhen und durch den neuen Exponenten teilen: $⟦0⟧ + C$.`,
  'lhk659hv1w': R`Berechne $\displaystyle\int_{⟦0⟧}^{⟦1⟧} (⟦2⟧)\,dx$.`,
  'wzkchwuid3': R`Eine Stammfunktion ist $F(x) = ⟦0⟧$. $F(⟦1⟧) - F(⟦2⟧) = ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '2g5117b4rfq': R`Bestimme die Fläche, die $y = ⟦0⟧$ mit der $x$-Achse einschließt.`,
  '1qd8emk0tlu': R`Die Kurve schneidet die Achse bei $x = \pm ⟦0⟧$. Fläche $= \int_{-⟦1⟧}^{⟦2⟧} (⟦3⟧ - x^2)\,dx = \left[⟦4⟧x - \frac{x^3}{3}\right]_{-⟦5⟧}^{⟦6⟧} = ⟦7⟧$.`,
  '1wjuv7zitnn': R`Bestimme die Fläche zwischen $y = x^2$ und $y = ⟦0⟧x$.`,
  'ospw7lwugt': R`Sie schneiden sich bei $x = 0$ und $x = ⟦0⟧$. Fläche $= \int_0^{⟦1⟧} (⟦2⟧x - x^2)\,dx = \frac{⟦3⟧^3}{2} - \frac{⟦4⟧^3}{3} = ⟦5⟧$.`,
  '2c9m4g6dimy': R`$f'(x) = ⟦0⟧$ und $f(0) = ⟦1⟧$. Bestimme $f(⟦2⟧)$.`,
  '29kyl7mnwt5': R`$f(x) = ⟦0⟧ + C$, und $f(0) = C = ⟦1⟧$. Also $f(⟦2⟧) = ⟦3⟧$.`,
  '1p83y3ccpb': R`$\int \cos x\,dx = \sin x$ und $\int -\sin x\,dx = \cos x$, also ist das Ergebnis $⟦0⟧ + C$.`,
  '22xlapf2gb7': R`Berechne $\displaystyle\int_0^{\pi/2} ⟦0⟧\cos x\,dx$.`,
  '1ppkvfv3p1b': R`Berechne $\displaystyle\int_0^{\pi} ⟦0⟧\sin x\,dx$.`,
  // formula-only entries
  'itm4o8cny': R`\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}`,
  '25hetn68fsz': R`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`,
  '1i9j07wofgh': R`\lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \lim_{x \to 0}\frac{\sin ax}{bx} = \frac{a}{b}`,
  '21rfw9yowzp': R`$$\frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}c = 0 \qquad \frac{d}{dx}\big(af + bg\big) = af' + bg'$$$$\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x$$`,
  'oq0mo2ln2m': R`$$\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C \quad (n \ne -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$$$\int \cos x\,dx = \sin x + C \qquad \int \sin x\,dx = -\cos x + C$$`,
  'ktnrryzzqc': R`$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$`,
});
