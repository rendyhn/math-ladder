/* Português — interface e nomes dos temas */
addUI('pt', {
  brandTag: R`Fundamental → Universidade`,
  searchPh: R`Pesquisar em ⟦0⟧ temas`,
  searchLabel: R`Pesquisar temas`,
  showTopics: R`Mostrar temas`,
  language: R`Idioma`,
  mixedReview: R`Revisão mista`,
  reviewTitle: R`⟦0⟧: revisão mista`,
  reviewBlurb: R`Uma folha com questões dos ⟦0⟧ temas deste nível, ótima para revisar antes de uma prova.`,
  heroEyebrow: R`Matemática · Do ensino fundamental à universidade`,
  heroTitle: R`De contar até autovalores, um degrau de cada vez.`,
  heroLede: R`⟦0⟧ temas em quatro níveis. Cada um tem uma lição e uma folha de exercícios cujos números mudam sempre que você a abre, com gabarito recolhível e páginas prontas para imprimir.`,
  startWith: R`Começar por: ⟦0⟧`,
  tryReview: R`Experimentar uma revisão mista`,
  levels: R`Níveis`,
  nTopics: R`⟦0⟧ temas`,
  reviewLink: R`Folha de revisão mista →`,
  freshQ: R`Questão nova`,
  anotherQ: R`Outra questão`,
  showAnswer: R`Mostrar resposta`,
  hideAnswer: R`Ocultar resposta`,
  answerColon: R`Resposta:`,
  home: R`Início`,
  breadcrumb: R`Trilha de navegação`,
  topicPos: R`Tema ⟦0⟧ de ⟦1⟧`,
  lesson: R`Lição`,
  practice: R`Exercícios`,
  topicSections: R`Seções do tema`,
  printLesson: R`Imprimir lição`,
  practiseTopic: R`Praticar: ⟦0⟧ →`,
  prev: R`← Anterior`,
  next: R`Próximo →`,
  otherTopics: R`Outros temas`,
  questions: R`Questões`,
  qType: R`Tipo de questão`,
  modeMixed: R`Misto`,
  modeMc: R`Múltipla escolha`,
  modeFill: R`Resposta aberta`,
  newSheet: R`Nova folha`,
  printQ: R`Imprimir questões`,
  worksheet: R`Folha de exercícios`,
  practiceSheet: R`⟦0⟧ · Folha de exercícios`,
  sheet: R`Folha`,
  type: R`Tipo`,
  name: R`Nome`,
  klass: R`Turma`,
  date: R`Data`,
  score: R`Nota`,
  fillNote: R`As respostas abertas aceitam números inteiros, decimais com vírgula (2,5), frações como <code>3/4</code> e expressões como <code>2sqrt(3)</code> ou <code>5pi</code>. Se houver várias respostas, separe-as com ponto e vírgula (;).`,
  checkAnswers: R`Conferir respostas`,
  clearAnswers: R`Apagar respostas`,
  answerKey: R`Gabarito`,
  showKey: R`Mostrar gabarito`,
  hideKey: R`Ocultar gabarito`,
  printKey: R`Imprimir gabarito`,
  printBoth: R`Imprimir questões + gabarito`,
  keyHead: R`Gabarito · ⟦0⟧`,
  sheetNo: R`Folha nº ⟦0⟧`,
  choicesFor: R`Alternativas da questão ⟦0⟧`,
  answer: R`Resposta`,
  typeAnswer: R`Digite sua resposta`,
  qMc: R`Múltipla escolha`,
  qFill: R`Resposta aberta`,
  notAnswered: R`Sem resposta`,
  correct: R`Correta`,
  notQuite: R`Ainda não`,
  scoreLine: R`⟦0⟧ / ⟦1⟧ corretas`,
  unanswered: R`⟦0⟧ sem resposta`,
  source: R`Fonte:`,
  pageOf: R`Página ⟦0⟧ de ⟦1⟧`,
  printToast: R`Escolha “Salvar como PDF” na janela de impressão para exportar. Se nenhuma janela abrir, este visualizador bloqueia a impressão: abra o arquivo HTML baixado no Chrome ou no Edge e imprima por lá.`,
  langFail: R`Não foi possível carregar este idioma; a página está em inglês.`,
});
addMeta('pt', {
  levels: {
    elementary: [R`Ensino fundamental – anos iniciais`, R`Anos iniciais`, R`1.º ao 6.º ano`, R`Sentido de número, as quatro operações, frações, decimais, porcentagens, medidas e primeiros passos em geometria.`],
    junior: [R`Ensino fundamental – anos finais`, R`Anos finais`, R`7.º ao 9.º ano`, R`Números inteiros, potências, álgebra e equações do 1.º grau, conjuntos, geometria do círculo e dos sólidos, e primeiros passos em estatística e probabilidade.`],
    senior: [R`Ensino médio`, R`Ensino médio`, R`10.º ao 12.º ano`, R`Equações do 2.º grau, funções, logaritmos, sequências, trigonometria, matrizes, vetores, cálculo, probabilidade, estatística e lógica.`],
    university: [R`Universidade`, R`Universidade`, R`Graduação`, R`Cálculo I–III, séries, equações diferenciais, álgebra linear, números complexos, probabilidade e estatística, matemática discreta, métodos numéricos e transformadas.`],
  },
  topics: {
    'place-value': [R`Valor posicional e arredondamento`, R`O valor de cada algarismo, forma decomposta, comparação de números naturais e arredondamento.`],
    'add-sub': [R`Adição e subtração`, R`Adição com reagrupamento, subtração com empréstimo, números que faltam e problemas.`],
    'mul-div': [R`Multiplicação e divisão`, R`Tabuada, multiplicação com vários algarismos, divisão exata e com resto.`],
    'order-ops': [R`Ordem das operações`, R`Parênteses e potências, depois multiplicação e divisão e, por fim, adição e subtração.`],
    'factors': [R`Divisores, múltiplos e primos`, R`Divisores e múltiplos, números primos, fatoração em primos, MDC e MMC.`],
    'fractions': [R`Frações`, R`Frações equivalentes, simplificação, comparação, números mistos e as quatro operações.`],
    'decimals': [R`Números decimais`, R`Décimos, centésimos e milésimos; comparar, arredondar e calcular com decimais.`],
    'percent': [R`Porcentagens`, R`Porcentagem de uma quantidade, conversões, descontos e variação percentual.`],
    'measurement': [R`Medidas e unidades`, R`Unidades métricas de comprimento, massa e capacidade, e cálculos com o tempo.`],
    'perimeter-area': [R`Perímetro e área`, R`Perímetro e área de retângulos, quadrados, triângulos, paralelogramos, trapézios e figuras compostas.`],
    'volume-basic': [R`Volume e área da superfície`, R`Volume de cubos e paralelepípedos, capacidade em litros e área da superfície de caixas.`],
    'angles-shapes': [R`Ângulos e figuras`, R`Tipos de ângulos, ângulos em retas e polígonos, e propriedades dos triângulos.`],
    'data-basic': [R`Dados e médias`, R`Leitura de tabelas e gráficos; média, mediana, moda e amplitude.`],
    'integers': [R`Números inteiros`, R`Números negativos na reta numérica e a regra dos sinais nas quatro operações.`],
    'exponents': [R`Potências e raízes`, R`Potências, propriedades das potências, expoentes zero e negativos, raízes quadradas e cúbicas, simplificação de radicais.`],
    'sci-notation': [R`Notação científica`, R`Escrever números muito grandes e muito pequenos como a × 10ⁿ e calcular com eles.`],
    'ratio': [R`Razões, taxas e proporções`, R`Simplificar razões, divisão proporcional, grandezas diretamente e inversamente proporcionais, escalas e velocidade.`],
    'algebra-expr': [R`Expressões algébricas`, R`Termos semelhantes, propriedade distributiva, fatoração, substituição e produtos notáveis.`],
    'linear-eq': [R`Equações do 1.º grau`, R`Equações com parênteses, frações e incógnita nos dois membros; problemas.`],
    'inequalities': [R`Inequações do 1.º grau`, R`Símbolos de desigualdade, reta numérica, resolução de inequações e a inversão do sinal.`],
    'sets': [R`Conjuntos e diagramas de Venn`, R`Notação de conjuntos, subconjuntos, união, interseção, complementar e contagem com diagramas de Venn.`],
    'linear-functions': [R`Funções afins e gráficos`, R`Coordenadas, coeficiente angular, interceptos, equações de retas, retas paralelas e perpendiculares.`],
    'systems': [R`Sistemas de equações lineares`, R`Duas equações com duas incógnitas por substituição e adição; problemas.`],
    'pythagoras': [R`Teorema de Pitágoras`, R`Lados do triângulo retângulo, ternas pitagóricas, distâncias e verificação de ângulo reto.`],
    'circles': [R`Circunferência e círculo`, R`Comprimento, área, arcos e setores, e ângulos na circunferência.`],
    'solids': [R`Área e volume de sólidos`, R`Prismas, cilindros, pirâmides, cones e esferas.`],
    'statistics-jh': [R`Estatística: tendência central e dispersão`, R`Média, mediana e moda de listas e tabelas de frequência, e como novos dados as alteram.`],
    'probability-jh': [R`Probabilidade`, R`Espaço amostral, probabilidade de um evento, evento complementar e frequência esperada.`],
    'social-arith': [R`Matemática financeira: lucro, desconto e juros`, R`Lucro e prejuízo, porcentagem de lucro, desconto e imposto, juros simples, peso bruto e líquido.`],
    'patterns': [R`Padrões numéricos e sequências`, R`Padrões aritméticos e geométricos, termo geral e sequências especiais.`],
    'similarity': [R`Transformações e semelhança`, R`Translações, reflexões, rotações e homotetias; figuras semelhantes e razão de semelhança.`],
    'quadratics': [R`Equações do 2.º grau`, R`Fatoração, completar quadrados, fórmula de Bhaskara, discriminante, soma e produto das raízes.`],
    'quad-functions': [R`Funções quadráticas e parábolas`, R`Vértice, eixo de simetria, forma canônica, valores máximo e mínimo, e aplicações.`],
    'functions': [R`Funções, composição e inversas`, R`Domínio e imagem, funções compostas, funções inversas e funções definidas por partes.`],
    'exp-log': [R`Exponenciais e logaritmos`, R`Expoentes racionais, propriedades dos logaritmos, equações exponenciais e logarítmicas, crescimento.`],
    'sequences': [R`Progressões e séries`, R`Progressões aritméticas e geométricas, somas, séries geométricas infinitas e notação de somatório.`],
    'trig-basics': [R`Trigonometria: razões e ciclo trigonométrico`, R`SOH-CAH-TOA, valores notáveis, radianos, ciclo trigonométrico e ângulos de elevação.`],
    'trig-identities': [R`Identidades e equações trigonométricas`, R`Relação fundamental, fórmulas de adição e de arco duplo; equações trigonométricas.`],
    'triangle-rules': [R`Lei dos senos, lei dos cossenos e área`, R`Resolver qualquer triângulo com as leis dos senos e dos cossenos e calcular sua área.`],
    'polynomials': [R`Polinômios e teorema do resto`, R`Grau e operações, divisão de polinômios, teoremas do resto e de D’Alembert, relações de Girard para cúbicas.`],
    'matrices': [R`Matrizes`, R`Operações com matrizes, multiplicação, determinantes e inversas de matrizes 2×2.`],
    'vectors': [R`Vetores`, R`Componentes, módulo, operações com vetores, produto escalar e ângulo entre vetores.`],
    'limits': [R`Limites`, R`Substituição direta, indeterminações, limites no infinito, limites trigonométricos e continuidade.`],
    'derivatives': [R`Derivadas`, R`A derivada como inclinação, regra da potência, retas tangentes, pontos críticos e otimização.`],
    'integrals': [R`Integrais`, R`Primitivas, regra da potência para integrais, integrais definidas e áreas.`],
    'combinatorics': [R`Contagem, permutações e combinações`, R`Princípio multiplicativo, fatorial, arranjos, combinações e binômio de Newton.`],
    'probability-sh': [R`Probabilidade: regras e condicional`, R`Regras da soma e do produto, independência, probabilidade condicional e teorema de Bayes.`],
    'statistics-sh': [R`Estatística: dispersão e distribuições`, R`Quartis e amplitude interquartil, valores atípicos, variância e desvio-padrão, dados agrupados e transformações.`],
    'conics': [R`Geometria analítica e circunferências`, R`Ponto médio e distância, equação da circunferência, forma geral, tangentes e parábolas.`],
    'linear-programming': [R`Programação linear`, R`Restrições, região viável, função objetivo e método dos vértices.`],
    'logic': [R`Lógica matemática`, R`Proposições, conectivos, tabelas-verdade, recíproca e contrapositiva, quantificadores e argumentos válidos.`],
    'diff-techniques': [R`Técnicas de derivação`, R`Regras do produto, do quociente e da cadeia, derivadas exponenciais e logarítmicas, derivação implícita.`],
    'diff-applications': [R`Aplicações da derivada`, R`Regra de L’Hôpital, otimização, taxas relacionadas, aproximação linear, concavidade e teorema do valor médio.`],
    'integration-techniques': [R`Técnicas de integração`, R`Substituição, integração por partes, frações parciais, integrais trigonométricas e impróprias.`],
    'integral-applications': [R`Aplicações da integral`, R`Área entre curvas, volumes de revolução, valor médio, comprimento de arco e trabalho.`],
    'series': [R`Sequências e séries infinitas`, R`Testes de convergência, séries geométricas e telescópicas, séries de potências, séries de Taylor e Maclaurin.`],
    'multivariable': [R`Cálculo de várias variáveis`, R`Derivadas parciais, gradiente, derivada direcional, pontos críticos, integrais duplas e multiplicadores de Lagrange.`],
    'ode': [R`Equações diferenciais`, R`EDOs de primeira ordem separáveis e lineares, crescimento e decaimento, e equações lineares de segunda ordem.`],
    'linear-algebra': [R`Álgebra linear`, R`Determinantes, posto, sistemas lineares, independência, autovalores e autovetores.`],
    'complex': [R`Números complexos`, R`Operações com i, conjugado, módulo e argumento, forma polar e fórmula de De Moivre.`],
    'distributions': [R`Distribuições de probabilidade`, R`Variáveis aleatórias, esperança e variância, distribuições binomial, de Poisson e normal.`],
    'inference': [R`Inferência estatística`, R`Distribuições amostrais, intervalos de confiança, testes de hipóteses, erros e regressão.`],
    'discrete': [R`Matemática discreta`, R`Aritmética modular, algoritmo de Euclides, princípios de contagem, recorrências e teoria dos grafos.`],
    'numerical': [R`Métodos numéricos`, R`Bissecção e Newton–Raphson, regras dos trapézios e de Simpson, método de Euler e erros.`],
    'vector-calculus': [R`Cálculo vetorial`, R`Campos vetoriais, divergente e rotacional, campos conservativos, integrais de linha e teorema de Green.`],
    'laplace': [R`Transformada de Laplace`, R`Tabela de transformadas, linearidade, translação, transformada inversa e problemas de valor inicial.`],
  },
});

