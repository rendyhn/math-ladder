/* ladder: topic prerequisites and what they lead to */
addUI('id', {
  ladderHead: R`Posisi topik ini`,
  buildsOn: R`Dibangun di atas`,
  leadsTo: R`Membuka jalan ke`,
  ladderStart: R`Titik awal: tidak perlu topik sebelumnya.`,
  ladderTop: R`Puncak cabang tangga ini.`,
});
addT('id', {
  // Column addition and subtraction line digits up by place valu
  'qeiew1mndp': R`Penjumlahan dan pengurangan bersusun menyejajarkan angka menurut nilai tempat, dan menyimpan memindahkan satu puluhan ke tempat berikutnya.`,
  // Multiplication is repeated addition, and division undoes mul
  '1jpm1intgmb': R`Perkalian adalah penjumlahan berulang, dan pembagian membatalkan perkalian.`,
  // The order of operations decides which of $+$, $-$, $\times$ 
  '5wxy40oljq': R`Urutan operasi menentukan mana di antara $+$, $-$, $\times$ dan $\div$ yang dikerjakan lebih dulu dalam perhitungan yang panjang.`,
  // Factors and multiples are the numbers that divide a number e
  '10sha3zlzp3': R`Faktor dan kelipatan adalah bilangan yang membagi habis suatu bilangan, atau yang diperoleh dengan mengalikannya.`,
  // Simplifying fractions and finding a common denominator use c
  '4wwa4bmv2r': R`Menyederhanakan pecahan dan menyamakan penyebut memakai faktor persekutuan dan kelipatan persekutuan terkecil.`,
  // Decimals extend place value to the right of the ones place: 
  'sh9lbghpe9': R`Desimal memperluas nilai tempat ke kanan tempat satuan: persepuluhan, perseratusan, perseribuan.`,
  // A decimal is a fraction whose denominator is 10, 100, 1000 a
  'irkoozgpjt': R`Desimal adalah pecahan yang penyebutnya 10, 100, 1000, dan seterusnya.`,
  // Percent means “out of a hundred”: 25% is the fraction $\frac
  'p34b5uh54s': R`Persen berarti “per seratus”: 25% adalah pecahan $\frac{25}{100} = \frac{1}{4}$.`,
  // Percentages are converted to decimals to calculate with them
  '231i108op1x': R`Persen diubah menjadi desimal untuk dihitung: 8% dari suatu harga adalah $0{,}08 \times$ harga itu.`,
  // Converting between metric units multiplies or divides by 10,
  'o2gl9i6l2': R`Mengubah satuan metrik berarti mengalikan atau membagi dengan 10, 100, atau 1000, sehingga koma desimal bergeser.`,
  // The area of a rectangle is length times width.
  '25wcbpclu4': R`Luas persegi panjang adalah panjang kali lebar.`,
  // Lengths and areas are measured in units such as cm and cm², 
  '2634ih96gsm': R`Panjang dan luas diukur dalam satuan seperti cm dan cm², yang harus disamakan sebelum menghitung.`,
  // The volume of a prism is the area of its base times its heig
  'kwo8mlyup8': R`Volume prisma adalah luas alas kali tinggi, dan luas permukaan menjumlahkan luas semua sisinya.`,
  // Angle facts, such as “angles on a straight line add up to 18
  '1v95ytyiz1t': R`Fakta sudut, seperti “sudut pada garis lurus berjumlah 180°”, dipakai dengan menjumlahkan dan mengurangkan sudut.`,
  // The mean is the total of the values divided by how many valu
  'bcjde87onv': R`Rata-rata adalah jumlah semua nilai dibagi banyaknya nilai.`,
  // Integers extend the number line below zero; adding and subtr
  'uhivuskhe4': R`Bilangan bulat memperpanjang garis bilangan ke bawah nol; menjumlahkan dan mengurangkannya memakai ide yang sama, dengan tanda.`,
  // A power is repeated multiplication: $2^5 = 2 \times 2 \times
  '14qn14hzx13': R`Perpangkatan adalah perkalian berulang: $2^5 = 2 \times 2 \times 2 \times 2 \times 2$.`,
  // Scientific notation writes a number as $a \times 10^n$, usin
  'hr39w4wzvv': R`Notasi ilmiah menulis bilangan sebagai $a \times 10^n$, memakai perpangkatan sepuluh.`,
  // The number $a$ in $a \times 10^n$ is a decimal from 1 up to 
  'qonxs1x7d1': R`Bilangan $a$ pada $a \times 10^n$ adalah desimal dari 1 sampai kurang dari 10.`,
  // A ratio compares quantities the way a fraction does, and a p
  '23aa0qkt117': R`Perbandingan membandingkan besaran seperti pecahan, dan proporsi menyatakan dua pecahan sama besar.`,
  // Letters stand for numbers that may be negative, so expressio
  'r03wloegxg': R`Huruf mewakili bilangan yang bisa negatif, jadi bentuk aljabar disederhanakan dengan aturan bilangan bertanda.`,
  // Expanding brackets and substituting values into an expressio
  '21h80w1us7d': R`Menjabarkan tanda kurung dan menyubstitusikan nilai ke bentuk aljabar mengikuti urutan operasi.`,
  // Solving an equation means simplifying the expressions on eac
  'dsfd6oq44q': R`Menyelesaikan persamaan berarti menyederhanakan bentuk di setiap ruas, lalu membatalkan operasinya.`,
  // Inequalities are solved like equations, except that the sign
  'chsc7bja9g': R`Pertidaksamaan diselesaikan seperti persamaan, kecuali tandanya berbalik saat dikali atau dibagi bilangan negatif.`,
  // Sets of factors, multiples and primes are typical first exam
  '1rnu9h0j44t': R`Himpunan faktor, kelipatan, dan bilangan prima adalah contoh awal yang umum untuk himpunan dan diagram Venn.`,
  // The graph of a linear equation in $x$ and $y$ is a straight 
  '1mojvmv6g25': R`Grafik persamaan linear dalam $x$ dan $y$ berupa garis lurus, dan setiap titik pada garis itu adalah penyelesaiannya.`,
  // The gradient of a line is a rate: the change in $y$ for each
  'ofsdmnc7db': R`Gradien garis adalah laju: perubahan $y$ untuk setiap satu satuan perubahan $x$.`,
  // Substitution and elimination turn a system into a single lin
  'zd8khoatau': R`Substitusi dan eliminasi mengubah sistem menjadi satu persamaan linear dengan satu variabel.`,
  // The solution of a system of two linear equations is the poin
  '1euaco9nn3z': R`Penyelesaian sistem dua persamaan linear adalah titik potong kedua garisnya.`,
  // The theorem $a^2 + b^2 = c^2$ is worked with squares and squ
  '296jzhjbpfo': R`Teorema $a^2 + b^2 = c^2$ dikerjakan dengan kuadrat dan akar kuadrat.`,
  // The theorem is a fact about right-angled triangles and which
  '27afy2qgea8': R`Teorema ini berlaku untuk segitiga siku-siku, dan penting mengenali sisi mana yang merupakan hipotenusa.`,
  // Circumference and the area of a circle extend perimeter and 
  '1c7m4ao6ge7': R`Keliling dan luas lingkaran memperluas konsep keliling dan luas ke bangun yang melengkung.`,
  // Cylinders, cones and spheres are round, so their formulas us
  '4ai3wcl267': R`Tabung, kerucut, dan bola berbentuk bulat, jadi rumusnya memakai $\pi$ dan jari-jari.`,
  // The volume and surface area of prisms are extended to cylind
  'fxdb4tsyw2': R`Volume dan luas permukaan prisma diperluas ke tabung, kerucut, limas, dan bola.`,
  // Mean, median and mode are joined by measures of spread such 
  '9a6kx1e4yh': R`Rata-rata, median, dan modus dilengkapi ukuran penyebaran seperti jangkauan dan kuartil.`,
  // A probability is a fraction: favourable outcomes out of all 
  '17gd79svwx2': R`Peluang adalah pecahan: banyak hasil yang diharapkan dibagi banyak semua hasil yang sama mungkin.`,
  // Profit, loss, discount, tax and interest are all percentages
  '6oqshsyd21': R`Untung, rugi, diskon, pajak, dan bunga semuanya adalah persentase dari suatu nilai.`,
  // The $n$th term of a pattern is an algebraic expression in $n
  's18kq836ov': R`Suku ke-$n$ suatu pola adalah bentuk aljabar dalam $n$.`,
  // Similar shapes have all pairs of corresponding sides in the 
  '1673zqtap3t': R`Bangun yang sebangun memiliki semua pasangan sisi bersesuaian dengan perbandingan yang sama.`,
  // Transformations and similarity keep angles the same, so angl
  'nhm1k0jf87': R`Transformasi dan kesebangunan tidak mengubah besar sudut, jadi fakta sudut dipakai untuk mengenali bangun yang sebangun.`,
  // Factorising and completing the square are skills of rearrang
  '2awcjz6ag0h': R`Pemfaktoran dan melengkapkan kuadrat adalah keterampilan mengubah bentuk aljabar.`,
  // Once a quadratic is factorised, each factor set to zero is a
  'axjxa88p8j': R`Setelah persamaan kuadrat difaktorkan, setiap faktor yang disamakan dengan nol menjadi persamaan linear.`,
  // The roots of a quadratic equation are where its parabola cro
  '3ai29ta3bd': R`Akar-akar persamaan kuadrat adalah titik-titik tempat parabolanya memotong sumbu $x$.`,
  // Graphs, intercepts and the coordinate plane carry over from 
  '2fe079f86oc': R`Grafik, titik potong, dan bidang koordinat berlanjut dari garis lurus ke parabola.`,
  // A linear function is the first example of a rule that gives 
  '1dyq2iw6ttf': R`Fungsi linear adalah contoh pertama aturan yang memberi tepat satu keluaran untuk setiap masukan.`,
  // A logarithm is an exponent, so the laws of exponents become 
  'bhyxgzt11y': R`Logaritma adalah pangkat, jadi sifat-sifat perpangkatan menjadi sifat-sifat logaritma.`,
  // The logarithm $\log_a x$ is the inverse function of the expo
  'dhaomm7cmc': R`Logaritma $\log_a x$ adalah fungsi invers dari fungsi eksponen $a^x$.`,
  // Arithmetic and geometric sequences make number patterns prec
  '1i0ckjdy4m3': R`Barisan aritmetika dan geometri membuat pola bilangan menjadi tepat dan menambahkan rumus jumlahnya.`,
  // Trigonometric ratios compare the sides of a right-angled tri
  '2dkcig1f7s5': R`Perbandingan trigonometri membandingkan sisi-sisi segitiga siku-siku, dan pada lingkaran satuan $\sin^2\theta + \cos^2\theta = 1$ adalah teorema Pythagoras.`,
  // A trigonometric ratio depends only on the angle because righ
  '28o7ie6opej': R`Perbandingan trigonometri hanya bergantung pada sudut karena segitiga siku-siku dengan sudut yang sama pasti sebangun.`,
  // Identities are built from the definitions of sine, cosine an
  '11vomgqg97n': R`Identitas dibangun dari definisi sinus, kosinus, dan tangen pada lingkaran satuan.`,
  // Many trigonometric equations turn into a quadratic in $\sin 
  '1aaktv1yqz7': R`Banyak persamaan trigonometri berubah menjadi persamaan kuadrat dalam $\sin x$ atau $\cos x$.`,
  // The sine rule and cosine rule extend the trigonometric ratio
  '13me5uymk2c': R`Aturan sinus dan aturan kosinus memperluas perbandingan trigonometri ke segitiga yang tidak siku-siku.`,
  // A quadratic is a polynomial of degree 2; polynomial division
  'da1pvgcuq2': R`Persamaan kuadrat adalah polinomial berderajat 2; pembagian polinomial dan teorema sisa memperluas cara pemfaktorannya.`,
  // A system of linear equations can be written as one matrix eq
  'e0bc8izwug': R`Sistem persamaan linear dapat ditulis sebagai satu persamaan matriks $AX = B$ dan diselesaikan dengan matriks invers.`,
  // The magnitude of a vector is found with Pythagoras' theorem.
  '12j5n3poamr': R`Panjang (besar) vektor dihitung dengan teorema Pythagoras.`,
  // The angle between two vectors, and splitting a vector into c
  '1rc52s5n9t0': R`Sudut antara dua vektor dan penguraian vektor menjadi komponen memakai trigonometri.`,
  // A limit describes the value a function's output approaches a
  '15k09f0soai': R`Limit menggambarkan nilai yang didekati keluaran fungsi ketika masukannya mendekati suatu titik.`,
  // The derivative is defined as a limit: the gradient between t
  '2cxg9hybda1': R`Turunan didefinisikan sebagai limit: gradien antara dua titik ketika keduanya saling mendekat.`,
  // A derivative is the gradient of the tangent line, extending 
  '201djzmlsb3': R`Turunan adalah gradien garis singgung, memperluas gradien garis lurus ke kurva.`,
  // Integration reverses differentiation; this is the Fundamenta
  'ruft2tqdak': R`Integral membalik turunan; inilah Teorema Dasar Kalkulus.`,
  // A definite integral measures the area under a curve by addin
  'sp8kuu3a74': R`Integral tentu mengukur luas di bawah kurva dengan menjumlahkan persegi panjang yang sangat tipis.`,
  // Counting rests on the multiplication principle: the numbers 
  '1i0nrfbe5bb': R`Pencacahan bertumpu pada aturan perkalian: banyak pilihan di setiap langkah dikalikan.`,
  // Rules for combined, independent and conditional events build
  '2f23y9h56n3': R`Aturan kejadian majemuk, saling bebas, dan bersyarat dibangun dari peluang sebagai pecahan hasil.`,
  // Permutations and combinations count the outcomes when there 
  'c88bt9u9sf': R`Permutasi dan kombinasi menghitung banyak hasil ketika terlalu banyak untuk didaftar.`,
  // Variance, standard deviation and distributions go further th
  'cnqeudl3aq': R`Varians, simpangan baku, dan distribusi melangkah lebih jauh dari jangkauan dan kuartil.`,
  // Distance, midpoint and gradient in the coordinate plane lead
  '64oncg04w1': R`Jarak, titik tengah, dan gradien pada bidang koordinat menghasilkan persamaan garis dan lingkaran.`,
  // The equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, is 
  '1n2jj8p5uea': R`Persamaan lingkaran $(x - a)^2 + (y - b)^2 = r^2$ adalah teorema Pythagoras untuk jarak ke pusat.`,
  // Constraints are linear inequalities, and together their grap
  'rsywiledqf': R`Kendala berupa pertidaksamaan linear, dan grafik gabungannya membentuk daerah layak.`,
  // The boundaries of the feasible region and the level lines of
  '1hwyr5azmza': R`Batas daerah layak dan garis selidik fungsi tujuan berupa garis lurus.`,
  // “And”, “or” and “not” in logic match intersection, union and
  '1v8ndsdqg9i': R`“Dan”, “atau”, dan “tidak” dalam logika sepadan dengan irisan, gabungan, dan komplemen himpunan.`,
  // The chain, product and quotient rules and implicit different
  '2fbt3zsv0xe': R`Aturan rantai, perkalian, pembagian, serta turunan implisit memperluas aturan dasar turunan.`,
  // Differentiating $e^x$ and $\ln x$, and logarithmic different
  '1oh2ya4wsji': R`Menurunkan $e^x$ dan $\ln x$, serta turunan logaritmik, memakai sifat-sifat perpangkatan dan logaritma.`,
  // Optimisation, related rates and curve sketching apply the ru
  '284ysrnl7bq': R`Optimasi, laju yang berkaitan, dan sketsa kurva menerapkan aturan turunan pada masalah nyata.`,
  // Substitution and integration by parts extend the basic antid
  '2gi28jy2yt1': R`Substitusi dan integral parsial memperluas antiturunan dasar.`,
  // Substitution reverses the chain rule, and integration by par
  '7zalhvgsd9': R`Substitusi membalik aturan rantai, dan integral parsial membalik aturan perkalian.`,
  // Areas, volumes of revolution and arc lengths all lead to int
  'lf24voao9c': R`Luas, volume benda putar, dan panjang busur semuanya menghasilkan integral yang harus dihitung.`,
  // Infinite series continue the sums of arithmetic and geometri
  '1hviqnspnff': R`Deret tak hingga meneruskan jumlah barisan aritmetika dan geometri tanpa akhir.`,
  // A series converges when the limit of its partial sums exists
  '15f8uacuddq': R`Suatu deret konvergen jika limit jumlah parsialnya ada.`,
  // A partial derivative differentiates with respect to one vari
  '2g4278341z3': R`Turunan parsial menurunkan terhadap satu variabel sambil menganggap variabel lain sebagai konstanta.`,
  // The gradient and directional derivatives are vectors.
  '19utg29r90g': R`Gradien dan turunan berarah adalah vektor.`,
  // A differential equation is an equation linking a function to
  '2ds3dtqg3pn': R`Persamaan diferensial adalah persamaan yang menghubungkan suatu fungsi dengan turunan-turunannya.`,
  // Solving a differential equation usually ends with an integra
  'saspoe9ooe': R`Menyelesaikan persamaan diferensial biasanya diakhiri dengan integrasi.`,
  // Linear algebra studies matrices as maps, with determinants, 
  'ot9xqwxvdo': R`Aljabar linear mempelajari matriks sebagai pemetaan, dengan determinan, invers, rank, dan nilai eigen.`,
  // Vector spaces generalise the vectors of geometry to any numb
  '1cobeg25pvp': R`Ruang vektor memperluas vektor dari geometri ke sembarang banyak dimensi.`,
  // Complex numbers first appear as the roots of a quadratic wit
  'tls844q11g': R`Bilangan kompleks pertama kali muncul sebagai akar persamaan kuadrat dengan diskriminan negatif.`,
  // The polar form describes a complex number by its modulus and
  '1z3ue7jl9zc': R`Bentuk polar menyatakan bilangan kompleks dengan modulus dan sudut, memakai sinus dan kosinus.`,
  // The binomial, Poisson and normal distributions are built on 
  '19602jed52d': R`Distribusi binomial, Poisson, dan normal dibangun dari aturan peluang dan pencacahan.`,
  // For a continuous distribution, a probability is an area unde
  '1mhdhr61iex': R`Pada distribusi kontinu, peluang adalah luas di bawah kurva fungsi kepadatan.`,
  // Inference starts from a sample summarised by its mean and st
  '1lgg9vh00wv': R`Inferensi berawal dari sampel yang diringkas dengan rata-rata dan simpangan bakunya.`,
  // Confidence intervals and hypothesis tests rely on the normal
  '1s8qoieebkn': R`Selang kepercayaan dan uji hipotesis bertumpu pada distribusi normal dan distribusi $t$.`,
  // Proofs, sets and relations in discrete mathematics are writt
  'pq7m9yqcpf': R`Pembuktian, himpunan, dan relasi dalam matematika diskret ditulis dalam bahasa logika.`,
  // Counting principles are a central part of discrete mathemati
  'ao11coj5na': R`Prinsip pencacahan adalah bagian inti matematika diskret.`,
  // Newton's method uses the derivative to home in on a root.
  '175iqzjsa7u': R`Metode Newton memakai turunan untuk mendekati akar secara bertahap.`,
  // The trapezoidal rule and Simpson's rule approximate definite
  '2cephu1nsk4': R`Aturan trapesium dan aturan Simpson menghampiri nilai integral tentu.`,
  // Gradient, divergence and curl are built from partial derivat
  '23gedxxnvwc': R`Gradien, divergensi, dan curl dibangun dari turunan parsial, dan integral garis serta integral permukaan memperluas integral lipat.`,
  // The Laplace transform turns a differential equation into an 
  '19mvnrfi5rk': R`Transformasi Laplace mengubah persamaan diferensial menjadi persamaan aljabar.`,
  // The Laplace transform is an improper integral, often worked 
  'da64d9071l': R`Transformasi Laplace adalah integral tak wajar, yang sering dihitung dengan integral parsial.`,
});
