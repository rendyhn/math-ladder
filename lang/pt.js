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
