/* Deutsch — Oberstufe (Kombinatorik → Logik) */
addT('de', {
  // combinatorics
  '205beb6gfix': R`
⟦0⟧
<h3>Permutationen/Variationen: Die Reihenfolge zählt</h3>
⟦1⟧
<p>Erster, zweiter und dritter Preis unter 10 Personen: $^{10}P_3 = 10 \times 9 \times 8 = 720$.</p>
<ul><li>Anordnungen mit Wiederholung: $\frac{n!}{p!\,q!\cdots}$. „BANANA“ hat $\frac{6!}{3!\,2!} = 60$ Anordnungen.</li><li>Um einen runden Tisch: $(n - 1)!$ (Drehungen gelten als gleich).</li></ul>
<h3>Kombinationen: Die Reihenfolge zählt nicht</h3>
⟦2⟧
<p>Ein Ausschuss aus 3 von 10 Personen: $\binom{10}{3} = 120$. Ein Ausschuss aus 2 Männern (von 5) und 3 Frauen (von 6): $\binom{5}{2}\binom{6}{3} = 10 \times 20 = 200$.</p>
<h3>Binomischer Lehrsatz</h3>
⟦3⟧
<p>Der Koeffizient von $x^2$ in $(x + 3)^5$ ist $\binom{5}{2}3^{3} = 270$.</p>
⟦4⟧`,
  '1v1ul4mcyis': R`<p><b>Produktregel:</b> Gibt es für eine Wahl $m$ Möglichkeiten und für eine zweite $n$ Möglichkeiten, dann gibt es zusammen $m \times n$ Möglichkeiten.</p>`,
  'zol45txfa7': R`^nP_r = \frac{n!}{(n - r)!} \qquad n! = n \times (n-1) \times \cdots \times 1, \quad 0! = 1`,
  '1mk1wwf7o0g': R`^nC_r = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}`,
  '44tf1m2pka': R`<p>Frage dich: „Ergibt das Vertauschen zweier ausgewählter Elemente etwas anderes?“ Wenn ja, sind es Anordnungen (Reihenfolge zählt); wenn nein, Kombinationen.</p>`,
  'asaw2vy5ho': R`Auf wie viele Arten kann man die Preise (⟦0⟧) unter ⟦1⟧ Personen vergeben?`,
  '1qec64m00zt': R`erster, zweiter und dritter`,
  '1yxzw7y67ed': R`erster und zweiter`,
  '1lyu4ddmyjw': R`Die Reihenfolge zählt: $^{⟦0⟧}P_{⟦1⟧} = ⟦2⟧ = ⟦3⟧$.`,
  'mt1d3k54sw': R`Auf wie viele Arten kann man einen Ausschuss aus ⟦0⟧ von ⟦1⟧ Personen wählen?`,
  'jcb5dbxzw7': R`Die Reihenfolge zählt nicht: $\binom{⟦0⟧}{⟦1⟧} = \frac{⟦2⟧!}{⟦3⟧!\,⟦4⟧!} = ⟦5⟧$.`,
  '1f3hbyul4kh': R`Aus ⟦2⟧ Männern und ⟦3⟧ Frauen wird ein Ausschuss aus ⟦0⟧ Männern und ⟦1⟧ Frauen gewählt. Wie viele verschiedene Ausschüsse sind möglich?`,
  '219eq0t6hby': R`Wie viele verschiedene Anordnungen der Buchstaben des Wortes <b>⟦0⟧</b> gibt es?`,
  'hkyvcodvcm': R`⟦0⟧ Buchstaben mit Wiederholungen ⟦1⟧: $\frac{⟦2⟧!}{⟦3⟧} = ⟦4⟧$.`,
  'qqcdrtkh5v': R`Auf wie viele Arten können ⟦0⟧ Personen an einem runden Tisch sitzen (Drehungen gelten als gleich)?`,
  '1n6howxe7gj': R`Lege den Platz einer Person fest, um Drehungen auszuschließen, und ordne die übrigen an: $(⟦0⟧ - 1)! = ⟦1⟧$.`,
  '1hwymhgsxow': R`Bestimme den Koeffizienten von $x^{⟦0⟧}$ in der Entwicklung von $(x + ⟦1⟧)^{⟦2⟧}$.`,
  '22kaf86ykzl': R`Der Term mit $x^{⟦0⟧}$ ist $\binom{⟦1⟧}{⟦2⟧}x^{⟦3⟧}\cdot ⟦4⟧^{⟦5⟧}$, also ist der Koeffizient $⟦6⟧ \times ⟦7⟧ = ⟦8⟧$.`,
  '1zya3uq0ode': R`Bestimme den Koeffizienten von $x^{⟦0⟧}$ in der Entwicklung von $(⟦1⟧x + 1)^{⟦2⟧}$.`,
  'po66a6fw7b': R`Der Term mit $x^{⟦0⟧}$ ist $\binom{⟦1⟧}{⟦2⟧}(⟦3⟧x)^{⟦4⟧}$, also ist der Koeffizient $⟦5⟧ \times ⟦6⟧ = ⟦7⟧$.`,
  'yh0td3xino': R`Du hast ⟦0⟧ Hemden, ⟦1⟧ Hosen und ⟦2⟧ Paar Schuhe. Wie viele verschiedene Outfits (je ein Teil) kannst du zusammenstellen?`,
  'ruo6vpaqqc': R`Produktregel: $⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '24djh3i5509': R`Wie viele ⟦0⟧-stellige PIN-Codes lassen sich aus den Ziffern 0–9 bilden, ⟦1⟧?`,
  '1djueshnkes': R`wenn sich Ziffern wiederholen dürfen`,
  'jadsq7o4xb': R`wenn keine Ziffer doppelt vorkommen darf`,
  '22ey7x4a0ix': R`Jede der ⟦0⟧ Stellen hat 10 Möglichkeiten: $10^{⟦1⟧} = ⟦2⟧$.`,
  'g50ag8cs5t': R`$10 \times 9 \times \cdots$ (⟦0⟧ Faktoren) $= ⟦1⟧$.`,

  // probability-sh
  '1uh8iajnkq0': R`
⟦0⟧
<h3>Mit und ohne Zurücklegen</h3>
⟦1⟧
<p>Baumdiagramme ordnen das: entlang der Äste multiplizieren (Pfadregel), über die Äste addieren (Summenregel).</p>
<h3>„Mindestens einmal“</h3>
<p>Nutze das Gegenereignis: $P(\text{mindestens eine Sechs in 3 Würfen}) = 1 - \left(\frac{5}{6}\right)^3 = \frac{91}{216}$.</p>
<h3>Satz von Bayes</h3>
⟦2⟧
⟦3⟧`,
  '2e5fwx8zs1w': R`Formel`,
  '29i7n2pf82k': R`Gegenereignis`,
  '1q1cgu220ce': R`Unvereinbar`,
  'xux9y4rrwd': R`$P(A \cap B) = 0$, also $P(A \cup B) = P(A) + P(B)$`,
  'rl5n9i6yyd': R`Unabhängig`,
  '1oou6k826kr': R`Bedingt`,
  '1qgmh66fhna': R`<p>In einem Beutel sind 5 rote und 3 blaue Kugeln. Es werden zwei <b>ohne</b> Zurücklegen gezogen. $P(\text{beide rot}) = \frac{5}{8} \times \frac{4}{7} = \frac{5}{14}$. Mit Zurücklegen wäre es $\frac{5}{8} \times \frac{5}{8} = \frac{25}{64}$.</p>`,
  '6418q9b2s4': R`$$P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B \mid A)P(A) + P(B \mid A')P(A')}$$<p>Er „kehrt“ eine bedingte Wahrscheinlichkeit um — zum Beispiel von $P(\text{positiver Test} \mid \text{krank})$ zu $P(\text{krank} \mid \text{positiver Test})$.</p>`,
  '1zp2m1asa8t': R`<p>$P(A \mid B)$ und $P(B \mid A)$ sind meist verschieden. Ein Test kann zu 99 % genau sein, und trotzdem ist ein positives Ergebnis bei einer seltenen Krankheit eher ein Fehlalarm.</p>`,
  '5fmcyqy5g8': R`In einem Beutel sind ⟦0⟧ rote und ⟦1⟧ blaue Kugeln. Zwei Kugeln werden ohne Zurücklegen gezogen. Wie groß ist die Wahrscheinlichkeit, dass beide ⟦2⟧ sind?`,
  '16uk5urbde9': R`$P(A) = ⟦0⟧$, $P(B) = ⟦1⟧$ und $P(A \cap B) = ⟦2⟧$. Bestimme $P(A \cup B)$.`,
  '2az4z9znymk': R`Die Ereignisse $A$ und $B$ sind unabhängig mit $P(A) = ⟦0⟧$ und $P(B) = ⟦1⟧$. Bestimme $P(A \cap B)$.`,
  '1ohoi8ye65': R`Unabhängig: $P(A \cap B) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,
  'ymjaeaaedm': R`Die Ereignisse $A$ und $B$ sind unabhängig mit $P(A) = ⟦0⟧$ und $P(B) = ⟦1⟧$. Bestimme die Wahrscheinlichkeit, dass mindestens eines davon eintritt.`,
  'y6o9k7peax': R`$1 - P(\text{keines}) = 1 - (⟦0⟧)(⟦1⟧) = ⟦2⟧$.`,
  '2ct3qu61tjb': R`Jungen`,
  '2402etzr9nx': R`Mädchen`,
  '18ehauvt7sj': R`Treibt Sport`,
  '1wnwpnaqcse': R`Kein Sport`,
  'hlkdm5jkod': R`Klasse 10`,
  '25bc5gb05vn': R`Klasse 11`,
  '1i4vzjjdcmk': R`Geht zu Fuß zur Schule`,
  '26ih1igl5gl': R`Fährt mit dem Bus`,
  '2bybvgum1tw': R`Erwachsene`,
  '1lglnmdikqt': R`Kinder`,
  'xfv76cldjt': R`Mag Kaffee`,
  'yxuw13xcv3': R`Mag keinen`,
  '1mojcap1eui': R`Eine Umfrage ergab diese Ergebnisse.⟦0⟧Eine Person wird zufällig ausgewählt. Sie gehört zur Gruppe „⟦1⟧“. Wie groß ist die Wahrscheinlichkeit, dass sie zu „⟦2⟧“ gehört?`,
  '1461hv2wfqt': R`Beschränke dich auf die ⟦0⟧ Personen in „⟦1⟧“: $P = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  '12180tm9why': R`Eine Umfrage ergab diese Ergebnisse.⟦0⟧Eine Person wird zufällig ausgewählt. Sie gehört zu „⟦1⟧“. Wie groß ist die Wahrscheinlichkeit, dass sie zur Gruppe „⟦2⟧“ gehört?`,
  'eppqyrg22a': R`Ein fairer Würfel wird ⟦0⟧-mal geworfen. Wie groß ist die Wahrscheinlichkeit für mindestens eine Sechs?`,
  'wzrge9rclz': R`$1 - P(\text{keine Sechs}) = 1 - \left(\frac{5}{6}\right)^{⟦0⟧} = 1 - \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$.`,
  '1sg12en11ty': R`Eine Krankheit betrifft ⟦0⟧ % der Menschen. Ein Test erkennt sie bei ⟦1⟧ % der Erkrankten, fällt aber auch bei ⟦2⟧ % der Gesunden positiv aus. Wie groß ist die Wahrscheinlichkeit, dass eine positiv getestete Person krank ist? Runde auf 3 Nachkommastellen.`,
  '1n6kg7z10yy': R`In einem Beutel sind ⟦0⟧ rote und ⟦1⟧ blaue Spielsteine. Ein Stein wird gezogen, zurückgelegt, und ein zweiter wird gezogen. Wie groß ist die Wahrscheinlichkeit für erst Rot, dann Blau?`,
  '29cd8gay3w4': R`Mit Zurücklegen sind die Züge unabhängig: $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,

  // statistics-sh
  '1xab92vueba': R`
<h3>Quartile und Boxplots</h3>
<p>Sortiere die Daten. Der Median $Q_2$ teilt sie in zwei Hälften; $Q_1$ ist der Median der unteren Hälfte, $Q_3$ der der oberen Hälfte (hier lassen wir den Median bei ungeradem $n$ aus beiden Hälften weg). Der <b>Interquartilsabstand</b> $\text{IQA} = Q_3 - Q_1$ misst die Streuung der mittleren 50 %.</p>
⟦0⟧
<h3>Varianz und Standardabweichung</h3>
⟦1⟧
⟦2⟧
<h3>Klassierte Daten</h3>
<p>Schätze den Mittelwert mit den Klassenmitten: $\bar{x} \approx \frac{\sum f m}{\sum f}$.</p>
<h3>Daten transformieren</h3>
⟦3⟧
⟦4⟧`,
  'l167vch4m7': R`<p>Eine übliche Regel für Ausreißer: Werte unter $Q_1 - 1{,}5\,\text{IQA}$ oder über $Q_3 + 1{,}5\,\text{IQA}$.</p>`,
  '1i22g7xb1dd': R`\sigma^2 = \frac{\sum (x - \mu)^2}{n} \qquad \sigma = \sqrt{\sigma^2} \qquad\qquad s^2 = \frac{\sum (x - \bar{x})^2}{n - 1} \text{ (Stichprobe)}`,
  '1c6crwakkdh': R`<p>Daten 2; 4; 4; 4; 5; 5; 7; 9: Mittelwert 5, quadrierte Abweichungen 9; 1; 1; 1; 0; 0; 4; 16 (Summe 32). Varianz der Grundgesamtheit $= \frac{32}{8} = 4$ und $\sigma = 2$.</p>`,
  'etseh8nv9i': R`Wird jeder Wert zu`,
  'tocb6e1sav': R`Mittelwert wird zu`,
  '1ng2ylp8qsd': R`Standardabweichung wird zu`,
  's70utdhfyg': R`$\sigma$ (unverändert)`,
  '1ixl32zcrbx': R`<p>Das Addieren einer Konstanten verschiebt die Daten, streut sie aber nicht — die Standardabweichung bleibt gleich.</p>`,
  '1os4b58x5gr': R`Bestimme die <b>Stichprobenvarianz</b> von: ⟦0⟧.`,
  '5koevyyrqx': R`Bestimme die <b>Varianz der Grundgesamtheit</b> von: ⟦0⟧.`,
  '2gl7bcglff0': R`Mittelwert $= ⟦0⟧$. Quadrierte Abweichungen: ⟦1⟧ (Summe ⟦2⟧). Teile durch ⟦3⟧: $⟦4⟧$.`,
  'zh9si0i2s': R`Bestimme die Standardabweichung (Grundgesamtheit) von: ⟦0⟧. Runde auf 2 Nachkommastellen.`,
  'iohahpasm4': R`Mittelwert $= ⟦0⟧$; $\sigma^2 = \frac{⟦1⟧}{5} = ⟦2⟧$, also $\sigma = \sqrt{⟦3⟧} \approx ⟦4⟧$.`,
  'box0w6rodc': R`Bestimme den Interquartilsabstand von: ⟦0⟧. (Lass den Median weg, wenn du die Daten in Hälften teilst.)`,
  'dvfyzp44sk': R`Sortiert: ⟦0⟧. Die untere Hälfte ⟦1⟧ ergibt $Q_1 = ⟦2⟧$; die obere Hälfte ⟦3⟧ ergibt $Q_3 = ⟦4⟧$. $\text{IQA} = ⟦5⟧ - ⟦6⟧ = ⟦7⟧$.`,
  '25jr4jzamls': R`Ein Datensatz hat den Mittelwert ⟦0⟧ und die Standardabweichung ⟦1⟧. Jeder Wert wird durch $y = ⟦2⟧x ⟦3⟧$ transformiert. Wie groß ist die neue Standardabweichung?`,
  '1h7x4xfpmhw': R`Das Addieren von ⟦0⟧ ändert die Streuung nicht; die Multiplikation mit ⟦1⟧ skaliert sie mit $|⟦2⟧|$: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '158l5v4dkra': R`Ein Datensatz hat den Mittelwert ⟦0⟧ und die Standardabweichung ⟦1⟧. Jeder Wert wird durch $y = ⟦2⟧x ⟦3⟧$ transformiert. Wie groß ist der neue Mittelwert?`,
  '21c6bmoi3b4': R`Der Mittelwert macht die Transformation mit: $⟦0⟧(⟦1⟧) ⟦2⟧ = ⟦3⟧$.`,
  'th9c52kib0': R`Schätze den Mittelwert aus dieser klassierten Häufigkeitstabelle (verwende die Klassenmitten). Runde auf 2 Nachkommastellen.⟦0⟧`,
  '1h8qh0j4anc': R`Klasse`,
  '1yeuaowmmsc': R`Klassenmitten ⟦0⟧; $\sum f = ⟦1⟧$, $\sum fm = ⟦2⟧$. Mittelwert $\approx \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  '1kja7bg5lcu': R`Ein Datensatz hat $Q_1 = ⟦0⟧$ und $Q_3 = ⟦1⟧$. Wie liegt nach der $1{,}5 \times \text{IQA}$-Regel die ⟦2⟧ Grenze für Ausreißer?`,
  '3zu0ol0nfw': R`obere`,
  '9nl2sip6fg': R`untere`,
  '1u7a09okm0e': R`$\text{IQA} = ⟦0⟧$ und $1{,}5 \times ⟦1⟧ = ⟦2⟧$. ⟦3⟧`,
  '191ugb8bucx': R`Obere Grenze $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '111p9ug7ykx': R`Untere Grenze $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // conics
  '12p1gvv8rrs': R`
⟦0⟧
<h3>Kreisgleichung</h3>
⟦1⟧
<p>Ausmultipliziert ergibt sich die <b>allgemeine Form</b> $x^2 + y^2 + Dx + Ey + F = 0$ mit dem Mittelpunkt $\left(-\frac{D}{2}; -\frac{E}{2}\right)$ und dem Radius $r = \sqrt{\frac{D^2}{4} + \frac{E^2}{4} - F}$.</p>
⟦2⟧
<h3>Lage eines Punktes</h3>
<p>Setze den Punkt in $(x - a)^2 + (y - b)^2$ ein und vergleiche mit $r^2$: kleiner → innerhalb, gleich → auf dem Kreis, größer → außerhalb.</p>
<h3>Tangenten</h3>
<p>Eine Tangente steht im Berührpunkt senkrecht auf dem Radius. Beim Kreis $x^2 + y^2 = r^2$ im Punkt $(x_1; y_1)$ hat der Radius die Steigung $\frac{y_1}{x_1}$, also hat die Tangente die Steigung $-\frac{x_1}{y_1}$.</p>
<h3>Parabeln</h3>
<p>$y^2 = 4px$ hat den Brennpunkt $(p; 0)$ und die Leitgerade $x = -p$; $x^2 = 4py$ hat den Brennpunkt $(0; p)$ und die Leitgerade $y = -p$. Jeder Punkt einer Parabel ist vom Brennpunkt genauso weit entfernt wie von der Leitgeraden.</p>
⟦3⟧`,
  'd8g3n0gso0': R`\text{Mittelpunkt } \left(\frac{x_1 + x_2}{2}; \frac{y_1 + y_2}{2}\right) \qquad \text{Abstand } \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`,
  'yeziymovo4': R`$$(x - a)^2 + (y - b)^2 = r^2 \qquad \text{Mittelpunkt } (a; b), \text{ Radius } r$$`,
  '16n3xjnynm7': R`<p>$x^2 + y^2 - 6x + 4y - 12 = 0$: quadratisch ergänzen, $(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$. Mittelpunkt $(3; -2)$, Radius 5.</p>`,
  '11ib4pk61jv': R`<p>Bei $(x + 3)^2 + (y - 1)^2 = 16$ ist der Mittelpunkt $(-3; 1)$ — die Vorzeichen drehen sich um — und der Radius ist 4, nicht 16.</p>`,
  'a19ymany96': R`Bestimme den Mittelpunkt der Strecke zwischen $⟦0⟧$ und $⟦1⟧$.`,
  'l7s72risy9': R`Mittle die Koordinaten: $\left(\frac{⟦0⟧ + ⟦1⟧}{2}; \frac{⟦2⟧ + ⟦3⟧}{2}\right) = ⟦4⟧$.`,
  '1mu3r9x32jw': R`Bestimme den Radius des Kreises $⟦0⟧ = 0$.`,
  '1bhxlcedykj': R`Quadratisch ergänzen: $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧ + ⟦3⟧ ⟦4⟧ = ⟦5⟧$, also $r = ⟦6⟧$.`,
  'd11etx15kp': R`Bestimme den Mittelpunkt des Kreises $⟦0⟧ = 0$.`,
  '15nydo8wzsx': R`Der Mittelpunkt ist $\left(-\frac{D}{2}; -\frac{E}{2}\right) = \left(-\frac{⟦0⟧}{2}; -\frac{⟦1⟧}{2}\right) = ⟦2⟧$.`,
  '10fdmgbsvjs': R`Welche Gleichung hat der Kreis mit dem Mittelpunkt $⟦0⟧$ und dem Radius ⟦1⟧?`,
  'j31butbqt0': R`In $(x - a)^2 + (y - b)^2 = r^2$ einsetzen: $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧$.`,
  'qntj72wic0': R`Innerhalb des Kreises`,
  '1z2fjcjol1w': R`innerhalb`,
  '1h4trl2qo1h': R`Auf dem Kreis`,
  '1sg9ogxwlev': R`auf`,
  '8uau8fsxbq': R`Außerhalb des Kreises`,
  '6gv2pbcp7q': R`außerhalb`,
  '24luyo2ftju': R`Liegt der Punkt $⟦0⟧$ innerhalb, auf oder außerhalb des Kreises $(x ⟦1⟧)^2 + (y ⟦2⟧)^2 = ⟦3⟧$?`,
  '28keqi93flp': R`$⟦0⟧$, das ist gleich $r^2 = ⟦1⟧$: Der Punkt liegt <b>auf</b> dem Kreis.`,
  '1hj2pbrwkr7': R`$⟦0⟧$, das ist kleiner als $r^2 = ⟦1⟧$: Der Punkt liegt <b>innerhalb</b> des Kreises.`,
  'kv7senj1fr': R`$⟦0⟧$, das ist größer als $r^2 = ⟦1⟧$: Der Punkt liegt <b>außerhalb</b> des Kreises.`,
  '1hxz2qew8oz': R`Bestimme den Brennpunkt der Parabel $⟦0⟧$.`,
  '22fls2lezk5': R`Vergleiche mit ⟦0⟧: $4p = ⟦1⟧$, also $p = ⟦2⟧$, und der Brennpunkt ist $⟦3⟧$.`,
  'ez3m02hgj1': R`Bestimme die Steigung der Tangente an $x^2 + y^2 = ⟦0⟧$ im Punkt $⟦1⟧$.`,
  '1huwumypuyf': R`Der Radius zu $⟦0⟧$ hat die Steigung $\frac{⟦1⟧}{⟦2⟧}$. Die Tangente steht senkrecht darauf: Steigung $= -\frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,

  // linear-programming
  '23l7ef2fdyh': R`
