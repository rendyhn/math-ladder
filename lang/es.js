/* Español — interfaz y nombres de temas */
addUI('es', {
  brandTag: R`Primaria → Universidad`,
  searchPh: R`Buscar entre ⟦0⟧ temas`,
  searchLabel: R`Buscar temas`,
  showTopics: R`Mostrar temas`,
  language: R`Idioma`,
  mixedReview: R`Repaso mixto`,
  reviewTitle: R`⟦0⟧: repaso mixto`,
  reviewBlurb: R`Una hoja con preguntas de los ⟦0⟧ temas de este nivel, ideal para repasar antes de un examen.`,
  heroEyebrow: R`Matemáticas · De primaria a la universidad`,
  heroTitle: R`De contar a los valores propios, peldaño a peldaño.`,
  heroLede: R`⟦0⟧ temas en cuatro niveles. Cada uno tiene una lección y una hoja de práctica cuyos números cambian cada vez que la abres, con solucionario desplegable y páginas listas para imprimir.`,
  startWith: R`Empezar con ⟦0⟧`,
  tryReview: R`Probar un repaso mixto`,
  levels: R`Niveles`,
  nTopics: R`⟦0⟧ temas`,
  reviewLink: R`Hoja de repaso mixto →`,
  freshQ: R`Pregunta nueva`,
  anotherQ: R`Otra pregunta`,
  showAnswer: R`Ver respuesta`,
  hideAnswer: R`Ocultar respuesta`,
  answerColon: R`Respuesta:`,
  home: R`Inicio`,
  breadcrumb: R`Ruta de navegación`,
  topicPos: R`Tema ⟦0⟧ de ⟦1⟧`,
  lesson: R`Lección`,
  practice: R`Práctica`,
  topicSections: R`Secciones del tema`,
  printLesson: R`Imprimir lección`,
  practiseTopic: R`Practicar: ⟦0⟧ →`,
  prev: R`← Anterior`,
  next: R`Siguiente →`,
  otherTopics: R`Otros temas`,
  questions: R`Preguntas`,
  qType: R`Tipo de pregunta`,
  modeMixed: R`Mixto`,
  modeMc: R`Opción múltiple`,
  modeFill: R`Respuesta abierta`,
  newSheet: R`Nueva hoja`,
  printQ: R`Imprimir preguntas`,
  worksheet: R`Hoja de ejercicios`,
  practiceSheet: R`⟦0⟧ · Hoja de práctica`,
  sheet: R`Hoja`,
  type: R`Tipo`,
  name: R`Nombre`,
  klass: R`Curso`,
  date: R`Fecha`,
  score: R`Nota`,
  fillNote: R`Las respuestas abiertas aceptan números enteros, decimales con coma (2,5), fracciones como <code>3/4</code> y expresiones como <code>2sqrt(3)</code> o <code>5pi</code>. Si hay varias respuestas, sepáralas con punto y coma (;).`,
  checkAnswers: R`Comprobar respuestas`,
  clearAnswers: R`Borrar respuestas`,
  answerKey: R`Solucionario`,
  showKey: R`Mostrar solucionario`,
  hideKey: R`Ocultar solucionario`,
  printKey: R`Imprimir solucionario`,
  printBoth: R`Imprimir preguntas + solucionario`,
  keyHead: R`Solucionario · ⟦0⟧`,
  sheetNo: R`Hoja n.º ⟦0⟧`,
  choicesFor: R`Opciones de la pregunta ⟦0⟧`,
  answer: R`Respuesta`,
  typeAnswer: R`Escribe tu respuesta`,
  qMc: R`Opción múltiple`,
  qFill: R`Respuesta abierta`,
  notAnswered: R`Sin responder`,
  correct: R`Correcta`,
  notQuite: R`No es correcta`,
  scoreLine: R`⟦0⟧ / ⟦1⟧ correctas`,
  unanswered: R`⟦0⟧ sin responder`,
  source: R`Fuente:`,
  pageOf: R`Página ⟦0⟧ de ⟦1⟧`,
  printToast: R`Elige «Guardar como PDF» en el cuadro de impresión para exportar. Si no aparece ningún cuadro, este visor bloquea la impresión: abre el archivo HTML descargado en Chrome o Edge e imprime desde allí.`,
  langFail: R`No se pudo cargar este idioma, así que la página se muestra en inglés.`,
});
addMeta('es', {
  levels: {
    elementary: [R`Educación primaria`, R`Primaria`, R`Grados 1.º–6.º`, R`Sentido numérico, las cuatro operaciones, fracciones, decimales, porcentajes, medidas y primeros pasos en geometría.`],
    junior: [R`Educación secundaria`, R`Secundaria`, R`Grados 7.º–9.º`, R`Números enteros, potencias, álgebra y ecuaciones lineales, conjuntos, geometría del círculo y de los cuerpos, y primeros pasos en estadística y probabilidad.`],
    senior: [R`Bachillerato`, R`Bachillerato`, R`Grados 10.º–12.º`, R`Ecuaciones cuadráticas, funciones, logaritmos, sucesiones, trigonometría, matrices, vectores, cálculo, probabilidad, estadística y lógica.`],
    university: [R`Universidad`, R`Universidad`, R`Grado / licenciatura`, R`Cálculo I–III, series, ecuaciones diferenciales, álgebra lineal, números complejos, probabilidad y estadística, matemática discreta, métodos numéricos y transformadas.`],
  },
  topics: {
    'place-value': [R`Valor posicional y redondeo`, R`Cuánto vale cada cifra, forma desarrollada, comparación de números naturales y redondeo.`],
    'add-sub': [R`Suma y resta`, R`Suma en columna con llevadas, resta con préstamo, números que faltan y problemas.`],
    'mul-div': [R`Multiplicación y división`, R`Tablas de multiplicar, multiplicación de varias cifras, división exacta y con resto.`],
    'order-ops': [R`Jerarquía de las operaciones`, R`Paréntesis, potencias, luego multiplicación y división, y después suma y resta.`],
    'factors': [R`Divisores, múltiplos y primos`, R`Divisores y múltiplos, números primos, descomposición en factores primos, MCD y mcm.`],
    'fractions': [R`Fracciones`, R`Fracciones equivalentes, simplificación, comparación, números mixtos y las cuatro operaciones.`],
    'decimals': [R`Números decimales`, R`Décimas, centésimas y milésimas; comparar, redondear y calcular con decimales.`],
    'percent': [R`Porcentajes`, R`Porcentaje de una cantidad, conversiones, descuentos y variación porcentual.`],
    'measurement': [R`Medidas y unidades`, R`Unidades métricas de longitud, masa y capacidad, y cálculos con el tiempo.`],
    'perimeter-area': [R`Perímetro y área`, R`Perímetro y área de rectángulos, cuadrados, triángulos, paralelogramos, trapecios y figuras compuestas.`],
    'volume-basic': [R`Volumen y área total`, R`Volumen de cubos y ortoedros, capacidad en litros y área total de cajas.`],
    'angles-shapes': [R`Ángulos y figuras`, R`Tipos de ángulos, ángulos en rectas y polígonos, y propiedades de los triángulos.`],
    'data-basic': [R`Datos y promedios`, R`Lectura de tablas y gráficos; media, mediana, moda y rango.`],
    'integers': [R`Números enteros`, R`Números negativos en la recta numérica y la regla de los signos en las cuatro operaciones.`],
    'exponents': [R`Potencias y raíces`, R`Potencias, leyes de los exponentes, exponentes cero y negativos, raíces cuadradas y cúbicas, simplificación de radicales.`],
    'sci-notation': [R`Notación científica`, R`Escribir números muy grandes y muy pequeños como a × 10ⁿ y calcular con ellos.`],
    'ratio': [R`Razones, tasas y proporciones`, R`Simplificar razones, repartos proporcionales, proporcionalidad directa e inversa, escalas y velocidad.`],
    'algebra-expr': [R`Expresiones algebraicas`, R`Términos semejantes, desarrollo de paréntesis, factorización, sustitución y productos notables.`],
    'linear-eq': [R`Ecuaciones lineales`, R`Ecuaciones de una incógnita con paréntesis, fracciones e incógnitas en ambos miembros; problemas.`],
    'inequalities': [R`Inecuaciones lineales`, R`Símbolos de desigualdad, recta numérica, resolución de inecuaciones y el cambio de sentido de la desigualdad.`],
    'sets': [R`Conjuntos y diagramas de Venn`, R`Notación de conjuntos, subconjuntos, unión, intersección, complemento y conteo con diagramas de Venn.`],
    'linear-functions': [R`Funciones lineales y gráficas`, R`Coordenadas, pendiente, cortes con los ejes, ecuaciones de rectas, rectas paralelas y perpendiculares.`],
    'systems': [R`Sistemas de ecuaciones lineales`, R`Dos ecuaciones con dos incógnitas por sustitución y reducción; problemas.`],
    'pythagoras': [R`Teorema de Pitágoras`, R`Lados de triángulos rectángulos, ternas pitagóricas, distancias y cómo comprobar si un triángulo es rectángulo.`],
    'circles': [R`Circunferencia y círculo`, R`Longitud de la circunferencia, área, arcos y sectores, y ángulos en la circunferencia.`],
    'solids': [R`Área y volumen de cuerpos`, R`Prismas, cilindros, pirámides, conos y esferas.`],
    'statistics-jh': [R`Estadística: centralización y dispersión`, R`Media, mediana y moda en listas y tablas de frecuencias, y cómo cambian con nuevos datos.`],
    'probability-jh': [R`Probabilidad`, R`Espacio muestral, probabilidad de un suceso, suceso contrario y frecuencia esperada.`],
    'social-arith': [R`Matemática financiera: ganancia, descuento e interés`, R`Ganancia y pérdida, porcentaje de ganancia, descuento e impuestos, interés simple, peso bruto y neto.`],
    'patterns': [R`Patrones numéricos y sucesiones`, R`Patrones aritméticos y geométricos, el término general y sucesiones especiales.`],
    'similarity': [R`Transformaciones y semejanza`, R`Traslaciones, simetrías, giros y homotecias; figuras semejantes y razón de semejanza.`],
    'quadratics': [R`Ecuaciones de segundo grado`, R`Factorización, completar el cuadrado, fórmula general, discriminante, suma y producto de raíces.`],
    'quad-functions': [R`Funciones cuadráticas y parábolas`, R`Vértice, eje de simetría, forma canónica, máximos y mínimos, y aplicaciones.`],
    'functions': [R`Funciones, composición e inversas`, R`Dominio y recorrido, funciones compuestas, funciones inversas y funciones definidas a trozos.`],
    'exp-log': [R`Exponentes y logaritmos`, R`Exponentes racionales, propiedades de los logaritmos, ecuaciones exponenciales y logarítmicas, crecimiento.`],
    'sequences': [R`Progresiones y series`, R`Progresiones aritméticas y geométricas, sumas, series geométricas infinitas y notación sigma.`],
    'trig-basics': [R`Trigonometría: razones y circunferencia goniométrica`, R`SOH-CAH-TOA, valores exactos, radianes, la circunferencia unitaria y ángulos de elevación.`],
    'trig-identities': [R`Identidades y ecuaciones trigonométricas`, R`Identidades pitagóricas, de suma y de ángulo doble; resolución de ecuaciones trigonométricas.`],
    'triangle-rules': [R`Teoremas del seno y del coseno, y área`, R`Resolver cualquier triángulo con los teoremas del seno y del coseno, y calcular su área.`],
    'polynomials': [R`Polinomios y teorema del resto`, R`Grado y operaciones, división de polinomios, teoremas del resto y del factor, relaciones de Vieta en cúbicas.`],
    'matrices': [R`Matrices`, R`Operaciones con matrices, producto, determinantes e inversas de matrices 2×2.`],
    'vectors': [R`Vectores`, R`Componentes, módulo, operaciones con vectores, producto escalar y ángulo entre vectores.`],
    'limits': [R`Límites`, R`Sustitución directa, indeterminaciones, límites en el infinito, límites trigonométricos y continuidad.`],
    'derivatives': [R`Derivadas`, R`La derivada como pendiente, regla de la potencia, rectas tangentes, puntos estacionarios y optimización.`],
    'integrals': [R`Integrales`, R`Primitivas, regla de la potencia para integrar, integrales definidas y áreas.`],
    'combinatorics': [R`Conteo, permutaciones y combinaciones`, R`Principio multiplicativo, factoriales, permutaciones, combinaciones y el binomio de Newton.`],
    'probability-sh': [R`Probabilidad: reglas y condicionada`, R`Reglas de la suma y del producto, independencia, probabilidad condicionada y teorema de Bayes.`],
    'statistics-sh': [R`Estadística: dispersión y distribuciones`, R`Cuartiles y rango intercuartílico, valores atípicos, varianza y desviación típica, datos agrupados y transformaciones.`],
    'conics': [R`Geometría analítica y circunferencias`, R`Punto medio y distancias, ecuación de la circunferencia, forma general, tangentes y parábolas.`],
    'linear-programming': [R`Programación lineal`, R`Restricciones, región factible, función objetivo y método de los vértices.`],
    'logic': [R`Lógica matemática`, R`Proposiciones, conectivos, tablas de verdad, recíproco y contrarrecíproco, cuantificadores y razonamientos válidos.`],
    'diff-techniques': [R`Técnicas de derivación`, R`Reglas del producto, del cociente y de la cadena, derivadas exponenciales y logarítmicas, derivación implícita.`],
    'diff-applications': [R`Aplicaciones de la derivada`, R`Regla de L'Hôpital, optimización, razones de cambio relacionadas, aproximación lineal, concavidad y teorema del valor medio.`],
    'integration-techniques': [R`Técnicas de integración`, R`Cambio de variable, integración por partes, fracciones parciales, integrales trigonométricas e impropias.`],
    'integral-applications': [R`Aplicaciones de la integral`, R`Área entre curvas, volúmenes de revolución, valor medio, longitud de arco y trabajo.`],
    'series': [R`Sucesiones y series infinitas`, R`Criterios de convergencia, series geométricas y telescópicas, series de potencias, series de Taylor y Maclaurin.`],
    'multivariable': [R`Cálculo en varias variables`, R`Derivadas parciales, gradiente, derivada direccional, puntos críticos, integrales dobles y multiplicadores de Lagrange.`],
    'ode': [R`Ecuaciones diferenciales`, R`EDO de primer orden separables y lineales, crecimiento y decaimiento, y ecuaciones lineales de segundo orden.`],
    'linear-algebra': [R`Álgebra lineal`, R`Determinantes, rango, sistemas lineales, independencia, valores y vectores propios.`],
    'complex': [R`Números complejos`, R`Operaciones con i, conjugado, módulo y argumento, forma polar y teorema de De Moivre.`],
    'distributions': [R`Distribuciones de probabilidad`, R`Variables aleatorias, esperanza y varianza, distribuciones binomial, de Poisson y normal.`],
    'inference': [R`Inferencia estadística`, R`Distribuciones muestrales, intervalos de confianza, contrastes de hipótesis, errores y regresión.`],
    'discrete': [R`Matemática discreta`, R`Aritmética modular, algoritmo de Euclides, principios de conteo, recurrencias y teoría de grafos.`],
    'numerical': [R`Métodos numéricos`, R`Bisección y Newton–Raphson, reglas del trapecio y de Simpson, método de Euler y errores.`],
    'vector-calculus': [R`Cálculo vectorial`, R`Campos vectoriales, divergencia y rotacional, campos conservativos, integrales de línea y teorema de Green.`],
    'laplace': [R`Transformada de Laplace`, R`Tabla de transformadas, linealidad, traslación, transformada inversa y problemas de valor inicial.`],
  },
});

