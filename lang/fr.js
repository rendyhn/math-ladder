/* Français — interface et noms des thèmes */
addUI('fr', {
  brandTag: R`Primaire → Université`,
  searchPh: R`Rechercher parmi ⟦0⟧ thèmes`,
  searchLabel: R`Rechercher un thème`,
  showTopics: R`Afficher les thèmes`,
  language: R`Langue`,
  mixedReview: R`Révision mixte`,
  reviewTitle: R`⟦0⟧ : révision mixte`,
  reviewBlurb: R`Une fiche qui reprend des questions des ⟦0⟧ thèmes de ce niveau, idéale pour réviser avant un contrôle.`,
  heroEyebrow: R`Mathématiques · Du primaire à l’université`,
  heroTitle: R`Du comptage aux valeurs propres, un échelon à la fois.`,
  heroLede: R`⟦0⟧ thèmes répartis sur quatre niveaux. Chacun comporte une leçon et une fiche d’exercices dont les nombres changent à chaque ouverture, avec un corrigé dépliable et des pages prêtes à imprimer.`,
  startWith: R`Commencer par : ⟦0⟧`,
  tryReview: R`Essayer une révision mixte`,
  levels: R`Niveaux`,
  nTopics: R`⟦0⟧ thèmes`,
  reviewLink: R`Fiche de révision mixte →`,
  freshQ: R`Nouvelle question`,
  anotherQ: R`Une autre question`,
  showAnswer: R`Voir la réponse`,
  hideAnswer: R`Masquer la réponse`,
  answerColon: R`Réponse :`,
  home: R`Accueil`,
  breadcrumb: R`Fil d’Ariane`,
  topicPos: R`Thème ⟦0⟧ sur ⟦1⟧`,
  lesson: R`Leçon`,
  practice: R`Exercices`,
  topicSections: R`Sections du thème`,
  printLesson: R`Imprimer la leçon`,
  practiseTopic: R`S’entraîner : ⟦0⟧ →`,
  prev: R`← Précédent`,
  next: R`Suivant →`,
  otherTopics: R`Autres thèmes`,
  questions: R`Questions`,
  qType: R`Type de question`,
  modeMixed: R`Mixte`,
  modeMc: R`QCM`,
  modeFill: R`Réponse à écrire`,
  newSheet: R`Nouvelle fiche`,
  printQ: R`Imprimer les questions`,
  worksheet: R`Fiche d’exercices`,
  practiceSheet: R`⟦0⟧ · Fiche d’exercices`,
  sheet: R`Fiche`,
  type: R`Type`,
  name: R`Nom`,
  klass: R`Classe`,
  date: R`Date`,
  score: R`Note`,
  fillNote: R`Les réponses à écrire acceptent les nombres entiers, les décimaux avec virgule (2,5), les fractions comme <code>3/4</code> et les expressions comme <code>2sqrt(3)</code> ou <code>5pi</code>. S’il y a plusieurs réponses, séparez-les par un point-virgule (;).`,
  checkAnswers: R`Vérifier mes réponses`,
  clearAnswers: R`Effacer les réponses`,
  answerKey: R`Corrigé`,
  showKey: R`Afficher le corrigé`,
  hideKey: R`Masquer le corrigé`,
  printKey: R`Imprimer le corrigé`,
  printBoth: R`Imprimer questions + corrigé`,
  keyHead: R`Corrigé · ⟦0⟧`,
  sheetNo: R`Fiche n° ⟦0⟧`,
  choicesFor: R`Choix pour la question ⟦0⟧`,
  answer: R`Réponse`,
  typeAnswer: R`Écrivez votre réponse`,
  qMc: R`QCM`,
  qFill: R`Réponse à écrire`,
  notAnswered: R`Sans réponse`,
  correct: R`Juste`,
  notQuite: R`Pas tout à fait`,
  scoreLine: R`⟦0⟧ / ⟦1⟧ justes`,
  unanswered: R`⟦0⟧ sans réponse`,
  source: R`Source :`,
  pageOf: R`Page ⟦0⟧ sur ⟦1⟧`,
  printToast: R`Choisissez « Enregistrer au format PDF » dans la boîte d’impression pour exporter. Si aucune boîte ne s’ouvre, ce lecteur bloque l’impression : ouvrez le fichier HTML téléchargé dans Chrome ou Edge et imprimez depuis celui-ci.`,
  langFail: R`Impossible de charger cette langue ; la page est affichée en anglais.`,
});
addMeta('fr', {
  levels: {
    elementary: [R`École primaire`, R`Primaire`, R`Années 1 à 6`, R`Sens du nombre, les quatre opérations, fractions, nombres décimaux, pourcentages, mesures et premiers pas en géométrie.`],
    junior: [R`Collège`, R`Collège`, R`Années 7 à 9`, R`Nombres relatifs, puissances, calcul littéral et équations du premier degré, ensembles, géométrie du cercle et des solides, premières notions de statistique et de probabilités.`],
    senior: [R`Lycée`, R`Lycée`, R`Années 10 à 12`, R`Second degré, fonctions, logarithmes, suites, trigonométrie, matrices, vecteurs, analyse, probabilités, statistique et logique.`],
    university: [R`Université`, R`Université`, R`Licence`, R`Analyse I à III, séries, équations différentielles, algèbre linéaire, nombres complexes, probabilités et statistique, mathématiques discrètes, méthodes numériques et transformées.`],
  },
  topics: {
    'place-value': [R`Numération et arrondis`, R`Valeur de chaque chiffre, décomposition, comparaison des nombres entiers et arrondis.`],
    'add-sub': [R`Addition et soustraction`, R`Addition posée avec retenue, soustraction avec retenue, nombres manquants et problèmes.`],
    'mul-div': [R`Multiplication et division`, R`Tables de multiplication, multiplication posée, division exacte et avec reste.`],
    'order-ops': [R`Priorités opératoires`, R`Parenthèses, puissances, puis multiplications et divisions, puis additions et soustractions.`],
    'factors': [R`Diviseurs, multiples et nombres premiers`, R`Diviseurs et multiples, nombres premiers, décomposition en facteurs premiers, PGCD et PPCM.`],
    'fractions': [R`Fractions`, R`Fractions égales, simplification, comparaison, nombres mixtes et les quatre opérations.`],
    'decimals': [R`Nombres décimaux`, R`Dixièmes, centièmes et millièmes ; comparer, arrondir et calculer avec les décimaux.`],
    'percent': [R`Pourcentages`, R`Pourcentage d’une quantité, conversions, remises et évolutions en pourcentage.`],
    'measurement': [R`Mesures et unités`, R`Unités métriques de longueur, de masse et de contenance, et calculs de durées.`],
    'perimeter-area': [R`Périmètre et aire`, R`Périmètre et aire des rectangles, carrés, triangles, parallélogrammes, trapèzes et figures composées.`],
    'volume-basic': [R`Volume et aire totale`, R`Volume des cubes et des pavés droits, contenance en litres et aire totale des boîtes.`],
    'angles-shapes': [R`Angles et figures`, R`Types d’angles, angles sur une droite et dans les polygones, propriétés des triangles.`],
    'data-basic': [R`Données et moyennes`, R`Lire des tableaux et des graphiques ; moyenne, médiane, mode et étendue.`],
    'integers': [R`Nombres relatifs`, R`Nombres négatifs sur la droite graduée et règle des signes pour les quatre opérations.`],
    'exponents': [R`Puissances et racines`, R`Puissances, règles de calcul, exposants nuls et négatifs, racines carrées et cubiques, simplification des radicaux.`],
    'sci-notation': [R`Écriture scientifique`, R`Écrire les très grands et très petits nombres sous la forme a × 10ⁿ et calculer avec.`],
    'ratio': [R`Ratios, débits et proportionnalité`, R`Simplifier un ratio, partage proportionnel, proportionnalité directe et inverse, échelles et vitesse.`],
    'algebra-expr': [R`Calcul littéral`, R`Termes semblables, développement, factorisation, substitution et identités remarquables.`],
    'linear-eq': [R`Équations du premier degré`, R`Équations avec parenthèses, fractions et inconnue des deux côtés ; problèmes.`],
    'inequalities': [R`Inéquations du premier degré`, R`Symboles d’inégalité, droite graduée, résolution et changement de sens de l’inégalité.`],
    'sets': [R`Ensembles et diagrammes de Venn`, R`Notation, sous-ensembles, réunion, intersection, complémentaire et dénombrement avec des diagrammes de Venn.`],
    'linear-functions': [R`Fonctions affines et graphiques`, R`Coordonnées, coefficient directeur, ordonnée à l’origine, équations de droites, droites parallèles et perpendiculaires.`],
    'systems': [R`Systèmes d’équations linéaires`, R`Deux équations à deux inconnues par substitution et par combinaison ; problèmes.`],
    'pythagoras': [R`Théorème de Pythagore`, R`Côtés d’un triangle rectangle, triplets pythagoriciens, distances et réciproque du théorème.`],
    'circles': [R`Cercles et disques`, R`Périmètre, aire, arcs et secteurs, angles inscrits et au centre.`],
    'solids': [R`Aires et volumes des solides`, R`Prismes, cylindres, pyramides, cônes et boules.`],
    'statistics-jh': [R`Statistique : position et dispersion`, R`Moyenne, médiane et mode à partir de listes et de tableaux d’effectifs, et effet de nouvelles données.`],
    'probability-jh': [R`Probabilités`, R`Univers, probabilité d’un événement, événement contraire et effectif attendu.`],
    'social-arith': [R`Maths de l’argent : bénéfice, remise et intérêts`, R`Bénéfice et perte, taux de bénéfice, remise et taxe, intérêts simples, poids brut et net.`],
    'patterns': [R`Motifs numériques et suites`, R`Motifs arithmétiques et géométriques, terme général et suites particulières.`],
    'similarity': [R`Transformations et similitude`, R`Translations, symétries, rotations et homothéties ; figures semblables et rapport de similitude.`],
    'quadratics': [R`Équations du second degré`, R`Factorisation, forme canonique, discriminant et formule des racines, somme et produit des racines.`],
    'quad-functions': [R`Fonctions du second degré et paraboles`, R`Sommet, axe de symétrie, forme canonique, maximum et minimum, applications.`],
    'functions': [R`Fonctions, composition et réciproques`, R`Ensemble de définition et ensemble image, fonctions composées, fonctions réciproques, fonctions définies par morceaux.`],
    'exp-log': [R`Exponentielles et logarithmes`, R`Exposants rationnels, propriétés des logarithmes, équations exponentielles et logarithmiques, croissance.`],
    'sequences': [R`Suites et séries`, R`Suites arithmétiques et géométriques, sommes, séries géométriques infinies et notation sigma.`],
    'trig-basics': [R`Trigonométrie : rapports et cercle trigonométrique`, R`SOH-CAH-TOA, valeurs exactes, radians, cercle trigonométrique et angles d’élévation.`],
    'trig-identities': [R`Identités et équations trigonométriques`, R`Identité fondamentale, formules d’addition et de duplication ; équations trigonométriques.`],
    'triangle-rules': [R`Loi des sinus, loi des cosinus et aire`, R`Résoudre n’importe quel triangle avec les lois des sinus et des cosinus, et calculer son aire.`],
    'polynomials': [R`Polynômes et théorème du reste`, R`Degré et opérations, division de polynômes, théorèmes du reste et du facteur, relations de Viète pour les cubiques.`],
    'matrices': [R`Matrices`, R`Opérations sur les matrices, produit, déterminants et inverses des matrices 2×2.`],
    'vectors': [R`Vecteurs`, R`Coordonnées, norme, opérations, produit scalaire et angle entre deux vecteurs.`],
    'limits': [R`Limites`, R`Substitution directe, formes indéterminées, limites à l’infini, limites trigonométriques et continuité.`],
    'derivatives': [R`Dérivées`, R`La dérivée comme pente, dérivée des puissances, tangentes, points critiques et optimisation.`],
    'integrals': [R`Intégrales`, R`Primitives, primitives des puissances, intégrales définies et aires.`],
    'combinatorics': [R`Dénombrement, arrangements et combinaisons`, R`Principe multiplicatif, factorielles, arrangements, combinaisons et formule du binôme.`],
    'probability-sh': [R`Probabilités : règles et conditionnement`, R`Formules de la somme et du produit, indépendance, probabilités conditionnelles et formule de Bayes.`],
    'statistics-sh': [R`Statistique : dispersion et distributions`, R`Quartiles et écart interquartile, valeurs aberrantes, variance et écart type, données groupées et transformations.`],
    'conics': [R`Géométrie analytique et cercles`, R`Milieu et distance, équation d’un cercle, forme développée, tangentes et paraboles.`],
    'linear-programming': [R`Programmation linéaire`, R`Contraintes, domaine réalisable, fonction objectif et méthode des sommets.`],
    'logic': [R`Logique mathématique`, R`Propositions, connecteurs, tables de vérité, réciproque et contraposée, quantificateurs et raisonnements valides.`],
    'diff-techniques': [R`Techniques de dérivation`, R`Dérivée d’un produit, d’un quotient et d’une composée, dérivées exponentielles et logarithmiques, dérivation implicite.`],
    'diff-applications': [R`Applications de la dérivation`, R`Règle de L’Hôpital, optimisation, taux liés, approximation affine, convexité et théorème des accroissements finis.`],
    'integration-techniques': [R`Techniques d’intégration`, R`Changement de variable, intégration par parties, décomposition en éléments simples, intégrales trigonométriques et généralisées.`],
    'integral-applications': [R`Applications de l’intégrale`, R`Aire entre deux courbes, volumes de révolution, valeur moyenne, longueur d’arc et travail.`],
    'series': [R`Suites et séries infinies`, R`Critères de convergence, séries géométriques et télescopiques, séries entières, séries de Taylor et de Maclaurin.`],
    'multivariable': [R`Analyse à plusieurs variables`, R`Dérivées partielles, gradient, dérivée directionnelle, points critiques, intégrales doubles et multiplicateurs de Lagrange.`],
    'ode': [R`Équations différentielles`, R`Équations du premier ordre à variables séparables et linéaires, croissance et décroissance, équations linéaires du second ordre.`],
    'linear-algebra': [R`Algèbre linéaire`, R`Déterminants, rang, systèmes linéaires, indépendance, valeurs propres et vecteurs propres.`],
    'complex': [R`Nombres complexes`, R`Calculs avec i, conjugué, module et argument, forme trigonométrique et formule de Moivre.`],
    'distributions': [R`Lois de probabilité`, R`Variables aléatoires, espérance et variance, lois binomiale, de Poisson et normale.`],
    'inference': [R`Statistique inférentielle`, R`Distributions d’échantillonnage, intervalles de confiance, tests d’hypothèse, erreurs et régression.`],
    'discrete': [R`Mathématiques discrètes`, R`Arithmétique modulaire, algorithme d’Euclide, principes de dénombrement, récurrences et théorie des graphes.`],
    'numerical': [R`Méthodes numériques`, R`Dichotomie et Newton–Raphson, méthodes des trapèzes et de Simpson, méthode d’Euler et erreurs.`],
    'vector-calculus': [R`Analyse vectorielle`, R`Champs de vecteurs, divergence et rotationnel, champs conservatifs, intégrales curvilignes et théorème de Green.`],
    'laplace': [R`Transformée de Laplace`, R`Table des transformées, linéarité, translation, transformée inverse et problèmes de Cauchy.`],
  },
});

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