<p><b>Lineare Optimierung</b> sucht den besten (größten oder kleinsten) Wert einer linearen <b>Zielfunktion</b>, etwa des Gewinns $z = 30x + 20y$, unter linearen <b>Nebenbedingungen</b> wie $x + y \le 40$.</p>
<ol><li>Schreibe die Nebenbedingungen als Ungleichungen (mit $x \ge 0$, $y \ge 0$).</li><li>Zeichne jede Randgerade und markiere den Bereich, der alle Bedingungen erfüllt — den <b>zulässigen Bereich</b>.</li><li>Bestimme die Eckpunkte, indem du Paare von Randgleichungen löst.</li><li>Werte die Zielfunktion in jedem Eckpunkt aus.</li></ol>
⟦0⟧
⟦1⟧
<p>Bei Minimierungsaufgaben mit „≥“-Bedingungen ist der Bereich oft unbeschränkt; bei positiven Kosten liegt das Minimum trotzdem in einer Ecke.</p>
⟦2⟧`,
  'hs1573xprv': R`<p><b>Eckpunktsatz:</b> Wenn ein Optimum existiert, wird es in einer Ecke des zulässigen Bereichs angenommen.</p>`,
  '1g8qhbmqb9w': R`<p>Maximiere $z = 3x + 2y$ unter $x + y \le 8$, $2x + y \le 12$, $x, y \ge 0$.</p><p>Ecken: $(0; 0)$, $(6; 0)$, $(4; 4)$ [Schnitt von $x + y = 8$ und $2x + y = 12$], $(0; 8)$.</p><p>Werte von $z$: 0; 18; 20; 16. Maximum $z = 20$ in $(4; 4)$.</p>`,
  '11p3z90h4pd': R`<p>Prüfe, ob jede Ecke <b>alle</b> Bedingungen erfüllt — ein Schnittpunkt zweier Randgeraden kann außerhalb des Bereichs liegen.</p>`,
  '22hgo1z3v51': R`Maximiere $z = ⟦0⟧ + ⟦1⟧$ unter ⟦2⟧, $x \ge 0$, $y \ge 0$. Wie groß ist der größte Wert von $z$?`,
  'thttp4dv20': R`Ecken und Werte von $z$: ⟦0⟧. Das Maximum ist <b>⟦1⟧</b>.`,
  '2g9b1szo820': R`Minimiere $z = ⟦0⟧ + ⟦1⟧$ unter $x + y \ge ⟦2⟧$, $x + 2y \ge ⟦3⟧$, $x \ge 0$, $y \ge 0$. Wie groß ist der kleinste Wert von $z$?`,
  '72m6dlh1yr': R`Der zulässige Bereich ist unbeschränkt, mit den Ecken ⟦0⟧. Da die Kosten positiv sind, ist das Minimum <b>⟦1⟧</b>.`,
  '4eos6o7rio': R`Welcher Punkt liegt im zulässigen Bereich, der durch ⟦0⟧, $x \ge 0$, $y \ge 0$ festgelegt ist?`,
  '1jqzy1kt3ra': R`Prüfe jeden Punkt in jeder Bedingung. $⟦0⟧$ erfüllt alle; jeder der anderen verletzt mindestens eine.`,
  '15d4uuzw5eq': R`Eine Bäckerei backt täglich Kuchen ($x$) und Pasteten ($y$). Sie kann höchstens ⟦0⟧ Stück backen, und die Backzeit ergibt die Bedingung ⟦1⟧. Der Gewinn beträgt ⟦2⟧ Euro pro Kuchen und ⟦3⟧ Euro pro Pastete. Wie hoch ist der größtmögliche Tagesgewinn?`,
  '296rrmt4h4q': R`Bedingungen: $x + y \le ⟦0⟧$, $⟦1⟧ \le ⟦2⟧$, $x, y \ge 0$. Ecken: ⟦3⟧. Maximaler Gewinn: <b>⟦4⟧</b> Euro.`,

  // logic
  '22xng4phovn': R`