/* Português — núcleo + ensino fundamental (valor posicional → divisores) */
addT('pt', {
  // core
  '1hnygwzeeez': R`Verdadeiro`,
  '12u8s6vu2gj': R`Falso`,
  '1mc3pmcca9i': R`Subtraia ⟦0⟧ de todas as partes`,
  '1flhu7k9ohj': R`Some ⟦0⟧ a todas as partes`,
  '1g9usaftmli': R`Subtraia ⟦0⟧ dos dois lados`,
  'rcyxvbe5bx': R`Some ⟦0⟧ aos dois lados`,
  'fc0sowzn7c': R`Ideia-chave`,
  '1oy7dzvank8': R`Exemplo resolvido`,
  '1q1jscvjv55': R`Atenção`,
  '1a2zghfpw7a': R`Digite uma fração como 7/12 (frações impróprias são aceitas).`,
  '2wu7e9ekt1': R`Um retângulo de comprimento l e largura w, um triângulo de base b e altura h, e um trapézio de lados paralelos a e b e altura h`,

  // place-value
  'i1ejiqva2l': R`
<p>Nosso sistema de numeração usa dez algarismos, de 0 a 9. A <b>posição</b> de um algarismo indica o seu <b>valor</b>: cada posição vale dez vezes a posição à sua direita.</p>
⟦0⟧
<p>Em <b>5 382 417</b>, o algarismo 8 está na dezena de milhar, então vale $8 \times 10\,000 = 80\,000$. O algarismo 3 vale $300\,000$.</p>
<h3>Forma decomposta</h3>
<p>Escrever um número como a soma dos valores posicionais mostra quanto vale cada algarismo:</p>
⟦1⟧
<p>O 0 na casa das dezenas <b>guarda o lugar</b>. Sem ele, 4 307 viraria 437.</p>
<h3>Comparando números</h3>
<p>Um número natural com mais algarismos é maior. Se dois números têm a mesma quantidade de algarismos, compare-os algarismo por algarismo a partir da esquerda; a primeira posição em que diferem decide. Assim, $52\,814 \gt 52\,781$, porque nas centenas $8 \gt 7$.</p>
<h3>Arredondamento</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'gisuf2bt5s': R`4\,307 = 4\,000 + 300 + 7`,
  'k8yn6x5f0c': R`Milhões`,
  '1y40p90zlus': R`Centenas de milhar`,
  '8rp03918ge': R`Dezenas de milhar`,
  'y6ohcicccm': R`Unidades de milhar`,
  '2bpfsjyefrh': R`Centenas`,
  '12cshgy5to0': R`Dezenas`,
  '48l24kh7s0': R`Unidades`,
  '1h333nq85ni': R`<p>Para arredondar para uma posição, olhe o algarismo <b>imediatamente à direita</b> dela.</p><ul><li>5 ou mais: arredonde <b>para cima</b> (some um ao algarismo da posição).</li><li>4 ou menos: arredonde <b>para baixo</b> (o algarismo da posição não muda).</li></ul><p>Todos os algarismos depois da posição de arredondamento viram 0.</p>`,
  '264ckm0rxdd': R`<p>Arredonde 3 462 para a centena mais próxima.</p><ol><li>O algarismo das centenas é 4. O algarismo à direita dele (dezenas) é 6.</li><li>6 é 5 ou mais, então arredondamos para cima: o 4 vira 5.</li><li>Resposta: <b>3 500</b>.</li></ol><p>Para a dezena mais próxima, 3 462 é 3 460; para a unidade de milhar mais próxima, é 3 000.</p>`,
  '1b014azrv9g': R`<p>Olhe só o algarismo seguinte. 3 449 arredondado para a centena é 3 400, e não 3 500 — nunca arredonde em etapas.</p>`,
  'rwpycs3uy5': R`das unidades`,
  '48iq3xbr78': R`das dezenas`,
  'evjeoal0o3': R`das centenas`,
  '1wg89nrnvw3': R`das unidades de milhar`,
  'humdf3fhgn': R`das dezenas de milhar`,
  '7vj2b9yekp': R`das centenas de milhar`,
  '1vvnln22yvc': R`dos milhões`,
  '1k42apyhj2s': R`No número <b>⟦0⟧</b>, qual é o valor do algarismo <b>⟦1⟧</b>?`,
  '1wls65y7jfe': R`O algarismo ⟦0⟧ é ⟦1⟧, então seu valor é $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$.`,
  '2ds03ywxgdr': R`dezena`,
  'ct0emjf1zx': R`centena`,
  '2bm9zrq1v5b': R`unidade de milhar`,
  '1p8grh6ppw3': R`Arredonde <b>⟦0⟧</b> para a ⟦1⟧ mais próxima.`,
  'ucpruditlj': R`Depois do algarismo ⟦0⟧ vem o ⟦1⟧. ⟦2⟧: ⟦3⟧ ≈ <b>⟦4⟧</b>.`,
  '10zj9kfgz44': R`Ele é 5 ou mais, então arredondamos para cima`,
  '2bd3oxw8hoc': R`Ele é menor que 5, então arredondamos para baixo`,
  '2eobe5h8vjz': R`Qual número é igual a $⟦0⟧$?`,
  '12ct2r4vi1w': R`Some os valores posicionais: $⟦0⟧ = ⟦1⟧$. Os zeros ocupam as posições vazias.`,
  '1thskfj0azj': R`Qual destes números é o <b>maior</b>?<br>⟦0⟧`,
  '1qw72id1e2m': R`Qual destes números é o <b>menor</b>?<br>⟦0⟧`,
  'cdwrnsn0bw': R`Todos têm cinco algarismos, então compare a partir da esquerda. Do ⟦0⟧: ⟦1⟧.`,
  '1hf4gas3oen': R`maior para o menor`,
  '1uhrj1iztnj': R`menor para o maior`,

  // add-sub
  '2crp1hgq6k1': R`
<p>A adição junta quantidades; a subtração descobre o que sobra ou a <b>diferença</b> entre duas quantidades. Para números grandes usamos o <b>algoritmo em colunas</b>: alinhe os algarismos pelo valor posicional e trabalhe da coluna das unidades para a esquerda.</p>
<h3>Adição com reserva</h3>
<p>Quando uma coluna soma 10 ou mais, escreva o algarismo das unidades e <b>leve</b> a dezena para a próxima coluna ("vai um").</p>
⟦0⟧
<h3>Subtração com empréstimo</h3>
<p>Se o algarismo de cima de uma coluna for menor que o de baixo, <b>peça emprestado</b> (reagrupe) um da coluna seguinte: isso acrescenta 10 à coluna atual.</p>
⟦1⟧
⟦2⟧
<h3>Problemas</h3>
<p>Palavras como <i>ao todo, no total, a mais, aumentou</i> geralmente indicam adição. Palavras como <i>sobrou, restam, diferença, quantos a mais, a menos</i> geralmente indicam subtração. Pergunte-se sempre o que o problema realmente pede.</p>
⟦3⟧`,
  '12bc1hhhzgf': R`<p>$4\,587 + 2\,846$</p><ol><li>Unidades: $7 + 6 = 13$ → escreva 3 e vai 1.</li><li>Dezenas: $8 + 4 + 1 = 13$ → escreva 3 e vai 1.</li><li>Centenas: $5 + 8 + 1 = 14$ → escreva 4 e vai 1.</li><li>Unidades de milhar: $4 + 2 + 1 = 7$.</li></ol><p>Resposta: <b>7 433</b>.</p>`,
  'dzfcdnot25': R`<p>$6\,204 - 1\,758$</p><ol><li>Unidades: 4 é menor que 8. O algarismo das dezenas é 0, então pegamos emprestado das centenas: 204 vira 1 centena, 9 dezenas e 14 unidades. $14 - 8 = 6$.</li><li>Dezenas: $9 - 5 = 4$.</li><li>Centenas: 1 é menor que 7, então pegamos emprestada uma unidade de milhar: $11 - 7 = 4$.</li><li>Unidades de milhar: $5 - 1 = 4$.</li></ol><p>Resposta: <b>4 446</b>.</p>`,
  '1myl5xbp4pm': R`<p>Adição e subtração desfazem uma à outra. Confira uma subtração somando: $4\,446 + 1\,758 = 6\,204$ ✓. Isso também encontra números que faltam: se $\square + 348 = 1\,000$, então $\square = 1\,000 - 348 = 652$.</p>`,
  '23w41b37di3': R`<p>Um erro comum é subtrair, em cada coluna, o algarismo menor do maior (por exemplo, escrever $52 - 38 = 26$). O certo é pedir emprestado: $52 - 38 = 14$.</p>`,
  'jzpsrz7qv': R`Calcule $⟦0⟧ + ⟦1⟧$.`,
  '11vnennk127': R`Alinhe os algarismos pelo valor posicional e some a partir das unidades, levando um sempre que uma coluna chegar a 10 ou mais: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '2cqlmyuanc4': R`Calcule $⟦0⟧ - ⟦1⟧$.`,
  '217um699krb': R`Subtraia coluna por coluna a partir das unidades, pedindo emprestado quando o algarismo de cima for menor: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$. Verificação: $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '20q2iwal3wx': R`Que número vai no quadrado? $\square + ⟦0⟧ = ⟦1⟧$`,
  '2vzsixgbwq': R`A subtração desfaz a adição: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '19k8gxx8enm': R`Uma biblioteca tinha ⟦0⟧ livros. Recebeu ⟦1⟧ livros novos e depois emprestou ⟦2⟧. Quantos livros restam na biblioteca?`,
  '22c2nbk22nn': R`Some os livros novos e depois subtraia os emprestados: $⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  'tjgizs9fjl': R`Mia`,
  '1if8m7vmopf': R`Léo`,
  '12t8l5omzh1': R`Sari`,
  '26mi5um5hxm': R`Budi`,
  '5ladyusi9v': R`Ana`,
  '1e0eos7e481': R`Tomás`,
  '28xor3epndt': R`Dewi`,
  'fl1dlgr4st': R`Raka`,
  'b83c8sskmz': R`Em um jogo, ⟦0⟧ fez ⟦1⟧ pontos e ⟦2⟧ fez ⟦3⟧. Quantos pontos a mais ⟦4⟧ fez?`,
  'h14zpmlfj7': R`"Quantos a mais" pede a diferença: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // mul-div
  '12j6s3mfail': R`
<p>A <b>multiplicação</b> é a adição repetida de grupos iguais: $4 \times 6$ significa 4 grupos de 6, ou seja, $6 + 6 + 6 + 6 = 24$. A <b>divisão</b> reparte uma quantidade em grupos iguais: $24 \div 6 = 4$.</p>
⟦0⟧
<h3>Multiplicando números maiores</h3>
<p>Decomponha um dos números pelos valores posicionais, multiplique cada parte e some (é a propriedade distributiva em ação):</p>
⟦1⟧
<h3>Divisão e resto</h3>
<p>Quando a divisão não é exata, o que sobra é o <b>resto</b>. Ele é sempre menor que o divisor.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '1rjytzik9fa': R`<p>Multiplicação e divisão desfazem uma à outra: $4 \times 6 = 24 \iff 24 \div 6 = 4$.</p><ul><li>Na multiplicação a ordem não importa: $a \times b = b \times a$.</li><li>A multiplicação se distribui sobre a adição: $a \times (b + c) = a \times b + a \times c$.</li></ul>`,
  '20j6lyqvksk': R`347 \times 26 = 347 \times 20 + 347 \times 6 = 6\,940 + 2\,082 = 9\,022`,
  '11dzvmewikb': R`47 \div 5 = 9 \text{ resto } 2 \qquad \text{porque } 5 \times 9 + 2 = 47`,
  '1z8tho01ahp': R`<p>150 alunos vão fazer um passeio. Cada ônibus leva 40 alunos. Quantos ônibus são necessários?</p><p>$150 \div 40 = 3$, resto 30. Três ônibus levam 120 alunos; os outros 30 também precisam de ônibus, então são necessários <b>4 ônibus</b>.</p>`,
  '1g33a99esai': R`<p>Nos problemas, decida o que o resto significa. "Quantos ônibus são <i>necessários</i>?" arredonda para cima; "quantas caixas podem ser <i>completamente</i> cheias?" arredonda para baixo.</p>`,
  '10v4h321li3': R`Calcule $⟦0⟧ \times ⟦1⟧$.`,
  'h89yrotk3q': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, ou seja, ⟦3⟧ grupos de ⟦4⟧.`,
  '2gi38wc5lfl': R`Decomponha ⟦0⟧ em ⟦1⟧ + ⟦2⟧: $⟦3⟧ \times ⟦4⟧ + ⟦5⟧ \times ⟦6⟧ = ⟦7⟧ + ⟦8⟧ = ⟦9⟧$.`,
  '2g99zk4sonb': R`Calcule $⟦0⟧ \div ⟦1⟧$.`,
  'cggzswltjw': R`A divisão desfaz a multiplicação: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, então $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$.`,
  '7njwte8n8l': R`Qual é o resto da divisão de ⟦0⟧ por ⟦1⟧?`,
  '1c2kbih8aei': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ e $⟦3⟧ - ⟦4⟧ = ⟦5⟧$, então $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$, resto <b>⟦9⟧</b>.`,
  '23lffvpxlg2': R`ovos`,
  'isjmxkkk5m': R`cupcakes`,
  'qd054tvbk9': R`lápis`,
  '22kysml68r1': R`garrafas`,
  '29eftju2pbv': R`É preciso guardar ⟦0⟧ ⟦1⟧ em caixas que comportam ⟦2⟧ cada uma. Quantas caixas são necessárias para guardar tudo?`,
  '1pnydk75epc': R`Uma loja embala ⟦0⟧ ⟦1⟧ em caixas de ⟦2⟧. Quantas caixas podem ser <b>completamente</b> cheias?`,
  '9w986eh8jp': R`$⟦0⟧ \div ⟦1⟧ = ⟦2⟧$, resto ⟦3⟧. ⟦4⟧`,
  'dnbly4c6lj': R`Sobram ⟦0⟧ ⟦1⟧ que também precisam de uma caixa, então são necessárias <b>⟦2⟧</b> caixas.`,
  'doig2i1un2': R`Só <b>⟦0⟧</b> caixas ficam cheias; sobram ⟦1⟧ ⟦2⟧.`,
  '5ki7426a69': R`Um salão tem ⟦0⟧ fileiras de cadeiras, com ⟦1⟧ cadeiras em cada fileira. Quantas cadeiras há ao todo?`,
  '13ytah9dyhs': R`Fileiras iguais significam multiplicação: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cadeiras.`,

  // order-ops
  'jeo8qdfjh8': R`
<p>Quando um cálculo tem várias operações, todos precisam fazê-las na mesma ordem; caso contrário, a mesma expressão daria resultados diferentes. Essa ordem combinada se chama <b>ordem das operações</b>; em inglês, ela costuma ser lembrada pela sigla <b>PEMDAS</b>.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '100vdkuw7cv': R`Etapa`,
  '1ata9ppdhpl': R`Operação`,
  '1i56r47suu5': R`Exemplo`,
  'bct94f2duc': R`Parênteses`,
  '152taipeiq': R`Potências e raízes`,
  '1dq9oio2vod': R`Multiplicação e divisão — da esquerda para a direita`,
  'ety1fhjk85': R`Adição e subtração — da esquerda para a direita`,
  '20c9xxbu7nh': R`<p>Multiplicação e divisão têm a <b>mesma</b> prioridade, assim como adição e subtração. Dentro do mesmo nível, trabalhe da <b>esquerda para a direita</b>.</p>`,
  'vpi6gbf1j5': R`<p>Calcule $20 - 8 \div 2 \times 3 + 1$.</p><ol><li>Primeiro divisão e multiplicação, da esquerda para a direita: $8 \div 2 = 4$ e depois $4 \times 3 = 12$.</li><li>Agora $20 - 12 + 1$, da esquerda para a direita: $8 + 1 = 9$.</li></ol><p>Resposta: <b>9</b>.</p>`,
  'cx7umbw06o': R`<p>Calcule $(8 + 4) \times 3 - 2^3$.</p><ol><li>Parênteses: $8 + 4 = 12$.</li><li>Potências: $2^3 = 8$.</li><li>Multiplicação: $12 \times 3 = 36$.</li><li>Subtração: $36 - 8 = 28$.</li></ol>`,
  '9qyvtl39mt': R`<p>"PEMDAS" não significa multiplicar antes de dividir. $12 \div 3 \times 2 = 8$, e não $12 \div 6 = 2$.</p>`,
  '2boesugt2g3': R`Calcule $⟦0⟧ + ⟦1⟧ \times ⟦2⟧$.`,
  '18k6kdrqfh9': R`Primeiro multiplique: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Depois some: $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '13w7u6yvf66': R`Calcule $(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ - ⟦3⟧$.`,
  '1kgg8vz8ven': R`Parênteses: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Multiplicação: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Subtração: $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  'fpzk0whg2k': R`Calcule $⟦0⟧ - ⟦1⟧ \div ⟦2⟧ \times ⟦3⟧$.`,
  '6i0q5bykj1': R`Primeiro divisão e multiplicação, da esquerda para a direita: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ e depois $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Por fim, $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1f77fy0xem': R`Calcule $⟦0⟧ + ⟦1⟧^2 - ⟦2⟧$.`,
  'isber9l7mx': R`Primeiro a potência: $⟦0⟧^2 = ⟦1⟧$. Depois, da esquerda para a direita: $⟦2⟧ + ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '12cd51d72z4': R`Calcule $⟦0⟧ \times (⟦1⟧ + ⟦2⟧) \div ⟦3⟧$.`,
  '1rwp21i838c': R`Parênteses: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Depois, da esquerda para a direita: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ e $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$.`,
  '16yj15t3yvl': R`Calcule $⟦0⟧ - ⟦1⟧ + ⟦2⟧$.`,
  '2g7vu4g2g7r': R`Adição e subtração têm a mesma prioridade, então vá da esquerda para a direita: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$ e depois $⟦3⟧ + ⟦4⟧ = ⟦5⟧$. Somar $⟦6⟧ + ⟦7⟧$ primeiro daria, erradamente, ⟦8⟧.`,

  // factors
  'obrpwbkvog': R`
<p>Um <b>divisor</b> (ou fator) de um número o divide exatamente. Um <b>múltiplo</b> de um número é esse número multiplicado por um número natural.</p>
<ul><li>Divisores de 12: 1, 2, 3, 4, 6, 12 (eles vêm em pares: $1 \times 12$, $2 \times 6$, $3 \times 4$).</li><li>Múltiplos de 12: 12, 24, 36, 48, …</li></ul>
<h3>Números primos e compostos</h3>
<p>Um número <b>primo</b> tem exatamente dois divisores: 1 e ele mesmo (2, 3, 5, 7, 11, 13, …). Um número <b>composto</b> tem mais de dois divisores. O 1 não é primo nem composto, e o 2 é o único primo par.</p>
⟦0⟧
<h3>Decomposição em fatores primos</h3>
<p>Todo número natural maior que 1 pode ser escrito como produto de primos de uma única maneira. Use uma árvore de fatores: continue decompondo até que cada ramo termine em um primo.</p>
⟦1⟧
<h3>MDC e MMC</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '10ydoy6638h': R`Divisível por`,
  '1u2j0a6t91o': R`Regra`,
  '1fsfip1h2ap': R`o último algarismo é par`,
  '26v1i9jjmmd': R`a soma dos algarismos é divisível por 3`,
  'irydz9sqkz': R`os dois últimos algarismos formam um múltiplo de 4`,
  'mwe5nagqkl': R`o último algarismo é 0 ou 5`,
  'uitu5og8wz': R`é divisível por 2 e por 3`,
  'h955yik0fz': R`a soma dos algarismos é divisível por 9`,
  '185jxbw7gii': R`o último algarismo é 0`,
  'sxhmc0c8k9': R`<p>O <b>máximo divisor comum</b> (MDC) é o maior número que divide os dois números. O <b>mínimo múltiplo comum</b> (MMC) é o menor número que é múltiplo dos dois.</p><p>Usando a decomposição em primos: o MDC pega cada primo comum com o <b>menor</b> expoente; o MMC pega todos os primos com o <b>maior</b> expoente.</p>`,
  '2dcgjf0y6e9': R`<p>$24 = 2^3 \times 3$ e $36 = 2^2 \times 3^2$.</p><p>MDC $= 2^2 \times 3 = 12$. &nbsp; MMC $= 2^3 \times 3^2 = 72$.</p><p>Verificação: $\text{MDC} \times \text{MMC} = 12 \times 72 = 864 = 24 \times 36$ ✓ (isso vale sempre para dois números).</p>`,
  '13dl2xstaq0': R`<p>Problemas de MDC falam de <i>dividir em grupos iguais</i> (o maior tamanho de grupo). Problemas de MMC falam de <i>coisas que voltam a acontecer juntas</i> (a primeira vez que os ciclos coincidem).</p>`,
  '1v4c3frqq3d': R`Qual é o máximo divisor comum (MDC) de ⟦0⟧ e ⟦1⟧?`,
  '8l33q80f9g': R`Divisores de ⟦0⟧: ⟦1⟧.<br>Divisores de ⟦2⟧: ⟦3⟧.<br>O maior divisor que eles têm em comum é <b>⟦4⟧</b>.`,
  'slhedaglcs': R`Qual é o mínimo múltiplo comum (MMC) de ⟦0⟧ e ⟦1⟧?`,
  '1gi8rsfc6pi': R`Múltiplos de ⟦0⟧: ⟦1⟧, …<br>Múltiplos de ⟦2⟧: ⟦3⟧, …<br>O primeiro em comum é <b>⟦4⟧</b>.`,
  '15d9oj1fzj1': R`Qual destes números é <b>primo</b>?`,
  'xvmwee4nwk': R`⟦0⟧ tem exatamente dois divisores, 1 e ⟦1⟧. Os outros são compostos: ⟦2⟧.`,
  '151txls1vlc': R`Quantos divisores ⟦0⟧ tem?`,
  '1tllv5888z': R`Liste os pares de divisores: ⟦0⟧. Os divisores são ⟦1⟧, ou seja, <b>⟦2⟧</b> divisores.`,
  'rjpmb07v6a': R`Qual é a decomposição de ⟦0⟧ em fatores primos?`,
  '162lv91sf8i': R`Vá dividindo por primos: ⟦0⟧ = ⟦1⟧. Todos os fatores são primos e, multiplicando-os de volta, obtemos ⟦2⟧.`,
  '1dcblj5tqu6': R`Hana tem ⟦0⟧ contas vermelhas e ⟦1⟧ contas azuis. Ela faz pulseiras iguais usando todas as contas, cada uma com o mesmo número de contas vermelhas e o mesmo número de contas azuis. Qual é o maior número de pulseiras que ela pode fazer?`,
  '16f0mrep69j': R`O número de pulseiras precisa dividir ⟦0⟧ e ⟦1⟧, então procure o MDC: $\text{MDC}(⟦2⟧, ⟦3⟧) = ⟦4⟧$. Ela pode fazer <b>⟦5⟧</b> pulseiras, cada uma com ⟦6⟧ contas vermelhas e ⟦7⟧ azuis.`,
  '76jyl5vip0': R`Duas luzes acabaram de piscar juntas. Uma pisca a cada ⟦0⟧ segundos e a outra a cada ⟦1⟧ segundos. Depois de quantos segundos elas vão piscar juntas de novo?`,
  '2ddehafzm6d': R`segundos`,
  '1mfkmnfob4d': R`Elas piscam juntas nos múltiplos comuns de ⟦0⟧ e ⟦1⟧. O primeiro é o MMC: <b>⟦2⟧</b> segundos.`,
});

/* Português — ensino fundamental (frações → medidas) */
addT('pt', {
  // fractions
  '1j59vvw5wlm': R`
<p>Uma <b>fração</b> $\frac{a}{b}$ significa $a$ partes de $b$ partes iguais. O número de cima é o <b>numerador</b>; o de baixo é o <b>denominador</b>.</p>
<h3>Frações equivalentes e fração irredutível</h3>
<p>Multiplicar ou dividir o numerador e o denominador pelo mesmo número dá uma fração equivalente: $\frac{2}{3} = \frac{4}{6} = \frac{10}{15}$. Para <b>simplificar</b>, divida os dois pelo MDC:</p>
⟦0⟧
<h3>Números mistos</h3>
<p>$2\frac{1}{3}$ significa $2 + \frac{1}{3}$. Como fração imprópria: $2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$.</p>
<h3>Adição e subtração</h3>
⟦1⟧
⟦2⟧
<h3>Multiplicação e divisão</h3>
⟦3⟧
<p>Para dividir, <b>mantenha</b> a primeira fração, <b>troque</b> ÷ por × e <b>inverta</b> a segunda fração.</p>
⟦4⟧
<h3>Fração de uma quantidade</h3>
<p>Divida pelo denominador e depois multiplique pelo numerador: $\frac{3}{8}$ de $40 = (40 \div 8) \times 3 = 15$.</p>
⟦5⟧`,
  'twupiargma': R`<p>Só é possível somar ou subtrair frações com o <b>mesmo denominador</b>. Reescreva-as com um denominador comum (o MMC dos denominadores) e depois some ou subtraia os numeradores.</p>`,
  'cscyf10ta5': R`\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \qquad\qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}`,
  'bcas553r7s': R`<p>Nunca some os denominadores: $\frac{1}{2} + \frac{1}{3}$ é $\frac{5}{6}$, e não $\frac{2}{5}$.</p>`,
  'ixkiz8sse6': R`Escreva $\frac{⟦0⟧}{⟦1⟧}$ na forma irredutível.`,
  '10gte9lmsdd': R`Digite uma fração como 3/4.`,
  '1pjukmxebsh': R`O MDC de ⟦0⟧ e ⟦1⟧ é ⟦2⟧. Divida os dois por ⟦3⟧: $\frac{⟦4⟧ \div ⟦5⟧}{⟦6⟧ \div ⟦7⟧} = \frac{⟦8⟧}{⟦9⟧}$.`,
  'nvda2ntfzh': R`Calcule $\frac{⟦0⟧}{⟦1⟧} + \frac{⟦2⟧}{⟦3⟧}$. Dê a resposta na forma irredutível.`,
  '227nw1m409d': R`Denominador comum ⟦0⟧: $\frac{⟦1⟧}{⟦2⟧} + \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '1mtmp0absry': R`Calcule $\frac{⟦0⟧}{⟦1⟧} - \frac{⟦2⟧}{⟦3⟧}$. Dê a resposta na forma irredutível.`,
  'gyruuxmt48': R`Denominador comum ⟦0⟧: $\frac{⟦1⟧}{⟦2⟧} - \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '2amnbki6syc': R`Calcule $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧}$. Dê a resposta na forma irredutível.`,
  '1oq98j0zwy6': R`Multiplique numeradores e denominadores: $\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧ \times ⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '4ip7z0hj87': R`Calcule $\frac{⟦0⟧}{⟦1⟧} \div \frac{⟦2⟧}{⟦3⟧}$. Dê a resposta na forma irredutível.`,
  '1unu6p3t9n0': R`Mantenha, troque, inverta: $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '2ebc0tw6di0': R`Quanto é $\frac{⟦0⟧}{⟦1⟧}$ de ⟦2⟧?`,
  'vi27l05tmq': R`Divida pelo denominador e depois multiplique pelo numerador: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ e $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '17rm8piimg0': R`Escreva $⟦0⟧\frac{⟦1⟧}{⟦2⟧}$ como fração imprópria.`,
  '1vkdspzdrbu': R`Digite uma fração como 11/4.`,
  '1o401nhusn': R`Parte inteira × denominador + numerador: $⟦0⟧ \times ⟦1⟧ + ⟦2⟧ = ⟦3⟧$. O denominador se mantém: $\frac{⟦4⟧}{⟦5⟧}$.`,
  'kune7g17fg': R`Qual fração é a <b>maior</b>?`,
  '1lvlk3jpc2g': R`Qual fração é a <b>menor</b>?`,
  '1or6yhfdw2': R`Compare-as como decimais (ou com um denominador comum): ⟦0⟧. A maior é $⟦1⟧$.`,
  '2er4a94vvmc': R`Compare-as como decimais (ou com um denominador comum): ⟦0⟧. A menor é $⟦1⟧$.`,

  // decimals
  '2663pva71c8': R`
<p>Os números decimais estendem o valor posicional para a direita das unidades. Cada posição vale um décimo da posição à sua esquerda.</p>
⟦0⟧
<p>Assim, $47{,}305 = 40 + 7 + \frac{3}{10} + \frac{0}{100} + \frac{5}{1000}$.</p>
<h3>Comparando decimais</h3>
<p>Deixe os números com a mesma quantidade de casas decimais acrescentando zeros e depois compare: $0{,}5 = 0{,}50 \gt 0{,}45$. Um decimal mais comprido não é necessariamente maior!</p>
<h3>Adição e subtração</h3>
⟦1⟧
⟦2⟧
<h3>Multiplicação</h3>
<p>Multiplique como se não houvesse vírgulas e conte o total de casas decimais dos fatores: o resultado tem essa quantidade de casas.</p>
⟦3⟧
<h3>Divisão e conversões</h3>
<p>Multiplicar por 10, 100 ou 1000 desloca os algarismos 1, 2 ou 3 casas para a esquerda (o número aumenta); dividir os desloca para a direita. Uma fração vira decimal dividindo o numerador pelo denominador: $\frac{3}{8} = 3 \div 8 = 0{,}375$.</p>
<h3>Arredondando decimais</h3>
<p>A regra é a mesma dos números naturais: olhe o algarismo seguinte. $6{,}847$ arredondado para o décimo mais próximo é $6{,}8$; para o centésimo mais próximo, $6{,}85$.</p>
⟦4⟧`,
  'yhxj3mz2az': R`Décimos`,
  '1usmp59h50n': R`Centésimos`,
  'biszmhnvcw': R`Milésimos`,
  '29ru7wnae4a': R`<p>Alinhe as <b>vírgulas</b>, complete as casas vazias com zeros e some ou subtraia como com números naturais.</p>`,
  '1refy6cjloa': R`<p>$12{,}7 + 3{,}45$: escreva $12{,}70 + 3{,}45 = 16{,}15$.</p>`,
  '1lqqzrepgzp': R`1{,}3 \times 0{,}24: \quad 13 \times 24 = 312 \;\Rightarrow\; 0{,}312 \quad (1 + 2 = 3 \text{ casas decimais})`,
  'juf948b8yc': R`<p>$\frac{3}{4}$ é 0,75, e não 3,4. O traço de fração significa dividir.</p>`,
  '11m0f3xnsds': R`Alinhe as vírgulas (escreva ⟦0⟧ como ⟦1⟧) e some: $⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'qfevgwaqck': R`Alinhe as vírgulas e subtraia: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '1p6qy0zwa3u': R`Ignore as vírgulas: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Os fatores têm, ao todo, ⟦3⟧, então o resultado é <b>⟦4⟧</b>.`,
  'uqon6l82ny': R`1 casa decimal`,
  'tx8fdinl8c': R`2 casas decimais`,
  'b7wqcpujtu': R`Escreva $\frac{⟦0⟧}{⟦1⟧}$ na forma decimal.`,
  '1ufy8j9fr2y': R`Divida o numerador pelo denominador: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$.`,
  'vje0snups3': R`décimo`,
  '1liz42210hc': R`dos décimos`,
  '104jyqiqg9x': R`centésimo`,
  '10lk6io95d0': R`dos centésimos`,
  '65m0asa80m': R`número inteiro`,
  'elqb7vv91e': R`Arredonde ⟦0⟧ para o ⟦1⟧ mais próximo.`,
  '10rdjn6n7af': R`Olhe o algarismo logo depois da casa ⟦0⟧ e arredonde ⟦1⟧ para <b>⟦2⟧</b>.`,
  'srl9a8gbof': R`Qual decimal é o <b>maior</b>? &nbsp;⟦0⟧`,
  'gs5zz0z26m': R`Qual decimal é o <b>menor</b>? &nbsp;⟦0⟧`,
  '1ddc7akhylh': R`Escreva todos com três casas decimais: ⟦0⟧. O maior é <b>⟦1⟧</b>.`,
  'clxur1r60o': R`Escreva todos com três casas decimais: ⟦0⟧. O menor é <b>⟦1⟧</b>.`,

  // percent
  'r0jl598zxh': R`
<p><b>Por cento</b> significa "em cada 100": $35\% = \frac{35}{100} = 0{,}35$.</p>
⟦0⟧
<h3>As três perguntas básicas</h3>
⟦1⟧
⟦2⟧
<h3>Aumentos, reduções e descontos</h3>
<p>Um desconto de $20\%$ sobre 80 reais economiza $0{,}2 \times 80 = 16$ reais, então o preço com desconto é $80 - 16 = 64$ reais. Mais rápido: você paga $80\%$ do preço, $0{,}8 \times 80 = 64$.</p>
<p>Um aumento de $p\%$ multiplica por $1 + \frac{p}{100}$; uma redução multiplica por $1 - \frac{p}{100}$.</p>
⟦3⟧`,
  '2e1ivkcc9wi': R`Fração`,
  '21lfn42y4af': R`Decimal`,
  '1vaz29jk1go': R`Porcentagem`,
  '1lj32zs95qv': R`<ul><li><b>Porcentagem de uma quantidade:</b> $p\% \text{ de } N = \frac{p}{100} \times N$.</li><li><b>Quantos por cento de $b$ é $a$?</b> $\frac{a}{b} \times 100\%$.</li><li><b>Variação percentual:</b> $\frac{\text{variação}}{\text{valor original}} \times 100\%$.</li></ul>`,
  '14zii6dfm6x': R`<p>$15\%$ de $240 = 0{,}15 \times 240 = 36$. &nbsp; Atalho mental: $10\% = 24$, $5\% = 12$, total $36$.</p>`,
  '1xvrzy7qz2k': R`<p>A variação percentual sempre se divide pelo valor <b>original</b>. Um preço que sobe de 50 para 60 tem um aumento de $\frac{10}{50} = 20\%$, e não de $\frac{10}{60}$.</p>`,
  '1gobo82ltgo': R`Quanto é ⟦0⟧% de ⟦1⟧?`,
  '17t3n1yumuv': R`$⟦0⟧\% \text{ de } ⟦1⟧ = \frac{⟦2⟧}{100} \times ⟦3⟧ = ⟦4⟧$.`,
  'x6d2i6pjon': R`Quantos por cento de ⟦0⟧ é ⟦1⟧?`,
  '166o0aldzl7': R`Escreva $\frac{⟦0⟧}{⟦1⟧}$ como porcentagem.`,
  '1zxz5pk8y96': R`Uma jaqueta custa ⟦0⟧ reais e está com ⟦1⟧% de desconto. Qual é o preço com desconto?`,
  '1fg7th2fl2k': R`reais`,
  '2d5e1injpmi': R`Desconto $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Preço com desconto $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ reais.`,
  '188c7uiuhvg': R`Uma cidade tem ⟦0⟧ habitantes. A população aumenta ⟦1⟧%. Qual é a nova população?`,
  '1z4269yh9sc': R`Aumento $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Nova população $= ⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '24ppsoc883t': R`O preço de um livro passa de ⟦0⟧ reais para ⟦1⟧ reais. Qual é o aumento percentual?`,
  '18zivp6w2kh': R`O preço de um livro passa de ⟦0⟧ reais para ⟦1⟧ reais. Qual é a redução percentual?`,
  '275khxq1hou': R`Variação: ⟦0⟧ reais. Aumento percentual: ⟦1⟧ — divida sempre pelo preço <b>original</b>.`,
  '260avkxsjev': R`Variação: ⟦0⟧ reais. Redução percentual: ⟦1⟧ — divida sempre pelo preço <b>original</b>.`,

  // measurement
  'ymwylkippx': R`
<p>O sistema métrico se baseia em potências de dez, com prefixos que indicam o tamanho de uma unidade.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Tempo</h3>
<p>O tempo <i>não</i> é decimal: uma hora tem 60 minutos, e não 100. Para calcular o tempo decorrido, avance por etapas: de 09:35 a 13:10 são 25 min (até 10:00) + 3 h (até 13:00) + 10 min = 3 h 35 min = 215 minutos.</p>
⟦4⟧`,
  '1vt4z8db5g': R`Prefixo`,
  '18vrcwaxvwu': R`Significado`,
  '1j1ms4p35q': R`Exemplos`,
  '1837d2yv17g': R`quilo- (k)`,
  '6v2px6djsv': R`centi- (c)`,
  'cwnj8q0jlm': R`mili- (m)`,
  '4ynf6btmh8': R`Grandeza`,
  '1bcl39yblb4': R`Conversões`,
  '1yt0gqcalpk': R`Comprimento`,
  '1pzczs2mse4': R`Massa`,
  '3r7jg1gvau': R`1 t (tonelada) = 1 000 kg · 1 kg = 1 000 g`,
  '25cg9l2x1fi': R`Capacidade`,
  '1ellrod4539': R`Tempo`,
  '149iz1sgt': R`1 min = 60 s · 1 h = 60 min · 1 dia = 24 h · 1 semana = 7 dias`,
  '2g0x2qx5tup': R`<p>Ao passar de uma unidade <b>maior</b> para uma <b>menor</b>, você precisa de mais unidades: <b>multiplique</b>. Da menor para a maior: <b>divida</b>.</p>`,
  'x1upmnco35': R`<p>$3{,}5 \text{ km} = 3{,}5 \times 1000 = 3\,500 \text{ m}$. &nbsp; $2\,750 \text{ g} = 2\,750 \div 1000 = 2{,}75 \text{ kg}$.</p>`,
  't9d9f384y5': R`<p>Não subtraia horários como se fossem números comuns: $13{:}10 - 9{:}35$ não é $1310 - 935 = 375$ minutos.</p>`,
  'q3mks7cmvp': R`Converta ⟦0⟧ ⟦1⟧ em ⟦2⟧.`,
  '695i1r66ec': R`De unidade maior para menor, então multiplicamos: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$`,
  '1y3viru9jwt': R`De unidade menor para maior, então dividimos: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$`,
  '10b6a48v5cr': R`Quantos minutos há em ⟦0⟧ h ⟦1⟧ min?`,
  '1jj8c6wfcmv': R`minutos`,
  '26onbfrmj2m': R`1 hora = 60 minutos: $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ minutos.`,
  '2fcfktfjfb2': R`Quantos segundos há em ⟦0⟧ min ⟦1⟧ s?`,
  '1qje99e2i79': R`1 minuto = 60 segundos: $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ segundos.`,
  '1640fwpwscw': R`Um trem sai às ⟦0⟧ e chega às ⟦1⟧ do mesmo dia. Quantos minutos dura a viagem?`,
  '1bvdcgo9oas': R`Das ⟦0⟧ às ⟦1⟧ são ⟦2⟧ h ⟦3⟧ min, ou seja, $⟦4⟧ \times 60 + ⟦5⟧ = ⟦6⟧$ minutos.`,
  'jz7sp6v78m': R`Some ⟦0⟧ m ⟦1⟧ cm e ⟦2⟧ m ⟦3⟧ cm. Dê a resposta em centímetros.`,
  '1v59jh3egmq': R`⟦0⟧ m ⟦1⟧ cm = ⟦2⟧ cm e ⟦3⟧ m ⟦4⟧ cm = ⟦5⟧ cm. Total: $⟦6⟧ + ⟦7⟧ = ⟦8⟧$ cm.`,
});

/* Português — ensino fundamental (perímetro e área → dados) */
addT('pt', {
  // perimeter-area
  '1xtxvjsrb9v': R`
<p>O <b>perímetro</b> é a medida total do contorno de uma figura (em cm, m, …). A <b>área</b> é a medida da superfície que ela ocupa (em unidades quadradas: cm², m², …).</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Figuras compostas</h3>
<p>Divida uma figura em forma de L ou outra figura composta em retângulos e triângulos e some as áreas — ou pegue um retângulo grande e subtraia a parte que falta.</p>
⟦4⟧`,
  '1be5xudsubm': R`Retângulo, triângulo e trapézio — a altura é sempre medida perpendicularmente à base.`,
  '1vbb9fjurso': R`Figura`,
  '1bkcetbdzwi': R`Perímetro`,
  '9g9qb013dx': R`Área`,
  '1klcvelpbpq': R`Retângulo`,
  '1bkqo8aj6lu': R`Quadrado (lado $s$)`,
  'aioobs5p8o': R`Triângulo`,
  'jpaxz6sbbc': R`soma dos três lados`,
  '2ch6blse094': R`Paralelogramo`,
  '19b7alat8ps': R`soma dos lados`,
  'tfgy8ywg4m': R`Trapézio`,
  '2glmrmlwat4': R`<p>Um triângulo é metade de um retângulo (ou paralelogramo) com a mesma base e a mesma altura — é daí que vem o $\frac{1}{2}$.</p>`,
  'ro993i6hdb': R`<p>Um retângulo mede 12 m por 5 m. Perímetro $= 2(12 + 5) = 34$ m. Área $= 12 \times 5 = 60$ m².</p>`,
  '23w7bd7ygef': R`<p>O perímetro usa unidades de comprimento (m); a área usa unidades quadradas (m²). Além disso, a altura de um triângulo é perpendicular à base — não é o lado inclinado.</p>`,
  '3o5vcpwyc2': R`Um retângulo tem ⟦0⟧ cm de comprimento e ⟦1⟧ cm de largura. Qual é o seu perímetro?`,
  '1mlwgvw7rha': R`$P = 2(l + w) = 2(⟦0⟧ + ⟦1⟧) = ⟦2⟧$ cm.`,
  '29o3zagcnfc': R`Um jardim retangular tem ⟦0⟧ m de comprimento e ⟦1⟧ m de largura. Qual é a sua área?`,
  '1icmdazlj61': R`Um quadrado tem área de ⟦0⟧ cm². Qual é o seu perímetro?`,
  '102zowaciba': R`Lado $= \sqrt{⟦0⟧} = ⟦1⟧$ cm, então o perímetro é $4 \times ⟦2⟧ = ⟦3⟧$ cm.`,
  'b1fe5m9ffr': R`Um quadrado tem perímetro de ⟦0⟧ cm. Qual é a sua área?`,
  '13amxb9l6l6': R`Lado $= ⟦0⟧ \div 4 = ⟦1⟧$ cm, então a área é $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$ cm².`,
  'ahhkpun21u': R`Um triângulo tem base de ⟦0⟧ cm e altura de ⟦1⟧ cm. Qual é a sua área?`,
  'vcwpcnyvdg': R`$A = \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm².`,
  'lassz20hi3': R`Um paralelogramo tem base de ⟦0⟧ m e altura de ⟦1⟧ m. Qual é a sua área?`,
  '15yoihpm5qi': R`Um trapézio tem lados paralelos de ⟦0⟧ cm e ⟦1⟧ cm e altura de ⟦2⟧ cm. Qual é a sua área?`,
  '7f4u2yt2ji': R`$A = \frac{1}{2}(a + b)h = \frac{1}{2}(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '20cf1i7tqd7': R`Um retângulo tem perímetro de ⟦0⟧ m e comprimento de ⟦1⟧ m. Qual é a sua largura?`,
  '146lgv8gvtr': R`$2(l + w) = ⟦0⟧$, então $l + w = ⟦1⟧$ e $w = ⟦2⟧ - ⟦3⟧ = ⟦4⟧$ m.`,
  '1cisitk2yw7': R`Um piso em forma de L é obtido recortando um retângulo de ⟦0⟧ m × ⟦1⟧ m de um canto de um retângulo de ⟦2⟧ m × ⟦3⟧ m. Qual é a área do piso?`,
  '4fca853um1': R`Retângulo grande menos o recorte: $⟦0⟧ \times ⟦1⟧ - ⟦2⟧ \times ⟦3⟧ = ⟦4⟧ - ⟦5⟧ = ⟦6⟧$ m².`,

  // volume-basic
  '27t1x8ik6r5': R`
<p>O <b>volume</b> é o espaço que um sólido ocupa, medido em <b>unidades cúbicas</b> (cm³, m³). Um cubo com arestas de 1 cm tem volume de 1 cm³.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Área total</h3>
<p>A área total é a soma das áreas de todas as faces. Um paralelepípedo tem três pares de retângulos iguais:</p>
⟦3⟧
⟦4⟧`,
  'eqp3lgj8pe': R`\text{Paralelepípedo: } V = l \times w \times h \qquad\qquad \text{Cubo: } V = s^3`,
  '1v18xwhq9wo': R`<p>A capacidade está ligada ao volume: $1 \text{ cm}^3 = 1 \text{ mL}$ e $1000 \text{ cm}^3 = 1 \text{ L}$. Além disso, $1 \text{ m}^3 = 1000 \text{ L}$.</p>`,
  '1y5vqy9gj8b': R`<p>Um aquário tem 50 cm de comprimento, 30 cm de largura e 40 cm de altura.</p><p>$V = 50 \times 30 \times 40 = 60\,000 \text{ cm}^3 = 60 \text{ L}$.</p>`,
  'n4vhcjq4z5': R`A_T = 2(lw + lh + wh) \qquad\qquad \text{Cubo: } A_T = 6s^2`,
  '1rmk9dk27r1': R`<p>O volume usa unidades cúbicas (cm³); a área total usa unidades quadradas (cm²). Se você conhece o volume e duas arestas, divida para achar a terceira: $h = \frac{V}{l \times w}$.</p>`,
  '28sikx14trk': R`Um cubo tem arestas de ⟦0⟧ cm. Qual é o seu volume?`,
  'n0rlue63yl': R`$V = s^3 = ⟦0⟧^3 = ⟦1⟧$ cm³.`,
  '279nv9sb40d': R`Uma caixa tem ⟦0⟧ cm de comprimento, ⟦1⟧ cm de largura e ⟦2⟧ cm de altura. Qual é o seu volume?`,
  '18f8h5wvjps': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '2g4aunze98e': R`Um paralelepípedo tem volume de ⟦0⟧ cm³. O comprimento é ⟦1⟧ cm e a largura é ⟦2⟧ cm. Qual é a altura?`,
  '12q7gqhxt7v': R`$h = \frac{V}{l \times w} = \frac{⟦0⟧}{⟦1⟧ \times ⟦2⟧} = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$ cm.`,
  '107zxyhfk8j': R`Um tanque tem ⟦0⟧ cm de comprimento, ⟦1⟧ cm de largura e ⟦2⟧ cm de altura. Quantos litros de água ele comporta?`,
  '1xdyfr0a4jd': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³, e $1000 \text{ cm}^3 = 1 \text{ L}$, então ele comporta $⟦4⟧ \div 1000 = ⟦5⟧$ L.`,
  'j16awwfbde': R`Calcule a área total de um paralelepípedo de ⟦0⟧ cm × ⟦1⟧ cm × ⟦2⟧ cm.`,
  '15zob952c7': R`$A_T = 2(lw + lh + wh) = 2(⟦0⟧ + ⟦1⟧ + ⟦2⟧) = ⟦3⟧$ cm².`,
  'b7w1jgcvao': R`Um cubo tem volume de ⟦0⟧ cm³. Quanto mede cada aresta?`,
  '29p9f2w08h': R`Queremos $s^3 = ⟦0⟧$. Como $⟦1⟧ \times ⟦2⟧ \times ⟦3⟧ = ⟦4⟧$, cada aresta mede ⟦5⟧ cm.`,

  // angles-shapes
  '1zhvjckeb0g': R`
<p>Os ângulos medem giros, em <b>graus</b> (°). Uma volta completa tem $360^\circ$.</p>
⟦0⟧
⟦1⟧
<h3>Triângulos</h3>
<p><b>Equilátero</b>: três lados iguais, cada ângulo com $60^\circ$. <b>Isósceles</b>: dois lados iguais e dois ângulos da base iguais. <b>Escaleno</b>: nenhum lado igual. Um triângulo <b>retângulo</b> tem um ângulo de $90^\circ$.</p>
<h3>Polígonos</h3>
<p>Um polígono de $n$ lados pode ser dividido em $n - 2$ triângulos a partir de um vértice, então</p>
⟦2⟧
<p>Em um polígono <b>regular</b> todos os ângulos são iguais, então cada um mede $\frac{(n-2) \times 180^\circ}{n}$. Um hexágono regular tem ângulos de $\frac{4 \times 180^\circ}{6} = 120^\circ$.</p>
⟦3⟧`,
  'k7wfdtk1dy': R`Tipo`,
  '1czpi6e2j2z': R`Medida`,
  '2eamokno2qd': R`Agudo`,
  '14yb8vum3mx': R`menor que $90^\circ$`,
  '10qgoh7fpcr': R`Reto`,
  '96isxim10t': R`exatamente $90^\circ$`,
  '29pmtotpc3r': R`Obtuso`,
  '18bc6xajfgk': R`entre $90^\circ$ e $180^\circ$`,
  'zb7exyin0e': R`Raso`,
  '1stepofrhwb': R`exatamente $180^\circ$`,
  '7pnkzl3606': R`Côncavo`,
  '24bbunbptvm': R`entre $180^\circ$ e $360^\circ$`,
  '2douwrf277u': R`<ul><li>Ângulos sobre uma reta somam $180^\circ$.</li><li>Ângulos em torno de um ponto somam $360^\circ$.</li><li>Ângulos opostos pelo vértice são iguais.</li><li>Os ângulos de um triângulo somam $180^\circ$; os de um quadrilátero, $360^\circ$.</li></ul>`,
  '1g2z1i7tlna': R`\text{soma dos ângulos internos} = (n - 2) \times 180^\circ`,
  '9r6qtn8gpk': R`<p>Um triângulo tem ângulos de $48^\circ$ e $75^\circ$. O terceiro ângulo é $180^\circ - 48^\circ - 75^\circ = 57^\circ$.</p>`,
  'fbd3n0ai0s': R`Dois ângulos de um triângulo medem $⟦0⟧^\circ$ e $⟦1⟧^\circ$. Quanto mede o terceiro?`,
  '1mgnf9acc40': R`Os ângulos de um triângulo somam $180^\circ$: $180^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ = ⟦2⟧^\circ$.`,
  '17ra9ybal44': R`Dois ângulos estão juntos sobre uma reta. Um deles mede $⟦0⟧^\circ$. Quanto mede o outro?`,
  '1uo9pac72dr': R`Ângulos sobre uma reta somam $180^\circ$: $180^\circ - ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  'lbqlw4yngj': R`Quatro ângulos se encontram em um ponto. Três deles medem $⟦0⟧^\circ$, $⟦1⟧^\circ$ e $⟦2⟧^\circ$. Quanto mede o quarto?`,
  '1q0g9lewnyf': R`Ângulos em torno de um ponto somam $360^\circ$: $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '1o7rxocgbe4': R`Que tipo de ângulo mede $⟦0⟧^\circ$?`,
  '2087xqcuhit': R`Agudo $\lt 90^\circ$; reto $= 90^\circ$; obtuso entre $90^\circ$ e $180^\circ$; raso $= 180^\circ$; côncavo entre $180^\circ$ e $360^\circ$. Então um ângulo de $⟦0⟧^\circ$ é <b>⟦1⟧</b>.`,
  '1em7emit9v': R`Um quadrilátero tem ângulos de $⟦0⟧^\circ$, $⟦1⟧^\circ$ e $⟦2⟧^\circ$. Quanto mede o quarto ângulo?`,
  '24pznbwnbef': R`Os ângulos de um quadrilátero somam $360^\circ$: $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '2egzcjm3tpx': R`pentágono`,
  'v80sqcfxpp': R`hexágono`,
  '81gchefl78': R`octógono`,
  'ua45cwp3of': R`eneágono`,
  'luci9k7vz2': R`decágono`,
  '1udhvg5ma2x': R`dodecágono`,
  '27xxu0kf8rx': R`Qual é a soma dos ângulos internos de um polígono de ⟦0⟧ lados (⟦1⟧)?`,
  'gm8iaj6tll': R`Ele se divide em $⟦0⟧ - 2 = ⟦1⟧$ triângulos: $⟦2⟧ \times 180^\circ = ⟦3⟧^\circ$.`,
  'qinptcb6uu': R`Quanto mede cada ângulo interno de um polígono regular de ⟦0⟧ lados (⟦1⟧)?`,
  '1do1n0lapzc': R`Soma $= (⟦0⟧ - 2) \times 180^\circ = ⟦1⟧^\circ$, dividida entre ⟦2⟧ ângulos iguais: $⟦3⟧^\circ \div ⟦4⟧ = ⟦5⟧^\circ$.`,
  '2b3ubiiwfr4': R`Em um triângulo isósceles, o ângulo entre os dois lados iguais mede $⟦0⟧^\circ$. Quanto mede cada um dos outros dois ângulos?`,
  '1m260esohws': R`Os dois ângulos da base são iguais: $\frac{180^\circ - ⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // data-basic
  '1rkikmzq9kv': R`
<p>Dados são informações que coletamos, como notas de provas ou frutas favoritas. Uma <b>tabela de frequências</b> registra quantas vezes cada valor aparece; <b>gráficos de barras</b> e <b>pictogramas</b> mostram a mesma informação de forma visual.</p>
<h3>Quatro medidas-resumo</h3>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  '2fsgim21nih': R`Medida`,
  '1fy4t37t415': R`Como calcular`,
  '18v4e4ulshl': R`Para 3; 7; 7; 8; 10`,
  'ppforkar60': R`Média`,
  'w9uhnv1ylu': R`some todos os valores e divida pela quantidade`,
  '15fhdhxeit5': R`Mediana`,
  '1bp3iszr2ho': R`valor central depois de ordenar`,
  '2d8lw4ky362': R`Moda`,
  'n6vk2dz4y0': R`valor mais frequente`,
  '8wgrdlq9w9': R`Amplitude`,
  'u26xwlcm82': R`maior − menor`,
  '1ddos0ddk6b': R`<p>Se houver uma quantidade <b>par</b> de valores, a mediana é a média dos dois valores centrais: a mediana de 2; 4; 9; 11 é $\frac{4 + 9}{2} = 6{,}5$.</p>`,
  '1b84zb92lm7': R`<p>Notas: 12; 5; 9; 12; 7.</p><ul><li>Média $= \frac{12 + 5 + 9 + 12 + 7}{5} = \frac{45}{5} = 9$</li><li>Ordenadas: 5; 7; 9; 12; 12 → mediana 9</li><li>Moda 12 · Amplitude $12 - 5 = 7$</li></ul>`,
  '1dcnrak0yuf': R`<p>Sempre <b>ordene</b> os dados antes de achar a mediana. O meio da lista fora de ordem geralmente está errado.</p>`,
  'x21ub369ei': R`Calcule a média de: ⟦0⟧.`,
  '1p52jtmc0cq': R`Some os valores e divida pela quantidade: $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  'jf7mas4uc8': R`Encontre a mediana de: ⟦0⟧.`,
  '1yw7i4urov1': R`Primeiro ordene: ⟦0⟧. O valor central — o ⟦1⟧º da lista ordenada — é <b>⟦2⟧</b>.`,
  '2g8sczm66bg': R`Encontre a moda de: ⟦0⟧.`,
  'tbuacyae4n': R`⟦0⟧ aparece 3 vezes — mais que qualquer outro valor —, então a moda é <b>⟦1⟧</b>.`,
  '1xtq8j2lty3': R`Encontre a amplitude de: ⟦0⟧.`,
  '15se826ipls': R`Amplitude = maior − menor $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '2epb7vd8j91': R`Maçãs`,
  '17dpyen9bnr': R`Bananas`,
  '7i14wwudqx': R`Mangas`,
  '2401q57c6t': R`Uvas`,
  '1e2lbgl4i2m': R`Laranjas`,
  '1n92q5m8dcn': R`Duriões`,
  '29y8laytfov': R`Mamões`,
  '1y1q3z5e86a': R`Fruta`,
  '282dadyo0i9': R`Alunos`,
  'gcofhmi74h': R`Uma turma votou em sua fruta favorita.⟦0⟧Quantos alunos votaram ao todo?`,
  '1x3hnjtfgqx': R`Some as frequências: $⟦0⟧ = ⟦1⟧$.`,
  '13d46zcnc3z': R`Uma turma votou em sua fruta favorita.⟦0⟧Quantos alunos a mais escolheram "⟦1⟧" do que "⟦2⟧"?`,
  '1t8yn7xcnqm': R`$⟦0⟧ - ⟦1⟧ = ⟦2⟧$ alunos a mais.`,
});