/* Español — núcleo + Primaria (valor posicional → factores) */
addT('es', {
  // core
  '1hnygwzeeez': R`Verdadero`,
  '12u8s6vu2gj': R`Falso`,
  '1mc3pmcca9i': R`Resta ⟦0⟧ en cada parte`,
  '1flhu7k9ohj': R`Suma ⟦0⟧ en cada parte`,
  '1g9usaftmli': R`Resta ⟦0⟧ en ambos lados`,
  'rcyxvbe5bx': R`Suma ⟦0⟧ en ambos lados`,
  'fc0sowzn7c': R`Idea clave`,
  '1oy7dzvank8': R`Ejemplo resuelto`,
  '1q1jscvjv55': R`Cuidado`,
  '1a2zghfpw7a': R`Escribe una fracción como 7/12 (las fracciones impropias valen).`,
  '2wu7e9ekt1': R`Un rectángulo de largo l y ancho w, un triángulo de base b y altura h, y un trapecio de lados paralelos a y b y altura h`,

  // place-value
  'i1ejiqva2l': R`
<p>Nuestro sistema de numeración usa diez cifras, del 0 al 9. La <b>posición</b> de una cifra indica su <b>valor</b>: cada posición vale diez veces más que la que tiene a su derecha.</p>
⟦0⟧
<p>En <b>5 382 417</b> la cifra 8 está en las decenas de millar, así que vale $8 \times 10\,000 = 80\,000$. La cifra 3 vale $300\,000$.</p>
<h3>Forma desarrollada</h3>
<p>Escribir un número como suma de los valores de sus cifras muestra cuánto vale cada una:</p>
⟦1⟧
<p>El 0 de las decenas <b>guarda el lugar</b>. Sin él, 4 307 se convertiría en 437.</p>
<h3>Comparar números</h3>
<p>Un número natural con más cifras es mayor. Si dos números tienen la misma cantidad de cifras, compáralos cifra a cifra desde la izquierda; decide la primera posición en la que se diferencian. Así, $52\,814 \gt 52\,781$ porque en las centenas $8 \gt 7$.</p>
<h3>Redondeo</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'gisuf2bt5s': R`4\,307 = 4\,000 + 300 + 7`,
  'k8yn6x5f0c': R`Millones`,
  '1y40p90zlus': R`Centenas de millar`,
  '8rp03918ge': R`Decenas de millar`,
  'y6ohcicccm': R`Unidades de millar`,
  '2bpfsjyefrh': R`Centenas`,
  '12cshgy5to0': R`Decenas`,
  '48l24kh7s0': R`Unidades`,
  '1h333nq85ni': R`<p>Para redondear a una posición, mira la cifra <b>que está justo a su derecha</b>.</p><ul><li>5 o más: redondea <b>hacia arriba</b> (suma uno a la cifra de redondeo).</li><li>4 o menos: redondea <b>hacia abajo</b> (la cifra de redondeo no cambia).</li></ul><p>Todas las cifras posteriores a la posición de redondeo pasan a ser 0.</p>`,
  '264ckm0rxdd': R`<p>Redondea 3 462 a la centena más cercana.</p><ol><li>La cifra de las centenas es 4. La de su derecha (decenas) es 6.</li><li>6 es 5 o más, así que redondeamos hacia arriba: el 4 pasa a ser 5.</li><li>Respuesta: <b>3 500</b>.</li></ol><p>A la decena más cercana, 3 462 es 3 460; a la unidad de millar más cercana es 3 000.</p>`,
  '1b014azrv9g': R`<p>Mira solo la cifra siguiente. 3 449 redondeado a la centena es 3 400, no 3 500: nunca redondees por etapas.</p>`,
  'rwpycs3uy5': R`las unidades`,
  '48iq3xbr78': R`las decenas`,
  'evjeoal0o3': R`las centenas`,
  '1wg89nrnvw3': R`las unidades de millar`,
  'humdf3fhgn': R`las decenas de millar`,
  '7vj2b9yekp': R`las centenas de millar`,
  '1vvnln22yvc': R`los millones`,
  '1k42apyhj2s': R`En el número <b>⟦0⟧</b>, ¿cuál es el valor de la cifra de <b>⟦1⟧</b>?`,
  '1wls65y7jfe': R`La cifra de ⟦0⟧ es ⟦1⟧, así que su valor es $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$.`,
  '2ds03ywxgdr': R`decena`,
  'ct0emjf1zx': R`centena`,
  '2bm9zrq1v5b': R`unidad de millar`,
  '1p8grh6ppw3': R`Redondea <b>⟦0⟧</b> a la ⟦1⟧ más cercana.`,
  'ucpruditlj': R`La cifra que sigue a ⟦0⟧ es ⟦1⟧. ⟦2⟧: ⟦3⟧ ≈ <b>⟦4⟧</b>.`,
  '10zj9kfgz44': R`Es 5 o más, así que se redondea hacia arriba`,
  '2bd3oxw8hoc': R`Es menor que 5, así que se redondea hacia abajo`,
  '2eobe5h8vjz': R`¿Qué número es igual a $⟦0⟧$?`,
  '12ct2r4vi1w': R`Suma los valores posicionales: $⟦0⟧ = ⟦1⟧$. Los ceros ocupan las posiciones vacías.`,
  '1thskfj0azj': R`¿Cuál de estos números es el <b>mayor</b>?<br>⟦0⟧`,
  '1qw72id1e2m': R`¿Cuál de estos números es el <b>menor</b>?<br>⟦0⟧`,
  'cdwrnsn0bw': R`Todos tienen cinco cifras, así que compara desde la izquierda. Ordenados de ⟦0⟧: ⟦1⟧.`,
  '1hf4gas3oen': R`mayor a menor`,
  '1uhrj1iztnj': R`menor a mayor`,

  // add-sub
  '2crp1hgq6k1': R`
<p>La suma junta cantidades; la resta calcula lo que queda o la <b>diferencia</b> entre dos cantidades. Con números grandes usamos el <b>algoritmo en columna</b>: alinea las cifras por su valor posicional y trabaja desde la columna de las unidades hacia la izquierda.</p>
<h3>Sumar llevando</h3>
<p>Cuando una columna suma 10 o más, escribe la cifra de las unidades y <b>lleva</b> la decena a la columna siguiente.</p>
⟦0⟧
<h3>Restar pidiendo prestado</h3>
<p>Si la cifra de arriba de una columna es menor que la de abajo, <b>pide prestado</b> (reagrupa) uno a la columna siguiente: eso suma 10 a la columna actual.</p>
⟦1⟧
⟦2⟧
<h3>Problemas con enunciado</h3>
<p>Palabras como <i>en total, juntos, más, aumentó</i> suelen indicar suma. Palabras como <i>quedan, sobran, diferencia, cuántos más, menos</i> suelen indicar resta. Pregúntate siempre qué pide realmente el problema.</p>
⟦3⟧`,
  '12bc1hhhzgf': R`<p>$4\,587 + 2\,846$</p><ol><li>Unidades: $7 + 6 = 13$ → escribe 3 y llevas 1.</li><li>Decenas: $8 + 4 + 1 = 13$ → escribe 3 y llevas 1.</li><li>Centenas: $5 + 8 + 1 = 14$ → escribe 4 y llevas 1.</li><li>Unidades de millar: $4 + 2 + 1 = 7$.</li></ol><p>Respuesta: <b>7 433</b>.</p>`,
  'dzfcdnot25': R`<p>$6\,204 - 1\,758$</p><ol><li>Unidades: 4 es menor que 8. La cifra de las decenas es 0, así que pedimos a las centenas: 204 pasa a ser 1 centena, 9 decenas y 14 unidades. $14 - 8 = 6$.</li><li>Decenas: $9 - 5 = 4$.</li><li>Centenas: 1 es menor que 7, así que pedimos una unidad de millar: $11 - 7 = 4$.</li><li>Unidades de millar: $5 - 1 = 4$.</li></ol><p>Respuesta: <b>4 446</b>.</p>`,
  '1myl5xbp4pm': R`<p>La suma y la resta se deshacen mutuamente. Comprueba una resta sumando: $4\,446 + 1\,758 = 6\,204$ ✓. Así también se hallan números desconocidos: si $\square + 348 = 1\,000$, entonces $\square = 1\,000 - 348 = 652$.</p>`,
  '23w41b37di3': R`<p>Un error frecuente es restar en cada columna la cifra menor de la mayor (por ejemplo, escribir $52 - 38 = 26$). Lo correcto es pedir prestado: $52 - 38 = 14$.</p>`,
  'jzpsrz7qv': R`Calcula $⟦0⟧ + ⟦1⟧$.`,
  '11vnennk127': R`Alinea las cifras por su valor posicional y suma desde las unidades, llevando cada vez que una columna llegue a 10 o más: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '2cqlmyuanc4': R`Calcula $⟦0⟧ - ⟦1⟧$.`,
  '217um699krb': R`Resta columna por columna desde las unidades, pidiendo prestado cuando la cifra de arriba sea menor: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$. Comprobación: $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '20q2iwal3wx': R`¿Qué número va en el recuadro? $\square + ⟦0⟧ = ⟦1⟧$`,
  '2vzsixgbwq': R`La resta deshace la suma: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '19k8gxx8enm': R`Una biblioteca tenía ⟦0⟧ libros. Recibió ⟦1⟧ libros nuevos y después prestó ⟦2⟧. ¿Cuántos libros quedan en la biblioteca?`,
  '22c2nbk22nn': R`Suma los libros nuevos y resta los prestados: $⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  'tjgizs9fjl': R`Mía`,
  '1if8m7vmopf': R`Leo`,
  '12t8l5omzh1': R`Sari`,
  '26mi5um5hxm': R`Budi`,
  '5ladyusi9v': R`Ana`,
  '1e0eos7e481': R`Tomás`,
  '28xor3epndt': R`Dewi`,
  'fl1dlgr4st': R`Raka`,
  'b83c8sskmz': R`En un juego, ⟦0⟧ consiguió ⟦1⟧ puntos y ⟦2⟧ consiguió ⟦3⟧. ¿Cuántos puntos más consiguió ⟦4⟧?`,
  'h14zpmlfj7': R`«Cuántos más» pide la diferencia: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // mul-div
  '12j6s3mfail': R`
<p>La <b>multiplicación</b> es una suma repetida de grupos iguales: $4 \times 6$ significa 4 grupos de 6, es decir, $6 + 6 + 6 + 6 = 24$. La <b>división</b> reparte una cantidad en grupos iguales: $24 \div 6 = 4$.</p>
⟦0⟧
<h3>Multiplicar números más grandes</h3>
<p>Descompón uno de los números según sus valores posicionales, multiplica cada parte y suma (es la propiedad distributiva en acción):</p>
⟦1⟧
<h3>División y resto</h3>
<p>Cuando un número no se divide exactamente, lo que sobra es el <b>resto</b>. Siempre es menor que el divisor.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '1rjytzik9fa': R`<p>La multiplicación y la división se deshacen mutuamente: $4 \times 6 = 24 \iff 24 \div 6 = 4$.</p><ul><li>En la multiplicación el orden no importa: $a \times b = b \times a$.</li><li>La multiplicación se distribuye sobre la suma: $a \times (b + c) = a \times b + a \times c$.</li></ul>`,
  '20j6lyqvksk': R`347 \times 26 = 347 \times 20 + 347 \times 6 = 6\,940 + 2\,082 = 9\,022`,
  '11dzvmewikb': R`47 \div 5 = 9 \text{ resto } 2 \qquad \text{porque } 5 \times 9 + 2 = 47`,
  '1z8tho01ahp': R`<p>150 estudiantes van de excursión. En cada autobús caben 40. ¿Cuántos autobuses se necesitan?</p><p>$150 \div 40 = 3$, resto 30. Tres autobuses llevan a 120 estudiantes; los otros 30 también necesitan autobús, así que hacen falta <b>4 autobuses</b>.</p>`,
  '1g33a99esai': R`<p>En los problemas, decide qué significa el resto. «¿Cuántos autobuses se <i>necesitan</i>?» redondea hacia arriba; «¿cuántas cajas se pueden llenar <i>por completo</i>?» redondea hacia abajo.</p>`,
  '10v4h321li3': R`Calcula $⟦0⟧ \times ⟦1⟧$.`,
  'h89yrotk3q': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, es decir, ⟦3⟧ grupos de ⟦4⟧.`,
  '2gi38wc5lfl': R`Descompón ⟦0⟧ en ⟦1⟧ + ⟦2⟧: $⟦3⟧ \times ⟦4⟧ + ⟦5⟧ \times ⟦6⟧ = ⟦7⟧ + ⟦8⟧ = ⟦9⟧$.`,
  '2g99zk4sonb': R`Calcula $⟦0⟧ \div ⟦1⟧$.`,
  'cggzswltjw': R`La división deshace la multiplicación: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, así que $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$.`,
  '7njwte8n8l': R`¿Cuál es el resto de dividir ⟦0⟧ entre ⟦1⟧?`,
  '1c2kbih8aei': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ y $⟦3⟧ - ⟦4⟧ = ⟦5⟧$, así que $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$, resto <b>⟦9⟧</b>.`,
  '23lffvpxlg2': R`huevos`,
  'isjmxkkk5m': R`magdalenas`,
  'qd054tvbk9': R`lápices`,
  '22kysml68r1': R`botellas`,
  '29eftju2pbv': R`Hay que guardar ⟦0⟧ ⟦1⟧ en cajas donde caben ⟦2⟧ en cada una. ¿Cuántas cajas se necesitan para guardarlos todos?`,
  '1pnydk75epc': R`Una tienda reparte ⟦0⟧ ⟦1⟧ en cajas de ⟦2⟧. ¿Cuántas cajas se pueden llenar <b>por completo</b>?`,
  '9w986eh8jp': R`$⟦0⟧ \div ⟦1⟧ = ⟦2⟧$, resto ⟦3⟧. ⟦4⟧`,
  'dnbly4c6lj': R`Sobran ⟦0⟧ ⟦1⟧ que también necesitan caja, así que hacen falta <b>⟦2⟧</b> cajas.`,
  'doig2i1un2': R`Solo se llenan <b>⟦0⟧</b> cajas; sobran ⟦1⟧ ⟦2⟧.`,
  '5ki7426a69': R`Un salón tiene ⟦0⟧ filas de sillas con ⟦1⟧ sillas en cada fila. ¿Cuántas sillas hay en total?`,
  '13ytah9dyhs': R`Filas iguales significan multiplicación: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ sillas.`,

  // order-ops
  'jeo8qdfjh8': R`
<p>Cuando un cálculo tiene varias operaciones, todos debemos hacerlas en el mismo orden; si no, la misma expresión daría resultados distintos. El orden acordado suele recordarse con reglas como <b>PAPOMUDAS</b> o <b>PEMDAS</b> (paréntesis, potencias, multiplicación y división, suma y resta).</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '100vdkuw7cv': R`Paso`,
  '1ata9ppdhpl': R`Operación`,
  '1i56r47suu5': R`Ejemplo`,
  'bct94f2duc': R`Paréntesis`,
  '152taipeiq': R`Potencias y raíces`,
  '1dq9oio2vod': R`Multiplicación y división, de izquierda a derecha`,
  'ety1fhjk85': R`Suma y resta, de izquierda a derecha`,
  '20c9xxbu7nh': R`<p>La multiplicación y la división tienen la <b>misma</b> prioridad, y lo mismo ocurre con la suma y la resta. Dentro de un mismo nivel, se trabaja de <b>izquierda a derecha</b>.</p>`,
  'vpi6gbf1j5': R`<p>Calcula $20 - 8 \div 2 \times 3 + 1$.</p><ol><li>Primero división y multiplicación, de izquierda a derecha: $8 \div 2 = 4$ y luego $4 \times 3 = 12$.</li><li>Queda $20 - 12 + 1$, de izquierda a derecha: $8 + 1 = 9$.</li></ol><p>Respuesta: <b>9</b>.</p>`,
  'cx7umbw06o': R`<p>Calcula $(8 + 4) \times 3 - 2^3$.</p><ol><li>Paréntesis: $8 + 4 = 12$.</li><li>Potencias: $2^3 = 8$.</li><li>Multiplicación: $12 \times 3 = 36$.</li><li>Resta: $36 - 8 = 28$.</li></ol>`,
  '9qyvtl39mt': R`<p>«PEMDAS» no significa multiplicar antes de dividir. $12 \div 3 \times 2 = 8$, no $12 \div 6 = 2$.</p>`,
  '2boesugt2g3': R`Calcula $⟦0⟧ + ⟦1⟧ \times ⟦2⟧$.`,
  '18k6kdrqfh9': R`Primero multiplica: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Después suma: $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '13w7u6yvf66': R`Calcula $(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ - ⟦3⟧$.`,
  '1kgg8vz8ven': R`Paréntesis: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Multiplicación: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Resta: $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  'fpzk0whg2k': R`Calcula $⟦0⟧ - ⟦1⟧ \div ⟦2⟧ \times ⟦3⟧$.`,
  '6i0q5bykj1': R`Primero división y multiplicación, de izquierda a derecha: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ y luego $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Por último, $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1f77fy0xem': R`Calcula $⟦0⟧ + ⟦1⟧^2 - ⟦2⟧$.`,
  'isber9l7mx': R`Primero las potencias: $⟦0⟧^2 = ⟦1⟧$. Después, de izquierda a derecha: $⟦2⟧ + ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '12cd51d72z4': R`Calcula $⟦0⟧ \times (⟦1⟧ + ⟦2⟧) \div ⟦3⟧$.`,
  '1rwp21i838c': R`Paréntesis: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Después, de izquierda a derecha: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ y $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$.`,
  '16yj15t3yvl': R`Calcula $⟦0⟧ - ⟦1⟧ + ⟦2⟧$.`,
  '2g7vu4g2g7r': R`La suma y la resta tienen la misma prioridad, así que se va de izquierda a derecha: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$ y luego $⟦3⟧ + ⟦4⟧ = ⟦5⟧$. Sumar primero $⟦6⟧ + ⟦7⟧$ daría, erróneamente, ⟦8⟧.`,

  // factors
  'obrpwbkvog': R`
<p>Un <b>divisor</b> (o factor) de un número lo divide exactamente. Un <b>múltiplo</b> de un número es ese número multiplicado por un número natural.</p>
<ul><li>Divisores de 12: 1, 2, 3, 4, 6, 12 (van por parejas: $1 \times 12$, $2 \times 6$, $3 \times 4$).</li><li>Múltiplos de 12: 12, 24, 36, 48, …</li></ul>
<h3>Números primos y compuestos</h3>
<p>Un número <b>primo</b> tiene exactamente dos divisores: el 1 y él mismo (2, 3, 5, 7, 11, 13, …). Un número <b>compuesto</b> tiene más de dos divisores. El 1 no es ni primo ni compuesto, y el 2 es el único primo par.</p>
⟦0⟧
<h3>Descomposición en factores primos</h3>
<p>Todo número natural mayor que 1 se puede escribir como producto de primos de una única manera. Usa un árbol de factores: sigue dividiendo hasta que cada rama termine en un primo.</p>
⟦1⟧
<h3>MCD y mcm</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '10ydoy6638h': R`Divisible entre`,
  '1u2j0a6t91o': R`Criterio`,
  '1fsfip1h2ap': R`la última cifra es par`,
  '26v1i9jjmmd': R`la suma de las cifras es divisible entre 3`,
  'irydz9sqkz': R`las dos últimas cifras forman un múltiplo de 4`,
  'mwe5nagqkl': R`la última cifra es 0 o 5`,
  'uitu5og8wz': R`es divisible entre 2 y entre 3`,
  'h955yik0fz': R`la suma de las cifras es divisible entre 9`,
  '185jxbw7gii': R`la última cifra es 0`,
  'sxhmc0c8k9': R`<p>El <b>máximo común divisor</b> (MCD) es el mayor número que divide a ambos números. El <b>mínimo común múltiplo</b> (mcm) es el menor número que es múltiplo de ambos.</p><p>Con la descomposición en primos: el MCD toma cada primo común con su <b>menor</b> exponente; el mcm toma todos los primos con su <b>mayor</b> exponente.</p>`,
  '2dcgjf0y6e9': R`<p>$24 = 2^3 \times 3$ y $36 = 2^2 \times 3^2$.</p><p>MCD $= 2^2 \times 3 = 12$. &nbsp; mcm $= 2^3 \times 3^2 = 72$.</p><p>Comprobación: $\text{MCD} \times \text{mcm} = 12 \times 72 = 864 = 24 \times 36$ ✓ (esto se cumple siempre para dos números).</p>`,
  '13dl2xstaq0': R`<p>Los problemas de MCD tratan de <i>repartir en grupos iguales</i> (el mayor tamaño de grupo). Los de mcm tratan de <i>cosas que vuelven a coincidir</i> (la primera vez que los ciclos se alinean).</p>`,
  '1v4c3frqq3d': R`¿Cuál es el máximo común divisor (MCD) de ⟦0⟧ y ⟦1⟧?`,
  '8l33q80f9g': R`Divisores de ⟦0⟧: ⟦1⟧.<br>Divisores de ⟦2⟧: ⟦3⟧.<br>El mayor divisor que comparten es <b>⟦4⟧</b>.`,
  'slhedaglcs': R`¿Cuál es el mínimo común múltiplo (mcm) de ⟦0⟧ y ⟦1⟧?`,
  '1gi8rsfc6pi': R`Múltiplos de ⟦0⟧: ⟦1⟧, …<br>Múltiplos de ⟦2⟧: ⟦3⟧, …<br>El primero que comparten es <b>⟦4⟧</b>.`,
  '15d9oj1fzj1': R`¿Cuál de estos números es <b>primo</b>?`,
  'xvmwee4nwk': R`⟦0⟧ tiene exactamente dos divisores, 1 y ⟦1⟧. Los demás son compuestos: ⟦2⟧.`,
  '151txls1vlc': R`¿Cuántos divisores tiene ⟦0⟧?`,
  '1tllv5888z': R`Escribe las parejas de divisores: ⟦0⟧. Los divisores son ⟦1⟧, es decir, <b>⟦2⟧</b> divisores.`,
  'rjpmb07v6a': R`¿Cuál es la descomposición en factores primos de ⟦0⟧?`,
  '162lv91sf8i': R`Divide sucesivamente entre primos: ⟦0⟧ = ⟦1⟧. Todos los factores son primos y, al multiplicarlos, se obtiene ⟦2⟧.`,
  '1dcblj5tqu6': R`Hana tiene ⟦0⟧ cuentas rojas y ⟦1⟧ azules. Hace pulseras idénticas usando todas las cuentas, cada una con el mismo número de cuentas rojas y el mismo número de azules. ¿Cuál es el mayor número de pulseras que puede hacer?`,
  '16f0mrep69j': R`El número de pulseras debe dividir a ⟦0⟧ y a ⟦1⟧, así que busca el MCD: $\text{MCD}(⟦2⟧, ⟦3⟧) = ⟦4⟧$. Puede hacer <b>⟦5⟧</b> pulseras, cada una con ⟦6⟧ cuentas rojas y ⟦7⟧ azules.`,
  '76jyl5vip0': R`Dos luces acaban de destellar a la vez. Una destella cada ⟦0⟧ segundos y la otra cada ⟦1⟧ segundos. ¿Dentro de cuántos segundos volverán a destellar juntas?`,
  '2ddehafzm6d': R`segundos`,
  '1mfkmnfob4d': R`Destellan juntas en los múltiplos comunes de ⟦0⟧ y ⟦1⟧. El primero es el mcm: <b>⟦2⟧</b> segundos.`,
});

/* Español — Primaria (fracciones → medidas) */
addT('es', {
  // fractions
  '1j59vvw5wlm': R`
<p>Una <b>fracción</b> $\frac{a}{b}$ significa $a$ partes de $b$ partes iguales. El número de arriba es el <b>numerador</b>; el de abajo, el <b>denominador</b>.</p>
<h3>Fracciones equivalentes y fracción irreducible</h3>
<p>Si multiplicas o divides el numerador y el denominador por el mismo número, obtienes una fracción equivalente: $\frac{2}{3} = \frac{4}{6} = \frac{10}{15}$. Para <b>simplificar</b>, divide ambos entre su MCD:</p>
⟦0⟧
<h3>Números mixtos</h3>
<p>$2\frac{1}{3}$ significa $2 + \frac{1}{3}$. Como fracción impropia: $2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$.</p>
<h3>Sumar y restar</h3>
⟦1⟧
⟦2⟧
<h3>Multiplicar y dividir</h3>
⟦3⟧
<p>Para dividir, <b>deja</b> la primera fracción, <b>cambia</b> ÷ por × y <b>da la vuelta</b> a la segunda fracción.</p>
⟦4⟧
<h3>Fracción de una cantidad</h3>
<p>Divide entre el denominador y multiplica por el numerador: $\frac{3}{8}$ de $40 = (40 \div 8) \times 3 = 15$.</p>
⟦5⟧`,
  'twupiargma': R`<p>Solo se pueden sumar o restar fracciones con el <b>mismo denominador</b>. Escríbelas con un denominador común (el mcm de los denominadores) y después suma o resta los numeradores.</p>`,
  'cscyf10ta5': R`\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \qquad\qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}`,
  'bcas553r7s': R`<p>Nunca sumes los denominadores: $\frac{1}{2} + \frac{1}{3}$ es $\frac{5}{6}$, no $\frac{2}{5}$.</p>`,
  'ixkiz8sse6': R`Escribe $\frac{⟦0⟧}{⟦1⟧}$ como fracción irreducible.`,
  '10gte9lmsdd': R`Escribe una fracción como 3/4.`,
  '1pjukmxebsh': R`El MCD de ⟦0⟧ y ⟦1⟧ es ⟦2⟧. Divide ambos entre ⟦3⟧: $\frac{⟦4⟧ \div ⟦5⟧}{⟦6⟧ \div ⟦7⟧} = \frac{⟦8⟧}{⟦9⟧}$.`,
  'nvda2ntfzh': R`Calcula $\frac{⟦0⟧}{⟦1⟧} + \frac{⟦2⟧}{⟦3⟧}$. Da el resultado como fracción irreducible.`,
  '227nw1m409d': R`Denominador común ⟦0⟧: $\frac{⟦1⟧}{⟦2⟧} + \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '1mtmp0absry': R`Calcula $\frac{⟦0⟧}{⟦1⟧} - \frac{⟦2⟧}{⟦3⟧}$. Da el resultado como fracción irreducible.`,
  'gyruuxmt48': R`Denominador común ⟦0⟧: $\frac{⟦1⟧}{⟦2⟧} - \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '2amnbki6syc': R`Calcula $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧}$. Da el resultado como fracción irreducible.`,
  '1oq98j0zwy6': R`Multiplica numeradores y denominadores: $\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧ \times ⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '4ip7z0hj87': R`Calcula $\frac{⟦0⟧}{⟦1⟧} \div \frac{⟦2⟧}{⟦3⟧}$. Da el resultado como fracción irreducible.`,
  '1unu6p3t9n0': R`Deja, cambia, da la vuelta: $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '2ebc0tw6di0': R`¿Cuánto es $\frac{⟦0⟧}{⟦1⟧}$ de ⟦2⟧?`,
  'vi27l05tmq': R`Divide entre el denominador y multiplica por el numerador: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ y $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '17rm8piimg0': R`Escribe $⟦0⟧\frac{⟦1⟧}{⟦2⟧}$ como fracción impropia.`,
  '1vkdspzdrbu': R`Escribe una fracción como 11/4.`,
  '1o401nhusn': R`Entero × denominador + numerador: $⟦0⟧ \times ⟦1⟧ + ⟦2⟧ = ⟦3⟧$. El denominador se mantiene: $\frac{⟦4⟧}{⟦5⟧}$.`,
  'kune7g17fg': R`¿Qué fracción es la <b>mayor</b>?`,
  '1lvlk3jpc2g': R`¿Qué fracción es la <b>menor</b>?`,
  '1or6yhfdw2': R`Compáralas como decimales (o con un denominador común): ⟦0⟧. La mayor es $⟦1⟧$.`,
  '2er4a94vvmc': R`Compáralas como decimales (o con un denominador común): ⟦0⟧. La menor es $⟦1⟧$.`,

  // decimals
  '2663pva71c8': R`
<p>Los decimales amplían el valor posicional a la derecha de las unidades. Cada posición vale la décima parte de la que tiene a su izquierda.</p>
⟦0⟧
<p>Así, $47{,}305 = 40 + 7 + \frac{3}{10} + \frac{0}{100} + \frac{5}{1000}$.</p>
<h3>Comparar decimales</h3>
<p>Dales a los números la misma cantidad de cifras decimales añadiendo ceros y después compáralos: $0{,}5 = 0{,}50 \gt 0{,}45$. ¡Un decimal más largo no es necesariamente mayor!</p>
<h3>Sumar y restar</h3>
⟦1⟧
⟦2⟧
<h3>Multiplicar</h3>
<p>Multiplica como si no hubiera comas y cuenta cuántas cifras decimales tienen en total los factores: el resultado tiene esas mismas cifras decimales.</p>
⟦3⟧
<h3>Dividir y convertir</h3>
<p>Multiplicar por 10, 100 o 1000 desplaza las cifras 1, 2 o 3 lugares hacia la izquierda (el número crece); dividir las desplaza hacia la derecha. Una fracción se convierte en decimal dividiendo el numerador entre el denominador: $\frac{3}{8} = 3 \div 8 = 0{,}375$.</p>
<h3>Redondear decimales</h3>
<p>La regla es la misma que con los números naturales: mira la cifra siguiente. $6{,}847$ redondeado a las décimas es $6{,}8$; a las centésimas, $6{,}85$.</p>
⟦4⟧`,
  'yhxj3mz2az': R`Décimas`,
  '1usmp59h50n': R`Centésimas`,
  'biszmhnvcw': R`Milésimas`,
  '29ru7wnae4a': R`<p>Alinea las <b>comas decimales</b>, completa con ceros los lugares vacíos y suma o resta como con los números naturales.</p>`,
  '1refy6cjloa': R`<p>$12{,}7 + 3{,}45$: escribe $12{,}70 + 3{,}45 = 16{,}15$.</p>`,
  '1lqqzrepgzp': R`1{,}3 \times 0{,}24: \quad 13 \times 24 = 312 \;\Rightarrow\; 0{,}312 \quad (1 + 2 = 3 \text{ decimales})`,
  'juf948b8yc': R`<p>$\frac{3}{4}$ es 0,75, no 3,4. La raya de fracción significa dividir.</p>`,
  '11m0f3xnsds': R`Alinea las comas (escribe ⟦0⟧ como ⟦1⟧) y suma: $⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'qfevgwaqck': R`Alinea las comas y resta: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '1p6qy0zwa3u': R`Olvida las comas: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. En el enunciado hay ⟦3⟧, así que el resultado es <b>⟦4⟧</b>.`,
  'uqon6l82ny': R`1 cifra decimal`,
  'tx8fdinl8c': R`2 cifras decimales`,
  'b7wqcpujtu': R`Escribe $\frac{⟦0⟧}{⟦1⟧}$ como número decimal.`,
  '1ufy8j9fr2y': R`Divide el numerador entre el denominador: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$.`,
  'vje0snups3': R`décima`,
  '1liz42210hc': R`las décimas`,
  '104jyqiqg9x': R`centésima`,
  '10lk6io95d0': R`las centésimas`,
  '65m0asa80m': R`unidad`,
  'elqb7vv91e': R`Redondea ⟦0⟧ a la ⟦1⟧ más cercana.`,
  '10rdjn6n7af': R`Mira la cifra que sigue a ⟦0⟧ y redondea ⟦1⟧ a <b>⟦2⟧</b>.`,
  'srl9a8gbof': R`¿Qué decimal es el <b>mayor</b>? &nbsp;⟦0⟧`,
  'gs5zz0z26m': R`¿Qué decimal es el <b>menor</b>? &nbsp;⟦0⟧`,
  '1ddc7akhylh': R`Escríbelos todos con tres cifras decimales: ⟦0⟧. El mayor es <b>⟦1⟧</b>.`,
  'clxur1r60o': R`Escríbelos todos con tres cifras decimales: ⟦0⟧. El menor es <b>⟦1⟧</b>.`,

  // percent
  'r0jl598zxh': R`
<p><b>Por ciento</b> significa «de cada 100»: $35\% = \frac{35}{100} = 0{,}35$.</p>
⟦0⟧
<h3>Las tres preguntas básicas</h3>
⟦1⟧
⟦2⟧
<h3>Aumentos, disminuciones y descuentos</h3>
<p>Un descuento del $20\%$ sobre 80 dólares ahorra $0{,}2 \times 80 = 16$ dólares, así que el precio rebajado es $80 - 16 = 64$ dólares. Más rápido: pagas el $80\%$ del precio, $0{,}8 \times 80 = 64$.</p>
<p>Un aumento del $p\%$ multiplica por $1 + \frac{p}{100}$; una disminución multiplica por $1 - \frac{p}{100}$.</p>
⟦3⟧`,
  '2e1ivkcc9wi': R`Fracción`,
  '21lfn42y4af': R`Decimal`,
  '1vaz29jk1go': R`Porcentaje`,
  '1lj32zs95qv': R`<ul><li><b>Porcentaje de una cantidad:</b> $p\% \text{ de } N = \frac{p}{100} \times N$.</li><li><b>¿Qué porcentaje de $b$ es $a$?</b> $\frac{a}{b} \times 100\%$.</li><li><b>Variación porcentual:</b> $\frac{\text{variación}}{\text{valor inicial}} \times 100\%$.</li></ul>`,
  '14zii6dfm6x': R`<p>El $15\%$ de $240 = 0{,}15 \times 240 = 36$. &nbsp; Truco mental: $10\% = 24$, $5\% = 12$, en total $36$.</p>`,
  '1xvrzy7qz2k': R`<p>La variación porcentual siempre se divide entre el valor <b>inicial</b>. Si un precio sube de 50 a 60, el aumento es del $\frac{10}{50} = 20\%$, no $\frac{10}{60}$.</p>`,
  '1gobo82ltgo': R`¿Cuánto es el ⟦0⟧% de ⟦1⟧?`,
  '17t3n1yumuv': R`$⟦0⟧\% \text{ de } ⟦1⟧ = \frac{⟦2⟧}{100} \times ⟦3⟧ = ⟦4⟧$.`,
  'x6d2i6pjon': R`¿Qué porcentaje de ⟦0⟧ es ⟦1⟧?`,
  '166o0aldzl7': R`Escribe $\frac{⟦0⟧}{⟦1⟧}$ como porcentaje.`,
  '1zxz5pk8y96': R`Una chaqueta cuesta ⟦0⟧ dólares y está rebajada un ⟦1⟧%. ¿Cuál es el precio rebajado?`,
  '1fg7th2fl2k': R`dólares`,
  '2d5e1injpmi': R`Descuento $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Precio rebajado $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ dólares.`,
  '188c7uiuhvg': R`Una ciudad tiene ⟦0⟧ habitantes. La población aumenta un ⟦1⟧%. ¿Cuál es la nueva población?`,
  '1z4269yh9sc': R`Aumento $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Nueva población $= ⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '24ppsoc883t': R`El precio de un libro pasa de ⟦0⟧ dólares a ⟦1⟧ dólares. ¿Cuál es el aumento porcentual?`,
  '18zivp6w2kh': R`El precio de un libro pasa de ⟦0⟧ dólares a ⟦1⟧ dólares. ¿Cuál es la disminución porcentual?`,
  '275khxq1hou': R`Variación: ⟦0⟧ dólares. Aumento porcentual: ⟦1⟧. Divide siempre entre el precio <b>inicial</b>.`,
  '260avkxsjev': R`Variación: ⟦0⟧ dólares. Disminución porcentual: ⟦1⟧. Divide siempre entre el precio <b>inicial</b>.`,

  // measurement
  'ymwylkippx': R`
<p>El sistema métrico se basa en potencias de diez, con prefijos que indican el tamaño de la unidad.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>El tiempo</h3>
<p>El tiempo <i>no</i> es decimal: una hora tiene 60 minutos, no 100. Para calcular el tiempo transcurrido, avanza por tramos: de 09:35 a 13:10 van 25 min (hasta las 10:00) + 3 h (hasta las 13:00) + 10 min = 3 h 35 min = 215 minutos.</p>
⟦4⟧`,
  '1vt4z8db5g': R`Prefijo`,
  '18vrcwaxvwu': R`Significado`,
  '1j1ms4p35q': R`Ejemplos`,
  '1837d2yv17g': R`kilo- (k)`,
  '6v2px6djsv': R`centi- (c)`,
  'cwnj8q0jlm': R`mili- (m)`,
  '4ynf6btmh8': R`Magnitud`,
  '1bcl39yblb4': R`Equivalencias`,
  '1yt0gqcalpk': R`Longitud`,
  '1pzczs2mse4': R`Masa`,
  '3r7jg1gvau': R`1 t (tonelada) = 1 000 kg · 1 kg = 1 000 g`,
  '25cg9l2x1fi': R`Capacidad`,
  '1ellrod4539': R`Tiempo`,
  '149iz1sgt': R`1 min = 60 s · 1 h = 60 min · 1 día = 24 h · 1 semana = 7 días`,
  '2g0x2qx5tup': R`<p>Al pasar de una unidad <b>mayor</b> a una <b>menor</b> necesitas más unidades: <b>multiplica</b>. De menor a mayor: <b>divide</b>.</p>`,
  'x1upmnco35': R`<p>$3{,}5 \text{ km} = 3{,}5 \times 1000 = 3\,500 \text{ m}$. &nbsp; $2\,750 \text{ g} = 2\,750 \div 1000 = 2{,}75 \text{ kg}$.</p>`,
  't9d9f384y5': R`<p>No restes horas como si fueran números corrientes: $13{:}10 - 9{:}35$ no es $1310 - 935 = 375$ minutos.</p>`,
  'q3mks7cmvp': R`Convierte ⟦0⟧ ⟦1⟧ a ⟦2⟧.`,
  '695i1r66ec': R`De una unidad mayor a una menor, así que multiplicamos: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$`,
  '1y3viru9jwt': R`De una unidad menor a una mayor, así que dividimos: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$`,
  '10b6a48v5cr': R`¿Cuántos minutos hay en ⟦0⟧ h ⟦1⟧ min?`,
  '1jj8c6wfcmv': R`minutos`,
  '26onbfrmj2m': R`1 hora = 60 minutos: $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ minutos.`,
  '2fcfktfjfb2': R`¿Cuántos segundos hay en ⟦0⟧ min ⟦1⟧ s?`,
  '1qje99e2i79': R`1 minuto = 60 segundos: $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ segundos.`,
  '1640fwpwscw': R`Un tren sale a las ⟦0⟧ y llega a las ⟦1⟧ del mismo día. ¿Cuántos minutos dura el viaje?`,
  '1bvdcgo9oas': R`De las ⟦0⟧ a las ⟦1⟧ hay ⟦2⟧ h ⟦3⟧ min, es decir, $⟦4⟧ \times 60 + ⟦5⟧ = ⟦6⟧$ minutos.`,
  'jz7sp6v78m': R`Suma ⟦0⟧ m ⟦1⟧ cm y ⟦2⟧ m ⟦3⟧ cm. Da el resultado en centímetros.`,
  '1v59jh3egmq': R`⟦0⟧ m ⟦1⟧ cm = ⟦2⟧ cm y ⟦3⟧ m ⟦4⟧ cm = ⟦5⟧ cm. Total: $⟦6⟧ + ⟦7⟧ = ⟦8⟧$ cm.`,
});

/* Español — Primaria (perímetro y área → datos) */
addT('es', {
  // perimeter-area
  '1xtxvjsrb9v': R`
<p>El <b>perímetro</b> es la longitud total del contorno de una figura (se mide en cm, m, …). El <b>área</b> es la cantidad de superficie que ocupa (se mide en unidades cuadradas: cm², m², …).</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Figuras compuestas</h3>
<p>Divide una figura en forma de L u otra figura compuesta en rectángulos y triángulos y suma sus áreas, o bien toma un rectángulo grande y resta la parte que falta.</p>
⟦4⟧`,
  '1be5xudsubm': R`Rectángulo, triángulo y trapecio: la altura siempre se mide perpendicular a la base.`,
  '1vbb9fjurso': R`Figura`,
  '1bkcetbdzwi': R`Perímetro`,
  '9g9qb013dx': R`Área`,
  '1klcvelpbpq': R`Rectángulo`,
  '1bkqo8aj6lu': R`Cuadrado (lado $s$)`,
  'aioobs5p8o': R`Triángulo`,
  'jpaxz6sbbc': R`suma de los tres lados`,
  '2ch6blse094': R`Paralelogramo`,
  '19b7alat8ps': R`suma de los lados`,
  'tfgy8ywg4m': R`Trapecio`,
  '2glmrmlwat4': R`<p>Un triángulo es la mitad de un rectángulo (o paralelogramo) con la misma base y la misma altura: de ahí viene el $\frac{1}{2}$.</p>`,
  'ro993i6hdb': R`<p>Un rectángulo mide 12 m por 5 m. Perímetro $= 2(12 + 5) = 34$ m. Área $= 12 \times 5 = 60$ m².</p>`,
  '23w7bd7ygef': R`<p>El perímetro usa unidades de longitud (m); el área, unidades cuadradas (m²). Además, la altura de un triángulo es perpendicular a la base, no el lado inclinado.</p>`,
  '3o5vcpwyc2': R`Un rectángulo mide ⟦0⟧ cm de largo y ⟦1⟧ cm de ancho. ¿Cuál es su perímetro?`,
  '1mlwgvw7rha': R`$P = 2(l + w) = 2(⟦0⟧ + ⟦1⟧) = ⟦2⟧$ cm.`,
  '29o3zagcnfc': R`Un jardín rectangular mide ⟦0⟧ m de largo y ⟦1⟧ m de ancho. ¿Cuál es su área?`,
  '1icmdazlj61': R`Un cuadrado tiene un área de ⟦0⟧ cm². ¿Cuál es su perímetro?`,
  '102zowaciba': R`Lado $= \sqrt{⟦0⟧} = ⟦1⟧$ cm, así que el perímetro es $4 \times ⟦2⟧ = ⟦3⟧$ cm.`,
  'b1fe5m9ffr': R`Un cuadrado tiene un perímetro de ⟦0⟧ cm. ¿Cuál es su área?`,
  '13amxb9l6l6': R`Lado $= ⟦0⟧ \div 4 = ⟦1⟧$ cm, así que el área es $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$ cm².`,
  'ahhkpun21u': R`Un triángulo tiene una base de ⟦0⟧ cm y una altura de ⟦1⟧ cm. ¿Cuál es su área?`,
  'vcwpcnyvdg': R`$A = \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm².`,
  'lassz20hi3': R`Un paralelogramo tiene una base de ⟦0⟧ m y una altura de ⟦1⟧ m. ¿Cuál es su área?`,
  '15yoihpm5qi': R`Un trapecio tiene lados paralelos de ⟦0⟧ cm y ⟦1⟧ cm y una altura de ⟦2⟧ cm. ¿Cuál es su área?`,
  '7f4u2yt2ji': R`$A = \frac{1}{2}(a + b)h = \frac{1}{2}(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '20cf1i7tqd7': R`Un rectángulo tiene un perímetro de ⟦0⟧ m y un largo de ⟦1⟧ m. ¿Cuánto mide de ancho?`,
  '146lgv8gvtr': R`$2(l + w) = ⟦0⟧$, así que $l + w = ⟦1⟧$ y $w = ⟦2⟧ - ⟦3⟧ = ⟦4⟧$ m.`,
  '1cisitk2yw7': R`Un suelo en forma de L se obtiene recortando un rectángulo de ⟦0⟧ m × ⟦1⟧ m de una esquina de un rectángulo de ⟦2⟧ m × ⟦3⟧ m. ¿Cuál es el área del suelo?`,
  '4fca853um1': R`Rectángulo grande menos el recorte: $⟦0⟧ \times ⟦1⟧ - ⟦2⟧ \times ⟦3⟧ = ⟦4⟧ - ⟦5⟧ = ⟦6⟧$ m².`,

  // volume-basic
  '27t1x8ik6r5': R`
<p>El <b>volumen</b> es el espacio que ocupa un cuerpo y se cuenta en <b>unidades cúbicas</b> (cm³, m³). Un cubo de 1 cm de arista tiene un volumen de 1 cm³.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Área total</h3>
<p>El área total es la suma de las áreas de todas las caras. Un ortoedro tiene tres pares de rectángulos iguales:</p>
⟦3⟧
⟦4⟧`,
  'eqp3lgj8pe': R`\text{Ortoedro: } V = l \times w \times h \qquad\qquad \text{Cubo: } V = s^3`,
  '1v18xwhq9wo': R`<p>La capacidad está ligada al volumen: $1 \text{ cm}^3 = 1 \text{ mL}$ y $1000 \text{ cm}^3 = 1 \text{ L}$. Además, $1 \text{ m}^3 = 1000 \text{ L}$.</p>`,
  '1y5vqy9gj8b': R`<p>Una pecera mide 50 cm de largo, 30 cm de ancho y 40 cm de alto.</p><p>$V = 50 \times 30 \times 40 = 60\,000 \text{ cm}^3 = 60 \text{ L}$.</p>`,
  'n4vhcjq4z5': R`A = 2(lw + lh + wh) \qquad\qquad \text{Cubo: } A = 6s^2`,
  '1rmk9dk27r1': R`<p>El volumen usa unidades cúbicas (cm³); el área total, unidades cuadradas (cm²). Si conoces el volumen y dos aristas, divide para hallar la tercera: $h = \frac{V}{l \times w}$.</p>`,
  '28sikx14trk': R`Un cubo tiene aristas de ⟦0⟧ cm. ¿Cuál es su volumen?`,
  'n0rlue63yl': R`$V = s^3 = ⟦0⟧^3 = ⟦1⟧$ cm³.`,
  '279nv9sb40d': R`Una caja mide ⟦0⟧ cm de largo, ⟦1⟧ cm de ancho y ⟦2⟧ cm de alto. ¿Cuál es su volumen?`,
  '18f8h5wvjps': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '2g4aunze98e': R`Un ortoedro tiene un volumen de ⟦0⟧ cm³. Mide ⟦1⟧ cm de largo y ⟦2⟧ cm de ancho. ¿Cuánto mide de alto?`,
  '12q7gqhxt7v': R`$h = \frac{V}{l \times w} = \frac{⟦0⟧}{⟦1⟧ \times ⟦2⟧} = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$ cm.`,
  '107zxyhfk8j': R`Un depósito mide ⟦0⟧ cm de largo, ⟦1⟧ cm de ancho y ⟦2⟧ cm de alto. ¿Cuántos litros de agua caben?`,
  '1xdyfr0a4jd': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³, y $1000 \text{ cm}^3 = 1 \text{ L}$, así que caben $⟦4⟧ \div 1000 = ⟦5⟧$ L.`,
  'j16awwfbde': R`Halla el área total de un ortoedro de ⟦0⟧ cm × ⟦1⟧ cm × ⟦2⟧ cm.`,
  '15zob952c7': R`$A = 2(lw + lh + wh) = 2(⟦0⟧ + ⟦1⟧ + ⟦2⟧) = ⟦3⟧$ cm².`,
  'b7w1jgcvao': R`Un cubo tiene un volumen de ⟦0⟧ cm³. ¿Cuánto mide cada arista?`,
  '29p9f2w08h': R`Buscamos $s^3 = ⟦0⟧$. Como $⟦1⟧ \times ⟦2⟧ \times ⟦3⟧ = ⟦4⟧$, cada arista mide ⟦5⟧ cm.`,

  // angles-shapes
  '1zhvjckeb0g': R`
<p>Los ángulos miden giros, en <b>grados</b> (°). Una vuelta completa mide $360^\circ$.</p>
⟦0⟧
⟦1⟧
<h3>Triángulos</h3>
<p><b>Equilátero</b>: tres lados iguales y todos sus ángulos de $60^\circ$. <b>Isósceles</b>: dos lados iguales y dos ángulos de la base iguales. <b>Escaleno</b>: ningún lado igual. Un triángulo <b>rectángulo</b> tiene un ángulo de $90^\circ$.</p>
<h3>Polígonos</h3>
<p>Un polígono de $n$ lados se puede dividir en $n - 2$ triángulos desde un vértice, así que</p>
⟦2⟧
<p>En un polígono <b>regular</b> todos los ángulos son iguales, así que cada uno mide $\frac{(n-2) \times 180^\circ}{n}$. Un hexágono regular tiene ángulos de $\frac{4 \times 180^\circ}{6} = 120^\circ$.</p>
⟦3⟧`,
  'k7wfdtk1dy': R`Tipo`,
  '1czpi6e2j2z': R`Medida`,
  '2eamokno2qd': R`Agudo`,
  '14yb8vum3mx': R`menos de $90^\circ$`,
  '10qgoh7fpcr': R`Recto`,
  '96isxim10t': R`exactamente $90^\circ$`,
  '29pmtotpc3r': R`Obtuso`,
  '18bc6xajfgk': R`entre $90^\circ$ y $180^\circ$`,
  'zb7exyin0e': R`Llano`,
  '1stepofrhwb': R`exactamente $180^\circ$`,
  '7pnkzl3606': R`Cóncavo`,
  '24bbunbptvm': R`entre $180^\circ$ y $360^\circ$`,
  '2douwrf277u': R`<ul><li>Los ángulos sobre una recta suman $180^\circ$.</li><li>Los ángulos alrededor de un punto suman $360^\circ$.</li><li>Los ángulos opuestos por el vértice son iguales.</li><li>Los ángulos de un triángulo suman $180^\circ$; los de un cuadrilátero, $360^\circ$.</li></ul>`,
  '1g2z1i7tlna': R`\text{suma de los ángulos interiores} = (n - 2) \times 180^\circ`,
  '9r6qtn8gpk': R`<p>Un triángulo tiene ángulos de $48^\circ$ y $75^\circ$. El tercero mide $180^\circ - 48^\circ - 75^\circ = 57^\circ$.</p>`,
  'fbd3n0ai0s': R`Dos ángulos de un triángulo miden $⟦0⟧^\circ$ y $⟦1⟧^\circ$. ¿Cuánto mide el tercero?`,
  '1mgnf9acc40': R`Los ángulos de un triángulo suman $180^\circ$: $180^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ = ⟦2⟧^\circ$.`,
  '17ra9ybal44': R`Dos ángulos están juntos sobre una recta. Uno mide $⟦0⟧^\circ$. ¿Cuánto mide el otro?`,
  '1uo9pac72dr': R`Los ángulos sobre una recta suman $180^\circ$: $180^\circ - ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  'lbqlw4yngj': R`Cuatro ángulos coinciden en un punto. Tres de ellos miden $⟦0⟧^\circ$, $⟦1⟧^\circ$ y $⟦2⟧^\circ$. ¿Cuánto mide el cuarto?`,
  '1q0g9lewnyf': R`Los ángulos alrededor de un punto suman $360^\circ$: $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '1o7rxocgbe4': R`¿Qué tipo de ángulo mide $⟦0⟧^\circ$?`,
  '2087xqcuhit': R`Agudo $\lt 90^\circ$; recto $= 90^\circ$; obtuso entre $90^\circ$ y $180^\circ$; llano $= 180^\circ$; cóncavo entre $180^\circ$ y $360^\circ$. Así que un ángulo de $⟦0⟧^\circ$ es <b>⟦1⟧</b>.`,
  '1em7emit9v': R`Un cuadrilátero tiene ángulos de $⟦0⟧^\circ$, $⟦1⟧^\circ$ y $⟦2⟧^\circ$. ¿Cuánto mide el cuarto ángulo?`,
  '24pznbwnbef': R`Los ángulos de un cuadrilátero suman $360^\circ$: $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '2egzcjm3tpx': R`pentágono`,
  'v80sqcfxpp': R`hexágono`,
  '81gchefl78': R`octógono`,
  'ua45cwp3of': R`eneágono`,
  'luci9k7vz2': R`decágono`,
  '1udhvg5ma2x': R`dodecágono`,
  '27xxu0kf8rx': R`¿Cuánto suman los ángulos interiores de un polígono de ⟦0⟧ lados (⟦1⟧)?`,
  'gm8iaj6tll': R`Se divide en $⟦0⟧ - 2 = ⟦1⟧$ triángulos: $⟦2⟧ \times 180^\circ = ⟦3⟧^\circ$.`,
  'qinptcb6uu': R`¿Cuánto mide cada ángulo interior de un polígono regular de ⟦0⟧ lados (⟦1⟧)?`,
  '1do1n0lapzc': R`Suma $= (⟦0⟧ - 2) \times 180^\circ = ⟦1⟧^\circ$, repartida entre ⟦2⟧ ángulos iguales: $⟦3⟧^\circ \div ⟦4⟧ = ⟦5⟧^\circ$.`,
  '2b3ubiiwfr4': R`En un triángulo isósceles, el ángulo entre los dos lados iguales mide $⟦0⟧^\circ$. ¿Cuánto mide cada uno de los otros dos ángulos?`,
  '1m260esohws': R`Los dos ángulos de la base son iguales: $\frac{180^\circ - ⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // data-basic
  '1rkikmzq9kv': R`
<p>Los datos son información que recogemos, como notas de exámenes o frutas favoritas. Una <b>tabla de frecuencias</b> registra cuántas veces aparece cada valor; los <b>diagramas de barras</b> y los <b>pictogramas</b> muestran la misma información de forma visual.</p>
<h3>Cuatro medidas resumen</h3>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  '2fsgim21nih': R`Medida`,
  '1fy4t37t415': R`Cómo se calcula`,
  '18v4e4ulshl': R`Para 3; 7; 7; 8; 10`,
  'ppforkar60': R`Media`,
  'w9uhnv1ylu': R`suma todos los valores y divide entre cuántos hay`,
  '15fhdhxeit5': R`Mediana`,
  '1bp3iszr2ho': R`valor central tras ordenar`,
  '2d8lw4ky362': R`Moda`,
  'n6vk2dz4y0': R`valor más frecuente`,
  '8wgrdlq9w9': R`Rango`,
  'u26xwlcm82': R`mayor − menor`,
  '1ddos0ddk6b': R`<p>Si hay un número <b>par</b> de valores, la mediana es la media de los dos valores centrales: la mediana de 2; 4; 9; 11 es $\frac{4 + 9}{2} = 6{,}5$.</p>`,
  '1b84zb92lm7': R`<p>Notas: 12; 5; 9; 12; 7.</p><ul><li>Media $= \frac{12 + 5 + 9 + 12 + 7}{5} = \frac{45}{5} = 9$</li><li>Ordenadas: 5; 7; 9; 12; 12 → mediana 9</li><li>Moda 12 · Rango $12 - 5 = 7$</li></ul>`,
  '1dcnrak0yuf': R`<p><b>Ordena</b> siempre los datos antes de buscar la mediana. El centro de la lista sin ordenar suele ser incorrecto.</p>`,
  'x21ub369ei': R`Halla la media de: ⟦0⟧.`,
  '1p52jtmc0cq': R`Suma los valores y divide entre cuántos hay: $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  'jf7mas4uc8': R`Halla la mediana de: ⟦0⟧.`,
  '1yw7i4urov1': R`Primero ordena: ⟦0⟧. El valor central, el número ⟦1⟧ de la lista ordenada, es <b>⟦2⟧</b>.`,
  '2g8sczm66bg': R`Halla la moda de: ⟦0⟧.`,
  'tbuacyae4n': R`⟦0⟧ aparece 3 veces, más que cualquier otro valor, así que la moda es <b>⟦1⟧</b>.`,
  '1xtq8j2lty3': R`Halla el rango de: ⟦0⟧.`,
  '15se826ipls': R`Rango = mayor − menor $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '2epb7vd8j91': R`Manzanas`,
  '17dpyen9bnr': R`Plátanos`,
  '7i14wwudqx': R`Mangos`,
  '2401q57c6t': R`Uvas`,
  '1e2lbgl4i2m': R`Naranjas`,
  '1n92q5m8dcn': R`Duriones`,
  '29y8laytfov': R`Papayas`,
  '1y1q3z5e86a': R`Fruta`,
  '282dadyo0i9': R`Estudiantes`,
  'gcofhmi74h': R`Una clase votó su fruta favorita.⟦0⟧¿Cuántos estudiantes votaron en total?`,
  '1x3hnjtfgqx': R`Suma las frecuencias: $⟦0⟧ = ⟦1⟧$.`,
  '13d46zcnc3z': R`Una clase votó su fruta favorita.⟦0⟧¿Cuántos estudiantes más eligieron «⟦1⟧» que «⟦2⟧»?`,
  '1t8yn7xcnqm': R`$⟦0⟧ - ⟦1⟧ = ⟦2⟧$ estudiantes más.`,
});

