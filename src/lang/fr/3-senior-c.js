/* Français — Lycée (polynômes → intégrales) */
addT('fr', {
  // polynomials
  '1dv82xempy': R`
<p>Un <b>polynôme</b> est une somme de termes $a_n x^n + \cdots + a_1 x + a_0$ avec des exposants entiers naturels. Son <b>degré</b> est le plus grand exposant ; $a_n$ est le <b>coefficient dominant</b>. Quand on multiplie des polynômes, les degrés s’additionnent et les coefficients dominants se multiplient.</p>
<h3>Division</h3>
<p>Diviser $P(x)$ par $(x - a)$ donne un quotient $Q(x)$ et un reste $R$ : $P(x) = (x - a)Q(x) + R$. La <b>méthode de Horner</b> permet de le faire rapidement avec les seuls coefficients.</p>
⟦0⟧
⟦1⟧
<h3>Racines d’un polynôme de degré 3</h3>
<p>Pour $ax^3 + bx^2 + cx + d = 0$ de racines $r_1, r_2, r_3$ :</p>
⟦2⟧
⟦3⟧`,
  '16v6jrymjv2': R`<p>$(x^3 - 4x^2 + x + 6) \div (x - 2)$ par la méthode de Horner :</p>⟦0⟧<p>Quotient $x^2 - 2x - 3$, reste 0.</p>`,
  'agfsjitvd': R`<p><b>Théorème du reste :</b> le reste de la division de $P(x)$ par $(x - a)$ est $P(a)$.</p><p><b>Théorème du facteur :</b> $(x - a)$ divise $P(x)$ si et seulement si $P(a) = 0$.</p>`,
  'sqyu8zjvtn': R`<p>Diviser par $(x + 3)$ signifie $a = -3$ : calculez $P(-3)$, et non $P(3)$.</p>`,
  'u4dg9by4un': R`Calculez le reste de la division de $P(x) = ⟦0⟧$ par $(x ⟦1⟧)$.`,
  '212dl6gy5gu': R`D’après le théorème du reste, le reste vaut $P(⟦0⟧) = ⟦1⟧(⟦2⟧)^3 ⟦3⟧(⟦4⟧)^2 ⟦5⟧(⟦6⟧) ⟦7⟧ = ⟦8⟧$.`,
  '20swcfjanfa': R`$(x ⟦0⟧)$ est un facteur de $P(x) = ⟦1⟧$. Calculez $k$.`,
  '2cscisbqmyg': R`D’après le théorème du facteur, $P(⟦0⟧) = 0$ : $⟦1⟧ ⟦2⟧ ⟦3⟧k ⟦4⟧ = 0$, donc $⟦5⟧k = ⟦6⟧$ et $k = ⟦7⟧$.`,
  '28czzdou58n': R`Pour $ax^3 + bx^2 + cx + d = 0$, ⟦0⟧.`,
  '1uakfcji416': R`la somme des racines vaut $-\frac{b}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1cl4qeneyhq': R`le produit des racines vaut $-\frac{d}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1h1il3vuozs': R`Divisez $⟦0⟧$ par $(x ⟦1⟧)$. Quel est le quotient ?`,
  '1432prhuyml': R`La méthode de Horner avec ⟦0⟧ sur les coefficients ⟦1⟧ donne ⟦2⟧ et un reste nul, donc le quotient est $⟦3⟧$.`,
  '1v0pp8s5fwz': R`On considère $⟦0⟧$. Quel est le degré du produit ?`,
  '79jcaurtjl': R`On considère $⟦0⟧$. Quel est le coefficient dominant du produit ?`,
  'lgw9ke18qe': R`On considère $⟦0⟧$. Quel est le terme constant du produit ?`,
  '18bitz7l1ry': R`Les degrés s’additionnent : $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '1x77krhanqb': R`On multiplie les termes dominants : $⟦0⟧ \cdot ⟦1⟧ = ⟦2⟧$, donc le coefficient dominant est ⟦3⟧.`,
  '1uusi8yg5sk': R`Le terme constant est le produit des termes constants : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,

  // matrices
  '104wb071wss': R`
<p>Une <b>matrice</b> est un tableau rectangulaire de nombres. Une matrice $m \times n$ a $m$ lignes et $n$ colonnes ; $a_{ij}$ est le coefficient de la ligne $i$, colonne $j$.</p>
<h3>Opérations</h3>
<ul><li><b>Addition/soustraction</b> coefficient par coefficient (même taille uniquement).</li><li><b>Multiplication par un scalaire</b> : on multiplie chaque coefficient.</li><li><b>Produit</b> $AB$ : le coefficient $(i, j)$ est la ligne $i$ de $A$ « fois » la colonne $j$ de $B$. Il faut (colonnes de $A$) = (lignes de $B$), et une $m \times n$ fois une $n \times p$ donne une $m \times p$.</li></ul>
⟦0⟧
⟦1⟧
<h3>Déterminant et inverse (2 × 2)</h3>
⟦2⟧
<p>Si $\det A = 0$, la matrice n’est <b>pas inversible</b>. Les inverses permettent de résoudre des systèmes : $AX = B \Rightarrow X = A^{-1}B$.</p>
⟦3⟧`,
  '4bk6hc9is8': R`<p>Le produit matriciel n’est <b>pas commutatif</b> : en général $AB \ne BA$.</p>`,
  '4ckwr8umw4': R`<p>Pour l’inverse : <b>échangez</b> $a$ et $d$, <b>changez le signe</b> de $b$ et $c$, puis divisez par le déterminant.</p>`,
  '1h6gnxjh2g6': R`Calculez le déterminant de $⟦0⟧$.`,
  '1gfhimaac6g': R`Calculez $AB$ où $A = ⟦0⟧$ et $B = ⟦1⟧$.`,
  '1dy8pvpnep7': R`Écrivez les quatre coefficients ligne par ligne, par exemple 19 ; 22 ; 43 ; 50.`,
  'xfxhg5b3o2': R`Ligne fois colonne : $AB = \begin{pmatrix} ⟦0⟧\cdot⟦1⟧ + ⟦2⟧\cdot⟦3⟧ & \cdots \\ \cdots & \cdots \end{pmatrix} = ⟦4⟧$.`,
  '27lrdslcvs8': R`Calculez l’inverse de $⟦0⟧$.`,
  'ea7d95erhp': R`Écrivez les quatre coefficients ligne par ligne, séparés par des points-virgules.`,
  '2euzxos9ar7': R`$\det = (⟦0⟧)(⟦1⟧) - (⟦2⟧)(⟦3⟧) = ⟦4⟧$. On échange $a$ et $d$, on change le signe de $b$ et $c$, on divise par ⟦5⟧ : $⟦6⟧$.`,
  '2fs8fio5g5w': R`Pour quelle valeur de $x$ la matrice $⟦0⟧$ n’est-elle pas inversible ?`,
  'et7lf19q4x': R`Non inversible signifie $\det = 0$ : $⟦0⟧x - (⟦1⟧)(⟦2⟧) = 0$, donc $x = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '2280y15nq4f': R`$A = ⟦0⟧$ et $B = ⟦1⟧$. Calculez le coefficient ligne ⟦2⟧, colonne ⟦3⟧ de $⟦4⟧A - ⟦5⟧B$.`,
  'h3p6r4d6o': R`$A = ⟦0⟧$ et $B = ⟦1⟧$. Calculez le coefficient ligne ⟦2⟧, colonne ⟦3⟧ de $AB$.`,
  'xdj657lej': R`Ligne ⟦0⟧ de $A$ fois colonne ⟦1⟧ de $B$ : $⟦2⟧ = ⟦3⟧$. (Une matrice $2 \times 3$ fois une $3 \times 2$ donne une $2 \times 2$.)`,

  // vectors
  '1gljxtukffx': R`
<p>Un <b>vecteur</b> a une norme et une direction. En coordonnées, $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ ou $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$. Le vecteur de $P$ à $Q$ est $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  'i7t2goihqv': R`Norme`,
  '1czax49eh4c': R`Addition`,
  'q2ntocofkn': R`on additionne les coordonnées`,
  'oswzhgqxwz': R`Produit par un scalaire`,
  '1bnyaikchfp': R`$k\mathbf{a}$ : on multiplie chaque coordonnée par $k$`,
  '28hldv2q33s': R`Vecteur unitaire`,
  '214ftyeo0vg': R`Produit scalaire`,
  '1xghg9dwzeq': R`$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta \qquad\Longrightarrow\qquad \cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$<p>Deux vecteurs non nuls sont <b>orthogonaux</b> si et seulement si $\mathbf{a}\cdot\mathbf{b} = 0$.</p>`,
  '1w9baxb120w': R`<p>$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$ : $\mathbf{a}\cdot\mathbf{b} = 15 + 48 = 63$, $|\mathbf{a}| = 5$, $|\mathbf{b}| = 13$, donc $\cos\theta = \frac{63}{65}$ et $\theta \approx 14{,}3^\circ$.</p>`,
  '6pzkmdncqf': R`<p>Le produit scalaire de deux vecteurs est un <b>nombre</b>, pas un vecteur.</p>`,
  '4u2plhe47g': R`Calculez la norme de $⟦0⟧$.`,
  '252q8tpxn2p': R`Calculez $\mathbf{a}\cdot\mathbf{b}$ pour $\mathbf{a} = ⟦0⟧$ et $\mathbf{b} = ⟦1⟧$.`,
  '17ht25mwywu': R`Soit $\mathbf{a} = ⟦0⟧$ et $\mathbf{b} = ⟦1⟧$. Calculez $⟦2⟧\mathbf{a} ⟦3⟧ ⟦4⟧\mathbf{b}$.`,
  '2gdqizkyobq': R`Écrivez les coordonnées dans l’ordre, séparées par des points-virgules.`,
  '1mpyqj0mwgx': R`Coordonnée par coordonnée : $⟦0⟧ = ⟦1⟧$.`,
  '14p7yoy4f3a': R`Déterminez $k$ pour que $⟦0⟧$ et $⟦1⟧$ soient orthogonaux.`,
  '127php4kbc3': R`Orthogonaux signifie produit scalaire nul : $⟦0⟧k + (⟦1⟧)(⟦2⟧) = 0$, donc $k = ⟦3⟧$.`,
  '1kydmvss2ex': R`Calculez $\cos\theta$, où $\theta$ est l’angle entre $⟦0⟧$ et $⟦1⟧$.`,
  '1b0azawmrlf': R`Déterminez le vecteur unitaire de même direction et de même sens que $⟦0⟧$.`,
  '280s3ajjt4e': R`Écrivez les coordonnées séparées par un point-virgule, par exemple 3/5 ; -4/5.`,
  '22ii0i40ri': R`$|\mathbf{v}| = ⟦0⟧$. On divise chaque coordonnée par ⟦1⟧ : $\hat{\mathbf{v}} = ⟦2⟧$.`,

  // limits
  '239kmg9x5mj': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$ signifie que $f(x)$ devient aussi proche qu’on veut de $L$ quand $x$ tend vers $a$ — quoi qu’il se passe exactement en $x = a$.</p>
<h3>Méthodes</h3>
<ol><li><b>Substitution directe</b> : elle marche pour les polynômes et les autres fonctions continues : $\lim_{x \to 2}(x^2 + 3x) = 10$.</li><li><b>Factoriser et simplifier</b> face à $\frac{0}{0}$ : $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$.</li><li><b>Utiliser la quantité conjuguée</b> pour les expressions avec racines.</li></ol>
⟦0⟧
<h3>Limites en l’infini</h3>
⟦1⟧
<h3>Une limite trigonométrique remarquable</h3>
⟦2⟧
<h3>Continuité</h3>
<p>$f$ est continue en $a$ si $\lim_{x \to a} f(x) = f(a)$ : ni trou, ni saut, ni asymptote en ce point. Pour une fonction définie par morceaux, les deux morceaux doivent se raccorder.</p>
⟦3⟧`,
  '25jnb5snm7z': R`<p>Pour une fonction rationnelle, divisez le numérateur et le dénominateur par la plus grande puissance de $x$ du dénominateur :</p><ul><li>même degré → quotient des coefficients dominants ;</li><li>numérateur de degré inférieur → 0 ;</li><li>numérateur de degré supérieur → pas de limite finie ($\pm\infty$).</li></ul>`,
  'extw7corym': R`<p>$\frac{0}{0}$ ne vaut ni « 0 » ni « non défini » : c’est une forme indéterminée qui demande plus de travail (factoriser, quantité conjuguée).</p>`,
  '18znpgymeuk': R`Calculez $\displaystyle\lim_{x \to ⟦0⟧} (⟦1⟧)$.`,
  '1tq4b7d4h53': R`C’est un polynôme, on substitue : $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧$.`,
  '1n96bgorw1d': R`Calculez $\displaystyle\lim_{x \to ⟦0⟧} \frac{⟦1⟧}{x ⟦2⟧}$.`,
  '295o4zt7f3w': R`La substitution donne $\frac{0}{0}$. On factorise : $\frac{(x ⟦0⟧)(x ⟦1⟧)}{x ⟦2⟧} = x ⟦3⟧$, donc la limite vaut $⟦4⟧ ⟦5⟧ = ⟦6⟧$.`,
  '1rjdd048rzk': R`Calculez $\displaystyle\lim_{x \to \infty} \frac{⟦0⟧}{⟦1⟧}$.`,
  '229ply6f2l2': R`Le numérateur est de degré inférieur au dénominateur ; en divisant par $x^2$, chaque terme du numérateur tend vers 0, donc la limite vaut $0$.`,
  '1m8u7pc3qh1': R`Même degré, donc la limite est le quotient des coefficients dominants : $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  '1ynpy6v2s15': R`Calculez $\displaystyle\lim_{x \to 0} \frac{⟦0⟧}{⟦1⟧}$.`,
  'if95qf815v': R`On utilise $\frac{\sin u}{u} \to 1$ (et $\frac{\tan u}{u} \to 1$) : l’expression se comporte comme $\frac{⟦0⟧x}{⟦1⟧x} = ⟦2⟧$.`,
  'blyu2go12i': R`Calculez $\displaystyle\lim_{x \to 0} \frac{\sqrt{x + ⟦0⟧} - ⟦1⟧}{x}$.`,
  'fj8u70cngg': R`On multiplie par la quantité conjuguée : $\frac{(x + ⟦0⟧) - ⟦1⟧}{x(\sqrt{x + ⟦2⟧} + ⟦3⟧)} = \frac{1}{\sqrt{x + ⟦4⟧} + ⟦5⟧} \to \frac{1}{⟦6⟧}$.`,
  '1kmmd6tilgi': R`Déterminez $k$ pour que $f(x) = \begin{cases} x^2 + k, & x \lt ⟦0⟧ \\ ⟦1⟧, & x \ge ⟦2⟧ \end{cases}$ soit continue en $x = ⟦3⟧$.`,
  '1l84k7ifkz6': R`Les morceaux doivent se raccorder en $x = ⟦0⟧$ : $(⟦1⟧)^2 + k = ⟦2⟧(⟦3⟧) ⟦4⟧$, donc $⟦5⟧ + k = ⟦6⟧$ et $k = ⟦7⟧$.`,

  // derivatives
  '1pv2wkwyvwg': R`
<p>La <b>dérivée</b> $f'(x)$ est le taux de variation instantané de $f$ — la pente de la tangente en $x$. Elle est définie par une limite :</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Tangentes</h3>
<p>En $x = a$, la tangente a pour pente $m = f'(a)$ et passe par $(a ; f(a))$ : $y - f(a) = f'(a)(x - a)$.</p>
<h3>Points critiques</h3>
<p>Là où $f'(x) = 0$, la courbe est momentanément horizontale. Utilisez la dérivée seconde : $f''(a) \gt 0$ → minimum local ; $f''(a) \lt 0$ → maximum local. $f$ est croissante là où $f' \gt 0$ et décroissante là où $f' \lt 0$.</p>
<h3>Optimisation</h3>
⟦3⟧
⟦4⟧`,
  '1kddytp99dm': R`Règles`,
  '21wooetnwi8': R`<p>100 m de clôture entourent un rectangle le long d’une rivière (pas de clôture côté rivière). Avec les côtés $x, y, x$ : $2x + y = 100$, aire $A = x(100 - 2x)$. $A'(x) = 100 - 4x = 0$ donne $x = 25$, donc $A_{\max} = 25 \times 50 = 1250$ m².</p>`,
  '14x6kebc9en': R`<p>La dérivée d’une constante est 0 — ne gardez pas le terme constant dans $f'(x)$.</p>`,
  'sk165jmy0e': R`Calculez $f'(x)$ pour $f(x) = ⟦0⟧$.`,
  '1z8enx6jmxw': R`On dérive chaque terme avec la règle des puissances : $f'(x) = ⟦0⟧$ (la constante disparaît).`,
  'rdfbrjf6fd': R`Soit $f(x) = ⟦0⟧$. Calculez $f'(⟦1⟧)$.`,
  '12fn6a7y0fo': R`$f'(x) = ⟦0⟧$, donc $f'(⟦1⟧) = ⟦2⟧$.`,
  '13xytl77ctg': R`Déterminez l’équation de la tangente à $y = ⟦0⟧$ en $x = ⟦1⟧$.`,
  'zxpf5t25tk': R`Pente : $y' = 2x ⟦0⟧$, donc $m = ⟦1⟧$ en $x = ⟦2⟧$. Point : $(⟦3⟧ ; ⟦4⟧)$. Alors $y - ⟦5⟧ = ⟦6⟧(x - ⟦7⟧)$, soit $y = ⟦8⟧$.`,
  '6or380e65b': R`$x = ⟦0⟧ \text{ et } x = ⟦1⟧$`,
  '1ib3oh8we5r': R`Déterminez les abscisses des points critiques de $f(x) = ⟦0⟧$.`,
  '8cxs5u8eb2': R`$f'(x) = ⟦0⟧ = 3(x ⟦1⟧)(x ⟦2⟧) = 0$, donc $x = ⟦3⟧$ ou $x = ⟦4⟧$.`,
  '2diynqfs1vm': R`Pour quelle valeur de $x$ la fonction $f(x) = ⟦0⟧$ admet-elle un minimum local ?`,
  'qiab8fav1k': R`$f'(x) = 3(x ⟦0⟧)(x ⟦1⟧)$ s’annule en $x = ⟦2⟧$ et $x = ⟦3⟧$. $f''(x) = 6x ⟦4⟧$ est positive en $x = ⟦5⟧$, c’est donc le minimum local.`,
  '2bfp82dmoiw': R`Un agriculteur dispose de ⟦0⟧ m de clôture pour entourer un champ rectangulaire le long d’une rivière rectiligne. Aucune clôture n’est nécessaire le long de la rivière. Quelle est l’aire maximale possible ?`,
  '1sgjbqwzp29': R`Côtés $x, y, x$ avec $2x + y = ⟦0⟧$. $A = x(⟦1⟧ - 2x)$, $A' = ⟦2⟧ - 4x = 0$ donne $x = ⟦3⟧$, $y = ⟦4⟧$ et $A = ⟦5⟧$ m².`,
  '1dz6162q97e': R`Un rectangle a un périmètre de ⟦0⟧ cm. Quelle est son aire maximale ?`,
  '12er060agfx': R`Avec une largeur $x$, la longueur vaut $⟦0⟧ - x$ et $A = x(⟦1⟧ - x)$. $A' = ⟦2⟧ - 2x = 0$ donne $x = ⟦3⟧$ — un carré — d’aire $⟦4⟧$ cm².`,
  'jksdr4ukrw': R`Dérivez $y = ⟦0⟧$.`,
  '1gytk3lwm2l': R`$\frac{d}{dx}\sin x = \cos x$ et $\frac{d}{dx}\cos x = -\sin x$, donc $y' = ⟦0⟧$.`,
  't51ufxvzbf': R`Un point mobile a pour position $s(t) = ⟦0⟧$ mètres. Calculez son accélération à $t = ⟦1⟧$ s.`,
  'bakv4or3q9': R`$v(t) = s'(t) = ⟦0⟧$ et $a(t) = v'(t) = ⟦1⟧$. À $t = ⟦2⟧$ : $a = ⟦3⟧$ m/s².`,
  'twj64cwqj6': R`Un point mobile a pour position $s(t) = ⟦0⟧$ mètres. Calculez sa vitesse à $t = ⟦1⟧$ s.`,
  '1yi10f0kgm7': R`$v(t) = s'(t) = ⟦0⟧$, donc $v(⟦1⟧) = ⟦2⟧$ m/s.`,

  // integrals
  '1wdt9h7s66j': R`
<p>L’intégration est l’opération inverse de la dérivation. Une <b>primitive</b> de $f$ est une fonction $F$ telle que $F' = f$ ; l’<b>intégrale indéfinie</b> comprend la constante d’intégration :</p>
⟦0⟧
⟦1⟧
<h3>Intégrales définies</h3>
⟦2⟧
<p>Si $f \ge 0$, c’est l’aire sous la courbe entre $x = a$ et $x = b$. L’aire sous l’axe des $x$ compte négativement : coupez l’intégrale aux racines pour obtenir l’aire totale.</p>
⟦3⟧
<h3>Retrouver une fonction à partir de sa dérivée</h3>
<p>Si $f'(x) = 6x + 2$ et $f(1) = 10$, alors $f(x) = 3x^2 + 2x + C$ et $3 + 2 + C = 10$ donne $C = 5$.</p>
⟦4⟧`,
  '20z1821bwrr': R`<p>$\int (6x^2 - 4x + 3)\,dx = 2x^3 - 2x^2 + 3x + C$. Vérifiez en dérivant.</p>`,
  '1jsx5j8bwuv': R`Théorème fondamental de l’analyse`,
  'k8jg70602j': R`<p>Aire entre $y = x^2$ et $y = 2x$ : elles se coupent en $x = 0$ et $x = 2$, et $2x \ge x^2$ entre les deux, donc $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.</p>`,
  '2645ntoenmj': R`<p>N’oubliez pas le $+ C$ dans les intégrales indéfinies — et ne le mettez pas dans les intégrales définies (il s’élimine).</p>`,
  '1a4h4aolv1n': R`Calculez $\displaystyle\int (⟦0⟧)\,dx$.`,
  '14w03nftsp9': R`On augmente chaque exposant de 1 et on divise par le nouvel exposant : $⟦0⟧ + C$.`,
  'lhk659hv1w': R`Calculez $\displaystyle\int_{⟦0⟧}^{⟦1⟧} (⟦2⟧)\,dx$.`,
  'wzkchwuid3': R`Une primitive est $F(x) = ⟦0⟧$. $F(⟦1⟧) - F(⟦2⟧) = ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '2g5117b4rfq': R`Calculez l’aire délimitée par $y = ⟦0⟧$ et l’axe des $x$.`,
  '1qd8emk0tlu': R`La courbe coupe l’axe en $x = \pm ⟦0⟧$. Aire $= \int_{-⟦1⟧}^{⟦2⟧} (⟦3⟧ - x^2)\,dx = \left[⟦4⟧x - \frac{x^3}{3}\right]_{-⟦5⟧}^{⟦6⟧} = ⟦7⟧$.`,
  '1wjuv7zitnn': R`Calculez l’aire du domaine compris entre $y = x^2$ et $y = ⟦0⟧x$.`,
  'ospw7lwugt': R`Elles se coupent en $x = 0$ et $x = ⟦0⟧$. Aire $= \int_0^{⟦1⟧} (⟦2⟧x - x^2)\,dx = \frac{⟦3⟧^3}{2} - \frac{⟦4⟧^3}{3} = ⟦5⟧$.`,
  '2c9m4g6dimy': R`$f'(x) = ⟦0⟧$ et $f(0) = ⟦1⟧$. Calculez $f(⟦2⟧)$.`,
  '29kyl7mnwt5': R`$f(x) = ⟦0⟧ + C$, et $f(0) = C = ⟦1⟧$. Donc $f(⟦2⟧) = ⟦3⟧$.`,
  '1p83y3ccpb': R`$\int \cos x\,dx = \sin x$ et $\int -\sin x\,dx = \cos x$, donc le résultat est $⟦0⟧ + C$.`,
  '22xlapf2gb7': R`Calculez $\displaystyle\int_0^{\pi/2} ⟦0⟧\cos x\,dx$.`,
  '1ppkvfv3p1b': R`Calculez $\displaystyle\int_0^{\pi} ⟦0⟧\sin x\,dx$.`,
  // formula-only entries
  'itm4o8cny': R`\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}`,
  '25hetn68fsz': R`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`,
  '1i9j07wofgh': R`\lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \lim_{x \to 0}\frac{\sin ax}{bx} = \frac{a}{b}`,
  '21rfw9yowzp': R`$$\frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}c = 0 \qquad \frac{d}{dx}\big(af + bg\big) = af' + bg'$$$$\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x$$`,
  'oq0mo2ln2m': R`$$\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C \quad (n \ne -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$$$\int \cos x\,dx = \sin x + C \qquad \int \sin x\,dx = -\cos x + C$$`,
  'ktnrryzzqc': R`$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$`,
});
