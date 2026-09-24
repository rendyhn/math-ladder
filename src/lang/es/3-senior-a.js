/* Español — Bachillerato (núcleo, cuadráticas → exponenciales y logaritmos) */
addT('es', {
  // core
  '3idcm4kbiz': R`Escribe ambas soluciones separadas por punto y coma, p. ej. -2; 5.`,
  '2gdno2vs4iz': R`Escribe una respuesta como 9pi o 3pi/4.`,

  // quadratics
  'zojqk1lf1a': R`
<p>Una <b>ecuación cuadrática</b> tiene la forma $ax^2 + bx + c = 0$ con $a \ne 0$. Tiene como máximo dos soluciones (raíces).</p>
<h3>1. Factorización</h3>
<p>Si un producto es cero, uno de sus factores es cero. Busca dos números cuyo producto sea $c$ y cuya suma sea $b$ (cuando $a = 1$):</p>
⟦0⟧
<h3>2. Completar el cuadrado</h3>
⟦1⟧
<h3>3. La fórmula general</h3>
⟦2⟧
<h3>Suma y producto de las raíces (Vieta)</h3>
⟦3⟧
<p>Así, una ecuación con raíces $r$ y $s$ es $x^2 - (r + s)x + rs = 0$.</p>
⟦4⟧
⟦5⟧`,
  '2eim40ubkm5': R`x^2 - x - 12 = 0 \;\Rightarrow\; (x - 4)(x + 3) = 0 \;\Rightarrow\; x = 4 \text{ o } x = -3`,
  '2fswinarukx': R`$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$<p>El <b>discriminante</b> $D = b^2 - 4ac$ indica cuántas raíces reales hay:</p><ul><li>$D \gt 0$: dos raíces reales distintas</li><li>$D = 0$: una raíz real doble</li><li>$D \lt 0$: ninguna raíz real (dos raíces complejas)</li></ul>`,
  '2es7ki62fmx': R`<p>$2x^2 - 7x + 3 = 0$: $D = 49 - 24 = 25$, así que $x = \frac{7 \pm 5}{4}$, lo que da $x = 3$ o $x = \frac{1}{2}$. Comprobación: suma $= \frac{7}{2}$ ✓, producto $= \frac{3}{2}$ ✓.</p>`,
  '2fn72wvlok5': R`<p>Nunca dividas ambos lados entre $x$: perderías la raíz $x = 0$. Pasa todo a un lado y factoriza.</p>`,
  'wqvbu9g7qm': R`$x = ⟦0⟧ \text{ o } x = ⟦1⟧$`,
  '2g53wo2odbr': R`Resuelve $⟦0⟧ = 0$.`,
  'zl23t8993d': R`Factoriza: $(x ⟦0⟧)(x ⟦1⟧) = 0$, así que $x = ⟦2⟧$ o $x = ⟦3⟧$.`,
  '116407nwdrj': R`Halla el discriminante de $⟦0⟧ = 0$.`,
  '3gb665scdq': R`Dos raíces reales distintas`,
  '2fay79x4phj': R`Una raíz real doble`,
  'ha2iee3mi': R`Ninguna raíz real`,
  '21o8qulmmck': R`¿Cuántas raíces reales tiene $⟦0⟧ = 0$?`,
  '2v9wp16hr5': R`$⟦0⟧$ es positivo, así que hay dos raíces reales distintas.`,
  '1awtt37lduc': R`$⟦0⟧$ es cero, así que hay una raíz real doble.`,
  '1b3c8vdz0p': R`$⟦0⟧$ es negativo, así que no hay raíces reales.`,
  '13khpmu10gc': R`Halla la suma de las raíces de $⟦0⟧ = 0$.`,
  '23qtrsvpbqj': R`Suma de las raíces $= -\frac{b}{a} = ⟦0⟧$.`,
  '2e310dsl6wd': R`Halla el producto de las raíces de $⟦0⟧ = 0$.`,
  '1s4vvexqix0': R`Producto de las raíces $= \frac{c}{a} = ⟦0⟧$.`,
  '27metzx2wv2': R`Resuelve $⟦0⟧ = 0$ y da las soluciones exactas.`,
  '1pprj3loiqe': R`Escribe ambas soluciones separadas por punto y coma, p. ej. -3+sqrt(5); -3-sqrt(5).`,
  '28yk466lqnm': R`Completa el cuadrado: $(x ⟦0⟧)^2 - ⟦1⟧ ⟦2⟧ = 0$, así que $(x ⟦3⟧)^2 = ⟦4⟧$ y $x = ⟦5⟧ \pm \sqrt{⟦6⟧}$.`,
  '13i18rd2v1i': R`¿Qué ecuación cuadrática tiene raíces $⟦0⟧$ y $⟦1⟧$?`,
  '1qw3sazqaaj': R`El largo de un rectángulo mide ⟦0⟧ m más que su ancho, y su área es ⟦1⟧ m². Halla el ancho.`,
  '27ssy7fe6w9': R`Sea $w$ el ancho: $w(w + ⟦0⟧) = ⟦1⟧$, así que $⟦2⟧ = 0$, es decir, $(w - ⟦3⟧)(w + ⟦4⟧) = 0$. Un ancho debe ser positivo, así que $w = ⟦5⟧$ m.`,

  // quad-functions
  't6hwj355ki': R`
<p>La gráfica de $f(x) = ax^2 + bx + c$ es una <b>parábola</b>. Abre <b>hacia arriba</b> si $a \gt 0$ (un valle, con un mínimo) y <b>hacia abajo</b> si $a \lt 0$ (una colina, con un máximo).</p>
⟦0⟧
<h3>Forma canónica (del vértice)</h3>
⟦1⟧
<p>Completar el cuadrado convierte la forma general en la forma canónica: $x^2 - 6x + 11 = (x - 3)^2 + 2$, así que el vértice es $(3; 2)$ y el valor mínimo es 2. El recorrido es $y \ge 2$.</p>
⟦2⟧
⟦3⟧`,
  's0tk1crha5': R`<ul><li>Eje de simetría y vértice: $x = -\dfrac{b}{2a}$; el vértice es $\left(-\dfrac{b}{2a};\, f\!\left(-\dfrac{b}{2a}\right)\right)$.</li><li>Corte con el eje $y$: $(0; c)$.</li><li>Cortes con el eje $x$: las raíces de $ax^2 + bx + c = 0$ (si las hay).</li></ul>`,
  '8vanwczjp2': R`f(x) = a(x - h)^2 + k \qquad \text{vértice } (h; k)`,
  '17der0pee5r': R`<p>La altura de una pelota es $h(t) = -5t^2 + 20t + 1$ metros. El vértice está en $t = -\frac{20}{2(-5)} = 2$ s, y la altura máxima es $h(2) = -20 + 40 + 1 = 21$ m.</p>`,
  'zvghnbm8dy': R`<p>El eje de simetría está exactamente a mitad de camino entre los dos cortes con el eje $x$: si las raíces son $p$ y $q$, es $x = \frac{p + q}{2}$.</p>`,
  '1mhp7175d34': R`Halla la coordenada $x$ del vértice de $y = ⟦0⟧$.`,
  '2clzljfduzb': R`Halla el valor máximo de $f(x) = ⟦0⟧$.`,
  '2gjwh27g0hr': R`Halla el valor mínimo de $f(x) = ⟦0⟧$.`,
  '27czsvma29h': R`El vértice está en $x = -\frac{b}{2a} = ⟦0⟧$, y $f(⟦1⟧) = ⟦2⟧$. Como $a \lt 0$, la parábola abre hacia abajo, así que ⟦3⟧ es el máximo.`,
  '14ge4kcc386': R`El vértice está en $x = -\frac{b}{2a} = ⟦0⟧$, y $f(⟦1⟧) = ⟦2⟧$. Como $a \gt 0$, la parábola abre hacia arriba, así que ⟦3⟧ es el mínimo.`,
  'c44znu24a9': R`Escribe $y = ⟦0⟧$ en forma canónica.`,
  '1vsnqklq7o3': R`Completa el cuadrado: $x^2 ⟦0⟧x = (x ⟦1⟧)^2 - ⟦2⟧$. Así, $y = (x ⟦3⟧)^2 - ⟦4⟧ ⟦5⟧ = (x ⟦6⟧)^2 ⟦7⟧$, con vértice $⟦8⟧$.`,
  'zpcs87kljp': R`Una parábola corta el eje $x$ en $x = ⟦0⟧$ y $x = ⟦1⟧$. ¿Cuál es la ecuación de su eje de simetría? Da el valor de $x$.`,
  'fw0opla76f': R`El eje de simetría está a mitad de camino entre las raíces: $x = \frac{⟦0⟧ + ⟦1⟧}{2} = ⟦2⟧$.`,
  'v46mha0d5d': R`La altura en metros de una pelota después de $t$ segundos es $h(t) = ⟦0⟧$. ⟦1⟧`,
  '1hvtdauomyu': R`¿Después de cuántos segundos alcanza su altura máxima?`,
  '1316b0fmwet': R`¿Cuál es su altura máxima?`,
  'ycs9rjyck7': R`El vértice está en $t = -\frac{⟦0⟧}{2(-5)} = ⟦1⟧$ s.⟦2⟧`,
  'ztkk37xmwf': R` Entonces $h(⟦0⟧) = -5(⟦1⟧)^2 + ⟦2⟧(⟦3⟧) + ⟦4⟧ = ⟦5⟧$ m.`,
  '1e1oh4ob6ax': R`¿Cuál es el recorrido de $f(x) = ⟦0⟧$?`,
  '1xjsk3emsrc': R`El vértice es $⟦0⟧$ y la parábola abre hacia arriba, así que el recorrido es $y \ge ⟦1⟧$.`,
  'xs3xxut6a6': R`El vértice es $⟦0⟧$ y la parábola abre hacia abajo, así que el recorrido es $y \le ⟦1⟧$.`,

  // functions
  '8naid6th7m': R`
<p>Una <b>función</b> asigna a cada entrada exactamente <b>una</b> salida. El conjunto de entradas permitidas es el <b>dominio</b>; el conjunto de salidas es el <b>recorrido</b>.</p>
<h3>Dominios naturales</h3>
<ul><li>No se puede dividir entre cero: para $\frac{1}{x - 2}$, el dominio es $x \ne 2$.</li><li>No hay raíces cuadradas de negativos: para $\sqrt{x + 3}$, el dominio es $x \ge -3$.</li><li>Los logaritmos necesitan argumentos positivos: para $\log(x - 1)$, el dominio es $x \gt 1$.</li></ul>
<h3>Composición</h3>
⟦0⟧
⟦1⟧
<h3>Funciones inversas</h3>
<p>$f^{-1}$ deshace lo que hace $f$: si $f(a) = b$, entonces $f^{-1}(b) = a$. Para hallarla, escribe $y = f(x)$, intercambia $x$ e $y$, y despeja $y$.</p>
⟦2⟧
<p>La gráfica de $f^{-1}$ es la simétrica de la gráfica de $f$ respecto a la recta $y = x$. Solo las funciones inyectivas tienen inversa.</p>
⟦3⟧`,
  '1ph305emxqf': R`$$(f \circ g)(x) = f(g(x))$$<p>Aplica primero $g$ y después $f$. En general, $f \circ g \ne g \circ f$.</p>`,
  '1cxwjq7z97r': R`<p>$f(x) = 2x + 1$, $g(x) = x^2$. Entonces $f(g(3)) = f(9) = 19$, pero $g(f(3)) = g(7) = 49$. Como expresiones: $f(g(x)) = 2x^2 + 1$ y $g(f(x)) = (2x + 1)^2$.</p>`,
  '15c8mvolh1o': R`<p>$f(x) = 3x - 5$: al intercambiar se obtiene $x = 3y - 5$, así que $y = \frac{x + 5}{3}$ y $f^{-1}(x) = \frac{x + 5}{3}$. Comprobación: $f(f^{-1}(x)) = x$ ✓</p>`,
  '26njpf4q54n': R`<p>$f^{-1}(x)$ significa la función inversa, no $\frac{1}{f(x)}$.</p>`,
  'i7pel35sqq': R`Sean $f(x) = ⟦0⟧$ y $g(x) = ⟦1⟧$. Halla $⟦2⟧$.`,
  '1znd9mktzvv': R`Primero lo de dentro: $g(⟦0⟧) = ⟦1⟧$. Luego $f(⟦2⟧) = ⟦3⟧$.`,
  'hfjxna60e5': R`Primero lo de dentro: $f(⟦0⟧) = ⟦1⟧$. Luego $g(⟦2⟧) = ⟦3⟧$.`,
  '202pgbw3wu2': R`Si $f(x) = ⟦0⟧$ y $g(x) = ⟦1⟧$, halla $(f \circ g)(x)$.`,
  'f0qp6mlevp': R`Halla la inversa de $f(x) = ⟦0⟧$.`,
  '169q0jrvorq': R`Escribe $y = ⟦0⟧$ e intercambia $x$ e $y$: $x = ⟦1⟧$. Despeja $y$: $y = \frac{x ⟦2⟧}{⟦3⟧}$.`,
  'qmg4emyl6w': R`Dada $f(x) = ⟦0⟧$, halla $f^{-1}(⟦1⟧)$.`,
  '15zrqw164xy': R`$f^{-1}(⟦0⟧)$ es la entrada que da ⟦1⟧: $⟦2⟧ = ⟦3⟧$, así que $x = ⟦4⟧$.`,
  'uego2o122d': R`La expresión dentro de la raíz no puede ser negativa: $x ⟦0⟧ \ge 0$.`,
  '39j6h0pn24': R`El denominador no puede ser cero: $x ⟦0⟧ \ne 0$.`,
  'sbga4fns30': R`Necesitamos $⟦0⟧ - x \ge 0$.`,
  '21vfyvxcrw8': R`Un logaritmo necesita un argumento positivo: $x ⟦0⟧ \gt 0$.`,
  '10h8v1f5joc': R`¿Cuál es el dominio de $f(x) = ⟦0⟧$?`,
  '1i0w7q8kkjh': R`⟦0⟧ Así que el dominio es ⟦1⟧.`,
  '1qymltc7n95': R`Sea $f(x) = \begin{cases} ⟦0⟧, & x \lt ⟦1⟧ \\ ⟦2⟧, & x \ge ⟦3⟧ \end{cases}$. Halla $f(⟦4⟧)$.`,
  '2c8e7agksdd': R`Como $⟦0⟧ \lt ⟦1⟧$, se usa la primera regla: $f(⟦2⟧) = ⟦3⟧$.`,
  'ranlsqjvf9': R`Como $⟦0⟧ \ge ⟦1⟧$, se usa la segunda regla: $f(⟦2⟧) = ⟦3⟧$.`,

  // exp-log
  'l9f49uc5fx': R`
<p>Los exponentes racionales combinan potencias y raíces: $a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$. Así, $8^{\frac{2}{3}} = (\sqrt[3]{8})^2 = 4$ y $16^{-\frac{1}{2}} = \frac{1}{4}$.</p>
<h3>Logaritmos</h3>
⟦0⟧
⟦1⟧
<h3>Resolver ecuaciones</h3>
<ul><li>Misma base: $2^{x+1} = 32 = 2^5 \Rightarrow x + 1 = 5 \Rightarrow x = 4$.</li><li>Ecuación logarítmica: $\log_3(2x - 1) = 2 \Rightarrow 2x - 1 = 3^2 = 9 \Rightarrow x = 5$.</li><li>Bases distintas: toma logaritmos en ambos lados, $5^x = 20 \Rightarrow x = \frac{\log 20}{\log 5} \approx 1{,}861$.</li></ul>
<h3>Crecimiento y decrecimiento exponencial</h3>
<p>$A = A_0 \cdot r^{t/T}$: una cantidad que se multiplica por $r$ cada $T$ unidades de tiempo. Interés compuesto: $A = P(1 + i)^n$.</p>
⟦2⟧`,
  'cgsm0nxs87': R`$$\log_b a = c \quad\Longleftrightarrow\quad b^c = a \qquad (b \gt 0;\; b \ne 1;\; a \gt 0)$$<p>Un logaritmo responde a «¿a qué potencia hay que elevar $b$ para obtener $a$?»; así, $\log_2 32 = 5$. $\log x$ significa $\log_{10} x$; $\ln x$ significa $\log_e x$, con $e \approx 2{,}718$.</p>`,
  '5k5p7u9mjc': R`cambio de base`,
  'unmvz575yi': R`<p>$\log(x + y) \ne \log x + \log y$. La propiedad del producto convierte un <i>producto</i> dentro en una suma fuera.</p>`,
  'osur1d06sr': R`Calcula $\log_{⟦0⟧} ⟦1⟧$.`,
  '8m3m9l7mik': R`$⟦0⟧^{⟦1⟧} = ⟦2⟧$, así que $\log_{⟦3⟧} ⟦4⟧ = ⟦5⟧$.`,
  '1qkid4ac6wc': R`Calcula $\log_{⟦0⟧} ⟦1⟧ + \log_{⟦2⟧} ⟦3⟧$.`,
  '1kop25xxaoo': R`Calcula $\log_{⟦0⟧} ⟦1⟧ - \log_{⟦2⟧} ⟦3⟧$.`,
  '1cctawopufn': R`Calcula $⟦0⟧^{-\frac{⟦1⟧}{⟦2⟧}}$.`,
  '2bg5dnahfhi': R`Escribe una fracción como 1/4.`,
  '2cumtrnn88x': R`Calcula $⟦0⟧^{\frac{⟦1⟧}{⟦2⟧}}$.`,
  'x9eagz2e3z': R`Resuelve $⟦0⟧^{⟦1⟧} = ⟦2⟧$.`,
  '1zhriq8g9vc': R`$⟦0⟧ = ⟦1⟧^{⟦2⟧}$. Con bases iguales, los exponentes son iguales: $⟦3⟧ = ⟦4⟧$, así que $x = ⟦5⟧$.`,
  '5s8f33ips': R`Resuelve $\log_{⟦0⟧}(⟦1⟧) = ⟦2⟧$.`,
  '1qw3ujxvp13': R`En forma exponencial: $⟦0⟧ = ⟦1⟧^{⟦2⟧} = ⟦3⟧$, así que $⟦4⟧ = ⟦5⟧$ y $x = ⟦6⟧$.`,
  '1owsh5togde': R`Una colonia de ⟦0⟧ bacterias se duplica cada ⟦1⟧ horas. ¿Cuántas bacterias hay después de ⟦2⟧ horas?`,
  '24ouek9sj2d': R`Una colonia de ⟦0⟧ bacterias se triplica cada ⟦1⟧ horas. ¿Cuántas bacterias hay después de ⟦2⟧ horas?`,
  'sad2coi0y': R`Hay $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ periodos, así que $N = ⟦3⟧ \times ⟦4⟧^{⟦5⟧} = ⟦6⟧$.`,
  'uyumfdhjnr': R`Sabiendo que $\log 2 \approx 0{,}3010$ y $\log 3 \approx 0{,}4771$, halla $\log ⟦0⟧$ con 4 decimales.⟦1⟧`,
  'a59cccufc1': R` (Pista: $\log 5 = \log 10 - \log 2$.)`,
  '12khv2t073z': R`$⟦0⟧ = ⟦1⟧$, así que $\log ⟦2⟧ = ⟦3⟧ \approx ⟦4⟧$.⟦5⟧`,
  '2aoxsl3f4vw': R` Aquí $\log 5 = 1 - 0{,}3010 = 0{,}6990$.`,
});
