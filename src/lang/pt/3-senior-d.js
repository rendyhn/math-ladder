/* Português (Brasil) — Ensino Médio (análise combinatória → lógica) */
addT('pt', {
  // combinatorics
  '205beb6gfix': R`
⟦0⟧
<h3>Arranjos: a ordem importa</h3>
⟦1⟧
<p>Primeiro, segundo e terceiro prêmios entre 10 pessoas: $^{10}P_3 = 10 \times 9 \times 8 = 720$.</p>
<ul><li>Permutações com elementos repetidos: $\frac{n!}{p!\,q!\cdots}$. "BANANA" tem $\frac{6!}{3!\,2!} = 60$ anagramas.</li><li>Em volta de uma mesa redonda: $(n - 1)!$ (rotações contam como iguais).</li></ul>
<h3>Combinações: a ordem não importa</h3>
⟦2⟧
<p>Uma comissão de 3 pessoas entre 10: $\binom{10}{3} = 120$. Uma comissão com 2 homens (de 5) e 3 mulheres (de 6): $\binom{5}{2}\binom{6}{3} = 10 \times 20 = 200$.</p>
<h3>Binômio de Newton</h3>
⟦3⟧
<p>O coeficiente de $x^2$ em $(x + 3)^5$ é $\binom{5}{2}3^{3} = 270$.</p>
⟦4⟧`,
  '1v1ul4mcyis': R`<p><b>Princípio multiplicativo:</b> se uma escolha pode ser feita de $m$ maneiras e outra de $n$ maneiras, juntas podem ser feitas de $m \times n$ maneiras.</p>`,
  'zol45txfa7': R`^nP_r = \frac{n!}{(n - r)!} \qquad n! = n \times (n-1) \times \cdots \times 1, \quad 0! = 1`,
  '1mk1wwf7o0g': R`^nC_r = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}`,
  '44tf1m2pka': R`<p>Pergunte: "trocar dois elementos escolhidos dá algo diferente?" Se sim, use arranjos; se não, combinações.</p>`,
  'asaw2vy5ho': R`De quantas maneiras os prêmios (⟦0⟧) podem ser distribuídos entre ⟦1⟧ pessoas?`,
  '1qec64m00zt': R`primeiro, segundo e terceiro`,
  '1yxzw7y67ed': R`primeiro e segundo`,
  '1lyu4ddmyjw': R`A ordem importa: $^{⟦0⟧}P_{⟦1⟧} = ⟦2⟧ = ⟦3⟧$.`,
  'mt1d3k54sw': R`De quantas maneiras se pode escolher uma comissão de ⟦0⟧ pessoas entre ⟦1⟧?`,
  'jcb5dbxzw7': R`A ordem não importa: $\binom{⟦0⟧}{⟦1⟧} = \frac{⟦2⟧!}{⟦3⟧!\,⟦4⟧!} = ⟦5⟧$.`,
  '1f3hbyul4kh': R`Uma comissão de ⟦0⟧ homens e ⟦1⟧ mulheres é escolhida entre ⟦2⟧ homens e ⟦3⟧ mulheres. Quantas comissões diferentes são possíveis?`,
  '219eq0t6hby': R`Quantos anagramas diferentes podem ser formados com as letras da palavra <b>⟦0⟧</b>?`,
  'hkyvcodvcm': R`⟦0⟧ letras com repetições ⟦1⟧: $\frac{⟦2⟧!}{⟦3⟧} = ⟦4⟧$.`,
  'qqcdrtkh5v': R`De quantas maneiras ⟦0⟧ pessoas podem se sentar em volta de uma mesa redonda (rotações contam como iguais)?`,
  '1n6howxe7gj': R`Fixe o lugar de uma pessoa para eliminar as rotações e organize as demais: $(⟦0⟧ - 1)! = ⟦1⟧$.`,
  '1hwymhgsxow': R`Encontre o coeficiente de $x^{⟦0⟧}$ no desenvolvimento de $(x + ⟦1⟧)^{⟦2⟧}$.`,
  '22kaf86ykzl': R`O termo com $x^{⟦0⟧}$ é $\binom{⟦1⟧}{⟦2⟧}x^{⟦3⟧}\cdot ⟦4⟧^{⟦5⟧}$, então o coeficiente é $⟦6⟧ \times ⟦7⟧ = ⟦8⟧$.`,
  '1zya3uq0ode': R`Encontre o coeficiente de $x^{⟦0⟧}$ no desenvolvimento de $(⟦1⟧x + 1)^{⟦2⟧}$.`,
  'po66a6fw7b': R`O termo com $x^{⟦0⟧}$ é $\binom{⟦1⟧}{⟦2⟧}(⟦3⟧x)^{⟦4⟧}$, então o coeficiente é $⟦5⟧ \times ⟦6⟧ = ⟦7⟧$.`,
  'yh0td3xino': R`Você tem ⟦0⟧ camisas, ⟦1⟧ calças e ⟦2⟧ pares de sapatos. Quantos looks diferentes (uma peça de cada) você pode montar?`,
  'ruo6vpaqqc': R`Princípio multiplicativo: $⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '24djh3i5509': R`Quantas senhas de ⟦0⟧ dígitos podem ser formadas com os algarismos de 0 a 9 ⟦1⟧?`,
  '1djueshnkes': R`se os algarismos puderem se repetir`,
  'jadsq7o4xb': R`se nenhum algarismo puder ser usado duas vezes`,
  '22ey7x4a0ix': R`Cada uma das ⟦0⟧ posições tem 10 opções: $10^{⟦1⟧} = ⟦2⟧$.`,
  'g50ag8cs5t': R`$10 \times 9 \times \cdots$ (⟦0⟧ fatores) $= ⟦1⟧$.`,

  // probability-sh
  '1uh8iajnkq0': R`
⟦0⟧
<h3>Com e sem reposição</h3>
⟦1⟧
<p>Diagramas de árvore organizam isso: multiplique ao longo dos ramos e some entre os ramos.</p>
<h3>"Pelo menos um"</h3>
<p>Use o complementar: $P(\text{pelo menos um seis em 3 lançamentos}) = 1 - \left(\frac{5}{6}\right)^3 = \frac{91}{216}$.</p>
<h3>Teorema de Bayes</h3>
⟦2⟧
⟦3⟧`,
  '2e5fwx8zs1w': R`Fórmula`,
  '29i7n2pf82k': R`Complementar`,
  '1q1cgu220ce': R`Mutuamente exclusivos`,
  'xux9y4rrwd': R`$P(A \cap B) = 0$, então $P(A \cup B) = P(A) + P(B)$`,
  'rl5n9i6yyd': R`Independentes`,
  '1oou6k826kr': R`Condicional`,
  '1qgmh66fhna': R`<p>Um saco tem 5 bolas vermelhas e 3 azuis. Retiram-se duas <b>sem</b> reposição. $P(\text{ambas vermelhas}) = \frac{5}{8} \times \frac{4}{7} = \frac{5}{14}$. Com reposição seria $\frac{5}{8} \times \frac{5}{8} = \frac{25}{64}$.</p>`,
  '6418q9b2s4': R`$$P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B \mid A)P(A) + P(B \mid A')P(A')}$$<p>Ele "inverte" uma probabilidade condicional — por exemplo, de $P(\text{teste positivo} \mid \text{doença})$ para $P(\text{doença} \mid \text{teste positivo})$.</p>`,
  '1zp2m1asa8t': R`<p>$P(A \mid B)$ e $P(B \mid A)$ costumam ser diferentes. Um teste pode ter 99% de precisão e, mesmo assim, um resultado positivo pode ser mais provavelmente um alarme falso quando a doença é rara.</p>`,
  '5fmcyqy5g8': R`Um saco contém ⟦0⟧ bolas vermelhas e ⟦1⟧ azuis. Duas bolas são retiradas sem reposição. Qual é a probabilidade de ambas serem de cor ⟦2⟧?`,
  '16uk5urbde9': R`$P(A) = ⟦0⟧$, $P(B) = ⟦1⟧$ e $P(A \cap B) = ⟦2⟧$. Calcule $P(A \cup B)$.`,
  '2az4z9znymk': R`Os eventos $A$ e $B$ são independentes, com $P(A) = ⟦0⟧$ e $P(B) = ⟦1⟧$. Calcule $P(A \cap B)$.`,
  '1ohoi8ye65': R`Independentes: $P(A \cap B) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,
  'ymjaeaaedm': R`Os eventos $A$ e $B$ são independentes, com $P(A) = ⟦0⟧$ e $P(B) = ⟦1⟧$. Calcule a probabilidade de pelo menos um deles ocorrer.`,
  'y6o9k7peax': R`$1 - P(\text{nenhum}) = 1 - (⟦0⟧)(⟦1⟧) = ⟦2⟧$.`,
  '2ct3qu61tjb': R`Meninos`,
  '2402etzr9nx': R`Meninas`,
  '18ehauvt7sj': R`Pratica esporte`,
  '1wnwpnaqcse': R`Não pratica`,
  'hlkdm5jkod': R`1º ano`,
  '25bc5gb05vn': R`2º ano`,
  '1i4vzjjdcmk': R`Vai a pé para a escola`,
  '26ih1igl5gl': R`Vai de ônibus`,
  '2bybvgum1tw': R`Adultos`,
  '1lglnmdikqt': R`Crianças`,
  'xfv76cldjt': R`Gosta de café`,
  'yxuw13xcv3': R`Não gosta`,
  '1mojcap1eui': R`Uma pesquisa deu estes resultados.⟦0⟧Uma pessoa é escolhida ao acaso. Sabendo que ela está no grupo "⟦1⟧", qual é a probabilidade de estar em "⟦2⟧"?`,
  '1461hv2wfqt': R`Restrinja às ⟦0⟧ pessoas de "⟦1⟧": $P = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  '12180tm9why': R`Uma pesquisa deu estes resultados.⟦0⟧Uma pessoa é escolhida ao acaso. Sabendo que ela está em "⟦1⟧", qual é a probabilidade de estar no grupo "⟦2⟧"?`,
  'eppqyrg22a': R`Um dado honesto é lançado ⟦0⟧ vezes. Qual é a probabilidade de sair pelo menos um seis?`,
  'wzrge9rclz': R`$1 - P(\text{nenhum seis}) = 1 - \left(\frac{5}{6}\right)^{⟦0⟧} = 1 - \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$.`,
  '1sg12en11ty': R`Uma doença atinge ⟦0⟧% das pessoas. Um teste a detecta em ⟦1⟧% de quem a tem, mas também dá positivo em ⟦2⟧% de quem não a tem. Se alguém testa positivo, qual é a probabilidade de ter a doença? Arredonde para 3 casas decimais.`,
  '1n6kg7z10yy': R`Um saco tem ⟦0⟧ fichas vermelhas e ⟦1⟧ azuis. Uma ficha é retirada, devolvida, e uma segunda é retirada. Qual é a probabilidade de sair vermelha e depois azul?`,
  '29cd8gay3w4': R`Com reposição, as retiradas são independentes: $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,

  // statistics-sh
  '1xab92vueba': R`
<h3>Quartis e diagramas de caixa</h3>
<p>Ordene os dados. A mediana $Q_2$ os divide ao meio; $Q_1$ é a mediana da metade inferior e $Q_3$ a da metade superior (aqui deixamos a mediana fora das duas metades quando $n$ é ímpar). A <b>amplitude interquartil</b> $\text{AIQ} = Q_3 - Q_1$ mede a dispersão dos 50% centrais.</p>
⟦0⟧
<h3>Variância e desvio padrão</h3>
⟦1⟧
⟦2⟧
<h3>Dados agrupados</h3>
<p>Estime a média com os pontos médios das classes: $\bar{x} \approx \frac{\sum f m}{\sum f}$.</p>
<h3>Transformando dados</h3>
⟦3⟧
⟦4⟧`,
  'l167vch4m7': R`<p>Uma regra comum para valores atípicos: valores abaixo de $Q_1 - 1{,}5\,\text{AIQ}$ ou acima de $Q_3 + 1{,}5\,\text{AIQ}$.</p>`,
  '1i22g7xb1dd': R`\sigma^2 = \frac{\sum (x - \mu)^2}{n} \qquad \sigma = \sqrt{\sigma^2} \qquad\qquad s^2 = \frac{\sum (x - \bar{x})^2}{n - 1} \text{ (amostral)}`,
  '1c6crwakkdh': R`<p>Dados 2; 4; 4; 4; 5; 5; 7; 9: média 5, desvios ao quadrado 9; 1; 1; 1; 0; 0; 4; 16 (soma 32). Variância populacional $= \frac{32}{8} = 4$ e $\sigma = 2$.</p>`,
  'etseh8nv9i': R`Se cada valor vira`,
  'tocb6e1sav': R`A média vira`,
  '1ng2ylp8qsd': R`O desvio padrão vira`,
  's70utdhfyg': R`$\sigma$ (sem mudança)`,
  '1ixl32zcrbx': R`<p>Somar uma constante desloca os dados, mas não os espalha; por isso o desvio padrão não muda.</p>`,
  '1os4b58x5gr': R`Calcule a variância <b>amostral</b> de: ⟦0⟧.`,
  '5koevyyrqx': R`Calcule a variância <b>populacional</b> de: ⟦0⟧.`,
  '2gl7bcglff0': R`Média $= ⟦0⟧$. Desvios ao quadrado: ⟦1⟧ (soma ⟦2⟧). Divida por ⟦3⟧: $⟦4⟧$.`,
  'zh9si0i2s': R`Calcule o desvio padrão populacional de: ⟦0⟧. Arredonde para 2 casas decimais.`,
  'iohahpasm4': R`Média $= ⟦0⟧$; $\sigma^2 = \frac{⟦1⟧}{5} = ⟦2⟧$, então $\sigma = \sqrt{⟦3⟧} \approx ⟦4⟧$.`,
  'box0w6rodc': R`Calcule a amplitude interquartil de: ⟦0⟧. (Deixe a mediana de fora ao dividir os dados em metades.)`,
  'dvfyzp44sk': R`Em ordem: ⟦0⟧. A metade inferior ⟦1⟧ dá $Q_1 = ⟦2⟧$; a metade superior ⟦3⟧ dá $Q_3 = ⟦4⟧$. $\text{AIQ} = ⟦5⟧ - ⟦6⟧ = ⟦7⟧$.`,
  '25jr4jzamls': R`Um conjunto de dados tem média ⟦0⟧ e desvio padrão ⟦1⟧. Cada valor é transformado por $y = ⟦2⟧x ⟦3⟧$. Qual é o novo desvio padrão?`,
  '1h7x4xfpmhw': R`Somar ⟦0⟧ não muda a dispersão; multiplicar por ⟦1⟧ a escala por $|⟦2⟧|$: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '158l5v4dkra': R`Um conjunto de dados tem média ⟦0⟧ e desvio padrão ⟦1⟧. Cada valor é transformado por $y = ⟦2⟧x ⟦3⟧$. Qual é a nova média?`,
  '21c6bmoi3b4': R`A média acompanha a transformação: $⟦0⟧(⟦1⟧) ⟦2⟧ = ⟦3⟧$.`,
  'th9c52kib0': R`Estime a média a partir desta tabela de frequências agrupadas (use os pontos médios das classes). Arredonde para 2 casas decimais.⟦0⟧`,
  '1h8qh0j4anc': R`Classe`,
  '1yeuaowmmsc': R`Pontos médios ⟦0⟧; $\sum f = ⟦1⟧$, $\sum fm = ⟦2⟧$. Média $\approx \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  '1kja7bg5lcu': R`Um conjunto de dados tem $Q_1 = ⟦0⟧$ e $Q_3 = ⟦1⟧$. Pela regra de $1{,}5 \times \text{AIQ}$, qual é o limite ⟦2⟧ para valores atípicos?`,
  '3zu0ol0nfw': R`superior`,
  '9nl2sip6fg': R`inferior`,
  '1u7a09okm0e': R`$\text{AIQ} = ⟦0⟧$ e $1{,}5 \times ⟦1⟧ = ⟦2⟧$. ⟦3⟧`,
  '191ugb8bucx': R`Limite superior $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '111p9ug7ykx': R`Limite inferior $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // conics
  '12p1gvv8rrs': R`
⟦0⟧
<h3>Equação da circunferência</h3>
⟦1⟧
<p>Desenvolvendo, obtém-se a <b>equação geral</b> $x^2 + y^2 + Dx + Ey + F = 0$, com centro $\left(-\frac{D}{2}; -\frac{E}{2}\right)$ e raio $r = \sqrt{\frac{D^2}{4} + \frac{E^2}{4} - F}$.</p>
⟦2⟧
<h3>Posição de um ponto</h3>
<p>Substitua o ponto em $(x - a)^2 + (y - b)^2$ e compare com $r^2$: menor → dentro, igual → sobre, maior → fora.</p>
<h3>Retas tangentes</h3>
<p>Uma tangente é perpendicular ao raio no ponto de tangência. Para a circunferência $x^2 + y^2 = r^2$ em $(x_1; y_1)$, o raio tem inclinação $\frac{y_1}{x_1}$, então a tangente tem inclinação $-\frac{x_1}{y_1}$.</p>
<h3>Parábolas</h3>
<p>$y^2 = 4px$ tem foco $(p; 0)$ e diretriz $x = -p$; $x^2 = 4py$ tem foco $(0; p)$ e diretriz $y = -p$. Todo ponto de uma parábola está à mesma distância do foco e da diretriz.</p>
⟦3⟧`,
  'd8g3n0gso0': R`\text{Ponto médio } \left(\frac{x_1 + x_2}{2}; \frac{y_1 + y_2}{2}\right) \qquad \text{Distância } \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`,
  'yeziymovo4': R`$$(x - a)^2 + (y - b)^2 = r^2 \qquad \text{centro } (a; b), \text{ raio } r$$`,
  '16n3xjnynm7': R`<p>$x^2 + y^2 - 6x + 4y - 12 = 0$: completando quadrados, $(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$. Centro $(3; -2)$, raio 5.</p>`,
  '11ib4pk61jv': R`<p>Em $(x + 3)^2 + (y - 1)^2 = 16$ o centro é $(-3; 1)$ — os sinais se invertem — e o raio é 4, não 16.</p>`,
  'a19ymany96': R`Encontre o ponto médio de $⟦0⟧$ e $⟦1⟧$.`,
  'l7s72risy9': R`Faça a média das coordenadas: $\left(\frac{⟦0⟧ + ⟦1⟧}{2}; \frac{⟦2⟧ + ⟦3⟧}{2}\right) = ⟦4⟧$.`,
  '1mu3r9x32jw': R`Encontre o raio da circunferência $⟦0⟧ = 0$.`,
  '1bhxlcedykj': R`Completando quadrados: $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧ + ⟦3⟧ ⟦4⟧ = ⟦5⟧$, então $r = ⟦6⟧$.`,
  'd11etx15kp': R`Encontre o centro da circunferência $⟦0⟧ = 0$.`,
  '15nydo8wzsx': R`O centro é $\left(-\frac{D}{2}; -\frac{E}{2}\right) = \left(-\frac{⟦0⟧}{2}; -\frac{⟦1⟧}{2}\right) = ⟦2⟧$.`,
  '10fdmgbsvjs': R`Qual é a equação da circunferência de centro $⟦0⟧$ e raio ⟦1⟧?`,
  'j31butbqt0': R`Substitua em $(x - a)^2 + (y - b)^2 = r^2$: $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧$.`,
  'qntj72wic0': R`Dentro da circunferência`,
  '1z2fjcjol1w': R`dentro`,
  '1h4trl2qo1h': R`Sobre a circunferência`,
  '1sg9ogxwlev': R`sobre`,
  '8uau8fsxbq': R`Fora da circunferência`,
  '6gv2pbcp7q': R`fora`,
  '24luyo2ftju': R`O ponto $⟦0⟧$ está dentro, sobre ou fora da circunferência $(x ⟦1⟧)^2 + (y ⟦2⟧)^2 = ⟦3⟧$?`,
  '28keqi93flp': R`$⟦0⟧$, que é igual a $r^2 = ⟦1⟧$: o ponto está <b>sobre</b> a circunferência.`,
  '1hj2pbrwkr7': R`$⟦0⟧$, que é menor que $r^2 = ⟦1⟧$: o ponto está <b>dentro</b> da circunferência.`,
  'kv7senj1fr': R`$⟦0⟧$, que é maior que $r^2 = ⟦1⟧$: o ponto está <b>fora</b> da circunferência.`,
  '1hxz2qew8oz': R`Encontre o foco da parábola $⟦0⟧$.`,
  '22fls2lezk5': R`Compare com ⟦0⟧: $4p = ⟦1⟧$, então $p = ⟦2⟧$ e o foco é $⟦3⟧$.`,
  'ez3m02hgj1': R`Encontre a inclinação da tangente a $x^2 + y^2 = ⟦0⟧$ no ponto $⟦1⟧$.`,
  '1huwumypuyf': R`O raio até $⟦0⟧$ tem inclinação $\frac{⟦1⟧}{⟦2⟧}$. A tangente é perpendicular: inclinação $= -\frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,

  // linear-programming
  '23l7ef2fdyh': R`
