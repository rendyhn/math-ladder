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
  themeDark: R`Passer en mode nuit`,
  themeLight: R`Passer en mode jour`,
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

/* Français — Lycée (tronc commun, second degré → exponentielles et logarithmes) */
addT('fr', {
  // core
  '3idcm4kbiz': R`Écrivez les deux solutions séparées par un point-virgule, par exemple -2 ; 5.`,
  '2gdno2vs4iz': R`Écrivez une réponse comme 9pi ou 3pi/4.`,

  // quadratics
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

/* Français — Lycée (suites → résolution de triangles) */
addT('fr', {
  // sequences
  'lwukzez7ke': R`Arithmétique`,
  '1atqzl7ltey': R`Géométrique`,
  'zs186mkwh5': R`on ajoute $d$ à chaque fois`,
  '160nuilyero': R`on multiplie par $r$ à chaque fois`,
  '99dr6iy4ys': R`Somme de n termes`,
  '1yzmu3p7b4v': R`<p>La somme des 20 premiers termes de $3 ; 7 ; 11 ; \ldots$ vaut $S_{20} = \frac{20}{2}(2 \cdot 3 + 19 \cdot 4) = 10 \times 82 = 820$.</p>`,
  '8pkxhjbkfd': R`<p>Dans une suite arithmétique, $u_4 = 17$ et $u_9 = 42$. Cinq pas de $d$ les séparent, donc $5d = 25$, $d = 5$ et $a = 17 - 3 \times 5 = 2$.</p>`,
  '3zsr22exdg': R`<p>Si $|r| \lt 1$, les termes diminuent assez vite pour que la somme se stabilise sur une valeur finie :</p>$$S_\infty = \frac{a}{1 - r}$$<p>Si $|r| \ge 1$, la série n’a pas de somme finie.</p>`,
  '22swm7le3e': R`<p>Entre $u_p$ et $u_q$ il y a $q - p$ pas, et non $q - p + 1$.</p>`,
  'v83xyier66': R`Dans une suite arithmétique, $u_{⟦0⟧} = ⟦1⟧$ et $u_{⟦2⟧} = ⟦3⟧$. Calculez $u_{⟦4⟧}$.`,
  '1vrn63sndie': R`$(⟦0⟧ - ⟦1⟧)d = ⟦2⟧$, donc $d = ⟦3⟧$. Puis $a = u_{⟦4⟧} - ⟦5⟧d = ⟦6⟧$ et $u_{⟦7⟧} = ⟦8⟧ + ⟦9⟧(⟦10⟧) = ⟦11⟧$.`,
  'ltcwrvbh9s': R`Calculez la somme des ⟦0⟧ premiers termes de la suite arithmétique ⟦1⟧ ; …`,
  'vsiejpaurw': R`Calculez le terme $u_{⟦0⟧}$ de la suite géométrique ⟦1⟧ ; …`,
  '2fg2ivyt6zs': R`Calculez la somme des ⟦0⟧ premiers termes de la série géométrique $⟦1⟧ + \cdots$`,
  '6by3ukfsg3': R`Calculez la somme infinie de la série géométrique de premier terme ⟦0⟧ et de raison $⟦1⟧$.`,
  '1c4uqsdtxyr': R`$|r| \lt 1$, donc $S_\infty = \frac{a}{1 - r} = \frac{⟦0⟧}{1 - ⟦1⟧} = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  'm56xkk6hj0': R`Calculez $\displaystyle\sum_{k=1}^{⟦0⟧} (⟦1⟧)$.`,
  'zk5lcxjf3d': R`La première année, Chloé gagne ⟦0⟧ euros, et son salaire augmente de ⟦1⟧ euros chaque année. Combien gagne-t-elle au total pendant ses ⟦2⟧ premières années ?`,
  '222tg0c1ffy': R`C’est une série arithmétique : $S_{⟦0⟧} = \frac{⟦1⟧}{2}\big(2 \times ⟦2⟧ + ⟦3⟧ \times ⟦4⟧\big) = ⟦5⟧$ euros.`,

  // trig-basics
  '27jmws7mgxv': R`\sin\theta = \frac{\text{opposé}}{\text{hypoténuse}} \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypoténuse}} \qquad \tan\theta = \frac{\text{opposé}}{\text{adjacent}}`,
  'ig8vf2x1y6': R`sin θ`,
  '1qsg2x3tak': R`cos θ`,
  '27gocnzhjrz': R`tan θ`,
  '5bd73v8u9s': R`non définie`,
  'uyvhui04wr': R`<p>Pour tout angle $\theta$, le point du cercle trigonométrique est $(\cos\theta ; \sin\theta)$. Signes par quadrant — « <b>T</b>ous, <b>S</b>inus, <b>T</b>angente, <b>C</b>osinus » : tous positifs dans I, le sinus dans II, la tangente dans III, le cosinus dans IV.</p><p>Utilisez l’<b>angle de référence</b> (l’angle aigu avec l’axe des $x$) avec le bon signe : $\sin 150^\circ = +\sin 30^\circ = \frac{1}{2}$, $\cos 240^\circ = -\cos 60^\circ = -\frac{1}{2}$.</p>`,
  'hizqd1rl8k': R`<p>À 30 m de distance, l’angle d’élévation vers le sommet d’une tour est de $60^\circ$. Hauteur $= 30 \tan 60^\circ = 30\sqrt{3} \approx 52{,}0$ m.</p>`,
  'neyxpix7b9': R`<p>Vérifiez le mode de votre calculatrice (DEG ou RAD) avant de calculer des fonctions trigonométriques.</p>`,
  '67i6rxexro': R`Donnez la valeur exacte de $⟦0⟧ ⟦1⟧$.`,
  'pdy7ypcls7': R`Les valeurs exactes comme sqrt(3)/2 sont acceptées.`,
  '2b66gqgt1o8': R`⟦0⟧$⟦1⟧^\circ$ est dans le quadrant ⟦2⟧, où $⟦3⟧$ est ⟦4⟧. L’angle de référence est $⟦5⟧^\circ$ et $⟦6⟧ ⟦7⟧^\circ = ⟦8⟧$, donc $⟦9⟧ ⟦10⟧ = ⟦11⟧$.`,
  '1fngyjdzj11': R`⟦0⟧À $⟦1⟧^\circ$, le point du cercle trigonométrique est $⟦2⟧$ $= (\cos\theta ; \sin\theta)$, donc $⟦3⟧ ⟦4⟧ = ⟦5⟧$.`,
  'd9ifn6iock': R`Convertissez $⟦0⟧^\circ$ en radians.`,
  'gs4x19407v': R`On multiplie par $\frac{\pi}{180}$ : $⟦0⟧ \times \frac{\pi}{180} = ⟦1⟧$.`,
  'hgjh318aic': R`Convertissez $⟦0⟧$ radians en degrés.`,
  'zfi973h2bw': R`On multiplie par $\frac{180}{\pi}$ : $⟦0⟧ \times \frac{180^\circ}{\pi} = ⟦1⟧^\circ$.`,
  '1lrzh5jmv15': R`Dans un triangle rectangle, le côté adjacent à un angle de $⟦0⟧^\circ$ mesure ⟦1⟧ cm. Calculez le côté opposé, à 0,01 près.`,
  '1p43u7j4b13': R`$\tan ⟦0⟧^\circ = \frac{\text{opp}}{⟦1⟧}$, donc opp $= ⟦2⟧\tan ⟦3⟧^\circ \approx ⟦4⟧$ cm.`,
  '8jiaz8zixv': R`Un triangle rectangle a une hypoténuse de ⟦0⟧ cm et un angle de $⟦1⟧^\circ$. Calculez le côté opposé à cet angle, à 0,01 près.`,
  '22kukzeyh6': R`Un triangle rectangle a une hypoténuse de ⟦0⟧ cm et un angle de $⟦1⟧^\circ$. Calculez le côté adjacent à cet angle, à 0,01 près.`,
  'w56ix8w8yr': R`opp`,
  '5ydwv3it97': R`adj`,
  '187jvg9zdbu': R`$⟦0⟧ ⟦1⟧^\circ = \frac{\text{⟦2⟧}}{⟦3⟧}$, donc le côté $= ⟦4⟧⟦5⟧ ⟦6⟧^\circ \approx ⟦7⟧$ cm.`,
  '2abmsiuwu52': R`$\theta$ est aigu et $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$. Calculez $⟦2⟧\theta$.`,
  '1qudt03n4v8': R`Dessinez un triangle rectangle de côté opposé ⟦0⟧ et d’hypoténuse ⟦1⟧ ; le côté adjacent vaut $\sqrt{⟦2⟧^2 - ⟦3⟧^2} = ⟦4⟧$. Donc $⟦5⟧$.`,
  '28dk1p4hmng': R`D’un point situé à ⟦0⟧ m du pied d’un immeuble, l’angle d’élévation vers le sommet est de $⟦1⟧^\circ$. Quelle est la hauteur de l’immeuble ? Donnez une valeur exacte.`,
  '1fxpcv94bft': R`Les valeurs exactes comme 12sqrt(3) sont acceptées.`,
  'yywe4b70u1': R`$h = ⟦0⟧\tan ⟦1⟧^\circ$ et $\tan ⟦2⟧^\circ = ⟦3⟧$, donc $h = ⟦4⟧$ m.`,
  '1ttcab6tj5m': R`Quadrant I`,
  '4o87w2367v': R`Quadrant II`,
  '11djzpzc46w': R`Quadrant III`,
  '26d39yjlrkj': R`Quadrant IV`,
  '1t5qxibr3fa': R`Dans quel quadrant se trouve $\theta$ si $⟦0⟧\theta ⟦1⟧ 0$ et $⟦2⟧\theta ⟦3⟧ 0$ ?`,
  '1856p6n9vrk': R`Le sinus est positif dans I et II ; le cosinus dans I et IV ; la tangente dans I et III. Seul le <b>⟦0⟧</b> vérifie les deux conditions.`,

  // trig-identities
  '23mroepg91v': R`Identités de Pythagore`,
  '28msif6x03y': R`Formules d’addition`,
  '1qlqqnnfd2i': R`Formules de duplication`,
  '14xjp53gt4x': R`<p>Résolvez $\sin x = -\frac{1}{2}$ pour $0^\circ \le x \lt 360^\circ$. L’angle de référence est $30^\circ$ ; le sinus est négatif dans les quadrants III et IV, donc $x = 180^\circ + 30^\circ = 210^\circ$ ou $x = 360^\circ - 30^\circ = 330^\circ$.</p>`,
  '1hkvix57r6q': R`<p>Si $\sin\theta = \frac{3}{5}$ et que $\theta$ est dans le quadrant II, alors $\cos\theta = -\frac{4}{5}$ — l’identité de Pythagore donne la valeur absolue, le quadrant donne le signe.</p>`,
  '64164qr2jw': R`$\theta$ est aigu et $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$. Calculez $\sin 2\theta$.`,
  '27wxa35nxaa': R`Sachant que $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$, calculez $\cos 2\theta$.`,
  'szbqx0thv8': R`Résolvez $⟦0⟧ x = ⟦1⟧$ pour $0^\circ \le x \lt 360^\circ$.`,
  '22m72qx0p66': R`Écrivez les angles en degrés, séparés par un point-virgule, par exemple 30 ; 150.`,
  'ygon4mdoxw': R`L’angle de référence est $⟦0⟧^\circ$. $⟦1⟧$ est ⟦2⟧ dans les quadrants de $⟦3⟧^\circ$ et $⟦4⟧^\circ$, donc $x = ⟦5⟧^\circ$ ou $x = ⟦6⟧^\circ$.`,
  '15odwmxybxs': R`la différence de deux carrés, puis $1 - \sin^2 x = \cos^2 x$`,
  'x5u3qd3gs1': R`la formule de duplication`,
  'sj6onjglro': R`le développement, qui donne $\sin^2 x + \cos^2 x + 2\sin x\cos x - 1$`,
  '7gzo83e030': R`On utilise ⟦0⟧ : $⟦1⟧ = ⟦2⟧$.`,
  '1ico65e8qdc': R`Donnez la valeur exacte de $⟦0⟧$.`,
  '2ayoc6nyniw': R`Les valeurs exactes comme (sqrt(6)+sqrt(2))/4 sont acceptées.`,
  '1mewvixpsgq': R`Écrivez-le sous la forme $⟦0⟧$ et utilisez la formule d’addition avec les valeurs exactes pour $30^\circ$, $45^\circ$ et $60^\circ$ : on obtient $⟦1⟧$.`,
  'ahced7ioyb': R`$\tan\theta = ⟦0⟧$ et $\theta$ est dans le quadrant ⟦1⟧. Calculez $⟦2⟧$.`,
  '19cq8bi37ib': R`Le triangle a pour côtés ⟦0⟧, ⟦1⟧ et ⟦2⟧. Dans le quadrant ⟦3⟧, le sinus est ⟦4⟧ et le cosinus est ⟦5⟧, donc $\sin\theta = ⟦6⟧$ et $\cos\theta = ⟦7⟧$.`,

  // triangle-rules
  '2fw62bzegqh': R`$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$<p>À utiliser quand on connaît un côté et l’angle opposé, plus un autre côté ou un autre angle.</p>`,
  'mp16igkhf3': R`Loi des sinus`,
  'eonocytnm1': R`$$a^2 = b^2 + c^2 - 2bc\cos A \qquad\qquad \cos A = \frac{b^2 + c^2 - a^2}{2bc}$$<p>À utiliser avec deux côtés et l’angle compris entre eux, ou avec les trois côtés.</p>`,
  'kgaid4s1rf': R`Loi des cosinus (Al-Kashi)`,
  '1w8yehsbjfu': R`$$\text{Aire} = \tfrac{1}{2}ab\sin C \qquad\qquad \text{Héron : } \text{Aire} = \sqrt{s(s-a)(s-b)(s-c)},\; s = \tfrac{a+b+c}{2}$$`,
  '26feyop5vyd': R`<p>Côtés 5 et 8 avec un angle compris de $60^\circ$ : le troisième côté vaut $\sqrt{25 + 64 - 2(5)(8)\cos 60^\circ} = \sqrt{49} = 7$, et l’aire vaut $\frac{1}{2}(5)(8)\sin 60^\circ = 10\sqrt{3}$.</p>`,
  '11plyaa7o04': R`<p>La loi des sinus peut donner deux triangles possibles quand on cherche un angle (le « cas ambigu ») : $\sin B = 0{,}8$ permet $B \approx 53{,}1^\circ$ <i>ou</i> $B \approx 126{,}9^\circ$. Vérifiez si chacun convient.</p>`,
  'l2pu7cls8u': R`Dans le triangle $ABC$, $b = ⟦0⟧$ cm, $c = ⟦1⟧$ cm et $A = ⟦2⟧^\circ$. Calculez $a$ à 0,01 près.`,
  '27jp4mdtjl6': R`$a^2 = ⟦0⟧^2 + ⟦1⟧^2 - 2(⟦2⟧)(⟦3⟧)\cos ⟦4⟧^\circ \approx ⟦5⟧$, donc $a \approx ⟦6⟧$ cm.`,
  '1s6102ghcou': R`Un triangle a pour côtés ⟦0⟧, ⟦1⟧ et ⟦2⟧. Calculez l’angle opposé au côté de longueur ⟦3⟧.`,
  'adoadf3ehm': R`$\cos\theta = \frac{⟦0⟧^2 + ⟦1⟧^2 - ⟦2⟧^2}{2(⟦3⟧)(⟦4⟧)} = \frac{⟦5⟧}{⟦6⟧} = ⟦7⟧$, donc $\theta = ⟦8⟧^\circ$.`,
  '3e8310hzv': R`Dans le triangle $ABC$, $A = ⟦0⟧^\circ$, $B = ⟦1⟧^\circ$ et $a = ⟦2⟧$ cm. Calculez $b$ à 0,01 près.`,
  'i5vdhhm6yu': R`Loi des sinus : $\frac{b}{\sin ⟦0⟧^\circ} = \frac{⟦1⟧}{\sin ⟦2⟧^\circ}$, donc $b = \frac{⟦3⟧\sin ⟦4⟧^\circ}{\sin ⟦5⟧^\circ} \approx ⟦6⟧$ cm.`,
  '1uuy2y52gu0': R`Calculez l’aire exacte d’un triangle de côtés ⟦0⟧ cm et ⟦1⟧ cm formant un angle de $⟦2⟧^\circ$.`,
  '25opm4iwiww': R`Les valeurs exactes comme 6sqrt(3) sont acceptées.`,
  'cb99xoymur': R`Aire $= \frac{1}{2}ab\sin C = \frac{1}{2}(⟦0⟧)(⟦1⟧)\sin ⟦2⟧^\circ$, avec $\sin ⟦3⟧^\circ = ⟦4⟧$, soit $⟦5⟧$ cm².`,
  '1dwe3yjuxqj': R`Utilisez la formule de Héron pour calculer l’aire d’un triangle de côtés ⟦0⟧, ⟦1⟧ et ⟦2⟧.`,
  '8vmvle7x3': R`$s = \frac{⟦0⟧ + ⟦1⟧ + ⟦2⟧}{2} = ⟦3⟧$. Aire $= \sqrt{⟦4⟧(⟦5⟧)(⟦6⟧)(⟦7⟧)} = \sqrt{⟦8⟧} = ⟦9⟧$.`,
});

/* Français — Lycée (polynômes → intégrales) */
addT('fr', {
  // polynomials
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

/* Français — Lycée (dénombrement → logique) */
addT('fr', {
  // combinatorics
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

/* Français — Université (techniques de dérivation → équations différentielles) */
addT('fr', {
  // diff-techniques
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

/* Français — Université (algèbre linéaire → transformée de Laplace) */
addT('fr', {
  // linear-algebra
  'q9p1mxjp5t': R`<p><b>Théorème du rang :</b> pour une matrice $m \times n$, $\text{rg}(A) + \dim\ker(A) = n$. Une matrice carrée $A$ est inversible $\iff \det A \ne 0 \iff$ ses colonnes sont linéairement indépendantes $\iff \text{rg} = n$.</p>`,
  '12oak6poq42': R`\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)`,
  'zx600ry55i': R`$$A\mathbf{v} = \lambda\mathbf{v},\; \mathbf{v} \ne \mathbf{0} \qquad\Longleftrightarrow\qquad \det(A - \lambda I) = 0$$<p>Pour une matrice $2 \times 2$ : $\lambda^2 - (\text{tr}\,A)\lambda + \det A = 0$. La somme des valeurs propres est la trace et leur produit est le déterminant.</p>`,
  '1khrdp55fj': R`<p>$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ : $\lambda^2 - 7\lambda + 10 = 0$, donc $\lambda = 2 ; 5$. Pour $\lambda = 5$ : $(A - 5I)\mathbf{v} = 0$ donne $\mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.</p>`,
  '21awxvuldiu': R`<p>$\det(2A) = 2^n\det A$, et non $2\det A$ : chacune des $n$ lignes est multipliée.</p>`,
  '19a9vb1rr2m': R`Développe selon la première ligne : $⟦0⟧(⟦1⟧) - ⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$.`,
  '1j2onaty0gh': R`Trouve les valeurs propres de $⟦0⟧$.`,
  'ynzibmbl86': R`Écris les deux valeurs propres séparées par un point-virgule.`,
  '23zxsoa3fr0': R`$\lambda^2 - (\text{tr})\lambda + \det = \lambda^2 ⟦0⟧\lambda ⟦1⟧ = 0$, donc $\lambda = ⟦2⟧$ ou $\lambda = ⟦3⟧$. (Vérification : leur somme est la trace ⟦4⟧ et leur produit le déterminant ⟦5⟧.)`,
  '2etvam6ts6i': R`Trouve la dimension du noyau de $⟦0⟧$.`,
  '21ne48l6zig': R`Trouve le rang de $⟦0⟧$.`,
  'guqg5s6tj7': R`$\det \ne 0$, donc les trois lignes sont indépendantes : rang 3.`,
  '1q1ko1sbkfa': R`Une ligne est combinaison des deux autres, et ces deux-là sont indépendantes : rang 2.`,
  '2bdvxka58sc': R`Toutes les lignes sont multiples d'une même ligne : rang 1.`,
  '1pbgto6ecv4': R` D'après le théorème du rang, $\dim\ker = 3 - ⟦0⟧ = ⟦1⟧$.`,
  '167s06hkdpt': R`$A$ est une matrice $⟦0⟧ \times ⟦1⟧$ avec $\det A = ⟦2⟧$. Calcule $\det(A^{-1})$.`,
  '124zlt4oeit': R`$A$ est une matrice $⟦0⟧ \times ⟦1⟧$ avec $\det A = ⟦2⟧$. Calcule $⟦3⟧$.`,
  'vtdcjwqxja': R`Chacune des ⟦0⟧ lignes est multipliée par ⟦1⟧ : $⟦2⟧^{⟦3⟧} \times ⟦4⟧ = ⟦5⟧$.`,
  'd4v2fg20q4': R`La transposition ne change pas le déterminant : ⟦0⟧.`,
  '26v5gcnmls7': R`Résous le système et donne $⟦0⟧$ : $$\begin{cases} ⟦1⟧ \end{cases}$$`,
  '36y25q4ph4': R`Par élimination (ou par la règle de Cramer, puisque $\det A = ⟦0⟧ \ne 0$), $(x ; y ; z) = ⟦1⟧$, donc $⟦2⟧ = ⟦3⟧$.`,
  '1w651quute8': R`Les vecteurs $⟦0⟧$ sont-ils linéairement indépendants ?`,
  '1nhr23w337j': R`Linéairement indépendants`,
  '1ykattdq3py': R`Linéairement dépendants`,
  '71c2j2dn5w': R`Place-les en colonnes d'une matrice : son déterminant vaut ⟦0⟧. ⟦1⟧`,
  'd8cecy9nad': R`Il est non nul, donc ils sont indépendants.`,
  'nwja1imq1g': R`Il est nul, donc ils sont dépendants (l'un est combinaison des autres).`,
  '109v3qsafjj': R`$\mathbf{v} = ⟦0⟧$ est un vecteur propre de $A = ⟦1⟧$. Quelle est sa valeur propre ?`,
  'spg1kefpa7': R`$A\mathbf{v} = ⟦0⟧ = ⟦1⟧⟦2⟧$, donc $\lambda = ⟦3⟧$.`,

  // complex
  'rz9c61mn5': R`Multiplier`,
  '1lvuh3a6n9s': R`Conjugué`,
  '73hhnvn9cf': R`$\bar{z} = a - bi$, et $z\bar{z} = a^2 + b^2$`,
  '8ju8zqboy3': R`Diviser`,
  '23m7410nhvb': R`multiplier numérateur et dénominateur par le conjugué du dénominateur`,
  '2at5jue99d3': R`Module`,
  '26m66idec7i': R`Argument`,
  '18sul084cs9': R`$\arg z = \theta$ avec $\tan\theta = \frac{b}{a}$ (attention au quadrant)`,
  'cavhj9pbbb': R`$$z = r(\cos\theta + i\sin\theta) = re^{i\theta} \qquad\qquad z^n = r^n e^{in\theta} \;\;\text{(Moivre)}$$`,
  '16lvmowwhri': R`<p>$1 + i = \sqrt{2}e^{i\pi/4}$, donc $(1 + i)^8 = (\sqrt{2})^8 e^{2\pi i} = 16$.</p>`,
  '256fv20o5wc': R`<p>L'argument de $-1 - i$ est $-\frac{3\pi}{4}$, et non $\frac{\pi}{4}$ : $\arctan\frac{b}{a}$ seul ne distingue pas le troisième quadrant du premier.</p>`,
  '10omtzlugr6': R`Simplifie $(⟦0⟧)(⟦1⟧)$.`,
  'hty9ty1x7v': R`Écris la réponse sous la forme a+bi.`,
  '1zsla5l2vrq': R`$(⟦0⟧)(⟦1⟧) + (⟦2⟧)(⟦3⟧)i + (⟦4⟧)(⟦5⟧)i + (⟦6⟧)(⟦7⟧)i^2 = ⟦8⟧$, en utilisant $i^2 = -1$.`,
  '1z0a8n17xaw': R`Calcule $|⟦0⟧|$.`,
  '7g8mi40aa1': R`Simplifie $\dfrac{⟦0⟧}{⟦1⟧}$.`,
  '1lmk9l2nr3e': R`Multiplie numérateur et dénominateur par $⟦0⟧$. Le dénominateur devient $⟦1⟧$ et le numérateur $⟦2⟧$, donc le résultat est $⟦3⟧$.`,
  '28axbqdj3sw': R`Simplifie $i^{⟦0⟧}$.`,
  'q7margvq3g': R`Les puissances de $i$ se répètent tous les 4. $⟦0⟧ = 4 \times ⟦1⟧ + ⟦2⟧$, donc $i^{⟦3⟧} = i^{⟦4⟧} = ⟦5⟧$.`,
  '1pjjj2x31s7': R`Trouve l'argument principal $\arg z \in \left]-\pi ; \pi\right]$ de $z = ⟦0⟧$.`,
  '2fusqwp7x7b': R`$z = ⟦0⟧$ fait un angle $⟦1⟧$ avec le demi-axe réel positif (vérifie son quadrant), donc $\arg z = ⟦2⟧$.`,
  '75mna4515k': R`Écris $z = ⟦0⟧$ sous forme exponentielle $re^{i\theta}$.`,
  'bg7vixv5uf': R`$r = |z| = ⟦0⟧$ et $\theta = \arg z = ⟦1⟧$, donc $z = ⟦2⟧e^{i ⟦3⟧}$.`,
  '15suw4uuv8i': R`Utilise la formule de Moivre pour calculer $(⟦0⟧)^{⟦1⟧}$.`,
  '2e4kqt1xydt': R`$⟦0⟧ = \sqrt{2}\,e^{i\theta}$ avec $\theta = ⟦1⟧$. Alors $(\sqrt{2})^{⟦2⟧}e^{i⟦3⟧\theta} = ⟦4⟧e^{i⟦5⟧\theta} = ⟦6⟧$.`,
  '1xd7417ut46': R`Soit $z = ⟦0⟧$. Calcule $\text{⟦1⟧}(z^2)$.`,

  // distributions
  'gk52muplh1': R`E[X] = \sum x\,p(x) \qquad \text{Var}(X) = E[X^2] - (E[X])^2 \qquad E[aX + b] = aE[X] + b \qquad \text{Var}(aX + b) = a^2\,\text{Var}(X)`,
  '115owsb7jcv': R`Loi`,
  'z5bw2hz29r': R`P(X = k) ou densité`,
  '1runl3m75u8': R`Variance`,
  '1xs6so1xns8': R`Binomiale $B(n, p)$`,
  '1rwt3dxzew1': R`Poisson$(\lambda)$`,
  'n8vzzqt60t': R`Uniforme sur $[a ; b]$`,
  '2cdr2b2t24p': R`Exponentielle$(\lambda)$`,
  'l349ss11hc': R`Normale $N(\mu, \sigma^2)$`,
  '26wsuf9ho5r': R`courbe en cloche`,
  '1bw0zjk7wg1': R`<p>Centre et réduis avec $Z = \dfrac{X - \mu}{\sigma}$, puis utilise la table de la loi normale centrée réduite. <b>Règle 68–95–99,7</b> : environ 68 %, 95 % et 99,7 % des valeurs sont à moins de 1, 2 et 3 écarts-types de la moyenne.</p>`,
  '1mn62kz3dqi': R`<p>Tailles $X \sim N(170 ; 8^2)$. Une taille de 186 cm a $z = \frac{186 - 170}{8} = 2$, donc seulement environ 2,5 % des personnes sont plus grandes.</p>`,
  '20odz9yh9el': R`<p>La loi binomiale suppose un nombre fixé d'épreuves indépendantes de même probabilité de succès. La loi de Poisson compte des événements dans un intervalle à taux moyen constant.</p>`,
  'hehw668sc4': R`Calcule $E[X]$ pour cette loi.⟦0⟧`,
  'ggtradb99r': R`On lance ⟦0⟧ fois une pièce équilibrée. Quelle est la probabilité d'obtenir exactement ⟦1⟧ fois pile ?`,
  '1gonhfsfe0e': R`$X \sim B\!\left(⟦0⟧ ; \frac{1}{3}\right)$. Calcule $P(X = ⟦1⟧)$.`,
  '2e8zcm46v5k': R`$X \sim B(⟦0⟧ ; ⟦1⟧)$. Calcule $\text{Var}(X)$.`,
  '1sv4co448ex': R`$\text{Var}(X) = np(1 - p) = ⟦0⟧(⟦1⟧)(⟦2⟧) = ⟦3⟧$.`,
  'qmg93npnbt': R`$X \sim B(⟦0⟧ ; ⟦1⟧)$. Calcule $E[X]$.`,
  '283j9ftzcid': R`$X \sim N(⟦0⟧ ; ⟦1⟧^2)$. Calcule la valeur centrée réduite $z$ de $x = ⟦2⟧$.`,
  '1kbz6k640p5': R`$X \sim \text{Poisson}(⟦0⟧)$. Calcule $P(X = ⟦1⟧)$ à 4 décimales près.`,
  '2el5p15nmmp': R`entre ⟦0⟧ et ⟦1⟧`,
  'lwhiv9yady': R`au-dessus de ⟦0⟧`,
  'x696ofvj9v': R`en dessous de ⟦0⟧`,
  '1cdk3p0w1a9': R`Des notes suivent une loi normale de moyenne ⟦0⟧ et d'écart-type ⟦1⟧. D'après la règle 68–95–99,7, quel pourcentage environ des notes se situe ⟦2⟧ ?`,
  '2ciqs8smgdj': R`Exprime les valeurs en écarts-types par rapport à la moyenne et utilise 68 % à moins de 1σ, 95 % à moins de 2σ, 99,7 % à moins de 3σ (les queues se partagent équitablement le reste) : <b>⟦0⟧ %</b>.`,
  '1b8kg565owb': R`$E[X] = ⟦0⟧$ et $\text{Var}(X) = ⟦1⟧$. Calcule $\text{Var}(⟦2⟧)$.`,
  '21eg07xqby': R`$\text{Var}(aX + b) = a^2\,\text{Var}(X) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ — la constante ⟦3⟧ n'a aucun effet.`,
  'ha18xspr5t': R`$E[X] = ⟦0⟧$ et $\text{Var}(X) = ⟦1⟧$. Calcule $E[⟦2⟧]$.`,

  // inference
  'cozbu7bifr': R`\bar{x} \pm z^*\frac{\sigma}{\sqrt{n}} \qquad z^* = 1{,}645 \;(90\,\%);\; 1{,}96 \;(95\,\%);\; 2{,}576 \;(99\,\%)`,
  '7nca7j57l5': R`H₀ vraie`,
  '2e0zey7f13x': R`H₀ fausse`,
  '1nokpmpua28': R`Rejeter H₀`,
  'qa9cxjojd2': R`Erreur de première espèce (probabilité α)`,
  'z1afbgzons': R`Correct (puissance)`,
  'tc6mfczzyi': R`Ne pas rejeter H₀`,
  'w131ulu49o': R`Correct`,
  'e51gkfcb06': R`Erreur de seconde espèce (probabilité β)`,
  '6idiejz1ba': R`<p>« Ne pas rejeter $H_0$ » n'est pas la même chose qu'« accepter $H_0$ » : les données ne fournissent simplement pas assez de preuves contre elle.</p>`,
  'awqxfz9vdv': R`Une population a $\sigma = ⟦0⟧$. Calcule l'erreur type de la moyenne pour des échantillons de taille ⟦1⟧.`,
  'ugvd79s2wi': R`Un échantillon de taille ⟦0⟧ a pour moyenne ⟦1⟧ ; l'écart-type de la population est ⟦2⟧. Calcule la borne ⟦3⟧ de l'intervalle de confiance à ⟦4⟧ % pour $\mu$, à 2 décimales près.`,
  '1n36a0strty': R`Marge $= ⟦0⟧ \times \frac{⟦1⟧}{\sqrt{⟦2⟧}} = ⟦3⟧$. ⟦4⟧`,
  '2ekc2g43ffk': R`Borne supérieure $= ⟦0⟧ + ⟦1⟧ \approx ⟦2⟧$.`,
  'u2fj3njiv8': R`Borne inférieure $= ⟦0⟧ - ⟦1⟧ \approx ⟦2⟧$.`,
  '1i53ibdizmj': R`Teste $H_0 : \mu = ⟦0⟧$ avec $\sigma = ⟦1⟧$. Un échantillon de taille ⟦2⟧ a $\bar{x} = ⟦3⟧$. Calcule la statistique de test $z$ à 2 décimales près.`,
  'b7sayy3tzp': R`Un test donne une p-valeur de ⟦0⟧. Au seuil de ⟦1⟧ %, quelle est la décision ?`,
  '1adfzwf3gei': R`ne pas rejeter`,
  '2fh7exkwsd7': R`on ne rejette pas`,
  '1ui411puarn': R`Compare la p-valeur à $\alpha = ⟦0⟧$ : $⟦1⟧ ⟦2⟧ ⟦3⟧$, ⟦4⟧`,
  '19asmns888x': R`donc on <b>rejette</b> $H_0$.`,
  '28e9takeetw': R`donc on <b>ne rejette pas</b> $H_0$.`,
  '3boqwtx8y6': R`La droite de régression de $y$ en $x$ a pour pente ⟦0⟧ et passe par $(\bar{x} ; \bar{y}) = (⟦1⟧ ; ⟦2⟧)$. Prédis $y$ pour $x = ⟦3⟧$.`,
  '1xlncasuj2t': R`Ordonnée à l'origine $a = \bar{y} - b\bar{x} = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$. Alors $\hat{y} = ⟦4⟧ ⟦5⟧(⟦6⟧) = ⟦7⟧$.`,
  '1juzrcbx7yp': R`La droite de régression de $y$ en $x$ a pour pente ⟦0⟧, avec $\bar{x} = ⟦1⟧$ et $\bar{y} = ⟦2⟧$. Trouve l'ordonnée à l'origine.`,
  'ygsgt4zx8s': R`La droite passe par $(\bar{x} ; \bar{y})$ : $a = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$.`,
  '1fjn7fhcpwy': R`Rejeter H₀ alors que H₀ est vraie`,
  '2czv0lmmxbv': R`Erreur de première espèce`,
  '1rsaomc3xxj': R`Ne pas rejeter H₀ alors que H₀ est fausse`,
  '1knmx3avsv8': R`Erreur de seconde espèce`,
  '7bbk61slol': R`Rejeter H₀ alors que H₀ est fausse`,
  '6vojkrxnxd': R`Bonne décision`,
  '27k0u0dgkx8': R`Ne pas rejeter H₀ alors que H₀ est vraie`,
  'j30d9a2wnu': R`Condamner un accusé innocent (H₀ : innocent)`,
  '1r9j0p9otdz': R`Relâcher un accusé coupable (H₀ : innocent)`,
  'yce1tww5je': R`De quel type de résultat s'agit-il ? <i>⟦0⟧</i>.`,
  'f5q8ah45y5': R`Première espèce = rejeter une $H_0$ vraie (fausse alerte) ; seconde espèce = ne pas détecter une $H_0$ fausse. C'est donc : <b>⟦0⟧</b>.`,
  '17su48d7rp0': R`Quelle est la plus petite taille d'échantillon donnant un intervalle de confiance à ⟦0⟧ % avec une marge d'erreur d'au plus ⟦1⟧, si $\sigma = ⟦2⟧$ ?`,
  'cysiojo18k': R`$n \ge \left(\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧}\right)^2 \approx ⟦3⟧$, donc on arrondit à l'entier supérieur : $n = ⟦4⟧$.`,

  // discrete
  '1vllnifl24g': R`<p><b>Algorithme d'Euclide :</b> $\gcd(a, b) = \gcd(b, a \bmod b)$, répété jusqu'à obtenir un reste nul.</p><p><b>Petit théorème de Fermat :</b> si $p$ est premier et $p \nmid a$, alors $a^{p-1} \equiv 1 \pmod p$.</p>`,
  '28pp2kgl31t': R`<p>$\gcd(252, 198)$ : $252 = 1 \cdot 198 + 54$, $198 = 3 \cdot 54 + 36$, $54 = 1 \cdot 36 + 18$, $36 = 2 \cdot 18$. Le PGCD est donc 18.</p><p>$2^{100} \bmod 7$ : comme $2^3 = 8 \equiv 1$, $2^{100} = (2^3)^{33} \cdot 2 \equiv 2$.</p>`,
  '23tw4c5wfxh': R`<p>Dans les problèmes d'inclusion–exclusion (« divisible par 3 ou par 5 »), l'intersection correspond à la divisibilité par le <b>PPCM</b>, 15.</p>`,
  '8fw6na2xe1': R`Calcule $⟦0⟧ \bmod ⟦1⟧$.`,
  'uplm3u8bhu': R`$⟦0⟧ = ⟦1⟧ \times ⟦2⟧ + ⟦3⟧$, donc le reste est ⟦4⟧.`,
  'xlpbyjzaqw': R`Calcule $⟦0⟧^{⟦1⟧} \bmod ⟦2⟧$.`,
  '1kd2o5jees6': R`D'après Fermat, $⟦0⟧^{⟦1⟧} \equiv 1 \pmod{⟦2⟧}$. $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ + ⟦6⟧$, donc $⟦7⟧^{⟦8⟧} \equiv ⟦9⟧^{⟦10⟧} \equiv ⟦11⟧ \pmod{⟦12⟧}$.`,
  '127b4pzxtz': R`Utilise l'algorithme d'Euclide pour trouver $\gcd(⟦0⟧, ⟦1⟧)$.`,
  '1aqkhdrg8qc': R`$⟦0⟧$. Le dernier reste non nul est <b>⟦1⟧</b>.`,
  '1s721amox67': R`Trouve l'inverse de ⟦0⟧ modulo ⟦1⟧, c'est-à-dire le $x$ tel que $⟦2⟧x \equiv 1 \pmod{⟦3⟧}$ et $0 \lt x \lt ⟦4⟧$.`,
  '1w7xn0v2je4': R`Vérification : $⟦0⟧ \times ⟦1⟧ = ⟦2⟧ = ⟦3⟧ \times ⟦4⟧ + 1$, donc $x = ⟦5⟧$.`,
  'x5llfo779v': R`Combien d'arêtes le graphe complet $K_{⟦0⟧}$ possède-t-il ?`,
  '1k9fldmleaq': R`Chaque paire de sommets est reliée : $\binom{⟦0⟧}{2} = \frac{⟦1⟧ \times ⟦2⟧}{2} = ⟦3⟧$.`,
  '1gbx4896k6y': R`Un arbre a ⟦0⟧ sommets. Combien a-t-il d'arêtes ?`,
  'g3rd0a2w3f': R`Tout arbre à $n$ sommets a $n - 1 = ⟦0⟧$ arêtes.`,
  '1b7sza9kgx9': R`Un graphe a des sommets de degrés ⟦0⟧. Combien a-t-il d'arêtes ?`,
  '2eddhu7y6e4': R`Lemme des poignées de main : $\sum\deg = ⟦0⟧ = 2|E|$, donc $|E| = ⟦1⟧$.`,
  '6xjrxhddis': R`Un graphe connexe a des sommets de degrés ⟦0⟧. Combien de sommets sont de degré impair ?`,
  '5vsb2c69v5': R`Les degrés impairs sont ⟦0⟧, il y en a donc ⟦1⟧. ⟦2⟧ (Le nombre de sommets de degré impair est toujours pair.)`,
  '2gbggujxcvs': R`aucun`,
  '105xal8etax': R`Le graphe possède donc un cycle eulérien.`,
  '1z20e1aao3p': R`Le graphe possède donc une chaîne eulérienne mais pas de cycle eulérien.`,
  '1vy383kqrz8': R`Avec plus de 2 sommets impairs, il n'y a pas de chaîne eulérienne.`,
  'by57uvpuwf': R`$a_0 = ⟦0⟧$ et $a_n = ⟦1⟧a_{n-1} ⟦2⟧$ pour $n \ge 1$. Calcule $a_{⟦3⟧}$.`,
  '75ssmud3lg': R`Calcule terme à terme : ⟦0⟧.`,
  'go6ohggc8l': R`Combien de chaînes binaires de longueur ⟦0⟧ contiennent exactement ⟦1⟧ uns ?`,
  '27u4ks23cz9': R`Choisis lesquelles des ⟦1⟧ positions (⟦0⟧ d'entre elles) portent un 1 : $\binom{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  'yx3fxah4u8': R`Combien y a-t-il d'applications d'un ensemble à ⟦0⟧ éléments dans un ensemble à ⟦1⟧ éléments ?`,
  '12owpaqzt1c': R`Chacun des ⟦0⟧ éléments de départ peut aller vers n'importe lequel des ⟦1⟧ éléments d'arrivée : $⟦2⟧^{⟦3⟧} = ⟦4⟧$.`,
  '4o2cs42p15': R`Combien y a-t-il d'applications injectives d'un ensemble à ⟦0⟧ éléments dans un ensemble à ⟦1⟧ éléments ?`,
  'jpinfh5krc': R`Les images doivent être distinctes : $⟦0⟧ = ⟦1⟧$.`,
  '10skxcum4lz': R`Combien d'entiers de 1 à ⟦0⟧ sont divisibles par ⟦1⟧ ou par ⟦2⟧ ?`,
  'nhrb9jig2q': R`$\lfloor ⟦0⟧/⟦1⟧ \rfloor + \lfloor ⟦2⟧/⟦3⟧ \rfloor - \lfloor ⟦4⟧/⟦5⟧ \rfloor = ⟦6⟧ + ⟦7⟧ - ⟦8⟧ = ⟦9⟧$ (⟦10⟧ est le PPCM).`,
  'cgzqt4g6kc': R`mois de naissance`,
  '10ye3jsw3n2': R`jour de la semaine`,
  '1eah1ab17mo': R`couleur (d'un jeu de cartes)`,
  '1fddlc7zc0d': R`Quel est le plus petit nombre de personnes garantissant qu'au moins ⟦0⟧ d'entre elles aient le même ⟦1⟧ ?`,
  '27kjdpfw0sg': R`Avec ⟦0⟧ catégories, $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ personnes pourraient l'éviter ; une de plus impose un groupe de ⟦4⟧ : $⟦5⟧$.`,

  // numerical
  '2fbw9jej1dm': R`\text{erreur absolue} = |x_{\text{exact}} - x_{\text{approché}}| \qquad \text{erreur relative} = \frac{|x_{\text{exact}} - x_{\text{approché}}|}{|x_{\text{exact}}|}`,
  '1a9noj3sp27': R`<p>$\sqrt{10}$ avec $f(x) = x^2 - 10$ à partir de $x_0 = 3$ : $x_1 = 3 - \frac{-1}{6} = 3{,}1667$, $x_2 = 3{,}1623$ — déjà exact à 4 décimales.</p>`,
  'vx6qz5zup7': R`\text{Trapèzes : } \frac{h}{2}\big[f_0 + 2f_1 + \cdots + 2f_{n-1} + f_n\big] \qquad \text{Simpson } (n \text{ pair}) : \frac{h}{3}\big[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + f_n\big]`,
  '2fmxu9hfzwl': R`<p>Pour $y' = f(x, y)$ avec $y(x_0) = y_0$ : $\; y_{n+1} = y_n + h\,f(x_n, y_n)$, $x_{n+1} = x_n + h$. Diviser $h$ par deux divise à peu près l'erreur par deux.</p>`,
  'fn0bl5sobc': R`<p>Dans la méthode des trapèzes, seules les ordonnées <b>intérieures</b> sont doublées ; les deux valeurs aux bornes n'apparaissent qu'une fois.</p>`,
  '1n5pqkgqwu1': R`Applique une étape de la méthode de Newton à $f(x) = x^2 - ⟦0⟧$ à partir de $x_0 = ⟦1⟧$. Donne $x_1$ à 4 décimales près.`,
  '1jvkeb9n3o6': R`Applique une étape de dichotomie à $f(x) = x^2 - 3$ sur $[1 ; 2]$. Quel intervalle contient la racine après cette étape ?`,
  'vksl6we3dc': R`$f(1{,}5) = -0{,}75 \lt 0$ et $f(2) = 1 \gt 0$, donc le changement de signe est dans $[1{,}5 ; 2]$.`,
  '23lzoh0yq9e': R`Applique la dichotomie à $f(x) = x^⟦0⟧ - ⟦1⟧$ sur $[⟦2⟧ ; ⟦3⟧]$. Quel est le milieu calculé à la <b>deuxième</b> itération ?`,
  '114tbd27u3w': R`Premier milieu $⟦0⟧$ : $f(⟦1⟧) = ⟦2⟧$, donc la racine est dans $[⟦3⟧ ; ⟦4⟧]$. Deuxième milieu : $⟦5⟧$.`,
  '1gaoigxt1uo': R`Utilise la méthode des trapèzes avec $n = ⟦0⟧$ pour approcher $\displaystyle\int_0^{⟦1⟧} x^2\,dx$.`,
  '1pc9rab646n': R`$h = ⟦0⟧$ ; ordonnées ⟦1⟧. $T = \frac{⟦2⟧}{2}\left[⟦3⟧ + ⟦4⟧ + 2(⟦5⟧)\right] = ⟦6⟧$ (valeur exacte ⟦7⟧).`,
  '1rsvekr7t2o': R`Utilise la méthode de Simpson avec $n = 2$ pour approcher $\displaystyle\int_0^{⟦0⟧} x^4\,dx$.`,
  '8vqt4i28qj': R`$h = \frac{⟦0⟧}{2}$ : $\frac{h}{3}\left[0 + 4\left(\frac{⟦1⟧}{2}\right)^4 + ⟦2⟧^4\right] = \frac{⟦3⟧}{6} \cdot \frac{5 \cdot ⟦4⟧}{4} = ⟦5⟧$ (valeur exacte $⟦6⟧$).`,
  '1jdhmav4ljk': R`Utilise la méthode d'Euler avec $h = ⟦0⟧$ pour approcher $y(⟦1⟧)$ pour $y' = ⟦2⟧$, $y(0) = 1$. Arrondis à 4 décimales.`,
  '6utp8finkn': R`$⟦0⟧$ est approché par ⟦1⟧. Calcule l'erreur relative en pourcentage, à 3 décimales près.`,

  // vector-calculus
  '1oemuo3mhjj': R`\text{div}\,\mathbf{F} = \nabla\cdot\mathbf{F} = P_x + Q_y + R_z \qquad \text{rot}\,\mathbf{F} = \nabla\times\mathbf{F} = (R_y - Q_z,\; P_z - R_x,\; Q_x - P_y)`,
  'dx5b9h7rwd': R`<p>$\mathbf{F}$ est <b>conservatif</b> si $\mathbf{F} = \nabla\varphi$ pour un potentiel $\varphi$. Alors $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r} = \varphi(B) - \varphi(A)$ pour tout chemin de $A$ à $B$. Dans le plan (domaine simplement connexe), $(P, Q)$ est conservatif ssi $P_y = Q_x$.</p>`,
  '11uavg1kohe': R`<p>$\mathbf{F} = (2xy, x^2 + 3)$ : $P_y = 2x = Q_x$, donc il est conservatif avec $\varphi = x^2y + 3y$. De $(0 ; 0)$ à $(2 ; 1)$ : $\varphi(2 ; 1) - \varphi(0 ; 0) = 4 + 3 = 7$.</p>`,
  '1yct8dx5k46': R`Théorème`,
  '3albyqcn6s': R`Green`,
  '1osdvqguwrh': R`Stokes`,
  '11x91oqdbb7': R`Flux-divergence (Gauss)`,
  '28jc8ed48q8': R`<p>Le théorème de Green suppose que $C$ est parcouru dans le sens <b>trigonométrique</b> (région à gauche) ; le sens horaire change le signe.</p>`,
  'fg37vtw1nz': R`Calcule $\nabla\cdot\mathbf{F}$ en $⟦0⟧$ pour $\mathbf{F} = \left(⟦1⟧,\; ⟦2⟧,\; ⟦3⟧\right)$.`,
  'i6u559ylzz': R`$P_x = ⟦0⟧$, $Q_y = ⟦1⟧$, $R_z = ⟦2⟧$. En $⟦3⟧$ : $⟦4⟧ ⟦5⟧ ⟦6⟧ = ⟦7⟧$.`,
  'dvzsgd4pt9': R`Pour $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$, calcule $Q_x - P_y$ (le rotationnel scalaire) en $⟦2⟧$.`,
  '1f7xg7qakjk': R`$Q_x = ⟦0⟧$ et $P_y = ⟦1⟧$, donc $Q_x - P_y = ⟦2⟧$, qui vaut ⟦3⟧ en $⟦4⟧$.`,
  '6gosl713kw': R`Calcule $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r}$ où $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$ et $C$ est un chemin quelconque de $⟦2⟧$ à $⟦3⟧$.`,
  '1ch21kaf5wm': R`$\mathbf{F} = \nabla\varphi$ avec $\varphi = ⟦0⟧$, donc l'intégrale ne dépend pas du chemin : $\varphi(B) - \varphi(A) = ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  '1czrg3saejj': R`Utilise le théorème de Green pour calculer $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$, où $C$ est le bord du rectangle $[0 ; ⟦2⟧] \times [0 ; ⟦3⟧]$, parcouru dans le sens trigonométrique.`,
  'otc4kapbek': R`$Q_x - P_y = ⟦0⟧ - (-⟦1⟧) = ⟦2⟧$, donc l'intégrale vaut $⟦3⟧ \times \text{aire} = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  '1mzbbq34ezd': R`Utilise le théorème de Green pour calculer $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$, où $C$ est le cercle $x^2 + y^2 = ⟦2⟧$, parcouru dans le sens trigonométrique.`,
  '2fijtuqaqq1': R`$Q_x - P_y = ⟦0⟧$, donc l'intégrale vaut $⟦1⟧ \times \pi(⟦2⟧)^2 = ⟦3⟧$.`,
  '2csh30v58t4': R`Le champ $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$ est-il conservatif ?`,
  '1ma95r0zub6': R`Conservatif`,
  'bn62hz6wu8': R`Non conservatif`,
  '1s854ovcwco': R`non conservatif`,
  '15asqrx4hnu': R`$P_y = ⟦0⟧$ et $Q_x = ⟦1⟧$. ⟦2⟧`,
  'r7areoyr0a': R`Elles sont égales, donc F est conservatif (sur tout le plan).`,
  '6dlb2jbxf0': R`Elles diffèrent, donc F n'est pas conservatif.`,
  '1ueomkx63n5': R`Trouve un potentiel pour $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$.`,
  '4awle3me9d': R`Intègre $P$ par rapport à $x$ : $\varphi = ⟦0⟧ + g(y)$. Alors $\varphi_y = ⟦1⟧ + g'(y) = ⟦2⟧$ donne $g = ⟦3⟧$.`,

  // laplace
  '1kbz0ay16v9': R`\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt`,
  '1id74v8hrdj': R`<p><b>Linéarité :</b> $\mathcal{L}\{af + bg\} = aF + bG$. <b>Dérivées :</b> $\mathcal{L}\{y'\} = sY - y(0)$ et $\mathcal{L}\{y''\} = s^2Y - sy(0) - y'(0)$ — les équations différentielles deviennent de l'algèbre.</p>`,
  'ie964pskzz': R`<p>Résous $y'' + 4y = 0$, $y(0) = 3$, $y'(0) = 2$.</p><p>$s^2Y - 3s - 2 + 4Y = 0$, donc $Y = \dfrac{3s + 2}{s^2 + 4} = 3\dfrac{s}{s^2 + 4} + \dfrac{2}{s^2 + 4}$. En inversant : $y = 3\cos 2t + \sin 2t$.</p>`,
  'cgwsp3i8af': R`<p>$\mathcal{L}\{\sin bt\}$ a $b$ au numérateur ; $\mathcal{L}\{\cos bt\}$ a $s$ au numérateur. Les confondre est l'erreur la plus fréquente.</p>`,
  't6bpsx84ob': R`Calcule $\mathcal{L}\{⟦0⟧\}$.`,
  '2sqpcztdp7': R`Linéarité avec $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ et $\mathcal{L}\{e^{ct}\} = \frac{1}{s - c}$ : $\frac{⟦0⟧ \cdot ⟦1⟧!}{s^{⟦2⟧}} + \frac{⟦3⟧}{⟦4⟧}$.`,
  '1erb7erw9za': R`Calcule $\mathcal{L}\{⟦0⟧⟦1⟧ ⟦2⟧t\}$.`,
  'ujzn9ioggu': R`$\mathcal{L}\{\sin bt\} = \frac{b}{s^2 + b^2}$, donc la réponse est $\frac{⟦0⟧ \cdot ⟦1⟧}{s^2 + ⟦2⟧} = \frac{⟦3⟧}{s^2 + ⟦4⟧}$.`,
  '2dljwnla25z': R`$\mathcal{L}\{\cos bt\} = \frac{s}{s^2 + b^2}$, donc la réponse est $\frac{⟦0⟧s}{s^2 + ⟦1⟧}$.`,
  'napbzc1h43': R`Calcule $\mathcal{L}^{-1}\left\{\dfrac{⟦0⟧}{⟦1⟧} + \dfrac{⟦2⟧s}{s^2 + ⟦3⟧}\right\}$.`,
  '6d49fl6z14': R`$\frac{1}{s - c} \leftrightarrow e^{ct}$ et $\frac{s}{s^2 + d^2} \leftrightarrow \cos dt$ : le résultat est ⟦0⟧.`,
  'hw06puz2z5': R`Calcule $\mathcal{L}\{⟦0⟧\,⟦1⟧ ⟦2⟧t\}$.`,
  'zs0uacvdu8': R`Premier théorème de translation : $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$. Avec $F(s) = ⟦0⟧$, remplace $s$ par $⟦1⟧$.`,
  '1i1mf4ew2a': R`Soit $F(s) = \mathcal{L}\{t^{⟦0⟧}\}$. Calcule $F(⟦1⟧)$.`,
  '180y0883p6z': R`$F(s) = \frac{⟦0⟧!}{s^{⟦1⟧}}$, donc $F(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '11s9xvqwvw4': R`Soit $F(s) = \mathcal{L}\{⟦0⟧\}$. Calcule $F(⟦1⟧)$.`,
  '18wjdkl7beq': R`$F(s) = \frac{1}{s - (⟦0⟧)}$, donc $F(⟦1⟧) = \frac{1}{⟦2⟧}$.`,
  '9v69wy5cnz': R`Résous $y'' + ⟦0⟧y = 0$ avec $y(0) = ⟦1⟧$, $y'(0) = ⟦2⟧$ à l'aide de la transformée de Laplace.`,
  '24mrp3u7eep': R`$s^2Y - ⟦0⟧s - ⟦1⟧ + ⟦2⟧Y = 0$, donc $Y = ⟦3⟧$. Décompose en $⟦4⟧\cdot\frac{s}{s^2 + ⟦5⟧} + \frac{⟦6⟧}{⟦7⟧}\cdot\frac{⟦8⟧}{s^2 + ⟦9⟧}$ et inverse : ⟦10⟧.`,
});

/* ladder: topic prerequisites and what they lead to */
addUI('fr', {
  ladderHead: R`La place de ce chapitre`,
  buildsOn: R`S’appuie sur`,
  leadsTo: R`Mène à`,
  ladderStart: R`Un point de départ : aucun chapitre préalable n’est nécessaire.`,
  ladderTop: R`Le sommet de cette branche de l’échelle.`,
});
addT('fr', {
  // Column addition and subtraction line digits up by place valu
  'qeiew1mndp': R`L’addition et la soustraction posées alignent les chiffres selon leur rang, et la retenue fait passer une dizaine au rang suivant.`,
  // Multiplication is repeated addition, and division undoes mul
  '1jpm1intgmb': R`La multiplication est une addition répétée, et la division défait la multiplication.`,
  // The order of operations decides which of $+$, $-$, $\times$ 
  '5wxy40oljq': R`Les priorités opératoires décident laquelle de $+$, $-$, $\times$ et $\div$ passe en premier dans un calcul long.`,
  // Factors and multiples are the numbers that divide a number e
  '10sha3zlzp3': R`Les diviseurs et les multiples sont les nombres qui divisent exactement un nombre, ou que l’on obtient en le multipliant.`,
  // Simplifying fractions and finding a common denominator use c
  '4wwa4bmv2r': R`Simplifier une fraction et trouver un dénominateur commun utilisent les diviseurs communs et le plus petit commun multiple.`,
  // Decimals extend place value to the right of the ones place: 
  'sh9lbghpe9': R`Les nombres décimaux prolongent la numération à droite des unités : dixièmes, centièmes, millièmes.`,
  // A decimal is a fraction whose denominator is 10, 100, 1000 a
  'irkoozgpjt': R`Un nombre décimal est une fraction dont le dénominateur est 10, 100, 1000, etc.`,
  // Percent means “out of a hundred”: 25% is the fraction $\frac
  'p34b5uh54s': R`Pour cent signifie « sur cent » : 25 % est la fraction $\frac{25}{100} = \frac{1}{4}$.`,
  // Percentages are converted to decimals to calculate with them
  '231i108op1x': R`Pour calculer avec un pourcentage, on l’écrit en décimal : 8 % d’un prix, c’est $0{,}08 \times$ le prix.`,
  // Converting between metric units multiplies or divides by 10,
  'o2gl9i6l2': R`Convertir des unités métriques revient à multiplier ou diviser par 10, 100 ou 1000, ce qui déplace la virgule.`,
  // The area of a rectangle is length times width.
  '25wcbpclu4': R`L’aire d’un rectangle est la longueur fois la largeur.`,
  // Lengths and areas are measured in units such as cm and cm², 
  '2634ih96gsm': R`Longueurs et aires se mesurent dans des unités comme le cm et le cm², qui doivent être les mêmes avant de calculer.`,
  // The volume of a prism is the area of its base times its heig
  'kwo8mlyup8': R`Le volume d’un prisme est l’aire de sa base fois sa hauteur, et l’aire totale additionne les aires de ses faces.`,
  // Angle facts, such as “angles on a straight line add up to 18
  '1v95ytyiz1t': R`Les propriétés des angles, comme « des angles sur une droite font 180° au total », s’utilisent en additionnant et en soustrayant des angles.`,
  // The mean is the total of the values divided by how many valu
  'bcjde87onv': R`La moyenne est la somme des valeurs divisée par le nombre de valeurs.`,
  // Integers extend the number line below zero; adding and subtr
  'uhivuskhe4': R`Les entiers relatifs prolongent la droite graduée sous zéro ; on les additionne et les soustrait avec les mêmes idées, en tenant compte des signes.`,
  // A power is repeated multiplication: $2^5 = 2 \times 2 \times
  '14qn14hzx13': R`Une puissance est une multiplication répétée : $2^5 = 2 \times 2 \times 2 \times 2 \times 2$.`,
  // Scientific notation writes a number as $a \times 10^n$, usin
  'hr39w4wzvv': R`L’écriture scientifique note un nombre $a \times 10^n$, à l’aide des puissances de dix.`,
  // The number $a$ in $a \times 10^n$ is a decimal from 1 up to 
  'qonxs1x7d1': R`Le nombre $a$ dans $a \times 10^n$ est un décimal compris entre 1 inclus et 10 exclu.`,
  // A ratio compares quantities the way a fraction does, and a p
  '23aa0qkt117': R`Un ratio compare des quantités comme une fraction, et une proportion affirme que deux fractions sont égales.`,
  // Letters stand for numbers that may be negative, so expressio
  'r03wloegxg': R`Les lettres désignent des nombres qui peuvent être négatifs : on simplifie donc les expressions avec la règle des signes.`,
  // Expanding brackets and substituting values into an expressio
  '21h80w1us7d': R`Développer des parenthèses et remplacer une lettre par une valeur suivent les priorités opératoires.`,
  // Solving an equation means simplifying the expressions on eac
  'dsfd6oq44q': R`Résoudre une équation, c’est simplifier les expressions de chaque membre, puis défaire les opérations.`,
  // Inequalities are solved like equations, except that the sign
  'chsc7bja9g': R`Les inéquations se résolvent comme les équations, sauf que le sens change quand on multiplie ou divise par un nombre négatif.`,
  // Sets of factors, multiples and primes are typical first exam
  '1rnu9h0j44t': R`Les ensembles de diviseurs, de multiples et de nombres premiers sont les premiers exemples classiques d’ensembles et de diagrammes de Venn.`,
  // The graph of a linear equation in $x$ and $y$ is a straight 
  '1mojvmv6g25': R`Le graphique d’une équation du premier degré en $x$ et $y$ est une droite, et chacun de ses points est une solution.`,
  // The gradient of a line is a rate: the change in $y$ for each
  'ofsdmnc7db': R`La pente d’une droite est un taux : la variation de $y$ quand $x$ augmente d’une unité.`,
  // Substitution and elimination turn a system into a single lin
  'zd8khoatau': R`La substitution et la combinaison ramènent un système à une seule équation à une inconnue.`,
  // The solution of a system of two linear equations is the poin
  '1euaco9nn3z': R`La solution d’un système de deux équations linéaires est le point d’intersection de leurs deux droites.`,
  // The theorem $a^2 + b^2 = c^2$ is worked with squares and squ
  '296jzhjbpfo': R`Le théorème $a^2 + b^2 = c^2$ se manie avec des carrés et des racines carrées.`,
  // The theorem is a fact about right-angled triangles and which
  '27afy2qgea8': R`Le théorème porte sur les triangles rectangles et sur le côté qui est l’hypoténuse.`,
  // Circumference and the area of a circle extend perimeter and 
  '1c7m4ao6ge7': R`Le périmètre et l’aire du disque prolongent périmètre et aire à une figure courbe.`,
  // Cylinders, cones and spheres are round, so their formulas us
  '4ai3wcl267': R`Cylindres, cônes et boules sont ronds, donc leurs formules font intervenir $\pi$ et le rayon.`,
  // The volume and surface area of prisms are extended to cylind
  'fxdb4tsyw2': R`Le volume et l’aire des prismes s’étendent aux cylindres, cônes, pyramides et boules.`,
  // Mean, median and mode are joined by measures of spread such 
  '9a6kx1e4yh': R`Moyenne, médiane et mode sont complétées par des indicateurs de dispersion comme l’étendue et les quartiles.`,
  // A probability is a fraction: favourable outcomes out of all 
  '17gd79svwx2': R`Une probabilité est une fraction : les issues favorables sur toutes les issues équiprobables.`,
  // Profit, loss, discount, tax and interest are all percentages
  '6oqshsyd21': R`Bénéfice, perte, remise, taxe et intérêts sont tous des pourcentages d’un montant.`,
  // The $n$th term of a pattern is an algebraic expression in $n
  's18kq836ov': R`Le terme de rang $n$ d’une suite de motifs est une expression littérale en $n$.`,
  // Similar shapes have all pairs of corresponding sides in the 
  '1673zqtap3t': R`Des figures semblables ont toutes leurs paires de côtés homologues dans le même rapport.`,
  // Transformations and similarity keep angles the same, so angl
  'nhm1k0jf87': R`Les transformations et la similitude conservent les angles, donc les propriétés des angles permettent de reconnaître des figures semblables.`,
  // Factorising and completing the square are skills of rearrang
  '2awcjz6ag0h': R`Factoriser et compléter le carré sont des savoir-faire de transformation d’expressions littérales.`,
  // Once a quadratic is factorised, each factor set to zero is a
  'axjxa88p8j': R`Une fois l’équation du second degré factorisée, chaque facteur égal à zéro donne une équation du premier degré.`,
  // The roots of a quadratic equation are where its parabola cro
  '3ai29ta3bd': R`Les racines d’une équation du second degré sont les abscisses des points où la parabole coupe l’axe des $x$.`,
  // Graphs, intercepts and the coordinate plane carry over from 
  '2fe079f86oc': R`Graphiques, points d’intersection et repère passent des droites aux paraboles.`,
  // A linear function is the first example of a rule that gives 
  '1dyq2iw6ttf': R`Une fonction affine est le premier exemple de règle qui associe à chaque antécédent exactement une image.`,
  // A logarithm is an exponent, so the laws of exponents become 
  'bhyxgzt11y': R`Un logarithme est un exposant, donc les règles des puissances deviennent les règles des logarithmes.`,
  // The logarithm $\log_a x$ is the inverse function of the expo
  'dhaomm7cmc': R`Le logarithme $\log_a x$ est la fonction réciproque de l’exponentielle $a^x$.`,
  // Arithmetic and geometric sequences make number patterns prec
  '1i0ckjdy4m3': R`Les suites arithmétiques et géométriques formalisent les motifs numériques et donnent des formules pour leurs sommes.`,
  // Trigonometric ratios compare the sides of a right-angled tri
  '2dkcig1f7s5': R`Les rapports trigonométriques comparent les côtés d’un triangle rectangle, et sur le cercle trigonométrique $\sin^2\theta + \cos^2\theta = 1$ est le théorème de Pythagore.`,
  // A trigonometric ratio depends only on the angle because righ
  '28o7ie6opej': R`Un rapport trigonométrique ne dépend que de l’angle, car deux triangles rectangles ayant les mêmes angles sont semblables.`,
  // Identities are built from the definitions of sine, cosine an
  '11vomgqg97n': R`Les identités découlent des définitions du sinus, du cosinus et de la tangente sur le cercle trigonométrique.`,
  // Many trigonometric equations turn into a quadratic in $\sin 
  '1aaktv1yqz7': R`Beaucoup d’équations trigonométriques deviennent une équation du second degré en $\sin x$ ou $\cos x$.`,
  // The sine rule and cosine rule extend the trigonometric ratio
  '13me5uymk2c': R`La loi des sinus et la loi des cosinus étendent les rapports trigonométriques aux triangles non rectangles.`,
  // A quadratic is a polynomial of degree 2; polynomial division
  'da1pvgcuq2': R`Un trinôme du second degré est un polynôme de degré 2 ; la division polynomiale et le théorème du reste généralisent sa factorisation.`,
  // A system of linear equations can be written as one matrix eq
  'e0bc8izwug': R`Un système d’équations linéaires s’écrit comme une seule équation matricielle $AX = B$, résolue avec la matrice inverse.`,
  // The magnitude of a vector is found with Pythagoras' theorem.
  '12j5n3poamr': R`La norme d’un vecteur se calcule avec le théorème de Pythagore.`,
  // The angle between two vectors, and splitting a vector into c
  '1rc52s5n9t0': R`L’angle entre deux vecteurs et la décomposition d’un vecteur en composantes utilisent la trigonométrie.`,
  // A limit describes the value a function's output approaches a
  '15k09f0soai': R`Une limite décrit la valeur dont s’approche l’image d’une fonction quand la variable s’approche d’un point.`,
  // The derivative is defined as a limit: the gradient between t
  '2cxg9hybda1': R`Le nombre dérivé est défini comme une limite : la pente entre deux points qui se rapprochent.`,
  // A derivative is the gradient of the tangent line, extending 
  '201djzmlsb3': R`La dérivée est la pente de la tangente, ce qui prolonge la pente d’une droite aux courbes.`,
  // Integration reverses differentiation; this is the Fundamenta
  'ruft2tqdak': R`L’intégration défait la dérivation : c’est le théorème fondamental de l’analyse.`,
  // A definite integral measures the area under a curve by addin
  'sp8kuu3a74': R`Une intégrale définie mesure l’aire sous une courbe en additionnant de fins rectangles.`,
  // Counting rests on the multiplication principle: the numbers 
  '1i0nrfbe5bb': R`Le dénombrement repose sur le principe multiplicatif : les nombres de choix à chaque étape se multiplient.`,
  // Rules for combined, independent and conditional events build
  '2f23y9h56n3': R`Les règles des événements composés, indépendants et conditionnels reposent sur la probabilité vue comme une fraction d’issues.`,
  // Permutations and combinations count the outcomes when there 
  'c88bt9u9sf': R`Les permutations et combinaisons comptent les issues quand elles sont trop nombreuses pour être listées.`,
  // Variance, standard deviation and distributions go further th
  'cnqeudl3aq': R`La variance, l’écart type et les lois de probabilité vont plus loin que l’étendue et les quartiles.`,
  // Distance, midpoint and gradient in the coordinate plane lead
  '64oncg04w1': R`Distance, milieu et pente dans un repère mènent aux équations de droites et de cercles.`,
  // The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is 
  '1n2jj8p5uea': R`L’équation d’un cercle, $(x - a)^2 + (y - b)^2 = r^2$, est le théorème de Pythagore appliqué à la distance au centre.`,
  // Constraints are linear inequalities, and together their grap
  'rsywiledqf': R`Les contraintes sont des inéquations linéaires, et leurs graphiques délimitent ensemble le domaine admissible.`,
  // The boundaries of the feasible region and the level lines of
  '1hwyr5azmza': R`Les bords du domaine admissible et les droites de niveau de la fonction objectif sont des droites.`,
  // “And”, “or” and “not” in logic match intersection, union and
  '1v8ndsdqg9i': R`« Et », « ou » et « non » en logique correspondent à l’intersection, la réunion et le complémentaire d’ensembles.`,
  // The chain, product and quotient rules and implicit different
  '2fbt3zsv0xe': R`Les règles de dérivation en chaîne, du produit et du quotient et la dérivation implicite prolongent les règles de base.`,
  // Differentiating $e^x$ and $\ln x$, and logarithmic different
  '1oh2ya4wsji': R`Dériver $e^x$ et $\ln x$, ainsi que la dérivation logarithmique, s’appuient sur les règles des puissances et des logarithmes.`,
  // Optimisation, related rates and curve sketching apply the ru
  '284ysrnl7bq': R`L’optimisation, les taux liés et l’étude de courbes appliquent les règles de dérivation à des problèmes concrets.`,
  // Substitution and integration by parts extend the basic antid
  '2gi28jy2yt1': R`Le changement de variable et l’intégration par parties prolongent les primitives de base.`,
  // Substitution reverses the chain rule, and integration by par
  '7zalhvgsd9': R`Le changement de variable défait la dérivation en chaîne, et l’intégration par parties défait la règle du produit.`,
  // Areas, volumes of revolution and arc lengths all lead to int
  'lf24voao9c': R`Aires, volumes de révolution et longueurs d’arc mènent tous à des intégrales qu’il faut ensuite calculer.`,
  // Infinite series continue the sums of arithmetic and geometri
  '1hviqnspnff': R`Les séries prolongent sans fin les sommes des suites arithmétiques et géométriques.`,
  // A series converges when the limit of its partial sums exists
  '15f8uacuddq': R`Une série converge lorsque la limite de ses sommes partielles existe.`,
  // A partial derivative differentiates with respect to one vari
  '2g4278341z3': R`Une dérivée partielle dérive par rapport à une variable en traitant les autres comme des constantes.`,
  // The gradient and directional derivatives are vectors.
  '19utg29r90g': R`Le gradient et les dérivées directionnelles sont des vecteurs.`,
  // A differential equation is an equation linking a function to
  '2ds3dtqg3pn': R`Une équation différentielle relie une fonction à ses dérivées.`,
  // Solving a differential equation usually ends with an integra
  'saspoe9ooe': R`Résoudre une équation différentielle se termine en général par une intégration.`,
  // Linear algebra studies matrices as maps, with determinants, 
  'ot9xqwxvdo': R`L’algèbre linéaire étudie les matrices comme des applications, avec déterminants, inverses, rang et valeurs propres.`,
  // Vector spaces generalise the vectors of geometry to any numb
  '1cobeg25pvp': R`Les espaces vectoriels généralisent les vecteurs de la géométrie à un nombre quelconque de dimensions.`,
  // Complex numbers first appear as the roots of a quadratic wit
  'tls844q11g': R`Les nombres complexes apparaissent d’abord comme racines d’une équation du second degré à discriminant négatif.`,
  // The polar form describes a complex number by its modulus and
  '1z3ue7jl9zc': R`La forme trigonométrique décrit un nombre complexe par son module et un argument, à l’aide du sinus et du cosinus.`,
  // The binomial, Poisson and normal distributions are built on 
  '19602jed52d': R`Les lois binomiale, de Poisson et normale reposent sur les règles des probabilités et du dénombrement.`,
  // For a continuous distribution, a probability is an area unde
  '1mhdhr61iex': R`Pour une loi continue, une probabilité est une aire sous la courbe de densité.`,
  // Inference starts from a sample summarised by its mean and st
  '1lgg9vh00wv': R`L’inférence part d’un échantillon résumé par sa moyenne et son écart type.`,
  // Confidence intervals and hypothesis tests rely on the normal
  '1s8qoieebkn': R`Les intervalles de confiance et les tests d’hypothèse s’appuient sur les lois normale et de Student ($t$).`,
  // Proofs, sets and relations in discrete mathematics are writt
  'pq7m9yqcpf': R`Les démonstrations, ensembles et relations des mathématiques discrètes s’écrivent dans le langage de la logique.`,
  // Counting principles are a central part of discrete mathemati
  'ao11coj5na': R`Les principes de dénombrement sont au cœur des mathématiques discrètes.`,
  // Newton's method uses the derivative to home in on a root.
  '175iqzjsa7u': R`La méthode de Newton utilise la dérivée pour se rapprocher d’une racine.`,
  // The trapezoidal rule and Simpson's rule approximate definite
  '2cephu1nsk4': R`La méthode des trapèzes et celle de Simpson approchent des intégrales définies.`,
  // Gradient, divergence and curl are built from partial derivat
  '23gedxxnvwc': R`Gradient, divergence et rotationnel sont construits à partir des dérivées partielles, et les intégrales curvilignes et de surface prolongent les intégrales multiples.`,
  // The Laplace transform turns a differential equation into an 
  '19mvnrfi5rk': R`La transformée de Laplace change une équation différentielle en équation algébrique.`,
  // The Laplace transform is an improper integral, often worked 
  'da64d9071l': R`La transformée de Laplace est une intégrale impropre, souvent calculée par intégration par parties.`,
});

/* fr — lessons with figures */
addT('fr', {
  'whhnraxlat': R`
<p>Notre système de numération utilise dix chiffres, de 0 à 9. Le <b>rang</b> d’un chiffre indique sa <b>valeur</b> : chaque rang vaut dix fois le rang situé à sa droite.</p>
⟦0⟧
<p>Dans <b>5 382 417</b>, le chiffre 8 est au rang des dizaines de mille, il vaut donc $8 \times 10\,000 = 80\,000$. Le chiffre 3 vaut $300\,000$.</p>
<h3>Écriture décomposée</h3>
<p>Écrire un nombre comme la somme des valeurs de ses chiffres montre ce que vaut chacun d’eux :</p>
⟦1⟧
⟦2⟧
<p>Le 0 au rang des dizaines <b>tient la place</b>. Sans lui, 4 307 deviendrait 437.</p>
<h3>Comparer des nombres</h3>
<p>Un nombre entier qui a plus de chiffres est plus grand. Si deux nombres ont autant de chiffres, on les compare chiffre par chiffre en partant de la gauche ; le premier rang où ils diffèrent décide. Ainsi $52\,814 \gt 52\,781$ car au rang des centaines $8 \gt 7$.</p>
<h3>Arrondir</h3>
⟦3⟧
⟦4⟧
⟦5⟧
⟦6⟧`,
  '963azreidi': R`
<p>L’addition réunit des quantités ; la soustraction calcule ce qui reste ou l’<b>écart</b> entre deux quantités. Pour les grands nombres, on pose l’opération <b>en colonnes</b> : on aligne les chiffres selon leur rang et on commence par la colonne des unités, vers la gauche.</p>
<h3>Addition avec retenue</h3>
<p>Quand une colonne fait 10 ou plus, on écrit le chiffre des unités et on <b>reporte une retenue</b> dans la colonne suivante.</p>
⟦0⟧
⟦1⟧
<h3>Soustraction avec retenue</h3>
<p>Si le chiffre du haut est plus petit que celui du bas, on <b>emprunte</b> une dizaine à la colonne suivante : cela ajoute 10 à la colonne en cours.</p>
⟦2⟧
⟦3⟧
⟦4⟧
<h3>Problèmes</h3>
<p>Des mots comme <i>en tout, au total, de plus, augmenté</i> indiquent souvent une addition. Des mots comme <i>reste, il reste, écart, combien de plus, de moins</i> indiquent souvent une soustraction. Demandez-vous toujours ce que la question cherche vraiment.</p>
⟦5⟧
⟦6⟧`,
  '1nuty7g7e3m': R`
<p>La <b>multiplication</b> est une addition répétée de groupes égaux : $4 \times 6$ signifie 4 groupes de 6, soit $6 + 6 + 6 + 6 = 24$. La <b>division</b> partage une quantité en groupes égaux : $24 \div 6 = 4$.</p>
⟦0⟧
⟦1⟧
<h3>Multiplier de grands nombres</h3>
<p>On décompose l’un des nombres selon ses rangs, on multiplie chaque partie et on additionne (c’est la distributivité) :</p>
⟦2⟧
⟦3⟧
<h3>Division et reste</h3>
<p>Quand la division ne tombe pas juste, ce qu’il reste s’appelle le <b>reste</b>. Il est toujours plus petit que le diviseur.</p>
⟦4⟧
⟦5⟧
⟦6⟧
⟦7⟧`,
  '2il80u5f0p': R`
<p>Quand un calcul comporte plusieurs opérations, tout le monde doit les effectuer dans le même ordre, sinon une même expression donnerait des résultats différents. Cet ordre s’appelle les <b>priorités opératoires</b> ; en anglais, on le retient avec le mot <b>PEMDAS</b>.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧
⟦5⟧`,
  'qawwgtxxnt': R`
<p>Un <b>diviseur</b> d’un nombre le divise exactement. Un <b>multiple</b> d’un nombre est ce nombre multiplié par un nombre entier.</p>
<ul><li>Diviseurs de 12 : 1, 2, 3, 4, 6, 12 (ils vont par paires : $1 \times 12$, $2 \times 6$, $3 \times 4$).</li><li>Multiples de 12 : 12, 24, 36, 48, …</li></ul>
⟦0⟧
<h3>Nombres premiers et composés</h3>
<p>Un nombre <b>premier</b> a exactement deux diviseurs : 1 et lui-même (2, 3, 5, 7, 11, 13, …). Un nombre <b>composé</b> a plus de deux diviseurs. Le nombre 1 n’est ni premier ni composé, et 2 est le seul nombre premier pair.</p>
⟦1⟧
<h3>Décomposition en facteurs premiers</h3>
<p>Tout nombre entier supérieur à 1 s’écrit d’une seule façon comme produit de nombres premiers. Utilisez un arbre : décomposez jusqu’à ce que chaque branche se termine par un nombre premier.</p>
⟦2⟧
⟦3⟧
<h3>PGCD et PPCM</h3>
⟦4⟧
⟦5⟧
⟦6⟧
⟦7⟧`,
  '1izrzgyjhj9': R`
<p>Une <b>fraction</b> $\frac{a}{b}$ désigne $a$ parts sur $b$ parts égales. Le nombre du haut est le <b>numérateur</b> ; celui du bas est le <b>dénominateur</b>.</p>
⟦0⟧
<h3>Fractions égales et fraction irréductible</h3>
<p>Multiplier ou diviser le numérateur et le dénominateur par un même nombre donne une fraction égale : $\frac{2}{3} = \frac{4}{6} = \frac{10}{15}$. Pour <b>simplifier</b>, on divise les deux par leur PGCD :</p>
⟦1⟧
⟦2⟧
<h3>Nombres mixtes</h3>
<p>$2\frac{1}{3}$ signifie $2 + \frac{1}{3}$. Sous forme de fraction : $2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$.</p>
⟦3⟧
<h3>Addition et soustraction</h3>
⟦4⟧
⟦5⟧
⟦6⟧
<h3>Multiplication et division</h3>
⟦7⟧
<p>Pour diviser, on <b>garde</b> la première fraction, on <b>change</b> ÷ en × et on <b>inverse</b> la seconde fraction.</p>
⟦8⟧
<h3>Fraction d’une quantité</h3>
<p>On divise par le dénominateur, puis on multiplie par le numérateur : $\frac{3}{8}$ de $40 = (40 \div 8) \times 3 = 15$.</p>
⟦9⟧
⟦10⟧`,
  '10kgjsjaxgz': R`
<p>Les nombres décimaux prolongent la numération à droite des unités. Chaque rang vaut un dixième du rang situé à sa gauche.</p>
⟦0⟧
<p>Ainsi $47{,}305 = 40 + 7 + \frac{3}{10} + \frac{0}{100} + \frac{5}{1000}$.</p>
⟦1⟧
<h3>Comparer des décimaux</h3>
<p>Donnez aux nombres le même nombre de chiffres après la virgule en ajoutant des zéros, puis comparez : $0{,}5 = 0{,}50 \gt 0{,}45$. Un décimal plus long n’est pas forcément plus grand !</p>
⟦2⟧
<h3>Addition et soustraction</h3>
⟦3⟧
⟦4⟧
<h3>Multiplication</h3>
<p>On multiplie comme s’il n’y avait pas de virgule, puis on compte le nombre total de chiffres après la virgule dans les facteurs : le résultat en a autant.</p>
⟦5⟧
<h3>Division et conversions</h3>
<p>Multiplier par 10, 100 ou 1000 décale les chiffres de 1, 2 ou 3 rangs vers la gauche (le nombre grandit) ; diviser les décale vers la droite. Une fraction devient un décimal en divisant le numérateur par le dénominateur : $\frac{3}{8} = 3 \div 8 = 0{,}375$.</p>
<h3>Arrondir des décimaux</h3>
<p>Même règle que pour les entiers : on regarde le chiffre suivant. $6{,}847$ arrondi au dixième près donne $6{,}8$ ; au centième près, $6{,}85$.</p>
⟦6⟧`,
  '1rw72cdcsy1': R`
<p><b>Pour cent</b> signifie « sur 100 » : $35\% = \frac{35}{100} = 0{,}35$.</p>
⟦0⟧
⟦1⟧
<h3>Les trois questions de base</h3>
⟦2⟧
⟦3⟧
<h3>Hausses, baisses et réductions</h3>
<p>Une réduction de $20\%$ sur 80 euros fait économiser $0{,}2 \times 80 = 16$ euros ; le prix soldé est donc $80 - 16 = 64$ euros. Plus rapide : on paie $80\%$ du prix, soit $0{,}8 \times 80 = 64$.</p>
⟦4⟧
<p>Une hausse de $p\%$ revient à multiplier par $1 + \frac{p}{100}$ ; une baisse, à multiplier par $1 - \frac{p}{100}$.</p>
⟦5⟧`,
  'qwxct8meof': R`
<p>Le système métrique repose sur les puissances de dix, avec des préfixes qui indiquent la taille d’une unité.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧
<h3>Les durées</h3>
<p>Le temps n’est <i>pas</i> décimal : une heure compte 60 minutes, pas 100. Pour calculer une durée, avancez par étapes : de 09:35 à 13:10, il y a 25 min (jusqu’à 10:00) + 3 h (jusqu’à 13:00) + 10 min = 3 h 35 min = 215 minutes.</p>
⟦5⟧
⟦6⟧`,
  '1duo6cowvco': R`
<p>Le <b>périmètre</b> est la longueur totale du contour d’une figure (en cm, m, …). L’<b>aire</b> est la mesure de la surface qu’elle occupe (en unités carrées : cm², m², …).</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Figures composées</h3>
<p>Découpez une figure en L ou une autre figure composée en rectangles et en triangles, puis additionnez les aires — ou partez d’un grand rectangle et soustrayez le morceau manquant.</p>
⟦4⟧
⟦5⟧
⟦6⟧`,
  '2bjnshv99mz': R`
<p>Le <b>volume</b> est l’espace occupé par un solide ; il se compte en <b>unités cubes</b> (cm³, m³). Un cube de 1 cm d’arête a un volume de 1 cm³.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Aire totale</h3>
<p>L’aire totale est la somme des aires de toutes les faces. Un pavé droit a trois paires de rectangles identiques :</p>
⟦4⟧
⟦5⟧
⟦6⟧`,
  'hdpir6essq': R`
<p>Les angles mesurent une rotation, en <b>degrés</b> (°). Un tour complet vaut $360^\circ$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Triangles</h3>
<p><b>Équilatéral</b> : trois côtés égaux, chaque angle vaut $60^\circ$. <b>Isocèle</b> : deux côtés égaux et deux angles à la base égaux. <b>Quelconque</b> : aucun côté égal. Un triangle <b>rectangle</b> a un angle de $90^\circ$.</p>
<h3>Polygones</h3>
<p>Un polygone à $n$ côtés se découpe en $n - 2$ triangles à partir d’un sommet, donc</p>
⟦3⟧
⟦4⟧
<p>Dans un polygone <b>régulier</b>, tous les angles sont égaux ; chacun vaut donc $\frac{(n-2) \times 180^\circ}{n}$. Un hexagone régulier a des angles de $\frac{4 \times 180^\circ}{6} = 120^\circ$.</p>
⟦5⟧`,
  '1t5wicpcspm': R`
<p>Les données sont des informations que l’on recueille, comme des notes ou des fruits préférés. Un <b>tableau d’effectifs</b> indique combien de fois apparaît chaque valeur ; les <b>diagrammes en barres</b> et les <b>pictogrammes</b> montrent la même information sous forme visuelle.</p>
⟦0⟧
<h3>Quatre indicateurs</h3>
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧
⟦5⟧`,
  '2c85eiflpnj': R`
<p>Les <b>entiers relatifs</b> sont les nombres entiers et leurs opposés : $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$ Sur une droite graduée, les nombres augmentent vers la droite, donc $-7 \lt -2$ même si 7 est plus grand que 2.</p>
⟦0⟧
<p>La <b>valeur absolue</b> $|a|$ est la distance à 0 : $|-6| = 6$ et $|6| = 6$.</p>
<h3>Addition et soustraction</h3>
⟦1⟧
⟦2⟧
<h3>Multiplication et division</h3>
⟦3⟧
⟦4⟧
<p>Dans la vie courante : températures négatives, altitudes sous le niveau de la mer, dettes, étages en sous-sol.</p>
⟦5⟧`,
  'tte1va9nbg': R`
<p>Une <b>puissance</b> note une multiplication répétée : $a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ facteurs}}$. Dans $2^5 = 32$, 2 est la <b>base</b> et 5 est l’<b>exposant</b>.</p>
⟦0⟧
<h3>Règles de calcul sur les puissances</h3>
⟦1⟧
⟦2⟧
<h3>Racines</h3>
<p>La racine carrée annule le carré : $\sqrt{81} = 9$ car $9^2 = 81$. La racine cubique annule le cube : $\sqrt[3]{64} = 4$ car $4^3 = 64$.</p>
⟦3⟧
⟦4⟧`,
  'akeowmn81l': R`
