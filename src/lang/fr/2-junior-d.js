/* Français — Collège (statistiques → similitude) */
addT('fr', {
  // statistics-jh
  '1gkv2j833s3': R`
<p>Un <b>indicateur de position</b> résume une série de données par une valeur typique ; un <b>indicateur de dispersion</b> dit à quel point les valeurs sont étalées.</p>
⟦0⟧
<h3>Moyenne à partir d’un tableau d’effectifs</h3>
⟦1⟧
⟦2⟧
<h3>Raisonner à l’envers</h3>
⟦3⟧
<p>Avec un nombre pair de valeurs, la médiane est la moyenne des deux valeurs centrales.</p>
⟦4⟧`,
  'zy4hmws2f9': R`À privilégier quand…`,
  'j0p0vvrwxf': R`les données n’ont pas de valeurs extrêmes (aberrantes)`,
  '2ajydntyvld': R`les données sont asymétriques ou ont des valeurs aberrantes — p. ex. prix des logements`,
  '1d4nmjapkp8': R`les données sont qualitatives — p. ex. couleur préférée`,
  '12wlbpcje5l': R`une idée rapide de la dispersion (mais sensible aux valeurs aberrantes)`,
  '21qgjzyanwp': R`⟦0⟧<p>$\sum f = 20$ et $\sum fx = 3 + 10 + 24 + 16 = 53$, donc la moyenne vaut $\frac{53}{20} = 2{,}65$. Le mode est 3 (plus grand effectif). La médiane est la moyenne des 10ᵉ et 11ᵉ valeurs — toutes deux égales à 3 — donc la médiane est 3.</p>`,
  '1j97et5mff': R`Note $x$`,
  'gm8elt7xjs': R`Effectif $f$`,
  '1rnz21lc9g1': R`<p>$\text{total} = \text{moyenne} \times \text{effectif}$. Si 5 nombres ont pour moyenne 12, leur total est 60 ; si quatre d’entre eux ont pour somme 47, le cinquième vaut 13.</p>`,
  '1ksrbyf4x6z': R`<p>Dans un tableau d’effectifs, divisez $\sum fx$ par l’effectif total $\sum f$, et non par le nombre de colonnes.</p>`,
  '15d8a2aae5e': R`Valeurs rangées : ⟦0⟧. Il y a ⟦1⟧ valeurs, donc la médiane est la moyenne des deux valeurs centrales : $\frac{⟦2⟧ + ⟦3⟧}{2} = ⟦4⟧$.`,
  '3npude2io3': R`Calculez la note moyenne à partir du tableau d’effectifs. Arrondissez à 2 décimales si nécessaire.⟦0⟧`,
  '1kkkmzzlb29': R`Note`,
  'nph0ner2hr': R`Effectif`,
  'c68abpawgf': R`$\sum f = ⟦0⟧$ et $\sum fx = ⟦1⟧ = ⟦2⟧$. Moyenne $= \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  'aevfr1f0xw': R`La moyenne de cinq nombres est ⟦0⟧. Quatre d’entre eux sont ⟦1⟧. Quel est le cinquième nombre ?`,
  '2ddgia0tp1j': R`Les cinq nombres ont pour total $5 \times ⟦0⟧ = ⟦1⟧$. Les quatre nombres connus ont pour somme ⟦2⟧, donc le cinquième vaut $⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '5e5w5tzrl1': R`Après ⟦0⟧ contrôles, la moyenne de Lucas est de ⟦1⟧. Après un contrôle de plus, sa moyenne est de ⟦2⟧. Quelle note a-t-il obtenue au dernier contrôle ?`,
  '23zlk0k5oq4': R`Total avant : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Total après : $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Dernière note $= ⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1tdgm1yju18': R`Quel est le mode des données de ce tableau ?⟦0⟧`,
  '2cqua50kina': R`Nombre de livres lus`,
  'ypw9p4zjlu': R`Nombre d’élèves`,
  '22iugjzjcbh': R`Le mode est la valeur de plus grand effectif. ⟦0⟧ a un effectif de ⟦1⟧, le plus grand.`,

  // probability-jh
  '1s529z7x9mx': R`
<p>Une <b>expérience aléatoire</b> (lancer un dé, tirer une carte) a des <b>issues</b> possibles. L’ensemble de toutes les issues est l’<b>univers</b> $S$ ; un <b>événement</b> $E$ est un ensemble d’issues. Quand toutes les issues sont équiprobables :</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Deux dés</h3>
<p>Lancer deux dés donne $6 \times 6 = 36$ issues équiprobables. Une somme de 7 s’obtient de 6 façons — (1 ; 6), (2 ; 5), (3 ; 4), (4 ; 3), (5 ; 2), (6 ; 1) — donc $P(\text{somme} = 7) = \frac{6}{36} = \frac{1}{6}$. En général, le nombre de façons d’obtenir une somme $s$ est $6 - |s - 7|$.</p>
<h3>Un jeu de cartes</h3>
<p>52 cartes : 4 couleurs (♠ ♣ noires, ♥ ♦ rouges) de 13 valeurs (A, 2–10, V, D, R). Il y a 12 figures (V, D, R).</p>
⟦3⟧`,
  '2zwk9a7b7o': R`<ul><li>$0 \le P(E) \le 1$ : 0 signifie impossible, 1 signifie certain.</li><li><b>Événement contraire :</b> $P(\text{non } E) = 1 - P(E)$.</li><li><b>Effectif attendu</b> sur $n$ essais $= P(E) \times n$.</li></ul>`,
  'sp7ttiactv': R`<p>Un sac contient 3 billes rouges, 5 bleues et 2 vertes. $P(\text{bleue}) = \frac{5}{10} = \frac{1}{2}$ et $P(\text{non verte}) = 1 - \frac{2}{10} = \frac{4}{5}$.</p>`,
  '1quguehv908': R`<p>La fréquence observée (issue d’essais réels) se rapproche de la probabilité théorique quand le nombre d’essais augmente — mais elle lui est rarement égale.</p>`,
  '2jkb08f2dg': R`rouge`,
  '1a43z74k2oy': R`bleue`,
  '1719de5b71t': R`verte`,
  '7kkile34lr': R`Un sac contient ⟦0⟧ boules rouges, ⟦1⟧ bleues et ⟦2⟧ vertes. On tire une boule au hasard. Quelle est la probabilité qu’elle soit ⟦3⟧ ?`,
  '26hhfp8us6o': R`Écrivez une fraction, par exemple 2/7.`,
  '34i4syx68n': R`$P(\text{⟦0⟧}) = \frac{\text{nombre de boules de couleur ⟦1⟧}}{\text{nombre total de boules}} = \frac{⟦2⟧}{⟦3⟧}⟦4⟧$.`,
  '17fighwohx4': R`On lance deux dés équilibrés. Quelle est la probabilité que la somme soit ⟦0⟧ ?`,
  '1zfipt2db8x': R`Écrivez une fraction, par exemple 5/36.`,
  '1xyubi5yqtq': R`Il y a 36 issues équiprobables, et une somme de ⟦0⟧ se produit dans ⟦1⟧ d’entre elles. $P = \frac{⟦2⟧}{36}⟦3⟧$.`,
  '2cy3xut293b': R`il pleut demain`,
  'lo67u7j66d': R`un bus est en retard`,
  '2dk6yd5lp5u': R`une graine germe`,
  '1cur3c8r655': R`une équipe gagne son prochain match`,
  '9jb4uxp8mo': R`La probabilité de l’événement « ⟦0⟧ » est ⟦1⟧. Quelle est la probabilité que cet événement <b>ne se produise pas</b> ?`,
  '1459jtc2vnw': R`$P(\text{non } E) = 1 - P(E) = 1 - ⟦0⟧ = ⟦1⟧$.`,
  '1m5z09mwtae': R`un six`,
  '2goj7cvo26g': R`un nombre pair`,
  '16jy1hpm8uh': R`un nombre supérieur à 4`,
  '9psh7q2zqv': R`un nombre premier`,
  'd1r3jk3fi5': R`un multiple de 3`,
  'pkpby3rsiu': R`On lance ⟦0⟧ fois un dé équilibré. Combien de fois peut-on s’attendre à obtenir ⟦1⟧ ?`,
  '1m2zbe7u1ww': R`$P = \frac{⟦0⟧}{6}$, donc l’effectif attendu est $\frac{⟦1⟧}{6} \times ⟦2⟧ = ⟦3⟧$.`,
  '1eipzgu94sk': R`un nombre inférieur à 3`,
  '1i6lu5hyvob': R`un diviseur de 6`,
  'uzgsjc3e5d': R`un nombre supérieur à 1`,
  '1u2i7hb5c5n': R`un carré parfait`,
  'rjfh61539i': R`On lance un dé équilibré à six faces. Quelle est la probabilité d’obtenir ⟦0⟧ ?`,
  '2a86ul8z5e6': R`Écrivez une fraction, par exemple 1/3.`,
  'wfhq8l2euu': R`Issues favorables : ⟦0⟧, soit ⟦1⟧ sur 6. $P = \frac{⟦2⟧}{6}⟦3⟧$.`,
  '1s7i7y0snm7': R`un cœur`,
  '1tvznlpjqb2': R`13 cœurs`,
  '19nwtn8arbx': R`un roi`,
  'gy4518kzl1': R`4 rois`,
  '207cuaz509r': R`une carte rouge`,
  '1qvhvp7e8k8': R`26 cartes rouges`,
  '1sakrbqn5x6': R`un roi rouge`,
  'c3s60n5sor': R`2 rois rouges`,
  '1671qt85c28': R`une figure (V, D ou R)`,
  '29hha1vs7b6': R`12 figures`,
  'pavjeefc8d': R`un as ou un roi`,
  '2cy5fpo3esg': R`4 as et 4 rois`,
  '1rpplt11syb': R`un 7 noir`,
  '13zshtnr8nq': R`le 7 de pique et le 7 de trèfle`,
  '71sptgg3ka': R`On tire une carte au hasard dans un jeu standard de 52 cartes. Quelle est la probabilité que ce soit ⟦0⟧ ?`,
  '1wkkibr9nk7': R`Écrivez une fraction, par exemple 1/13.`,
  '23r35ol6pkt': R`Il y a ⟦0⟧ parmi les 52 cartes : $P = \frac{⟦1⟧}{52} = ⟦2⟧$.`,

  // social-arith
  '28qmmxd3nnk': R`
<p>Les questions d’argent de la vie courante sont souvent des questions de pourcentages déguisées.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Remise et taxe</h3>
<p>Appliquez les pourcentages l’un après l’autre : une remise de 20 % puis une taxe de 10 % sur 150 euros donnent $150 \times 0{,}8 \times 1{,}1 = 132$ euros.</p>
<h3>Intérêts simples</h3>
⟦3⟧
<p>1 500 euros placés à 6 % par an pendant 3 ans rapportent $1\,500 \times 0{,}06 \times 3 = 270$ euros ; le total atteint 1 770 euros. Pour une durée en mois, prenez $t = \frac{\text{mois}}{12}$.</p>
<h3>Poids brut, tare et poids net</h3>
<p><b>Brut</b> = poids total ; <b>tare</b> = poids de l’emballage ; <b>net</b> = brut − tare. Un sac de 50 kg avec une tare de 2 % a un poids net de $50 \times 0{,}98 = 49$ kg.</p>
⟦4⟧`,
  '104nn3vx4at': R`Terme`,
  '1mb9fntmked': R`Prix d’achat (PA)`,
  '12bh5c74j0l': R`ce que le vendeur a payé`,
  'p4v89gjsks': R`Prix de vente (PV)`,
  'ixzwuufb5k': R`ce que l’acheteur paie`,
  '2dj314tvgil': R`Bénéfice`,
  '1b41ckd5mix': R`PV − PA (si PV > PA)`,
  '8exalr20f0': R`Perte`,
  '2acjs1v6cv9': R`PA − PV (si PV < PA)`,
  '8cl7h0h70q': R`$$\text{bénéfice en \%} = \frac{\text{bénéfice}}{\text{prix d'achat}} \times 100\% \qquad\qquad \text{PV} = \text{PA} \times \left(1 + \frac{p}{100}\right)$$`,
  '2251p3nt91s': R`<p>Un téléphone acheté 400 euros est revendu 460 euros. Bénéfice $= 60$, donc le pourcentage de bénéfice est $\frac{60}{400} \times 100\% = 15\%$.</p>`,
  '16966flk4n0': R`I = C \times t \times n \qquad \text{(capital} \times \text{taux annuel} \times \text{nombre d'années)}`,
  '8dx80n4t33': R`<p>Le pourcentage de bénéfice se calcule toujours par rapport au prix d’<b>achat</b>, pas au prix de vente.</p>`,
  'zmoygr0th3': R`Un commerçant achète un vélo ⟦0⟧ euros et le revend ⟦1⟧ euros. Quel est le pourcentage de bénéfice ?`,
  'hr5vewyo1d': R`Un commerçant achète un vélo ⟦0⟧ euros et le revend ⟦1⟧ euros. Quel est le pourcentage de perte ?`,
  'w2dibc5j0k': R`⟦0⟧ $= ⟦1⟧$. Pourcentage $= \frac{⟦2⟧}{⟦3⟧} \times 100\% = ⟦4⟧\%$.`,
  '1mg15vgrrsq': R`Un magasin achète une lampe ⟦0⟧ euros et veut réaliser un bénéfice de ⟦1⟧ %. À quel prix doit-il la vendre ?`,
  '1znpgx1zz3k': R`$\text{PV} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ euros.`,
  '1qynlkevtzf': R`pendant 1 an`,
  '265o2h9psz8': R`pendant ⟦0⟧ ans`,
  'z7uavwhcj6': R`On place ⟦0⟧ euros à intérêts simples au taux annuel de ⟦1⟧ % ⟦2⟧. Quel est le montant total à la fin ?`,
  '158pfsp5k1j': R`On place ⟦0⟧ euros à intérêts simples au taux annuel de ⟦1⟧ % ⟦2⟧. Combien d’intérêts obtient-on ?`,
  '35ywrebltu': R`$I = C t n = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ euros.⟦4⟧`,
  '26yfs6y8h5o': R` Total $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ euros.`,
  '11eyk8p87p8': R`Une paire de chaussures coûte ⟦0⟧ euros. On applique une remise de ⟦1⟧ %, puis une taxe de ⟦2⟧ % est ajoutée au prix remisé. Quel est le prix final ?`,
  '1ebjr2t3r5v': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, puis $\times ⟦3⟧ = ⟦4⟧$ euros.`,
  'j3cdki7hbr': R`Un sac de riz a un poids brut de ⟦0⟧ kg. La tare représente ⟦1⟧ % du poids brut. Quel est le poids net ?`,
  '91s53sp2z': R`Tare $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$ kg. Net $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ kg.`,
  '1kvwyquko78': R`Une montre est vendue ⟦0⟧ euros avec un bénéfice de ⟦1⟧ %. Quel était son prix d’achat ?`,
  'g36e4lpvm4': R`$\text{PV} = \text{PA} \times ⟦0⟧$, donc $\text{PA} = \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$ euros. (Retirer ⟦4⟧ % du prix de vente serait une erreur.)`,

  // patterns
  '2bajjwmyt59': R`
<p>Une <b>suite</b> est une liste ordonnée de nombres appelés <b>termes</b>. Trouver la règle permet de prolonger la suite ou d’aller directement à n’importe quel terme.</p>
<h3>Suites arithmétiques</h3>
<p>On ajoute chaque fois le même nombre $d$ (la <b>raison</b>) : 5 ; 8 ; 11 ; 14 ; … a pour raison $d = 3$.</p>
⟦0⟧
<h3>Suites géométriques</h3>
<p>Chaque terme est multiplié par la même <b>raison</b> $r$ : 3 ; 6 ; 12 ; 24 ; … ($r = 2$) ; 80 ; 40 ; 20 ; … ($r = \frac{1}{2}$).</p>
<h3>Suites particulières</h3>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '11v4eu8405a': R`$$u_n = a + (n - 1)d$$<p>où $a$ est le premier terme. Pour 5 ; 8 ; 11 ; … : $u_n = 5 + 3(n - 1) = 3n + 2$, donc $u_{50} = 152$.</p>`,
  '7gqysfvinh': R`Nom`,
  'mwgm16sn11': R`Termes`,
  '24evmkf6e6r': R`Terme de rang n`,
  'xt4guw3yrj': R`Carrés`,
  'l2hgs4w3i2': R`Cubes`,
  'lutv3xfjp0': R`Nombres triangulaires`,
  '2g9qzgo3ylf': R`Fibonacci`,
  'vjhbyyj0jc': R`chaque terme = somme des deux précédents`,
  'k4xtnyrrtm': R`<p>Quel terme de 7 ; 11 ; 15 ; … vaut 95 ? $u_n = 4n + 3 = 95$, donc $n = 23$ : c’est le 23ᵉ terme.</p>`,
  'sceh7pz7y9': R`<p>Le coefficient de $n$ dans la formule du terme de rang $n$ est la raison — pas le premier terme.</p>`,
  '73l5vk6u1l': R`Quel est le terme suivant de la suite ⟦0⟧ ; … ?`,
  '273m8h7rqm0': R`La raison est ⟦0⟧, donc le terme suivant est $⟦1⟧ ⟦2⟧ = ⟦3⟧$.`,
  'e7rskm3cuq': R`Calculez le terme $u_{⟦0⟧}$ de la suite ⟦1⟧ ; …`,
  '1zj05x9ucbg': R`Quelle formule donne le terme de rang n de la suite ⟦0⟧ ; … ?`,
  '10p4kmsov0h': R`Les termes augmentent de ⟦0⟧, donc la formule commence par $⟦1⟧n$. Pour $n = 1$, $⟦2⟧(1) + c = ⟦3⟧$ donne $c = ⟦4⟧$ : $u_n = ⟦5⟧$.`,
  'kmsujsbacm': R`Chaque terme est multiplié par ⟦0⟧, donc le terme suivant est $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '1tqcntwvtfu': R`Quel terme de la suite ⟦0⟧ ; … est égal à ⟦1⟧ ?`,
  '1i1kg83c5xj': R`$u_n = ⟦0⟧ + (n - 1) \times ⟦1⟧ = ⟦2⟧$, donc $(n - 1) \times ⟦3⟧ = ⟦4⟧$, $n - 1 = ⟦5⟧$ et $n = ⟦6⟧$.`,
  '1ru4k9e3ubn': R`Les nombres triangulaires sont 1 ; 3 ; 6 ; 10 ; 15 ; … Calculez le nombre triangulaire $T_{⟦0⟧}$.`,
  '1kom1e2tuqt': R`La suite 1 ; 4 ; 9 ; 16 ; 25 ; … continue. Calculez son terme $u_{⟦0⟧}$.`,
  '29es9j5bth6': R`Ce sont les carrés, $u_n = n^2$, donc $u_{⟦0⟧} = ⟦1⟧$.`,
  '1jl1l3ooto1': R`Dans une suite, chaque terme à partir du troisième est la somme des deux termes précédents. Les deux premiers termes sont ⟦0⟧ et ⟦1⟧. Quel est le 7ᵉ terme ?`,
  'o3oiu9pprw': R`Les termes sont ⟦0⟧. Le 7ᵉ terme est ⟦1⟧.`,

  // similarity
  '165d9zkx0zx': R`
<p>Une <b>transformation</b> déplace une figure ou change sa taille. Par une translation, une symétrie ou une rotation, l’image est <b>superposable</b> (même forme, même taille) ; par une homothétie, elle est <b>semblable</b> (même forme, taille différente).</p>
⟦0⟧
<h3>Figures semblables</h3>
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '8do2aamvnn': R`Transformation`,
  'jmpbrf5c1s': R`Règle pour un point (x ; y)`,
  '2b0j70wot2h': R`Translation de vecteur $\binom{a}{b}$`,
  '53ydgkbdv': R`Symétrie d’axe l’axe des $x$`,
  '1y0gzwc8g5l': R`Symétrie d’axe l’axe des $y$`,
  '2c65j86o1iv': R`Symétrie d’axe $y = x$`,
  '2az2vuuewqg': R`Rotation de $90^\circ$ dans le sens antihoraire, de centre O`,
  '1bwu4k8y4fc': R`Rotation de $180^\circ$ de centre O`,
  '24she08dmbo': R`Rotation de $90^\circ$ dans le sens horaire, de centre O`,
  '1kfzbnkpyo2': R`Homothétie de rapport $k$ et de centre O`,
  '1u5zflf6nl6': R`<p>Dans des figures semblables, les angles correspondants sont égaux et les côtés correspondants sont proportionnels, de <b>rapport</b> $k$. Les aires sont multipliées par $k^2$ et les volumes par $k^3$.</p>`,
  'f54rct691f': R`<p>Les triangles $ABC$ et $PQR$ sont semblables avec $AB = 6$, $BC = 8$ et $PQ = 9$. Rapport $k = \frac{9}{6} = 1{,}5$, donc $QR = 8 \times 1{,}5 = 12$. Si le triangle $ABC$ a une aire de 24, le triangle $PQR$ a une aire de $24 \times 1{,}5^2 = 54$.</p>`,
  '111he4idz8g': R`<p>Un poteau de 1,5 m projette une ombre de 2 m au moment où un arbre projette une ombre de 12 m. Les triangles sont semblables : $\frac{h}{12} = \frac{1{,}5}{2}$, donc $h = 9$ m.</p>`,
  '1ag7324gyvl': R`<p>Des côtés semblables diffèrent d’un <b>facteur multiplicatif</b>, pas d’une quantité fixe. Si un côté passe de 6 à 9, un côté de 8 passe à 12, et non à 11.</p>`,
  'grtkq2tz50': R`la symétrie d’axe l’axe des $x$`,
  '2b146agxtl5': R`la symétrie d’axe l’axe des $y$`,
  '12ufv3upbre': R`la symétrie d’axe la droite $y = x$`,
  '1efbacf7mos': R`la rotation de $90^\circ$ dans le sens antihoraire, de centre l’origine`,
  '2ettdugdvou': R`la rotation de $180^\circ$ de centre l’origine`,
  'y4ewc1f7tf': R`la rotation de $90^\circ$ dans le sens horaire, de centre l’origine`,
  '147bj1yruac': R`la translation de vecteur $⟦0⟧$`,
  'q8g4eu6egm': R`On applique au point $P⟦0⟧$ ⟦1⟧. Quelles sont les coordonnées de son image ?`,
  'px6a8rprin': R`Écrivez les coordonnées sous la forme x ; y.`,
  '199eqilp9e9': R`La règle est ⟦0⟧, donc l’image est $⟦1⟧$.`,
  '141nr4eramb': R`Les triangles $ABC$ et $PQR$ sont semblables, avec $AB \leftrightarrow PQ$, $BC \leftrightarrow QR$ et $CA \leftrightarrow RP$. On donne $AB = ⟦0⟧$, $BC = ⟦1⟧$, $CA = ⟦2⟧$ et $⟦3⟧ = ⟦4⟧$ ; calculez $⟦5⟧$.`,
  '1kimjtrunz7': R`Rapport $k = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$. Donc $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  'bj1shpkj9u': R`Deux solides semblables sont dans le rapport ⟦0⟧. Le plus petit a un volume de ⟦1⟧ cm³. Quel est le volume du plus grand ?`,
  'ld6jtpizu2': R`Les volumes sont multipliés par $k^3 = ⟦0⟧$ : $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '11duhh78e55': R`Deux figures semblables sont dans le rapport ⟦0⟧. La plus petite a une aire de ⟦1⟧ cm². Quelle est l’aire de la plus grande ?`,
  'hfezjn5dnm': R`Les aires sont multipliées par $k^2 = ⟦0⟧$ : $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '2eojcpktunl': R`Un bâton de ⟦0⟧ m projette une ombre de ⟦1⟧ m. Au même moment, un arbre projette une ombre de ⟦2⟧ m. Quelle est la hauteur de l’arbre ?`,
  '196fpe0msid': R`Les triangles sont semblables : $\frac{h}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$, donc $h = ⟦3⟧ \times \frac{⟦4⟧}{⟦5⟧} = ⟦6⟧$ m.`,
  '1iy8baeb4jd': R`On applique au point $⟦0⟧$ l’homothétie de centre l’origine et de rapport ⟦1⟧. Où se trouve son image ?`,
  '1fyw56nqicr': R`Multipliez les deux coordonnées par ⟦0⟧ : $(⟦1⟧ \times ⟦2⟧ ;\; ⟦3⟧ \times ⟦4⟧) = ⟦5⟧$.`,
});