<p>A <b>programação linear</b> busca o melhor valor (maior ou menor) de uma <b>função objetivo</b> linear, como o lucro $z = 30x + 20y$, sujeita a <b>restrições</b> lineares como $x + y \le 40$.</p>
<ol><li>Escreva as restrições como inequações (inclua $x \ge 0$, $y \ge 0$).</li><li>Desenhe cada reta de fronteira e sombreie a região que satisfaz todas as restrições — a <b>região viável</b>.</li><li>Encontre os vértices resolvendo pares de equações de fronteira.</li><li>Calcule a função objetivo em cada vértice.</li></ol>
⟦0⟧
⟦1⟧
<p>Em problemas de minimização com restrições "≥", a região costuma ser ilimitada; com custos positivos, o mínimo continua num vértice.</p>
⟦2⟧`,
  'hs1573xprv': R`<p><b>Teorema dos vértices:</b> se existe um ótimo, ele ocorre num vértice da região viável.</p>`,
  '1g8qhbmqb9w': R`<p>Maximize $z = 3x + 2y$ sujeita a $x + y \le 8$, $2x + y \le 12$, $x, y \ge 0$.</p><p>Vértices: $(0; 0)$, $(6; 0)$, $(4; 4)$ [onde $x + y = 8$ encontra $2x + y = 12$], $(0; 8)$.</p><p>Valores de $z$: 0; 18; 20; 16. Máximo $z = 20$ em $(4; 4)$.</p>`,
  '11p3z90h4pd': R`<p>Verifique se cada vértice satisfaz <b>todas</b> as restrições — a interseção de duas retas de fronteira pode ficar fora da região.</p>`,
  '22hgo1z3v51': R`Maximize $z = ⟦0⟧ + ⟦1⟧$ sujeita a ⟦2⟧, $x \ge 0$, $y \ge 0$. Qual é o valor máximo de $z$?`,
  'thttp4dv20': R`Vértices e valores de $z$: ⟦0⟧. O máximo é <b>⟦1⟧</b>.`,
  '2g9b1szo820': R`Minimize $z = ⟦0⟧ + ⟦1⟧$ sujeita a $x + y \ge ⟦2⟧$, $x + 2y \ge ⟦3⟧$, $x \ge 0$, $y \ge 0$. Qual é o valor mínimo de $z$?`,
  '72m6dlh1yr': R`A região viável é ilimitada, com vértices ⟦0⟧. Como os custos são positivos, o mínimo é <b>⟦1⟧</b>.`,
  '4eos6o7rio': R`Qual ponto está na região viável definida por ⟦0⟧, $x \ge 0$, $y \ge 0$?`,
  '1jqzy1kt3ra': R`Teste cada ponto em todas as restrições. $⟦0⟧$ satisfaz todas; cada um dos outros viola pelo menos uma.`,
  '15d4uuzw5eq': R`Uma padaria faz bolos ($x$) e tortas ($y$) todo dia. Ela pode assar no máximo ⟦0⟧ unidades, e o tempo de forno dá a restrição ⟦1⟧. O lucro é de ⟦2⟧ reais por bolo e ⟦3⟧ reais por torta. Qual é o lucro diário máximo?`,
  '296rrmt4h4q': R`Restrições: $x + y \le ⟦0⟧$, $⟦1⟧ \le ⟦2⟧$, $x, y \ge 0$. Vértices: ⟦3⟧. Lucro máximo: <b>⟦4⟧</b> reais.`,

  // logic
  '22xng4phovn': R`
