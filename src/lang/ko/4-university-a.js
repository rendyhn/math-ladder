/* 한국어 — 대학 (미분법 → 미분방정식) */
addT('ko', {
  // diff-techniques
  'i2e9stiapi': R`
⟦0⟧
⟦1⟧
⟦2⟧
<h3>음함수의 미분</h3>
<p>$y$가 음함수로 주어지면, $y$를 $x$의 함수로 보고 양변을 $x$에 대하여 미분한 뒤($\frac{d}{dx}y^2 = 2y\,y'$), $y'$에 대하여 푼다.</p>
⟦3⟧
⟦4⟧
⟦5⟧`,
  '1kr8zytc8j5': R`곱`,
  '1fd6nxjb0xt': R`몫`,
  '21u0n9yxqot': R`합성함수`,
  '10xmtmesa6t': R`함수`,
  'n72fq2kxcg': R`도함수`,
  '1qtv7snffoy': R`<p>$\dfrac{d}{dx}\,(3x^2 + 1)^5 = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4$ &nbsp;(합성함수의 미분)</p><p>$\dfrac{d}{dx}\,x^2 e^{3x} = 2x e^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$ &nbsp;(곱의 미분)</p>`,
  '1nhip08xeg5': R`<p>$x^2 + y^2 = 25 \Rightarrow 2x + 2y\,y' = 0 \Rightarrow y' = -\dfrac{x}{y}$. 점 $(3, 4)$에서 기울기는 $-\frac{3}{4}$이다.</p>`,
  'wvkdxn7frj': R`<p><b>로그미분법</b>은 곱, 몫, 지수에 변수가 있는 거듭제곱에 쓴다: $y = x^x$이면 $\ln y = x\ln x$이므로 $\frac{y'}{y} = \ln x + 1$, $y' = x^x(\ln x + 1)$.</p>`,
  're4vli1oc9': R`<p>합성함수의 미분: 항상 <b>속</b>함수의 도함수를 곱한다. $\frac{d}{dx}\sin(x^2) = 2x\cos(x^2)$이지 $\cos(x^2)$가 아니다.</p>`,
  '1iajxt140g2': R`$f(x) = (⟦0⟧)^{⟦1⟧}$일 때, $f'(⟦2⟧)$를 구하시오.`,
  '2108swf0nc1': R`합성함수의 미분: $f'(x) = ⟦0⟧(⟦1⟧)^{⟦2⟧} \cdot ⟦3⟧$. $x = ⟦4⟧$에서 속함수의 값은 ⟦5⟧이므로 $f'(⟦6⟧) = ⟦7⟧ \cdot ⟦8⟧^{⟦9⟧} \cdot ⟦10⟧ = ⟦11⟧$.`,
  '13u8g7mcany': R`$y = ⟦0⟧⟦1⟧$을 미분하시오.`,
  'ltfmske2sq': R`곱의 미분($u = ⟦0⟧$, $v = ⟦1⟧$): $y' = ⟦2⟧⟦3⟧ + ⟦4⟧ \cdot ⟦5⟧ =⟦6⟧⟦7⟧(⟦8⟧)$.`,
  '24tbapqaxkt': R`$f(x) = \ln(⟦0⟧)$일 때, $f'(⟦1⟧)$을 구하시오.`,
  'vr5ui5jnj1': R`$f'(x) = \frac{⟦0⟧x}{⟦1⟧}$이므로 $f'(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '21f80wac08v': R`$x^2 + y^2 = ⟦0⟧$에서 점 $⟦1⟧$에서의 $\frac{dy}{dx}$를 구하시오.`,
  'xl17ytois8': R`$xy = ⟦0⟧$에서 점 $⟦1⟧$에서의 $\frac{dy}{dx}$를 구하시오.`,
  'cc1dbada60': R`곱의 미분: $y + x\,y' = 0 \Rightarrow y' = -\frac{y}{x} = ⟦0⟧$.`,
  'g5b3ql04b4': R`$y = \sin(⟦0⟧)$를 미분하시오.`,
  '1u57cjycyb3': R`합성함수의 미분: 겉함수의 도함수는 $\cos(⟦0⟧)$, 속함수의 도함수는 $⟦1⟧$이므로 $⟦2⟧\cos(⟦3⟧)$.`,
  '1zcx1qjywp8': R`$f(x) = ⟦0⟧$일 때, $f''(⟦1⟧)$을 구하시오.`,
  '22jprctwicn': R`$f'(x) = ⟦0⟧$, $f''(x) = ⟦1⟧$. 따라서 $f''(⟦2⟧) = ⟦3⟧$.`,
  '1pkqexq4tgg': R`$f(x) = x\ln x$일 때, $f'(e^{⟦0⟧})$을 구하시오.`,
  '20aqqhk2mtp': R`곱의 미분: $f'(x) = \ln x + x \cdot \frac{1}{x} = \ln x + 1$. 따라서 $f'(e^{⟦0⟧}) = ⟦1⟧ + 1 = ⟦2⟧$.`,

  // diff-applications
  'g0oq20zzs': R`
<h3>로피탈의 정리</h3>
⟦0⟧
<p>$\displaystyle\lim_{x \to 0}\frac{1 - \cos 4x}{x^2} = \lim\frac{4\sin 4x}{2x} = \lim\frac{16\cos 4x}{2} = 8$ (두 번 적용).</p>
<h3>최적화</h3>
<ol><li>최적화할 양을 한 변수의 함수로 나타낸다(조건을 이용한다).</li><li>미분하여 $f'(x) = 0$을 푼다.</li><li>최댓값/최솟값인지 확인한다(이계도함수 또는 양 끝 값).</li></ol>
⟦1⟧
<h3>관련 변화율</h3>
<p>관계식을 시간에 대하여 미분한다. 커지는 원이라면 $A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.</p>
<h3>일차근사</h3>
⟦2⟧
<h3>오목·볼록과 평균값 정리</h3>
<p>$f'' \gt 0$: 아래로 볼록; $f'' \lt 0$: 위로 볼록; 볼록성이 바뀌는 점이 <b>변곡점</b>이다. <b>평균값 정리:</b> $f$가 $[a, b]$에서 연속이고 내부에서 미분가능하면, $(a, b)$ 안에 $f'(c) = \frac{f(b) - f(a)}{b - a}$인 $c$가 존재한다.</p>
⟦3⟧`,
  '11hmiu9w9s4': R`<p>$\lim \frac{f(x)}{g(x)}$가 $\frac{0}{0}$ 또는 $\frac{\infty}{\infty}$ 꼴이면 $\displaystyle\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}$ (우변의 극한이 존재할 때).</p>`,
  '189x52ko5mw': R`<p>한 변이 18 cm인 정사각형 판의 네 귀퉁이에서 한 변이 $x$인 정사각형을 잘라 내고 옆면을 접어 올린다. $V = x(18 - 2x)^2$, $V' = (18 - 2x)(18 - 6x) = 0$에서 $x = 3$이므로 $V_{\max} = 3 \cdot 12^2 = 432$ cm³.</p>`,
  'e22qux2ozs': R`f(a + h) \approx f(a) + f'(a)\,h \qquad \text{예: } \sqrt{26} \approx 5 + \frac{1}{2 \cdot 5} = 5.1`,
  '15384lzo6ba': R`<p>로피탈의 정리는 분자와 분모를 <b>각각</b> 미분한다 — 몫의 미분법이 아니다.</p>`,
  's2219vpl96': R`$\displaystyle\lim_{x \to 0}\frac{1 - \cos ⟦0⟧x}{x^2}$을 구하시오.`,
  '1tq22svmx8r': R`로피탈의 정리를 두 번: $\frac{⟦0⟧\sin ⟦1⟧x}{2x} \to \frac{⟦2⟧\cos ⟦3⟧x}{2} \to \frac{⟦4⟧}{2}$.`,
  'v9t0b7xos3': R`$\displaystyle\lim_{x \to 0}\frac{⟦0⟧}{⟦1⟧x}$을 구하시오.`,
  'wudu9stdyh': R`$\frac{0}{0}$ 꼴이므로 분자와 분모를 미분한다: $\frac{⟦0⟧}{⟦1⟧} \to \frac{⟦2⟧}{⟦3⟧}$.`,
  'b8a0ml45bv': R`가로 ⟦0⟧ cm, 세로 ⟦1⟧ cm인 판의 네 귀퉁이에서 한 변이 $x$ cm인 같은 정사각형을 잘라 내고, 옆면을 접어 올려 뚜껑 없는 상자를 만든다. ⟦2⟧`,
  '6fzl8050w8': R`부피가 최대가 되는 x의 값은?`,
  '1nbs4g9250e': R`부피의 최댓값은?`,
  '1xaya4958aj': R`$V = x(⟦0⟧ - 2x)^2$, $V' = (⟦1⟧ - 2x)(⟦2⟧ - 6x) = 0$에서 $x = ⟦3⟧$(다른 근에서는 부피가 0). $V = ⟦4⟧(⟦5⟧)^2 = ⟦6⟧$ cm³.`,
  'g44lawx7yb': R`원의 반지름이 초당 ⟦0⟧ cm씩 늘어난다. 반지름이 ⟦1⟧ cm일 때 넓이는 얼마의 비율로 늘어나는가? $\pi$를 사용하여 답하시오.`,
  'pvrsmdtr3x': R`$\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi(⟦0⟧)(⟦1⟧) = ⟦2⟧$ cm²/s.`,
  'w8wuhpzsgd': R`구 모양 풍선의 반지름이 초당 ⟦0⟧ cm씩 늘어난다. 반지름이 ⟦1⟧ cm일 때 부피는 얼마의 비율로 늘어나는가? $\pi$를 사용하여 답하시오.`,
  '1ca85zwkg9p': R`$\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = 4\pi(⟦0⟧)^2(⟦1⟧) = ⟦2⟧$ cm³/s.`,
  '2c66yuykiw5': R`$x = ⟦0⟧$에서 $\sqrt{x}$의 일차근사를 이용하여 $\sqrt{⟦1⟧}$의 값을 어림하시오.`,
  'rjw48nwhxr': R`분수나 소수로 입력하세요.`,
  '16wswpodtbc': R`$f(x) = ⟦0⟧$의 변곡점의 $x$좌표를 구하시오.`,
  '16igzoef2co': R`$f''(x) = 6x ⟦0⟧ = 0$에서 $x = ⟦1⟧$; 그곳에서 $f''$의 부호가 바뀐다.`,
  '2dw0fqk2lyr': R`$[⟦1⟧, ⟦2⟧]$에서 $f(x) = ⟦0⟧$. 평균값 정리가 보장하는 $c$의 값을 구하시오.`,
  '1c5ltuvzsrq': R`평균 기울기 $= \frac{f(⟦0⟧) - f(⟦1⟧)}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. $f'(c) = 2c ⟦5⟧ = ⟦6⟧$에서 $c = ⟦7⟧$ — 이차함수에서는 언제나 구간의 중점이다.`,

  // integration-techniques
  'vrvi3bfbr': R`
<h3>치환적분</h3>
<p>함수와 그 도함수를 찾는다. $u = g(x)$, $du = g'(x)\,dx$로 놓으면:</p>
⟦0⟧
<p>정적분에서는 적분 구간도 함께 바꾼다(또는 원래 변수로 되돌린 뒤 계산한다).</p>
<h3>부분적분</h3>
⟦1⟧
⟦2⟧
<h3>부분분수</h3>
<p>유리함수를 더 간단한 조각으로 나눈다: $\dfrac{5x - 1}{(x - 1)(x + 2)} = \dfrac{A}{x - 1} + \dfrac{B}{x + 2}$. 분모를 없애고 $x = 1$, $x = -2$를 대입하면 $A = \frac{4}{3}$, $B = \frac{11}{3}$. 각 조각은 적분하면 로그가 된다.</p>
<h3>이상적분</h3>
⟦3⟧
⟦4⟧`,
  '26zznowz8be': R`\int 2x(x^2 + 1)^3\,dx = \int u^3\,du = \frac{u^4}{4} + C = \frac{(x^2 + 1)^4}{4} + C`,
  '5ecfawuidh': R`$$\int u\,dv = uv - \int v\,du$$<p>$u$는 <b>로·역·다·삼·지</b> 순서로 고른다: 로그함수, 역삼각함수, 다항함수, 삼각함수, 지수함수 — 앞에 오는 것을 $u$로 한다.</p>`,
  'c0nz9m0n3d': R`<p>$\int x e^{2x}\,dx$: $u = x$, $dv = e^{2x}dx$로 놓으면 $du = dx$, $v = \frac{1}{2}e^{2x}$. 결과: $\frac{x}{2}e^{2x} - \int\frac{1}{2}e^{2x}\,dx = \frac{x}{2}e^{2x} - \frac{1}{4}e^{2x} + C$.</p>`,
  '2clmb8muggz': R`\int_1^\infty \frac{dx}{x^p} = \frac{1}{p - 1} \text{ (}p \gt 1\text{일 때; } p \le 1 \text{이면 발산)} \qquad \int_0^\infty e^{-kx}\,dx = \frac{1}{k}`,
  'l8twy4h3ug': R`<p>$\int \frac{g'(x)}{g(x)}\,dx = \ln|g(x)| + C$ — 복잡한 방법을 쓰기 전에 이 꼴부터 알아보자.</p>`,
  'fesx7djw83': R`xe^{x} - e^{x}`,
  'yia5dxx3ds': R`xe^{x} + e^{x}`,
  '1afuqmxgeq5': R`$\displaystyle\int ⟦0⟧\,dx$를 구하시오.`,
  '1235n0zk19z': R`⟦0⟧로 부분적분: 결과는 ⟦1⟧. 미분하여 확인해 보자.`,
  'pklgf5s2ey': R`$\displaystyle\int_0^{⟦0⟧} 2x(x^2 + 1)^{⟦1⟧}\,dx$를 계산하시오.`,
  '51fkmlo4j8': R`$u = x^2 + 1$, $du = 2x\,dx$로 놓으면 구간은 $u = 1$부터 $u = ⟦0⟧$까지: $\int_1^{⟦1⟧} u^{⟦2⟧}\,du = \left[\frac{u^{⟦3⟧}}{⟦4⟧}\right]_1^{⟦5⟧} = \frac{⟦6⟧ - 1}{⟦7⟧} = ⟦8⟧$.`,
  '1tmpbvg6cku': R`부분분수로 분해하시오: $\dfrac{⟦0⟧}{⟦1⟧⟦2⟧}$`,
  '1iitr1pnozn': R`$\frac{P}{⟦0⟧} + \frac{Q}{⟦1⟧}$로 놓고 분모를 없앤다. $x = ⟦2⟧$를 대입하면 $P = ⟦3⟧$; $x = ⟦4⟧$를 대입하면 $Q = ⟦5⟧$.`,
  'r1rswlk024': R`$\displaystyle\int_0^{\pi/⟦0⟧} \sin(⟦1⟧x)\,dx$를 계산하시오.`,
  '1l97oofm3p4': R`$\displaystyle\int_0^{\pi/⟦0⟧} \cos(⟦1⟧x)\,dx$를 계산하시오.`,
  'pqalznrxip': R`$\displaystyle\int_1^{\infty} \frac{dx}{x^{⟦0⟧}}$를 계산하시오.`,
  '4t49nbtc5g': R`$\left[\frac{x^{⟦0⟧}}{⟦1⟧}\right]_1^{\infty} = 0 - \frac{1}{⟦2⟧} = ⟦3⟧$. $p = ⟦4⟧ \gt 1$이므로 수렴한다.`,
  'w9i8vvwvmq': R`$\displaystyle\int_0^{\infty} e^{-⟦0⟧x}\,dx$를 계산하시오.`,
  '1wnox68sxsf': R`$\displaystyle\int_0^{⟦0⟧} \frac{2x}{x^2 + 1}\,dx$를 계산하시오.`,
  '2ctr5v6it67': R`ln(10) 같은 형태의 답도 인정됩니다.`,
  '8ud8r2yql4': R`분자가 분모의 도함수이다: $\left[\ln(x^2 + 1)\right]_0^{⟦0⟧} = \ln ⟦1⟧ - \ln 1 = \ln ⟦2⟧$.`,

  // integral-applications
  '1iuoee1mxv2': R`적분`,
  'u2fo7phj7e': R`두 곡선 사이의 넓이`,
  '26rkw1zgbbl': R`부피(원판법), x축 둘레`,
  '1gdvfh77kjd': R`부피(와셔법)`,
  '2e8c5l4l65u': R`부피(원통껍질법), y축 둘레`,
  'hf97eg5buy': R`평균값`,
  '1wrr2ozjzke': R`곡선의 길이`,
  '1aamatrm1qc': R`일(변하는 힘)`,
  '25psf0wh4wl': R`<p>$y = \sqrt{x}$ ($0 \le x \le 4$)를 $x$축 둘레로 회전: $V = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi$.</p>`,
  '84txgrqh8f': R`<p>용수철 상수 $k = 200$ N/m인 용수철(훅의 법칙 $F = kx$)을 0.3 m 늘일 때: $W = \int_0^{0.3} 200x\,dx = 100(0.3)^2 = 9$ J.</p>`,
  '4sufc6qh8k': R`<p>먼저 그림을 그린다. 곡선의 교점(적분 구간)과 어느 쪽이 위에 있는지 확인한다 — 피적분함수는 항상 <b>위 − 아래</b>(또는 바깥 반지름의 제곱 − 안쪽 반지름의 제곱)이다.</p>`,
  '2dts82e214f': R`<p>원판법에서는 적분이 아니라 <b>함수</b>를 제곱한다: $\pi\int f^2$이지 $\pi\left(\int f\right)^2$이 아니다.</p>`,
  '254d1knheuj': R`제1사분면에서 $y = x^3$과 $y = ⟦0⟧x$로 둘러싸인 부분의 넓이를 구하시오.`,
  '6v6svg4kwp': R`두 곡선은 $x = 0$과 $x = ⟦0⟧$에서 만난다. $\int_0^{⟦1⟧} (⟦2⟧x - x^3)\,dx = \frac{⟦3⟧(⟦4⟧)^2}{2} - \frac{⟦5⟧^4}{4} = ⟦6⟧$.`,
  '137eefen200': R`\pi\int_0^{⟦0⟧} x\,dx = \frac{\pi (⟦1⟧)^2}{2}`,
  '1minpuvvl2n': R`\pi\int_0^{⟦0⟧} x^2\,dx = \frac{\pi (⟦1⟧)^3}{3}`,
  's7flm3xrdz': R`\pi\int_0^{⟦0⟧} x^4\,dx = \frac{\pi (⟦1⟧)^5}{5}`,
  '217wjez6n7': R`$0 \le x \le ⟦1⟧$에서 $⟦0⟧$ 아래의 영역을 $x$축 둘레로 회전시킨다. 부피를 $\pi$를 사용하여 구하시오.`,
  '1icurdoc4sc': R`원판법: $V = ⟦0⟧ = ⟦1⟧$.`,
  '2gj0lncwv9v': R`$y = ⟦0⟧x$와 $y = x^2$ 사이의 영역을 $x$축 둘레로 회전시킨다. 부피를 $\pi$를 사용하여 구하시오.`,
  '79trxd9ylt': R`$[0, ⟦1⟧]$에서 바깥 반지름 $⟦0⟧x$, 안쪽 반지름 $x^2$인 와셔: $V = \pi\int_0^{⟦2⟧} (⟦3⟧x^2 - x^4)\,dx = \pi\left(\frac{⟦4⟧}{3} - \frac{⟦5⟧}{5}\right) = ⟦6⟧$.`,
  '7u6xsm6kr0': R`$[0, ⟦0⟧]$에서 $f(x) = x^2$의 평균값을 구하시오.`,
  '14439tvneep': R`$[⟦1⟧, ⟦2⟧]$에서 $f(x) = ⟦0⟧$의 평균값을 구하시오.`,
  'ooxywxrn7m': R`일차함수의 평균값은 중점 $x = ⟦0⟧$에서의 함숫값과 같다: $⟦1⟧(⟦2⟧) ⟦3⟧ = ⟦4⟧$.`,
  'mptjdpftfn': R`$y = \frac{2}{3}x^{3/2}$의 $x = 0$부터 $x = ⟦0⟧$까지의 곡선의 길이를 구하시오.`,
  'z00id81ez': R`$y' = x^{1/2}$이므로 $L = \int_0^{⟦0⟧} \sqrt{1 + x}\,dx = \left[\frac{2}{3}(1 + x)^{3/2}\right]_0^{⟦1⟧} = \frac{2}{3}(⟦2⟧ - 1) = ⟦3⟧$.`,
  'lpjavqv13n': R`용수철 상수가 $k = ⟦0⟧$ N/m인 용수철을 자연 길이에서 ⟦1⟧ m 늘이는 데 필요한 일은?`,

  // series
  '1efhn95iov3': R`
<p>무한급수 $\sum a_n$은 부분합 $S_N = a_1 + \cdots + a_N$이 유한한 값에 가까워지면 <b>수렴한다</b>고 한다.</p>
⟦0⟧
⟦1⟧
<h3>거듭제곱급수와 테일러 급수</h3>
<p>거듭제곱급수 $\sum c_n (x - a)^n$은 $|x - a| \lt R$에서 수렴하며, $R$을 <b>수렴반지름</b>이라 한다(비율판정법으로 구한다). $a$ 근방에서 $f$의 테일러 급수는 $\sum \frac{f^{(n)}(a)}{n!}(x - a)^n$이고, 0 근방의 것을 매클로린 급수라 한다.</p>
⟦2⟧
⟦3⟧`,
  '1fv7uha3bb4': R`판정법`,
  '1boy0ga8tbt': R`결론`,
  '7ih7yeq8ue': R`발산 판정법`,
  '1muum9p7rzf': R`$a_n \not\to 0$이면 급수는 발산한다`,
  '1ky8r0l0qv8': R`$\sum ar^n$은 $|r| \lt 1$일 때만 수렴; 합은 $\frac{a}{1 - r}$`,
  'rijv0gvehd': R`p급수`,
  '7fut7e3zun': R`$\sum \frac{1}{n^p}$은 $p \gt 1$일 때만 수렴`,
  '28h8cjdskg3': R`비교판정법`,
  '23c91vpuxqn': R`알려진 급수와 비교한다`,
  '1684r7a6bgw': R`비율판정법`,
  'oc6lw933sm': R`$L = \lim\left|\frac{a_{n+1}}{a_n}\right|$: $L \lt 1$이면 수렴, $L \gt 1$이면 발산`,
  '131362k70as': R`교대급수`,
  '1ew5e8sa4g7': R`$b_n \downarrow 0$이면 $\sum (-1)^n b_n$은 수렴`,
  '12cxen3heke': R`<p><b>망원급수:</b> $\displaystyle\sum_{n=1}^{N}\frac{1}{n(n+1)} = \sum\left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{N+1}$, 이는 1에 가까워진다.</p>`,
  '1ql1d0zgkve': R`매클로린 급수`,
  '1arf5rbq565': R`성립 범위`,
  'oui4ssl2gv': R`모든 x`,
  'kvkz0oqeo6': R`<p>$a_n \to 0$은 필요조건이지만 충분조건은 아니다: 조화급수 $\sum \frac{1}{n}$은 $\frac{1}{n} \to 0$인데도 발산한다.</p>`,
  '16u2ienbhtn': R`$\displaystyle\sum_{n=⟦0⟧}^{\infty} ⟦1⟧\left(⟦2⟧\right)^n$을 구하시오.`,
  '1kgeq4tf48a': R`공비 $r = ⟦0⟧$, $|r| \lt 1$, 첫째항 $⟦1⟧$인 등비급수: 합 $= \frac{⟦2⟧}{1 - ⟦3⟧} = ⟦4⟧$.`,
  '1eiae773y4x': R`$p = \frac{1}{2} \le 1$인 p급수이므로`,
  '1wok8okhtk9': R`조화급수($p = 1$)이므로`,
  '22u9pb285sv': R`$p = \frac{3}{2} \gt 1$인 p급수이므로`,
  '204d6a8dcww': R`$p = 2 \gt 1$인 p급수이므로`,
  '243y5j9lor6': R`발산 판정법에 의해: $\frac{n}{n+1} \to 1 \ne 0$`,
  'ajpp0zqaap': R`교대급수 판정법에 의해`,
  'wlawq7ztg6': R`비율판정법에 의해: $\frac{3}{n+1} \to 0 \lt 1$`,
  '265645ebmpe': R`비율판정법에 의해: $\frac{n+1}{2} \to \infty$`,
  '1lt7pp2ijz': R`$|r| = \frac{2}{3} \lt 1$인 등비급수이므로`,
  '6goqsof3sp': R`$|r| = \frac{3}{2} \ge 1$인 등비급수이므로`,
  '1d4bvtuk3gt': R`$\sum\frac{1}{n^2}$과의 비교에 의해`,
  '2846ssfmjxq': R`조화급수와의 극한비교에 의해`,
  's3fpv9edn1': R`$\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$은 수렴하는가, 발산하는가?`,
  '1szqlme8ixw': R`수렴`,
  '1mr32mwk08w': R`발산`,
  '25wy0z8lea1': R`⟦0⟧ 수렴한다.`,
  'zibgubfq': R`⟦0⟧ 발산한다.`,
  'd893gqg85h': R`$⟦1⟧$의 매클로린 급수에서 $x^{⟦0⟧}$의 계수를 구하시오.`,
  '2gib9c2xh5i': R`$e^u = \sum \frac{u^n}{n!}$에서 $u = ⟦0⟧$: 계수는 $\frac{(⟦1⟧)^{⟦2⟧}}{⟦3⟧!} = ⟦4⟧$.`,
  '1i7l7fodjgy': R`$\cos(⟦1⟧x)$의 매클로린 급수에서 $x^{⟦0⟧}$의 계수를 구하시오.`,
  '27l5wjsmcqy': R`$\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \cdots$에서 $u = ⟦0⟧x$: 계수 $= ⟦1⟧$.`,
  '13hswzoz6ds': R`$\dfrac{1}{1 ⟦1⟧x}$의 매클로린 급수에서 $x^{⟦0⟧}$의 계수를 구하시오.`,
  '950amaqi7k': R`$\frac{1}{1 - u} = \sum u^n$에서 $u = ⟦0⟧$: $x^{⟦1⟧}$의 계수는 $(⟦2⟧)^{⟦3⟧} = ⟦4⟧$.`,
  '12ohsobdns': R`$\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$의 수렴반지름을 구하시오.`,
  'y2p3mhwix3': R`비율판정법: $\left|\frac{a_{n+1}}{a_n}\right| \to \frac{|⟦0⟧|}{⟦1⟧}$. 이 값이 1보다 작은 것은 $|⟦2⟧| \lt ⟦3⟧$일 때이므로 $R = ⟦4⟧$.`,
  '1hfprth485h': R`$\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$을 구하시오.`,
  '24anbau0yh': R`망원급수: $S_N = 1 - \frac{1}{N+1} \to 1$.`,
  'kcknro2xmq': R`$\displaystyle\sum_{n=1}^{⟦0⟧} \frac{1}{n(n+1)}$을 구하시오.`,
  'd2ku2hqqe6': R`$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$이므로 합은 상쇄되어 $1 - \frac{1}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$.`,
  '2d09rr0z1dx': R`매클로린 급수가 $\displaystyle ⟦0⟧$인 함수는?`,
  '262p4pwoflz': R`이것은 $⟦0⟧$의 표준 전개식이다.`,

  // multivariable
  'elrzs4craq': R`
<p>$f(x, y)$의 <b>편도함수</b> $f_x = \frac{\partial f}{\partial x}$는 $y$를 상수로 보고 $x$에 대하여 미분한 것이다($f_y$는 그 반대). $f = x^2y^3$이면 $f_x = 2xy^3$, $f_y = 3x^2y^2$.</p>
<h3>기울기 벡터와 방향도함수</h3>
⟦0⟧
<h3>임계점: 이계도함수 판정법</h3>
<p>$f_x = f_y = 0$인 점에서 $D = f_{xx}f_{yy} - f_{xy}^2$라 하자.</p>
<ul><li>$D \gt 0$, $f_{xx} \gt 0$: 극소. &nbsp; $D \gt 0$, $f_{xx} \lt 0$: 극대.</li><li>$D \lt 0$: 안장점. &nbsp; $D = 0$: 판정할 수 없다.</li></ul>
<h3>이중적분</h3>
<p>직사각형 위에서는 한 변수씩 적분한다(푸비니 정리): $\displaystyle\int_0^2\!\!\int_0^3 xy\,dy\,dx = \int_0^2 \frac{9x}{2}\,dx = 9$. 극좌표에서는 $dA = r\,dr\,d\theta$.</p>
<h3>라그랑주 승수법</h3>
<p>조건 $g = c$ 아래에서 $f$를 최적화하려면 $\nabla f = \lambda\nabla g$와 조건식을 연립하여 푼다.</p>
⟦1⟧
⟦2⟧`,
  '1lpi0dcmqpt': R`$$\nabla f = \left(f_x, f_y\right) \qquad D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u} \quad (|\mathbf{u}| = 1)$$<p>$\nabla f$는 가장 빠르게 증가하는 방향을 가리키며, 그 크기가 최대 변화율이다.</p>`,
  'opu0v1dwpl': R`<p>$x + y = 10$일 때 $f = xy$의 최댓값: $(y, x) = \lambda(1, 1)$에서 $x = y = 5$이므로 최댓값은 25.</p>`,
  '83uqphqp8x': R`<p>극좌표에서는 $dA = r\,dr\,d\theta$의 추가 인수 $r$을 잊지 말자.</p>`,
  'oxpugv5o3o': R`$f(x, y) = ⟦0⟧$일 때, $f_⟦1⟧(⟦2⟧, ⟦3⟧)$을 구하시오.`,
  '131ofsfpabh': R`$f_x = ⟦0⟧$이므로 $f_x(⟦1⟧, ⟦2⟧) = ⟦3⟧$.`,
  'tma98sxgbh': R`$f_y = ⟦0⟧$이므로 $f_y(⟦1⟧, ⟦2⟧) = ⟦3⟧$.`,
  '1894fvoucsb': R`$f(x, y) = ⟦2⟧$일 때, $\nabla f(⟦0⟧, ⟦1⟧)$을 구하시오.`,
  '1mtqnuj8e72': R`두 성분을 쉼표로 구분하여 입력하세요.`,
  '1wlrv45vn5z': R`$f_x = ⟦0⟧$, $f_y = ⟦1⟧$. $⟦2⟧$에서: $\nabla f = ⟦3⟧$.`,
  '280l4hqbl71': R`$f(x, y) = ⟦0⟧$의 점 $⟦1⟧$에서 $⟦2⟧$ 방향의 방향도함수를 구하시오.`,
  '23ij1mnh3qx': R`$\nabla f = (⟦0⟧, ⟦1⟧)$이고 단위벡터는 $\frac{1}{⟦2⟧}⟦3⟧$. $D_{\mathbf{u}}f = \frac{⟦4⟧(⟦5⟧) + ⟦6⟧(⟦7⟧)}{⟦8⟧} = ⟦9⟧$.`,
  '1gbu12sd7yr': R`극소`,
  'tfsmpd4xkw': R`극대`,
  '29jq1piqelp': R`안장점`,
  '1knzmyv1q46': R`판정 불가`,
  'uai27zrool': R`$f(x, y) = ⟦0⟧$의 임계점 $(0, 0)$을 분류하시오.`,
  'k6dc7gm5pm': R`$D \gt 0$이고 $f_{xx} ⟦0⟧ 0$`,
  'scf747plq6': R`$\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} xy\,dy\,dx$를 계산하시오.`,
  'scioeo7pw6': R`$\int_0^{⟦0⟧} xy\,dy = \frac{⟦1⟧x}{2}$, 다음으로 $\int_0^{⟦2⟧} \frac{⟦3⟧x}{2}\,dx = \frac{⟦4⟧ \cdot ⟦5⟧}{4} = ⟦6⟧$.`,
  'ktiyfy2vps': R`$\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} (x + y)\,dy\,dx$를 계산하시오.`,
  'lgh3731wbd': R`$\int_0^{⟦0⟧} (x + y)\,dy = ⟦1⟧x + \frac{⟦2⟧}{2}$, 다음으로 $\int_0^{⟦3⟧} \left(⟦4⟧x + \frac{⟦5⟧}{2}\right)dx = \frac{⟦6⟧(⟦7⟧)^2}{2} + \frac{⟦8⟧(⟦9⟧)}{2} = ⟦10⟧$.`,
  '1oi548attkh': R`라그랑주 승수법(또는 다른 방법)으로 $x ⟦0⟧y = ⟦1⟧$, $x, y \gt 0$일 때 $f = xy$의 최댓값을 구하시오.`,
  'helueus42k': R`$\nabla f = \lambda\nabla g$: $y = \lambda$, $x = ⟦0⟧\lambda$. 따라서 $x = ⟦1⟧y$이고 $⟦2⟧y = ⟦3⟧$에서 $y = ⟦4⟧$, $x = ⟦5⟧$, $xy = ⟦6⟧$.`,
  '1c5ngt35a15': R`$D$가 원판 $x^2 + y^2 \le ⟦0⟧$일 때, $\displaystyle\iint_D (x^2 + y^2)\,dA$를 계산하시오.`,
  'hl1el1t8oy': R`극좌표: $\int_0^{2\pi}\!\int_0^{⟦0⟧} r^2 \cdot r\,dr\,d\theta = 2\pi \cdot \frac{⟦1⟧^4}{4} = ⟦2⟧$.`,

  // ode
  '29y4y4v6xas': R`
<p><b>미분방정식</b>은 함수와 그 도함수 사이의 관계식이다. 나타나는 가장 높은 도함수의 계수를 <b>계수</b>라 한다. <b>일반해</b>는 임의상수를 포함하고, 초기조건으로 특수해가 정해진다.</p>
<h3>변수분리형</h3>
⟦0⟧
<p>특별한 경우: $\frac{dy}{dt} = ky$의 해는 $y = y_0e^{kt}$ — 지수적 증가($k \gt 0$) 또는 감소($k \lt 0$). 반감기가 $T$이면 남은 양은 $N_0\left(\frac{1}{2}\right)^{t/T}$.</p>
<h3>일계 선형미분방정식</h3>
⟦1⟧
<h3>상수계수 이계 선형미분방정식</h3>
<p>$ay'' + by' + cy = 0$에 $y = e^{rx}$를 대입하면 <b>특성방정식</b> $ar^2 + br + c = 0$을 얻는다.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'cqow3q58nr': R`<p>$\frac{dy}{dx} = 2xy$: 변수를 분리하면 $\int\frac{dy}{y} = \int 2x\,dx$, 따라서 $\ln|y| = x^2 + C$, $y = Ae^{x^2}$.</p>`,
  '24caer7vpv9': R`<p>$y' + P(x)y = Q(x)$에는 <b>적분인자</b> $\mu(x) = e^{\int P(x)\,dx}$를 곱한다. 그러면 $(\mu y)' = \mu Q$이므로 $y = \frac{1}{\mu}\int \mu Q\,dx$.</p>`,
  '2fhw42v6h9r': R`특성근`,
  'mdry0kk339': R`일반해`,
  '1l55nwfgsi9': R`서로 다른 두 실근 $r_1, r_2$`,
  'fkai3ftnyj': R`중근 $r$`,
  '3w3x9xlope': R`허근 $\alpha \pm \beta i$`,
  '68uvb89pvs': R`<p>$y'' + 4y = 0$: $r^2 + 4 = 0$, $r = \pm 2i$이므로 $y = C_1\cos 2x + C_2\sin 2x$ — 단진동.</p>`,
  'vgovr9zohx': R`<p>중근일 때 $C_1e^{rx} + C_2e^{rx}$는 사실상 하나의 해이다. 인수 $x$를 더 곱하면 두 번째 해가 된다.</p>`,
  '234p7duj3ts': R`$r^2 ⟦0⟧r ⟦1⟧ = 0$의 근은 $r = ⟦2⟧$와 $r = ⟦3⟧$`,
  '1hssho6k9w6': R`$r^2 ⟦0⟧r + ⟦1⟧ = (r ⟦2⟧)^2 = 0$은 중근 $r = ⟦3⟧$를 가짐`,
  '2chd8d4gjpq': R`$r^2 ⟦0⟧r + ⟦1⟧ = 0$은 허근 $r = ⟦2⟧ \pm ⟦3⟧i$를 가짐`,
  '1ngxukqkkvf': R`$⟦0⟧$의 일반해를 구하시오.`,
  'irmvhn9wve': R`특성방정식: ⟦0⟧. 따라서 ⟦1⟧.`,
  '5e0s1xl4f9': R`⟦0⟧ g의 방사성 시료의 반감기는 ⟦1⟧년이다. ⟦2⟧년 후 남은 양은?`,
  '2eo258s1sy7': R`$⟦0⟧$년은 반감기 ⟦1⟧번: $⟦2⟧\left(\frac{1}{2}\right)^{⟦3⟧} = ⟦4⟧$ g.`,
  '1btlmc6ms72': R`변수분리형 미분방정식 $\dfrac{dy}{dx} = ⟦0⟧\,y$를 푸시오.`,
  'lgqvn6fqu1': R`$\int\frac{dy}{y} = \int ⟦0⟧\,dx$에서 $\ln|y| = ⟦1⟧ + C_0$, 따라서 $y = Ce^{⟦2⟧}$.`,
  '1wp1r4xsb5y': R`$y' + ⟦0⟧\,y = x^2$의 적분인자는?`,
  '1d5o356dbul': R`뉴턴의 냉각 법칙에 따라 $T(t) = ⟦0⟧ + ⟦1⟧e^{-⟦2⟧t}$ (°C, $t$는 분)이다. ⟦3⟧분 후의 온도를 소수점 아래 첫째 자리까지 구하시오.`,
  'uzon2x7fe4': R`\frac{dy}{dx} = x^2y`,
  '8swe0ei2mu': R`\frac{d^2y}{dx^2} + y = 0`,
  '28kd92q06yf': R`\frac{d^3y}{dx^3} - 2\frac{dy}{dx} = 0`,
  '1jgz4mikafn': R`미분방정식 $⟦0⟧$의 계수는?`,
  'rxb07imi4n': R`계수는 나타나는 가장 높은 도함수의 계수이다: 여기서는 ⟦0⟧.`,
});
