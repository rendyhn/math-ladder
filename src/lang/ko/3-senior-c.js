/* 한국어 — 고등학교 (다항식 → 적분) */
addT('ko', {
  // polynomials
  '1dv82xempy': R`
<p><b>다항식</b>은 지수가 0 이상의 정수인 항 $a_n x^n + \cdots + a_1 x + a_0$의 합입니다. <b>차수</b>는 가장 큰 지수이고, $a_n$은 <b>최고차항의 계수</b>입니다. 다항식을 곱하면 차수는 더해지고 최고차항의 계수는 곱해집니다.</p>
<h3>나눗셈</h3>
<p>$P(x)$를 $(x - a)$로 나누면 몫 $Q(x)$와 나머지 $R$을 얻습니다: $P(x) = (x - a)Q(x) + R$. <b>조립제법</b>은 계수만으로 빠르게 계산하는 방법입니다.</p>
⟦0⟧
⟦1⟧
<h3>삼차방정식의 근</h3>
<p>세 근이 $r_1, r_2, r_3$인 $ax^3 + bx^2 + cx + d = 0$에 대하여:</p>
⟦2⟧
⟦3⟧`,
  '16v6jrymjv2': R`<p>조립제법으로 $(x^3 - 4x^2 + x + 6) \div (x - 2)$를 계산합니다:</p>⟦0⟧<p>몫은 $x^2 - 2x - 3$, 나머지는 0.</p>`,
  'agfsjitvd': R`<p><b>나머지정리:</b> $P(x)$를 $(x - a)$로 나눈 나머지는 $P(a)$입니다.</p><p><b>인수정리:</b> $(x - a)$가 $P(x)$의 인수인 것은 $P(a) = 0$인 것과 같습니다.</p>`,
  'sqyu8zjvtn': R`<p>$(x + 3)$으로 나눈다는 것은 $a = -3$이라는 뜻입니다: $P(3)$이 아니라 $P(-3)$을 계산하시오.</p>`,
  'u4dg9by4un': R`$P(x) = ⟦0⟧$를 $(x ⟦1⟧)$로 나눈 나머지를 구하시오.`,
  '212dl6gy5gu': R`나머지정리에 의해 나머지는 $P(⟦0⟧) = ⟦1⟧(⟦2⟧)^3 ⟦3⟧(⟦4⟧)^2 ⟦5⟧(⟦6⟧) ⟦7⟧ = ⟦8⟧$입니다.`,
  '20swcfjanfa': R`$(x ⟦0⟧)$는 $P(x) = ⟦1⟧$의 인수입니다. $k$를 구하시오.`,
  '2cscisbqmyg': R`인수정리에 의해 $P(⟦0⟧) = 0$: $⟦1⟧ ⟦2⟧ ⟦3⟧k ⟦4⟧ = 0$이므로 $⟦5⟧k = ⟦6⟧$, $k = ⟦7⟧$.`,
  '28czzdou58n': R`$ax^3 + bx^2 + cx + d = 0$에서 ⟦0⟧.`,
  '1uakfcji416': R`세 근의 합은 $-\frac{b}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1cl4qeneyhq': R`세 근의 곱은 $-\frac{d}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1h1il3vuozs': R`$⟦0⟧$를 $(x ⟦1⟧)$로 나누시오. 몫은 무엇입니까?`,
  '1432prhuyml': R`계수 ⟦1⟧에 ⟦0⟧로 조립제법을 하면 ⟦2⟧이고 나머지가 0이므로 몫은 $⟦3⟧$입니다.`,
  '1v0pp8s5fwz': R`$⟦0⟧$에서 곱의 차수는 얼마입니까?`,
  '79jcaurtjl': R`$⟦0⟧$에서 곱의 최고차항의 계수는 얼마입니까?`,
  'lgw9ke18qe': R`$⟦0⟧$에서 곱의 상수항은 얼마입니까?`,
  '18bitz7l1ry': R`곱하면 차수가 더해집니다: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '1x77krhanqb': R`최고차항끼리 곱하면 $⟦0⟧ \cdot ⟦1⟧ = ⟦2⟧$이므로 최고차항의 계수는 ⟦3⟧입니다.`,
  '1uusi8yg5sk': R`상수항은 상수항끼리의 곱입니다: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,

  // matrices
  '104wb071wss': R`
<p><b>행렬</b>은 수를 직사각형 모양으로 배열한 것입니다. $m \times n$ 행렬은 $m$개의 행과 $n$개의 열을 가지며, $a_{ij}$는 제$i$행 제$j$열의 성분입니다.</p>
<h3>연산</h3>
<ul><li><b>덧셈/뺄셈</b>: 성분끼리 계산(같은 꼴일 때만).</li><li><b>실수배</b>: 모든 성분에 곱합니다.</li><li><b>곱</b> $AB$: $(i, j)$ 성분은 $A$의 제$i$행과 $B$의 제$j$열의 곱의 합입니다. ($A$의 열의 수) = ($B$의 행의 수)여야 하며, $m \times n$ 행렬과 $n \times p$ 행렬의 곱은 $m \times p$ 행렬입니다.</li></ul>
⟦0⟧
⟦1⟧
<h3>행렬식과 역행렬 (2 × 2)</h3>
⟦2⟧
<p>$\det A = 0$이면 역행렬이 <b>존재하지 않습니다</b>. 역행렬로 연립방정식을 풀 수 있습니다: $AX = B \Rightarrow X = A^{-1}B$.</p>
⟦3⟧`,
  '4bk6hc9is8': R`<p>행렬의 곱셈은 <b>교환법칙이 성립하지 않습니다</b>: 보통 $AB \ne BA$입니다.</p>`,
  '4ckwr8umw4': R`<p>역행렬: $a$와 $d$를 <b>바꾸고</b>, $b$와 $c$의 <b>부호를 바꾼</b> 다음 행렬식으로 나눕니다.</p>`,
  '1h6gnxjh2g6': R`$⟦0⟧$의 행렬식을 구하시오.`,
  '1gfhimaac6g': R`$A = ⟦0⟧$, $B = ⟦1⟧$일 때 $AB$를 구하시오.`,
  '1dy8pvpnep7': R`네 성분을 행 순서대로 입력하시오. 예: 19, 22, 43, 50`,
  'xfxhg5b3o2': R`행과 열의 곱: $AB = \begin{pmatrix} ⟦0⟧\cdot⟦1⟧ + ⟦2⟧\cdot⟦3⟧ & \cdots \\ \cdots & \cdots \end{pmatrix} = ⟦4⟧$.`,
  '27lrdslcvs8': R`$⟦0⟧$의 역행렬을 구하시오.`,
  'ea7d95erhp': R`네 성분을 행 순서대로 입력하시오.`,
  '2euzxos9ar7': R`$\det = (⟦0⟧)(⟦1⟧) - (⟦2⟧)(⟦3⟧) = ⟦4⟧$. $a$와 $d$를 바꾸고, $b$와 $c$의 부호를 바꾸고, ⟦5⟧로 나누면 $⟦6⟧$.`,
  '2fs8fio5g5w': R`$x$가 어떤 값일 때 $⟦0⟧$의 역행렬이 존재하지 않습니까?`,
  'et7lf19q4x': R`역행렬이 없으려면 $\det = 0$: $⟦0⟧x - (⟦1⟧)(⟦2⟧) = 0$이므로 $x = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '2280y15nq4f': R`$A = ⟦0⟧$, $B = ⟦1⟧$일 때 $⟦4⟧A - ⟦5⟧B$의 제⟦2⟧행 제⟦3⟧열의 성분을 구하시오.`,
  'h3p6r4d6o': R`$A = ⟦0⟧$, $B = ⟦1⟧$일 때 $AB$의 제⟦2⟧행 제⟦3⟧열의 성분을 구하시오.`,
  'xdj657lej': R`$A$의 제⟦0⟧행과 $B$의 제⟦1⟧열: $⟦2⟧ = ⟦3⟧$. ($2 \times 3$ 행렬과 $3 \times 2$ 행렬의 곱은 $2 \times 2$ 행렬입니다.)`,

  // vectors
  '1gljxtukffx': R`
<p><b>벡터</b>는 크기와 방향을 가집니다. 성분으로 $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ 또는 $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$로 나타냅니다. $P$에서 $Q$로 가는 벡터는 $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$입니다.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  'i7t2goihqv': R`크기`,
  '1czax49eh4c': R`덧셈`,
  'q2ntocofkn': R`성분끼리 더함`,
  'oswzhgqxwz': R`실수배`,
  '1bnyaikchfp': R`$k\mathbf{a}$: 각 성분에 $k$를 곱함`,
  '28hldv2q33s': R`단위벡터`,
  '214ftyeo0vg': R`내적`,
  '1xghg9dwzeq': R`$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta \qquad\Longrightarrow\qquad \cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$<p>영벡터가 아닌 두 벡터가 <b>수직</b>인 것은 $\mathbf{a}\cdot\mathbf{b} = 0$인 것과 같습니다.</p>`,
  '1w9baxb120w': R`<p>$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$: $\mathbf{a}\cdot\mathbf{b} = 15 + 48 = 63$, $|\mathbf{a}| = 5$, $|\mathbf{b}| = 13$이므로 $\cos\theta = \frac{63}{65}$, $\theta \approx 14.3^\circ$.</p>`,
  '6pzkmdncqf': R`<p>두 벡터의 내적은 벡터가 아니라 <b>수</b>입니다.</p>`,
  '4u2plhe47g': R`$⟦0⟧$의 크기를 구하시오.`,
  '252q8tpxn2p': R`$\mathbf{a} = ⟦0⟧$, $\mathbf{b} = ⟦1⟧$일 때 $\mathbf{a}\cdot\mathbf{b}$를 구하시오.`,
  '17ht25mwywu': R`$\mathbf{a} = ⟦0⟧$, $\mathbf{b} = ⟦1⟧$일 때 $⟦2⟧\mathbf{a} ⟦3⟧ ⟦4⟧\mathbf{b}$를 구하시오.`,
  '2gdqizkyobq': R`성분을 순서대로 쉼표로 구분하여 입력하시오.`,
  '1mpyqj0mwgx': R`성분별로 계산: $⟦0⟧ = ⟦1⟧$.`,
  '14p7yoy4f3a': R`$⟦0⟧$와 $⟦1⟧$가 수직이 되도록 하는 $k$를 구하시오.`,
  '127php4kbc3': R`수직이면 내적이 0: $⟦0⟧k + (⟦1⟧)(⟦2⟧) = 0$이므로 $k = ⟦3⟧$.`,
  '1kydmvss2ex': R`$⟦0⟧$와 $⟦1⟧$가 이루는 각을 $\theta$라 할 때 $\cos\theta$를 구하시오.`,
  '1b0azawmrlf': R`$⟦0⟧$와 같은 방향의 단위벡터를 구하시오.`,
  '280s3ajjt4e': R`성분을 쉼표로 구분하여 입력하시오. 예: 3/5, -4/5`,
  '22ii0i40ri': R`$|\mathbf{v}| = ⟦0⟧$. 각 성분을 ⟦1⟧로 나누면 $\hat{\mathbf{v}} = ⟦2⟧$.`,

  // limits
  '239kmg9x5mj': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$은 $x$가 $a$에 가까워질 때 $f(x)$가 $L$에 한없이 가까워진다는 뜻입니다. $x = a$에서 실제로 어떤 일이 일어나는지는 상관없습니다.</p>
<h3>방법</h3>
<ol><li><b>직접 대입</b>: 다항함수 등 연속함수에서 사용합니다: $\lim_{x \to 2}(x^2 + 3x) = 10$.</li><li>$\frac{0}{0}$ 꼴이면 <b>인수분해하여 약분</b>: $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$.</li><li>근호가 있으면 <b>유리화</b>: 켤레식을 곱합니다.</li></ol>
⟦0⟧
<h3>무한대에서의 극한</h3>
⟦1⟧
<h3>중요한 삼각함수의 극한</h3>
⟦2⟧
<h3>연속</h3>
<p>$\lim_{x \to a} f(x) = f(a)$이면 $f$는 $a$에서 연속입니다(구멍, 끊김, 점근선이 없음). 구간별로 정의된 함수는 이음점에서 두 식의 값이 같아야 합니다.</p>
⟦3⟧`,
  '25jnb5snm7z': R`<p>유리함수는 분자와 분모를 분모의 최고차항 $x$의 거듭제곱으로 나눕니다:</p><ul><li>차수가 같으면 → 최고차항의 계수의 비;</li><li>분자의 차수가 낮으면 → 0;</li><li>분자의 차수가 높으면 → 유한한 극한 없음($\pm\infty$).</li></ul>`,
  'extw7corym': R`<p>$\frac{0}{0}$은 "0"도 "정의되지 않음"도 아닌 부정형입니다. 추가 계산(인수분해, 유리화)이 필요하다는 신호입니다.</p>`,
  '18znpgymeuk': R`$\displaystyle\lim_{x \to ⟦0⟧} (⟦1⟧)$을 구하시오.`,
  '1tq4b7d4h53': R`다항함수이므로 대입합니다: $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧$.`,
  '1n96bgorw1d': R`$\displaystyle\lim_{x \to ⟦0⟧} \frac{⟦1⟧}{x ⟦2⟧}$을 구하시오.`,
  '295o4zt7f3w': R`대입하면 $\frac{0}{0}$. 인수분해하면 $\frac{(x ⟦0⟧)(x ⟦1⟧)}{x ⟦2⟧} = x ⟦3⟧$이므로 극한은 $⟦4⟧ ⟦5⟧ = ⟦6⟧$.`,
  '1rjdd048rzk': R`$\displaystyle\lim_{x \to \infty} \frac{⟦0⟧}{⟦1⟧}$을 구하시오.`,
  '229ply6f2l2': R`분자의 차수가 분모보다 낮으므로 $x^2$으로 나누면 분자의 모든 항이 0으로 가고, 극한은 $0$입니다.`,
  '1m8u7pc3qh1': R`차수가 같으므로 극한은 최고차항의 계수의 비입니다: $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  '1ynpy6v2s15': R`$\displaystyle\lim_{x \to 0} \frac{⟦0⟧}{⟦1⟧}$을 구하시오.`,
  'if95qf815v': R`$\frac{\sin u}{u} \to 1$(과 $\frac{\tan u}{u} \to 1$)을 이용하면 식은 $\frac{⟦0⟧x}{⟦1⟧x} = ⟦2⟧$처럼 됩니다.`,
  'blyu2go12i': R`$\displaystyle\lim_{x \to 0} \frac{\sqrt{x + ⟦0⟧} - ⟦1⟧}{x}$을 구하시오.`,
  'fj8u70cngg': R`켤레식을 곱합니다: $\frac{(x + ⟦0⟧) - ⟦1⟧}{x(\sqrt{x + ⟦2⟧} + ⟦3⟧)} = \frac{1}{\sqrt{x + ⟦4⟧} + ⟦5⟧} \to \frac{1}{⟦6⟧}$.`,
  '1kmmd6tilgi': R`$f(x) = \begin{cases} x^2 + k, & x \lt ⟦0⟧ \\ ⟦1⟧, & x \ge ⟦2⟧ \end{cases}$가 $x = ⟦3⟧$에서 연속이 되도록 하는 $k$를 구하시오.`,
  '1l84k7ifkz6': R`$x = ⟦0⟧$에서 두 식의 값이 같아야 합니다: $(⟦1⟧)^2 + k = ⟦2⟧(⟦3⟧) ⟦4⟧$이므로 $⟦5⟧ + k = ⟦6⟧$, $k = ⟦7⟧$.`,

  // derivatives
  '1pv2wkwyvwg': R`
<p><b>도함수</b> $f'(x)$는 $f$의 순간변화율, 즉 $x$에서의 접선의 기울기입니다. 극한으로 정의됩니다:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>접선</h3>
<p>$x = a$에서 접선의 기울기는 $m = f'(a)$이고 점 $(a, f(a))$를 지납니다: $y - f(a) = f'(a)(x - a)$.</p>
<h3>정류점</h3>
<p>$f'(x) = 0$인 곳에서 그래프는 순간적으로 수평입니다. 이계도함수로 판정합니다: $f''(a) \gt 0$ → 극소; $f''(a) \lt 0$ → 극대. $f' \gt 0$이면 증가, $f' \lt 0$이면 감소합니다.</p>
<h3>최적화</h3>
⟦3⟧
⟦4⟧`,
  '1kddytp99dm': R`공식`,
  '21wooetnwi8': R`<p>100 m의 울타리로 강가에 직사각형을 만듭니다(강 쪽에는 울타리가 필요 없음). 변을 $x, y, x$라 하면 $2x + y = 100$, 넓이 $A = x(100 - 2x)$. $A'(x) = 100 - 4x = 0$에서 $x = 25$이므로 $A_{\max} = 25 \times 50 = 1250$ m².</p>`,
  '14x6kebc9en': R`<p>상수의 도함수는 0입니다. 상수항을 $f'(x)$에 남기지 마시오.</p>`,
  'sk165jmy0e': R`$f(x) = ⟦0⟧$일 때 $f'(x)$를 구하시오.`,
  '1z8enx6jmxw': R`각 항에 거듭제곱의 미분법을 적용하면 $f'(x) = ⟦0⟧$ (상수는 사라집니다).`,
  'rdfbrjf6fd': R`$f(x) = ⟦0⟧$일 때 $f'(⟦1⟧)$를 구하시오.`,
  '12fn6a7y0fo': R`$f'(x) = ⟦0⟧$이므로 $f'(⟦1⟧) = ⟦2⟧$.`,
  '13xytl77ctg': R`$y = ⟦0⟧$ 위의 $x = ⟦1⟧$인 점에서의 접선의 방정식을 구하시오.`,
  'zxpf5t25tk': R`기울기: $y' = 2x ⟦0⟧$이므로 $x = ⟦2⟧$에서 $m = ⟦1⟧$. 접점: $(⟦3⟧, ⟦4⟧)$. 따라서 $y - ⟦5⟧ = ⟦6⟧(x - ⟦7⟧)$, 즉 $y = ⟦8⟧$.`,
  '6or380e65b': R`$x = ⟦0⟧ \text{ 와 } x = ⟦1⟧$`,
  '1ib3oh8we5r': R`$f(x) = ⟦0⟧$의 정류점의 $x$좌표를 구하시오.`,
  '8cxs5u8eb2': R`$f'(x) = ⟦0⟧ = 3(x ⟦1⟧)(x ⟦2⟧) = 0$이므로 $x = ⟦3⟧$ 또는 $x = ⟦4⟧$.`,
  '2diynqfs1vm': R`$f(x) = ⟦0⟧$가 극소가 되는 $x$의 값을 구하시오.`,
  'qiab8fav1k': R`$f'(x) = 3(x ⟦0⟧)(x ⟦1⟧)$은 $x = ⟦2⟧$와 $x = ⟦3⟧$에서 0입니다. $f''(x) = 6x ⟦4⟧$가 $x = ⟦5⟧$에서 양수이므로 그곳이 극소입니다.`,
  '2bfp82dmoiw': R`한 농부가 ⟦0⟧ m의 울타리로 곧은 강을 따라 직사각형 밭을 둘러싸려고 합니다. 강을 따라서는 울타리가 필요 없습니다. 가능한 최대 넓이는 얼마입니까?`,
  '1sgjbqwzp29': R`변을 $x, y, x$라 하면 $2x + y = ⟦0⟧$. $A = x(⟦1⟧ - 2x)$, $A' = ⟦2⟧ - 4x = 0$에서 $x = ⟦3⟧$, $y = ⟦4⟧$, $A = ⟦5⟧$ m².`,
  '1dz6162q97e': R`둘레가 ⟦0⟧ cm인 직사각형의 최대 넓이는 얼마입니까?`,
  '12er060agfx': R`가로를 $x$라 하면 세로는 $⟦0⟧ - x$, $A = x(⟦1⟧ - x)$. $A' = ⟦2⟧ - 2x = 0$에서 $x = ⟦3⟧$(정사각형)이고 넓이는 $⟦4⟧$ cm².`,
  'jksdr4ukrw': R`$y = ⟦0⟧$를 미분하시오.`,
  '1gytk3lwm2l': R`$\frac{d}{dx}\sin x = \cos x$, $\frac{d}{dx}\cos x = -\sin x$이므로 $y' = ⟦0⟧$.`,
  't51ufxvzbf': R`한 점의 위치가 $s(t) = ⟦0⟧$ m입니다. $t = ⟦1⟧$ s일 때의 가속도를 구하시오.`,
  'bakv4or3q9': R`$v(t) = s'(t) = ⟦0⟧$, $a(t) = v'(t) = ⟦1⟧$. $t = ⟦2⟧$일 때 $a = ⟦3⟧$ m/s².`,
  'twj64cwqj6': R`한 점의 위치가 $s(t) = ⟦0⟧$ m입니다. $t = ⟦1⟧$ s일 때의 속도를 구하시오.`,
  '1yi10f0kgm7': R`$v(t) = s'(t) = ⟦0⟧$이므로 $v(⟦1⟧) = ⟦2⟧$ m/s.`,

  // integrals
  '1wdt9h7s66j': R`
<p>적분은 미분의 역연산입니다. $F' = f$인 $F$를 $f$의 <b>부정적분(원시함수)</b>이라 하며, <b>부정적분</b>에는 적분상수가 붙습니다:</p>
⟦0⟧
⟦1⟧
<h3>정적분</h3>
⟦2⟧
<p>$f \ge 0$이면 이것은 $x = a$에서 $x = b$까지 곡선 아래의 넓이입니다. $x$축 아래의 넓이는 음수로 계산되므로, 전체 넓이를 구할 때는 근에서 적분을 나눕니다.</p>
⟦3⟧
<h3>도함수로부터 함수 구하기</h3>
<p>$f'(x) = 6x + 2$이고 $f(1) = 10$이면 $f(x) = 3x^2 + 2x + C$이고, $3 + 2 + C = 10$에서 $C = 5$.</p>
⟦4⟧`,
  '20z1821bwrr': R`<p>$\int (6x^2 - 4x + 3)\,dx = 2x^3 - 2x^2 + 3x + C$. 미분하여 확인하시오.</p>`,
  '1jsx5j8bwuv': R`미적분의 기본정리`,
  'k8jg70602j': R`<p>$y = x^2$과 $y = 2x$ 사이의 넓이: 두 그래프는 $x = 0$과 $x = 2$에서 만나고 그 사이에서 $2x \ge x^2$이므로 $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.</p>`,
  '2645ntoenmj': R`<p>부정적분에서는 $+ C$를 잊지 말고, 정적분에서는 쓰지 마시오(상쇄됩니다).</p>`,
  '1a4h4aolv1n': R`$\displaystyle\int (⟦0⟧)\,dx$를 구하시오.`,
  '14w03nftsp9': R`각 지수를 1씩 올리고 새 지수로 나눕니다: $⟦0⟧ + C$.`,
  'lhk659hv1w': R`$\displaystyle\int_{⟦0⟧}^{⟦1⟧} (⟦2⟧)\,dx$를 계산하시오.`,
  'wzkchwuid3': R`원시함수 하나는 $F(x) = ⟦0⟧$. $F(⟦1⟧) - F(⟦2⟧) = ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '2g5117b4rfq': R`$y = ⟦0⟧$와 $x$축으로 둘러싸인 부분의 넓이를 구하시오.`,
  '1qd8emk0tlu': R`곡선은 $x = \pm ⟦0⟧$에서 $x$축과 만납니다. 넓이 $= \int_{-⟦1⟧}^{⟦2⟧} (⟦3⟧ - x^2)\,dx = \left[⟦4⟧x - \frac{x^3}{3}\right]_{-⟦5⟧}^{⟦6⟧} = ⟦7⟧$.`,
  '1wjuv7zitnn': R`$y = x^2$과 $y = ⟦0⟧x$로 둘러싸인 부분의 넓이를 구하시오.`,
  'ospw7lwugt': R`두 그래프는 $x = 0$과 $x = ⟦0⟧$에서 만납니다. 넓이 $= \int_0^{⟦1⟧} (⟦2⟧x - x^2)\,dx = \frac{⟦3⟧^3}{2} - \frac{⟦4⟧^3}{3} = ⟦5⟧$.`,
  '2c9m4g6dimy': R`$f'(x) = ⟦0⟧$이고 $f(0) = ⟦1⟧$일 때 $f(⟦2⟧)$를 구하시오.`,
  '29kyl7mnwt5': R`$f(x) = ⟦0⟧ + C$이고 $f(0) = C = ⟦1⟧$. 따라서 $f(⟦2⟧) = ⟦3⟧$.`,
  '1p83y3ccpb': R`$\int \cos x\,dx = \sin x$, $\int -\sin x\,dx = \cos x$이므로 결과는 $⟦0⟧ + C$.`,
  '22xlapf2gb7': R`$\displaystyle\int_0^{\pi/2} ⟦0⟧\cos x\,dx$를 계산하시오.`,
  '1ppkvfv3p1b': R`$\displaystyle\int_0^{\pi} ⟦0⟧\sin x\,dx$를 계산하시오.`,
  // formula-only entries
  'itm4o8cny': R`\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}`,
  '25hetn68fsz': R`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`,
  '1i9j07wofgh': R`\lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \lim_{x \to 0}\frac{\sin ax}{bx} = \frac{a}{b}`,
  '21rfw9yowzp': R`$$\frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}c = 0 \qquad \frac{d}{dx}\big(af + bg\big) = af' + bg'$$$$\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x$$`,
  'oq0mo2ln2m': R`$$\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C \quad (n \ne -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$$$\int \cos x\,dx = \sin x + C \qquad \int \sin x\,dx = -\cos x + C$$`,
  'ktnrryzzqc': R`$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$`,
});