/* Português — anos finais (núcleo, inteiros → razões) */
addT('pt', {
  // core
  '1x23luhdn24': R`Digite um número inteiro ou uma fração como -3/4.`,
  'oe48n1yjho': R`Digite uma resposta como 49pi.`,
  '1pwkxeh9gz6': R`Diagrama de Venn: dois círculos A e B que se sobrepõem dentro de um retângulo U. A parte comum é A interseção B.`,
  '20fnrxy868c': R`só A`,
  '270f53k5ok8': R`só B`,
  '1je4zqnj4vo': R`fora dos dois: (A ∪ B)′`,
  '1mdy4rrlpik': R`Triângulo retângulo com catetos a e b e hipotenusa c oposta ao ângulo reto`,
  '1x3numfhp6n': R`Círculo de centro O com um raio r, um diâmetro, uma corda e um setor sombreado`,
  '19a9nt12ww1': R`diâmetro`,
  '2dw7tpqx5ho': R`setor`,
  '187npo1zduj': R`corda`,

  // integers
  '1d3b0kga2d8': R`
<p>Os <b>números inteiros</b> são os números naturais, seus opostos e o zero: $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$ Na reta numérica, os números aumentam para a direita, então $-7 \lt -2$, embora 7 seja maior que 2.</p>
<p>O <b>valor absoluto</b> (módulo) $|a|$ é a distância até o 0: $|-6| = 6$ e $|6| = 6$.</p>
<h3>Adição e subtração</h3>
⟦0⟧
<h3>Multiplicação e divisão</h3>
⟦1⟧
⟦2⟧
<p>No dia a dia: temperaturas abaixo de zero, altitudes abaixo do nível do mar, dívidas e andares no subsolo.</p>
⟦3⟧`,
  'y08mdvxdvx': R`<ul><li><b>Sinais iguais:</b> some os módulos e mantenha o sinal. $-4 + (-9) = -13$.</li><li><b>Sinais diferentes:</b> subtraia os módulos e use o sinal do número de maior módulo. $-11 + 5 = -6$.</li><li><b>Subtrair</b> é somar o oposto: $3 - (-8) = 3 + 8 = 11$.</li></ul>`,
  '265jmr0pgn6': R`Sinais`,
  '18hy4wrreq9': R`Resultado`,
  'smeasc7k44': R`+ e +`,
  'pch2ir8ey8': R`positivo`,
  '1etdbat34sz': R`− e −`,
  'ziyl69hweo': R`+ e −`,
  '2ffct8v299o': R`negativo`,
  '238sv1i1dpv': R`− e +`,
  'woqo0gjqdb': R`<p>$-3^2 = -9$, mas $(-3)^2 = 9$. Sem parênteses, a potência vale só para o 3.</p>`,
  '1vaqzb7dhrg': R`Sinais iguais: some os módulos e mantenha o sinal.`,
  '1gzm31e47qm': R`Sinais diferentes: subtraia os módulos e mantenha o sinal do número de maior módulo.`,
  '27t807op1rz': R`Subtrair é somar o oposto: $⟦0⟧ - ⟦1⟧ = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'dkidis5a97': R`Sinais iguais dão resultado positivo`,
  '1htjniy3zg4': R`Sinais diferentes dão resultado negativo`,
  'iepdkqxdg4': R`Calcule $⟦0⟧ \times ⟦1⟧ - ⟦2⟧$.`,
  'pxi31oj3ys': R`Primeiro multiplique: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Depois $⟦3⟧ - ⟦4⟧ = ⟦5⟧ + ⟦6⟧ = ⟦7⟧$.`,
  '26rnszv74s7': R`Às 6 h da manhã a temperatura era $⟦0⟧^\circ\text{C}$. Ao meio-dia tinha subido $⟦1⟧^\circ\text{C}$ e, à meia-noite, tinha caído $⟦2⟧^\circ\text{C}$ em relação ao meio-dia. Qual era a temperatura à meia-noite?`,
  'fyyovqsih2': R`$⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$, então a temperatura era $⟦4⟧^\circ\text{C}$.`,
  '1ag4iuv7vpa': R`Calcule $|⟦0⟧| - |⟦1⟧|$.`,
  '1hal8q9tj2u': R`$|⟦0⟧| = ⟦1⟧$ e $|⟦2⟧| = ⟦3⟧$, então o valor é $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,

  // exponents
  '2d43wqplznz': R`
<p>Uma <b>potência</b> indica uma multiplicação repetida: $a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ fatores}}$. Em $2^5 = 32$, 2 é a <b>base</b> e 5 é o <b>expoente</b>.</p>
<h3>Propriedades das potências</h3>
⟦0⟧
⟦1⟧
<h3>Raízes</h3>
<p>A raiz quadrada desfaz o quadrado: $\sqrt{81} = 9$ porque $9^2 = 81$. A raiz cúbica desfaz o cubo: $\sqrt[3]{64} = 4$ porque $4^3 = 64$.</p>
⟦2⟧
⟦3⟧`,
  '21iigvito9y': R`Propriedade`,
  '2du0zx6ztd9': R`<p>Simplifique $(2x^3)(5x^4)$: multiplique os números e some os expoentes, $10x^{7}$.</p>`,
  '2b2ar8gx2t7': R`<p>Para simplificar uma raiz quadrada, tire o maior fator que seja quadrado perfeito: $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$.</p>$$\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$$`,
  '28pcl4skbrd': R`<p>$x^3 \cdot x^4$ é $x^7$, e não $x^{12}$: na multiplicação de potências de mesma base, os expoentes se <i>somam</i>. E $\sqrt{9 + 16} = 5$, e não $3 + 4$.</p>`,
  's9xs5b9gme': R`Calcule $⟦0⟧^{⟦1⟧}$.`,
  'y0efpdptbg': R`$⟦0⟧^{⟦1⟧}$ significa ⟦2⟧ fatores iguais a ⟦3⟧: $⟦4⟧ = ⟦5⟧$.⟦6⟧`,
  'f0v39gimat': R` Um número ímpar de fatores negativos dá resultado negativo.`,
  '1a0fe39cn50': R` Um número par de fatores negativos dá resultado positivo.`,
  'gmyxohq5hl': R`Simplifique $(⟦0⟧⟦1⟧^{⟦2⟧})(⟦3⟧⟦4⟧^{⟦5⟧})$.`,
  '19i5sbwj9gf': R`Multiplique os números e <b>some</b> os expoentes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ e $⟦3⟧^{⟦4⟧} \cdot ⟦5⟧^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$. Resposta: $⟦9⟧⟦10⟧^{⟦11⟧}$.`,
  'd17nxbyour': R`Simplifique $\dfrac{⟦0⟧⟦1⟧^{⟦2⟧}}{⟦3⟧⟦4⟧^{⟦5⟧}}$.`,
  'zvet0x3ty3': R`Divida os números e <b>subtraia</b> os expoentes: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ e $⟦3⟧^{⟦4⟧ - ⟦5⟧} = ⟦6⟧^{⟦7⟧}$.`,
  'owsivnzbiv': R`Simplifique $(⟦0⟧⟦1⟧^{⟦2⟧})^{⟦3⟧}$.`,
  '16p8bz51ffa': R`Eleve cada fator à potência ⟦0⟧: $⟦1⟧^{⟦2⟧} = ⟦3⟧$ e $(⟦4⟧^{⟦5⟧})^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$.`,
  '1xezjl2w04x': R`Calcule $⟦0⟧^0 + ⟦1⟧^{-⟦2⟧}$.`,
  '188gl5tkaea': R`Digite uma fração como 9/8.`,
  'ko9qy4d1ca': R`$⟦0⟧^0 = 1$ e $⟦1⟧^{-⟦2⟧} = \frac{1}{⟦3⟧}$, então a soma é $1 + \frac{1}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}$.`,
  '1n967l6wl5g': R`Calcule $⟦0⟧^{-⟦1⟧}$.`,
  'zx2y9sarlt': R`Digite uma fração como 1/8.`,
  'yfk682by4y': R`Expoente negativo significa "um sobre": $⟦0⟧^{-⟦1⟧} = \frac{1}{⟦2⟧^{⟦3⟧}} = \frac{1}{⟦4⟧}$.`,
  '29kkp8bp96o': R`Calcule $\sqrt{⟦0⟧}$.`,
  '130msfu0zcr': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, então $\sqrt{⟦3⟧} = ⟦4⟧$.`,
  '2gon6mkcmhb': R`Calcule $\sqrt[3]{⟦0⟧}$.`,
  '214ubtovi6i': R`$⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$, então $\sqrt[3]{⟦4⟧} = ⟦5⟧$.`,
  '30ljqjiajh': R`Simplifique $\sqrt{⟦0⟧}$.`,
  '1dnbn17q9fj': R`Digite uma resposta como 3sqrt(2).`,
  'r5mpjrvznb': R`Encontre o maior fator que seja quadrado perfeito: $⟦0⟧ = ⟦1⟧ \times ⟦2⟧$. Então $\sqrt{⟦3⟧} = \sqrt{⟦4⟧} \cdot \sqrt{⟦5⟧} = ⟦6⟧$.`,

  // sci-notation
  '2855qmmjjc': R`
<p>Os cientistas escrevem números muito grandes ou muito pequenos de forma compacta como</p>
⟦0⟧
<ul><li>A distância até o Sol, cerca de $150\,000\,000$ km, é $1{,}5 \times 10^{8}$ km.</li><li>Um glóbulo vermelho, com cerca de $0{,}000\,008$ m de largura, mede $8 \times 10^{-6}$ m.</li></ul>
⟦1⟧
<h3>Calculando</h3>
<p>Multiplique (ou divida) os números da frente e some (ou subtraia) os expoentes. Depois ajuste o número da frente se ele não estiver entre 1 e 10:</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '244so12quwj': R`a \times 10^{n}, \qquad 1 \le a \lt 10, \quad n \text{ inteiro}`,
  '1phwx4rhhb0': R`<p>Conte quantas casas a vírgula se move para ficar exatamente um algarismo diferente de zero antes dela. Números grandes (vírgula para a esquerda) dão expoente <b>positivo</b>; números menores que 1 (vírgula para a direita) dão expoente <b>negativo</b>.</p>`,
  '17xqz1i19gu': R`(4 \times 10^{5}) \times (3 \times 10^{7}) = 12 \times 10^{12} = 1{,}2 \times 10^{13}`,
  'uws8i7cmm7': R`\frac{6 \times 10^{9}}{8 \times 10^{3}} = 0{,}75 \times 10^{6} = 7{,}5 \times 10^{5}`,
  '1bgde7du4ux': R`<p>$23 \times 10^{4}$ tem o valor certo, mas não está em notação científica: o número da frente precisa ser menor que 10.</p>`,
  '1jl1f7quddk': R`Escreva ⟦0⟧ em notação científica.`,
  '1xhcd6rnqeh': R`Mova a vírgula ⟦0⟧ casas para a esquerda para ficar um só algarismo na frente: $⟦1⟧ = ⟦2⟧ \times 10^{⟦3⟧}$.`,
  'sb71mbidjv': R`Mova a vírgula ⟦0⟧ casas para a direita para ficar um algarismo diferente de zero na frente: $⟦1⟧ = ⟦2⟧ \times 10^{-⟦3⟧}$.`,
  '1fxdkt6b40w': R`Escreva $⟦0⟧ \times 10^{⟦1⟧}$ como número comum.`,
  '1lry42zhbux': R`Mova a vírgula ⟦0⟧ casas para a direita: <b>⟦1⟧</b>.`,
  '1x5u9exutdv': R`Mova a vírgula 1 casa para a esquerda: <b>⟦0⟧</b>.`,
  '550xmeglh4': R`Mova a vírgula ⟦0⟧ casas para a esquerda: <b>⟦1⟧</b>.`,
  '1gs42dv9cjp': R`Calcule $(⟦0⟧ \times 10^{⟦1⟧}) \times (⟦2⟧ \times 10^{⟦3⟧})$. Dê a resposta em notação científica.`,
  'fs4t6k5mks': R`Multiplique os números da frente e some os expoentes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ e $10^{⟦3⟧} \times 10^{⟦4⟧} = 10^{⟦5⟧}$. ⟦6⟧`,
  '1zt4osszqy5': R`Como ⟦0⟧ não é menor que 10, reescreva $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,
  '1hosaw5g8gs': R`Resposta: $⟦0⟧ \times 10^{⟦1⟧}$.`,
  '1rhqt7i7pkj': R`Calcule $\dfrac{⟦0⟧ \times 10^{⟦1⟧}}{⟦2⟧ \times 10^{⟦3⟧}}$. Dê a resposta em notação científica.`,
  '3gwofajvgq': R`Divida os números da frente e subtraia os expoentes: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ e $10^{⟦3⟧ - ⟦4⟧} = 10^{⟦5⟧}$.⟦6⟧`,
  '1ujla3379au': R` Como ⟦0⟧ é menor que 1, reescreva $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,

  // ratio
  'j1hx7015fs': R`
<p>Uma <b>razão</b> $a : b$ compara duas quantidades. Como as frações, as razões podem ser simplificadas dividindo os dois termos pelo MDC: $18 : 24 = 3 : 4$.</p>
<h3>Divisão proporcional</h3>
⟦0⟧
<h3>Taxas e valor unitário</h3>
<p>Uma <b>taxa</b> compara quantidades com unidades diferentes: km por hora, reais por kg. Encontrar o valor de <b>uma</b> unidade (o valor unitário) resolve a maioria dos problemas.</p>
⟦1⟧
<h3>Proporção direta e inversa</h3>
⟦2⟧
⟦3⟧
<h3>Escalas de mapas</h3>
<p>Uma escala de $1 : 50\,000$ significa que 1 cm no mapa corresponde a $50\,000$ cm $= 500$ m $= 0{,}5$ km na realidade.</p>
⟦4⟧`,
  '1ldxptmm0q1': R`<p>Divida 60 balas na razão $2 : 3$.</p><ol><li>Total de partes: $2 + 3 = 5$.</li><li>Uma parte: $60 \div 5 = 12$.</li><li>Partes: $2 \times 12 = 24$ e $3 \times 12 = 36$.</li></ol>`,
  'mtzadc2zz9': R`\text{velocidade} = \frac{\text{distância}}{\text{tempo}} \qquad \text{distância} = \text{velocidade} \times \text{tempo}`,
  '1lx74znbkzq': R`<ul><li><b>Direta:</b> as duas quantidades crescem juntas, $y = kx$. O dobro de cadernos custa o dobro.</li><li><b>Inversa:</b> uma cresce quando a outra diminui, $xy = k$. O dobro de trabalhadores termina na metade do tempo.</li></ul>`,
  'a6l90vp81i': R`<p>6 trabalhadores constroem um muro em 10 dias. O serviço equivale a $6 \times 10 = 60$ dias de trabalho, então 4 trabalhadores precisam de $60 \div 4 = 15$ dias.</p>`,
  '2arjky763hz': R`<p>Antes de comparar, use as mesmas unidades. E verifique se a situação é direta ou inversa: "mais trabalhadores, menos dias" é inversa.</p>`,
  '1acmfldad41': R`Simplifique a razão ⟦0⟧ : ⟦1⟧.`,
  '1y50fzcs3bf': R`Digite a razão como 3:4.`,
  '5iztjnzgue': R`O MDC dos dois termos é ⟦0⟧; dividindo ambos por ⟦0⟧, obtemos ⟦1⟧ : ⟦2⟧ = ⟦3⟧ : ⟦4⟧.`,
  '2crne058qbs': R`Ali`,
  '18poqam78za': R`Siti`,
  '4lzqcmqqd4': R`Rina`,
  'izwfd6xg8i': R`Sam`,
  'bs57t3iign': R`Kim`,
  'h7jorlb8al': R`⟦0⟧ bolinhas de gude são divididas entre ⟦1⟧ e ⟦2⟧ na razão ⟦3⟧ : ⟦4⟧. Quantas bolinhas ⟦5⟧ recebe?`,
  '2ffhbqedp3i': R`São $⟦0⟧ + ⟦1⟧ = ⟦2⟧$ partes, cada uma valendo $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$. ⟦6⟧ recebe $⟦7⟧ \times ⟦8⟧ = ⟦9⟧$.`,
  'oh7i0xfb4t': R`cadernos`,
  'ia267mackq': R`canetas`,
  'ojwqqxz8z0': R`mangas`,
  '2c5x6tu8q2m': R`ingressos`,
  't42rjalvd2': R`⟦0⟧ ⟦1⟧ custam ⟦2⟧ reais. Pelo mesmo preço unitário, quanto custam ⟦3⟧ ⟦4⟧?`,
  '1j6drw8o3jp': R`Uma unidade custa $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ reais, então ⟦3⟧ custam $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$ reais.`,
  '2cnfx0hut7n': R`⟦0⟧ trabalhadores constroem um muro em ⟦1⟧ dias. No mesmo ritmo, em quantos dias ⟦2⟧ trabalhadores o construiriam?`,
  '1qn5tzfsu4y': R`dias`,
  '1prw35yduvi': R`É uma proporção inversa. O serviço equivale a $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ dias de trabalho, então ⟦3⟧ trabalhadores precisam de $⟦4⟧ \div ⟦5⟧ = ⟦6⟧$ dias.`,
  '294kafpc434': R`Um mapa tem escala 1 : ⟦0⟧. Duas cidades estão a ⟦1⟧ cm uma da outra no mapa. Qual é a distância real entre elas, em quilômetros?`,
  'yvvr6sez8h': R`Distância real $= ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm. Como $1 \text{ km} = 100\,000 \text{ cm}$, isso dá $⟦3⟧$ km.`,
  '1q0gzbqlk2i': R`Um carro percorre ⟦0⟧ km em ⟦1⟧ horas. Qual é a sua velocidade média?`,
  '1350ox6hh5s': R`$\text{velocidade} = \frac{\text{distância}}{\text{tempo}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ km/h.`,
  '1eoj4cx14t6': R`Um ônibus anda a ⟦0⟧ km/h durante ⟦1⟧ horas. Que distância ele percorre?`,
  '1dged1n5jn6': R`$\text{distância} = \text{velocidade} \times \text{tempo} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ km.`,
  'aw6tzi78c6': R`Quantas horas leva para percorrer ⟦0⟧ km a ⟦1⟧ km/h?`,
  '2eruzlr62qp': R`horas`,
  '278tsci6f7d': R`$\text{tempo} = \frac{\text{distância}}{\text{velocidade}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ horas.`,
});