<p>Les scientifiques écrivent les nombres très grands ou très petits de façon compacte sous la forme</p>
⟦0⟧
<ul><li>La distance Terre–Soleil, environ $150\,000\,000$ km, vaut $1{,}5 \times 10^{8}$ km.</li><li>Un globule rouge, large d’environ $0{,}000\,008$ m, mesure $8 \times 10^{-6}$ m.</li></ul>
⟦1⟧
⟦2⟧
<h3>Calculer</h3>
<p>On multiplie (ou divise) les nombres de devant et on additionne (ou soustrait) les exposants. Puis on corrige le nombre de devant s’il n’est pas compris entre 1 et 10 :</p>
⟦3⟧
⟦4⟧
⟦5⟧`,
  'z6teiu3uc7': R`
<p>Un <b>ratio</b> $a : b$ compare deux quantités. Comme les fractions, un ratio se simplifie en divisant ses deux termes par leur PGCD : $18 : 24 = 3 : 4$.</p>
<h3>Partage proportionnel</h3>
⟦0⟧
⟦1⟧
<h3>Taux et valeur unitaire</h3>
<p>Un <b>taux</b> compare des quantités d’unités différentes : km par heure, euros par kg. Trouver la valeur d’<b>une</b> unité (la valeur unitaire) résout la plupart des problèmes.</p>
⟦2⟧
<h3>Proportionnalité directe et inverse</h3>
⟦3⟧
⟦4⟧
⟦5⟧
<h3>Échelles</h3>
<p>Une échelle de $1 : 50\,000$ signifie que 1 cm sur la carte représente $50\,000$ cm $= 500$ m $= 0{,}5$ km en réalité.</p>
⟦6⟧`,
  '1aox7mamv38': R`