/* Français — primaire (fractions → mesures) */
addT('fr', {
  // fractions
  '1j59vvw5wlm': R`
<p>Une <b>fraction</b> $\frac{a}{b}$ désigne $a$ parts sur $b$ parts égales. Le nombre du haut est le <b>numérateur</b> ; celui du bas est le <b>dénominateur</b>.</p>
<h3>Fractions égales et fraction irréductible</h3>
<p>Multiplier ou diviser le numérateur et le dénominateur par un même nombre donne une fraction égale : $\frac{2}{3} = \frac{4}{6} = \frac{10}{15}$. Pour <b>simplifier</b>, on divise les deux par leur PGCD :</p>
⟦0⟧
<h3>Nombres mixtes</h3>
<p>$2\frac{1}{3}$ signifie $2 + \frac{1}{3}$. Sous forme de fraction : $2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$.</p>
<h3>Addition et soustraction</h3>
⟦1⟧
⟦2⟧
<h3>Multiplication et division</h3>
⟦3⟧
<p>Pour diviser, on <b>garde</b> la première fraction, on <b>change</b> ÷ en × et on <b>inverse</b> la seconde fraction.</p>
⟦4⟧
<h3>Fraction d’une quantité</h3>
<p>On divise par le dénominateur, puis on multiplie par le numérateur : $\frac{3}{8}$ de $40 = (40 \div 8) \times 3 = 15$.</p>
⟦5⟧`,
  'twupiargma': R`<p>On ne peut additionner ou soustraire que des fractions de <b>même dénominateur</b>. On les réécrit avec un dénominateur commun (le PPCM des dénominateurs), puis on additionne ou soustrait les numérateurs.</p>`,
  'cscyf10ta5': R`\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \qquad\qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}`,
  'bcas553r7s': R`<p>N’additionnez jamais les dénominateurs : $\frac{1}{2} + \frac{1}{3}$ vaut $\frac{5}{6}$, et non $\frac{2}{5}$.</p>`,
  'ixkiz8sse6': R`Écrivez $\frac{⟦0⟧}{⟦1⟧}$ sous forme irréductible.`,
  '10gte9lmsdd': R`Écrivez une fraction comme 3/4.`,
  '1pjukmxebsh': R`Le PGCD de ⟦0⟧ et ⟦1⟧ est ⟦2⟧. On divise les deux par ⟦3⟧ : $\frac{⟦4⟧ \div ⟦5⟧}{⟦6⟧ \div ⟦7⟧} = \frac{⟦8⟧}{⟦9⟧}$.`,
  'nvda2ntfzh': R`Calculez $\frac{⟦0⟧}{⟦1⟧} + \frac{⟦2⟧}{⟦3⟧}$. Donnez le résultat sous forme irréductible.`,
  '227nw1m409d': R`Dénominateur commun ⟦0⟧ : $\frac{⟦1⟧}{⟦2⟧} + \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '1mtmp0absry': R`Calculez $\frac{⟦0⟧}{⟦1⟧} - \frac{⟦2⟧}{⟦3⟧}$. Donnez le résultat sous forme irréductible.`,
  'gyruuxmt48': R`Dénominateur commun ⟦0⟧ : $\frac{⟦1⟧}{⟦2⟧} - \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '2amnbki6syc': R`Calculez $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧}$. Donnez le résultat sous forme irréductible.`,
  '1oq98j0zwy6': R`On multiplie les numérateurs entre eux et les dénominateurs entre eux : $\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧ \times ⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '4ip7z0hj87': R`Calculez $\frac{⟦0⟧}{⟦1⟧} \div \frac{⟦2⟧}{⟦3⟧}$. Donnez le résultat sous forme irréductible.`,
  '1unu6p3t9n0': R`On garde, on change, on inverse : $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '2ebc0tw6di0': R`Combien valent les $\frac{⟦0⟧}{⟦1⟧}$ de ⟦2⟧ ?`,
  'vi27l05tmq': R`On divise par le dénominateur, puis on multiplie par le numérateur : $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ et $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '17rm8piimg0': R`Écrivez $⟦0⟧\frac{⟦1⟧}{⟦2⟧}$ sous la forme d’une seule fraction.`,
  '1vkdspzdrbu': R`Écrivez une fraction comme 11/4.`,
  '1o401nhusn': R`Partie entière × dénominateur + numérateur : $⟦0⟧ \times ⟦1⟧ + ⟦2⟧ = ⟦3⟧$. On garde le dénominateur : $\frac{⟦4⟧}{⟦5⟧}$.`,
  'kune7g17fg': R`Quelle fraction est la <b>plus grande</b> ?`,
  '1lvlk3jpc2g': R`Quelle fraction est la <b>plus petite</b> ?`,
  '1or6yhfdw2': R`On les compare sous forme décimale (ou avec un dénominateur commun) : ⟦0⟧. La plus grande est $⟦1⟧$.`,
  '2er4a94vvmc': R`On les compare sous forme décimale (ou avec un dénominateur commun) : ⟦0⟧. La plus petite est $⟦1⟧$.`,

  // decimals
  '2663pva71c8': R`
<p>Les nombres décimaux prolongent la numération à droite des unités. Chaque rang vaut un dixième du rang situé à sa gauche.</p>
⟦0⟧
<p>Ainsi $47{,}305 = 40 + 7 + \frac{3}{10} + \frac{0}{100} + \frac{5}{1000}$.</p>
<h3>Comparer des décimaux</h3>
<p>Donnez aux nombres le même nombre de chiffres après la virgule en ajoutant des zéros, puis comparez : $0{,}5 = 0{,}50 \gt 0{,}45$. Un décimal plus long n’est pas forcément plus grand !</p>
<h3>Addition et soustraction</h3>
⟦1⟧
⟦2⟧
<h3>Multiplication</h3>
<p>On multiplie comme s’il n’y avait pas de virgule, puis on compte le nombre total de chiffres après la virgule dans les facteurs : le résultat en a autant.</p>
⟦3⟧
<h3>Division et conversions</h3>
<p>Multiplier par 10, 100 ou 1000 décale les chiffres de 1, 2 ou 3 rangs vers la gauche (le nombre grandit) ; diviser les décale vers la droite. Une fraction devient un décimal en divisant le numérateur par le dénominateur : $\frac{3}{8} = 3 \div 8 = 0{,}375$.</p>
<h3>Arrondir des décimaux</h3>
<p>Même règle que pour les entiers : on regarde le chiffre suivant. $6{,}847$ arrondi au dixième près donne $6{,}8$ ; au centième près, $6{,}85$.</p>
⟦4⟧`,
  'yhxj3mz2az': R`Dixièmes`,
  '1usmp59h50n': R`Centièmes`,
  'biszmhnvcw': R`Millièmes`,
  '29ru7wnae4a': R`<p>Alignez les <b>virgules</b>, complétez les rangs vides par des zéros, puis additionnez ou soustrayez comme avec des entiers.</p>`,
  '1refy6cjloa': R`<p>$12{,}7 + 3{,}45$ : on écrit $12{,}70 + 3{,}45 = 16{,}15$.</p>`,
  '1lqqzrepgzp': R`1{,}3 \times 0{,}24 : \quad 13 \times 24 = 312 \;\Rightarrow\; 0{,}312 \quad (1 + 2 = 3 \text{ chiffres après la virgule})`,
  'juf948b8yc': R`<p>$\frac{3}{4}$ vaut 0,75, et non 3,4. Le trait de fraction signifie « divisé par ».</p>`,
  '11m0f3xnsds': R`Alignez les virgules (écrivez ⟦0⟧ sous la forme ⟦1⟧) et additionnez : $⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'qfevgwaqck': R`Alignez les virgules et soustrayez : $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '1p6qy0zwa3u': R`On ignore les virgules : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Les facteurs ont en tout ⟦3⟧, donc le résultat est <b>⟦4⟧</b>.`,
  'uqon6l82ny': R`1 chiffre après la virgule`,
  'tx8fdinl8c': R`2 chiffres après la virgule`,
  'b7wqcpujtu': R`Écrivez $\frac{⟦0⟧}{⟦1⟧}$ sous forme décimale.`,
  '1ufy8j9fr2y': R`On divise le numérateur par le dénominateur : $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$.`,
  'vje0snups3': R`au dixième près`,
  '1liz42210hc': R`des dixièmes`,
  '104jyqiqg9x': R`au centième près`,
  '10lk6io95d0': R`des centièmes`,
  '65m0asa80m': R`à l’unité près`,
  'elqb7vv91e': R`Arrondissez ⟦0⟧ ⟦1⟧.`,
  '10rdjn6n7af': R`Regardez le chiffre qui suit celui ⟦0⟧ et arrondissez ⟦1⟧ à <b>⟦2⟧</b>.`,
  'srl9a8gbof': R`Quel décimal est le <b>plus grand</b> ? &nbsp;⟦0⟧`,
  'gs5zz0z26m': R`Quel décimal est le <b>plus petit</b> ? &nbsp;⟦0⟧`,
  '1ddc7akhylh': R`Écrivez-les tous avec trois chiffres après la virgule : ⟦0⟧. Le plus grand est <b>⟦1⟧</b>.`,
  'clxur1r60o': R`Écrivez-les tous avec trois chiffres après la virgule : ⟦0⟧. Le plus petit est <b>⟦1⟧</b>.`,

  // percent
  'r0jl598zxh': R`
<p><b>Pour cent</b> signifie « sur 100 » : $35\% = \frac{35}{100} = 0{,}35$.</p>
⟦0⟧
<h3>Les trois questions de base</h3>
⟦1⟧
⟦2⟧
<h3>Hausses, baisses et réductions</h3>
<p>Une réduction de $20\%$ sur 80 euros fait économiser $0{,}2 \times 80 = 16$ euros ; le prix soldé est donc $80 - 16 = 64$ euros. Plus rapide : on paie $80\%$ du prix, soit $0{,}8 \times 80 = 64$.</p>
<p>Une hausse de $p\%$ revient à multiplier par $1 + \frac{p}{100}$ ; une baisse, à multiplier par $1 - \frac{p}{100}$.</p>
⟦3⟧`,
  '2e1ivkcc9wi': R`Fraction`,
  '21lfn42y4af': R`Décimal`,
  '1vaz29jk1go': R`Pourcentage`,
  '1lj32zs95qv': R`<ul><li><b>Pourcentage d’une quantité :</b> $p\% \text{ de } N = \frac{p}{100} \times N$.</li><li><b>Quel pourcentage de $b$ représente $a$ ?</b> $\frac{a}{b} \times 100\%$.</li><li><b>Taux d’évolution :</b> $\frac{\text{variation}}{\text{valeur initiale}} \times 100\%$.</li></ul>`,
  '14zii6dfm6x': R`<p>$15\%$ de $240 = 0{,}15 \times 240 = 36$. &nbsp; Astuce de calcul mental : $10\% = 24$, $5\% = 12$, total $36$.</p>`,
  '1xvrzy7qz2k': R`<p>Pour un taux d’évolution, on divise toujours par la valeur <b>initiale</b>. Un prix qui passe de 50 à 60 augmente de $\frac{10}{50} = 20\%$, et non de $\frac{10}{60}$.</p>`,
  '1gobo82ltgo': R`Combien font ⟦0⟧ % de ⟦1⟧ ?`,
  '17t3n1yumuv': R`$⟦0⟧\% \text{ de } ⟦1⟧ = \frac{⟦2⟧}{100} \times ⟦3⟧ = ⟦4⟧$.`,
  'x6d2i6pjon': R`Quel pourcentage de ⟦0⟧ représente ⟦1⟧ ?`,
  '166o0aldzl7': R`Écrivez $\frac{⟦0⟧}{⟦1⟧}$ sous forme de pourcentage.`,
  '1zxz5pk8y96': R`Une veste coûte ⟦0⟧ euros. Elle est soldée à −⟦1⟧ %. Quel est son prix soldé ?`,
  '1fg7th2fl2k': R`euros`,
  '2d5e1injpmi': R`Réduction $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Prix soldé $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ euros.`,
  '188c7uiuhvg': R`Une ville compte ⟦0⟧ habitants. Sa population augmente de ⟦1⟧ %. Quelle est la nouvelle population ?`,
  '1z4269yh9sc': R`Augmentation $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Nouvelle population $= ⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '24ppsoc883t': R`Le prix d’un livre passe de ⟦0⟧ euros à ⟦1⟧ euros. Quel est le pourcentage d’augmentation ?`,
  '18zivp6w2kh': R`Le prix d’un livre passe de ⟦0⟧ euros à ⟦1⟧ euros. Quel est le pourcentage de baisse ?`,
  '275khxq1hou': R`Variation : ⟦0⟧ euros. Pourcentage d’augmentation : ⟦1⟧ — on divise toujours par le prix <b>initial</b>.`,
  '260avkxsjev': R`Variation : ⟦0⟧ euros. Pourcentage de baisse : ⟦1⟧ — on divise toujours par le prix <b>initial</b>.`,

  // measurement
  'ymwylkippx': R`
<p>Le système métrique repose sur les puissances de dix, avec des préfixes qui indiquent la taille d’une unité.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Les durées</h3>
<p>Le temps n’est <i>pas</i> décimal : une heure compte 60 minutes, pas 100. Pour calculer une durée, avancez par étapes : de 09:35 à 13:10, il y a 25 min (jusqu’à 10:00) + 3 h (jusqu’à 13:00) + 10 min = 3 h 35 min = 215 minutes.</p>
⟦4⟧`,
  '1vt4z8db5g': R`Préfixe`,
  '18vrcwaxvwu': R`Signification`,
  '1j1ms4p35q': R`Exemples`,
  '1837d2yv17g': R`kilo- (k)`,
  '6v2px6djsv': R`centi- (c)`,
  'cwnj8q0jlm': R`milli- (m)`,
  '4ynf6btmh8': R`Grandeur`,
  '1bcl39yblb4': R`Conversions`,
  '1yt0gqcalpk': R`Longueur`,
  '1pzczs2mse4': R`Masse`,
  '3r7jg1gvau': R`1 t (tonne) = 1 000 kg · 1 kg = 1 000 g`,
  '25cg9l2x1fi': R`Contenance`,
  '1ellrod4539': R`Durée`,
  '149iz1sgt': R`1 min = 60 s · 1 h = 60 min · 1 jour = 24 h · 1 semaine = 7 jours`,
  '2g0x2qx5tup': R`<p>Pour passer d’une unité <b>plus grande</b> à une unité <b>plus petite</b>, il en faut davantage : on <b>multiplie</b>. De la plus petite à la plus grande : on <b>divise</b>.</p>`,
  'x1upmnco35': R`<p>$3{,}5 \text{ km} = 3{,}5 \times 1000 = 3\,500 \text{ m}$. &nbsp; $2\,750 \text{ g} = 2\,750 \div 1000 = 2{,}75 \text{ kg}$.</p>`,
  't9d9f384y5': R`<p>Ne soustrayez pas des horaires comme des nombres ordinaires : $13{:}10 - 9{:}35$ ne vaut pas $1310 - 935 = 375$ minutes.</p>`,
  'q3mks7cmvp': R`Convertissez ⟦0⟧ ⟦1⟧ en ⟦2⟧.`,
  '695i1r66ec': R`D’une unité plus grande vers une plus petite, on multiplie : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$`,
  '1y3viru9jwt': R`D’une unité plus petite vers une plus grande, on divise : $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$`,
  '10b6a48v5cr': R`Combien de minutes y a-t-il dans ⟦0⟧ h ⟦1⟧ min ?`,
  '1jj8c6wfcmv': R`minutes`,
  '26onbfrmj2m': R`1 heure = 60 minutes : $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ minutes.`,
  '2fcfktfjfb2': R`Combien de secondes y a-t-il dans ⟦0⟧ min ⟦1⟧ s ?`,
  '1qje99e2i79': R`1 minute = 60 secondes : $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ secondes.`,
  '1640fwpwscw': R`Un train part à ⟦0⟧ et arrive à ⟦1⟧ le même jour. Combien de minutes dure le trajet ?`,
  '1bvdcgo9oas': R`De ⟦0⟧ à ⟦1⟧, il s’écoule ⟦2⟧ h ⟦3⟧ min, soit $⟦4⟧ \times 60 + ⟦5⟧ = ⟦6⟧$ minutes.`,
  'jz7sp6v78m': R`Additionnez ⟦0⟧ m ⟦1⟧ cm et ⟦2⟧ m ⟦3⟧ cm. Donnez le résultat en centimètres.`,
  '1v59jh3egmq': R`⟦0⟧ m ⟦1⟧ cm = ⟦2⟧ cm et ⟦3⟧ m ⟦4⟧ cm = ⟦5⟧ cm. Total : $⟦6⟧ + ⟦7⟧ = ⟦8⟧$ cm.`,
});

