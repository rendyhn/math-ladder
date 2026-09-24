/* Deutsch — Universität (lineare Algebra → Laplace-Transformation) */
addT('de', {
  // linear-algebra
  'aoku0sfspm': R`
<h3>Lineare Gleichungssysteme und Rang</h3>
<p>Ein System $A\mathbf{x} = \mathbf{b}$ löst man, indem man die erweiterte Matrix $[A \mid \mathbf{b}]$ durch Zeilenumformungen auf Stufenform bringt. Der <b>Rang</b> von $A$ ist die Anzahl der Pivotelemente (Nicht-Nullzeilen in Stufenform).</p>
⟦0⟧
<h3>Determinanten</h3>
⟦1⟧
<p>Nützliche Eigenschaften für $n \times n$-Matrizen: $\det(AB) = \det A \det B$, $\det(A^T) = \det A$, $\det(A^{-1}) = \frac{1}{\det A}$, $\det(kA) = k^n\det A$. Cramersche Regel: $x_i = \frac{\det A_i}{\det A}$.</p>
<h3>Eigenwerte und Eigenvektoren</h3>
⟦2⟧
⟦3⟧
<p>Hat $A$ $n$ linear unabhängige Eigenvektoren, so ist sie <b>diagonalisierbar</b>: $A = PDP^{-1}$, mit den Eigenvektoren als Spalten von $P$ und den Eigenwerten auf der Diagonalen von $D$.</p>
⟦4⟧`,
  'q9p1mxjp5t': R`<p><b>Rangsatz (Dimensionsformel):</b> Für eine $m \times n$-Matrix gilt $\text{Rang}(A) + \dim\ker(A) = n$. Eine quadratische Matrix $A$ ist invertierbar $\iff \det A \ne 0 \iff$ ihre Spalten sind linear unabhängig $\iff \text{Rang} = n$.</p>`,
  '12oak6poq42': R`\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)`,
  'zx600ry55i': R`$$A\mathbf{v} = \lambda\mathbf{v},\; \mathbf{v} \ne \mathbf{0} \qquad\Longleftrightarrow\qquad \det(A - \lambda I) = 0$$<p>Für eine $2 \times 2$-Matrix: $\lambda^2 - (\text{Spur}\,A)\lambda + \det A = 0$. Die Summe der Eigenwerte ist die Spur, ihr Produkt die Determinante.</p>`,
  '1khrdp55fj': R`<p>$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$: $\lambda^2 - 7\lambda + 10 = 0$, also $\lambda = 2; 5$. Für $\lambda = 5$: $(A - 5I)\mathbf{v} = 0$ ergibt $\mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.</p>`,
  '21awxvuldiu': R`<p>$\det(2A) = 2^n\det A$, nicht $2\det A$ — jede der $n$ Zeilen wird multipliziert.</p>`,
  '19a9vb1rr2m': R`Entwicklung nach der ersten Zeile: $⟦0⟧(⟦1⟧) - ⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$.`,
  '1j2onaty0gh': R`Bestimme die Eigenwerte von $⟦0⟧$.`,
  'ynzibmbl86': R`Gib beide Eigenwerte durch ein Semikolon getrennt ein.`,
  '23zxsoa3fr0': R`$\lambda^2 - (\text{Spur})\lambda + \det = \lambda^2 ⟦0⟧\lambda ⟦1⟧ = 0$, also $\lambda = ⟦2⟧$ oder $\lambda = ⟦3⟧$. (Probe: Ihre Summe ist die Spur ⟦4⟧, ihr Produkt die Determinante ⟦5⟧.)`,
  '2etvam6ts6i': R`Bestimme die Dimension des Kerns von $⟦0⟧$.`,
  '21ne48l6zig': R`Bestimme den Rang von $⟦0⟧$.`,
  'guqg5s6tj7': R`$\det \ne 0$, also sind alle drei Zeilen linear unabhängig: Rang 3.`,
  '1q1ko1sbkfa': R`Eine Zeile ist Linearkombination der beiden anderen, und diese beiden sind unabhängig: Rang 2.`,
  '2bdvxka58sc': R`Jede Zeile ist ein Vielfaches derselben Zeile: Rang 1.`,
  '1pbgto6ecv4': R` Nach dem Rangsatz ist $\dim\ker = 3 - ⟦0⟧ = ⟦1⟧$.`,
  '167s06hkdpt': R`$A$ ist eine $⟦0⟧ \times ⟦1⟧$-Matrix mit $\det A = ⟦2⟧$. Bestimme $\det(A^{-1})$.`,
  '124zlt4oeit': R`$A$ ist eine $⟦0⟧ \times ⟦1⟧$-Matrix mit $\det A = ⟦2⟧$. Bestimme $⟦3⟧$.`,
  'vtdcjwqxja': R`Jede der ⟦0⟧ Zeilen wird mit ⟦1⟧ multipliziert: $⟦2⟧^{⟦3⟧} \times ⟦4⟧ = ⟦5⟧$.`,
  'd4v2fg20q4': R`Transponieren ändert die Determinante nicht: ⟦0⟧.`,
  '26v5gcnmls7': R`Löse das System und gib $⟦0⟧$ an: $$\begin{cases} ⟦1⟧ \end{cases}$$`,
  '36y25q4ph4': R`Durch Elimination (oder mit der Cramerschen Regel, da $\det A = ⟦0⟧ \ne 0$) ergibt sich $(x; y; z) = ⟦1⟧$, also $⟦2⟧ = ⟦3⟧$.`,
  '1w651quute8': R`Sind die Vektoren $⟦0⟧$ linear unabhängig?`,
  '1nhr23w337j': R`Linear unabhängig`,
  '1ykattdq3py': R`Linear abhängig`,
  '71c2j2dn5w': R`Schreibe sie als Spalten einer Matrix: Ihre Determinante ist ⟦0⟧. ⟦1⟧`,
  'd8cecy9nad': R`Sie ist ungleich null, also sind sie linear unabhängig.`,
  'nwja1imq1g': R`Sie ist null, also sind sie linear abhängig (einer ist Linearkombination der anderen).`,
  '109v3qsafjj': R`$\mathbf{v} = ⟦0⟧$ ist ein Eigenvektor von $A = ⟦1⟧$. Wie lautet der zugehörige Eigenwert?`,
  'spg1kefpa7': R`$A\mathbf{v} = ⟦0⟧ = ⟦1⟧⟦2⟧$, also $\lambda = ⟦3⟧$.`,

  // complex
  'n87wkmbfmz': R`
<p>Die imaginäre Einheit erfüllt $i^2 = -1$. Eine komplexe Zahl ist $z = a + bi$ mit Realteil $\text{Re}(z) = a$ und Imaginärteil $\text{Im}(z) = b$. Die Potenzen von $i$ wiederholen sich alle vier: $i; -1; -i; 1; \ldots$</p>
⟦0⟧
⟦1⟧
<h3>Polarform und eulersche Formel</h3>
⟦2⟧
⟦3⟧
<p>Die $n$-ten Einheitswurzeln sind $e^{2\pi ik/n}$ für $k = 0; 1; \ldots; n - 1$: gleichmäßig verteilte Punkte auf dem Einheitskreis.</p>
⟦4⟧`,
  'rz9c61mn5': R`Multiplizieren`,
  '1lvuh3a6n9s': R`Konjugieren`,
  '73hhnvn9cf': R`$\bar{z} = a - bi$ und $z\bar{z} = a^2 + b^2$`,
  '8ju8zqboy3': R`Dividieren`,
  '23m7410nhvb': R`Zähler und Nenner mit dem Konjugierten des Nenners multiplizieren`,
  '2at5jue99d3': R`Betrag`,
  '26m66idec7i': R`Argument`,
  '18sul084cs9': R`$\arg z = \theta$ mit $\tan\theta = \frac{b}{a}$ (Quadrant beachten)`,
  'cavhj9pbbb': R`$$z = r(\cos\theta + i\sin\theta) = re^{i\theta} \qquad\qquad z^n = r^n e^{in\theta} \;\;\text{(Moivre)}$$`,
  '16lvmowwhri': R`<p>$1 + i = \sqrt{2}e^{i\pi/4}$, also $(1 + i)^8 = (\sqrt{2})^8 e^{2\pi i} = 16$.</p>`,
  '256fv20o5wc': R`<p>Das Argument von $-1 - i$ ist $-\frac{3\pi}{4}$, nicht $\frac{\pi}{4}$: $\arctan\frac{b}{a}$ allein unterscheidet den dritten Quadranten nicht vom ersten.</p>`,
  '10omtzlugr6': R`Vereinfache $(⟦0⟧)(⟦1⟧)$.`,
  'hty9ty1x7v': R`Gib die Antwort in der Form a+bi ein.`,
  '1zsla5l2vrq': R`$(⟦0⟧)(⟦1⟧) + (⟦2⟧)(⟦3⟧)i + (⟦4⟧)(⟦5⟧)i + (⟦6⟧)(⟦7⟧)i^2 = ⟦8⟧$, mit $i^2 = -1$.`,
  '1z0a8n17xaw': R`Bestimme $|⟦0⟧|$.`,
  '7g8mi40aa1': R`Vereinfache $\dfrac{⟦0⟧}{⟦1⟧}$.`,
  '1lmk9l2nr3e': R`Erweitere mit $⟦0⟧$. Der Nenner wird $⟦1⟧$ und der Zähler $⟦2⟧$, das Ergebnis ist also $⟦3⟧$.`,
  '28axbqdj3sw': R`Vereinfache $i^{⟦0⟧}$.`,
  'q7margvq3g': R`Die Potenzen von $i$ wiederholen sich alle 4. $⟦0⟧ = 4 \times ⟦1⟧ + ⟦2⟧$, also $i^{⟦3⟧} = i^{⟦4⟧} = ⟦5⟧$.`,
  '1pjjj2x31s7': R`Bestimme das Hauptargument $\arg z \in (-\pi; \pi]$ von $z = ⟦0⟧$.`,
  '2fusqwp7x7b': R`$z = ⟦0⟧$ liegt im Winkel $⟦1⟧$ zur positiven reellen Achse (Quadrant prüfen), also $\arg z = ⟦2⟧$.`,
  '75mna4515k': R`Schreibe $z = ⟦0⟧$ in Exponentialform $re^{i\theta}$.`,
  'bg7vixv5uf': R`$r = |z| = ⟦0⟧$ und $\theta = \arg z = ⟦1⟧$, also $z = ⟦2⟧e^{i ⟦3⟧}$.`,
  '15suw4uuv8i': R`Berechne $(⟦0⟧)^{⟦1⟧}$ mit dem Satz von Moivre.`,
  '2e4kqt1xydt': R`$⟦0⟧ = \sqrt{2}\,e^{i\theta}$ mit $\theta = ⟦1⟧$. Dann $(\sqrt{2})^{⟦2⟧}e^{i⟦3⟧\theta} = ⟦4⟧e^{i⟦5⟧\theta} = ⟦6⟧$.`,
  '1xd7417ut46': R`Sei $z = ⟦0⟧$. Bestimme $\text{⟦1⟧}(z^2)$.`,

  // distributions
  '28d8604hmp9': R`
<p>Eine <b>Zufallsvariable</b> $X$ ordnet den Ergebnissen Zahlen zu. Für eine diskrete $X$ mit Wahrscheinlichkeiten $p(x)$:</p>
⟦0⟧
⟦1⟧
<h3>Die Normalverteilung</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'gk52muplh1': R`E[X] = \sum x\,p(x) \qquad \text{Var}(X) = E[X^2] - (E[X])^2 \qquad E[aX + b] = aE[X] + b \qquad \text{Var}(aX + b) = a^2\,\text{Var}(X)`,
  '115owsb7jcv': R`Verteilung`,
  'z5bw2hz29r': R`P(X = k) bzw. Dichte`,
  '1runl3m75u8': R`Varianz`,
  '1xs6so1xns8': R`Binomial $B(n, p)$`,
  '1rwt3dxzew1': R`Poisson$(\lambda)$`,
  'n8vzzqt60t': R`Gleichverteilt auf $[a; b]$`,
  '2cdr2b2t24p': R`Exponential$(\lambda)$`,
  'l349ss11hc': R`Normal $N(\mu, \sigma^2)$`,
  '26wsuf9ho5r': R`Glockenkurve`,
  '1bw0zjk7wg1': R`<p>Standardisiere mit $Z = \dfrac{X - \mu}{\sigma}$ und nutze dann die Tabelle der Standardnormalverteilung. Die <b>68–95–99,7-Regel</b>: Etwa 68 %, 95 % und 99,7 % der Werte liegen innerhalb von 1, 2 und 3 Standardabweichungen um den Mittelwert.</p>`,
  '1mn62kz3dqi': R`<p>Körpergrößen $X \sim N(170; 8^2)$. Eine Größe von 186 cm hat $z = \frac{186 - 170}{8} = 2$, also sind nur etwa 2,5 % der Menschen größer.</p>`,
  '20odz9yh9el': R`<p>Die Binomialverteilung braucht eine feste Anzahl unabhängiger Versuche mit gleicher Erfolgswahrscheinlichkeit. Die Poisson-Verteilung zählt Ereignisse in einem Intervall bei konstanter mittlerer Rate.</p>`,
  'hehw668sc4': R`Bestimme $E[X]$ für diese Verteilung.⟦0⟧`,
  'ggtradb99r': R`Eine faire Münze wird ⟦0⟧-mal geworfen. Wie groß ist die Wahrscheinlichkeit für genau ⟦1⟧-mal Kopf?`,
  '1gonhfsfe0e': R`$X \sim B\!\left(⟦0⟧; \frac{1}{3}\right)$. Bestimme $P(X = ⟦1⟧)$.`,
  '2e8zcm46v5k': R`$X \sim B(⟦0⟧; ⟦1⟧)$. Bestimme $\text{Var}(X)$.`,
  '1sv4co448ex': R`$\text{Var}(X) = np(1 - p) = ⟦0⟧(⟦1⟧)(⟦2⟧) = ⟦3⟧$.`,
  'qmg93npnbt': R`$X \sim B(⟦0⟧; ⟦1⟧)$. Bestimme $E[X]$.`,
  '283j9ftzcid': R`$X \sim N(⟦0⟧; ⟦1⟧^2)$. Bestimme den $z$-Wert von $x = ⟦2⟧$.`,
  '1kbz6k640p5': R`$X \sim \text{Poisson}(⟦0⟧)$. Bestimme $P(X = ⟦1⟧)$ auf 4 Nachkommastellen.`,
  '2el5p15nmmp': R`zwischen ⟦0⟧ und ⟦1⟧`,
  'lwhiv9yady': R`über ⟦0⟧`,
  'x696ofvj9v': R`unter ⟦0⟧`,
  '1cdk3p0w1a9': R`Testergebnisse sind normalverteilt mit Mittelwert ⟦0⟧ und Standardabweichung ⟦1⟧. Wie viel Prozent der Ergebnisse liegen nach der 68–95–99,7-Regel ungefähr ⟦2⟧?`,
  '2ciqs8smgdj': R`Rechne in Standardabweichungen vom Mittelwert um und nutze 68 % innerhalb 1σ, 95 % innerhalb 2σ, 99,7 % innerhalb 3σ (die Ränder teilen sich den Rest gleichmäßig): <b>⟦0⟧ %</b>.`,
  '1b8kg565owb': R`$E[X] = ⟦0⟧$ und $\text{Var}(X) = ⟦1⟧$. Bestimme $\text{Var}(⟦2⟧)$.`,
  '21eg07xqby': R`$\text{Var}(aX + b) = a^2\,\text{Var}(X) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ — die Konstante ⟦3⟧ spielt keine Rolle.`,
  'ha18xspr5t': R`$E[X] = ⟦0⟧$ und $\text{Var}(X) = ⟦1⟧$. Bestimme $E[⟦2⟧]$.`,

  // inference
  'oph0fjnqfd': R`
<p>Wir schätzen mit einer Kenngröße der <b>Stichprobe</b> (etwa $\bar{x}$) einen Parameter der <b>Grundgesamtheit</b> (etwa $\mu$). Nach dem <b>zentralen Grenzwertsatz</b> ist der Stichprobenmittelwert für großes $n$ annähernd normalverteilt mit Mittelwert $\mu$ und <b>Standardfehler</b> $\frac{\sigma}{\sqrt{n}}$.</p>
<h3>Konfidenzintervalle</h3>
⟦0⟧
<p>Für eine Fehlermarge $E$ braucht man $n \ge \left(\frac{z^*\sigma}{E}\right)^2$ (aufrunden). Ist $\sigma$ unbekannt, nimm $s$ und die $t$-Verteilung.</p>
<h3>Hypothesentests</h3>
<ol><li>Formuliere $H_0$ (z. B. $\mu = \mu_0$) und $H_1$.</li><li>Berechne eine Teststatistik, z. B. $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$.</li><li>Bestimme den <b>p-Wert</b>: die Wahrscheinlichkeit, unter $H_0$ ein mindestens so extremes Ergebnis zu erhalten.</li><li>Ist $p \le \alpha$, verwirf $H_0$; sonst wird $H_0$ nicht verworfen.</li></ol>
⟦1⟧
<h3>Lineare Regression</h3>
<p>Die Regressionsgerade $\hat{y} = a + bx$ (Methode der kleinsten Quadrate) hat die Steigung $b = r\frac{s_y}{s_x}$ und verläuft durch $(\bar{x}; \bar{y})$, also $a = \bar{y} - b\bar{x}$.</p>
⟦2⟧`,
  'cozbu7bifr': R`\bar{x} \pm z^*\frac{\sigma}{\sqrt{n}} \qquad z^* = 1{,}645 \;(90\,\%);\; 1{,}96 \;(95\,\%);\; 2{,}576 \;(99\,\%)`,
  '7nca7j57l5': R`H₀ wahr`,
  '2e0zey7f13x': R`H₀ falsch`,
  '1nokpmpua28': R`H₀ verwerfen`,
  'qa9cxjojd2': R`Fehler 1. Art (Wahrscheinlichkeit α)`,
  'z1afbgzons': R`Richtig (Trennschärfe)`,
  'tc6mfczzyi': R`H₀ nicht verwerfen`,
  'w131ulu49o': R`Richtig`,
  'e51gkfcb06': R`Fehler 2. Art (Wahrscheinlichkeit β)`,
  '6idiejz1ba': R`<p>„$H_0$ nicht verwerfen“ ist nicht dasselbe wie „$H_0$ annehmen“ — die Daten sprechen nur nicht stark genug dagegen.</p>`,
  'awqxfz9vdv': R`Eine Grundgesamtheit hat $\sigma = ⟦0⟧$. Bestimme den Standardfehler des Mittelwerts für Stichproben vom Umfang ⟦1⟧.`,
  'ugvd79s2wi': R`Eine Stichprobe vom Umfang ⟦0⟧ hat den Mittelwert ⟦1⟧; die Standardabweichung der Grundgesamtheit ist ⟦2⟧. Bestimme die ⟦3⟧ Grenze des ⟦4⟧-%-Konfidenzintervalls für $\mu$ auf 2 Nachkommastellen.`,
  '1n36a0strty': R`Fehlermarge $= ⟦0⟧ \times \frac{⟦1⟧}{\sqrt{⟦2⟧}} = ⟦3⟧$. ⟦4⟧`,
  '2ekc2g43ffk': R`Obere Grenze $= ⟦0⟧ + ⟦1⟧ \approx ⟦2⟧$.`,
  'u2fj3njiv8': R`Untere Grenze $= ⟦0⟧ - ⟦1⟧ \approx ⟦2⟧$.`,
  '1i53ibdizmj': R`Teste $H_0: \mu = ⟦0⟧$ mit $\sigma = ⟦1⟧$. Eine Stichprobe vom Umfang ⟦2⟧ hat $\bar{x} = ⟦3⟧$. Berechne die Teststatistik $z$ auf 2 Nachkommastellen.`,
  'b7sayy3tzp': R`Ein Test liefert den p-Wert ⟦0⟧. Wie lautet die Entscheidung auf dem Signifikanzniveau ⟦1⟧ %?`,
  '1adfzwf3gei': R`nicht verwerfen`,
  '2fh7exkwsd7': R`H0 nicht verwerfen`,
  '1ui411puarn': R`Vergleiche den p-Wert mit $\alpha = ⟦0⟧$: $⟦1⟧ ⟦2⟧ ⟦3⟧$, ⟦4⟧`,
  '19asmns888x': R`also wird $H_0$ <b>verworfen</b>.`,
  '28e9takeetw': R`also wird $H_0$ <b>nicht verworfen</b>.`,
  '3boqwtx8y6': R`Die Regressionsgerade von $y$ auf $x$ hat die Steigung ⟦0⟧ und verläuft durch $(\bar{x}; \bar{y}) = (⟦1⟧; ⟦2⟧)$. Sage $y$ für $x = ⟦3⟧$ voraus.`,
  '1xlncasuj2t': R`Achsenabschnitt $a = \bar{y} - b\bar{x} = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$. Dann $\hat{y} = ⟦4⟧ ⟦5⟧(⟦6⟧) = ⟦7⟧$.`,
  '1juzrcbx7yp': R`Die Regressionsgerade von $y$ auf $x$ hat die Steigung ⟦0⟧, mit $\bar{x} = ⟦1⟧$ und $\bar{y} = ⟦2⟧$. Bestimme den Achsenabschnitt.`,
  'ygsgt4zx8s': R`Die Gerade verläuft durch $(\bar{x}; \bar{y})$: $a = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$.`,
  '1fjn7fhcpwy': R`H₀ wird verworfen, obwohl H₀ in Wahrheit gilt`,
  '2czv0lmmxbv': R`Fehler 1. Art`,
  '1rsaomc3xxj': R`H₀ wird nicht verworfen, obwohl H₀ in Wahrheit falsch ist`,
  '1knmx3avsv8': R`Fehler 2. Art`,
  '7bbk61slol': R`H₀ wird verworfen, und H₀ ist in Wahrheit falsch`,
  '6vojkrxnxd': R`Richtige Entscheidung`,
  '27k0u0dgkx8': R`H₀ wird nicht verworfen, und H₀ gilt in Wahrheit`,
  'j30d9a2wnu': R`Eine unschuldige angeklagte Person wird verurteilt (H₀: unschuldig)`,
  '1r9j0p9otdz': R`Eine schuldige angeklagte Person wird freigesprochen (H₀: unschuldig)`,
  'yce1tww5je': R`Was für ein Ergebnis ist das? <i>⟦0⟧</i>.`,
  'f5q8ah45y5': R`Fehler 1. Art = eine wahre $H_0$ verwerfen (Fehlalarm); Fehler 2. Art = eine falsche $H_0$ nicht erkennen. Hier also: <b>⟦0⟧</b>.`,
  '17su48d7rp0': R`Welcher Stichprobenumfang ist mindestens nötig für ein ⟦0⟧-%-Konfidenzintervall mit einer Fehlermarge von höchstens ⟦1⟧, wenn $\sigma = ⟦2⟧$?`,
  'cysiojo18k': R`$n \ge \left(\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧}\right)^2 \approx ⟦3⟧$, also aufrunden: $n = ⟦4⟧$.`,

  // discrete
  'a1ovpdx0vp': R`
<h3>Zahlentheorie</h3>
<p>$a \equiv b \pmod n$ bedeutet, dass $n$ ein Teiler von $a - b$ ist; $a \bmod n$ ist der Rest in $\{0; 1; \ldots; n - 1\}$. Kongruenzen darf man addieren und multiplizieren, und Potenzen schrittweise reduzieren.</p>
⟦0⟧
⟦1⟧
<p>Das <b>modulare Inverse</b> von $a$ modulo $n$ ist das $x$ mit $ax \equiv 1 \pmod n$; es existiert genau dann, wenn $\gcd(a, n) = 1$.</p>
<h3>Abzählen</h3>
<ul><li>Abbildungen einer $m$-elementigen in eine $n$-elementige Menge: $n^m$; injektive: $n(n-1)\cdots(n-m+1)$.</li><li>Inklusion–Exklusion: $|A \cup B| = |A| + |B| - |A \cap B|$.</li><li><b>Schubfachprinzip:</b> Kommen mehr als $kn$ Objekte in $n$ Schubfächer, so enthält ein Fach mindestens $k + 1$.</li></ul>
<h3>Rekursionen und Graphen</h3>
<p>Eine Rekursion definiert jedes Glied aus früheren, etwa $a_n = 2a_{n-1} + 1$, $a_0 = 1$. In einem Graphen besagt das <b>Handschlaglemma</b> $\sum \deg(v) = 2|E|$; $K_n$ hat $\binom{n}{2}$ Kanten; ein Baum mit $n$ Knoten hat $n - 1$ Kanten; ein zusammenhängender Graph hat genau dann einen Eulerkreis, wenn alle Grade gerade sind.</p>
⟦2⟧`,
  '1vllnifl24g': R`<p><b>Euklidischer Algorithmus:</b> $\gcd(a, b) = \gcd(b, a \bmod b)$, wiederholt, bis der Rest 0 ist.</p><p><b>Kleiner Satz von Fermat:</b> Ist $p$ prim und $p \nmid a$, dann gilt $a^{p-1} \equiv 1 \pmod p$.</p>`,
  '28pp2kgl31t': R`<p>$\gcd(252, 198)$: $252 = 1 \cdot 198 + 54$, $198 = 3 \cdot 54 + 36$, $54 = 1 \cdot 36 + 18$, $36 = 2 \cdot 18$. Der ggT ist also 18.</p><p>$2^{100} \bmod 7$: Da $2^3 = 8 \equiv 1$, ist $2^{100} = (2^3)^{33} \cdot 2 \equiv 2$.</p>`,
  '23tw4c5wfxh': R`<p>Bei Inklusion–Exklusion („durch 3 oder 5 teilbar“) ist die Überschneidung die Teilbarkeit durch das <b>kgV</b>, 15.</p>`,
  '8fw6na2xe1': R`Berechne $⟦0⟧ \bmod ⟦1⟧$.`,
  'uplm3u8bhu': R`$⟦0⟧ = ⟦1⟧ \times ⟦2⟧ + ⟦3⟧$, der Rest ist also ⟦4⟧.`,
  'xlpbyjzaqw': R`Berechne $⟦0⟧^{⟦1⟧} \bmod ⟦2⟧$.`,
  '1kd2o5jees6': R`Nach Fermat gilt $⟦0⟧^{⟦1⟧} \equiv 1 \pmod{⟦2⟧}$. $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ + ⟦6⟧$, also $⟦7⟧^{⟦8⟧} \equiv ⟦9⟧^{⟦10⟧} \equiv ⟦11⟧ \pmod{⟦12⟧}$.`,
  '127b4pzxtz': R`Bestimme $\gcd(⟦0⟧, ⟦1⟧)$ mit dem euklidischen Algorithmus.`,
  '1aqkhdrg8qc': R`$⟦0⟧$. Der letzte von null verschiedene Rest ist <b>⟦1⟧</b>.`,
  '1s721amox67': R`Bestimme das Inverse von ⟦0⟧ modulo ⟦1⟧, also $x$ mit $⟦2⟧x \equiv 1 \pmod{⟦3⟧}$ und $0 \lt x \lt ⟦4⟧$.`,
  '1w7xn0v2je4': R`Probe: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧ = ⟦3⟧ \times ⟦4⟧ + 1$, also $x = ⟦5⟧$.`,
  'x5llfo779v': R`Wie viele Kanten hat der vollständige Graph $K_{⟦0⟧}$?`,
  '1k9fldmleaq': R`Jedes Knotenpaar ist verbunden: $\binom{⟦0⟧}{2} = \frac{⟦1⟧ \times ⟦2⟧}{2} = ⟦3⟧$.`,
  '1gbx4896k6y': R`Ein Baum hat ⟦0⟧ Knoten. Wie viele Kanten hat er?`,
  'g3rd0a2w3f': R`Jeder Baum mit $n$ Knoten hat $n - 1 = ⟦0⟧$ Kanten.`,
  '1b7sza9kgx9': R`Ein Graph hat Knoten mit den Graden ⟦0⟧. Wie viele Kanten hat er?`,
  '2eddhu7y6e4': R`Handschlaglemma: $\sum\deg = ⟦0⟧ = 2|E|$, also $|E| = ⟦1⟧$.`,
  '6xjrxhddis': R`Ein zusammenhängender Graph hat Knoten mit den Graden ⟦0⟧. Wie viele Knoten haben ungeraden Grad?`,
  '5vsb2c69v5': R`Die ungeraden Grade sind ⟦0⟧, es sind also ⟦1⟧. ⟦2⟧ (Die Anzahl der Knoten mit ungeradem Grad ist immer gerade.)`,
  '2gbggujxcvs': R`keine`,
  '105xal8etax': R`Der Graph hat also einen Eulerkreis.`,
  '1z20e1aao3p': R`Der Graph hat also einen Eulerweg, aber keinen Eulerkreis.`,
  '1vy383kqrz8': R`Bei mehr als 2 ungeraden Knoten gibt es keinen Eulerweg.`,
  'by57uvpuwf': R`$a_0 = ⟦0⟧$ und $a_n = ⟦1⟧a_{n-1} ⟦2⟧$ für $n \ge 1$. Bestimme $a_{⟦3⟧}$.`,
  '75ssmud3lg': R`Glied für Glied berechnen: ⟦0⟧.`,
  'go6ohggc8l': R`Wie viele Bitfolgen der Länge ⟦0⟧ enthalten genau ⟦1⟧ Einsen?`,
  '27u4ks23cz9': R`Wähle, welche ⟦0⟧ der ⟦1⟧ Stellen eine Eins enthalten: $\binom{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  'yx3fxah4u8': R`Wie viele Abbildungen gibt es von einer Menge mit ⟦0⟧ Elementen in eine Menge mit ⟦1⟧ Elementen?`,
  '12owpaqzt1c': R`Jedes der ⟦0⟧ Urbilder kann auf jedes der ⟦1⟧ Bilder abgebildet werden: $⟦2⟧^{⟦3⟧} = ⟦4⟧$.`,
  '4o2cs42p15': R`Wie viele injektive Abbildungen gibt es von einer Menge mit ⟦0⟧ Elementen in eine Menge mit ⟦1⟧ Elementen?`,
  'jpinfh5krc': R`Die Bilder müssen verschieden sein: $⟦0⟧ = ⟦1⟧$.`,
  '10skxcum4lz': R`Wie viele ganze Zahlen von 1 bis ⟦0⟧ sind durch ⟦1⟧ oder ⟦2⟧ teilbar?`,
  'nhrb9jig2q': R`$\lfloor ⟦0⟧/⟦1⟧ \rfloor + \lfloor ⟦2⟧/⟦3⟧ \rfloor - \lfloor ⟦4⟧/⟦5⟧ \rfloor = ⟦6⟧ + ⟦7⟧ - ⟦8⟧ = ⟦9⟧$ (⟦10⟧ ist das kgV).`,
  'cgzqt4g6kc': R`Geburtsmonat`,
  '10ye3jsw3n2': R`Wochentag`,
  '1eah1ab17mo': R`Farbe (im Kartenspiel)`,
  '1fddlc7zc0d': R`Wie viele Personen braucht man mindestens, damit garantiert mindestens ⟦0⟧ von ihnen im Merkmal „⟦1⟧“ übereinstimmen?`,
  '27kjdpfw0sg': R`Bei ⟦0⟧ Kategorien könnten $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ Personen es vermeiden; eine mehr erzwingt eine Gruppe von ⟦4⟧: $⟦5⟧$.`,

  // numerical
  '106u35np5bp': R`
<p>Numerische Verfahren nähern Ergebnisse an, für die es keine handliche geschlossene Form gibt. Zwei Fehlerarten sind wichtig: der <b>Verfahrensfehler</b> (Abbruchfehler) und der <b>Rundungsfehler</b> (durch endliche Genauigkeit).</p>
⟦0⟧
<h3>Nullstellensuche</h3>
<ul><li><b>Bisektion:</b> Haben $f(a)$ und $f(b)$ verschiedene Vorzeichen, prüfe die Mitte $m$ und behalte die Hälfte mit dem Vorzeichenwechsel. Langsam, aber sicher: Der Fehler halbiert sich bei jedem Schritt.</li><li><b>Newton-Verfahren:</b> $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$. Sehr schnell nahe einer einfachen Nullstelle (quadratische Konvergenz), kann aber bei schlechtem Startwert oder $f' \approx 0$ versagen.</li></ul>
⟦1⟧
<h3>Numerische Integration</h3>
⟦2⟧
<p>Hier ist $h = \frac{b - a}{n}$. Die Simpsonregel ist für Polynome bis zum Grad 3 exakt.</p>
<h3>Euler-Verfahren</h3>
⟦3⟧
⟦4⟧`,
  '2fbw9jej1dm': R`\text{absoluter Fehler} = |x_{\text{exakt}} - x_{\text{Näherung}}| \qquad \text{relativer Fehler} = \frac{|x_{\text{exakt}} - x_{\text{Näherung}}|}{|x_{\text{exakt}}|}`,
  '1a9noj3sp27': R`<p>$\sqrt{10}$ über $f(x) = x^2 - 10$ mit $x_0 = 3$: $x_1 = 3 - \frac{-1}{6} = 3{,}1667$, $x_2 = 3{,}1623$ — schon auf 4 Nachkommastellen genau.</p>`,
  'vx6qz5zup7': R`\text{Trapezregel: } \frac{h}{2}\big[f_0 + 2f_1 + \cdots + 2f_{n-1} + f_n\big] \qquad \text{Simpson } (n \text{ gerade}): \frac{h}{3}\big[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + f_n\big]`,
  '2fmxu9hfzwl': R`<p>Für $y' = f(x, y)$ mit $y(x_0) = y_0$: $\; y_{n+1} = y_n + h\,f(x_n, y_n)$, $x_{n+1} = x_n + h$. Halbiert man $h$, halbiert sich der Fehler ungefähr.</p>`,
  'fn0bl5sobc': R`<p>Bei der Trapezregel werden nur die <b>inneren</b> Funktionswerte verdoppelt; die beiden Randwerte kommen einmal vor.</p>`,
  '1n5pqkgqwu1': R`Führe einen Schritt des Newton-Verfahrens für $f(x) = x^2 - ⟦0⟧$ mit Startwert $x_0 = ⟦1⟧$ aus. Gib $x_1$ auf 4 Nachkommastellen an.`,
  '1jvkeb9n3o6': R`Führe einen Bisektionsschritt für $f(x) = x^2 - 3$ auf $[1; 2]$ aus. Welches Intervall enthält danach die Nullstelle?`,
  'vksl6we3dc': R`$f(1{,}5) = -0{,}75 \lt 0$ und $f(2) = 1 \gt 0$, der Vorzeichenwechsel liegt also in $[1{,}5; 2]$.`,
  '23lzoh0yq9e': R`Wende die Bisektion auf $f(x) = x^⟦0⟧ - ⟦1⟧$ auf $[⟦2⟧; ⟦3⟧]$ an. Welche Mitte wird im <b>zweiten</b> Schritt berechnet?`,
  '114tbd27u3w': R`Erste Mitte $⟦0⟧$: $f(⟦1⟧) = ⟦2⟧$, die Nullstelle liegt also in $[⟦3⟧; ⟦4⟧]$. Zweite Mitte: $⟦5⟧$.`,
  '1gaoigxt1uo': R`Nähere $\displaystyle\int_0^{⟦1⟧} x^2\,dx$ mit der Trapezregel für $n = ⟦0⟧$ an.`,
  '1pc9rab646n': R`$h = ⟦0⟧$; Funktionswerte ⟦1⟧. $T = \frac{⟦2⟧}{2}\left[⟦3⟧ + ⟦4⟧ + 2(⟦5⟧)\right] = ⟦6⟧$ (exakter Wert ⟦7⟧).`,
  '1rsvekr7t2o': R`Nähere $\displaystyle\int_0^{⟦0⟧} x^4\,dx$ mit der Simpsonregel für $n = 2$ an.`,
  '8vqt4i28qj': R`$h = \frac{⟦0⟧}{2}$: $\frac{h}{3}\left[0 + 4\left(\frac{⟦1⟧}{2}\right)^4 + ⟦2⟧^4\right] = \frac{⟦3⟧}{6} \cdot \frac{5 \cdot ⟦4⟧}{4} = ⟦5⟧$ (exakter Wert $⟦6⟧$).`,
  '1jdhmav4ljk': R`Nähere mit dem Euler-Verfahren und $h = ⟦0⟧$ den Wert $y(⟦1⟧)$ für $y' = ⟦2⟧$, $y(0) = 1$ an. Runde auf 4 Nachkommastellen.`,
  '6utp8finkn': R`$⟦0⟧$ wird durch ⟦1⟧ angenähert. Bestimme den relativen Fehler in Prozent auf 3 Nachkommastellen.`,

  // vector-calculus
  'bh1w03a054': R`
<p>Ein <b>Vektorfeld</b> $\mathbf{F}(x, y, z) = (P, Q, R)$ ordnet jedem Punkt einen Vektor zu — etwa eine Windgeschwindigkeit oder eine Kraft. Mit $\nabla = \left(\frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z}\right)$:</p>
⟦0⟧
<p>Die Divergenz misst die Quellstärke in einem Punkt; die Rotation misst die Wirbelstärke.</p>
<h3>Kurvenintegrale und konservative Felder</h3>
⟦1⟧
⟦2⟧
<h3>Die großen Integralsätze</h3>
⟦3⟧
<p>Eine schöne Folgerung aus dem Satz von Green: Der Flächeninhalt von $D$ ist $\frac{1}{2}\oint_C (x\,dy - y\,dx)$.</p>
⟦4⟧`,
  '1oemuo3mhjj': R`\text{div}\,\mathbf{F} = \nabla\cdot\mathbf{F} = P_x + Q_y + R_z \qquad \text{rot}\,\mathbf{F} = \nabla\times\mathbf{F} = (R_y - Q_z,\; P_z - R_x,\; Q_x - P_y)`,
  'dx5b9h7rwd': R`<p>$\mathbf{F}$ ist <b>konservativ</b> (ein Gradientenfeld), wenn $\mathbf{F} = \nabla\varphi$ für ein Potential $\varphi$. Dann gilt $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r} = \varphi(B) - \varphi(A)$ für jeden Weg von $A$ nach $B$. In der Ebene (einfach zusammenhängendes Gebiet) ist $(P, Q)$ genau dann konservativ, wenn $P_y = Q_x$.</p>`,
  '11uavg1kohe': R`<p>$\mathbf{F} = (2xy, x^2 + 3)$: $P_y = 2x = Q_x$, also konservativ mit $\varphi = x^2y + 3y$. Von $(0; 0)$ nach $(2; 1)$: $\varphi(2; 1) - \varphi(0; 0) = 4 + 3 = 7$.</p>`,
  '1yct8dx5k46': R`Satz`,
  '3albyqcn6s': R`Green`,
  '1osdvqguwrh': R`Stokes`,
  '11x91oqdbb7': R`Divergenz (Gauß)`,
  '28jc8ed48q8': R`<p>Der Satz von Green verlangt, dass $C$ <b>gegen den Uhrzeigersinn</b> durchlaufen wird (Gebiet links); im Uhrzeigersinn ändert sich das Vorzeichen.</p>`,
  'fg37vtw1nz': R`Bestimme $\nabla\cdot\mathbf{F}$ in $⟦0⟧$ für $\mathbf{F} = \left(⟦1⟧,\; ⟦2⟧,\; ⟦3⟧\right)$.`,
  'i6u559ylzz': R`$P_x = ⟦0⟧$, $Q_y = ⟦1⟧$, $R_z = ⟦2⟧$. In $⟦3⟧$: $⟦4⟧ ⟦5⟧ ⟦6⟧ = ⟦7⟧$.`,
  'dvzsgd4pt9': R`Bestimme für $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$ den Wert $Q_x - P_y$ (die skalare Rotation) in $⟦2⟧$.`,
  '1f7xg7qakjk': R`$Q_x = ⟦0⟧$ und $P_y = ⟦1⟧$, also $Q_x - P_y = ⟦2⟧$; das ist ⟦3⟧ in $⟦4⟧$.`,
  '6gosl713kw': R`Berechne $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r}$, wobei $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$ und $C$ ein beliebiger Weg von $⟦2⟧$ nach $⟦3⟧$ ist.`,
  '1ch21kaf5wm': R`$\mathbf{F} = \nabla\varphi$ mit $\varphi = ⟦0⟧$, das Integral ist also wegunabhängig: $\varphi(B) - \varphi(A) = ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  '1czrg3saejj': R`Berechne mit dem Satz von Green $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$, wobei $C$ der Rand des Rechtecks $[0; ⟦2⟧] \times [0; ⟦3⟧]$ ist, gegen den Uhrzeigersinn durchlaufen.`,
  'otc4kapbek': R`$Q_x - P_y = ⟦0⟧ - (-⟦1⟧) = ⟦2⟧$, also ist das Integral $⟦3⟧ \times \text{Fläche} = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  '1mzbbq34ezd': R`Berechne mit dem Satz von Green $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$, wobei $C$ der Kreis $x^2 + y^2 = ⟦2⟧$ ist, gegen den Uhrzeigersinn durchlaufen.`,
  '2fijtuqaqq1': R`$Q_x - P_y = ⟦0⟧$, also ist das Integral $⟦1⟧ \times \pi(⟦2⟧)^2 = ⟦3⟧$.`,
  '2csh30v58t4': R`Ist $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$ konservativ?`,
  '1ma95r0zub6': R`Konservativ`,
  'bn62hz6wu8': R`Nicht konservativ`,
  '1s854ovcwco': R`nicht konservativ`,
  '15asqrx4hnu': R`$P_y = ⟦0⟧$ und $Q_x = ⟦1⟧$. ⟦2⟧`,
  'r7areoyr0a': R`Sie sind gleich, also ist F konservativ (auf der ganzen Ebene).`,
  '6dlb2jbxf0': R`Sie sind verschieden, also ist F nicht konservativ.`,
  '1ueomkx63n5': R`Bestimme ein Potential für $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$.`,
  '4awle3me9d': R`Integriere $P$ nach $x$: $\varphi = ⟦0⟧ + g(y)$. Dann ergibt $\varphi_y = ⟦1⟧ + g'(y) = ⟦2⟧$, dass $g = ⟦3⟧$.`,

  // laplace
  'f6f4kfx30i': R`
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<p>Für Rücktransformationen braucht man meist zuerst eine Partialbruchzerlegung und dann einen Abgleich mit der Tabelle.</p>
⟦4⟧`,
  '1kbz0ay16v9': R`\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt`,
  '1id74v8hrdj': R`<p><b>Linearität:</b> $\mathcal{L}\{af + bg\} = aF + bG$. <b>Ableitungen:</b> $\mathcal{L}\{y'\} = sY - y(0)$ und $\mathcal{L}\{y''\} = s^2Y - sy(0) - y'(0)$ — so werden Differentialgleichungen zu Algebra.</p>`,
  'ie964pskzz': R`<p>Löse $y'' + 4y = 0$, $y(0) = 3$, $y'(0) = 2$.</p><p>$s^2Y - 3s - 2 + 4Y = 0$, also $Y = \dfrac{3s + 2}{s^2 + 4} = 3\dfrac{s}{s^2 + 4} + \dfrac{2}{s^2 + 4}$. Rücktransformation: $y = 3\cos 2t + \sin 2t$.</p>`,
  'cgwsp3i8af': R`<p>$\mathcal{L}\{\sin bt\}$ hat $b$ im Zähler; $\mathcal{L}\{\cos bt\}$ hat $s$ im Zähler. Beides zu verwechseln ist der häufigste Fehler.</p>`,
  't6bpsx84ob': R`Bestimme $\mathcal{L}\{⟦0⟧\}$.`,
  '2sqpcztdp7': R`Linearität mit $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ und $\mathcal{L}\{e^{ct}\} = \frac{1}{s - c}$: $\frac{⟦0⟧ \cdot ⟦1⟧!}{s^{⟦2⟧}} + \frac{⟦3⟧}{⟦4⟧}$.`,
  '1erb7erw9za': R`Bestimme $\mathcal{L}\{⟦0⟧⟦1⟧ ⟦2⟧t\}$.`,
  'ujzn9ioggu': R`$\mathcal{L}\{\sin bt\} = \frac{b}{s^2 + b^2}$, die Antwort ist also $\frac{⟦0⟧ \cdot ⟦1⟧}{s^2 + ⟦2⟧} = \frac{⟦3⟧}{s^2 + ⟦4⟧}$.`,
  '2dljwnla25z': R`$\mathcal{L}\{\cos bt\} = \frac{s}{s^2 + b^2}$, die Antwort ist also $\frac{⟦0⟧s}{s^2 + ⟦1⟧}$.`,
  'napbzc1h43': R`Bestimme $\mathcal{L}^{-1}\left\{\dfrac{⟦0⟧}{⟦1⟧} + \dfrac{⟦2⟧s}{s^2 + ⟦3⟧}\right\}$.`,
  '6d49fl6z14': R`$\frac{1}{s - c} \leftrightarrow e^{ct}$ und $\frac{s}{s^2 + d^2} \leftrightarrow \cos dt$: Das Ergebnis ist ⟦0⟧.`,
  'hw06puz2z5': R`Bestimme $\mathcal{L}\{⟦0⟧\,⟦1⟧ ⟦2⟧t\}$.`,
  'zs0uacvdu8': R`Erster Verschiebungssatz: $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$. Mit $F(s) = ⟦0⟧$ ersetze $s$ durch $⟦1⟧$.`,
  '1i1mf4ew2a': R`Sei $F(s) = \mathcal{L}\{t^{⟦0⟧}\}$. Bestimme $F(⟦1⟧)$.`,
  '180y0883p6z': R`$F(s) = \frac{⟦0⟧!}{s^{⟦1⟧}}$, also $F(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '11s9xvqwvw4': R`Sei $F(s) = \mathcal{L}\{⟦0⟧\}$. Bestimme $F(⟦1⟧)$.`,
  '18wjdkl7beq': R`$F(s) = \frac{1}{s - (⟦0⟧)}$, also $F(⟦1⟧) = \frac{1}{⟦2⟧}$.`,
  '9v69wy5cnz': R`Löse $y'' + ⟦0⟧y = 0$ mit $y(0) = ⟦1⟧$, $y'(0) = ⟦2⟧$ mithilfe der Laplace-Transformation.`,
  '24mrp3u7eep': R`$s^2Y - ⟦0⟧s - ⟦1⟧ + ⟦2⟧Y = 0$, also $Y = ⟦3⟧$. Zerlege in $⟦4⟧\cdot\frac{s}{s^2 + ⟦5⟧} + \frac{⟦6⟧}{⟦7⟧}\cdot\frac{⟦8⟧}{s^2 + ⟦9⟧}$ und transformiere zurück: ⟦10⟧.`,
});