<p>Dans l’expression $5x^2 - 3xy + 7$, les <b>termes</b> sont $5x^2$, $-3xy$ et $7$ ; les <b>coefficients</b> sont 5 et $-3$ ; 7 est le <b>terme constant</b>. Des <b>termes semblables</b> ont exactement les mêmes lettres avec les mêmes exposants ($4ab$ et $-ab$ sont semblables ; $x^2$ et $x$ ne le sont pas).</p>
<h3>Réduire</h3>
<p>On regroupe les termes semblables en additionnant leurs coefficients : $6a + 2b - 4a + 5b = 2a + 7b$.</p>
<h3>Développer</h3>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Identités remarquables</h3>
⟦3⟧
⟦4⟧
<h3>Factoriser</h3>
<p>Factoriser, c’est développer à l’envers. On met en facteur le plus grand facteur commun : $12x - 18 = 6(2x - 3)$.</p>
<h3>Substituer</h3>
<p>On remplace chaque lettre par sa valeur, avec des parenthèses pour les nombres négatifs : si $x = -2$, alors $3x^2 - x = 3(-2)^2 - (-2) = 12 + 2 = 14$.</p>
⟦5⟧`,
  '2ez6y5q5jl': R`
<p>Une équation affirme que deux expressions sont égales. Pensez à une balance : ce que l’on fait d’un côté, on le fait de l’autre, et l’équilibre est conservé. Le but est d’isoler l’inconnue.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Parenthèses et fractions</h3>
<p>Développez d’abord (ou divisez les deux membres par le nombre devant la parenthèse). Supprimez les fractions en multipliant chaque terme par le dénominateur commun :</p>
⟦3⟧
<h3>Problèmes</h3>
<ol><li>Choisissez une lettre pour l’inconnue et dites ce qu’elle représente.</li><li>Traduisez l’énoncé en équation.</li><li>Résolvez, puis vérifiez que la réponse a du sens dans le problème.</li></ol>
⟦4⟧
⟦5⟧`,
  '1em42pkc1jv': R`