/* Español — Secundaria (núcleo, enteros → razones) */
addT('es', {
  // core
  '1x23luhdn24': R`Escribe un número entero o una fracción como -3/4.`,
  'oe48n1yjho': R`Escribe una respuesta como 49pi.`,
  '1pwkxeh9gz6': R`Diagrama de Venn: dos círculos A y B que se cortan dentro de un rectángulo U. La zona común es A intersección B.`,
  '20fnrxy868c': R`solo A`,
  '270f53k5ok8': R`solo B`,
  '1je4zqnj4vo': R`fuera de ambos: (A ∪ B)′`,
  '1mdy4rrlpik': R`Triángulo rectángulo con catetos a y b e hipotenusa c opuesta al ángulo recto`,
  '1x3numfhp6n': R`Círculo de centro O con un radio r, un diámetro, una cuerda y un sector sombreado`,
  '19a9nt12ww1': R`diámetro`,
  '2dw7tpqx5ho': R`sector`,
  '187npo1zduj': R`cuerda`,

  // integers
  '1d3b0kga2d8': R`
<p>Los <b>números enteros</b> son los números naturales, sus opuestos y el cero: $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$ En la recta numérica los números aumentan hacia la derecha, así que $-7 \lt -2$ aunque 7 sea mayor que 2.</p>
<p>El <b>valor absoluto</b> $|a|$ es la distancia al 0: $|-6| = 6$ y $|6| = 6$.</p>
<h3>Sumar y restar</h3>
⟦0⟧
<h3>Multiplicar y dividir</h3>
⟦1⟧
⟦2⟧
<p>Usos reales: temperaturas bajo cero, alturas bajo el nivel del mar, deudas y plantas bajo tierra.</p>
⟦3⟧`,
  'y08mdvxdvx': R`<ul><li><b>Mismo signo:</b> suma los valores absolutos y conserva el signo. $-4 + (-9) = -13$.</li><li><b>Signos distintos:</b> resta los valores absolutos y pon el signo del de mayor valor absoluto. $-11 + 5 = -6$.</li><li><b>Restar</b> es sumar el opuesto: $3 - (-8) = 3 + 8 = 11$.</li></ul>`,
  '265jmr0pgn6': R`Signos`,
  '18hy4wrreq9': R`Resultado`,
  'smeasc7k44': R`+ y +`,
  'pch2ir8ey8': R`positivo`,
  '1etdbat34sz': R`− y −`,
  'ziyl69hweo': R`+ y −`,
  '2ffct8v299o': R`negativo`,
  '238sv1i1dpv': R`− y +`,
  'woqo0gjqdb': R`<p>$-3^2 = -9$, pero $(-3)^2 = 9$. Sin paréntesis, la potencia afecta solo al 3.</p>`,
  '1vaqzb7dhrg': R`Mismo signo: suma los valores absolutos y conserva el signo.`,
  '1gzm31e47qm': R`Signos distintos: resta los valores absolutos y conserva el signo del de mayor valor absoluto.`,
  '27t807op1rz': R`Restar es sumar el opuesto: $⟦0⟧ - ⟦1⟧ = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'dkidis5a97': R`Signos iguales dan resultado positivo`,
  '1htjniy3zg4': R`Signos distintos dan resultado negativo`,
  'iepdkqxdg4': R`Calcula $⟦0⟧ \times ⟦1⟧ - ⟦2⟧$.`,
  'pxi31oj3ys': R`Primero multiplica: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Después $⟦3⟧ - ⟦4⟧ = ⟦5⟧ + ⟦6⟧ = ⟦7⟧$.`,
  '26rnszv74s7': R`A las 6 de la mañana la temperatura era de $⟦0⟧^\circ\text{C}$. A mediodía había subido $⟦1⟧^\circ\text{C}$ y a medianoche había bajado $⟦2⟧^\circ\text{C}$ respecto a la de mediodía. ¿Qué temperatura hacía a medianoche?`,
  'fyyovqsih2': R`$⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$, así que hacía $⟦4⟧^\circ\text{C}$.`,
  '1ag4iuv7vpa': R`Calcula $|⟦0⟧| - |⟦1⟧|$.`,
  '1hal8q9tj2u': R`$|⟦0⟧| = ⟦1⟧$ y $|⟦2⟧| = ⟦3⟧$, así que el valor es $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,

  // exponents
  '2d43wqplznz': R`
<p>Una <b>potencia</b> abrevia una multiplicación repetida: $a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ factores}}$. En $2^5 = 32$, 2 es la <b>base</b> y 5 es el <b>exponente</b>.</p>
<h3>Propiedades de las potencias</h3>
⟦0⟧
⟦1⟧
<h3>Raíces</h3>
<p>La raíz cuadrada deshace el cuadrado: $\sqrt{81} = 9$ porque $9^2 = 81$. La raíz cúbica deshace el cubo: $\sqrt[3]{64} = 4$ porque $4^3 = 64$.</p>
⟦2⟧
⟦3⟧`,
  '21iigvito9y': R`Propiedad`,
  '2du0zx6ztd9': R`<p>Simplifica $(2x^3)(5x^4)$: multiplica los números y suma los exponentes, $10x^{7}$.</p>`,
  '2b2ar8gx2t7': R`<p>Para simplificar una raíz cuadrada, extrae el mayor factor que sea un cuadrado perfecto: $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$.</p>$$\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$$`,
  '28pcl4skbrd': R`<p>$x^3 \cdot x^4$ es $x^7$, no $x^{12}$: se multiplican potencias de la misma base <i>sumando</i> los exponentes. Y $\sqrt{9 + 16} = 5$, no $3 + 4$.</p>`,
  's9xs5b9gme': R`Calcula $⟦0⟧^{⟦1⟧}$.`,
  'y0efpdptbg': R`$⟦0⟧^{⟦1⟧}$ significa ⟦2⟧ factores iguales a ⟦3⟧: $⟦4⟧ = ⟦5⟧$.⟦6⟧`,
  'f0v39gimat': R` Un número impar de factores negativos da un resultado negativo.`,
  '1a0fe39cn50': R` Un número par de factores negativos da un resultado positivo.`,
  'gmyxohq5hl': R`Simplifica $(⟦0⟧⟦1⟧^{⟦2⟧})(⟦3⟧⟦4⟧^{⟦5⟧})$.`,
  '19i5sbwj9gf': R`Multiplica los números y <b>suma</b> los exponentes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ y $⟦3⟧^{⟦4⟧} \cdot ⟦5⟧^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$. Resultado: $⟦9⟧⟦10⟧^{⟦11⟧}$.`,
  'd17nxbyour': R`Simplifica $\dfrac{⟦0⟧⟦1⟧^{⟦2⟧}}{⟦3⟧⟦4⟧^{⟦5⟧}}$.`,
  'zvet0x3ty3': R`Divide los números y <b>resta</b> los exponentes: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ y $⟦3⟧^{⟦4⟧ - ⟦5⟧} = ⟦6⟧^{⟦7⟧}$.`,
  'owsivnzbiv': R`Simplifica $(⟦0⟧⟦1⟧^{⟦2⟧})^{⟦3⟧}$.`,
  '16p8bz51ffa': R`Eleva cada factor a ⟦0⟧: $⟦1⟧^{⟦2⟧} = ⟦3⟧$ y $(⟦4⟧^{⟦5⟧})^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$.`,
  '1xezjl2w04x': R`Calcula $⟦0⟧^0 + ⟦1⟧^{-⟦2⟧}$.`,
  '188gl5tkaea': R`Escribe una fracción como 9/8.`,
  'ko9qy4d1ca': R`$⟦0⟧^0 = 1$ y $⟦1⟧^{-⟦2⟧} = \frac{1}{⟦3⟧}$, así que la suma es $1 + \frac{1}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}$.`,
  '1n967l6wl5g': R`Calcula $⟦0⟧^{-⟦1⟧}$.`,
  'zx2y9sarlt': R`Escribe una fracción como 1/8.`,
  'yfk682by4y': R`Un exponente negativo significa «uno entre»: $⟦0⟧^{-⟦1⟧} = \frac{1}{⟦2⟧^{⟦3⟧}} = \frac{1}{⟦4⟧}$.`,
  '29kkp8bp96o': R`Calcula $\sqrt{⟦0⟧}$.`,
  '130msfu0zcr': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, así que $\sqrt{⟦3⟧} = ⟦4⟧$.`,
  '2gon6mkcmhb': R`Calcula $\sqrt[3]{⟦0⟧}$.`,
  '214ubtovi6i': R`$⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$, así que $\sqrt[3]{⟦4⟧} = ⟦5⟧$.`,
  '30ljqjiajh': R`Simplifica $\sqrt{⟦0⟧}$.`,
  '1dnbn17q9fj': R`Escribe una respuesta como 3sqrt(2).`,
  'r5mpjrvznb': R`Busca el mayor factor que sea un cuadrado perfecto: $⟦0⟧ = ⟦1⟧ \times ⟦2⟧$. Así, $\sqrt{⟦3⟧} = \sqrt{⟦4⟧} \cdot \sqrt{⟦5⟧} = ⟦6⟧$.`,

  // sci-notation
  '2855qmmjjc': R`
<p>Los científicos escriben los números muy grandes o muy pequeños de forma compacta como</p>
⟦0⟧
<ul><li>La distancia al Sol, unos $150\,000\,000$ km, es $1{,}5 \times 10^{8}$ km.</li><li>Un glóbulo rojo, de unos $0{,}000\,008$ m de ancho, mide $8 \times 10^{-6}$ m.</li></ul>
⟦1⟧
<h3>Calcular</h3>
<p>Multiplica (o divide) los números de delante y suma (o resta) los exponentes. Después ajusta el número de delante si no está entre 1 y 10:</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '244so12quwj': R`a \times 10^{n}, \qquad 1 \le a \lt 10, \quad n \text{ entero}`,
  '1phwx4rhhb0': R`<p>Cuenta cuántos lugares se mueve la coma para que quede exactamente una cifra distinta de cero delante de ella. Los números grandes (la coma va a la izquierda) dan un exponente <b>positivo</b>; los menores que 1 (la coma va a la derecha), un exponente <b>negativo</b>.</p>`,
  '17xqz1i19gu': R`(4 \times 10^{5}) \times (3 \times 10^{7}) = 12 \times 10^{12} = 1{,}2 \times 10^{13}`,
  'uws8i7cmm7': R`\frac{6 \times 10^{9}}{8 \times 10^{3}} = 0{,}75 \times 10^{6} = 7{,}5 \times 10^{5}`,
  '1bgde7du4ux': R`<p>$23 \times 10^{4}$ tiene el valor correcto, pero no está en notación científica: el número de delante debe ser menor que 10.</p>`,
  '1jl1f7quddk': R`Escribe ⟦0⟧ en notación científica.`,
  '1xhcd6rnqeh': R`Mueve la coma ⟦0⟧ lugares a la izquierda para que quede una sola cifra delante: $⟦1⟧ = ⟦2⟧ \times 10^{⟦3⟧}$.`,
  'sb71mbidjv': R`Mueve la coma ⟦0⟧ lugares a la derecha para que quede una cifra distinta de cero delante: $⟦1⟧ = ⟦2⟧ \times 10^{-⟦3⟧}$.`,
  '1fxdkt6b40w': R`Escribe $⟦0⟧ \times 10^{⟦1⟧}$ como número ordinario.`,
  '1lry42zhbux': R`Mueve la coma ⟦0⟧ lugares a la derecha: <b>⟦1⟧</b>.`,
  '1x5u9exutdv': R`Mueve la coma 1 lugar a la izquierda: <b>⟦0⟧</b>.`,
  '550xmeglh4': R`Mueve la coma ⟦0⟧ lugares a la izquierda: <b>⟦1⟧</b>.`,
  '1gs42dv9cjp': R`Calcula $(⟦0⟧ \times 10^{⟦1⟧}) \times (⟦2⟧ \times 10^{⟦3⟧})$. Da el resultado en notación científica.`,
  'fs4t6k5mks': R`Multiplica los números de delante y suma los exponentes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ y $10^{⟦3⟧} \times 10^{⟦4⟧} = 10^{⟦5⟧}$. ⟦6⟧`,
  '1zt4osszqy5': R`Como ⟦0⟧ no es menor que 10, reescribe $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,
  '1hosaw5g8gs': R`Resultado: $⟦0⟧ \times 10^{⟦1⟧}$.`,
  '1rhqt7i7pkj': R`Calcula $\dfrac{⟦0⟧ \times 10^{⟦1⟧}}{⟦2⟧ \times 10^{⟦3⟧}}$. Da el resultado en notación científica.`,
  '3gwofajvgq': R`Divide los números de delante y resta los exponentes: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ y $10^{⟦3⟧ - ⟦4⟧} = 10^{⟦5⟧}$.⟦6⟧`,
  '1ujla3379au': R` Como ⟦0⟧ es menor que 1, reescribe $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,

  // ratio
  'j1hx7015fs': R`
<p>Una <b>razón</b> $a : b$ compara dos cantidades. Como las fracciones, las razones se simplifican dividiendo ambos términos entre su MCD: $18 : 24 = 3 : 4$.</p>
<h3>Repartos proporcionales</h3>
⟦0⟧
<h3>Tasas y valor unitario</h3>
<p>Una <b>tasa</b> compara cantidades con unidades distintas: km por hora, dólares por kg. Hallar el valor de <b>una</b> unidad (el valor unitario) resuelve la mayoría de los problemas.</p>
⟦1⟧
<h3>Proporcionalidad directa e inversa</h3>
⟦2⟧
⟦3⟧
<h3>Escalas de mapas</h3>
<p>Una escala de $1 : 50\,000$ significa que 1 cm en el mapa equivale a $50\,000$ cm $= 500$ m $= 0{,}5$ km en la realidad.</p>
⟦4⟧`,
  '1ldxptmm0q1': R`<p>Reparte 60 caramelos en la razón $2 : 3$.</p><ol><li>Partes totales: $2 + 3 = 5$.</li><li>Una parte: $60 \div 5 = 12$.</li><li>Repartos: $2 \times 12 = 24$ y $3 \times 12 = 36$.</li></ol>`,
  'mtzadc2zz9': R`\text{velocidad} = \frac{\text{distancia}}{\text{tiempo}} \qquad \text{distancia} = \text{velocidad} \times \text{tiempo}`,
  '1lx74znbkzq': R`<ul><li><b>Directa:</b> las dos cantidades crecen juntas, $y = kx$. El doble de cuadernos cuesta el doble.</li><li><b>Inversa:</b> una crece cuando la otra disminuye, $xy = k$. El doble de trabajadores termina en la mitad de tiempo.</li></ul>`,
  'a6l90vp81i': R`<p>6 trabajadores construyen un muro en 10 días. El trabajo equivale a $6 \times 10 = 60$ jornadas, así que 4 trabajadores necesitan $60 \div 4 = 15$ días.</p>`,
  '2arjky763hz': R`<p>Antes de comparar, usa las mismas unidades. Y comprueba si la situación es directa o inversa: «más trabajadores, menos días» es inversa.</p>`,
  '1acmfldad41': R`Simplifica la razón ⟦0⟧ : ⟦1⟧.`,
  '1y50fzcs3bf': R`Escribe la razón como 3:4.`,
  '5iztjnzgue': R`El MCD de ambos términos es ⟦0⟧; al dividirlos entre ⟦0⟧ queda ⟦1⟧ : ⟦2⟧ = ⟦3⟧ : ⟦4⟧.`,
  '2crne058qbs': R`Alí`,
  '18poqam78za': R`Siti`,
  '4lzqcmqqd4': R`Rina`,
  'izwfd6xg8i': R`Sam`,
  'bs57t3iign': R`Kim`,
  'h7jorlb8al': R`Se reparten ⟦0⟧ canicas entre ⟦1⟧ y ⟦2⟧ en la razón ⟦3⟧ : ⟦4⟧. ¿Cuántas canicas recibe ⟦5⟧?`,
  '2ffhbqedp3i': R`Hay $⟦0⟧ + ⟦1⟧ = ⟦2⟧$ partes, y cada una vale $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$. ⟦6⟧ recibe $⟦7⟧ \times ⟦8⟧ = ⟦9⟧$.`,
  'oh7i0xfb4t': R`cuadernos`,
  'ia267mackq': R`bolígrafos`,
  'ojwqqxz8z0': R`mangos`,
  '2c5x6tu8q2m': R`entradas`,
  't42rjalvd2': R`⟦0⟧ ⟦1⟧ cuestan ⟦2⟧ dólares. Con el mismo precio por unidad, ¿cuánto cuestan ⟦3⟧ ⟦4⟧?`,
  '1j6drw8o3jp': R`Una unidad cuesta $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ dólares, así que ⟦3⟧ cuestan $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$ dólares.`,
  '2cnfx0hut7n': R`⟦0⟧ trabajadores construyen un muro en ⟦1⟧ días. Trabajando al mismo ritmo, ¿cuántos días tardarían ⟦2⟧ trabajadores?`,
  '1qn5tzfsu4y': R`días`,
  '1prw35yduvi': R`Es proporcionalidad inversa. El trabajo requiere $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ jornadas, así que ⟦3⟧ trabajadores necesitan $⟦4⟧ \div ⟦5⟧ = ⟦6⟧$ días.`,
  '294kafpc434': R`Un mapa tiene una escala de 1 : ⟦0⟧. Dos pueblos están a ⟦1⟧ cm en el mapa. ¿A qué distancia están en la realidad, en kilómetros?`,
  'yvvr6sez8h': R`Distancia real $= ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm. Como $1 \text{ km} = 100\,000 \text{ cm}$, son $⟦3⟧$ km.`,
  '1q0gzbqlk2i': R`Un coche recorre ⟦0⟧ km en ⟦1⟧ horas. ¿Cuál es su velocidad media?`,
  '1350ox6hh5s': R`$\text{velocidad} = \frac{\text{distancia}}{\text{tiempo}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ km/h.`,
  '1eoj4cx14t6': R`Un autobús circula a ⟦0⟧ km/h durante ⟦1⟧ horas. ¿Qué distancia recorre?`,
  '1dged1n5jn6': R`$\text{distancia} = \text{velocidad} \times \text{tiempo} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ km.`,
  'aw6tzi78c6': R`¿Cuántas horas se tarda en recorrer ⟦0⟧ km a ⟦1⟧ km/h?`,
  '2eruzlr62qp': R`horas`,
  '278tsci6f7d': R`$\text{tiempo} = \frac{\text{distancia}}{\text{velocidad}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ horas.`,
});

