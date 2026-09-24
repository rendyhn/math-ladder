/* Deutsch — Universität (Ableitungstechniken → Differentialgleichungen) */
addT('de', {
  // diff-techniques
  'i2e9stiapi': R`
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Implizites Differenzieren</h3>
<p>Ist $y$ implizit gegeben, leite beide Seiten nach $x$ ab und behandle $y$ dabei als Funktion von $x$ (also $\frac{d}{dx}y^2 = 2y\,y'$); löse dann nach $y'$ auf.</p>
⟦3⟧
⟦4⟧
⟦5⟧`,
  '1kr8zytc8j5': R`Produkt`,
  '1fd6nxjb0xt': R`Quotient`,
  '21u0n9yxqot': R`Kette`,
  '10xmtmesa6t': R`Funktion`,
  'n72fq2kxcg': R`Ableitung`,
  '1qtv7snffoy': R`<p>$\dfrac{d}{dx}\,(3x^2 + 1)^5 = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4$ &nbsp;(Kettenregel)</p><p>$\dfrac{d}{dx}\,x^2 e^{3x} = 2x e^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$ &nbsp;(Produktregel)</p>`,
  '1nhip08xeg5': R`<p>$x^2 + y^2 = 25 \Rightarrow 2x + 2y\,y' = 0 \Rightarrow y' = -\dfrac{x}{y}$. Im Punkt $(3; 4)$ ist die Steigung $-\frac{3}{4}$.</p>`,
  'wvkdxn7frj': R`<p><b>Logarithmisches Differenzieren</b> hilft bei Produkten, Quotienten und variablen Exponenten: Für $y = x^x$ ist $\ln y = x\ln x$, also $\frac{y'}{y} = \ln x + 1$ und $y' = x^x(\ln x + 1)$.</p>`,
  're4vli1oc9': R`<p>Kettenregel: Multipliziere immer mit der Ableitung der <b>inneren</b> Funktion. $\frac{d}{dx}\sin(x^2) = 2x\cos(x^2)$, nicht $\cos(x^2)$.</p>`,
  '1iajxt140g2': R`Sei $f(x) = (⟦0⟧)^{⟦1⟧}$. Bestimme $f'(⟦2⟧)$.`,
  '2108swf0nc1': R`Kettenregel: $f'(x) = ⟦0⟧(⟦1⟧)^{⟦2⟧} \cdot ⟦3⟧$. Bei $x = ⟦4⟧$ ist die innere Funktion ⟦5⟧, also $f'(⟦6⟧) = ⟦7⟧ \cdot ⟦8⟧^{⟦9⟧} \cdot ⟦10⟧ = ⟦11⟧$.`,
  '13u8g7mcany': R`Leite $y = ⟦0⟧⟦1⟧$ ab.`,
  'ltfmske2sq': R`Produktregel mit $u = ⟦0⟧$, $v = ⟦1⟧$: $y' = ⟦2⟧⟦3⟧ + ⟦4⟧ \cdot ⟦5⟧ =⟦6⟧⟦7⟧(⟦8⟧)$.`,
  '24tbapqaxkt': R`Sei $f(x) = \ln(⟦0⟧)$. Bestimme $f'(⟦1⟧)$.`,
  'vr5ui5jnj1': R`$f'(x) = \frac{⟦0⟧x}{⟦1⟧}$, also $f'(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '21f80wac08v': R`Bestimme $\frac{dy}{dx}$ für $x^2 + y^2 = ⟦0⟧$ im Punkt $⟦1⟧$.`,
  'xl17ytois8': R`Bestimme $\frac{dy}{dx}$ für $xy = ⟦0⟧$ im Punkt $⟦1⟧$.`,
  'cc1dbada60': R`Produktregel: $y + x\,y' = 0 \Rightarrow y' = -\frac{y}{x} = ⟦0⟧$.`,
  'g5b3ql04b4': R`Leite $y = \sin(⟦0⟧)$ ab.`,
  '1u57cjycyb3': R`Kettenregel: Die äußere Ableitung ist $\cos(⟦0⟧)$, die innere Ableitung $⟦1⟧$; zusammen $⟦2⟧\cos(⟦3⟧)$.`,
  '1zcx1qjywp8': R`Bestimme für $f(x) = ⟦0⟧$ den Wert $f''(⟦1⟧)$.`,
  '22jprctwicn': R`$f'(x) = ⟦0⟧$ und $f''(x) = ⟦1⟧$. Also $f''(⟦2⟧) = ⟦3⟧$.`,
  '1pkqexq4tgg': R`Sei $f(x) = x\ln x$. Bestimme $f'(e^{⟦0⟧})$.`,
  '20aqqhk2mtp': R`Produktregel: $f'(x) = \ln x + x \cdot \frac{1}{x} = \ln x + 1$. Also $f'(e^{⟦0⟧}) = ⟦1⟧ + 1 = ⟦2⟧$.`,

  // diff-applications
  'g0oq20zzs': R`
<h3>Regel von L'Hospital</h3>
⟦0⟧
<p>$\displaystyle\lim_{x \to 0}\frac{1 - \cos 4x}{x^2} = \lim\frac{4\sin 4x}{2x} = \lim\frac{16\cos 4x}{2} = 8$ (zweimal angewendet).</p>
<h3>Optimierung</h3>
<ol><li>Schreibe die zu optimierende Größe als Funktion einer Variablen (nutze die Nebenbedingung).</li><li>Leite ab und löse $f'(x) = 0$.</li><li>Prüfe, ob ein Maximum/Minimum vorliegt (zweite Ableitung oder Randwerte).</li></ol>
⟦1⟧
<h3>Verknüpfte Änderungsraten</h3>
<p>Leite eine Beziehung nach der Zeit ab. Für einen wachsenden Kreis gilt $A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.</p>
<h3>Lineare Näherung</h3>
⟦2⟧
<h3>Krümmung und Mittelwertsatz</h3>
<p>$f'' \gt 0$: linksgekrümmt (konvex); $f'' \lt 0$: rechtsgekrümmt (konkav); ein <b>Wendepunkt</b> ist eine Stelle, an der sich das Krümmungsverhalten ändert. <b>Mittelwertsatz:</b> Ist $f$ stetig auf $[a; b]$ und im Inneren differenzierbar, so gibt es ein $c$ in $(a; b)$ mit $f'(c) = \frac{f(b) - f(a)}{b - a}$.</p>
⟦3⟧`,
  '11hmiu9w9s4': R`<p>Hat $\lim \frac{f(x)}{g(x)}$ die Form $\frac{0}{0}$ oder $\frac{\infty}{\infty}$, dann gilt $\displaystyle\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}$ (falls die rechte Seite existiert).</p>`,
  '189x52ko5mw': R`<p>Aus den Ecken eines quadratischen Blechs von 18 cm Seitenlänge werden Quadrate der Seitenlänge $x$ ausgeschnitten und die Seiten hochgebogen. $V = x(18 - 2x)^2$, $V' = (18 - 2x)(18 - 6x) = 0$ ergibt $x = 3$, also $V_{\max} = 3 \cdot 12^2 = 432$ cm³.</p>`,
  'e22qux2ozs': R`f(a + h) \approx f(a) + f'(a)\,h \qquad \text{z. B. } \sqrt{26} \approx 5 + \frac{1}{2 \cdot 5} = 5{,}1`,
  '15384lzo6ba': R`<p>L'Hospital leitet Zähler und Nenner <b>getrennt</b> ab — das ist nicht die Quotientenregel.</p>`,
  's2219vpl96': R`Berechne $\displaystyle\lim_{x \to 0}\frac{1 - \cos ⟦0⟧x}{x^2}$.`,
  '1tq22svmx8r': R`Zweimal L'Hospital: $\frac{⟦0⟧\sin ⟦1⟧x}{2x} \to \frac{⟦2⟧\cos ⟦3⟧x}{2} \to \frac{⟦4⟧}{2}$.`,
  'v9t0b7xos3': R`Berechne $\displaystyle\lim_{x \to 0}\frac{⟦0⟧}{⟦1⟧x}$.`,
  'wudu9stdyh': R`Es liegt $\frac{0}{0}$ vor; leite Zähler und Nenner ab: $\frac{⟦0⟧}{⟦1⟧} \to \frac{⟦2⟧}{⟦3⟧}$.`,
  'b8a0ml45bv': R`Aus den Ecken eines Blechs von ⟦0⟧ cm mal ⟦1⟧ cm werden gleich große Quadrate der Seitenlänge $x$ cm ausgeschnitten und die Seiten zu einer offenen Schachtel hochgebogen. ⟦2⟧`,
  '6fzl8050w8': R`Für welchen Wert von x ist das Volumen maximal?`,
  '1nbs4g9250e': R`Wie groß ist das größtmögliche Volumen?`,
  '1xaya4958aj': R`$V = x(⟦0⟧ - 2x)^2$, $V' = (⟦1⟧ - 2x)(⟦2⟧ - 6x) = 0$ ergibt $x = ⟦3⟧$ (die andere Nullstelle liefert das Volumen null). $V = ⟦4⟧(⟦5⟧)^2 = ⟦6⟧$ cm³.`,
  'g44lawx7yb': R`Der Radius eines Kreises wächst um ⟦0⟧ cm/s. Wie schnell wächst der Flächeninhalt, wenn der Radius ⟦1⟧ cm beträgt? Antworte mit $\pi$.`,
  'pvrsmdtr3x': R`$\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi(⟦0⟧)(⟦1⟧) = ⟦2⟧$ cm²/s.`,
  'w8wuhpzsgd': R`Der Radius eines kugelförmigen Ballons wächst um ⟦0⟧ cm/s. Wie schnell wächst sein Volumen, wenn der Radius ⟦1⟧ cm beträgt? Antworte mit $\pi$.`,
  '1ca85zwkg9p': R`$\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = 4\pi(⟦0⟧)^2(⟦1⟧) = ⟦2⟧$ cm³/s.`,
  '2c66yuykiw5': R`Schätze $\sqrt{⟦1⟧}$ mit einer linearen Näherung von $\sqrt{x}$ an der Stelle $x = ⟦0⟧$.`,
  'rjw48nwhxr': R`Gib einen Bruch oder eine Dezimalzahl ein.`,
  '16wswpodtbc': R`Bestimme die $x$-Koordinate des Wendepunkts von $f(x) = ⟦0⟧$.`,
  '16igzoef2co': R`$f''(x) = 6x ⟦0⟧ = 0$ ergibt $x = ⟦1⟧$; dort wechselt $f''$ das Vorzeichen.`,
  '2dw0fqk2lyr': R`$f(x) = ⟦0⟧$ auf $[⟦1⟧; ⟦2⟧]$. Bestimme die Stelle $c$ aus dem Mittelwertsatz.`,
  '1c5ltuvzsrq': R`Mittlere Steigung $= \frac{f(⟦0⟧) - f(⟦1⟧)}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. $f'(c) = 2c ⟦5⟧ = ⟦6⟧$ ergibt $c = ⟦7⟧$ — die Intervallmitte, wie immer bei einer quadratischen Funktion.`,

  // integration-techniques
  'vrvi3bfbr': R`
<h3>Substitution</h3>
<p>Suche eine Funktion und ihre Ableitung. Mit $u = g(x)$, $du = g'(x)\,dx$:</p>
⟦0⟧
<p>Bei bestimmten Integralen ändere auch die Grenzen (oder rücksubstituiere vor dem Einsetzen).</p>
<h3>Partielle Integration</h3>
⟦1⟧
⟦2⟧
<h3>Partialbruchzerlegung</h3>
<p>Zerlege eine gebrochenrationale Funktion in einfachere Teile: $\dfrac{5x - 1}{(x - 1)(x + 2)} = \dfrac{A}{x - 1} + \dfrac{B}{x + 2}$. Multipliziere mit dem Nenner und setze $x = 1$ und $x = -2$ ein: $A = \frac{4}{3}$, $B = \frac{11}{3}$. Jeder Teil ergibt beim Integrieren einen Logarithmus.</p>
<h3>Uneigentliche Integrale</h3>
⟦3⟧
⟦4⟧`,
  '26zznowz8be': R`\int 2x(x^2 + 1)^3\,dx = \int u^3\,du = \frac{u^4}{4} + C = \frac{(x^2 + 1)^4}{4} + C`,
  '5ecfawuidh': R`$$\int u\,dv = uv - \int v\,du$$<p>Wähle $u$ nach <b>LIATE</b>: Logarithmus, Inverse Winkelfunktion, Algebraisch, Trigonometrisch, Exponentiell — was zuerst kommt.</p>`,
  'c0nz9m0n3d': R`<p>$\int x e^{2x}\,dx$: $u = x$, $dv = e^{2x}dx$, also $du = dx$, $v = \frac{1}{2}e^{2x}$. Ergebnis: $\frac{x}{2}e^{2x} - \int\frac{1}{2}e^{2x}\,dx = \frac{x}{2}e^{2x} - \frac{1}{4}e^{2x} + C$.</p>`,
  '2clmb8muggz': R`\int_1^\infty \frac{dx}{x^p} = \frac{1}{p - 1} \text{ für } p \gt 1 \text{ (divergent für } p \le 1) \qquad \int_0^\infty e^{-kx}\,dx = \frac{1}{k}`,
  'l8twy4h3ug': R`<p>$\int \frac{g'(x)}{g(x)}\,dx = \ln|g(x)| + C$ — erkenne dieses Muster, bevor du zu schwereren Methoden greifst.</p>`,
  'fesx7djw83': R`xe^{x} - e^{x}`,
  'yia5dxx3ds': R`xe^{x} + e^{x}`,
  '1afuqmxgeq5': R`Berechne $\displaystyle\int ⟦0⟧\,dx$.`,
  '1235n0zk19z': R`Partielle Integration mit ⟦0⟧: Das Ergebnis ist ⟦1⟧. Zur Probe ableiten.`,
  'pklgf5s2ey': R`Berechne $\displaystyle\int_0^{⟦0⟧} 2x(x^2 + 1)^{⟦1⟧}\,dx$.`,
  '51fkmlo4j8': R`Setze $u = x^2 + 1$, $du = 2x\,dx$; Grenzen von $u = 1$ bis $u = ⟦0⟧$: $\int_1^{⟦1⟧} u^{⟦2⟧}\,du = \left[\frac{u^{⟦3⟧}}{⟦4⟧}\right]_1^{⟦5⟧} = \frac{⟦6⟧ - 1}{⟦7⟧} = ⟦8⟧$.`,
  '1tmpbvg6cku': R`Führe eine Partialbruchzerlegung durch: $\dfrac{⟦0⟧}{⟦1⟧⟦2⟧}$`,
  '1iitr1pnozn': R`Schreibe $\frac{P}{⟦0⟧} + \frac{Q}{⟦1⟧}$ und multipliziere mit dem Hauptnenner. $x = ⟦2⟧$ ergibt $P = ⟦3⟧$; $x = ⟦4⟧$ ergibt $Q = ⟦5⟧$.`,
  'r1rswlk024': R`Berechne $\displaystyle\int_0^{\pi/⟦0⟧} \sin(⟦1⟧x)\,dx$.`,
  '1l97oofm3p4': R`Berechne $\displaystyle\int_0^{\pi/⟦0⟧} \cos(⟦1⟧x)\,dx$.`,
  'pqalznrxip': R`Berechne $\displaystyle\int_1^{\infty} \frac{dx}{x^{⟦0⟧}}$.`,
  '4t49nbtc5g': R`$\left[\frac{x^{⟦0⟧}}{⟦1⟧}\right]_1^{\infty} = 0 - \frac{1}{⟦2⟧} = ⟦3⟧$. Es konvergiert, weil $p = ⟦4⟧ \gt 1$.`,
  'w9i8vvwvmq': R`Berechne $\displaystyle\int_0^{\infty} e^{-⟦0⟧x}\,dx$.`,
  '1wnox68sxsf': R`Berechne $\displaystyle\int_0^{⟦0⟧} \frac{2x}{x^2 + 1}\,dx$.`,
  '2ctr5v6it67': R`Antworten wie ln(10) werden akzeptiert.`,
  '8ud8r2yql4': R`Der Zähler ist die Ableitung des Nenners: $\left[\ln(x^2 + 1)\right]_0^{⟦0⟧} = \ln ⟦1⟧ - \ln 1 = \ln ⟦2⟧$.`,

  // integral-applications
  '1iuoee1mxv2': R`Integral`,
  'u2fo7phj7e': R`Fläche zwischen Kurven`,
  '26rkw1zgbbl': R`Volumen (Scheiben), um die x-Achse`,
  '1gdvfh77kjd': R`Volumen (Ringe)`,
  '2e8c5l4l65u': R`Volumen (Zylinderschalen), um die y-Achse`,
  'hf97eg5buy': R`Mittelwert`,
  '1wrr2ozjzke': R`Bogenlänge`,
  '1aamatrm1qc': R`Arbeit (veränderliche Kraft)`,
  '25psf0wh4wl': R`<p>Rotation von $y = \sqrt{x}$, $0 \le x \le 4$, um die $x$-Achse: $V = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi$.</p>`,
  '84txgrqh8f': R`<p>Eine Feder mit $k = 200$ N/m (Hookesches Gesetz $F = kx$), um 0,3 m gedehnt: $W = \int_0^{0{,}3} 200x\,dx = 100(0{,}3)^2 = 9$ J.</p>`,
  '4sufc6qh8k': R`<p>Zuerst skizzieren. Bestimme, wo sich die Kurven schneiden (das sind die Grenzen) und welche oben liegt — der Integrand ist immer <b>obere minus untere</b> (bzw. Außenradius zum Quadrat minus Innenradius zum Quadrat).</p>`,
  '2dts82e214f': R`<p>Bei der Scheibenmethode wird die <b>Funktion</b> quadriert, nicht das Integral: $\pi\int f^2$, nicht $\pi\left(\int f\right)^2$.</p>`,
  '254d1knheuj': R`Bestimme den Inhalt der Fläche zwischen $y = x^3$ und $y = ⟦0⟧x$ im ersten Quadranten.`,
  '6v6svg4kwp': R`Sie schneiden sich bei $x = 0$ und $x = ⟦0⟧$. $\int_0^{⟦1⟧} (⟦2⟧x - x^3)\,dx = \frac{⟦3⟧(⟦4⟧)^2}{2} - \frac{⟦5⟧^4}{4} = ⟦6⟧$.`,
  '137eefen200': R`\pi\int_0^{⟦0⟧} x\,dx = \frac{\pi (⟦1⟧)^2}{2}`,
  '1minpuvvl2n': R`\pi\int_0^{⟦0⟧} x^2\,dx = \frac{\pi (⟦1⟧)^3}{3}`,
  's7flm3xrdz': R`\pi\int_0^{⟦0⟧} x^4\,dx = \frac{\pi (⟦1⟧)^5}{5}`,
  '217wjez6n7': R`Die Fläche unter $⟦0⟧$ für $0 \le x \le ⟦1⟧$ rotiert um die $x$-Achse. Bestimme das Volumen mit $\pi$.`,
  '1icurdoc4sc': R`Scheibenmethode: $V = ⟦0⟧ = ⟦1⟧$.`,
  '2gj0lncwv9v': R`Die Fläche zwischen $y = ⟦0⟧x$ und $y = x^2$ rotiert um die $x$-Achse. Bestimme das Volumen mit $\pi$.`,
  '79trxd9ylt': R`Ringe mit Außenradius $⟦0⟧x$ und Innenradius $x^2$ auf $[0; ⟦1⟧]$: $V = \pi\int_0^{⟦2⟧} (⟦3⟧x^2 - x^4)\,dx = \pi\left(\frac{⟦4⟧}{3} - \frac{⟦5⟧}{5}\right) = ⟦6⟧$.`,
  '7u6xsm6kr0': R`Bestimme den Mittelwert von $f(x) = x^2$ auf $[0; ⟦0⟧]$.`,
  '14439tvneep': R`Bestimme den Mittelwert von $f(x) = ⟦0⟧$ auf $[⟦1⟧; ⟦2⟧]$.`,
  'ooxywxrn7m': R`Der Mittelwert einer linearen Funktion ist ihr Wert in der Intervallmitte $x = ⟦0⟧$: $⟦1⟧(⟦2⟧) ⟦3⟧ = ⟦4⟧$.`,
  'mptjdpftfn': R`Bestimme die Bogenlänge von $y = \frac{2}{3}x^{3/2}$ von $x = 0$ bis $x = ⟦0⟧$.`,
  'z00id81ez': R`$y' = x^{1/2}$, also $L = \int_0^{⟦0⟧} \sqrt{1 + x}\,dx = \left[\frac{2}{3}(1 + x)^{3/2}\right]_0^{⟦1⟧} = \frac{2}{3}(⟦2⟧ - 1) = ⟦3⟧$.`,
  'lpjavqv13n': R`Eine Feder hat die Federkonstante $k = ⟦0⟧$ N/m. Wie viel Arbeit ist nötig, um sie aus der Ruhelage um ⟦1⟧ m zu dehnen?`,

  // series
  '1efhn95iov3': R`
<p>Eine unendliche Reihe $\sum a_n$ <b>konvergiert</b>, wenn ihre Partialsummen $S_N = a_1 + \cdots + a_N$ gegen einen endlichen Grenzwert streben.</p>
⟦0⟧
⟦1⟧
<h3>Potenzreihen und Taylorreihen</h3>
<p>Eine Potenzreihe $\sum c_n (x - a)^n$ konvergiert für $|x - a| \lt R$, den <b>Konvergenzradius</b> (bestimmt mit dem Quotientenkriterium). Die Taylorreihe von $f$ um $a$ ist $\sum \frac{f^{(n)}(a)}{n!}(x - a)^n$; um 0 heißt sie Maclaurin-Reihe.</p>
⟦2⟧
⟦3⟧`,
  '1fv7uha3bb4': R`Kriterium`,
  '1boy0ga8tbt': R`Folgerung`,
  '7ih7yeq8ue': R`Nullfolgenkriterium`,
  '1muum9p7rzf': R`wenn $a_n \not\to 0$, divergiert die Reihe`,
  '1ky8r0l0qv8': R`$\sum ar^n$ konvergiert genau dann, wenn $|r| \lt 1$; Summe $\frac{a}{1 - r}$`,
  'rijv0gvehd': R`p-Reihe`,
  '7fut7e3zun': R`$\sum \frac{1}{n^p}$ konvergiert genau dann, wenn $p \gt 1$`,
  '28h8cjdskg3': R`Vergleich`,
  '23c91vpuxqn': R`mit einer bekannten Reihe vergleichen`,
  '1684r7a6bgw': R`Quotientenkriterium`,
  'oc6lw933sm': R`$L = \lim\left|\frac{a_{n+1}}{a_n}\right|$: $L \lt 1$ konvergent, $L \gt 1$ divergent`,
  '131362k70as': R`Alternierende Reihe`,
  '1ew5e8sa4g7': R`$\sum (-1)^n b_n$ konvergiert, wenn $b_n \downarrow 0$`,
  '12cxen3heke': R`<p><b>Teleskopsumme:</b> $\displaystyle\sum_{n=1}^{N}\frac{1}{n(n+1)} = \sum\left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{N+1}$, was gegen 1 strebt.</p>`,
  '1ql1d0zgkve': R`Maclaurin-Reihe`,
  '1arf5rbq565': R`Gültig für`,
  'oui4ssl2gv': R`alle x`,
  'kvkz0oqeo6': R`<p>$a_n \to 0$ ist notwendig, aber nicht hinreichend: Die harmonische Reihe $\sum \frac{1}{n}$ divergiert, obwohl $\frac{1}{n} \to 0$.</p>`,
  '16u2ienbhtn': R`Berechne $\displaystyle\sum_{n=⟦0⟧}^{\infty} ⟦1⟧\left(⟦2⟧\right)^n$.`,
  '1kgeq4tf48a': R`Geometrisch mit $r = ⟦0⟧$, $|r| \lt 1$, erstes Glied $⟦1⟧$: Summe $= \frac{⟦2⟧}{1 - ⟦3⟧} = ⟦4⟧$.`,
  '1eiae773y4x': R`p-Reihe mit $p = \frac{1}{2} \le 1$`,
  '1wok8okhtk9': R`harmonische Reihe ($p = 1$)`,
  '22u9pb285sv': R`p-Reihe mit $p = \frac{3}{2} \gt 1$`,
  '204d6a8dcww': R`p-Reihe mit $p = 2 \gt 1$`,
  '243y5j9lor6': R`Nullfolgenkriterium: $\frac{n}{n+1} \to 1 \ne 0$`,
  'ajpp0zqaap': R`Leibniz-Kriterium`,
  'wlawq7ztg6': R`Quotientenkriterium: $\frac{3}{n+1} \to 0 \lt 1$`,
  '265645ebmpe': R`Quotientenkriterium: $\frac{n+1}{2} \to \infty$`,
  '1lt7pp2ijz': R`geometrische Reihe mit $|r| = \frac{2}{3} \lt 1$`,
  '6goqsof3sp': R`geometrische Reihe mit $|r| = \frac{3}{2} \ge 1$`,
  '1d4bvtuk3gt': R`Vergleich mit $\sum\frac{1}{n^2}$`,
  '2846ssfmjxq': R`Grenzwert-Vergleich mit der harmonischen Reihe`,
  's3fpv9edn1': R`Konvergiert oder divergiert $\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$?`,
  '1szqlme8ixw': R`Konvergiert`,
  '1mr32mwk08w': R`Divergiert`,
  '25wy0z8lea1': R`Sie konvergiert (Begründung: ⟦0⟧).`,
  'zibgubfq': R`Sie divergiert (Begründung: ⟦0⟧).`,
  'd893gqg85h': R`Bestimme den Koeffizienten von $x^{⟦0⟧}$ in der Maclaurin-Reihe von $⟦1⟧$.`,
  '2gib9c2xh5i': R`$e^u = \sum \frac{u^n}{n!}$ mit $u = ⟦0⟧$: Der Koeffizient ist $\frac{(⟦1⟧)^{⟦2⟧}}{⟦3⟧!} = ⟦4⟧$.`,
  '1i7l7fodjgy': R`Bestimme den Koeffizienten von $x^{⟦0⟧}$ in der Maclaurin-Reihe von $\cos(⟦1⟧x)$.`,
  '27l5wjsmcqy': R`$\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \cdots$ mit $u = ⟦0⟧x$: Koeffizient $= ⟦1⟧$.`,
  '13hswzoz6ds': R`Bestimme den Koeffizienten von $x^{⟦0⟧}$ in der Maclaurin-Reihe von $\dfrac{1}{1 ⟦1⟧x}$.`,
  '950amaqi7k': R`$\frac{1}{1 - u} = \sum u^n$ mit $u = ⟦0⟧$: Der Koeffizient von $x^{⟦1⟧}$ ist $(⟦2⟧)^{⟦3⟧} = ⟦4⟧$.`,
  '12ohsobdns': R`Bestimme den Konvergenzradius von $\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$.`,
  'y2p3mhwix3': R`Quotientenkriterium: $\left|\frac{a_{n+1}}{a_n}\right| \to \frac{|⟦0⟧|}{⟦1⟧}$. Das ist kleiner als 1 für $|⟦2⟧| \lt ⟦3⟧$, also $R = ⟦4⟧$.`,
  '1hfprth485h': R`Berechne $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$.`,
  '24anbau0yh': R`Teleskopsumme: $S_N = 1 - \frac{1}{N+1} \to 1$.`,
  'kcknro2xmq': R`Berechne $\displaystyle\sum_{n=1}^{⟦0⟧} \frac{1}{n(n+1)}$.`,
  'd2ku2hqqe6': R`$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$, die Summe ist also eine Teleskopsumme: $1 - \frac{1}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$.`,
  '2d09rr0z1dx': R`Welche Funktion hat die Maclaurin-Reihe $\displaystyle ⟦0⟧$?`,
  '262p4pwoflz': R`Das ist die Standardreihe von $⟦0⟧$.`,

  // multivariable
  'elrzs4craq': R`
<p>Für $f(x, y)$ leitet die <b>partielle Ableitung</b> $f_x = \frac{\partial f}{\partial x}$ nach $x$ ab und behandelt $y$ als Konstante (umgekehrt bei $f_y$). Für $f = x^2y^3$: $f_x = 2xy^3$, $f_y = 3x^2y^2$.</p>
<h3>Gradient und Richtungsableitung</h3>
⟦0⟧
<h3>Kritische Punkte: Test mit der zweiten Ableitung</h3>
<p>In einem Punkt mit $f_x = f_y = 0$ sei $D = f_{xx}f_{yy} - f_{xy}^2$.</p>
<ul><li>$D \gt 0$, $f_{xx} \gt 0$: lokales Minimum. &nbsp; $D \gt 0$, $f_{xx} \lt 0$: lokales Maximum.</li><li>$D \lt 0$: Sattelpunkt. &nbsp; $D = 0$: Der Test ist nicht aussagekräftig.</li></ul>
<h3>Doppelintegrale</h3>
<p>Über einem Rechteck integriert man nacheinander (Fubini): $\displaystyle\int_0^2\!\!\int_0^3 xy\,dy\,dx = \int_0^2 \frac{9x}{2}\,dx = 9$. In Polarkoordinaten ist $dA = r\,dr\,d\theta$.</p>
<h3>Lagrange-Multiplikatoren</h3>
<p>Um $f$ unter der Nebenbedingung $g = c$ zu optimieren, löse $\nabla f = \lambda\nabla g$ zusammen mit der Nebenbedingung.</p>
⟦1⟧
⟦2⟧`,
  '1lpi0dcmqpt': R`$$\nabla f = \left(f_x; f_y\right) \qquad D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u} \quad (|\mathbf{u}| = 1)$$<p>$\nabla f$ zeigt in die Richtung des steilsten Anstiegs; seine Länge ist diese maximale Änderungsrate.</p>`,
  'opu0v1dwpl': R`<p>Maximiere $f = xy$ unter $x + y = 10$: $(y; x) = \lambda(1; 1)$ ergibt $x = y = 5$, das Maximum ist also 25.</p>`,
  '83uqphqp8x': R`<p>Vergiss in Polarkoordinaten nicht den zusätzlichen Faktor $r$ in $dA = r\,dr\,d\theta$.</p>`,
  'oxpugv5o3o': R`Bestimme für $f(x, y) = ⟦0⟧$ den Wert $f_⟦1⟧(⟦2⟧; ⟦3⟧)$.`,
  '131ofsfpabh': R`$f_x = ⟦0⟧$, also $f_x(⟦1⟧; ⟦2⟧) = ⟦3⟧$.`,
  'tma98sxgbh': R`$f_y = ⟦0⟧$, also $f_y(⟦1⟧; ⟦2⟧) = ⟦3⟧$.`,
  '1894fvoucsb': R`Bestimme $\nabla f(⟦0⟧; ⟦1⟧)$ für $f(x, y) = ⟦2⟧$.`,
  '1mtqnuj8e72': R`Gib die beiden Komponenten durch ein Semikolon getrennt ein.`,
  '1wlrv45vn5z': R`$f_x = ⟦0⟧$, $f_y = ⟦1⟧$. In $⟦2⟧$: $\nabla f = ⟦3⟧$.`,
  '280l4hqbl71': R`Bestimme die Richtungsableitung von $f(x, y) = ⟦0⟧$ in $⟦1⟧$ in Richtung $⟦2⟧$.`,
  '23ij1mnh3qx': R`$\nabla f = (⟦0⟧; ⟦1⟧)$, der Einheitsvektor ist $\frac{1}{⟦2⟧}⟦3⟧$. $D_{\mathbf{u}}f = \frac{⟦4⟧(⟦5⟧) + ⟦6⟧(⟦7⟧)}{⟦8⟧} = ⟦9⟧$.`,
  '1gbu12sd7yr': R`Lokales Minimum`,
  'tfsmpd4xkw': R`Lokales Maximum`,
  '29jq1piqelp': R`Sattelpunkt`,
  '1knzmyv1q46': R`Test nicht aussagekräftig`,
  'uai27zrool': R`Bestimme die Art des kritischen Punkts $(0; 0)$ von $f(x, y) = ⟦0⟧$.`,
  'k6dc7gm5pm': R`$D \gt 0$ und $f_{xx} ⟦0⟧ 0$`,
  'scf747plq6': R`Berechne $\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} xy\,dy\,dx$.`,
  'scioeo7pw6': R`$\int_0^{⟦0⟧} xy\,dy = \frac{⟦1⟧x}{2}$, dann $\int_0^{⟦2⟧} \frac{⟦3⟧x}{2}\,dx = \frac{⟦4⟧ \cdot ⟦5⟧}{4} = ⟦6⟧$.`,
  'ktiyfy2vps': R`Berechne $\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} (x + y)\,dy\,dx$.`,
  'lgh3731wbd': R`$\int_0^{⟦0⟧} (x + y)\,dy = ⟦1⟧x + \frac{⟦2⟧}{2}$, dann $\int_0^{⟦3⟧} \left(⟦4⟧x + \frac{⟦5⟧}{2}\right)dx = \frac{⟦6⟧(⟦7⟧)^2}{2} + \frac{⟦8⟧(⟦9⟧)}{2} = ⟦10⟧$.`,
  '1oi548attkh': R`Bestimme mit Lagrange-Multiplikatoren (oder anders) das Maximum von $f = xy$ unter der Nebenbedingung $x ⟦0⟧y = ⟦1⟧$ mit $x, y \gt 0$.`,
  'helueus42k': R`$\nabla f = \lambda\nabla g$: $y = \lambda$, $x = ⟦0⟧\lambda$. Also $x = ⟦1⟧y$ und $⟦2⟧y = ⟦3⟧$, daraus $y = ⟦4⟧$, $x = ⟦5⟧$ und $xy = ⟦6⟧$.`,
  '1c5ngt35a15': R`Berechne $\displaystyle\iint_D (x^2 + y^2)\,dA$, wobei $D$ die Kreisscheibe $x^2 + y^2 \le ⟦0⟧$ ist.`,
  'hl1el1t8oy': R`Polarkoordinaten: $\int_0^{2\pi}\!\int_0^{⟦0⟧} r^2 \cdot r\,dr\,d\theta = 2\pi \cdot \frac{⟦1⟧^4}{4} = ⟦2⟧$.`,

  // ode
  '29y4y4v6xas': R`
<p>Eine <b>Differentialgleichung</b> verknüpft eine Funktion mit ihren Ableitungen. Ihre <b>Ordnung</b> ist die höchste vorkommende Ableitung. Die <b>allgemeine Lösung</b> enthält beliebige Konstanten; Anfangsbedingungen legen eine spezielle Lösung fest.</p>
<h3>Trennung der Variablen</h3>
⟦0⟧
<p>Sonderfall: $\frac{dy}{dt} = ky$ ergibt $y = y_0e^{kt}$ — exponentielles Wachstum ($k \gt 0$) oder exponentielle Abnahme ($k \lt 0$). Bei der Halbwertszeit $T$ ist die verbleibende Menge $N_0\left(\frac{1}{2}\right)^{t/T}$.</p>
<h3>Lineare Gleichungen erster Ordnung</h3>
⟦1⟧
<h3>Lineare Gleichungen zweiter Ordnung mit konstanten Koeffizienten</h3>
<p>Für $ay'' + by' + cy = 0$ führt der Ansatz $y = e^{rx}$ auf die <b>charakteristische Gleichung</b> $ar^2 + br + c = 0$.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'cqow3q58nr': R`<p>$\frac{dy}{dx} = 2xy$: Variablen trennen, $\int\frac{dy}{y} = \int 2x\,dx$, also $\ln|y| = x^2 + C$ und $y = Ae^{x^2}$.</p>`,
  '24caer7vpv9': R`<p>Für $y' + P(x)y = Q(x)$ multipliziere mit dem <b>integrierenden Faktor</b> $\mu(x) = e^{\int P(x)\,dx}$. Dann gilt $(\mu y)' = \mu Q$, also $y = \frac{1}{\mu}\int \mu Q\,dx$.</p>`,
  '2fhw42v6h9r': R`Nullstellen`,
  'mdry0kk339': R`Allgemeine Lösung`,
  '1l55nwfgsi9': R`reell, verschieden $r_1, r_2$`,
  'fkai3ftnyj': R`doppelt $r$`,
  '3w3x9xlope': R`komplex $\alpha \pm \beta i$`,
  '68uvb89pvs': R`<p>$y'' + 4y = 0$: $r^2 + 4 = 0$, $r = \pm 2i$, also $y = C_1\cos 2x + C_2\sin 2x$ — harmonische Schwingung.</p>`,
  'vgovr9zohx': R`<p>Bei einer doppelten Nullstelle ist $C_1e^{rx} + C_2e^{rx}$ eigentlich nur eine Lösung; der zusätzliche Faktor $x$ liefert die zweite.</p>`,
  '234p7duj3ts': R`$r^2 ⟦0⟧r ⟦1⟧ = 0$ hat die Nullstellen $r = ⟦2⟧$ und $r = ⟦3⟧$`,
  '1hssho6k9w6': R`$r^2 ⟦0⟧r + ⟦1⟧ = (r ⟦2⟧)^2 = 0$ hat die doppelte Nullstelle $r = ⟦3⟧$`,
  '2chd8d4gjpq': R`$r^2 ⟦0⟧r + ⟦1⟧ = 0$ hat die komplexen Nullstellen $r = ⟦2⟧ \pm ⟦3⟧i$`,
  '1ngxukqkkvf': R`Bestimme die allgemeine Lösung von $⟦0⟧$.`,
  'irmvhn9wve': R`Die charakteristische Gleichung ⟦0⟧, also ⟦1⟧.`,
  '5e0s1xl4f9': R`Eine radioaktive Probe von ⟦0⟧ g hat eine Halbwertszeit von ⟦1⟧ Jahren. Wie viel ist nach ⟦2⟧ Jahren noch übrig?`,
  '2eo258s1sy7': R`$⟦0⟧$ Jahre sind ⟦1⟧ Halbwertszeiten: $⟦2⟧\left(\frac{1}{2}\right)^{⟦3⟧} = ⟦4⟧$ g.`,
  '1btlmc6ms72': R`Löse die separierbare Gleichung $\dfrac{dy}{dx} = ⟦0⟧\,y$.`,
  'lgqvn6fqu1': R`$\int\frac{dy}{y} = \int ⟦0⟧\,dx$ ergibt $\ln|y| = ⟦1⟧ + C_0$, also $y = Ce^{⟦2⟧}$.`,
  '1wp1r4xsb5y': R`Wie lautet der integrierende Faktor für $y' + ⟦0⟧\,y = x^2$?`,
  '1d5o356dbul': R`Das newtonsche Abkühlungsgesetz liefert $T(t) = ⟦0⟧ + ⟦1⟧e^{-⟦2⟧t}$ (°C, $t$ in Minuten). Bestimme die Temperatur nach ⟦3⟧ Minuten auf 1 Nachkommastelle.`,
  'uzon2x7fe4': R`\frac{dy}{dx} = x^2y`,
  '8swe0ei2mu': R`\frac{d^2y}{dx^2} + y = 0`,
  '28kd92q06yf': R`\frac{d^3y}{dx^3} - 2\frac{dy}{dx} = 0`,
  '1jgz4mikafn': R`Welche Ordnung hat die Differentialgleichung $⟦0⟧$?`,
  'rxb07imi4n': R`Die Ordnung ist die höchste vorkommende Ableitung: hier ⟦0⟧.`,
});