<p>Une <b>inéquation</b> compare deux expressions : $\lt$ (strictement inférieur), $\gt$ (strictement supérieur), $\le$ (inférieur ou égal), $\ge$ (supérieur ou égal). Ses solutions forment en général tout un intervalle de nombres.</p>
<p>Sur une droite graduée, $x \gt 2$ se représente par un point <b>ouvert</b> en 2 (2 n’est pas inclus) et une flèche vers la droite ; $x \le 2$ par un point <b>plein</b> et une flèche vers la gauche.</p>
⟦0⟧
<h3>Résoudre</h3>
<p>On résout comme une équation — ajouter, soustraire, multiplier ou diviser les deux membres — avec une règle supplémentaire :</p>
⟦1⟧
<p>Pourquoi ? $2 \lt 5$, mais en multipliant par $-1$ on obtient $-2$ et $-5$, et $-2 \gt -5$.</p>
⟦2⟧
<h3>Doubles inégalités</h3>
<p>On applique la même opération aux trois parties : $-1 \lt 2x + 3 \le 9 \Rightarrow -4 \lt 2x \le 6 \Rightarrow -2 \lt x \le 3$. Les solutions entières sont $-1 ; 0 ; 1 ; 2 ; 3$.</p>
⟦3⟧
⟦4⟧`,
  '2facwts035v': R`