/* Français — primaire (périmètre et aire → données) */
addT('fr', {
  // perimeter-area
  '1xtxvjsrb9v': R`
<p>Le <b>périmètre</b> est la longueur totale du contour d’une figure (en cm, m, …). L’<b>aire</b> est la mesure de la surface qu’elle occupe (en unités carrées : cm², m², …).</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Figures composées</h3>
<p>Découpez une figure en L ou une autre figure composée en rectangles et en triangles, puis additionnez les aires — ou partez d’un grand rectangle et soustrayez le morceau manquant.</p>
⟦4⟧`,
  '1be5xudsubm': R`Rectangle, triangle et trapèze — la hauteur se mesure toujours perpendiculairement à la base.`,
  '1vbb9fjurso': R`Figure`,
  '1bkcetbdzwi': R`Périmètre`,
  '9g9qb013dx': R`Aire`,
  '1klcvelpbpq': R`Rectangle`,
  '1bkqo8aj6lu': R`Carré (côté $s$)`,
  'aioobs5p8o': R`Triangle`,
  'jpaxz6sbbc': R`somme des trois côtés`,
  '2ch6blse094': R`Parallélogramme`,
  '19b7alat8ps': R`somme des côtés`,
  'tfgy8ywg4m': R`Trapèze`,
  '2glmrmlwat4': R`<p>Un triangle est la moitié d’un rectangle (ou d’un parallélogramme) de même base et de même hauteur — d’où le $\frac{1}{2}$.</p>`,
  'ro993i6hdb': R`<p>Un rectangle mesure 12 m sur 5 m. Périmètre $= 2(12 + 5) = 34$ m. Aire $= 12 \times 5 = 60$ m².</p>`,
  '23w7bd7ygef': R`<p>Le périmètre s’exprime en unités de longueur (m) ; l’aire en unités carrées (m²). De plus, la hauteur d’un triangle est perpendiculaire à la base — ce n’est pas le côté oblique.</p>`,
  '3o5vcpwyc2': R`Un rectangle mesure ⟦0⟧ cm de long et ⟦1⟧ cm de large. Quel est son périmètre ?`,
  '1mlwgvw7rha': R`$P = 2(l + w) = 2(⟦0⟧ + ⟦1⟧) = ⟦2⟧$ cm.`,
  '29o3zagcnfc': R`Un jardin rectangulaire mesure ⟦0⟧ m de long et ⟦1⟧ m de large. Quelle est son aire ?`,
  '1icmdazlj61': R`Un carré a une aire de ⟦0⟧ cm². Quel est son périmètre ?`,
  '102zowaciba': R`Côté $= \sqrt{⟦0⟧} = ⟦1⟧$ cm, donc le périmètre vaut $4 \times ⟦2⟧ = ⟦3⟧$ cm.`,
  'b1fe5m9ffr': R`Un carré a un périmètre de ⟦0⟧ cm. Quelle est son aire ?`,
  '13amxb9l6l6': R`Côté $= ⟦0⟧ \div 4 = ⟦1⟧$ cm, donc l’aire vaut $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$ cm².`,
  'ahhkpun21u': R`Un triangle a une base de ⟦0⟧ cm et une hauteur de ⟦1⟧ cm. Quelle est son aire ?`,
  'vcwpcnyvdg': R`$A = \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm².`,
  'lassz20hi3': R`Un parallélogramme a une base de ⟦0⟧ m et une hauteur de ⟦1⟧ m. Quelle est son aire ?`,
  '15yoihpm5qi': R`Un trapèze a des bases parallèles de ⟦0⟧ cm et ⟦1⟧ cm et une hauteur de ⟦2⟧ cm. Quelle est son aire ?`,
  '7f4u2yt2ji': R`$A = \frac{1}{2}(a + b)h = \frac{1}{2}(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '20cf1i7tqd7': R`Un rectangle a un périmètre de ⟦0⟧ m et une longueur de ⟦1⟧ m. Quelle est sa largeur ?`,
  '146lgv8gvtr': R`$2(l + w) = ⟦0⟧$, donc $l + w = ⟦1⟧$ et $w = ⟦2⟧ - ⟦3⟧ = ⟦4⟧$ m.`,
  '1cisitk2yw7': R`Un sol en forme de L est obtenu en retirant un rectangle de ⟦0⟧ m × ⟦1⟧ m dans un coin d’un rectangle de ⟦2⟧ m × ⟦3⟧ m. Quelle est l’aire du sol ?`,
  '4fca853um1': R`Grand rectangle moins la partie retirée : $⟦0⟧ \times ⟦1⟧ - ⟦2⟧ \times ⟦3⟧ = ⟦4⟧ - ⟦5⟧ = ⟦6⟧$ m².`,

  // volume-basic
  '27t1x8ik6r5': R`
<p>Le <b>volume</b> est l’espace occupé par un solide ; il se compte en <b>unités cubes</b> (cm³, m³). Un cube de 1 cm d’arête a un volume de 1 cm³.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Aire totale</h3>
<p>L’aire totale est la somme des aires de toutes les faces. Un pavé droit a trois paires de rectangles identiques :</p>
⟦3⟧
⟦4⟧`,
  'eqp3lgj8pe': R`\text{Pavé droit : } V = l \times w \times h \qquad\qquad \text{Cube : } V = s^3`,
  '1v18xwhq9wo': R`<p>La contenance est liée au volume : $1 \text{ cm}^3 = 1 \text{ mL}$ et $1000 \text{ cm}^3 = 1 \text{ L}$. De plus, $1 \text{ m}^3 = 1000 \text{ L}$.</p>`,
  '1y5vqy9gj8b': R`<p>Un aquarium mesure 50 cm de long, 30 cm de large et 40 cm de haut.</p><p>$V = 50 \times 30 \times 40 = 60\,000 \text{ cm}^3 = 60 \text{ L}$.</p>`,
  'n4vhcjq4z5': R`A = 2(lw + lh + wh) \qquad\qquad \text{Cube : } A = 6s^2`,
  '1rmk9dk27r1': R`<p>Le volume s’exprime en unités cubes (cm³) ; l’aire totale en unités carrées (cm²). Si l’on connaît le volume et deux arêtes, on divise pour trouver la troisième : $h = \frac{V}{l \times w}$.</p>`,
  '28sikx14trk': R`Un cube a des arêtes de ⟦0⟧ cm. Quel est son volume ?`,
  'n0rlue63yl': R`$V = s^3 = ⟦0⟧^3 = ⟦1⟧$ cm³.`,
  '279nv9sb40d': R`Une boîte mesure ⟦0⟧ cm de long, ⟦1⟧ cm de large et ⟦2⟧ cm de haut. Quel est son volume ?`,
  '18f8h5wvjps': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '2g4aunze98e': R`Un pavé droit a un volume de ⟦0⟧ cm³. Sa longueur est ⟦1⟧ cm et sa largeur ⟦2⟧ cm. Quelle est sa hauteur ?`,
  '12q7gqhxt7v': R`$h = \frac{V}{l \times w} = \frac{⟦0⟧}{⟦1⟧ \times ⟦2⟧} = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$ cm.`,
  '107zxyhfk8j': R`Un réservoir mesure ⟦0⟧ cm de long, ⟦1⟧ cm de large et ⟦2⟧ cm de haut. Combien de litres d’eau peut-il contenir ?`,
  '1xdyfr0a4jd': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³, et $1000 \text{ cm}^3 = 1 \text{ L}$, donc il contient $⟦4⟧ \div 1000 = ⟦5⟧$ L.`,
  'j16awwfbde': R`Calculez l’aire totale d’un pavé droit de ⟦0⟧ cm × ⟦1⟧ cm × ⟦2⟧ cm.`,
  '15zob952c7': R`$A = 2(lw + lh + wh) = 2(⟦0⟧ + ⟦1⟧ + ⟦2⟧) = ⟦3⟧$ cm².`,
  'b7w1jgcvao': R`Un cube a un volume de ⟦0⟧ cm³. Quelle est la longueur de chaque arête ?`,
  '29p9f2w08h': R`On cherche $s^3 = ⟦0⟧$. Comme $⟦1⟧ \times ⟦2⟧ \times ⟦3⟧ = ⟦4⟧$, chaque arête mesure ⟦5⟧ cm.`,

  // angles-shapes
  '1zhvjckeb0g': R`
<p>Les angles mesurent une rotation, en <b>degrés</b> (°). Un tour complet vaut $360^\circ$.</p>
⟦0⟧
⟦1⟧
<h3>Triangles</h3>
<p><b>Équilatéral</b> : trois côtés égaux, chaque angle vaut $60^\circ$. <b>Isocèle</b> : deux côtés égaux et deux angles à la base égaux. <b>Quelconque</b> : aucun côté égal. Un triangle <b>rectangle</b> a un angle de $90^\circ$.</p>
<h3>Polygones</h3>
<p>Un polygone à $n$ côtés se découpe en $n - 2$ triangles à partir d’un sommet, donc</p>
⟦2⟧
<p>Dans un polygone <b>régulier</b>, tous les angles sont égaux ; chacun vaut donc $\frac{(n-2) \times 180^\circ}{n}$. Un hexagone régulier a des angles de $\frac{4 \times 180^\circ}{6} = 120^\circ$.</p>
⟦3⟧`,
  'k7wfdtk1dy': R`Type`,
  '1czpi6e2j2z': R`Mesure`,
  '2eamokno2qd': R`Aigu`,
  '14yb8vum3mx': R`moins de $90^\circ$`,
  '10qgoh7fpcr': R`Droit`,
  '96isxim10t': R`exactement $90^\circ$`,
  '29pmtotpc3r': R`Obtus`,
  '18bc6xajfgk': R`entre $90^\circ$ et $180^\circ$`,
  'zb7exyin0e': R`Plat`,
  '1stepofrhwb': R`exactement $180^\circ$`,
  '7pnkzl3606': R`Rentrant`,
  '24bbunbptvm': R`entre $180^\circ$ et $360^\circ$`,
  '2douwrf277u': R`<ul><li>Les angles sur une droite ont pour somme $180^\circ$.</li><li>Les angles autour d’un point ont pour somme $360^\circ$.</li><li>Les angles opposés par le sommet sont égaux.</li><li>La somme des angles d’un triangle vaut $180^\circ$ ; celle d’un quadrilatère, $360^\circ$.</li></ul>`,
  '1g2z1i7tlna': R`\text{somme des angles intérieurs} = (n - 2) \times 180^\circ`,
  '9r6qtn8gpk': R`<p>Un triangle a des angles de $48^\circ$ et $75^\circ$. Le troisième mesure $180^\circ - 48^\circ - 75^\circ = 57^\circ$.</p>`,
  'fbd3n0ai0s': R`Deux angles d’un triangle mesurent $⟦0⟧^\circ$ et $⟦1⟧^\circ$. Combien mesure le troisième ?`,
  '1mgnf9acc40': R`La somme des angles d’un triangle vaut $180^\circ$ : $180^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ = ⟦2⟧^\circ$.`,
  '17ra9ybal44': R`Deux angles sont côte à côte sur une droite. L’un mesure $⟦0⟧^\circ$. Combien mesure l’autre ?`,
  '1uo9pac72dr': R`Les angles sur une droite ont pour somme $180^\circ$ : $180^\circ - ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  'lbqlw4yngj': R`Quatre angles se rejoignent en un point. Trois d’entre eux mesurent $⟦0⟧^\circ$, $⟦1⟧^\circ$ et $⟦2⟧^\circ$. Combien mesure le quatrième ?`,
  '1q0g9lewnyf': R`Les angles autour d’un point ont pour somme $360^\circ$ : $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '1o7rxocgbe4': R`De quel type est un angle de $⟦0⟧^\circ$ ?`,
  '2087xqcuhit': R`Aigu $\lt 90^\circ$ ; droit $= 90^\circ$ ; obtus entre $90^\circ$ et $180^\circ$ ; plat $= 180^\circ$ ; rentrant entre $180^\circ$ et $360^\circ$. Donc un angle de $⟦0⟧^\circ$ est <b>⟦1⟧</b>.`,
  '1em7emit9v': R`Un quadrilatère a des angles de $⟦0⟧^\circ$, $⟦1⟧^\circ$ et $⟦2⟧^\circ$. Combien mesure le quatrième angle ?`,
  '24pznbwnbef': R`La somme des angles d’un quadrilatère vaut $360^\circ$ : $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '2egzcjm3tpx': R`pentagone`,
  'v80sqcfxpp': R`hexagone`,
  '81gchefl78': R`octogone`,
  'ua45cwp3of': R`ennéagone`,
  'luci9k7vz2': R`décagone`,
  '1udhvg5ma2x': R`dodécagone`,
  '27xxu0kf8rx': R`Quelle est la somme des angles intérieurs d’un polygone à ⟦0⟧ côtés (⟦1⟧) ?`,
  'gm8iaj6tll': R`Il se découpe en $⟦0⟧ - 2 = ⟦1⟧$ triangles : $⟦2⟧ \times 180^\circ = ⟦3⟧^\circ$.`,
  'qinptcb6uu': R`Combien mesure chaque angle intérieur d’un polygone régulier à ⟦0⟧ côtés (⟦1⟧) ?`,
  '1do1n0lapzc': R`Somme $= (⟦0⟧ - 2) \times 180^\circ = ⟦1⟧^\circ$, répartie entre ⟦2⟧ angles égaux : $⟦3⟧^\circ \div ⟦4⟧ = ⟦5⟧^\circ$.`,
  '2b3ubiiwfr4': R`Dans un triangle isocèle, l’angle entre les deux côtés égaux mesure $⟦0⟧^\circ$. Combien mesure chacun des deux autres angles ?`,
  '1m260esohws': R`Les deux angles à la base sont égaux : $\frac{180^\circ - ⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // data-basic
  '1rkikmzq9kv': R`
<p>Les données sont des informations que l’on recueille, comme des notes ou des fruits préférés. Un <b>tableau d’effectifs</b> indique combien de fois apparaît chaque valeur ; les <b>diagrammes en barres</b> et les <b>pictogrammes</b> montrent la même information sous forme visuelle.</p>
<h3>Quatre indicateurs</h3>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  '2fsgim21nih': R`Indicateur`,
  '1fy4t37t415': R`Comment le trouver`,
  '18v4e4ulshl': R`Pour 3 ; 7 ; 7 ; 8 ; 10`,
  'ppforkar60': R`Moyenne`,
  'w9uhnv1ylu': R`somme des valeurs divisée par leur nombre`,
  '15fhdhxeit5': R`Médiane`,
  '1bp3iszr2ho': R`valeur du milieu après rangement`,
  '2d8lw4ky362': R`Mode`,
  'n6vk2dz4y0': R`valeur la plus fréquente`,
  '8wgrdlq9w9': R`Étendue`,
  'u26xwlcm82': R`plus grande − plus petite`,
  '1ddos0ddk6b': R`<p>S’il y a un nombre <b>pair</b> de valeurs, la médiane est la moyenne des deux valeurs du milieu : la médiane de 2 ; 4 ; 9 ; 11 est $\frac{4 + 9}{2} = 6{,}5$.</p>`,
  '1b84zb92lm7': R`<p>Notes : 12 ; 5 ; 9 ; 12 ; 7.</p><ul><li>Moyenne $= \frac{12 + 5 + 9 + 12 + 7}{5} = \frac{45}{5} = 9$</li><li>Rangées : 5 ; 7 ; 9 ; 12 ; 12 → médiane 9</li><li>Mode 12 · Étendue $12 - 5 = 7$</li></ul>`,
  '1dcnrak0yuf': R`<p><b>Rangez</b> toujours les données avant de chercher la médiane. Le milieu de la liste non rangée est en général faux.</p>`,
  'x21ub369ei': R`Calculez la moyenne de : ⟦0⟧.`,
  '1p52jtmc0cq': R`On additionne les valeurs et on divise par leur nombre : $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  'jf7mas4uc8': R`Trouvez la médiane de : ⟦0⟧.`,
  '1yw7i4urov1': R`On range d’abord : ⟦0⟧. La valeur du milieu — la ⟦1⟧ᵉ de la liste rangée — est <b>⟦2⟧</b>.`,
  '2g8sczm66bg': R`Trouvez le mode de : ⟦0⟧.`,
  'tbuacyae4n': R`⟦0⟧ apparaît 3 fois — plus que toute autre valeur — donc le mode est <b>⟦1⟧</b>.`,
  '1xtq8j2lty3': R`Trouvez l’étendue de : ⟦0⟧.`,
  '15se826ipls': R`Étendue = plus grande − plus petite $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '2epb7vd8j91': R`Pommes`,
  '17dpyen9bnr': R`Bananes`,
  '7i14wwudqx': R`Mangues`,
  '2401q57c6t': R`Raisins`,
  '1e2lbgl4i2m': R`Oranges`,
  '1n92q5m8dcn': R`Durians`,
  '29y8laytfov': R`Papayes`,
  '1y1q3z5e86a': R`Fruit`,
  '282dadyo0i9': R`Élèves`,
  'gcofhmi74h': R`Une classe a voté pour son fruit préféré.⟦0⟧Combien d’élèves ont voté en tout ?`,
  '1x3hnjtfgqx': R`On additionne les effectifs : $⟦0⟧ = ⟦1⟧$.`,
  '13d46zcnc3z': R`Une classe a voté pour son fruit préféré.⟦0⟧Combien d’élèves de plus ont choisi « ⟦1⟧ » plutôt que « ⟦2⟧ » ?`,
  '1t8yn7xcnqm': R`$⟦0⟧ - ⟦1⟧ = ⟦2⟧$ élèves de plus.`,
});

/* Français — collège (noyau, relatifs → proportions) */
addT('fr', {
  // core
  '1x23luhdn24': R`Écrivez un entier ou une fraction comme -3/4.`,
  'oe48n1yjho': R`Écrivez une réponse comme 49pi.`,
  '1pwkxeh9gz6': R`Diagramme de Venn : deux cercles A et B qui se chevauchent dans un rectangle U. La partie commune est A inter B.`,
  '20fnrxy868c': R`A seulement`,
  '270f53k5ok8': R`B seulement`,
  '1je4zqnj4vo': R`hors des deux : (A ∪ B)′`,
  '1mdy4rrlpik': R`Triangle rectangle de côtés de l’angle droit a et b et d’hypoténuse c opposée à l’angle droit`,
  '1x3numfhp6n': R`Cercle de centre O avec un rayon r, un diamètre, une corde et un secteur ombré`,
  '19a9nt12ww1': R`diamètre`,
  '2dw7tpqx5ho': R`secteur`,
  '187npo1zduj': R`corde`,

  // integers
  '1d3b0kga2d8': R`
<p>Les <b>entiers relatifs</b> sont les nombres entiers et leurs opposés : $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$ Sur une droite graduée, les nombres augmentent vers la droite, donc $-7 \lt -2$ même si 7 est plus grand que 2.</p>
<p>La <b>valeur absolue</b> $|a|$ est la distance à 0 : $|-6| = 6$ et $|6| = 6$.</p>
<h3>Addition et soustraction</h3>
⟦0⟧
<h3>Multiplication et division</h3>
⟦1⟧
⟦2⟧
<p>Dans la vie courante : températures négatives, altitudes sous le niveau de la mer, dettes, étages en sous-sol.</p>
⟦3⟧`,
  'y08mdvxdvx': R`<ul><li><b>Même signe :</b> on additionne les distances à zéro et on garde le signe. $-4 + (-9) = -13$.</li><li><b>Signes contraires :</b> on soustrait les distances à zéro et on prend le signe du nombre le plus éloigné de zéro. $-11 + 5 = -6$.</li><li><b>Soustraire</b>, c’est ajouter l’opposé : $3 - (-8) = 3 + 8 = 11$.</li></ul>`,
  '265jmr0pgn6': R`Signes`,
  '18hy4wrreq9': R`Résultat`,
  'smeasc7k44': R`+ et +`,
  'pch2ir8ey8': R`positif`,
  '1etdbat34sz': R`− et −`,
  'ziyl69hweo': R`+ et −`,
  '2ffct8v299o': R`négatif`,
  '238sv1i1dpv': R`− et +`,
  'woqo0gjqdb': R`<p>$-3^2 = -9$ mais $(-3)^2 = 9$. Sans parenthèses, la puissance ne porte que sur le 3.</p>`,
  '1vaqzb7dhrg': R`Même signe : on additionne les distances à zéro et on garde le signe.`,
  '1gzm31e47qm': R`Signes contraires : on soustrait les distances à zéro et on garde le signe du nombre le plus éloigné de zéro.`,
  '27t807op1rz': R`Soustraire, c’est ajouter l’opposé : $⟦0⟧ - ⟦1⟧ = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'dkidis5a97': R`Deux signes identiques donnent un résultat positif`,
  '1htjniy3zg4': R`Deux signes contraires donnent un résultat négatif`,
  'iepdkqxdg4': R`Calculez $⟦0⟧ \times ⟦1⟧ - ⟦2⟧$.`,
  'pxi31oj3ys': R`D’abord la multiplication : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Puis $⟦3⟧ - ⟦4⟧ = ⟦5⟧ + ⟦6⟧ = ⟦7⟧$.`,
  '26rnszv74s7': R`À 6 h du matin, la température était de $⟦0⟧^\circ\text{C}$. À midi, elle avait augmenté de $⟦1⟧^\circ\text{C}$, puis à minuit elle avait baissé de $⟦2⟧^\circ\text{C}$ par rapport à midi. Quelle était la température à minuit ?`,
  'fyyovqsih2': R`$⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$, donc il faisait $⟦4⟧^\circ\text{C}$.`,
  '1ag4iuv7vpa': R`Calculez $|⟦0⟧| - |⟦1⟧|$.`,
  '1hal8q9tj2u': R`$|⟦0⟧| = ⟦1⟧$ et $|⟦2⟧| = ⟦3⟧$, donc la valeur est $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,

  // exponents
  '2d43wqplznz': R`
<p>Une <b>puissance</b> note une multiplication répétée : $a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ facteurs}}$. Dans $2^5 = 32$, 2 est la <b>base</b> et 5 est l’<b>exposant</b>.</p>
<h3>Règles de calcul sur les puissances</h3>
⟦0⟧
⟦1⟧
<h3>Racines</h3>
<p>La racine carrée annule le carré : $\sqrt{81} = 9$ car $9^2 = 81$. La racine cubique annule le cube : $\sqrt[3]{64} = 4$ car $4^3 = 64$.</p>
⟦2⟧
⟦3⟧`,
  '21iigvito9y': R`Règle`,
  '2du0zx6ztd9': R`<p>Simplifier $(2x^3)(5x^4)$ : on multiplie les nombres et on additionne les exposants, $10x^{7}$.</p>`,
  '2b2ar8gx2t7': R`<p>Pour simplifier une racine carrée, on fait sortir le plus grand facteur carré : $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$.</p>$$\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$$`,
  '28pcl4skbrd': R`<p>$x^3 \cdot x^4$ vaut $x^7$, et non $x^{12}$ : pour multiplier des puissances d’une même base, on <i>additionne</i> les exposants. Et $\sqrt{9 + 16} = 5$, et non $3 + 4$.</p>`,
  's9xs5b9gme': R`Calculez $⟦0⟧^{⟦1⟧}$.`,
  'y0efpdptbg': R`$⟦0⟧^{⟦1⟧}$ est le produit de ⟦2⟧ facteurs égaux à ⟦3⟧ : $⟦4⟧ = ⟦5⟧$.⟦6⟧`,
  'f0v39gimat': R` Un nombre impair de facteurs négatifs donne un résultat négatif.`,
  '1a0fe39cn50': R` Un nombre pair de facteurs négatifs donne un résultat positif.`,
  'gmyxohq5hl': R`Simplifiez $(⟦0⟧⟦1⟧^{⟦2⟧})(⟦3⟧⟦4⟧^{⟦5⟧})$.`,
  '19i5sbwj9gf': R`On multiplie les nombres et on <b>additionne</b> les exposants : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ et $⟦3⟧^{⟦4⟧} \cdot ⟦5⟧^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$. Réponse : $⟦9⟧⟦10⟧^{⟦11⟧}$.`,
  'd17nxbyour': R`Simplifiez $\dfrac{⟦0⟧⟦1⟧^{⟦2⟧}}{⟦3⟧⟦4⟧^{⟦5⟧}}$.`,
  'zvet0x3ty3': R`On divise les nombres et on <b>soustrait</b> les exposants : $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ et $⟦3⟧^{⟦4⟧ - ⟦5⟧} = ⟦6⟧^{⟦7⟧}$.`,
  'owsivnzbiv': R`Simplifiez $(⟦0⟧⟦1⟧^{⟦2⟧})^{⟦3⟧}$.`,
  '16p8bz51ffa': R`On élève chaque facteur à la puissance ⟦0⟧ : $⟦1⟧^{⟦2⟧} = ⟦3⟧$ et $(⟦4⟧^{⟦5⟧})^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$.`,
  '1xezjl2w04x': R`Calculez $⟦0⟧^0 + ⟦1⟧^{-⟦2⟧}$.`,
  '188gl5tkaea': R`Écrivez une fraction comme 9/8.`,
  'ko9qy4d1ca': R`$⟦0⟧^0 = 1$ et $⟦1⟧^{-⟦2⟧} = \frac{1}{⟦3⟧}$, donc la somme vaut $1 + \frac{1}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}$.`,
  '1n967l6wl5g': R`Calculez $⟦0⟧^{-⟦1⟧}$.`,
  'zx2y9sarlt': R`Écrivez une fraction comme 1/8.`,
  'yfk682by4y': R`Un exposant négatif signifie « un sur » : $⟦0⟧^{-⟦1⟧} = \frac{1}{⟦2⟧^{⟦3⟧}} = \frac{1}{⟦4⟧}$.`,
  '29kkp8bp96o': R`Calculez $\sqrt{⟦0⟧}$.`,
  '130msfu0zcr': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, donc $\sqrt{⟦3⟧} = ⟦4⟧$.`,
  '2gon6mkcmhb': R`Calculez $\sqrt[3]{⟦0⟧}$.`,
  '214ubtovi6i': R`$⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$, donc $\sqrt[3]{⟦4⟧} = ⟦5⟧$.`,
  '30ljqjiajh': R`Simplifiez $\sqrt{⟦0⟧}$.`,
  '1dnbn17q9fj': R`Écrivez une réponse comme 3sqrt(2).`,
  'r5mpjrvznb': R`On cherche le plus grand facteur carré : $⟦0⟧ = ⟦1⟧ \times ⟦2⟧$. Donc $\sqrt{⟦3⟧} = \sqrt{⟦4⟧} \cdot \sqrt{⟦5⟧} = ⟦6⟧$.`,

  // sci-notation
  '2855qmmjjc': R`
<p>Les scientifiques écrivent les nombres très grands ou très petits de façon compacte sous la forme</p>
⟦0⟧
<ul><li>La distance Terre–Soleil, environ $150\,000\,000$ km, vaut $1{,}5 \times 10^{8}$ km.</li><li>Un globule rouge, large d’environ $0{,}000\,008$ m, mesure $8 \times 10^{-6}$ m.</li></ul>
⟦1⟧
<h3>Calculer</h3>
<p>On multiplie (ou divise) les nombres de devant et on additionne (ou soustrait) les exposants. Puis on corrige le nombre de devant s’il n’est pas compris entre 1 et 10 :</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '244so12quwj': R`a \times 10^{n}, \qquad 1 \le a \lt 10, \quad n \text{ entier relatif}`,
  '1phwx4rhhb0': R`<p>Comptez de combien de rangs la virgule se déplace pour qu’il reste exactement un chiffre non nul devant elle. Les grands nombres (virgule vers la gauche) donnent un exposant <b>positif</b> ; les nombres inférieurs à 1 (virgule vers la droite), un exposant <b>négatif</b>.</p>`,
  '17xqz1i19gu': R`(4 \times 10^{5}) \times (3 \times 10^{7}) = 12 \times 10^{12} = 1{,}2 \times 10^{13}`,
  'uws8i7cmm7': R`\frac{6 \times 10^{9}}{8 \times 10^{3}} = 0{,}75 \times 10^{6} = 7{,}5 \times 10^{5}`,
  '1bgde7du4ux': R`<p>$23 \times 10^{4}$ a la bonne valeur mais n’est pas une écriture scientifique : le nombre de devant doit être inférieur à 10.</p>`,
  '1jl1f7quddk': R`Donnez l’écriture scientifique de ⟦0⟧.`,
  '1xhcd6rnqeh': R`On déplace la virgule de ⟦0⟧ rangs vers la gauche pour ne garder qu’un chiffre devant : $⟦1⟧ = ⟦2⟧ \times 10^{⟦3⟧}$.`,
  'sb71mbidjv': R`On déplace la virgule de ⟦0⟧ rangs vers la droite pour avoir un chiffre non nul devant : $⟦1⟧ = ⟦2⟧ \times 10^{-⟦3⟧}$.`,
  '1fxdkt6b40w': R`Donnez l’écriture décimale de $⟦0⟧ \times 10^{⟦1⟧}$.`,
  '1lry42zhbux': R`On déplace la virgule de ⟦0⟧ rangs vers la droite : <b>⟦1⟧</b>.`,
  '1x5u9exutdv': R`On déplace la virgule d’un rang vers la gauche : <b>⟦0⟧</b>.`,
  '550xmeglh4': R`On déplace la virgule de ⟦0⟧ rangs vers la gauche : <b>⟦1⟧</b>.`,
  '1gs42dv9cjp': R`Calculez $(⟦0⟧ \times 10^{⟦1⟧}) \times (⟦2⟧ \times 10^{⟦3⟧})$. Donnez le résultat en écriture scientifique.`,
  'fs4t6k5mks': R`On multiplie les nombres de devant et on additionne les exposants : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ et $10^{⟦3⟧} \times 10^{⟦4⟧} = 10^{⟦5⟧}$. ⟦6⟧`,
  '1zt4osszqy5': R`Comme ⟦0⟧ n’est pas inférieur à 10, on réécrit $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,
  '1hosaw5g8gs': R`Réponse : $⟦0⟧ \times 10^{⟦1⟧}$.`,
  '1rhqt7i7pkj': R`Calculez $\dfrac{⟦0⟧ \times 10^{⟦1⟧}}{⟦2⟧ \times 10^{⟦3⟧}}$. Donnez le résultat en écriture scientifique.`,
  '3gwofajvgq': R`On divise les nombres de devant et on soustrait les exposants : $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ et $10^{⟦3⟧ - ⟦4⟧} = 10^{⟦5⟧}$.⟦6⟧`,
  '1ujla3379au': R` Comme ⟦0⟧ est inférieur à 1, on réécrit $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,

  // ratio
  'j1hx7015fs': R`
