/* ladder: topic prerequisites and what they lead to */
addUI('ja', {
  ladderHead: R`この単元の位置`,
  buildsOn: R`土台となる単元`,
  leadsTo: R`次につながる単元`,
  ladderStart: R`出発点：前に学ぶ単元は必要ありません。`,
  ladderTop: R`このはしごの枝の頂上です。`,
});
addT('ja', {
  // Column addition and subtraction line digits up by place valu
  'qeiew1mndp': R`筆算のたし算・ひき算は位をそろえて数字を並べ、くり上がりで 10 を次の位へ送ります。`,
  // Multiplication is repeated addition, and division undoes mul
  '1jpm1intgmb': R`かけ算は同じ数のたし算のくり返しで、わり算はかけ算をもとに戻す計算です。`,
  // The order of operations decides which of $+$, $-$, $\times$ 
  '5wxy40oljq': R`計算の順序は、長い式の中で $+$、$-$、$\times$、$\div$ のどれを先に計算するかを決めます。`,
  // Factors and multiples are the numbers that divide a number e
  '10sha3zlzp3': R`約数と倍数は、ある数をわり切る数、またはその数に整数をかけてできる数です。`,
  // Simplifying fractions and finding a common denominator use c
  '4wwa4bmv2r': R`約分と通分には、公約数と最小公倍数を使います。`,
  // Decimals extend place value to the right of the ones place: 
  'sh9lbghpe9': R`小数は位の考え方を一の位より右へ広げたものです：$\frac{1}{10}$ の位、$\frac{1}{100}$ の位、$\frac{1}{1000}$ の位。`,
  // A decimal is a fraction whose denominator is 10, 100, 1000 a
  'irkoozgpjt': R`小数は、分母が 10、100、1000 などの分数です。`,
  // Percent means “out of a hundred”: 25% is the fraction $\frac
  'p34b5uh54s': R`百分率は「100 あたりいくつ」という意味で、25% は分数 $\frac{25}{100} = \frac{1}{4}$ です。`,
  // Percentages are converted to decimals to calculate with them
  '231i108op1x': R`百分率で計算するときは小数に直します：値段の 8% は $0.08 \times$ 値段です。`,
  // Converting between metric units multiplies or divides by 10,
  'o2gl9i6l2': R`メートル法の単位の換算は 10、100、1000 でかけたりわったりすることで、小数点が移動します。`,
  // The area of a rectangle is length times width.
  '25wcbpclu4': R`長方形の面積はたて × よこです。`,
  // Lengths and areas are measured in units such as cm and cm², 
  '2634ih96gsm': R`長さや面積は cm や cm² などの単位で測り、計算の前に単位をそろえる必要があります。`,
  // The volume of a prism is the area of its base times its heig
  'kwo8mlyup8': R`角柱の体積は底面積 × 高さで、表面積はすべての面の面積の和です。`,
  // Angle facts, such as “angles on a straight line add up to 18
  '1v95ytyiz1t': R`「一直線上の角の和は 180°」のような角の性質は、角のたし算・ひき算で使います。`,
  // The mean is the total of the values divided by how many valu
  'bcjde87onv': R`平均値は、値の合計を値の個数でわったものです。`,
  // Integers extend the number line below zero; adding and subtr
  'uhivuskhe4': R`整数は数直線を 0 より下へのばしたもので、たし算・ひき算は符号に気をつけて同じ考え方で行います。`,
  // A power is repeated multiplication: $2^5 = 2 \times 2 \times
  '14qn14hzx13': R`累乗は同じ数のかけ算のくり返しです：$2^5 = 2 \times 2 \times 2 \times 2 \times 2$。`,
  // Scientific notation writes a number as $a \times 10^n$, usin
  'hr39w4wzvv': R`科学的記数法は、10 の累乗を使って数を $a \times 10^n$ の形で表します。`,
  // The number $a$ in $a \times 10^n$ is a decimal from 1 up to 
  'qonxs1x7d1': R`$a \times 10^n$ の $a$ は 1 以上 10 未満の小数です。`,
  // A ratio compares quantities the way a fraction does, and a p
  '23aa0qkt117': R`比は分数と同じように量を比べるもので、比例式は 2 つの分数が等しいことを表します。`,
  // Letters stand for numbers that may be negative, so expressio
  'r03wloegxg': R`文字は負の数も表すので、式の計算は正負の数の計算のきまりにしたがいます。`,
  // Expanding brackets and substituting values into an expressio
  '21h80w1us7d': R`かっこをはずしたり、式に値を代入したりするときは計算の順序にしたがいます。`,
  // Solving an equation means simplifying the expressions on eac
  'dsfd6oq44q': R`方程式を解くとは、両辺の式を簡単にしてから、計算を逆にたどることです。`,
  // Inequalities are solved like equations, except that the sign
  'chsc7bja9g': R`不等式は方程式と同じように解きますが、負の数をかけたりわったりすると不等号の向きが変わります。`,
  // Sets of factors, multiples and primes are typical first exam
  '1rnu9h0j44t': R`約数・倍数・素数の集まりは、集合とベン図の最初の典型的な例です。`,
  // The graph of a linear equation in $x$ and $y$ is a straight 
  '1mojvmv6g25': R`$x$ と $y$ の一次方程式のグラフは直線で、その上のどの点も解になります。`,
  // The gradient of a line is a rate: the change in $y$ for each
  'ofsdmnc7db': R`直線の傾きは変化の割合で、$x$ が 1 増えるときの $y$ の増加量です。`,
  // Substitution and elimination turn a system into a single lin
  'zd8khoatau': R`代入法と加減法で、連立方程式を 1 つの文字の一次方程式にします。`,
  // The solution of a system of two linear equations is the poin
  '1euaco9nn3z': R`2 つの一次方程式でできた連立方程式の解は、2 本の直線の交点です。`,
  // The theorem $a^2 + b^2 = c^2$ is worked with squares and squ
  '296jzhjbpfo': R`定理 $a^2 + b^2 = c^2$ は平方と平方根を使って計算します。`,
  // The theorem is a fact about right-angled triangles and which
  '27afy2qgea8': R`この定理は直角三角形についてのもので、どの辺が斜辺かを見分けることが大切です。`,
  // Circumference and the area of a circle extend perimeter and 
  '1c7m4ao6ge7': R`円周の長さと円の面積は、周の長さと面積を曲線の図形に広げたものです。`,
  // Cylinders, cones and spheres are round, so their formulas us
  '4ai3wcl267': R`円柱・円錐・球は丸い形なので、公式に $\pi$ と半径が出てきます。`,
  // The volume and surface area of prisms are extended to cylind
  'fxdb4tsyw2': R`角柱の体積と表面積の考え方を、円柱・円錐・角錐・球に広げます。`,
  // Mean, median and mode are joined by measures of spread such 
  '9a6kx1e4yh': R`平均値・中央値・最頻値に、範囲や四分位数などの散らばりの指標が加わります。`,
  // A probability is a fraction: favourable outcomes out of all 
  '17gd79svwx2': R`確率は分数です：起こりうるすべての同様に確からしい場合のうち、ことがらの起こる場合の割合です。`,
  // Profit, loss, discount, tax and interest are all percentages
  '6oqshsyd21': R`利益・損失・割引・税・利息はどれも、ある金額の百分率です。`,
  // The $n$th term of a pattern is an algebraic expression in $n
  's18kq836ov': R`規則的に並ぶ数の $n$ 番目の項は、$n$ を使った式で表せます。`,
  // Similar shapes have all pairs of corresponding sides in the 
  '1673zqtap3t': R`相似な図形では、対応する辺の組の比がすべて等しくなります。`,
  // Transformations and similarity keep angles the same, so angl
  'nhm1k0jf87': R`移動や相似では角の大きさが変わらないので、角の性質から相似な図形を見分けられます。`,
  // Factorising and completing the square are skills of rearrang
  '2awcjz6ag0h': R`因数分解と平方完成は、式を変形する技能です。`,
  // Once a quadratic is factorised, each factor set to zero is a
  'axjxa88p8j': R`二次方程式を因数分解すれば、各因数を 0 とおいた式は一次方程式になります。`,
  // The roots of a quadratic equation are where its parabola cro
  '3ai29ta3bd': R`二次方程式の解は、放物線が $x$ 軸と交わる点です。`,
  // Graphs, intercepts and the coordinate plane carry over from 
  '2fe079f86oc': R`グラフ、切片、座標平面の考え方は、直線から放物線へと引き継がれます。`,
  // A linear function is the first example of a rule that gives 
  '1dyq2iw6ttf': R`一次関数は、入力 1 つに出力がちょうど 1 つ決まる規則の最初の例です。`,
  // A logarithm is an exponent, so the laws of exponents become 
  'bhyxgzt11y': R`対数は指数なので、指数法則がそのまま対数の性質になります。`,
  // The logarithm $\log_a x$ is the inverse function of the expo
  'dhaomm7cmc': R`対数 $\log_a x$ は指数関数 $a^x$ の逆関数です。`,
  // Arithmetic and geometric sequences make number patterns prec
  '1i0ckjdy4m3': R`等差数列と等比数列は数の規則性を正確に表し、その和の公式を与えます。`,
  // Trigonometric ratios compare the sides of a right-angled tri
  '2dkcig1f7s5': R`三角比は直角三角形の辺の比で、単位円の上では $\sin^2\theta + \cos^2\theta = 1$ が三平方の定理そのものです。`,
  // A trigonometric ratio depends only on the angle because righ
  '28o7ie6opej': R`直角三角形は角が等しければ相似なので、三角比は角だけで決まります。`,
  // Identities are built from the definitions of sine, cosine an
  '11vomgqg97n': R`三角関数の公式は、単位円上での正弦・余弦・正接の定義から導かれます。`,
  // Many trigonometric equations turn into a quadratic in $\sin 
  '1aaktv1yqz7': R`多くの三角方程式は、$\sin x$ や $\cos x$ についての二次方程式になります。`,
  // The sine rule and cosine rule extend the trigonometric ratio
  '13me5uymk2c': R`正弦定理と余弦定理は、三角比を直角のない三角形に広げます。`,
  // A quadratic is a polynomial of degree 2; polynomial division
  'da1pvgcuq2': R`二次式は 2 次の多項式で、多項式の割り算と剰余の定理はその因数分解を一般化します。`,
  // A system of linear equations can be written as one matrix eq
  'e0bc8izwug': R`連立一次方程式は 1 つの行列の方程式 $AX = B$ として書け、逆行列で解けます。`,
  // The magnitude of a vector is found with Pythagoras' theorem.
  '12j5n3poamr': R`ベクトルの大きさは三平方の定理で求めます。`,
  // The angle between two vectors, and splitting a vector into c
  '1rc52s5n9t0': R`2 つのベクトルのなす角や、ベクトルの成分への分解には三角比を使います。`,
  // A limit describes the value a function's output approaches a
  '15k09f0soai': R`極限は、入力がある値に近づくとき関数の値が近づいていく値を表します。`,
  // The derivative is defined as a limit: the gradient between t
  '2cxg9hybda1': R`微分係数は極限として定義されます：2 点を近づけたときの 2 点間の傾きです。`,
  // A derivative is the gradient of the tangent line, extending 
  '201djzmlsb3': R`導関数は接線の傾きで、直線の傾きを曲線に広げたものです。`,
  // Integration reverses differentiation; this is the Fundamenta
  'ruft2tqdak': R`積分は微分の逆の計算で、これが微分積分学の基本定理です。`,
  // A definite integral measures the area under a curve by addin
  'sp8kuu3a74': R`定積分は、細い長方形を足し合わせて曲線の下の面積を測ります。`,
  // Counting rests on the multiplication principle: the numbers 
  '1i0nrfbe5bb': R`場合の数は積の法則にもとづきます：各段階の選び方の数をかけ合わせます。`,
  // Rules for combined, independent and conditional events build
  '2f23y9h56n3': R`和事象・独立な事象・条件付き確率のきまりは、確率を場合の数の割合として見ることにもとづきます。`,
  // Permutations and combinations count the outcomes when there 
  'c88bt9u9sf': R`順列と組合せは、書き出しきれないほど多い場合の数を数えます。`,
  // Variance, standard deviation and distributions go further th
  'cnqeudl3aq': R`分散・標準偏差・分布は、範囲や四分位数よりさらに進んだ内容です。`,
  // Distance, midpoint and gradient in the coordinate plane lead
  '64oncg04w1': R`座標平面上の距離・中点・傾きから、直線と円の方程式が導かれます。`,
  // The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is 
  '1n2jj8p5uea': R`円の方程式 $(x - a)^2 + (y - b)^2 = r^2$ は、中心までの距離についての三平方の定理です。`,
  // Constraints are linear inequalities, and together their grap
  'rsywiledqf': R`制約条件は一次不等式で、それらのグラフを合わせると実行可能領域になります。`,
  // The boundaries of the feasible region and the level lines of
  '1hwyr5azmza': R`実行可能領域の境界と目的関数の等高線は直線です。`,
  // “And”, “or” and “not” in logic match intersection, union and
  '1v8ndsdqg9i': R`論理の「かつ」「または」「でない」は、集合の共通部分・和集合・補集合に対応します。`,
  // The chain, product and quotient rules and implicit different
  '2fbt3zsv0xe': R`合成関数・積・商の微分法と陰関数の微分は、基本的な微分の公式を広げたものです。`,
  // Differentiating $e^x$ and $\ln x$, and logarithmic different
  '1oh2ya4wsji': R`$e^x$ や $\ln x$ の微分、対数微分法には、指数と対数の性質を使います。`,
  // Optimisation, related rates and curve sketching apply the ru
  '284ysrnl7bq': R`最適化、関連する変化率、グラフの概形は、微分法を実際の問題に応用します。`,
  // Substitution and integration by parts extend the basic antid
  '2gi28jy2yt1': R`置換積分と部分積分は、基本的な原始関数を広げたものです。`,
  // Substitution reverses the chain rule, and integration by par
  '7zalhvgsd9': R`置換積分は合成関数の微分の逆、部分積分は積の微分の逆です。`,
  // Areas, volumes of revolution and arc lengths all lead to int
  'lf24voao9c': R`面積・回転体の体積・曲線の長さは、どれも計算すべき積分に帰着します。`,
  // Infinite series continue the sums of arithmetic and geometri
  '1hviqnspnff': R`無限級数は、等差数列や等比数列の和を限りなく続けたものです。`,
  // A series converges when the limit of its partial sums exists
  '15f8uacuddq': R`部分和の極限が存在するとき、級数は収束します。`,
  // A partial derivative differentiates with respect to one vari
  '2g4278341z3': R`偏微分は、ほかの変数を定数とみなして 1 つの変数について微分します。`,
  // The gradient and directional derivatives are vectors.
  '19utg29r90g': R`勾配と方向微分係数はベクトルです。`,
  // A differential equation is an equation linking a function to
  '2ds3dtqg3pn': R`微分方程式は、関数とその導関数を結びつける方程式です。`,
  // Solving a differential equation usually ends with an integra
  'saspoe9ooe': R`微分方程式を解くと、たいてい最後は積分になります。`,
  // Linear algebra studies matrices as maps, with determinants, 
  'ot9xqwxvdo': R`線形代数は行列を写像として調べ、行列式・逆行列・階数・固有値を扱います。`,
  // Vector spaces generalise the vectors of geometry to any numb
  '1cobeg25pvp': R`ベクトル空間は、図形のベクトルを何次元にでも一般化します。`,
  // Complex numbers first appear as the roots of a quadratic wit
  'tls844q11g': R`複素数は、判別式が負の二次方程式の解として初めて現れます。`,
  // The polar form describes a complex number by its modulus and
  '1z3ue7jl9zc': R`極形式は、絶対値と偏角で複素数を表し、正弦と余弦を使います。`,
  // The binomial, Poisson and normal distributions are built on 
  '19602jed52d': R`二項分布・ポアソン分布・正規分布は、確率のきまりと場合の数にもとづいています。`,
  // For a continuous distribution, a probability is an area unde
  '1mhdhr61iex': R`連続型の分布では、確率は確率密度曲線の下の面積です。`,
  // Inference starts from a sample summarised by its mean and st
  '1lgg9vh00wv': R`推測統計は、平均と標準偏差でまとめた標本から出発します。`,
  // Confidence intervals and hypothesis tests rely on the normal
  '1s8qoieebkn': R`信頼区間と仮説検定は、正規分布と $t$ 分布にもとづいています。`,
  // Proofs, sets and relations in discrete mathematics are writt
  'pq7m9yqcpf': R`離散数学の証明・集合・関係は、論理の言葉で書かれます。`,
  // Counting principles are a central part of discrete mathemati
  'ao11coj5na': R`数え上げの原理は離散数学の中心的な部分です。`,
  // Newton's method uses the derivative to home in on a root.
  '175iqzjsa7u': R`ニュートン法は、導関数を使って解に少しずつ近づきます。`,
  // The trapezoidal rule and Simpson's rule approximate definite
  '2cephu1nsk4': R`台形公式とシンプソンの公式は定積分の近似値を求めます。`,
  // Gradient, divergence and curl are built from partial derivat
  '23gedxxnvwc': R`勾配・発散・回転は偏導関数から作られ、線積分と面積分は重積分を広げたものです。`,
  // The Laplace transform turns a differential equation into an 
  '19mvnrfi5rk': R`ラプラス変換は、微分方程式を代数方程式に変えます。`,
  // The Laplace transform is an improper integral, often worked 
  'da64d9071l': R`ラプラス変換は広義積分で、部分積分で計算することがよくあります。`,
});