<p>Un <b>ensemble</b> est une collection bien définie d’objets, ses <b>éléments</b>. On écrit $A = \{2 ; 4 ; 6 ; 8\}$ et $4 \in A$ (« 4 appartient à A »), $5 \notin A$. $n(A)$ est le nombre d’éléments ; ici $n(A) = 4$. L’<b>ensemble vide</b> $\varnothing$ n’a aucun élément ; l’<b>ensemble universel</b> $U$ contient tout ce dont on parle.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧
⟦5⟧`,
  'qkk3uk216j': R`
<p>Une <b>fonction affine</b> a pour représentation graphique une droite. Sous la <b>forme réduite</b></p>
⟦0⟧
<p>$m$ est le <b>coefficient directeur</b> (la pente) : de combien $y$ varie quand $x$ augmente de 1. $c$ est l’<b>ordonnée à l’origine</b>, là où la droite coupe l’axe des $y$. En notation fonctionnelle on écrit $f(x) = mx + c$ ; $f(3)$ désigne « la valeur pour $x = 3$ ».</p>
<h3>Coefficient directeur à partir de deux points</h3>
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Intersections avec les axes et autres formes</h3>
<p>Posez $x = 0$ pour trouver l’ordonnée à l’origine et $y = 0$ pour l’intersection avec l’axe des $x$. Une droite peut s’écrire $ax + by = c$ ; on la réécrit $y = -\frac{a}{b}x + \frac{c}{b}$ pour lire le coefficient directeur. Par un point $(x_1 ; y_1)$ avec le coefficient directeur $m$ : $y - y_1 = m(x - x_1)$.</p>
⟦4⟧
⟦5⟧
⟦6⟧`,
  'k20oq9cujh': R`
