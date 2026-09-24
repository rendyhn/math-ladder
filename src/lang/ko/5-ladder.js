/* ladder: topic prerequisites and what they lead to */
addUI('ko', {
  ladderHead: R`이 단원의 위치`,
  buildsOn: R`바탕이 되는 단원`,
  leadsTo: R`이어지는 단원`,
  ladderStart: R`출발점: 먼저 배울 단원이 필요 없습니다.`,
  ladderTop: R`이 사다리 가지의 꼭대기입니다.`,
});
addT('ko', {
  // Column addition and subtraction line digits up by place valu
  'qeiew1mndp': R`세로셈 덧셈과 뺄셈은 자리에 맞춰 숫자를 정렬하고, 받아올림은 10을 다음 자리로 넘깁니다.`,
  // Multiplication is repeated addition, and division undoes mul
  '1jpm1intgmb': R`곱셈은 같은 수를 거듭 더하는 것이고, 나눗셈은 곱셈을 되돌리는 계산입니다.`,
  // The order of operations decides which of $+$, $-$, $\times$ 
  '5wxy40oljq': R`계산 순서는 긴 식에서 $+$, $-$, $\times$, $\div$ 중 무엇을 먼저 계산할지 정합니다.`,
  // Factors and multiples are the numbers that divide a number e
  '10sha3zlzp3': R`약수와 배수는 어떤 수를 나누어떨어지게 하는 수, 또는 그 수에 곱하여 얻는 수입니다.`,
  // Simplifying fractions and finding a common denominator use c
  '4wwa4bmv2r': R`약분과 통분에는 공약수와 최소공배수를 씁니다.`,
  // Decimals extend place value to the right of the ones place: 
  'sh9lbghpe9': R`소수는 자릿값을 일의 자리 오른쪽으로 넓힌 것입니다: 소수 첫째 자리, 둘째 자리, 셋째 자리.`,
  // A decimal is a fraction whose denominator is 10, 100, 1000 a
  'irkoozgpjt': R`소수는 분모가 10, 100, 1000 등인 분수입니다.`,
  // Percent means “out of a hundred”: 25% is the fraction $\frac
  'p34b5uh54s': R`백분율은 ‘100에 대한 몇’이라는 뜻으로, 25%는 분수 $\frac{25}{100} = \frac{1}{4}$입니다.`,
  // Percentages are converted to decimals to calculate with them
  '231i108op1x': R`백분율로 계산할 때는 소수로 바꿉니다: 가격의 8%는 $0.08 \times$ 가격입니다.`,
  // Converting between metric units multiplies or divides by 10,
  'o2gl9i6l2': R`미터법 단위 변환은 10, 100, 1000을 곱하거나 나누는 것으로, 소수점이 이동합니다.`,
  // The area of a rectangle is length times width.
  '25wcbpclu4': R`직사각형의 넓이는 가로 × 세로입니다.`,
  // Lengths and areas are measured in units such as cm and cm², 
  '2634ih96gsm': R`길이와 넓이는 cm, cm² 같은 단위로 재며, 계산 전에 단위를 맞춰야 합니다.`,
  // The volume of a prism is the area of its base times its heig
  'kwo8mlyup8': R`각기둥의 부피는 밑넓이 × 높이이고, 겉넓이는 모든 면의 넓이를 더한 것입니다.`,
  // Angle facts, such as “angles on a straight line add up to 18
  '1v95ytyiz1t': R`‘한 직선 위의 각의 합은 180°’ 같은 각의 성질은 각을 더하고 빼서 활용합니다.`,
  // The mean is the total of the values divided by how many valu
  'bcjde87onv': R`평균은 값들의 합을 값의 개수로 나눈 것입니다.`,
  // Integers extend the number line below zero; adding and subtr
  'uhivuskhe4': R`정수는 수직선을 0 아래로 늘인 것이며, 덧셈과 뺄셈은 부호를 고려해 같은 원리로 합니다.`,
  // A power is repeated multiplication: $2^5 = 2 \times 2 \times
  '14qn14hzx13': R`거듭제곱은 같은 수를 거듭 곱하는 것입니다: $2^5 = 2 \times 2 \times 2 \times 2 \times 2$.`,
  // Scientific notation writes a number as $a \times 10^n$, usin
  'hr39w4wzvv': R`과학적 표기법은 10의 거듭제곱을 이용해 수를 $a \times 10^n$ 꼴로 씁니다.`,
  // The number $a$ in $a \times 10^n$ is a decimal from 1 up to 
  'qonxs1x7d1': R`$a \times 10^n$의 $a$는 1 이상 10 미만인 소수입니다.`,
  // A ratio compares quantities the way a fraction does, and a p
  '23aa0qkt117': R`비는 분수처럼 양을 비교하고, 비례식은 두 분수가 같음을 나타냅니다.`,
  // Letters stand for numbers that may be negative, so expressio
  'r03wloegxg': R`문자는 음수일 수도 있는 수를 나타내므로, 식은 부호 규칙에 따라 간단히 합니다.`,
  // Expanding brackets and substituting values into an expressio
  '21h80w1us7d': R`괄호를 풀거나 식에 값을 대입할 때는 계산 순서를 따릅니다.`,
  // Solving an equation means simplifying the expressions on eac
  'dsfd6oq44q': R`방정식을 푼다는 것은 양변의 식을 간단히 한 뒤 연산을 거꾸로 되돌리는 것입니다.`,
  // Inequalities are solved like equations, except that the sign
  'chsc7bja9g': R`부등식은 방정식처럼 풀지만, 음수를 곱하거나 나누면 부등호의 방향이 바뀝니다.`,
  // Sets of factors, multiples and primes are typical first exam
  '1rnu9h0j44t': R`약수, 배수, 소수의 모임은 집합과 벤 다이어그램의 대표적인 첫 예입니다.`,
  // The graph of a linear equation in $x$ and $y$ is a straight 
  '1mojvmv6g25': R`$x$와 $y$에 대한 일차방정식의 그래프는 직선이며, 그 위의 모든 점이 해입니다.`,
  // The gradient of a line is a rate: the change in $y$ for each
  'ofsdmnc7db': R`직선의 기울기는 변화율입니다: $x$가 1만큼 변할 때 $y$의 변화량입니다.`,
  // Substitution and elimination turn a system into a single lin
  'zd8khoatau': R`대입법과 가감법은 연립방정식을 미지수가 하나인 일차방정식으로 바꿉니다.`,
  // The solution of a system of two linear equations is the poin
  '1euaco9nn3z': R`두 일차방정식으로 이루어진 연립방정식의 해는 두 직선의 교점입니다.`,
  // The theorem $a^2 + b^2 = c^2$ is worked with squares and squ
  '296jzhjbpfo': R`정리 $a^2 + b^2 = c^2$은 제곱과 제곱근으로 계산합니다.`,
  // The theorem is a fact about right-angled triangles and which
  '27afy2qgea8': R`이 정리는 직각삼각형에 관한 것이며, 어느 변이 빗변인지 알아야 합니다.`,
  // Circumference and the area of a circle extend perimeter and 
  '1c7m4ao6ge7': R`원의 둘레와 넓이는 둘레와 넓이를 곡선 도형으로 넓힌 것입니다.`,
  // Cylinders, cones and spheres are round, so their formulas us
  '4ai3wcl267': R`원기둥, 원뿔, 구는 둥근 입체이므로 공식에 $\pi$와 반지름이 들어갑니다.`,
  // The volume and surface area of prisms are extended to cylind
  'fxdb4tsyw2': R`각기둥의 부피와 겉넓이를 원기둥, 원뿔, 각뿔, 구로 넓힙니다.`,
  // Mean, median and mode are joined by measures of spread such 
  '9a6kx1e4yh': R`평균, 중앙값, 최빈값에 범위와 사분위수 같은 흩어진 정도의 지표가 더해집니다.`,
  // A probability is a fraction: favourable outcomes out of all 
  '17gd79svwx2': R`확률은 분수입니다: 일어날 가능성이 같은 모든 경우 중 원하는 경우의 비율입니다.`,
  // Profit, loss, discount, tax and interest are all percentages
  '6oqshsyd21': R`이익, 손해, 할인, 세금, 이자는 모두 어떤 금액의 백분율입니다.`,
  // The $n$th term of a pattern is an algebraic expression in $n
  's18kq836ov': R`규칙의 $n$번째 항은 $n$에 대한 식입니다.`,
  // Similar shapes have all pairs of corresponding sides in the 
  '1673zqtap3t': R`닮은 도형은 대응하는 변끼리의 비가 모두 같습니다.`,
  // Transformations and similarity keep angles the same, so angl
  'nhm1k0jf87': R`변환과 닮음은 각의 크기를 바꾸지 않으므로, 각의 성질로 닮은 도형을 알아봅니다.`,
  // Factorising and completing the square are skills of rearrang
  '2awcjz6ag0h': R`인수분해와 완전제곱식 만들기는 식을 변형하는 기술입니다.`,
  // Once a quadratic is factorised, each factor set to zero is a
  'axjxa88p8j': R`이차방정식을 인수분해하면, 각 인수를 0으로 놓은 식은 일차방정식이 됩니다.`,
  // The roots of a quadratic equation are where its parabola cro
  '3ai29ta3bd': R`이차방정식의 근은 포물선이 $x$축과 만나는 점입니다.`,
  // Graphs, intercepts and the coordinate plane carry over from 
  '2fe079f86oc': R`그래프, 절편, 좌표평면의 개념은 직선에서 포물선으로 이어집니다.`,
  // A linear function is the first example of a rule that gives 
  '1dyq2iw6ttf': R`일차함수는 각 입력에 출력이 정확히 하나씩 대응하는 규칙의 첫 번째 예입니다.`,
  // A logarithm is an exponent, so the laws of exponents become 
  'bhyxgzt11y': R`로그는 지수이므로 지수법칙이 로그의 성질이 됩니다.`,
  // The logarithm $\log_a x$ is the inverse function of the expo
  'dhaomm7cmc': R`로그 $\log_a x$는 지수함수 $a^x$의 역함수입니다.`,
  // Arithmetic and geometric sequences make number patterns prec
  '1i0ckjdy4m3': R`등차수열과 등비수열은 수의 규칙을 정확하게 나타내고 그 합의 공식을 줍니다.`,
  // Trigonometric ratios compare the sides of a right-angled tri
  '2dkcig1f7s5': R`삼각비는 직각삼각형의 변을 비교하며, 단위원에서 $\sin^2\theta + \cos^2\theta = 1$은 피타고라스 정리입니다.`,
  // A trigonometric ratio depends only on the angle because righ
  '28o7ie6opej': R`각이 같은 직각삼각형은 닮음이므로 삼각비는 각에만 의존합니다.`,
  // Identities are built from the definitions of sine, cosine an
  '11vomgqg97n': R`삼각함수의 항등식은 단위원에서의 사인, 코사인, 탄젠트의 정의로부터 얻습니다.`,
  // Many trigonometric equations turn into a quadratic in $\sin 
  '1aaktv1yqz7': R`많은 삼각방정식은 $\sin x$나 $\cos x$에 대한 이차방정식이 됩니다.`,
  // The sine rule and cosine rule extend the trigonometric ratio
  '13me5uymk2c': R`사인법칙과 코사인법칙은 삼각비를 직각이 없는 삼각형으로 넓힙니다.`,
  // A quadratic is a polynomial of degree 2; polynomial division
  'da1pvgcuq2': R`이차식은 2차 다항식이며, 다항식의 나눗셈과 나머지정리는 그 인수분해를 일반화합니다.`,
  // A system of linear equations can be written as one matrix eq
  'e0bc8izwug': R`연립일차방정식은 하나의 행렬방정식 $AX = B$로 쓸 수 있고 역행렬로 풉니다.`,
  // The magnitude of a vector is found with Pythagoras' theorem.
  '12j5n3poamr': R`벡터의 크기는 피타고라스 정리로 구합니다.`,
  // The angle between two vectors, and splitting a vector into c
  '1rc52s5n9t0': R`두 벡터가 이루는 각과 벡터를 성분으로 나누는 데 삼각비를 씁니다.`,
  // A limit describes the value a function's output approaches a
  '15k09f0soai': R`극한은 입력이 어떤 점에 가까워질 때 함수의 값이 가까워지는 값을 나타냅니다.`,
  // The derivative is defined as a limit: the gradient between t
  '2cxg9hybda1': R`미분계수는 극한으로 정의됩니다: 두 점이 서로 가까워질 때 두 점 사이의 기울기입니다.`,
  // A derivative is the gradient of the tangent line, extending 
  '201djzmlsb3': R`도함수는 접선의 기울기로, 직선의 기울기를 곡선으로 넓힌 것입니다.`,
  // Integration reverses differentiation; this is the Fundamenta
  'ruft2tqdak': R`적분은 미분의 역연산이며, 이것이 미적분의 기본정리입니다.`,
  // A definite integral measures the area under a curve by addin
  'sp8kuu3a74': R`정적분은 가느다란 직사각형을 더해서 곡선 아래의 넓이를 잽니다.`,
  // Counting rests on the multiplication principle: the numbers 
  '1i0nrfbe5bb': R`경우의 수는 곱의 법칙에 바탕을 둡니다: 각 단계의 선택 가짓수를 곱합니다.`,
  // Rules for combined, independent and conditional events build
  '2f23y9h56n3': R`합사건, 독립사건, 조건부확률의 규칙은 확률을 경우의 비율로 보는 데서 출발합니다.`,
  // Permutations and combinations count the outcomes when there 
  'c88bt9u9sf': R`순열과 조합은 경우가 너무 많아 다 나열할 수 없을 때 셉니다.`,
  // Variance, standard deviation and distributions go further th
  'cnqeudl3aq': R`분산, 표준편차, 분포는 범위와 사분위수보다 한 걸음 더 나아갑니다.`,
  // Distance, midpoint and gradient in the coordinate plane lead
  '64oncg04w1': R`좌표평면에서의 거리, 중점, 기울기는 직선과 원의 방정식으로 이어집니다.`,
  // The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is 
  '1n2jj8p5uea': R`원의 방정식 $(x - a)^2 + (y - b)^2 = r^2$은 중심까지의 거리에 대한 피타고라스 정리입니다.`,
  // Constraints are linear inequalities, and together their grap
  'rsywiledqf': R`제약 조건은 일차부등식이며, 그 그래프들이 함께 실행 가능 영역을 이룹니다.`,
  // The boundaries of the feasible region and the level lines of
  '1hwyr5azmza': R`실행 가능 영역의 경계와 목적함수의 등위선은 직선입니다.`,
  // “And”, “or” and “not” in logic match intersection, union and
  '1v8ndsdqg9i': R`논리의 ‘그리고’, ‘또는’, ‘아니다’는 집합의 교집합, 합집합, 여집합에 대응합니다.`,
  // The chain, product and quotient rules and implicit different
  '2fbt3zsv0xe': R`연쇄법칙, 곱의 법칙, 몫의 법칙과 음함수 미분은 기본 미분법을 넓힌 것입니다.`,
  // Differentiating $e^x$ and $\ln x$, and logarithmic different
  '1oh2ya4wsji': R`$e^x$와 $\ln x$의 미분, 로그 미분법에는 지수와 로그의 성질을 씁니다.`,
  // Optimisation, related rates and curve sketching apply the ru
  '284ysrnl7bq': R`최적화, 관련 변화율, 곡선 그리기는 미분법을 실제 문제에 적용합니다.`,
  // Substitution and integration by parts extend the basic antid
  '2gi28jy2yt1': R`치환적분과 부분적분은 기본 부정적분을 넓힌 것입니다.`,
  // Substitution reverses the chain rule, and integration by par
  '7zalhvgsd9': R`치환적분은 연쇄법칙의 역이고, 부분적분은 곱의 미분법의 역입니다.`,
  // Areas, volumes of revolution and arc lengths all lead to int
  'lf24voao9c': R`넓이, 회전체의 부피, 곡선의 길이는 모두 계산해야 할 적분으로 이어집니다.`,
  // Infinite series continue the sums of arithmetic and geometri
  '1hviqnspnff': R`무한급수는 등차수열과 등비수열의 합을 끝없이 이어 간 것입니다.`,
  // A series converges when the limit of its partial sums exists
  '15f8uacuddq': R`부분합의 극한이 존재하면 급수는 수렴합니다.`,
  // A partial derivative differentiates with respect to one vari
  '2g4278341z3': R`편미분은 다른 변수를 상수로 보고 한 변수에 대해 미분합니다.`,
  // The gradient and directional derivatives are vectors.
  '19utg29r90g': R`기울기 벡터(그래디언트)와 방향도함수는 벡터입니다.`,
  // A differential equation is an equation linking a function to
  '2ds3dtqg3pn': R`미분방정식은 함수와 그 도함수를 연결하는 방정식입니다.`,
  // Solving a differential equation usually ends with an integra
  'saspoe9ooe': R`미분방정식을 풀면 대개 마지막에 적분을 하게 됩니다.`,
  // Linear algebra studies matrices as maps, with determinants, 
  'ot9xqwxvdo': R`선형대수는 행렬을 사상으로 보고 행렬식, 역행렬, 계수, 고윳값을 다룹니다.`,
  // Vector spaces generalise the vectors of geometry to any numb
  '1cobeg25pvp': R`벡터공간은 기하의 벡터를 임의의 차원으로 일반화합니다.`,
  // Complex numbers first appear as the roots of a quadratic wit
  'tls844q11g': R`복소수는 판별식이 음수인 이차방정식의 근으로 처음 나타납니다.`,
  // The polar form describes a complex number by its modulus and
  '1z3ue7jl9zc': R`극형식은 절댓값과 편각으로 복소수를 나타내며, 사인과 코사인을 씁니다.`,
  // The binomial, Poisson and normal distributions are built on 
  '19602jed52d': R`이항분포, 푸아송 분포, 정규분포는 확률의 규칙과 경우의 수에 바탕을 둡니다.`,
  // For a continuous distribution, a probability is an area unde
  '1mhdhr61iex': R`연속확률분포에서 확률은 확률밀도곡선 아래의 넓이입니다.`,
  // Inference starts from a sample summarised by its mean and st
  '1lgg9vh00wv': R`통계적 추론은 평균과 표준편차로 요약한 표본에서 시작합니다.`,
  // Confidence intervals and hypothesis tests rely on the normal
  '1s8qoieebkn': R`신뢰구간과 가설검정은 정규분포와 $t$분포에 바탕을 둡니다.`,
  // Proofs, sets and relations in discrete mathematics are writt
  'pq7m9yqcpf': R`이산수학의 증명, 집합, 관계는 논리의 언어로 씁니다.`,
  // Counting principles are a central part of discrete mathemati
  'ao11coj5na': R`세는 원리는 이산수학의 핵심입니다.`,
  // Newton's method uses the derivative to home in on a root.
  '175iqzjsa7u': R`뉴턴 방법은 도함수를 이용해 근에 조금씩 다가갑니다.`,
  // The trapezoidal rule and Simpson's rule approximate definite
  '2cephu1nsk4': R`사다리꼴 공식과 심프슨 공식은 정적분의 근삿값을 구합니다.`,
  // Gradient, divergence and curl are built from partial derivat
  '23gedxxnvwc': R`기울기, 발산, 회전은 편도함수로 만들어지며, 선적분과 면적분은 중적분을 넓힌 것입니다.`,
  // The Laplace transform turns a differential equation into an 
  '19mvnrfi5rk': R`라플라스 변환은 미분방정식을 대수방정식으로 바꿉니다.`,
  // The Laplace transform is an improper integral, often worked 
  'da64d9071l': R`라플라스 변환은 이상적분이며, 흔히 부분적분으로 계산합니다.`,
});