<p>Un <b>ratio</b> $a : b$ compare deux quantités. Comme les fractions, un ratio se simplifie en divisant ses deux termes par leur PGCD : $18 : 24 = 3 : 4$.</p>
<h3>Partage proportionnel</h3>
⟦0⟧
<h3>Taux et valeur unitaire</h3>
<p>Un <b>taux</b> compare des quantités d’unités différentes : km par heure, euros par kg. Trouver la valeur d’<b>une</b> unité (la valeur unitaire) résout la plupart des problèmes.</p>
⟦1⟧
<h3>Proportionnalité directe et inverse</h3>
⟦2⟧
⟦3⟧
<h3>Échelles</h3>
<p>Une échelle de $1 : 50\,000$ signifie que 1 cm sur la carte représente $50\,000$ cm $= 500$ m $= 0{,}5$ km en réalité.</p>
⟦4⟧`,
  '1ldxptmm0q1': R`<p>Partager 60 bonbons dans le ratio $2 : 3$.</p><ol><li>Nombre de parts : $2 + 3 = 5$.</li><li>Une part : $60 \div 5 = 12$.</li><li>Parts : $2 \times 12 = 24$ et $3 \times 12 = 36$.</li></ol>`,
  'mtzadc2zz9': R`\text{vitesse} = \frac{\text{distance}}{\text{durée}} \qquad \text{distance} = \text{vitesse} \times \text{durée}`,
  '1lx74znbkzq': R`<ul><li><b>Directe :</b> les deux quantités augmentent ensemble, $y = kx$. Deux fois plus de cahiers coûtent deux fois plus cher.</li><li><b>Inverse :</b> l’une augmente quand l’autre diminue, $xy = k$. Deux fois plus d’ouvriers finissent en deux fois moins de temps.</li></ul>`,
  'a6l90vp81i': R`<p>6 ouvriers construisent un mur en 10 jours. Le travail représente $6 \times 10 = 60$ jours-ouvrier, donc 4 ouvriers ont besoin de $60 \div 4 = 15$ jours.</p>`,
  '2arjky763hz': R`<p>Avant de comparer, mettez les mêmes unités. Et vérifiez si la situation est directe ou inverse : « plus d’ouvriers, moins de jours » est inverse.</p>`,
  '1acmfldad41': R`Simplifiez le ratio ⟦0⟧ : ⟦1⟧.`,
  '1y50fzcs3bf': R`Écrivez le ratio sous la forme 3:4.`,
  '5iztjnzgue': R`Le PGCD des deux termes vaut ⟦0⟧ ; en les divisant par ⟦0⟧, on obtient ⟦1⟧ : ⟦2⟧ = ⟦3⟧ : ⟦4⟧.`,
  '2crne058qbs': R`Ali`,
  '18poqam78za': R`Siti`,
  '4lzqcmqqd4': R`Rina`,
  'izwfd6xg8i': R`Sam`,
  'bs57t3iign': R`Kim`,
  'h7jorlb8al': R`On partage ⟦0⟧ billes entre ⟦1⟧ et ⟦2⟧ dans le ratio ⟦3⟧ : ⟦4⟧. Combien de billes reçoit ⟦5⟧ ?`,
  '2ffhbqedp3i': R`Il y a $⟦0⟧ + ⟦1⟧ = ⟦2⟧$ parts, chacune vaut $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$. ⟦6⟧ reçoit $⟦7⟧ \times ⟦8⟧ = ⟦9⟧$.`,
  'oh7i0xfb4t': R`cahiers`,
  'ia267mackq': R`stylos`,
  'ojwqqxz8z0': R`mangues`,
  '2c5x6tu8q2m': R`billets`,
  't42rjalvd2': R`⟦0⟧ ⟦1⟧ coûtent ⟦2⟧ euros. Au même prix unitaire, combien coûtent ⟦3⟧ ⟦4⟧ ?`,
  '1j6drw8o3jp': R`Un article coûte $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ euros, donc ⟦3⟧ coûtent $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$ euros.`,
  '2cnfx0hut7n': R`⟦0⟧ ouvriers construisent un mur en ⟦1⟧ jours. Au même rythme, combien de jours faudrait-il à ⟦2⟧ ouvriers ?`,
  '1qn5tzfsu4y': R`jours`,
  '1prw35yduvi': R`C’est une proportionnalité inverse. Le travail représente $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ jours-ouvrier, donc ⟦3⟧ ouvriers ont besoin de $⟦4⟧ \div ⟦5⟧ = ⟦6⟧$ jours.`,
  '294kafpc434': R`Une carte est à l’échelle 1 : ⟦0⟧. Deux villes sont à ⟦1⟧ cm l’une de l’autre sur la carte. Quelle est la distance réelle, en kilomètres ?`,
  'yvvr6sez8h': R`Distance réelle $= ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm. Comme $1 \text{ km} = 100\,000 \text{ cm}$, cela fait $⟦3⟧$ km.`,
  '1q0gzbqlk2i': R`Une voiture parcourt ⟦0⟧ km en ⟦1⟧ heures. Quelle est sa vitesse moyenne ?`,
  '1350ox6hh5s': R`$\text{vitesse} = \frac{\text{distance}}{\text{durée}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ km/h.`,
  '1eoj4cx14t6': R`Un bus roule à ⟦0⟧ km/h pendant ⟦1⟧ heures. Quelle distance parcourt-il ?`,
  '1dged1n5jn6': R`$\text{distance} = \text{vitesse} \times \text{durée} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ km.`,
  'aw6tzi78c6': R`Combien d’heures faut-il pour parcourir ⟦0⟧ km à ⟦1⟧ km/h ?`,
  '2eruzlr62qp': R`heures`,
  '278tsci6f7d': R`$\text{durée} = \frac{\text{distance}}{\text{vitesse}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ heures.`,
});

/* Français — collège (calcul littéral → fonctions affines) */
addT('fr', {
  // algebra-expr
  '2ngxvisbtd': R`
<p>Dans l’expression $5x^2 - 3xy + 7$, les <b>termes</b> sont $5x^2$, $-3xy$ et $7$ ; les <b>coefficients</b> sont 5 et $-3$ ; 7 est le <b>terme constant</b>. Des <b>termes semblables</b> ont exactement les mêmes lettres avec les mêmes exposants ($4ab$ et $-ab$ sont semblables ; $x^2$ et $x$ ne le sont pas).</p>
<h3>Réduire</h3>
<p>On regroupe les termes semblables en additionnant leurs coefficients : $6a + 2b - 4a + 5b = 2a + 7b$.</p>
<h3>Développer</h3>
⟦0⟧
⟦1⟧
<h3>Identités remarquables</h3>
⟦2⟧
<h3>Factoriser</h3>
<p>Factoriser, c’est développer à l’envers. On met en facteur le plus grand facteur commun : $12x - 18 = 6(2x - 3)$.</p>
<h3>Substituer</h3>
<p>On remplace chaque lettre par sa valeur, avec des parenthèses pour les nombres négatifs : si $x = -2$, alors $3x^2 - x = 3(-2)^2 - (-2) = 12 + 2 = 14$.</p>
⟦3⟧`,
  '107qibv29t1': R`<p><b>Distributivité :</b> $a(b + c) = ab + ac$. On multiplie <i>chaque</i> terme de la parenthèse par le facteur extérieur.</p><p><b>Double distributivité :</b> $(x + a)(x + b) = x^2 + (a + b)x + ab$.</p>`,
  'evwoax8bsy': R`(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2`,
  'qw20z3i54y': R`<p>$(x + 4)^2 \ne x^2 + 16$. On oublie facilement le terme du milieu, $2 \cdot 4 \cdot x = 8x$.</p>`,
  '1lzyurkx6yg': R`Réduisez $⟦0⟧$.`,
  'c34hz2en6w': R`On regroupe les termes semblables : $(⟦0⟧ ⟦1⟧)⟦2⟧ + (⟦3⟧ ⟦4⟧)⟦5⟧ = ⟦6⟧$.`,
  '1u1kf05ab7b': R`Développez $⟦0⟧(⟦1⟧)$.`,
  '1eys0d9g1vl': R`On multiplie chaque terme de la parenthèse par ⟦0⟧ : $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ et $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$. Résultat : $⟦7⟧$.`,
  '1xv73exk1ey': R`Calculez $⟦0⟧$ pour $x = ⟦1⟧$.`,
  'lz4v2y9o7u': R`On substitue avec des parenthèses : $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧ ⟦6⟧ ⟦7⟧ = ⟦8⟧$.`,
  '26qvjy7rwjy': R`Factorisez complètement : $⟦0⟧$.`,
  '19u3t9utdnl': R`Le PGCD de ⟦0⟧ et ⟦1⟧ est ⟦2⟧ : $⟦3⟧ = ⟦4⟧(⟦5⟧)$. On vérifie en développant.`,
  '1im4ugi7thh': R`Développez et réduisez $(x ⟦0⟧)(x ⟦1⟧)$.`,
  '1bafsr7t5do': R`Double distributivité : $⟦0⟧ = ⟦1⟧$.`,
  '2e60a5izj9m': R`Développez $(x ⟦0⟧)^2$.`,

  // linear-eq
  '2e108zyv3t2': R`
<p>Une équation affirme que deux expressions sont égales. Pensez à une balance : ce que l’on fait d’un côté, on le fait de l’autre, et l’équilibre est conservé. Le but est d’isoler l’inconnue.</p>
⟦0⟧
⟦1⟧
<h3>Parenthèses et fractions</h3>
<p>Développez d’abord (ou divisez les deux membres par le nombre devant la parenthèse). Supprimez les fractions en multipliant chaque terme par le dénominateur commun :</p>
⟦2⟧
<h3>Problèmes</h3>
<ol><li>Choisissez une lettre pour l’inconnue et dites ce qu’elle représente.</li><li>Traduisez l’énoncé en équation.</li><li>Résolvez, puis vérifiez que la réponse a du sens dans le problème.</li></ol>
⟦3⟧
⟦4⟧`,
  '23dcqvv32cf': R`<p>On défait les opérations dans l’ordre inverse grâce aux <b>opérations réciproques</b> : addition ↔ soustraction, multiplication ↔ division.</p>`,
  '11eu1q8a3p': R`<p>Résoudre $5x - 7 = 2x + 11$.</p><ol><li>Soustraire $2x$ aux deux membres : $3x - 7 = 11$.</li><li>Ajouter 7 : $3x = 18$.</li><li>Diviser par 3 : $x = 6$.</li></ol><p>Vérification : $5(6) - 7 = 23$ et $2(6) + 11 = 23$ ✓</p>`,
  '1wy5h98gkn6': R`<p>La somme de trois entiers consécutifs vaut 72. Notons-les $n$, $n + 1$, $n + 2$ : $3n + 3 = 72$, donc $n = 23$. Les entiers sont 23, 24 et 25.</p>`,
  '2cslj9svu1g': R`<p>Quand on fait passer un terme de l’autre côté du signe égal, il change de signe — car en réalité on le soustrait (ou l’ajoute) aux deux membres.</p>`,
  '1655nrncx2v': R`Résolvez $⟦0⟧ = ⟦1⟧$.`,
  'x5jse5nhwr': R`Écrivez la valeur de x.`,
  '2b0gu3x69ls': R`⟦0⟧ : $⟦1⟧ = ⟦2⟧$. On divise par ⟦3⟧ : $x = ⟦4⟧$.`,
  '7pot73w6ik': R`On regroupe les termes en $x$ à gauche et les nombres à droite : $⟦0⟧ = ⟦1⟧$, donc $x = ⟦2⟧$.`,
  'xzdgg8oaxi': R`Résolvez $⟦0⟧(x ⟦1⟧) = ⟦2⟧$.`,
  '9hdqgjqpdz': R`On divise les deux membres par ⟦0⟧ : $x ⟦1⟧ = ⟦2⟧$. Donc $x = ⟦3⟧ ⟦4⟧ = ⟦5⟧$.`,
  '2fru7tuxryf': R`Résolvez $\frac{x}{⟦0⟧} ⟦1⟧ = ⟦2⟧$.`,
  '1f73j076fzb': R`⟦0⟧ : $\frac{x}{⟦1⟧} = ⟦2⟧$. On multiplie les deux membres par ⟦3⟧ : $x = ⟦4⟧$.`,
  '211mafg3dgs': R`La somme de trois entiers consécutifs vaut ⟦0⟧. Quel est le plus grand ?`,
  '8v51kosf3f': R`La somme de trois entiers consécutifs vaut ⟦0⟧. Quel est le plus petit ?`,
  '28zr6x8xv6r': R`Notons-les $n$, $n + 1$, $n + 2$. Alors $3n + 3 = ⟦0⟧$, donc $3n = ⟦1⟧$ et $n = ⟦2⟧$. Les entiers sont ⟦3⟧, ⟦4⟧ et ⟦5⟧.`,
  '6tcx6zie13': R`Andi`,
  'bdnp7aucau': R`Maya`,
  '111efujhij3': R`Nina`,
  '2ffyzeo9a9u': R`Omar`,
  '1o7plzvqsb1': R`Pablo`,
  'xm9ndonr7a': R`⟦0⟧ a ⟦1⟧ ans de plus que ⟦2⟧. La somme de leurs âges est ⟦3⟧. Quel âge a ⟦4⟧ ?`,
  '1dg7mtcy0c9': R`ans`,
  '1i0et4blzn8': R`Notons $x$ l’âge de ⟦0⟧. Alors $x + (x + ⟦1⟧) = ⟦2⟧$, donc $2x = ⟦3⟧$ et $x = ⟦4⟧$.`,
  '24q7bzlhbax': R`Je pense à un nombre, je le multiplie par ⟦0⟧, puis je retire ⟦1⟧. J’obtiens ⟦2⟧. Quel était mon nombre ?`,
  'h4vi0amulx': R`$⟦0⟧x - ⟦1⟧ = ⟦2⟧$, donc $⟦3⟧x = ⟦4⟧$ et $x = ⟦5⟧$.`,

  // inequalities
  'x75whe4hrd': R`
<p>Une <b>inéquation</b> compare deux expressions : $\lt$ (strictement inférieur), $\gt$ (strictement supérieur), $\le$ (inférieur ou égal), $\ge$ (supérieur ou égal). Ses solutions forment en général tout un intervalle de nombres.</p>
<p>Sur une droite graduée, $x \gt 2$ se représente par un point <b>ouvert</b> en 2 (2 n’est pas inclus) et une flèche vers la droite ; $x \le 2$ par un point <b>plein</b> et une flèche vers la gauche.</p>
<h3>Résoudre</h3>
<p>On résout comme une équation — ajouter, soustraire, multiplier ou diviser les deux membres — avec une règle supplémentaire :</p>
⟦0⟧
<p>Pourquoi ? $2 \lt 5$, mais en multipliant par $-1$ on obtient $-2$ et $-5$, et $-2 \gt -5$.</p>
⟦1⟧
<h3>Doubles inégalités</h3>
<p>On applique la même opération aux trois parties : $-1 \lt 2x + 3 \le 9 \Rightarrow -4 \lt 2x \le 6 \Rightarrow -2 \lt x \le 3$. Les solutions entières sont $-1 ; 0 ; 1 ; 2 ; 3$.</p>
⟦2⟧`,
  '4uypmmfwnv': R`<p>Quand on <b>multiplie ou divise par un nombre négatif</b>, on change le sens de l’inégalité.</p>$$-3x \gt 12 \;\Rightarrow\; x \lt -4$$`,
  '2g9ptainv5b': R`<p>Résoudre $7 - 2x \ge 1$.</p><ol><li>Soustraire 7 : $-2x \ge -6$.</li><li>Diviser par $-2$ et changer le sens : $x \le 3$.</li></ol>`,
  'q5ww8c7swj': R`<p>« Le plus petit entier tel que $x \gt 4$ » est 5, pas 4 — une inégalité stricte exclut sa borne.</p>`,
  '1mxokpl5kuf': R`Résolvez $⟦0⟧ ⟦1⟧ ⟦2⟧$.`,
  '1iwjn3pne9': R`⟦0⟧ : $⟦1⟧ ⟦2⟧ ⟦3⟧$. On divise par ⟦4⟧ (positif, le sens ne change pas) : $x ⟦5⟧ ⟦6⟧$.`,
  '1s1hpevc8ap': R`⟦0⟧ : $⟦1⟧ ⟦2⟧ ⟦3⟧$. On divise par ⟦4⟧. Il est <b>négatif</b>, donc on change le sens : $x ⟦5⟧ ⟦6⟧$.`,
  'io0ae9g8yj': R`Le plus petit entier strictement supérieur à ⟦0⟧ est <b>⟦1⟧</b>.`,
  'civ81fo6ci': R`Le plus petit entier supérieur ou égal à ⟦0⟧ est <b>⟦1⟧</b>.`,
  '62e1f42m8l': R`Le plus grand entier strictement inférieur à ⟦0⟧ est <b>⟦1⟧</b>.`,
  '1ime7hqq5cd': R`Le plus grand entier inférieur ou égal à ⟦0⟧ est <b>⟦1⟧</b>.`,
  '2cy3ba2hfyd': R`Quel est le plus petit entier $x$ qui vérifie $⟦0⟧$ ?`,
  'uffp85dcny': R`Quel est le plus grand entier $x$ qui vérifie $⟦0⟧$ ?`,
  '33ggbvntvo': R`La résolution donne $x ⟦0⟧ ⟦1⟧$. ⟦2⟧`,
  '116sbg7r1dd': R`Combien d’entiers $x$ vérifient $⟦0⟧ ⟦1⟧ ⟦2⟧ ⟦3⟧ ⟦4⟧$ ?`,
  '17y5i2hhz2j': R`⟦0⟧, puis on divise par ⟦1⟧ : $⟦2⟧ ⟦3⟧ x ⟦4⟧ ⟦5⟧$. Les entiers sont ⟦6⟧ ; il y en a donc <b>⟦7⟧</b>.`,
  'abjkjjicc6': R`chaque membre`,

  // sets
  '1upw9az6tpj': R`
<p>Un <b>ensemble</b> est une collection bien définie d’objets, ses <b>éléments</b>. On écrit $A = \{2 ; 4 ; 6 ; 8\}$ et $4 \in A$ (« 4 appartient à A »), $5 \notin A$. $n(A)$ est le nombre d’éléments ; ici $n(A) = 4$. L’<b>ensemble vide</b> $\varnothing$ n’a aucun élément ; l’<b>ensemble universel</b> $U$ contient tout ce dont on parle.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  'zdmpl6ts1e': R`Un diagramme de Venn : chaque zone correspond à une combinaison différente de « dans A » et « dans B ».`,
  '142ifrt0jkt': R`Notation`,
  '14czndj1h0b': R`Exemple avec A = {1 ; 2 ; 3 ; 4}, B = {3 ; 4 ; 5}`,
  '17jfg6qecmz': R`intersection : dans les deux`,
  '93vbzoy4wv': R`réunion : dans l’un ou l’autre (ou les deux)`,
  'j83k8kg7rg': R`dans A mais pas dans B`,
  'ul55bfe733': R`complémentaire : dans U mais pas dans A`,
  '1m3czehh1lg': R`tout le reste de U`,
  '9y4djdoyyu': R`chaque élément de A est dans B`,
  'w227m2d70o': R`$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$<p>On soustrait l’intersection car elle a été comptée deux fois. Un ensemble à $n$ éléments possède $2^n$ sous-ensembles (y compris $\varnothing$ et l’ensemble lui-même).</p>`,
  '4thfgx5jwf': R`<p>Dans une classe de 35 élèves, 20 jouent au football, 18 au basket et 8 aux deux. Alors $n(F \cup B) = 20 + 18 - 8 = 30$ pratiquent au moins un sport et $35 - 30 = 5$ n’en pratiquent aucun.</p>`,
  '27eu4624ja8': R`<p>« Combien jouent seulement au football ? » : $20 - 8 = 12$, pas 20. Remplissez d’abord l’intersection du diagramme de Venn, puis allez vers l’extérieur.</p>`,
  '27zhedv4gc': R`Dans une classe de ⟦0⟧ élèves, ⟦1⟧ aiment le football, ⟦2⟧ aiment le basket et ⟦3⟧ aiment les deux. Combien d’élèves n’aiment aucun des deux sports ?`,
  '26xw5lahqxo': R`$n(F \cup B) = ⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$. Aucun des deux : $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,
  '1619zngy4yv': R`Dans un groupe, ⟦0⟧ personnes parlent anglais, ⟦1⟧ parlent espagnol et ⟦2⟧ parlent les deux langues. Combien parlent au moins l’une des deux ?`,
  '18t2zte9r05': R`Combien de sous-ensembles <b>propres</b> $⟦0⟧$ possède-t-il ?`,
  '2dvh10c76ll': R`Combien de sous-ensembles $⟦0⟧$ possède-t-il ?`,
  'o8q41j2x4h': R`Un ensemble à ⟦0⟧ éléments a $2^{⟦1⟧} = ⟦2⟧$ sous-ensembles ; sans compter $A$ lui-même, il reste ⟦3⟧ sous-ensembles propres.`,
  '1levxnz2zxu': R`Un ensemble à ⟦0⟧ éléments a $2^{⟦1⟧} = ⟦2⟧$ sous-ensembles.`,
  'ngdtyzf3i3': R`éléments communs aux deux ensembles`,
  'ygni6ry4dh': R`éléments de l’un ou l’autre des ensembles`,
  'v15s4csij3': R`éléments de A qui ne sont pas dans B`,
  '1j1pykn2kdj': R`Soit $A = ⟦0⟧$ et $B = ⟦1⟧$. Déterminez $A ⟦2⟧ B$.`,
  '256hp0emm8w': R`$A ⟦0⟧ B$ contient les ⟦1⟧ : $⟦2⟧$.`,
  '1vmjbk89h3x': R`$U = \{1 ; 2 ; 3 ; \ldots ; ⟦0⟧\}$ et $A = ⟦1⟧$. Combien d’éléments contient $A'$, le complémentaire de $A$ ?`,
  'fzclz65o4l': R`$A'$ contient les éléments de $U$ qui ne sont pas dans $A$ : $n(A') = n(U) - n(A) = ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '27rc7060yur': R`des nombres premiers`,
  '1qm9u9pg5gt': R`des nombres pairs`,
  '19ysprsc13w': R`des multiples de 3`,
  '2bluzo1qazo': R`des carrés parfaits`,
  '1ncphoa2uf2': R`$A$ est l’ensemble des entiers strictement positifs inférieurs à ⟦0⟧ qui sont ⟦1⟧. Déterminez $n(A)$.`,
  '9yersm2gye': R`$A = ⟦0⟧$, donc $n(A) = ⟦1⟧$.`,

  // linear-functions
  '1dcyn9qstbs': R`
<p>Une <b>fonction affine</b> a pour représentation graphique une droite. Sous la <b>forme réduite</b></p>
⟦0⟧
<p>$m$ est le <b>coefficient directeur</b> (la pente) : de combien $y$ varie quand $x$ augmente de 1. $c$ est l’<b>ordonnée à l’origine</b>, là où la droite coupe l’axe des $y$. En notation fonctionnelle on écrit $f(x) = mx + c$ ; $f(3)$ désigne « la valeur pour $x = 3$ ».</p>
<h3>Coefficient directeur à partir de deux points</h3>
⟦1⟧
⟦2⟧
<h3>Intersections avec les axes et autres formes</h3>
<p>Posez $x = 0$ pour trouver l’ordonnée à l’origine et $y = 0$ pour l’intersection avec l’axe des $x$. Une droite peut s’écrire $ax + by = c$ ; on la réécrit $y = -\frac{a}{b}x + \frac{c}{b}$ pour lire le coefficient directeur. Par un point $(x_1 ; y_1)$ avec le coefficient directeur $m$ : $y - y_1 = m(x - x_1)$.</p>
⟦3⟧
⟦4⟧`,
  'b6i5f4mrw8': R`y = mx + c`,
  '2debyr8clym': R`m = \frac{\text{variation verticale}}{\text{variation horizontale}} = \frac{y_2 - y_1}{x_2 - x_1}`,
  '2487xq0zh4o': R`<p>Par $(1 ; 2)$ et $(4 ; 11)$ : $m = \frac{11 - 2}{4 - 1} = 3$. On remplace $(1 ; 2)$ dans $y = 3x + c$ : $2 = 3 + c$, donc $c = -1$ et la droite est $y = 3x - 1$.</p>`,
  '1jy9kk0ffnl': R`<ul><li>Des droites <b>parallèles</b> ont le même coefficient directeur : $m_1 = m_2$.</li><li>Des droites <b>perpendiculaires</b> ont des coefficients directeurs dont le produit vaut $-1$ : $m_1 m_2 = -1$, donc $m_2 = -\frac{1}{m_1}$.</li></ul>`,
  'mf12am34lg': R`<p>Gardez le même ordre : si vous mettez $y_2 - y_1$ en haut, mettez $x_2 - x_1$ en bas. Un coefficient directeur positif monte vers la droite ; un négatif descend.</p>`,
  'cmysd7luf4': R`Déterminez le coefficient directeur de la droite passant par $⟦0⟧$ et $⟦1⟧$.`,
  'bn7cydwexg': R`Sachant que $f(x) = ⟦0⟧$, calculez $f(⟦1⟧)$.`,
  'aaz26bx5zl': R`Quelle est l’ordonnée à l’origine de la droite $⟦0⟧$ ?`,
  '286d6a0jwny': R`On pose $x = 0$ : $⟦0⟧ = ⟦1⟧$, donc $y = ⟦2⟧$.`,
  '2aba0g68aq0': R`Quel est le coefficient directeur de la droite $⟦0⟧$ ?`,
  '2cp0qhukifo': R`On isole $y$ : $y = \frac{⟦0⟧x ⟦1⟧}{⟦2⟧}$. Le coefficient directeur est le coefficient de $x$ : $⟦3⟧$.`,
  '9s9um0dbpj': R`Quelle équation décrit la droite passant par $⟦0⟧$ et $⟦1⟧$ ?`,
  '2ewjcigtyej': R`Coefficient directeur : $m = \frac{⟦0⟧ - ⟦1⟧}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. On remplace $⟦5⟧$ dans $y = ⟦6⟧ + c$ : $c = ⟦7⟧ - ⟦8⟧ = ⟦9⟧$.`,
  'dog47xwchb': R`Une droite a pour coefficient directeur $⟦0⟧$. Quel est le coefficient directeur d’une droite qui lui est perpendiculaire ?`,
  '22x7dksxq1f': R`Les coefficients directeurs de droites perpendiculaires ont pour produit $-1$ : $m_2 = -\frac{1}{m_1} = ⟦0⟧$.`,
  '1p3mlag1dqo': R`Pour quelle valeur de $x$ la droite $y = ⟦0⟧$ coupe-t-elle l’axe des $x$ ?`,
  'v36n3a0on1': R`Sur l’axe des $x$, $y = 0$ : $⟦0⟧ ⟦1⟧ = 0$, donc $x = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
});

/* Français — collège (systèmes → solides) */
addT('fr', {
  // systems
  '1obgwi6un65': R`
<p>Un <b>système</b> de deux équations du premier degré en $x$ et $y$ demande les valeurs qui rendent vraies <i>les deux</i> équations. Graphiquement, la solution est le point d’intersection des deux droites.</p>
<h3>Substitution</h3>
⟦0⟧
<h3>Combinaison</h3>
⟦1⟧
⟦2⟧
<h3>Cas particuliers</h3>
<p>Des droites parallèles (même coefficient directeur, ordonnées à l’origine différentes) ne se coupent jamais : <b>pas de solution</b>. Des droites confondues donnent une <b>infinité</b> de solutions.</p>
<h3>Problèmes</h3>
<p>Deux inconnues demandent deux informations. « Une ferme compte 30 têtes et 84 pattes, entre poules et vaches », avec $c$ vaches et $h$ poules : $c + h = 30$ et $4c + 2h = 84$.</p>
⟦3⟧`,
  '1jftngyboyy': R`$$\begin{cases} y = 2x - 1 \\ 3x + y = 14 \end{cases}$$<p>On remplace la première dans la seconde : $3x + (2x - 1) = 14$, donc $5x = 15$, $x = 3$ et $y = 2(3) - 1 = 5$. Solution : $(3 ; 5)$.</p>`,
  '2g9mhat3jml': R`$$\begin{cases} 2x + 3y = 12 \\ 5x - 3y = 9 \end{cases}$$<p>On additionne les équations pour éliminer $y$ : $7x = 21$, donc $x = 3$. Puis $2(3) + 3y = 12$ donne $y = 2$.</p>`,
  '2hm0wzsgn4': R`<p>Multipliez d’abord une équation (ou les deux) pour qu’une inconnue ait des coefficients égaux (ou opposés), puis soustrayez (ou additionnez) pour l’éliminer. Vérifiez toujours la réponse dans les <b>deux</b> équations de départ.</p>`,
  '1mqyjg4cjt3': R`<p>Quand on soustrait deux équations, on soustrait <i>tous</i> les termes, y compris ceux des seconds membres : les erreurs de signe sont les plus fréquentes.</p>`,
  '2bus2hrtc7a': R`Résolvez le système et donnez la valeur de $⟦0⟧$ : $$\begin{cases} ⟦1⟧ = ⟦2⟧ \\ ⟦3⟧ = ⟦4⟧ \end{cases}$$`,
  'cj3nlbnytd': R`On élimine $x$ : on multiplie la première équation par ⟦0⟧ et la seconde par ⟦1⟧, puis on soustrait : $⟦2⟧y = ⟦3⟧$, donc $y = ⟦4⟧$. En remplaçant, on obtient $x = ⟦5⟧$⟦6⟧.`,
  '1v4b2kwdt1t': R`, donc $x + y = ⟦0⟧$`,
  '12wz870lrmo': R`Résolvez : $$\begin{cases} ⟦0⟧ = ⟦1⟧ \\ ⟦2⟧ = ⟦3⟧ \end{cases}$$`,
  '2h37f00sms': R`Écrivez la solution sous la forme x ; y, par exemple 3 ; -2.`,
  'ji19p5e9vc': R`En éliminant une inconnue, on obtient $x = ⟦0⟧$ et $y = ⟦1⟧$. Vérification : $⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$ ✓ et $⟦7⟧(⟦8⟧) + ⟦9⟧(⟦10⟧) = ⟦11⟧$ ✓`,
  '1uhjqjwpqgq': R`Un cinéma a vendu ⟦0⟧ billets pour un total de ⟦1⟧ euros. Le billet adulte coûte ⟦2⟧ euros et le billet enfant ⟦3⟧ euros. Combien de billets enfant ont été vendus ?`,
  '1w5sbgqln74': R`Notons $a$ le nombre de billets adulte et $c$ celui des billets enfant : $a + c = ⟦0⟧$ et $⟦1⟧a + ⟦2⟧c = ⟦3⟧$. On remplace $a = ⟦4⟧ - c$ : $⟦5⟧ - ⟦6⟧c = ⟦7⟧$, donc $c = ⟦8⟧$.`,
  '5gcbu3n7lh': R`Une ferme compte des poules et des vaches. Ensemble, elles ont ⟦0⟧ têtes et ⟦1⟧ pattes. Combien y a-t-il de vaches ?`,
  '1q9pdlsduw3': R`Une ferme compte des poules et des vaches. Ensemble, elles ont ⟦0⟧ têtes et ⟦1⟧ pattes. Combien y a-t-il de poules ?`,
  '20g4l7cyliz': R`Notons $c$ le nombre de vaches et $h$ celui des poules : $c + h = ⟦0⟧$ et $4c + 2h = ⟦1⟧$. On soustrait deux fois la première équation : $2c = ⟦2⟧$, donc $c = ⟦3⟧$ et $h = ⟦4⟧$.`,
  '18lm53yd624': R`La somme de deux nombres est ⟦0⟧ et leur différence est ⟦1⟧. Quel est le plus grand ?`,
  '1juzg4bgiuw': R`La somme de deux nombres est ⟦0⟧ et leur différence est ⟦1⟧. Quel est le plus petit ?`,
  '15xzu54of35': R`$a + b = ⟦0⟧$ et $a - b = ⟦1⟧$. En additionnant : $2a = ⟦2⟧$, donc $a = ⟦3⟧$ et $b = ⟦4⟧$.`,

  // pythagoras
  '18dtbjhvgbb': R`
<p>Dans un triangle rectangle, le plus long côté, opposé à l’angle droit, est l’<b>hypoténuse</b> $c$. Les deux autres sont les <b>côtés de l’angle droit</b> $a$ et $b$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Triplets pythagoriciens</h3>
<p>Il est utile de retenir les solutions entières et leurs multiples : $(3 ; 4 ; 5)$, $(5 ; 12 ; 13)$, $(8 ; 15 ; 17)$, $(7 ; 24 ; 25)$, ainsi que $(6 ; 8 ; 10)$, $(9 ; 12 ; 15)$, …</p>
<h3>Distance entre deux points</h3>
⟦3⟧
<h3>La réciproque</h3>
<p>Avec $c$ le plus grand côté : si $a^2 + b^2 = c^2$, le triangle est <b>rectangle</b> ; si $a^2 + b^2 \gt c^2$, il est <b>acutangle</b> ; si $a^2 + b^2 \lt c^2$, il est <b>obtusangle</b>.</p>
⟦4⟧`,
  '29quz32s0mq': R`$$a^2 + b^2 = c^2$$<p>Pour trouver l’hypoténuse, on additionne les carrés ; pour un côté de l’angle droit, on soustrait : $b = \sqrt{c^2 - a^2}$.</p>`,
  '266inyds4fo': R`<p>Une échelle de 10 m est appuyée contre un mur, son pied à 6 m du mur. Hauteur atteinte : $\sqrt{10^2 - 6^2} = \sqrt{64} = 8$ m.</p>`,
  '2f1i3z4fpqs': R`<p>$\sqrt{a^2 + b^2} \ne a + b$. Avec des côtés 3 et 4, l’hypoténuse mesure 5, pas 7.</p>`,
  'tzct4b0jzc': R`Un triangle rectangle a des côtés de l’angle droit de ⟦0⟧ cm et ⟦1⟧ cm. Quelle est la longueur de l’hypoténuse ?`,
  'w85jfl9xou': R`$c^2 = ⟦0⟧^2 + ⟦1⟧^2 = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$, donc $c = \sqrt{⟦5⟧} = ⟦6⟧$ cm.`,
  '14oj6g8m8ly': R`L’hypoténuse d’un triangle rectangle mesure ⟦0⟧ m et un côté de l’angle droit ⟦1⟧ m. Combien mesure l’autre ?`,
  'ucdvtq6bkq': R`Calculez la distance entre $⟦0⟧$ et $⟦1⟧$.`,
  '174wwwvihed': R`Une échelle de ⟦0⟧ m est appuyée contre un mur vertical. Son pied est à ⟦1⟧ m du pied du mur. À quelle hauteur l’échelle arrive-t-elle ?`,
  'fb02yp437s': R`L’échelle est l’hypoténuse : $h = \sqrt{⟦0⟧^2 - ⟦1⟧^2} = \sqrt{⟦2⟧} = ⟦3⟧$ m.`,
  '1gtgjvulgbd': R`Un triangle rectangle a des côtés de l’angle droit de ⟦0⟧ cm et ⟦1⟧ cm. Calculez l’hypoténuse, arrondie au centième.`,
  '1cost2rf2x0': R`$c = \sqrt{⟦0⟧^2 + ⟦1⟧^2} = \sqrt{⟦2⟧} \approx ⟦3⟧$ cm.`,
  '14ejxhzoxmd': R`Triangle rectangle`,
  '1s09bctuu2d': R`rectangle`,
  '1fk5t91if9w': R`Triangle acutangle`,
  '7ds33wq0ok': R`acutangle`,
  '1kp4g4kchcj': R`Triangle obtusangle`,
  'imjds8cff1': R`obtusangle`,
  'fvjprzss2k': R`Un triangle a pour côtés ⟦0⟧. De quel type de triangle s’agit-il ?`,
  '5pal2wak00': R`On compare avec le plus grand côté, ⟦0⟧ : $⟦1⟧^2 + ⟦2⟧^2 = ⟦3⟧$ et $⟦4⟧^2 = ⟦5⟧$. Comme $⟦6⟧ ⟦7⟧ ⟦8⟧$, le triangle est <b>⟦9⟧</b>.`,

  // circles
  '162uvssoo3s': R`
⟦0⟧
<p>Le rapport entre le périmètre d’un cercle et son diamètre est toujours le même nombre, $\pi \approx 3{,}14159\ldots$ (souvent arrondi à $3{,}14$ ou $\frac{22}{7}$).</p>
⟦1⟧
⟦2⟧
<h3>Arcs et secteurs</h3>
<p>Un secteur d’angle au centre $\theta$ représente la fraction $\frac{\theta}{360^\circ}$ du disque entier :</p>
⟦3⟧
<h3>Angles dans un cercle</h3>
<ul><li>L’angle au centre est le <b>double</b> de l’angle inscrit qui intercepte le même arc.</li><li>Un angle inscrit dans un demi-cercle mesure $90^\circ$.</li><li>La tangente est perpendiculaire au rayon au point de contact.</li></ul>
⟦4⟧`,
  '20wibo4oznt': R`Les éléments d’un cercle. Le diamètre est le double du rayon : d = 2r.`,
  '1y041ovnv67': R`<p>Rayon 5 cm : $C = 2\pi(5) = 10\pi \approx 31{,}4$ cm et $A = \pi(5)^2 = 25\pi \approx 78{,}5$ cm². Laisser la réponse « en fonction de $\pi$ » la garde exacte.</p>`,
  '1ljhd2tb7ca': R`\text{longueur de l’arc} = \frac{\theta}{360^\circ} \times 2\pi r \qquad \text{aire du secteur} = \frac{\theta}{360^\circ} \times \pi r^2`,
  '1aglezoi0gp': R`<p>Vérifiez si l’on vous donne le rayon ou le diamètre. Utiliser $d$ dans $\pi r^2$ rend l’aire quatre fois trop grande.</p>`,
  '1iocjvynzqe': R`En prenant $\pi \approx 3{,}14$, calculez le périmètre d’un cercle de diamètre ⟦0⟧ cm.`,
  '18sb05q1pm7': R`En prenant $\pi \approx 3{,}14$, calculez le périmètre d’un cercle de rayon ⟦0⟧ cm.`,
  'upb5nulrwg': R`$C = ⟦0⟧ = ⟦1⟧$ cm.`,
  '143d0xflci4': R`\pi d = 3{,}14 \times ⟦0⟧`,
  '25yf5bhyvhn': R`2\pi r = 2 \times 3{,}14 \times ⟦0⟧`,
  '1stzke7qj3q': R`En prenant $\pi \approx \frac{22}{7}$, calculez le périmètre d’un cercle de rayon ⟦0⟧ cm.`,
  'vghbcaja6w': R`$C = 2\pi r = 2 \times \frac{22}{7} \times ⟦0⟧ = ⟦1⟧$ cm.`,
  '91md2imk84': R`Calculez l’aire d’un disque de diamètre ⟦0⟧ cm. Donnez la réponse en fonction de $\pi$.`,
  '6f1a511ku9': R`Calculez l’aire d’un disque de rayon ⟦0⟧ cm. Donnez la réponse en fonction de $\pi$.`,
  'ctkfkfiuaj': R`⟦0⟧$A = \pi r^2 = \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1uvm4lzorf9': R`Le rayon est la moitié du diamètre : ⟦0⟧ cm. `,
  '2et0owexep4': R`Un secteur a un rayon de ⟦0⟧ cm et un angle au centre de $⟦1⟧^\circ$. Calculez la longueur de son arc en fonction de $\pi$.`,
  '1fpgoxe9d0': R`Arc $= \frac{⟦0⟧}{360} \times 2\pi \times ⟦1⟧ = ⟦2⟧$ cm.`,
  '72i5kpinty': R`Un secteur a un rayon de ⟦0⟧ cm et un angle au centre de $⟦1⟧^\circ$. Calculez son aire en fonction de $\pi$.`,
  '1ayxkyrhaid': R`Aire $= \frac{⟦0⟧}{360} \times \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1fzoa3xapl2': R`Un cercle a un périmètre de $⟦0⟧$ cm. Calculez l’aire du disque en fonction de $\pi$.`,
  '22u3ive551m': R`$2\pi r = ⟦0⟧$ donne $r = ⟦1⟧$. Donc $A = \pi r^2 = ⟦2⟧$ cm².`,
  '1rcge82c97m': R`Un angle inscrit dans un cercle mesure $⟦0⟧^\circ$. Combien mesure l’angle au centre qui intercepte le même arc ?`,
  '10ccm4ku9vc': R`L’angle au centre est le double de l’angle inscrit : $2 \times ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  '1ak5mj5jm7n': R`Un angle au centre d’un cercle mesure $⟦0⟧^\circ$. Combien mesure un angle inscrit qui intercepte le même arc ?`,
  'kfe0atvapi': R`L’angle inscrit est la moitié de l’angle au centre : $\frac{⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // solids
  '57zv1tsefg': R`
<p>Un <b>prisme</b> a la même section sur toute sa longueur : son volume est simplement l’aire de cette section multipliée par sa longueur. Une pyramide ou un cône qui s’y inscrit a exactement le tiers de ce volume.</p>
⟦0⟧
<p>Pour un cône, $s$ est la <b>génératrice</b> ; d’après Pythagore, $s = \sqrt{r^2 + h^2}$.</p>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '1uywbz6o84t': R`Solide`,
  'alc1a0j1b0': R`Volume`,
  'bt7ak3o2ct': R`Aire totale`,
  'm6y2tibz7j': R`Prisme`,
  '3d3lt4gyiq': R`$A_{\text{base}} \times h$`,
  '2e5o3mkaw4p': R`somme des aires de toutes les faces`,
  '17avl8a1nf0': R`Cylindre`,
  'w68av9so54': R`Pyramide`,
  '1xyfnhsvdp5': R`$\frac{1}{3} A_{\text{base}} \times h$`,
  '1u5rq973ap9': R`base + triangles`,
  '40atij69zq': R`Cône`,
  '1cebx8i383a': R`Boule`,
  'u0gc3phvmz': R`<p>Un cylindre avec $r = 3$ cm et $h = 10$ cm :</p><p>$V = \pi (3)^2 (10) = 90\pi$ cm³ $\approx 282{,}7$ cm³. &nbsp; $A = 2\pi(9) + 2\pi(3)(10) = 18\pi + 60\pi = 78\pi$ cm².</p>`,
  '706fqlfv6n': R`<p>La surface latérale d’un cylindre se déroule en un rectangle : un côté est la hauteur $h$, l’autre le périmètre $2\pi r$. D’où $2\pi r h$.</p>`,
  '20ndnd7mfh9': R`<p>Demi-boules : la moitié du volume de la boule, mais l’aire totale vaut $2\pi r^2$ (partie courbe) $+ \pi r^2$ (disque plat) $= 3\pi r^2$.</p>`,
  '6nduvxh56u': R`Calculez le volume d’un cylindre de rayon ⟦0⟧ cm et de hauteur ⟦1⟧ cm, en fonction de $\pi$.`,
  '1u7xsdtlko1': R`$V = \pi r^2 h = \pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '1ao9a1zkfz0': R`Calculez le volume d’un cône de rayon ⟦0⟧ cm et de hauteur ⟦1⟧ cm, en fonction de $\pi$.`,
  '11qtlcks0z2': R`$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  'qcz5afk27t': R`Calculez le volume d’une boule de rayon ⟦0⟧ cm, en fonction de $\pi$.`,
  '1a5wzmqqnbb': R`$V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi \times ⟦0⟧ = ⟦1⟧$ cm³.`,
  '2boy4rshpla': R`Calculez l’aire d’une sphère de rayon ⟦0⟧ cm, en fonction de $\pi$.`,
  'myifdpmpki': R`$A = 4\pi r^2 = 4\pi \times ⟦0⟧ = ⟦1⟧$ cm².`,
  '225sd035ctc': R`Calculez l’aire totale d’un cylindre fermé de rayon ⟦0⟧ cm et de hauteur ⟦1⟧ cm, en fonction de $\pi$.`,
  'e5stvcnm4w': R`$A = 2\pi r^2 + 2\pi r h = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'ud0ddpzcpo': R`Un cône a un rayon de ⟦0⟧ cm et une hauteur de ⟦1⟧ cm. Quelle est la longueur de sa génératrice ?`,
  '1ds61tt8krc': R`$s = \sqrt{r^2 + h^2} = \sqrt{⟦0⟧ + ⟦1⟧} = ⟦2⟧$ cm.`,
  '1xg851dcel': R`Un cône a un rayon de ⟦0⟧ cm et une génératrice de ⟦1⟧ cm. Calculez son aire totale en fonction de $\pi$.`,
  '1l881dmx8vq': R`$A = \pi r^2 + \pi r s = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'fb33rdkq1e': R`Une pyramide a pour base un carré de ⟦0⟧ cm de côté et une hauteur de ⟦1⟧ cm. Quel est son volume ?`,
  '113p07j0igk': R`$V = \frac{1}{3} \times \text{base} \times h = \frac{1}{3} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '15qifiaqosu': R`Un prisme droit a pour section un triangle de base ⟦0⟧ cm et de hauteur ⟦1⟧ cm. Le prisme mesure ⟦2⟧ cm de long. Quel est son volume ?`,
  '2b2ytzrzz4n': R`Aire de la section $= \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm². Volume $= ⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ cm³.`,
});

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
