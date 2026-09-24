/* ==========================================================================
   The ladder: which topics each topic builds on, and why.
   link(from, to, why) means "to" builds on "from". Each topic page lists its
   prerequisites ("Builds on") and the topics it opens up ("Leads to"); the
   same one-sentence reason is shown on both pages, so it has to read well
   from either side.
   ========================================================================== */
const LADDER = [];
const link = (from, to, why) => LADDER.push({ from, to, why });

/* ---------- Elementary ---------- */
link('place-value', 'add-sub', () => T`Column addition and subtraction line digits up by place value, and carrying moves a ten into the next place.`);
link('add-sub', 'mul-div', () => T`Multiplication is repeated addition, and division undoes multiplication.`);
link('mul-div', 'order-ops', () => T`The order of operations decides which of $+$, $-$, $\times$ and $\div$ comes first in a longer calculation.`);
link('mul-div', 'factors', () => T`Factors and multiples are the numbers that divide a number exactly, or that you get by multiplying it.`);
link('factors', 'fractions', () => T`Simplifying fractions and finding a common denominator use common factors and the lowest common multiple.`);
link('place-value', 'decimals', () => T`Decimals extend place value to the right of the ones place: tenths, hundredths, thousandths.`);
link('fractions', 'decimals', () => T`A decimal is a fraction whose denominator is 10, 100, 1000 and so on.`);
link('fractions', 'percent', () => T`Percent means “out of a hundred”: 25% is the fraction $\frac{25}{100} = \frac{1}{4}$.`);
link('decimals', 'percent', () => T`Percentages are converted to decimals to calculate with them: 8% of a price is $0.08 \times$ the price.`);
link('decimals', 'measurement', () => T`Converting between metric units multiplies or divides by 10, 100 or 1000, which moves the decimal point.`);
link('mul-div', 'perimeter-area', () => T`The area of a rectangle is length times width.`);
link('measurement', 'perimeter-area', () => T`Lengths and areas are measured in units such as cm and cm², which must match before you calculate.`);
link('perimeter-area', 'volume-basic', () => T`The volume of a prism is the area of its base times its height, and surface area adds up the areas of its faces.`);
link('add-sub', 'angles-shapes', () => T`Angle facts, such as “angles on a straight line add up to 180°”, are used by adding and subtracting angles.`);
link('mul-div', 'data-basic', () => T`The mean is the total of the values divided by how many values there are.`);

/* ---------- Junior high ---------- */
link('add-sub', 'integers', () => T`Integers extend the number line below zero; adding and subtracting them follows the same ideas, with signs.`);
link('mul-div', 'exponents', () => T`A power is repeated multiplication: $2^5 = 2 \times 2 \times 2 \times 2 \times 2$.`);
link('exponents', 'sci-notation', () => T`Scientific notation writes a number as $a \times 10^n$, using powers of ten.`);
link('decimals', 'sci-notation', () => T`The number $a$ in $a \times 10^n$ is a decimal from 1 up to 10.`);
link('fractions', 'ratio', () => T`A ratio compares quantities the way a fraction does, and a proportion says two fractions are equal.`);
link('integers', 'algebra-expr', () => T`Letters stand for numbers that may be negative, so expressions are simplified with the rules for signed numbers.`);
link('order-ops', 'algebra-expr', () => T`Expanding brackets and substituting values into an expression follow the order of operations.`);
link('algebra-expr', 'linear-eq', () => T`Solving an equation means simplifying the expressions on each side, then undoing operations.`);
link('linear-eq', 'inequalities', () => T`Inequalities are solved like equations, except that the sign flips when you multiply or divide by a negative number.`);
link('factors', 'sets', () => T`Sets of factors, multiples and primes are typical first examples of sets and Venn diagrams.`);
link('linear-eq', 'linear-functions', () => T`The graph of a linear equation in $x$ and $y$ is a straight line, and every point on it is a solution.`);
link('ratio', 'linear-functions', () => T`The gradient of a line is a rate: the change in $y$ for each unit change in $x$.`);
link('linear-eq', 'systems', () => T`Substitution and elimination turn a system into a single linear equation in one unknown.`);
link('linear-functions', 'systems', () => T`The solution of a system of two linear equations is the point where their two lines cross.`);
link('exponents', 'pythagoras', () => T`The theorem $a^2 + b^2 = c^2$ is worked with squares and square roots.`);
link('angles-shapes', 'pythagoras', () => T`The theorem is a fact about right-angled triangles and which side is the hypotenuse.`);
link('perimeter-area', 'circles', () => T`Circumference and the area of a circle extend perimeter and area to a curved shape.`);
link('circles', 'solids', () => T`Cylinders, cones and spheres are round, so their formulas use $\pi$ and the radius.`);
link('volume-basic', 'solids', () => T`The volume and surface area of prisms are extended to cylinders, cones, pyramids and spheres.`);
link('data-basic', 'statistics-jh', () => T`Mean, median and mode are joined by measures of spread such as the range and quartiles.`);
link('fractions', 'probability-jh', () => T`A probability is a fraction: favourable outcomes out of all equally likely outcomes.`);
link('percent', 'social-arith', () => T`Profit, loss, discount, tax and interest are all percentages of an amount.`);
link('algebra-expr', 'patterns', () => T`The $n$th term of a pattern is an algebraic expression in $n$.`);
link('ratio', 'similarity', () => T`Similar shapes have all pairs of corresponding sides in the same ratio.`);
link('angles-shapes', 'similarity', () => T`Transformations and similarity keep angles the same, so angle facts identify similar shapes.`);