<p>Uma <b>proposição</b> é uma frase que é verdadeira ou falsa. Proposições compostas são formadas com <b>conectivos</b>:</p>
⟦0⟧
⟦1⟧
<h3>Condicionais relacionadas</h3>
⟦2⟧
<h3>Quantificadores</h3>
<p>$\forall$ "para todo" e $\exists$ "existe". A negação troca um pelo outro: a negação de "Todos os alunos passaram" é "<b>Alguns</b> alunos <b>não</b> passaram"; a negação de "Algumas aves não voam" é "Todas as aves voam".</p>
<h3>Argumentos válidos</h3>
<ul><li><b>Modus ponens:</b> $p \Rightarrow q$, $p$; logo, $q$.</li><li><b>Modus tollens:</b> $p \Rightarrow q$, $\neg q$; logo, $\neg p$.</li><li><b>Silogismo:</b> $p \Rightarrow q$, $q \Rightarrow r$; logo, $p \Rightarrow r$.</li></ul>
⟦3⟧`,
  '2aa32u1lmw9': R`VF`,
  '1h0id2d836q': R`<p>Uma implicação $p \Rightarrow q$ é falsa <b>somente</b> quando $p$ é verdadeira e $q$ é falsa.</p>`,
  '2aojok6ubm7': R`Forma`,
  '1bpxgxn3wdt': R`Equivalente à original?`,
  'clyih3qga0': R`Proposição`,
  '13tp70kq9iu': R`Recíproca`,
  '5lqm3x6p6i': R`não`,
  '1vsuatfpf7o': R`Inversa`,
  '1zjwynaslfy': R`Contrapositiva`,
  '2377erd9rpv': R`sim`,
  '1vdptccpewy': R`<p>De $p \Rightarrow q$ e $q$ você <b>não</b> pode concluir $p$ ("afirmação do consequente"). Chão molhado não prova que choveu.</p>`,
  'e62y0oj6y7': R`$p$ é ⟦0⟧, $q$ é ⟦1⟧ e $r$ é ⟦2⟧. Qual é o valor lógico de $⟦3⟧$?`,
  'x0xbdvafwl': R`Substitua $p = \text{⟦0⟧}$, $q = \text{⟦1⟧}$, $r = \text{⟦2⟧}$ e avalie de dentro para fora: $⟦3⟧$ é <b>⟦4⟧</b>. (Lembre-se: $\Rightarrow$ só é falsa no caso V ⇒ F.)`,
  '1kkjzumhca1': R`chove`,
  'ia7w0co89o': R`não chove`,
  '1ihx0acpu6a': R`o chão fica molhado`,
  '1v63alfxz6x': R`o chão não fica molhado`,
  '1l79oqrjsck': R`$n$ é divisível por 4`,
  '1yshjhf0kon': R`$n$ não é divisível por 4`,
  'qa8yzaajhn': R`$n$ é par`,
  'cbcna6lfv': R`$n$ não é par`,
  '31grcmmyn9': R`$ABCD$ é um quadrado`,
  'pqxtvsjzqa': R`$ABCD$ não é um quadrado`,
  '2gdyvqap69i': R`$ABCD$ é um retângulo`,
  'lxgoo3xc2q': R`$ABCD$ não é um retângulo`,
  's4qelj4pfa': R`você estuda bastante`,
  '1ri3py7kjks': R`você não estuda bastante`,
  '1wmmmy5ybwg': R`você passa na prova`,
  'uo17m9mxei': R`você não passa na prova`,
  '14thczs4bru': R`a lâmpada está acesa`,
  '1mg8dlhg5lp': R`a lâmpada está apagada`,
  '496x9r1bce': R`o quarto está iluminado`,
  '383gdutznm': R`o quarto não está iluminado`,
  '12lqix1f1k9': R`Se ⟦0⟧, então ⟦1⟧.`,
  'z7jgfl3knp': R`recíproca`,
  'aqxfua2az0': R`inversa`,
  '1qj3c13iq5c': R`contrapositiva`,
  '14dtm0889wo': R`Qual é a <b>⟦0⟧</b> da proposição "⟦1⟧"?`,
  '1izj6udg2zz': R`Recíproca: trocar ($q \Rightarrow p$). Inversa: negar ambas ($\neg p \Rightarrow \neg q$). Contrapositiva: trocar e negar ($\neg q \Rightarrow \neg p$). Então a ⟦0⟧ é "⟦1⟧"⟦2⟧`,
  '15513xdtwsn': R` — ela é logicamente equivalente à original.`,
  '6brkkcy85o': R`Todos os alunos passaram na prova.`,
  '2rjnejqvqb': R`Alguns alunos não passaram na prova.`,
  'vjzsxd6qou': R`Nenhum aluno passou na prova.`,
  'oolor24qct': R`Todos os alunos foram reprovados na prova.`,
  'aesopm7ka0': R`Alguns alunos passaram na prova.`,
  '1c9ng778gwv': R`Nem todos os alunos passaram na prova.`,
  'f39jhzzlxm': R`Todos os gatos gostam de leite.`,
  '1rgve8hw4eg': R`Alguns gatos não gostam de leite.`,
  '19hhf94uign': R`Nenhum gato gosta de leite.`,
  '1qzto8uhyzs': R`Todos os gatos detestam leite.`,
  'xi1gnm2hxv': R`Alguns gatos gostam de leite.`,
  'aijf9tywlh': R`Nem todos os gatos gostam de leite.`,
  '2c7t0e33rd1': R`Todos os funcionários chegaram no horário.`,
  'avwdd5b0gg': R`Alguns funcionários não chegaram no horário.`,
  '28adrxoh914': R`Nenhum funcionário chegou no horário.`,
  '1000i19kpx7': R`Todos os funcionários chegaram atrasados.`,
  '1tupibwtosw': R`Alguns funcionários chegaram no horário.`,
  'syr088g2qb': R`Nem todos os funcionários chegaram no horário.`,
  '1rwcznrx3zt': R`Todos os números da lista são pares.`,
  'g4py4lm4nz': R`Alguns números da lista não são pares.`,
  'z8en25csvv': R`Nenhum número da lista é par.`,
  '1m3jao43f24': R`Todos os números da lista são ímpares.`,
  '2nfvm4et1c': R`Alguns números da lista são pares.`,
  'xfe0p0mnov': R`Nem todos os números da lista são pares.`,
  '1w0eku5479x': R`Todos os jogadores marcaram um gol.`,
  '2xjzgvosy4': R`Alguns jogadores não marcaram gol.`,
  '1eb39gddsae': R`Nenhum jogador marcou gol.`,
  '1xbzgu8l71r': R`Todos os jogadores ficaram sem marcar.`,
  't7ja96nwk4': R`Alguns jogadores marcaram um gol.`,
  '8j4qjj5ufj': R`Nem todos os jogadores marcaram um gol.`,
  'b5r03m1c02': R`Qual é a negação de "⟦0⟧"?`,
  '1a591wdfgbv': R`$\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)$: basta que <i>alguns</i> falhem. Negação: "⟦0⟧"`,
  'do28na3fol': R`$\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)$: nenhum satisfaz. Negação: "⟦0⟧"`,
  'ndnufyumww': R`Quantas linhas tem uma tabela-verdade com ⟦0⟧ variáveis proposicionais diferentes?`,
  'u75a1of7f2': R`Cada variável é V ou F, então há $2^{⟦0⟧} = ⟦1⟧$ combinações.`,
  '1w39q86nfhw': R`Na tabela-verdade de $⟦0⟧$, em quantas linhas a proposição é verdadeira?`,
  'ny2shau597': R`A tabela tem ⟦0⟧ linhas; avaliando cada uma, a proposição é verdadeira em <b>⟦1⟧</b> delas e falsa em ⟦2⟧.`,
  '1zkv6notm6x': R`a partida é cancelada`,
  '28hyo4t2whc': R`a partida não é cancelada`,
  'amilvofe40': R`um número termina em 0`,
  'osyuok2ad2': R`um número não termina em 0`,
  'fabia2grh6': R`ele é divisível por 5`,
  '18q6q6gwd11': R`ele não é divisível por 5`,
  'm30q1lwox2': R`você rega a planta`,
  '1ku1ogs6cx8': R`você não rega a planta`,
  '1zfcrbg8kca': R`a planta cresce`,
  'ax498dx365': R`a planta não cresce`,
  '10pj6yxl1t7': R`o despertador toca`,
  '4ju91rp1va': R`o despertador não toca`,
  'smmfh9u0rs': R`Lucas acorda`,
  '1al6yo6prnr': R`Lucas não acorda`,
  '1wbxqjf54ui': R`Nenhuma conclusão válida pode ser tirada.`,
  '1h3hboouplr': R`Premissa 1: "Se ⟦0⟧, então ⟦1⟧." Premissa 2: "⟦2⟧." O que se pode concluir validamente?`,
  '19xzw2kl48j': R`É um modus ponens ($p \Rightarrow q$, $p$ ⊢ $q$): "⟦0⟧."`,
  '4fjcpvhawf': R`É um modus tollens ($p \Rightarrow q$, $\neg q$ ⊢ $\neg p$): "⟦0⟧."`,
  'enorfzjcll': R`Saber que $q$ é verdadeira não diz nada sobre $p$ (afirmar o consequente é uma falácia). Nenhuma conclusão válida.`,
  '1w6l8obljn3': R`Saber $\neg p$ não diz nada sobre $q$ (negar o antecedente é uma falácia). Nenhuma conclusão válida.`,
});
