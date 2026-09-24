/* ladder: topic prerequisites and what they lead to */
addUI('ar', {
  ladderHead: R`موقع هذا الموضوع`,
  buildsOn: R`يعتمد على`,
  leadsTo: R`يقود إلى`,
  ladderStart: R`نقطة انطلاق: لا يحتاج إلى موضوع سابق.`,
  ladderTop: R`قمة هذا الفرع من السلّم.`,
});
addT('ar', {
  // Column addition and subtraction line digits up by place valu
  'qeiew1mndp': R`الجمع والطرح العموديان يرتّبان الأرقام حسب القيمة المنزلية، والحمل ينقل عشرة إلى المنزلة التالية.`,
  // Multiplication is repeated addition, and division undoes mul
  '1jpm1intgmb': R`الضرب جمع متكرر، والقسمة تعكس الضرب.`,
  // The order of operations decides which of $+$, $-$, $\times$ 
  '5wxy40oljq': R`ترتيب العمليات يحدد أيّ العمليات $+$ و$-$ و$\times$ و$\div$ تأتي أولًا في الحساب الطويل.`,
  // Factors and multiples are the numbers that divide a number e
  '10sha3zlzp3': R`العوامل والمضاعفات هي الأعداد التي تقسم عددًا دون باقٍ، أو التي تنتج عن ضربه.`,
  // Simplifying fractions and finding a common denominator use c
  '4wwa4bmv2r': R`تبسيط الكسور وإيجاد مقام مشترك يستخدمان العوامل المشتركة والمضاعف المشترك الأصغر.`,
  // Decimals extend place value to the right of the ones place: 
  'sh9lbghpe9': R`الكسور العشرية تمدّ القيمة المنزلية إلى يمين منزلة الآحاد: أجزاء من عشرة ومن مئة ومن ألف.`,
  // A decimal is a fraction whose denominator is 10, 100, 1000 a
  'irkoozgpjt': R`الكسر العشري كسر مقامه 10 أو 100 أو 1000 وهكذا.`,
  // Percent means “out of a hundred”: 25% is the fraction $\frac
  'p34b5uh54s': R`النسبة المئوية تعني «من مئة»: 25% هي الكسر $\frac{25}{100} = \frac{1}{4}$.`,
  // Percentages are converted to decimals to calculate with them
  '231i108op1x': R`للحساب بالنسب المئوية نحوّلها إلى كسور عشرية: 8% من السعر هي $0.08 \times$ السعر.`,
  // Converting between metric units multiplies or divides by 10,
  'o2gl9i6l2': R`التحويل بين الوحدات المترية ضرب أو قسمة على 10 أو 100 أو 1000، وهذا يحرّك الفاصلة العشرية.`,
  // The area of a rectangle is length times width.
  '25wcbpclu4': R`مساحة المستطيل هي الطول في العرض.`,
  // Lengths and areas are measured in units such as cm and cm², 
  '2634ih96gsm': R`تُقاس الأطوال والمساحات بوحدات مثل سم وسم²، ويجب توحيدها قبل الحساب.`,
  // The volume of a prism is the area of its base times its heig
  'kwo8mlyup8': R`حجم المنشور هو مساحة قاعدته في ارتفاعه، والمساحة الكلية مجموع مساحات أوجهه.`,
  // Angle facts, such as “angles on a straight line add up to 18
  '1v95ytyiz1t': R`خصائص الزوايا، مثل «مجموع الزوايا على خط مستقيم 180°»، تُستخدم بجمع الزوايا وطرحها.`,
  // The mean is the total of the values divided by how many valu
  'bcjde87onv': R`الوسط الحسابي هو مجموع القيم مقسومًا على عددها.`,
  // Integers extend the number line below zero; adding and subtr
  'uhivuskhe4': R`الأعداد الصحيحة تمدّ خط الأعداد إلى ما دون الصفر؛ وجمعها وطرحها يتبعان الأفكار نفسها مع الإشارات.`,
  // A power is repeated multiplication: $2^5 = 2 \times 2 \times
  '14qn14hzx13': R`القوة ضرب متكرر: $2^5 = 2 \times 2 \times 2 \times 2 \times 2$.`,
  // Scientific notation writes a number as $a \times 10^n$, usin
  'hr39w4wzvv': R`الصيغة العلمية تكتب العدد على الشكل $a \times 10^n$ باستخدام قوى العشرة.`,
  // The number $a$ in $a \times 10^n$ is a decimal from 1 up to 
  'qonxs1x7d1': R`العدد $a$ في $a \times 10^n$ عدد عشري من 1 إلى أقل من 10.`,
  // A ratio compares quantities the way a fraction does, and a p
  '23aa0qkt117': R`النسبة تقارن الكميات كما يفعل الكسر، والتناسب يعني أن كسرين متساويان.`,
  // Letters stand for numbers that may be negative, so expressio
  'r03wloegxg': R`الحروف تمثّل أعدادًا قد تكون سالبة، لذا تُبسَّط العبارات بقواعد الإشارات.`,
  // Expanding brackets and substituting values into an expressio
  '21h80w1us7d': R`فكّ الأقواس والتعويض بقيم في عبارة يتبعان ترتيب العمليات.`,
  // Solving an equation means simplifying the expressions on eac
  'dsfd6oq44q': R`حلّ المعادلة يعني تبسيط العبارتين في طرفيها ثم عكس العمليات.`,
  // Inequalities are solved like equations, except that the sign
  'chsc7bja9g': R`تُحلّ المتباينات كالمعادلات، إلا أن إشارة التباين تنقلب عند الضرب أو القسمة على عدد سالب.`,
  // Sets of factors, multiples and primes are typical first exam
  '1rnu9h0j44t': R`مجموعات العوامل والمضاعفات والأعداد الأولية أمثلة أولى شائعة على المجموعات وأشكال فن.`,
  // The graph of a linear equation in $x$ and $y$ is a straight 
  '1mojvmv6g25': R`التمثيل البياني لمعادلة خطية في $x$ و$y$ مستقيم، وكل نقطة عليه حلّ لها.`,
  // The gradient of a line is a rate: the change in $y$ for each
  'ofsdmnc7db': R`ميل المستقيم معدّل: مقدار تغيّر $y$ لكل وحدة تغيّر في $x$.`,
  // Substitution and elimination turn a system into a single lin
  'zd8khoatau': R`التعويض والحذف يحوّلان النظام إلى معادلة خطية واحدة بمجهول واحد.`,
  // The solution of a system of two linear equations is the poin
  '1euaco9nn3z': R`حلّ نظام من معادلتين خطيتين هو نقطة تقاطع مستقيميهما.`,
  // The theorem $a^2 + b^2 = c^2$ is worked with squares and squ
  '296jzhjbpfo': R`تُحسب مبرهنة $a^2 + b^2 = c^2$ بالمربعات والجذور التربيعية.`,
  // The theorem is a fact about right-angled triangles and which
  '27afy2qgea8': R`المبرهنة خاصة بالمثلث القائم، ولا بدّ من معرفة أيّ الأضلاع هو الوتر.`,
  // Circumference and the area of a circle extend perimeter and 
  '1c7m4ao6ge7': R`محيط الدائرة ومساحتها يمدّان المحيط والمساحة إلى شكل منحنٍ.`,
  // Cylinders, cones and spheres are round, so their formulas us
  '4ai3wcl267': R`الأسطوانة والمخروط والكرة أشكال مستديرة، لذا تحتوي صيغها على $\pi$ ونصف القطر.`,
  // The volume and surface area of prisms are extended to cylind
  'fxdb4tsyw2': R`يُعمَّم حجم المنشور ومساحته الكلية على الأسطوانة والمخروط والهرم والكرة.`,
  // Mean, median and mode are joined by measures of spread such 
  '9a6kx1e4yh': R`يُضاف إلى الوسط والوسيط والمنوال مقاييس التشتت مثل المدى والربيعيات.`,
  // A probability is a fraction: favourable outcomes out of all 
  '17gd79svwx2': R`الاحتمال كسر: عدد النواتج المرغوبة على عدد كل النواتج المتساوية الإمكان.`,
  // Profit, loss, discount, tax and interest are all percentages
  '6oqshsyd21': R`الربح والخسارة والخصم والضريبة والفائدة كلها نسب مئوية من مبلغ ما.`,
  // The $n$th term of a pattern is an algebraic expression in $n
  's18kq836ov': R`الحد النوني لنمط عبارة جبرية في $n$.`,
  // Similar shapes have all pairs of corresponding sides in the 
  '1673zqtap3t': R`الأشكال المتشابهة تكون فيها كل أزواج الأضلاع المتناظرة بالنسبة نفسها.`,
  // Transformations and similarity keep angles the same, so angl
  'nhm1k0jf87': R`التحويلات والتشابه تحافظ على الزوايا، لذا تساعد خصائص الزوايا على تمييز الأشكال المتشابهة.`,
  // Factorising and completing the square are skills of rearrang
  '2awcjz6ag0h': R`التحليل إلى عوامل وإكمال المربع مهارتان في إعادة ترتيب العبارات الجبرية.`,
  // Once a quadratic is factorised, each factor set to zero is a
  'axjxa88p8j': R`بعد تحليل المعادلة التربيعية، يصبح كل عامل مساوٍ للصفر معادلة خطية.`,
  // The roots of a quadratic equation are where its parabola cro
  '3ai29ta3bd': R`جذور المعادلة التربيعية هي النقاط التي يقطع فيها قطعها المكافئ محور $x$.`,
  // Graphs, intercepts and the coordinate plane carry over from 
  '2fe079f86oc': R`التمثيل البياني والمقاطع والمستوى الإحداثي تنتقل من المستقيمات إلى القطوع المكافئة.`,
  // A linear function is the first example of a rule that gives 
  '1dyq2iw6ttf': R`الدالة الخطية أول مثال على قاعدة تعطي لكل مدخل مخرجًا واحدًا تمامًا.`,
  // A logarithm is an exponent, so the laws of exponents become 
  'bhyxgzt11y': R`اللوغاريتم أسّ، لذا تصبح قوانين الأسس قوانين اللوغاريتمات.`,
  // The logarithm $\log_a x$ is the inverse function of the expo
  'dhaomm7cmc': R`اللوغاريتم $\log_a x$ هو الدالة العكسية للدالة الأسية $a^x$.`,
  // Arithmetic and geometric sequences make number patterns prec
  '1i0ckjdy4m3': R`المتتاليات الحسابية والهندسية تجعل الأنماط العددية دقيقة وتضيف صيغًا لمجاميعها.`,
  // Trigonometric ratios compare the sides of a right-angled tri
  '2dkcig1f7s5': R`النسب المثلثية تقارن أضلاع المثلث القائم، وعلى دائرة الوحدة تكون $\sin^2\theta + \cos^2\theta = 1$ هي مبرهنة فيثاغورس.`,
  // A trigonometric ratio depends only on the angle because righ
  '28o7ie6opej': R`النسبة المثلثية تعتمد على الزاوية فقط، لأن المثلثات القائمة ذات الزوايا المتساوية متشابهة.`,
  // Identities are built from the definitions of sine, cosine an
  '11vomgqg97n': R`تُبنى المتطابقات من تعريفات الجيب وجيب التمام والظل على دائرة الوحدة.`,
  // Many trigonometric equations turn into a quadratic in $\sin 
  '1aaktv1yqz7': R`كثير من المعادلات المثلثية تتحول إلى معادلة تربيعية في $\sin x$ أو $\cos x$.`,
  // The sine rule and cosine rule extend the trigonometric ratio
  '13me5uymk2c': R`قانونا الجيب وجيب التمام يمدّان النسب المثلثية إلى مثلثات ليس فيها زاوية قائمة.`,
  // A quadratic is a polynomial of degree 2; polynomial division
  'da1pvgcuq2': R`العبارة التربيعية كثيرة حدود من الدرجة 2، وقسمة كثيرات الحدود ونظرية الباقي تعمّمان تحليلها.`,
  // A system of linear equations can be written as one matrix eq
  'e0bc8izwug': R`يمكن كتابة نظام معادلات خطية معادلةً مصفوفية واحدة $AX = B$ وحلّه بالمصفوفة العكسية.`,
  // The magnitude of a vector is found with Pythagoras' theorem.
  '12j5n3poamr': R`يُحسب طول المتجه بمبرهنة فيثاغورس.`,
  // The angle between two vectors, and splitting a vector into c
  '1rc52s5n9t0': R`الزاوية بين متجهين وتحليل المتجه إلى مركّبات يستخدمان حساب المثلثات.`,
  // A limit describes the value a function's output approaches a
  '15k09f0soai': R`النهاية تصف القيمة التي تقترب منها قيمة الدالة عندما يقترب المُدخل من نقطة.`,
  // The derivative is defined as a limit: the gradient between t
  '2cxg9hybda1': R`تُعرَّف المشتقة بأنها نهاية: ميل الخط بين نقطتين حين تقتربان إحداهما من الأخرى.`,
  // A derivative is the gradient of the tangent line, extending 
  '201djzmlsb3': R`المشتقة ميل المماس، وهي تمدّ ميل المستقيم إلى المنحنيات.`,
  // Integration reverses differentiation; this is the Fundamenta
  'ruft2tqdak': R`التكامل يعكس الاشتقاق، وهذه هي المبرهنة الأساسية في التفاضل والتكامل.`,
  // A definite integral measures the area under a curve by addin
  'sp8kuu3a74': R`التكامل المحدد يقيس المساحة تحت منحنى بجمع مستطيلات رفيعة.`,
  // Counting rests on the multiplication principle: the numbers 
  '1i0nrfbe5bb': R`العدّ يقوم على مبدأ الضرب: أعداد الخيارات في كل خطوة تُضرب معًا.`,
  // Rules for combined, independent and conditional events build
  '2f23y9h56n3': R`قواعد الأحداث المركّبة والمستقلة والشرطية مبنية على الاحتمال بوصفه كسرًا من النواتج.`,
  // Permutations and combinations count the outcomes when there 
  'c88bt9u9sf': R`التباديل والتوافيق تعدّ النواتج حين تكون أكثر من أن تُسرد.`,
  // Variance, standard deviation and distributions go further th
  'cnqeudl3aq': R`التباين والانحراف المعياري والتوزيعات تتجاوز المدى والربيعيات.`,
  // Distance, midpoint and gradient in the coordinate plane lead
  '64oncg04w1': R`المسافة ونقطة المنتصف والميل في المستوى الإحداثي تقود إلى معادلات المستقيمات والدوائر.`,
  // The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is 
  '1n2jj8p5uea': R`معادلة الدائرة $(x - a)^2 + (y - b)^2 = r^2$ هي مبرهنة فيثاغورس للمسافة إلى المركز.`,
  // Constraints are linear inequalities, and together their grap
  'rsywiledqf': R`القيود متباينات خطية، وتمثيلاتها البيانية معًا تكوّن المنطقة الممكنة.`,
  // The boundaries of the feasible region and the level lines of
  '1hwyr5azmza': R`حدود المنطقة الممكنة وخطوط المستوى لدالة الهدف مستقيمات.`,
  // “And”, “or” and “not” in logic match intersection, union and
  '1v8ndsdqg9i': R`«و» و«أو» و«ليس» في المنطق تقابل التقاطع والاتحاد والمتممة في المجموعات.`,
  // The chain, product and quotient rules and implicit different
  '2fbt3zsv0xe': R`قواعد السلسلة والضرب والقسمة والاشتقاق الضمني توسّع قواعد الاشتقاق الأساسية.`,
  // Differentiating $e^x$ and $\ln x$, and logarithmic different
  '1oh2ya4wsji': R`اشتقاق $e^x$ و$\ln x$ والاشتقاق اللوغاريتمي يستخدمان قوانين الأسس واللوغاريتمات.`,
  // Optimisation, related rates and curve sketching apply the ru
  '284ysrnl7bq': R`التحسين والمعدلات المرتبطة ورسم المنحنيات تطبّق قواعد الاشتقاق على مسائل واقعية.`,
  // Substitution and integration by parts extend the basic antid
  '2gi28jy2yt1': R`التكامل بالتعويض والتكامل بالتجزئة يوسّعان الدوال الأصلية الأساسية.`,
  // Substitution reverses the chain rule, and integration by par
  '7zalhvgsd9': R`التعويض يعكس قاعدة السلسلة، والتكامل بالتجزئة يعكس قاعدة الضرب.`,
  // Areas, volumes of revolution and arc lengths all lead to int
  'lf24voao9c': R`المساحات وحجوم الدوران وأطوال الأقواس كلها تقود إلى تكاملات يجب حسابها بعد ذلك.`,
  // Infinite series continue the sums of arithmetic and geometri
  '1hviqnspnff': R`المتسلسلات اللانهائية تواصل مجاميع المتتاليات الحسابية والهندسية بلا نهاية.`,
  // A series converges when the limit of its partial sums exists
  '15f8uacuddq': R`تتقارب المتسلسلة عندما توجد نهاية مجاميعها الجزئية.`,
  // A partial derivative differentiates with respect to one vari
  '2g4278341z3': R`المشتقة الجزئية تشتق بالنسبة إلى متغير واحد مع معاملة المتغيرات الأخرى كثوابت.`,
  // The gradient and directional derivatives are vectors.
  '19utg29r90g': R`التدرّج والمشتقات الاتجاهية متجهات.`,
  // A differential equation is an equation linking a function to
  '2ds3dtqg3pn': R`المعادلة التفاضلية معادلة تربط دالة بمشتقاتها.`,
  // Solving a differential equation usually ends with an integra
  'saspoe9ooe': R`حلّ المعادلة التفاضلية ينتهي عادةً بعملية تكامل.`,
  // Linear algebra studies matrices as maps, with determinants, 
  'ot9xqwxvdo': R`الجبر الخطي يدرس المصفوفات بوصفها تطبيقات، مع المحددات والمعكوسات والرتبة والقيم الذاتية.`,
  // Vector spaces generalise the vectors of geometry to any numb
  '1cobeg25pvp': R`الفضاءات المتجهية تعمّم متجهات الهندسة إلى أي عدد من الأبعاد.`,
  // Complex numbers first appear as the roots of a quadratic wit
  'tls844q11g': R`تظهر الأعداد المركّبة أول مرة جذورًا لمعادلة تربيعية مميّزها سالب.`,
  // The polar form describes a complex number by its modulus and
  '1z3ue7jl9zc': R`الصيغة القطبية تصف العدد المركّب بمقياسه وزاوية، باستخدام الجيب وجيب التمام.`,
  // The binomial, Poisson and normal distributions are built on 
  '19602jed52d': R`توزيعات ذي الحدين وبواسون والطبيعي مبنية على قواعد الاحتمال والعدّ.`,
  // For a continuous distribution, a probability is an area unde
  '1mhdhr61iex': R`في التوزيع المتصل، الاحتمال مساحة تحت منحنى الكثافة.`,
  // Inference starts from a sample summarised by its mean and st
  '1lgg9vh00wv': R`يبدأ الاستدلال الإحصائي من عيّنة ملخّصة بوسطها وانحرافها المعياري.`,
  // Confidence intervals and hypothesis tests rely on the normal
  '1s8qoieebkn': R`فترات الثقة واختبارات الفرضيات تعتمد على التوزيع الطبيعي وتوزيع $t$.`,
  // Proofs, sets and relations in discrete mathematics are writt
  'pq7m9yqcpf': R`البراهين والمجموعات والعلاقات في الرياضيات المتقطعة تُكتب بلغة المنطق.`,
  // Counting principles are a central part of discrete mathemati
  'ao11coj5na': R`مبادئ العدّ جزء أساسي من الرياضيات المتقطعة.`,
  // Newton's method uses the derivative to home in on a root.
  '175iqzjsa7u': R`طريقة نيوتن تستخدم المشتقة للاقتراب من الجذر خطوة بعد خطوة.`,
  // The trapezoidal rule and Simpson's rule approximate definite
  '2cephu1nsk4': R`قاعدة شبه المنحرف وقاعدة سمبسون تقرّبان التكاملات المحددة.`,
  // Gradient, divergence and curl are built from partial derivat
  '23gedxxnvwc': R`التدرّج والتباعد والدوران تُبنى من المشتقات الجزئية، وتكاملات المنحنى والسطح توسّع التكاملات المتعددة.`,
  // The Laplace transform turns a differential equation into an 
  '19mvnrfi5rk': R`تحويل لابلاس يحوّل المعادلة التفاضلية إلى معادلة جبرية.`,
  // The Laplace transform is an improper integral, often worked 
  'da64d9071l': R`تحويل لابلاس تكامل معتلّ، يُحسب غالبًا بالتكامل بالتجزئة.`,
});
