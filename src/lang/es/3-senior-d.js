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
