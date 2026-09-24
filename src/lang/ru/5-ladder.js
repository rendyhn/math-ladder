/* ladder: topic prerequisites and what they lead to */
addUI('ru', {
  ladderHead: R`Место темы на лестнице`,
  buildsOn: R`Опирается на`,
  leadsTo: R`Ведёт к`,
  ladderStart: R`Отправная точка: предыдущие темы не нужны.`,
  ladderTop: R`Вершина этой ветви лестницы.`,
});
addT('ru', {
  // Column addition and subtraction line digits up by place valu
  'qeiew1mndp': R`При сложении и вычитании столбиком цифры записывают по разрядам, а перенос передаёт десяток в следующий разряд.`,
  // Multiplication is repeated addition, and division undoes mul
  '1jpm1intgmb': R`Умножение — это многократное сложение, а деление отменяет умножение.`,
  // The order of operations decides which of $+$, $-$, $\times$ 
  '5wxy40oljq': R`Порядок действий определяет, какое из действий $+$, $-$, $\times$ и $\div$ выполняется первым в длинном вычислении.`,
  // Factors and multiples are the numbers that divide a number e
  '10sha3zlzp3': R`Делители и кратные — это числа, на которые число делится без остатка, или числа, получаемые его умножением.`,
  // Simplifying fractions and finding a common denominator use c
  '4wwa4bmv2r': R`Сокращение дробей и приведение к общему знаменателю используют общие делители и наименьшее общее кратное.`,
  // Decimals extend place value to the right of the ones place: 
  'sh9lbghpe9': R`Десятичные дроби продолжают разряды вправо от единиц: десятые, сотые, тысячные.`,
  // A decimal is a fraction whose denominator is 10, 100, 1000 a
  'irkoozgpjt': R`Десятичная дробь — это дробь со знаменателем 10, 100, 1000 и так далее.`,
  // Percent means “out of a hundred”: 25% is the fraction $\frac
  'p34b5uh54s': R`Процент означает «сотая часть»: 25% — это дробь $\frac{25}{100} = \frac{1}{4}$.`,
  // Percentages are converted to decimals to calculate with them
  '231i108op1x': R`Чтобы считать с процентами, их записывают десятичной дробью: 8% от цены — это $0{,}08 \times$ цена.`,
  // Converting between metric units multiplies or divides by 10,
  'o2gl9i6l2': R`Перевод метрических единиц — это умножение или деление на 10, 100 или 1000, при котором сдвигается запятая.`,
  // The area of a rectangle is length times width.
  '25wcbpclu4': R`Площадь прямоугольника равна длине, умноженной на ширину.`,
  // Lengths and areas are measured in units such as cm and cm², 
  '2634ih96gsm': R`Длины и площади измеряют в единицах вроде см и см², которые перед вычислением должны совпадать.`,
  // The volume of a prism is the area of its base times its heig
  'kwo8mlyup8': R`Объём призмы равен площади основания, умноженной на высоту, а площадь поверхности складывается из площадей граней.`,
  // Angle facts, such as “angles on a straight line add up to 18
  '1v95ytyiz1t': R`Свойства углов, например «смежные углы в сумме дают 180°», применяют, складывая и вычитая углы.`,
  // The mean is the total of the values divided by how many valu
  'bcjde87onv': R`Среднее арифметическое — это сумма значений, делённая на их количество.`,
  // Integers extend the number line below zero; adding and subtr
  'uhivuskhe4': R`Целые числа продолжают числовую прямую ниже нуля; их складывают и вычитают по тем же идеям, учитывая знаки.`,
  // A power is repeated multiplication: $2^5 = 2 \times 2 \times
  '14qn14hzx13': R`Степень — это многократное умножение: $2^5 = 2 \times 2 \times 2 \times 2 \times 2$.`,
  // Scientific notation writes a number as $a \times 10^n$, usin
  'hr39w4wzvv': R`Стандартный вид записывает число как $a \times 10^n$ с помощью степеней десяти.`,
  // The number $a$ in $a \times 10^n$ is a decimal from 1 up to 
  'qonxs1x7d1': R`Число $a$ в записи $a \times 10^n$ — десятичная дробь от 1 включительно до 10.`,
  // A ratio compares quantities the way a fraction does, and a p
  '23aa0qkt117': R`Отношение сравнивает величины так же, как дробь, а пропорция утверждает равенство двух дробей.`,
  // Letters stand for numbers that may be negative, so expressio
  'r03wloegxg': R`Буквы обозначают числа, которые могут быть отрицательными, поэтому выражения упрощают по правилам знаков.`,
  // Expanding brackets and substituting values into an expressio
  '21h80w1us7d': R`Раскрытие скобок и подстановка значений в выражение следуют порядку действий.`,
  // Solving an equation means simplifying the expressions on eac
  'dsfd6oq44q': R`Решить уравнение — значит упростить выражения в обеих частях, а затем отменить действия.`,
  // Inequalities are solved like equations, except that the sign
  'chsc7bja9g': R`Неравенства решают как уравнения, но знак меняется на противоположный при умножении или делении на отрицательное число.`,
  // Sets of factors, multiples and primes are typical first exam
  '1rnu9h0j44t': R`Множества делителей, кратных и простых чисел — типичные первые примеры множеств и диаграмм Венна.`,
  // The graph of a linear equation in $x$ and $y$ is a straight 
  '1mojvmv6g25': R`График линейного уравнения с $x$ и $y$ — прямая, и каждая её точка является решением.`,
  // The gradient of a line is a rate: the change in $y$ for each
  'ofsdmnc7db': R`Угловой коэффициент прямой — это скорость изменения: насколько меняется $y$ при изменении $x$ на единицу.`,
  // Substitution and elimination turn a system into a single lin
  'zd8khoatau': R`Подстановка и сложение сводят систему к одному линейному уравнению с одной неизвестной.`,
  // The solution of a system of two linear equations is the poin
  '1euaco9nn3z': R`Решение системы двух линейных уравнений — точка пересечения их прямых.`,
  // The theorem $a^2 + b^2 = c^2$ is worked with squares and squ
  '296jzhjbpfo': R`С теоремой $a^2 + b^2 = c^2$ работают через квадраты и квадратные корни.`,
  // The theorem is a fact about right-angled triangles and which
  '27afy2qgea8': R`Теорема относится к прямоугольным треугольникам, и важно знать, какая сторона является гипотенузой.`,
  // Circumference and the area of a circle extend perimeter and 
  '1c7m4ao6ge7': R`Длина окружности и площадь круга переносят периметр и площадь на криволинейную фигуру.`,
  // Cylinders, cones and spheres are round, so their formulas us
  '4ai3wcl267': R`Цилиндры, конусы и шары круглые, поэтому их формулы содержат $\pi$ и радиус.`,
  // The volume and surface area of prisms are extended to cylind
  'fxdb4tsyw2': R`Объём и площадь поверхности призм обобщаются на цилиндры, конусы, пирамиды и шары.`,
  // Mean, median and mode are joined by measures of spread such 
  '9a6kx1e4yh': R`К среднему, медиане и моде добавляются меры разброса, такие как размах и квартили.`,
  // A probability is a fraction: favourable outcomes out of all 
  '17gd79svwx2': R`Вероятность — это дробь: число благоприятных исходов, делённое на число всех равновозможных исходов.`,
  // Profit, loss, discount, tax and interest are all percentages
  '6oqshsyd21': R`Прибыль, убыток, скидка, налог и проценты по вкладу — всё это проценты от некоторой суммы.`,
  // The $n$th term of a pattern is an algebraic expression in $n
  's18kq836ov': R`$n$-й член закономерности — это алгебраическое выражение от $n$.`,
  // Similar shapes have all pairs of corresponding sides in the 
  '1673zqtap3t': R`У подобных фигур все пары соответствующих сторон находятся в одном и том же отношении.`,
  // Transformations and similarity keep angles the same, so angl
  'nhm1k0jf87': R`Преобразования и подобие сохраняют углы, поэтому свойства углов помогают распознать подобные фигуры.`,
  // Factorising and completing the square are skills of rearrang
  '2awcjz6ag0h': R`Разложение на множители и выделение полного квадрата — это навыки преобразования алгебраических выражений.`,
  // Once a quadratic is factorised, each factor set to zero is a
  'axjxa88p8j': R`Когда квадратное уравнение разложено на множители, каждый множитель, приравненный к нулю, даёт линейное уравнение.`,
  // The roots of a quadratic equation are where its parabola cro
  '3ai29ta3bd': R`Корни квадратного уравнения — это точки, где парабола пересекает ось $x$.`,
  // Graphs, intercepts and the coordinate plane carry over from 
  '2fe079f86oc': R`Графики, точки пересечения с осями и координатная плоскость переходят от прямых к параболам.`,
  // A linear function is the first example of a rule that gives 
  '1dyq2iw6ttf': R`Линейная функция — первый пример правила, сопоставляющего каждому входу ровно один выход.`,
  // A logarithm is an exponent, so the laws of exponents become 
  'bhyxgzt11y': R`Логарифм — это показатель степени, поэтому свойства степеней превращаются в свойства логарифмов.`,
  // The logarithm $\log_a x$ is the inverse function of the expo
  'dhaomm7cmc': R`Логарифм $\log_a x$ — функция, обратная показательной функции $a^x$.`,
  // Arithmetic and geometric sequences make number patterns prec
  '1i0ckjdy4m3': R`Арифметическая и геометрическая прогрессии уточняют числовые закономерности и дают формулы их сумм.`,
  // Trigonometric ratios compare the sides of a right-angled tri
  '2dkcig1f7s5': R`Тригонометрические функции сравнивают стороны прямоугольного треугольника, а на единичной окружности $\sin^2\theta + \cos^2\theta = 1$ — это теорема Пифагора.`,
  // A trigonometric ratio depends only on the angle because righ
  '28o7ie6opej': R`Значение тригонометрической функции зависит только от угла, потому что прямоугольные треугольники с равными углами подобны.`,
  // Identities are built from the definitions of sine, cosine an
  '11vomgqg97n': R`Тождества выводятся из определений синуса, косинуса и тангенса на единичной окружности.`,
  // Many trigonometric equations turn into a quadratic in $\sin 
  '1aaktv1yqz7': R`Многие тригонометрические уравнения сводятся к квадратному уравнению относительно $\sin x$ или $\cos x$.`,
  // The sine rule and cosine rule extend the trigonometric ratio
  '13me5uymk2c': R`Теоремы синусов и косинусов переносят тригонометрию на треугольники без прямого угла.`,
  // A quadratic is a polynomial of degree 2; polynomial division
  'da1pvgcuq2': R`Квадратный трёхчлен — многочлен степени 2; деление многочленов и теорема Безу обобщают разложение на множители.`,
  // A system of linear equations can be written as one matrix eq
  'e0bc8izwug': R`Систему линейных уравнений можно записать одним матричным уравнением $AX = B$ и решить с помощью обратной матрицы.`,
  // The magnitude of a vector is found with Pythagoras' theorem.
  '12j5n3poamr': R`Длина вектора находится по теореме Пифагора.`,
  // The angle between two vectors, and splitting a vector into c
  '1rc52s5n9t0': R`Угол между векторами и разложение вектора на составляющие используют тригонометрию.`,
  // A limit describes the value a function's output approaches a
  '15k09f0soai': R`Предел описывает значение, к которому стремится значение функции, когда аргумент стремится к точке.`,
  // The derivative is defined as a limit: the gradient between t
  '2cxg9hybda1': R`Производная определяется как предел: угловой коэффициент между двумя точками, когда они сближаются.`,
  // A derivative is the gradient of the tangent line, extending 
  '201djzmlsb3': R`Производная — угловой коэффициент касательной; она переносит наклон прямой на кривые.`,
  // Integration reverses differentiation; this is the Fundamenta
  'ruft2tqdak': R`Интегрирование обращает дифференцирование; это основная теорема анализа (формула Ньютона — Лейбница).`,
  // A definite integral measures the area under a curve by addin
  'sp8kuu3a74': R`Определённый интеграл измеряет площадь под кривой, складывая тонкие прямоугольники.`,
  // Counting rests on the multiplication principle: the numbers 
  '1i0nrfbe5bb': R`Подсчёт опирается на правило произведения: числа вариантов на каждом шаге перемножаются.`,
  // Rules for combined, independent and conditional events build
  '2f23y9h56n3': R`Правила для сложных, независимых и условных событий опираются на вероятность как долю исходов.`,
  // Permutations and combinations count the outcomes when there 
  'c88bt9u9sf': R`Перестановки и сочетания считают исходы, когда их слишком много, чтобы перечислить.`,
  // Variance, standard deviation and distributions go further th
  'cnqeudl3aq': R`Дисперсия, стандартное отклонение и распределения идут дальше размаха и квартилей.`,
  // Distance, midpoint and gradient in the coordinate plane lead
  '64oncg04w1': R`Расстояние, середина отрезка и угловой коэффициент на координатной плоскости ведут к уравнениям прямых и окружностей.`,
  // The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is 
  '1n2jj8p5uea': R`Уравнение окружности $(x - a)^2 + (y - b)^2 = r^2$ — это теорема Пифагора для расстояния до центра.`,
  // Constraints are linear inequalities, and together their grap
  'rsywiledqf': R`Ограничения — линейные неравенства, и вместе их графики образуют допустимую область.`,
  // The boundaries of the feasible region and the level lines of
  '1hwyr5azmza': R`Границы допустимой области и линии уровня целевой функции — прямые.`,
  // “And”, “or” and “not” in logic match intersection, union and
  '1v8ndsdqg9i': R`«И», «или» и «не» в логике соответствуют пересечению, объединению и дополнению множеств.`,
  // The chain, product and quotient rules and implicit different
  '2fbt3zsv0xe': R`Правила дифференцирования сложной функции, произведения и частного, а также неявное дифференцирование расширяют основные правила.`,
  // Differentiating $e^x$ and $\ln x$, and logarithmic different
  '1oh2ya4wsji': R`Дифференцирование $e^x$ и $\ln x$, а также логарифмическое дифференцирование используют свойства степеней и логарифмов.`,
  // Optimisation, related rates and curve sketching apply the ru
  '284ysrnl7bq': R`Оптимизация, связанные скорости и исследование функций применяют правила дифференцирования к реальным задачам.`,
  // Substitution and integration by parts extend the basic antid
  '2gi28jy2yt1': R`Замена переменной и интегрирование по частям расширяют таблицу основных первообразных.`,
  // Substitution reverses the chain rule, and integration by par
  '7zalhvgsd9': R`Замена переменной обращает правило для сложной функции, а интегрирование по частям — правило произведения.`,
  // Areas, volumes of revolution and arc lengths all lead to int
  'lf24voao9c': R`Площади, объёмы тел вращения и длины дуг приводят к интегралам, которые затем нужно вычислить.`,
  // Infinite series continue the sums of arithmetic and geometri
  '1hviqnspnff': R`Бесконечные ряды продолжают без конца суммы арифметических и геометрических прогрессий.`,
  // A series converges when the limit of its partial sums exists
  '15f8uacuddq': R`Ряд сходится, если существует предел его частичных сумм.`,
  // A partial derivative differentiates with respect to one vari
  '2g4278341z3': R`Частная производная берётся по одной переменной, а остальные считаются постоянными.`,
  // The gradient and directional derivatives are vectors.
  '19utg29r90g': R`Градиент и производные по направлению — это векторы.`,
  // A differential equation is an equation linking a function to
  '2ds3dtqg3pn': R`Дифференциальное уравнение связывает функцию с её производными.`,
  // Solving a differential equation usually ends with an integra
  'saspoe9ooe': R`Решение дифференциального уравнения обычно заканчивается интегрированием.`,
  // Linear algebra studies matrices as maps, with determinants, 
  'ot9xqwxvdo': R`Линейная алгебра изучает матрицы как отображения: определители, обратные матрицы, ранг и собственные значения.`,
  // Vector spaces generalise the vectors of geometry to any numb
  '1cobeg25pvp': R`Векторные пространства обобщают векторы геометрии на любое число измерений.`,
  // Complex numbers first appear as the roots of a quadratic wit
  'tls844q11g': R`Комплексные числа впервые появляются как корни квадратного уравнения с отрицательным дискриминантом.`,
  // The polar form describes a complex number by its modulus and
  '1z3ue7jl9zc': R`Тригонометрическая форма задаёт комплексное число модулем и углом с помощью синуса и косинуса.`,
  // The binomial, Poisson and normal distributions are built on 
  '19602jed52d': R`Биномиальное, пуассоновское и нормальное распределения опираются на правила вероятности и комбинаторики.`,
  // For a continuous distribution, a probability is an area unde
  '1mhdhr61iex': R`Для непрерывного распределения вероятность — это площадь под кривой плотности.`,
  // Inference starts from a sample summarised by its mean and st
  '1lgg9vh00wv': R`Статистический вывод начинается с выборки, описанной её средним и стандартным отклонением.`,
  // Confidence intervals and hypothesis tests rely on the normal
  '1s8qoieebkn': R`Доверительные интервалы и проверка гипотез опираются на нормальное распределение и распределение Стьюдента ($t$).`,
  // Proofs, sets and relations in discrete mathematics are writt
  'pq7m9yqcpf': R`Доказательства, множества и отношения в дискретной математике записываются на языке логики.`,
  // Counting principles are a central part of discrete mathemati
  'ao11coj5na': R`Принципы подсчёта — центральная часть дискретной математики.`,
  // Newton's method uses the derivative to home in on a root.
  '175iqzjsa7u': R`Метод Ньютона использует производную, чтобы шаг за шагом приближаться к корню.`,
  // The trapezoidal rule and Simpson's rule approximate definite
  '2cephu1nsk4': R`Формулы трапеций и Симпсона приближённо вычисляют определённые интегралы.`,
  // Gradient, divergence and curl are built from partial derivat
  '23gedxxnvwc': R`Градиент, дивергенция и ротор строятся из частных производных, а криволинейные и поверхностные интегралы обобщают кратные интегралы.`,
  // The Laplace transform turns a differential equation into an 
  '19mvnrfi5rk': R`Преобразование Лапласа превращает дифференциальное уравнение в алгебраическое.`,
  // The Laplace transform is an improper integral, often worked 
  'da64d9071l': R`Преобразование Лапласа — несобственный интеграл, который часто вычисляют интегрированием по частям.`,
});
