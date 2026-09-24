/* Español — Universidad (técnicas de derivación → ecuaciones diferenciales) */
addT('es', {
  // diff-techniques
  'i2e9stiapi': R`
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Derivación implícita</h3>
<p>Cuando $y$ está definida implícitamente, deriva ambos miembros respecto de $x$, tratando $y$ como función de $x$ (así $\frac{d}{dx}y^2 = 2y\,y'$), y luego despeja $y'$.</p>
⟦3⟧
⟦4⟧
⟦5⟧`,
  '1kr8zytc8j5': R`Producto`,
  '1fd6nxjb0xt': R`Cociente`,
  '21u0n9yxqot': R`Cadena`,
  '10xmtmesa6t': R`Función`,
  'n72fq2kxcg': R`Derivada`,
  '1qtv7snffoy': R`<p>$\dfrac{d}{dx}\,(3x^2 + 1)^5 = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4$ &nbsp;(regla de la cadena)</p><p>$\dfrac{d}{dx}\,x^2 e^{3x} = 2x e^{3x} + 3x^2 e^{3x} = xe^{3x}(2 + 3x)$ &nbsp;(regla del producto)</p>`,
  '1nhip08xeg5': R`<p>$x^2 + y^2 = 25 \Rightarrow 2x + 2y\,y' = 0 \Rightarrow y' = -\dfrac{x}{y}$. En $(3; 4)$ la pendiente es $-\frac{3}{4}$.</p>`,
  'wvkdxn7frj': R`<p>La <b>derivación logarítmica</b> sirve para productos, cocientes y potencias variables: para $y = x^x$, $\ln y = x\ln x$, así que $\frac{y'}{y} = \ln x + 1$ e $y' = x^x(\ln x + 1)$.</p>`,
  're4vli1oc9': R`<p>Regla de la cadena: multiplica siempre por la derivada de la función <b>interior</b>. $\frac{d}{dx}\sin(x^2) = 2x\cos(x^2)$, no $\cos(x^2)$.</p>`,
  '1iajxt140g2': R`Sea $f(x) = (⟦0⟧)^{⟦1⟧}$. Calcula $f'(⟦2⟧)$.`,
  '2108swf0nc1': R`Regla de la cadena: $f'(x) = ⟦0⟧(⟦1⟧)^{⟦2⟧} \cdot ⟦3⟧$. En $x = ⟦4⟧$ el interior vale ⟦5⟧, así que $f'(⟦6⟧) = ⟦7⟧ \cdot ⟦8⟧^{⟦9⟧} \cdot ⟦10⟧ = ⟦11⟧$.`,
  '13u8g7mcany': R`Deriva $y = ⟦0⟧⟦1⟧$.`,
  'ltfmske2sq': R`Regla del producto con $u = ⟦0⟧$, $v = ⟦1⟧$: $y' = ⟦2⟧⟦3⟧ + ⟦4⟧ \cdot ⟦5⟧ =⟦6⟧⟦7⟧(⟦8⟧)$.`,
  '24tbapqaxkt': R`Sea $f(x) = \ln(⟦0⟧)$. Calcula $f'(⟦1⟧)$.`,
  'vr5ui5jnj1': R`$f'(x) = \frac{⟦0⟧x}{⟦1⟧}$, así que $f'(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '21f80wac08v': R`Calcula $\frac{dy}{dx}$ para $x^2 + y^2 = ⟦0⟧$ en el punto $⟦1⟧$.`,
  'xl17ytois8': R`Calcula $\frac{dy}{dx}$ para $xy = ⟦0⟧$ en el punto $⟦1⟧$.`,
  'cc1dbada60': R`Regla del producto: $y + x\,y' = 0 \Rightarrow y' = -\frac{y}{x} = ⟦0⟧$.`,
  'g5b3ql04b4': R`Deriva $y = \sin(⟦0⟧)$.`,
  '1u57cjycyb3': R`Regla de la cadena: la derivada exterior es $\cos(⟦0⟧)$ y la interior es $⟦1⟧$, lo que da $⟦2⟧\cos(⟦3⟧)$.`,
  '1zcx1qjywp8': R`Para $f(x) = ⟦0⟧$, calcula $f''(⟦1⟧)$.`,
  '22jprctwicn': R`$f'(x) = ⟦0⟧$ y $f''(x) = ⟦1⟧$. Por tanto, $f''(⟦2⟧) = ⟦3⟧$.`,
  '1pkqexq4tgg': R`Sea $f(x) = x\ln x$. Calcula $f'(e^{⟦0⟧})$.`,
  '20aqqhk2mtp': R`Regla del producto: $f'(x) = \ln x + x \cdot \frac{1}{x} = \ln x + 1$. Así, $f'(e^{⟦0⟧}) = ⟦1⟧ + 1 = ⟦2⟧$.`,

  // diff-applications
  'g0oq20zzs': R`
<h3>Regla de L'Hôpital</h3>
⟦0⟧
<p>$\displaystyle\lim_{x \to 0}\frac{1 - \cos 4x}{x^2} = \lim\frac{4\sin 4x}{2x} = \lim\frac{16\cos 4x}{2} = 8$ (aplicada dos veces).</p>
<h3>Optimización</h3>
<ol><li>Escribe la magnitud que se optimiza como función de una sola variable (usa la restricción).</li><li>Deriva y resuelve $f'(x) = 0$.</li><li>Comprueba que es un máximo/mínimo (segunda derivada o extremos del intervalo).</li></ol>
⟦1⟧
<h3>Razones de cambio relacionadas</h3>
<p>Deriva una relación respecto del tiempo. Para un círculo que crece, $A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r\frac{dr}{dt}$.</p>
<h3>Aproximación lineal</h3>
⟦2⟧
<h3>Concavidad y teorema del valor medio</h3>
<p>$f'' \gt 0$: cóncava hacia arriba; $f'' \lt 0$: cóncava hacia abajo; un <b>punto de inflexión</b> es donde cambia la concavidad. <b>TVM:</b> si $f$ es continua en $[a; b]$ y derivable en el interior, existe $c$ en $(a; b)$ con $f'(c) = \frac{f(b) - f(a)}{b - a}$.</p>
⟦3⟧`,
  '11hmiu9w9s4': R`<p>Si $\lim \frac{f(x)}{g(x)}$ tiene la forma $\frac{0}{0}$ o $\frac{\infty}{\infty}$, entonces $\displaystyle\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}$ (cuando existe el lado derecho).</p>`,
  '189x52ko5mw': R`<p>De las esquinas de una lámina cuadrada de 18 cm se recortan cuadrados de lado $x$ y se doblan los lados. $V = x(18 - 2x)^2$, $V' = (18 - 2x)(18 - 6x) = 0$ da $x = 3$, así que $V_{\max} = 3 \cdot 12^2 = 432$ cm³.</p>`,
  'e22qux2ozs': R`f(a + h) \approx f(a) + f'(a)\,h \qquad \text{p. ej. } \sqrt{26} \approx 5 + \frac{1}{2 \cdot 5} = 5{,}1`,
  '15384lzo6ba': R`<p>L'Hôpital deriva numerador y denominador <b>por separado</b>: no es la regla del cociente.</p>`,
  's2219vpl96': R`Calcula $\displaystyle\lim_{x \to 0}\frac{1 - \cos ⟦0⟧x}{x^2}$.`,
  '1tq22svmx8r': R`L'Hôpital dos veces: $\frac{⟦0⟧\sin ⟦1⟧x}{2x} \to \frac{⟦2⟧\cos ⟦3⟧x}{2} \to \frac{⟦4⟧}{2}$.`,
  'v9t0b7xos3': R`Calcula $\displaystyle\lim_{x \to 0}\frac{⟦0⟧}{⟦1⟧x}$.`,
  'wudu9stdyh': R`Es de la forma $\frac{0}{0}$; deriva numerador y denominador: $\frac{⟦0⟧}{⟦1⟧} \to \frac{⟦2⟧}{⟦3⟧}$.`,
  'b8a0ml45bv': R`De las esquinas de una lámina de ⟦0⟧ cm por ⟦1⟧ cm se recortan cuadrados iguales de lado $x$ cm y se doblan los lados para formar una caja abierta. ⟦2⟧`,
  '6fzl8050w8': R`¿Qué valor de x maximiza el volumen?`,
  '1nbs4g9250e': R`¿Cuál es el volumen máximo posible?`,
  '1xaya4958aj': R`$V = x(⟦0⟧ - 2x)^2$, $V' = (⟦1⟧ - 2x)(⟦2⟧ - 6x) = 0$ da $x = ⟦3⟧$ (la otra raíz da volumen cero). $V = ⟦4⟧(⟦5⟧)^2 = ⟦6⟧$ cm³.`,
  'g44lawx7yb': R`El radio de un círculo aumenta a ⟦0⟧ cm/s. ¿A qué ritmo aumenta el área cuando el radio mide ⟦1⟧ cm? Responde en función de $\pi$.`,
  'pvrsmdtr3x': R`$\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi(⟦0⟧)(⟦1⟧) = ⟦2⟧$ cm²/s.`,
  'w8wuhpzsgd': R`El radio de un globo esférico crece a ⟦0⟧ cm/s. ¿A qué ritmo aumenta su volumen cuando el radio mide ⟦1⟧ cm? Responde en función de $\pi$.`,
  '1ca85zwkg9p': R`$\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt} = 4\pi(⟦0⟧)^2(⟦1⟧) = ⟦2⟧$ cm³/s.`,
  '2c66yuykiw5': R`Usa una aproximación lineal de $\sqrt{x}$ en $x = ⟦0⟧$ para estimar $\sqrt{⟦1⟧}$.`,
  'rjw48nwhxr': R`Escribe una fracción o un decimal.`,
  '16wswpodtbc': R`Halla la coordenada $x$ del punto de inflexión de $f(x) = ⟦0⟧$.`,
  '16igzoef2co': R`$f''(x) = 6x ⟦0⟧ = 0$ da $x = ⟦1⟧$; ahí $f''$ cambia de signo.`,
  '2dw0fqk2lyr': R`$f(x) = ⟦0⟧$ en $[⟦1⟧; ⟦2⟧]$. Halla el valor $c$ que garantiza el teorema del valor medio.`,
  '1c5ltuvzsrq': R`Pendiente media $= \frac{f(⟦0⟧) - f(⟦1⟧)}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. $f'(c) = 2c ⟦5⟧ = ⟦6⟧$ da $c = ⟦7⟧$: el punto medio, como siempre en una cuadrática.`,

  // integration-techniques
  'vrvi3bfbr': R`
<h3>Sustitución</h3>
<p>Busca una función y su derivada. Con $u = g(x)$, $du = g'(x)\,dx$:</p>
⟦0⟧
<p>En integrales definidas, cambia también los límites (o vuelve a la variable original antes de evaluar).</p>
<h3>Integración por partes</h3>
⟦1⟧
⟦2⟧
<h3>Fracciones parciales</h3>
<p>Descompón una función racional en piezas más simples: $\dfrac{5x - 1}{(x - 1)(x + 2)} = \dfrac{A}{x - 1} + \dfrac{B}{x + 2}$. Quita denominadores y sustituye $x = 1$ y $x = -2$: $A = \frac{4}{3}$, $B = \frac{11}{3}$. Cada pieza se integra como un logaritmo.</p>
<h3>Integrales impropias</h3>
⟦3⟧
⟦4⟧`,
  '26zznowz8be': R`\int 2x(x^2 + 1)^3\,dx = \int u^3\,du = \frac{u^4}{4} + C = \frac{(x^2 + 1)^4}{4} + C`,
  '5ecfawuidh': R`$$\int u\,dv = uv - \int v\,du$$<p>Elige $u$ según <b>ILATE</b>: Inversas trigonométricas, Logarítmicas, Algebraicas, Trigonométricas, Exponenciales; la que aparezca primero.</p>`,
  'c0nz9m0n3d': R`<p>$\int x e^{2x}\,dx$: $u = x$, $dv = e^{2x}dx$, así que $du = dx$, $v = \frac{1}{2}e^{2x}$. Resultado: $\frac{x}{2}e^{2x} - \int\frac{1}{2}e^{2x}\,dx = \frac{x}{2}e^{2x} - \frac{1}{4}e^{2x} + C$.</p>`,
  '2clmb8muggz': R`\int_1^\infty \frac{dx}{x^p} = \frac{1}{p - 1} \text{ si } p \gt 1 \text{ (diverge si } p \le 1) \qquad \int_0^\infty e^{-kx}\,dx = \frac{1}{k}`,
  'l8twy4h3ug': R`<p>$\int \frac{g'(x)}{g(x)}\,dx = \ln|g(x)| + C$: reconoce este patrón antes de recurrir a algo más pesado.</p>`,
  'fesx7djw83': R`xe^{x} - e^{x}`,
  'yia5dxx3ds': R`xe^{x} + e^{x}`,
  '1afuqmxgeq5': R`Calcula $\displaystyle\int ⟦0⟧\,dx$.`,
  '1235n0zk19z': R`Integra por partes con ⟦0⟧: el resultado es ⟦1⟧. Deriva para comprobarlo.`,
  'pklgf5s2ey': R`Calcula $\displaystyle\int_0^{⟦0⟧} 2x(x^2 + 1)^{⟦1⟧}\,dx$.`,
  '51fkmlo4j8': R`Sea $u = x^2 + 1$, $du = 2x\,dx$; límites de $u = 1$ a $u = ⟦0⟧$: $\int_1^{⟦1⟧} u^{⟦2⟧}\,du = \left[\frac{u^{⟦3⟧}}{⟦4⟧}\right]_1^{⟦5⟧} = \frac{⟦6⟧ - 1}{⟦7⟧} = ⟦8⟧$.`,
  '1tmpbvg6cku': R`Descompón en fracciones parciales: $\dfrac{⟦0⟧}{⟦1⟧⟦2⟧}$`,
  '1iitr1pnozn': R`Escribe $\frac{P}{⟦0⟧} + \frac{Q}{⟦1⟧}$ y quita denominadores. Con $x = ⟦2⟧$ se obtiene $P = ⟦3⟧$; con $x = ⟦4⟧$, $Q = ⟦5⟧$.`,
  'r1rswlk024': R`Calcula $\displaystyle\int_0^{\pi/⟦0⟧} \sin(⟦1⟧x)\,dx$.`,
  '1l97oofm3p4': R`Calcula $\displaystyle\int_0^{\pi/⟦0⟧} \cos(⟦1⟧x)\,dx$.`,
  'pqalznrxip': R`Calcula $\displaystyle\int_1^{\infty} \frac{dx}{x^{⟦0⟧}}$.`,
  '4t49nbtc5g': R`$\left[\frac{x^{⟦0⟧}}{⟦1⟧}\right]_1^{\infty} = 0 - \frac{1}{⟦2⟧} = ⟦3⟧$. Converge porque $p = ⟦4⟧ \gt 1$.`,
  'w9i8vvwvmq': R`Calcula $\displaystyle\int_0^{\infty} e^{-⟦0⟧x}\,dx$.`,
  '1wnox68sxsf': R`Calcula $\displaystyle\int_0^{⟦0⟧} \frac{2x}{x^2 + 1}\,dx$.`,
  '2ctr5v6it67': R`Se aceptan respuestas como ln(10).`,
  '8ud8r2yql4': R`El numerador es la derivada del denominador: $\left[\ln(x^2 + 1)\right]_0^{⟦0⟧} = \ln ⟦1⟧ - \ln 1 = \ln ⟦2⟧$.`,

  // integral-applications
  '1iuoee1mxv2': R`Integral`,
  'u2fo7phj7e': R`Área entre curvas`,
  '26rkw1zgbbl': R`Volumen (discos), alrededor del eje x`,
  '1gdvfh77kjd': R`Volumen (arandelas)`,
  '2e8c5l4l65u': R`Volumen (capas), alrededor del eje y`,
  'hf97eg5buy': R`Valor medio`,
  '1wrr2ozjzke': R`Longitud de arco`,
  '1aamatrm1qc': R`Trabajo (fuerza variable)`,
  '25psf0wh4wl': R`<p>Al girar $y = \sqrt{x}$, $0 \le x \le 4$, alrededor del eje $x$: $V = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi$.</p>`,
  '84txgrqh8f': R`<p>Un resorte con $k = 200$ N/m (ley de Hooke $F = kx$) estirado 0,3 m: $W = \int_0^{0{,}3} 200x\,dx = 100(0{,}3)^2 = 9$ J.</p>`,
  '4sufc6qh8k': R`<p>Primero haz un esbozo. Halla dónde se cortan las curvas (son los límites) y cuál queda arriba: el integrando es siempre <b>la de arriba menos la de abajo</b> (o radio exterior al cuadrado menos radio interior al cuadrado).</p>`,
  '2dts82e214f': R`<p>En el método de discos se eleva al cuadrado la <b>función</b>, no la integral: $\pi\int f^2$, no $\pi\left(\int f\right)^2$.</p>`,
  '254d1knheuj': R`Halla el área encerrada entre $y = x^3$ e $y = ⟦0⟧x$ en el primer cuadrante.`,
  '6v6svg4kwp': R`Se cortan en $x = 0$ y $x = ⟦0⟧$. $\int_0^{⟦1⟧} (⟦2⟧x - x^3)\,dx = \frac{⟦3⟧(⟦4⟧)^2}{2} - \frac{⟦5⟧^4}{4} = ⟦6⟧$.`,
  '137eefen200': R`\pi\int_0^{⟦0⟧} x\,dx = \frac{\pi (⟦1⟧)^2}{2}`,
  '1minpuvvl2n': R`\pi\int_0^{⟦0⟧} x^2\,dx = \frac{\pi (⟦1⟧)^3}{3}`,
  's7flm3xrdz': R`\pi\int_0^{⟦0⟧} x^4\,dx = \frac{\pi (⟦1⟧)^5}{5}`,
  '217wjez6n7': R`La región bajo $⟦0⟧$ para $0 \le x \le ⟦1⟧$ gira alrededor del eje $x$. Halla el volumen en función de $\pi$.`,
  '1icurdoc4sc': R`Método de discos: $V = ⟦0⟧ = ⟦1⟧$.`,
  '2gj0lncwv9v': R`La región entre $y = ⟦0⟧x$ e $y = x^2$ gira alrededor del eje $x$. Halla el volumen en función de $\pi$.`,
  '79trxd9ylt': R`Arandelas con radio exterior $⟦0⟧x$ y radio interior $x^2$ en $[0; ⟦1⟧]$: $V = \pi\int_0^{⟦2⟧} (⟦3⟧x^2 - x^4)\,dx = \pi\left(\frac{⟦4⟧}{3} - \frac{⟦5⟧}{5}\right) = ⟦6⟧$.`,
  '7u6xsm6kr0': R`Halla el valor medio de $f(x) = x^2$ en $[0; ⟦0⟧]$.`,
  '14439tvneep': R`Halla el valor medio de $f(x) = ⟦0⟧$ en $[⟦1⟧; ⟦2⟧]$.`,
  'ooxywxrn7m': R`El valor medio de una función lineal es su valor en el punto medio $x = ⟦0⟧$: $⟦1⟧(⟦2⟧) ⟦3⟧ = ⟦4⟧$.`,
  'mptjdpftfn': R`Halla la longitud de arco de $y = \frac{2}{3}x^{3/2}$ desde $x = 0$ hasta $x = ⟦0⟧$.`,
  'z00id81ez': R`$y' = x^{1/2}$, así que $L = \int_0^{⟦0⟧} \sqrt{1 + x}\,dx = \left[\frac{2}{3}(1 + x)^{3/2}\right]_0^{⟦1⟧} = \frac{2}{3}(⟦2⟧ - 1) = ⟦3⟧$.`,
  'lpjavqv13n': R`Un resorte tiene constante $k = ⟦0⟧$ N/m. ¿Cuánto trabajo hace falta para estirarlo ⟦1⟧ m desde su longitud natural?`,

  // series
  '1efhn95iov3': R`
<p>Una serie infinita $\sum a_n$ <b>converge</b> si sus sumas parciales $S_N = a_1 + \cdots + a_N$ tienden a un límite finito.</p>
⟦0⟧
⟦1⟧
<h3>Series de potencias y series de Taylor</h3>
<p>Una serie de potencias $\sum c_n (x - a)^n$ converge para $|x - a| \lt R$, el <b>radio de convergencia</b> (se halla con el criterio del cociente). La serie de Taylor de $f$ en torno a $a$ es $\sum \frac{f^{(n)}(a)}{n!}(x - a)^n$; en torno a 0 se llama serie de Maclaurin.</p>
⟦2⟧
⟦3⟧`,
  '1fv7uha3bb4': R`Criterio`,
  '1boy0ga8tbt': R`Conclusión`,
  '7ih7yeq8ue': R`Criterio del término general`,
  '1muum9p7rzf': R`si $a_n \not\to 0$, la serie diverge`,
  '1ky8r0l0qv8': R`$\sum ar^n$ converge si y solo si $|r| \lt 1$; suma $\frac{a}{1 - r}$`,
  'rijv0gvehd': R`Serie p`,
  '7fut7e3zun': R`$\sum \frac{1}{n^p}$ converge si y solo si $p \gt 1$`,
  '28h8cjdskg3': R`Comparación`,
  '23c91vpuxqn': R`comparar con una serie conocida`,
  '1684r7a6bgw': R`Criterio del cociente`,
  'oc6lw933sm': R`$L = \lim\left|\frac{a_{n+1}}{a_n}\right|$: si $L \lt 1$ converge, si $L \gt 1$ diverge`,
  '131362k70as': R`Serie alternada`,
  '1ew5e8sa4g7': R`$\sum (-1)^n b_n$ converge si $b_n \downarrow 0$`,
  '12cxen3heke': R`<p><b>Serie telescópica:</b> $\displaystyle\sum_{n=1}^{N}\frac{1}{n(n+1)} = \sum\left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{N+1}$, que tiende a 1.</p>`,
  '1ql1d0zgkve': R`Serie de Maclaurin`,
  '1arf5rbq565': R`Válida para`,
  'oui4ssl2gv': R`todo x`,
  'kvkz0oqeo6': R`<p>$a_n \to 0$ es necesario pero no suficiente: la serie armónica $\sum \frac{1}{n}$ diverge aunque $\frac{1}{n} \to 0$.</p>`,
  '16u2ienbhtn': R`Calcula $\displaystyle\sum_{n=⟦0⟧}^{\infty} ⟦1⟧\left(⟦2⟧\right)^n$.`,
  '1kgeq4tf48a': R`Geométrica con $r = ⟦0⟧$, $|r| \lt 1$, primer término $⟦1⟧$: suma $= \frac{⟦2⟧}{1 - ⟦3⟧} = ⟦4⟧$.`,
  '1eiae773y4x': R`ser una serie p con $p = \frac{1}{2} \le 1$`,
  '1wok8okhtk9': R`ser la serie armónica ($p = 1$)`,
  '22u9pb285sv': R`ser una serie p con $p = \frac{3}{2} \gt 1$`,
  '204d6a8dcww': R`ser una serie p con $p = 2 \gt 1$`,
  '243y5j9lor6': R`el criterio del término general: $\frac{n}{n+1} \to 1 \ne 0$`,
  'ajpp0zqaap': R`el criterio de las series alternadas`,
  'wlawq7ztg6': R`el criterio del cociente: $\frac{3}{n+1} \to 0 \lt 1$`,
  '265645ebmpe': R`el criterio del cociente: $\frac{n+1}{2} \to \infty$`,
  '1lt7pp2ijz': R`ser una serie geométrica con $|r| = \frac{2}{3} \lt 1$`,
  '6goqsof3sp': R`ser una serie geométrica con $|r| = \frac{3}{2} \ge 1$`,
  '1d4bvtuk3gt': R`comparación con $\sum\frac{1}{n^2}$`,
  '2846ssfmjxq': R`comparación en el límite con la serie armónica`,
  's3fpv9edn1': R`¿Converge o diverge $\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$?`,
  '1szqlme8ixw': R`Converge`,
  '1mr32mwk08w': R`Diverge`,
  '25wy0z8lea1': R`Converge por ⟦0⟧.`,
  'zibgubfq': R`Diverge por ⟦0⟧.`,
  'd893gqg85h': R`Halla el coeficiente de $x^{⟦0⟧}$ en la serie de Maclaurin de $⟦1⟧$.`,
  '2gib9c2xh5i': R`$e^u = \sum \frac{u^n}{n!}$ con $u = ⟦0⟧$: el coeficiente es $\frac{(⟦1⟧)^{⟦2⟧}}{⟦3⟧!} = ⟦4⟧$.`,
  '1i7l7fodjgy': R`Halla el coeficiente de $x^{⟦0⟧}$ en la serie de Maclaurin de $\cos(⟦1⟧x)$.`,
  '27l5wjsmcqy': R`$\cos u = 1 - \frac{u^2}{2!} + \frac{u^4}{4!} - \cdots$ con $u = ⟦0⟧x$: coeficiente $= ⟦1⟧$.`,
  '13hswzoz6ds': R`Halla el coeficiente de $x^{⟦0⟧}$ en la serie de Maclaurin de $\dfrac{1}{1 ⟦1⟧x}$.`,
  '950amaqi7k': R`$\frac{1}{1 - u} = \sum u^n$ con $u = ⟦0⟧$: el coeficiente de $x^{⟦1⟧}$ es $(⟦2⟧)^{⟦3⟧} = ⟦4⟧$.`,
  '12ohsobdns': R`Halla el radio de convergencia de $\displaystyle\sum_{n=1}^{\infty} ⟦0⟧$.`,
  'y2p3mhwix3': R`Criterio del cociente: $\left|\frac{a_{n+1}}{a_n}\right| \to \frac{|⟦0⟧|}{⟦1⟧}$. Es menor que 1 cuando $|⟦2⟧| \lt ⟦3⟧$, así que $R = ⟦4⟧$.`,
  '1hfprth485h': R`Calcula $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$.`,
  '24anbau0yh': R`Telescópica: $S_N = 1 - \frac{1}{N+1} \to 1$.`,
  'kcknro2xmq': R`Calcula $\displaystyle\sum_{n=1}^{⟦0⟧} \frac{1}{n(n+1)}$.`,
  'd2ku2hqqe6': R`$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$, así que la suma es telescópica y vale $1 - \frac{1}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$.`,
  '2d09rr0z1dx': R`¿Qué función tiene la serie de Maclaurin $\displaystyle ⟦0⟧$?`,
  '262p4pwoflz': R`Es la serie conocida de $⟦0⟧$.`,

  // multivariable
  'elrzs4craq': R`
<p>Para $f(x, y)$, la <b>derivada parcial</b> $f_x = \frac{\partial f}{\partial x}$ deriva respecto de $x$ tratando $y$ como constante (y al revés para $f_y$). Para $f = x^2y^3$: $f_x = 2xy^3$, $f_y = 3x^2y^2$.</p>
<h3>Gradiente y derivadas direccionales</h3>
⟦0⟧
<h3>Puntos críticos: criterio de la segunda derivada</h3>
<p>En un punto donde $f_x = f_y = 0$, sea $D = f_{xx}f_{yy} - f_{xy}^2$.</p>
<ul><li>$D \gt 0$, $f_{xx} \gt 0$: mínimo local. &nbsp; $D \gt 0$, $f_{xx} \lt 0$: máximo local.</li><li>$D \lt 0$: punto de silla. &nbsp; $D = 0$: el criterio no decide.</li></ul>
<h3>Integrales dobles</h3>
<p>Sobre un rectángulo, integra una variable cada vez (Fubini): $\displaystyle\int_0^2\!\!\int_0^3 xy\,dy\,dx = \int_0^2 \frac{9x}{2}\,dx = 9$. En coordenadas polares, $dA = r\,dr\,d\theta$.</p>
<h3>Multiplicadores de Lagrange</h3>
<p>Para optimizar $f$ con la restricción $g = c$, resuelve $\nabla f = \lambda\nabla g$ junto con la restricción.</p>
⟦1⟧
⟦2⟧`,
  '1lpi0dcmqpt': R`$$\nabla f = \left(f_x; f_y\right) \qquad D_{\mathbf{u}}f = \nabla f \cdot \mathbf{u} \quad (|\mathbf{u}| = 1)$$<p>$\nabla f$ apunta en la dirección de máximo crecimiento; su longitud es esa razón máxima.</p>`,
  'opu0v1dwpl': R`<p>Maximiza $f = xy$ con $x + y = 10$: $(y; x) = \lambda(1; 1)$ da $x = y = 5$, así que el máximo es 25.</p>`,
  '83uqphqp8x': R`<p>En coordenadas polares no olvides el factor extra $r$ en $dA = r\,dr\,d\theta$.</p>`,
  'oxpugv5o3o': R`Para $f(x, y) = ⟦0⟧$, calcula $f_⟦1⟧(⟦2⟧; ⟦3⟧)$.`,
  '131ofsfpabh': R`$f_x = ⟦0⟧$, así que $f_x(⟦1⟧; ⟦2⟧) = ⟦3⟧$.`,
  'tma98sxgbh': R`$f_y = ⟦0⟧$, así que $f_y(⟦1⟧; ⟦2⟧) = ⟦3⟧$.`,
  '1894fvoucsb': R`Calcula $\nabla f(⟦0⟧; ⟦1⟧)$ para $f(x, y) = ⟦2⟧$.`,
  '1mtqnuj8e72': R`Escribe las dos componentes separadas por punto y coma.`,
  '1wlrv45vn5z': R`$f_x = ⟦0⟧$, $f_y = ⟦1⟧$. En $⟦2⟧$: $\nabla f = ⟦3⟧$.`,
  '280l4hqbl71': R`Halla la derivada direccional de $f(x, y) = ⟦0⟧$ en $⟦1⟧$ en la dirección de $⟦2⟧$.`,
  '23ij1mnh3qx': R`$\nabla f = (⟦0⟧; ⟦1⟧)$ y el vector unitario es $\frac{1}{⟦2⟧}⟦3⟧$. $D_{\mathbf{u}}f = \frac{⟦4⟧(⟦5⟧) + ⟦6⟧(⟦7⟧)}{⟦8⟧} = ⟦9⟧$.`,
  '1gbu12sd7yr': R`Mínimo local`,
  'tfsmpd4xkw': R`Máximo local`,
  '29jq1piqelp': R`Punto de silla`,
  '1knzmyv1q46': R`El criterio no decide`,
  'uai27zrool': R`Clasifica el punto crítico en $(0; 0)$ de $f(x, y) = ⟦0⟧$.`,
  'k6dc7gm5pm': R`$D \gt 0$ y $f_{xx} ⟦0⟧ 0$`,
  'scf747plq6': R`Calcula $\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} xy\,dy\,dx$.`,
  'scioeo7pw6': R`$\int_0^{⟦0⟧} xy\,dy = \frac{⟦1⟧x}{2}$; luego $\int_0^{⟦2⟧} \frac{⟦3⟧x}{2}\,dx = \frac{⟦4⟧ \cdot ⟦5⟧}{4} = ⟦6⟧$.`,
  'ktiyfy2vps': R`Calcula $\displaystyle\int_0^{⟦0⟧}\!\!\int_0^{⟦1⟧} (x + y)\,dy\,dx$.`,
  'lgh3731wbd': R`$\int_0^{⟦0⟧} (x + y)\,dy = ⟦1⟧x + \frac{⟦2⟧}{2}$; luego $\int_0^{⟦3⟧} \left(⟦4⟧x + \frac{⟦5⟧}{2}\right)dx = \frac{⟦6⟧(⟦7⟧)^2}{2} + \frac{⟦8⟧(⟦9⟧)}{2} = ⟦10⟧$.`,
  '1oi548attkh': R`Usando multiplicadores de Lagrange (u otro método), halla el máximo de $f = xy$ con la restricción $x ⟦0⟧y = ⟦1⟧$, $x, y \gt 0$.`,
  'helueus42k': R`$\nabla f = \lambda\nabla g$: $y = \lambda$, $x = ⟦0⟧\lambda$. Así $x = ⟦1⟧y$ y $⟦2⟧y = ⟦3⟧$, de donde $y = ⟦4⟧$, $x = ⟦5⟧$ y $xy = ⟦6⟧$.`,
  '1c5ngt35a15': R`Calcula $\displaystyle\iint_D (x^2 + y^2)\,dA$, donde $D$ es el disco $x^2 + y^2 \le ⟦0⟧$.`,
  'hl1el1t8oy': R`Coordenadas polares: $\int_0^{2\pi}\!\int_0^{⟦0⟧} r^2 \cdot r\,dr\,d\theta = 2\pi \cdot \frac{⟦1⟧^4}{4} = ⟦2⟧$.`,

  // ode
  '29y4y4v6xas': R`
<p>Una <b>ecuación diferencial</b> relaciona una función con sus derivadas. Su <b>orden</b> es el de la derivada más alta que aparece. La <b>solución general</b> contiene constantes arbitrarias; las condiciones iniciales determinan una solución particular.</p>
<h3>Ecuaciones separables</h3>
⟦0⟧
<p>Caso especial: $\frac{dy}{dt} = ky$ da $y = y_0e^{kt}$: crecimiento exponencial ($k \gt 0$) o decaimiento ($k \lt 0$). Con periodo de semidesintegración $T$, la cantidad restante es $N_0\left(\frac{1}{2}\right)^{t/T}$.</p>
<h3>Ecuaciones lineales de primer orden</h3>
⟦1⟧
<h3>Lineales de segundo orden con coeficientes constantes</h3>
<p>Para $ay'' + by' + cy = 0$, prueba $y = e^{rx}$ y obtendrás la <b>ecuación característica</b> $ar^2 + br + c = 0$.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'cqow3q58nr': R`<p>$\frac{dy}{dx} = 2xy$: separa variables, $\int\frac{dy}{y} = \int 2x\,dx$, así que $\ln|y| = x^2 + C$ e $y = Ae^{x^2}$.</p>`,
  '24caer7vpv9': R`<p>Para $y' + P(x)y = Q(x)$, multiplica por el <b>factor integrante</b> $\mu(x) = e^{\int P(x)\,dx}$. Entonces $(\mu y)' = \mu Q$, así que $y = \frac{1}{\mu}\int \mu Q\,dx$.</p>`,
  '2fhw42v6h9r': R`Raíces`,
  'mdry0kk339': R`Solución general`,
  '1l55nwfgsi9': R`reales y distintas $r_1, r_2$`,
  'fkai3ftnyj': R`doble $r$`,
  '3w3x9xlope': R`complejas $\alpha \pm \beta i$`,
  '68uvb89pvs': R`<p>$y'' + 4y = 0$: $r^2 + 4 = 0$, $r = \pm 2i$, así que $y = C_1\cos 2x + C_2\sin 2x$: movimiento armónico simple.</p>`,
  'vgovr9zohx': R`<p>Con una raíz doble, $C_1e^{rx} + C_2e^{rx}$ es en realidad una sola solución; el factor extra $x$ da la segunda.</p>`,
  '234p7duj3ts': R`$r^2 ⟦0⟧r ⟦1⟧ = 0$ tiene raíces $r = ⟦2⟧$ y $r = ⟦3⟧$`,
  '1hssho6k9w6': R`$r^2 ⟦0⟧r + ⟦1⟧ = (r ⟦2⟧)^2 = 0$ tiene la raíz doble $r = ⟦3⟧$`,
  '2chd8d4gjpq': R`$r^2 ⟦0⟧r + ⟦1⟧ = 0$ tiene raíces complejas $r = ⟦2⟧ \pm ⟦3⟧i$`,
  '1ngxukqkkvf': R`Halla la solución general de $⟦0⟧$.`,
  'irmvhn9wve': R`La ecuación característica ⟦0⟧, así que ⟦1⟧.`,
  '5e0s1xl4f9': R`Una muestra radiactiva de ⟦0⟧ g tiene un periodo de semidesintegración de ⟦1⟧ años. ¿Cuánto queda después de ⟦2⟧ años?`,
  '2eo258s1sy7': R`$⟦0⟧$ años son ⟦1⟧ periodos: $⟦2⟧\left(\frac{1}{2}\right)^{⟦3⟧} = ⟦4⟧$ g.`,
  '1btlmc6ms72': R`Resuelve la ecuación separable $\dfrac{dy}{dx} = ⟦0⟧\,y$.`,
  'lgqvn6fqu1': R`$\int\frac{dy}{y} = \int ⟦0⟧\,dx$ da $\ln|y| = ⟦1⟧ + C_0$, así que $y = Ce^{⟦2⟧}$.`,
  '1wp1r4xsb5y': R`¿Cuál es el factor integrante de $y' + ⟦0⟧\,y = x^2$?`,
  '1d5o356dbul': R`La ley de enfriamiento de Newton da $T(t) = ⟦0⟧ + ⟦1⟧e^{-⟦2⟧t}$ (°C, $t$ en minutos). Halla la temperatura al cabo de ⟦3⟧ minutos, con 1 decimal.`,
  'uzon2x7fe4': R`\frac{dy}{dx} = x^2y`,
  '8swe0ei2mu': R`\frac{d^2y}{dx^2} + y = 0`,
  '28kd92q06yf': R`\frac{d^3y}{dx^3} - 2\frac{dy}{dx} = 0`,
  '1jgz4mikafn': R`¿Cuál es el orden de la ecuación diferencial $⟦0⟧$?`,
  'rxb07imi4n': R`El orden es el de la derivada más alta que aparece: aquí es ⟦0⟧.`,
});
