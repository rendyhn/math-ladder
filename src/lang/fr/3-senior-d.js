/* Français — Lycée (dénombrement → logique) */
addT('fr', {
  // combinatorics
  '205beb6gfix': R`
⟦0⟧
<h3>Arrangements : l’ordre compte</h3>
⟦1⟧
<p>Premier, deuxième et troisième prix parmi 10 personnes : $^{10}P_3 = 10 \times 9 \times 8 = 720$.</p>
<ul><li>Anagrammes avec lettres répétées : $\frac{n!}{p!\,q!\cdots}$. « BANANA » a $\frac{6!}{3!\,2!} = 60$ anagrammes.</li><li>Autour d’une table ronde : $(n - 1)!$ (les rotations comptent comme identiques).</li></ul>
<h3>Combinaisons : l’ordre ne compte pas</h3>
⟦2⟧
<p>Un comité de 3 personnes parmi 10 : $\binom{10}{3} = 120$. Un comité de 2 hommes (parmi 5) et 3 femmes (parmi 6) : $\binom{5}{2}\binom{6}{3} = 10 \times 20 = 200$.</p>
<h3>Formule du binôme</h3>
⟦3⟧
<p>Le coefficient de $x^2$ dans $(x + 3)^5$ est $\binom{5}{2}3^{3} = 270$.</p>
⟦4⟧`,
  '1v1ul4mcyis': R`<p><b>Principe multiplicatif :</b> si un premier choix peut se faire de $m$ façons et un second de $n$ façons, les deux ensemble peuvent se faire de $m \times n$ façons.</p>`,
  'zol45txfa7': R`^nP_r = \frac{n!}{(n - r)!} \qquad n! = n \times (n-1) \times \cdots \times 1, \quad 0! = 1`,
  '1mk1wwf7o0g': R`^nC_r = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}`,
  '44tf1m2pka': R`<p>Demandez-vous : « échanger deux éléments choisis donne-t-il un résultat différent ? » Si oui, ce sont des arrangements ; sinon, des combinaisons.</p>`,
  'asaw2vy5ho': R`De combien de façons peut-on attribuer les prix (⟦0⟧) parmi ⟦1⟧ personnes ?`,
  '1qec64m00zt': R`premier, deuxième et troisième`,
  '1yxzw7y67ed': R`premier et deuxième`,
  '1lyu4ddmyjw': R`L’ordre compte : $^{⟦0⟧}P_{⟦1⟧} = ⟦2⟧ = ⟦3⟧$.`,
  'mt1d3k54sw': R`De combien de façons peut-on choisir un comité de ⟦0⟧ personnes parmi ⟦1⟧ ?`,
  'jcb5dbxzw7': R`L’ordre ne compte pas : $\binom{⟦0⟧}{⟦1⟧} = \frac{⟦2⟧!}{⟦3⟧!\,⟦4⟧!} = ⟦5⟧$.`,
  '1f3hbyul4kh': R`On choisit un comité de ⟦0⟧ hommes et ⟦1⟧ femmes parmi ⟦2⟧ hommes et ⟦3⟧ femmes. Combien de comités différents sont possibles ?`,
  '219eq0t6hby': R`Combien d’anagrammes différentes peut-on former avec les lettres du mot <b>⟦0⟧</b> ?`,
  'hkyvcodvcm': R`⟦0⟧ lettres avec répétitions ⟦1⟧ : $\frac{⟦2⟧!}{⟦3⟧} = ⟦4⟧$.`,
  'qqcdrtkh5v': R`De combien de façons peut-on asseoir ⟦0⟧ personnes autour d’une table ronde (les rotations comptent comme identiques) ?`,
  '1n6howxe7gj': R`On fixe la place d’une personne pour éliminer les rotations, puis on place les autres : $(⟦0⟧ - 1)! = ⟦1⟧$.`,
  '1hwymhgsxow': R`Déterminez le coefficient de $x^{⟦0⟧}$ dans le développement de $(x + ⟦1⟧)^{⟦2⟧}$.`,
  '22kaf86ykzl': R`Le terme en $x^{⟦0⟧}$ est $\binom{⟦1⟧}{⟦2⟧}x^{⟦3⟧}\cdot ⟦4⟧^{⟦5⟧}$, donc le coefficient vaut $⟦6⟧ \times ⟦7⟧ = ⟦8⟧$.`,
  '1zya3uq0ode': R`Déterminez le coefficient de $x^{⟦0⟧}$ dans le développement de $(⟦1⟧x + 1)^{⟦2⟧}$.`,
  'po66a6fw7b': R`Le terme en $x^{⟦0⟧}$ est $\binom{⟦1⟧}{⟦2⟧}(⟦3⟧x)^{⟦4⟧}$, donc le coefficient vaut $⟦5⟧ \times ⟦6⟧ = ⟦7⟧$.`,
  'yh0td3xino': R`Vous avez ⟦0⟧ chemises, ⟦1⟧ pantalons et ⟦2⟧ paires de chaussures. Combien de tenues différentes (une pièce de chaque) pouvez-vous composer ?`,
  'ruo6vpaqqc': R`Principe multiplicatif : $⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '24djh3i5509': R`Combien de codes PIN à ⟦0⟧ chiffres peut-on former avec les chiffres 0 à 9 ⟦1⟧ ?`,
  '1djueshnkes': R`si les chiffres peuvent se répéter`,
  'jadsq7o4xb': R`si aucun chiffre ne peut être utilisé deux fois`,
  '22ey7x4a0ix': R`Chacune des ⟦0⟧ positions a 10 possibilités : $10^{⟦1⟧} = ⟦2⟧$.`,
  'g50ag8cs5t': R`$10 \times 9 \times \cdots$ (⟦0⟧ facteurs) $= ⟦1⟧$.`,

  // probability-sh
  '1uh8iajnkq0': R`
⟦0⟧
<h3>Avec et sans remise</h3>
⟦1⟧
<p>Les arbres de probabilité organisent ces calculs : on multiplie le long des branches et on additionne entre les branches.</p>
<h3>« Au moins un »</h3>
<p>On passe par l’événement contraire : $P(\text{au moins un six en 3 lancers}) = 1 - \left(\frac{5}{6}\right)^3 = \frac{91}{216}$.</p>
<h3>Formule de Bayes</h3>
⟦2⟧
⟦3⟧`,
  '2e5fwx8zs1w': R`Formule`,
  '29i7n2pf82k': R`Événement contraire`,
  '1q1cgu220ce': R`Incompatibles`,
  'xux9y4rrwd': R`$P(A \cap B) = 0$, donc $P(A \cup B) = P(A) + P(B)$`,
  'rl5n9i6yyd': R`Indépendants`,
  '1oou6k826kr': R`Conditionnelle`,
  '1qgmh66fhna': R`<p>Un sac contient 5 boules rouges et 3 bleues. On en tire deux <b>sans</b> remise. $P(\text{deux rouges}) = \frac{5}{8} \times \frac{4}{7} = \frac{5}{14}$. Avec remise, on aurait $\frac{5}{8} \times \frac{5}{8} = \frac{25}{64}$.</p>`,
  '6418q9b2s4': R`$$P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B \mid A)P(A) + P(B \mid A')P(A')}$$<p>Elle « inverse » une probabilité conditionnelle — par exemple, de $P(\text{test positif} \mid \text{maladie})$ à $P(\text{maladie} \mid \text{test positif})$.</p>`,
  '1zp2m1asa8t': R`<p>$P(A \mid B)$ et $P(B \mid A)$ sont en général différentes. Un test peut être fiable à 99 % et un résultat positif peut quand même être plus probablement une fausse alerte quand la maladie est rare.</p>`,
  '5fmcyqy5g8': R`Un sac contient ⟦0⟧ boules rouges et ⟦1⟧ bleues. On tire deux boules sans remise. Quelle est la probabilité que les deux soient de couleur ⟦2⟧ ?`,
  '16uk5urbde9': R`$P(A) = ⟦0⟧$, $P(B) = ⟦1⟧$ et $P(A \cap B) = ⟦2⟧$. Calculez $P(A \cup B)$.`,
  '2az4z9znymk': R`Les événements $A$ et $B$ sont indépendants, avec $P(A) = ⟦0⟧$ et $P(B) = ⟦1⟧$. Calculez $P(A \cap B)$.`,
  '1ohoi8ye65': R`Indépendants : $P(A \cap B) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,
  'ymjaeaaedm': R`Les événements $A$ et $B$ sont indépendants, avec $P(A) = ⟦0⟧$ et $P(B) = ⟦1⟧$. Calculez la probabilité qu’au moins l’un des deux se produise.`,
  'y6o9k7peax': R`$1 - P(\text{aucun des deux}) = 1 - (⟦0⟧)(⟦1⟧) = ⟦2⟧$.`,
  '2ct3qu61tjb': R`Garçons`,
  '2402etzr9nx': R`Filles`,
  '18ehauvt7sj': R`Fait du sport`,
  '1wnwpnaqcse': R`Pas de sport`,
  'hlkdm5jkod': R`Seconde`,
  '25bc5gb05vn': R`Première`,
  '1i4vzjjdcmk': R`Va à l’école à pied`,
  '26ih1igl5gl': R`Prend le bus`,
  '2bybvgum1tw': R`Adultes`,
  '1lglnmdikqt': R`Enfants`,
  'xfv76cldjt': R`Aime le café`,
  'yxuw13xcv3': R`N’aime pas`,
  '1mojcap1eui': R`Un sondage a donné ces résultats.⟦0⟧On choisit une personne au hasard. Sachant qu’elle appartient au groupe « ⟦1⟧ », quelle est la probabilité qu’elle appartienne à « ⟦2⟧ » ?`,
  '1461hv2wfqt': R`On se restreint aux ⟦0⟧ personnes de « ⟦1⟧ » : $P = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  '12180tm9why': R`Un sondage a donné ces résultats.⟦0⟧On choisit une personne au hasard. Sachant qu’elle appartient à « ⟦1⟧ », quelle est la probabilité qu’elle appartienne au groupe « ⟦2⟧ » ?`,
  'eppqyrg22a': R`On lance ⟦0⟧ fois un dé équilibré. Quelle est la probabilité d’obtenir au moins un six ?`,
  'wzrge9rclz': R`$1 - P(\text{aucun six}) = 1 - \left(\frac{5}{6}\right)^{⟦0⟧} = 1 - \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$.`,
  '1sg12en11ty': R`Une maladie touche ⟦0⟧ % des personnes. Un test la détecte chez ⟦1⟧ % des malades, mais donne aussi un résultat positif chez ⟦2⟧ % des personnes non malades. Si quelqu’un est testé positif, quelle est la probabilité qu’il soit malade ? Arrondissez à 3 décimales.`,
  '1n6kg7z10yy': R`Un sac contient ⟦0⟧ jetons rouges et ⟦1⟧ bleus. On tire un jeton, on le remet, puis on en tire un second. Quelle est la probabilité d’obtenir rouge puis bleu ?`,
  '29cd8gay3w4': R`Avec remise, les tirages sont indépendants : $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,

  // statistics-sh
  '1xab92vueba': R`
<h3>Quartiles et diagrammes en boîte</h3>
<p>Rangez les données. La médiane $Q_2$ les partage en deux ; $Q_1$ est la médiane de la moitié inférieure et $Q_3$ celle de la moitié supérieure (ici, on exclut la médiane des deux moitiés quand $n$ est impair). L’<b>écart interquartile</b> $\text{EI} = Q_3 - Q_1$ mesure la dispersion des 50 % centraux.</p>
⟦0⟧
<h3>Variance et écart type</h3>
⟦1⟧
⟦2⟧
<h3>Données groupées</h3>
<p>On estime la moyenne avec les centres des classes : $\bar{x} \approx \frac{\sum f m}{\sum f}$.</p>
<h3>Transformer les données</h3>
⟦3⟧
⟦4⟧`,
  'l167vch4m7': R`<p>Une règle courante pour les valeurs aberrantes : les valeurs inférieures à $Q_1 - 1{,}5\,\text{EI}$ ou supérieures à $Q_3 + 1{,}5\,\text{EI}$.</p>`,
  '1i22g7xb1dd': R`\sigma^2 = \frac{\sum (x - \mu)^2}{n} \qquad \sigma = \sqrt{\sigma^2} \qquad\qquad s^2 = \frac{\sum (x - \bar{x})^2}{n - 1} \text{ (échantillon)}`,
  '1c6crwakkdh': R`<p>Données 2 ; 4 ; 4 ; 4 ; 5 ; 5 ; 7 ; 9 : moyenne 5, écarts au carré 9 ; 1 ; 1 ; 1 ; 0 ; 0 ; 4 ; 16 (somme 32). Variance de la population $= \frac{32}{8} = 4$ et $\sigma = 2$.</p>`,
  'etseh8nv9i': R`Si chaque valeur devient`,
  'tocb6e1sav': R`La moyenne devient`,
  '1ng2ylp8qsd': R`L’écart type devient`,
  's70utdhfyg': R`$\sigma$ (inchangé)`,
  '1ixl32zcrbx': R`<p>Ajouter une constante décale les données sans les étaler : l’écart type reste le même.</p>`,
  '1os4b58x5gr': R`Calculez la variance de l’<b>échantillon</b> : ⟦0⟧.`,
  '5koevyyrqx': R`Calculez la variance de la <b>population</b> : ⟦0⟧.`,
  '2gl7bcglff0': R`Moyenne $= ⟦0⟧$. Écarts au carré : ⟦1⟧ (somme ⟦2⟧). On divise par ⟦3⟧ : $⟦4⟧$.`,
  'zh9si0i2s': R`Calculez l’écart type de la population : ⟦0⟧. Arrondissez à 2 décimales.`,
  'iohahpasm4': R`Moyenne $= ⟦0⟧$ ; $\sigma^2 = \frac{⟦1⟧}{5} = ⟦2⟧$, donc $\sigma = \sqrt{⟦3⟧} \approx ⟦4⟧$.`,
  'box0w6rodc': R`Calculez l’écart interquartile de : ⟦0⟧. (Excluez la médiane en partageant les données en deux moitiés.)`,
  'dvfyzp44sk': R`Rangées : ⟦0⟧. La moitié inférieure ⟦1⟧ donne $Q_1 = ⟦2⟧$ ; la moitié supérieure ⟦3⟧ donne $Q_3 = ⟦4⟧$. $\text{EI} = ⟦5⟧ - ⟦6⟧ = ⟦7⟧$.`,
  '25jr4jzamls': R`Une série a pour moyenne ⟦0⟧ et pour écart type ⟦1⟧. Chaque valeur est transformée par $y = ⟦2⟧x ⟦3⟧$. Quel est le nouvel écart type ?`,
  '1h7x4xfpmhw': R`Ajouter ⟦0⟧ ne change pas la dispersion ; multiplier par ⟦1⟧ la multiplie par $|⟦2⟧|$ : $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '158l5v4dkra': R`Une série a pour moyenne ⟦0⟧ et pour écart type ⟦1⟧. Chaque valeur est transformée par $y = ⟦2⟧x ⟦3⟧$. Quelle est la nouvelle moyenne ?`,
  '21c6bmoi3b4': R`La moyenne suit la transformation : $⟦0⟧(⟦1⟧) ⟦2⟧ = ⟦3⟧$.`,
  'th9c52kib0': R`Estimez la moyenne à partir de ce tableau d’effectifs par classes (utilisez les centres des classes). Arrondissez à 2 décimales.⟦0⟧`,
  '1h8qh0j4anc': R`Classe`,
  '1yeuaowmmsc': R`Centres ⟦0⟧ ; $\sum f = ⟦1⟧$, $\sum fm = ⟦2⟧$. Moyenne $\approx \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  '1kja7bg5lcu': R`Une série a $Q_1 = ⟦0⟧$ et $Q_3 = ⟦1⟧$. Avec la règle $1{,}5 \times \text{EI}$, quelle est la borne ⟦2⟧ des valeurs aberrantes ?`,
  '3zu0ol0nfw': R`supérieure`,
  '9nl2sip6fg': R`inférieure`,
  '1u7a09okm0e': R`$\text{EI} = ⟦0⟧$ et $1{,}5 \times ⟦1⟧ = ⟦2⟧$. ⟦3⟧`,
  '191ugb8bucx': R`Borne supérieure $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '111p9ug7ykx': R`Borne inférieure $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // conics
  '12p1gvv8rrs': R`
⟦0⟧
<h3>Équation d’un cercle</h3>
⟦1⟧
<p>En développant, on obtient la <b>forme développée</b> $x^2 + y^2 + Dx + Ey + F = 0$, de centre $\left(-\frac{D}{2} ; -\frac{E}{2}\right)$ et de rayon $r = \sqrt{\frac{D^2}{4} + \frac{E^2}{4} - F}$.</p>
⟦2⟧
<h3>Position d’un point</h3>
<p>Remplacez le point dans $(x - a)^2 + (y - b)^2$ et comparez à $r^2$ : plus petit → à l’intérieur, égal → sur le cercle, plus grand → à l’extérieur.</p>
<h3>Tangentes</h3>
<p>Une tangente est perpendiculaire au rayon au point de contact. Pour le cercle $x^2 + y^2 = r^2$ en $(x_1 ; y_1)$, le rayon a pour pente $\frac{y_1}{x_1}$, donc la tangente a pour pente $-\frac{x_1}{y_1}$.</p>
<h3>Paraboles</h3>
<p>$y^2 = 4px$ a pour foyer $(p ; 0)$ et pour directrice $x = -p$ ; $x^2 = 4py$ a pour foyer $(0 ; p)$ et pour directrice $y = -p$. Tout point d’une parabole est à la même distance du foyer que de la directrice.</p>
⟦3⟧`,
  'd8g3n0gso0': R`\text{Milieu } \left(\frac{x_1 + x_2}{2} ; \frac{y_1 + y_2}{2}\right) \qquad \text{Distance } \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`,
  'yeziymovo4': R`$$(x - a)^2 + (y - b)^2 = r^2 \qquad \text{centre } (a ; b), \text{ rayon } r$$`,
  '16n3xjnynm7': R`<p>$x^2 + y^2 - 6x + 4y - 12 = 0$ : on fait apparaître les carrés, $(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$. Centre $(3 ; -2)$, rayon 5.</p>`,
  '11ib4pk61jv': R`<p>Dans $(x + 3)^2 + (y - 1)^2 = 16$, le centre est $(-3 ; 1)$ — les signes changent — et le rayon est 4, pas 16.</p>`,
  'a19ymany96': R`Déterminez le milieu de $⟦0⟧$ et $⟦1⟧$.`,
  'l7s72risy9': R`On fait la moyenne des coordonnées : $\left(\frac{⟦0⟧ + ⟦1⟧}{2} ; \frac{⟦2⟧ + ⟦3⟧}{2}\right) = ⟦4⟧$.`,
  '1mu3r9x32jw': R`Déterminez le rayon du cercle $⟦0⟧ = 0$.`,
  '1bhxlcedykj': R`On fait apparaître les carrés : $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧ + ⟦3⟧ ⟦4⟧ = ⟦5⟧$, donc $r = ⟦6⟧$.`,
  'd11etx15kp': R`Déterminez le centre du cercle $⟦0⟧ = 0$.`,
  '15nydo8wzsx': R`Le centre est $\left(-\frac{D}{2} ; -\frac{E}{2}\right) = \left(-\frac{⟦0⟧}{2} ; -\frac{⟦1⟧}{2}\right) = ⟦2⟧$.`,
  '10fdmgbsvjs': R`Quelle est l’équation du cercle de centre $⟦0⟧$ et de rayon ⟦1⟧ ?`,
  'j31butbqt0': R`On remplace dans $(x - a)^2 + (y - b)^2 = r^2$ : $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧$.`,
  'qntj72wic0': R`À l’intérieur du cercle`,
  '1z2fjcjol1w': R`intérieur`,
  '1h4trl2qo1h': R`Sur le cercle`,
  '1sg9ogxwlev': R`sur`,
  '8uau8fsxbq': R`À l’extérieur du cercle`,
  '6gv2pbcp7q': R`extérieur`,
  '24luyo2ftju': R`Le point $⟦0⟧$ est-il à l’intérieur, sur ou à l’extérieur du cercle $(x ⟦1⟧)^2 + (y ⟦2⟧)^2 = ⟦3⟧$ ?`,
  '28keqi93flp': R`$⟦0⟧$, qui est égal à $r^2 = ⟦1⟧$ : le point est <b>sur</b> le cercle.`,
  '1hj2pbrwkr7': R`$⟦0⟧$, qui est inférieur à $r^2 = ⟦1⟧$ : le point est <b>à l’intérieur</b> du cercle.`,
  'kv7senj1fr': R`$⟦0⟧$, qui est supérieur à $r^2 = ⟦1⟧$ : le point est <b>à l’extérieur</b> du cercle.`,
  '1hxz2qew8oz': R`Déterminez le foyer de la parabole $⟦0⟧$.`,
  '22fls2lezk5': R`On compare avec ⟦0⟧ : $4p = ⟦1⟧$, donc $p = ⟦2⟧$ et le foyer est $⟦3⟧$.`,
  'ez3m02hgj1': R`Déterminez la pente de la tangente à $x^2 + y^2 = ⟦0⟧$ au point $⟦1⟧$.`,
  '1huwumypuyf': R`Le rayon vers $⟦0⟧$ a pour pente $\frac{⟦1⟧}{⟦2⟧}$. La tangente lui est perpendiculaire : pente $= -\frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,

  // linear-programming
  '23l7ef2fdyh': R`
