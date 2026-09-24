/* Português (Brasil) — Ensino Médio (núcleo, equações do 2º grau → exponenciais e logaritmos) */
addT('pt', {
  // core
  '3idcm4kbiz': R`Digite as duas soluções separadas por ponto e vírgula, por exemplo -2; 5.`,
  '2gdno2vs4iz': R`Digite uma resposta como 9pi ou 3pi/4.`,

  // quadratics
  'zojqk1lf1a': R`
<p>Uma <b>equação do 2º grau</b> tem a forma $ax^2 + bx + c = 0$ com $a \ne 0$. Ela tem no máximo duas soluções (raízes).</p>
<h3>1. Fatoração</h3>
<p>Se um produto é zero, um de seus fatores é zero. Procure dois números cujo produto seja $c$ e cuja soma seja $b$ (quando $a = 1$):</p>
⟦0⟧
<h3>2. Completar o quadrado</h3>
⟦1⟧
<h3>3. A fórmula de Bhaskara</h3>
⟦2⟧
<h3>Soma e produto das raízes (Vieta)</h3>
⟦3⟧
<p>Assim, uma equação com raízes $r$ e $s$ é $x^2 - (r + s)x + rs = 0$.</p>
⟦4⟧
⟦5⟧`,
  '2eim40ubkm5': R`x^2 - x - 12 = 0 \;\Rightarrow\; (x - 4)(x + 3) = 0 \;\Rightarrow\; x = 4 \text{ ou } x = -3`,
  '2fswinarukx': R`$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$<p>O <b>discriminante</b> $D = b^2 - 4ac$ diz quantas raízes reais existem:</p><ul><li>$D \gt 0$: duas raízes reais distintas</li><li>$D = 0$: uma raiz real dupla</li><li>$D \lt 0$: nenhuma raiz real (duas raízes complexas)</li></ul>`,
  '2es7ki62fmx': R`<p>$2x^2 - 7x + 3 = 0$: $D = 49 - 24 = 25$, então $x = \frac{7 \pm 5}{4}$, o que dá $x = 3$ ou $x = \frac{1}{2}$. Verificação: soma $= \frac{7}{2}$ ✓, produto $= \frac{3}{2}$ ✓.</p>`,
  '2fn72wvlok5': R`<p>Nunca divida os dois lados por $x$ — você perde a raiz $x = 0$. Passe tudo para um lado e fatore.</p>`,
  'wqvbu9g7qm': R`$x = ⟦0⟧ \text{ ou } x = ⟦1⟧$`,
  '2g53wo2odbr': R`Resolva $⟦0⟧ = 0$.`,
  'zl23t8993d': R`Fatore: $(x ⟦0⟧)(x ⟦1⟧) = 0$, então $x = ⟦2⟧$ ou $x = ⟦3⟧$.`,
  '116407nwdrj': R`Calcule o discriminante de $⟦0⟧ = 0$.`,
  '3gb665scdq': R`Duas raízes reais distintas`,
  '2fay79x4phj': R`Uma raiz real dupla`,
  'ha2iee3mi': R`Nenhuma raiz real`,
  '21o8qulmmck': R`Quantas raízes reais a equação $⟦0⟧ = 0$ tem?`,
  '2v9wp16hr5': R`$⟦0⟧$ é positivo, então há duas raízes reais distintas.`,
  '1awtt37lduc': R`$⟦0⟧$ é zero, então há uma raiz real dupla.`,
  '1b3c8vdz0p': R`$⟦0⟧$ é negativo, então não há raízes reais.`,
  '13khpmu10gc': R`Calcule a soma das raízes de $⟦0⟧ = 0$.`,
  '23qtrsvpbqj': R`Soma das raízes $= -\frac{b}{a} = ⟦0⟧$.`,
  '2e310dsl6wd': R`Calcule o produto das raízes de $⟦0⟧ = 0$.`,
  '1s4vvexqix0': R`Produto das raízes $= \frac{c}{a} = ⟦0⟧$.`,
  '27metzx2wv2': R`Resolva $⟦0⟧ = 0$ dando as respostas exatas.`,
  '1pprj3loiqe': R`Digite as duas soluções separadas por ponto e vírgula, por exemplo -3+sqrt(5); -3-sqrt(5).`,
  '28yk466lqnm': R`Complete o quadrado: $(x ⟦0⟧)^2 - ⟦1⟧ ⟦2⟧ = 0$, então $(x ⟦3⟧)^2 = ⟦4⟧$ e $x = ⟦5⟧ \pm \sqrt{⟦6⟧}$.`,
  '13i18rd2v1i': R`Qual equação do 2º grau tem raízes $⟦0⟧$ e $⟦1⟧$?`,
  '1qw3sazqaaj': R`O comprimento de um retângulo tem ⟦0⟧ m a mais que a largura, e sua área é ⟦1⟧ m². Encontre a largura.`,
  '27ssy7fe6w9': R`Seja $w$ a largura: $w(w + ⟦0⟧) = ⟦1⟧$, então $⟦2⟧ = 0$, ou seja, $(w - ⟦3⟧)(w + ⟦4⟧) = 0$. Uma largura deve ser positiva, então $w = ⟦5⟧$ m.`,

  // quad-functions
  't6hwj355ki': R`
<p>O gráfico de $f(x) = ax^2 + bx + c$ é uma <b>parábola</b>. Ela tem concavidade <b>para cima</b> se $a \gt 0$ (um vale, com mínimo) e <b>para baixo</b> se $a \lt 0$ (um morro, com máximo).</p>
⟦0⟧
<h3>Forma canônica</h3>
⟦1⟧
<p>Completar o quadrado transforma a forma geral na forma canônica: $x^2 - 6x + 11 = (x - 3)^2 + 2$, então o vértice é $(3; 2)$ e o valor mínimo é 2. A imagem é $y \ge 2$.</p>
⟦2⟧
⟦3⟧`,
  's0tk1crha5': R`<ul><li>Eixo de simetria e vértice: $x = -\dfrac{b}{2a}$; o vértice é $\left(-\dfrac{b}{2a};\, f\!\left(-\dfrac{b}{2a}\right)\right)$.</li><li>Intersecção com o eixo $y$: $(0; c)$.</li><li>Intersecções com o eixo $x$: as raízes de $ax^2 + bx + c = 0$ (se houver).</li></ul>`,
  '8vanwczjp2': R`f(x) = a(x - h)^2 + k \qquad \text{vértice } (h; k)`,
  '17der0pee5r': R`<p>A altura de uma bola é $h(t) = -5t^2 + 20t + 1$ metros. O vértice está em $t = -\frac{20}{2(-5)} = 2$ s, e a altura máxima é $h(2) = -20 + 40 + 1 = 21$ m.</p>`,
  'zvghnbm8dy': R`<p>O eixo de simetria fica exatamente no meio entre as duas intersecções com o eixo $x$: se as raízes são $p$ e $q$, ele é $x = \frac{p + q}{2}$.</p>`,
  '1mhp7175d34': R`Encontre a coordenada $x$ do vértice de $y = ⟦0⟧$.`,
  '2clzljfduzb': R`Encontre o valor máximo de $f(x) = ⟦0⟧$.`,
  '2gjwh27g0hr': R`Encontre o valor mínimo de $f(x) = ⟦0⟧$.`,
  '27czsvma29h': R`O vértice está em $x = -\frac{b}{2a} = ⟦0⟧$, e $f(⟦1⟧) = ⟦2⟧$. Como $a \lt 0$, a parábola tem concavidade para baixo, então ⟦3⟧ é o máximo.`,
  '14ge4kcc386': R`O vértice está em $x = -\frac{b}{2a} = ⟦0⟧$, e $f(⟦1⟧) = ⟦2⟧$. Como $a \gt 0$, a parábola tem concavidade para cima, então ⟦3⟧ é o mínimo.`,
  'c44znu24a9': R`Escreva $y = ⟦0⟧$ na forma canônica.`,
  '1vsnqklq7o3': R`Complete o quadrado: $x^2 ⟦0⟧x = (x ⟦1⟧)^2 - ⟦2⟧$. Assim, $y = (x ⟦3⟧)^2 - ⟦4⟧ ⟦5⟧ = (x ⟦6⟧)^2 ⟦7⟧$, com vértice $⟦8⟧$.`,
  'zpcs87kljp': R`Uma parábola corta o eixo $x$ em $x = ⟦0⟧$ e $x = ⟦1⟧$. Qual é a equação do seu eixo de simetria? Dê o valor de $x$.`,
  'fw0opla76f': R`O eixo de simetria fica no meio entre as raízes: $x = \frac{⟦0⟧ + ⟦1⟧}{2} = ⟦2⟧$.`,
  'v46mha0d5d': R`A altura de uma bola, em metros, após $t$ segundos é $h(t) = ⟦0⟧$. ⟦1⟧`,
  '1hvtdauomyu': R`Depois de quantos segundos ela atinge a altura máxima?`,
  '1316b0fmwet': R`Qual é a sua altura máxima?`,
  'ycs9rjyck7': R`O vértice está em $t = -\frac{⟦0⟧}{2(-5)} = ⟦1⟧$ s.⟦2⟧`,
  'ztkk37xmwf': R` Então $h(⟦0⟧) = -5(⟦1⟧)^2 + ⟦2⟧(⟦3⟧) + ⟦4⟧ = ⟦5⟧$ m.`,
  '1e1oh4ob6ax': R`Qual é a imagem de $f(x) = ⟦0⟧$?`,
  '1xjsk3emsrc': R`O vértice é $⟦0⟧$ e a parábola tem concavidade para cima, então a imagem é $y \ge ⟦1⟧$.`,
  'xs3xxut6a6': R`O vértice é $⟦0⟧$ e a parábola tem concavidade para baixo, então a imagem é $y \le ⟦1⟧$.`,

  // functions
  '8naid6th7m': R`
<p>Uma <b>função</b> associa a cada entrada exatamente <b>uma</b> saída. O conjunto das entradas permitidas é o <b>domínio</b>; o conjunto das saídas é a <b>imagem</b>.</p>
<h3>Domínios naturais</h3>
<ul><li>Não há divisão por zero: para $\frac{1}{x - 2}$, o domínio é $x \ne 2$.</li><li>Não há raiz quadrada de negativo: para $\sqrt{x + 3}$, o domínio é $x \ge -3$.</li><li>Logaritmos precisam de argumento positivo: para $\log(x - 1)$, o domínio é $x \gt 1$.</li></ul>
<h3>Composição</h3>
⟦0⟧
⟦1⟧
<h3>Funções inversas</h3>
<p>$f^{-1}$ desfaz o que $f$ faz: se $f(a) = b$, então $f^{-1}(b) = a$. Para encontrá-la, escreva $y = f(x)$, troque $x$ e $y$ e isole $y$.</p>
⟦2⟧
<p>O gráfico de $f^{-1}$ é o reflexo do gráfico de $f$ em relação à reta $y = x$. Só funções injetoras têm inversa.</p>
⟦3⟧`,
  '1ph305emxqf': R`$$(f \circ g)(x) = f(g(x))$$<p>Aplique primeiro $g$ e depois $f$. Em geral, $f \circ g \ne g \circ f$.</p>`,
  '1cxwjq7z97r': R`<p>$f(x) = 2x + 1$, $g(x) = x^2$. Então $f(g(3)) = f(9) = 19$, mas $g(f(3)) = g(7) = 49$. Como expressões: $f(g(x)) = 2x^2 + 1$ e $g(f(x)) = (2x + 1)^2$.</p>`,
  '15c8mvolh1o': R`<p>$f(x) = 3x - 5$: trocando, obtemos $x = 3y - 5$, então $y = \frac{x + 5}{3}$ e $f^{-1}(x) = \frac{x + 5}{3}$. Verificação: $f(f^{-1}(x)) = x$ ✓</p>`,
  '26njpf4q54n': R`<p>$f^{-1}(x)$ significa a função inversa, não $\frac{1}{f(x)}$.</p>`,
  'i7pel35sqq': R`Sejam $f(x) = ⟦0⟧$ e $g(x) = ⟦1⟧$. Calcule $⟦2⟧$.`,
  '1znd9mktzvv': R`Primeiro a de dentro: $g(⟦0⟧) = ⟦1⟧$. Depois $f(⟦2⟧) = ⟦3⟧$.`,
  'hfjxna60e5': R`Primeiro a de dentro: $f(⟦0⟧) = ⟦1⟧$. Depois $g(⟦2⟧) = ⟦3⟧$.`,
  '202pgbw3wu2': R`Se $f(x) = ⟦0⟧$ e $g(x) = ⟦1⟧$, encontre $(f \circ g)(x)$.`,
  'f0qp6mlevp': R`Encontre a inversa de $f(x) = ⟦0⟧$.`,
  '169q0jrvorq': R`Escreva $y = ⟦0⟧$ e troque $x$ e $y$: $x = ⟦1⟧$. Isole $y$: $y = \frac{x ⟦2⟧}{⟦3⟧}$.`,
  'qmg4emyl6w': R`Dada $f(x) = ⟦0⟧$, encontre $f^{-1}(⟦1⟧)$.`,
  '15zrqw164xy': R`$f^{-1}(⟦0⟧)$ é a entrada que dá ⟦1⟧: $⟦2⟧ = ⟦3⟧$, então $x = ⟦4⟧$.`,
  'uego2o122d': R`A expressão dentro da raiz não pode ser negativa: $x ⟦0⟧ \ge 0$.`,
  '39j6h0pn24': R`O denominador não pode ser zero: $x ⟦0⟧ \ne 0$.`,
  'sbga4fns30': R`Precisamos de $⟦0⟧ - x \ge 0$.`,
  '21vfyvxcrw8': R`Um logaritmo precisa de argumento positivo: $x ⟦0⟧ \gt 0$.`,
  '10h8v1f5joc': R`Qual é o domínio de $f(x) = ⟦0⟧$?`,
  '1i0w7q8kkjh': R`⟦0⟧ Então o domínio é ⟦1⟧.`,
  '1qymltc7n95': R`Seja $f(x) = \begin{cases} ⟦0⟧, & x \lt ⟦1⟧ \\ ⟦2⟧, & x \ge ⟦3⟧ \end{cases}$. Calcule $f(⟦4⟧)$.`,
  '2c8e7agksdd': R`Como $⟦0⟧ \lt ⟦1⟧$, usamos a primeira regra: $f(⟦2⟧) = ⟦3⟧$.`,
  'ranlsqjvf9': R`Como $⟦0⟧ \ge ⟦1⟧$, usamos a segunda regra: $f(⟦2⟧) = ⟦3⟧$.`,

  // exp-log
  'l9f49uc5fx': R`
<p>Expoentes racionais combinam potências e raízes: $a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$. Assim, $8^{\frac{2}{3}} = (\sqrt[3]{8})^2 = 4$ e $16^{-\frac{1}{2}} = \frac{1}{4}$.</p>
<h3>Logaritmos</h3>
⟦0⟧
⟦1⟧
<h3>Resolvendo equações</h3>
<ul><li>Mesma base: $2^{x+1} = 32 = 2^5 \Rightarrow x + 1 = 5 \Rightarrow x = 4$.</li><li>Equação logarítmica: $\log_3(2x - 1) = 2 \Rightarrow 2x - 1 = 3^2 = 9 \Rightarrow x = 5$.</li><li>Bases diferentes: aplique logaritmo nos dois lados, $5^x = 20 \Rightarrow x = \frac{\log 20}{\log 5} \approx 1{,}861$.</li></ul>
<h3>Crescimento e decaimento exponencial</h3>
<p>$A = A_0 \cdot r^{t/T}$: uma quantidade multiplicada por $r$ a cada $T$ unidades de tempo. Juros compostos: $A = P(1 + i)^n$.</p>
⟦2⟧`,
  'cgsm0nxs87': R`$$\log_b a = c \quad\Longleftrightarrow\quad b^c = a \qquad (b \gt 0;\; b \ne 1;\; a \gt 0)$$<p>Um logaritmo responde "a que potência devo elevar $b$ para obter $a$?" — assim, $\log_2 32 = 5$. $\log x$ significa $\log_{10} x$; $\ln x$ significa $\log_e x$, com $e \approx 2{,}718$.</p>`,
  '5k5p7u9mjc': R`mudança de base`,
  'unmvz575yi': R`<p>$\log(x + y) \ne \log x + \log y$. A propriedade do produto transforma um <i>produto</i> dentro em uma soma fora.</p>`,
  'osur1d06sr': R`Calcule $\log_{⟦0⟧} ⟦1⟧$.`,
  '8m3m9l7mik': R`$⟦0⟧^{⟦1⟧} = ⟦2⟧$, então $\log_{⟦3⟧} ⟦4⟧ = ⟦5⟧$.`,
  '1qkid4ac6wc': R`Calcule $\log_{⟦0⟧} ⟦1⟧ + \log_{⟦2⟧} ⟦3⟧$.`,
  '1kop25xxaoo': R`Calcule $\log_{⟦0⟧} ⟦1⟧ - \log_{⟦2⟧} ⟦3⟧$.`,
  '1cctawopufn': R`Calcule $⟦0⟧^{-\frac{⟦1⟧}{⟦2⟧}}$.`,
  '2bg5dnahfhi': R`Digite uma fração como 1/4.`,
  '2cumtrnn88x': R`Calcule $⟦0⟧^{\frac{⟦1⟧}{⟦2⟧}}$.`,
  'x9eagz2e3z': R`Resolva $⟦0⟧^{⟦1⟧} = ⟦2⟧$.`,
  '1zhriq8g9vc': R`$⟦0⟧ = ⟦1⟧^{⟦2⟧}$. Bases iguais dão expoentes iguais: $⟦3⟧ = ⟦4⟧$, então $x = ⟦5⟧$.`,
  '5s8f33ips': R`Resolva $\log_{⟦0⟧}(⟦1⟧) = ⟦2⟧$.`,
  '1qw3ujxvp13': R`Na forma exponencial: $⟦0⟧ = ⟦1⟧^{⟦2⟧} = ⟦3⟧$, então $⟦4⟧ = ⟦5⟧$ e $x = ⟦6⟧$.`,
  '1owsh5togde': R`Uma colônia de ⟦0⟧ bactérias dobra a cada ⟦1⟧ horas. Quantas bactérias há depois de ⟦2⟧ horas?`,
  '24ouek9sj2d': R`Uma colônia de ⟦0⟧ bactérias triplica a cada ⟦1⟧ horas. Quantas bactérias há depois de ⟦2⟧ horas?`,
  'sad2coi0y': R`São $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ períodos, então $N = ⟦3⟧ \times ⟦4⟧^{⟦5⟧} = ⟦6⟧$.`,
  'uyumfdhjnr': R`Sabendo que $\log 2 \approx 0{,}3010$ e $\log 3 \approx 0{,}4771$, calcule $\log ⟦0⟧$ com 4 casas decimais.⟦1⟧`,
  'a59cccufc1': R` (Dica: $\log 5 = \log 10 - \log 2$.)`,
  '12khv2t073z': R`$⟦0⟧ = ⟦1⟧$, então $\log ⟦2⟧ = ⟦3⟧ \approx ⟦4⟧$.⟦5⟧`,
  '2aoxsl3f4vw': R` Aqui $\log 5 = 1 - 0{,}3010 = 0{,}6990$.`,
});