/* Português — anos finais (expressões algébricas → funções afins) */
addT('pt', {
  // algebra-expr
  '2ngxvisbtd': R`
<p>Na expressão $5x^2 - 3xy + 7$, os <b>termos</b> são $5x^2$, $-3xy$ e $7$; os <b>coeficientes</b> são 5 e $-3$; 7 é o <b>termo independente</b>. <b>Termos semelhantes</b> têm exatamente as mesmas letras com os mesmos expoentes ($4ab$ e $-ab$ são semelhantes; $x^2$ e $x$ não são).</p>
<h3>Simplificar</h3>
<p>Junte os termos semelhantes somando seus coeficientes: $6a + 2b - 4a + 5b = 2a + 7b$.</p>
<h3>Eliminar parênteses</h3>
⟦0⟧
⟦1⟧
<h3>Produtos notáveis</h3>
⟦2⟧
<h3>Fatorar</h3>
<p>Fatorar é desenvolver ao contrário. Coloque em evidência o maior fator comum: $12x - 18 = 6(2x - 3)$.</p>
<h3>Substituir</h3>
<p>Troque cada letra pelo seu valor, usando parênteses para os negativos: se $x = -2$, então $3x^2 - x = 3(-2)^2 - (-2) = 12 + 2 = 14$.</p>
⟦3⟧`,
  '107qibv29t1': R`<p><b>Propriedade distributiva:</b> $a(b + c) = ab + ac$. Multiplique <i>cada</i> termo dentro do parêntese pelo termo de fora.</p><p><b>Dois parênteses:</b> $(x + a)(x + b) = x^2 + (a + b)x + ab$.</p>`,
  'evwoax8bsy': R`(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2`,
  'qw20z3i54y': R`<p>$(x + 4)^2 \ne x^2 + 16$. É fácil esquecer o termo do meio, $2 \cdot 4 \cdot x = 8x$.</p>`,
  '1lzyurkx6yg': R`Simplifique $⟦0⟧$.`,
  'c34hz2en6w': R`Junte os termos semelhantes: $(⟦0⟧ ⟦1⟧)⟦2⟧ + (⟦3⟧ ⟦4⟧)⟦5⟧ = ⟦6⟧$.`,
  '1u1kf05ab7b': R`Desenvolva $⟦0⟧(⟦1⟧)$.`,
  '1eys0d9g1vl': R`Multiplique cada termo do parêntese por ⟦0⟧: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ e $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$. Resultado: $⟦7⟧$.`,
  '1xv73exk1ey': R`Calcule o valor de $⟦0⟧$ para $x = ⟦1⟧$.`,
  'lz4v2y9o7u': R`Substitua usando parênteses: $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧ ⟦6⟧ ⟦7⟧ = ⟦8⟧$.`,
  '26qvjy7rwjy': R`Fatore completamente: $⟦0⟧$.`,
  '19u3t9utdnl': R`O MDC de ⟦0⟧ e ⟦1⟧ é ⟦2⟧: $⟦3⟧ = ⟦4⟧(⟦5⟧)$. Confira desenvolvendo.`,
  '1im4ugi7thh': R`Desenvolva e simplifique $(x ⟦0⟧)(x ⟦1⟧)$.`,
  '1bafsr7t5do': R`Multiplique termo a termo: $⟦0⟧ = ⟦1⟧$.`,
  '2e60a5izj9m': R`Desenvolva $(x ⟦0⟧)^2$.`,

  // linear-eq
  '2e108zyv3t2': R`
<p>Uma equação diz que duas expressões são iguais. Pense numa balança: o que você fizer de um lado, faça também do outro, e ela continua equilibrada. O objetivo é isolar a incógnita.</p>
⟦0⟧
⟦1⟧
<h3>Parênteses e frações</h3>
<p>Primeiro elimine os parênteses (ou divida os dois lados pelo número de fora). Elimine as frações multiplicando cada termo pelo denominador comum:</p>
⟦2⟧
<h3>Problemas</h3>
<ol><li>Escolha uma letra para a incógnita e diga o que ela representa.</li><li>Traduza o enunciado em uma equação.</li><li>Resolva e confira se a resposta faz sentido no problema.</li></ol>
⟦3⟧
⟦4⟧`,
  '23dcqvv32cf': R`<p>Desfaça as operações na ordem inversa usando <b>operações inversas</b>: adição ↔ subtração, multiplicação ↔ divisão.</p>`,
  '11eu1q8a3p': R`<p>Resolva $5x - 7 = 2x + 11$.</p><ol><li>Subtraia $2x$ dos dois lados: $3x - 7 = 11$.</li><li>Some 7: $3x = 18$.</li><li>Divida por 3: $x = 6$.</li></ol><p>Verificação: $5(6) - 7 = 23$ e $2(6) + 11 = 23$ ✓</p>`,
  '1wy5h98gkn6': R`<p>A soma de três inteiros consecutivos é 72. Chame-os de $n$, $n + 1$, $n + 2$: $3n + 3 = 72$, então $n = 23$. Os inteiros são 23, 24 e 25.</p>`,
  '2cslj9svu1g': R`<p>Quando um termo passa para o outro lado do sinal de igual, ele troca de sinal — porque na verdade você o está subtraindo (ou somando) dos dois lados.</p>`,
  '1655nrncx2v': R`Resolva $⟦0⟧ = ⟦1⟧$.`,
  'x5jse5nhwr': R`Digite o valor de x.`,
  '2b0gu3x69ls': R`⟦0⟧: $⟦1⟧ = ⟦2⟧$. Divida por ⟦3⟧: $x = ⟦4⟧$.`,
  '7pot73w6ik': R`Junte os termos em $x$ à esquerda e os números à direita: $⟦0⟧ = ⟦1⟧$, então $x = ⟦2⟧$.`,
  'xzdgg8oaxi': R`Resolva $⟦0⟧(x ⟦1⟧) = ⟦2⟧$.`,
  '9hdqgjqpdz': R`Divida os dois lados por ⟦0⟧: $x ⟦1⟧ = ⟦2⟧$. Então $x = ⟦3⟧ ⟦4⟧ = ⟦5⟧$.`,
  '2fru7tuxryf': R`Resolva $\frac{x}{⟦0⟧} ⟦1⟧ = ⟦2⟧$.`,
  '1f73j076fzb': R`⟦0⟧: $\frac{x}{⟦1⟧} = ⟦2⟧$. Multiplique os dois lados por ⟦3⟧: $x = ⟦4⟧$.`,
  '211mafg3dgs': R`A soma de três inteiros consecutivos é ⟦0⟧. Qual é o maior deles?`,
  '8v51kosf3f': R`A soma de três inteiros consecutivos é ⟦0⟧. Qual é o menor deles?`,
  '28zr6x8xv6r': R`Chame-os de $n$, $n + 1$, $n + 2$. Então $3n + 3 = ⟦0⟧$, logo $3n = ⟦1⟧$ e $n = ⟦2⟧$. Os inteiros são ⟦3⟧, ⟦4⟧ e ⟦5⟧.`,
  '6tcx6zie13': R`Andi`,
  'bdnp7aucau': R`Maya`,
  '111efujhij3': R`Nina`,
  '2ffyzeo9a9u': R`Omar`,
  '1o7plzvqsb1': R`Pablo`,
  'xm9ndonr7a': R`⟦0⟧ tem ⟦1⟧ anos a mais que ⟦2⟧. A soma das idades dos dois é ⟦3⟧. Quantos anos tem ⟦4⟧?`,
  '1dg7mtcy0c9': R`anos`,
  '1i0et4blzn8': R`Seja $x$ a idade de ⟦0⟧. Então $x + (x + ⟦1⟧) = ⟦2⟧$, logo $2x = ⟦3⟧$ e $x = ⟦4⟧$.`,
  '24q7bzlhbax': R`Pensei em um número, multipliquei por ⟦0⟧ e depois subtraí ⟦1⟧. O resultado foi ⟦2⟧. Em que número pensei?`,
  'h4vi0amulx': R`$⟦0⟧x - ⟦1⟧ = ⟦2⟧$, então $⟦3⟧x = ⟦4⟧$ e $x = ⟦5⟧$.`,

  // inequalities
  'x75whe4hrd': R`
<p>Uma <b>inequação</b> compara duas expressões: $\lt$ (menor que), $\gt$ (maior que), $\le$ (menor ou igual a), $\ge$ (maior ou igual a). Sua solução costuma ser todo um intervalo de números.</p>
<p>Na reta numérica, $x \gt 2$ é desenhado com uma bolinha <b>aberta</b> em 2 (o 2 não está incluído) e uma seta para a direita; $x \le 2$ usa uma bolinha <b>fechada</b> e uma seta para a esquerda.</p>
<h3>Resolvendo</h3>
<p>Resolva como uma equação — somando, subtraindo, multiplicando ou dividindo os dois lados — com uma regra a mais:</p>
⟦0⟧
<p>Por quê? $2 \lt 5$, mas multiplicando os dois lados por $-1$ obtemos $-2$ e $-5$, e $-2 \gt -5$.</p>
⟦1⟧
<h3>Inequações duplas</h3>
<p>Faça a mesma operação nas três partes: $-1 \lt 2x + 3 \le 9 \Rightarrow -4 \lt 2x \le 6 \Rightarrow -2 \lt x \le 3$. As soluções inteiras são $-1; 0; 1; 2; 3$.</p>
⟦2⟧`,
  '4uypmmfwnv': R`<p>Quando você <b>multiplica ou divide por um número negativo</b>, inverta o sinal da desigualdade.</p>$$-3x \gt 12 \;\Rightarrow\; x \lt -4$$`,
  '2g9ptainv5b': R`<p>Resolva $7 - 2x \ge 1$.</p><ol><li>Subtraia 7: $-2x \ge -6$.</li><li>Divida por $-2$ e inverta o sinal: $x \le 3$.</li></ol>`,
  'q5ww8c7swj': R`<p>"O menor inteiro com $x \gt 4$" é 5, e não 4 — uma desigualdade estrita exclui o extremo.</p>`,
  '1mxokpl5kuf': R`Resolva $⟦0⟧ ⟦1⟧ ⟦2⟧$.`,
  '1iwjn3pne9': R`⟦0⟧: $⟦1⟧ ⟦2⟧ ⟦3⟧$. Divida por ⟦4⟧ (positivo, então o sinal se mantém): $x ⟦5⟧ ⟦6⟧$.`,
  '1s1hpevc8ap': R`⟦0⟧: $⟦1⟧ ⟦2⟧ ⟦3⟧$. Divida por ⟦4⟧. Ele é <b>negativo</b>, então inverta o sinal: $x ⟦5⟧ ⟦6⟧$.`,
  'io0ae9g8yj': R`O menor inteiro maior que ⟦0⟧ é <b>⟦1⟧</b>.`,
  'civ81fo6ci': R`O menor inteiro maior ou igual a ⟦0⟧ é <b>⟦1⟧</b>.`,
  '62e1f42m8l': R`O maior inteiro menor que ⟦0⟧ é <b>⟦1⟧</b>.`,
  '1ime7hqq5cd': R`O maior inteiro menor ou igual a ⟦0⟧ é <b>⟦1⟧</b>.`,
  '2cy3ba2hfyd': R`Qual é o menor inteiro $x$ que satisfaz $⟦0⟧$?`,
  'uffp85dcny': R`Qual é o maior inteiro $x$ que satisfaz $⟦0⟧$?`,
  '33ggbvntvo': R`Resolvendo, obtemos $x ⟦0⟧ ⟦1⟧$. ⟦2⟧`,
  '116sbg7r1dd': R`Quantos inteiros $x$ satisfazem $⟦0⟧ ⟦1⟧ ⟦2⟧ ⟦3⟧ ⟦4⟧$?`,
  '17y5i2hhz2j': R`⟦0⟧ e divida por ⟦1⟧: $⟦2⟧ ⟦3⟧ x ⟦4⟧ ⟦5⟧$. Os inteiros são ⟦6⟧, então são <b>⟦7⟧</b>.`,
  'abjkjjicc6': R`todas as partes`,

  // sets
  '1upw9az6tpj': R`
<p>Um <b>conjunto</b> é uma coleção bem definida de objetos, os seus <b>elementos</b>. Escrevemos $A = \{2; 4; 6; 8\}$ e $4 \in A$ ("4 pertence a A"), $5 \notin A$. $n(A)$ é o número de elementos; aqui $n(A) = 4$. O <b>conjunto vazio</b> $\varnothing$ não tem elementos; o <b>conjunto universo</b> $U$ contém tudo o que está em discussão.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  'zdmpl6ts1e': R`Um diagrama de Venn: cada região é uma combinação diferente de "está em A" e "está em B".`,
  '142ifrt0jkt': R`Notação`,
  '14czndj1h0b': R`Exemplo com A = {1; 2; 3; 4}, B = {3; 4; 5}`,
  '17jfg6qecmz': R`interseção: nos dois`,
  '93vbzoy4wv': R`união: em pelo menos um`,
  'j83k8kg7rg': R`em A mas não em B`,
  'ul55bfe733': R`complementar: em U mas não em A`,
  '1m3czehh1lg': R`todo o resto de U`,
  '9y4djdoyyu': R`todo elemento de A está em B`,
  'w227m2d70o': R`$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$<p>Subtraímos a interseção porque ela foi contada duas vezes. Um conjunto com $n$ elementos tem $2^n$ subconjuntos (incluindo $\varnothing$ e o próprio conjunto).</p>`,
  '4thfgx5jwf': R`<p>Numa turma de 35 alunos, 20 jogam futebol, 18 jogam basquete e 8 jogam os dois. Então $n(F \cup B) = 20 + 18 - 8 = 30$ praticam pelo menos um esporte e $35 - 30 = 5$ não praticam nenhum.</p>`,
  '27eu4624ja8': R`<p>"Quantos jogam só futebol?" é $20 - 8 = 12$, e não 20. Preencha primeiro a interseção do diagrama de Venn e depois vá para fora.</p>`,
  '27zhedv4gc': R`Numa turma de ⟦0⟧ alunos, ⟦1⟧ gostam de futebol, ⟦2⟧ gostam de basquete e ⟦3⟧ gostam dos dois. Quantos alunos não gostam de nenhum dos dois esportes?`,
  '26xw5lahqxo': R`$n(F \cup B) = ⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$. Nenhum: $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,
  '1619zngy4yv': R`Num grupo, ⟦0⟧ pessoas falam inglês, ⟦1⟧ falam francês e ⟦2⟧ falam as duas línguas. Quantas falam pelo menos uma das duas?`,
  '18t2zte9r05': R`Quantos subconjuntos <b>próprios</b> $⟦0⟧$ tem?`,
  '2dvh10c76ll': R`Quantos subconjuntos $⟦0⟧$ tem?`,
  'o8q41j2x4h': R`Um conjunto com ⟦0⟧ elementos tem $2^{⟦1⟧} = ⟦2⟧$ subconjuntos; deixando de fora o próprio $A$, restam ⟦3⟧ subconjuntos próprios.`,
  '1levxnz2zxu': R`Um conjunto com ⟦0⟧ elementos tem $2^{⟦1⟧} = ⟦2⟧$ subconjuntos.`,
  'ngdtyzf3i3': R`elementos que estão nos dois conjuntos`,
  'ygni6ry4dh': R`elementos que estão em pelo menos um dos conjuntos`,
  'v15s4csij3': R`elementos de A que não estão em B`,
  '1j1pykn2kdj': R`Sejam $A = ⟦0⟧$ e $B = ⟦1⟧$. Determine $A ⟦2⟧ B$.`,
  '256hp0emm8w': R`$A ⟦0⟧ B$ contém os ⟦1⟧: $⟦2⟧$.`,
  '1vmjbk89h3x': R`$U = \{1; 2; 3; \ldots; ⟦0⟧\}$ e $A = ⟦1⟧$. Quantos elementos há em $A'$, o complementar de $A$?`,
  'fzclz65o4l': R`$A'$ contém os elementos de $U$ que não estão em $A$: $n(A') = n(U) - n(A) = ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '27rc7060yur': R`números primos`,
  '1qm9u9pg5gt': R`números pares`,
  '19ysprsc13w': R`múltiplos de 3`,
  '2bluzo1qazo': R`quadrados perfeitos`,
  '1ncphoa2uf2': R`$A$ é o conjunto dos inteiros positivos menores que ⟦0⟧ que são ⟦1⟧. Determine $n(A)$.`,
  '9yersm2gye': R`$A = ⟦0⟧$, então $n(A) = ⟦1⟧$.`,

  // linear-functions
  '1dcyn9qstbs': R`
<p>Uma <b>função afim</b> tem como gráfico uma reta. Na <b>forma reduzida</b></p>
⟦0⟧
<p>$m$ é o <b>coeficiente angular</b> (a inclinação): quanto $y$ varia quando $x$ aumenta 1. $c$ é o <b>coeficiente linear</b>, onde a reta corta o eixo $y$. Na notação de funções escrevemos $f(x) = mx + c$, então $f(3)$ significa "o valor quando $x = 3$".</p>
<h3>Coeficiente angular a partir de dois pontos</h3>
⟦1⟧
⟦2⟧
<h3>Interceptos e outras formas</h3>
<p>Faça $x = 0$ para achar onde a reta corta o eixo $y$ e $y = 0$ para onde corta o eixo $x$. Uma reta pode ser escrita $ax + by = c$; isole $y = -\frac{a}{b}x + \frac{c}{b}$ para ler o coeficiente angular. Passando por um ponto $(x_1; y_1)$ com coeficiente angular $m$: $y - y_1 = m(x - x_1)$.</p>
⟦3⟧
⟦4⟧`,
  'b6i5f4mrw8': R`y = mx + c`,
  '2debyr8clym': R`m = \frac{\text{variação vertical}}{\text{variação horizontal}} = \frac{y_2 - y_1}{x_2 - x_1}`,
  '2487xq0zh4o': R`<p>Por $(1; 2)$ e $(4; 11)$: $m = \frac{11 - 2}{4 - 1} = 3$. Substitua $(1; 2)$ em $y = 3x + c$: $2 = 3 + c$, então $c = -1$ e a reta é $y = 3x - 1$.</p>`,
  '1jy9kk0ffnl': R`<ul><li>Retas <b>paralelas</b> têm o mesmo coeficiente angular: $m_1 = m_2$.</li><li>Retas <b>perpendiculares</b> têm coeficientes angulares cujo produto é $-1$: $m_1 m_2 = -1$, então $m_2 = -\frac{1}{m_1}$.</li></ul>`,
  'mf12am34lg': R`<p>Mantenha a ordem: se usar $y_2 - y_1$ em cima, use $x_2 - x_1$ embaixo. Um coeficiente angular positivo sobe para a direita; um negativo desce.</p>`,
  'cmysd7luf4': R`Determine o coeficiente angular da reta que passa por $⟦0⟧$ e $⟦1⟧$.`,
  'bn7cydwexg': R`Dada $f(x) = ⟦0⟧$, calcule $f(⟦1⟧)$.`,
  'aaz26bx5zl': R`Em que valor de $y$ a reta $⟦0⟧$ corta o eixo $y$?`,
  '286d6a0jwny': R`Faça $x = 0$: $⟦0⟧ = ⟦1⟧$, então $y = ⟦2⟧$.`,
  '2aba0g68aq0': R`Qual é o coeficiente angular da reta $⟦0⟧$?`,
  '2cp0qhukifo': R`Isole $y$: $y = \frac{⟦0⟧x ⟦1⟧}{⟦2⟧}$. O coeficiente angular é o coeficiente de $x$: $⟦3⟧$.`,
  '9s9um0dbpj': R`Qual equação descreve a reta que passa por $⟦0⟧$ e $⟦1⟧$?`,
  '2ewjcigtyej': R`Coeficiente angular: $m = \frac{⟦0⟧ - ⟦1⟧}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. Substitua $⟦5⟧$ em $y = ⟦6⟧ + c$: $c = ⟦7⟧ - ⟦8⟧ = ⟦9⟧$.`,
  'dog47xwchb': R`Uma reta tem coeficiente angular $⟦0⟧$. Qual é o coeficiente angular de uma reta perpendicular a ela?`,
  '22x7dksxq1f': R`Os coeficientes angulares de retas perpendiculares têm produto $-1$: $m_2 = -\frac{1}{m_1} = ⟦0⟧$.`,
  '1p3mlag1dqo': R`Para qual valor de $x$ a reta $y = ⟦0⟧$ corta o eixo $x$?`,
  'v36n3a0on1': R`No eixo $x$, $y = 0$: $⟦0⟧ ⟦1⟧ = 0$, então $x = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
});