/* Español — Secundaria (expresiones algebraicas → funciones lineales) */
addT('es', {
  // algebra-expr
  '2ngxvisbtd': R`
<p>En la expresión $5x^2 - 3xy + 7$, los <b>términos</b> son $5x^2$, $-3xy$ y $7$; los <b>coeficientes</b> son 5 y $-3$; 7 es el <b>término independiente</b>. Los <b>términos semejantes</b> tienen exactamente las mismas variables con los mismos exponentes ($4ab$ y $-ab$ son semejantes; $x^2$ y $x$ no lo son).</p>
<h3>Simplificar</h3>
<p>Reduce los términos semejantes sumando sus coeficientes: $6a + 2b - 4a + 5b = 2a + 7b$.</p>
<h3>Quitar paréntesis</h3>
⟦0⟧
⟦1⟧
<h3>Productos notables</h3>
⟦2⟧
<h3>Factorizar</h3>
<p>Factorizar es desarrollar al revés. Saca el factor común máximo: $12x - 18 = 6(2x - 3)$.</p>
<h3>Sustituir</h3>
<p>Cambia cada letra por su valor, con paréntesis para los negativos: si $x = -2$, entonces $3x^2 - x = 3(-2)^2 - (-2) = 12 + 2 = 14$.</p>
⟦3⟧`,
  '107qibv29t1': R`<p><b>Propiedad distributiva:</b> $a(b + c) = ab + ac$. Multiplica <i>cada</i> término del paréntesis por el término de fuera.</p><p><b>Dos paréntesis:</b> $(x + a)(x + b) = x^2 + (a + b)x + ab$.</p>`,
  'evwoax8bsy': R`(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2`,
  'qw20z3i54y': R`<p>$(x + 4)^2 \ne x^2 + 16$. Es fácil olvidar el término central, $2 \cdot 4 \cdot x = 8x$.</p>`,
  '1lzyurkx6yg': R`Simplifica $⟦0⟧$.`,
  'c34hz2en6w': R`Agrupa los términos semejantes: $(⟦0⟧ ⟦1⟧)⟦2⟧ + (⟦3⟧ ⟦4⟧)⟦5⟧ = ⟦6⟧$.`,
  '1u1kf05ab7b': R`Desarrolla $⟦0⟧(⟦1⟧)$.`,
  '1eys0d9g1vl': R`Multiplica cada término del paréntesis por ⟦0⟧: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ y $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$. Resultado: $⟦7⟧$.`,
  '1xv73exk1ey': R`Calcula el valor de $⟦0⟧$ para $x = ⟦1⟧$.`,
  'lz4v2y9o7u': R`Sustituye usando paréntesis: $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧ ⟦6⟧ ⟦7⟧ = ⟦8⟧$.`,
  '26qvjy7rwjy': R`Factoriza por completo: $⟦0⟧$.`,
  '19u3t9utdnl': R`El MCD de ⟦0⟧ y ⟦1⟧ es ⟦2⟧: $⟦3⟧ = ⟦4⟧(⟦5⟧)$. Compruébalo desarrollando.`,
  '1im4ugi7thh': R`Desarrolla y simplifica $(x ⟦0⟧)(x ⟦1⟧)$.`,
  '1bafsr7t5do': R`Multiplica término a término: $⟦0⟧ = ⟦1⟧$.`,
  '2e60a5izj9m': R`Desarrolla $(x ⟦0⟧)^2$.`,

  // linear-eq
  '2e108zyv3t2': R`
<p>Una ecuación dice que dos expresiones son iguales. Piensa en una balanza: lo que hagas en un lado, hazlo también en el otro, y seguirá equilibrada. El objetivo es dejar sola la incógnita.</p>
⟦0⟧
⟦1⟧
<h3>Paréntesis y fracciones</h3>
<p>Primero quita los paréntesis (o divide ambos lados entre el número de fuera). Elimina las fracciones multiplicando cada término por el denominador común:</p>
⟦2⟧
<h3>Problemas con enunciado</h3>
<ol><li>Elige una letra para la incógnita y di qué representa.</li><li>Traduce el enunciado a una ecuación.</li><li>Resuelve y comprueba que la respuesta tiene sentido en el problema.</li></ol>
⟦3⟧
⟦4⟧`,
  '23dcqvv32cf': R`<p>Deshaz las operaciones en orden inverso usando <b>operaciones inversas</b>: suma ↔ resta, multiplicación ↔ división.</p>`,
  '11eu1q8a3p': R`<p>Resuelve $5x - 7 = 2x + 11$.</p><ol><li>Resta $2x$ en ambos lados: $3x - 7 = 11$.</li><li>Suma 7: $3x = 18$.</li><li>Divide entre 3: $x = 6$.</li></ol><p>Comprobación: $5(6) - 7 = 23$ y $2(6) + 11 = 23$ ✓</p>`,
  '1wy5h98gkn6': R`<p>La suma de tres enteros consecutivos es 72. Llámalos $n$, $n + 1$, $n + 2$: $3n + 3 = 72$, así que $n = 23$. Los enteros son 23, 24 y 25.</p>`,
  '2cslj9svu1g': R`<p>Cuando un término pasa al otro lado del igual, cambia de signo, porque en realidad lo estás restando (o sumando) en ambos lados.</p>`,
  '1655nrncx2v': R`Resuelve $⟦0⟧ = ⟦1⟧$.`,
  'x5jse5nhwr': R`Escribe el valor de x.`,
  '2b0gu3x69ls': R`⟦0⟧: $⟦1⟧ = ⟦2⟧$. Divide entre ⟦3⟧: $x = ⟦4⟧$.`,
  '7pot73w6ik': R`Pasa los términos con $x$ a la izquierda y los números a la derecha: $⟦0⟧ = ⟦1⟧$, así que $x = ⟦2⟧$.`,
  'xzdgg8oaxi': R`Resuelve $⟦0⟧(x ⟦1⟧) = ⟦2⟧$.`,
  '9hdqgjqpdz': R`Divide ambos lados entre ⟦0⟧: $x ⟦1⟧ = ⟦2⟧$. Entonces $x = ⟦3⟧ ⟦4⟧ = ⟦5⟧$.`,
  '2fru7tuxryf': R`Resuelve $\frac{x}{⟦0⟧} ⟦1⟧ = ⟦2⟧$.`,
  '1f73j076fzb': R`⟦0⟧: $\frac{x}{⟦1⟧} = ⟦2⟧$. Multiplica ambos lados por ⟦3⟧: $x = ⟦4⟧$.`,
  '211mafg3dgs': R`La suma de tres enteros consecutivos es ⟦0⟧. ¿Cuál es el mayor de ellos?`,
  '8v51kosf3f': R`La suma de tres enteros consecutivos es ⟦0⟧. ¿Cuál es el menor de ellos?`,
  '28zr6x8xv6r': R`Llámalos $n$, $n + 1$, $n + 2$. Entonces $3n + 3 = ⟦0⟧$, así que $3n = ⟦1⟧$ y $n = ⟦2⟧$. Los enteros son ⟦3⟧, ⟦4⟧ y ⟦5⟧.`,
  '6tcx6zie13': R`Andi`,
  'bdnp7aucau': R`Maya`,
  '111efujhij3': R`Nina`,
  '2ffyzeo9a9u': R`Omar`,
  '1o7plzvqsb1': R`Pablo`,
  'xm9ndonr7a': R`⟦0⟧ tiene ⟦1⟧ años más que ⟦2⟧. La suma de sus edades es ⟦3⟧. ¿Cuántos años tiene ⟦4⟧?`,
  '1dg7mtcy0c9': R`años`,
  '1i0et4blzn8': R`Sea $x$ la edad de ⟦0⟧. Entonces $x + (x + ⟦1⟧) = ⟦2⟧$, así que $2x = ⟦3⟧$ y $x = ⟦4⟧$.`,
  '24q7bzlhbax': R`Pienso un número, lo multiplico por ⟦0⟧ y le resto ⟦1⟧. El resultado es ⟦2⟧. ¿Qué número pensé?`,
  'h4vi0amulx': R`$⟦0⟧x - ⟦1⟧ = ⟦2⟧$, así que $⟦3⟧x = ⟦4⟧$ y $x = ⟦5⟧$.`,

  // inequalities
  'x75whe4hrd': R`
<p>Una <b>desigualdad</b> compara dos expresiones: $\lt$ (menor que), $\gt$ (mayor que), $\le$ (menor o igual que), $\ge$ (mayor o igual que). Su solución suele ser todo un intervalo de números.</p>
<p>En la recta numérica, $x \gt 2$ se dibuja con un círculo <b>vacío</b> en 2 (el 2 no se incluye) y una flecha hacia la derecha; $x \le 2$ usa un círculo <b>relleno</b> y una flecha hacia la izquierda.</p>
<h3>Resolver</h3>
<p>Se resuelve igual que una ecuación (sumando, restando, multiplicando o dividiendo en ambos lados) con una regla extra:</p>
⟦0⟧
<p>¿Por qué? $2 \lt 5$, pero al multiplicar ambos lados por $-1$ se obtiene $-2$ y $-5$, y $-2 \gt -5$.</p>
⟦1⟧
<h3>Desigualdades dobles</h3>
<p>Aplica la misma operación a las tres partes: $-1 \lt 2x + 3 \le 9 \Rightarrow -4 \lt 2x \le 6 \Rightarrow -2 \lt x \le 3$. Las soluciones enteras son $-1; 0; 1; 2; 3$.</p>
⟦2⟧`,
  '4uypmmfwnv': R`<p>Cuando <b>multiplicas o divides por un número negativo</b>, el signo de la desigualdad cambia de sentido.</p>$$-3x \gt 12 \;\Rightarrow\; x \lt -4$$`,
  '2g9ptainv5b': R`<p>Resuelve $7 - 2x \ge 1$.</p><ol><li>Resta 7: $-2x \ge -6$.</li><li>Divide entre $-2$ y cambia el sentido: $x \le 3$.</li></ol>`,
  'q5ww8c7swj': R`<p>«El menor entero con $x \gt 4$» es 5, no 4: una desigualdad estricta excluye el extremo.</p>`,
  '1mxokpl5kuf': R`Resuelve $⟦0⟧ ⟦1⟧ ⟦2⟧$.`,
  '1iwjn3pne9': R`⟦0⟧: $⟦1⟧ ⟦2⟧ ⟦3⟧$. Divide entre ⟦4⟧ (positivo, así que el signo se mantiene): $x ⟦5⟧ ⟦6⟧$.`,
  '1s1hpevc8ap': R`⟦0⟧: $⟦1⟧ ⟦2⟧ ⟦3⟧$. Divide entre ⟦4⟧. Es <b>negativo</b>, así que el signo cambia de sentido: $x ⟦5⟧ ⟦6⟧$.`,
  'io0ae9g8yj': R`El menor entero mayor que ⟦0⟧ es <b>⟦1⟧</b>.`,
  'civ81fo6ci': R`El menor entero mayor o igual que ⟦0⟧ es <b>⟦1⟧</b>.`,
  '62e1f42m8l': R`El mayor entero menor que ⟦0⟧ es <b>⟦1⟧</b>.`,
  '1ime7hqq5cd': R`El mayor entero menor o igual que ⟦0⟧ es <b>⟦1⟧</b>.`,
  '2cy3ba2hfyd': R`¿Cuál es el menor entero $x$ que cumple $⟦0⟧$?`,
  'uffp85dcny': R`¿Cuál es el mayor entero $x$ que cumple $⟦0⟧$?`,
  '33ggbvntvo': R`Al resolver se obtiene $x ⟦0⟧ ⟦1⟧$. ⟦2⟧`,
  '116sbg7r1dd': R`¿Cuántos enteros $x$ cumplen $⟦0⟧ ⟦1⟧ ⟦2⟧ ⟦3⟧ ⟦4⟧$?`,
  '17y5i2hhz2j': R`⟦0⟧ y divide entre ⟦1⟧: $⟦2⟧ ⟦3⟧ x ⟦4⟧ ⟦5⟧$. Los enteros son ⟦6⟧, así que hay <b>⟦7⟧</b>.`,
  'abjkjjicc6': R`cada parte`,

  // sets
  '1upw9az6tpj': R`
<p>Un <b>conjunto</b> es una colección bien definida de objetos, sus <b>elementos</b>. Escribimos $A = \{2; 4; 6; 8\}$ y $4 \in A$ («4 pertenece a A»), $5 \notin A$. $n(A)$ es el número de elementos; aquí $n(A) = 4$. El <b>conjunto vacío</b> $\varnothing$ no tiene elementos; el <b>conjunto universal</b> $U$ contiene todo aquello de lo que se habla.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  'zdmpl6ts1e': R`Un diagrama de Venn: cada región es una combinación distinta de «está en A» y «está en B».`,
  '142ifrt0jkt': R`Notación`,
  '14czndj1h0b': R`Ejemplo con A = {1; 2; 3; 4}, B = {3; 4; 5}`,
  '17jfg6qecmz': R`intersección: en ambos`,
  '93vbzoy4wv': R`unión: en alguno (o en ambos)`,
  'j83k8kg7rg': R`en A pero no en B`,
  'ul55bfe733': R`complementario: en U pero no en A`,
  '1m3czehh1lg': R`todo lo demás de U`,
  '9y4djdoyyu': R`todo elemento de A está en B`,
  'w227m2d70o': R`$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$<p>Restamos la intersección porque se ha contado dos veces. Un conjunto con $n$ elementos tiene $2^n$ subconjuntos (incluidos $\varnothing$ y el propio conjunto).</p>`,
  '4thfgx5jwf': R`<p>En una clase de 35, 20 juegan al fútbol, 18 al baloncesto y 8 a ambos. Entonces $n(F \cup B) = 20 + 18 - 8 = 30$ practican al menos un deporte, y $35 - 30 = 5$ no practican ninguno.</p>`,
  '27eu4624ja8': R`<p>«¿Cuántos juegan solo al fútbol?» es $20 - 8 = 12$, no 20. Completa primero la zona común del diagrama de Venn y después ve hacia fuera.</p>`,
  '27zhedv4gc': R`En una clase de ⟦0⟧ estudiantes, a ⟦1⟧ les gusta el fútbol, a ⟦2⟧ el baloncesto y a ⟦3⟧ ambos. ¿A cuántos estudiantes no les gusta ninguno de los dos deportes?`,
  '26xw5lahqxo': R`$n(F \cup B) = ⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$. Ninguno: $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,
  '1619zngy4yv': R`En un grupo, ⟦0⟧ personas hablan inglés, ⟦1⟧ hablan francés y ⟦2⟧ hablan ambos idiomas. ¿Cuántas hablan al menos uno de los dos?`,
  '18t2zte9r05': R`¿Cuántos subconjuntos <b>propios</b> tiene $⟦0⟧$?`,
  '2dvh10c76ll': R`¿Cuántos subconjuntos tiene $⟦0⟧$?`,
  'o8q41j2x4h': R`Un conjunto con ⟦0⟧ elementos tiene $2^{⟦1⟧} = ⟦2⟧$ subconjuntos; sin contar el propio $A$ quedan ⟦3⟧ subconjuntos propios.`,
  '1levxnz2zxu': R`Un conjunto con ⟦0⟧ elementos tiene $2^{⟦1⟧} = ⟦2⟧$ subconjuntos.`,
  'ngdtyzf3i3': R`elementos que están en ambos conjuntos`,
  'ygni6ry4dh': R`elementos que están en alguno de los conjuntos`,
  'v15s4csij3': R`elementos de A que no están en B`,
  '1j1pykn2kdj': R`Sean $A = ⟦0⟧$ y $B = ⟦1⟧$. Halla $A ⟦2⟧ B$.`,
  '256hp0emm8w': R`$A ⟦0⟧ B$ contiene los ⟦1⟧: $⟦2⟧$.`,
  '1vmjbk89h3x': R`$U = \{1; 2; 3; \ldots; ⟦0⟧\}$ y $A = ⟦1⟧$. ¿Cuántos elementos tiene $A'$, el complementario de $A$?`,
  'fzclz65o4l': R`$A'$ contiene los elementos de $U$ que no están en $A$: $n(A') = n(U) - n(A) = ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '27rc7060yur': R`números primos`,
  '1qm9u9pg5gt': R`números pares`,
  '19ysprsc13w': R`múltiplos de 3`,
  '2bluzo1qazo': R`cuadrados perfectos`,
  '1ncphoa2uf2': R`$A$ es el conjunto de los enteros positivos menores que ⟦0⟧ que son ⟦1⟧. Halla $n(A)$.`,
  '9yersm2gye': R`$A = ⟦0⟧$, así que $n(A) = ⟦1⟧$.`,

  // linear-functions
  '1dcyn9qstbs': R`
<p>Una <b>función lineal</b> tiene por gráfica una recta. En la <b>forma explícita</b></p>
⟦0⟧
<p>$m$ es la <b>pendiente</b>: cuánto cambia $y$ cuando $x$ aumenta en 1. $c$ es la <b>ordenada en el origen</b>, el punto donde la recta corta al eje $y$. Con notación de funciones escribimos $f(x) = mx + c$, así que $f(3)$ significa «el valor cuando $x = 3$».</p>
<h3>Pendiente a partir de dos puntos</h3>
⟦1⟧
⟦2⟧
<h3>Cortes con los ejes y otras formas</h3>
<p>Haz $x = 0$ para hallar el corte con el eje $y$, e $y = 0$ para el corte con el eje $x$. Una recta puede escribirse $ax + by = c$; despeja $y = -\frac{a}{b}x + \frac{c}{b}$ para leer la pendiente. Por un punto $(x_1; y_1)$ con pendiente $m$: $y - y_1 = m(x - x_1)$.</p>
⟦3⟧
⟦4⟧`,
  'b6i5f4mrw8': R`y = mx + c`,
  '2debyr8clym': R`m =\frac{\text{avance vertical}}{\text{avance horizontal}} = \frac{y_2 - y_1}{x_2 - x_1}`,
  '2487xq0zh4o': R`<p>Por $(1; 2)$ y $(4; 11)$: $m = \frac{11 - 2}{4 - 1} = 3$. Sustituye $(1; 2)$ en $y = 3x + c$: $2 = 3 + c$, así que $c = -1$ y la recta es $y = 3x - 1$.</p>`,
  '1jy9kk0ffnl': R`<ul><li>Las rectas <b>paralelas</b> tienen la misma pendiente: $m_1 = m_2$.</li><li>Las rectas <b>perpendiculares</b> tienen pendientes cuyo producto es $-1$: $m_1 m_2 = -1$, así que $m_2 = -\frac{1}{m_1}$.</li></ul>`,
  'mf12am34lg': R`<p>Mantén el orden: si arriba pones $y_2 - y_1$, abajo pon $x_2 - x_1$. Una pendiente positiva sube hacia la derecha; una negativa baja.</p>`,
  'cmysd7luf4': R`Halla la pendiente de la recta que pasa por $⟦0⟧$ y $⟦1⟧$.`,
  'bn7cydwexg': R`Si $f(x) = ⟦0⟧$, halla $f(⟦1⟧)$.`,
  'aaz26bx5zl': R`¿Cuál es la ordenada en el origen de la recta $⟦0⟧$?`,
  '286d6a0jwny': R`Haz $x = 0$: $⟦0⟧ = ⟦1⟧$, así que $y = ⟦2⟧$.`,
  '2aba0g68aq0': R`¿Cuál es la pendiente de la recta $⟦0⟧$?`,
  '2cp0qhukifo': R`Despeja $y$: $y = \frac{⟦0⟧x ⟦1⟧}{⟦2⟧}$. La pendiente es el coeficiente de $x$: $⟦3⟧$.`,
  '9s9um0dbpj': R`¿Qué ecuación describe la recta que pasa por $⟦0⟧$ y $⟦1⟧$?`,
  '2ewjcigtyej': R`Pendiente: $m = \frac{⟦0⟧ - ⟦1⟧}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. Sustituye $⟦5⟧$ en $y = ⟦6⟧ + c$: $c = ⟦7⟧ - ⟦8⟧ = ⟦9⟧$.`,
  'dog47xwchb': R`Una recta tiene pendiente $⟦0⟧$. ¿Cuál es la pendiente de una recta perpendicular a ella?`,
  '22x7dksxq1f': R`Las pendientes de rectas perpendiculares multiplican $-1$: $m_2 = -\frac{1}{m_1} = ⟦0⟧$.`,
  '1p3mlag1dqo': R`¿Para qué valor de $x$ corta la recta $y = ⟦0⟧$ al eje $x$?`,
  'v36n3a0on1': R`En el eje $x$, $y = 0$: $⟦0⟧ ⟦1⟧ = 0$, así que $x = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
});

