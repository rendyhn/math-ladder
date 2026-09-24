/* Français — noyau + primaire (numération → diviseurs) */
addT('fr', {
  // core
  '1hnygwzeeez': R`Vrai`,
  '12u8s6vu2gj': R`Faux`,
  '1mc3pmcca9i': R`On soustrait ⟦0⟧ à chaque membre`,
  '1flhu7k9ohj': R`On ajoute ⟦0⟧ à chaque membre`,
  '1g9usaftmli': R`On soustrait ⟦0⟧ aux deux membres`,
  'rcyxvbe5bx': R`On ajoute ⟦0⟧ aux deux membres`,
  'fc0sowzn7c': R`À retenir`,
  '1oy7dzvank8': R`Exemple corrigé`,
  '1q1jscvjv55': R`Attention`,
  '1a2zghfpw7a': R`Écrivez une fraction comme 7/12 (les fractions supérieures à 1 sont acceptées).`,
  '2wu7e9ekt1': R`Un rectangle de longueur l et de largeur w, un triangle de base b et de hauteur h, et un trapèze de bases parallèles a et b et de hauteur h`,

  // place-value
  'i1ejiqva2l': R`
<p>Notre système de numération utilise dix chiffres, de 0 à 9. Le <b>rang</b> d’un chiffre indique sa <b>valeur</b> : chaque rang vaut dix fois le rang situé à sa droite.</p>
⟦0⟧
<p>Dans <b>5 382 417</b>, le chiffre 8 est au rang des dizaines de mille, il vaut donc $8 \times 10\,000 = 80\,000$. Le chiffre 3 vaut $300\,000$.</p>
<h3>Écriture décomposée</h3>
<p>Écrire un nombre comme la somme des valeurs de ses chiffres montre ce que vaut chacun d’eux :</p>
⟦1⟧
<p>Le 0 au rang des dizaines <b>tient la place</b>. Sans lui, 4 307 deviendrait 437.</p>
<h3>Comparer des nombres</h3>
<p>Un nombre entier qui a plus de chiffres est plus grand. Si deux nombres ont autant de chiffres, on les compare chiffre par chiffre en partant de la gauche ; le premier rang où ils diffèrent décide. Ainsi $52\,814 \gt 52\,781$ car au rang des centaines $8 \gt 7$.</p>
<h3>Arrondir</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'gisuf2bt5s': R`4\,307 = 4\,000 + 300 + 7`,
  'k8yn6x5f0c': R`Millions`,
  '1y40p90zlus': R`Centaines de mille`,
  '8rp03918ge': R`Dizaines de mille`,
  'y6ohcicccm': R`Unités de mille`,
  '2bpfsjyefrh': R`Centaines`,
  '12cshgy5to0': R`Dizaines`,
  '48l24kh7s0': R`Unités`,
  '1h333nq85ni': R`<p>Pour arrondir à un rang donné, regardez le chiffre <b>situé juste à sa droite</b>.</p><ul><li>5 ou plus : on arrondit <b>au-dessus</b> (on ajoute 1 au chiffre du rang).</li><li>4 ou moins : on arrondit <b>au-dessous</b> (le chiffre du rang ne change pas).</li></ul><p>Tous les chiffres après ce rang deviennent des 0.</p>`,
  '264ckm0rxdd': R`<p>Arrondir 3 462 à la centaine près.</p><ol><li>Le chiffre des centaines est 4. Le chiffre à sa droite (dizaines) est 6.</li><li>6 est supérieur ou égal à 5, on arrondit donc au-dessus : le 4 devient 5.</li><li>Réponse : <b>3 500</b>.</li></ol><p>À la dizaine près, 3 462 donne 3 460 ; au millier près, 3 000.</p>`,
  '1b014azrv9g': R`<p>Ne regardez que le chiffre suivant. 3 449 arrondi à la centaine près donne 3 400, pas 3 500 : n’arrondissez jamais par étapes.</p>`,
  'rwpycs3uy5': R`des unités`,
  '48iq3xbr78': R`des dizaines`,
  'evjeoal0o3': R`des centaines`,
  '1wg89nrnvw3': R`des milliers`,
  'humdf3fhgn': R`des dizaines de mille`,
  '7vj2b9yekp': R`des centaines de mille`,
  '1vvnln22yvc': R`des millions`,
  '1k42apyhj2s': R`Dans le nombre <b>⟦0⟧</b>, quelle est la valeur du chiffre <b>⟦1⟧</b> ?`,
  '1wls65y7jfe': R`Le chiffre ⟦0⟧ est ⟦1⟧, donc sa valeur est $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$.`,
  '2ds03ywxgdr': R`à la dizaine près`,
  'ct0emjf1zx': R`à la centaine près`,
  '2bm9zrq1v5b': R`au millier près`,
  '1p8grh6ppw3': R`Arrondissez <b>⟦0⟧</b> ⟦1⟧.`,
  'ucpruditlj': R`Le chiffre qui suit celui ⟦0⟧ est ⟦1⟧. ⟦2⟧ : ⟦3⟧ ≈ <b>⟦4⟧</b>.`,
  '10zj9kfgz44': R`Il est supérieur ou égal à 5, on arrondit donc au-dessus`,
  '2bd3oxw8hoc': R`Il est inférieur à 5, on arrondit donc au-dessous`,
  '2eobe5h8vjz': R`Quel nombre est égal à $⟦0⟧$ ?`,
  '12ct2r4vi1w': R`Additionnez les valeurs de chaque rang : $⟦0⟧ = ⟦1⟧$. Les zéros occupent les rangs vides.`,
  '1thskfj0azj': R`Lequel de ces nombres est le <b>plus grand</b> ?<br>⟦0⟧`,
  '1qw72id1e2m': R`Lequel de ces nombres est le <b>plus petit</b> ?<br>⟦0⟧`,
  'cdwrnsn0bw': R`Ils ont tous cinq chiffres, on compare donc à partir de la gauche. Du ⟦0⟧ : ⟦1⟧.`,
  '1hf4gas3oen': R`plus grand au plus petit`,
  '1uhrj1iztnj': R`plus petit au plus grand`,

  // add-sub
  '2crp1hgq6k1': R`
<p>L’addition réunit des quantités ; la soustraction calcule ce qui reste ou l’<b>écart</b> entre deux quantités. Pour les grands nombres, on pose l’opération <b>en colonnes</b> : on aligne les chiffres selon leur rang et on commence par la colonne des unités, vers la gauche.</p>
<h3>Addition avec retenue</h3>
<p>Quand une colonne fait 10 ou plus, on écrit le chiffre des unités et on <b>reporte une retenue</b> dans la colonne suivante.</p>
⟦0⟧
<h3>Soustraction avec retenue</h3>
<p>Si le chiffre du haut est plus petit que celui du bas, on <b>emprunte</b> une dizaine à la colonne suivante : cela ajoute 10 à la colonne en cours.</p>
⟦1⟧
⟦2⟧
<h3>Problèmes</h3>
<p>Des mots comme <i>en tout, au total, de plus, augmenté</i> indiquent souvent une addition. Des mots comme <i>reste, il reste, écart, combien de plus, de moins</i> indiquent souvent une soustraction. Demandez-vous toujours ce que la question cherche vraiment.</p>
⟦3⟧`,
  '12bc1hhhzgf': R`<p>$4\,587 + 2\,846$</p><ol><li>Unités : $7 + 6 = 13$ → on écrit 3 et on retient 1.</li><li>Dizaines : $8 + 4 + 1 = 13$ → on écrit 3 et on retient 1.</li><li>Centaines : $5 + 8 + 1 = 14$ → on écrit 4 et on retient 1.</li><li>Milliers : $4 + 2 + 1 = 7$.</li></ol><p>Réponse : <b>7 433</b>.</p>`,
  'dzfcdnot25': R`<p>$6\,204 - 1\,758$</p><ol><li>Unités : 4 est plus petit que 8. Le chiffre des dizaines est 0, on emprunte donc aux centaines : 204 devient 1 centaine, 9 dizaines et 14 unités. $14 - 8 = 6$.</li><li>Dizaines : $9 - 5 = 4$.</li><li>Centaines : 1 est plus petit que 7, on emprunte un millier : $11 - 7 = 4$.</li><li>Milliers : $5 - 1 = 4$.</li></ol><p>Réponse : <b>4 446</b>.</p>`,
  '1myl5xbp4pm': R`<p>L’addition et la soustraction s’annulent l’une l’autre. Pour vérifier une soustraction, on additionne : $4\,446 + 1\,758 = 6\,204$ ✓. Cela permet aussi de trouver un nombre manquant : si $\square + 348 = 1\,000$, alors $\square = 1\,000 - 348 = 652$.</p>`,
  '23w41b37di3': R`<p>Erreur fréquente : soustraire dans chaque colonne le plus petit chiffre du plus grand (par exemple écrire $52 - 38 = 26$). Il faut emprunter : $52 - 38 = 14$.</p>`,
  'jzpsrz7qv': R`Calculez $⟦0⟧ + ⟦1⟧$.`,
  '11vnennk127': R`Alignez les chiffres selon leur rang et additionnez à partir des unités, en reportant une retenue dès qu’une colonne atteint 10 : $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '2cqlmyuanc4': R`Calculez $⟦0⟧ - ⟦1⟧$.`,
  '217um699krb': R`Soustrayez colonne par colonne à partir des unités, en empruntant quand le chiffre du haut est plus petit : $⟦0⟧ - ⟦1⟧ = ⟦2⟧$. Vérification : $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '20q2iwal3wx': R`Quel nombre faut-il mettre dans la case ? $\square + ⟦0⟧ = ⟦1⟧$`,
  '2vzsixgbwq': R`La soustraction annule l’addition : $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '19k8gxx8enm': R`Une bibliothèque avait ⟦0⟧ livres. Elle en a reçu ⟦1⟧ nouveaux, puis en a prêté ⟦2⟧. Combien de livres reste-t-il à la bibliothèque ?`,
  '22c2nbk22nn': R`On ajoute les nouveaux livres, puis on retire ceux qui ont été prêtés : $⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  'tjgizs9fjl': R`Mia`,
  '1if8m7vmopf': R`Léo`,
  '12t8l5omzh1': R`Sari`,
  '26mi5um5hxm': R`Budi`,
  '5ladyusi9v': R`Ana`,
  '1e0eos7e481': R`Tom`,
  '28xor3epndt': R`Dewi`,
  'fl1dlgr4st': R`Raka`,
  'b83c8sskmz': R`À un jeu, ⟦0⟧ a marqué ⟦1⟧ points et ⟦2⟧ en a marqué ⟦3⟧. Combien de points de plus a marqués ⟦4⟧ ?`,
  'h14zpmlfj7': R`« Combien de plus » demande l’écart : $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // mul-div
  '12j6s3mfail': R`
<p>La <b>multiplication</b> est une addition répétée de groupes égaux : $4 \times 6$ signifie 4 groupes de 6, soit $6 + 6 + 6 + 6 = 24$. La <b>division</b> partage une quantité en groupes égaux : $24 \div 6 = 4$.</p>
⟦0⟧
<h3>Multiplier de grands nombres</h3>
<p>On décompose l’un des nombres selon ses rangs, on multiplie chaque partie et on additionne (c’est la distributivité) :</p>
⟦1⟧
<h3>Division et reste</h3>
<p>Quand la division ne tombe pas juste, ce qu’il reste s’appelle le <b>reste</b>. Il est toujours plus petit que le diviseur.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '1rjytzik9fa': R`<p>La multiplication et la division s’annulent l’une l’autre : $4 \times 6 = 24 \iff 24 \div 6 = 4$.</p><ul><li>L’ordre des facteurs ne compte pas : $a \times b = b \times a$.</li><li>La multiplication est distributive sur l’addition : $a \times (b + c) = a \times b + a \times c$.</li></ul>`,
  '20j6lyqvksk': R`347 \times 26 = 347 \times 20 + 347 \times 6 = 6\,940 + 2\,082 = 9\,022`,
  '11dzvmewikb': R`47 \div 5 = 9 \text{ reste } 2 \qquad \text{car } 5 \times 9 + 2 = 47`,
  '1z8tho01ahp': R`<p>150 élèves partent en sortie. Chaque car peut transporter 40 élèves. Combien de cars faut-il ?</p><p>$150 \div 40 = 3$ reste 30. Trois cars transportent 120 élèves ; les 30 autres ont aussi besoin d’un car, il faut donc <b>4 cars</b>.</p>`,
  '1g33a99esai': R`<p>Dans un problème, demandez-vous ce que représente le reste. « Combien de cars <i>faut-il</i> ? » arrondit au-dessus ; « combien de boîtes peut-on remplir <i>complètement</i> ? » arrondit au-dessous.</p>`,
  '10v4h321li3': R`Calculez $⟦0⟧ \times ⟦1⟧$.`,
  'h89yrotk3q': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ : ce sont ⟦3⟧ groupes de ⟦4⟧.`,
  '2gi38wc5lfl': R`On décompose ⟦0⟧ en ⟦1⟧ + ⟦2⟧ : $⟦3⟧ \times ⟦4⟧ + ⟦5⟧ \times ⟦6⟧ = ⟦7⟧ + ⟦8⟧ = ⟦9⟧$.`,
  '2g99zk4sonb': R`Calculez $⟦0⟧ \div ⟦1⟧$.`,
  'cggzswltjw': R`La division annule la multiplication : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, donc $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$.`,
  '7njwte8n8l': R`Quel est le reste de la division de ⟦0⟧ par ⟦1⟧ ?`,
  '1c2kbih8aei': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ et $⟦3⟧ - ⟦4⟧ = ⟦5⟧$, donc $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$ reste <b>⟦9⟧</b>.`,
  '23lffvpxlg2': R`œufs`,
  'isjmxkkk5m': R`cupcakes`,
  'qd054tvbk9': R`crayons`,
  '22kysml68r1': R`bouteilles`,
  '29eftju2pbv': R`On range ⟦0⟧ ⟦1⟧ dans des boîtes de ⟦2⟧. Combien de boîtes faut-il pour tout ranger ?`,
  '1pnydk75epc': R`Un magasin répartit ⟦0⟧ ⟦1⟧ dans des boîtes de ⟦2⟧. Combien de boîtes peut-on remplir <b>complètement</b> ?`,
  '9w986eh8jp': R`$⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ reste ⟦3⟧. ⟦4⟧`,
  'dnbly4c6lj': R`Il reste ⟦0⟧ ⟦1⟧ qui ont aussi besoin d’une boîte : il faut donc <b>⟦2⟧</b> boîtes.`,
  'doig2i1un2': R`Seules <b>⟦0⟧</b> boîtes sont pleines ; il reste ⟦1⟧ ⟦2⟧.`,
  '5ki7426a69': R`Une salle compte ⟦0⟧ rangées de ⟦1⟧ chaises. Combien y a-t-il de chaises en tout ?`,
  '13ytah9dyhs': R`Des rangées égales, c’est une multiplication : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ chaises.`,

  // order-ops
  'jeo8qdfjh8': R`
<p>Quand un calcul comporte plusieurs opérations, tout le monde doit les effectuer dans le même ordre, sinon une même expression donnerait des résultats différents. Cet ordre s’appelle les <b>priorités opératoires</b> ; en anglais, on le retient avec le mot <b>PEMDAS</b>.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '100vdkuw7cv': R`Étape`,
  '1ata9ppdhpl': R`Opération`,
  '1i56r47suu5': R`Exemple`,
  'bct94f2duc': R`Parenthèses`,
  '152taipeiq': R`Puissances (et racines)`,
  '1dq9oio2vod': R`Multiplications et divisions — de gauche à droite`,
  'ety1fhjk85': R`Additions et soustractions — de gauche à droite`,
  '20c9xxbu7nh': R`<p>La multiplication et la division ont la <b>même</b> priorité, tout comme l’addition et la soustraction. À priorité égale, on calcule de <b>gauche à droite</b>.</p>`,
  'vpi6gbf1j5': R`<p>Calculer $20 - 8 \div 2 \times 3 + 1$.</p><ol><li>D’abord la division et la multiplication, de gauche à droite : $8 \div 2 = 4$, puis $4 \times 3 = 12$.</li><li>Il reste $20 - 12 + 1$, de gauche à droite : $8 + 1 = 9$.</li></ol><p>Réponse : <b>9</b>.</p>`,
  'cx7umbw06o': R`<p>Calculer $(8 + 4) \times 3 - 2^3$.</p><ol><li>Parenthèses : $8 + 4 = 12$.</li><li>Puissances : $2^3 = 8$.</li><li>Multiplication : $12 \times 3 = 36$.</li><li>Soustraction : $36 - 8 = 28$.</li></ol>`,
  '9qyvtl39mt': R`<p>« PEMDAS » ne veut pas dire multiplier avant de diviser. $12 \div 3 \times 2 = 8$, et non $12 \div 6 = 2$.</p>`,
  '2boesugt2g3': R`Calculez $⟦0⟧ + ⟦1⟧ \times ⟦2⟧$.`,
  '18k6kdrqfh9': R`D’abord la multiplication : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Puis l’addition : $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '13w7u6yvf66': R`Calculez $(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ - ⟦3⟧$.`,
  '1kgg8vz8ven': R`Parenthèses : $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Multiplication : $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Soustraction : $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  'fpzk0whg2k': R`Calculez $⟦0⟧ - ⟦1⟧ \div ⟦2⟧ \times ⟦3⟧$.`,
  '6i0q5bykj1': R`D’abord division et multiplication, de gauche à droite : $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$, puis $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Enfin $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1f77fy0xem': R`Calculez $⟦0⟧ + ⟦1⟧^2 - ⟦2⟧$.`,
  'isber9l7mx': R`D’abord la puissance : $⟦0⟧^2 = ⟦1⟧$. Puis de gauche à droite : $⟦2⟧ + ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '12cd51d72z4': R`Calculez $⟦0⟧ \times (⟦1⟧ + ⟦2⟧) \div ⟦3⟧$.`,
  '1rwp21i838c': R`Parenthèses : $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Puis de gauche à droite : $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ et $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$.`,
  '16yj15t3yvl': R`Calculez $⟦0⟧ - ⟦1⟧ + ⟦2⟧$.`,
  '2g7vu4g2g7r': R`L’addition et la soustraction ont la même priorité, on calcule donc de gauche à droite : $⟦0⟧ - ⟦1⟧ = ⟦2⟧$, puis $⟦3⟧ + ⟦4⟧ = ⟦5⟧$. Calculer d’abord $⟦6⟧ + ⟦7⟧$ donnerait à tort ⟦8⟧.`,

  // factors
  'obrpwbkvog': R`
<p>Un <b>diviseur</b> d’un nombre le divise exactement. Un <b>multiple</b> d’un nombre est ce nombre multiplié par un nombre entier.</p>
<ul><li>Diviseurs de 12 : 1, 2, 3, 4, 6, 12 (ils vont par paires : $1 \times 12$, $2 \times 6$, $3 \times 4$).</li><li>Multiples de 12 : 12, 24, 36, 48, …</li></ul>
<h3>Nombres premiers et composés</h3>
<p>Un nombre <b>premier</b> a exactement deux diviseurs : 1 et lui-même (2, 3, 5, 7, 11, 13, …). Un nombre <b>composé</b> a plus de deux diviseurs. Le nombre 1 n’est ni premier ni composé, et 2 est le seul nombre premier pair.</p>
⟦0⟧
<h3>Décomposition en facteurs premiers</h3>
<p>Tout nombre entier supérieur à 1 s’écrit d’une seule façon comme produit de nombres premiers. Utilisez un arbre : décomposez jusqu’à ce que chaque branche se termine par un nombre premier.</p>
⟦1⟧
<h3>PGCD et PPCM</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '10ydoy6638h': R`Divisible par`,
  '1u2j0a6t91o': R`Critère`,
  '1fsfip1h2ap': R`le dernier chiffre est pair`,
  '26v1i9jjmmd': R`la somme des chiffres est divisible par 3`,
  'irydz9sqkz': R`les deux derniers chiffres forment un multiple de 4`,
  'mwe5nagqkl': R`le dernier chiffre est 0 ou 5`,
  'uitu5og8wz': R`divisible à la fois par 2 et par 3`,
  'h955yik0fz': R`la somme des chiffres est divisible par 9`,
  '185jxbw7gii': R`le dernier chiffre est 0`,
  'sxhmc0c8k9': R`<p>Le <b>plus grand commun diviseur</b> (PGCD) est le plus grand nombre qui divise les deux nombres. Le <b>plus petit commun multiple</b> (PPCM) est le plus petit nombre divisible par les deux.</p><p>Avec les décompositions en facteurs premiers : le PGCD prend chaque facteur commun avec sa <b>plus petite</b> puissance ; le PPCM prend tous les facteurs avec leur <b>plus grande</b> puissance.</p>`,
  '2dcgjf0y6e9': R`<p>$24 = 2^3 \times 3$ et $36 = 2^2 \times 3^2$.</p><p>PGCD $= 2^2 \times 3 = 12$. &nbsp; PPCM $= 2^3 \times 3^2 = 72$.</p><p>Vérification : $\text{PGCD} \times \text{PPCM} = 12 \times 72 = 864 = 24 \times 36$ ✓ (c’est toujours vrai pour deux nombres).</p>`,
  '13dl2xstaq0': R`<p>Les problèmes de PGCD parlent de <i>partager en groupes égaux</i> (la plus grande taille de groupe). Les problèmes de PPCM parlent de <i>choses qui se reproduisent en même temps</i> (la première fois que les cycles coïncident).</p>`,
  '1v4c3frqq3d': R`Quel est le plus grand commun diviseur (PGCD) de ⟦0⟧ et ⟦1⟧ ?`,
  '8l33q80f9g': R`Diviseurs de ⟦0⟧ : ⟦1⟧.<br>Diviseurs de ⟦2⟧ : ⟦3⟧.<br>Le plus grand diviseur commun est <b>⟦4⟧</b>.`,
  'slhedaglcs': R`Quel est le plus petit commun multiple (PPCM) de ⟦0⟧ et ⟦1⟧ ?`,
  '1gi8rsfc6pi': R`Multiples de ⟦0⟧ : ⟦1⟧, …<br>Multiples de ⟦2⟧ : ⟦3⟧, …<br>Le premier multiple commun est <b>⟦4⟧</b>.`,
  '15d9oj1fzj1': R`Lequel de ces nombres est <b>premier</b> ?`,
  'xvmwee4nwk': R`⟦0⟧ a exactement deux diviseurs, 1 et ⟦1⟧. Les autres sont composés : ⟦2⟧.`,
  '151txls1vlc': R`Combien de diviseurs ⟦0⟧ a-t-il ?`,
  '1tllv5888z': R`Listez les paires de diviseurs : ⟦0⟧. Les diviseurs sont ⟦1⟧, soit <b>⟦2⟧</b> diviseurs.`,
  'rjpmb07v6a': R`Quelle est la décomposition de ⟦0⟧ en facteurs premiers ?`,
  '162lv91sf8i': R`On divise successivement par des nombres premiers : ⟦0⟧ = ⟦1⟧. Tous les facteurs sont premiers, et leur produit redonne ⟦2⟧.`,
  '1dcblj5tqu6': R`Hana a ⟦0⟧ perles rouges et ⟦1⟧ perles bleues. Elle fabrique des bracelets identiques en utilisant toutes les perles, chacun avec le même nombre de perles rouges et le même nombre de perles bleues. Combien de bracelets peut-elle fabriquer au maximum ?`,
  '16f0mrep69j': R`Le nombre de bracelets doit diviser à la fois ⟦0⟧ et ⟦1⟧ : on cherche le PGCD. $\text{PGCD}(⟦2⟧ ; ⟦3⟧) = ⟦4⟧$. Elle peut fabriquer <b>⟦5⟧</b> bracelets, chacun avec ⟦6⟧ perles rouges et ⟦7⟧ perles bleues.`,
  '76jyl5vip0': R`Deux lampes viennent de clignoter en même temps. L’une clignote toutes les ⟦0⟧ secondes, l’autre toutes les ⟦1⟧ secondes. Dans combien de secondes clignoteront-elles de nouveau ensemble ?`,
  '2ddehafzm6d': R`secondes`,
  '1mfkmnfob4d': R`Elles clignotent ensemble aux multiples communs de ⟦0⟧ et ⟦1⟧. Le premier est le PPCM : <b>⟦2⟧</b> secondes.`,
});
