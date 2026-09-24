/* 中文 — 高中（多项式 → 积分） */
addT('zh', {
  // polynomials
  '1dv82xempy': R`
<p><b>多项式</b>是形如 $a_n x^n + \cdots + a_1 x + a_0$（指数为自然数）的各项之和。它的<b>次数</b>是最高的指数；$a_n$ 是<b>首项系数</b>。多项式相乘时，次数相加，首项系数相乘。</p>
<h3>除法</h3>
<p>用 $(x - a)$ 除 $P(x)$，得到商 $Q(x)$ 和余数 $R$：$P(x) = (x - a)Q(x) + R$。<b>综合除法</b>只用系数就能快速完成。</p>
⟦0⟧
⟦1⟧
<h3>三次方程的根</h3>
<p>对于根为 $r_1, r_2, r_3$ 的 $ax^3 + bx^2 + cx + d = 0$：</p>
⟦2⟧
⟦3⟧`,
  '16v6jrymjv2': R`<p>用综合除法计算 $(x^3 - 4x^2 + x + 6) \div (x - 2)$：</p>⟦0⟧<p>商为 $x^2 - 2x - 3$，余数为 0。</p>`,
  'agfsjitvd': R`<p><b>余数定理：</b>$P(x)$ 除以 $(x - a)$ 的余数等于 $P(a)$。</p><p><b>因式定理：</b>$(x - a)$ 是 $P(x)$ 的因式，当且仅当 $P(a) = 0$。</p>`,
  'sqyu8zjvtn': R`<p>除以 $(x + 3)$ 意味着 $a = -3$：要算 $P(-3)$，而不是 $P(3)$。</p>`,
  'u4dg9by4un': R`求 $P(x) = ⟦0⟧$ 除以 $(x ⟦1⟧)$ 的余数。`,
  '212dl6gy5gu': R`由余数定理，余数为 $P(⟦0⟧) = ⟦1⟧(⟦2⟧)^3 ⟦3⟧(⟦4⟧)^2 ⟦5⟧(⟦6⟧) ⟦7⟧ = ⟦8⟧$。`,
  '20swcfjanfa': R`$(x ⟦0⟧)$ 是 $P(x) = ⟦1⟧$ 的因式。求 $k$。`,
  '2cscisbqmyg': R`由因式定理，$P(⟦0⟧) = 0$：$⟦1⟧ ⟦2⟧ ⟦3⟧k ⟦4⟧ = 0$，所以 $⟦5⟧k = ⟦6⟧$，$k = ⟦7⟧$。`,
  '28czzdou58n': R`对于 $ax^3 + bx^2 + cx + d = 0$，⟦0⟧。`,
  '1uakfcji416': R`三根之和为 $-\frac{b}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1cl4qeneyhq': R`三根之积为 $-\frac{d}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1h1il3vuozs': R`用 $(x ⟦1⟧)$ 除 $⟦0⟧$。商是什么？`,
  '1432prhuyml': R`用 ⟦0⟧ 对系数 ⟦1⟧ 做综合除法，得到 ⟦2⟧，余数为 0，所以商是 $⟦3⟧$。`,
  '1v0pp8s5fwz': R`考虑 $⟦0⟧$。乘积的次数是多少？`,
  '79jcaurtjl': R`考虑 $⟦0⟧$。乘积的首项系数是多少？`,
  'lgw9ke18qe': R`考虑 $⟦0⟧$。乘积的常数项是多少？`,
  '18bitz7l1ry': R`相乘时次数相加：$⟦0⟧ + ⟦1⟧ = ⟦2⟧$。`,
  '1x77krhanqb': R`首项相乘：$⟦0⟧ \cdot ⟦1⟧ = ⟦2⟧$，所以首项系数是 ⟦3⟧。`,
  '1uusi8yg5sk': R`常数项等于各常数项之积：$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$。`,

  // matrices
  '104wb071wss': R`
<p><b>矩阵</b>是由数排成的矩形阵列。$m \times n$ 矩阵有 $m$ 行 $n$ 列；$a_{ij}$ 是第 $i$ 行第 $j$ 列的元素。</p>
<h3>运算</h3>
<ul><li><b>加/减</b>：对应元素相加减（只限同型矩阵）。</li><li><b>数乘</b>：每个元素都乘以这个数。</li><li><b>乘法</b> $AB$：第 $(i, j)$ 个元素是 $A$ 的第 $i$ 行与 $B$ 的第 $j$ 列的对应乘积之和。要求（$A$ 的列数）=（$B$ 的行数），$m \times n$ 矩阵乘以 $n \times p$ 矩阵得到 $m \times p$ 矩阵。</li></ul>
⟦0⟧
⟦1⟧
<h3>行列式与逆矩阵（2 × 2）</h3>
⟦2⟧
<p>若 $\det A = 0$，矩阵是<b>奇异矩阵</b>，没有逆矩阵。逆矩阵可以解方程组：$AX = B \Rightarrow X = A^{-1}B$。</p>
⟦3⟧`,
  '4bk6hc9is8': R`<p>矩阵乘法<b>不满足交换律</b>：通常 $AB \ne BA$。</p>`,
  '4ckwr8umw4': R`<p>求逆矩阵：<b>交换</b> $a$ 和 $d$，<b>变号</b> $b$ 和 $c$，再除以行列式。</p>`,
  '1h6gnxjh2g6': R`求 $⟦0⟧$ 的行列式。`,
  '1gfhimaac6g': R`已知 $A = ⟦0⟧$，$B = ⟦1⟧$，求 $AB$。`,
  '1dy8pvpnep7': R`按行依次输入四个元素，如 19, 22, 43, 50。`,
  'xfxhg5b3o2': R`行乘列：$AB = \begin{pmatrix} ⟦0⟧\cdot⟦1⟧ + ⟦2⟧\cdot⟦3⟧ & \cdots \\ \cdots & \cdots \end{pmatrix} = ⟦4⟧$。`,
  '27lrdslcvs8': R`求 $⟦0⟧$ 的逆矩阵。`,
  'ea7d95erhp': R`按行依次输入四个元素。`,
  '2euzxos9ar7': R`$\det = (⟦0⟧)(⟦1⟧) - (⟦2⟧)(⟦3⟧) = ⟦4⟧$。交换 $a$ 与 $d$，$b$ 与 $c$ 变号，再除以 ⟦5⟧：$⟦6⟧$。`,
  '2fs8fio5g5w': R`$x$ 取何值时，$⟦0⟧$ 是奇异矩阵？`,
  'et7lf19q4x': R`奇异即 $\det = 0$：$⟦0⟧x - (⟦1⟧)(⟦2⟧) = 0$，所以 $x = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$。`,
  '2280y15nq4f': R`$A = ⟦0⟧$，$B = ⟦1⟧$。求 $⟦4⟧A - ⟦5⟧B$ 第 ⟦2⟧ 行第 ⟦3⟧ 列的元素。`,
  'h3p6r4d6o': R`$A = ⟦0⟧$，$B = ⟦1⟧$。求 $AB$ 第 ⟦2⟧ 行第 ⟦3⟧ 列的元素。`,
  'xdj657lej': R`$A$ 的第 ⟦0⟧ 行与 $B$ 的第 ⟦1⟧ 列：$⟦2⟧ = ⟦3⟧$。（$2 \times 3$ 矩阵乘以 $3 \times 2$ 矩阵得到 $2 \times 2$ 矩阵。）`,

  // vectors
  '1gljxtukffx': R`
<p><b>向量</b>既有大小又有方向。用坐标表示为 $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ 或 $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$。从 $P$ 到 $Q$ 的向量是 $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$。</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  'i7t2goihqv': R`模（长度）`,
  '1czax49eh4c': R`加法`,
  'q2ntocofkn': R`对应坐标相加`,
  'oswzhgqxwz': R`数乘`,
  '1bnyaikchfp': R`$k\mathbf{a}$：每个坐标都乘以 $k$`,
  '28hldv2q33s': R`单位向量`,
  '214ftyeo0vg': R`数量积（点积）`,
  '1xghg9dwzeq': R`$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta \qquad\Longrightarrow\qquad \cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$<p>两个非零向量<b>垂直</b>，当且仅当 $\mathbf{a}\cdot\mathbf{b} = 0$。</p>`,
  '1w9baxb120w': R`<p>$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$，$\mathbf{b} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$：$\mathbf{a}\cdot\mathbf{b} = 15 + 48 = 63$，$|\mathbf{a}| = 5$，$|\mathbf{b}| = 13$，所以 $\cos\theta = \frac{63}{65}$，$\theta \approx 14.3^\circ$。</p>`,
  '6pzkmdncqf': R`<p>两个向量的数量积是一个<b>数</b>，而不是向量。</p>`,
  '4u2plhe47g': R`求 $⟦0⟧$ 的模。`,
  '252q8tpxn2p': R`已知 $\mathbf{a} = ⟦0⟧$，$\mathbf{b} = ⟦1⟧$，求 $\mathbf{a}\cdot\mathbf{b}$。`,
  '17ht25mwywu': R`已知 $\mathbf{a} = ⟦0⟧$，$\mathbf{b} = ⟦1⟧$，求 $⟦2⟧\mathbf{a} ⟦3⟧ ⟦4⟧\mathbf{b}$。`,
  '2gdqizkyobq': R`按顺序输入各坐标，用逗号隔开。`,
  '1mpyqj0mwgx': R`逐个坐标计算：$⟦0⟧ = ⟦1⟧$。`,
  '14p7yoy4f3a': R`求 $k$，使 $⟦0⟧$ 与 $⟦1⟧$ 垂直。`,
  '127php4kbc3': R`垂直即数量积为 0：$⟦0⟧k + (⟦1⟧)(⟦2⟧) = 0$，所以 $k = ⟦3⟧$。`,
  '1kydmvss2ex': R`求 $\cos\theta$，其中 $\theta$ 是 $⟦0⟧$ 与 $⟦1⟧$ 的夹角。`,
  '1b0azawmrlf': R`求与 $⟦0⟧$ 同方向的单位向量。`,
  '280s3ajjt4e': R`输入各坐标，用逗号隔开，如 3/5, -4/5。`,
  '22ii0i40ri': R`$|\mathbf{v}| = ⟦0⟧$。每个坐标除以 ⟦1⟧：$\hat{\mathbf{v}} = ⟦2⟧$。`,

  // limits
  '239kmg9x5mj': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$ 表示当 $x$ 趋近 $a$ 时，$f(x)$ 可以任意接近 $L$——不管在 $x = a$ 处本身发生什么。</p>
<h3>方法</h3>
<ol><li><b>直接代入</b>：适用于多项式和其他连续函数：$\lim_{x \to 2}(x^2 + 3x) = 10$。</li><li>遇到 $\frac{0}{0}$ 时<b>因式分解并约分</b>：$\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$。</li><li>含根式时<b>有理化</b>：乘以共轭式。</li></ol>
⟦0⟧
<h3>无穷远处的极限</h3>
⟦1⟧
<h3>一个重要的三角极限</h3>
⟦2⟧
<h3>连续性</h3>
<p>若 $\lim_{x \to a} f(x) = f(a)$，则 $f$ 在 $a$ 处连续：该处没有空洞、跳跃或渐近线。对于分段函数，要让两段在分界点处相接。</p>
⟦3⟧`,
  '25jnb5snm7z': R`<p>对于有理函数，分子分母同除以分母中 $x$ 的最高次幂：</p><ul><li>次数相同 → 首项系数之比；</li><li>分子次数较低 → 0；</li><li>分子次数较高 → 没有有限极限（$\pm\infty$）。</li></ul>`,
  'extw7corym': R`<p>$\frac{0}{0}$ 既不是“0”，也不是“无意义”——它是未定式，说明还需要进一步处理（因式分解、有理化）。</p>`,
  '18znpgymeuk': R`求 $\displaystyle\lim_{x \to ⟦0⟧} (⟦1⟧)$。`,
  '1tq4b7d4h53': R`这是多项式函数，直接代入：$⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧$。`,
  '1n96bgorw1d': R`求 $\displaystyle\lim_{x \to ⟦0⟧} \frac{⟦1⟧}{x ⟦2⟧}$。`,
  '295o4zt7f3w': R`直接代入得 $\frac{0}{0}$。因式分解：$\frac{(x ⟦0⟧)(x ⟦1⟧)}{x ⟦2⟧} = x ⟦3⟧$，所以极限为 $⟦4⟧ ⟦5⟧ = ⟦6⟧$。`,
  '1rjdd048rzk': R`求 $\displaystyle\lim_{x \to \infty} \frac{⟦0⟧}{⟦1⟧}$。`,
  '229ply6f2l2': R`分子的次数低于分母；同除以 $x^2$ 后分子各项都趋于 0，所以极限为 $0$。`,
  '1m8u7pc3qh1': R`次数相同，所以极限为首项系数之比：$\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$。`,
  '1ynpy6v2s15': R`求 $\displaystyle\lim_{x \to 0} \frac{⟦0⟧}{⟦1⟧}$。`,
  'if95qf815v': R`利用 $\frac{\sin u}{u} \to 1$（以及 $\frac{\tan u}{u} \to 1$）：表达式相当于 $\frac{⟦0⟧x}{⟦1⟧x} = ⟦2⟧$。`,
  'blyu2go12i': R`求 $\displaystyle\lim_{x \to 0} \frac{\sqrt{x + ⟦0⟧} - ⟦1⟧}{x}$。`,
  'fj8u70cngg': R`乘以共轭式：$\frac{(x + ⟦0⟧) - ⟦1⟧}{x(\sqrt{x + ⟦2⟧} + ⟦3⟧)} = \frac{1}{\sqrt{x + ⟦4⟧} + ⟦5⟧} \to \frac{1}{⟦6⟧}$。`,
  '1kmmd6tilgi': R`求 $k$，使 $f(x) = \begin{cases} x^2 + k, & x \lt ⟦0⟧ \\ ⟦1⟧, & x \ge ⟦2⟧ \end{cases}$ 在 $x = ⟦3⟧$ 处连续。`,
  '1l84k7ifkz6': R`两段必须在 $x = ⟦0⟧$ 处相接：$(⟦1⟧)^2 + k = ⟦2⟧(⟦3⟧) ⟦4⟧$，所以 $⟦5⟧ + k = ⟦6⟧$，$k = ⟦7⟧$。`,

  // derivatives
  '1pv2wkwyvwg': R`
<p><b>导数</b> $f'(x)$ 是 $f$ 的瞬时变化率——即 $x$ 处切线的斜率。它由极限定义：</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>切线</h3>
<p>在 $x = a$ 处，切线斜率为 $m = f'(a)$，且经过 $(a, f(a))$：$y - f(a) = f'(a)(x - a)$。</p>
<h3>驻点</h3>
<p>在 $f'(x) = 0$ 处，图象暂时是水平的。用二阶导数判断：$f''(a) \gt 0$ → 极小值；$f''(a) \lt 0$ → 极大值。$f' \gt 0$ 时 $f$ 递增，$f' \lt 0$ 时 $f$ 递减。</p>
<h3>最优化</h3>
⟦3⟧
⟦4⟧`,
  '1kddytp99dm': R`法则`,
  '21wooetnwi8': R`<p>用 100 m 长的篱笆沿河围一个矩形（靠河一侧不需要篱笆）。设三边为 $x, y, x$：$2x + y = 100$，面积 $A = x(100 - 2x)$。$A'(x) = 100 - 4x = 0$ 得 $x = 25$，所以 $A_{\max} = 25 \times 50 = 1250$ m²。</p>`,
  '14x6kebc9en': R`<p>常数的导数是 0——不要把常数项带进 $f'(x)$。</p>`,
  'sk165jmy0e': R`求 $f(x) = ⟦0⟧$ 的导数 $f'(x)$。`,
  '1z8enx6jmxw': R`对每一项用幂函数求导法则：$f'(x) = ⟦0⟧$（常数项消失）。`,
  'rdfbrjf6fd': R`已知 $f(x) = ⟦0⟧$，求 $f'(⟦1⟧)$。`,
  '12fn6a7y0fo': R`$f'(x) = ⟦0⟧$，所以 $f'(⟦1⟧) = ⟦2⟧$。`,
  '13xytl77ctg': R`求 $y = ⟦0⟧$ 在 $x = ⟦1⟧$ 处的切线方程。`,
  'zxpf5t25tk': R`斜率：$y' = 2x ⟦0⟧$，所以在 $x = ⟦2⟧$ 处 $m = ⟦1⟧$。切点：$(⟦3⟧, ⟦4⟧)$。于是 $y - ⟦5⟧ = ⟦6⟧(x - ⟦7⟧)$，即 $y = ⟦8⟧$。`,
  '6or380e65b': R`$x = ⟦0⟧ \text{ 和 } x = ⟦1⟧$`,
  '1ib3oh8we5r': R`求 $f(x) = ⟦0⟧$ 的驻点的横坐标。`,
  '8cxs5u8eb2': R`$f'(x) = ⟦0⟧ = 3(x ⟦1⟧)(x ⟦2⟧) = 0$，所以 $x = ⟦3⟧$ 或 $x = ⟦4⟧$。`,
  '2diynqfs1vm': R`$f(x) = ⟦0⟧$ 在 $x$ 取何值时有极小值？`,
  'qiab8fav1k': R`$f'(x) = 3(x ⟦0⟧)(x ⟦1⟧)$ 在 $x = ⟦2⟧$ 和 $x = ⟦3⟧$ 处为零。$f''(x) = 6x ⟦4⟧$ 在 $x = ⟦5⟧$ 处为正，所以那里是极小值点。`,
  '2bfp82dmoiw': R`一位农民有 ⟦0⟧ m 长的篱笆，要沿一条笔直的河围出一块矩形地，沿河一侧不需要篱笆。最大面积是多少？`,
  '1sgjbqwzp29': R`三边为 $x, y, x$，$2x + y = ⟦0⟧$。$A = x(⟦1⟧ - 2x)$，$A' = ⟦2⟧ - 4x = 0$ 得 $x = ⟦3⟧$，$y = ⟦4⟧$，$A = ⟦5⟧$ m²。`,
  '1dz6162q97e': R`一个长方形的周长是 ⟦0⟧ cm。它的最大面积是多少？`,
  '12er060agfx': R`设宽为 $x$，则长为 $⟦0⟧ - x$，$A = x(⟦1⟧ - x)$。$A' = ⟦2⟧ - 2x = 0$ 得 $x = ⟦3⟧$——正方形——面积为 $⟦4⟧$ cm²。`,
  'jksdr4ukrw': R`求 $y = ⟦0⟧$ 的导数。`,
  '1gytk3lwm2l': R`$\frac{d}{dx}\sin x = \cos x$，$\frac{d}{dx}\cos x = -\sin x$，所以 $y' = ⟦0⟧$。`,
  't51ufxvzbf': R`一个质点的位置为 $s(t) = ⟦0⟧$ 米。求它在 $t = ⟦1⟧$ s 时的加速度。`,
  'bakv4or3q9': R`$v(t) = s'(t) = ⟦0⟧$，$a(t) = v'(t) = ⟦1⟧$。当 $t = ⟦2⟧$ 时：$a = ⟦3⟧$ m/s²。`,
  'twj64cwqj6': R`一个质点的位置为 $s(t) = ⟦0⟧$ 米。求它在 $t = ⟦1⟧$ s 时的速度。`,
  '1yi10f0kgm7': R`$v(t) = s'(t) = ⟦0⟧$，所以 $v(⟦1⟧) = ⟦2⟧$ m/s。`,

  // integrals
  '1wdt9h7s66j': R`
<p>积分是求导的逆运算。$f$ 的<b>原函数</b>是满足 $F' = f$ 的任意函数 $F$；<b>不定积分</b>要加上积分常数：</p>
⟦0⟧
⟦1⟧
<h3>定积分</h3>
⟦2⟧
<p>当 $f \ge 0$ 时，它是 $x = a$ 到 $x = b$ 之间曲线下方的面积。$x$ 轴下方的面积算作负值，所以求总面积时要在根处分段积分。</p>
⟦3⟧
<h3>由导数求原函数</h3>
<p>若 $f'(x) = 6x + 2$ 且 $f(1) = 10$，则 $f(x) = 3x^2 + 2x + C$，由 $3 + 2 + C = 10$ 得 $C = 5$。</p>
⟦4⟧`,
  '20z1821bwrr': R`<p>$\int (6x^2 - 4x + 3)\,dx = 2x^3 - 2x^2 + 3x + C$。求导检验一下。</p>`,
  '1jsx5j8bwuv': R`微积分基本定理`,
  'k8jg70602j': R`<p>$y = x^2$ 与 $y = 2x$ 之间的面积：它们交于 $x = 0$ 和 $x = 2$，其间 $2x \ge x^2$，所以 $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$。</p>`,
  '2645ntoenmj': R`<p>不定积分别忘了 $+ C$——定积分里则不要写（它会抵消）。</p>`,
  '1a4h4aolv1n': R`求 $\displaystyle\int (⟦0⟧)\,dx$。`,
  '14w03nftsp9': R`每个指数加 1，再除以新的指数：$⟦0⟧ + C$。`,
  'lhk659hv1w': R`计算 $\displaystyle\int_{⟦0⟧}^{⟦1⟧} (⟦2⟧)\,dx$。`,
  'wzkchwuid3': R`一个原函数是 $F(x) = ⟦0⟧$。$F(⟦1⟧) - F(⟦2⟧) = ⟦3⟧ - ⟦4⟧ = ⟦5⟧$。`,
  '2g5117b4rfq': R`求 $y = ⟦0⟧$ 与 $x$ 轴所围成的面积。`,
  '1qd8emk0tlu': R`曲线与 $x$ 轴交于 $x = \pm ⟦0⟧$。面积 $= \int_{-⟦1⟧}^{⟦2⟧} (⟦3⟧ - x^2)\,dx = \left[⟦4⟧x - \frac{x^3}{3}\right]_{-⟦5⟧}^{⟦6⟧} = ⟦7⟧$。`,
  '1wjuv7zitnn': R`求 $y = x^2$ 与 $y = ⟦0⟧x$ 之间区域的面积。`,
  'ospw7lwugt': R`它们交于 $x = 0$ 和 $x = ⟦0⟧$。面积 $= \int_0^{⟦1⟧} (⟦2⟧x - x^2)\,dx = \frac{⟦3⟧^3}{2} - \frac{⟦4⟧^3}{3} = ⟦5⟧$。`,
  '2c9m4g6dimy': R`$f'(x) = ⟦0⟧$，$f(0) = ⟦1⟧$。求 $f(⟦2⟧)$。`,
  '29kyl7mnwt5': R`$f(x) = ⟦0⟧ + C$，而 $f(0) = C = ⟦1⟧$。所以 $f(⟦2⟧) = ⟦3⟧$。`,
  '1p83y3ccpb': R`$\int \cos x\,dx = \sin x$，$\int -\sin x\,dx = \cos x$，所以结果是 $⟦0⟧ + C$。`,
  '22xlapf2gb7': R`计算 $\displaystyle\int_0^{\pi/2} ⟦0⟧\cos x\,dx$。`,
  '1ppkvfv3p1b': R`计算 $\displaystyle\int_0^{\pi} ⟦0⟧\sin x\,dx$。`,
  // formula-only entries
  'itm4o8cny': R`\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}`,
  '25hetn68fsz': R`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`,
  '1i9j07wofgh': R`\lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \lim_{x \to 0}\frac{\sin ax}{bx} = \frac{a}{b}`,
  '21rfw9yowzp': R`$$\frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}c = 0 \qquad \frac{d}{dx}\big(af + bg\big) = af' + bg'$$$$\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x$$`,
  'oq0mo2ln2m': R`$$\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C \quad (n \ne -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$$$\int \cos x\,dx = \sin x + C \qquad \int \sin x\,dx = -\cos x + C$$`,
  'ktnrryzzqc': R`$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$`,
});