/* Español — Secundaria (sistemas → cuerpos geométricos) */
addT('es', {
  // systems
  '1obgwi6un65': R`
<p>Un <b>sistema</b> de dos ecuaciones lineales con $x$ e $y$ busca los valores que hacen verdaderas <i>ambas</i> ecuaciones. Gráficamente, la solución es el punto donde se cortan las dos rectas.</p>
<h3>Sustitución</h3>
⟦0⟧
<h3>Reducción</h3>
⟦1⟧
⟦2⟧
<h3>Casos especiales</h3>
<p>Las rectas paralelas (misma pendiente, distinta ordenada en el origen) no se cortan nunca: <b>no hay solución</b>. Si las rectas coinciden, hay <b>infinitas</b> soluciones.</p>
<h3>Problemas con enunciado</h3>
<p>Dos incógnitas necesitan dos datos. «En una granja hay gallinas y vacas: 30 cabezas y 84 patas», con $c$ vacas y $h$ gallinas: $c + h = 30$ y $4c + 2h = 84$.</p>
⟦3⟧`,
  '1jftngyboyy': R`$$\begin{cases} y = 2x - 1 \\ 3x + y = 14 \end{cases}$$<p>Sustituye la primera en la segunda: $3x + (2x - 1) = 14$, así que $5x = 15$, $x = 3$, e $y = 2(3) - 1 = 5$. Solución: $(3; 5)$.</p>`,
  '2g9mhat3jml': R`$$\begin{cases} 2x + 3y = 12 \\ 5x - 3y = 9 \end{cases}$$<p>Suma las ecuaciones para eliminar $y$: $7x = 21$, así que $x = 3$. Entonces $2(3) + 3y = 12$ da $y = 2$.</p>`,
  '2hm0wzsgn4': R`<p>Multiplica primero una o las dos ecuaciones para que una variable tenga coeficientes iguales (u opuestos) y después resta (o suma) para eliminarla. Comprueba siempre la respuesta en <b>ambas</b> ecuaciones originales.</p>`,
  '1mqyjg4cjt3': R`<p>Al restar ecuaciones, resta <i>todos</i> los términos, incluidos los del segundo miembro: los despistes con los signos causan la mayoría de los errores.</p>`,
  '2bus2hrtc7a': R`Resuelve el sistema y da el valor de $⟦0⟧$: $$\begin{cases} ⟦1⟧ = ⟦2⟧ \\ ⟦3⟧ = ⟦4⟧ \end{cases}$$`,
  'cj3nlbnytd': R`Elimina $x$: multiplica la primera ecuación por ⟦0⟧ y la segunda por ⟦1⟧, y resta: $⟦2⟧y = ⟦3⟧$, así que $y = ⟦4⟧$. Sustituyendo se obtiene $x = ⟦5⟧$⟦6⟧.`,
  '1v4b2kwdt1t': R`, así que $x + y = ⟦0⟧$`,
  '12wz870lrmo': R`Resuelve: $$\begin{cases} ⟦0⟧ = ⟦1⟧ \\ ⟦2⟧ = ⟦3⟧ \end{cases}$$`,
  '2h37f00sms': R`Escribe la solución como x; y, por ejemplo 3; -2.`,
  'ji19p5e9vc': R`Al eliminar una variable se obtiene $x = ⟦0⟧$ e $y = ⟦1⟧$. Comprobación: $⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$ ✓ y $⟦7⟧(⟦8⟧) + ⟦9⟧(⟦10⟧) = ⟦11⟧$ ✓`,
  '1uhjqjwpqgq': R`Un cine vendió ⟦0⟧ entradas por un total de ⟦1⟧ dólares. La entrada de adulto cuesta ⟦2⟧ dólares y la infantil ⟦3⟧ dólares. ¿Cuántas entradas infantiles se vendieron?`,
  '1w5sbgqln74': R`Sean $a$ las entradas de adulto y $c$ las infantiles: $a + c = ⟦0⟧$ y $⟦1⟧a + ⟦2⟧c = ⟦3⟧$. Sustituye $a = ⟦4⟧ - c$: $⟦5⟧ - ⟦6⟧c = ⟦7⟧$, así que $c = ⟦8⟧$.`,
  '5gcbu3n7lh': R`En una granja hay gallinas y vacas. Entre todas tienen ⟦0⟧ cabezas y ⟦1⟧ patas. ¿Cuántas vacas hay?`,
  '1q9pdlsduw3': R`En una granja hay gallinas y vacas. Entre todas tienen ⟦0⟧ cabezas y ⟦1⟧ patas. ¿Cuántas gallinas hay?`,
  '20g4l7cyliz': R`Sean $c$ las vacas y $h$ las gallinas: $c + h = ⟦0⟧$ y $4c + 2h = ⟦1⟧$. Resta el doble de la primera ecuación: $2c = ⟦2⟧$, así que $c = ⟦3⟧$ y $h = ⟦4⟧$.`,
  '18lm53yd624': R`Dos números suman ⟦0⟧ y su diferencia es ⟦1⟧. ¿Cuál es el mayor?`,
  '1juzg4bgiuw': R`Dos números suman ⟦0⟧ y su diferencia es ⟦1⟧. ¿Cuál es el menor?`,
  '15xzu54of35': R`$a + b = ⟦0⟧$ y $a - b = ⟦1⟧$. Sumando: $2a = ⟦2⟧$, así que $a = ⟦3⟧$ y $b = ⟦4⟧$.`,

  // pythagoras
  '18dtbjhvgbb': R`
<p>En un triángulo rectángulo, el lado más largo, opuesto al ángulo recto, es la <b>hipotenusa</b> $c$. Los otros dos lados son los <b>catetos</b> $a$ y $b$.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Ternas pitagóricas</h3>
<p>Conviene recordar las soluciones con números enteros y sus múltiplos: $(3; 4; 5)$, $(5; 12; 13)$, $(8; 15; 17)$, $(7; 24; 25)$, y $(6; 8; 10)$, $(9; 12; 15)$, …</p>
<h3>Distancia entre dos puntos</h3>
⟦3⟧
<h3>El recíproco</h3>
<p>Siendo $c$ el lado mayor: si $a^2 + b^2 = c^2$, el triángulo es <b>rectángulo</b>; si $a^2 + b^2 \gt c^2$, es <b>acutángulo</b>; si $a^2 + b^2 \lt c^2$, es <b>obtusángulo</b>.</p>
⟦4⟧`,
  '29quz32s0mq': R`$$a^2 + b^2 = c^2$$<p>Para hallar la hipotenusa, suma los cuadrados; para hallar un cateto, réstalos: $b = \sqrt{c^2 - a^2}$.</p>`,
  '266inyds4fo': R`<p>Una escalera de 10 m se apoya en una pared con el pie a 6 m de ella. Altura que alcanza: $\sqrt{10^2 - 6^2} = \sqrt{64} = 8$ m.</p>`,
  '2f1i3z4fpqs': R`<p>$\sqrt{a^2 + b^2} \ne a + b$. Con catetos 3 y 4, la hipotenusa es 5, no 7.</p>`,
  'tzct4b0jzc': R`Un triángulo rectángulo tiene catetos de ⟦0⟧ cm y ⟦1⟧ cm. ¿Cuánto mide la hipotenusa?`,
  'w85jfl9xou': R`$c^2 = ⟦0⟧^2 + ⟦1⟧^2 = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$, así que $c = \sqrt{⟦5⟧} = ⟦6⟧$ cm.`,
  '14oj6g8m8ly': R`La hipotenusa de un triángulo rectángulo mide ⟦0⟧ m y un cateto mide ⟦1⟧ m. ¿Cuánto mide el otro cateto?`,
  'ucdvtq6bkq': R`Halla la distancia entre $⟦0⟧$ y $⟦1⟧$.`,
  '174wwwvihed': R`Una escalera de ⟦0⟧ m se apoya en una pared vertical. Su pie está a ⟦1⟧ m de la base de la pared. ¿Hasta qué altura de la pared llega la escalera?`,
  'fb02yp437s': R`La escalera es la hipotenusa: $h = \sqrt{⟦0⟧^2 - ⟦1⟧^2} = \sqrt{⟦2⟧} = ⟦3⟧$ m.`,
  '1gtgjvulgbd': R`Un triángulo rectángulo tiene catetos de ⟦0⟧ cm y ⟦1⟧ cm. Halla la hipotenusa redondeada a 2 decimales.`,
  '1cost2rf2x0': R`$c = \sqrt{⟦0⟧^2 + ⟦1⟧^2} = \sqrt{⟦2⟧} \approx ⟦3⟧$ cm.`,
  '14ejxhzoxmd': R`Triángulo rectángulo`,
  '1s09bctuu2d': R`rectángulo`,
  '1fk5t91if9w': R`Triángulo acutángulo`,
  '7ds33wq0ok': R`acutángulo`,
  '1kp4g4kchcj': R`Triángulo obtusángulo`,
  'imjds8cff1': R`obtusángulo`,
  'fvjprzss2k': R`Un triángulo tiene lados ⟦0⟧. ¿Qué tipo de triángulo es?`,
  '5pal2wak00': R`Compara con el lado mayor, ⟦0⟧: $⟦1⟧^2 + ⟦2⟧^2 = ⟦3⟧$ y $⟦4⟧^2 = ⟦5⟧$. Como $⟦6⟧ ⟦7⟧ ⟦8⟧$, el triángulo es <b>⟦9⟧</b>.`,

  // circles
  '162uvssoo3s': R`
⟦0⟧
<p>El cociente entre la longitud de cualquier circunferencia y su diámetro es siempre el mismo número, $\pi \approx 3{,}14159\ldots$ (a menudo se aproxima por $3{,}14$ o $\frac{22}{7}$).</p>
⟦1⟧
⟦2⟧
<h3>Arcos y sectores</h3>
<p>Un sector de ángulo central $\theta$ es la fracción $\frac{\theta}{360^\circ}$ del círculo completo:</p>
⟦3⟧
<h3>Ángulos en la circunferencia</h3>
<ul><li>El ángulo central es el <b>doble</b> del ángulo inscrito que abarca el mismo arco.</li><li>Un ángulo inscrito en una semicircunferencia mide $90^\circ$.</li><li>La tangente es perpendicular al radio en el punto de tangencia.</li></ul>
⟦4⟧`,
  '20wibo4oznt': R`Elementos de la circunferencia. El diámetro es el doble del radio: d = 2r.`,
  '1y041ovnv67': R`<p>Radio 5 cm: $C = 2\pi(5) = 10\pi \approx 31{,}4$ cm y $A = \pi(5)^2 = 25\pi \approx 78{,}5$ cm². Dejar el resultado «en función de $\pi$» lo mantiene exacto.</p>`,
  '1ljhd2tb7ca': R`\text{longitud del arco} = \frac{\theta}{360^\circ} \times 2\pi r \qquad \text{área del sector} = \frac{\theta}{360^\circ} \times \pi r^2`,
  '1aglezoi0gp': R`<p>Fíjate en si te dan el radio o el diámetro. Usar $d$ en $\pi r^2$ da un área cuatro veces mayor.</p>`,
  '1iocjvynzqe': R`Usando $\pi \approx 3{,}14$, halla la longitud de una circunferencia de diámetro ⟦0⟧ cm.`,
  '18sb05q1pm7': R`Usando $\pi \approx 3{,}14$, halla la longitud de una circunferencia de radio ⟦0⟧ cm.`,
  'upb5nulrwg': R`$C = ⟦0⟧ = ⟦1⟧$ cm.`,
  '143d0xflci4': R`\pi d = 3{,}14 \times ⟦0⟧`,
  '25yf5bhyvhn': R`2\pi r = 2 \times 3{,}14 \times ⟦0⟧`,
  '1stzke7qj3q': R`Usando $\pi \approx \frac{22}{7}$, halla la longitud de una circunferencia de radio ⟦0⟧ cm.`,
  'vghbcaja6w': R`$C = 2\pi r = 2 \times \frac{22}{7} \times ⟦0⟧ = ⟦1⟧$ cm.`,
  '91md2imk84': R`Halla el área de un círculo de diámetro ⟦0⟧ cm. Deja el resultado en función de $\pi$.`,
  '6f1a511ku9': R`Halla el área de un círculo de radio ⟦0⟧ cm. Deja el resultado en función de $\pi$.`,
  'ctkfkfiuaj': R`⟦0⟧$A = \pi r^2 = \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1uvm4lzorf9': R`El radio es la mitad del diámetro: ⟦0⟧ cm. `,
  '2et0owexep4': R`Un sector tiene radio ⟦0⟧ cm y ángulo central de $⟦1⟧^\circ$. Halla la longitud de su arco en función de $\pi$.`,
  '1fpgoxe9d0': R`Arco $= \frac{⟦0⟧}{360} \times 2\pi \times ⟦1⟧ = ⟦2⟧$ cm.`,
  '72i5kpinty': R`Un sector tiene radio ⟦0⟧ cm y ángulo central de $⟦1⟧^\circ$. Halla su área en función de $\pi$.`,
  '1ayxkyrhaid': R`Área $= \frac{⟦0⟧}{360} \times \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1fzoa3xapl2': R`Una circunferencia mide $⟦0⟧$ cm de longitud. Halla el área del círculo en función de $\pi$.`,
  '22u3ive551m': R`$2\pi r = ⟦0⟧$ da $r = ⟦1⟧$. Entonces $A = \pi r^2 = ⟦2⟧$ cm².`,
  '1rcge82c97m': R`Un ángulo inscrito en una circunferencia mide $⟦0⟧^\circ$. ¿Cuánto mide el ángulo central que abarca el mismo arco?`,
  '10ccm4ku9vc': R`El ángulo central es el doble del inscrito: $2 \times ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  '1ak5mj5jm7n': R`Un ángulo central de una circunferencia mide $⟦0⟧^\circ$. ¿Cuánto mide un ángulo inscrito que abarca el mismo arco?`,
  'kfe0atvapi': R`El ángulo inscrito es la mitad del central: $\frac{⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // solids
  '57zv1tsefg': R`
<p>Un <b>prisma</b> tiene la misma sección en toda su longitud, así que su volumen es simplemente el área de esa sección por la longitud. Una pirámide o un cono que quepa exactamente dentro tiene justo un tercio de ese volumen.</p>
⟦0⟧
<p>En el cono, $s$ es la <b>generatriz</b>; por Pitágoras, $s = \sqrt{r^2 + h^2}$.</p>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '1uywbz6o84t': R`Cuerpo`,
  'alc1a0j1b0': R`Volumen`,
  'bt7ak3o2ct': R`Área total`,
  'm6y2tibz7j': R`Prisma`,
  '3d3lt4gyiq': R`$A_{\text{base}} \times h$`,
  '2e5o3mkaw4p': R`suma de todas las caras`,
  '17avl8a1nf0': R`Cilindro`,
  'w68av9so54': R`Pirámide`,
  '1xyfnhsvdp5': R`$\frac{1}{3} A_{\text{base}} \times h$`,
  '1u5rq973ap9': R`base + triángulos`,
  '40atij69zq': R`Cono`,
  '1cebx8i383a': R`Esfera`,
  'u0gc3phvmz': R`<p>Un cilindro con $r = 3$ cm y $h = 10$ cm:</p><p>$V = \pi (3)^2 (10) = 90\pi$ cm³ $\approx 282{,}7$ cm³. &nbsp; $A = 2\pi(9) + 2\pi(3)(10) = 18\pi + 60\pi = 78\pi$ cm².</p>`,
  '706fqlfv6n': R`<p>La superficie lateral de un cilindro se desenrolla en un rectángulo: un lado es la altura $h$ y el otro, la longitud de la circunferencia $2\pi r$. De ahí sale $2\pi r h$.</p>`,
  '20ndnd7mfh9': R`<p>Semiesferas: la mitad del volumen de la esfera, pero el área total es $2\pi r^2$ (parte curva) $+ \pi r^2$ (círculo plano) $= 3\pi r^2$.</p>`,
  '6nduvxh56u': R`Halla el volumen de un cilindro de radio ⟦0⟧ cm y altura ⟦1⟧ cm, en función de $\pi$.`,
  '1u7xsdtlko1': R`$V = \pi r^2 h = \pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '1ao9a1zkfz0': R`Halla el volumen de un cono de radio ⟦0⟧ cm y altura ⟦1⟧ cm, en función de $\pi$.`,
  '11qtlcks0z2': R`$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  'qcz5afk27t': R`Halla el volumen de una esfera de radio ⟦0⟧ cm, en función de $\pi$.`,
  '1a5wzmqqnbb': R`$V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi \times ⟦0⟧ = ⟦1⟧$ cm³.`,
  '2boy4rshpla': R`Halla el área de una esfera de radio ⟦0⟧ cm, en función de $\pi$.`,
  'myifdpmpki': R`$A = 4\pi r^2 = 4\pi \times ⟦0⟧ = ⟦1⟧$ cm².`,
  '225sd035ctc': R`Halla el área total de un cilindro cerrado de radio ⟦0⟧ cm y altura ⟦1⟧ cm, en función de $\pi$.`,
  'e5stvcnm4w': R`$A = 2\pi r^2 + 2\pi r h = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'ud0ddpzcpo': R`Un cono tiene radio ⟦0⟧ cm y altura ⟦1⟧ cm. ¿Cuánto mide su generatriz?`,
  '1ds61tt8krc': R`$s = \sqrt{r^2 + h^2} = \sqrt{⟦0⟧ + ⟦1⟧} = ⟦2⟧$ cm.`,
  '1xg851dcel': R`Un cono tiene radio ⟦0⟧ cm y generatriz ⟦1⟧ cm. Halla su área total en función de $\pi$.`,
  '1l881dmx8vq': R`$A = \pi r^2 + \pi r s = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'fb33rdkq1e': R`Una pirámide tiene base cuadrada de ⟦0⟧ cm de lado y altura de ⟦1⟧ cm. ¿Cuál es su volumen?`,
  '113p07j0igk': R`$V = \frac{1}{3} \times \text{base} \times h = \frac{1}{3} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '15qifiaqosu': R`Un prisma triangular tiene como sección un triángulo de base ⟦0⟧ cm y altura ⟦1⟧ cm. El prisma mide ⟦2⟧ cm de largo. ¿Cuál es su volumen?`,
  '2b2ytzrzz4n': R`Área de la sección $= \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm². Volumen $= ⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ cm³.`,
});

/* Español — Secundaria (estadística → semejanza) */
addT('es', {
  // statistics-jh
  '1gkv2j833s3': R`
<p>Una <b>medida de tendencia central</b> resume un conjunto de datos con un valor típico; una <b>medida de dispersión</b> indica cuán separados están los valores.</p>
⟦0⟧
<h3>Media a partir de una tabla de frecuencias</h3>
⟦1⟧
⟦2⟧
<h3>Razonar hacia atrás</h3>
⟦3⟧
<p>Con un número par de valores, la mediana es la media de los dos valores centrales.</p>
⟦4⟧`,
  'zy4hmws2f9': R`Conviene cuando…`,
  'j0p0vvrwxf': R`los datos no tienen valores extremos (atípicos)`,
  '2ajydntyvld': R`los datos son asimétricos o tienen atípicos — p. ej., precios de viviendas`,
  '1d4nmjapkp8': R`los datos son categóricos — p. ej., color favorito`,
  '12wlbpcje5l': R`una idea rápida de la dispersión (pero sensible a los atípicos)`,
  '21qgjzyanwp': R`⟦0⟧<p>$\sum f = 20$ y $\sum fx = 3 + 10 + 24 + 16 = 53$, así que la media es $\frac{53}{20} = 2{,}65$. La moda es 3 (la mayor frecuencia). La mediana es la media de los valores 10.º y 11.º —ambos 3—, así que la mediana es 3.</p>`,
  '1j97et5mff': R`Puntuación $x$`,
  'gm8elt7xjs': R`Frecuencia $f$`,
  '1rnz21lc9g1': R`<p>$\text{total} = \text{media} \times \text{cantidad}$. Si 5 números tienen media 12, su total es 60; así que si cuatro de ellos suman 47, el quinto es 13.</p>`,
  '1ksrbyf4x6z': R`<p>En una tabla de frecuencias, divide $\sum fx$ entre la frecuencia total $\sum f$, no entre el número de filas.</p>`,
  '15d8a2aae5e': R`Ordenados: ⟦0⟧. Hay ⟦1⟧ valores, así que la mediana es la media de los dos centrales: $\frac{⟦2⟧ + ⟦3⟧}{2} = ⟦4⟧$.`,
  '3npude2io3': R`Halla la puntuación media a partir de la tabla de frecuencias. Redondea a 2 decimales si hace falta.⟦0⟧`,
  '1kkkmzzlb29': R`Puntuación`,
  'nph0ner2hr': R`Frecuencia`,
  'c68abpawgf': R`$\sum f = ⟦0⟧$ y $\sum fx = ⟦1⟧ = ⟦2⟧$. Media $= \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  'aevfr1f0xw': R`La media de cinco números es ⟦0⟧. Cuatro de ellos son ⟦1⟧. ¿Cuál es el quinto número?`,
  '2ddgia0tp1j': R`Los cinco números suman $5 \times ⟦0⟧ = ⟦1⟧$. Los cuatro conocidos suman ⟦2⟧, así que el quinto es $⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '5e5w5tzrl1': R`Después de ⟦0⟧ exámenes, la nota media de Diego es ⟦1⟧. Tras un examen más, su nota media es ⟦2⟧. ¿Qué nota sacó en el último examen?`,
  '23zlk0k5oq4': R`Total antes: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Total después: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Última nota $= ⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1tdgm1yju18': R`¿Cuál es la moda de los datos de esta tabla?⟦0⟧`,
  '2cqua50kina': R`Número de libros leídos`,
  'ypw9p4zjlu': R`Número de estudiantes`,
  '22iugjzjcbh': R`La moda es el valor con mayor frecuencia. ⟦0⟧ tiene frecuencia ⟦1⟧, la mayor.`,

  // probability-jh
  '1s529z7x9mx': R`
<p>Un <b>experimento</b> (lanzar un dado, sacar una carta) tiene posibles <b>resultados</b>. El conjunto de todos los resultados es el <b>espacio muestral</b> $S$; un <b>suceso</b> $E$ es un conjunto de resultados. Cuando todos los resultados son igualmente probables:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Dos dados</h3>
<p>Lanzar dos dados da $6 \times 6 = 36$ resultados igualmente probables. Una suma de 7 se obtiene de 6 maneras —(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)—, así que $P(\text{suma} = 7) = \frac{6}{36} = \frac{1}{6}$. En general, el número de maneras de obtener una suma $s$ es $6 - |s - 7|$.</p>
<h3>Una baraja de cartas</h3>
<p>52 cartas: 4 palos (♠ ♣ negros, ♥ ♦ rojos) de 13 valores (A, 2–10, J, Q, K). Hay 12 figuras (J, Q, K).</p>
⟦3⟧`,
  '2zwk9a7b7o': R`<ul><li>$0 \le P(E) \le 1$: 0 significa imposible y 1, seguro.</li><li><b>Complementario:</b> $P(\text{no } E) = 1 - P(E)$.</li><li><b>Frecuencia esperada</b> en $n$ ensayos $= P(E) \times n$.</li></ul>`,
  'sp7ttiactv': R`<p>Una bolsa tiene 3 canicas rojas, 5 azules y 2 verdes. $P(\text{azul}) = \frac{5}{10} = \frac{1}{2}$, y $P(\text{no verde}) = 1 - \frac{2}{10} = \frac{4}{5}$.</p>`,
  '1quguehv908': R`<p>La probabilidad experimental (de ensayos reales) se acerca a la probabilidad teórica a medida que aumenta el número de ensayos, pero rara vez coincide exactamente.</p>`,
  '2jkb08f2dg': R`rojo`,
  '1a43z74k2oy': R`azul`,
  '1719de5b71t': R`verde`,
  '7kkile34lr': R`Una bolsa contiene ⟦0⟧ bolas rojas, ⟦1⟧ azules y ⟦2⟧ verdes. Se saca una bola al azar. ¿Cuál es la probabilidad de que sea de color ⟦3⟧?`,
  '26hhfp8us6o': R`Escribe una fracción como 2/7.`,
  '34i4syx68n': R`$P(\text{⟦0⟧}) = \frac{\text{bolas de color ⟦1⟧}}{\text{total de bolas}} = \frac{⟦2⟧}{⟦3⟧}⟦4⟧$.`,
  '17fighwohx4': R`Se lanzan dos dados equilibrados. ¿Cuál es la probabilidad de que la suma sea ⟦0⟧?`,
  '1zfipt2db8x': R`Escribe una fracción como 5/36.`,
  '1xyubi5yqtq': R`Hay 36 resultados igualmente probables, y una suma de ⟦0⟧ ocurre en ⟦1⟧ de ellos. $P = \frac{⟦2⟧}{36}⟦3⟧$.`,
  '2cy3xut293b': R`mañana llueva`,
  'lo67u7j66d': R`un autobús llegue tarde`,
  '2dk6yd5lp5u': R`una semilla germine`,
  '1cur3c8r655': R`un equipo gane su próximo partido`,
  '9jb4uxp8mo': R`La probabilidad de que ⟦0⟧ es ⟦1⟧. ¿Cuál es la probabilidad de que esto <b>no</b> ocurra?`,
  '1459jtc2vnw': R`$P(\text{no } E) = 1 - P(E) = 1 - ⟦0⟧ = ⟦1⟧$.`,
  '1m5z09mwtae': R`un seis`,
  '2goj7cvo26g': R`un número par`,
  '16jy1hpm8uh': R`un número mayor que 4`,
  '9psh7q2zqv': R`un número primo`,
  'd1r3jk3fi5': R`un múltiplo de 3`,
  'pkpby3rsiu': R`Se lanza un dado equilibrado ⟦0⟧ veces. ¿Cuántas veces esperarías sacar ⟦1⟧?`,
  '1m2zbe7u1ww': R`$P = \frac{⟦0⟧}{6}$, así que el número esperado es $\frac{⟦1⟧}{6} \times ⟦2⟧ = ⟦3⟧$.`,
  '1eipzgu94sk': R`un número menor que 3`,
  '1i6lu5hyvob': R`un divisor de 6`,
  'uzgsjc3e5d': R`un número mayor que 1`,
  '1u2i7hb5c5n': R`un cuadrado perfecto`,
  'rjfh61539i': R`Se lanza un dado equilibrado de seis caras. ¿Cuál es la probabilidad de sacar ⟦0⟧?`,
  '2a86ul8z5e6': R`Escribe una fracción como 1/3.`,
  'wfhq8l2euu': R`Resultados favorables: ⟦0⟧, es decir, ⟦1⟧ de 6. $P = \frac{⟦2⟧}{6}⟦3⟧$.`,
  '1s7i7y0snm7': R`una carta de corazones`,
  '1tvznlpjqb2': R`13 corazones`,
  '19nwtn8arbx': R`un rey`,
  'gy4518kzl1': R`4 reyes`,
  '207cuaz509r': R`una carta roja`,
  '1qvhvp7e8k8': R`26 cartas rojas`,
  '1sakrbqn5x6': R`un rey rojo`,
  'c3s60n5sor': R`2 reyes rojos`,
  '1671qt85c28': R`una figura (J, Q o K)`,
  '29hha1vs7b6': R`12 figuras`,
  'pavjeefc8d': R`un as o un rey`,
  '2cy5fpo3esg': R`4 ases y 4 reyes`,
  '1rpplt11syb': R`un 7 negro`,
  '13zshtnr8nq': R`el 7 de picas y el 7 de tréboles`,
  '71sptgg3ka': R`Se saca al azar una carta de una baraja estándar de 52 cartas. ¿Cuál es la probabilidad de que sea ⟦0⟧?`,
  '1wkkibr9nk7': R`Escribe una fracción como 1/13.`,
  '23r35ol6pkt': R`Son ⟦0⟧ de las 52 cartas: $P = \frac{⟦1⟧}{52} = ⟦2⟧$.`,

  // social-arith
  '28qmmxd3nnk': R`
<p>Las preguntas cotidianas sobre dinero son, en el fondo, preguntas de porcentajes.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Descuento e impuesto</h3>
<p>Aplica los porcentajes uno tras otro: un descuento del 20% y luego un impuesto del 10% sobre 150 dólares dan $150 \times 0{,}8 \times 1{,}1 = 132$ dólares.</p>
<h3>Interés simple</h3>
⟦3⟧
<p>1 500 dólares ahorrados al 6% anual durante 3 años generan $1\,500 \times 0{,}06 \times 3 = 270$ dólares; el total llega a 1 770 dólares. Si el plazo está en meses, usa $t = \frac{\text{meses}}{12}$.</p>
<h3>Peso bruto, tara y peso neto</h3>
<p><b>Bruto</b> = peso total; <b>tara</b> = peso del envase; <b>neto</b> = bruto − tara. Un saco de 50 kg con una tara del 2% tiene un peso neto de $50 \times 0{,}98 = 49$ kg.</p>
⟦4⟧`,
  '104nn3vx4at': R`Término`,
  '1mb9fntmked': R`Precio de costo (PC)`,
  '12bh5c74j0l': R`lo que pagó el vendedor`,
  'p4v89gjsks': R`Precio de venta (PV)`,
  'ixzwuufb5k': R`lo que paga el comprador`,
  '2dj314tvgil': R`Ganancia`,
  '1b41ckd5mix': R`PV − PC (cuando PV > PC)`,
  '8exalr20f0': R`Pérdida`,
  '2acjs1v6cv9': R`PC − PV (cuando PV < PC)`,
  '8cl7h0h70q': R`$$\text{ganancia \%} = \frac{\text{ganancia}}{\text{precio de costo}} \times 100\% \qquad\qquad \text{PV} = \text{PC} \times \left(1 + \frac{p}{100}\right)$$`,
  '2251p3nt91s': R`<p>Un teléfono comprado por 400 dólares se vende por 460 dólares. Ganancia $= 60$, así que el porcentaje de ganancia es $\frac{60}{400} \times 100\% = 15\%$.</p>`,
  '16966flk4n0': R`I = C \times r \times t \qquad \text{(capital} \times \text{tasa anual} \times \text{años)}`,
  '8dx80n4t33': R`<p>El porcentaje de ganancia siempre se calcula sobre el precio de <b>costo</b>, no sobre el precio de venta.</p>`,
  'zmoygr0th3': R`Un comerciante compra una bicicleta por ⟦0⟧ dólares y la vende por ⟦1⟧ dólares. ¿Cuál es el porcentaje de ganancia?`,
  'hr5vewyo1d': R`Un comerciante compra una bicicleta por ⟦0⟧ dólares y la vende por ⟦1⟧ dólares. ¿Cuál es el porcentaje de pérdida?`,
  'w2dibc5j0k': R`⟦0⟧ $= ⟦1⟧$. Porcentaje $= \frac{⟦2⟧}{⟦3⟧} \times 100\% = ⟦4⟧\%$.`,
  '1mg15vgrrsq': R`Una tienda compra una lámpara por ⟦0⟧ dólares y quiere ganar un ⟦1⟧%. ¿A qué precio debe venderla?`,
  '1znpgx1zz3k': R`$\text{PV} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ dólares.`,
  '1qynlkevtzf': R`durante 1 año`,
  '265o2h9psz8': R`durante ⟦0⟧ años`,
  'z7uavwhcj6': R`Se invierten ⟦0⟧ dólares al ⟦1⟧% de interés simple anual ⟦2⟧. ¿Cuál es el monto total al final?`,
  '158pfsp5k1j': R`Se invierten ⟦0⟧ dólares al ⟦1⟧% de interés simple anual ⟦2⟧. ¿Cuánto interés se obtiene?`,
  '35ywrebltu': R`$I = C r t = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ dólares.⟦4⟧`,
  '26yfs6y8h5o': R` Total $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ dólares.`,
  '11eyk8p87p8': R`Un par de zapatos cuesta ⟦0⟧ dólares. Tiene un descuento del ⟦1⟧% y luego se añade un impuesto del ⟦2⟧% sobre el precio rebajado. ¿Cuál es el precio final?`,
  '1ebjr2t3r5v': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ y luego $\times ⟦3⟧ = ⟦4⟧$ dólares.`,
  'j3cdki7hbr': R`Un saco de arroz tiene un peso bruto de ⟦0⟧ kg. La tara es el ⟦1⟧% del peso bruto. ¿Cuál es el peso neto?`,
  '91s53sp2z': R`Tara $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$ kg. Neto $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ kg.`,
  '1kvwyquko78': R`Un reloj se vende por ⟦0⟧ dólares con una ganancia del ⟦1⟧%. ¿Cuál era el precio de costo?`,
  'g36e4lpvm4': R`$\text{PV} = \text{PC} \times ⟦0⟧$, así que $\text{PC} = \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$ dólares. (Restar el ⟦4⟧% al precio de venta sería un error).`,

  // patterns
  '2bajjwmyt59': R`
<p>Una <b>sucesión</b> es una lista ordenada de números llamados <b>términos</b>. Descubrir la regla permite continuar el patrón o saltar directamente a cualquier término.</p>
<h3>Sucesiones aritméticas</h3>
<p>Cada vez se suma el mismo número $d$ (la <b>diferencia común</b>): 5; 8; 11; 14; … tiene $d = 3$.</p>
⟦0⟧
<h3>Sucesiones geométricas</h3>
<p>Cada término se multiplica por la misma <b>razón</b> $r$: 3; 6; 12; 24; … ($r = 2$); 80; 40; 20; … ($r = \frac{1}{2}$).</p>
<h3>Sucesiones especiales</h3>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '11v4eu8405a': R`$$u_n = a + (n - 1)d$$<p>donde $a$ es el primer término. Para 5; 8; 11; …: $u_n = 5 + 3(n - 1) = 3n + 2$, así que $u_{50} = 152$.</p>`,
  '7gqysfvinh': R`Nombre`,
  'mwgm16sn11': R`Términos`,
  '24evmkf6e6r': R`Término n-ésimo`,
  'xt4guw3yrj': R`Números cuadrados`,
  'l2hgs4w3i2': R`Números cúbicos`,
  'lutv3xfjp0': R`Números triangulares`,
  '2g9qzgo3ylf': R`Fibonacci`,
  'vjhbyyj0jc': R`cada término = suma de los dos anteriores`,
  'k4xtnyrrtm': R`<p>¿Qué término de 7; 11; 15; … es igual a 95? $u_n = 4n + 3 = 95$, así que $n = 23$: es el término 23.º.</p>`,
  'sceh7pz7y9': R`<p>El coeficiente de $n$ en la fórmula del término n-ésimo es la diferencia común, no el primer término.</p>`,
  '73l5vk6u1l': R`¿Cuál es el siguiente término de la sucesión ⟦0⟧; …?`,
  '273m8h7rqm0': R`La diferencia común es ⟦0⟧, así que el siguiente término es $⟦1⟧ ⟦2⟧ = ⟦3⟧$.`,
  'e7rskm3cuq': R`Halla el término $u_{⟦0⟧}$ de la sucesión ⟦1⟧; …`,
  '1zj05x9ucbg': R`¿Qué fórmula da el término n-ésimo de ⟦0⟧; …?`,
  '10p4kmsov0h': R`Los términos aumentan de ⟦0⟧ en ⟦1⟧, así que la fórmula empieza por $⟦2⟧n$. Para $n = 1$, $⟦2⟧(1) + c = ⟦3⟧$ da $c = ⟦4⟧$: $u_n = ⟦5⟧$.`,
  'kmsujsbacm': R`Cada término se multiplica por ⟦0⟧, así que el siguiente término es $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '1tqcntwvtfu': R`¿Qué término de la sucesión ⟦0⟧; … es igual a ⟦1⟧?`,
  '1i1kg83c5xj': R`$u_n = ⟦0⟧ + (n - 1) \times ⟦1⟧ = ⟦2⟧$, así que $(n - 1) \times ⟦3⟧ = ⟦4⟧$, $n - 1 = ⟦5⟧$ y $n = ⟦6⟧$.`,
  '1ru4k9e3ubn': R`Los números triangulares son 1; 3; 6; 10; 15; … Halla el número triangular $T_{⟦0⟧}$.`,
  '1kom1e2tuqt': R`La sucesión 1; 4; 9; 16; 25; … continúa. Halla su término $u_{⟦0⟧}$.`,
  '29es9j5bth6': R`Son los números cuadrados, $u_n = n^2$, así que $u_{⟦0⟧} = ⟦1⟧$.`,
  '1jl1l3ooto1': R`En una sucesión, cada término a partir del tercero es la suma de los dos anteriores. Los dos primeros términos son ⟦0⟧ y ⟦1⟧. ¿Cuál es el 7.º término?`,
  'o3oiu9pprw': R`Los términos son ⟦0⟧. El 7.º término es ⟦1⟧.`,

  // similarity
  '165d9zkx0zx': R`
<p>Una <b>transformación</b> mueve una figura o cambia su tamaño. Con traslaciones, simetrías y giros la imagen es <b>congruente</b> (misma forma y tamaño); con una homotecia es <b>semejante</b> (misma forma, distinto tamaño).</p>
⟦0⟧
<h3>Figuras semejantes</h3>
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '8do2aamvnn': R`Transformación`,
  'jmpbrf5c1s': R`Regla para un punto (x; y)`,
  '2b0j70wot2h': R`Traslación por $\binom{a}{b}$`,
  '53ydgkbdv': R`Simetría respecto al eje $x$`,
  '1y0gzwc8g5l': R`Simetría respecto al eje $y$`,
  '2c65j86o1iv': R`Simetría respecto a $y = x$`,
  '2az2vuuewqg': R`Giro de $90^\circ$ en sentido antihorario con centro O`,
  '1bwu4k8y4fc': R`Giro de $180^\circ$ con centro O`,
  '24she08dmbo': R`Giro de $90^\circ$ en sentido horario con centro O`,
  '1kfzbnkpyo2': R`Homotecia de razón $k$ y centro O`,
  '1u5zflf6nl6': R`<p>En figuras semejantes, los ángulos correspondientes son iguales y los lados correspondientes están en la misma razón, la <b>razón de semejanza</b> $k$. Las áreas se multiplican por $k^2$ y los volúmenes por $k^3$.</p>`,
  'f54rct691f': R`<p>Los triángulos $ABC$ y $PQR$ son semejantes con $AB = 6$, $BC = 8$ y $PQ = 9$. Razón $k = \frac{9}{6} = 1{,}5$, así que $QR = 8 \times 1{,}5 = 12$. Si el triángulo $ABC$ tiene área 24, el triángulo $PQR$ tiene área $24 \times 1{,}5^2 = 54$.</p>`,
  '111he4idz8g': R`<p>Un poste de 1,5 m proyecta una sombra de 2 m en el mismo momento en que un árbol proyecta una sombra de 12 m. Los triángulos son semejantes: $\frac{h}{12} = \frac{1{,}5}{2}$, así que $h = 9$ m.</p>`,
  '1ag7324gyvl': R`<p>Los lados semejantes difieren en un <b>múltiplo</b>, no en una cantidad fija. Si un lado pasa de 6 a 9, un lado de 8 pasa a 12, no a 11.</p>`,
  'grtkq2tz50': R`una simetría respecto al eje $x$`,
  '2b146agxtl5': R`una simetría respecto al eje $y$`,
  '12ufv3upbre': R`una simetría respecto a la recta $y = x$`,
  '1efbacf7mos': R`un giro de $90^\circ$ en sentido antihorario con centro en el origen`,
  '2ettdugdvou': R`un giro de $180^\circ$ con centro en el origen`,
  'y4ewc1f7tf': R`un giro de $90^\circ$ en sentido horario con centro en el origen`,
  '147bj1yruac': R`una traslación por $⟦0⟧$`,
  'q8g4eu6egm': R`Al punto $P⟦0⟧$ se le aplica ⟦1⟧. ¿Cuáles son las coordenadas de su imagen?`,
  'px6a8rprin': R`Escribe las coordenadas como x; y.`,
  '199eqilp9e9': R`La regla es ⟦0⟧, así que la imagen es $⟦1⟧$.`,
  '141nr4eramb': R`Los triángulos $ABC$ y $PQR$ son semejantes, con $AB \leftrightarrow PQ$, $BC \leftrightarrow QR$ y $CA \leftrightarrow RP$. Si $AB = ⟦0⟧$, $BC = ⟦1⟧$, $CA = ⟦2⟧$ y $⟦3⟧ = ⟦4⟧$, halla $⟦5⟧$.`,
  '1kimjtrunz7': R`Razón de semejanza $k = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$. Así que $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  'bj1shpkj9u': R`Dos cuerpos semejantes tienen razón de semejanza ⟦0⟧. El menor tiene un volumen de ⟦1⟧ cm³. ¿Cuál es el volumen del mayor?`,
  'ld6jtpizu2': R`Los volúmenes se multiplican por $k^3 = ⟦0⟧$: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '11duhh78e55': R`Dos figuras semejantes tienen razón de semejanza ⟦0⟧. La menor tiene un área de ⟦1⟧ cm². ¿Cuál es el área de la mayor?`,
  'hfezjn5dnm': R`Las áreas se multiplican por $k^2 = ⟦0⟧$: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '2eojcpktunl': R`Un palo de ⟦0⟧ m proyecta una sombra de ⟦1⟧ m. En ese mismo momento, un árbol proyecta una sombra de ⟦2⟧ m. ¿Cuánto mide el árbol?`,
  '196fpe0msid': R`Los triángulos son semejantes: $\frac{h}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$, así que $h = ⟦3⟧ \times \frac{⟦4⟧}{⟦5⟧} = ⟦6⟧$ m.`,
  '1iy8baeb4jd': R`Al punto $⟦0⟧$ se le aplica una homotecia con centro en el origen y razón ⟦1⟧. ¿Dónde está su imagen?`,
  '1fyw56nqicr': R`Multiplica ambas coordenadas por ⟦0⟧: $(⟦1⟧ \times ⟦2⟧;\; ⟦3⟧ \times ⟦4⟧) = ⟦5⟧$.`,
});
