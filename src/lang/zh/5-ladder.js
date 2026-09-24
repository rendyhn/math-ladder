/* ladder: topic prerequisites and what they lead to */
addUI('zh', {
  ladderHead: R`本主题在阶梯中的位置`,
  buildsOn: R`基于`,
  leadsTo: R`通向`,
  ladderStart: R`起点：不需要先学其他主题。`,
  ladderTop: R`这一分支阶梯的顶端。`,
});
addT('zh', {
  // Column addition and subtraction line digits up by place valu
  'qeiew1mndp': R`竖式加减法按数位对齐数字，进位把一个十送到下一位。`,
  // Multiplication is repeated addition, and division undoes mul
  '1jpm1intgmb': R`乘法是重复的加法，除法是乘法的逆运算。`,
  // The order of operations decides which of $+$, $-$, $\times$ 
  '5wxy40oljq': R`运算顺序决定在较长的算式中 $+$、$-$、$\times$、$\div$ 哪个先算。`,
  // Factors and multiples are the numbers that divide a number e
  '10sha3zlzp3': R`因数和倍数是能整除一个数的数，或由它相乘得到的数。`,
  // Simplifying fractions and finding a common denominator use c
  '4wwa4bmv2r': R`约分和通分要用到公因数和最小公倍数。`,
  // Decimals extend place value to the right of the ones place: 
  'sh9lbghpe9': R`小数把数位延伸到个位的右边：十分位、百分位、千分位。`,
  // A decimal is a fraction whose denominator is 10, 100, 1000 a
  'irkoozgpjt': R`小数是分母为 10、100、1000 等的分数。`,
  // Percent means “out of a hundred”: 25% is the fraction $\frac
  'p34b5uh54s': R`百分之几就是“每一百中的几”：25% 就是分数 $\frac{25}{100} = \frac{1}{4}$。`,
  // Percentages are converted to decimals to calculate with them
  '231i108op1x': R`用百分数计算时先化成小数：价格的 8% 就是 $0.08 \times$ 价格。`,
  // Converting between metric units multiplies or divides by 10,
  'o2gl9i6l2': R`公制单位换算就是乘或除以 10、100 或 1000，也就是移动小数点。`,
  // The area of a rectangle is length times width.
  '25wcbpclu4': R`长方形的面积等于长乘宽。`,
  // Lengths and areas are measured in units such as cm and cm², 
  '2634ih96gsm': R`长度和面积用 cm、cm² 等单位度量，计算前单位必须统一。`,
  // The volume of a prism is the area of its base times its heig
  'kwo8mlyup8': R`棱柱的体积等于底面积乘高，表面积是各个面的面积之和。`,
  // Angle facts, such as “angles on a straight line add up to 18
  '1v95ytyiz1t': R`角的性质，如“平角等于 180°”，要通过角的加减来运用。`,
  // The mean is the total of the values divided by how many valu
  'bcjde87onv': R`平均数是所有数值的和除以数值的个数。`,
  // Integers extend the number line below zero; adding and subtr
  'uhivuskhe4': R`整数把数轴延伸到零以下；它们的加减沿用同样的思路，只是多了符号。`,
  // A power is repeated multiplication: $2^5 = 2 \times 2 \times
  '14qn14hzx13': R`乘方是重复的乘法：$2^5 = 2 \times 2 \times 2 \times 2 \times 2$。`,
  // Scientific notation writes a number as $a \times 10^n$, usin
  'hr39w4wzvv': R`科学记数法把一个数写成 $a \times 10^n$，用到 10 的幂。`,
  // The number $a$ in $a \times 10^n$ is a decimal from 1 up to 
  'qonxs1x7d1': R`$a \times 10^n$ 中的 $a$ 是大于或等于 1 且小于 10 的小数。`,
  // A ratio compares quantities the way a fraction does, and a p
  '23aa0qkt117': R`比像分数一样比较两个量，比例表示两个分数相等。`,
  // Letters stand for numbers that may be negative, so expressio
  'r03wloegxg': R`字母代表的数可能是负数，所以化简代数式要用有理数的符号法则。`,
  // Expanding brackets and substituting values into an expressio
  '21h80w1us7d': R`去括号和代入求值都要遵循运算顺序。`,
  // Solving an equation means simplifying the expressions on eac
  'dsfd6oq44q': R`解方程就是化简两边的式子，再逐步逆向运算。`,
  // Inequalities are solved like equations, except that the sign
  'chsc7bja9g': R`不等式的解法与方程相同，只是乘或除以负数时不等号要改变方向。`,
  // Sets of factors, multiples and primes are typical first exam
  '1rnu9h0j44t': R`因数集、倍数集和质数集是集合与韦恩图最常见的入门例子。`,
  // The graph of a linear equation in $x$ and $y$ is a straight 
  '1mojvmv6g25': R`关于 $x$ 和 $y$ 的一次方程的图像是一条直线，直线上每个点都是它的解。`,
  // The gradient of a line is a rate: the change in $y$ for each
  'ofsdmnc7db': R`直线的斜率是一种变化率：$x$ 每增加一个单位时 $y$ 的变化量。`,
  // Substitution and elimination turn a system into a single lin
  'zd8khoatau': R`代入消元法和加减消元法把方程组化成一个一元一次方程。`,
  // The solution of a system of two linear equations is the poin
  '1euaco9nn3z': R`两个一次方程组成的方程组的解，就是两条直线的交点。`,
  // The theorem $a^2 + b^2 = c^2$ is worked with squares and squ
  '296jzhjbpfo': R`定理 $a^2 + b^2 = c^2$ 要用平方和平方根来计算。`,
  // The theorem is a fact about right-angled triangles and which
  '27afy2qgea8': R`这个定理针对直角三角形，要先认清哪条边是斜边。`,
  // Circumference and the area of a circle extend perimeter and 
  '1c7m4ao6ge7': R`圆的周长和面积把周长与面积推广到曲线图形。`,
  // Cylinders, cones and spheres are round, so their formulas us
  '4ai3wcl267': R`圆柱、圆锥和球都是圆的，所以公式中有 $\pi$ 和半径。`,
  // The volume and surface area of prisms are extended to cylind
  'fxdb4tsyw2': R`棱柱的体积和表面积推广到圆柱、圆锥、棱锥和球。`,
  // Mean, median and mode are joined by measures of spread such 
  '9a6kx1e4yh': R`在平均数、中位数和众数之外，再加上极差、四分位数等离散程度的量。`,
  // A probability is a fraction: favourable outcomes out of all 
  '17gd79svwx2': R`概率是一个分数：有利结果数除以所有等可能结果数。`,
  // Profit, loss, discount, tax and interest are all percentages
  '6oqshsyd21': R`利润、亏损、折扣、税和利息都是某个数量的百分数。`,
  // The $n$th term of a pattern is an algebraic expression in $n
  's18kq836ov': R`规律的第 $n$ 项是关于 $n$ 的代数式。`,
  // Similar shapes have all pairs of corresponding sides in the 
  '1673zqtap3t': R`相似图形所有对应边的比都相等。`,
  // Transformations and similarity keep angles the same, so angl
  'nhm1k0jf87': R`变换和相似都保持角的大小不变，所以可以用角的性质判断图形相似。`,
  // Factorising and completing the square are skills of rearrang
  '2awcjz6ag0h': R`因式分解和配方都是变形代数式的技能。`,
  // Once a quadratic is factorised, each factor set to zero is a
  'axjxa88p8j': R`二次方程因式分解后，令每个因式等于零就得到一次方程。`,
  // The roots of a quadratic equation are where its parabola cro
  '3ai29ta3bd': R`二次方程的根就是抛物线与 $x$ 轴的交点。`,
  // Graphs, intercepts and the coordinate plane carry over from 
  '2fe079f86oc': R`图像、截距和坐标平面的知识从直线延续到抛物线。`,
  // A linear function is the first example of a rule that gives 
  '1dyq2iw6ttf': R`一次函数是“每个输入恰好对应一个输出”这一规则的第一个例子。`,
  // A logarithm is an exponent, so the laws of exponents become 
  'bhyxgzt11y': R`对数就是指数，所以指数运算法则就变成了对数运算法则。`,
  // The logarithm $\log_a x$ is the inverse function of the expo
  'dhaomm7cmc': R`对数 $\log_a x$ 是指数函数 $a^x$ 的反函数。`,
  // Arithmetic and geometric sequences make number patterns prec
  '1i0ckjdy4m3': R`等差数列和等比数列把数的规律精确化，并给出求和公式。`,
  // Trigonometric ratios compare the sides of a right-angled tri
  '2dkcig1f7s5': R`三角比比较直角三角形的边，而在单位圆上 $\sin^2\theta + \cos^2\theta = 1$ 就是勾股定理。`,
  // A trigonometric ratio depends only on the angle because righ
  '28o7ie6opej': R`三角比只取决于角，因为角相等的直角三角形都相似。`,
  // Identities are built from the definitions of sine, cosine an
  '11vomgqg97n': R`恒等式由单位圆上正弦、余弦和正切的定义推出。`,
  // Many trigonometric equations turn into a quadratic in $\sin 
  '1aaktv1yqz7': R`很多三角方程会化成关于 $\sin x$ 或 $\cos x$ 的二次方程。`,
  // The sine rule and cosine rule extend the trigonometric ratio
  '13me5uymk2c': R`正弦定理和余弦定理把三角比推广到没有直角的三角形。`,
  // A quadratic is a polynomial of degree 2; polynomial division
  'da1pvgcuq2': R`二次式是 2 次多项式；多项式除法和余数定理推广了它的因式分解。`,
  // A system of linear equations can be written as one matrix eq
  'e0bc8izwug': R`线性方程组可以写成一个矩阵方程 $AX = B$，并用逆矩阵求解。`,
  // The magnitude of a vector is found with Pythagoras' theorem.
  '12j5n3poamr': R`向量的模用勾股定理求得。`,
  // The angle between two vectors, and splitting a vector into c
  '1rc52s5n9t0': R`两个向量的夹角以及把向量分解成分量都要用到三角。`,
  // A limit describes the value a function's output approaches a
  '15k09f0soai': R`极限描述当自变量趋近某一点时，函数值趋近的数值。`,
  // The derivative is defined as a limit: the gradient between t
  '2cxg9hybda1': R`导数定义为极限：两点靠拢时两点连线的斜率。`,
  // A derivative is the gradient of the tangent line, extending 
  '201djzmlsb3': R`导数是切线的斜率，把直线的斜率推广到曲线。`,
  // Integration reverses differentiation; this is the Fundamenta
  'ruft2tqdak': R`积分是求导的逆运算，这就是微积分基本定理。`,
  // A definite integral measures the area under a curve by addin
  'sp8kuu3a74': R`定积分通过把许多细长矩形相加来度量曲线下的面积。`,
  // Counting rests on the multiplication principle: the numbers 
  '1i0nrfbe5bb': R`计数依靠乘法原理：每一步的选择数相乘。`,
  // Rules for combined, independent and conditional events build
  '2f23y9h56n3': R`复合事件、独立事件和条件事件的规则都建立在“概率是结果所占的比例”之上。`,
  // Permutations and combinations count the outcomes when there 
  'c88bt9u9sf': R`排列和组合用于结果多到无法一一列出时的计数。`,
  // Variance, standard deviation and distributions go further th
  'cnqeudl3aq': R`方差、标准差和分布比极差和四分位数更进一步。`,
  // Distance, midpoint and gradient in the coordinate plane lead
  '64oncg04w1': R`坐标平面上的距离、中点和斜率引出直线和圆的方程。`,
  // The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is 
  '1n2jj8p5uea': R`圆的方程 $(x - a)^2 + (y - b)^2 = r^2$ 就是到圆心距离的勾股定理。`,
  // Constraints are linear inequalities, and together their grap
  'rsywiledqf': R`约束条件是一次不等式，它们的图像合起来构成可行域。`,
  // The boundaries of the feasible region and the level lines of
  '1hwyr5azmza': R`可行域的边界和目标函数的等值线都是直线。`,
  // “And”, “or” and “not” in logic match intersection, union and
  '1v8ndsdqg9i': R`逻辑中的“且”“或”“非”分别对应集合的交集、并集和补集。`,
  // The chain, product and quotient rules and implicit different
  '2fbt3zsv0xe': R`链式法则、乘积法则、商法则和隐函数求导扩展了基本求导法则。`,
  // Differentiating $e^x$ and $\ln x$, and logarithmic different
  '1oh2ya4wsji': R`对 $e^x$ 和 $\ln x$ 求导以及对数求导法都要用到指数和对数的运算法则。`,
  // Optimisation, related rates and curve sketching apply the ru
  '284ysrnl7bq': R`最优化、相关变化率和曲线作图把求导法则应用到实际问题中。`,
  // Substitution and integration by parts extend the basic antid
  '2gi28jy2yt1': R`换元法和分部积分法扩展了基本原函数。`,
  // Substitution reverses the chain rule, and integration by par
  '7zalhvgsd9': R`换元法是链式法则的逆，分部积分法是乘积法则的逆。`,
  // Areas, volumes of revolution and arc lengths all lead to int
  'lf24voao9c': R`面积、旋转体体积和弧长都归结为需要计算的积分。`,
  // Infinite series continue the sums of arithmetic and geometri
  '1hviqnspnff': R`无穷级数把等差、等比数列的求和无限延续下去。`,
  // A series converges when the limit of its partial sums exists
  '15f8uacuddq': R`当部分和的极限存在时，级数收敛。`,
  // A partial derivative differentiates with respect to one vari
  '2g4278341z3': R`偏导数对一个变量求导，同时把其他变量看作常数。`,
  // The gradient and directional derivatives are vectors.
  '19utg29r90g': R`梯度和方向导数都是向量。`,
  // A differential equation is an equation linking a function to
  '2ds3dtqg3pn': R`微分方程是把函数与其导数联系起来的方程。`,
  // Solving a differential equation usually ends with an integra
  'saspoe9ooe': R`解微分方程通常最后要做一次积分。`,
  // Linear algebra studies matrices as maps, with determinants, 
  'ot9xqwxvdo': R`线性代数把矩阵看作映射来研究，包括行列式、逆矩阵、秩和特征值。`,
  // Vector spaces generalise the vectors of geometry to any numb
  '1cobeg25pvp': R`向量空间把几何中的向量推广到任意维数。`,
  // Complex numbers first appear as the roots of a quadratic wit
  'tls844q11g': R`复数最早作为判别式为负的二次方程的根出现。`,
  // The polar form describes a complex number by its modulus and
  '1z3ue7jl9zc': R`极坐标形式用模和辐角来描述复数，要用到正弦和余弦。`,
  // The binomial, Poisson and normal distributions are built on 
  '19602jed52d': R`二项分布、泊松分布和正态分布都建立在概率规则和计数之上。`,
  // For a continuous distribution, a probability is an area unde
  '1mhdhr61iex': R`对连续分布而言，概率就是密度曲线下的面积。`,
  // Inference starts from a sample summarised by its mean and st
  '1lgg9vh00wv': R`统计推断从用均值和标准差概括的样本出发。`,
  // Confidence intervals and hypothesis tests rely on the normal
  '1s8qoieebkn': R`置信区间和假设检验依赖正态分布和 $t$ 分布。`,
  // Proofs, sets and relations in discrete mathematics are writt
  'pq7m9yqcpf': R`离散数学中的证明、集合和关系都用逻辑语言来表述。`,
  // Counting principles are a central part of discrete mathemati
  'ao11coj5na': R`计数原理是离散数学的核心部分。`,
  // Newton's method uses the derivative to home in on a root.
  '175iqzjsa7u': R`牛顿法利用导数一步步逼近方程的根。`,
  // The trapezoidal rule and Simpson's rule approximate definite
  '2cephu1nsk4': R`梯形法则和辛普森法则用来近似计算定积分。`,
  // Gradient, divergence and curl are built from partial derivat
  '23gedxxnvwc': R`梯度、散度和旋度由偏导数构成，曲线积分和曲面积分推广了重积分。`,
  // The Laplace transform turns a differential equation into an 
  '19mvnrfi5rk': R`拉普拉斯变换把微分方程变成代数方程。`,
  // The Laplace transform is an improper integral, often worked 
  'da64d9071l': R`拉普拉斯变换是一个反常积分，常用分部积分法计算。`,
});