<p>La <b>programmation linéaire</b> cherche la meilleure valeur (la plus grande ou la plus petite) d’une <b>fonction objectif</b> linéaire, comme le bénéfice $z = 30x + 20y$, sous des <b>contraintes</b> linéaires comme $x + y \le 40$.</p>
<ol><li>Écrivez les contraintes sous forme d’inéquations (avec $x \ge 0$, $y \ge 0$).</li><li>Tracez chaque droite frontière et hachurez la région qui vérifie toutes les contraintes — le <b>domaine réalisable</b>.</li><li>Trouvez les sommets en résolvant des couples d’équations frontières.</li><li>Évaluez la fonction objectif en chaque sommet.</li></ol>
⟦0⟧
⟦1⟧
<p>Pour les problèmes de minimisation avec des contraintes « ≥ », le domaine est souvent non borné ; avec des coûts positifs, le minimum est encore atteint en un sommet.</p>
⟦2⟧`,
  'hs1573xprv': R`<p><b>Théorème des sommets :</b> si un optimum existe, il est atteint en un sommet du domaine réalisable.</p>`,
  '1g8qhbmqb9w': R`<p>Maximisez $z = 3x + 2y$ sous les contraintes $x + y \le 8$, $2x + y \le 12$, $x, y \ge 0$.</p><p>Sommets : $(0 ; 0)$, $(6 ; 0)$, $(4 ; 4)$ [où $x + y = 8$ coupe $2x + y = 12$], $(0 ; 8)$.</p><p>Valeurs de $z$ : 0 ; 18 ; 20 ; 16. Maximum $z = 20$ en $(4 ; 4)$.</p>`,
  '11p3z90h4pd': R`<p>Vérifiez que chaque sommet satisfait <b>toutes</b> les contraintes — l’intersection de deux droites frontières peut être hors du domaine.</p>`,
  '22hgo1z3v51': R`Maximisez $z = ⟦0⟧ + ⟦1⟧$ sous les contraintes ⟦2⟧, $x \ge 0$, $y \ge 0$. Quelle est la valeur maximale de $z$ ?`,
  'thttp4dv20': R`Sommets et valeurs de $z$ : ⟦0⟧. Le maximum est <b>⟦1⟧</b>.`,
  '2g9b1szo820': R`Minimisez $z = ⟦0⟧ + ⟦1⟧$ sous les contraintes $x + y \ge ⟦2⟧$, $x + 2y \ge ⟦3⟧$, $x \ge 0$, $y \ge 0$. Quelle est la valeur minimale de $z$ ?`,
  '72m6dlh1yr': R`Le domaine réalisable n’est pas borné ; ses sommets sont ⟦0⟧. Comme les coûts sont positifs, le minimum est <b>⟦1⟧</b>.`,
  '4eos6o7rio': R`Quel point appartient au domaine réalisable défini par ⟦0⟧, $x \ge 0$, $y \ge 0$ ?`,
  '1jqzy1kt3ra': R`Testez chaque point dans chaque contrainte. $⟦0⟧$ les vérifie toutes ; chacun des autres en viole au moins une.`,
  '15d4uuzw5eq': R`Une boulangerie fabrique chaque jour des gâteaux ($x$) et des tartes ($y$). Elle peut cuire au plus ⟦0⟧ pièces, et le temps de cuisson donne la contrainte ⟦1⟧. Le bénéfice est de ⟦2⟧ euros par gâteau et ⟦3⟧ euros par tarte. Quel est le bénéfice journalier maximal ?`,
  '296rrmt4h4q': R`Contraintes : $x + y \le ⟦0⟧$, $⟦1⟧ \le ⟦2⟧$, $x, y \ge 0$. Sommets : ⟦3⟧. Bénéfice maximal : <b>⟦4⟧</b> euros.`,

  // logic
  '22xng4phovn': R`