/* ---------- Senior high ---------- */
link('algebra-expr', 'quadratics', () => T`Factorising and completing the square are skills of rearranging algebraic expressions.`);
link('linear-eq', 'quadratics', () => T`Once a quadratic is factorised, each factor set to zero is a linear equation.`);
link('quadratics', 'quad-functions', () => T`The roots of a quadratic equation are where its parabola crosses the $x$-axis.`);
link('linear-functions', 'quad-functions', () => T`Graphs, intercepts and the coordinate plane carry over from straight lines to parabolas.`);
link('linear-functions', 'functions', () => T`A linear function is the first example of a rule that gives each input exactly one output.`);
link('exponents', 'exp-log', () => T`A logarithm is an exponent, so the laws of exponents become the laws of logarithms.`);
link('functions', 'exp-log', () => T`The logarithm $\log_a x$ is the inverse function of the exponential $a^x$.`);
link('patterns', 'sequences', () => T`Arithmetic and geometric sequences make number patterns precise and add formulas for their sums.`);
link('pythagoras', 'trig-basics', () => T`Trigonometric ratios compare the sides of a right-angled triangle, and on the unit circle $\sin^2\theta + \cos^2\theta = 1$ is Pythagoras' theorem.`);
link('similarity', 'trig-basics', () => T`A trigonometric ratio depends only on the angle because right-angled triangles with equal angles are similar.`);
link('trig-basics', 'trig-identities', () => T`Identities are built from the definitions of sine, cosine and tangent on the unit circle.`);
link('quadratics', 'trig-identities', () => T`Many trigonometric equations turn into a quadratic in $\sin x$ or $\cos x$.`);
link('trig-basics', 'triangle-rules', () => T`The sine rule and cosine rule extend the trigonometric ratios to triangles without a right angle.`);
link('quadratics', 'polynomials', () => T`A quadratic is a polynomial of degree 2; polynomial division and the remainder theorem generalise its factorising.`);
link('systems', 'matrices', () => T`A system of linear equations can be written as one matrix equation $AX = B$ and solved with the inverse matrix.`);
link('pythagoras', 'vectors', () => T`The magnitude of a vector is found with Pythagoras' theorem.`);
link('trig-basics', 'vectors', () => T`The angle between two vectors, and splitting a vector into components, use trigonometry.`);
link('functions', 'limits', () => T`A limit describes the value a function's output approaches as its input approaches a point.`);
link('limits', 'derivatives', () => T`The derivative is defined as a limit: the gradient between two points as they move together.`);
link('linear-functions', 'derivatives', () => T`A derivative is the gradient of the tangent line, extending the gradient of a straight line to curves.`);
link('derivatives', 'integrals', () => T`Integration reverses differentiation; this is the Fundamental Theorem of Calculus.`);
link('perimeter-area', 'integrals', () => T`A definite integral measures the area under a curve by adding up thin rectangles.`);
link('mul-div', 'combinatorics', () => T`Counting rests on the multiplication principle: the numbers of choices at each step multiply.`);
link('probability-jh', 'probability-sh', () => T`Rules for combined, independent and conditional events build on probability as a fraction of outcomes.`);
link('combinatorics', 'probability-sh', () => T`Permutations and combinations count the outcomes when there are too many to list.`);
link('statistics-jh', 'statistics-sh', () => T`Variance, standard deviation and distributions go further than the range and quartiles.`);
link('linear-functions', 'conics', () => T`Distance, midpoint and gradient in the coordinate plane lead to the equations of lines and circles.`);
link('pythagoras', 'conics', () => T`The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is Pythagoras' theorem for the distance to the centre.`);
link('inequalities', 'linear-programming', () => T`Constraints are linear inequalities, and together their graphs form the feasible region.`);
link('linear-functions', 'linear-programming', () => T`The boundaries of the feasible region and the level lines of the objective function are straight lines.`);
link('sets', 'logic', () => T`“And”, “or” and “not” in logic match intersection, union and complement of sets.`);