<p>Eine <b>Aussage</b> ist ein Satz, der entweder wahr oder falsch ist. Zusammengesetzte Aussagen entstehen mit <b>Junktoren</b>:</p>
⟦0⟧
⟦1⟧
<h3>Verwandte Implikationen</h3>
⟦2⟧
<h3>Quantoren</h3>
<p>$\forall$ „für alle“ und $\exists$ „es gibt“. Die Verneinung vertauscht sie: Die Verneinung von „Alle Schüler haben bestanden“ ist „<b>Einige</b> Schüler haben <b>nicht</b> bestanden“; die Verneinung von „Einige Vögel können nicht fliegen“ ist „Alle Vögel können fliegen“.</p>
<h3>Gültige Schlüsse</h3>
<ul><li><b>Modus ponens:</b> $p \Rightarrow q$, $p$; also $q$.</li><li><b>Modus tollens:</b> $p \Rightarrow q$, $\neg q$; also $\neg p$.</li><li><b>Kettenschluss:</b> $p \Rightarrow q$, $q \Rightarrow r$; also $p \Rightarrow r$.</li></ul>
⟦3⟧`,
  '2aa32u1lmw9': R`WF`,
  '1h0id2d836q': R`<p>Eine Implikation $p \Rightarrow q$ ist <b>nur</b> dann falsch, wenn $p$ wahr und $q$ falsch ist.</p>`,
  '2aojok6ubm7': R`Form`,
  '1bpxgxn3wdt': R`Äquivalent zur ursprünglichen?`,
  'clyih3qga0': R`Aussage`,
  '13tp70kq9iu': R`Konversion`,
  '5lqm3x6p6i': R`nein`,
  '1vsuatfpf7o': R`Inversion`,
  '1zjwynaslfy': R`Kontraposition`,
  '2377erd9rpv': R`ja`,
  '1vdptccpewy': R`<p>Aus $p \Rightarrow q$ und $q$ kann man $p$ <b>nicht</b> folgern („Bejahung der Konsequenz“). Nasser Boden beweist nicht, dass es geregnet hat.</p>`,
  'e62y0oj6y7': R`$p$ ist ⟦0⟧, $q$ ist ⟦1⟧ und $r$ ist ⟦2⟧. Welchen Wahrheitswert hat $⟦3⟧$?`,
  'x0xbdvafwl': R`Setze $p = \text{⟦0⟧}$, $q = \text{⟦1⟧}$, $r = \text{⟦2⟧}$ ein und werte von innen nach außen aus: $⟦3⟧$ ist <b>⟦4⟧</b>. (Merke: $\Rightarrow$ ist nur bei W ⇒ F falsch.)`,
  '1kkjzumhca1': R`es regnet`,
  'ia7w0co89o': R`es regnet nicht`,
  '1ihx0acpu6a': R`der Boden ist nass`,
  '1v63alfxz6x': R`der Boden ist nicht nass`,
  '1l79oqrjsck': R`$n$ ist durch 4 teilbar`,
  '1yshjhf0kon': R`$n$ ist nicht durch 4 teilbar`,
  'qa8yzaajhn': R`$n$ ist gerade`,
  'cbcna6lfv': R`$n$ ist nicht gerade`,
  '31grcmmyn9': R`$ABCD$ ist ein Quadrat`,
  'pqxtvsjzqa': R`$ABCD$ ist kein Quadrat`,
  '2gdyvqap69i': R`$ABCD$ ist ein Rechteck`,
  'lxgoo3xc2q': R`$ABCD$ ist kein Rechteck`,
  's4qelj4pfa': R`du lernst fleißig`,
  '1ri3py7kjks': R`du lernst nicht fleißig`,
  '1wmmmy5ybwg': R`du bestehst die Prüfung`,
  'uo17m9mxei': R`du bestehst die Prüfung nicht`,
  '14thczs4bru': R`die Lampe ist eingeschaltet`,
  '1mg8dlhg5lp': R`die Lampe ist ausgeschaltet`,
  '496x9r1bce': R`der Raum ist hell`,
  '383gdutznm': R`der Raum ist nicht hell`,
  '12lqix1f1k9': R`Aus ‚⟦0⟧‘ folgt ‚⟦1⟧‘.`,
  'z7jgfl3knp': R`Konversion`,
  'aqxfua2az0': R`Inversion`,
  '1qj3c13iq5c': R`Kontraposition`,
  '14dtm0889wo': R`Was ist die <b>⟦0⟧</b> der Aussage „⟦1⟧“?`,
  '1izj6udg2zz': R`Konversion: vertauschen ($q \Rightarrow p$). Inversion: beide verneinen ($\neg p \Rightarrow \neg q$). Kontraposition: vertauschen und verneinen ($\neg q \Rightarrow \neg p$). Die ⟦0⟧ ist also „⟦1⟧“⟦2⟧`,
  '15513xdtwsn': R` — sie ist logisch äquivalent zur ursprünglichen Aussage.`,
  '6brkkcy85o': R`Alle Schüler haben die Prüfung bestanden.`,
  '2rjnejqvqb': R`Einige Schüler haben die Prüfung nicht bestanden.`,
  'vjzsxd6qou': R`Kein Schüler hat die Prüfung bestanden.`,
  'oolor24qct': R`Alle Schüler sind durch die Prüfung gefallen.`,
  'aesopm7ka0': R`Einige Schüler haben die Prüfung bestanden.`,
  '1c9ng778gwv': R`Nicht alle Schüler haben die Prüfung bestanden.`,
  'f39jhzzlxm': R`Alle Katzen mögen Milch.`,
  '1rgve8hw4eg': R`Einige Katzen mögen keine Milch.`,
  '19hhf94uign': R`Keine Katze mag Milch.`,
  '1qzto8uhyzs': R`Alle Katzen verabscheuen Milch.`,
  'xi1gnm2hxv': R`Einige Katzen mögen Milch.`,
  'aijf9tywlh': R`Nicht alle Katzen mögen Milch.`,
  '2c7t0e33rd1': R`Alle Angestellten kamen pünktlich.`,
  'avwdd5b0gg': R`Einige Angestellte kamen nicht pünktlich.`,
  '28adrxoh914': R`Kein Angestellter kam pünktlich.`,
  '1000i19kpx7': R`Alle Angestellten kamen zu spät.`,
  '1tupibwtosw': R`Einige Angestellte kamen pünktlich.`,
  'syr088g2qb': R`Nicht alle Angestellten kamen pünktlich.`,
  '1rwcznrx3zt': R`Alle Zahlen in der Liste sind gerade.`,
  'g4py4lm4nz': R`Einige Zahlen in der Liste sind nicht gerade.`,
  'z8en25csvv': R`Keine Zahl in der Liste ist gerade.`,
  '1m3jao43f24': R`Alle Zahlen in der Liste sind ungerade.`,
  '2nfvm4et1c': R`Einige Zahlen in der Liste sind gerade.`,
  'xfe0p0mnov': R`Nicht alle Zahlen in der Liste sind gerade.`,
  '1w0eku5479x': R`Alle Spieler haben ein Tor geschossen.`,
  '2xjzgvosy4': R`Einige Spieler haben kein Tor geschossen.`,
  '1eb39gddsae': R`Kein Spieler hat ein Tor geschossen.`,
  '1xbzgu8l71r': R`Alle Spieler blieben ohne Tor.`,
  't7ja96nwk4': R`Einige Spieler haben ein Tor geschossen.`,
  '8j4qjj5ufj': R`Nicht alle Spieler haben ein Tor geschossen.`,
  'b5r03m1c02': R`Wie lautet die Verneinung von „⟦0⟧“?`,
  '1a591wdfgbv': R`$\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)$: Es genügt, dass <i>einige</i> die Eigenschaft nicht haben. Verneinung: „⟦0⟧“`,
  'do28na3fol': R`$\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)$: Keiner hat sie. Verneinung: „⟦0⟧“`,
  'ndnufyumww': R`Wie viele Zeilen hat eine Wahrheitstafel mit ⟦0⟧ verschiedenen Aussagevariablen?`,
  'u75a1of7f2': R`Jede Variable ist W oder F, also gibt es $2^{⟦0⟧} = ⟦1⟧$ Kombinationen.`,
  '1w39q86nfhw': R`In wie vielen Zeilen der Wahrheitstafel von $⟦0⟧$ ist die Aussage wahr?`,
  'ny2shau597': R`Die Tafel hat ⟦0⟧ Zeilen; die Auswertung zeigt, dass die Aussage in <b>⟦1⟧</b> davon wahr und in ⟦2⟧ falsch ist.`,
  '1zkv6notm6x': R`das Spiel wird abgesagt`,
  '28hyo4t2whc': R`das Spiel wird nicht abgesagt`,
  'amilvofe40': R`eine Zahl endet auf 0`,
  'osyuok2ad2': R`eine Zahl endet nicht auf 0`,
  'fabia2grh6': R`sie ist durch 5 teilbar`,
  '18q6q6gwd11': R`sie ist nicht durch 5 teilbar`,
  'm30q1lwox2': R`du gießt die Pflanze`,
  '1ku1ogs6cx8': R`du gießt die Pflanze nicht`,
  '1zfcrbg8kca': R`die Pflanze wächst`,
  'ax498dx365': R`die Pflanze wächst nicht`,
  '10pj6yxl1t7': R`der Wecker klingelt`,
  '4ju91rp1va': R`der Wecker klingelt nicht`,
  'smmfh9u0rs': R`Tim wacht auf`,
  '1al6yo6prnr': R`Tim wacht nicht auf`,
  '1wbxqjf54ui': R`Es lässt sich keine gültige Schlussfolgerung ziehen.`,
  '1h3hboouplr': R`Prämisse 1: „Aus ‚⟦0⟧‘ folgt ‚⟦1⟧‘.“ Prämisse 2: „⟦2⟧.“ Was kann man gültig folgern?`,
  '19xzw2kl48j': R`Das ist ein Modus ponens ($p \Rightarrow q$, $p$ ⊢ $q$): „⟦0⟧.“`,
  '4fjcpvhawf': R`Das ist ein Modus tollens ($p \Rightarrow q$, $\neg q$ ⊢ $\neg p$): „⟦0⟧.“`,
  'enorfzjcll': R`Zu wissen, dass $q$ wahr ist, sagt nichts über $p$ (die Bejahung der Konsequenz ist ein Fehlschluss). Keine gültige Folgerung.`,
  '1w6l8obljn3': R`Zu wissen, dass $\neg p$ gilt, sagt nichts über $q$ (die Verneinung des Antezedens ist ein Fehlschluss). Keine gültige Folgerung.`,
});