<p>Un <b>système</b> de deux équations du premier degré en $x$ et $y$ demande les valeurs qui rendent vraies <i>les deux</i> équations. Graphiquement, la solution est le point d’intersection des deux droites.</p>
⟦0⟧
<h3>Substitution</h3>
⟦1⟧
<h3>Combinaison</h3>
⟦2⟧
⟦3⟧
<h3>Cas particuliers</h3>
⟦4⟧
<p>Des droites parallèles (même coefficient directeur, ordonnées à l’origine différentes) ne se coupent jamais : <b>pas de solution</b>. Des droites confondues donnent une <b>infinité</b> de solutions.</p>
<h3>Problèmes</h3>
<p>Deux inconnues demandent deux informations. « Une ferme compte 30 têtes et 84 pattes, entre poules et vaches », avec $c$ vaches et $h$ poules : $c + h = 30$ et $4c + 2h = 84$.</p>
⟦5⟧`,
  '1bdrzsceuor': R`
<p>Dans un triangle rectangle, le plus long côté, opposé à l’angle droit, est l’<b>hypoténuse</b> $c$. Les deux autres sont les <b>côtés de l’angle droit</b> $a$ et $b$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Triplets pythagoriciens</h3>
<p>Il est utile de retenir les solutions entières et leurs multiples : $(3 ; 4 ; 5)$, $(5 ; 12 ; 13)$, $(8 ; 15 ; 17)$, $(7 ; 24 ; 25)$, ainsi que $(6 ; 8 ; 10)$, $(9 ; 12 ; 15)$, …</p>
<h3>Distance entre deux points</h3>
⟦4⟧
⟦5⟧
<h3>La réciproque</h3>
<p>Avec $c$ le plus grand côté : si $a^2 + b^2 = c^2$, le triangle est <b>rectangle</b> ; si $a^2 + b^2 \gt c^2$, il est <b>acutangle</b> ; si $a^2 + b^2 \lt c^2$, il est <b>obtusangle</b>.</p>
⟦6⟧`,
  'focn6p44n1': R`
⟦0⟧
<p>Le rapport entre le périmètre d’un cercle et son diamètre est toujours le même nombre, $\pi \approx 3{,}14159\ldots$ (souvent arrondi à $3{,}14$ ou $\frac{22}{7}$).</p>
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Arcs et secteurs</h3>
<p>Un secteur d’angle au centre $\theta$ représente la fraction $\frac{\theta}{360^\circ}$ du disque entier :</p>
⟦4⟧
⟦5⟧
<h3>Angles dans un cercle</h3>
⟦6⟧
<ul><li>L’angle au centre est le <b>double</b> de l’angle inscrit qui intercepte le même arc.</li><li>Un angle inscrit dans un demi-cercle mesure $90^\circ$.</li><li>La tangente est perpendiculaire au rayon au point de contact.</li></ul>
⟦7⟧`,
  'g6b5ghp740': R`
<p>Un <b>prisme</b> a la même section sur toute sa longueur : son volume est simplement l’aire de cette section multipliée par sa longueur. Une pyramide ou un cône qui s’y inscrit a exactement le tiers de ce volume.</p>
⟦0⟧
⟦1⟧
<p>Pour un cône, $s$ est la <b>génératrice</b> ; d’après Pythagore, $s = \sqrt{r^2 + h^2}$.</p>
⟦2⟧
⟦3⟧
⟦4⟧
⟦5⟧`,
  'f13hxf9kw3': R`
<p>Un <b>indicateur de position</b> résume une série de données par une valeur typique ; un <b>indicateur de dispersion</b> dit à quel point les valeurs sont étalées.</p>
⟦0⟧
⟦1⟧
<h3>Moyenne à partir d’un tableau d’effectifs</h3>
⟦2⟧
⟦3⟧
⟦4⟧
<h3>Raisonner à l’envers</h3>
⟦5⟧
<p>Avec un nombre pair de valeurs, la médiane est la moyenne des deux valeurs centrales.</p>
⟦6⟧`,
  '190fxed0s6m': R`
<p>Une <b>expérience aléatoire</b> (lancer un dé, tirer une carte) a des <b>issues</b> possibles. L’ensemble de toutes les issues est l’<b>univers</b> $S$ ; un <b>événement</b> $E$ est un ensemble d’issues. Quand toutes les issues sont équiprobables :</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Deux dés</h3>
<p>Lancer deux dés donne $6 \times 6 = 36$ issues équiprobables. Une somme de 7 s’obtient de 6 façons — (1 ; 6), (2 ; 5), (3 ; 4), (4 ; 3), (5 ; 2), (6 ; 1) — donc $P(\text{somme} = 7) = \frac{6}{36} = \frac{1}{6}$. En général, le nombre de façons d’obtenir une somme $s$ est $6 - |s - 7|$.</p>
⟦4⟧
<h3>Un jeu de cartes</h3>
<p>52 cartes : 4 couleurs (♠ ♣ noires, ♥ ♦ rouges) de 13 valeurs (A, 2–10, V, D, R). Il y a 12 figures (V, D, R).</p>
⟦5⟧`,
  '151qbeg6ykm': R`