/* Português — anos finais (sistemas → sólidos) */
addT('pt', {
  // systems
  '1obgwi6un65': R`
<p>Um <b>sistema</b> de duas equações do 1º grau em $x$ e $y$ pede os valores que tornam verdadeiras <i>as duas</i> equações. No gráfico, a solução é o ponto onde as duas retas se cruzam.</p>
<h3>Substituição</h3>
⟦0⟧
<h3>Adição (eliminação)</h3>
⟦1⟧
⟦2⟧
<h3>Casos especiais</h3>
<p>Retas paralelas (mesmo coeficiente angular, coeficientes lineares diferentes) nunca se encontram: <b>não há solução</b>. Retas coincidentes dão <b>infinitas</b> soluções.</p>
<h3>Problemas</h3>
<p>Duas incógnitas precisam de duas informações. "Numa fazenda há galinhas e vacas, com 30 cabeças e 84 patas", com $c$ vacas e $h$ galinhas: $c + h = 30$ e $4c + 2h = 84$.</p>
⟦3⟧`,
  '1jftngyboyy': R`$$\begin{cases} y = 2x - 1 \\ 3x + y = 14 \end{cases}$$<p>Substitua a primeira na segunda: $3x + (2x - 1) = 14$, então $5x = 15$, $x = 3$ e $y = 2(3) - 1 = 5$. Solução: $(3; 5)$.</p>`,
  '2g9mhat3jml': R`$$\begin{cases} 2x + 3y = 12 \\ 5x - 3y = 9 \end{cases}$$<p>Some as equações para eliminar $y$: $7x = 21$, então $x = 3$. Depois, $2(3) + 3y = 12$ dá $y = 2$.</p>`,
  '2hm0wzsgn4': R`<p>Multiplique primeiro uma ou as duas equações para que uma incógnita tenha coeficientes iguais (ou opostos) e depois subtraia (ou some) para eliminá-la. Confira sempre a resposta nas <b>duas</b> equações originais.</p>`,
  '1mqyjg4cjt3': R`<p>Ao subtrair equações, subtraia <i>todos</i> os termos, inclusive os do lado direito — erros de sinal aqui causam a maioria dos enganos.</p>`,
  '2bus2hrtc7a': R`Resolva o sistema e dê o valor de $⟦0⟧$: $$\begin{cases} ⟦1⟧ = ⟦2⟧ \\ ⟦3⟧ = ⟦4⟧ \end{cases}$$`,
  'cj3nlbnytd': R`Elimine $x$: multiplique a primeira equação por ⟦0⟧ e a segunda por ⟦1⟧ e subtraia: $⟦2⟧y = ⟦3⟧$, então $y = ⟦4⟧$. Substituindo, obtemos $x = ⟦5⟧$⟦6⟧.`,
  '1v4b2kwdt1t': R`, então $x + y = ⟦0⟧$`,
  '12wz870lrmo': R`Resolva: $$\begin{cases} ⟦0⟧ = ⟦1⟧ \\ ⟦2⟧ = ⟦3⟧ \end{cases}$$`,
  '2h37f00sms': R`Digite a solução como x; y, por exemplo 3; -2.`,
  'ji19p5e9vc': R`Eliminando uma incógnita, obtemos $x = ⟦0⟧$ e $y = ⟦1⟧$. Verificação: $⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$ ✓ e $⟦7⟧(⟦8⟧) + ⟦9⟧(⟦10⟧) = ⟦11⟧$ ✓`,
  '1uhjqjwpqgq': R`Um cinema vendeu ⟦0⟧ ingressos por um total de ⟦1⟧ reais. O ingresso de adulto custa ⟦2⟧ reais e o infantil, ⟦3⟧ reais. Quantos ingressos infantis foram vendidos?`,
  '1w5sbgqln74': R`Sejam $a$ os ingressos de adulto e $c$ os infantis: $a + c = ⟦0⟧$ e $⟦1⟧a + ⟦2⟧c = ⟦3⟧$. Substitua $a = ⟦4⟧ - c$: $⟦5⟧ - ⟦6⟧c = ⟦7⟧$, então $c = ⟦8⟧$.`,
  '5gcbu3n7lh': R`Numa fazenda há galinhas e vacas. Juntas, elas têm ⟦0⟧ cabeças e ⟦1⟧ patas. Quantas vacas há?`,
  '1q9pdlsduw3': R`Numa fazenda há galinhas e vacas. Juntas, elas têm ⟦0⟧ cabeças e ⟦1⟧ patas. Quantas galinhas há?`,
  '20g4l7cyliz': R`Sejam $c$ as vacas e $h$ as galinhas: $c + h = ⟦0⟧$ e $4c + 2h = ⟦1⟧$. Subtraia o dobro da primeira equação: $2c = ⟦2⟧$, então $c = ⟦3⟧$ e $h = ⟦4⟧$.`,
  '18lm53yd624': R`Dois números somam ⟦0⟧ e a diferença entre eles é ⟦1⟧. Qual é o maior?`,
  '1juzg4bgiuw': R`Dois números somam ⟦0⟧ e a diferença entre eles é ⟦1⟧. Qual é o menor?`,
  '15xzu54of35': R`$a + b = ⟦0⟧$ e $a - b = ⟦1⟧$. Somando: $2a = ⟦2⟧$, então $a = ⟦3⟧$ e $b = ⟦4⟧$.`,

  // pythagoras
  '18dtbjhvgbb': R`
<p>Num triângulo retângulo, o lado mais longo, oposto ao ângulo reto, é a <b>hipotenusa</b> $c$. Os outros dois lados são os <b>catetos</b> $a$ e $b$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Ternos pitagóricos</h3>
<p>Vale a pena lembrar as soluções inteiras e seus múltiplos: $(3; 4; 5)$, $(5; 12; 13)$, $(8; 15; 17)$, $(7; 24; 25)$, e $(6; 8; 10)$, $(9; 12; 15)$, …</p>
<h3>Distância entre dois pontos</h3>
⟦3⟧
<h3>A recíproca</h3>
<p>Sendo $c$ o maior lado: se $a^2 + b^2 = c^2$, o triângulo é <b>retângulo</b>; se $a^2 + b^2 \gt c^2$, é <b>acutângulo</b>; se $a^2 + b^2 \lt c^2$, é <b>obtusângulo</b>.</p>
⟦4⟧`,
  '29quz32s0mq': R`$$a^2 + b^2 = c^2$$<p>Para achar a hipotenusa, some os quadrados; para achar um cateto, subtraia: $b = \sqrt{c^2 - a^2}$.</p>`,
  '266inyds4fo': R`<p>Uma escada de 10 m está apoiada numa parede, com o pé a 6 m dela. Altura alcançada: $\sqrt{10^2 - 6^2} = \sqrt{64} = 8$ m.</p>`,
  '2f1i3z4fpqs': R`<p>$\sqrt{a^2 + b^2} \ne a + b$. Com catetos 3 e 4, a hipotenusa é 5, e não 7.</p>`,
  'tzct4b0jzc': R`Um triângulo retângulo tem catetos de ⟦0⟧ cm e ⟦1⟧ cm. Quanto mede a hipotenusa?`,
  'w85jfl9xou': R`$c^2 = ⟦0⟧^2 + ⟦1⟧^2 = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$, então $c = \sqrt{⟦5⟧} = ⟦6⟧$ cm.`,
  '14oj6g8m8ly': R`A hipotenusa de um triângulo retângulo mede ⟦0⟧ m e um cateto mede ⟦1⟧ m. Quanto mede o outro cateto?`,
  'ucdvtq6bkq': R`Calcule a distância entre $⟦0⟧$ e $⟦1⟧$.`,
  '174wwwvihed': R`Uma escada de ⟦0⟧ m está apoiada numa parede vertical. O pé da escada está a ⟦1⟧ m da base da parede. Até que altura da parede a escada chega?`,
  'fb02yp437s': R`A escada é a hipotenusa: $h = \sqrt{⟦0⟧^2 - ⟦1⟧^2} = \sqrt{⟦2⟧} = ⟦3⟧$ m.`,
  '1gtgjvulgbd': R`Um triângulo retângulo tem catetos de ⟦0⟧ cm e ⟦1⟧ cm. Calcule a hipotenusa, arredondada a 2 casas decimais.`,
  '1cost2rf2x0': R`$c = \sqrt{⟦0⟧^2 + ⟦1⟧^2} = \sqrt{⟦2⟧} \approx ⟦3⟧$ cm.`,
  '14ejxhzoxmd': R`Triângulo retângulo`,
  '1s09bctuu2d': R`retângulo`,
  '1fk5t91if9w': R`Triângulo acutângulo`,
  '7ds33wq0ok': R`acutângulo`,
  '1kp4g4kchcj': R`Triângulo obtusângulo`,
  'imjds8cff1': R`obtusângulo`,
  'fvjprzss2k': R`Um triângulo tem lados ⟦0⟧. Que tipo de triângulo é?`,
  '5pal2wak00': R`Compare com o maior lado, ⟦0⟧: $⟦1⟧^2 + ⟦2⟧^2 = ⟦3⟧$ e $⟦4⟧^2 = ⟦5⟧$. Como $⟦6⟧ ⟦7⟧ ⟦8⟧$, o triângulo é <b>⟦9⟧</b>.`,

  // circles
  '162uvssoo3s': R`
⟦0⟧
<p>A razão entre o comprimento de qualquer circunferência e seu diâmetro é sempre o mesmo número, $\pi \approx 3{,}14159\ldots$ (muitas vezes aproximado por $3{,}14$ ou $\frac{22}{7}$).</p>
⟦1⟧
⟦2⟧
<h3>Arcos e setores</h3>
<p>Um setor de ângulo central $\theta$ é a fração $\frac{\theta}{360^\circ}$ do círculo inteiro:</p>
⟦3⟧
<h3>Ângulos na circunferência</h3>
<ul><li>O ângulo central é o <b>dobro</b> do ângulo inscrito que determina o mesmo arco.</li><li>Um ângulo inscrito numa semicircunferência mede $90^\circ$.</li><li>A tangente é perpendicular ao raio no ponto de tangência.</li></ul>
⟦4⟧`,
  '20wibo4oznt': R`Elementos de uma circunferência. O diâmetro é o dobro do raio: d = 2r.`,
  '1y041ovnv67': R`<p>Raio 5 cm: $C = 2\pi(5) = 10\pi \approx 31{,}4$ cm e $A = \pi(5)^2 = 25\pi \approx 78{,}5$ cm². Deixar a resposta "em função de $\pi$" a mantém exata.</p>`,
  '1ljhd2tb7ca': R`\text{comprimento do arco} = \frac{\theta}{360^\circ} \times 2\pi r \qquad \text{área do setor} = \frac{\theta}{360^\circ} \times \pi r^2`,
  '1aglezoi0gp': R`<p>Veja se foi dado o raio ou o diâmetro. Usar $d$ em $\pi r^2$ deixa a área quatro vezes maior.</p>`,
  '1iocjvynzqe': R`Usando $\pi \approx 3{,}14$, calcule o comprimento de uma circunferência de diâmetro ⟦0⟧ cm.`,
  '18sb05q1pm7': R`Usando $\pi \approx 3{,}14$, calcule o comprimento de uma circunferência de raio ⟦0⟧ cm.`,
  'upb5nulrwg': R`$C = ⟦0⟧ = ⟦1⟧$ cm.`,
  '143d0xflci4': R`\pi d = 3{,}14 \times ⟦0⟧`,
  '25yf5bhyvhn': R`2\pi r = 2 \times 3{,}14 \times ⟦0⟧`,
  '1stzke7qj3q': R`Usando $\pi \approx \frac{22}{7}$, calcule o comprimento de uma circunferência de raio ⟦0⟧ cm.`,
  'vghbcaja6w': R`$C = 2\pi r = 2 \times \frac{22}{7} \times ⟦0⟧ = ⟦1⟧$ cm.`,
  '91md2imk84': R`Calcule a área de um círculo de diâmetro ⟦0⟧ cm. Deixe a resposta em função de $\pi$.`,
  '6f1a511ku9': R`Calcule a área de um círculo de raio ⟦0⟧ cm. Deixe a resposta em função de $\pi$.`,
  'ctkfkfiuaj': R`⟦0⟧$A = \pi r^2 = \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1uvm4lzorf9': R`O raio é a metade do diâmetro: ⟦0⟧ cm. `,
  '2et0owexep4': R`Um setor tem raio ⟦0⟧ cm e ângulo central de $⟦1⟧^\circ$. Calcule o comprimento do arco em função de $\pi$.`,
  '1fpgoxe9d0': R`Arco $= \frac{⟦0⟧}{360} \times 2\pi \times ⟦1⟧ = ⟦2⟧$ cm.`,
  '72i5kpinty': R`Um setor tem raio ⟦0⟧ cm e ângulo central de $⟦1⟧^\circ$. Calcule sua área em função de $\pi$.`,
  '1ayxkyrhaid': R`Área $= \frac{⟦0⟧}{360} \times \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1fzoa3xapl2': R`Uma circunferência tem comprimento $⟦0⟧$ cm. Calcule a área do círculo em função de $\pi$.`,
  '22u3ive551m': R`$2\pi r = ⟦0⟧$ dá $r = ⟦1⟧$. Então $A = \pi r^2 = ⟦2⟧$ cm².`,
  '1rcge82c97m': R`Um ângulo inscrito numa circunferência mede $⟦0⟧^\circ$. Quanto mede o ângulo central que determina o mesmo arco?`,
  '10ccm4ku9vc': R`O ângulo central é o dobro do inscrito: $2 \times ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  '1ak5mj5jm7n': R`Um ângulo central de uma circunferência mede $⟦0⟧^\circ$. Quanto mede um ângulo inscrito que determina o mesmo arco?`,
  'kfe0atvapi': R`O ângulo inscrito é a metade do central: $\frac{⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // solids
  '57zv1tsefg': R`
<p>Um <b>prisma</b> tem a mesma seção transversal em todo o seu comprimento, então seu volume é simplesmente a área dessa seção vezes o comprimento. Uma pirâmide ou um cone que caiba exatamente dentro dele tem exatamente um terço desse volume.</p>
⟦0⟧
<p>No cone, $s$ é a <b>geratriz</b>; por Pitágoras, $s = \sqrt{r^2 + h^2}$.</p>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '1uywbz6o84t': R`Sólido`,
  'alc1a0j1b0': R`Volume`,
  'bt7ak3o2ct': R`Área total`,
  'm6y2tibz7j': R`Prisma`,
  '3d3lt4gyiq': R`$A_{\text{base}} \times h$`,
  '2e5o3mkaw4p': R`soma de todas as faces`,
  '17avl8a1nf0': R`Cilindro`,
  'w68av9so54': R`Pirâmide`,
  '1xyfnhsvdp5': R`$\frac{1}{3} A_{\text{base}} \times h$`,
  '1u5rq973ap9': R`base + triângulos`,
  '40atij69zq': R`Cone`,
  '1cebx8i383a': R`Esfera`,
  'u0gc3phvmz': R`<p>Um cilindro com $r = 3$ cm e $h = 10$ cm:</p><p>$V = \pi (3)^2 (10) = 90\pi$ cm³ $\approx 282{,}7$ cm³. &nbsp; $A_T = 2\pi(9) + 2\pi(3)(10) = 18\pi + 60\pi = 78\pi$ cm².</p>`,
  '706fqlfv6n': R`<p>A superfície lateral de um cilindro se desenrola num retângulo: um lado é a altura $h$ e o outro é o comprimento da circunferência $2\pi r$. É daí que vem $2\pi r h$.</p>`,
  '20ndnd7mfh9': R`<p>Hemisférios: metade do volume da esfera, mas a área total é $2\pi r^2$ (parte curva) $+ \pi r^2$ (círculo plano) $= 3\pi r^2$.</p>`,
  '6nduvxh56u': R`Calcule o volume de um cilindro de raio ⟦0⟧ cm e altura ⟦1⟧ cm, em função de $\pi$.`,
  '1u7xsdtlko1': R`$V = \pi r^2 h = \pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '1ao9a1zkfz0': R`Calcule o volume de um cone de raio ⟦0⟧ cm e altura ⟦1⟧ cm, em função de $\pi$.`,
  '11qtlcks0z2': R`$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  'qcz5afk27t': R`Calcule o volume de uma esfera de raio ⟦0⟧ cm, em função de $\pi$.`,
  '1a5wzmqqnbb': R`$V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi \times ⟦0⟧ = ⟦1⟧$ cm³.`,
  '2boy4rshpla': R`Calcule a área da superfície de uma esfera de raio ⟦0⟧ cm, em função de $\pi$.`,
  'myifdpmpki': R`$A = 4\pi r^2 = 4\pi \times ⟦0⟧ = ⟦1⟧$ cm².`,
  '225sd035ctc': R`Calcule a área total de um cilindro fechado de raio ⟦0⟧ cm e altura ⟦1⟧ cm, em função de $\pi$.`,
  'e5stvcnm4w': R`$A_T = 2\pi r^2 + 2\pi r h = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'ud0ddpzcpo': R`Um cone tem raio ⟦0⟧ cm e altura ⟦1⟧ cm. Quanto mede sua geratriz?`,
  '1ds61tt8krc': R`$s = \sqrt{r^2 + h^2} = \sqrt{⟦0⟧ + ⟦1⟧} = ⟦2⟧$ cm.`,
  '1xg851dcel': R`Um cone tem raio ⟦0⟧ cm e geratriz ⟦1⟧ cm. Calcule sua área total em função de $\pi$.`,
  '1l881dmx8vq': R`$A_T = \pi r^2 + \pi r s = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'fb33rdkq1e': R`Uma pirâmide tem base quadrada de lado ⟦0⟧ cm e altura de ⟦1⟧ cm. Qual é o seu volume?`,
  '113p07j0igk': R`$V = \frac{1}{3} \times \text{base} \times h = \frac{1}{3} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '15qifiaqosu': R`Um prisma triangular tem como seção transversal um triângulo de base ⟦0⟧ cm e altura ⟦1⟧ cm. O prisma tem ⟦2⟧ cm de comprimento. Qual é o seu volume?`,
  '2b2ytzrzz4n': R`Área da seção $= \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm². Volume $= ⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ cm³.`,
});

/* Português (Brasil) — Ensino Fundamental II (estatística → semelhança) */
addT('pt', {
  // statistics-jh
  '1gkv2j833s3': R`
<p>Uma <b>medida de tendência central</b> resume um conjunto de dados com um valor típico; uma <b>medida de dispersão</b> indica o quanto os valores estão espalhados.</p>
⟦0⟧
<h3>Média a partir de uma tabela de frequências</h3>
⟦1⟧
⟦2⟧
<h3>Raciocinando de trás para frente</h3>
⟦3⟧
<p>Com uma quantidade par de valores, a mediana é a média dos dois valores centrais.</p>
⟦4⟧`,
  'zy4hmws2f9': R`Indicada quando…`,
  'j0p0vvrwxf': R`os dados não têm valores extremos (outliers)`,
  '2ajydntyvld': R`os dados são assimétricos ou têm outliers — ex.: preços de imóveis`,
  '1d4nmjapkp8': R`os dados são categóricos — ex.: cor favorita`,
  '12wlbpcje5l': R`uma ideia rápida da dispersão (mas sensível a outliers)`,
  '21qgjzyanwp': R`⟦0⟧<p>$\sum f = 20$ e $\sum fx = 3 + 10 + 24 + 16 = 53$, então a média é $\frac{53}{20} = 2{,}65$. A moda é 3 (maior frequência). A mediana é a média do 10º e do 11º valores — ambos 3 —, então a mediana é 3.</p>`,
  '1j97et5mff': R`Pontuação $x$`,
  'gm8elt7xjs': R`Frequência $f$`,
  '1rnz21lc9g1': R`<p>$\text{total} = \text{média} \times \text{quantidade}$. Se 5 números têm média 12, o total deles é 60 — então, se quatro deles somam 47, o quinto é 13.</p>`,
  '1ksrbyf4x6z': R`<p>Em uma tabela de frequências, divida $\sum fx$ pela frequência total $\sum f$, e não pelo número de colunas.</p>`,
  '15d8a2aae5e': R`Em ordem: ⟦0⟧. São ⟦1⟧ valores, então a mediana é a média dos dois centrais: $\frac{⟦2⟧ + ⟦3⟧}{2} = ⟦4⟧$.`,
  '3npude2io3': R`Calcule a pontuação média a partir da tabela de frequências. Arredonde para 2 casas decimais, se necessário.⟦0⟧`,
  '1kkkmzzlb29': R`Pontuação`,
  'nph0ner2hr': R`Frequência`,
  'c68abpawgf': R`$\sum f = ⟦0⟧$ e $\sum fx = ⟦1⟧ = ⟦2⟧$. Média $= \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  'aevfr1f0xw': R`A média de cinco números é ⟦0⟧. Quatro deles são ⟦1⟧. Qual é o quinto número?`,
  '2ddgia0tp1j': R`Os cinco números somam $5 \times ⟦0⟧ = ⟦1⟧$. Os quatro conhecidos somam ⟦2⟧, então o quinto é $⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '5e5w5tzrl1': R`Depois de ⟦0⟧ provas, a nota média de Pedro é ⟦1⟧. Depois de mais uma prova, a média dele passa a ser ⟦2⟧. Quanto ele tirou na última prova?`,
  '23zlk0k5oq4': R`Total antes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Total depois: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Última nota $= ⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1tdgm1yju18': R`Qual é a moda dos dados desta tabela?⟦0⟧`,
  '2cqua50kina': R`Número de livros lidos`,
  'ypw9p4zjlu': R`Número de alunos`,
  '22iugjzjcbh': R`A moda é o valor com a maior frequência. ⟦0⟧ tem frequência ⟦1⟧, a maior.`,

  // probability-jh
  '1s529z7x9mx': R`
<p>Um <b>experimento</b> (lançar um dado, tirar uma carta) tem <b>resultados</b> possíveis. O conjunto de todos os resultados é o <b>espaço amostral</b> $S$; um <b>evento</b> $E$ é um conjunto de resultados. Quando todos os resultados são igualmente prováveis:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Dois dados</h3>
<p>Lançar dois dados dá $6 \times 6 = 36$ resultados igualmente prováveis. A soma 7 ocorre de 6 maneiras — (1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1) —, então $P(\text{soma} = 7) = \frac{6}{36} = \frac{1}{6}$. Em geral, o número de maneiras de obter a soma $s$ é $6 - |s - 7|$.</p>
<h3>Um baralho</h3>
<p>52 cartas: 4 naipes (♠ ♣ pretos, ♥ ♦ vermelhos) de 13 valores (A, 2–10, J, Q, K). Há 12 figuras (J, Q, K).</p>
⟦3⟧`,
  '2zwk9a7b7o': R`<ul><li>$0 \le P(E) \le 1$: 0 significa impossível e 1 significa certo.</li><li><b>Complementar:</b> $P(\text{não } E) = 1 - P(E)$.</li><li><b>Frequência esperada</b> em $n$ tentativas $= P(E) \times n$.</li></ul>`,
  'sp7ttiactv': R`<p>Um saco tem 3 bolinhas de gude vermelhas, 5 azuis e 2 verdes. $P(\text{azul}) = \frac{5}{10} = \frac{1}{2}$ e $P(\text{não verde}) = 1 - \frac{2}{10} = \frac{4}{5}$.</p>`,
  '1quguehv908': R`<p>A probabilidade experimental (de tentativas reais) se aproxima da probabilidade teórica à medida que o número de tentativas aumenta — mas raramente coincide exatamente.</p>`,
  '2jkb08f2dg': R`vermelha`,
  '1a43z74k2oy': R`azul`,
  '1719de5b71t': R`verde`,
  '7kkile34lr': R`Um saco contém ⟦0⟧ bolas vermelhas, ⟦1⟧ azuis e ⟦2⟧ verdes. Uma bola é retirada ao acaso. Qual é a probabilidade de ela ser ⟦3⟧?`,
  '26hhfp8us6o': R`Digite uma fração como 2/7.`,
  '34i4syx68n': R`$P(\text{⟦0⟧}) = \frac{\text{bolas de cor ⟦1⟧}}{\text{total de bolas}} = \frac{⟦2⟧}{⟦3⟧}⟦4⟧$.`,
  '17fighwohx4': R`Dois dados honestos são lançados. Qual é a probabilidade de a soma ser ⟦0⟧?`,
  '1zfipt2db8x': R`Digite uma fração como 5/36.`,
  '1xyubi5yqtq': R`Há 36 resultados igualmente prováveis, e a soma ⟦0⟧ ocorre em ⟦1⟧ deles. $P = \frac{⟦2⟧}{36}⟦3⟧$.`,
  '2cy3xut293b': R`chover amanhã`,
  'lo67u7j66d': R`um ônibus atrasar`,
  '2dk6yd5lp5u': R`uma semente germinar`,
  '1cur3c8r655': R`um time vencer a próxima partida`,
  '9jb4uxp8mo': R`A probabilidade de ⟦0⟧ é ⟦1⟧. Qual é a probabilidade de isso <b>não</b> acontecer?`,
  '1459jtc2vnw': R`$P(\text{não } E) = 1 - P(E) = 1 - ⟦0⟧ = ⟦1⟧$.`,
  '1m5z09mwtae': R`um seis`,
  '2goj7cvo26g': R`um número par`,
  '16jy1hpm8uh': R`um número maior que 4`,
  '9psh7q2zqv': R`um número primo`,
  'd1r3jk3fi5': R`um múltiplo de 3`,
  'pkpby3rsiu': R`Um dado honesto é lançado ⟦0⟧ vezes. Quantas vezes você espera tirar ⟦1⟧?`,
  '1m2zbe7u1ww': R`$P = \frac{⟦0⟧}{6}$, então o número esperado é $\frac{⟦1⟧}{6} \times ⟦2⟧ = ⟦3⟧$.`,
  '1eipzgu94sk': R`um número menor que 3`,
  '1i6lu5hyvob': R`um divisor de 6`,
  'uzgsjc3e5d': R`um número maior que 1`,
  '1u2i7hb5c5n': R`um quadrado perfeito`,
  'rjfh61539i': R`Um dado honesto de seis faces é lançado. Qual é a probabilidade de tirar ⟦0⟧?`,
  '2a86ul8z5e6': R`Digite uma fração como 1/3.`,
  'wfhq8l2euu': R`Resultados favoráveis: ⟦0⟧ — ou seja, ⟦1⟧ de 6. $P = \frac{⟦2⟧}{6}⟦3⟧$.`,
  '1s7i7y0snm7': R`uma carta de copas`,
  '1tvznlpjqb2': R`13 cartas de copas`,
  '19nwtn8arbx': R`um rei`,
  'gy4518kzl1': R`4 reis`,
  '207cuaz509r': R`uma carta vermelha`,
  '1qvhvp7e8k8': R`26 cartas vermelhas`,
  '1sakrbqn5x6': R`um rei vermelho`,
  'c3s60n5sor': R`2 reis vermelhos`,
  '1671qt85c28': R`uma figura (J, Q ou K)`,
  '29hha1vs7b6': R`12 figuras`,
  'pavjeefc8d': R`um ás ou um rei`,
  '2cy5fpo3esg': R`4 ases e 4 reis`,
  '1rpplt11syb': R`um 7 preto`,
  '13zshtnr8nq': R`o 7 de espadas e o 7 de paus`,
  '71sptgg3ka': R`Uma carta é retirada ao acaso de um baralho comum de 52 cartas. Qual é a probabilidade de ser ⟦0⟧?`,
  '1wkkibr9nk7': R`Digite uma fração como 1/13.`,
  '23r35ol6pkt': R`São ⟦0⟧ entre as 52 cartas: $P = \frac{⟦1⟧}{52} = ⟦2⟧$.`,

  // social-arith
  '28qmmxd3nnk': R`
<p>Questões de dinheiro do dia a dia são, no fundo, questões de porcentagem.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Desconto e imposto</h3>
<p>Aplique as porcentagens uma após a outra: um desconto de 20% e depois um imposto de 10% sobre 150 reais dão $150 \times 0{,}8 \times 1{,}1 = 132$ reais.</p>
<h3>Juros simples</h3>
⟦3⟧
<p>1 500 reais aplicados a 6% ao ano durante 3 anos rendem $1\,500 \times 0{,}06 \times 3 = 270$ reais; o total chega a 1 770 reais. Para meses, use $t = \frac{\text{meses}}{12}$.</p>
<h3>Peso bruto, tara e peso líquido</h3>
<p><b>Bruto</b> = peso total; <b>tara</b> = peso da embalagem; <b>líquido</b> = bruto − tara. Um saco de 50 kg com tara de 2% tem peso líquido de $50 \times 0{,}98 = 49$ kg.</p>
⟦4⟧`,
  '104nn3vx4at': R`Termo`,
  '1mb9fntmked': R`Preço de custo (PC)`,
  '12bh5c74j0l': R`o que o vendedor pagou`,
  'p4v89gjsks': R`Preço de venda (PV)`,
  'ixzwuufb5k': R`o que o comprador paga`,
  '2dj314tvgil': R`Lucro`,
  '1b41ckd5mix': R`PV − PC (quando PV > PC)`,
  '8exalr20f0': R`Prejuízo`,
  '2acjs1v6cv9': R`PC − PV (quando PV < PC)`,
  '8cl7h0h70q': R`$$\text{lucro \%} = \frac{\text{lucro}}{\text{preço de custo}} \times 100\% \qquad\qquad \text{PV} = \text{PC} \times \left(1 + \frac{p}{100}\right)$$`,
  '2251p3nt91s': R`<p>Um celular comprado por 400 reais é vendido por 460 reais. Lucro $= 60$, então o lucro percentual é $\frac{60}{400} \times 100\% = 15\%$.</p>`,
  '16966flk4n0': R`J = C \times i \times t \qquad \text{(capital} \times \text{taxa anual} \times \text{anos)}`,
  '8dx80n4t33': R`<p>O lucro percentual é sempre calculado sobre o preço de <b>custo</b>, não sobre o preço de venda.</p>`,
  'zmoygr0th3': R`Um comerciante compra uma bicicleta por ⟦0⟧ reais e a vende por ⟦1⟧ reais. Qual é o lucro percentual?`,
  'hr5vewyo1d': R`Um comerciante compra uma bicicleta por ⟦0⟧ reais e a vende por ⟦1⟧ reais. Qual é o prejuízo percentual?`,
  'w2dibc5j0k': R`⟦0⟧ $= ⟦1⟧$. Porcentagem $= \frac{⟦2⟧}{⟦3⟧} \times 100\% = ⟦4⟧\%$.`,
  '1mg15vgrrsq': R`Uma loja compra uma luminária por ⟦0⟧ reais e quer ter ⟦1⟧% de lucro. Qual deve ser o preço de venda?`,
  '1znpgx1zz3k': R`$\text{PV} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ reais.`,
  '1qynlkevtzf': R`por 1 ano`,
  '265o2h9psz8': R`por ⟦0⟧ anos`,
  'z7uavwhcj6': R`⟦0⟧ reais são aplicados a juros simples de ⟦1⟧% ao ano ⟦2⟧. Qual é o montante no final?`,
  '158pfsp5k1j': R`⟦0⟧ reais são aplicados a juros simples de ⟦1⟧% ao ano ⟦2⟧. Quanto rendem de juros?`,
  '35ywrebltu': R`$J = C i t = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ reais.⟦4⟧`,
  '26yfs6y8h5o': R` Montante $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ reais.`,
  '11eyk8p87p8': R`Um par de sapatos custa ⟦0⟧ reais. Há um desconto de ⟦1⟧% e, depois, um imposto de ⟦2⟧% é acrescentado ao preço com desconto. Qual é o preço final?`,
  '1ebjr2t3r5v': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ e depois $\times ⟦3⟧ = ⟦4⟧$ reais.`,
  'j3cdki7hbr': R`Um saco de arroz tem peso bruto de ⟦0⟧ kg. A tara é ⟦1⟧% do peso bruto. Qual é o peso líquido?`,
  '91s53sp2z': R`Tara $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$ kg. Líquido $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ kg.`,
  '1kvwyquko78': R`Um relógio é vendido por ⟦0⟧ reais com lucro de ⟦1⟧%. Qual era o preço de custo?`,
  'g36e4lpvm4': R`$\text{PV} = \text{PC} \times ⟦0⟧$, então $\text{PC} = \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$ reais. (Tirar ⟦4⟧% do preço de venda estaria errado.)`,

  // patterns
  '2bajjwmyt59': R`
<p>Uma <b>sequência</b> é uma lista ordenada de números chamados <b>termos</b>. Descobrir a regra permite continuar o padrão ou ir direto a qualquer termo.</p>
<h3>Progressões aritméticas</h3>
<p>Soma-se sempre o mesmo número $d$ (a <b>razão</b>): 5; 8; 11; 14; … tem $d = 3$.</p>
⟦0⟧
<h3>Progressões geométricas</h3>
<p>Cada termo é multiplicado pela mesma <b>razão</b> $r$: 3; 6; 12; 24; … ($r = 2$); 80; 40; 20; … ($r = \frac{1}{2}$).</p>
<h3>Sequências especiais</h3>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '11v4eu8405a': R`$$u_n = a + (n - 1)d$$<p>em que $a$ é o primeiro termo. Para 5; 8; 11; …: $u_n = 5 + 3(n - 1) = 3n + 2$, então $u_{50} = 152$.</p>`,
  '7gqysfvinh': R`Nome`,
  'mwgm16sn11': R`Termos`,
  '24evmkf6e6r': R`Termo geral`,
  'xt4guw3yrj': R`Números quadrados`,
  'l2hgs4w3i2': R`Números cúbicos`,
  'lutv3xfjp0': R`Números triangulares`,
  '2g9qzgo3ylf': R`Fibonacci`,
  'vjhbyyj0jc': R`cada termo = soma dos dois anteriores`,
  'k4xtnyrrtm': R`<p>Qual termo de 7; 11; 15; … é igual a 95? $u_n = 4n + 3 = 95$, então $n = 23$: é o 23º termo.</p>`,
  'sceh7pz7y9': R`<p>O coeficiente de $n$ na fórmula do termo geral é a razão — não o primeiro termo.</p>`,
  '73l5vk6u1l': R`Qual é o próximo termo da sequência ⟦0⟧; …?`,
  '273m8h7rqm0': R`A razão é ⟦0⟧, então o próximo termo é $⟦1⟧ ⟦2⟧ = ⟦3⟧$.`,
  'e7rskm3cuq': R`Encontre o termo $u_{⟦0⟧}$ da sequência ⟦1⟧; …`,
  '1zj05x9ucbg': R`Qual fórmula dá o termo geral de ⟦0⟧; …?`,
  '10p4kmsov0h': R`Os termos aumentam de ⟦0⟧ em ⟦1⟧, então a fórmula começa com $⟦2⟧n$. Para $n = 1$, $⟦2⟧(1) + c = ⟦3⟧$ dá $c = ⟦4⟧$: $u_n = ⟦5⟧$.`,
  'kmsujsbacm': R`Cada termo é multiplicado por ⟦0⟧, então o próximo termo é $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '1tqcntwvtfu': R`Qual termo da sequência ⟦0⟧; … é igual a ⟦1⟧?`,
  '1i1kg83c5xj': R`$u_n = ⟦0⟧ + (n - 1) \times ⟦1⟧ = ⟦2⟧$, então $(n - 1) \times ⟦3⟧ = ⟦4⟧$, $n - 1 = ⟦5⟧$ e $n = ⟦6⟧$.`,
  '1ru4k9e3ubn': R`Os números triangulares são 1; 3; 6; 10; 15; … Encontre o número triangular $T_{⟦0⟧}$.`,
  '1kom1e2tuqt': R`A sequência 1; 4; 9; 16; 25; … continua. Encontre o termo $u_{⟦0⟧}$.`,
  '29es9j5bth6': R`São os números quadrados, $u_n = n^2$, então $u_{⟦0⟧} = ⟦1⟧$.`,
  '1jl1l3ooto1': R`Em uma sequência, cada termo a partir do terceiro é a soma dos dois anteriores. Os dois primeiros termos são ⟦0⟧ e ⟦1⟧. Qual é o 7º termo?`,
  'o3oiu9pprw': R`Os termos são ⟦0⟧. O 7º termo é ⟦1⟧.`,

  // similarity
  '165d9zkx0zx': R`
<p>Uma <b>transformação</b> move uma figura ou muda o seu tamanho. Em translações, reflexões e rotações a imagem é <b>congruente</b> (mesma forma e tamanho); em uma homotetia ela é <b>semelhante</b> (mesma forma, tamanho diferente).</p>
⟦0⟧
<h3>Figuras semelhantes</h3>
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '8do2aamvnn': R`Transformação`,
  'jmpbrf5c1s': R`Regra para um ponto (x; y)`,
  '2b0j70wot2h': R`Translação por $\binom{a}{b}$`,
  '53ydgkbdv': R`Reflexão em relação ao eixo $x$`,
  '1y0gzwc8g5l': R`Reflexão em relação ao eixo $y$`,
  '2c65j86o1iv': R`Reflexão em relação a $y = x$`,
  '2az2vuuewqg': R`Rotação de $90^\circ$ no sentido anti-horário em torno de O`,
  '1bwu4k8y4fc': R`Rotação de $180^\circ$ em torno de O`,
  '24she08dmbo': R`Rotação de $90^\circ$ no sentido horário em torno de O`,
  '1kfzbnkpyo2': R`Homotetia de razão $k$ e centro O`,
  '1u5zflf6nl6': R`<p>Em figuras semelhantes, os ângulos correspondentes são iguais e os lados correspondentes estão na mesma razão, a <b>razão de semelhança</b> $k$. As áreas ficam multiplicadas por $k^2$ e os volumes por $k^3$.</p>`,
  'f54rct691f': R`<p>Os triângulos $ABC$ e $PQR$ são semelhantes com $AB = 6$, $BC = 8$ e $PQ = 9$. Razão $k = \frac{9}{6} = 1{,}5$, então $QR = 8 \times 1{,}5 = 12$. Se o triângulo $ABC$ tem área 24, o triângulo $PQR$ tem área $24 \times 1{,}5^2 = 54$.</p>`,
  '111he4idz8g': R`<p>Um poste de 1,5 m projeta uma sombra de 2 m no mesmo instante em que uma árvore projeta uma sombra de 12 m. Os triângulos são semelhantes: $\frac{h}{12} = \frac{1{,}5}{2}$, então $h = 9$ m.</p>`,
  '1ag7324gyvl': R`<p>Lados semelhantes diferem por um <b>fator multiplicativo</b>, não por uma quantidade fixa. Se um lado passa de 6 para 9, um lado de 8 passa para 12, e não para 11.</p>`,
  'grtkq2tz50': R`uma reflexão em relação ao eixo $x$`,
  '2b146agxtl5': R`uma reflexão em relação ao eixo $y$`,
  '12ufv3upbre': R`uma reflexão em relação à reta $y = x$`,
  '1efbacf7mos': R`uma rotação de $90^\circ$ no sentido anti-horário em torno da origem`,
  '2ettdugdvou': R`uma rotação de $180^\circ$ em torno da origem`,
  'y4ewc1f7tf': R`uma rotação de $90^\circ$ no sentido horário em torno da origem`,
  '147bj1yruac': R`uma translação por $⟦0⟧$`,
  'q8g4eu6egm': R`O ponto $P⟦0⟧$ é transformado por ⟦1⟧. Quais são as coordenadas da imagem?`,
  'px6a8rprin': R`Digite as coordenadas como x; y.`,
  '199eqilp9e9': R`A regra é ⟦0⟧, então a imagem é $⟦1⟧$.`,
  '141nr4eramb': R`Os triângulos $ABC$ e $PQR$ são semelhantes, com $AB \leftrightarrow PQ$, $BC \leftrightarrow QR$ e $CA \leftrightarrow RP$. Sabendo que $AB = ⟦0⟧$, $BC = ⟦1⟧$, $CA = ⟦2⟧$ e $⟦3⟧ = ⟦4⟧$, encontre $⟦5⟧$.`,
  '1kimjtrunz7': R`Razão de semelhança $k = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$. Então $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  'bj1shpkj9u': R`Dois sólidos semelhantes têm razão de semelhança ⟦0⟧. O menor tem volume de ⟦1⟧ cm³. Qual é o volume do maior?`,
  'ld6jtpizu2': R`Os volumes ficam multiplicados por $k^3 = ⟦0⟧$: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '11duhh78e55': R`Duas figuras semelhantes têm razão de semelhança ⟦0⟧. A menor tem área de ⟦1⟧ cm². Qual é a área da maior?`,
  'hfezjn5dnm': R`As áreas ficam multiplicadas por $k^2 = ⟦0⟧$: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '2eojcpktunl': R`Uma vara de ⟦0⟧ m projeta uma sombra de ⟦1⟧ m. No mesmo instante, uma árvore projeta uma sombra de ⟦2⟧ m. Qual é a altura da árvore?`,
  '196fpe0msid': R`Os triângulos são semelhantes: $\frac{h}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$, então $h = ⟦3⟧ \times \frac{⟦4⟧}{⟦5⟧} = ⟦6⟧$ m.`,
  '1iy8baeb4jd': R`O ponto $⟦0⟧$ sofre uma homotetia de centro na origem e razão ⟦1⟧. Onde fica a sua imagem?`,
  '1fyw56nqicr': R`Multiplique as duas coordenadas por ⟦0⟧: $(⟦1⟧ \times ⟦2⟧;\; ⟦3⟧ \times ⟦4⟧) = ⟦5⟧$.`,
});

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

/* Português (Brasil) — Ensino Médio (sequências → resolução de triângulos) */
addT('pt', {
  // sequences
  '214j3dem4vw': R`
⟦0⟧
<p>Aqui $a$ é o primeiro termo e $l$ o último.</p>
⟦1⟧
⟦2⟧
<h3>Séries geométricas infinitas</h3>
⟦3⟧
<p>Exemplo: $8 + 4 + 2 + 1 + \cdots = \frac{8}{1 - \frac{1}{2}} = 16$.</p>
<h3>Notação de somatório</h3>
<p>$\displaystyle\sum_{k=1}^{n} f(k)$ significa $f(1) + f(2) + \cdots + f(n)$. Fatos úteis: $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ e $\sum_{k=1}^{n} c = cn$.</p>
⟦4⟧`,
  'lwukzez7ke': R`Aritmética (PA)`,
  '1atqzl7ltey': R`Geométrica (PG)`,
  'zs186mkwh5': R`soma-se $d$ a cada vez`,
  '160nuilyero': R`multiplica-se por $r$ a cada vez`,
  '99dr6iy4ys': R`Soma de n termos`,
  '1yzmu3p7b4v': R`<p>A soma dos 20 primeiros termos de $3; 7; 11; \ldots$ é $S_{20} = \frac{20}{2}(2 \cdot 3 + 19 \cdot 4) = 10 \times 82 = 820$.</p>`,
  '8pkxhjbkfd': R`<p>Numa PA, $u_4 = 17$ e $u_9 = 42$. Cinco passos de $d$ os separam, então $5d = 25$, $d = 5$ e $a = 17 - 3 \times 5 = 2$.</p>`,
  '3zsr22exdg': R`<p>Se $|r| \lt 1$, os termos diminuem rápido o bastante para a soma se estabilizar num valor finito:</p>$$S_\infty = \frac{a}{1 - r}$$<p>Se $|r| \ge 1$, a série não tem soma finita.</p>`,
  '22swm7le3e': R`<p>Entre $u_p$ e $u_q$ há $q - p$ passos, não $q - p + 1$.</p>`,
  'v83xyier66': R`Numa progressão aritmética, $u_{⟦0⟧} = ⟦1⟧$ e $u_{⟦2⟧} = ⟦3⟧$. Encontre $u_{⟦4⟧}$.`,
  '1vrn63sndie': R`$(⟦0⟧ - ⟦1⟧)d = ⟦2⟧$, então $d = ⟦3⟧$. Assim $a = u_{⟦4⟧} - ⟦5⟧d = ⟦6⟧$ e $u_{⟦7⟧} = ⟦8⟧ + ⟦9⟧(⟦10⟧) = ⟦11⟧$.`,
  'ltcwrvbh9s': R`Calcule a soma dos ⟦0⟧ primeiros termos da progressão aritmética ⟦1⟧; …`,
  'vsiejpaurw': R`Encontre o termo $u_{⟦0⟧}$ da progressão geométrica ⟦1⟧; …`,
  '2fg2ivyt6zs': R`Calcule a soma dos ⟦0⟧ primeiros termos da série geométrica $⟦1⟧ + \cdots$`,
  '6by3ukfsg3': R`Calcule a soma infinita da série geométrica de primeiro termo ⟦0⟧ e razão $⟦1⟧$.`,
  '1c4uqsdtxyr': R`$|r| \lt 1$, então $S_\infty = \frac{a}{1 - r} = \frac{⟦0⟧}{1 - ⟦1⟧} = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  'm56xkk6hj0': R`Calcule $\displaystyle\sum_{k=1}^{⟦0⟧} (⟦1⟧)$.`,
  'zk5lcxjf3d': R`O salário de Ana no primeiro ano é de ⟦0⟧ reais e aumenta ⟦1⟧ reais a cada ano. Quanto ela ganha no total nos primeiros ⟦2⟧ anos?`,
  '222tg0c1ffy': R`É uma série aritmética: $S_{⟦0⟧} = \frac{⟦1⟧}{2}\big(2 \times ⟦2⟧ + ⟦3⟧ \times ⟦4⟧\big) = ⟦5⟧$ reais.`,

  // trig-basics
  '25ycjlixcfv': R`
<p>Num triângulo retângulo, em relação a um ângulo agudo $\theta$:</p>
⟦0⟧
<p>Dica para memorizar: <b>SOH-CAH-TOA</b> (Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente). Além disso, $\tan\theta = \frac{\sin\theta}{\cos\theta}$, e as razões inversas são $\csc\theta = \frac{1}{\sin\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, $\cot\theta = \frac{1}{\tan\theta}$.</p>
<h3>Valores exatos</h3>
⟦1⟧
<h3>Radianos</h3>
<p>$180^\circ = \pi$ radianos. Para passar de graus a radianos, multiplique por $\frac{\pi}{180}$; de radianos a graus, por $\frac{180}{\pi}$. Assim, $60^\circ = \frac{\pi}{3}$ e $\frac{3\pi}{4} = 135^\circ$.</p>
<h3>O círculo trigonométrico</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '27jmws7mgxv': R`\sin\theta = \frac{\text{oposto}}{\text{hipotenusa}} \qquad \cos\theta = \frac{\text{adjacente}}{\text{hipotenusa}} \qquad \tan\theta = \frac{\text{oposto}}{\text{adjacente}}`,
  'ig8vf2x1y6': R`sen θ`,
  '1qsg2x3tak': R`cos θ`,
  '27gocnzhjrz': R`tg θ`,
  '5bd73v8u9s': R`não definida`,
  'uyvhui04wr': R`<p>Para qualquer ângulo $\theta$, o ponto do círculo trigonométrico é $(\cos\theta; \sin\theta)$. Sinais por quadrante — "<b>T</b>odas, <b>S</b>eno, <b>T</b>angente, <b>C</b>osseno": todas positivas no I, o seno no II, a tangente no III e o cosseno no IV.</p><p>Use o <b>ângulo de referência</b> (o ângulo agudo com o eixo $x$) e o sinal correto: $\sin 150^\circ = +\sin 30^\circ = \frac{1}{2}$, $\cos 240^\circ = -\cos 60^\circ = -\frac{1}{2}$.</p>`,
  'hizqd1rl8k': R`<p>A 30 m de distância, o ângulo de elevação até o topo de uma torre é $60^\circ$. Altura $= 30 \tan 60^\circ = 30\sqrt{3} \approx 52{,}0$ m.</p>`,
  'neyxpix7b9': R`<p>Verifique o modo da calculadora (DEG ou RAD) antes de calcular funções trigonométricas.</p>`,
  '67i6rxexro': R`Encontre o valor exato de $⟦0⟧ ⟦1⟧$.`,
  'pdy7ypcls7': R`Valores exatos como sqrt(3)/2 são aceitos.`,
  '2b66gqgt1o8': R`⟦0⟧$⟦1⟧^\circ$ está no quadrante ⟦2⟧, onde $⟦3⟧$ é ⟦4⟧. O ângulo de referência é $⟦5⟧^\circ$ e $⟦6⟧ ⟦7⟧^\circ = ⟦8⟧$, então $⟦9⟧ ⟦10⟧ = ⟦11⟧$.`,
  '1fngyjdzj11': R`⟦0⟧Em $⟦1⟧^\circ$, o ponto do círculo trigonométrico é $⟦2⟧$ $= (\cos\theta; \sin\theta)$, então $⟦3⟧ ⟦4⟧ = ⟦5⟧$.`,
  'd9ifn6iock': R`Converta $⟦0⟧^\circ$ para radianos.`,
  'gs4x19407v': R`Multiplique por $\frac{\pi}{180}$: $⟦0⟧ \times \frac{\pi}{180} = ⟦1⟧$.`,
  'hgjh318aic': R`Converta $⟦0⟧$ radianos para graus.`,
  'zfi973h2bw': R`Multiplique por $\frac{180}{\pi}$: $⟦0⟧ \times \frac{180^\circ}{\pi} = ⟦1⟧^\circ$.`,
  '1lrzh5jmv15': R`Num triângulo retângulo, o cateto adjacente a um ângulo de $⟦0⟧^\circ$ mede ⟦1⟧ cm. Encontre o cateto oposto, com 2 casas decimais.`,
  '1p43u7j4b13': R`$\tan ⟦0⟧^\circ = \frac{\text{op}}{⟦1⟧}$, então op $= ⟦2⟧\tan ⟦3⟧^\circ \approx ⟦4⟧$ cm.`,
  '8jiaz8zixv': R`Um triângulo retângulo tem hipotenusa de ⟦0⟧ cm e um ângulo de $⟦1⟧^\circ$. Encontre o cateto oposto a esse ângulo, com 2 casas decimais.`,
  '22kukzeyh6': R`Um triângulo retângulo tem hipotenusa de ⟦0⟧ cm e um ângulo de $⟦1⟧^\circ$. Encontre o cateto adjacente a esse ângulo, com 2 casas decimais.`,
  'w56ix8w8yr': R`op`,
  '5ydwv3it97': R`adj`,
  '187jvg9zdbu': R`$⟦0⟧ ⟦1⟧^\circ = \frac{\text{⟦2⟧}}{⟦3⟧}$, então o cateto $= ⟦4⟧⟦5⟧ ⟦6⟧^\circ \approx ⟦7⟧$ cm.`,
  '2abmsiuwu52': R`$\theta$ é agudo e $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$. Encontre $⟦2⟧\theta$.`,
  '1qudt03n4v8': R`Desenhe um triângulo retângulo com cateto oposto ⟦0⟧ e hipotenusa ⟦1⟧; o cateto adjacente é $\sqrt{⟦2⟧^2 - ⟦3⟧^2} = ⟦4⟧$. Então $⟦5⟧$.`,
  '28dk1p4hmng': R`De um ponto a ⟦0⟧ m da base de um prédio, o ângulo de elevação até o topo é $⟦1⟧^\circ$. Qual é a altura do prédio? Dê a resposta exata.`,
  '1fxpcv94bft': R`Respostas exatas como 12sqrt(3) são aceitas.`,
  'yywe4b70u1': R`$h = ⟦0⟧\tan ⟦1⟧^\circ$ e $\tan ⟦2⟧^\circ = ⟦3⟧$, então $h = ⟦4⟧$ m.`,
  '1ttcab6tj5m': R`Quadrante I`,
  '4o87w2367v': R`Quadrante II`,
  '11djzpzc46w': R`Quadrante III`,
  '26d39yjlrkj': R`Quadrante IV`,
  '1t5qxibr3fa': R`Em que quadrante está $\theta$ se $⟦0⟧\theta ⟦1⟧ 0$ e $⟦2⟧\theta ⟦3⟧ 0$?`,
  '1856p6n9vrk': R`O seno é positivo no I e no II; o cosseno, no I e no IV; a tangente, no I e no III. Só o <b>⟦0⟧</b> satisfaz as duas condições.`,

  // trig-identities
  'v1udjwhzk5': R`
<p>Uma <b>identidade</b> vale para todo ângulo. As mais importantes:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Resolvendo equações trigonométricas</h3>
<p>Encontre o ângulo de referência e depois todos os ângulos do intervalo pedido com o sinal correto.</p>
⟦3⟧
⟦4⟧`,
  '23mroepg91v': R`Identidades pitagóricas`,
  '28msif6x03y': R`Adição de arcos`,
  '1qlqqnnfd2i': R`Arco duplo`,
  '14xjp53gt4x': R`<p>Resolva $\sin x = -\frac{1}{2}$ para $0^\circ \le x \lt 360^\circ$. O ângulo de referência é $30^\circ$; o seno é negativo nos quadrantes III e IV, então $x = 180^\circ + 30^\circ = 210^\circ$ ou $x = 360^\circ - 30^\circ = 330^\circ$.</p>`,
  '1hkvix57r6q': R`<p>Se $\sin\theta = \frac{3}{5}$ e $\theta$ está no quadrante II, então $\cos\theta = -\frac{4}{5}$ — a identidade pitagórica dá o valor absoluto e o quadrante dá o sinal.</p>`,
  '64164qr2jw': R`$\theta$ é agudo e $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$. Encontre $\sin 2\theta$.`,
  '27wxa35nxaa': R`Sabendo que $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$, encontre $\cos 2\theta$.`,
  'szbqx0thv8': R`Resolva $⟦0⟧ x = ⟦1⟧$ para $0^\circ \le x \lt 360^\circ$.`,
  '22m72qx0p66': R`Digite os ângulos em graus separados por ponto e vírgula, por exemplo 30; 150.`,
  'ygon4mdoxw': R`O ângulo de referência é $⟦0⟧^\circ$. $⟦1⟧$ é ⟦2⟧ nos quadrantes de $⟦3⟧^\circ$ e $⟦4⟧^\circ$, então $x = ⟦5⟧^\circ$ ou $x = ⟦6⟧^\circ$.`,
  '15odwmxybxs': R`a diferença de quadrados e depois $1 - \sin^2 x = \cos^2 x$`,
  'x5u3qd3gs1': R`a fórmula do arco duplo`,
  'sj6onjglro': R`o desenvolvimento, que dá $\sin^2 x + \cos^2 x + 2\sin x\cos x - 1$`,
  '7gzo83e030': R`Use ⟦0⟧: $⟦1⟧ = ⟦2⟧$.`,
  '1ico65e8qdc': R`Encontre o valor exato de $⟦0⟧$.`,
  '2ayoc6nyniw': R`Respostas exatas como (sqrt(6)+sqrt(2))/4 são aceitas.`,
  '1mewvixpsgq': R`Escreva como $⟦0⟧$ e use a fórmula de adição de arcos com os valores exatos de $30^\circ$, $45^\circ$ e $60^\circ$: o resultado é $⟦1⟧$.`,
  'ahced7ioyb': R`$\tan\theta = ⟦0⟧$ e $\theta$ está no quadrante ⟦1⟧. Encontre $⟦2⟧$.`,
  '19cq8bi37ib': R`O triângulo tem lados ⟦0⟧, ⟦1⟧ e ⟦2⟧. No quadrante ⟦3⟧, o seno é ⟦4⟧ e o cosseno é ⟦5⟧, então $\sin\theta = ⟦6⟧$ e $\cos\theta = ⟦7⟧$.`,

  // triangle-rules
  '2ga1qjtwo42': R`
<p>Nomeie o triângulo de modo que o lado $a$ seja oposto ao ângulo $A$, $b$ oposto a $B$ e $c$ oposto a $C$. Essas leis valem para <b>qualquer</b> triângulo, não só para triângulos retângulos.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '2fw62bzegqh': R`$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$<p>Use quando você conhece um lado e o ângulo oposto, além de outro lado ou outro ângulo.</p>`,
  'mp16igkhf3': R`Lei dos senos`,
  'eonocytnm1': R`$$a^2 = b^2 + c^2 - 2bc\cos A \qquad\qquad \cos A = \frac{b^2 + c^2 - a^2}{2bc}$$<p>Use com dois lados e o ângulo entre eles (LAL) ou com os três lados (LLL).</p>`,
  'kgaid4s1rf': R`Lei dos cossenos`,
  '1w8yehsbjfu': R`$$\text{Área} = \tfrac{1}{2}ab\sin C \qquad\qquad \text{Heron: } \text{Área} = \sqrt{s(s-a)(s-b)(s-c)},\; s = \tfrac{a+b+c}{2}$$`,
  '26feyop5vyd': R`<p>Lados 5 e 8 com ângulo de $60^\circ$ entre eles: o terceiro lado é $\sqrt{25 + 64 - 2(5)(8)\cos 60^\circ} = \sqrt{49} = 7$, e a área é $\frac{1}{2}(5)(8)\sin 60^\circ = 10\sqrt{3}$.</p>`,
  '11plyaa7o04': R`<p>A lei dos senos pode dar dois triângulos possíveis ao calcular um ângulo (o "caso ambíguo"): $\sin B = 0{,}8$ permite $B \approx 53{,}1^\circ$ <i>ou</i> $B \approx 126{,}9^\circ$. Verifique se cada um serve.</p>`,
  'l2pu7cls8u': R`No triângulo $ABC$, $b = ⟦0⟧$ cm, $c = ⟦1⟧$ cm e $A = ⟦2⟧^\circ$. Encontre $a$ com 2 casas decimais.`,
  '27jp4mdtjl6': R`$a^2 = ⟦0⟧^2 + ⟦1⟧^2 - 2(⟦2⟧)(⟦3⟧)\cos ⟦4⟧^\circ \approx ⟦5⟧$, então $a \approx ⟦6⟧$ cm.`,
  '1s6102ghcou': R`Um triângulo tem lados ⟦0⟧, ⟦1⟧ e ⟦2⟧. Encontre o ângulo oposto ao lado de medida ⟦3⟧.`,
  'adoadf3ehm': R`$\cos\theta = \frac{⟦0⟧^2 + ⟦1⟧^2 - ⟦2⟧^2}{2(⟦3⟧)(⟦4⟧)} = \frac{⟦5⟧}{⟦6⟧} = ⟦7⟧$, então $\theta = ⟦8⟧^\circ$.`,
  '3e8310hzv': R`No triângulo $ABC$, $A = ⟦0⟧^\circ$, $B = ⟦1⟧^\circ$ e $a = ⟦2⟧$ cm. Encontre $b$ com 2 casas decimais.`,
  'i5vdhhm6yu': R`Lei dos senos: $\frac{b}{\sin ⟦0⟧^\circ} = \frac{⟦1⟧}{\sin ⟦2⟧^\circ}$, então $b = \frac{⟦3⟧\sin ⟦4⟧^\circ}{\sin ⟦5⟧^\circ} \approx ⟦6⟧$ cm.`,
  '1uuy2y52gu0': R`Encontre a área exata de um triângulo com lados de ⟦0⟧ cm e ⟦1⟧ cm e ângulo de $⟦2⟧^\circ$ entre eles.`,
  '25opm4iwiww': R`Respostas exatas como 6sqrt(3) são aceitas.`,
  'cb99xoymur': R`Área $= \frac{1}{2}ab\sin C = \frac{1}{2}(⟦0⟧)(⟦1⟧)\sin ⟦2⟧^\circ$, com $\sin ⟦3⟧^\circ = ⟦4⟧$, o que dá $⟦5⟧$ cm².`,
  '1dwe3yjuxqj': R`Use a fórmula de Heron para encontrar a área de um triângulo com lados ⟦0⟧, ⟦1⟧ e ⟦2⟧.`,
  '8vmvle7x3': R`$s = \frac{⟦0⟧ + ⟦1⟧ + ⟦2⟧}{2} = ⟦3⟧$. Área $= \sqrt{⟦4⟧(⟦5⟧)(⟦6⟧)(⟦7⟧)} = \sqrt{⟦8⟧} = ⟦9⟧$.`,
});

/* Português (Brasil) — Ensino Médio (polinômios → integrais) */
addT('pt', {
  // polynomials
  '1dv82xempy': R`
<p>Um <b>polinômio</b> é uma soma de termos $a_n x^n + \cdots + a_1 x + a_0$ com expoentes naturais. Seu <b>grau</b> é o maior expoente; $a_n$ é o <b>coeficiente dominante</b>. Ao multiplicar polinômios, os graus se somam e os coeficientes dominantes se multiplicam.</p>
<h3>Divisão</h3>
<p>Dividir $P(x)$ por $(x - a)$ dá um quociente $Q(x)$ e um resto $R$: $P(x) = (x - a)Q(x) + R$. O <b>dispositivo de Briot-Ruffini</b> faz isso rapidamente usando só os coeficientes.</p>
⟦0⟧
⟦1⟧
<h3>Raízes de um polinômio do 3º grau</h3>
<p>Para $ax^3 + bx^2 + cx + d = 0$ com raízes $r_1, r_2, r_3$:</p>
⟦2⟧
⟦3⟧`,
  '16v6jrymjv2': R`<p>$(x^3 - 4x^2 + x + 6) \div (x - 2)$ pelo dispositivo de Briot-Ruffini:</p>⟦0⟧<p>Quociente $x^2 - 2x - 3$, resto 0.</p>`,
  'agfsjitvd': R`<p><b>Teorema do resto:</b> o resto da divisão de $P(x)$ por $(x - a)$ é $P(a)$.</p><p><b>Teorema de D'Alembert:</b> $(x - a)$ é fator de $P(x)$ exatamente quando $P(a) = 0$.</p>`,
  'sqyu8zjvtn': R`<p>Dividir por $(x + 3)$ significa $a = -3$: calcule $P(-3)$, não $P(3)$.</p>`,
  'u4dg9by4un': R`Encontre o resto da divisão de $P(x) = ⟦0⟧$ por $(x ⟦1⟧)$.`,
  '212dl6gy5gu': R`Pelo teorema do resto, o resto é $P(⟦0⟧) = ⟦1⟧(⟦2⟧)^3 ⟦3⟧(⟦4⟧)^2 ⟦5⟧(⟦6⟧) ⟦7⟧ = ⟦8⟧$.`,
  '20swcfjanfa': R`$(x ⟦0⟧)$ é fator de $P(x) = ⟦1⟧$. Encontre $k$.`,
  '2cscisbqmyg': R`Pelo teorema de D'Alembert, $P(⟦0⟧) = 0$: $⟦1⟧ ⟦2⟧ ⟦3⟧k ⟦4⟧ = 0$, então $⟦5⟧k = ⟦6⟧$ e $k = ⟦7⟧$.`,
  '28czzdou58n': R`Para $ax^3 + bx^2 + cx + d = 0$, ⟦0⟧.`,
  '1uakfcji416': R`a soma das raízes é $-\frac{b}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1cl4qeneyhq': R`o produto das raízes é $-\frac{d}{a} = -\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$`,
  '1h1il3vuozs': R`Divida $⟦0⟧$ por $(x ⟦1⟧)$. Qual é o quociente?`,
  '1432prhuyml': R`Briot-Ruffini com ⟦0⟧ nos coeficientes ⟦1⟧ dá ⟦2⟧ e resto 0, então o quociente é $⟦3⟧$.`,
  '1v0pp8s5fwz': R`Considere $⟦0⟧$. Qual é o grau do produto?`,
  '79jcaurtjl': R`Considere $⟦0⟧$. Qual é o coeficiente dominante do produto?`,
  'lgw9ke18qe': R`Considere $⟦0⟧$. Qual é o termo independente do produto?`,
  '18bitz7l1ry': R`Ao multiplicar, os graus se somam: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '1x77krhanqb': R`Multiplique os termos dominantes: $⟦0⟧ \cdot ⟦1⟧ = ⟦2⟧$, então o coeficiente dominante é ⟦3⟧.`,
  '1uusi8yg5sk': R`O termo independente é o produto dos termos independentes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,

  // matrices
  '104wb071wss': R`
<p>Uma <b>matriz</b> é uma tabela retangular de números. Uma matriz $m \times n$ tem $m$ linhas e $n$ colunas; $a_{ij}$ é o elemento da linha $i$, coluna $j$.</p>
<h3>Operações</h3>
<ul><li><b>Somar/subtrair</b> elemento a elemento (só com o mesmo tamanho).</li><li><b>Multiplicação por escalar</b>: multiplique cada elemento.</li><li><b>Produto</b> $AB$: o elemento $(i, j)$ é a linha $i$ de $A$ "vezes" a coluna $j$ de $B$. Exige (colunas de $A$) = (linhas de $B$), e uma $m \times n$ vezes uma $n \times p$ dá uma $m \times p$.</li></ul>
⟦0⟧
⟦1⟧
<h3>Determinante e inversa (2 × 2)</h3>
⟦2⟧
<p>Se $\det A = 0$, a matriz é <b>singular</b> e não tem inversa. Inversas resolvem sistemas: $AX = B \Rightarrow X = A^{-1}B$.</p>
⟦3⟧`,
  '4bk6hc9is8': R`<p>A multiplicação de matrizes <b>não é comutativa</b>: em geral $AB \ne BA$.</p>`,
  '4ckwr8umw4': R`<p>Para a inversa: <b>troque</b> $a$ e $d$, <b>troque o sinal</b> de $b$ e $c$ e divida pelo determinante.</p>`,
  '1h6gnxjh2g6': R`Calcule o determinante de $⟦0⟧$.`,
  '1gfhimaac6g': R`Calcule $AB$, onde $A = ⟦0⟧$ e $B = ⟦1⟧$.`,
  '1dy8pvpnep7': R`Digite os quatro elementos linha por linha, por exemplo 19; 22; 43; 50.`,
  'xfxhg5b3o2': R`Linha vezes coluna: $AB = \begin{pmatrix} ⟦0⟧\cdot⟦1⟧ + ⟦2⟧\cdot⟦3⟧ & \cdots \\ \cdots & \cdots \end{pmatrix} = ⟦4⟧$.`,
  '27lrdslcvs8': R`Encontre a inversa de $⟦0⟧$.`,
  'ea7d95erhp': R`Digite os quatro elementos linha por linha, separados por ponto e vírgula.`,
  '2euzxos9ar7': R`$\det = (⟦0⟧)(⟦1⟧) - (⟦2⟧)(⟦3⟧) = ⟦4⟧$. Troque $a$ e $d$, troque o sinal de $b$ e $c$, divida por ⟦5⟧: $⟦6⟧$.`,
  '2fs8fio5g5w': R`Para que valor de $x$ a matriz $⟦0⟧$ é singular?`,
  'et7lf19q4x': R`Singular significa $\det = 0$: $⟦0⟧x - (⟦1⟧)(⟦2⟧) = 0$, então $x = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '2280y15nq4f': R`$A = ⟦0⟧$ e $B = ⟦1⟧$. Encontre o elemento da linha ⟦2⟧, coluna ⟦3⟧ de $⟦4⟧A - ⟦5⟧B$.`,
  'h3p6r4d6o': R`$A = ⟦0⟧$ e $B = ⟦1⟧$. Encontre o elemento da linha ⟦2⟧, coluna ⟦3⟧ de $AB$.`,
  'xdj657lej': R`Linha ⟦0⟧ de $A$ vezes coluna ⟦1⟧ de $B$: $⟦2⟧ = ⟦3⟧$. (Uma matriz $2 \times 3$ vezes uma $3 \times 2$ dá uma $2 \times 2$.)`,

  // vectors
  '1gljxtukffx': R`
<p>Um <b>vetor</b> tem módulo, direção e sentido. Em coordenadas, $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ ou $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$. O vetor de $P$ até $Q$ é $\overrightarrow{PQ} = \mathbf{q} - \mathbf{p}$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  'i7t2goihqv': R`Módulo`,
  '1czax49eh4c': R`Adição`,
  'q2ntocofkn': R`some as coordenadas`,
  'oswzhgqxwz': R`Multiplicação por escalar`,
  '1bnyaikchfp': R`$k\mathbf{a}$: multiplique cada coordenada por $k$`,
  '28hldv2q33s': R`Vetor unitário`,
  '214ftyeo0vg': R`Produto escalar`,
  '1xghg9dwzeq': R`$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta \qquad\Longrightarrow\qquad \cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$<p>Dois vetores não nulos são <b>perpendiculares</b> exatamente quando $\mathbf{a}\cdot\mathbf{b} = 0$.</p>`,
  '1w9baxb120w': R`<p>$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$: $\mathbf{a}\cdot\mathbf{b} = 15 + 48 = 63$, $|\mathbf{a}| = 5$, $|\mathbf{b}| = 13$, então $\cos\theta = \frac{63}{65}$ e $\theta \approx 14{,}3^\circ$.</p>`,
  '6pzkmdncqf': R`<p>O produto escalar de dois vetores é um <b>número</b>, não um vetor.</p>`,
  '4u2plhe47g': R`Calcule o módulo de $⟦0⟧$.`,
  '252q8tpxn2p': R`Calcule $\mathbf{a}\cdot\mathbf{b}$ para $\mathbf{a} = ⟦0⟧$ e $\mathbf{b} = ⟦1⟧$.`,
  '17ht25mwywu': R`Dados $\mathbf{a} = ⟦0⟧$ e $\mathbf{b} = ⟦1⟧$, calcule $⟦2⟧\mathbf{a} ⟦3⟧ ⟦4⟧\mathbf{b}$.`,
  '2gdqizkyobq': R`Digite as coordenadas em ordem, separadas por ponto e vírgula.`,
  '1mpyqj0mwgx': R`Coordenada a coordenada: $⟦0⟧ = ⟦1⟧$.`,
  '14p7yoy4f3a': R`Encontre $k$ para que $⟦0⟧$ e $⟦1⟧$ sejam perpendiculares.`,
  '127php4kbc3': R`Perpendiculares significa produto escalar 0: $⟦0⟧k + (⟦1⟧)(⟦2⟧) = 0$, então $k = ⟦3⟧$.`,
  '1kydmvss2ex': R`Calcule $\cos\theta$, onde $\theta$ é o ângulo entre $⟦0⟧$ e $⟦1⟧$.`,
  '1b0azawmrlf': R`Encontre o vetor unitário na direção e sentido de $⟦0⟧$.`,
  '280s3ajjt4e': R`Digite as coordenadas separadas por ponto e vírgula, por exemplo 3/5; -4/5.`,
  '22ii0i40ri': R`$|\mathbf{v}| = ⟦0⟧$. Divida cada coordenada por ⟦1⟧: $\hat{\mathbf{v}} = ⟦2⟧$.`,

  // limits
  '239kmg9x5mj': R`
<p>$\displaystyle\lim_{x \to a} f(x) = L$ significa que $f(x)$ fica tão perto quanto quisermos de $L$ quando $x$ se aproxima de $a$ — não importa o que acontece exatamente em $x = a$.</p>
<h3>Técnicas</h3>
<ol><li><b>Substituição direta</b> funciona para polinômios e outras funções contínuas: $\lim_{x \to 2}(x^2 + 3x) = 10$.</li><li><b>Fatorar e simplificar</b> diante de $\frac{0}{0}$: $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$.</li><li><b>Racionalizar</b> expressões com raízes: multiplique pelo conjugado.</li></ol>
⟦0⟧
<h3>Limites no infinito</h3>
⟦1⟧
<h3>Um limite trigonométrico especial</h3>
⟦2⟧
<h3>Continuidade</h3>
<p>$f$ é contínua em $a$ se $\lim_{x \to a} f(x) = f(a)$: sem buracos, saltos ou assíntotas ali. Numa função definida por partes, faça as duas partes se encontrarem no ponto de junção.</p>
⟦3⟧`,
  '25jnb5snm7z': R`<p>Numa função racional, divida numerador e denominador pela maior potência de $x$ do denominador:</p><ul><li>mesmo grau → razão dos coeficientes dominantes;</li><li>numerador de grau menor → 0;</li><li>numerador de grau maior → sem limite finito ($\pm\infty$).</li></ul>`,
  'extw7corym': R`<p>$\frac{0}{0}$ não é "0" nem "indefinido" — indica que é preciso mais trabalho (fatorar, racionalizar).</p>`,
  '18znpgymeuk': R`Calcule $\displaystyle\lim_{x \to ⟦0⟧} (⟦1⟧)$.`,
  '1tq4b7d4h53': R`A função é um polinômio, então substitua: $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧$.`,
  '1n96bgorw1d': R`Calcule $\displaystyle\lim_{x \to ⟦0⟧} \frac{⟦1⟧}{x ⟦2⟧}$.`,
  '295o4zt7f3w': R`A substituição dá $\frac{0}{0}$. Fatore: $\frac{(x ⟦0⟧)(x ⟦1⟧)}{x ⟦2⟧} = x ⟦3⟧$, então o limite é $⟦4⟧ ⟦5⟧ = ⟦6⟧$.`,
  '1rjdd048rzk': R`Calcule $\displaystyle\lim_{x \to \infty} \frac{⟦0⟧}{⟦1⟧}$.`,
  '229ply6f2l2': R`O numerador tem grau menor que o denominador; dividindo por $x^2$, todo termo do numerador tende a 0, então o limite é $0$.`,
  '1m8u7pc3qh1': R`Mesmo grau, então o limite é a razão dos coeficientes dominantes: $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  '1ynpy6v2s15': R`Calcule $\displaystyle\lim_{x \to 0} \frac{⟦0⟧}{⟦1⟧}$.`,
  'if95qf815v': R`Use $\frac{\sin u}{u} \to 1$ (e $\frac{\tan u}{u} \to 1$): a expressão se comporta como $\frac{⟦0⟧x}{⟦1⟧x} = ⟦2⟧$.`,
  'blyu2go12i': R`Calcule $\displaystyle\lim_{x \to 0} \frac{\sqrt{x + ⟦0⟧} - ⟦1⟧}{x}$.`,
  'fj8u70cngg': R`Multiplique pelo conjugado: $\frac{(x + ⟦0⟧) - ⟦1⟧}{x(\sqrt{x + ⟦2⟧} + ⟦3⟧)} = \frac{1}{\sqrt{x + ⟦4⟧} + ⟦5⟧} \to \frac{1}{⟦6⟧}$.`,
  '1kmmd6tilgi': R`Encontre $k$ para que $f(x) = \begin{cases} x^2 + k, & x \lt ⟦0⟧ \\ ⟦1⟧, & x \ge ⟦2⟧ \end{cases}$ seja contínua em $x = ⟦3⟧$.`,
  '1l84k7ifkz6': R`As partes devem se encontrar em $x = ⟦0⟧$: $(⟦1⟧)^2 + k = ⟦2⟧(⟦3⟧) ⟦4⟧$, então $⟦5⟧ + k = ⟦6⟧$ e $k = ⟦7⟧$.`,

  // derivatives
  '1pv2wkwyvwg': R`
<p>A <b>derivada</b> $f'(x)$ é a taxa de variação instantânea de $f$ — a inclinação da reta tangente em $x$. Ela é definida por um limite:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Retas tangentes</h3>
<p>Em $x = a$, a tangente tem inclinação $m = f'(a)$ e passa por $(a; f(a))$: $y - f(a) = f'(a)(x - a)$.</p>
<h3>Pontos críticos</h3>
<p>Onde $f'(x) = 0$ o gráfico fica momentaneamente horizontal. Use a segunda derivada: $f''(a) \gt 0$ → mínimo local; $f''(a) \lt 0$ → máximo local. $f$ é crescente onde $f' \gt 0$ e decrescente onde $f' \lt 0$.</p>
<h3>Otimização</h3>
⟦3⟧
⟦4⟧`,
  '1kddytp99dm': R`Regras`,
  '21wooetnwi8': R`<p>100 m de cerca fecham um retângulo junto a um rio (sem cerca do lado do rio). Com lados $x, y, x$: $2x + y = 100$, área $A = x(100 - 2x)$. $A'(x) = 100 - 4x = 0$ dá $x = 25$, então $A_{\max} = 25 \times 50 = 1250$ m².</p>`,
  '14x6kebc9en': R`<p>A derivada de uma constante é 0 — não leve o termo constante para $f'(x)$.</p>`,
  'sk165jmy0e': R`Encontre $f'(x)$ para $f(x) = ⟦0⟧$.`,
  '1z8enx6jmxw': R`Aplique a regra da potência a cada termo: $f'(x) = ⟦0⟧$ (a constante desaparece).`,
  'rdfbrjf6fd': R`Dada $f(x) = ⟦0⟧$, encontre $f'(⟦1⟧)$.`,
  '12fn6a7y0fo': R`$f'(x) = ⟦0⟧$, então $f'(⟦1⟧) = ⟦2⟧$.`,
  '13xytl77ctg': R`Encontre a equação da reta tangente a $y = ⟦0⟧$ em $x = ⟦1⟧$.`,
  'zxpf5t25tk': R`Inclinação: $y' = 2x ⟦0⟧$, então $m = ⟦1⟧$ em $x = ⟦2⟧$. Ponto: $(⟦3⟧; ⟦4⟧)$. Então $y - ⟦5⟧ = ⟦6⟧(x - ⟦7⟧)$, ou seja, $y = ⟦8⟧$.`,
  '6or380e65b': R`$x = ⟦0⟧ \text{ e } x = ⟦1⟧$`,
  '1ib3oh8we5r': R`Encontre as abscissas dos pontos críticos de $f(x) = ⟦0⟧$.`,
  '8cxs5u8eb2': R`$f'(x) = ⟦0⟧ = 3(x ⟦1⟧)(x ⟦2⟧) = 0$, então $x = ⟦3⟧$ ou $x = ⟦4⟧$.`,
  '2diynqfs1vm': R`Para que valor de $x$ a função $f(x) = ⟦0⟧$ tem um mínimo local?`,
  'qiab8fav1k': R`$f'(x) = 3(x ⟦0⟧)(x ⟦1⟧)$ se anula em $x = ⟦2⟧$ e $x = ⟦3⟧$. $f''(x) = 6x ⟦4⟧$ é positiva em $x = ⟦5⟧$, então esse é o mínimo local.`,
  '2bfp82dmoiw': R`Um fazendeiro tem ⟦0⟧ m de cerca para cercar um terreno retangular junto a um rio reto. Não é preciso cerca ao longo do rio. Qual é a maior área possível?`,
  '1sgjbqwzp29': R`Lados $x, y, x$ com $2x + y = ⟦0⟧$. $A = x(⟦1⟧ - 2x)$, $A' = ⟦2⟧ - 4x = 0$ dá $x = ⟦3⟧$, $y = ⟦4⟧$ e $A = ⟦5⟧$ m².`,
  '1dz6162q97e': R`Um retângulo tem perímetro de ⟦0⟧ cm. Qual é a maior área que ele pode ter?`,
  '12er060agfx': R`Com largura $x$, o comprimento é $⟦0⟧ - x$ e $A = x(⟦1⟧ - x)$. $A' = ⟦2⟧ - 2x = 0$ dá $x = ⟦3⟧$ — um quadrado — com área $⟦4⟧$ cm².`,
  'jksdr4ukrw': R`Derive $y = ⟦0⟧$.`,
  '1gytk3lwm2l': R`$\frac{d}{dx}\sin x = \cos x$ e $\frac{d}{dx}\cos x = -\sin x$, então $y' = ⟦0⟧$.`,
  't51ufxvzbf': R`Uma partícula se move com posição $s(t) = ⟦0⟧$ metros. Encontre sua aceleração em $t = ⟦1⟧$ s.`,
  'bakv4or3q9': R`$v(t) = s'(t) = ⟦0⟧$ e $a(t) = v'(t) = ⟦1⟧$. Em $t = ⟦2⟧$: $a = ⟦3⟧$ m/s².`,
  'twj64cwqj6': R`Uma partícula se move com posição $s(t) = ⟦0⟧$ metros. Encontre sua velocidade em $t = ⟦1⟧$ s.`,
  '1yi10f0kgm7': R`$v(t) = s'(t) = ⟦0⟧$, então $v(⟦1⟧) = ⟦2⟧$ m/s.`,

  // integrals
  '1wdt9h7s66j': R`
<p>A integração desfaz a derivação. Uma <b>primitiva</b> de $f$ é qualquer $F$ com $F' = f$; a <b>integral indefinida</b> inclui a constante de integração:</p>
⟦0⟧
⟦1⟧
<h3>Integrais definidas</h3>
⟦2⟧
<p>Para $f \ge 0$, isso é a área sob a curva entre $x = a$ e $x = b$. Área abaixo do eixo $x$ conta como negativa; então divida a integral nas raízes quando quiser a área total.</p>
⟦3⟧
<h3>Encontrando uma função a partir da derivada</h3>
<p>Se $f'(x) = 6x + 2$ e $f(1) = 10$, então $f(x) = 3x^2 + 2x + C$ e $3 + 2 + C = 10$ dá $C = 5$.</p>
⟦4⟧`,
  '20z1821bwrr': R`<p>$\int (6x^2 - 4x + 3)\,dx = 2x^3 - 2x^2 + 3x + C$. Confira derivando.</p>`,
  '1jsx5j8bwuv': R`Teorema Fundamental do Cálculo`,
  'k8jg70602j': R`<p>Área entre $y = x^2$ e $y = 2x$: elas se encontram em $x = 0$ e $x = 2$, e $2x \ge x^2$ entre elas, então $\int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$.</p>`,
  '2645ntoenmj': R`<p>Não esqueça o $+ C$ nas integrais indefinidas — e não o coloque nas definidas (ele se cancela).</p>`,
  '1a4h4aolv1n': R`Calcule $\displaystyle\int (⟦0⟧)\,dx$.`,
  '14w03nftsp9': R`Aumente cada expoente em um e divida pelo novo expoente: $⟦0⟧ + C$.`,
  'lhk659hv1w': R`Calcule $\displaystyle\int_{⟦0⟧}^{⟦1⟧} (⟦2⟧)\,dx$.`,
  'wzkchwuid3': R`Uma primitiva é $F(x) = ⟦0⟧$. $F(⟦1⟧) - F(⟦2⟧) = ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '2g5117b4rfq': R`Encontre a área limitada por $y = ⟦0⟧$ e o eixo $x$.`,
  '1qd8emk0tlu': R`A curva corta o eixo em $x = \pm ⟦0⟧$. Área $= \int_{-⟦1⟧}^{⟦2⟧} (⟦3⟧ - x^2)\,dx = \left[⟦4⟧x - \frac{x^3}{3}\right]_{-⟦5⟧}^{⟦6⟧} = ⟦7⟧$.`,
  '1wjuv7zitnn': R`Encontre a área da região entre $y = x^2$ e $y = ⟦0⟧x$.`,
  'ospw7lwugt': R`Elas se encontram em $x = 0$ e $x = ⟦0⟧$. Área $= \int_0^{⟦1⟧} (⟦2⟧x - x^2)\,dx = \frac{⟦3⟧^3}{2} - \frac{⟦4⟧^3}{3} = ⟦5⟧$.`,
  '2c9m4g6dimy': R`$f'(x) = ⟦0⟧$ e $f(0) = ⟦1⟧$. Encontre $f(⟦2⟧)$.`,
  '29kyl7mnwt5': R`$f(x) = ⟦0⟧ + C$, e $f(0) = C = ⟦1⟧$. Então $f(⟦2⟧) = ⟦3⟧$.`,
  '1p83y3ccpb': R`$\int \cos x\,dx = \sin x$ e $\int -\sin x\,dx = \cos x$, então o resultado é $⟦0⟧ + C$.`,
  '22xlapf2gb7': R`Calcule $\displaystyle\int_0^{\pi/2} ⟦0⟧\cos x\,dx$.`,
  '1ppkvfv3p1b': R`Calcule $\displaystyle\int_0^{\pi} ⟦0⟧\sin x\,dx$.`,
  // formula-only entries
  'itm4o8cny': R`\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}`,
  '25hetn68fsz': R`A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \qquad \det A = ad - bc \qquad A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`,
  '1i9j07wofgh': R`\lim_{x \to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \lim_{x \to 0}\frac{\sin ax}{bx} = \frac{a}{b}`,
  '21rfw9yowzp': R`$$\frac{d}{dx}x^n = nx^{n-1} \qquad \frac{d}{dx}c = 0 \qquad \frac{d}{dx}\big(af + bg\big) = af' + bg'$$$$\frac{d}{dx}\sin x = \cos x \qquad \frac{d}{dx}\cos x = -\sin x$$`,
  'oq0mo2ln2m': R`$$\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C \quad (n \ne -1) \qquad \int \frac{1}{x}\,dx = \ln|x| + C$$$$\int \cos x\,dx = \sin x + C \qquad \int \sin x\,dx = -\cos x + C$$`,
  'ktnrryzzqc': R`$$\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)$$`,
});

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
