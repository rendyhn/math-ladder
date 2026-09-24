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
