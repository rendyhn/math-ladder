/* Deutsch — Oberstufe (Kern, quadratische Gleichungen → Exponential- und Logarithmusfunktionen) */
addT('de', {
  // core
  '3idcm4kbiz': R`Gib beide Lösungen durch ein Semikolon getrennt ein, zum Beispiel -2; 5.`,
  '2gdno2vs4iz': R`Gib eine Antwort wie 9pi oder 3pi/4 ein.`,

  // quadratics
  'zojqk1lf1a': R`
<p>Eine <b>quadratische Gleichung</b> hat die Form $ax^2 + bx + c = 0$ mit $a \ne 0$. Sie hat höchstens zwei Lösungen (Nullstellen).</p>
<h3>1. Faktorisieren</h3>
<p>Ein Produkt ist null, wenn einer seiner Faktoren null ist. Suche zwei Zahlen, deren Produkt $c$ und deren Summe $b$ ist (für $a = 1$):</p>
⟦0⟧
<h3>2. Quadratische Ergänzung</h3>
⟦1⟧
<h3>3. Die Mitternachtsformel</h3>
⟦2⟧
<h3>Summe und Produkt der Lösungen (Vieta)</h3>
⟦3⟧
<p>Eine Gleichung mit den Lösungen $r$ und $s$ lautet also $x^2 - (r + s)x + rs = 0$.</p>
⟦4⟧
⟦5⟧`,
  '2eim40ubkm5': R`x^2 - x - 12 = 0 \;\Rightarrow\; (x - 4)(x + 3) = 0 \;\Rightarrow\; x = 4 \text{ oder } x = -3`,
  '2fswinarukx': R`$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$<p>Die <b>Diskriminante</b> $D = b^2 - 4ac$ gibt an, wie viele reelle Lösungen es gibt:</p><ul><li>$D \gt 0$: zwei verschiedene reelle Lösungen</li><li>$D = 0$: eine doppelte reelle Lösung</li><li>$D \lt 0$: keine reelle Lösung (zwei komplexe Lösungen)</li></ul>`,
  '2es7ki62fmx': R`<p>$2x^2 - 7x + 3 = 0$: $D = 49 - 24 = 25$, also $x = \frac{7 \pm 5}{4}$, d. h. $x = 3$ oder $x = \frac{1}{2}$. Probe: Summe $= \frac{7}{2}$ ✓, Produkt $= \frac{3}{2}$ ✓.</p>`,
  '2fn72wvlok5': R`<p>Teile nie beide Seiten durch $x$ — dabei geht die Lösung $x = 0$ verloren. Bringe stattdessen alles auf eine Seite und faktorisiere.</p>`,
  'wqvbu9g7qm': R`$x = ⟦0⟧ \text{ oder } x = ⟦1⟧$`,
  '2g53wo2odbr': R`Löse $⟦0⟧ = 0$.`,
  'zl23t8993d': R`Faktorisieren: $(x ⟦0⟧)(x ⟦1⟧) = 0$, also $x = ⟦2⟧$ oder $x = ⟦3⟧$.`,
  '116407nwdrj': R`Bestimme die Diskriminante von $⟦0⟧ = 0$.`,
  '3gb665scdq': R`Zwei verschiedene reelle Lösungen`,
  '2fay79x4phj': R`Eine doppelte reelle Lösung`,
  'ha2iee3mi': R`Keine reelle Lösung`,
  '21o8qulmmck': R`Wie viele reelle Lösungen hat $⟦0⟧ = 0$?`,
  '2v9wp16hr5': R`$⟦0⟧$ ist positiv, also gibt es zwei verschiedene reelle Lösungen.`,
  '1awtt37lduc': R`$⟦0⟧$ ist null, also gibt es eine doppelte reelle Lösung.`,
  '1b3c8vdz0p': R`$⟦0⟧$ ist negativ, also gibt es keine reelle Lösung.`,
  '13khpmu10gc': R`Bestimme die Summe der Lösungen von $⟦0⟧ = 0$.`,
  '23qtrsvpbqj': R`Summe der Lösungen $= -\frac{b}{a} = ⟦0⟧$.`,
  '2e310dsl6wd': R`Bestimme das Produkt der Lösungen von $⟦0⟧ = 0$.`,
  '1s4vvexqix0': R`Produkt der Lösungen $= \frac{c}{a} = ⟦0⟧$.`,
  '27metzx2wv2': R`Löse $⟦0⟧ = 0$ und gib die exakten Lösungen an.`,
  '1pprj3loiqe': R`Gib beide Lösungen durch ein Semikolon getrennt ein, zum Beispiel -3+sqrt(5); -3-sqrt(5).`,
  '28yk466lqnm': R`Quadratische Ergänzung: $(x ⟦0⟧)^2 - ⟦1⟧ ⟦2⟧ = 0$, also $(x ⟦3⟧)^2 = ⟦4⟧$ und $x = ⟦5⟧ \pm \sqrt{⟦6⟧}$.`,
  '13i18rd2v1i': R`Welche quadratische Gleichung hat die Lösungen $⟦0⟧$ und $⟦1⟧$?`,
  '1qw3sazqaaj': R`Ein Rechteck ist ⟦0⟧ m länger als breit, und sein Flächeninhalt beträgt ⟦1⟧ m². Bestimme die Breite.`,
  '27ssy7fe6w9': R`Sei $w$ die Breite: $w(w + ⟦0⟧) = ⟦1⟧$, also $⟦2⟧ = 0$, d. h. $(w - ⟦3⟧)(w + ⟦4⟧) = 0$. Eine Breite muss positiv sein, also $w = ⟦5⟧$ m.`,

  // quad-functions
  't6hwj355ki': R`
<p>Der Graph von $f(x) = ax^2 + bx + c$ ist eine <b>Parabel</b>. Sie ist <b>nach oben</b> geöffnet, wenn $a \gt 0$ (ein Tal mit einem Minimum), und <b>nach unten</b>, wenn $a \lt 0$ (ein Hügel mit einem Maximum).</p>
⟦0⟧
<h3>Scheitelpunktform</h3>
⟦1⟧
<p>Die quadratische Ergänzung wandelt die allgemeine Form in die Scheitelpunktform um: $x^2 - 6x + 11 = (x - 3)^2 + 2$, der Scheitelpunkt ist also $(3; 2)$ und der kleinste Wert 2. Die Wertemenge ist $y \ge 2$.</p>
⟦2⟧
⟦3⟧`,
  's0tk1crha5': R`<ul><li>Symmetrieachse und Scheitelpunkt: $x = -\dfrac{b}{2a}$; der Scheitelpunkt ist $\left(-\dfrac{b}{2a};\, f\!\left(-\dfrac{b}{2a}\right)\right)$.</li><li>$y$-Achsenabschnitt: $(0; c)$.</li><li>Nullstellen: die Lösungen von $ax^2 + bx + c = 0$ (falls vorhanden).</li></ul>`,
  '8vanwczjp2': R`f(x) = a(x - h)^2 + k \qquad \text{Scheitelpunkt } (h; k)`,
  '17der0pee5r': R`<p>Die Höhe eines Balls ist $h(t) = -5t^2 + 20t + 1$ Meter. Der Scheitelpunkt liegt bei $t = -\frac{20}{2(-5)} = 2$ s, und die maximale Höhe ist $h(2) = -20 + 40 + 1 = 21$ m.</p>`,
  'zvghnbm8dy': R`<p>Die Symmetrieachse liegt genau in der Mitte zwischen den beiden Nullstellen: Sind die Nullstellen $p$ und $q$, dann ist sie $x = \frac{p + q}{2}$.</p>`,
  '1mhp7175d34': R`Bestimme die $x$-Koordinate des Scheitelpunkts von $y = ⟦0⟧$.`,
  '2clzljfduzb': R`Bestimme den größten Wert von $f(x) = ⟦0⟧$.`,
  '2gjwh27g0hr': R`Bestimme den kleinsten Wert von $f(x) = ⟦0⟧$.`,
  '27czsvma29h': R`Der Scheitelpunkt liegt bei $x = -\frac{b}{2a} = ⟦0⟧$, und $f(⟦1⟧) = ⟦2⟧$. Da $a \lt 0$, ist die Parabel nach unten geöffnet, also ist ⟦3⟧ das Maximum.`,
  '14ge4kcc386': R`Der Scheitelpunkt liegt bei $x = -\frac{b}{2a} = ⟦0⟧$, und $f(⟦1⟧) = ⟦2⟧$. Da $a \gt 0$, ist die Parabel nach oben geöffnet, also ist ⟦3⟧ das Minimum.`,
  'c44znu24a9': R`Schreibe $y = ⟦0⟧$ in Scheitelpunktform.`,
  '1vsnqklq7o3': R`Quadratische Ergänzung: $x^2 ⟦0⟧x = (x ⟦1⟧)^2 - ⟦2⟧$. Also $y = (x ⟦3⟧)^2 - ⟦4⟧ ⟦5⟧ = (x ⟦6⟧)^2 ⟦7⟧$ mit dem Scheitelpunkt $⟦8⟧$.`,
  'zpcs87kljp': R`Eine Parabel schneidet die $x$-Achse bei $x = ⟦0⟧$ und $x = ⟦1⟧$. Wie lautet die Gleichung ihrer Symmetrieachse? Gib den Wert von $x$ an.`,
  'fw0opla76f': R`Die Symmetrieachse liegt in der Mitte zwischen den Nullstellen: $x = \frac{⟦0⟧ + ⟦1⟧}{2} = ⟦2⟧$.`,
  'v46mha0d5d': R`Die Höhe eines Balls in Metern nach $t$ Sekunden ist $h(t) = ⟦0⟧$. ⟦1⟧`,
  '1hvtdauomyu': R`Nach wie vielen Sekunden erreicht er seine maximale Höhe?`,
  '1316b0fmwet': R`Wie groß ist seine maximale Höhe?`,
  'ycs9rjyck7': R`Der Scheitelpunkt liegt bei $t = -\frac{⟦0⟧}{2(-5)} = ⟦1⟧$ s.⟦2⟧`,
  'ztkk37xmwf': R` Dann ist $h(⟦0⟧) = -5(⟦1⟧)^2 + ⟦2⟧(⟦3⟧) + ⟦4⟧ = ⟦5⟧$ m.`,
  '1e1oh4ob6ax': R`Wie lautet die Wertemenge von $f(x) = ⟦0⟧$?`,
  '1xjsk3emsrc': R`Der Scheitelpunkt ist $⟦0⟧$ und die Parabel ist nach oben geöffnet, also ist die Wertemenge $y \ge ⟦1⟧$.`,
  'xs3xxut6a6': R`Der Scheitelpunkt ist $⟦0⟧$ und die Parabel ist nach unten geöffnet, also ist die Wertemenge $y \le ⟦1⟧$.`,

  // functions
  '8naid6th7m': R`
<p>Eine <b>Funktion</b> ordnet jedem Eingabewert genau <b>einen</b> Ausgabewert zu. Die Menge der erlaubten Eingaben ist die <b>Definitionsmenge</b>; die Menge der Ausgaben ist die <b>Wertemenge</b>.</p>
<h3>Maximale Definitionsmengen</h3>
<ul><li>Keine Division durch null: Für $\frac{1}{x - 2}$ ist die Definitionsmenge $x \ne 2$.</li><li>Keine Wurzeln aus negativen Zahlen: Für $\sqrt{x + 3}$ ist die Definitionsmenge $x \ge -3$.</li><li>Logarithmen brauchen positive Argumente: Für $\log(x - 1)$ ist die Definitionsmenge $x \gt 1$.</li></ul>
<h3>Verkettung</h3>
⟦0⟧
⟦1⟧
<h3>Umkehrfunktionen</h3>
<p>$f^{-1}$ macht $f$ rückgängig: Ist $f(a) = b$, so ist $f^{-1}(b) = a$. Um sie zu bestimmen, schreibe $y = f(x)$, vertausche $x$ und $y$ und löse nach $y$ auf.</p>
⟦2⟧
<p>Der Graph von $f^{-1}$ ist das Spiegelbild des Graphen von $f$ an der Geraden $y = x$. Nur umkehrbar eindeutige (injektive) Funktionen haben eine Umkehrfunktion.</p>
⟦3⟧`,
  '1ph305emxqf': R`$$(f \circ g)(x) = f(g(x))$$<p>Zuerst $g$ anwenden, dann $f$. Im Allgemeinen gilt $f \circ g \ne g \circ f$.</p>`,
  '1cxwjq7z97r': R`<p>$f(x) = 2x + 1$, $g(x) = x^2$. Dann ist $f(g(3)) = f(9) = 19$, aber $g(f(3)) = g(7) = 49$. Als Terme: $f(g(x)) = 2x^2 + 1$ und $g(f(x)) = (2x + 1)^2$.</p>`,
  '15c8mvolh1o': R`<p>$f(x) = 3x - 5$: Vertauschen ergibt $x = 3y - 5$, also $y = \frac{x + 5}{3}$ und $f^{-1}(x) = \frac{x + 5}{3}$. Probe: $f(f^{-1}(x)) = x$ ✓</p>`,
  '26njpf4q54n': R`<p>$f^{-1}(x)$ bezeichnet die Umkehrfunktion, nicht $\frac{1}{f(x)}$.</p>`,
  'i7pel35sqq': R`Es sei $f(x) = ⟦0⟧$ und $g(x) = ⟦1⟧$. Bestimme $⟦2⟧$.`,
  '1znd9mktzvv': R`Zuerst innen: $g(⟦0⟧) = ⟦1⟧$. Dann $f(⟦2⟧) = ⟦3⟧$.`,
  'hfjxna60e5': R`Zuerst innen: $f(⟦0⟧) = ⟦1⟧$. Dann $g(⟦2⟧) = ⟦3⟧$.`,
  '202pgbw3wu2': R`Es sei $f(x) = ⟦0⟧$ und $g(x) = ⟦1⟧$. Bestimme $(f \circ g)(x)$.`,
  'f0qp6mlevp': R`Bestimme die Umkehrfunktion von $f(x) = ⟦0⟧$.`,
  '169q0jrvorq': R`Schreibe $y = ⟦0⟧$ und vertausche $x$ und $y$: $x = ⟦1⟧$. Nach $y$ auflösen: $y = \frac{x ⟦2⟧}{⟦3⟧}$.`,
  'qmg4emyl6w': R`Gegeben ist $f(x) = ⟦0⟧$. Bestimme $f^{-1}(⟦1⟧)$.`,
  '15zrqw164xy': R`$f^{-1}(⟦0⟧)$ ist die Eingabe, die ⟦1⟧ ergibt: $⟦2⟧ = ⟦3⟧$, also $x = ⟦4⟧$.`,
  'uego2o122d': R`Der Term unter der Wurzel darf nicht negativ sein: $x ⟦0⟧ \ge 0$.`,
  '39j6h0pn24': R`Der Nenner darf nicht null sein: $x ⟦0⟧ \ne 0$.`,
  'sbga4fns30': R`Es muss $⟦0⟧ - x \ge 0$ gelten.`,
  '21vfyvxcrw8': R`Ein Logarithmus braucht ein positives Argument: $x ⟦0⟧ \gt 0$.`,
  '10h8v1f5joc': R`Wie lautet die Definitionsmenge von $f(x) = ⟦0⟧$?`,
  '1i0w7q8kkjh': R`⟦0⟧ Die Definitionsmenge ist also ⟦1⟧.`,
  '1qymltc7n95': R`Es sei $f(x) = \begin{cases} ⟦0⟧, & x \lt ⟦1⟧ \\ ⟦2⟧, & x \ge ⟦3⟧ \end{cases}$. Bestimme $f(⟦4⟧)$.`,
  '2c8e7agksdd': R`Da $⟦0⟧ \lt ⟦1⟧$, gilt die erste Vorschrift: $f(⟦2⟧) = ⟦3⟧$.`,
  'ranlsqjvf9': R`Da $⟦0⟧ \ge ⟦1⟧$, gilt die zweite Vorschrift: $f(⟦2⟧) = ⟦3⟧$.`,

  // exp-log
  'l9f49uc5fx': R`
<p>Rationale Exponenten verbinden Potenzen und Wurzeln: $a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$. Also ist $8^{\frac{2}{3}} = (\sqrt[3]{8})^2 = 4$ und $16^{-\frac{1}{2}} = \frac{1}{4}$.</p>
<h3>Logarithmen</h3>
⟦0⟧
⟦1⟧
<h3>Gleichungen lösen</h3>
<ul><li>Gleiche Basis: $2^{x+1} = 32 = 2^5 \Rightarrow x + 1 = 5 \Rightarrow x = 4$.</li><li>Logarithmusgleichung: $\log_3(2x - 1) = 2 \Rightarrow 2x - 1 = 3^2 = 9 \Rightarrow x = 5$.</li><li>Verschiedene Basen: Logarithmiere beide Seiten, $5^x = 20 \Rightarrow x = \frac{\log 20}{\log 5} \approx 1{,}861$.</li></ul>
<h3>Exponentielles Wachstum und exponentielle Abnahme</h3>
<p>$A = A_0 \cdot r^{t/T}$: eine Größe, die alle $T$ Zeiteinheiten mit $r$ multipliziert wird. Zinseszins: $A = P(1 + i)^n$.</p>
⟦2⟧`,
  'cgsm0nxs87': R`$$\log_b a = c \quad\Longleftrightarrow\quad b^c = a \qquad (b \gt 0;\; b \ne 1;\; a \gt 0)$$<p>Ein Logarithmus beantwortet die Frage „Mit welcher Hochzahl muss man $b$ potenzieren, um $a$ zu erhalten?“ — also ist $\log_2 32 = 5$. $\log x$ bedeutet $\log_{10} x$; $\ln x$ bedeutet $\log_e x$ mit $e \approx 2{,}718$.</p>`,
  '5k5p7u9mjc': R`Basiswechsel`,
  'unmvz575yi': R`<p>$\log(x + y) \ne \log x + \log y$. Das Produktgesetz macht aus einem <i>Produkt</i> innen eine Summe außen.</p>`,
  'osur1d06sr': R`Berechne $\log_{⟦0⟧} ⟦1⟧$.`,
  '8m3m9l7mik': R`$⟦0⟧^{⟦1⟧} = ⟦2⟧$, also $\log_{⟦3⟧} ⟦4⟧ = ⟦5⟧$.`,
  '1qkid4ac6wc': R`Berechne $\log_{⟦0⟧} ⟦1⟧ + \log_{⟦2⟧} ⟦3⟧$.`,
  '1kop25xxaoo': R`Berechne $\log_{⟦0⟧} ⟦1⟧ - \log_{⟦2⟧} ⟦3⟧$.`,
  '1cctawopufn': R`Berechne $⟦0⟧^{-\frac{⟦1⟧}{⟦2⟧}}$.`,
  '2bg5dnahfhi': R`Gib einen Bruch ein, zum Beispiel 1/4.`,
  '2cumtrnn88x': R`Berechne $⟦0⟧^{\frac{⟦1⟧}{⟦2⟧}}$.`,
  'x9eagz2e3z': R`Löse $⟦0⟧^{⟦1⟧} = ⟦2⟧$.`,
  '1zhriq8g9vc': R`$⟦0⟧ = ⟦1⟧^{⟦2⟧}$. Gleiche Basen bedeuten gleiche Exponenten: $⟦3⟧ = ⟦4⟧$, also $x = ⟦5⟧$.`,
  '5s8f33ips': R`Löse $\log_{⟦0⟧}(⟦1⟧) = ⟦2⟧$.`,
  '1qw3ujxvp13': R`In Exponentialform: $⟦0⟧ = ⟦1⟧^{⟦2⟧} = ⟦3⟧$, also $⟦4⟧ = ⟦5⟧$ und $x = ⟦6⟧$.`,
  '1owsh5togde': R`Eine Bakterienkolonie aus ⟦0⟧ Zellen verdoppelt sich alle ⟦1⟧ Stunden. Wie viele Zellen sind es nach ⟦2⟧ Stunden?`,
  '24ouek9sj2d': R`Eine Bakterienkolonie aus ⟦0⟧ Zellen verdreifacht sich alle ⟦1⟧ Stunden. Wie viele Zellen sind es nach ⟦2⟧ Stunden?`,
  'sad2coi0y': R`Es sind $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ Zeiträume, also $N = ⟦3⟧ \times ⟦4⟧^{⟦5⟧} = ⟦6⟧$.`,
  'uyumfdhjnr': R`Gegeben sind $\log 2 \approx 0{,}3010$ und $\log 3 \approx 0{,}4771$. Bestimme $\log ⟦0⟧$ auf 4 Nachkommastellen.⟦1⟧`,
  'a59cccufc1': R` (Tipp: $\log 5 = \log 10 - \log 2$.)`,
  '12khv2t073z': R`$⟦0⟧ = ⟦1⟧$, also $\log ⟦2⟧ = ⟦3⟧ \approx ⟦4⟧$.⟦5⟧`,
  '2aoxsl3f4vw': R` Dabei ist $\log 5 = 1 - 0{,}3010 = 0{,}6990$.`,
});
