/* 한국어 — 대학 (선형대수 → 라플라스 변환) */
addT('ko', {
  // linear-algebra
  'aoku0sfspm': R`
<h3>연립일차방정식과 계수</h3>
<p>연립방정식 $A\mathbf{x} = \mathbf{b}$는 첨가행렬 $[A \mid \mathbf{b}]$를 기본행연산으로 사다리꼴로 바꾸어 푼다. $A$의 <b>계수</b>는 선도 성분(피벗)의 개수, 곧 사다리꼴에서 영이 아닌 행의 수이다.</p>
⟦0⟧
<h3>행렬식</h3>
⟦1⟧
<p>$n \times n$ 행렬의 유용한 성질: $\det(AB) = \det A \det B$, $\det(A^T) = \det A$, $\det(A^{-1}) = \frac{1}{\det A}$, $\det(kA) = k^n\det A$. 크라메르 공식: $x_i = \frac{\det A_i}{\det A}$.</p>
<h3>고윳값과 고유벡터</h3>
⟦2⟧
⟦3⟧
<p>$A$가 일차독립인 고유벡터를 $n$개 가지면 <b>대각화 가능</b>하다: $A = PDP^{-1}$. $P$의 열은 고유벡터, $D$의 대각성분은 고윳값이다.</p>
⟦4⟧`,
  'q9p1mxjp5t': R`<p><b>차원 정리:</b> $m \times n$ 행렬에 대하여 $\text{rank}(A) + \text{nullity}(A) = n$. 정사각행렬 $A$가 가역 $\iff \det A \ne 0 \iff$ 열벡터들이 일차독립 $\iff \text{rank} = n$.</p>`,
  '12oak6poq42': R`\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)`,
  'zx600ry55i': R`$$A\mathbf{v} = \lambda\mathbf{v},\; \mathbf{v} \ne \mathbf{0} \qquad\Longleftrightarrow\qquad \det(A - \lambda I) = 0$$<p>$2 \times 2$ 행렬에서는 $\lambda^2 - (\text{tr}\,A)\lambda + \det A = 0$. 고윳값의 합은 대각합, 곱은 행렬식과 같다.</p>`,
  '1khrdp55fj': R`<p>$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$: $\lambda^2 - 7\lambda + 10 = 0$이므로 $\lambda = 2, 5$. $\lambda = 5$일 때 $(A - 5I)\mathbf{v} = 0$에서 $\mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.</p>`,
  '21awxvuldiu': R`<p>$\det(2A) = 2^n\det A$이지 $2\det A$가 아니다 — $n$개의 행이 모두 2배가 된다.</p>`,
  '19a9vb1rr2m': R`첫째 행을 따라 전개: $⟦0⟧(⟦1⟧) - ⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$.`,
  '1j2onaty0gh': R`$⟦0⟧$의 고윳값을 구하시오.`,
  'ynzibmbl86': R`두 고윳값을 쉼표로 구분하여 입력하세요.`,
  '23zxsoa3fr0': R`$\lambda^2 - (\text{tr})\lambda + \det = \lambda^2 ⟦0⟧\lambda ⟦1⟧ = 0$이므로 $\lambda = ⟦2⟧$ 또는 $\lambda = ⟦3⟧$. (확인: 합은 대각합 ⟦4⟧, 곱은 행렬식 ⟦5⟧.)`,
  '2etvam6ts6i': R`$⟦0⟧$의 퇴화차수(영공간의 차원)를 구하시오.`,
  '21ne48l6zig': R`$⟦0⟧$의 계수를 구하시오.`,
  'guqg5s6tj7': R`$\det \ne 0$이므로 세 행은 일차독립이다: 계수 3.`,
  '1q1ko1sbkfa': R`한 행이 나머지 두 행의 일차결합이고, 그 두 행은 일차독립이다: 계수 2.`,
  '2bdvxka58sc': R`모든 행이 같은 행의 상수배이다: 계수 1.`,
  '1pbgto6ecv4': R` 차원 정리에 의해 퇴화차수 $= 3 - ⟦0⟧ = ⟦1⟧$.`,
  '167s06hkdpt': R`$A$는 $\det A = ⟦2⟧$인 $⟦0⟧ \times ⟦1⟧$ 행렬이다. $\det(A^{-1})$을 구하시오.`,
  '124zlt4oeit': R`$A$는 $\det A = ⟦2⟧$인 $⟦0⟧ \times ⟦1⟧$ 행렬이다. $⟦3⟧$을 구하시오.`,
  'vtdcjwqxja': R`⟦0⟧개의 행이 각각 ⟦1⟧배가 된다: $⟦2⟧^{⟦3⟧} \times ⟦4⟧ = ⟦5⟧$.`,
  'd4v2fg20q4': R`전치해도 행렬식은 변하지 않는다: ⟦0⟧.`,
  '26v5gcnmls7': R`연립방정식을 풀어 $⟦0⟧$의 값을 구하시오: $$\begin{cases} ⟦1⟧ \end{cases}$$`,
  '36y25q4ph4': R`소거법(또는 $\det A = ⟦0⟧ \ne 0$이므로 크라메르 공식)으로 $(x, y, z) = ⟦1⟧$, 따라서 $⟦2⟧ = ⟦3⟧$.`,
  '1w651quute8': R`벡터 $⟦0⟧$은 일차독립인가?`,
  '1nhr23w337j': R`일차독립`,
  '1ykattdq3py': R`일차종속`,
  '71c2j2dn5w': R`이 벡터들을 열로 하는 행렬을 만들면 행렬식은 ⟦0⟧. ⟦1⟧`,
  'd8cecy9nad': R`0이 아니므로 일차독립이다.`,
  'nwja1imq1g': R`0이므로 일차종속이다(하나가 나머지의 일차결합이다).`,
  '109v3qsafjj': R`$\mathbf{v} = ⟦0⟧$은 $A = ⟦1⟧$의 고유벡터이다. 이에 대응하는 고윳값은?`,
  'spg1kefpa7': R`$A\mathbf{v} = ⟦0⟧ = ⟦1⟧⟦2⟧$이므로 $\lambda = ⟦3⟧$.`,

  // complex
  'n87wkmbfmz': R`
<p>허수단위는 $i^2 = -1$을 만족한다. 복소수는 $z = a + bi$ 꼴이고, 실수부는 $\text{Re}(z) = a$, 허수부는 $\text{Im}(z) = b$이다. $i$의 거듭제곱은 4개마다 반복된다: $i, -1, -i, 1, \ldots$</p>
⟦0⟧
⟦1⟧
<h3>극형식과 오일러 공식</h3>
⟦2⟧
⟦3⟧
<p>1의 $n$제곱근은 $e^{2\pi ik/n}$ ($k = 0, 1, \ldots, n - 1$)이며, 단위원 위에 같은 간격으로 놓인 점들이다.</p>
⟦4⟧`,
  'rz9c61mn5': R`곱셈`,
  '1lvuh3a6n9s': R`켤레`,
  '73hhnvn9cf': R`$\bar{z} = a - bi$, $z\bar{z} = a^2 + b^2$`,
  '8ju8zqboy3': R`나눗셈`,
  '23m7410nhvb': R`분모의 켤레복소수를 분자와 분모에 곱한다`,
  '2at5jue99d3': R`절댓값`,
  '26m66idec7i': R`편각`,
  '18sul084cs9': R`$\arg z = \theta$, $\tan\theta = \frac{b}{a}$ (사분면에 주의)`,
  'cavhj9pbbb': R`$$z = r(\cos\theta + i\sin\theta) = re^{i\theta} \qquad\qquad z^n = r^n e^{in\theta} \;\;\text{(드무아브르)}$$`,
  '16lvmowwhri': R`<p>$1 + i = \sqrt{2}e^{i\pi/4}$이므로 $(1 + i)^8 = (\sqrt{2})^8 e^{2\pi i} = 16$.</p>`,
  '256fv20o5wc': R`<p>$-1 - i$의 편각은 $\frac{\pi}{4}$가 아니라 $-\frac{3\pi}{4}$이다: $\arctan\frac{b}{a}$만으로는 제3사분면과 제1사분면을 구별할 수 없다.</p>`,
  '10omtzlugr6': R`$(⟦0⟧)(⟦1⟧)$을 간단히 하시오.`,
  'hty9ty1x7v': R`a+bi 꼴로 입력하세요.`,
  '1zsla5l2vrq': R`$(⟦0⟧)(⟦1⟧) + (⟦2⟧)(⟦3⟧)i + (⟦4⟧)(⟦5⟧)i + (⟦6⟧)(⟦7⟧)i^2 = ⟦8⟧$ ($i^2 = -1$ 이용).`,
  '1z0a8n17xaw': R`$|⟦0⟧|$을 구하시오.`,
  '7g8mi40aa1': R`$\dfrac{⟦0⟧}{⟦1⟧}$을 간단히 하시오.`,
  '1lmk9l2nr3e': R`분자와 분모에 $⟦0⟧$을 곱한다. 분모는 $⟦1⟧$, 분자는 $⟦2⟧$가 되므로 결과는 $⟦3⟧$.`,
  '28axbqdj3sw': R`$i^{⟦0⟧}$을 간단히 하시오.`,
  'q7margvq3g': R`$i$의 거듭제곱은 4개마다 반복된다. $⟦0⟧ = 4 \times ⟦1⟧ + ⟦2⟧$이므로 $i^{⟦3⟧} = i^{⟦4⟧} = ⟦5⟧$.`,
  '1pjjj2x31s7': R`$z = ⟦0⟧$의 주편각 $\arg z \in (-\pi, \pi]$를 구하시오.`,
  '2fusqwp7x7b': R`$z = ⟦0⟧$은 양의 실수축으로부터 각 $⟦1⟧$의 위치에 있으므로(사분면 확인) $\arg z = ⟦2⟧$.`,
  '75mna4515k': R`$z = ⟦0⟧$을 지수 꼴 $re^{i\theta}$로 나타내시오.`,
  'bg7vixv5uf': R`$r = |z| = ⟦0⟧$, $\theta = \arg z = ⟦1⟧$이므로 $z = ⟦2⟧e^{i ⟦3⟧}$.`,
  '15suw4uuv8i': R`드무아브르의 정리를 이용하여 $(⟦0⟧)^{⟦1⟧}$을 계산하시오.`,
  '2e4kqt1xydt': R`$⟦0⟧ = \sqrt{2}\,e^{i\theta}$, $\theta = ⟦1⟧$. 그러면 $(\sqrt{2})^{⟦2⟧}e^{i⟦3⟧\theta} = ⟦4⟧e^{i⟦5⟧\theta} = ⟦6⟧$.`,
  '1xd7417ut46': R`$z = ⟦0⟧$일 때, $\text{⟦1⟧}(z^2)$를 구하시오.`,

  // distributions
  '28d8604hmp9': R`
<p><b>확률변수</b> $X$는 각 결과에 수를 대응시킨다. 확률이 $p(x)$인 이산확률변수 $X$에 대하여:</p>
⟦0⟧
⟦1⟧
<h3>정규분포</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'gk52muplh1': R`E[X] = \sum x\,p(x) \qquad \text{Var}(X) = E[X^2] - (E[X])^2 \qquad E[aX + b] = aE[X] + b \qquad \text{Var}(aX + b) = a^2\,\text{Var}(X)`,
  '115owsb7jcv': R`분포`,
  'z5bw2hz29r': R`P(X = k) 또는 밀도`,
  '1runl3m75u8': R`분산`,
  '1xs6so1xns8': R`이항분포 $B(n, p)$`,
  '1rwt3dxzew1': R`푸아송 분포 $(\lambda)$`,
  'n8vzzqt60t': R`$[a, b]$에서의 균등분포`,
  '2cdr2b2t24p': R`지수분포 $(\lambda)$`,
  'l349ss11hc': R`정규분포 $N(\mu, \sigma^2)$`,
  '26wsuf9ho5r': R`종 모양 곡선`,
  '1bw0zjk7wg1': R`<p>$Z = \dfrac{X - \mu}{\sigma}$로 표준화한 뒤 표준정규분포표를 이용한다. <b>68–95–99.7 규칙</b>: 값의 약 68%, 95%, 99.7%가 평균으로부터 표준편차의 1배, 2배, 3배 이내에 있다.</p>`,
  '1mn62kz3dqi': R`<p>키 $X \sim N(170, 8^2)$. 키 186 cm는 $z = \frac{186 - 170}{8} = 2$이므로, 이보다 큰 사람은 약 2.5%뿐이다.</p>`,
  '20odz9yh9el': R`<p>이항분포는 성공 확률이 같은 독립 시행을 정해진 횟수만큼 할 때 쓴다. 푸아송 분포는 평균 발생률이 일정할 때 어떤 구간에서 일어나는 사건의 횟수를 센다.</p>`,
  'hehw668sc4': R`이 분포의 $E[X]$를 구하시오.⟦0⟧`,
  'ggtradb99r': R`공정한 동전을 ⟦0⟧번 던진다. 앞면이 정확히 ⟦1⟧번 나올 확률은?`,
  '1gonhfsfe0e': R`$X \sim B\!\left(⟦0⟧, \frac{1}{3}\right)$. $P(X = ⟦1⟧)$을 구하시오.`,
  '2e8zcm46v5k': R`$X \sim B(⟦0⟧, ⟦1⟧)$. $\text{Var}(X)$를 구하시오.`,
  '1sv4co448ex': R`$\text{Var}(X) = np(1 - p) = ⟦0⟧(⟦1⟧)(⟦2⟧) = ⟦3⟧$.`,
  'qmg93npnbt': R`$X \sim B(⟦0⟧, ⟦1⟧)$. $E[X]$를 구하시오.`,
  '283j9ftzcid': R`$X \sim N(⟦0⟧, ⟦1⟧^2)$. $x = ⟦2⟧$의 $z$점수를 구하시오.`,
  '1kbz6k640p5': R`$X \sim \text{Poisson}(⟦0⟧)$. $P(X = ⟦1⟧)$을 소수점 아래 넷째 자리까지 구하시오.`,
  '2el5p15nmmp': R`⟦0⟧과 ⟦1⟧ 사이`,
  'lwhiv9yady': R`⟦0⟧ 초과`,
  'x696ofvj9v': R`⟦0⟧ 미만`,
  '1cdk3p0w1a9': R`시험 점수가 평균 ⟦0⟧, 표준편차 ⟦1⟧인 정규분포를 따른다. 68–95–99.7 규칙을 이용하면, 점수가 ⟦2⟧인 비율은 약 몇 %인가?`,
  '2ciqs8smgdj': R`평균으로부터 표준편차 몇 배인지로 바꾸고, 1σ 이내 68%, 2σ 이내 95%, 3σ 이내 99.7%(나머지는 양쪽 꼬리가 똑같이 나눔)를 이용한다: <b>⟦0⟧%</b>.`,
  '1b8kg565owb': R`$E[X] = ⟦0⟧$, $\text{Var}(X) = ⟦1⟧$. $\text{Var}(⟦2⟧)$를 구하시오.`,
  '21eg07xqby': R`$\text{Var}(aX + b) = a^2\,\text{Var}(X) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ — 상수 ⟦3⟧은 영향을 주지 않는다.`,
  'ha18xspr5t': R`$E[X] = ⟦0⟧$, $\text{Var}(X) = ⟦1⟧$. $E[⟦2⟧]$를 구하시오.`,

  // inference
  'oph0fjnqfd': R`
<p><b>표본</b> 통계량(예: $\bar{x}$)으로 <b>모집단</b>의 모수(예: $\mu$)를 추정한다. <b>중심극한정리</b>에 의해 $n$이 크면 표본평균은 평균이 $\mu$, <b>표준오차</b>가 $\frac{\sigma}{\sqrt{n}}$인 정규분포를 근사적으로 따른다.</p>
<h3>신뢰구간</h3>
⟦0⟧
<p>오차한계를 $E$로 하려면 $n \ge \left(\frac{z^*\sigma}{E}\right)^2$(올림)이 필요하다. $\sigma$를 모르면 $s$와 $t$분포를 쓴다.</p>
<h3>가설검정</h3>
<ol><li>$H_0$(예: $\mu = \mu_0$)과 $H_1$을 세운다.</li><li>검정통계량을 계산한다. 예: $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$.</li><li><b>유의확률(p값)</b>을 구한다: $H_0$이 참이라고 가정할 때 적어도 이만큼 극단적인 결과가 나올 확률.</li><li>$p \le \alpha$이면 $H_0$을 기각하고, 그렇지 않으면 기각하지 않는다.</li></ol>
⟦1⟧
<h3>선형회귀</h3>
<p>최소제곱 직선 $\hat{y} = a + bx$의 기울기는 $b = r\frac{s_y}{s_x}$이고 $(\bar{x}, \bar{y})$를 지나므로 $a = \bar{y} - b\bar{x}$.</p>
⟦2⟧`,
  'cozbu7bifr': R`\bar{x} \pm z^*\frac{\sigma}{\sqrt{n}} \qquad z^* = 1.645 \;(90\%),\; 1.96 \;(95\%),\; 2.576 \;(99\%)`,
  '7nca7j57l5': R`H₀ 참`,
  '2e0zey7f13x': R`H₀ 거짓`,
  '1nokpmpua28': R`H₀ 기각`,
  'qa9cxjojd2': R`제1종 오류 (확률 α)`,
  'z1afbgzons': R`옳음 (검정력)`,
  'tc6mfczzyi': R`H₀ 기각하지 않음`,
  'w131ulu49o': R`옳음`,
  'e51gkfcb06': R`제2종 오류 (확률 β)`,
  '6idiejz1ba': R`<p>“$H_0$을 기각하지 않는다”는 “$H_0$을 받아들인다”와 같지 않다 — 데이터가 $H_0$에 반하는 충분한 증거가 되지 못했을 뿐이다.</p>`,
  'awqxfz9vdv': R`모집단의 $\sigma = ⟦0⟧$이다. 크기가 ⟦1⟧인 표본에 대하여 평균의 표준오차를 구하시오.`,
  'ugvd79s2wi': R`크기 ⟦0⟧인 표본의 평균은 ⟦1⟧이고, 모표준편차는 ⟦2⟧이다. $\mu$에 대한 ⟦4⟧% 신뢰구간의 ⟦3⟧ 한계를 소수점 아래 둘째 자리까지 구하시오.`,
  '1n36a0strty': R`오차한계 $= ⟦0⟧ \times \frac{⟦1⟧}{\sqrt{⟦2⟧}} = ⟦3⟧$. ⟦4⟧`,
  '2ekc2g43ffk': R`위쪽 한계 $= ⟦0⟧ + ⟦1⟧ \approx ⟦2⟧$.`,
  'u2fj3njiv8': R`아래쪽 한계 $= ⟦0⟧ - ⟦1⟧ \approx ⟦2⟧$.`,
  '1i53ibdizmj': R`$\sigma = ⟦1⟧$일 때 $H_0: \mu = ⟦0⟧$을 검정한다. 크기 ⟦2⟧인 표본에서 $\bar{x} = ⟦3⟧$이다. 검정통계량 $z$를 소수점 아래 둘째 자리까지 구하시오.`,
  'b7sayy3tzp': R`어떤 검정의 p값이 ⟦0⟧이다. 유의수준 ⟦1⟧%에서의 결정은?`,
  '1adfzwf3gei': R`기각하지 않음`,
  '2fh7exkwsd7': R`기각할 수 없음`,
  '1ui411puarn': R`p값을 $\alpha = ⟦0⟧$과 비교한다: $⟦1⟧ ⟦2⟧ ⟦3⟧$, ⟦4⟧`,
  '19asmns888x': R`따라서 $H_0$을 <b>기각한다</b>.`,
  '28e9takeetw': R`따라서 $H_0$을 <b>기각하지 않는다</b>.`,
  '3boqwtx8y6': R`$x$에 대한 $y$의 회귀직선은 기울기가 ⟦0⟧이고 $(\bar{x}, \bar{y}) = (⟦1⟧, ⟦2⟧)$를 지난다. $x = ⟦3⟧$일 때 $y$를 예측하시오.`,
  '1xlncasuj2t': R`절편 $a = \bar{y} - b\bar{x} = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$. 그러면 $\hat{y} = ⟦4⟧ ⟦5⟧(⟦6⟧) = ⟦7⟧$.`,
  '1juzrcbx7yp': R`$x$에 대한 $y$의 회귀직선은 기울기가 ⟦0⟧이고, $\bar{x} = ⟦1⟧$, $\bar{y} = ⟦2⟧$이다. 절편을 구하시오.`,
  'ygsgt4zx8s': R`직선은 $(\bar{x}, \bar{y})$를 지난다: $a = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$.`,
  '1fjn7fhcpwy': R`H₀이 실제로 참인데 H₀을 기각함`,
  '2czv0lmmxbv': R`제1종 오류`,
  '1rsaomc3xxj': R`H₀이 실제로 거짓인데 H₀을 기각하지 않음`,
  '1knmx3avsv8': R`제2종 오류`,
  '7bbk61slol': R`H₀이 실제로 거짓이고 H₀을 기각함`,
  '6vojkrxnxd': R`옳은 결정`,
  '27k0u0dgkx8': R`H₀이 실제로 참이고 H₀을 기각하지 않음`,
  'j30d9a2wnu': R`무고한 피고인에게 유죄 판결 (H₀: 무죄)`,
  '1r9j0p9otdz': R`유죄인 피고인을 풀어 줌 (H₀: 무죄)`,
  'yce1tww5je': R`이것은 어떤 종류의 결과인가? <i>⟦0⟧</i>.`,
  'f5q8ah45y5': R`제1종 = 참인 $H_0$을 기각함(잘못된 경보); 제2종 = 거짓인 $H_0$을 놓침. 따라서 이것은: <b>⟦0⟧</b>.`,
  '17su48d7rp0': R`$\sigma = ⟦2⟧$일 때, ⟦0⟧% 신뢰구간의 오차한계가 ⟦1⟧ 이하가 되는 최소 표본 크기는?`,
  'cysiojo18k': R`$n \ge \left(\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧}\right)^2 \approx ⟦3⟧$이므로 올림하여 $n = ⟦4⟧$.`,

  // discrete
  'a1ovpdx0vp': R`
<h3>정수론</h3>
<p>$a \equiv b \pmod n$은 $n$이 $a - b$를 나누어떨어지게 한다는 뜻이다. $a \bmod n$은 $\{0, 1, \ldots, n - 1\}$ 안의 나머지이다. 합동식은 더하고 곱할 수 있으며, 거듭제곱은 단계적으로 줄일 수 있다.</p>
⟦0⟧
⟦1⟧
<p>$n$을 법으로 하는 $a$의 <b>모듈러 역원</b>은 $ax \equiv 1 \pmod n$인 $x$이며, $\gcd(a, n) = 1$일 때에만 존재한다.</p>
<h3>경우의 수</h3>
<ul><li>원소가 $m$개인 집합에서 원소가 $n$개인 집합으로의 함수: $n^m$개; 일대일함수: $n(n-1)\cdots(n-m+1)$개.</li><li>포함배제의 원리: $|A \cup B| = |A| + |B| - |A \cap B|$.</li><li><b>비둘기집 원리:</b> $kn$개보다 많은 물건을 $n$개의 상자에 넣으면 어떤 상자에는 적어도 $k + 1$개가 들어간다.</li></ul>
<h3>점화식과 그래프</h3>
<p>점화식은 앞의 항들로 각 항을 정한다. 예: $a_n = 2a_{n-1} + 1$, $a_0 = 1$. 그래프에서 <b>악수 정리</b>는 $\sum \deg(v) = 2|E|$; $K_n$의 변은 $\binom{n}{2}$개; 꼭짓점이 $n$개인 트리의 변은 $n - 1$개; 연결 그래프가 오일러 회로를 가질 필요충분조건은 모든 차수가 짝수인 것이다.</p>
⟦2⟧`,
  '1vllnifl24g': R`<p><b>유클리드 호제법:</b> 나머지가 0이 될 때까지 $\gcd(a, b) = \gcd(b, a \bmod b)$를 반복한다.</p><p><b>페르마의 소정리:</b> $p$가 소수이고 $p \nmid a$이면 $a^{p-1} \equiv 1 \pmod p$.</p>`,
  '28pp2kgl31t': R`<p>$\gcd(252, 198)$: $252 = 1 \cdot 198 + 54$, $198 = 3 \cdot 54 + 36$, $54 = 1 \cdot 36 + 18$, $36 = 2 \cdot 18$. 따라서 최대공약수는 18.</p><p>$2^{100} \bmod 7$: $2^3 = 8 \equiv 1$이므로 $2^{100} = (2^3)^{33} \cdot 2 \equiv 2$.</p>`,
  '23tw4c5wfxh': R`<p>포함배제 문제(“3 또는 5로 나누어떨어지는 수”)에서 겹치는 부분은 <b>최소공배수</b> 15로 나누어떨어지는 수이다.</p>`,
  '8fw6na2xe1': R`$⟦0⟧ \bmod ⟦1⟧$을 구하시오.`,
  'uplm3u8bhu': R`$⟦0⟧ = ⟦1⟧ \times ⟦2⟧ + ⟦3⟧$이므로 나머지는 ⟦4⟧.`,
  'xlpbyjzaqw': R`$⟦0⟧^{⟦1⟧} \bmod ⟦2⟧$를 구하시오.`,
  '1kd2o5jees6': R`페르마의 소정리에 의해 $⟦0⟧^{⟦1⟧} \equiv 1 \pmod{⟦2⟧}$. $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ + ⟦6⟧$이므로 $⟦7⟧^{⟦8⟧} \equiv ⟦9⟧^{⟦10⟧} \equiv ⟦11⟧ \pmod{⟦12⟧}$.`,
  '127b4pzxtz': R`유클리드 호제법으로 $\gcd(⟦0⟧, ⟦1⟧)$을 구하시오.`,
  '1aqkhdrg8qc': R`$⟦0⟧$. 마지막으로 0이 아닌 나머지는 <b>⟦1⟧</b>.`,
  '1s721amox67': R`⟦1⟧을 법으로 하는 ⟦0⟧의 역원, 즉 $⟦2⟧x \equiv 1 \pmod{⟦3⟧}$이고 $0 \lt x \lt ⟦4⟧$인 $x$를 구하시오.`,
  '1w7xn0v2je4': R`확인: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧ = ⟦3⟧ \times ⟦4⟧ + 1$이므로 $x = ⟦5⟧$.`,
  'x5llfo779v': R`완전그래프 $K_{⟦0⟧}$의 변은 몇 개인가?`,
  '1k9fldmleaq': R`모든 두 꼭짓점이 연결되어 있다: $\binom{⟦0⟧}{2} = \frac{⟦1⟧ \times ⟦2⟧}{2} = ⟦3⟧$.`,
  '1gbx4896k6y': R`꼭짓점이 ⟦0⟧개인 트리가 있다. 변은 몇 개인가?`,
  'g3rd0a2w3f': R`꼭짓점이 $n$개인 트리의 변은 항상 $n - 1 = ⟦0⟧$개이다.`,
  '1b7sza9kgx9': R`어떤 그래프의 꼭짓점의 차수가 ⟦0⟧이다. 변은 몇 개인가?`,
  '2eddhu7y6e4': R`악수 정리: $\sum\deg = ⟦0⟧ = 2|E|$이므로 $|E| = ⟦1⟧$.`,
  '6xjrxhddis': R`어떤 연결 그래프의 꼭짓점의 차수가 ⟦0⟧이다. 차수가 홀수인 꼭짓점은 몇 개인가?`,
  '5vsb2c69v5': R`홀수 차수는 ⟦0⟧이므로 ⟦1⟧개이다. ⟦2⟧ (차수가 홀수인 꼭짓점의 개수는 항상 짝수이다.)`,
  '2gbggujxcvs': R`없음`,
  '105xal8etax': R`따라서 이 그래프는 오일러 회로를 가진다.`,
  '1z20e1aao3p': R`따라서 이 그래프는 오일러 경로는 가지지만 오일러 회로는 가지지 않는다.`,
  '1vy383kqrz8': R`홀수 차수의 꼭짓점이 2개보다 많으면 오일러 경로가 없다.`,
  'by57uvpuwf': R`$a_0 = ⟦0⟧$이고 $n \ge 1$일 때 $a_n = ⟦1⟧a_{n-1} ⟦2⟧$이다. $a_{⟦3⟧}$을 구하시오.`,
  '75ssmud3lg': R`한 항씩 계산한다: ⟦0⟧.`,
  'go6ohggc8l': R`길이가 ⟦0⟧인 비트열 중 1을 정확히 ⟦1⟧개 포함하는 것은 몇 개인가?`,
  '27u4ks23cz9': R`⟦1⟧개의 자리 중 1이 들어갈 ⟦0⟧개의 자리를 고른다: $\binom{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  'yx3fxah4u8': R`원소가 ⟦0⟧개인 집합에서 원소가 ⟦1⟧개인 집합으로의 함수는 몇 개인가?`,
  '12owpaqzt1c': R`⟦0⟧개의 입력 각각이 ⟦1⟧개의 출력 중 어느 것으로든 갈 수 있다: $⟦2⟧^{⟦3⟧} = ⟦4⟧$.`,
  '4o2cs42p15': R`원소가 ⟦0⟧개인 집합에서 원소가 ⟦1⟧개인 집합으로의 일대일함수는 몇 개인가?`,
  'jpinfh5krc': R`함숫값이 모두 달라야 한다: $⟦0⟧ = ⟦1⟧$.`,
  '10skxcum4lz': R`1부터 ⟦0⟧까지의 정수 중 ⟦1⟧ 또는 ⟦2⟧로 나누어떨어지는 수는 몇 개인가?`,
  'nhrb9jig2q': R`$\lfloor ⟦0⟧/⟦1⟧ \rfloor + \lfloor ⟦2⟧/⟦3⟧ \rfloor - \lfloor ⟦4⟧/⟦5⟧ \rfloor = ⟦6⟧ + ⟦7⟧ - ⟦8⟧ = ⟦9⟧$ (⟦10⟧은 최소공배수).`,
  'cgzqt4g6kc': R`태어난 달`,
  '10ye3jsw3n2': R`요일`,
  '1eah1ab17mo': R`카드 무늬`,
  '1fddlc7zc0d': R`적어도 ⟦0⟧명의 ⟦1⟧이(가) 같음을 보장하려면 최소 몇 명이 필요한가?`,
  '27kjdpfw0sg': R`종류가 ⟦0⟧가지이므로 $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$명까지는 피할 수 있지만, 한 명이 더 있으면 ⟦4⟧명의 묶음이 반드시 생긴다: $⟦5⟧$.`,

  // numerical
  '106u35np5bp': R`
<p>수치해석은 편리한 식으로 나타낼 수 없는 답을 근사한다. 중요한 오차는 두 가지이다: <b>절단</b> 오차(방법에서 생김)와 <b>반올림</b> 오차(유한한 정밀도에서 생김).</p>
⟦0⟧
<h3>근 찾기</h3>
<ul><li><b>이분법:</b> $f(a)$와 $f(b)$의 부호가 다르면 중점 $m$을 확인하고 부호가 바뀌는 쪽 절반을 남긴다. 느리지만 확실하다: 매 단계 오차가 절반으로 준다.</li><li><b>뉴턴 방법:</b> $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$. 단순근 근처에서는 매우 빠르지만(이차 수렴), 초깃값이 나쁘거나 $f' \approx 0$이면 실패할 수 있다.</li></ul>
⟦1⟧
<h3>수치적분</h3>
⟦2⟧
<p>여기서 $h = \frac{b - a}{n}$. 심프슨 공식은 3차 이하의 다항식에 대해 정확하다.</p>
<h3>오일러 방법</h3>
⟦3⟧
⟦4⟧`,
  '2fbw9jej1dm': R`\text{절대오차} = |x_{\text{참}} - x_{\text{근사}}| \qquad \text{상대오차} = \frac{|x_{\text{참}} - x_{\text{근사}}|}{|x_{\text{참}}|}`,
  '1a9noj3sp27': R`<p>$f(x) = x^2 - 10$, $x_0 = 3$에서 $\sqrt{10}$ 구하기: $x_1 = 3 - \frac{-1}{6} = 3.1667$, $x_2 = 3.1623$ — 이미 소수점 아래 넷째 자리까지 정확하다.</p>`,
  'vx6qz5zup7': R`\text{사다리꼴 공식: } \frac{h}{2}\big[f_0 + 2f_1 + \cdots + 2f_{n-1} + f_n\big] \qquad \text{심프슨 (}n \text{은 짝수): } \frac{h}{3}\big[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + f_n\big]`,
  '2fmxu9hfzwl': R`<p>$y' = f(x, y)$, $y(x_0) = y_0$일 때: $\; y_{n+1} = y_n + h\,f(x_n, y_n)$, $x_{n+1} = x_n + h$. $h$를 절반으로 줄이면 오차도 대략 절반이 된다.</p>`,
  'fn0bl5sobc': R`<p>사다리꼴 공식에서는 <b>안쪽</b> 값만 2배 한다; 양 끝 값은 한 번씩만 쓴다.</p>`,
  '1n5pqkgqwu1': R`$f(x) = x^2 - ⟦0⟧$에 $x_0 = ⟦1⟧$부터 뉴턴 방법을 한 번 적용하시오. $x_1$을 소수점 아래 넷째 자리까지 구하시오.`,
  '1jvkeb9n3o6': R`$[1, 2]$에서 $f(x) = x^2 - 3$에 이분법을 한 번 적용한다. 그 후 근을 포함하는 구간은?`,
  'vksl6we3dc': R`$f(1.5) = -0.75 \lt 0$이고 $f(2) = 1 \gt 0$이므로 부호의 변화는 $[1.5, 2]$에 있다.`,
  '23lzoh0yq9e': R`$[⟦2⟧, ⟦3⟧]$에서 $f(x) = x^⟦0⟧ - ⟦1⟧$에 이분법을 적용한다. <b>두 번째</b> 반복에서 계산하는 중점은?`,
  '114tbd27u3w': R`첫 번째 중점 $⟦0⟧$: $f(⟦1⟧) = ⟦2⟧$이므로 근은 $[⟦3⟧, ⟦4⟧]$에 있다. 두 번째 중점: $⟦5⟧$.`,
  '1gaoigxt1uo': R`$n = ⟦0⟧$인 사다리꼴 공식으로 $\displaystyle\int_0^{⟦1⟧} x^2\,dx$를 근사하시오.`,
  '1pc9rab646n': R`$h = ⟦0⟧$; 함숫값 ⟦1⟧. $T = \frac{⟦2⟧}{2}\left[⟦3⟧ + ⟦4⟧ + 2(⟦5⟧)\right] = ⟦6⟧$ (참값 ⟦7⟧).`,
  '1rsvekr7t2o': R`$n = 2$인 심프슨 공식으로 $\displaystyle\int_0^{⟦0⟧} x^4\,dx$를 근사하시오.`,
  '8vqt4i28qj': R`$h = \frac{⟦0⟧}{2}$: $\frac{h}{3}\left[0 + 4\left(\frac{⟦1⟧}{2}\right)^4 + ⟦2⟧^4\right] = \frac{⟦3⟧}{6} \cdot \frac{5 \cdot ⟦4⟧}{4} = ⟦5⟧$ (참값 $⟦6⟧$).`,
  '1jdhmav4ljk': R`$h = ⟦0⟧$인 오일러 방법으로 $y' = ⟦2⟧$, $y(0) = 1$일 때 $y(⟦1⟧)$을 근사하시오. 소수점 아래 넷째 자리까지 반올림하시오.`,
  '6utp8finkn': R`$⟦0⟧$을 ⟦1⟧로 근사한다. 상대오차를 백분율로 소수점 아래 셋째 자리까지 구하시오.`,

  // vector-calculus
  'bh1w03a054': R`
<p><b>벡터장</b> $\mathbf{F}(x, y, z) = (P, Q, R)$는 각 점에 벡터를 대응시킨다 — 바람의 속도나 힘처럼. $\nabla = \left(\frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z}\right)$라 하면:</p>
⟦0⟧
<p>발산은 한 점에서 흘러나가는 양을, 회전은 소용돌이의 세기를 나타낸다.</p>
<h3>선적분과 보존장</h3>
⟦1⟧
⟦2⟧
<h3>중요한 정리들</h3>
⟦3⟧
<p>그린 정리의 멋진 결과: $D$의 넓이는 $\frac{1}{2}\oint_C (x\,dy - y\,dx)$이다.</p>
⟦4⟧`,
  '1oemuo3mhjj': R`\text{div}\,\mathbf{F} = \nabla\cdot\mathbf{F} = P_x + Q_y + R_z \qquad \text{curl}\,\mathbf{F} = \nabla\times\mathbf{F} = (R_y - Q_z,\; P_z - R_x,\; Q_x - P_y)`,
  'dx5b9h7rwd': R`<p>어떤 퍼텐셜 $\varphi$에 대하여 $\mathbf{F} = \nabla\varphi$이면 $\mathbf{F}$는 <b>보존장</b>이다. 이때 $A$에서 $B$로 가는 모든 경로에 대하여 $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r} = \varphi(B) - \varphi(A)$. 평면(단순연결 영역)에서 $(P, Q)$가 보존장일 필요충분조건은 $P_y = Q_x$이다.</p>`,
  '11uavg1kohe': R`<p>$\mathbf{F} = (2xy, x^2 + 3)$: $P_y = 2x = Q_x$이므로 보존장이고 $\varphi = x^2y + 3y$. $(0, 0)$에서 $(2, 1)$까지: $\varphi(2, 1) - \varphi(0, 0) = 4 + 3 = 7$.</p>`,
  '1yct8dx5k46': R`정리`,
  '3albyqcn6s': R`그린`,
  '1osdvqguwrh': R`스토크스`,
  '11x91oqdbb7': R`발산 정리(가우스)`,
  '28jc8ed48q8': R`<p>그린 정리에서는 $C$를 <b>시계 반대 방향</b>(영역이 왼쪽)으로 돈다; 시계 방향이면 부호가 바뀐다.</p>`,
  'fg37vtw1nz': R`$\mathbf{F} = \left(⟦1⟧,\; ⟦2⟧,\; ⟦3⟧\right)$일 때, $⟦0⟧$에서의 $\nabla\cdot\mathbf{F}$를 구하시오.`,
  'i6u559ylzz': R`$P_x = ⟦0⟧$, $Q_y = ⟦1⟧$, $R_z = ⟦2⟧$. $⟦3⟧$에서: $⟦4⟧ ⟦5⟧ ⟦6⟧ = ⟦7⟧$.`,
  'dvzsgd4pt9': R`$\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$일 때, $⟦2⟧$에서의 $Q_x - P_y$(평면 회전)를 구하시오.`,
  '1f7xg7qakjk': R`$Q_x = ⟦0⟧$, $P_y = ⟦1⟧$이므로 $Q_x - P_y = ⟦2⟧$이고, $⟦4⟧$에서 ⟦3⟧이다.`,
  '6gosl713kw': R`$\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$이고 $C$가 $⟦2⟧$에서 $⟦3⟧$까지의 임의의 경로일 때, $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r}$를 계산하시오.`,
  '1ch21kaf5wm': R`$\mathbf{F} = \nabla\varphi$, $\varphi = ⟦0⟧$이므로 적분은 경로와 무관하다: $\varphi(B) - \varphi(A) = ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  '1czrg3saejj': R`그린 정리를 이용하여 $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$를 계산하시오. $C$는 직사각형 $[0, ⟦2⟧] \times [0, ⟦3⟧]$의 경계를 시계 반대 방향으로 도는 곡선이다.`,
  'otc4kapbek': R`$Q_x - P_y = ⟦0⟧ - (-⟦1⟧) = ⟦2⟧$이므로 적분은 $⟦3⟧ \times \text{넓이} = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  '1mzbbq34ezd': R`그린 정리를 이용하여 $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$를 계산하시오. $C$는 원 $x^2 + y^2 = ⟦2⟧$를 시계 반대 방향으로 도는 곡선이다.`,
  '2fijtuqaqq1': R`$Q_x - P_y = ⟦0⟧$이므로 적분은 $⟦1⟧ \times \pi(⟦2⟧)^2 = ⟦3⟧$.`,
  '2csh30v58t4': R`$\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$는 보존장인가?`,
  '1ma95r0zub6': R`보존장이다`,
  'bn62hz6wu8': R`보존장이 아니다`,
  '1s854ovcwco': R`보존장이 아니다`,
  '15asqrx4hnu': R`$P_y = ⟦0⟧$, $Q_x = ⟦1⟧$. ⟦2⟧`,
  'r7areoyr0a': R`두 값이 같으므로 F는 (평면 전체에서) 보존장이다.`,
  '6dlb2jbxf0': R`두 값이 다르므로 F는 보존장이 아니다.`,
  '1ueomkx63n5': R`$\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$의 퍼텐셜 함수를 하나 구하시오.`,
  '4awle3me9d': R`$P$를 $x$에 대하여 적분: $\varphi = ⟦0⟧ + g(y)$. 그러면 $\varphi_y = ⟦1⟧ + g'(y) = ⟦2⟧$에서 $g = ⟦3⟧$.`,

  // laplace
  'f6f4kfx30i': R`
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<p>역변환은 보통 먼저 부분분수로 분해한 뒤 표와 맞추어 본다.</p>
⟦4⟧`,
  '1kbz0ay16v9': R`\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt`,
  '1id74v8hrdj': R`<p><b>선형성:</b> $\mathcal{L}\{af + bg\} = aF + bG$. <b>도함수:</b> $\mathcal{L}\{y'\} = sY - y(0)$, $\mathcal{L}\{y''\} = s^2Y - sy(0) - y'(0)$ — 이렇게 미분방정식이 대수 문제로 바뀐다.</p>`,
  'ie964pskzz': R`<p>$y'' + 4y = 0$, $y(0) = 3$, $y'(0) = 2$를 푼다.</p><p>$s^2Y - 3s - 2 + 4Y = 0$이므로 $Y = \dfrac{3s + 2}{s^2 + 4} = 3\dfrac{s}{s^2 + 4} + \dfrac{2}{s^2 + 4}$. 역변환하면 $y = 3\cos 2t + \sin 2t$.</p>`,
  'cgwsp3i8af': R`<p>$\mathcal{L}\{\sin bt\}$는 분자가 $b$, $\mathcal{L}\{\cos bt\}$는 분자가 $s$이다. 둘을 혼동하는 것이 가장 흔한 실수이다.</p>`,
  't6bpsx84ob': R`$\mathcal{L}\{⟦0⟧\}$를 구하시오.`,
  '2sqpcztdp7': R`선형성과 $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$, $\mathcal{L}\{e^{ct}\} = \frac{1}{s - c}$를 이용: $\frac{⟦0⟧ \cdot ⟦1⟧!}{s^{⟦2⟧}} + \frac{⟦3⟧}{⟦4⟧}$.`,
  '1erb7erw9za': R`$\mathcal{L}\{⟦0⟧⟦1⟧ ⟦2⟧t\}$를 구하시오.`,
  'ujzn9ioggu': R`$\mathcal{L}\{\sin bt\} = \frac{b}{s^2 + b^2}$이므로 답은 $\frac{⟦0⟧ \cdot ⟦1⟧}{s^2 + ⟦2⟧} = \frac{⟦3⟧}{s^2 + ⟦4⟧}$.`,
  '2dljwnla25z': R`$\mathcal{L}\{\cos bt\} = \frac{s}{s^2 + b^2}$이므로 답은 $\frac{⟦0⟧s}{s^2 + ⟦1⟧}$.`,
  'napbzc1h43': R`$\mathcal{L}^{-1}\left\{\dfrac{⟦0⟧}{⟦1⟧} + \dfrac{⟦2⟧s}{s^2 + ⟦3⟧}\right\}$를 구하시오.`,
  '6d49fl6z14': R`$\frac{1}{s - c} \leftrightarrow e^{ct}$, $\frac{s}{s^2 + d^2} \leftrightarrow \cos dt$: 결과는 ⟦0⟧.`,
  'hw06puz2z5': R`$\mathcal{L}\{⟦0⟧\,⟦1⟧ ⟦2⟧t\}$를 구하시오.`,
  'zs0uacvdu8': R`제1 이동 정리: $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$. $F(s) = ⟦0⟧$에서 $s$를 $⟦1⟧$로 바꾼다.`,
  '1i1mf4ew2a': R`$F(s) = \mathcal{L}\{t^{⟦0⟧}\}$일 때, $F(⟦1⟧)$을 구하시오.`,
  '180y0883p6z': R`$F(s) = \frac{⟦0⟧!}{s^{⟦1⟧}}$이므로 $F(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '11s9xvqwvw4': R`$F(s) = \mathcal{L}\{⟦0⟧\}$일 때, $F(⟦1⟧)$을 구하시오.`,
  '18wjdkl7beq': R`$F(s) = \frac{1}{s - (⟦0⟧)}$이므로 $F(⟦1⟧) = \frac{1}{⟦2⟧}$.`,
  '9v69wy5cnz': R`라플라스 변환을 이용하여 $y(0) = ⟦1⟧$, $y'(0) = ⟦2⟧$일 때 $y'' + ⟦0⟧y = 0$을 푸시오.`,
  '24mrp3u7eep': R`$s^2Y - ⟦0⟧s - ⟦1⟧ + ⟦2⟧Y = 0$이므로 $Y = ⟦3⟧$. $⟦4⟧\cdot\frac{s}{s^2 + ⟦5⟧} + \frac{⟦6⟧}{⟦7⟧}\cdot\frac{⟦8⟧}{s^2 + ⟦9⟧}$로 나누어 역변환하면: ⟦10⟧.`,
});