/* ---------- University ---------- */
link('derivatives', 'diff-techniques', () => T`The chain, product and quotient rules and implicit differentiation extend the basic derivative rules.`);
link('exp-log', 'diff-techniques', () => T`Differentiating $e^x$ and $\ln x$, and logarithmic differentiation, use the laws of exponents and logarithms.`);
link('diff-techniques', 'diff-applications', () => T`Optimisation, related rates and curve sketching apply the rules of differentiation to real problems.`);
link('integrals', 'integration-techniques', () => T`Substitution and integration by parts extend the basic antiderivatives.`);
link('diff-techniques', 'integration-techniques', () => T`Substitution reverses the chain rule, and integration by parts reverses the product rule.`);
link('integration-techniques', 'integral-applications', () => T`Areas, volumes of revolution and arc lengths all lead to integrals that must then be evaluated.`);
link('sequences', 'series', () => T`Infinite series continue the sums of arithmetic and geometric sequences without end.`);
link('limits', 'series', () => T`A series converges when the limit of its partial sums exists.`);
link('diff-techniques', 'multivariable', () => T`A partial derivative differentiates with respect to one variable while treating the others as constants.`);
link('vectors', 'multivariable', () => T`The gradient and directional derivatives are vectors.`);
link('diff-techniques', 'ode', () => T`A differential equation is an equation linking a function to its derivatives.`);
link('integration-techniques', 'ode', () => T`Solving a differential equation usually ends with an integration.`);
link('matrices', 'linear-algebra', () => T`Linear algebra studies matrices as maps, with determinants, inverses, rank and eigenvalues.`);
link('vectors', 'linear-algebra', () => T`Vector spaces generalise the vectors of geometry to any number of dimensions.`);
link('quadratics', 'complex', () => T`Complex numbers first appear as the roots of a quadratic with a negative discriminant.`);
link('trig-basics', 'complex', () => T`The polar form describes a complex number by its modulus and an angle, using sine and cosine.`);
link('probability-sh', 'distributions', () => T`The binomial, Poisson and normal distributions are built on the rules of probability and counting.`);
link('integrals', 'distributions', () => T`For a continuous distribution, a probability is an area under the density curve.`);
link('statistics-sh', 'inference', () => T`Inference starts from a sample summarised by its mean and standard deviation.`);
link('distributions', 'inference', () => T`Confidence intervals and hypothesis tests rely on the normal and $t$ distributions.`);
link('logic', 'discrete', () => T`Proofs, sets and relations in discrete mathematics are written in the language of logic.`);
link('combinatorics', 'discrete', () => T`Counting principles are a central part of discrete mathematics.`);
link('diff-techniques', 'numerical', () => T`Newton's method uses the derivative to home in on a root.`);
link('integrals', 'numerical', () => T`The trapezoidal rule and Simpson's rule approximate definite integrals.`);
link('multivariable', 'vector-calculus', () => T`Gradient, divergence and curl are built from partial derivatives, and line and surface integrals extend multiple integrals.`);
link('ode', 'laplace', () => T`The Laplace transform turns a differential equation into an algebraic equation.`);
link('integration-techniques', 'laplace', () => T`The Laplace transform is an improper integral, often worked out with integration by parts.`);