<p>Les questions d’argent de la vie courante sont souvent des questions de pourcentages déguisées.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Remise et taxe</h3>
<p>Appliquez les pourcentages l’un après l’autre : une remise de 20 % puis une taxe de 10 % sur 150 euros donnent $150 \times 0{,}8 \times 1{,}1 = 132$ euros.</p>
<h3>Intérêts simples</h3>
⟦3⟧
<p>1 500 euros placés à 6 % par an pendant 3 ans rapportent $1\,500 \times 0{,}06 \times 3 = 270$ euros ; le total atteint 1 770 euros. Pour une durée en mois, prenez $t = \frac{\text{mois}}{12}$.</p>
⟦4⟧
<h3>Poids brut, tare et poids net</h3>
<p><b>Brut</b> = poids total ; <b>tare</b> = poids de l’emballage ; <b>net</b> = brut − tare. Un sac de 50 kg avec une tare de 2 % a un poids net de $50 \times 0{,}98 = 49$ kg.</p>
⟦5⟧`,
  '2goqscgnmgq': R`
<p>Une <b>suite</b> est une liste ordonnée de nombres appelés <b>termes</b>. Trouver la règle permet de prolonger la suite ou d’aller directement à n’importe quel terme.</p>
<h3>Suites arithmétiques</h3>
<p>On ajoute chaque fois le même nombre $d$ (la <b>raison</b>) : 5 ; 8 ; 11 ; 14 ; … a pour raison $d = 3$.</p>
⟦0⟧
⟦1⟧
<h3>Suites géométriques</h3>
<p>Chaque terme est multiplié par la même <b>raison</b> $r$ : 3 ; 6 ; 12 ; 24 ; … ($r = 2$) ; 80 ; 40 ; 20 ; … ($r = \frac{1}{2}$).</p>
⟦2⟧
<h3>Suites particulières</h3>
⟦3⟧
⟦4⟧
⟦5⟧`,
  'dep80mf33u': R`
<p>Une <b>transformation</b> déplace une figure ou change sa taille. Par une translation, une symétrie ou une rotation, l’image est <b>superposable</b> (même forme, même taille) ; par une homothétie, elle est <b>semblable</b> (même forme, taille différente).</p>
⟦0⟧
⟦1⟧
<h3>Figures semblables</h3>
⟦2⟧
⟦3⟧
⟦4⟧
⟦5⟧
⟦6⟧`,
  '2ayg6rt51qo': R`
<p>Une <b>équation du second degré</b> est de la forme $ax^2 + bx + c = 0$ avec $a \ne 0$. Elle a au plus deux solutions (racines).</p>
<h3>1. Factorisation</h3>
<p>Un produit est nul si et seulement si l’un de ses facteurs est nul. Cherchez deux nombres dont le produit vaut $c$ et la somme vaut $b$ (quand $a = 1$) :</p>
⟦0⟧
⟦1⟧
<h3>2. Forme canonique</h3>
⟦2⟧
<h3>3. La formule du discriminant</h3>
⟦3⟧
⟦4⟧
<h3>Somme et produit des racines (Viète)</h3>
⟦5⟧
<p>Ainsi, une équation de racines $r$ et $s$ est $x^2 - (r + s)x + rs = 0$.</p>
⟦6⟧
⟦7⟧`,
  'r0cxzc7jq8': R`
<p>La courbe de $f(x) = ax^2 + bx + c$ est une <b>parabole</b>. Elle est tournée <b>vers le haut</b> si $a \gt 0$ (une vallée, avec un minimum) et <b>vers le bas</b> si $a \lt 0$ (une colline, avec un maximum).</p>
⟦0⟧
<h3>Forme canonique</h3>
⟦1⟧
⟦2⟧
<p>La mise sous forme canonique transforme la forme développée : $x^2 - 6x + 11 = (x - 3)^2 + 2$, donc le sommet est $(3 ; 2)$ et le minimum vaut 2. L’ensemble des images est $y \ge 2$.</p>
⟦3⟧
⟦4⟧
⟦5⟧`,
  '1mi3l1zkm3t': R`
<p>Une <b>fonction</b> associe à chaque antécédent exactement <b>une</b> image. L’ensemble des valeurs autorisées est l’<b>ensemble de définition</b> ; l’ensemble des images est l’<b>ensemble image</b>.</p>
⟦0⟧
<h3>Ensembles de définition naturels</h3>
<ul><li>Pas de division par zéro : pour $\frac{1}{x - 2}$, il faut $x \ne 2$.</li><li>Pas de racine carrée d’un négatif : pour $\sqrt{x + 3}$, il faut $x \ge -3$.</li><li>Un logarithme exige un argument positif : pour $\log(x - 1)$, il faut $x \gt 1$.</li></ul>
<h3>Composition</h3>
⟦1⟧
⟦2⟧
<h3>Fonctions réciproques</h3>
<p>$f^{-1}$ défait ce que fait $f$ : si $f(a) = b$, alors $f^{-1}(b) = a$. Pour la trouver, écrivez $y = f(x)$, échangez $x$ et $y$, puis exprimez $y$.</p>
⟦3⟧
⟦4⟧
<p>La courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à la droite $y = x$. Seules les fonctions injectives ont une réciproque.</p>
⟦5⟧`,
  '24wdt7r22ed': R`
<p>Les exposants rationnels combinent puissances et racines : $a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$. Ainsi, $8^{\frac{2}{3}} = (\sqrt[3]{8})^2 = 4$ et $16^{-\frac{1}{2}} = \frac{1}{4}$.</p>
<h3>Logarithmes</h3>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Résolution d’équations</h3>
<ul><li>Même base : $2^{x+1} = 32 = 2^5 \Rightarrow x + 1 = 5 \Rightarrow x = 4$.</li><li>Équation logarithmique : $\log_3(2x - 1) = 2 \Rightarrow 2x - 1 = 3^2 = 9 \Rightarrow x = 5$.</li><li>Bases différentes : on prend le logarithme des deux membres, $5^x = 20 \Rightarrow x = \frac{\log 20}{\log 5} \approx 1{,}861$.</li></ul>
<h3>Croissance et décroissance exponentielles</h3>
<p>$A = A_0 \cdot r^{t/T}$ : une quantité multipliée par $r$ toutes les $T$ unités de temps. Intérêts composés : $A = P(1 + i)^n$.</p>
⟦3⟧
⟦4⟧`,
  '3hbd521s2e': R`
⟦0⟧
<p>Ici $a$ est le premier terme et $l$ le dernier.</p>
⟦1⟧
⟦2⟧
<h3>Séries géométriques infinies</h3>
⟦3⟧
<p>Exemple : $8 + 4 + 2 + 1 + \cdots = \frac{8}{1 - \frac{1}{2}} = 16$.</p>
⟦4⟧
<h3>Notation sigma</h3>
<p>$\displaystyle\sum_{k=1}^{n} f(k)$ signifie $f(1) + f(2) + \cdots + f(n)$. À retenir : $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ et $\sum_{k=1}^{n} c = cn$.</p>
⟦5⟧`,
  '1t70i52x3de': R`
