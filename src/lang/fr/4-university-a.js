/* Français — Université (techniques de dérivation → équations différentielles) */
addT('fr', {
  // diff-techniques
  'i2e9stiapi': R`
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Dérivation implicite</h3>
<p>Quand $y$ est défini implicitement, dérive les deux membres par rapport à $x$ en traitant $y$ comme une fonction de $x$ (donc $\frac{d}{dx}y^2 = 2y\,y'$), puis isole $y'$.</p>
⟦3⟧
⟦4⟧
⟦5⟧`,
  '1kr8zytc8j5': R`Produit`,
  '1fd6nxjb0xt': R`Quotient`,
  '21u0n9yxqot': R`Composition`,
  '10xmtmesa6t': R`Fonction`,
  'n72fq2kxcg': R`Dérivée`,
  '1qtv7snffoy': R`<p>$\dfrac{d}{dx}\,(3x^2 + 1)^5 = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4$ &nbsp;(dérivée d'une composée)</p><p>$\dfrac{d}{dx}\,x^2 e^{3x} = 2x e^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$ &nbsp;(dérivée d'un produit)</p>`,
  '1nhip08xeg5': R`<p>$x^2 + y^2 = 25 \Rightarrow 2x + 2y\,y' = 0 \Rightarrow y' = -\dfrac{x}{y}$. Au point $(3 ; 4)$, la pente vaut $-\frac{3}{4}$.</p>`,
  'wvkdxn7frj': R`<p>La <b>dérivation logarithmique</b> traite les produits, les quotients et les puissances variables : pour $y = x^x$, $\ln y = x\ln x$, donc $\frac{y'}{y} = \ln x + 1$ et $y' = x^x(\ln x + 1)$.</p>`,
  're4vli1oc9': R`<p>Composée : multiplie toujours par la dérivée de la fonction <b>intérieure</b>. $\frac{d}{dx}\sin(x^2) = 2x\cos(x^2)$, et non $\cos(x^2)$.</p>`,
  '1iajxt140g2': R`Soit $f(x) = (⟦0⟧)^{⟦1⟧}$. Calcule $f'(⟦2⟧)$.`,
  '2108swf0nc1': R`Dérivée d'une composée : $f'(x) = ⟦0⟧(⟦1⟧)^{⟦2⟧} \cdot ⟦3⟧$. En $x = ⟦4⟧$, l'intérieur vaut ⟦5⟧, donc $f'(⟦6⟧) = ⟦7⟧ \cdot ⟦8⟧^{⟦9⟧} \cdot ⟦10⟧ = ⟦11⟧$.`,
  '13u8g7mcany': R`Dérive $y = ⟦0⟧⟦1⟧$.`,
  'ltfmske2sq': R`Dérivée d'un produit avec $u = ⟦0⟧$, $v = ⟦1⟧$ : $y' = ⟦2⟧⟦3⟧ + ⟦4⟧ \cdot ⟦5⟧ =⟦6⟧⟦7⟧(⟦8⟧)$.`,
  '24tbapqaxkt': R`Soit $f(x) = \ln(⟦0⟧)$. Calcule $f'(⟦1⟧)$.`,
  'vr5ui5jnj1': R`$f'(x) = \frac{⟦0⟧x}{⟦1⟧}$, donc $f'(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '21f80wac08v': R`Calcule $\frac{dy}{dx}$ pour $x^2 + y^2 = ⟦0⟧$ au point $⟦1⟧$.`,
  'xl17ytois8': R`Calcule $\frac{dy}{dx}$ pour $xy = ⟦0⟧$ au point $⟦1⟧$.`,
  'cc1dbada60': R`Dérivée d'un produit : $y + x\,y' = 0 \Rightarrow y' = -\frac{y}{x} = ⟦0⟧$.`,
  'g5b3ql04b4': R`Dérive $y = \sin(⟦0⟧)$.`,
  '1u57cjycyb3': R`Composée : la dérivée extérieure est $\cos(⟦0⟧)$ et la dérivée intérieure est $⟦1⟧$, ce qui donne $⟦2⟧\cos(⟦3⟧)$.`,
  '1zcx1qjywp8': R`Pour $f(x) = ⟦0⟧$, calcule $f''(⟦1⟧)$.`,
  '22jprctwicn': R`$f'(x) = ⟦0⟧$ et $f''(x) = ⟦1⟧$. Donc $f''(⟦2⟧) = ⟦3⟧$.`,
  '1pkqexq4tgg': R`Soit $f(x) = x\ln x$. Calcule $f'(e^{⟦0⟧})$.`,
  '20aqqhk2mtp': R`Dérivée d'un produit : $f'(x) = \ln x + x \cdot \frac{1}{x} = \ln x + 1$. Donc $f'(e^{⟦0⟧}) = ⟦1⟧ + 1 = ⟦2⟧$.`,

  // diff-applications
  'g0oq20zzs': R`
<h3>Règle de L'Hôpital</h3>
⟦0⟧
<p>$\displaystyle\lim_{x \to 0}\frac{1 - \cos 4x}{x^2} = \lim\frac{4\sin 4x}{2x} = \lim\frac{16\cos 4x}{2} = 8$ (appliquée deux fois).</p>
<h3>Optimisation</h3>
<ol><li>Écris la grandeur à optimiser comme fonction d'une seule variable (utilise la contrainte).</li><li>Dérive et résous $f'(x) = 0$.</li><li>Vérifie qu'il s'agit d'un maximum/minimum (dérivée seconde ou bornes).</li></ol>
⟦1⟧
<h3>Taux liés</h3>
<p>Dérive une relation par rapport au temps. Pour un disque qui grandit, $A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.</p>
<h3>Approximation affine</h3>
⟦2⟧
<h3>Convexité et théorème des accroissements finis</h3>
<p>$f'' \gt 0$ : convexe ; $f'' \lt 0$ : concave ; un <b>point d'inflexion</b> est un point où la convexité change. <b>TAF :</b> si $f$ est continue sur $[a ; b]$ et dérivable à l'intérieur, il existe $c$ dans $]a ; b[$ tel que $f'(c) = \frac{f(b) - f(a)}{b - a}$.</p>
⟦3⟧`,
  '11hmiu9w9s4': R`<p>Si $\lim \frac{f(x)}{g(x)}$ est de la forme $\frac{0}{0}$ ou $\frac{\infty}{\infty}$, alors $\displaystyle\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}$ (quand le membre de droite existe).</p>`,
  '189x52ko5mw': R`<p>On découpe des carrés de côté $x$ aux coins d'une feuille carrée de 18 cm, puis on replie les bords. $V = x(18 - 2x)^2$, $V' = (18 - 2x)(18 - 6x) = 0$ donne $x = 3$, donc $V_{\max} = 3 \cdot 12^2 = 432$ cm³.</p>`,
  'e22qux2ozs': R`f(a + h) \approx f(a) + f'(a)\,h \qquad \text{p. ex. } \sqrt{26} \approx 5 + \frac{1}{2 \cdot 5} = 5{,}1`,
  '15384lzo6ba': R`<p>L'Hôpital dérive le numérateur et le dénominateur <b>séparément</b> : ce n'est pas la dérivée d'un quotient.</p>`,
  's2219vpl96': R`Calcule $\displaystyle\lim_{x \to 0}\frac{1 - \cos ⟦0⟧x}{x^2}$.`,
  '1tq22svmx8r': R`L'Hôpital deux fois : $\frac{⟦0⟧\sin ⟦1⟧x}{2x} \to \frac{⟦2⟧\cos ⟦3⟧x}{2} \to \frac{⟦4⟧}{2}$.`,
  'v9t0b7xos3': R`Calcule $\displaystyle\lim_{x \to 0}\frac{⟦0⟧}{⟦1⟧x}$.`,
  'wudu9stdyh': R`C'est une forme $\frac{0}{0}$ ; dérive le numérateur et le dénominateur : $\frac{⟦0⟧}{⟦1⟧} \to \frac{⟦2⟧}{⟦3⟧}$.`,
  'b8a0ml45bv': R`On découpe des carrés identiques de côté $x$ cm aux coins d'une feuille de ⟦0⟧ cm sur ⟦1⟧ cm, puis on replie les bords pour obtenir une boîte ouverte. ⟦2⟧`,
  '6fzl8050w8': R`Quelle valeur de x rend le volume maximal ?`,
  '1nbs4g9250e': R`Quel est le volume maximal possible ?`,
  '1xaya4958aj': R`$V = x(⟦0⟧ - 2x)^2$, $V' = (⟦1⟧ - 2x)(⟦2⟧ - 6x) = 0$ donne $x = ⟦3⟧$ (l'autre racine donne un volume nul). $V = ⟦4⟧(⟦5⟧)^2 = ⟦6⟧$ cm³.`,
  'g44lawx7yb': R`Le rayon d'un cercle augmente de ⟦0⟧ cm/s. À quelle vitesse l'aire augmente-t-elle quand le rayon vaut ⟦1⟧ cm ? Réponds en fonction de $\pi$.`,
  'pvrsmdtr3x': R`$\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi(⟦0⟧)(⟦1⟧) = ⟦2⟧$ cm²/s.`,
  'w8wuhpzsgd': R`Le rayon d'un ballon sphérique augmente de ⟦0⟧ cm/s. À quelle vitesse son volume augmente-t-il quand le rayon vaut ⟦1⟧ cm ? Réponds en fonction de $\pi$.`,
  '1ca85zwkg9p': R`$\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = 4\pi(⟦0⟧)^2(⟦1⟧) = ⟦2⟧$ cm³/s.`,
  '2c66yuykiw5': R`Utilise une approximation affine de $\sqrt{x}$ en $x = ⟦0⟧$ pour estimer $\sqrt{⟦1⟧}$.`,
  'rjw48nwhxr': R`Écris une fraction ou un nombre décimal.`,
  '16wswpodtbc': R`Trouve l'abscisse du point d'inflexion de $f(x) = ⟦0⟧$.`,
  '16igzoef2co': R`$f''(x) = 6x ⟦0⟧ = 0$ donne $x = ⟦1⟧$ ; $f''$ y change de signe.`,
  '2dw0fqk2lyr': R`$f(x) = ⟦0⟧$ sur $[⟦1⟧ ; ⟦2⟧]$. Trouve la valeur $c$ garantie par le théorème des accroissements finis.`,
  '1c5ltuvzsrq': R`Pente moyenne $= \frac{f(⟦0⟧) - f(⟦1⟧)}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. $f'(c) = 2c ⟦5⟧ = ⟦6⟧$ donne $c = ⟦7⟧$ : le milieu, comme toujours pour une fonction du second degré.`,

  // integration-techniques
  'vrvi3bfbr': R`
<h3>Changement de variable</h3>
<p>Cherche une fonction et sa dérivée. Avec $u = g(x)$, $du = g'(x)\,dx$ :</p>
⟦0⟧
<p>Pour une intégrale définie, change aussi les bornes (ou reviens à $x$ avant d'évaluer).</p>
<h3>Intégration par parties</h3>
⟦1⟧
⟦2⟧
<h3>Décomposition en éléments simples</h3>
<p>Décompose une fonction rationnelle en morceaux plus simples : $\dfrac{5x - 1}{(x - 1)(x + 2)} = \dfrac{A}{x - 1} + \dfrac{B}{x + 2}$. Chasse les dénominateurs et remplace $x = 1$ et $x = -2$ : $A = \frac{4}{3}$, $B = \frac{11}{3}$. Chaque morceau s'intègre en un logarithme.</p>
<h3>Intégrales impropres</h3>
⟦3⟧
⟦4⟧`,
  '26zznowz8be': R`\int 2x(x^2 + 1)^3\,dx = \int u^3\,du = \frac{u^4}{4} + C = \frac{(x^2 + 1)^4}{4} + C`,
  '5ecfawuidh': R`$$\int u\,dv = uv - \int v\,du$$<p>Choisis $u$ selon la règle <b>LIATE</b> : Logarithme, fonctions trigonométriques Inverses, Algébriques, Trigonométriques, Exponentielles — la première qui apparaît.</p>`,
  'c0nz9m0n3d': R`<p>$\int x e^{2x}\,dx$ : $u = x$, $dv = e^{2x}dx$, donc $du = dx$, $v = \frac{1}{2}e^{2x}$. Résultat : $\frac{x}{2}e^{2x} - \int\frac{1}{2}e^{2x}\,dx = \frac{x}{2}e^{2x} - \frac{1}{4}e^{2x} + C$.</p>`,
  '2clmb8muggz': R`\int_1^\infty \frac{dx}{x^p} = \frac{1}{p - 1} \text{ pour } p \gt 1 \text{ (diverge pour } p \le 1) \qquad \int_0^\infty e^{-kx}\,dx = \frac{1}{k}`,
  'l8twy4h3ug': R`<p>$\int \frac{g'(x)}{g(x)}\,dx = \ln|g(x)| + C$ : repère cette forme avant de sortir l'artillerie lourde.</p>`,
  'fesx7djw83': R`xe^{x} - e^{x}`,
  'yia5dxx3ds': R`xe^{x} + e^{x}`,
  '1afuqmxgeq5': R`Calcule $\displaystyle\int ⟦0⟧\,dx$.`,
  '1235n0zk19z': R`Intègre par parties avec ⟦0⟧ : le résultat est ⟦1⟧. Dérive pour vérifier.`,
  'pklgf5s2ey': R`Calcule $\displaystyle\int_0^{⟦0⟧} 2x(x^2 + 1)^{⟦1⟧}\,dx$.`,
  '51fkmlo4j8': R`Pose $u = x^2 + 1$, $du = 2x\,dx$ ; bornes de $u = 1$ à $u = ⟦0⟧$ : $\int_1^{⟦1⟧} u^{⟦2⟧}\,du = \left[\frac{u^{⟦3⟧}}{⟦4⟧}\right]_1^{⟦5⟧} = \frac{⟦6⟧ - 1}{⟦7⟧} = ⟦8⟧$.`,
  '1tmpbvg6cku': R`Décompose en éléments simples : $\dfrac{⟦0⟧}{⟦1⟧⟦2⟧}$`,
  '1iitr1pnozn': R`Écris $\frac{P}{⟦0⟧} + \frac{Q}{⟦1⟧}$ et chasse les dénominateurs. Avec $x = ⟦2⟧$ on obtient $P = ⟦3⟧$ ; avec $x = ⟦4⟧$, $Q = ⟦5⟧$.`,
  'r1rswlk024': R`Calcule $\displaystyle\int_0^{\pi/⟦0⟧} \sin(⟦1⟧x)\,dx$.`,
  '1l97oofm3p4': R`Calcule $\displaystyle\int_0^{\pi/⟦0⟧} \cos(⟦1⟧x)\,dx$.`,
  'pqalznrxip': R`Calcule $\displaystyle\int_1^{\infty} \frac{dx}{x^{⟦0⟧}}$.`,
  '4t49nbtc5g': R`$\left[\frac{x^{⟦0⟧}}{⟦1⟧}\right]_1^{\infty} = 0 - \frac{1}{⟦2⟧} = ⟦3⟧$. Elle converge car $p = ⟦4⟧ \gt 1$.`,
  'w9i8vvwvmq': R`Calcule $\displaystyle\int_0^{\infty} e^{-⟦0⟧x}\,dx$.`,
  '1wnox68sxsf': R`Calcule $\displaystyle\int_0^{⟦0⟧} \frac{2x}{x^2 + 1}\,dx$.`,
  '2ctr5v6it67': R`Les réponses comme ln(10) sont acceptées.`,
  '8ud8r2yql4': R`Le numérateur est la dérivée du dénominateur : $\left[\ln(x^2 + 1)\right]_0^{⟦0⟧} = \ln ⟦1⟧ - \ln 1 = \ln ⟦2⟧$.`,

  // integral-applications
  '1iuoee1mxv2': R`Intégrale`,
  'u2fo7phj7e': R`Aire entre deux courbes`,
  '26rkw1zgbbl': R`Volume (disques), autour de l'axe des x`,
  '1gdvfh77kjd': R`Volume (couronnes)`,
  '2e8c5l4l65u': R`Volume (cylindres), autour de l'axe des y`,
  'hf97eg5buy': R`Valeur moyenne`,
  '1wrr2ozjzke': R`Longueur d'arc`,
  '1aamatrm1qc': R`Travail (force variable)`,
  '25psf0wh4wl': R`<p>Rotation de $y = \sqrt{x}$, $0 \le x \le 4$, autour de l'axe des $x$ : $V = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi$.</p>`,
  '84txgrqh8f': R`<p>Un ressort de raideur $k = 200$ N/m (loi de Hooke $F = kx$) étiré de 0,3 m : $W = \int_0^{0{,}3} 200x\,dx = 100(0{,}3)^2 = 9$ J.</p>`,
  '4sufc6qh8k': R`<p>Fais d'abord un croquis. Trouve où les courbes se coupent (ce sont les bornes) et laquelle est au-dessus : l'intégrande est toujours <b>celle du haut moins celle du bas</b> (ou rayon extérieur au carré moins rayon intérieur au carré).</p>`,
  '2dts82e214f': R`<p>Dans la méthode des disques, on élève au carré la <b>fonction</b>, pas l'intégrale : $\pi\int f^2$, et non $\pi\left(\int f\right)^2$.</p>`,
  '254d1knheuj': R`Calcule l'aire comprise entre $y = x^3$ et $y = ⟦0⟧x$ dans le premier quadrant.`,
  '6v6svg4kwp': R`Elles se coupent en $x = 0$ et $x = ⟦0⟧$. $\int_0^{⟦1⟧} (⟦2⟧x - x^3)\,dx = \frac{⟦3⟧(⟦4⟧)^2}{2} - \frac{⟦5⟧^4}{4} = ⟦6⟧$.`,
  '137eefen200': R`\pi\int_0^{⟦0⟧} x\,dx = \frac{\pi (⟦1⟧)^2}{2}`,
  '1minpuvvl2n': R`\pi\int_0^{⟦0⟧} x^2\,dx = \frac{\pi (⟦1⟧)^3}{3}`,
  's7flm3xrdz': R`\pi\int_0^{⟦0⟧} x^4\,dx = \frac{\pi (⟦1⟧)^5}{5}`,
  '217wjez6n7': R`La région sous $⟦0⟧$ pour $0 \le x \le ⟦1⟧$ tourne autour de l'axe des $x$. Calcule le volume en fonction de $\pi$.`,
  '1icurdoc4sc': R`Méthode des disques : $V = ⟦0⟧ = ⟦1⟧$.`,
  '2gj0lncwv9v': R`La région comprise entre $y = ⟦0⟧x$ et $y = x^2$ tourne autour de l'axe des $x$. Calcule le volume en fonction de $\pi$.`,
  '79trxd9ylt': R`Couronnes de rayon extérieur $⟦0⟧x$ et de rayon intérieur $x^2$ sur $[0 ; ⟦1⟧]$ : $V = \pi\int_0^{⟦2⟧} (⟦3⟧x^2 - x^4)\,dx = \pi\left(\frac{⟦4⟧}{3} - \frac{⟦5⟧}{5}\right) = ⟦6⟧$.`,
  '7u6xsm6kr0': R`Calcule la valeur moyenne de $f(x) = x^2$ sur $[0 ; ⟦0⟧]$.`,
  '14439tvneep': R`Calcule la valeur moyenne de $f(x) = ⟦0⟧$ sur $[⟦1⟧ ; ⟦2⟧]$.`,
  'ooxywxrn7m': R`La moyenne d'une fonction affine est sa valeur au milieu $x = ⟦0⟧$ : $⟦1⟧(⟦2⟧) ⟦3⟧ = ⟦4⟧$.`,
  'mptjdpftfn': R`Calcule la longueur d'arc de $y = \frac{2}{3}x^{3/2}$ de $x = 0$ à $x = ⟦0⟧$.`,
  'z00id81ez': R`$y' = x^{1/2}$, donc $L = \int_0^{⟦0⟧} \sqrt{1 + x}\,dx = \left[\frac{2}{3}(1 + x)^{3/2}\right]_0^{⟦1⟧} = \frac{2}{3}(⟦2⟧ - 1) = ⟦3⟧$.`,
  'lpjavqv13n': R`Un ressort a une raideur $k = ⟦0⟧$ N/m. Quel travail faut-il pour l'étirer de ⟦1⟧ m à partir de sa longueur au repos ?`,

  // series
  '1efhn95iov3': R`
<p>Une série $\sum a_n$ <b>converge</b> si ses sommes partielles $S_N = a_1 + \cdots + a_N$ tendent vers une limite finie.</p>
⟦0⟧
⟦1⟧
<h3>Séries entières et séries de Taylor</h3>
<p>Une série entière $\sum c_n (x - a)^n$ converge pour $|x - a| \lt R$, le <b>rayon de convergence</b> (on le trouve avec la règle de d'Alembert). La série de Taylor de $f$ en $a$ est $\sum \frac{f^{(n)}(a)}{n!}(x - a)^n$ ; en 0, on parle de série de Maclaurin.</p>
⟦2⟧
⟦3⟧`,
  '1fv7uha3bb4': R`Critère`,
  '1boy0ga8tbt': R`Conclusion`,
  '7ih7yeq8ue': R`Divergence grossière`,
  '1muum9p7rzf': R`si $a_n \not\to 0$, la série diverge`,
  '1ky8r0l0qv8': R`$\sum ar^n$ converge ssi $|r| \lt 1$ ; somme $\frac{a}{1 - r}$`,
  'rijv0gvehd': R`Série de Riemann`,
  '7fut7e3zun': R`$\sum \frac{1}{n^p}$ converge ssi $p \gt 1$`,
  '28h8cjdskg3': R`Comparaison`,
  '23c91vpuxqn': R`comparer à une série connue`,
  '1684r7a6bgw': R`Règle de d'Alembert`,
  'oc6lw933sm': R`$L = \lim\left|\frac{a_{n+1}}{a_n}\right|$ : $L \lt 1$ converge, $L \gt 1$ diverge`,
  '131362k70as': R`Série alternée`,
  '1ew5e8sa4g7': R`$\sum (-1)^n b_n$ converge si $b_n \downarrow 0$`,
  '12cxen3heke': R`<p><b>Série télescopique :</b> $\displaystyle\sum_{n=1}^{N}\frac{1}{n(n+1)} = \sum\left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{N+1}$, qui tend vers 1.</p>`,
  '1ql1d0zgkve': R`Série de Maclaurin`,
  '1arf5rbq565': R`Valable pour`,
  'oui4ssl2gv': R`tout x`,
  'kvkz0oqeo6': R`<p>$a_n \to 0$ est nécessaire mais pas suffisant : la série harmonique $\sum \frac{1}{n}$ diverge alors que $\frac{1}{n} \to 0$.</p>`,
  '16u2ienbhtn': R`Calcule $\displaystyle\sum_{n=⟦0⟧}^{\infty} ⟦1⟧\left(⟦2⟧\right)^n$.`,
  '1kgeq4tf48a': R`Géométrique de raison $r = ⟦0⟧$, $|r| \lt 1$, de premier terme $⟦1⟧$ : somme $= \frac{⟦2⟧}{1 - ⟦3⟧} = ⟦4⟧$.`,
  '1eiae773y4x': R`une série de Riemann avec $p = \frac{1}{2} \le 1$`,
  '1wok8okhtk9': R`la série harmonique ($p = 1$)`,
  '22u9pb285sv': R`une série de Riemann avec $p = \frac{3}{2} \gt 1$`,
  '204d6a8dcww': R`une série de Riemann avec $p = 2 \gt 1$`,
  '243y5j9lor6': R`la divergence grossière : $\frac{n}{n+1} \to 1 \ne 0$`,
  'ajpp0zqaap': R`le critère des séries alternées`,
  'wlawq7ztg6': R`la règle de d'Alembert : $\frac{3}{n+1} \to 0 \lt 1$`,
  '265645ebmpe': R`la règle de d'Alembert : $\frac{n+1}{2} \to \infty$`,
  '1lt7pp2ijz': R`une série géométrique avec $|r| = \frac{2}{3} \lt 1$`,
  '6goqsof3sp': R`une série géométrique avec $|r| = \frac{3}{2} \ge 1$`,
  '1d4bvtuk3gt': R`la comparaison avec $\sum\frac{1}{n^2}$`,
  '2846ssfmjxq': R`l'équivalence avec la série harmonique`,
  's3fpv9edn1': R`La série $\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$ converge-t-elle ou diverge-t-elle ?`,
  '1szqlme8ixw': R`Converge`,
  '1mr32mwk08w': R`Diverge`,
  '25wy0z8lea1': R`Elle converge (argument : ⟦0⟧).`,
  'zibgubfq': R`Elle diverge (argument : ⟦0⟧).`,
  'd893gqg85h': R`Trouve le coefficient de $x^{⟦0⟧}$ dans la série de Maclaurin de $⟦1⟧$.`,
  '2gib9c2xh5i': R`$e^u = \sum \frac{u^n}{n!}$ avec $u = ⟦0⟧$ : le coefficient est $\frac{(⟦1⟧)^{⟦2⟧}}{⟦3⟧!} = ⟦4⟧$.`,
  '1i7l7fodjgy': R`Trouve le coefficient de $x^{⟦0⟧}$ dans la série de Maclaurin de $\cos(⟦1⟧x)$.`,
  '27l5wjsmcqy': R`$\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \cdots$ avec $u = ⟦0⟧x$ : coefficient $= ⟦1⟧$.`,
  '13hswzoz6ds': R`Trouve le coefficient de $x^{⟦0⟧}$ dans la série de Maclaurin de $\dfrac{1}{1 ⟦1⟧x}$.`,
  '950amaqi7k': R`$\frac{1}{1 - u} = \sum u^n$ avec $u = ⟦0⟧$ : le coefficient de $x^{⟦1⟧}$ est $(⟦2⟧)^{⟦3⟧} = ⟦4⟧$.`,
  '12ohsobdns': R`Trouve le rayon de convergence de $\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$.`,
  'y2p3mhwix3': R`Règle de d'Alembert : $\left|\frac{a_{n+1}}{a_n}\right| \to \frac{|⟦0⟧|}{⟦1⟧}$. C'est inférieur à 1 quand $|⟦2⟧| \lt ⟦3⟧$, donc $R = ⟦4⟧$.`,
  '1hfprth485h': R`Calcule $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$.`,
  '24anbau0yh': R`Télescopique : $S_N = 1 - \frac{1}{N+1} \to 1$.`,
  'kcknro2xmq': R`Calcule $\displaystyle\sum_{n=1}^{⟦0⟧} \frac{1}{n(n+1)}$.`,
  'd2ku2hqqe6': R`$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$, donc la somme se télescope en $1 - \frac{1}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$.`,
  '2d09rr0z1dx': R`Quelle fonction a pour série de Maclaurin $\displaystyle ⟦0⟧$ ?`,
  '262p4pwoflz': R`C'est la série usuelle de $⟦0⟧$.`,

  // multivariable
  'elrzs4craq': R`
<p>Pour $f(x, y)$, la <b>dérivée partielle</b> $f_x = \frac{\partial f}{\partial x}$ dérive par rapport à $x$ en traitant $y$ comme une constante (et inversement pour $f_y$). Pour $f = x^2y^3$ : $f_x = 2xy^3$, $f_y = 3x^2y^2$.</p>
<h3>Gradient et dérivées directionnelles</h3>
⟦0⟧
<h3>Points critiques : test de la dérivée seconde</h3>
<p>En un point où $f_x = f_y = 0$, pose $D = f_{xx}f_{yy} - f_{xy}^2$.</p>
<ul><li>$D \gt 0$, $f_{xx} \gt 0$ : minimum local. &nbsp; $D \gt 0$, $f_{xx} \lt 0$ : maximum local.</li><li>$D \lt 0$ : point selle. &nbsp; $D = 0$ : le test ne permet pas de conclure.</li></ul>
<h3>Intégrales doubles</h3>
<p>Sur un rectangle, intègre une variable à la fois (Fubini) : $\displaystyle\int_0^2\!\!\int_0^3 xy\,dy\,dx = \int_0^2 \frac{9x}{2}\,dx = 9$. En coordonnées polaires, $dA = r\,dr\,d\theta$.</p>
<h3>Multiplicateurs de Lagrange</h3>
<p>Pour optimiser $f$ sous la contrainte $g = c$, résous $\nabla f = \lambda\nabla g$ avec la contrainte.</p>
⟦1⟧
⟦2⟧`,
  '1lpi0dcmqpt': R`$$\nabla f = \left(f_x ; f_y\right) \qquad D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u} \quad (|\mathbf{u}| = 1)$$<p>$\nabla f$ pointe dans la direction de plus forte croissance ; sa norme est ce taux maximal.</p>`,
  'opu0v1dwpl': R`<p>Maximise $f = xy$ sous la contrainte $x + y = 10$ : $(y ; x) = \lambda(1 ; 1)$ donne $x = y = 5$, donc le maximum vaut 25.</p>`,
  '83uqphqp8x': R`<p>En coordonnées polaires, n'oublie pas le facteur $r$ dans $dA = r\,dr\,d\theta$.</p>`,
  'oxpugv5o3o': R`Pour $f(x, y) = ⟦0⟧$, calcule $f_⟦1⟧(⟦2⟧ ; ⟦3⟧)$.`,
  '131ofsfpabh': R`$f_x = ⟦0⟧$, donc $f_x(⟦1⟧ ; ⟦2⟧) = ⟦3⟧$.`,
  'tma98sxgbh': R`$f_y = ⟦0⟧$, donc $f_y(⟦1⟧ ; ⟦2⟧) = ⟦3⟧$.`,
  '1894fvoucsb': R`Calcule $\nabla f(⟦0⟧ ; ⟦1⟧)$ pour $f(x, y) = ⟦2⟧$.`,
  '1mtqnuj8e72': R`Écris les deux composantes séparées par un point-virgule.`,
  '1wlrv45vn5z': R`$f_x = ⟦0⟧$, $f_y = ⟦1⟧$. En $⟦2⟧$ : $\nabla f = ⟦3⟧$.`,
  '280l4hqbl71': R`Calcule la dérivée directionnelle de $f(x, y) = ⟦0⟧$ en $⟦1⟧$ dans la direction de $⟦2⟧$.`,
  '23ij1mnh3qx': R`$\nabla f = (⟦0⟧ ; ⟦1⟧)$ et le vecteur unitaire est $\frac{1}{⟦2⟧}⟦3⟧$. $D_{\mathbf{u}}f = \frac{⟦4⟧(⟦5⟧) + ⟦6⟧(⟦7⟧)}{⟦8⟧} = ⟦9⟧$.`,
  '1gbu12sd7yr': R`Minimum local`,
  'tfsmpd4xkw': R`Maximum local`,
  '29jq1piqelp': R`Point selle`,
  '1knzmyv1q46': R`Le test ne conclut pas`,
  'uai27zrool': R`Détermine la nature du point critique $(0 ; 0)$ de $f(x, y) = ⟦0⟧$.`,
  'k6dc7gm5pm': R`$D \gt 0$ et $f_{xx} ⟦0⟧ 0$`,
  'scf747plq6': R`Calcule $\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} xy\,dy\,dx$.`,
  'scioeo7pw6': R`$\int_0^{⟦0⟧} xy\,dy = \frac{⟦1⟧x}{2}$, puis $\int_0^{⟦2⟧} \frac{⟦3⟧x}{2}\,dx = \frac{⟦4⟧ \cdot ⟦5⟧}{4} = ⟦6⟧$.`,
  'ktiyfy2vps': R`Calcule $\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} (x + y)\,dy\,dx$.`,
  'lgh3731wbd': R`$\int_0^{⟦0⟧} (x + y)\,dy = ⟦1⟧x + \frac{⟦2⟧}{2}$, puis $\int_0^{⟦3⟧} \left(⟦4⟧x + \frac{⟦5⟧}{2}\right)dx = \frac{⟦6⟧(⟦7⟧)^2}{2} + \frac{⟦8⟧(⟦9⟧)}{2} = ⟦10⟧$.`,
  '1oi548attkh': R`À l'aide des multiplicateurs de Lagrange (ou autrement), trouve le maximum de $f = xy$ sous la contrainte $x ⟦0⟧y = ⟦1⟧$, avec $x, y \gt 0$.`,
  'helueus42k': R`$\nabla f = \lambda\nabla g$ : $y = \lambda$, $x = ⟦0⟧\lambda$. Donc $x = ⟦1⟧y$ et $⟦2⟧y = ⟦3⟧$, d'où $y = ⟦4⟧$, $x = ⟦5⟧$ et $xy = ⟦6⟧$.`,
  '1c5ngt35a15': R`Calcule $\displaystyle\iint_D (x^2 + y^2)\,dA$, où $D$ est le disque $x^2 + y^2 \le ⟦0⟧$.`,
  'hl1el1t8oy': R`Coordonnées polaires : $\int_0^{2\pi}\!\int_0^{⟦0⟧} r^2 \cdot r\,dr\,d\theta = 2\pi \cdot \frac{⟦1⟧^4}{4} = ⟦2⟧$.`,

  // ode
  '29y4y4v6xas': R`
<p>Une <b>équation différentielle</b> relie une fonction à ses dérivées. Son <b>ordre</b> est celui de la dérivée la plus élevée qui y figure. La <b>solution générale</b> contient des constantes arbitraires ; des conditions initiales déterminent une solution particulière.</p>
<h3>Équations à variables séparables</h3>
⟦0⟧
<p>Cas particulier : $\frac{dy}{dt} = ky$ donne $y = y_0e^{kt}$ — croissance ($k \gt 0$) ou décroissance ($k \lt 0$) exponentielle. Avec une demi-vie $T$, la quantité restante est $N_0\left(\frac{1}{2}\right)^{t/T}$.</p>
<h3>Équations linéaires du premier ordre</h3>
⟦1⟧
<h3>Linéaires du second ordre à coefficients constants</h3>
<p>Pour $ay'' + by' + cy = 0$, essaie $y = e^{rx}$ : on obtient l'<b>équation caractéristique</b> $ar^2 + br + c = 0$.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'cqow3q58nr': R`<p>$\frac{dy}{dx} = 2xy$ : on sépare, $\int\frac{dy}{y} = \int 2x\,dx$, donc $\ln|y| = x^2 + C$ et $y = Ae^{x^2}$.</p>`,
  '24caer7vpv9': R`<p>Pour $y' + P(x)y = Q(x)$, multiplie par le <b>facteur intégrant</b> $\mu(x) = e^{\int P(x)\,dx}$. Alors $(\mu y)' = \mu Q$, donc $y = \frac{1}{\mu}\int \mu Q\,dx$.</p>`,
  '2fhw42v6h9r': R`Racines`,
  'mdry0kk339': R`Solution générale`,
  '1l55nwfgsi9': R`réelles distinctes $r_1, r_2$`,
  'fkai3ftnyj': R`double $r$`,
  '3w3x9xlope': R`complexes $\alpha \pm \beta i$`,
  '68uvb89pvs': R`<p>$y'' + 4y = 0$ : $r^2 + 4 = 0$, $r = \pm 2i$, donc $y = C_1\cos 2x + C_2\sin 2x$ — mouvement harmonique simple.</p>`,
  'vgovr9zohx': R`<p>Pour une racine double, $C_1e^{rx} + C_2e^{rx}$ n'est en fait qu'une seule solution ; le facteur supplémentaire $x$ donne la seconde.</p>`,
  '234p7duj3ts': R`$r^2 ⟦0⟧r ⟦1⟧ = 0$ a pour racines $r = ⟦2⟧$ et $r = ⟦3⟧$`,
  '1hssho6k9w6': R`$r^2 ⟦0⟧r + ⟦1⟧ = (r ⟦2⟧)^2 = 0$ a la racine double $r = ⟦3⟧$`,
  '2chd8d4gjpq': R`$r^2 ⟦0⟧r + ⟦1⟧ = 0$ a les racines complexes $r = ⟦2⟧ \pm ⟦3⟧i$`,
  '1ngxukqkkvf': R`Trouve la solution générale de $⟦0⟧$.`,
  'irmvhn9wve': R`L'équation caractéristique ⟦0⟧, donc ⟦1⟧.`,
  '5e0s1xl4f9': R`Un échantillon radioactif de ⟦0⟧ g a une demi-vie de ⟦1⟧ ans. Combien en reste-t-il au bout de ⟦2⟧ ans ?`,
  '2eo258s1sy7': R`$⟦0⟧$ ans font ⟦1⟧ demi-vies : $⟦2⟧\left(\frac{1}{2}\right)^{⟦3⟧} = ⟦4⟧$ g.`,
  '1btlmc6ms72': R`Résous l'équation à variables séparables $\dfrac{dy}{dx} = ⟦0⟧\,y$.`,
  'lgqvn6fqu1': R`$\int\frac{dy}{y} = \int ⟦0⟧\,dx$ donne $\ln|y| = ⟦1⟧ + C_0$, donc $y = Ce^{⟦2⟧}$.`,
  '1wp1r4xsb5y': R`Quel est le facteur intégrant de $y' + ⟦0⟧\,y = x^2$ ?`,
  '1d5o356dbul': R`La loi de refroidissement de Newton donne $T(t) = ⟦0⟧ + ⟦1⟧e^{-⟦2⟧t}$ (°C, $t$ en minutes). Trouve la température au bout de ⟦3⟧ minutes, à 1 décimale près.`,
  'uzon2x7fe4': R`\frac{dy}{dx} = x^2y`,
  '8swe0ei2mu': R`\frac{d^2y}{dx^2} + y = 0`,
  '28kd92q06yf': R`\frac{d^3y}{dx^3} - 2\frac{dy}{dx} = 0`,
  '1jgz4mikafn': R`Quel est l'ordre de l'équation différentielle $⟦0⟧$ ?`,
  'rxb07imi4n': R`L'ordre est celui de la dérivée la plus élevée : ici, c'est ⟦0⟧.`,
});
