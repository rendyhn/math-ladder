/* Français — Lycée (tronc commun, second degré → exponentielles et logarithmes) */
addT('fr', {
  // core
  '3idcm4kbiz': R`Écrivez les deux solutions séparées par un point-virgule, par exemple -2 ; 5.`,
  '2gdno2vs4iz': R`Écrivez une réponse comme 9pi ou 3pi/4.`,

  // quadratics
  'zojqk1lf1a': R`
<p>Une <b>équation du second degré</b> est de la forme $ax^2 + bx + c = 0$ avec $a \ne 0$. Elle a au plus deux solutions (racines).</p>
<h3>1. Factorisation</h3>
<p>Un produit est nul si et seulement si l’un de ses facteurs est nul. Cherchez deux nombres dont le produit vaut $c$ et la somme vaut $b$ (quand $a = 1$) :</p>
⟦0⟧
<h3>2. Forme canonique</h3>
⟦1⟧
<h3>3. La formule du discriminant</h3>
⟦2⟧
<h3>Somme et produit des racines (Viète)</h3>
⟦3⟧
<p>Ainsi, une équation de racines $r$ et $s$ est $x^2 - (r + s)x + rs = 0$.</p>
⟦4⟧
⟦5⟧`,
  '2eim40ubkm5': R`x^2 - x - 12 = 0 \;\Rightarrow\; (x - 4)(x + 3) = 0 \;\Rightarrow\; x = 4 \text{ ou } x = -3`,
  '2fswinarukx': R`$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$<p>Le <b>discriminant</b> $D = b^2 - 4ac$ indique combien il y a de racines réelles :</p><ul><li>$D \gt 0$ : deux racines réelles distinctes</li><li>$D = 0$ : une racine réelle double</li><li>$D \lt 0$ : aucune racine réelle (deux racines complexes)</li></ul>`,
  '2es7ki62fmx': R`<p>$2x^2 - 7x + 3 = 0$ : $D = 49 - 24 = 25$, donc $x = \frac{7 \pm 5}{4}$, soit $x = 3$ ou $x = \frac{1}{2}$. Vérification : somme $= \frac{7}{2}$ ✓, produit $= \frac{3}{2}$ ✓.</p>`,
  '2fn72wvlok5': R`<p>Ne divisez jamais les deux membres par $x$ : vous perdriez la racine $x = 0$. Passez tout dans un membre et factorisez.</p>`,
  'wqvbu9g7qm': R`$x = ⟦0⟧ \text{ ou } x = ⟦1⟧$`,
  '2g53wo2odbr': R`Résolvez $⟦0⟧ = 0$.`,
  'zl23t8993d': R`Factorisons : $(x ⟦0⟧)(x ⟦1⟧) = 0$, donc $x = ⟦2⟧$ ou $x = ⟦3⟧$.`,
  '116407nwdrj': R`Calculez le discriminant de $⟦0⟧ = 0$.`,
  '3gb665scdq': R`Deux racines réelles distinctes`,
  '2fay79x4phj': R`Une racine réelle double`,
  'ha2iee3mi': R`Aucune racine réelle`,
  '21o8qulmmck': R`Combien de racines réelles l’équation $⟦0⟧ = 0$ a-t-elle ?`,
  '2v9wp16hr5': R`$⟦0⟧$ est positif, donc il y a deux racines réelles distinctes.`,
  '1awtt37lduc': R`$⟦0⟧$ est nul, donc il y a une racine réelle double.`,
  '1b3c8vdz0p': R`$⟦0⟧$ est négatif, donc il n’y a aucune racine réelle.`,
  '13khpmu10gc': R`Calculez la somme des racines de $⟦0⟧ = 0$.`,
  '23qtrsvpbqj': R`Somme des racines $= -\frac{b}{a} = ⟦0⟧$.`,
  '2e310dsl6wd': R`Calculez le produit des racines de $⟦0⟧ = 0$.`,
  '1s4vvexqix0': R`Produit des racines $= \frac{c}{a} = ⟦0⟧$.`,
  '27metzx2wv2': R`Résolvez $⟦0⟧ = 0$ en donnant les valeurs exactes.`,
  '1pprj3loiqe': R`Écrivez les deux solutions séparées par un point-virgule, par exemple -3+sqrt(5) ; -3-sqrt(5).`,
  '28yk466lqnm': R`Forme canonique : $(x ⟦0⟧)^2 - ⟦1⟧ ⟦2⟧ = 0$, donc $(x ⟦3⟧)^2 = ⟦4⟧$ et $x = ⟦5⟧ \pm \sqrt{⟦6⟧}$.`,
  '13i18rd2v1i': R`Quelle équation du second degré a pour racines $⟦0⟧$ et $⟦1⟧$ ?`,
  '1qw3sazqaaj': R`La longueur d’un rectangle dépasse sa largeur de ⟦0⟧ m, et son aire vaut ⟦1⟧ m². Calculez la largeur.`,
  '27ssy7fe6w9': R`Soit $w$ la largeur : $w(w + ⟦0⟧) = ⟦1⟧$, donc $⟦2⟧ = 0$, c’est-à-dire $(w - ⟦3⟧)(w + ⟦4⟧) = 0$. Une largeur est positive, donc $w = ⟦5⟧$ m.`,

  // quad-functions
  't6hwj355ki': R`
<p>La courbe de $f(x) = ax^2 + bx + c$ est une <b>parabole</b>. Elle est tournée <b>vers le haut</b> si $a \gt 0$ (une vallée, avec un minimum) et <b>vers le bas</b> si $a \lt 0$ (une colline, avec un maximum).</p>
⟦0⟧
<h3>Forme canonique</h3>
⟦1⟧
<p>La mise sous forme canonique transforme la forme développée : $x^2 - 6x + 11 = (x - 3)^2 + 2$, donc le sommet est $(3 ; 2)$ et le minimum vaut 2. L’ensemble des images est $y \ge 2$.</p>
⟦2⟧
⟦3⟧`,
  's0tk1crha5': R`<ul><li>Axe de symétrie et sommet : $x = -\dfrac{b}{2a}$ ; le sommet est $\left(-\dfrac{b}{2a} ;\, f\!\left(-\dfrac{b}{2a}\right)\right)$.</li><li>Intersection avec l’axe des $y$ : $(0 ; c)$.</li><li>Intersections avec l’axe des $x$ : les racines de $ax^2 + bx + c = 0$ (s’il y en a).</li></ul>`,
  '8vanwczjp2': R`f(x) = a(x - h)^2 + k \qquad \text{sommet } (h ; k)`,
  '17der0pee5r': R`<p>La hauteur d’un ballon est $h(t) = -5t^2 + 20t + 1$ mètres. Le sommet est en $t = -\frac{20}{2(-5)} = 2$ s, et la hauteur maximale est $h(2) = -20 + 40 + 1 = 21$ m.</p>`,
  'zvghnbm8dy': R`<p>L’axe de symétrie est exactement à mi-chemin entre les deux intersections avec l’axe des $x$ : si les racines sont $p$ et $q$, c’est $x = \frac{p + q}{2}$.</p>`,
  '1mhp7175d34': R`Calculez l’abscisse du sommet de $y = ⟦0⟧$.`,
  '2clzljfduzb': R`Calculez le maximum de $f(x) = ⟦0⟧$.`,
  '2gjwh27g0hr': R`Calculez le minimum de $f(x) = ⟦0⟧$.`,
  '27czsvma29h': R`Le sommet est en $x = -\frac{b}{2a} = ⟦0⟧$, et $f(⟦1⟧) = ⟦2⟧$. Comme $a \lt 0$, la parabole est tournée vers le bas, donc ⟦3⟧ est le maximum.`,
  '14ge4kcc386': R`Le sommet est en $x = -\frac{b}{2a} = ⟦0⟧$, et $f(⟦1⟧) = ⟦2⟧$. Comme $a \gt 0$, la parabole est tournée vers le haut, donc ⟦3⟧ est le minimum.`,
  'c44znu24a9': R`Écrivez $y = ⟦0⟧$ sous forme canonique.`,
  '1vsnqklq7o3': R`Forme canonique : $x^2 ⟦0⟧x = (x ⟦1⟧)^2 - ⟦2⟧$. Donc $y = (x ⟦3⟧)^2 - ⟦4⟧ ⟦5⟧ = (x ⟦6⟧)^2 ⟦7⟧$, de sommet $⟦8⟧$.`,
  'zpcs87kljp': R`Une parabole coupe l’axe des $x$ en $x = ⟦0⟧$ et $x = ⟦1⟧$. Quelle est l’équation de son axe de symétrie ? Donnez la valeur de $x$.`,
  'fw0opla76f': R`L’axe de symétrie est à mi-chemin entre les racines : $x = \frac{⟦0⟧ + ⟦1⟧}{2} = ⟦2⟧$.`,
  'v46mha0d5d': R`La hauteur d’un ballon, en mètres, après $t$ secondes est $h(t) = ⟦0⟧$. ⟦1⟧`,
  '1hvtdauomyu': R`Au bout de combien de secondes atteint-il sa hauteur maximale ?`,
  '1316b0fmwet': R`Quelle est sa hauteur maximale ?`,
  'ycs9rjyck7': R`Le sommet est en $t = -\frac{⟦0⟧}{2(-5)} = ⟦1⟧$ s.⟦2⟧`,
  'ztkk37xmwf': R` Alors $h(⟦0⟧) = -5(⟦1⟧)^2 + ⟦2⟧(⟦3⟧) + ⟦4⟧ = ⟦5⟧$ m.`,
  '1e1oh4ob6ax': R`Quel est l’ensemble des images de $f(x) = ⟦0⟧$ ?`,
  '1xjsk3emsrc': R`Le sommet est $⟦0⟧$ et la parabole est tournée vers le haut, donc l’ensemble des images est $y \ge ⟦1⟧$.`,
  'xs3xxut6a6': R`Le sommet est $⟦0⟧$ et la parabole est tournée vers le bas, donc l’ensemble des images est $y \le ⟦1⟧$.`,

  // functions
  '8naid6th7m': R`
<p>Une <b>fonction</b> associe à chaque antécédent exactement <b>une</b> image. L’ensemble des valeurs autorisées est l’<b>ensemble de définition</b> ; l’ensemble des images est l’<b>ensemble image</b>.</p>
<h3>Ensembles de définition naturels</h3>
<ul><li>Pas de division par zéro : pour $\frac{1}{x - 2}$, il faut $x \ne 2$.</li><li>Pas de racine carrée d’un négatif : pour $\sqrt{x + 3}$, il faut $x \ge -3$.</li><li>Un logarithme exige un argument positif : pour $\log(x - 1)$, il faut $x \gt 1$.</li></ul>
<h3>Composition</h3>
⟦0⟧
⟦1⟧
<h3>Fonctions réciproques</h3>
<p>$f^{-1}$ défait ce que fait $f$ : si $f(a) = b$, alors $f^{-1}(b) = a$. Pour la trouver, écrivez $y = f(x)$, échangez $x$ et $y$, puis exprimez $y$.</p>
⟦2⟧
<p>La courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à la droite $y = x$. Seules les fonctions injectives ont une réciproque.</p>
⟦3⟧`,
  '1ph305emxqf': R`$$(f \circ g)(x) = f(g(x))$$<p>On applique d’abord $g$, puis $f$. En général, $f \circ g \ne g \circ f$.</p>`,
  '1cxwjq7z97r': R`<p>$f(x) = 2x + 1$, $g(x) = x^2$. Alors $f(g(3)) = f(9) = 19$, mais $g(f(3)) = g(7) = 49$. En expressions : $f(g(x)) = 2x^2 + 1$ et $g(f(x)) = (2x + 1)^2$.</p>`,
  '15c8mvolh1o': R`<p>$f(x) = 3x - 5$ : on échange pour obtenir $x = 3y - 5$, donc $y = \frac{x + 5}{3}$ et $f^{-1}(x) = \frac{x + 5}{3}$. Vérification : $f(f^{-1}(x)) = x$ ✓</p>`,
  '26njpf4q54n': R`<p>$f^{-1}(x)$ désigne la fonction réciproque, et non $\frac{1}{f(x)}$.</p>`,
  'i7pel35sqq': R`Soit $f(x) = ⟦0⟧$ et $g(x) = ⟦1⟧$. Calculez $⟦2⟧$.`,
  '1znd9mktzvv': R`D’abord l’intérieur : $g(⟦0⟧) = ⟦1⟧$. Puis $f(⟦2⟧) = ⟦3⟧$.`,
  'hfjxna60e5': R`D’abord l’intérieur : $f(⟦0⟧) = ⟦1⟧$. Puis $g(⟦2⟧) = ⟦3⟧$.`,
  '202pgbw3wu2': R`Si $f(x) = ⟦0⟧$ et $g(x) = ⟦1⟧$, déterminez $(f \circ g)(x)$.`,
  'f0qp6mlevp': R`Déterminez la réciproque de $f(x) = ⟦0⟧$.`,
  '169q0jrvorq': R`Écrivons $y = ⟦0⟧$ et échangeons $x$ et $y$ : $x = ⟦1⟧$. On exprime $y$ : $y = \frac{x ⟦2⟧}{⟦3⟧}$.`,
  'qmg4emyl6w': R`Soit $f(x) = ⟦0⟧$. Calculez $f^{-1}(⟦1⟧)$.`,
  '15zrqw164xy': R`$f^{-1}(⟦0⟧)$ est l’antécédent de ⟦1⟧ : $⟦2⟧ = ⟦3⟧$, donc $x = ⟦4⟧$.`,
  'uego2o122d': R`L’expression sous la racine doit être positive ou nulle : $x ⟦0⟧ \ge 0$.`,
  '39j6h0pn24': R`Le dénominateur ne peut pas être nul : $x ⟦0⟧ \ne 0$.`,
  'sbga4fns30': R`Il faut $⟦0⟧ - x \ge 0$.`,
  '21vfyvxcrw8': R`Un logarithme exige un argument strictement positif : $x ⟦0⟧ \gt 0$.`,
  '10h8v1f5joc': R`Quel est l’ensemble de définition de $f(x) = ⟦0⟧$ ?`,
  '1i0w7q8kkjh': R`⟦0⟧ L’ensemble de définition est donc ⟦1⟧.`,
  '1qymltc7n95': R`Soit $f(x) = \begin{cases} ⟦0⟧, & x \lt ⟦1⟧ \\ ⟦2⟧, & x \ge ⟦3⟧ \end{cases}$. Calculez $f(⟦4⟧)$.`,
  '2c8e7agksdd': R`Comme $⟦0⟧ \lt ⟦1⟧$, on utilise la première expression : $f(⟦2⟧) = ⟦3⟧$.`,
  'ranlsqjvf9': R`Comme $⟦0⟧ \ge ⟦1⟧$, on utilise la seconde expression : $f(⟦2⟧) = ⟦3⟧$.`,

  // exp-log
  'l9f49uc5fx': R`
<p>Les exposants rationnels combinent puissances et racines : $a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$. Ainsi, $8^{\frac{2}{3}} = (\sqrt[3]{8})^2 = 4$ et $16^{-\frac{1}{2}} = \frac{1}{4}$.</p>
<h3>Logarithmes</h3>
⟦0⟧
⟦1⟧
<h3>Résolution d’équations</h3>
<ul><li>Même base : $2^{x+1} = 32 = 2^5 \Rightarrow x + 1 = 5 \Rightarrow x = 4$.</li><li>Équation logarithmique : $\log_3(2x - 1) = 2 \Rightarrow 2x - 1 = 3^2 = 9 \Rightarrow x = 5$.</li><li>Bases différentes : on prend le logarithme des deux membres, $5^x = 20 \Rightarrow x = \frac{\log 20}{\log 5} \approx 1{,}861$.</li></ul>
<h3>Croissance et décroissance exponentielles</h3>
<p>$A = A_0 \cdot r^{t/T}$ : une quantité multipliée par $r$ toutes les $T$ unités de temps. Intérêts composés : $A = P(1 + i)^n$.</p>
⟦2⟧`,
  'cgsm0nxs87': R`$$\log_b a = c \quad\Longleftrightarrow\quad b^c = a \qquad (b \gt 0 ;\; b \ne 1 ;\; a \gt 0)$$<p>Un logarithme répond à la question « à quelle puissance faut-il élever $b$ pour obtenir $a$ ? » — ainsi $\log_2 32 = 5$. $\log x$ désigne $\log_{10} x$ ; $\ln x$ désigne $\log_e x$, avec $e \approx 2{,}718$.</p>`,
  '5k5p7u9mjc': R`changement de base`,
  'unmvz575yi': R`<p>$\log(x + y) \ne \log x + \log y$. La règle du produit transforme un <i>produit</i> à l’intérieur en une somme à l’extérieur.</p>`,
  'osur1d06sr': R`Calculez $\log_{⟦0⟧} ⟦1⟧$.`,
  '8m3m9l7mik': R`$⟦0⟧^{⟦1⟧} = ⟦2⟧$, donc $\log_{⟦3⟧} ⟦4⟧ = ⟦5⟧$.`,
  '1qkid4ac6wc': R`Calculez $\log_{⟦0⟧} ⟦1⟧ + \log_{⟦2⟧} ⟦3⟧$.`,
  '1kop25xxaoo': R`Calculez $\log_{⟦0⟧} ⟦1⟧ - \log_{⟦2⟧} ⟦3⟧$.`,
  '1cctawopufn': R`Calculez $⟦0⟧^{-\frac{⟦1⟧}{⟦2⟧}}$.`,
  '2bg5dnahfhi': R`Écrivez une fraction, par exemple 1/4.`,
  '2cumtrnn88x': R`Calculez $⟦0⟧^{\frac{⟦1⟧}{⟦2⟧}}$.`,
  'x9eagz2e3z': R`Résolvez $⟦0⟧^{⟦1⟧} = ⟦2⟧$.`,
  '1zhriq8g9vc': R`$⟦0⟧ = ⟦1⟧^{⟦2⟧}$. Même base, donc mêmes exposants : $⟦3⟧ = ⟦4⟧$, d’où $x = ⟦5⟧$.`,
  '5s8f33ips': R`Résolvez $\log_{⟦0⟧}(⟦1⟧) = ⟦2⟧$.`,
  '1qw3ujxvp13': R`Sous forme exponentielle : $⟦0⟧ = ⟦1⟧^{⟦2⟧} = ⟦3⟧$, donc $⟦4⟧ = ⟦5⟧$ et $x = ⟦6⟧$.`,
  '1owsh5togde': R`Une colonie de ⟦0⟧ bactéries double toutes les ⟦1⟧ heures. Combien y a-t-il de bactéries au bout de ⟦2⟧ heures ?`,
  '24ouek9sj2d': R`Une colonie de ⟦0⟧ bactéries triple toutes les ⟦1⟧ heures. Combien y a-t-il de bactéries au bout de ⟦2⟧ heures ?`,
  'sad2coi0y': R`Il y a $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ périodes, donc $N = ⟦3⟧ \times ⟦4⟧^{⟦5⟧} = ⟦6⟧$.`,
  'uyumfdhjnr': R`Sachant que $\log 2 \approx 0{,}3010$ et $\log 3 \approx 0{,}4771$, calculez $\log ⟦0⟧$ à 4 décimales.⟦1⟧`,
  'a59cccufc1': R` (Indice : $\log 5 = \log 10 - \log 2$.)`,
  '12khv2t073z': R`$⟦0⟧ = ⟦1⟧$, donc $\log ⟦2⟧ = ⟦3⟧ \approx ⟦4⟧$.⟦5⟧`,
  '2aoxsl3f4vw': R` Ici $\log 5 = 1 - 0{,}3010 = 0{,}6990$.`,
});
