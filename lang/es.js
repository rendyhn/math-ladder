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

/* Español — Bachillerato (sucesiones → resolución de triángulos) */
addT('es', {
  // sequences
  '214j3dem4vw': R`
⟦0⟧
<p>Aquí $a$ es el primer término y $l$ el último.</p>
⟦1⟧
⟦2⟧
<h3>Series geométricas infinitas</h3>
⟦3⟧
<p>Ejemplo: $8 + 4 + 2 + 1 + \cdots = \frac{8}{1 - \frac{1}{2}} = 16$.</p>
<h3>Notación sigma</h3>
<p>$\displaystyle\sum_{k=1}^{n} f(k)$ significa $f(1) + f(2) + \cdots + f(n)$. Datos útiles: $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ y $\sum_{k=1}^{n} c = cn$.</p>
⟦4⟧`,
  'lwukzez7ke': R`Aritmética`,
  '1atqzl7ltey': R`Geométrica`,
  'zs186mkwh5': R`se suma $d$ cada vez`,
  '160nuilyero': R`se multiplica por $r$ cada vez`,
  '99dr6iy4ys': R`Suma de n términos`,
  '1yzmu3p7b4v': R`<p>La suma de los 20 primeros términos de $3; 7; 11; \ldots$ es $S_{20} = \frac{20}{2}(2 \cdot 3 + 19 \cdot 4) = 10 \times 82 = 820$.</p>`,
  '8pkxhjbkfd': R`<p>En una sucesión aritmética, $u_4 = 17$ y $u_9 = 42$. Los separan cinco pasos de $d$, así que $5d = 25$, $d = 5$ y $a = 17 - 3 \times 5 = 2$.</p>`,
  '3zsr22exdg': R`<p>Si $|r| \lt 1$, los términos disminuyen lo bastante rápido como para que la suma se estabilice en un valor finito:</p>$$S_\infty = \frac{a}{1 - r}$$<p>Si $|r| \ge 1$, la serie no tiene suma finita.</p>`,
  '22swm7le3e': R`<p>Entre $u_p$ y $u_q$ hay $q - p$ pasos, no $q - p + 1$.</p>`,
  'v83xyier66': R`En una sucesión aritmética, $u_{⟦0⟧} = ⟦1⟧$ y $u_{⟦2⟧} = ⟦3⟧$. Halla $u_{⟦4⟧}$.`,
  '1vrn63sndie': R`$(⟦0⟧ - ⟦1⟧)d = ⟦2⟧$, así que $d = ⟦3⟧$. Entonces $a = u_{⟦4⟧} - ⟦5⟧d = ⟦6⟧$ y $u_{⟦7⟧} = ⟦8⟧ + ⟦9⟧(⟦10⟧) = ⟦11⟧$.`,
  'ltcwrvbh9s': R`Halla la suma de los ⟦0⟧ primeros términos de la sucesión aritmética ⟦1⟧; …`,
  'vsiejpaurw': R`Halla el término $u_{⟦0⟧}$ de la sucesión geométrica ⟦1⟧; …`,
  '2fg2ivyt6zs': R`Halla la suma de los ⟦0⟧ primeros términos de la serie geométrica $⟦1⟧ + \cdots$`,
  '6by3ukfsg3': R`Halla la suma infinita de la serie geométrica de primer término ⟦0⟧ y razón $⟦1⟧$.`,
  '1c4uqsdtxyr': R`$|r| \lt 1$, así que $S_\infty = \frac{a}{1 - r} = \frac{⟦0⟧}{1 - ⟦1⟧} = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  'm56xkk6hj0': R`Calcula $\displaystyle\sum_{k=1}^{⟦0⟧} (⟦1⟧)$.`,
  'zk5lcxjf3d': R`El sueldo de Lucía en su primer año es de ⟦0⟧ dólares y aumenta ⟦1⟧ dólares cada año. ¿Cuánto gana en total en sus ⟦2⟧ primeros años?`,
  '222tg0c1ffy': R`Es una serie aritmética: $S_{⟦0⟧} = \frac{⟦1⟧}{2}\big(2 \times ⟦2⟧ + ⟦3⟧ \times ⟦4⟧\big) = ⟦5⟧$ dólares.`,

  // trig-basics
  '25ycjlixcfv': R`
<p>En un triángulo rectángulo, respecto a un ángulo agudo $\theta$:</p>
⟦0⟧
<p>Regla mnemotécnica: <b>SOH-CAH-TOA</b> (seno = opuesto/hipotenusa, coseno = adyacente/hipotenusa, tangente = opuesto/adyacente). Además, $\tan\theta = \frac{\sin\theta}{\cos\theta}$, y las razones recíprocas son $\csc\theta = \frac{1}{\sin\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, $\cot\theta = \frac{1}{\tan\theta}$.</p>
<h3>Valores exactos</h3>
⟦1⟧
<h3>Radianes</h3>
<p>$180^\circ = \pi$ radianes. Para pasar de grados a radianes se multiplica por $\frac{\pi}{180}$; de radianes a grados, por $\frac{180}{\pi}$. Así, $60^\circ = \frac{\pi}{3}$ y $\frac{3\pi}{4} = 135^\circ$.</p>
<h3>La circunferencia unitaria</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '27jmws7mgxv': R`\sin\theta = \frac{\text{opuesto}}{\text{hipotenusa}} \qquad \cos\theta = \frac{\text{adyacente}}{\text{hipotenusa}} \qquad \tan\theta = \frac{\text{opuesto}}{\text{adyacente}}`,
  'ig8vf2x1y6': R`sen θ`,
  '1qsg2x3tak': R`cos θ`,
  '27gocnzhjrz': R`tan θ`,
  '5bd73v8u9s': R`no definida`,
  'uyvhui04wr': R`<p>Para cualquier ángulo $\theta$, el punto de la circunferencia unitaria es $(\cos\theta; \sin\theta)$. Signos por cuadrante: «<b>T</b>odas, <b>S</b>eno, <b>T</b>angente, <b>C</b>oseno»: todas positivas en I, el seno en II, la tangente en III y el coseno en IV.</p><p>Usa el <b>ángulo de referencia</b> (el ángulo agudo con el eje $x$) y el signo correcto: $\sin 150^\circ = +\sin 30^\circ = \frac{1}{2}$, $\cos 240^\circ = -\cos 60^\circ = -\frac{1}{2}$.</p>`,
  'hizqd1rl8k': R`<p>Desde 30 m de distancia, el ángulo de elevación a lo alto de una torre es de $60^\circ$. Altura $= 30 \tan 60^\circ = 30\sqrt{3} \approx 52{,}0$ m.</p>`,
  'neyxpix7b9': R`<p>Comprueba el modo de tu calculadora (DEG o RAD) antes de calcular funciones trigonométricas.</p>`,
  '67i6rxexro': R`Halla el valor exacto de $⟦0⟧ ⟦1⟧$.`,
  'pdy7ypcls7': R`Se aceptan valores exactos como sqrt(3)/2.`,
  '2b66gqgt1o8': R`⟦0⟧$⟦1⟧^\circ$ está en el cuadrante ⟦2⟧, donde $⟦3⟧$ es ⟦4⟧. El ángulo de referencia es $⟦5⟧^\circ$ y $⟦6⟧ ⟦7⟧^\circ = ⟦8⟧$, así que $⟦9⟧ ⟦10⟧ = ⟦11⟧$.`,
  '1fngyjdzj11': R`⟦0⟧En $⟦1⟧^\circ$ el punto de la circunferencia unitaria es $⟦2⟧$ $= (\cos\theta; \sin\theta)$, así que $⟦3⟧ ⟦4⟧ = ⟦5⟧$.`,
  'd9ifn6iock': R`Convierte $⟦0⟧^\circ$ a radianes.`,
  'gs4x19407v': R`Multiplica por $\frac{\pi}{180}$: $⟦0⟧ \times \frac{\pi}{180} = ⟦1⟧$.`,
  'hgjh318aic': R`Convierte $⟦0⟧$ radianes a grados.`,
  'zfi973h2bw': R`Multiplica por $\frac{180}{\pi}$: $⟦0⟧ \times \frac{180^\circ}{\pi} = ⟦1⟧^\circ$.`,
  '1lrzh5jmv15': R`En un triángulo rectángulo, el cateto adyacente a un ángulo de $⟦0⟧^\circ$ mide ⟦1⟧ cm. Halla el cateto opuesto, con 2 decimales.`,
  '1p43u7j4b13': R`$\tan ⟦0⟧^\circ = \frac{\text{op}}{⟦1⟧}$, así que op $= ⟦2⟧\tan ⟦3⟧^\circ \approx ⟦4⟧$ cm.`,
  '8jiaz8zixv': R`Un triángulo rectángulo tiene hipotenusa ⟦0⟧ cm y un ángulo de $⟦1⟧^\circ$. Halla el cateto opuesto a ese ángulo, con 2 decimales.`,
  '22kukzeyh6': R`Un triángulo rectángulo tiene hipotenusa ⟦0⟧ cm y un ángulo de $⟦1⟧^\circ$. Halla el cateto adyacente a ese ángulo, con 2 decimales.`,
  '187jvg9zdbu': R`$⟦0⟧ ⟦1⟧^\circ = \frac{\text{⟦2⟧}}{⟦3⟧}$, así que el cateto $= ⟦4⟧⟦5⟧ ⟦6⟧^\circ \approx ⟦7⟧$ cm.`,
  'w56ix8w8yr': R`op`,
  '5ydwv3it97': R`ady`,
  '2abmsiuwu52': R`$\theta$ es agudo y $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$. Halla $⟦2⟧\theta$.`,
  '1qudt03n4v8': R`Dibuja un triángulo rectángulo con cateto opuesto ⟦0⟧ e hipotenusa ⟦1⟧; el cateto adyacente es $\sqrt{⟦2⟧^2 - ⟦3⟧^2} = ⟦4⟧$. Así que $⟦5⟧$.`,
  '28dk1p4hmng': R`Desde un punto a ⟦0⟧ m del pie de un edificio, el ángulo de elevación a lo alto es de $⟦1⟧^\circ$. ¿Cuánto mide el edificio? Da una respuesta exacta.`,
  '1fxpcv94bft': R`Se aceptan respuestas exactas como 12sqrt(3).`,
  'yywe4b70u1': R`$h = ⟦0⟧\tan ⟦1⟧^\circ$ y $\tan ⟦2⟧^\circ = ⟦3⟧$, así que $h = ⟦4⟧$ m.`,
  '1ttcab6tj5m': R`Cuadrante I`,
  '4o87w2367v': R`Cuadrante II`,
  '11djzpzc46w': R`Cuadrante III`,
  '26d39yjlrkj': R`Cuadrante IV`,
  '1t5qxibr3fa': R`¿En qué cuadrante está $\theta$ si $⟦0⟧\theta ⟦1⟧ 0$ y $⟦2⟧\theta ⟦3⟧ 0$?`,
  '1856p6n9vrk': R`El seno es positivo en I y II; el coseno, en I y IV; la tangente, en I y III. Solo el <b>⟦0⟧</b> cumple ambas condiciones.`,

  // trig-identities
  'v1udjwhzk5': R`
<p>Una <b>identidad</b> se cumple para todo ángulo. Las más importantes:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Resolver ecuaciones trigonométricas</h3>
<p>Halla el ángulo de referencia y luego todos los ángulos del intervalo pedido que tengan el signo correcto.</p>
⟦3⟧
⟦4⟧`,
  '23mroepg91v': R`Identidades pitagóricas`,
  '28msif6x03y': R`Ángulos compuestos`,
  '1qlqqnnfd2i': R`Ángulo doble`,
  '14xjp53gt4x': R`<p>Resuelve $\sin x = -\frac{1}{2}$ para $0^\circ \le x \lt 360^\circ$. El ángulo de referencia es $30^\circ$; el seno es negativo en los cuadrantes III y IV, así que $x = 180^\circ + 30^\circ = 210^\circ$ o $x = 360^\circ - 30^\circ = 330^\circ$.</p>`,
  '1hkvix57r6q': R`<p>Si $\sin\theta = \frac{3}{5}$ y $\theta$ está en el cuadrante II, entonces $\cos\theta = -\frac{4}{5}$: la identidad pitagórica da el valor absoluto y el cuadrante da el signo.</p>`,
  '64164qr2jw': R`$\theta$ es agudo y $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$. Halla $\sin 2\theta$.`,
  '27wxa35nxaa': R`Sabiendo que $\sin\theta = \frac{⟦0⟧}{⟦1⟧}$, halla $\cos 2\theta$.`,
  'szbqx0thv8': R`Resuelve $⟦0⟧ x = ⟦1⟧$ para $0^\circ \le x \lt 360^\circ$.`,
  '22m72qx0p66': R`Escribe los ángulos en grados separados por punto y coma, p. ej. 30; 150.`,
  'ygon4mdoxw': R`El ángulo de referencia es $⟦0⟧^\circ$. $⟦1⟧$ es ⟦2⟧ en los cuadrantes de $⟦3⟧^\circ$ y $⟦4⟧^\circ$, así que $x = ⟦5⟧^\circ$ o $x = ⟦6⟧^\circ$.`,
  '15odwmxybxs': R`la diferencia de cuadrados y luego $1 - \sin^2 x = \cos^2 x$`,
  'x5u3qd3gs1': R`la fórmula del ángulo doble`,
  'sj6onjglro': R`el desarrollo, que da $\sin^2 x + \cos^2 x + 2\sin x\cos x - 1$`,
  '7gzo83e030': R`Usa ⟦0⟧: $⟦1⟧ = ⟦2⟧$.`,
  '1ico65e8qdc': R`Halla el valor exacto de $⟦0⟧$.`,
  '2ayoc6nyniw': R`Se aceptan respuestas exactas como (sqrt(6)+sqrt(2))/4.`,
  '1mewvixpsgq': R`Escríbelo como $⟦0⟧$ y usa la fórmula del ángulo compuesto con los valores exactos de $30^\circ$, $45^\circ$ y $60^\circ$: el resultado es $⟦1⟧$.`,
  'ahced7ioyb': R`$\tan\theta = ⟦0⟧$ y $\theta$ está en el cuadrante ⟦1⟧. Halla $⟦2⟧$.`,
  '19cq8bi37ib': R`El triángulo tiene lados ⟦0⟧, ⟦1⟧ y ⟦2⟧. En el cuadrante ⟦3⟧, el seno es ⟦4⟧ y el coseno es ⟦5⟧, así que $\sin\theta = ⟦6⟧$ y $\cos\theta = ⟦7⟧$.`,

  // triangle-rules
  '2ga1qjtwo42': R`
<p>Nombra un triángulo de modo que el lado $a$ sea opuesto al ángulo $A$, $b$ opuesto a $B$ y $c$ opuesto a $C$. Estas reglas sirven para <b>cualquier</b> triángulo, no solo para los rectángulos.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '2fw62bzegqh': R`$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$<p>Úsalo cuando conozcas un lado y su ángulo opuesto, además de otro lado u otro ángulo.</p>`,
  'mp16igkhf3': R`Teorema del seno`,
  'eonocytnm1': R`$$a^2 = b^2 + c^2 - 2bc\cos A \qquad\qquad \cos A = \frac{b^2 + c^2 - a^2}{2bc}$$<p>Úsalo con dos lados y el ángulo comprendido (LAL), o con los tres lados (LLL).</p>`,
  'kgaid4s1rf': R`Teorema del coseno`,
  '1w8yehsbjfu': R`$$\text{Área} = \tfrac{1}{2}ab\sin C \qquad\qquad \text{Herón: } \text{Área} = \sqrt{s(s-a)(s-b)(s-c)},\; s = \tfrac{a+b+c}{2}$$`,
  '26feyop5vyd': R`<p>Lados 5 y 8 con un ángulo comprendido de $60^\circ$: el tercer lado es $\sqrt{25 + 64 - 2(5)(8)\cos 60^\circ} = \sqrt{49} = 7$, y el área es $\frac{1}{2}(5)(8)\sin 60^\circ = 10\sqrt{3}$.</p>`,
  '11plyaa7o04': R`<p>El teorema del seno puede dar dos triángulos posibles al hallar un ángulo (el «caso ambiguo»): $\sin B = 0{,}8$ permite $B \approx 53{,}1^\circ$ <i>o</i> $B \approx 126{,}9^\circ$. Comprueba si cada uno es válido.</p>`,
  'l2pu7cls8u': R`En el triángulo $ABC$, $b = ⟦0⟧$ cm, $c = ⟦1⟧$ cm y $A = ⟦2⟧^\circ$. Halla $a$ con 2 decimales.`,
  '27jp4mdtjl6': R`$a^2 = ⟦0⟧^2 + ⟦1⟧^2 - 2(⟦2⟧)(⟦3⟧)\cos ⟦4⟧^\circ \approx ⟦5⟧$, así que $a \approx ⟦6⟧$ cm.`,
  '1s6102ghcou': R`Un triángulo tiene lados ⟦0⟧, ⟦1⟧ y ⟦2⟧. Halla el ángulo opuesto al lado de longitud ⟦3⟧.`,
  'adoadf3ehm': R`$\cos\theta = \frac{⟦0⟧^2 + ⟦1⟧^2 - ⟦2⟧^2}{2(⟦3⟧)(⟦4⟧)} = \frac{⟦5⟧}{⟦6⟧} = ⟦7⟧$, así que $\theta = ⟦8⟧^\circ$.`,
  '3e8310hzv': R`En el triángulo $ABC$, $A = ⟦0⟧^\circ$, $B = ⟦1⟧^\circ$ y $a = ⟦2⟧$ cm. Halla $b$ con 2 decimales.`,
  'i5vdhhm6yu': R`Teorema del seno: $\frac{b}{\sin ⟦0⟧^\circ} = \frac{⟦1⟧}{\sin ⟦2⟧^\circ}$, así que $b = \frac{⟦3⟧\sin ⟦4⟧^\circ}{\sin ⟦5⟧^\circ} \approx ⟦6⟧$ cm.`,
  '1uuy2y52gu0': R`Halla el área exacta de un triángulo con lados de ⟦0⟧ cm y ⟦1⟧ cm y un ángulo comprendido de $⟦2⟧^\circ$.`,
  '25opm4iwiww': R`Se aceptan respuestas exactas como 6sqrt(3).`,
  'cb99xoymur': R`Área $= \frac{1}{2}ab\sin C = \frac{1}{2}(⟦0⟧)(⟦1⟧)\sin ⟦2⟧^\circ$, con $\sin ⟦3⟧^\circ = ⟦4⟧$, lo que da $⟦5⟧$ cm².`,
  '1dwe3yjuxqj': R`Usa la fórmula de Herón para hallar el área de un triángulo con lados ⟦0⟧, ⟦1⟧ y ⟦2⟧.`,
  '8vmvle7x3': R`$s = \frac{⟦0⟧ + ⟦1⟧ + ⟦2⟧}{2} = ⟦3⟧$. Área $= \sqrt{⟦4⟧(⟦5⟧)(⟦6⟧)(⟦7⟧)} = \sqrt{⟦8⟧} = ⟦9⟧$.`,
});

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

/* Español — Bachillerato (combinatoria → lógica) */
addT('es', {
  // combinatorics
  '205beb6gfix': R`
⟦0⟧
<h3>Permutaciones: el orden importa</h3>
⟦1⟧
<p>Primer, segundo y tercer premio entre 10 personas: $^{10}P_3 = 10 \times 9 \times 8 = 720$.</p>
<ul><li>Ordenaciones con elementos repetidos: $\frac{n!}{p!\,q!\cdots}$. «BANANA» tiene $\frac{6!}{3!\,2!} = 60$ ordenaciones.</li><li>Alrededor de una mesa circular: $(n - 1)!$ (los giros cuentan como iguales).</li></ul>
<h3>Combinaciones: el orden no importa</h3>
⟦2⟧
<p>Un comité de 3 personas elegidas entre 10: $\binom{10}{3} = 120$. Un comité de 2 hombres (de 5) y 3 mujeres (de 6): $\binom{5}{2}\binom{6}{3} = 10 \times 20 = 200$.</p>
<h3>Binomio de Newton</h3>
⟦3⟧
<p>El coeficiente de $x^2$ en $(x + 3)^5$ es $\binom{5}{2}3^{3} = 270$.</p>
⟦4⟧`,
  '1v1ul4mcyis': R`<p><b>Principio multiplicativo:</b> si una elección se puede hacer de $m$ maneras y otra de $n$ maneras, juntas se pueden hacer de $m \times n$ maneras.</p>`,
  'zol45txfa7': R`^nP_r = \frac{n!}{(n - r)!} \qquad n! = n \times (n-1) \times \cdots \times 1, \quad 0! = 1`,
  '1mk1wwf7o0g': R`^nC_r = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}`,
  '44tf1m2pka': R`<p>Pregúntate: «¿intercambiar dos elementos elegidos da algo distinto?». Si la respuesta es sí, usa permutaciones; si es no, combinaciones.</p>`,
  'asaw2vy5ho': R`¿De cuántas maneras se pueden repartir los premios ⟦0⟧ entre ⟦1⟧ personas?`,
  '1qec64m00zt': R`primero, segundo y tercero`,
  '1yxzw7y67ed': R`primero y segundo`,
  '1lyu4ddmyjw': R`El orden importa: $^{⟦0⟧}P_{⟦1⟧} = ⟦2⟧ = ⟦3⟧$.`,
  'mt1d3k54sw': R`¿De cuántas maneras se puede elegir un comité de ⟦0⟧ personas entre ⟦1⟧?`,
  'jcb5dbxzw7': R`El orden no importa: $\binom{⟦0⟧}{⟦1⟧} = \frac{⟦2⟧!}{⟦3⟧!\,⟦4⟧!} = ⟦5⟧$.`,
  '1f3hbyul4kh': R`Se elige un comité de ⟦0⟧ hombres y ⟦1⟧ mujeres entre ⟦2⟧ hombres y ⟦3⟧ mujeres. ¿Cuántos comités distintos son posibles?`,
  '219eq0t6hby': R`¿Cuántas ordenaciones distintas hay de las letras de la palabra <b>⟦0⟧</b>?`,
  'hkyvcodvcm': R`⟦0⟧ letras con repeticiones ⟦1⟧: $\frac{⟦2⟧!}{⟦3⟧} = ⟦4⟧$.`,
  'qqcdrtkh5v': R`¿De cuántas maneras se pueden sentar ⟦0⟧ personas alrededor de una mesa redonda (los giros cuentan como iguales)?`,
  '1n6howxe7gj': R`Fija el asiento de una persona para eliminar los giros y ordena al resto: $(⟦0⟧ - 1)! = ⟦1⟧$.`,
  '1hwymhgsxow': R`Halla el coeficiente de $x^{⟦0⟧}$ en el desarrollo de $(x + ⟦1⟧)^{⟦2⟧}$.`,
  '22kaf86ykzl': R`El término con $x^{⟦0⟧}$ es $\binom{⟦1⟧}{⟦2⟧}x^{⟦3⟧}\cdot ⟦4⟧^{⟦5⟧}$, así que el coeficiente es $⟦6⟧ \times ⟦7⟧ = ⟦8⟧$.`,
  '1zya3uq0ode': R`Halla el coeficiente de $x^{⟦0⟧}$ en el desarrollo de $(⟦1⟧x + 1)^{⟦2⟧}$.`,
  'po66a6fw7b': R`El término con $x^{⟦0⟧}$ es $\binom{⟦1⟧}{⟦2⟧}(⟦3⟧x)^{⟦4⟧}$, así que el coeficiente es $⟦5⟧ \times ⟦6⟧ = ⟦7⟧$.`,
  'yh0td3xino': R`Tienes ⟦0⟧ camisas, ⟦1⟧ pantalones y ⟦2⟧ pares de zapatos. ¿Cuántos conjuntos distintos (una prenda de cada tipo) puedes formar?`,
  'ruo6vpaqqc': R`Principio multiplicativo: $⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '24djh3i5509': R`¿Cuántos códigos PIN de ⟦0⟧ cifras se pueden formar con los dígitos 0–9 ⟦1⟧?`,
  '1djueshnkes': R`si los dígitos se pueden repetir`,
  'jadsq7o4xb': R`si ningún dígito se puede usar dos veces`,
  '22ey7x4a0ix': R`Cada una de las ⟦0⟧ posiciones tiene 10 opciones: $10^{⟦1⟧} = ⟦2⟧$.`,
  'g50ag8cs5t': R`$10 \times 9 \times \cdots$ (⟦0⟧ factores) $= ⟦1⟧$.`,

  // probability-sh
  '1uh8iajnkq0': R`
⟦0⟧
<h3>Con y sin reemplazo</h3>
⟦1⟧
<p>Los diagramas de árbol lo organizan: se multiplica a lo largo de las ramas y se suma entre ramas.</p>
<h3>«Al menos uno»</h3>
<p>Usa el complementario: $P(\text{al menos un seis en 3 tiradas}) = 1 - \left(\frac{5}{6}\right)^3 = \frac{91}{216}$.</p>
<h3>Teorema de Bayes</h3>
⟦2⟧
⟦3⟧`,
  '2e5fwx8zs1w': R`Fórmula`,
  '29i7n2pf82k': R`Complementario`,
  '1q1cgu220ce': R`Mutuamente excluyentes`,
  'xux9y4rrwd': R`$P(A \cap B) = 0$, así que $P(A \cup B) = P(A) + P(B)$`,
  'rl5n9i6yyd': R`Independientes`,
  '1oou6k826kr': R`Condicionada`,
  '1qgmh66fhna': R`<p>Una bolsa tiene 5 bolas rojas y 3 azules. Se sacan dos <b>sin</b> reemplazo. $P(\text{ambas rojas}) = \frac{5}{8} \times \frac{4}{7} = \frac{5}{14}$. Con reemplazo sería $\frac{5}{8} \times \frac{5}{8} = \frac{25}{64}$.</p>`,
  '6418q9b2s4': R`$$P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B \mid A)P(A) + P(B \mid A')P(A')}$$<p>«Invierte» una probabilidad condicionada: por ejemplo, de $P(\text{prueba positiva} \mid \text{enfermedad})$ a $P(\text{enfermedad} \mid \text{prueba positiva})$.</p>`,
  '1zp2m1asa8t': R`<p>$P(A \mid B)$ y $P(B \mid A)$ suelen ser distintas. Una prueba puede tener un 99% de precisión y, aun así, un resultado positivo puede ser con más probabilidad una falsa alarma cuando la enfermedad es rara.</p>`,
  '5fmcyqy5g8': R`Una bolsa contiene ⟦0⟧ bolas rojas y ⟦1⟧ azules. Se sacan dos bolas sin reemplazo. ¿Cuál es la probabilidad de que ambas sean de color ⟦2⟧?`,
  '16uk5urbde9': R`$P(A) = ⟦0⟧$, $P(B) = ⟦1⟧$ y $P(A \cap B) = ⟦2⟧$. Halla $P(A \cup B)$.`,
  '2az4z9znymk': R`Los sucesos $A$ y $B$ son independientes, con $P(A) = ⟦0⟧$ y $P(B) = ⟦1⟧$. Halla $P(A \cap B)$.`,
  '1ohoi8ye65': R`Independientes: $P(A \cap B) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$.`,
  'ymjaeaaedm': R`Los sucesos $A$ y $B$ son independientes, con $P(A) = ⟦0⟧$ y $P(B) = ⟦1⟧$. Halla la probabilidad de que ocurra al menos uno de ellos.`,
  'y6o9k7peax': R`$1 - P(\text{ninguno}) = 1 - (⟦0⟧)(⟦1⟧) = ⟦2⟧$.`,
  '2ct3qu61tjb': R`Chicos`,
  '2402etzr9nx': R`Chicas`,
  '18ehauvt7sj': R`Hace deporte`,
  '1wnwpnaqcse': R`No hace deporte`,
  'hlkdm5jkod': R`Curso 10`,
  '25bc5gb05vn': R`Curso 11`,
  '1i4vzjjdcmk': R`Va a pie a la escuela`,
  '26ih1igl5gl': R`Va en autobús`,
  '2bybvgum1tw': R`Adultos`,
  '1lglnmdikqt': R`Niños`,
  'xfv76cldjt': R`Le gusta el café`,
  'yxuw13xcv3': R`No le gusta`,
  '1mojcap1eui': R`Una encuesta dio estos resultados.⟦0⟧Se elige una persona al azar. Sabiendo que pertenece al grupo «⟦1⟧», ¿cuál es la probabilidad de que pertenezca a «⟦2⟧»?`,
  '1461hv2wfqt': R`Nos limitamos a las ⟦0⟧ personas de «⟦1⟧»: $P = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  '12180tm9why': R`Una encuesta dio estos resultados.⟦0⟧Se elige una persona al azar. Sabiendo que pertenece a «⟦1⟧», ¿cuál es la probabilidad de que pertenezca al grupo «⟦2⟧»?`,
  'eppqyrg22a': R`Se lanza un dado equilibrado ⟦0⟧ veces. ¿Cuál es la probabilidad de obtener al menos un seis?`,
  'wzrge9rclz': R`$1 - P(\text{ningún seis}) = 1 - \left(\frac{5}{6}\right)^{⟦0⟧} = 1 - \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$.`,
  '1sg12en11ty': R`Una enfermedad afecta al ⟦0⟧% de las personas. Una prueba la detecta en el ⟦1⟧% de quienes la tienen, pero también da positivo en el ⟦2⟧% de quienes no la tienen. Si alguien da positivo, ¿cuál es la probabilidad de que tenga la enfermedad? Redondea a 3 decimales.`,
  '1n6kg7z10yy': R`Una bolsa tiene ⟦0⟧ fichas rojas y ⟦1⟧ azules. Se saca una ficha, se devuelve y se saca una segunda. ¿Cuál es la probabilidad de sacar roja y luego azul?`,
  '29cd8gay3w4': R`Con reemplazo, las extracciones son independientes: $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,

  // statistics-sh
  '1xab92vueba': R`
<h3>Cuartiles y diagramas de caja</h3>
<p>Ordena los datos. La mediana $Q_2$ los divide por la mitad; $Q_1$ es la mediana de la mitad inferior y $Q_3$ la de la mitad superior (aquí dejamos la mediana fuera de ambas mitades cuando $n$ es impar). El <b>rango intercuartílico</b> $\text{RIC} = Q_3 - Q_1$ mide la dispersión del 50% central.</p>
⟦0⟧
<h3>Varianza y desviación típica</h3>
⟦1⟧
⟦2⟧
<h3>Datos agrupados</h3>
<p>Estima la media con las marcas de clase: $\bar{x} \approx \frac{\sum f m}{\sum f}$.</p>
<h3>Transformar los datos</h3>
⟦3⟧
⟦4⟧`,
  'l167vch4m7': R`<p>Una regla habitual para valores atípicos: los valores por debajo de $Q_1 - 1{,}5\,\text{RIC}$ o por encima de $Q_3 + 1{,}5\,\text{RIC}$.</p>`,
  '1i22g7xb1dd': R`\sigma^2 = \frac{\sum (x - \mu)^2}{n} \qquad \sigma = \sqrt{\sigma^2} \qquad\qquad s^2 = \frac{\sum (x - \bar{x})^2}{n - 1} \text{ (muestral)}`,
  '1c6crwakkdh': R`<p>Datos 2; 4; 4; 4; 5; 5; 7; 9: media 5, desviaciones al cuadrado 9; 1; 1; 1; 0; 0; 4; 16 (suma 32). Varianza poblacional $= \frac{32}{8} = 4$ y $\sigma = 2$.</p>`,
  'etseh8nv9i': R`Si cada valor pasa a ser`,
  'tocb6e1sav': R`La media pasa a ser`,
  '1ng2ylp8qsd': R`La desviación típica pasa a ser`,
  's70utdhfyg': R`$\sigma$ (sin cambio)`,
  '1ixl32zcrbx': R`<p>Sumar una constante desplaza los datos pero no los dispersa, así que la desviación típica no cambia.</p>`,
  '1os4b58x5gr': R`Halla la varianza <b>muestral</b> de: ⟦0⟧.`,
  '5koevyyrqx': R`Halla la varianza <b>poblacional</b> de: ⟦0⟧.`,
  '2gl7bcglff0': R`Media $= ⟦0⟧$. Desviaciones al cuadrado: ⟦1⟧ (suma ⟦2⟧). Divide entre ⟦3⟧: $⟦4⟧$.`,
  'zh9si0i2s': R`Halla la desviación típica poblacional de: ⟦0⟧. Redondea a 2 decimales.`,
  'iohahpasm4': R`Media $= ⟦0⟧$; $\sigma^2 = \frac{⟦1⟧}{5} = ⟦2⟧$, así que $\sigma = \sqrt{⟦3⟧} \approx ⟦4⟧$.`,
  'box0w6rodc': R`Halla el rango intercuartílico de: ⟦0⟧. (Deja fuera la mediana al dividir los datos en mitades).`,
  'dvfyzp44sk': R`Ordenados: ⟦0⟧. La mitad inferior ⟦1⟧ da $Q_1 = ⟦2⟧$; la mitad superior ⟦3⟧ da $Q_3 = ⟦4⟧$. $\text{RIC} = ⟦5⟧ - ⟦6⟧ = ⟦7⟧$.`,
  '25jr4jzamls': R`Un conjunto de datos tiene media ⟦0⟧ y desviación típica ⟦1⟧. Cada valor se transforma mediante $y = ⟦2⟧x ⟦3⟧$. ¿Cuál es la nueva desviación típica?`,
  '1h7x4xfpmhw': R`Sumar ⟦0⟧ no cambia la dispersión; multiplicar por ⟦1⟧ la escala por $|⟦2⟧|$: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '158l5v4dkra': R`Un conjunto de datos tiene media ⟦0⟧ y desviación típica ⟦1⟧. Cada valor se transforma mediante $y = ⟦2⟧x ⟦3⟧$. ¿Cuál es la nueva media?`,
  '21c6bmoi3b4': R`La media sigue la transformación: $⟦0⟧(⟦1⟧) ⟦2⟧ = ⟦3⟧$.`,
  'th9c52kib0': R`Estima la media a partir de esta tabla de frecuencias agrupadas (usa las marcas de clase). Redondea a 2 decimales.⟦0⟧`,
  '1h8qh0j4anc': R`Clase`,
  '1yeuaowmmsc': R`Marcas de clase ⟦0⟧; $\sum f = ⟦1⟧$, $\sum fm = ⟦2⟧$. Media $\approx \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  '1kja7bg5lcu': R`Un conjunto de datos tiene $Q_1 = ⟦0⟧$ y $Q_3 = ⟦1⟧$. Con la regla de $1{,}5 \times \text{RIC}$, ¿cuál es el límite ⟦2⟧ para valores atípicos?`,
  '3zu0ol0nfw': R`superior`,
  '9nl2sip6fg': R`inferior`,
  '1u7a09okm0e': R`$\text{RIC} = ⟦0⟧$ y $1{,}5 \times ⟦1⟧ = ⟦2⟧$. ⟦3⟧`,
  '191ugb8bucx': R`Límite superior $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '111p9ug7ykx': R`Límite inferior $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // conics
  '12p1gvv8rrs': R`
⟦0⟧
<h3>Ecuación de la circunferencia</h3>
⟦1⟧
<p>Al desarrollar se obtiene la <b>ecuación general</b> $x^2 + y^2 + Dx + Ey + F = 0$, con centro $\left(-\frac{D}{2}; -\frac{E}{2}\right)$ y radio $r = \sqrt{\frac{D^2}{4} + \frac{E^2}{4} - F}$.</p>
⟦2⟧
<h3>Posición de un punto</h3>
<p>Sustituye el punto en $(x - a)^2 + (y - b)^2$ y compara con $r^2$: menor → dentro, igual → sobre, mayor → fuera.</p>
<h3>Rectas tangentes</h3>
<p>Una tangente es perpendicular al radio en el punto de contacto. Para la circunferencia $x^2 + y^2 = r^2$ en $(x_1; y_1)$, el radio tiene pendiente $\frac{y_1}{x_1}$, así que la tangente tiene pendiente $-\frac{x_1}{y_1}$.</p>
<h3>Parábolas</h3>
<p>$y^2 = 4px$ tiene foco $(p; 0)$ y directriz $x = -p$; $x^2 = 4py$ tiene foco $(0; p)$ y directriz $y = -p$. Cada punto de una parábola está a la misma distancia del foco que de la directriz.</p>
⟦3⟧`,
  'd8g3n0gso0': R`\text{Punto medio } \left(\frac{x_1 + x_2}{2}; \frac{y_1 + y_2}{2}\right) \qquad \text{Distancia } \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`,
  'yeziymovo4': R`$$(x - a)^2 + (y - b)^2 = r^2 \qquad \text{centro } (a; b), \text{ radio } r$$`,
  '16n3xjnynm7': R`<p>$x^2 + y^2 - 6x + 4y - 12 = 0$: completando cuadrados, $(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$. Centro $(3; -2)$, radio 5.</p>`,
  '11ib4pk61jv': R`<p>En $(x + 3)^2 + (y - 1)^2 = 16$ el centro es $(-3; 1)$ —los signos cambian— y el radio es 4, no 16.</p>`,
  'a19ymany96': R`Halla el punto medio de $⟦0⟧$ y $⟦1⟧$.`,
  'l7s72risy9': R`Promedia las coordenadas: $\left(\frac{⟦0⟧ + ⟦1⟧}{2}; \frac{⟦2⟧ + ⟦3⟧}{2}\right) = ⟦4⟧$.`,
  '1mu3r9x32jw': R`Halla el radio de la circunferencia $⟦0⟧ = 0$.`,
  '1bhxlcedykj': R`Completando cuadrados: $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧ + ⟦3⟧ ⟦4⟧ = ⟦5⟧$, así que $r = ⟦6⟧$.`,
  'd11etx15kp': R`Halla el centro de la circunferencia $⟦0⟧ = 0$.`,
  '15nydo8wzsx': R`El centro es $\left(-\frac{D}{2}; -\frac{E}{2}\right) = \left(-\frac{⟦0⟧}{2}; -\frac{⟦1⟧}{2}\right) = ⟦2⟧$.`,
  '10fdmgbsvjs': R`¿Cuál es la ecuación de la circunferencia de centro $⟦0⟧$ y radio ⟦1⟧?`,
  'j31butbqt0': R`Sustituye en $(x - a)^2 + (y - b)^2 = r^2$: $(x ⟦0⟧)^2 + (y ⟦1⟧)^2 = ⟦2⟧$.`,
  'qntj72wic0': R`Dentro de la circunferencia`,
  '1z2fjcjol1w': R`dentro`,
  '1h4trl2qo1h': R`Sobre la circunferencia`,
  '1sg9ogxwlev': R`sobre`,
  '8uau8fsxbq': R`Fuera de la circunferencia`,
  '6gv2pbcp7q': R`fuera`,
  '24luyo2ftju': R`¿El punto $⟦0⟧$ está dentro, sobre o fuera de la circunferencia $(x ⟦1⟧)^2 + (y ⟦2⟧)^2 = ⟦3⟧$?`,
  '28keqi93flp': R`$⟦0⟧$, que es igual a $r^2 = ⟦1⟧$: el punto está <b>sobre</b> la circunferencia.`,
  '1hj2pbrwkr7': R`$⟦0⟧$, que es menor que $r^2 = ⟦1⟧$: el punto está <b>dentro</b> de la circunferencia.`,
  'kv7senj1fr': R`$⟦0⟧$, que es mayor que $r^2 = ⟦1⟧$: el punto está <b>fuera</b> de la circunferencia.`,
  '1hxz2qew8oz': R`Halla el foco de la parábola $⟦0⟧$.`,
  '22fls2lezk5': R`Compara con ⟦0⟧: $4p = ⟦1⟧$, así que $p = ⟦2⟧$ y el foco es $⟦3⟧$.`,
  'ez3m02hgj1': R`Halla la pendiente de la tangente a $x^2 + y^2 = ⟦0⟧$ en el punto $⟦1⟧$.`,
  '1huwumypuyf': R`El radio hasta $⟦0⟧$ tiene pendiente $\frac{⟦1⟧}{⟦2⟧}$. La tangente es perpendicular: pendiente $= -\frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,

  // linear-programming
  '23l7ef2fdyh': R`
<p>La <b>programación lineal</b> busca el mejor valor (el mayor o el menor) de una <b>función objetivo</b> lineal, como el beneficio $z = 30x + 20y$, sujeta a <b>restricciones</b> lineales como $x + y \le 40$.</p>
<ol><li>Escribe las restricciones como inecuaciones (incluye $x \ge 0$, $y \ge 0$).</li><li>Dibuja cada recta frontera y sombrea la región que cumple todas las restricciones: la <b>región factible</b>.</li><li>Halla los vértices resolviendo pares de ecuaciones frontera.</li><li>Evalúa la función objetivo en cada vértice.</li></ol>
⟦0⟧
⟦1⟧
<p>En los problemas de minimización con restricciones «≥», la región suele ser no acotada; con costes positivos, el mínimo sigue estando en un vértice.</p>
⟦2⟧`,
  'hs1573xprv': R`<p><b>Teorema de los vértices:</b> si existe un óptimo, se alcanza en un vértice de la región factible.</p>`,
  '1g8qhbmqb9w': R`<p>Maximiza $z = 3x + 2y$ sujeta a $x + y \le 8$, $2x + y \le 12$, $x, y \ge 0$.</p><p>Vértices: $(0; 0)$, $(6; 0)$, $(4; 4)$ [donde $x + y = 8$ corta a $2x + y = 12$], $(0; 8)$.</p><p>Valores de $z$: 0; 18; 20; 16. Máximo $z = 20$ en $(4; 4)$.</p>`,
  '11p3z90h4pd': R`<p>Comprueba que cada vértice cumple <b>todas</b> las restricciones: la intersección de dos rectas frontera puede quedar fuera de la región.</p>`,
  '22hgo1z3v51': R`Maximiza $z = ⟦0⟧ + ⟦1⟧$ sujeta a ⟦2⟧, $x \ge 0$, $y \ge 0$. ¿Cuál es el valor máximo de $z$?`,
  'thttp4dv20': R`Vértices y valores de $z$: ⟦0⟧. El máximo es <b>⟦1⟧</b>.`,
  '2g9b1szo820': R`Minimiza $z = ⟦0⟧ + ⟦1⟧$ sujeta a $x + y \ge ⟦2⟧$, $x + 2y \ge ⟦3⟧$, $x \ge 0$, $y \ge 0$. ¿Cuál es el valor mínimo de $z$?`,
  '72m6dlh1yr': R`La región factible no está acotada, con vértices ⟦0⟧. Como los costes son positivos, el mínimo es <b>⟦1⟧</b>.`,
  '4eos6o7rio': R`¿Qué punto está en la región factible definida por ⟦0⟧, $x \ge 0$, $y \ge 0$?`,
  '1jqzy1kt3ra': R`Prueba cada punto en todas las restricciones. $⟦0⟧$ las cumple todas; cada uno de los demás incumple al menos una.`,
  '15d4uuzw5eq': R`Una panadería hace tartas ($x$) y empanadas ($y$) cada día. Puede hornear como máximo ⟦0⟧ piezas, y el tiempo de horneado da la restricción ⟦1⟧. El beneficio es de ⟦2⟧ dólares por tarta y ⟦3⟧ dólares por empanada. ¿Cuál es el beneficio diario máximo?`,
  '296rrmt4h4q': R`Restricciones: $x + y \le ⟦0⟧$, $⟦1⟧ \le ⟦2⟧$, $x, y \ge 0$. Vértices: ⟦3⟧. Beneficio máximo: <b>⟦4⟧</b> dólares.`,

  // logic
  '22xng4phovn': R`
<p>Una <b>proposición</b> es un enunciado que es verdadero o falso. Las proposiciones compuestas se forman con <b>conectivos</b>:</p>
⟦0⟧
⟦1⟧
<h3>Condicionales relacionados</h3>
⟦2⟧
<h3>Cuantificadores</h3>
<p>$\forall$ «para todo» y $\exists$ «existe». La negación los intercambia: la negación de «Todos los estudiantes aprobaron» es «<b>Algunos</b> estudiantes <b>no</b> aprobaron»; la negación de «Algunas aves no pueden volar» es «Todas las aves pueden volar».</p>
<h3>Razonamientos válidos</h3>
<ul><li><b>Modus ponens:</b> $p \Rightarrow q$, $p$; por tanto, $q$.</li><li><b>Modus tollens:</b> $p \Rightarrow q$, $\neg q$; por tanto, $\neg p$.</li><li><b>Silogismo:</b> $p \Rightarrow q$, $q \Rightarrow r$; por tanto, $p \Rightarrow r$.</li></ul>
⟦3⟧`,
  '2aa32u1lmw9': R`VF`,
  '1h0id2d836q': R`<p>Una implicación $p \Rightarrow q$ es falsa <b>solo</b> cuando $p$ es verdadera y $q$ es falsa.</p>`,
  '2aojok6ubm7': R`Forma`,
  '1bpxgxn3wdt': R`¿Equivalente a la original?`,
  'clyih3qga0': R`Proposición`,
  '13tp70kq9iu': R`Recíproca`,
  '5lqm3x6p6i': R`no`,
  '1vsuatfpf7o': R`Inversa`,
  '1zjwynaslfy': R`Contrarrecíproca`,
  '2377erd9rpv': R`sí`,
  '1vdptccpewy': R`<p>De $p \Rightarrow q$ y $q$ <b>no</b> se puede concluir $p$ («afirmación del consecuente»). Que el suelo esté mojado no prueba que haya llovido.</p>`,
  'e62y0oj6y7': R`$p$ es ⟦0⟧, $q$ es ⟦1⟧ y $r$ es ⟦2⟧. ¿Cuál es el valor de verdad de $⟦3⟧$?`,
  'x0xbdvafwl': R`Sustituye $p = \text{⟦0⟧}$, $q = \text{⟦1⟧}$, $r = \text{⟦2⟧}$ y evalúa de dentro hacia fuera: $⟦3⟧$ es <b>⟦4⟧</b>. (Recuerda: $\Rightarrow$ solo es falsa en el caso V ⇒ F).`,
  '1kkjzumhca1': R`llueve`,
  'ia7w0co89o': R`no llueve`,
  '1ihx0acpu6a': R`el suelo está mojado`,
  '1v63alfxz6x': R`el suelo no está mojado`,
  '1l79oqrjsck': R`$n$ es divisible entre 4`,
  '1yshjhf0kon': R`$n$ no es divisible entre 4`,
  'qa8yzaajhn': R`$n$ es par`,
  'cbcna6lfv': R`$n$ no es par`,
  '31grcmmyn9': R`$ABCD$ es un cuadrado`,
  'pqxtvsjzqa': R`$ABCD$ no es un cuadrado`,
  '2gdyvqap69i': R`$ABCD$ es un rectángulo`,
  'lxgoo3xc2q': R`$ABCD$ no es un rectángulo`,
  's4qelj4pfa': R`estudias mucho`,
  '1ri3py7kjks': R`no estudias mucho`,
  '1wmmmy5ybwg': R`apruebas el examen`,
  'uo17m9mxei': R`no apruebas el examen`,
  '14thczs4bru': R`la lámpara está encendida`,
  '1mg8dlhg5lp': R`la lámpara está apagada`,
  '496x9r1bce': R`la habitación está iluminada`,
  '383gdutznm': R`la habitación no está iluminada`,
  '12lqix1f1k9': R`Si ⟦0⟧, entonces ⟦1⟧.`,
  'z7jgfl3knp': R`recíproca`,
  'aqxfua2az0': R`inversa`,
  '1qj3c13iq5c': R`contrarrecíproca`,
  '14dtm0889wo': R`¿Cuál es la <b>⟦0⟧</b> de la proposición «⟦1⟧»?`,
  '1izj6udg2zz': R`Recíproca: intercambiar ($q \Rightarrow p$). Inversa: negar ambas ($\neg p \Rightarrow \neg q$). Contrarrecíproca: intercambiar y negar ($\neg q \Rightarrow \neg p$). Así que la ⟦0⟧ es «⟦1⟧»⟦2⟧`,
  '15513xdtwsn': R`: es lógicamente equivalente a la original.`,
  '6brkkcy85o': R`Todos los estudiantes aprobaron el examen.`,
  '2rjnejqvqb': R`Algunos estudiantes no aprobaron el examen.`,
  'vjzsxd6qou': R`Ningún estudiante aprobó el examen.`,
  'oolor24qct': R`Todos los estudiantes suspendieron el examen.`,
  'aesopm7ka0': R`Algunos estudiantes aprobaron el examen.`,
  '1c9ng778gwv': R`No todos los estudiantes aprobaron el examen.`,
  'f39jhzzlxm': R`A todos los gatos les gusta la leche.`,
  '1rgve8hw4eg': R`A algunos gatos no les gusta la leche.`,
  '19hhf94uign': R`A ningún gato le gusta la leche.`,
  '1qzto8uhyzs': R`A todos los gatos les disgusta la leche.`,
  'xi1gnm2hxv': R`A algunos gatos les gusta la leche.`,
  'aijf9tywlh': R`No a todos los gatos les gusta la leche.`,
  '2c7t0e33rd1': R`Todos los empleados llegaron a tiempo.`,
  'avwdd5b0gg': R`Algunos empleados no llegaron a tiempo.`,
  '28adrxoh914': R`Ningún empleado llegó a tiempo.`,
  '1000i19kpx7': R`Todos los empleados llegaron tarde.`,
  '1tupibwtosw': R`Algunos empleados llegaron a tiempo.`,
  'syr088g2qb': R`No todos los empleados llegaron a tiempo.`,
  '1rwcznrx3zt': R`Todos los números de la lista son pares.`,
  'g4py4lm4nz': R`Algunos números de la lista no son pares.`,
  'z8en25csvv': R`Ningún número de la lista es par.`,
  '1m3jao43f24': R`Todos los números de la lista son impares.`,
  '2nfvm4et1c': R`Algunos números de la lista son pares.`,
  'xfe0p0mnov': R`No todos los números de la lista son pares.`,
  '1w0eku5479x': R`Todos los jugadores marcaron un gol.`,
  '2xjzgvosy4': R`Algunos jugadores no marcaron ningún gol.`,
  '1eb39gddsae': R`Ningún jugador marcó un gol.`,
  '1xbzgu8l71r': R`Todos los jugadores se quedaron sin marcar.`,
  't7ja96nwk4': R`Algunos jugadores marcaron un gol.`,
  '8j4qjj5ufj': R`No todos los jugadores marcaron un gol.`,
  'b5r03m1c02': R`¿Cuál es la negación de «⟦0⟧»?`,
  '1a591wdfgbv': R`$\neg(\forall x\, P(x)) \equiv \exists x\, \neg P(x)$: basta con que <i>algunos</i> no lo cumplan. Negación: «⟦0⟧»`,
  'do28na3fol': R`$\neg(\exists x\, P(x)) \equiv \forall x\, \neg P(x)$: ninguno lo cumple. Negación: «⟦0⟧»`,
  'ndnufyumww': R`¿Cuántas filas tiene una tabla de verdad con ⟦0⟧ variables proposicionales distintas?`,
  'u75a1of7f2': R`Cada variable es V o F, así que hay $2^{⟦0⟧} = ⟦1⟧$ combinaciones.`,
  '1w39q86nfhw': R`En la tabla de verdad de $⟦0⟧$, ¿en cuántas filas es verdadera la proposición?`,
  'ny2shau597': R`La tabla tiene ⟦0⟧ filas; al evaluar cada una se ve que la proposición es verdadera en <b>⟦1⟧</b> de ellas y falsa en ⟦2⟧.`,
  '1zkv6notm6x': R`el partido se suspende`,
  '28hyo4t2whc': R`el partido no se suspende`,
  'amilvofe40': R`un número termina en 0`,
  'osyuok2ad2': R`un número no termina en 0`,
  'fabia2grh6': R`es divisible entre 5`,
  '18q6q6gwd11': R`no es divisible entre 5`,
  'm30q1lwox2': R`riegas la planta`,
  '1ku1ogs6cx8': R`no riegas la planta`,
  '1zfcrbg8kca': R`la planta crece`,
  'ax498dx365': R`la planta no crece`,
  '10pj6yxl1t7': R`suena la alarma`,
  '4ju91rp1va': R`no suena la alarma`,
  'smmfh9u0rs': R`Pablo se despierta`,
  '1al6yo6prnr': R`Pablo no se despierta`,
  '1wbxqjf54ui': R`No se puede sacar ninguna conclusión válida.`,
  '1h3hboouplr': R`Premisa 1: «Si ⟦0⟧, entonces ⟦1⟧». Premisa 2: «⟦2⟧». ¿Qué se puede concluir válidamente?`,
  '19xzw2kl48j': R`Es un modus ponens ($p \Rightarrow q$, $p$ ⊢ $q$): «⟦0⟧».`,
  '4fjcpvhawf': R`Es un modus tollens ($p \Rightarrow q$, $\neg q$ ⊢ $\neg p$): «⟦0⟧».`,
  'enorfzjcll': R`Saber que $q$ es verdadera no nos dice nada sobre $p$ (afirmar el consecuente es una falacia). No hay conclusión válida.`,
  '1w6l8obljn3': R`Saber $\neg p$ no nos dice nada sobre $q$ (negar el antecedente es una falacia). No hay conclusión válida.`,
});

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

/* Español — Universidad (álgebra lineal → transformada de Laplace) */
addT('es', {
  // linear-algebra
  'aoku0sfspm': R`
<h3>Sistemas lineales y rango</h3>
<p>Un sistema $A\mathbf{x} = \mathbf{b}$ se resuelve reduciendo por filas la matriz ampliada $[A \mid \mathbf{b}]$ a forma escalonada. El <b>rango</b> de $A$ es el número de pivotes (filas no nulas en la forma escalonada).</p>
⟦0⟧
<h3>Determinantes</h3>
⟦1⟧
<p>Propiedades útiles para matrices $n \times n$: $\det(AB) = \det A \det B$, $\det(A^T) = \det A$, $\det(A^{-1}) = \frac{1}{\det A}$, $\det(kA) = k^n\det A$. Regla de Cramer: $x_i = \frac{\det A_i}{\det A}$.</p>
<h3>Valores propios y vectores propios</h3>
⟦2⟧
⟦3⟧
<p>Si $A$ tiene $n$ vectores propios independientes, es <b>diagonalizable</b>: $A = PDP^{-1}$, con los vectores propios como columnas de $P$ y los valores propios en la diagonal de $D$.</p>
⟦4⟧`,
  'q9p1mxjp5t': R`<p><b>Teorema del rango:</b> para una matriz $m \times n$, $\text{rango}(A) + \text{nulidad}(A) = n$. Una matriz cuadrada $A$ es invertible $\iff \det A \ne 0 \iff$ sus columnas son linealmente independientes $\iff \text{rango} = n$.</p>`,
  '12oak6poq42': R`\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)`,
  'zx600ry55i': R`$$A\mathbf{v} = \lambda\mathbf{v},\; \mathbf{v} \ne \mathbf{0} \qquad\Longleftrightarrow\qquad \det(A - \lambda I) = 0$$<p>Para una matriz $2 \times 2$: $\lambda^2 - (\text{tr}\,A)\lambda + \det A = 0$. Los valores propios suman la traza y su producto es el determinante.</p>`,
  '1khrdp55fj': R`<p>$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$: $\lambda^2 - 7\lambda + 10 = 0$, así que $\lambda = 2; 5$. Para $\lambda = 5$: $(A - 5I)\mathbf{v} = 0$ da $\mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.</p>`,
  '21awxvuldiu': R`<p>$\det(2A) = 2^n\det A$, no $2\det A$: se multiplica cada una de las $n$ filas.</p>`,
  '19a9vb1rr2m': R`Desarrolla por la primera fila: $⟦0⟧(⟦1⟧) - ⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$.`,
  '1j2onaty0gh': R`Halla los valores propios de $⟦0⟧$.`,
  'ynzibmbl86': R`Escribe los dos valores propios separados por punto y coma.`,
  '23zxsoa3fr0': R`$\lambda^2 - (\text{tr})\lambda + \det = \lambda^2 ⟦0⟧\lambda ⟦1⟧ = 0$, así que $\lambda = ⟦2⟧$ o $\lambda = ⟦3⟧$. (Comprobación: suman la traza ⟦4⟧ y su producto es el determinante ⟦5⟧.)`,
  '2etvam6ts6i': R`Halla la nulidad de $⟦0⟧$.`,
  '21ne48l6zig': R`Halla el rango de $⟦0⟧$.`,
  'guqg5s6tj7': R`$\det \ne 0$, así que las tres filas son independientes: rango 3.`,
  '1q1ko1sbkfa': R`Una fila es combinación de las otras dos, y esas dos son independientes: rango 2.`,
  '2bdvxka58sc': R`Todas las filas son múltiplos de la misma fila: rango 1.`,
  '1pbgto6ecv4': R` Por el teorema del rango, nulidad $= 3 - ⟦0⟧ = ⟦1⟧$.`,
  '167s06hkdpt': R`$A$ es una matriz $⟦0⟧ \times ⟦1⟧$ con $\det A = ⟦2⟧$. Halla $\det(A^{-1})$.`,
  '124zlt4oeit': R`$A$ es una matriz $⟦0⟧ \times ⟦1⟧$ con $\det A = ⟦2⟧$. Halla $⟦3⟧$.`,
  'vtdcjwqxja': R`Cada una de las ⟦0⟧ filas se multiplica por ⟦1⟧: $⟦2⟧^{⟦3⟧} \times ⟦4⟧ = ⟦5⟧$.`,
  'd4v2fg20q4': R`Trasponer no cambia el determinante: ⟦0⟧.`,
  '26v5gcnmls7': R`Resuelve el sistema y da $⟦0⟧$: $$\begin{cases} ⟦1⟧ \end{cases}$$`,
  '36y25q4ph4': R`Por eliminación (o por la regla de Cramer, ya que $\det A = ⟦0⟧ \ne 0$), $(x; y; z) = ⟦1⟧$, así que $⟦2⟧ = ⟦3⟧$.`,
  '1w651quute8': R`¿Son linealmente independientes los vectores $⟦0⟧$?`,
  '1nhr23w337j': R`Linealmente independientes`,
  '1ykattdq3py': R`Linealmente dependientes`,
  '71c2j2dn5w': R`Ponlos como columnas de una matriz: su determinante es ⟦0⟧. ⟦1⟧`,
  'd8cecy9nad': R`No es cero, así que son independientes.`,
  'nwja1imq1g': R`Es cero, así que son dependientes (uno es combinación de los otros).`,
  '109v3qsafjj': R`$\mathbf{v} = ⟦0⟧$ es un vector propio de $A = ⟦1⟧$. ¿Cuál es su valor propio?`,
  'spg1kefpa7': R`$A\mathbf{v} = ⟦0⟧ = ⟦1⟧⟦2⟧$, así que $\lambda = ⟦3⟧$.`,

  // complex
  'n87wkmbfmz': R`
<p>La unidad imaginaria cumple $i^2 = -1$. Un número complejo es $z = a + bi$, con parte real $\text{Re}(z) = a$ y parte imaginaria $\text{Im}(z) = b$. Las potencias de $i$ se repiten cada cuatro: $i; -1; -i; 1; \ldots$</p>
⟦0⟧
⟦1⟧
<h3>Forma polar y fórmula de Euler</h3>
⟦2⟧
⟦3⟧
<p>Las raíces $n$-ésimas de la unidad son $e^{2\pi ik/n}$ para $k = 0; 1; \ldots; n - 1$: puntos igualmente espaciados en la circunferencia unidad.</p>
⟦4⟧`,
  'rz9c61mn5': R`Multiplicar`,
  '1lvuh3a6n9s': R`Conjugado`,
  '73hhnvn9cf': R`$\bar{z} = a - bi$, y $z\bar{z} = a^2 + b^2$`,
  '8ju8zqboy3': R`Dividir`,
  '23m7410nhvb': R`multiplica numerador y denominador por el conjugado del denominador`,
  '2at5jue99d3': R`Módulo`,
  '26m66idec7i': R`Argumento`,
  '18sul084cs9': R`$\arg z = \theta$ con $\tan\theta = \frac{b}{a}$ (atención al cuadrante)`,
  'cavhj9pbbb': R`$$z = r(\cos\theta + i\sin\theta) = re^{i\theta} \qquad\qquad z^n = r^n e^{in\theta} \;\;\text{(De Moivre)}$$`,
  '16lvmowwhri': R`<p>$1 + i = \sqrt{2}e^{i\pi/4}$, así que $(1 + i)^8 = (\sqrt{2})^8 e^{2\pi i} = 16$.</p>`,
  '256fv20o5wc': R`<p>El argumento de $-1 - i$ es $-\frac{3\pi}{4}$, no $\frac{\pi}{4}$: $\arctan\frac{b}{a}$ por sí solo no distingue el tercer cuadrante del primero.</p>`,
  '10omtzlugr6': R`Simplifica $(⟦0⟧)(⟦1⟧)$.`,
  'hty9ty1x7v': R`Escribe la respuesta en la forma a+bi.`,
  '1zsla5l2vrq': R`$(⟦0⟧)(⟦1⟧) + (⟦2⟧)(⟦3⟧)i + (⟦4⟧)(⟦5⟧)i + (⟦6⟧)(⟦7⟧)i^2 = ⟦8⟧$, usando $i^2 = -1$.`,
  '1z0a8n17xaw': R`Halla $|⟦0⟧|$.`,
  '7g8mi40aa1': R`Simplifica $\dfrac{⟦0⟧}{⟦1⟧}$.`,
  '1lmk9l2nr3e': R`Multiplica numerador y denominador por $⟦0⟧$. El denominador pasa a ser $⟦1⟧$ y el numerador $⟦2⟧$, así que el resultado es $⟦3⟧$.`,
  '28axbqdj3sw': R`Simplifica $i^{⟦0⟧}$.`,
  'q7margvq3g': R`Las potencias de $i$ se repiten cada 4. $⟦0⟧ = 4 \times ⟦1⟧ + ⟦2⟧$, así que $i^{⟦3⟧} = i^{⟦4⟧} = ⟦5⟧$.`,
  '1pjjj2x31s7': R`Halla el argumento principal $\arg z \in (-\pi; \pi]$ de $z = ⟦0⟧$.`,
  '2fusqwp7x7b': R`$z = ⟦0⟧$ forma un ángulo $⟦1⟧$ con el semieje real positivo (comprueba su cuadrante), así que $\arg z = ⟦2⟧$.`,
  '75mna4515k': R`Escribe $z = ⟦0⟧$ en forma exponencial $re^{i\theta}$.`,
  'bg7vixv5uf': R`$r = |z| = ⟦0⟧$ y $\theta = \arg z = ⟦1⟧$, así que $z = ⟦2⟧e^{i ⟦3⟧}$.`,
  '15suw4uuv8i': R`Usa el teorema de De Moivre para calcular $(⟦0⟧)^{⟦1⟧}$.`,
  '2e4kqt1xydt': R`$⟦0⟧ = \sqrt{2}\,e^{i\theta}$ con $\theta = ⟦1⟧$. Entonces $(\sqrt{2})^{⟦2⟧}e^{i⟦3⟧\theta} = ⟦4⟧e^{i⟦5⟧\theta} = ⟦6⟧$.`,
  '1xd7417ut46': R`Sea $z = ⟦0⟧$. Halla $\text{⟦1⟧}(z^2)$.`,

  // distributions
  '28d8604hmp9': R`
<p>Una <b>variable aleatoria</b> $X$ asigna números a los resultados. Para una $X$ discreta con probabilidades $p(x)$:</p>
⟦0⟧
⟦1⟧
<h3>La distribución normal</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'gk52muplh1': R`E[X] = \sum x\,p(x) \qquad \text{Var}(X) = E[X^2] - (E[X])^2 \qquad E[aX + b] = aE[X] + b \qquad \text{Var}(aX + b) = a^2\,\text{Var}(X)`,
  '115owsb7jcv': R`Distribución`,
  'z5bw2hz29r': R`P(X = k) o densidad`,
  '1runl3m75u8': R`Varianza`,
  '1xs6so1xns8': R`Binomial $B(n, p)$`,
  '1rwt3dxzew1': R`Poisson$(\lambda)$`,
  'n8vzzqt60t': R`Uniforme en $[a; b]$`,
  '2cdr2b2t24p': R`Exponencial$(\lambda)$`,
  'l349ss11hc': R`Normal $N(\mu, \sigma^2)$`,
  '26wsuf9ho5r': R`campana de Gauss`,
  '1bw0zjk7wg1': R`<p>Tipifica con $Z = \dfrac{X - \mu}{\sigma}$ y usa las tablas de la normal estándar. La <b>regla 68–95–99,7</b>: alrededor del 68%, 95% y 99,7% de los valores están a menos de 1, 2 y 3 desviaciones típicas de la media.</p>`,
  '1mn62kz3dqi': R`<p>Estaturas $X \sim N(170; 8^2)$. Una estatura de 186 cm tiene $z = \frac{186 - 170}{8} = 2$, así que solo alrededor del 2,5% de las personas son más altas.</p>`,
  '20odz9yh9el': R`<p>La binomial requiere un número fijo de ensayos independientes con la misma probabilidad de éxito. La de Poisson cuenta sucesos en un intervalo con un ritmo medio constante.</p>`,
  'hehw668sc4': R`Halla $E[X]$ para esta distribución.⟦0⟧`,
  'ggtradb99r': R`Se lanza una moneda equilibrada ⟦0⟧ veces. ¿Cuál es la probabilidad de obtener exactamente ⟦1⟧ caras?`,
  '1gonhfsfe0e': R`$X \sim B\!\left(⟦0⟧; \frac{1}{3}\right)$. Halla $P(X = ⟦1⟧)$.`,
  '2e8zcm46v5k': R`$X \sim B(⟦0⟧; ⟦1⟧)$. Halla $\text{Var}(X)$.`,
  '1sv4co448ex': R`$\text{Var}(X) = np(1 - p) = ⟦0⟧(⟦1⟧)(⟦2⟧) = ⟦3⟧$.`,
  'qmg93npnbt': R`$X \sim B(⟦0⟧; ⟦1⟧)$. Halla $E[X]$.`,
  '283j9ftzcid': R`$X \sim N(⟦0⟧; ⟦1⟧^2)$. Halla la puntuación $z$ de $x = ⟦2⟧$.`,
  '1kbz6k640p5': R`$X \sim \text{Poisson}(⟦0⟧)$. Halla $P(X = ⟦1⟧)$ con 4 decimales.`,
  '2el5p15nmmp': R`entre ⟦0⟧ y ⟦1⟧`,
  'lwhiv9yady': R`por encima de ⟦0⟧`,
  'x696ofvj9v': R`por debajo de ⟦0⟧`,
  '1cdk3p0w1a9': R`Las notas de un examen siguen una distribución normal con media ⟦0⟧ y desviación típica ⟦1⟧. Según la regla 68–95–99,7, ¿qué porcentaje aproximado de notas está ⟦2⟧?`,
  '2ciqs8smgdj': R`Expresa los valores en desviaciones típicas respecto de la media y usa: 68% a menos de 1σ, 95% a menos de 2σ, 99,7% a menos de 3σ (las colas se reparten a partes iguales lo que queda): <b>⟦0⟧%</b>.`,
  '1b8kg565owb': R`$E[X] = ⟦0⟧$ y $\text{Var}(X) = ⟦1⟧$. Halla $\text{Var}(⟦2⟧)$.`,
  '21eg07xqby': R`$\text{Var}(aX + b) = a^2\,\text{Var}(X) = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$; la constante ⟦3⟧ no influye.`,
  'ha18xspr5t': R`$E[X] = ⟦0⟧$ y $\text{Var}(X) = ⟦1⟧$. Halla $E[⟦2⟧]$.`,

  // inference
  'oph0fjnqfd': R`
<p>Usamos un estadístico de la <b>muestra</b> (como $\bar{x}$) para estimar un parámetro de la <b>población</b> (como $\mu$). Por el <b>teorema central del límite</b>, para $n$ grande la media muestral es aproximadamente normal con media $\mu$ y <b>error típico</b> $\frac{\sigma}{\sqrt{n}}$.</p>
<h3>Intervalos de confianza</h3>
⟦0⟧
<p>Para lograr un margen de error $E$ se necesita $n \ge \left(\frac{z^*\sigma}{E}\right)^2$ (redondeando hacia arriba). Si $\sigma$ es desconocida, usa $s$ y la distribución $t$.</p>
<h3>Contrastes de hipótesis</h3>
<ol><li>Plantea $H_0$ (p. ej. $\mu = \mu_0$) y $H_1$.</li><li>Calcula un estadístico de contraste, p. ej. $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$.</li><li>Halla el <b>p-valor</b>: la probabilidad, suponiendo $H_0$, de un resultado al menos tan extremo.</li><li>Si $p \le \alpha$, rechaza $H_0$; si no, no se rechaza.</li></ol>
⟦1⟧
<h3>Regresión lineal</h3>
<p>La recta de mínimos cuadrados $\hat{y} = a + bx$ tiene pendiente $b = r\frac{s_y}{s_x}$ y pasa por $(\bar{x}; \bar{y})$, así que $a = \bar{y} - b\bar{x}$.</p>
⟦2⟧`,
  'cozbu7bifr': R`\bar{x} \pm z^*\frac{\sigma}{\sqrt{n}} \qquad z^* = 1{,}645 \;(90\%);\; 1{,}96 \;(95\%);\; 2{,}576 \;(99\%)`,
  '7nca7j57l5': R`H₀ verdadera`,
  '2e0zey7f13x': R`H₀ falsa`,
  '1nokpmpua28': R`Rechazar H₀`,
  'qa9cxjojd2': R`Error de tipo I (probabilidad α)`,
  'z1afbgzons': R`Correcto (potencia)`,
  'tc6mfczzyi': R`No rechazar H₀`,
  'w131ulu49o': R`Correcto`,
  'e51gkfcb06': R`Error de tipo II (probabilidad β)`,
  '6idiejz1ba': R`<p>"No rechazar $H_0$" no es lo mismo que "aceptar $H_0$": simplemente los datos no aportan pruebas suficientes en su contra.</p>`,
  'awqxfz9vdv': R`Una población tiene $\sigma = ⟦0⟧$. Halla el error típico de la media para muestras de tamaño ⟦1⟧.`,
  'ugvd79s2wi': R`Una muestra de tamaño ⟦0⟧ tiene media ⟦1⟧; la desviación típica de la población es ⟦2⟧. Halla el límite ⟦3⟧ del intervalo de confianza del ⟦4⟧% para $\mu$, con 2 decimales.`,
  '1n36a0strty': R`Margen $= ⟦0⟧ \times \frac{⟦1⟧}{\sqrt{⟦2⟧}} = ⟦3⟧$. ⟦4⟧`,
  '2ekc2g43ffk': R`Límite superior $= ⟦0⟧ + ⟦1⟧ \approx ⟦2⟧$.`,
  'u2fj3njiv8': R`Límite inferior $= ⟦0⟧ - ⟦1⟧ \approx ⟦2⟧$.`,
  '1i53ibdizmj': R`Contrasta $H_0: \mu = ⟦0⟧$ con $\sigma = ⟦1⟧$. Una muestra de tamaño ⟦2⟧ tiene $\bar{x} = ⟦3⟧$. Calcula el estadístico $z$ con 2 decimales.`,
  'b7sayy3tzp': R`Un contraste da un p-valor de ⟦0⟧. Con un nivel de significación del ⟦1⟧%, ¿cuál es la decisión?`,
  '1adfzwf3gei': R`no rechazar`,
  '2fh7exkwsd7': R`no se rechaza`,
  '1ui411puarn': R`Compara el p-valor con $\alpha = ⟦0⟧$: $⟦1⟧ ⟦2⟧ ⟦3⟧$, ⟦4⟧`,
  '19asmns888x': R`así que <b>rechazamos</b> $H_0$.`,
  '28e9takeetw': R`así que <b>no rechazamos</b> $H_0$.`,
  '3boqwtx8y6': R`La recta de regresión de $y$ sobre $x$ tiene pendiente ⟦0⟧ y pasa por $(\bar{x}; \bar{y}) = (⟦1⟧; ⟦2⟧)$. Predice $y$ cuando $x = ⟦3⟧$.`,
  '1xlncasuj2t': R`Ordenada en el origen $a = \bar{y} - b\bar{x} = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$. Entonces $\hat{y} = ⟦4⟧ ⟦5⟧(⟦6⟧) = ⟦7⟧$.`,
  '1juzrcbx7yp': R`La recta de regresión de $y$ sobre $x$ tiene pendiente ⟦0⟧, con $\bar{x} = ⟦1⟧$ e $\bar{y} = ⟦2⟧$. Halla la ordenada en el origen.`,
  'ygsgt4zx8s': R`La recta pasa por $(\bar{x}; \bar{y})$: $a = ⟦0⟧ - ⟦1⟧(⟦2⟧) = ⟦3⟧$.`,
  '1fjn7fhcpwy': R`Rechazar H₀ cuando H₀ es en realidad verdadera`,
  '2czv0lmmxbv': R`Error de tipo I`,
  '1rsaomc3xxj': R`No rechazar H₀ cuando H₀ es en realidad falsa`,
  '1knmx3avsv8': R`Error de tipo II`,
  '7bbk61slol': R`Rechazar H₀ cuando H₀ es en realidad falsa`,
  '6vojkrxnxd': R`Decisión correcta`,
  '27k0u0dgkx8': R`No rechazar H₀ cuando H₀ es en realidad verdadera`,
  'j30d9a2wnu': R`Condenar a un acusado inocente (H₀: inocente)`,
  '1r9j0p9otdz': R`Dejar libre a un acusado culpable (H₀: inocente)`,
  'yce1tww5je': R`¿Qué tipo de resultado es este? <i>⟦0⟧</i>.`,
  'f5q8ah45y5': R`Tipo I = rechazar una $H_0$ verdadera (una falsa alarma); tipo II = no detectar una $H_0$ falsa. Así que es: <b>⟦0⟧</b>.`,
  '17su48d7rp0': R`¿Cuál es el menor tamaño muestral que da un intervalo de confianza del ⟦0⟧% con un margen de error de ⟦1⟧ como máximo, si $\sigma = ⟦2⟧$?`,
  'cysiojo18k': R`$n \ge \left(\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧}\right)^2 \approx ⟦3⟧$, así que se redondea hacia arriba: $n = ⟦4⟧$.`,

  // discrete
  'a1ovpdx0vp': R`
<h3>Teoría de números</h3>
<p>$a \equiv b \pmod n$ significa que $n$ divide a $a - b$; $a \bmod n$ es el resto en $\{0; 1; \ldots; n - 1\}$. Las congruencias se pueden sumar y multiplicar, y las potencias se reducen paso a paso.</p>
⟦0⟧
⟦1⟧
<p>El <b>inverso modular</b> de $a$ módulo $n$ es el $x$ con $ax \equiv 1 \pmod n$; existe exactamente cuando $\gcd(a, n) = 1$.</p>
<h3>Conteo</h3>
<ul><li>Funciones de un conjunto de tamaño $m$ en uno de tamaño $n$: $n^m$; las inyectivas: $n(n-1)\cdots(n-m+1)$.</li><li>Inclusión–exclusión: $|A \cup B| = |A| + |B| - |A \cap B|$.</li><li><b>Principio del palomar:</b> si más de $kn$ objetos van a $n$ cajas, alguna caja recibe al menos $k + 1$.</li></ul>
<h3>Recurrencias y grafos</h3>
<p>Una recurrencia define cada término a partir de los anteriores, como $a_n = 2a_{n-1} + 1$, $a_0 = 1$. En un grafo, el <b>lema del apretón de manos</b> dice que $\sum \deg(v) = 2|E|$; $K_n$ tiene $\binom{n}{2}$ aristas; un árbol con $n$ vértices tiene $n - 1$ aristas; un grafo conexo tiene un circuito euleriano si y solo si todos los grados son pares.</p>
⟦2⟧`,
  '1vllnifl24g': R`<p><b>Algoritmo de Euclides:</b> $\gcd(a, b) = \gcd(b, a \bmod b)$, repetido hasta que el resto sea 0.</p><p><b>Pequeño teorema de Fermat:</b> si $p$ es primo y $p \nmid a$, entonces $a^{p-1} \equiv 1 \pmod p$.</p>`,
  '28pp2kgl31t': R`<p>$\gcd(252, 198)$: $252 = 1 \cdot 198 + 54$, $198 = 3 \cdot 54 + 36$, $54 = 1 \cdot 36 + 18$, $36 = 2 \cdot 18$. Así que el mcd es 18.</p><p>$2^{100} \bmod 7$: como $2^3 = 8 \equiv 1$, $2^{100} = (2^3)^{33} \cdot 2 \equiv 2$.</p>`,
  '23tw4c5wfxh': R`<p>En problemas de inclusión–exclusión ("divisible por 3 o por 5"), la intersección es la divisibilidad por el <b>mcm</b>, 15.</p>`,
  '8fw6na2xe1': R`Calcula $⟦0⟧ \bmod ⟦1⟧$.`,
  'uplm3u8bhu': R`$⟦0⟧ = ⟦1⟧ \times ⟦2⟧ + ⟦3⟧$, así que el resto es ⟦4⟧.`,
  'xlpbyjzaqw': R`Calcula $⟦0⟧^{⟦1⟧} \bmod ⟦2⟧$.`,
  '1kd2o5jees6': R`Por Fermat, $⟦0⟧^{⟦1⟧} \equiv 1 \pmod{⟦2⟧}$. $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ + ⟦6⟧$, así que $⟦7⟧^{⟦8⟧} \equiv ⟦9⟧^{⟦10⟧} \equiv ⟦11⟧ \pmod{⟦12⟧}$.`,
  '127b4pzxtz': R`Usa el algoritmo de Euclides para hallar $\gcd(⟦0⟧, ⟦1⟧)$.`,
  '1aqkhdrg8qc': R`$⟦0⟧$. El último resto no nulo es <b>⟦1⟧</b>.`,
  '1s721amox67': R`Halla el inverso de ⟦0⟧ módulo ⟦1⟧, es decir, el $x$ con $⟦2⟧x \equiv 1 \pmod{⟦3⟧}$ y $0 \lt x \lt ⟦4⟧$.`,
  '1w7xn0v2je4': R`Comprobación: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧ = ⟦3⟧ \times ⟦4⟧ + 1$, así que $x = ⟦5⟧$.`,
  'x5llfo779v': R`¿Cuántas aristas tiene el grafo completo $K_{⟦0⟧}$?`,
  '1k9fldmleaq': R`Cada par de vértices está unido: $\binom{⟦0⟧}{2} = \frac{⟦1⟧ \times ⟦2⟧}{2} = ⟦3⟧$.`,
  '1gbx4896k6y': R`Un árbol tiene ⟦0⟧ vértices. ¿Cuántas aristas tiene?`,
  'g3rd0a2w3f': R`Todo árbol con $n$ vértices tiene $n - 1 = ⟦0⟧$ aristas.`,
  '1b7sza9kgx9': R`Un grafo tiene vértices de grados ⟦0⟧. ¿Cuántas aristas tiene?`,
  '2eddhu7y6e4': R`Lema del apretón de manos: $\sum\deg = ⟦0⟧ = 2|E|$, así que $|E| = ⟦1⟧$.`,
  '6xjrxhddis': R`Un grafo conexo tiene vértices de grados ⟦0⟧. ¿Cuántos vértices tienen grado impar?`,
  '5vsb2c69v5': R`Los grados impares son ⟦0⟧, así que hay ⟦1⟧. ⟦2⟧ (El número de vértices de grado impar siempre es par.)`,
  '2gbggujxcvs': R`ninguno`,
  '105xal8etax': R`Por tanto, el grafo tiene un circuito euleriano.`,
  '1z20e1aao3p': R`Por tanto, el grafo tiene un camino euleriano pero no un circuito euleriano.`,
  '1vy383kqrz8': R`Con más de 2 vértices impares no hay camino euleriano.`,
  'by57uvpuwf': R`$a_0 = ⟦0⟧$ y $a_n = ⟦1⟧a_{n-1} ⟦2⟧$ para $n \ge 1$. Halla $a_{⟦3⟧}$.`,
  '75ssmud3lg': R`Calcula término a término: ⟦0⟧.`,
  'go6ohggc8l': R`¿Cuántas cadenas de bits de longitud ⟦0⟧ contienen exactamente ⟦1⟧ unos?`,
  '27u4ks23cz9': R`Elige cuáles ⟦0⟧ de las ⟦1⟧ posiciones llevan unos: $\binom{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
  'yx3fxah4u8': R`¿Cuántas funciones hay de un conjunto de ⟦0⟧ elementos en un conjunto de ⟦1⟧ elementos?`,
  '12owpaqzt1c': R`Cada una de las ⟦0⟧ entradas puede ir a cualquiera de las ⟦1⟧ salidas: $⟦2⟧^{⟦3⟧} = ⟦4⟧$.`,
  '4o2cs42p15': R`¿Cuántas funciones inyectivas hay de un conjunto de ⟦0⟧ elementos en un conjunto de ⟦1⟧ elementos?`,
  'jpinfh5krc': R`Las imágenes deben ser distintas: $⟦0⟧ = ⟦1⟧$.`,
  '10skxcum4lz': R`¿Cuántos enteros del 1 al ⟦0⟧ son divisibles por ⟦1⟧ o por ⟦2⟧?`,
  'nhrb9jig2q': R`$\lfloor ⟦0⟧/⟦1⟧ \rfloor + \lfloor ⟦2⟧/⟦3⟧ \rfloor - \lfloor ⟦4⟧/⟦5⟧ \rfloor = ⟦6⟧ + ⟦7⟧ - ⟦8⟧ = ⟦9⟧$ (⟦10⟧ es el mcm).`,
  'cgzqt4g6kc': R`mes de nacimiento`,
  '10ye3jsw3n2': R`día de la semana`,
  '1eah1ab17mo': R`palo (de una baraja)`,
  '1fddlc7zc0d': R`¿Cuál es el menor número de personas necesario para garantizar que al menos ⟦0⟧ de ellas compartan el mismo ⟦1⟧?`,
  '27kjdpfw0sg': R`Con ⟦0⟧ categorías, $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ personas podrían evitarlo; una más obliga a un grupo de ⟦4⟧: $⟦5⟧$.`,

  // numerical
  '106u35np5bp': R`
<p>Los métodos numéricos aproximan respuestas que no tienen una forma cerrada cómoda. Importan dos tipos de error: el de <b>truncamiento</b> (del método) y el de <b>redondeo</b> (de la precisión finita).</p>
⟦0⟧
<h3>Cálculo de raíces</h3>
<ul><li><b>Bisección:</b> si $f(a)$ y $f(b)$ tienen signos opuestos, evalúa el punto medio $m$ y quédate con la mitad donde cambia el signo. Lento pero seguro: el error se reduce a la mitad en cada paso.</li><li><b>Newton–Raphson:</b> $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$. Muy rápido cerca de una raíz simple (convergencia cuadrática), pero puede fallar con un mal punto de partida o si $f' \approx 0$.</li></ul>
⟦1⟧
<h3>Integración numérica</h3>
⟦2⟧
<p>Aquí $h = \frac{b - a}{n}$. La regla de Simpson es exacta para polinomios de grado hasta 3.</p>
<h3>Método de Euler</h3>
⟦3⟧
⟦4⟧`,
  '2fbw9jej1dm': R`\text{error absoluto} = |x_{\text{real}} - x_{\text{aprox}}| \qquad \text{error relativo} = \frac{|x_{\text{real}} - x_{\text{aprox}}|}{|x_{\text{real}}|}`,
  '1a9noj3sp27': R`<p>$\sqrt{10}$ mediante $f(x) = x^2 - 10$ desde $x_0 = 3$: $x_1 = 3 - \frac{-1}{6} = 3{,}1667$, $x_2 = 3{,}1623$: ya es correcto con 4 decimales.</p>`,
  'vx6qz5zup7': R`\text{Trapecios: } \frac{h}{2}\big[f_0 + 2f_1 + \cdots + 2f_{n-1} + f_n\big] \qquad \text{Simpson } (n \text{ par}): \frac{h}{3}\big[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + f_n\big]`,
  '2fmxu9hfzwl': R`<p>Para $y' = f(x, y)$ con $y(x_0) = y_0$: $\; y_{n+1} = y_n + h\,f(x_n, y_n)$, $x_{n+1} = x_n + h$. Reducir $h$ a la mitad reduce el error aproximadamente a la mitad.</p>`,
  'fn0bl5sobc': R`<p>En la regla de los trapecios solo se duplican las ordenadas <b>interiores</b>; los dos valores extremos aparecen una sola vez.</p>`,
  '1n5pqkgqwu1': R`Aplica un paso del método de Newton a $f(x) = x^2 - ⟦0⟧$ partiendo de $x_0 = ⟦1⟧$. Da $x_1$ con 4 decimales.`,
  '1jvkeb9n3o6': R`Aplica un paso de bisección a $f(x) = x^2 - 3$ en $[1; 2]$. ¿Qué intervalo contiene la raíz después de ese paso?`,
  'vksl6we3dc': R`$f(1{,}5) = -0{,}75 \lt 0$ y $f(2) = 1 \gt 0$, así que el cambio de signo está en $[1{,}5; 2]$.`,
  '23lzoh0yq9e': R`Aplica bisección a $f(x) = x^⟦0⟧ - ⟦1⟧$ en $[⟦2⟧; ⟦3⟧]$. ¿Cuál es el punto medio calculado en la <b>segunda</b> iteración?`,
  '114tbd27u3w': R`Primer punto medio $⟦0⟧$: $f(⟦1⟧) = ⟦2⟧$, así que la raíz está en $[⟦3⟧; ⟦4⟧]$. Segundo punto medio: $⟦5⟧$.`,
  '1gaoigxt1uo': R`Usa la regla de los trapecios con $n = ⟦0⟧$ para aproximar $\displaystyle\int_0^{⟦1⟧} x^2\,dx$.`,
  '1pc9rab646n': R`$h = ⟦0⟧$; ordenadas ⟦1⟧. $T = \frac{⟦2⟧}{2}\left[⟦3⟧ + ⟦4⟧ + 2(⟦5⟧)\right] = ⟦6⟧$ (valor exacto ⟦7⟧).`,
  '1rsvekr7t2o': R`Usa la regla de Simpson con $n = 2$ para aproximar $\displaystyle\int_0^{⟦0⟧} x^4\,dx$.`,
  '8vqt4i28qj': R`$h = \frac{⟦0⟧}{2}$: $\frac{h}{3}\left[0 + 4\left(\frac{⟦1⟧}{2}\right)^4 + ⟦2⟧^4\right] = \frac{⟦3⟧}{6} \cdot \frac{5 \cdot ⟦4⟧}{4} = ⟦5⟧$ (valor exacto $⟦6⟧$).`,
  '1jdhmav4ljk': R`Usa el método de Euler con $h = ⟦0⟧$ para aproximar $y(⟦1⟧)$ para $y' = ⟦2⟧$, $y(0) = 1$. Redondea a 4 decimales.`,
  '6utp8finkn': R`$⟦0⟧$ se aproxima por ⟦1⟧. Halla el error relativo en porcentaje, con 3 decimales.`,

  // vector-calculus
  'bh1w03a054': R`
<p>Un <b>campo vectorial</b> $\mathbf{F}(x, y, z) = (P, Q, R)$ asigna un vector a cada punto, como la velocidad del viento o una fuerza. Con $\nabla = \left(\frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z}\right)$:</p>
⟦0⟧
<p>La divergencia mide el flujo que sale de un punto; el rotacional mide la rotación.</p>
<h3>Integrales de línea y campos conservativos</h3>
⟦1⟧
⟦2⟧
<h3>Los grandes teoremas</h3>
⟦3⟧
<p>Una consecuencia elegante del teorema de Green: el área de $D$ es $\frac{1}{2}\oint_C (x\,dy - y\,dx)$.</p>
⟦4⟧`,
  '1oemuo3mhjj': R`\text{div}\,\mathbf{F} = \nabla\cdot\mathbf{F} = P_x + Q_y + R_z \qquad \text{rot}\,\mathbf{F} = \nabla\times\mathbf{F} = (R_y - Q_z,\; P_z - R_x,\; Q_x - P_y)`,
  'dx5b9h7rwd': R`<p>$\mathbf{F}$ es <b>conservativo</b> si $\mathbf{F} = \nabla\varphi$ para un potencial $\varphi$. Entonces $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r} = \varphi(B) - \varphi(A)$ para cualquier camino de $A$ a $B$. En el plano (dominio simplemente conexo), $(P, Q)$ es conservativo si y solo si $P_y = Q_x$.</p>`,
  '11uavg1kohe': R`<p>$\mathbf{F} = (2xy, x^2 + 3)$: $P_y = 2x = Q_x$, así que es conservativo con $\varphi = x^2y + 3y$. De $(0; 0)$ a $(2; 1)$: $\varphi(2; 1) - \varphi(0; 0) = 4 + 3 = 7$.</p>`,
  '1yct8dx5k46': R`Teorema`,
  '3albyqcn6s': R`Green`,
  '1osdvqguwrh': R`Stokes`,
  '11x91oqdbb7': R`Divergencia (Gauss)`,
  '28jc8ed48q8': R`<p>El teorema de Green exige recorrer $C$ en sentido <b>antihorario</b> (con la región a la izquierda); en sentido horario cambia el signo.</p>`,
  'fg37vtw1nz': R`Halla $\nabla\cdot\mathbf{F}$ en $⟦0⟧$ para $\mathbf{F} = \left(⟦1⟧,\; ⟦2⟧,\; ⟦3⟧\right)$.`,
  'i6u559ylzz': R`$P_x = ⟦0⟧$, $Q_y = ⟦1⟧$, $R_z = ⟦2⟧$. En $⟦3⟧$: $⟦4⟧ ⟦5⟧ ⟦6⟧ = ⟦7⟧$.`,
  'dvzsgd4pt9': R`Para $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$, halla $Q_x - P_y$ (el rotacional escalar) en $⟦2⟧$.`,
  '1f7xg7qakjk': R`$Q_x = ⟦0⟧$ y $P_y = ⟦1⟧$, así que $Q_x - P_y = ⟦2⟧$, que vale ⟦3⟧ en $⟦4⟧$.`,
  '6gosl713kw': R`Calcula $\displaystyle\int_C \mathbf{F}\cdot d\mathbf{r}$, donde $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$ y $C$ es cualquier camino de $⟦2⟧$ a $⟦3⟧$.`,
  '1ch21kaf5wm': R`$\mathbf{F} = \nabla\varphi$ con $\varphi = ⟦0⟧$, así que la integral no depende del camino: $\varphi(B) - \varphi(A) = ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  '1czrg3saejj': R`Usa el teorema de Green para calcular $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$, donde $C$ es el borde del rectángulo $[0; ⟦2⟧] \times [0; ⟦3⟧]$, recorrido en sentido antihorario.`,
  'otc4kapbek': R`$Q_x - P_y = ⟦0⟧ - (-⟦1⟧) = ⟦2⟧$, así que la integral es $⟦3⟧ \times \text{área} = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  '1mzbbq34ezd': R`Usa el teorema de Green para calcular $\displaystyle\oint_C (-⟦0⟧y\,dx + ⟦1⟧x\,dy)$, donde $C$ es la circunferencia $x^2 + y^2 = ⟦2⟧$, recorrida en sentido antihorario.`,
  '2fijtuqaqq1': R`$Q_x - P_y = ⟦0⟧$, así que la integral es $⟦1⟧ \times \pi(⟦2⟧)^2 = ⟦3⟧$.`,
  '2csh30v58t4': R`¿Es conservativo $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$?`,
  '1ma95r0zub6': R`Conservativo`,
  'bn62hz6wu8': R`No conservativo`,
  '1s854ovcwco': R`no conservativo`,
  '15asqrx4hnu': R`$P_y = ⟦0⟧$ y $Q_x = ⟦1⟧$. ⟦2⟧`,
  'r7areoyr0a': R`Son iguales, así que F es conservativo (en todo el plano).`,
  '6dlb2jbxf0': R`Son distintas, así que F no es conservativo.`,
  '1ueomkx63n5': R`Halla una función potencial para $\mathbf{F} = \left(⟦0⟧,\; ⟦1⟧\right)$.`,
  '4awle3me9d': R`Integra $P$ respecto de $x$: $\varphi = ⟦0⟧ + g(y)$. Entonces $\varphi_y = ⟦1⟧ + g'(y) = ⟦2⟧$ da $g = ⟦3⟧$.`,

  // laplace
  'f6f4kfx30i': R`
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<p>Las transformadas inversas suelen requerir primero fracciones parciales y luego buscar en la tabla.</p>
⟦4⟧`,
  '1kbz0ay16v9': R`\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt`,
  '1id74v8hrdj': R`<p><b>Linealidad:</b> $\mathcal{L}\{af + bg\} = aF + bG$. <b>Derivadas:</b> $\mathcal{L}\{y'\} = sY - y(0)$ y $\mathcal{L}\{y''\} = s^2Y - sy(0) - y'(0)$: así las ecuaciones diferenciales se convierten en álgebra.</p>`,
  'ie964pskzz': R`<p>Resuelve $y'' + 4y = 0$, $y(0) = 3$, $y'(0) = 2$.</p><p>$s^2Y - 3s - 2 + 4Y = 0$, así que $Y = \dfrac{3s + 2}{s^2 + 4} = 3\dfrac{s}{s^2 + 4} + \dfrac{2}{s^2 + 4}$. Invirtiendo: $y = 3\cos 2t + \sin 2t$.</p>`,
  'cgwsp3i8af': R`<p>$\mathcal{L}\{\sin bt\}$ tiene $b$ en el numerador; $\mathcal{L}\{\cos bt\}$ tiene $s$ en el numerador. Confundirlas es el error más frecuente.</p>`,
  't6bpsx84ob': R`Halla $\mathcal{L}\{⟦0⟧\}$.`,
  '2sqpcztdp7': R`Linealidad con $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ y $\mathcal{L}\{e^{ct}\} = \frac{1}{s - c}$: $\frac{⟦0⟧ \cdot ⟦1⟧!}{s^{⟦2⟧}} + \frac{⟦3⟧}{⟦4⟧}$.`,
  '1erb7erw9za': R`Halla $\mathcal{L}\{⟦0⟧⟦1⟧ ⟦2⟧t\}$.`,
  'ujzn9ioggu': R`$\mathcal{L}\{\sin bt\} = \frac{b}{s^2 + b^2}$, así que la respuesta es $\frac{⟦0⟧ \cdot ⟦1⟧}{s^2 + ⟦2⟧} = \frac{⟦3⟧}{s^2 + ⟦4⟧}$.`,
  '2dljwnla25z': R`$\mathcal{L}\{\cos bt\} = \frac{s}{s^2 + b^2}$, así que la respuesta es $\frac{⟦0⟧s}{s^2 + ⟦1⟧}$.`,
  'napbzc1h43': R`Halla $\mathcal{L}^{-1}\left\{\dfrac{⟦0⟧}{⟦1⟧} + \dfrac{⟦2⟧s}{s^2 + ⟦3⟧}\right\}$.`,
  '6d49fl6z14': R`$\frac{1}{s - c} \leftrightarrow e^{ct}$ y $\frac{s}{s^2 + d^2} \leftrightarrow \cos dt$: el resultado es ⟦0⟧.`,
  'hw06puz2z5': R`Halla $\mathcal{L}\{⟦0⟧\,⟦1⟧ ⟦2⟧t\}$.`,
  'zs0uacvdu8': R`Primer teorema de traslación: $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$. Con $F(s) = ⟦0⟧$, sustituye $s$ por $⟦1⟧$.`,
  '1i1mf4ew2a': R`Sea $F(s) = \mathcal{L}\{t^{⟦0⟧}\}$. Halla $F(⟦1⟧)$.`,
  '180y0883p6z': R`$F(s) = \frac{⟦0⟧!}{s^{⟦1⟧}}$, así que $F(⟦2⟧) = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$.`,
  '11s9xvqwvw4': R`Sea $F(s) = \mathcal{L}\{⟦0⟧\}$. Halla $F(⟦1⟧)$.`,
  '18wjdkl7beq': R`$F(s) = \frac{1}{s - (⟦0⟧)}$, así que $F(⟦1⟧) = \frac{1}{⟦2⟧}$.`,
  '9v69wy5cnz': R`Resuelve $y'' + ⟦0⟧y = 0$ con $y(0) = ⟦1⟧$, $y'(0) = ⟦2⟧$ usando la transformada de Laplace.`,
  '24mrp3u7eep': R`$s^2Y - ⟦0⟧s - ⟦1⟧ + ⟦2⟧Y = 0$, así que $Y = ⟦3⟧$. Descompón como $⟦4⟧\cdot\frac{s}{s^2 + ⟦5⟧} + \frac{⟦6⟧}{⟦7⟧}\cdot\frac{⟦8⟧}{s^2 + ⟦9⟧}$ e invierte: ⟦10⟧.`,
});