<p>Dans un triangle rectangle, pour un angle aigu $\theta$ :</p>
⟦0⟧
⟦1⟧
<p>Moyen mnémotechnique : <b>SOH-CAH-TOA</b> (Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent). De plus, $\tan\theta = \frac{\sin\theta}{\cos\theta}$, et les inverses sont $\csc\theta = \frac{1}{\sin\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, $\cot\theta = \frac{1}{\tan\theta}$.</p>
<h3>Valeurs remarquables</h3>
⟦2⟧
⟦3⟧
<h3>Radians</h3>
<p>$180^\circ = \pi$ radians. Pour passer des degrés aux radians, on multiplie par $\frac{\pi}{180}$ ; des radians aux degrés, par $\frac{180}{\pi}$. Ainsi $60^\circ = \frac{\pi}{3}$ et $\frac{3\pi}{4} = 135^\circ$.</p>
<h3>Le cercle trigonométrique</h3>
⟦4⟧
⟦5⟧
⟦6⟧
⟦7⟧`,
  'mvrwakwbru': R`
<p>Une <b>identité</b> est vraie pour tout angle. Les plus importantes :</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Résoudre des équations trigonométriques</h3>
<p>Trouvez l’angle de référence, puis tous les angles de l’intervalle demandé ayant le bon signe.</p>
⟦4⟧
⟦5⟧
⟦6⟧`,
  '2ei45ji3kzc': R`
<p>Nommez un triangle de sorte que le côté $a$ soit opposé à l’angle $A$, $b$ opposé à $B$ et $c$ opposé à $C$. Ces règles valent pour <b>tout</b> triangle, pas seulement pour les triangles rectangles.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧
⟦5⟧`,
  '61mbb87wjy': R`
<p>Un <b>polynôme</b> est une somme de termes $a_n x^n + \cdots + a_1 x + a_0$ avec des exposants entiers naturels. Son <b>degré</b> est le plus grand exposant ; $a_n$ est le <b>coefficient dominant</b>. Quand on multiplie des polynômes, les degrés s’additionnent et les coefficients dominants se multiplient.</p>
<h3>Division</h3>
<p>Diviser $P(x)$ par $(x - a)$ donne un quotient $Q(x)$ et un reste $R$ : $P(x) = (x - a)Q(x) + R$. La <b>méthode de Horner</b> permet de le faire rapidement avec les seuls coefficients.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Racines d’un polynôme de degré 3</h3>
<p>Pour $ax^3 + bx^2 + cx + d = 0$ de racines $r_1, r_2, r_3$ :</p>
⟦3⟧
⟦4⟧`,
  '1v5flijcft8': R`
<p>Une <b>matrice</b> est un tableau rectangulaire de nombres. Une matrice $m \times n$ a $m$ lignes et $n$ colonnes ; $a_{ij}$ est le coefficient de la ligne $i$, colonne $j$.</p>
<h3>Opérations</h3>
<ul><li><b>Addition/soustraction</b> coefficient par coefficient (même taille uniquement).</li><li><b>Multiplication par un scalaire</b> : on multiplie chaque coefficient.</li><li><b>Produit</b> $AB$ : le coefficient $(i, j)$ est la ligne $i$ de $A$ « fois » la colonne $j$ de $B$. Il faut (colonnes de $A$) = (lignes de $B$), et une $m \times n$ fois une $n \times p$ donne une $m \times p$.</li></ul>
⟦0⟧
⟦1⟧
<h3>Déterminant et inverse (2 × 2)</h3>
⟦2⟧
<p>Si $\det A = 0$, la matrice n’est <b>pas inversible</b>. Les inverses permettent de résoudre des systèmes : $AX = B \Rightarrow X = A^{-1}B$.</p>
⟦3⟧
⟦4⟧`,
  'etxqyliwjj': R`
<p>Un <b>vecteur</b> a une norme et une direction. En coordonnées, $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ ou $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$. Le vecteur de $P$ à $Q$ est $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '66h68qke5m': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$ signifie que $f(x)$ devient aussi proche qu’on veut de $L$ quand $x$ tend vers $a$ — quoi qu’il se passe exactement en $x = a$.</p>
<h3>Méthodes</h3>
<ol><li><b>Substitution directe</b> : elle marche pour les polynômes et les autres fonctions continues : $\lim_{x \to 2}(x^2 + 3x) = 10$.</li><li><b>Factoriser et simplifier</b> face à $\frac{0}{0}$ : $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$.</li><li><b>Utiliser la quantité conjuguée</b> pour les expressions avec racines.</li></ol>
⟦0⟧
⟦1⟧
<h3>Limites en l’infini</h3>
⟦2⟧
⟦3⟧
<h3>Une limite trigonométrique remarquable</h3>
⟦4⟧
<h3>Continuité</h3>
<p>$f$ est continue en $a$ si $\lim_{x \to a} f(x) = f(a)$ : ni trou, ni saut, ni asymptote en ce point. Pour une fonction définie par morceaux, les deux morceaux doivent se raccorder.</p>
⟦5⟧`,
  'a1ga4rrgb4': R`
<p>La <b>dérivée</b> $f'(x)$ est le taux de variation instantané de $f$ — la pente de la tangente en $x$. Elle est définie par une limite :</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Tangentes</h3>
<p>En $x = a$, la tangente a pour pente $m = f'(a)$ et passe par $(a ; f(a))$ : $y - f(a) = f'(a)(x - a)$.</p>
<h3>Points critiques</h3>
<p>Là où $f'(x) = 0$, la courbe est momentanément horizontale. Utilisez la dérivée seconde : $f''(a) \gt 0$ → minimum local ; $f''(a) \lt 0$ → maximum local. $f$ est croissante là où $f' \gt 0$ et décroissante là où $f' \lt 0$.</p>
⟦4⟧
<h3>Optimisation</h3>
⟦5⟧
⟦6⟧`,
  'l6pgzhyei6': R`
<p>L’intégration est l’opération inverse de la dérivation. Une <b>primitive</b> de $f$ est une fonction $F$ telle que $F' = f$ ; l’<b>intégrale indéfinie</b> comprend la constante d’intégration :</p>
⟦0⟧
⟦1⟧
<h3>Intégrales définies</h3>
⟦2⟧
⟦3⟧
<p>Si $f \ge 0$, c’est l’aire sous la courbe entre $x = a$ et $x = b$. L’aire sous l’axe des $x$ compte négativement : coupez l’intégrale aux racines pour obtenir l’aire totale.</p>
⟦4⟧
⟦5⟧
<h3>Retrouver une fonction à partir de sa dérivée</h3>
<p>Si $f'(x) = 6x + 2$ et $f(1) = 10$, alors $f(x) = 3x^2 + 2x + C$ et $3 + 2 + C = 10$ donne $C = 5$.</p>
⟦6⟧`,
  'kgwrue8ydx': R`
⟦0⟧
⟦1⟧
<h3>Arrangements : l’ordre compte</h3>
⟦2⟧
<p>Premier, deuxième et troisième prix parmi 10 personnes : $^{10}P_3 = 10 \times 9 \times 8 = 720$.</p>
<ul><li>Anagrammes avec lettres répétées : $\frac{n!}{p!\,q!\cdots}$. « BANANA » a $\frac{6!}{3!\,2!} = 60$ anagrammes.</li><li>Autour d’une table ronde : $(n - 1)!$ (les rotations comptent comme identiques).</li></ul>
<h3>Combinaisons : l’ordre ne compte pas</h3>
⟦3⟧
<p>Un comité de 3 personnes parmi 10 : $\binom{10}{3} = 120$. Un comité de 2 hommes (parmi 5) et 3 femmes (parmi 6) : $\binom{5}{2}\binom{6}{3} = 10 \times 20 = 200$.</p>
<h3>Formule du binôme</h3>
⟦4⟧
⟦5⟧
<p>Le coefficient de $x^2$ dans $(x + 3)^5$ est $\binom{5}{2}3^{3} = 270$.</p>
⟦6⟧`,
  '5087kj3cei': R`
⟦0⟧
⟦1⟧
<h3>Avec et sans remise</h3>
⟦2⟧
<p>Les arbres de probabilité organisent ces calculs : on multiplie le long des branches et on additionne entre les branches.</p>
⟦3⟧
<h3>« Au moins un »</h3>
<p>On passe par l’événement contraire : $P(\text{au moins un six en 3 lancers}) = 1 - \left(\frac{5}{6}\right)^3 = \frac{91}{216}$.</p>
<h3>Formule de Bayes</h3>
⟦4⟧
⟦5⟧`,
  'tc0j77gt19': R`
<h3>Quartiles et diagrammes en boîte</h3>
<p>Rangez les données. La médiane $Q_2$ les partage en deux ; $Q_1$ est la médiane de la moitié inférieure et $Q_3$ celle de la moitié supérieure (ici, on exclut la médiane des deux moitiés quand $n$ est impair). L’<b>écart interquartile</b> $\text{EI} = Q_3 - Q_1$ mesure la dispersion des 50 % centraux.</p>
⟦0⟧
⟦1⟧
<h3>Variance et écart type</h3>
⟦2⟧
⟦3⟧
⟦4⟧
<h3>Données groupées</h3>
<p>On estime la moyenne avec les centres des classes : $\bar{x} \approx \frac{\sum f m}{\sum f}$.</p>
⟦5⟧
<h3>Transformer les données</h3>
⟦6⟧
⟦7⟧`,
  'c7ge7rgpv3': R`
⟦0⟧
<h3>Équation d’un cercle</h3>
⟦1⟧
<p>En développant, on obtient la <b>forme développée</b> $x^2 + y^2 + Dx + Ey + F = 0$, de centre $\left(-\frac{D}{2} ; -\frac{E}{2}\right)$ et de rayon $r = \sqrt{\frac{D^2}{4} + \frac{E^2}{4} - F}$.</p>
⟦2⟧
⟦3⟧
<h3>Position d’un point</h3>
<p>Remplacez le point dans $(x - a)^2 + (y - b)^2$ et comparez à $r^2$ : plus petit → à l’intérieur, égal → sur le cercle, plus grand → à l’extérieur.</p>
<h3>Tangentes</h3>
<p>Une tangente est perpendiculaire au rayon au point de contact. Pour le cercle $x^2 + y^2 = r^2$ en $(x_1 ; y_1)$, le rayon a pour pente $\frac{y_1}{x_1}$, donc la tangente a pour pente $-\frac{x_1}{y_1}$.</p>
<h3>Paraboles</h3>
<p>$y^2 = 4px$ a pour foyer $(p ; 0)$ et pour directrice $x = -p$ ; $x^2 = 4py$ a pour foyer $(0 ; p)$ et pour directrice $y = -p$. Tout point d’une parabole est à la même distance du foyer que de la directrice.</p>
⟦4⟧
⟦5⟧`,
  'kxyg3nvi7f': R`
<p>La <b>programmation linéaire</b> cherche la meilleure valeur (la plus grande ou la plus petite) d’une <b>fonction objectif</b> linéaire, comme le bénéfice $z = 30x + 20y$, sous des <b>contraintes</b> linéaires comme $x + y \le 40$.</p>
<ol><li>Écrivez les contraintes sous forme d’inéquations (avec $x \ge 0$, $y \ge 0$).</li><li>Tracez chaque droite frontière et hachurez la région qui vérifie toutes les contraintes — le <b>domaine réalisable</b>.</li><li>Trouvez les sommets en résolvant des couples d’équations frontières.</li><li>Évaluez la fonction objectif en chaque sommet.</li></ol>
⟦0⟧
⟦1⟧
⟦2⟧
<p>Pour les problèmes de minimisation avec des contraintes « ≥ », le domaine est souvent non borné ; avec des coûts positifs, le minimum est encore atteint en un sommet.</p>
⟦3⟧`,
  '242c6ma5mvc': R`
<p>Une <b>proposition</b> est un énoncé qui est soit vrai, soit faux. On construit des propositions composées avec des <b>connecteurs</b> :</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Implications associées</h3>
⟦3⟧
<h3>Quantificateurs</h3>
<p>$\forall$ « pour tout » et $\exists$ « il existe ». La négation les échange : la négation de « Tous les élèves ont réussi » est « <b>Certains</b> élèves <b>n’ont pas</b> réussi » ; la négation de « Certains oiseaux ne volent pas » est « Tous les oiseaux volent ».</p>
<h3>Raisonnements valides</h3>
<ul><li><b>Modus ponens :</b> $p \Rightarrow q$, $p$ ; donc $q$.</li><li><b>Modus tollens :</b> $p \Rightarrow q$, $\neg q$ ; donc $\neg p$.</li><li><b>Syllogisme :</b> $p \Rightarrow q$, $q \Rightarrow r$ ; donc $p \Rightarrow r$.</li></ul>
⟦4⟧`,
  '2eractxl2pu': R`
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Dérivation implicite</h3>
<p>Quand $y$ est défini implicitement, dérive les deux membres par rapport à $x$ en traitant $y$ comme une fonction de $x$ (donc $\frac{d}{dx}y^2 = 2y\,y'$), puis isole $y'$.</p>
⟦3⟧
⟦4⟧
⟦5⟧
⟦6⟧`,
  '2pce0rr7ld': R`
<h3>Règle de L'Hôpital</h3>
⟦0⟧
<p>$\displaystyle\lim_{x \to 0}\frac{1 - \cos 4x}{x^2} = \lim\frac{4\sin 4x}{2x} = \lim\frac{16\cos 4x}{2} = 8$ (appliquée deux fois).</p>
<h3>Optimisation</h3>
<ol><li>Écris la grandeur à optimiser comme fonction d'une seule variable (utilise la contrainte).</li><li>Dérive et résous $f'(x) = 0$.</li><li>Vérifie qu'il s'agit d'un maximum/minimum (dérivée seconde ou bornes).</li></ol>
⟦1⟧
⟦2⟧
<h3>Taux liés</h3>
<p>Dérive une relation par rapport au temps. Pour un disque qui grandit, $A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.</p>
<h3>Approximation affine</h3>
⟦3⟧
⟦4⟧
<h3>Convexité et théorème des accroissements finis</h3>
<p>$f'' \gt 0$ : convexe ; $f'' \lt 0$ : concave ; un <b>point d'inflexion</b> est un point où la convexité change. <b>TAF :</b> si $f$ est continue sur $[a ; b]$ et dérivable à l'intérieur, il existe $c$ dans $]a ; b[$ tel que $f'(c) = \frac{f(b) - f(a)}{b - a}$.</p>
⟦5⟧
⟦6⟧`,
  '1i8ljxmt6ne': R`
⟦0⟧
<h3>Changement de variable</h3>
<p>Cherche une fonction et sa dérivée. Avec $u = g(x)$, $du = g'(x)\,dx$ :</p>
⟦1⟧
<p>Pour une intégrale définie, change aussi les bornes (ou reviens à $x$ avant d'évaluer).</p>
<h3>Intégration par parties</h3>
⟦2⟧
⟦3⟧
<h3>Décomposition en éléments simples</h3>
<p>Décompose une fonction rationnelle en morceaux plus simples : $\dfrac{5x - 1}{(x - 1)(x + 2)} = \dfrac{A}{x - 1} + \dfrac{B}{x + 2}$. Chasse les dénominateurs et remplace $x = 1$ et $x = -2$ : $A = \frac{4}{3}$, $B = \frac{11}{3}$. Chaque morceau s'intègre en un logarithme.</p>
<h3>Intégrales impropres</h3>
⟦4⟧
⟦5⟧
⟦6⟧`,
  '22ywziqc3vc': R`
<p>Une série $\sum a_n$ <b>converge</b> si ses sommes partielles $S_N = a_1 + \cdots + a_N$ tendent vers une limite finie.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Séries entières et séries de Taylor</h3>
<p>Une série entière $\sum c_n (x - a)^n$ converge pour $|x - a| \lt R$, le <b>rayon de convergence</b> (on le trouve avec la règle de d'Alembert). La série de Taylor de $f$ en $a$ est $\sum \frac{f^{(n)}(a)}{n!}(x - a)^n$ ; en 0, on parle de série de Maclaurin.</p>
⟦3⟧
⟦4⟧
⟦5⟧`,
  'snltdvly4b': R`
<p>Pour $f(x, y)$, la <b>dérivée partielle</b> $f_x = \frac{\partial f}{\partial x}$ dérive par rapport à $x$ en traitant $y$ comme une constante (et inversement pour $f_y$). Pour $f = x^2y^3$ : $f_x = 2xy^3$, $f_y = 3x^2y^2$.</p>
<h3>Gradient et dérivées directionnelles</h3>
⟦0⟧
⟦1⟧
<h3>Points critiques : test de la dérivée seconde</h3>
<p>En un point où $f_x = f_y = 0$, pose $D = f_{xx}f_{yy} - f_{xy}^2$.</p>
<ul><li>$D \gt 0$, $f_{xx} \gt 0$ : minimum local. &nbsp; $D \gt 0$, $f_{xx} \lt 0$ : maximum local.</li><li>$D \lt 0$ : point selle. &nbsp; $D = 0$ : le test ne permet pas de conclure.</li></ul>
<h3>Intégrales doubles</h3>
<p>Sur un rectangle, intègre une variable à la fois (Fubini) : $\displaystyle\int_0^2\!\!\int_0^3 xy\,dy\,dx = \int_0^2 \frac{9x}{2}\,dx = 9$. En coordonnées polaires, $dA = r\,dr\,d\theta$.</p>
<h3>Multiplicateurs de Lagrange</h3>
<p>Pour optimiser $f$ sous la contrainte $g = c$, résous $\nabla f = \lambda\nabla g$ avec la contrainte.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'fs23huivh': R`
<p>Une <b>équation différentielle</b> relie une fonction à ses dérivées. Son <b>ordre</b> est celui de la dérivée la plus élevée qui y figure. La <b>solution générale</b> contient des constantes arbitraires ; des conditions initiales déterminent une solution particulière.</p>
<h3>Équations à variables séparables</h3>
⟦0⟧
⟦1⟧
<p>Cas particulier : $\frac{dy}{dt} = ky$ donne $y = y_0e^{kt}$ — croissance ($k \gt 0$) ou décroissance ($k \lt 0$) exponentielle. Avec une demi-vie $T$, la quantité restante est $N_0\left(\frac{1}{2}\right)^{t/T}$.</p>
<h3>Équations linéaires du premier ordre</h3>
⟦2⟧
<h3>Linéaires du second ordre à coefficients constants</h3>
<p>Pour $ay'' + by' + cy = 0$, essaie $y = e^{rx}$ : on obtient l'<b>équation caractéristique</b> $ar^2 + br + c = 0$.</p>
⟦3⟧
⟦4⟧
⟦5⟧
⟦6⟧`,
  '24kf7gdq652': R`
<h3>Systèmes linéaires et rang</h3>
<p>On résout un système $A\mathbf{x} = \mathbf{b}$ en échelonnant la matrice augmentée $[A \mid \mathbf{b}]$ par opérations sur les lignes. Le <b>rang</b> de $A$ est le nombre de pivots (lignes non nulles de la forme échelonnée).</p>
⟦0⟧
<h3>Déterminants</h3>
⟦1⟧
<p>Propriétés utiles pour les matrices $n \times n$ : $\det(AB) = \det A \det B$, $\det(A^T) = \det A$, $\det(A^{-1}) = \frac{1}{\det A}$, $\det(kA) = k^n\det A$. Règle de Cramer : $x_i = \frac{\det A_i}{\det A}$.</p>
<h3>Valeurs propres et vecteurs propres</h3>
⟦2⟧
⟦3⟧
⟦4⟧
<p>Si $A$ possède $n$ vecteurs propres indépendants, elle est <b>diagonalisable</b> : $A = PDP^{-1}$, avec les vecteurs propres en colonnes de $P$ et les valeurs propres sur la diagonale de $D$.</p>
⟦5⟧`,
  'to00bbswkc': R`
<p>L'unité imaginaire vérifie $i^2 = -1$. Un nombre complexe s'écrit $z = a + bi$, de partie réelle $\text{Re}(z) = a$ et de partie imaginaire $\text{Im}(z) = b$. Les puissances de $i$ se répètent tous les quatre : $i ; -1 ; -i ; 1 ; \ldots$</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Forme exponentielle et formule d'Euler</h3>
⟦3⟧
⟦4⟧
<p>Les racines $n$-ièmes de l'unité sont $e^{2\pi ik/n}$ pour $k = 0 ; 1 ; \ldots ; n - 1$ : des points régulièrement espacés sur le cercle unité.</p>
⟦5⟧
⟦6⟧`,
  'x4ag408mej': R`
<p>Une <b>variable aléatoire</b> $X$ associe des nombres aux issues. Pour une variable $X$ discrète de probabilités $p(x)$ :</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>La loi normale</h3>
⟦3⟧
⟦4⟧
⟦5⟧
⟦6⟧`,
  'c7oei6is1q': R`
<p>On utilise une statistique de l'<b>échantillon</b> (comme $\bar{x}$) pour estimer un paramètre de la <b>population</b> (comme $\mu$). D'après le <b>théorème central limite</b>, pour $n$ grand, la moyenne de l'échantillon suit approximativement une loi normale de moyenne $\mu$ et d'<b>erreur type</b> $\frac{\sigma}{\sqrt{n}}$.</p>
<h3>Intervalles de confiance</h3>
⟦0⟧
⟦1⟧
<p>Pour obtenir une marge d'erreur $E$, il faut $n \ge \left(\frac{z^*\sigma}{E}\right)^2$ (arrondi à l'entier supérieur). Si $\sigma$ est inconnu, utilise $s$ et la loi de Student $t$.</p>
<h3>Tests d'hypothèse</h3>
<ol><li>Énonce $H_0$ (p. ex. $\mu = \mu_0$) et $H_1$.</li><li>Calcule une statistique de test, p. ex. $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$.</li><li>Trouve la <b>p-valeur</b> : la probabilité, sous $H_0$, d'obtenir un résultat au moins aussi extrême.</li><li>Si $p \le \alpha$, rejette $H_0$ ; sinon, ne la rejette pas.</li></ol>
⟦2⟧
⟦3⟧
<h3>Régression linéaire</h3>
<p>La droite des moindres carrés $\hat{y} = a + bx$ a pour pente $b = r\frac{s_y}{s_x}$ et passe par $(\bar{x} ; \bar{y})$, donc $a = \bar{y} - b\bar{x}$.</p>
⟦4⟧
⟦5⟧`,
  '1sl57vmn5mx': R`
<h3>Arithmétique</h3>
<p>$a \equiv b \pmod n$ signifie que $n$ divise $a - b$ ; $a \bmod n$ est le reste dans $\{0 ; 1 ; \ldots ; n - 1\}$. On peut additionner et multiplier des congruences, et réduire les puissances pas à pas.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<p>L'<b>inverse modulaire</b> de $a$ modulo $n$ est le $x$ tel que $ax \equiv 1 \pmod n$ ; il existe exactement quand $\gcd(a, n) = 1$.</p>
<h3>Dénombrement</h3>
<ul><li>Applications d'un ensemble à $m$ éléments dans un ensemble à $n$ éléments : $n^m$ ; injectives : $n(n-1)\cdots(n-m+1)$.</li><li>Inclusion–exclusion : $|A \cup B| = |A| + |B| - |A \cap B|$.</li><li><b>Principe des tiroirs :</b> si plus de $kn$ objets vont dans $n$ tiroirs, un tiroir en reçoit au moins $k + 1$.</li></ul>
<h3>Récurrences et graphes</h3>
<p>Une relation de récurrence définit chaque terme à partir des précédents, comme $a_n = 2a_{n-1} + 1$, $a_0 = 1$. Dans un graphe, le <b>lemme des poignées de main</b> dit que $\sum \deg(v) = 2|E|$ ; $K_n$ a $\binom{n}{2}$ arêtes ; un arbre à $n$ sommets a $n - 1$ arêtes ; un graphe connexe a un cycle eulérien ssi tous les degrés sont pairs.</p>
⟦3⟧
⟦4⟧`,
  '1mtvwhuo4v8': R`
<p>Les méthodes numériques approchent des résultats qui n'ont pas de forme explicite commode. Deux types d'erreur comptent : l'erreur de <b>troncature</b> (due à la méthode) et l'erreur d'<b>arrondi</b> (due à la précision finie).</p>
⟦0⟧
<h3>Recherche de racines</h3>
<ul><li><b>Dichotomie :</b> si $f(a)$ et $f(b)$ sont de signes contraires, teste le milieu $m$ et garde la moitié où le signe change. Lente mais sûre : l'erreur est divisée par deux à chaque étape.</li><li><b>Newton–Raphson :</b> $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$. Très rapide près d'une racine simple (convergence quadratique), mais peut échouer avec un mauvais point de départ ou si $f' \approx 0$.</li></ul>
⟦1⟧
⟦2⟧
<h3>Intégration numérique</h3>
⟦3⟧
<p>Ici $h = \frac{b - a}{n}$. La méthode de Simpson est exacte pour les polynômes de degré au plus 3.</p>
⟦4⟧
<h3>Méthode d'Euler</h3>
⟦5⟧
⟦6⟧
⟦7⟧`,
  '12ng1nf8855': R`
<p>Un <b>champ de vecteurs</b> $\mathbf{F}(x, y, z) = (P, Q, R)$ associe un vecteur à chaque point — comme la vitesse du vent ou une force. Avec $\nabla = \left(\frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z}\right)$ :</p>
⟦0⟧
<p>La divergence mesure le flux sortant d'un point ; le rotationnel mesure la rotation.</p>
⟦1⟧
<h3>Intégrales curvilignes et champs conservatifs</h3>
⟦2⟧
⟦3⟧
<h3>Les grands théorèmes</h3>
⟦4⟧
<p>Une jolie conséquence du théorème de Green : l'aire de $D$ vaut $\frac{1}{2}\oint_C (x\,dy - y\,dx)$.</p>
⟦5⟧`,
  'u5cfzxzcr6': R`
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧
<p>Les transformées inverses demandent en général d'abord une décomposition en éléments simples, puis une lecture de la table.</p>
⟦5⟧`,
});