<p>Une <b>proposition</b> est un énoncé qui est soit vrai, soit faux. On construit des propositions composées avec des <b>connecteurs</b> :</p>
⟦0⟧
⟦1⟧
<h3>Implications associées</h3>
⟦2⟧
<h3>Quantificateurs</h3>
<p>$\forall$ « pour tout » et $\exists$ « il existe ». La négation les échange : la négation de « Tous les élèves ont réussi » est « <b>Certains</b> élèves <b>n’ont pas</b> réussi » ; la négation de « Certains oiseaux ne volent pas » est « Tous les oiseaux volent ».</p>
<h3>Raisonnements valides</h3>
<ul><li><b>Modus ponens :</b> $p \Rightarrow q$, $p$ ; donc $q$.</li><li><b>Modus tollens :</b> $p \Rightarrow q$, $\neg q$ ; donc $\neg p$.</li><li><b>Syllogisme :</b> $p \Rightarrow q$, $q \Rightarrow r$ ; donc $p \Rightarrow r$.</li></ul>
⟦3⟧`,
  '2aa32u1lmw9': R`VF`,
  '1h0id2d836q': R`<p>Une implication $p \Rightarrow q$ est fausse <b>uniquement</b> quand $p$ est vraie et $q$ est fausse.</p>`,
  '2aojok6ubm7': R`Forme`,
  '1bpxgxn3wdt': R`Équivalente à l’originale ?`,
  'clyih3qga0': R`Proposition`,
  '13tp70kq9iu': R`Réciproque`,
  '5lqm3x6p6i': R`non`,
  '1vsuatfpf7o': R`Inverse`,
  '1zjwynaslfy': R`Contraposée`,
  '2377erd9rpv': R`oui`,
  '1vdptccpewy': R`<p>De $p \Rightarrow q$ et $q$, on ne peut <b>pas</b> conclure $p$ (« affirmation du conséquent »). Un sol mouillé ne prouve pas qu’il a plu.</p>`,
  'e62y0oj6y7': R`$p$ est ⟦0⟧, $q$ est ⟦1⟧ et $r$ est ⟦2⟧. Quelle est la valeur de vérité de $⟦3⟧$ ?`,
  'x0xbdvafwl': R`On remplace $p = \text{⟦0⟧}$, $q = \text{⟦1⟧}$, $r = \text{⟦2⟧}$ et on évalue de l’intérieur vers l’extérieur : $⟦3⟧$ est <b>⟦4⟧</b>. (Rappel : $\Rightarrow$ n’est faux que pour V ⇒ F.)`,
  '1kkjzumhca1': R`la pluie tombe`,
  'ia7w0co89o': R`la pluie ne tombe pas`,
  '1ihx0acpu6a': R`le sol est mouillé`,
  '1v63alfxz6x': R`le sol n’est pas mouillé`,
  '1l79oqrjsck': R`$n$ est divisible par 4`,
  '1yshjhf0kon': R`$n$ n’est pas divisible par 4`,
  'qa8yzaajhn': R`$n$ est pair`,
  'cbcna6lfv': R`$n$ n’est pas pair`,
  '31grcmmyn9': R`$ABCD$ est un carré`,
  'pqxtvsjzqa': R`$ABCD$ n’est pas un carré`,
  '2gdyvqap69i': R`$ABCD$ est un rectangle`,
  'lxgoo3xc2q': R`$ABCD$ n’est pas un rectangle`,
  's4qelj4pfa': R`vous travaillez beaucoup`,
  '1ri3py7kjks': R`vous ne travaillez pas beaucoup`,
  '1wmmmy5ybwg': R`vous réussissez l’examen`,
  'uo17m9mxei': R`vous ne réussissez pas l’examen`,
  '14thczs4bru': R`la lampe est allumée`,
  '1mg8dlhg5lp': R`la lampe est éteinte`,
  '496x9r1bce': R`la pièce est éclairée`,
  '383gdutznm': R`la pièce n’est pas éclairée`,
  '12lqix1f1k9': R`Si ⟦0⟧, alors ⟦1⟧.`,
  'z7jgfl3knp': R`réciproque`,
  'aqxfua2az0': R`inverse`,
  '1qj3c13iq5c': R`contraposée`,
  '14dtm0889wo': R`Quelle est la <b>⟦0⟧</b> de la proposition « ⟦1⟧ » ?`,
  '1izj6udg2zz': R`Réciproque : on échange ($q \Rightarrow p$). Inverse : on nie les deux ($\neg p \Rightarrow \neg q$). Contraposée : on échange et on nie ($\neg q \Rightarrow \neg p$). Donc la ⟦0⟧ est « ⟦1⟧ »⟦2⟧`,
  '15513xdtwsn': R` — elle est logiquement équivalente à l’originale.`,
  '6brkkcy85o': R`Tous les élèves ont réussi l’examen.`,
  '2rjnejqvqb': R`Certains élèves n’ont pas réussi l’examen.`,
  'vjzsxd6qou': R`Aucun élève n’a réussi l’examen.`,
  'oolor24qct': R`Tous les élèves ont échoué à l’examen.`,
  'aesopm7ka0': R`Certains élèves ont réussi l’examen.`,
  '1c9ng778gwv': R`Les élèves n’ont pas tous réussi l’examen.`,
  'f39jhzzlxm': R`Tous les chats aiment le lait.`,
  '1rgve8hw4eg': R`Certains chats n’aiment pas le lait.`,
  '19hhf94uign': R`Aucun chat n’aime le lait.`,
  '1qzto8uhyzs': R`Tous les chats détestent le lait.`,
  'xi1gnm2hxv': R`Certains chats aiment le lait.`,
  'aijf9tywlh': R`Les chats n’aiment pas tous le lait.`,
  '2c7t0e33rd1': R`Tous les employés sont arrivés à l’heure.`,
  'avwdd5b0gg': R`Certains employés ne sont pas arrivés à l’heure.`,
  '28adrxoh914': R`Aucun employé n’est arrivé à l’heure.`,
  '1000i19kpx7': R`Tous les employés sont arrivés en retard.`,
  '1tupibwtosw': R`Certains employés sont arrivés à l’heure.`,
  'syr088g2qb': R`Les employés ne sont pas tous arrivés à l’heure.`,
  '1rwcznrx3zt': R`Tous les nombres de la liste sont pairs.`,
  'g4py4lm4nz': R`Certains nombres de la liste ne sont pas pairs.`,
  'z8en25csvv': R`Aucun nombre de la liste n’est pair.`,
  '1m3jao43f24': R`Tous les nombres de la liste sont impairs.`,
  '2nfvm4et1c': R`Certains nombres de la liste sont pairs.`,
  'xfe0p0mnov': R`Les nombres de la liste ne sont pas tous pairs.`,
  '1w0eku5479x': R`Tous les joueurs ont marqué un but.`,
  '2xjzgvosy4': R`Certains joueurs n’ont pas marqué de but.`,
  '1eb39gddsae': R`Aucun joueur n’a marqué de but.`,
  '1xbzgu8l71r': R`Tous les joueurs sont restés sans marquer.`,
  't7ja96nwk4': R`Certains joueurs ont marqué un but.`,
  '8j4qjj5ufj': R`Les joueurs n’ont pas tous marqué un but.`,
  'b5r03m1c02': R`Quelle est la négation de « ⟦0⟧ » ?`,
  '1a591wdfgbv': R`$\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)$ : il suffit que <i>certains</i> ne vérifient pas la propriété. Négation : « ⟦0⟧ »`,
  'do28na3fol': R`$\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)$ : aucun ne la vérifie. Négation : « ⟦0⟧ »`,
  'ndnufyumww': R`Combien de lignes a une table de vérité à ⟦0⟧ variables propositionnelles différentes ?`,
  'u75a1of7f2': R`Chaque variable vaut V ou F, il y a donc $2^{⟦0⟧} = ⟦1⟧$ combinaisons.`,
  '1w39q86nfhw': R`Dans la table de vérité de $⟦0⟧$, dans combien de lignes la proposition est-elle vraie ?`,
  'ny2shau597': R`La table a ⟦0⟧ lignes ; en évaluant chacune, on voit que la proposition est vraie dans <b>⟦1⟧</b> d’entre elles et fausse dans ⟦2⟧.`,
  '1zkv6notm6x': R`le match est annulé`,
  '28hyo4t2whc': R`le match n’est pas annulé`,
  'amilvofe40': R`un nombre se termine par 0`,
  'osyuok2ad2': R`un nombre ne se termine pas par 0`,
  'fabia2grh6': R`il est divisible par 5`,
  '18q6q6gwd11': R`il n’est pas divisible par 5`,
  'm30q1lwox2': R`vous arrosez la plante`,
  '1ku1ogs6cx8': R`vous n’arrosez pas la plante`,
  '1zfcrbg8kca': R`la plante pousse`,
  'ax498dx365': R`la plante ne pousse pas`,
  '10pj6yxl1t7': R`le réveil sonne`,
  '4ju91rp1va': R`le réveil ne sonne pas`,
  'smmfh9u0rs': R`Léo se réveille`,
  '1al6yo6prnr': R`Léo ne se réveille pas`,
  '1wbxqjf54ui': R`Aucune conclusion valide ne peut être tirée.`,
  '1h3hboouplr': R`Prémisse 1 : « Si ⟦0⟧, alors ⟦1⟧. » Prémisse 2 : « ⟦2⟧. » Que peut-on conclure de façon valide ?`,
  '19xzw2kl48j': R`C’est un modus ponens ($p \Rightarrow q$, $p$ ⊢ $q$) : « ⟦0⟧. »`,
  '4fjcpvhawf': R`C’est un modus tollens ($p \Rightarrow q$, $\neg q$ ⊢ $\neg p$) : « ⟦0⟧. »`,
  'enorfzjcll': R`Savoir que $q$ est vraie ne nous apprend rien sur $p$ (affirmer le conséquent est un sophisme). Aucune conclusion valide.`,
  '1w6l8obljn3': R`Savoir $\neg p$ ne nous apprend rien sur $q$ (nier l’antécédent est un sophisme). Aucune conclusion valide.`,
});
