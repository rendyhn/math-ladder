/* 日本語 — 高校（多項式 → 積分） */
addT('ja', {
  // polynomials
  '1dv82xempy': R`
<p><b>多項式</b>は、指数が 0 以上の整数である項 $a_n x^n + \cdots + a_1 x + a_0$ の和です。<b>次数</b>は最も大きい指数、$a_n$ は<b>最高次の係数</b>です。多項式どうしをかけると、次数はたされ、最高次の係数はかけられます。</p>
<h3>割り算</h3>
<p>$P(x)$ を $(x - a)$ でわると、商 $Q(x)$ と余り $R$ が得られます：$P(x) = (x - a)Q(x) + R$。<b>組立除法</b>を使うと、係数だけで手早く計算できます。</p>
⟦0⟧
⟦1⟧
<h3>3 次方程式の解</h3>
<p>解が $r_1, r_2, r_3$ である $ax^3 + bx^2 + cx + d = 0$ について：</p>
⟦2⟧
⟦3⟧`,
  '16v6jrymjv2': R`<p>組立除法で $(x^3 - 4x^2 + x + 6) \div (x - 2)$ を計算します：</p>⟦0⟧<p>商は $x^2 - 2x - 3$、余りは 0。</p>`,
  'agfsjitvd': R`<p><b>剰余の定理：</b>$P(x)$ を $(x - a)$ でわった余りは $P(a)$ です。</p><p><b>因数定理：</b>$(x - a)$ が $P(x)$ の因数であることと $P(a) = 0$ は同値です。</p>`,
  'sqyu8zjvtn': R`<p>$(x + 3)$ でわるときは $a = -3$ です。$P(3)$ ではなく $P(-3)$ を計算しましょう。</p>`,
  'u4dg9by4un': R`$P(x) = ⟦0⟧$ を $(x ⟦1⟧)$ でわった余りを求めなさい。`,
  '212dl6gy5gu': R`剰余の定理より、余りは $P(⟦0⟧) = ⟦1⟧(⟦2⟧)^3 ⟦3⟧(⟦4⟧)^2 ⟦5⟧(⟦6⟧) ⟦7⟧ = ⟦8⟧$。`,
  '20swcfjanfa': R`$(x ⟦0⟧)$ は $P(x) = ⟦1⟧$ の因数です。$k$ を求めなさい。`,
  '2cscisbqmyg': R`因数定理より $P(⟦0⟧) = 0$：$⟦1⟧ ⟦2⟧ ⟦3⟧k ⟦4⟧ = 0$、よって $⟦5⟧k = ⟦6⟧$、$k = ⟦7⟧$。`,
  '28czzdou58n': R`$ax^3 + bx^2 + cx + d = 0$ では、⟦0⟧。`,
  '1uakfcji416': R`3 つの解の和は $-\frac{b}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1cl4qeneyhq': R`3 つの解の積は $-\frac{d}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1h1il3vuozs': R`$⟦0⟧$ を $(x ⟦1⟧)$ でわりなさい。商は何ですか。`,
  '1432prhuyml': R`係数 ⟦1⟧ に ⟦0⟧ で組立除法を行うと ⟦2⟧、余り 0 なので、商は $⟦3⟧$。`,
  '1v0pp8s5fwz': R`$⟦0⟧$ について、積の次数を求めなさい。`,
  '79jcaurtjl': R`$⟦0⟧$ について、積の最高次の係数を求めなさい。`,
  'lgw9ke18qe': R`$⟦0⟧$ について、積の定数項を求めなさい。`,
  '18bitz7l1ry': R`かけ算では次数がたされます：$⟦0⟧ + ⟦1⟧ = ⟦2⟧$。`,
  '1x77krhanqb': R`最高次の項どうしをかけると $⟦0⟧ \cdot ⟦1⟧ = ⟦2⟧$、よって最高次の係数は ⟦3⟧。`,
  '1uusi8yg5sk': R`定数項は定数項どうしの積です：$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$。`,

  // matrices
  '104wb071wss': R`
<p><b>行列</b>は数を長方形に並べたものです。$m \times n$ 行列は $m$ 行 $n$ 列で、$a_{ij}$ は第 $i$ 行第 $j$ 列の成分です。</p>
<h3>演算</h3>
<ul><li><b>和・差</b>：成分ごとに計算（同じ型どうしのみ）。</li><li><b>実数倍</b>：すべての成分をかける。</li><li><b>積</b> $AB$：$(i, j)$ 成分は $A$ の第 $i$ 行と $B$ の第 $j$ 列の積和。（$A$ の列数）=（$B$ の行数）が必要で、$m \times n$ 行列と $n \times p$ 行列の積は $m \times p$ 行列です。</li></ul>
⟦0⟧
⟦1⟧
<h3>行列式と逆行列（2 × 2）</h3>
⟦2⟧
<p>$\det A = 0$ なら逆行列をもちません（<b>正則でない</b>）。逆行列で連立方程式が解けます：$AX = B \Rightarrow X = A^{-1}B$。</p>
⟦3⟧`,
  '4bk6hc9is8': R`<p>行列の積は<b>交換法則が成り立ちません</b>：ふつう $AB \ne BA$ です。</p>`,
  '4ckwr8umw4': R`<p>逆行列は、$a$ と $d$ を<b>入れかえ</b>、$b$ と $c$ の<b>符号を変え</b>、行列式でわって求めます。</p>`,
  '1h6gnxjh2g6': R`$⟦0⟧$ の行列式を求めなさい。`,
  '1gfhimaac6g': R`$A = ⟦0⟧$、$B = ⟦1⟧$ のとき、$AB$ を求めなさい。`,
  '1dy8pvpnep7': R`4 つの成分を行の順に入力しなさい。例：19, 22, 43, 50`,
  'xfxhg5b3o2': R`行と列の積和：$AB = \begin{pmatrix} ⟦0⟧\cdot⟦1⟧ + ⟦2⟧\cdot⟦3⟧ & \cdots \\ \cdots & \cdots \end{pmatrix} = ⟦4⟧$。`,
  '27lrdslcvs8': R`$⟦0⟧$ の逆行列を求めなさい。`,
  'ea7d95erhp': R`4 つの成分を行の順に入力しなさい。`,
  '2euzxos9ar7': R`$\det = (⟦0⟧)(⟦1⟧) - (⟦2⟧)(⟦3⟧) = ⟦4⟧$。$a$ と $d$ を入れかえ、$b$ と $c$ の符号を変え、⟦5⟧ でわると $⟦6⟧$。`,
  '2fs8fio5g5w': R`$x$ がどんな値のとき、$⟦0⟧$ は逆行列をもちませんか。`,
  'et7lf19q4x': R`逆行列をもたないのは $\det = 0$ のとき：$⟦0⟧x - (⟦1⟧)(⟦2⟧) = 0$、よって $x = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$。`,
  '2280y15nq4f': R`$A = ⟦0⟧$、$B = ⟦1⟧$ のとき、$⟦4⟧A - ⟦5⟧B$ の第 ⟦2⟧ 行第 ⟦3⟧ 列の成分を求めなさい。`,
  'h3p6r4d6o': R`$A = ⟦0⟧$、$B = ⟦1⟧$ のとき、$AB$ の第 ⟦2⟧ 行第 ⟦3⟧ 列の成分を求めなさい。`,
  'xdj657lej': R`$A$ の第 ⟦0⟧ 行と $B$ の第 ⟦1⟧ 列：$⟦2⟧ = ⟦3⟧$。（$2 \times 3$ 行列と $3 \times 2$ 行列の積は $2 \times 2$ 行列です。）`,

  // vectors
  '1gljxtukffx': R`
<p><b>ベクトル</b>は大きさと向きをもちます。成分で表すと $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ または $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$。$P$ から $Q$ へのベクトルは $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$ です。</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  'i7t2goihqv': R`大きさ`,
  '1czax49eh4c': R`和`,
  'q2ntocofkn': R`成分ごとにたす`,
  'oswzhgqxwz': R`実数倍`,
  '1bnyaikchfp': R`$k\mathbf{a}$：各成分を $k$ 倍する`,
  '28hldv2q33s': R`単位ベクトル`,
  '214ftyeo0vg': R`内積`,
  '1xghg9dwzeq': R`$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta \qquad\Longrightarrow\qquad \cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$<p>零ベクトルでない 2 つのベクトルが<b>垂直</b>であることと $\mathbf{a}\cdot\mathbf{b} = 0$ は同値です。</p>`,
  '1w9baxb120w': R`<p>$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$、$\mathbf{b} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$：$\mathbf{a}\cdot\mathbf{b} = 15 + 48 = 63$、$|\mathbf{a}| = 5$、$|\mathbf{b}| = 13$ なので $\cos\theta = \frac{63}{65}$、$\theta \approx 14.3^\circ$。</p>`,
  '6pzkmdncqf': R`<p>2 つのベクトルの内積はベクトルではなく<b>数</b>です。</p>`,
  '4u2plhe47g': R`$⟦0⟧$ の大きさを求めなさい。`,
  '252q8tpxn2p': R`$\mathbf{a} = ⟦0⟧$、$\mathbf{b} = ⟦1⟧$ のとき、$\mathbf{a}\cdot\mathbf{b}$ を求めなさい。`,
  '17ht25mwywu': R`$\mathbf{a} = ⟦0⟧$、$\mathbf{b} = ⟦1⟧$ のとき、$⟦2⟧\mathbf{a} ⟦3⟧ ⟦4⟧\mathbf{b}$ を求めなさい。`,
  '2gdqizkyobq': R`成分を順にコンマで区切って入力しなさい。`,
  '1mpyqj0mwgx': R`成分ごとに計算：$⟦0⟧ = ⟦1⟧$。`,
  '14p7yoy4f3a': R`$⟦0⟧$ と $⟦1⟧$ が垂直になるような $k$ を求めなさい。`,
  '127php4kbc3': R`垂直 ⇔ 内積が 0：$⟦0⟧k + (⟦1⟧)(⟦2⟧) = 0$、よって $k = ⟦3⟧$。`,
  '1kydmvss2ex': R`$⟦0⟧$ と $⟦1⟧$ のなす角を $\theta$ とするとき、$\cos\theta$ を求めなさい。`,
  '1b0azawmrlf': R`$⟦0⟧$ と同じ向きの単位ベクトルを求めなさい。`,
  '280s3ajjt4e': R`成分をコンマで区切って入力しなさい。例：3/5, -4/5`,
  '22ii0i40ri': R`$|\mathbf{v}| = ⟦0⟧$。各成分を ⟦1⟧ でわると $\hat{\mathbf{v}} = ⟦2⟧$。`,

  // limits
  '239kmg9x5mj': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$ は、$x$ が $a$ に近づくとき $f(x)$ がいくらでも $L$ に近づくことを表します。$x = a$ そのものでどうなっているかは関係ありません。</p>
<h3>求め方</h3>
<ol><li><b>そのまま代入</b>：多項式などの連続関数で使えます：$\lim_{x \to 2}(x^2 + 3x) = 10$。</li><li>$\frac{0}{0}$ になるときは<b>因数分解して約分</b>：$\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$。</li><li>根号を含む式は<b>有理化</b>：共役な式をかけます。</li></ol>
⟦0⟧
<h3>無限大での極限</h3>
⟦1⟧
<h3>三角関数の重要な極限</h3>
⟦2⟧
<h3>連続性</h3>
<p>$\lim_{x \to a} f(x) = f(a)$ なら $f$ は $a$ で連続です（穴、とび、漸近線がない）。区間ごとに定義された関数では、つなぎ目で 2 つの式の値が一致するようにします。</p>
⟦3⟧`,
  '25jnb5snm7z': R`<p>分数関数では、分子と分母を分母の $x$ の最高次の累乗でわります：</p><ul><li>次数が同じ → 最高次の係数の比；</li><li>分子の次数が低い → 0；</li><li>分子の次数が高い → 有限の極限なし（$\pm\infty$）。</li></ul>`,
  'extw7corym': R`<p>$\frac{0}{0}$ は「0」でも「定義されない」でもなく不定形です。さらに式変形（因数分解、有理化）が必要という合図です。</p>`,
  '18znpgymeuk': R`$\displaystyle\lim_{x \to ⟦0⟧} (⟦1⟧)$ を求めなさい。`,
  '1tq4b7d4h53': R`多項式なので代入します：$⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧$。`,
  '1n96bgorw1d': R`$\displaystyle\lim_{x \to ⟦0⟧} \frac{⟦1⟧}{x ⟦2⟧}$ を求めなさい。`,
  '295o4zt7f3w': R`代入すると $\frac{0}{0}$。因数分解すると $\frac{(x ⟦0⟧)(x ⟦1⟧)}{x ⟦2⟧} = x ⟦3⟧$、よって極限は $⟦4⟧ ⟦5⟧ = ⟦6⟧$。`,
  '1rjdd048rzk': R`$\displaystyle\lim_{x \to \infty} \frac{⟦0⟧}{⟦1⟧}$ を求めなさい。`,
  '229ply6f2l2': R`分子の次数は分母より低いので、$x^2$ でわると分子の各項は 0 に近づき、極限は $0$ です。`,
  '1m8u7pc3qh1': R`次数が同じなので、極限は最高次の係数の比：$\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$。`,
  '1ynpy6v2s15': R`$\displaystyle\lim_{x \to 0} \frac{⟦0⟧}{⟦1⟧}$ を求めなさい。`,
  'if95qf815v': R`$\frac{\sin u}{u} \to 1$（と $\frac{\tan u}{u} \to 1$）を使うと、式は $\frac{⟦0⟧x}{⟦1⟧x} = ⟦2⟧$ のようにふるまいます。`,
  'blyu2go12i': R`$\displaystyle\lim_{x \to 0} \frac{\sqrt{x + ⟦0⟧} - ⟦1⟧}{x}$ を求めなさい。`,
  'fj8u70cngg': R`共役な式をかけます：$\frac{(x + ⟦0⟧) - ⟦1⟧}{x(\sqrt{x + ⟦2⟧} + ⟦3⟧)} = \frac{1}{\sqrt{x + ⟦4⟧} + ⟦5⟧} \to \frac{1}{⟦6⟧}$。`,
  '1kmmd6tilgi': R`$f(x) = \begin{cases} x^2 + k, & x \lt ⟦0⟧ \\ ⟦1⟧, & x \ge ⟦2⟧ \end{cases}$ が $x = ⟦3⟧$ で連続となるような $k$ を求めなさい。`,
  '1l84k7ifkz6': R`$x = ⟦0⟧$ で 2 つの式の値が一致する必要があります：$(⟦1⟧)^2 + k = ⟦2⟧(⟦3⟧) ⟦4⟧$、よって $⟦5⟧ + k = ⟦6⟧$、$k = ⟦7⟧$。`,

  // derivatives
  '1pv2wkwyvwg': R`
<p><b>導関数</b> $f'(x)$ は $f$ の瞬間の変化率、つまり $x$ における接線の傾きです。極限で定義されます：</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>接線</h3>
<p>$x = a$ における接線は傾き $m = f'(a)$ で、点 $(a, f(a))$ を通ります：$y - f(a) = f'(a)(x - a)$。</p>
<h3>停留点</h3>
<p>$f'(x) = 0$ のところでグラフは一瞬水平になります。第 2 次導関数で判定：$f''(a) \gt 0$ → 極小；$f''(a) \lt 0$ → 極大。$f' \gt 0$ で増加、$f' \lt 0$ で減少します。</p>
<h3>最大・最小の応用</h3>
⟦3⟧
⟦4⟧`,
  '1kddytp99dm': R`公式`,
  '21wooetnwi8': R`<p>100 m のさくで川沿いに長方形を囲みます（川側にはさく不要）。辺を $x, y, x$ とすると $2x + y = 100$、面積 $A = x(100 - 2x)$。$A'(x) = 100 - 4x = 0$ より $x = 25$、よって $A_{\max} = 25 \times 50 = 1250$ m²。</p>`,
  '14x6kebc9en': R`<p>定数の微分は 0 です。定数項を $f'(x)$ に残さないようにしましょう。</p>`,
  'sk165jmy0e': R`$f(x) = ⟦0⟧$ のとき、$f'(x)$ を求めなさい。`,
  '1z8enx6jmxw': R`各項に累乗の微分公式を使うと $f'(x) = ⟦0⟧$（定数は消えます）。`,
  'rdfbrjf6fd': R`$f(x) = ⟦0⟧$ のとき、$f'(⟦1⟧)$ を求めなさい。`,
  '12fn6a7y0fo': R`$f'(x) = ⟦0⟧$ なので、$f'(⟦1⟧) = ⟦2⟧$。`,
  '13xytl77ctg': R`$y = ⟦0⟧$ の $x = ⟦1⟧$ における接線の方程式を求めなさい。`,
  'zxpf5t25tk': R`傾き：$y' = 2x ⟦0⟧$ より、$x = ⟦2⟧$ で $m = ⟦1⟧$。接点：$(⟦3⟧, ⟦4⟧)$。よって $y - ⟦5⟧ = ⟦6⟧(x - ⟦7⟧)$、すなわち $y = ⟦8⟧$。`,
  '6or380e65b': R`$x = ⟦0⟧ \text{ と } x = ⟦1⟧$`,
  '1ib3oh8we5r': R`$f(x) = ⟦0⟧$ の停留点の $x$ 座標を求めなさい。`,
  '8cxs5u8eb2': R`$f'(x) = ⟦0⟧ = 3(x ⟦1⟧)(x ⟦2⟧) = 0$ より、$x = ⟦3⟧$ または $x = ⟦4⟧$。`,
  '2diynqfs1vm': R`$f(x) = ⟦0⟧$ が極小となる $x$ の値を求めなさい。`,
  'qiab8fav1k': R`$f'(x) = 3(x ⟦0⟧)(x ⟦1⟧)$ は $x = ⟦2⟧$ と $x = ⟦3⟧$ で 0。$f''(x) = 6x ⟦4⟧$ は $x = ⟦5⟧$ で正なので、そこで極小です。`,
  '2bfp82dmoiw': R`農家の人が長さ ⟦0⟧ m のさくで、まっすぐな川に沿った長方形の畑を囲みます。川に沿った辺にはさくは不要です。面積の最大値を求めなさい。`,
  '1sgjbqwzp29': R`辺を $x, y, x$ とし $2x + y = ⟦0⟧$。$A = x(⟦1⟧ - 2x)$、$A' = ⟦2⟧ - 4x = 0$ より $x = ⟦3⟧$、$y = ⟦4⟧$、$A = ⟦5⟧$ m²。`,
  '1dz6162q97e': R`周の長さが ⟦0⟧ cm の長方形があります。面積の最大値を求めなさい。`,
  '12er060agfx': R`横を $x$ とすると縦は $⟦0⟧ - x$、$A = x(⟦1⟧ - x)$。$A' = ⟦2⟧ - 2x = 0$ より $x = ⟦3⟧$（正方形）、面積は $⟦4⟧$ cm²。`,
  'jksdr4ukrw': R`$y = ⟦0⟧$ を微分しなさい。`,
  '1gytk3lwm2l': R`$\frac{d}{dx}\sin x = \cos x$、$\frac{d}{dx}\cos x = -\sin x$ なので、$y' = ⟦0⟧$。`,
  't51ufxvzbf': R`ある点の位置が $s(t) = ⟦0⟧$ m で表されます。$t = ⟦1⟧$ s における加速度を求めなさい。`,
  'bakv4or3q9': R`$v(t) = s'(t) = ⟦0⟧$、$a(t) = v'(t) = ⟦1⟧$。$t = ⟦2⟧$ のとき $a = ⟦3⟧$ m/s²。`,
  'twj64cwqj6': R`ある点の位置が $s(t) = ⟦0⟧$ m で表されます。$t = ⟦1⟧$ s における速度を求めなさい。`,
  '1yi10f0kgm7': R`$v(t) = s'(t) = ⟦0⟧$ なので、$v(⟦1⟧) = ⟦2⟧$ m/s。`,

  // integrals
  '1wdt9h7s66j': R`
<p>積分は微分の逆の操作です。$F' = f$ となる $F$ を $f$ の<b>原始関数</b>といい、<b>不定積分</b>には積分定数をつけます：</p>
⟦0⟧
⟦1⟧
<h3>定積分</h3>
⟦2⟧
<p>$f \ge 0$ なら、これは $x = a$ から $x = b$ までの曲線の下の面積です。$x$ 軸より下の部分は負として数えられるので、全体の面積を求めるときは解のところで積分を分けます。</p>
⟦3⟧
<h3>導関数からもとの関数を求める</h3>
<p>$f'(x) = 6x + 2$、$f(1) = 10$ なら、$f(x) = 3x^2 + 2x + C$ で、$3 + 2 + C = 10$ より $C = 5$。</p>
⟦4⟧`,
  '20z1821bwrr': R`<p>$\int (6x^2 - 4x + 3)\,dx = 2x^3 - 2x^2 + 3x + C$。微分して確かめましょう。</p>`,
  '1jsx5j8bwuv': R`微分積分学の基本定理`,
  'k8jg70602j': R`<p>$y = x^2$ と $y = 2x$ で囲まれた面積：交点は $x = 0$ と $x = 2$ で、その間は $2x \ge x^2$ なので $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$。</p>`,
  '2645ntoenmj': R`<p>不定積分では $+ C$ を忘れずに。定積分ではつけません（打ち消し合います）。</p>`,
  '1a4h4aolv1n': R`$\displaystyle\int (⟦0⟧)\,dx$ を求めなさい。`,
  '14w03nftsp9': R`各項の指数を 1 増やし、新しい指数でわります：$⟦0⟧ + C$。`,
  'lhk659hv1w': R`$\displaystyle\int_{⟦0⟧}^{⟦1⟧} (⟦2⟧)\,dx$ を計算しなさい。`,
  'wzkchwuid3': R`原始関数の 1 つは $F(x) = ⟦0⟧$。$F(⟦1⟧) - F(⟦2⟧) = ⟦3⟧ - ⟦4⟧ = ⟦5⟧$。`,
  '2g5117b4rfq': R`$y = ⟦0⟧$ と $x$ 軸で囲まれた部分の面積を求めなさい。`,
  '1qd8emk0tlu': R`曲線は $x = \pm ⟦0⟧$ で $x$ 軸と交わります。面積 $= \int_{-⟦1⟧}^{⟦2⟧} (⟦3⟧ - x^2)\,dx = \left[⟦4⟧x - \frac{x^3}{3}\right]_{-⟦5⟧}^{⟦6⟧} = ⟦7⟧$。`,
  '1wjuv7zitnn': R`$y = x^2$ と $y = ⟦0⟧x$ で囲まれた部分の面積を求めなさい。`,
  'ospw7lwugt': R`交点は $x = 0$ と $x = ⟦0⟧$。面積 $= \int_0^{⟦1⟧} (⟦2⟧x - x^2)\,dx = \frac{⟦3⟧^3}{2} - \frac{⟦4⟧^3}{3} = ⟦5⟧$。`,
  '2c9m4g6dimy': R`$f'(x) = ⟦0⟧$、$f(0) = ⟦1⟧$ のとき、$f(⟦2⟧)$ を求めなさい。`,
  '29kyl7mnwt5': R`$f(x) = ⟦0⟧ + C$ で、$f(0) = C = ⟦1⟧$。よって $f(⟦2⟧) = ⟦3⟧$。`,
  '1p83y3ccpb': R`$\int \cos x\,dx = \sin x$、$\int -\sin x\,dx = \cos x$ なので、結果は $⟦0⟧ + C$。`,
  '22xlapf2gb7': R`$\displaystyle\int_0^{\pi/2} ⟦0⟧\cos x\,dx$ を計算しなさい。`,
  '1ppkvfv3p1b': R`$\displaystyle\int_0^{\pi} ⟦0⟧\sin x\,dx$ を計算しなさい。`,
  // formula-only entries
  'itm4o8cny': R`\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}`,
  '25hetn68fsz': R`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`,
  '1i9j07wofgh': R`\lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \lim_{x \to 0}\frac{\sin ax}{bx} = \frac{a}{b}`,
  '21rfw9yowzp': R`$$\frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}c = 0 \qquad \frac{d}{dx}\big(af + bg\big) = af' + bg'$$$$\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x$$`,
  'oq0mo2ln2m': R`$$\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C \quad (n \ne -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$$$\int \cos x\,dx = \sin x + C \qquad \int \sin x\,dx = -\cos x + C$$`,
  'ktnrryzzqc': R`$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$`,
});
