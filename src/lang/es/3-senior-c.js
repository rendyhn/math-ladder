/* Español — Bachillerato (polinomios → integrales) */
addT('es', {
  // polynomials
  '1dv82xempy': R`
<p>Un <b>polinomio</b> es una suma de términos $a_n x^n + \cdots + a_1 x + a_0$ con exponentes naturales. Su <b>grado</b> es el mayor exponente; $a_n$ es el <b>coeficiente principal</b>. Al multiplicar polinomios, los grados se suman y los coeficientes principales se multiplican.</p>
<h3>División</h3>
<p>Dividir $P(x)$ entre $(x - a)$ da un cociente $Q(x)$ y un resto $R$: $P(x) = (x - a)Q(x) + R$. La <b>regla de Ruffini</b> es una forma rápida de hacerlo usando solo los coeficientes.</p>
⟦0⟧
⟦1⟧
<h3>Raíces de un polinomio cúbico</h3>
<p>Para $ax^3 + bx^2 + cx + d = 0$ con raíces $r_1, r_2, r_3$:</p>
⟦2⟧
⟦3⟧`,
  '16v6jrymjv2': R`<p>$(x^3 - 4x^2 + x + 6) \div (x - 2)$ por la regla de Ruffini:</p>⟦0⟧<p>Cociente $x^2 - 2x - 3$, resto 0.</p>`,
  'agfsjitvd': R`<p><b>Teorema del resto:</b> el resto de dividir $P(x)$ entre $(x - a)$ es $P(a)$.</p><p><b>Teorema del factor:</b> $(x - a)$ es un factor de $P(x)$ exactamente cuando $P(a) = 0$.</p>`,
  'sqyu8zjvtn': R`<p>Dividir entre $(x + 3)$ significa $a = -3$: calcula $P(-3)$, no $P(3)$.</p>`,
  'u4dg9by4un': R`Halla el resto de dividir $P(x) = ⟦0⟧$ entre $(x ⟦1⟧)$.`,
  '212dl6gy5gu': R`Por el teorema del resto, el resto es $P(⟦0⟧) = ⟦1⟧(⟦2⟧)^3 ⟦3⟧(⟦4⟧)^2 ⟦5⟧(⟦6⟧) ⟦7⟧ = ⟦8⟧$.`,
  '20swcfjanfa': R`$(x ⟦0⟧)$ es un factor de $P(x) = ⟦1⟧$. Halla $k$.`,
  '2cscisbqmyg': R`Por el teorema del factor, $P(⟦0⟧) = 0$: $⟦1⟧ ⟦2⟧ ⟦3⟧k ⟦4⟧ = 0$, así que $⟦5⟧k = ⟦6⟧$ y $k = ⟦7⟧$.`,
  '28czzdou58n': R`Para $ax^3 + bx^2 + cx + d = 0$, ⟦0⟧.`,
  '1uakfcji416': R`la suma de las raíces es $-\frac{b}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1cl4qeneyhq': R`el producto de las raíces es $-\frac{d}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1h1il3vuozs': R`Divide $⟦0⟧$ entre $(x ⟦1⟧)$. ¿Cuál es el cociente?`,
  '1432prhuyml': R`La regla de Ruffini con ⟦0⟧ sobre los coeficientes ⟦1⟧ da ⟦2⟧ y resto 0, así que el cociente es $⟦3⟧$.`,
  '1v0pp8s5fwz': R`Considera $⟦0⟧$. ¿Cuál es el grado del producto?`,
  '79jcaurtjl': R`Considera $⟦0⟧$. ¿Cuál es el coeficiente principal del producto?`,
  'lgw9ke18qe': R`Considera $⟦0⟧$. ¿Cuál es el término independiente del producto?`,
  '18bitz7l1ry': R`Al multiplicar, los grados se suman: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '1x77krhanqb': R`Multiplica los términos principales: $⟦0⟧ \cdot ⟦1⟧ = ⟦2⟧$, así que el coeficiente principal es ⟦3⟧.`,
  '1uusi8yg5sk': R`El término independiente es el producto de los términos independientes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,

  // matrices
  '104wb071wss': R`
<p>Una <b>matriz</b> es una tabla rectangular de números. Una matriz $m \times n$ tiene $m$ filas y $n$ columnas; $a_{ij}$ es el elemento de la fila $i$ y la columna $j$.</p>
<h3>Operaciones</h3>
<ul><li><b>Sumar/restar</b> elemento a elemento (solo si tienen el mismo tamaño).</li><li><b>Producto por un escalar</b>: se multiplica cada elemento.</li><li><b>Producto</b> $AB$: el elemento $(i, j)$ es la fila $i$ de $A$ por la columna $j$ de $B$. Requiere (columnas de $A$) = (filas de $B$), y una $m \times n$ por una $n \times p$ da una $m \times p$.</li></ul>
⟦0⟧
⟦1⟧
<h3>Determinante e inversa (2 × 2)</h3>
⟦2⟧
<p>Si $\det A = 0$, la matriz es <b>singular</b> y no tiene inversa. Las inversas resuelven sistemas: $AX = B \Rightarrow X = A^{-1}B$.</p>
⟦3⟧`,
  '4bk6hc9is8': R`<p>El producto de matrices <b>no es conmutativo</b>: en general $AB \ne BA$.</p>`,
  '4ckwr8umw4': R`<p>Para la inversa: <b>intercambia</b> $a$ y $d$, <b>cambia el signo</b> de $b$ y $c$, y divide entre el determinante.</p>`,
  '1h6gnxjh2g6': R`Halla el determinante de $⟦0⟧$.`,
  '1gfhimaac6g': R`Halla $AB$, donde $A = ⟦0⟧$ y $B = ⟦1⟧$.`,
  '1dy8pvpnep7': R`Escribe los cuatro elementos fila por fila, p. ej. 19; 22; 43; 50.`,
  'xfxhg5b3o2': R`Fila por columna: $AB = \begin{pmatrix} ⟦0⟧\cdot⟦1⟧ + ⟦2⟧\cdot⟦3⟧ & \cdots \\ \cdots & \cdots \end{pmatrix} = ⟦4⟧$.`,
  '27lrdslcvs8': R`Halla la inversa de $⟦0⟧$.`,
  'ea7d95erhp': R`Escribe los cuatro elementos fila por fila, separados por punto y coma.`,
  '2euzxos9ar7': R`$\det = (⟦0⟧)(⟦1⟧) - (⟦2⟧)(⟦3⟧) = ⟦4⟧$. Intercambia $a$ y $d$, cambia el signo de $b$ y $c$ y divide entre ⟦5⟧: $⟦6⟧$.`,
  '2fs8fio5g5w': R`¿Para qué valor de $x$ es singular $⟦0⟧$?`,
  'et7lf19q4x': R`Singular significa $\det = 0$: $⟦0⟧x - (⟦1⟧)(⟦2⟧) = 0$, así que $x = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '2280y15nq4f': R`$A = ⟦0⟧$ y $B = ⟦1⟧$. Halla el elemento de la fila ⟦2⟧ y la columna ⟦3⟧ de $⟦4⟧A - ⟦5⟧B$.`,
  'h3p6r4d6o': R`$A = ⟦0⟧$ y $B = ⟦1⟧$. Halla el elemento de la fila ⟦2⟧ y la columna ⟦3⟧ de $AB$.`,
  'xdj657lej': R`Fila ⟦0⟧ de $A$ por columna ⟦1⟧ de $B$: $⟦2⟧ = ⟦3⟧$. (Una matriz $2 \times 3$ por una $3 \times 2$ da una $2 \times 2$).`,

  // vectors
  '1gljxtukffx': R`
<p>Un <b>vector</b> tiene módulo y dirección. En componentes, $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ o $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$. El vector de $P$ a $Q$ es $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  'i7t2goihqv': R`Módulo`,
  '1czax49eh4c': R`Suma`,
  'q2ntocofkn': R`se suman las componentes`,
  'oswzhgqxwz': R`Producto por un escalar`,
  '1bnyaikchfp': R`$k\mathbf{a}$: se multiplica cada componente por $k$`,
  '28hldv2q33s': R`Vector unitario`,
  '214ftyeo0vg': R`Producto escalar`,
  '1xghg9dwzeq': R`$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta \qquad\Longrightarrow\qquad \cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$<p>Dos vectores no nulos son <b>perpendiculares</b> exactamente cuando $\mathbf{a}\cdot\mathbf{b} = 0$.</p>`,
  '1w9baxb120w': R`<p>$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$: $\mathbf{a}\cdot\mathbf{b} = 15 + 48 = 63$, $|\mathbf{a}| = 5$, $|\mathbf{b}| = 13$, así que $\cos\theta = \frac{63}{65}$ y $\theta \approx 14{,}3^\circ$.</p>`,
  '6pzkmdncqf': R`<p>El producto escalar de dos vectores es un <b>número</b>, no un vector.</p>`,
  '4u2plhe47g': R`Halla el módulo de $⟦0⟧$.`,
  '252q8tpxn2p': R`Halla $\mathbf{a}\cdot\mathbf{b}$ para $\mathbf{a} = ⟦0⟧$ y $\mathbf{b} = ⟦1⟧$.`,
  '17ht25mwywu': R`Dados $\mathbf{a} = ⟦0⟧$ y $\mathbf{b} = ⟦1⟧$, halla $⟦2⟧\mathbf{a} ⟦3⟧ ⟦4⟧\mathbf{b}$.`,
  '2gdqizkyobq': R`Escribe las componentes en orden, separadas por punto y coma.`,
  '1mpyqj0mwgx': R`Componente a componente: $⟦0⟧ = ⟦1⟧$.`,
  '14p7yoy4f3a': R`Halla $k$ para que $⟦0⟧$ y $⟦1⟧$ sean perpendiculares.`,
  '127php4kbc3': R`Perpendiculares significa producto escalar 0: $⟦0⟧k + (⟦1⟧)(⟦2⟧) = 0$, así que $k = ⟦3⟧$.`,
  '1kydmvss2ex': R`Halla $\cos\theta$, donde $\theta$ es el ángulo entre $⟦0⟧$ y $⟦1⟧$.`,
  '1b0azawmrlf': R`Halla el vector unitario en la dirección de $⟦0⟧$.`,
  '280s3ajjt4e': R`Escribe las componentes separadas por punto y coma, p. ej. 3/5; -4/5.`,
  '22ii0i40ri': R`$|\mathbf{v}| = ⟦0⟧$. Divide cada componente entre ⟦1⟧: $\hat{\mathbf{v}} = ⟦2⟧$.`,

  // limits
  '239kmg9x5mj': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$ significa que $f(x)$ se acerca tanto como queramos a $L$ cuando $x$ se acerca a $a$, pase lo que pase exactamente en $x = a$.</p>
<h3>Técnicas</h3>
<ol><li><b>Sustitución directa</b>: funciona con polinomios y otras funciones continuas: $\lim_{x \to 2}(x^2 + 3x) = 10$.</li><li><b>Factorizar y simplificar</b> ante $\frac{0}{0}$: $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$.</li><li><b>Racionalizar</b> expresiones con raíces: multiplica por el conjugado.</li></ol>
⟦0⟧
<h3>Límites en el infinito</h3>
⟦1⟧
<h3>Un límite trigonométrico especial</h3>
⟦2⟧
<h3>Continuidad</h3>
<p>$f$ es continua en $a$ si $\lim_{x \to a} f(x) = f(a)$: sin huecos, saltos ni asíntotas en ese punto. En una función definida a trozos, haz que los dos trozos coincidan en el punto de unión.</p>
⟦3⟧`,
  '25jnb5snm7z': R`<p>En una función racional, divide numerador y denominador entre la mayor potencia de $x$ del denominador:</p><ul><li>mismo grado → cociente de los coeficientes principales;</li><li>numerador de menor grado → 0;</li><li>numerador de mayor grado → no hay límite finito ($\pm\infty$).</li></ul>`,
  'extw7corym': R`<p>$\frac{0}{0}$ no es «0» ni «no definido»: indica que hace falta más trabajo (factorizar, racionalizar).</p>`,
  '18znpgymeuk': R`Calcula $\displaystyle\lim_{x \to ⟦0⟧} (⟦1⟧)$.`,
  '1tq4b7d4h53': R`Es un polinomio, así que sustituimos: $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧$.`,
  '1n96bgorw1d': R`Calcula $\displaystyle\lim_{x \to ⟦0⟧} \frac{⟦1⟧}{x ⟦2⟧}$.`,
  '295o4zt7f3w': R`Al sustituir se obtiene $\frac{0}{0}$. Factorizamos: $\frac{(x ⟦0⟧)(x ⟦1⟧)}{x ⟦2⟧} = x ⟦3⟧$, así que el límite es $⟦4⟧ ⟦5⟧ = ⟦6⟧$.`,
  '1rjdd048rzk': R`Calcula $\displaystyle\lim_{x \to \infty} \frac{⟦0⟧}{⟦1⟧}$.`,
  '229ply6f2l2': R`El numerador tiene menor grado que el denominador; al dividir entre $x^2$ todos los términos del numerador tienden a 0, así que el límite es $0$.`,
  '1m8u7pc3qh1': R`Mismo grado, así que el límite es el cociente de los coeficientes principales: $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  '1ynpy6v2s15': R`Calcula $\displaystyle\lim_{x \to 0} \frac{⟦0⟧}{⟦1⟧}$.`,
  'if95qf815v': R`Usa $\frac{\sin u}{u} \to 1$ (y $\frac{\tan u}{u} \to 1$): la expresión se comporta como $\frac{⟦0⟧x}{⟦1⟧x} = ⟦2⟧$.`,
  'blyu2go12i': R`Calcula $\displaystyle\lim_{x \to 0} \frac{\sqrt{x + ⟦0⟧} - ⟦1⟧}{x}$.`,
  'fj8u70cngg': R`Multiplica por el conjugado: $\frac{(x + ⟦0⟧) - ⟦1⟧}{x(\sqrt{x + ⟦2⟧} + ⟦3⟧)} = \frac{1}{\sqrt{x + ⟦4⟧} + ⟦5⟧} \to \frac{1}{⟦6⟧}$.`,
  '1kmmd6tilgi': R`Halla $k$ para que $f(x) = \begin{cases} x^2 + k, & x \lt ⟦0⟧ \\ ⟦1⟧, & x \ge ⟦2⟧ \end{cases}$ sea continua en $x = ⟦3⟧$.`,
  '1l84k7ifkz6': R`Los trozos deben coincidir en $x = ⟦0⟧$: $(⟦1⟧)^2 + k = ⟦2⟧(⟦3⟧) ⟦4⟧$, así que $⟦5⟧ + k = ⟦6⟧$ y $k = ⟦7⟧$.`,

  // derivatives
  '1pv2wkwyvwg': R`
<p>La <b>derivada</b> $f'(x)$ es la tasa de cambio instantánea de $f$: la pendiente de la recta tangente en $x$. Se define mediante un límite:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Rectas tangentes</h3>
<p>En $x = a$, la tangente tiene pendiente $m = f'(a)$ y pasa por $(a; f(a))$: $y - f(a) = f'(a)(x - a)$.</p>
<h3>Puntos estacionarios</h3>
<p>Donde $f'(x) = 0$ la gráfica es momentáneamente horizontal. Usa la segunda derivada: $f''(a) \gt 0$ → mínimo local; $f''(a) \lt 0$ → máximo local. $f$ es creciente donde $f' \gt 0$ y decreciente donde $f' \lt 0$.</p>
<h3>Optimización</h3>
⟦3⟧
⟦4⟧`,
  '1kddytp99dm': R`Reglas`,
  '21wooetnwi8': R`<p>Con 100 m de valla se cerca un rectángulo junto a un río (el lado del río no necesita valla). Con lados $x, y, x$: $2x + y = 100$ y el área es $A = x(100 - 2x)$. $A'(x) = 100 - 4x = 0$ da $x = 25$, así que $A_{\max} = 25 \times 50 = 1250$ m².</p>`,
  '14x6kebc9en': R`<p>La derivada de una constante es 0: no arrastres el término constante a $f'(x)$.</p>`,
  'sk165jmy0e': R`Halla $f'(x)$ para $f(x) = ⟦0⟧$.`,
  '1z8enx6jmxw': R`Aplica la regla de la potencia a cada término: $f'(x) = ⟦0⟧$ (la constante desaparece).`,
  'rdfbrjf6fd': R`Dada $f(x) = ⟦0⟧$, halla $f'(⟦1⟧)$.`,
  '12fn6a7y0fo': R`$f'(x) = ⟦0⟧$, así que $f'(⟦1⟧) = ⟦2⟧$.`,
  '13xytl77ctg': R`Halla la ecuación de la tangente a $y = ⟦0⟧$ en $x = ⟦1⟧$.`,
  'zxpf5t25tk': R`Pendiente: $y' = 2x ⟦0⟧$, así que $m = ⟦1⟧$ en $x = ⟦2⟧$. Punto: $(⟦3⟧; ⟦4⟧)$. Entonces $y - ⟦5⟧ = ⟦6⟧(x - ⟦7⟧)$, es decir, $y = ⟦8⟧$.`,
  '6or380e65b': R`$x = ⟦0⟧ \text{ y } x = ⟦1⟧$`,
  '1ib3oh8we5r': R`Halla las coordenadas $x$ de los puntos estacionarios de $f(x) = ⟦0⟧$.`,
  '8cxs5u8eb2': R`$f'(x) = ⟦0⟧ = 3(x ⟦1⟧)(x ⟦2⟧) = 0$, así que $x = ⟦3⟧$ o $x = ⟦4⟧$.`,
  '2diynqfs1vm': R`¿Para qué valor de $x$ tiene $f(x) = ⟦0⟧$ un mínimo local?`,
  'qiab8fav1k': R`$f'(x) = 3(x ⟦0⟧)(x ⟦1⟧)$ se anula en $x = ⟦2⟧$ y $x = ⟦3⟧$. $f''(x) = 6x ⟦4⟧$ es positiva en $x = ⟦5⟧$, así que ahí está el mínimo local.`,
  '2bfp82dmoiw': R`Un agricultor tiene ⟦0⟧ m de valla para cercar un campo rectangular junto a un río recto. No hace falta valla a lo largo del río. ¿Cuál es el área máxima posible?`,
  '1sgjbqwzp29': R`Lados $x, y, x$ con $2x + y = ⟦0⟧$. $A = x(⟦1⟧ - 2x)$, $A' = ⟦2⟧ - 4x = 0$ da $x = ⟦3⟧$, $y = ⟦4⟧$ y $A = ⟦5⟧$ m².`,
  '1dz6162q97e': R`Un rectángulo tiene un perímetro de ⟦0⟧ cm. ¿Cuál es el área máxima que puede tener?`,
  '12er060agfx': R`Con ancho $x$, el largo es $⟦0⟧ - x$ y $A = x(⟦1⟧ - x)$. $A' = ⟦2⟧ - 2x = 0$ da $x = ⟦3⟧$ —un cuadrado— con área $⟦4⟧$ cm².`,
  'jksdr4ukrw': R`Deriva $y = ⟦0⟧$.`,
  '1gytk3lwm2l': R`$\frac{d}{dx}\sin x = \cos x$ y $\frac{d}{dx}\cos x = -\sin x$, así que $y' = ⟦0⟧$.`,
  't51ufxvzbf': R`Una partícula se mueve con posición $s(t) = ⟦0⟧$ metros. Halla su aceleración en $t = ⟦1⟧$ s.`,
  'bakv4or3q9': R`$v(t) = s'(t) = ⟦0⟧$ y $a(t) = v'(t) = ⟦1⟧$. En $t = ⟦2⟧$: $a = ⟦3⟧$ m/s².`,
  'twj64cwqj6': R`Una partícula se mueve con posición $s(t) = ⟦0⟧$ metros. Halla su velocidad en $t = ⟦1⟧$ s.`,
  '1yi10f0kgm7': R`$v(t) = s'(t) = ⟦0⟧$, así que $v(⟦1⟧) = ⟦2⟧$ m/s.`,

  // integrals
  '1wdt9h7s66j': R`
<p>La integración deshace la derivación. Una <b>primitiva</b> de $f$ es cualquier $F$ con $F' = f$; la <b>integral indefinida</b> incluye la constante de integración:</p>
⟦0⟧
⟦1⟧
<h3>Integrales definidas</h3>
⟦2⟧
<p>Si $f \ge 0$, es el área bajo la curva entre $x = a$ y $x = b$. El área por debajo del eje $x$ cuenta como negativa, así que divide la integral en las raíces si quieres el área total.</p>
⟦3⟧
<h3>Hallar una función a partir de su derivada</h3>
<p>Si $f'(x) = 6x + 2$ y $f(1) = 10$, entonces $f(x) = 3x^2 + 2x + C$ y $3 + 2 + C = 10$ da $C = 5$.</p>
⟦4⟧`,
  '20z1821bwrr': R`<p>$\int (6x^2 - 4x + 3)\,dx = 2x^3 - 2x^2 + 3x + C$. Compruébalo derivando.</p>`,
  '1jsx5j8bwuv': R`Teorema fundamental del cálculo`,
  'k8jg70602j': R`<p>Área entre $y = x^2$ e $y = 2x$: se cortan en $x = 0$ y $x = 2$, y $2x \ge x^2$ entre ellos, así que $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.</p>`,
  '2645ntoenmj': R`<p>No olvides el $+ C$ en las integrales indefinidas, y no lo incluyas en las definidas (se cancela).</p>`,
  '1a4h4aolv1n': R`Halla $\displaystyle\int (⟦0⟧)\,dx$.`,
  '14w03nftsp9': R`Aumenta cada exponente en uno y divide entre el nuevo exponente: $⟦0⟧ + C$.`,
  'lhk659hv1w': R`Calcula $\displaystyle\int_{⟦0⟧}^{⟦1⟧} (⟦2⟧)\,dx$.`,
  'wzkchwuid3': R`Una primitiva es $F(x) = ⟦0⟧$. $F(⟦1⟧) - F(⟦2⟧) = ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '2g5117b4rfq': R`Halla el área encerrada por $y = ⟦0⟧$ y el eje $x$.`,
  '1qd8emk0tlu': R`La curva corta el eje en $x = \pm ⟦0⟧$. Área $= \int_{-⟦1⟧}^{⟦2⟧} (⟦3⟧ - x^2)\,dx = \left[⟦4⟧x - \frac{x^3}{3}\right]_{-⟦5⟧}^{⟦6⟧} = ⟦7⟧$.`,
  '1wjuv7zitnn': R`Halla el área de la región entre $y = x^2$ e $y = ⟦0⟧x$.`,
  'ospw7lwugt': R`Se cortan en $x = 0$ y $x = ⟦0⟧$. Área $= \int_0^{⟦1⟧} (⟦2⟧x - x^2)\,dx = \frac{⟦3⟧^3}{2} - \frac{⟦4⟧^3}{3} = ⟦5⟧$.`,
  '2c9m4g6dimy': R`$f'(x) = ⟦0⟧$ y $f(0) = ⟦1⟧$. Halla $f(⟦2⟧)$.`,
  '29kyl7mnwt5': R`$f(x) = ⟦0⟧ + C$, y $f(0) = C = ⟦1⟧$. Así que $f(⟦2⟧) = ⟦3⟧$.`,
  '1p83y3ccpb': R`$\int \cos x\,dx = \sin x$ y $\int -\sin x\,dx = \cos x$, así que el resultado es $⟦0⟧ + C$.`,
  '22xlapf2gb7': R`Calcula $\displaystyle\int_0^{\pi/2} ⟦0⟧\cos x\,dx$.`,
  '1ppkvfv3p1b': R`Calcula $\displaystyle\int_0^{\pi} ⟦0⟧\sin x\,dx$.`,
  // formula-only entries
  'itm4o8cny': R`\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}`,
  '25hetn68fsz': R`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`,
  '1i9j07wofgh': R`\lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \lim_{x \to 0}\frac{\sin ax}{bx} = \frac{a}{b}`,
  '21rfw9yowzp': R`$$\frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}c = 0 \qquad \frac{d}{dx}\big(af + bg\big) = af' + bg'$$$$\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x$$`,
  'oq0mo2ln2m': R`$$\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C \quad (n \ne -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$$$\int \cos x\,dx = \sin x + C \qquad \int \sin x\,dx = -\cos x + C$$`,
  'ktnrryzzqc': R`$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$`,
});
