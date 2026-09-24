/* Bahasa Indonesia — antarmuka dan nama topik */
addUI('id', {
  brandTag: R`SD → Perguruan Tinggi`,
  searchPh: R`Cari di antara ⟦0⟧ topik`,
  searchLabel: R`Cari topik`,
  showTopics: R`Tampilkan topik`,
  language: R`Bahasa`,
  mixedReview: R`Latihan campuran`,
  reviewTitle: R`⟦0⟧: latihan campuran`,
  reviewBlurb: R`Satu lembar kerja berisi soal dari semua ⟦0⟧ topik di jenjang ini, cocok untuk mengulang materi sebelum ujian.`,
  heroEyebrow: R`Matematika · Dari SD sampai kuliah`,
  heroTitle: R`Dari berhitung sampai nilai eigen, selangkah demi selangkah.`,
  heroLede: R`⟦0⟧ topik dalam empat jenjang. Setiap topik punya materi dan lembar latihan yang angkanya dibuat baru setiap kali dibuka, lengkap dengan kunci jawaban yang bisa dibuka-tutup dan halaman siap cetak.`,
  startWith: R`Mulai dari ⟦0⟧`,
  tryReview: R`Coba latihan campuran`,
  levels: R`Jenjang`,
  nTopics: R`⟦0⟧ topik`,
  reviewLink: R`Lembar latihan campuran →`,
  freshQ: R`Soal baru`,
  anotherQ: R`Soal lain`,
  showAnswer: R`Lihat jawaban`,
  hideAnswer: R`Sembunyikan jawaban`,
  answerColon: R`Jawaban:`,
  home: R`Beranda`,
  breadcrumb: R`Navigasi halaman`,
  topicPos: R`Topik ⟦0⟧ dari ⟦1⟧`,
  lesson: R`Materi`,
  practice: R`Latihan`,
  topicSections: R`Bagian topik`,
  printLesson: R`Cetak materi`,
  practiseTopic: R`Latihan: ⟦0⟧ →`,
  prev: R`← Sebelumnya`,
  next: R`Berikutnya →`,
  otherTopics: R`Topik lain`,
  questions: R`Jumlah soal`,
  qType: R`Jenis soal`,
  modeMixed: R`Campuran`,
  modeMc: R`Pilihan ganda`,
  modeFill: R`Isian`,
  newSheet: R`Lembar baru`,
  printQ: R`Cetak soal`,
  worksheet: R`Lembar kerja`,
  practiceSheet: R`⟦0⟧ · Lembar latihan`,
  sheet: R`Lembar`,
  type: R`Jenis`,
  name: R`Nama`,
  klass: R`Kelas`,
  date: R`Tanggal`,
  score: R`Nilai`,
  fillNote: R`Jawaban isian bisa berupa bilangan bulat, desimal dengan koma (2,5), pecahan seperti <code>3/4</code>, dan bentuk seperti <code>2sqrt(3)</code> atau <code>5pi</code>. Jika jawabannya lebih dari satu, pisahkan dengan titik koma (;).`,
  checkAnswers: R`Periksa jawaban`,
  clearAnswers: R`Hapus jawaban`,
  answerKey: R`Kunci jawaban`,
  showKey: R`Tampilkan kunci jawaban`,
  hideKey: R`Sembunyikan kunci jawaban`,
  printKey: R`Cetak kunci jawaban`,
  printBoth: R`Cetak soal + kunci jawaban`,
  keyHead: R`Kunci jawaban · ⟦0⟧`,
  sheetNo: R`Lembar no. ⟦0⟧`,
  choicesFor: R`Pilihan untuk soal ⟦0⟧`,
  answer: R`Jawaban`,
  typeAnswer: R`Ketik jawabanmu`,
  qMc: R`Pilihan ganda`,
  qFill: R`Isian`,
  notAnswered: R`Belum dijawab`,
  correct: R`Benar`,
  notQuite: R`Belum tepat`,
  scoreLine: R`⟦0⟧ dari ⟦1⟧ benar`,
  unanswered: R`⟦0⟧ belum dijawab`,
  source: R`Sumber:`,
  pageOf: R`Halaman ⟦0⟧ dari ⟦1⟧`,
  printToast: R`Pilih “Simpan sebagai PDF” di jendela cetak untuk mengekspor. Jika jendela cetak tidak muncul, penampil ini memblokir pencetakan — buka file HTML yang diunduh di Chrome atau Edge lalu cetak dari sana.`,
  langFail: R`Bahasa ini tidak dapat dimuat, jadi halaman ditampilkan dalam bahasa Inggris.`,
});
addMeta('id', {
  levels: {
    elementary: [R`Sekolah Dasar`, R`SD`, R`Kelas 1–6`, R`Pemahaman bilangan, empat operasi hitung, pecahan, desimal, persen, pengukuran, dan dasar-dasar geometri.`],
    junior: [R`Sekolah Menengah Pertama`, R`SMP`, R`Kelas 7–9`, R`Bilangan bulat, perpangkatan, aljabar dan persamaan linear, himpunan, lingkaran dan bangun ruang, serta dasar statistika dan peluang.`],
    senior: [R`Sekolah Menengah Atas`, R`SMA`, R`Kelas 10–12`, R`Persamaan kuadrat, fungsi, logaritma, barisan, trigonometri, matriks, vektor, kalkulus, peluang, statistika, dan logika.`],
    university: [R`Perguruan Tinggi`, R`Kuliah`, R`S1 / Sarjana`, R`Kalkulus I–III, deret, persamaan diferensial, aljabar linear, bilangan kompleks, probabilitas dan statistika, matematika diskrit, metode numerik, dan transformasi.`],
  },
  topics: {
    'place-value': [R`Nilai Tempat dan Pembulatan`, R`Nilai angka, bentuk panjang, membandingkan bilangan cacah, dan pembulatan.`],
    'add-sub': [R`Penjumlahan dan Pengurangan`, R`Penjumlahan bersusun dengan menyimpan, pengurangan dengan meminjam, bilangan yang hilang, dan soal cerita.`],
    'mul-div': [R`Perkalian dan Pembagian`, R`Perkalian dasar, perkalian bersusun, pembagian dengan dan tanpa sisa.`],
    'order-ops': [R`Urutan Operasi Hitung`, R`Kurung dan pangkat, lalu kali dan bagi, lalu tambah dan kurang.`],
    'factors': [R`Faktor, Kelipatan, dan Bilangan Prima`, R`Faktor dan kelipatan, bilangan prima, faktorisasi prima, FPB dan KPK.`],
    'fractions': [R`Pecahan`, R`Pecahan senilai, menyederhanakan, membandingkan, pecahan campuran, dan keempat operasi hitung.`],
    'decimals': [R`Desimal`, R`Persepuluhan, perseratusan, perseribuan; membandingkan, membulatkan, dan berhitung dengan desimal.`],
    'percent': [R`Persen`, R`Persen dari suatu jumlah, mengubah bentuk, diskon, dan persentase perubahan.`],
    'measurement': [R`Pengukuran dan Satuan`, R`Satuan metrik untuk panjang, berat, dan volume, serta perhitungan waktu.`],
    'perimeter-area': [R`Keliling dan Luas`, R`Persegi panjang, persegi, segitiga, jajargenjang, trapesium, dan bangun gabungan.`],
    'volume-basic': [R`Volume dan Luas Permukaan`, R`Volume kubus dan balok, kapasitas dalam liter, dan luas permukaan kotak.`],
    'angles-shapes': [R`Sudut dan Bangun Datar`, R`Jenis-jenis sudut, sudut pada garis lurus dan pada segi banyak, serta sifat-sifat segitiga.`],
    'data-basic': [R`Data dan Rata-rata`, R`Membaca tabel dan diagram; rata-rata, median, modus, dan jangkauan.`],
    'integers': [R`Bilangan Bulat`, R`Bilangan negatif pada garis bilangan dan aturan tanda dalam keempat operasi hitung.`],
    'exponents': [R`Pangkat dan Akar`, R`Perpangkatan, sifat-sifat pangkat, pangkat nol dan negatif, akar kuadrat dan akar pangkat tiga, bentuk akar.`],
    'sci-notation': [R`Notasi Ilmiah`, R`Menulis bilangan yang sangat besar dan sangat kecil dalam bentuk a × 10ⁿ dan berhitung dengannya.`],
    'ratio': [R`Perbandingan, Laju, dan Proporsi`, R`Menyederhanakan perbandingan, membagi menurut perbandingan, perbandingan senilai dan berbalik nilai, skala peta, dan kecepatan.`],
    'algebra-expr': [R`Bentuk Aljabar`, R`Suku sejenis, menjabarkan kurung, memfaktorkan, substitusi, dan identitas.`],
    'linear-eq': [R`Persamaan Linear`, R`Persamaan satu variabel dengan kurung, pecahan, dan variabel di kedua ruas; soal cerita.`],
    'inequalities': [R`Pertidaksamaan Linear`, R`Tanda pertidaksamaan, garis bilangan, menyelesaikan pertidaksamaan, dan aturan membalik tanda.`],
    'sets': [R`Himpunan dan Diagram Venn`, R`Notasi himpunan, himpunan bagian, gabungan, irisan, komplemen, dan menghitung dengan diagram Venn.`],
    'linear-functions': [R`Fungsi Linear dan Grafiknya`, R`Koordinat, gradien, titik potong sumbu, persamaan garis, garis sejajar dan tegak lurus.`],
    'systems': [R`Sistem Persamaan Linear`, R`Menyelesaikan dua persamaan dua variabel dengan substitusi dan eliminasi; soal cerita.`],
    'pythagoras': [R`Teorema Pythagoras`, R`Sisi segitiga siku-siku, tripel Pythagoras, jarak, dan uji sudut siku-siku.`],
    'circles': [R`Lingkaran`, R`Keliling, luas, busur dan juring, serta sudut pada lingkaran.`],
    'solids': [R`Luas Permukaan dan Volume Bangun Ruang`, R`Prisma, tabung, limas, kerucut, dan bola.`],
    'statistics-jh': [R`Statistika: Ukuran Pemusatan dan Penyebaran`, R`Rata-rata, median, dan modus dari daftar dan tabel frekuensi, serta pengaruh data baru.`],
    'probability-jh': [R`Peluang`, R`Ruang sampel, peluang suatu kejadian, kejadian komplemen, dan frekuensi harapan.`],
    'social-arith': [R`Aritmetika Sosial: Untung, Diskon, dan Bunga`, R`Untung dan rugi, persentase untung, diskon dan pajak, bunga tunggal, bruto dan neto.`],
    'patterns': [R`Pola Bilangan dan Barisan`, R`Pola aritmetika dan geometri, rumus suku ke-n, dan barisan khusus.`],
    'similarity': [R`Transformasi dan Kesebangunan`, R`Translasi, refleksi, rotasi, dan dilatasi; bangun sebangun dan faktor skala.`],
    'quadratics': [R`Persamaan Kuadrat`, R`Memfaktorkan, melengkapkan kuadrat, rumus abc, diskriminan, jumlah dan hasil kali akar.`],
    'quad-functions': [R`Fungsi Kuadrat dan Parabola`, R`Titik puncak, sumbu simetri, bentuk puncak, nilai maksimum dan minimum, serta penerapannya.`],
    'functions': [R`Fungsi, Komposisi, dan Invers`, R`Domain dan range, komposisi fungsi, fungsi invers, dan fungsi sepotong-sepotong.`],
    'exp-log': [R`Eksponen dan Logaritma`, R`Pangkat pecahan, sifat-sifat logaritma, persamaan eksponen dan logaritma, pertumbuhan.`],
    'sequences': [R`Barisan dan Deret`, R`Barisan aritmetika dan geometri, jumlah suku, deret geometri tak hingga, dan notasi sigma.`],
    'trig-basics': [R`Trigonometri: Perbandingan dan Lingkaran Satuan`, R`SOH-CAH-TOA, nilai eksak, radian, lingkaran satuan, dan sudut elevasi.`],
    'trig-identities': [R`Identitas dan Persamaan Trigonometri`, R`Identitas Pythagoras, rumus jumlah sudut dan sudut rangkap; menyelesaikan persamaan trigonometri.`],
    'triangle-rules': [R`Aturan Sinus, Aturan Kosinus, dan Luas Segitiga`, R`Menyelesaikan segitiga sembarang dengan aturan sinus dan kosinus, serta mencari luasnya.`],
    'polynomials': [R`Polinomial dan Teorema Sisa`, R`Derajat dan operasi, pembagian polinomial, teorema sisa dan teorema faktor, rumus Vieta untuk persamaan kubik.`],
    'matrices': [R`Matriks`, R`Operasi matriks, perkalian, determinan dan invers matriks 2×2.`],
    'vectors': [R`Vektor`, R`Komponen, panjang vektor, operasi vektor, hasil kali titik, dan sudut antara dua vektor.`],
    'limits': [R`Limit`, R`Substitusi langsung, bentuk tak tentu, limit di tak hingga, limit trigonometri, dan kekontinuan.`],
    'derivatives': [R`Turunan`, R`Turunan sebagai gradien, aturan pangkat, garis singgung, titik stasioner, dan optimasi.`],
    'integrals': [R`Integral`, R`Antiturunan, aturan pangkat untuk integral, integral tentu, dan luas daerah.`],
    'combinatorics': [R`Kaidah Pencacahan, Permutasi, dan Kombinasi`, R`Aturan perkalian, faktorial, permutasi, kombinasi, dan binomial Newton.`],
    'probability-sh': [R`Peluang: Aturan dan Peluang Bersyarat`, R`Aturan penjumlahan dan perkalian, kejadian saling bebas, peluang bersyarat, dan teorema Bayes.`],
    'statistics-sh': [R`Statistika: Penyebaran dan Distribusi`, R`Kuartil dan jangkauan antarkuartil, pencilan, varians dan simpangan baku, data berkelompok, dan transformasi data.`],
    'conics': [R`Geometri Analitik dan Lingkaran`, R`Titik tengah dan jarak, persamaan lingkaran, bentuk umum, garis singgung, dan parabola.`],
    'linear-programming': [R`Program Linear`, R`Kendala, daerah penyelesaian, fungsi objektif, dan metode titik pojok.`],
    'logic': [R`Logika Matematika`, R`Pernyataan, perangkai, tabel kebenaran, konvers dan kontraposisi, kuantor, dan penarikan kesimpulan yang sah.`],
    'diff-techniques': [R`Teknik Turunan`, R`Aturan perkalian, pembagian, dan rantai; turunan fungsi eksponen dan logaritma; turunan implisit.`],
    'diff-applications': [R`Penerapan Turunan`, R`Aturan L'Hôpital, optimasi, laju yang berkaitan, aproksimasi linear, kecekungan, dan Teorema Nilai Rata-rata.`],
    'integration-techniques': [R`Teknik Integrasi`, R`Substitusi, integral parsial, pecahan parsial, integral trigonometri, dan integral tak wajar.`],
    'integral-applications': [R`Penerapan Integral`, R`Luas di antara dua kurva, volume benda putar, nilai rata-rata, panjang busur, dan usaha.`],
    'series': [R`Barisan dan Deret Tak Hingga`, R`Uji kekonvergenan, deret geometri dan teleskopik, deret pangkat, deret Taylor dan Maclaurin.`],
    'multivariable': [R`Kalkulus Peubah Banyak`, R`Turunan parsial, gradien, turunan berarah, titik kritis, integral lipat dua, dan pengali Lagrange.`],
    'ode': [R`Persamaan Diferensial`, R`Persamaan orde satu yang terpisahkan dan linear, pertumbuhan dan peluruhan, serta persamaan linear orde dua.`],
    'linear-algebra': [R`Aljabar Linear`, R`Determinan, rank, sistem linear, kebebasan linear, nilai eigen, dan vektor eigen.`],
    'complex': [R`Bilangan Kompleks`, R`Berhitung dengan i, sekawan, modulus dan argumen, bentuk polar, dan teorema De Moivre.`],
    'distributions': [R`Distribusi Probabilitas`, R`Variabel acak, nilai harapan dan varians, distribusi binomial, Poisson, dan normal.`],
    'inference': [R`Inferensi Statistik`, R`Distribusi sampling, selang kepercayaan, uji hipotesis, jenis galat, dan regresi.`],
    'discrete': [R`Matematika Diskrit`, R`Aritmetika modular, algoritma Euclid, prinsip pencacahan, relasi rekurensi, dan teori graf.`],
    'numerical': [R`Metode Numerik`, R`Metode bagi dua dan Newton, aturan trapesium dan Simpson, metode Euler, dan galat.`],
    'vector-calculus': [R`Kalkulus Vektor`, R`Medan vektor, divergensi dan curl, medan konservatif, integral garis, dan teorema Green.`],
    'laplace': [R`Transformasi Laplace`, R`Tabel transformasi, kelinearan, pergeseran, transformasi invers, dan penyelesaian masalah nilai awal.`],
  },
});

/* Bahasa Indonesia — inti + SD (nilai tempat → faktor) */
addT('id', {
  // core
  '1hnygwzeeez': R`Benar`,
  '12u8s6vu2gj': R`Salah`,
  '1mc3pmcca9i': R`Kurangi setiap bagian dengan ⟦0⟧`,
  '1flhu7k9ohj': R`Tambahkan ⟦0⟧ ke setiap bagian`,
  '1g9usaftmli': R`Kurangi kedua ruas dengan ⟦0⟧`,
  'rcyxvbe5bx': R`Tambahkan ⟦0⟧ ke kedua ruas`,
  'fc0sowzn7c': R`Konsep utama`,
  '1oy7dzvank8': R`Contoh soal`,
  '1q1jscvjv55': R`Hati-hati`,
  '1a2zghfpw7a': R`Ketik pecahan seperti 7/12 (pecahan tidak murni juga boleh).`,
  '2wu7e9ekt1': R`Persegi panjang dengan panjang l dan lebar w, segitiga dengan alas b dan tinggi h, serta trapesium dengan sisi sejajar a dan b dan tinggi h`,

  // place-value
  'i1ejiqva2l': R`
<p>Sistem bilangan kita memakai sepuluh angka, yaitu 0 sampai 9. <b>Tempat</b> sebuah angka menentukan <b>nilainya</b>: setiap tempat bernilai sepuluh kali tempat di sebelah kanannya.</p>
⟦0⟧
<p>Pada <b>5 382 417</b>, angka 8 berada di tempat puluh ribuan, jadi nilainya $8 \times 10\,000 = 80\,000$. Angka 3 bernilai $300\,000$.</p>
<h3>Bentuk panjang</h3>
<p>Menulis bilangan sebagai jumlah nilai tempatnya menunjukkan nilai setiap angka:</p>
⟦1⟧
<p>Angka 0 di tempat puluhan berfungsi sebagai <b>pengisi tempat</b>. Tanpa 0 itu, 4 307 akan berubah menjadi 437.</p>
<h3>Membandingkan bilangan</h3>
<p>Bilangan cacah yang angkanya lebih banyak adalah yang lebih besar. Jika banyak angkanya sama, bandingkan angka demi angka mulai dari kiri; tempat pertama yang berbeda menentukan. Jadi $52\,814 \gt 52\,781$ karena pada tempat ratusan $8 \gt 7$.</p>
<h3>Pembulatan</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  'gisuf2bt5s': R`4\,307 = 4\,000 + 300 + 7`,
  'k8yn6x5f0c': R`Jutaan`,
  '1y40p90zlus': R`Ratus ribuan`,
  '8rp03918ge': R`Puluh ribuan`,
  'y6ohcicccm': R`Ribuan`,
  '2bpfsjyefrh': R`Ratusan`,
  '12cshgy5to0': R`Puluhan`,
  '48l24kh7s0': R`Satuan`,
  '1h333nq85ni': R`<p>Untuk membulatkan ke suatu tempat, lihat angka <b>tepat di sebelah kanannya</b>.</p><ul><li>5 atau lebih: bulatkan <b>ke atas</b> (tambah satu pada angka di tempat pembulatan).</li><li>4 atau kurang: bulatkan <b>ke bawah</b> (angka di tempat pembulatan tetap).</li></ul><p>Semua angka setelah tempat pembulatan menjadi 0.</p>`,
  '264ckm0rxdd': R`<p>Bulatkan 3 462 ke ratusan terdekat.</p><ol><li>Angka ratusannya 4. Angka di sebelah kanannya (puluhan) adalah 6.</li><li>6 sama dengan atau lebih dari 5, jadi dibulatkan ke atas: 4 menjadi 5.</li><li>Jawaban: <b>3 500</b>.</li></ol><p>Ke puluhan terdekat, 3 462 menjadi 3 460; ke ribuan terdekat menjadi 3 000.</p>`,
  '1b014azrv9g': R`<p>Lihat hanya angka berikutnya. 3 449 dibulatkan ke ratusan terdekat menjadi 3 400, bukan 3 500 — jangan pernah membulatkan bertahap.</p>`,
  'rwpycs3uy5': R`satuan`,
  '48iq3xbr78': R`puluhan`,
  'evjeoal0o3': R`ratusan`,
  '1wg89nrnvw3': R`ribuan`,
  'humdf3fhgn': R`puluh ribuan`,
  '7vj2b9yekp': R`ratus ribuan`,
  '1vvnln22yvc': R`jutaan`,
  '1k42apyhj2s': R`Pada bilangan <b>⟦0⟧</b>, berapa nilai angka pada tempat <b>⟦1⟧</b>?`,
  '1wls65y7jfe': R`Angka pada tempat ⟦0⟧ adalah ⟦1⟧, jadi nilainya $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$.`,
  '2ds03ywxgdr': R`puluhan`,
  'ct0emjf1zx': R`ratusan`,
  '2bm9zrq1v5b': R`ribuan`,
  '1p8grh6ppw3': R`Bulatkan <b>⟦0⟧</b> ke ⟦1⟧ terdekat.`,
  'ucpruditlj': R`Angka tepat setelah tempat ⟦0⟧ adalah ⟦1⟧. ⟦2⟧: ⟦3⟧ ≈ <b>⟦4⟧</b>.`,
  '10zj9kfgz44': R`Angka itu 5 atau lebih, jadi dibulatkan ke atas`,
  '2bd3oxw8hoc': R`Angka itu kurang dari 5, jadi dibulatkan ke bawah`,
  '2eobe5h8vjz': R`Bilangan manakah yang sama dengan $⟦0⟧$?`,
  '12ct2r4vi1w': R`Jumlahkan nilai tempatnya: $⟦0⟧ = ⟦1⟧$. Angka nol mengisi tempat yang kosong.`,
  '1thskfj0azj': R`Manakah bilangan yang <b>terbesar</b>?<br>⟦0⟧`,
  '1qw72id1e2m': R`Manakah bilangan yang <b>terkecil</b>?<br>⟦0⟧`,
  'cdwrnsn0bw': R`Semuanya terdiri atas lima angka, jadi bandingkan dari kiri. Urutan ⟦0⟧: ⟦1⟧.`,
  '1hf4gas3oen': R`dari terbesar ke terkecil`,
  '1uhrj1iztnj': R`dari terkecil ke terbesar`,

  // add-sub
  '2crp1hgq6k1': R`
<p>Penjumlahan menggabungkan beberapa banyak benda; pengurangan mencari sisa atau <b>selisih</b> dua banyak benda. Untuk bilangan besar kita memakai <b>cara bersusun</b>: susun angka sesuai nilai tempatnya lalu hitung mulai dari kolom satuan ke kiri.</p>
<h3>Penjumlahan dengan menyimpan</h3>
<p>Jika jumlah satu kolom 10 atau lebih, tulis angka satuannya dan <b>simpan</b> puluhannya ke kolom berikutnya.</p>
⟦0⟧
<h3>Pengurangan dengan meminjam</h3>
<p>Jika angka atas pada suatu kolom lebih kecil daripada angka bawah, <b>pinjam</b> satu dari kolom berikutnya: kolom saat ini bertambah 10.</p>
⟦1⟧
⟦2⟧
<h3>Soal cerita</h3>
<p>Kata-kata seperti <i>semuanya, seluruhnya, lebih banyak, bertambah</i> biasanya berarti penjumlahan. Kata-kata seperti <i>sisa, tinggal, selisih, berapa lebih banyak, lebih sedikit</i> biasanya berarti pengurangan. Selalu tanyakan apa yang sebenarnya diminta soal.</p>
⟦3⟧`,
  '12bc1hhhzgf': R`<p>$4\,587 + 2\,846$</p><ol><li>Satuan: $7 + 6 = 13$ → tulis 3, simpan 1.</li><li>Puluhan: $8 + 4 + 1 = 13$ → tulis 3, simpan 1.</li><li>Ratusan: $5 + 8 + 1 = 14$ → tulis 4, simpan 1.</li><li>Ribuan: $4 + 2 + 1 = 7$.</li></ol><p>Jawaban: <b>7 433</b>.</p>`,
  'dzfcdnot25': R`<p>$6\,204 - 1\,758$</p><ol><li>Satuan: 4 lebih kecil dari 8. Angka puluhannya 0, jadi pinjam dari ratusan: 204 menjadi 1 ratusan, 9 puluhan, dan 14 satuan. $14 - 8 = 6$.</li><li>Puluhan: $9 - 5 = 4$.</li><li>Ratusan: 1 lebih kecil dari 7, jadi pinjam satu ribuan: $11 - 7 = 4$.</li><li>Ribuan: $5 - 1 = 4$.</li></ol><p>Jawaban: <b>4 446</b>.</p>`,
  '1myl5xbp4pm': R`<p>Penjumlahan dan pengurangan saling berkebalikan. Periksa hasil pengurangan dengan penjumlahan: $4\,446 + 1\,758 = 6\,204$ ✓. Cara ini juga dipakai untuk mencari bilangan yang hilang: jika $\square + 348 = 1\,000$, maka $\square = 1\,000 - 348 = 652$.</p>`,
  '23w41b37di3': R`<p>Kesalahan yang sering terjadi adalah mengurangkan angka yang lebih kecil dari yang lebih besar di setiap kolom (misalnya menulis $52 - 38 = 26$). Seharusnya meminjam: $52 - 38 = 14$.</p>`,
  'jzpsrz7qv': R`Hitunglah $⟦0⟧ + ⟦1⟧$.`,
  '11vnennk127': R`Susun angka sesuai nilai tempat dan jumlahkan mulai dari satuan; simpan setiap kali jumlah satu kolom mencapai 10 atau lebih: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$.`,
  '2cqlmyuanc4': R`Hitunglah $⟦0⟧ - ⟦1⟧$.`,
  '217um699krb': R`Kurangkan kolom demi kolom mulai dari satuan, dan pinjam jika angka atas lebih kecil: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$. Periksa: $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '20q2iwal3wx': R`Bilangan berapa yang tepat untuk mengisi kotak? $\square + ⟦0⟧ = ⟦1⟧$`,
  '2vzsixgbwq': R`Pengurangan adalah kebalikan penjumlahan: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '19k8gxx8enm': R`Sebuah perpustakaan memiliki ⟦0⟧ buku. Perpustakaan itu menerima ⟦1⟧ buku baru, lalu meminjamkan ⟦2⟧ buku. Berapa buku yang tersisa di perpustakaan?`,
  '22c2nbk22nn': R`Tambahkan buku baru, lalu kurangi buku yang dipinjamkan: $⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$.`,
  'tjgizs9fjl': R`Mia`,
  '1if8m7vmopf': R`Leo`,
  '12t8l5omzh1': R`Sari`,
  '26mi5um5hxm': R`Budi`,
  '5ladyusi9v': R`Ana`,
  '1e0eos7e481': R`Tomi`,
  '28xor3epndt': R`Dewi`,
  'fl1dlgr4st': R`Raka`,
  'b83c8sskmz': R`Dalam sebuah permainan, ⟦0⟧ memperoleh ⟦1⟧ poin dan ⟦2⟧ memperoleh ⟦3⟧ poin. Berapa poin lebih banyak yang diperoleh ⟦4⟧?`,
  'h14zpmlfj7': R`"Berapa lebih banyak" menanyakan selisih: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,

  // mul-div
  '12j6s3mfail': R`
<p><b>Perkalian</b> adalah penjumlahan berulang dari kelompok-kelompok yang sama besar: $4 \times 6$ berarti 4 kelompok berisi 6, yaitu $6 + 6 + 6 + 6 = 24$. <b>Pembagian</b> membagi suatu banyak benda menjadi kelompok-kelompok yang sama besar: $24 \div 6 = 4$.</p>
⟦0⟧
<h3>Mengalikan bilangan yang lebih besar</h3>
<p>Uraikan salah satu bilangan menurut nilai tempatnya, kalikan setiap bagian, lalu jumlahkan (inilah sifat distributif):</p>
⟦1⟧
<h3>Pembagian dan sisa</h3>
<p>Jika suatu bilangan tidak habis dibagi, bagian yang tersisa disebut <b>sisa</b>. Sisa selalu lebih kecil daripada pembagi.</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '1rjytzik9fa': R`<p>Perkalian dan pembagian saling berkebalikan: $4 \times 6 = 24 \iff 24 \div 6 = 4$.</p><ul><li>Urutan tidak berpengaruh pada perkalian: $a \times b = b \times a$.</li><li>Perkalian dapat disebarkan pada penjumlahan: $a \times (b + c) = a \times b + a \times c$.</li></ul>`,
  '20j6lyqvksk': R`347 \times 26 = 347 \times 20 + 347 \times 6 = 6\,940 + 2\,082 = 9\,022`,
  '11dzvmewikb': R`47 \div 5 = 9 \text{ sisa } 2 \qquad \text{karena } 5 \times 9 + 2 = 47`,
  '1z8tho01ahp': R`<p>Sebanyak 150 siswa akan berdarmawisata. Setiap bus memuat 40 siswa. Berapa bus yang diperlukan?</p><p>$150 \div 40 = 3$ sisa 30. Tiga bus mengangkut 120 siswa; 30 siswa sisanya tetap perlu bus, jadi diperlukan <b>4 bus</b>.</p>`,
  '1g33a99esai': R`<p>Pada soal cerita, tentukan arti sisa. "Berapa bus yang <i>diperlukan</i>?" berarti dibulatkan ke atas; "berapa kotak yang dapat terisi <i>penuh</i>?" berarti dibulatkan ke bawah.</p>`,
  '10v4h321li3': R`Hitunglah $⟦0⟧ \times ⟦1⟧$.`,
  'h89yrotk3q': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ — yaitu ⟦3⟧ kelompok berisi ⟦4⟧.`,
  '2gi38wc5lfl': R`Uraikan ⟦0⟧ menjadi ⟦1⟧ + ⟦2⟧: $⟦3⟧ \times ⟦4⟧ + ⟦5⟧ \times ⟦6⟧ = ⟦7⟧ + ⟦8⟧ = ⟦9⟧$.`,
  '2g99zk4sonb': R`Hitunglah $⟦0⟧ \div ⟦1⟧$.`,
  'cggzswltjw': R`Pembagian adalah kebalikan perkalian: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, jadi $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$.`,
  '7njwte8n8l': R`Berapa sisa jika ⟦0⟧ dibagi ⟦1⟧?`,
  '1c2kbih8aei': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ dan $⟦3⟧ - ⟦4⟧ = ⟦5⟧$, jadi $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$ sisa <b>⟦9⟧</b>.`,
  '23lffvpxlg2': R`telur`,
  'isjmxkkk5m': R`kue mangkuk`,
  'qd054tvbk9': R`pensil`,
  '22kysml68r1': R`botol`,
  '29eftju2pbv': R`Sebanyak ⟦0⟧ ⟦1⟧ akan dimasukkan ke dalam kotak yang masing-masing muat ⟦2⟧. Berapa kotak yang diperlukan agar semuanya masuk?`,
  '1pnydk75epc': R`Sebuah toko mengemas ⟦0⟧ ⟦1⟧ ke dalam kotak isi ⟦2⟧. Berapa kotak yang dapat terisi <b>penuh</b>?`,
  '9w986eh8jp': R`$⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ sisa ⟦3⟧. ⟦4⟧`,
  'dnbly4c6lj': R`Sisa ⟦0⟧ ⟦1⟧ tetap memerlukan kotak, jadi diperlukan <b>⟦2⟧</b> kotak.`,
  'doig2i1un2': R`Hanya <b>⟦0⟧</b> kotak yang penuh; tersisa ⟦1⟧ ⟦2⟧.`,
  '5ki7426a69': R`Sebuah aula memiliki ⟦0⟧ baris kursi dengan ⟦1⟧ kursi di setiap baris. Berapa banyak kursi seluruhnya?`,
  '13ytah9dyhs': R`Baris yang sama banyak berarti perkalian: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ kursi.`,

  // order-ops
  'jeo8qdfjh8': R`
<p>Jika suatu perhitungan memuat beberapa operasi, semua orang harus mengerjakannya dengan urutan yang sama; kalau tidak, satu bentuk yang sama bisa menghasilkan jawaban berbeda. Urutan yang disepakati ini disebut <b>urutan operasi hitung</b>; dalam bahasa Inggris sering diingat dengan singkatan <b>PEMDAS</b>.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '100vdkuw7cv': R`Langkah`,
  '1ata9ppdhpl': R`Operasi`,
  '1i56r47suu5': R`Contoh`,
  'bct94f2duc': R`Tanda kurung`,
  '152taipeiq': R`Pangkat dan akar`,
  '1dq9oio2vod': R`Perkalian dan pembagian — dari kiri ke kanan`,
  'ety1fhjk85': R`Penjumlahan dan pengurangan — dari kiri ke kanan`,
  '20c9xxbu7nh': R`<p>Perkalian dan pembagian <b>setingkat</b>, begitu juga penjumlahan dan pengurangan. Operasi yang setingkat dikerjakan dari <b>kiri ke kanan</b>.</p>`,
  'vpi6gbf1j5': R`<p>Hitung $20 - 8 \div 2 \times 3 + 1$.</p><ol><li>Pembagian dan perkalian lebih dulu, dari kiri ke kanan: $8 \div 2 = 4$, lalu $4 \times 3 = 12$.</li><li>Sekarang $20 - 12 + 1$, dari kiri ke kanan: $8 + 1 = 9$.</li></ol><p>Jawaban: <b>9</b>.</p>`,
  'cx7umbw06o': R`<p>Hitung $(8 + 4) \times 3 - 2^3$.</p><ol><li>Kurung: $8 + 4 = 12$.</li><li>Pangkat: $2^3 = 8$.</li><li>Perkalian: $12 \times 3 = 36$.</li><li>Pengurangan: $36 - 8 = 28$.</li></ol>`,
  '9qyvtl39mt': R`<p>"PEMDAS" (atau "kabataku") tidak berarti perkalian dikerjakan sebelum pembagian. $12 \div 3 \times 2 = 8$, bukan $12 \div 6 = 2$.</p>`,
  '2boesugt2g3': R`Hitunglah $⟦0⟧ + ⟦1⟧ \times ⟦2⟧$.`,
  '18k6kdrqfh9': R`Kalikan dulu: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Lalu jumlahkan: $⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '13w7u6yvf66': R`Hitunglah $(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ - ⟦3⟧$.`,
  '1kgg8vz8ven': R`Kurung: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Perkalian: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Pengurangan: $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  'fpzk0whg2k': R`Hitunglah $⟦0⟧ - ⟦1⟧ \div ⟦2⟧ \times ⟦3⟧$.`,
  '6i0q5bykj1': R`Pembagian dan perkalian lebih dulu, dari kiri ke kanan: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$, lalu $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Terakhir $⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1f77fy0xem': R`Hitunglah $⟦0⟧ + ⟦1⟧^2 - ⟦2⟧$.`,
  'isber9l7mx': R`Pangkat lebih dulu: $⟦0⟧^2 = ⟦1⟧$. Lalu dari kiri ke kanan: $⟦2⟧ + ⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '12cd51d72z4': R`Hitunglah $⟦0⟧ \times (⟦1⟧ + ⟦2⟧) \div ⟦3⟧$.`,
  '1rwp21i838c': R`Kurung: $⟦0⟧ + ⟦1⟧ = ⟦2⟧$. Lalu dari kiri ke kanan: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ dan $⟦6⟧ \div ⟦7⟧ = ⟦8⟧$.`,
  '16yj15t3yvl': R`Hitunglah $⟦0⟧ - ⟦1⟧ + ⟦2⟧$.`,
  '2g7vu4g2g7r': R`Penjumlahan dan pengurangan setingkat, jadi kerjakan dari kiri ke kanan: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$, lalu $⟦3⟧ + ⟦4⟧ = ⟦5⟧$. Jika $⟦6⟧ + ⟦7⟧$ dijumlahkan lebih dulu, hasilnya keliru menjadi ⟦8⟧.`,

  // factors
  'obrpwbkvog': R`
<p><b>Faktor</b> suatu bilangan adalah bilangan yang membagi habis bilangan itu. <b>Kelipatan</b> suatu bilangan adalah bilangan itu dikali bilangan asli.</p>
<ul><li>Faktor 12: 1, 2, 3, 4, 6, 12 (berpasangan: $1 \times 12$, $2 \times 6$, $3 \times 4$).</li><li>Kelipatan 12: 12, 24, 36, 48, …</li></ul>
<h3>Bilangan prima dan komposit</h3>
<p>Bilangan <b>prima</b> tepat memiliki dua faktor: 1 dan bilangan itu sendiri (2, 3, 5, 7, 11, 13, …). Bilangan <b>komposit</b> memiliki lebih dari dua faktor. Bilangan 1 bukan prima dan bukan komposit, dan 2 adalah satu-satunya bilangan prima genap.</p>
⟦0⟧
<h3>Faktorisasi prima</h3>
<p>Setiap bilangan cacah yang lebih dari 1 dapat ditulis sebagai hasil kali bilangan prima dengan tepat satu cara. Gunakan pohon faktor: terus uraikan sampai setiap cabang berakhir di bilangan prima.</p>
⟦1⟧
<h3>FPB dan KPK</h3>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '10ydoy6638h': R`Habis dibagi`,
  '1u2j0a6t91o': R`Ciri`,
  '1fsfip1h2ap': R`angka terakhirnya genap`,
  '26v1i9jjmmd': R`jumlah angka-angkanya habis dibagi 3`,
  'irydz9sqkz': R`dua angka terakhirnya membentuk kelipatan 4`,
  'mwe5nagqkl': R`angka terakhirnya 0 atau 5`,
  'uitu5og8wz': R`habis dibagi 2 dan juga 3`,
  'h955yik0fz': R`jumlah angka-angkanya habis dibagi 9`,
  '185jxbw7gii': R`angka terakhirnya 0`,
  'sxhmc0c8k9': R`<p><b>Faktor persekutuan terbesar</b> (FPB) adalah bilangan terbesar yang membagi habis kedua bilangan. <b>Kelipatan persekutuan terkecil</b> (KPK) adalah bilangan terkecil yang habis dibagi kedua bilangan.</p><p>Dengan faktorisasi prima: FPB mengambil setiap faktor prima yang sama dengan pangkat <b>terkecil</b>; KPK mengambil semua faktor prima dengan pangkat <b>terbesar</b>.</p>`,
  '2dcgjf0y6e9': R`<p>$24 = 2^3 \times 3$ dan $36 = 2^2 \times 3^2$.</p><p>FPB $= 2^2 \times 3 = 12$. &nbsp; KPK $= 2^3 \times 3^2 = 72$.</p><p>Periksa: $\text{FPB} \times \text{KPK} = 12 \times 72 = 864 = 24 \times 36$ ✓ (selalu berlaku untuk dua bilangan).</p>`,
  '13dl2xstaq0': R`<p>Soal FPB biasanya tentang <i>membagi ke dalam kelompok yang sama</i> (ukuran kelompok terbesar). Soal KPK biasanya tentang <i>kejadian yang terjadi bersamaan lagi</i> (saat siklus-siklusnya pertama kali bertemu).</p>`,
  '1v4c3frqq3d': R`Berapakah faktor persekutuan terbesar (FPB) dari ⟦0⟧ dan ⟦1⟧?`,
  '8l33q80f9g': R`Faktor ⟦0⟧: ⟦1⟧.<br>Faktor ⟦2⟧: ⟦3⟧.<br>Faktor persekutuan yang terbesar adalah <b>⟦4⟧</b>.`,
  'slhedaglcs': R`Berapakah kelipatan persekutuan terkecil (KPK) dari ⟦0⟧ dan ⟦1⟧?`,
  '1gi8rsfc6pi': R`Kelipatan ⟦0⟧: ⟦1⟧, …<br>Kelipatan ⟦2⟧: ⟦3⟧, …<br>Kelipatan persekutuan yang pertama adalah <b>⟦4⟧</b>.`,
  '15d9oj1fzj1': R`Manakah bilangan <b>prima</b>?`,
  'xvmwee4nwk': R`⟦0⟧ tepat memiliki dua faktor, yaitu 1 dan ⟦1⟧. Yang lain adalah bilangan komposit: ⟦2⟧.`,
  '151txls1vlc': R`Berapa banyak faktor dari ⟦0⟧?`,
  '1tllv5888z': R`Tuliskan pasangan faktornya: ⟦0⟧. Faktor-faktornya ⟦1⟧ — ada <b>⟦2⟧</b> faktor.`,
  'rjpmb07v6a': R`Apa faktorisasi prima dari ⟦0⟧?`,
  '162lv91sf8i': R`Bagi terus dengan bilangan prima: ⟦0⟧ = ⟦1⟧. Semua faktornya prima, dan jika dikalikan kembali hasilnya ⟦2⟧.`,
  '1dcblj5tqu6': R`Hana punya ⟦0⟧ manik-manik merah dan ⟦1⟧ manik-manik biru. Ia membuat gelang-gelang yang sama dengan memakai semua manik-manik, masing-masing dengan banyak manik merah yang sama dan banyak manik biru yang sama. Paling banyak berapa gelang yang dapat ia buat?`,
  '16f0mrep69j': R`Banyak gelang harus membagi habis ⟦0⟧ dan ⟦1⟧, jadi cari FPB-nya: $\text{FPB}(⟦2⟧; ⟦3⟧) = ⟦4⟧$. Ia dapat membuat <b>⟦5⟧</b> gelang, masing-masing berisi ⟦6⟧ manik merah dan ⟦7⟧ manik biru.`,
  '76jyl5vip0': R`Dua lampu baru saja berkedip bersamaan. Lampu pertama berkedip setiap ⟦0⟧ detik dan lampu kedua setiap ⟦1⟧ detik. Setelah berapa detik keduanya akan berkedip bersamaan lagi?`,
  '2ddehafzm6d': R`detik`,
  '1mfkmnfob4d': R`Keduanya berkedip bersamaan pada kelipatan persekutuan ⟦0⟧ dan ⟦1⟧. Yang pertama adalah KPK-nya: <b>⟦2⟧</b> detik.`,
});

/* Bahasa Indonesia — SD (pecahan → pengukuran) */
addT('id', {
  // fractions
  '1j59vvw5wlm': R`
<p><b>Pecahan</b> $\frac{a}{b}$ berarti $a$ bagian dari $b$ bagian yang sama besar. Bilangan di atas disebut <b>pembilang</b>; bilangan di bawah disebut <b>penyebut</b>.</p>
<h3>Pecahan senilai dan bentuk paling sederhana</h3>
<p>Mengalikan atau membagi pembilang dan penyebut dengan bilangan yang sama menghasilkan pecahan senilai: $\frac{2}{3} = \frac{4}{6} = \frac{10}{15}$. Untuk <b>menyederhanakan</b>, bagi keduanya dengan FPB-nya:</p>
⟦0⟧
<h3>Pecahan campuran</h3>
<p>$2\frac{1}{3}$ berarti $2 + \frac{1}{3}$. Sebagai pecahan biasa: $2\frac{1}{3} = \frac{2 \times 3 + 1}{3} = \frac{7}{3}$.</p>
<h3>Penjumlahan dan pengurangan</h3>
⟦1⟧
⟦2⟧
<h3>Perkalian dan pembagian</h3>
⟦3⟧
<p>Untuk membagi, <b>tetapkan</b> pecahan pertama, <b>ubah</b> ÷ menjadi ×, lalu <b>balik</b> pecahan kedua.</p>
⟦4⟧
<h3>Pecahan dari suatu jumlah</h3>
<p>Bagi dengan penyebut, lalu kalikan dengan pembilang: $\frac{3}{8}$ dari $40 = (40 \div 8) \times 3 = 15$.</p>
⟦5⟧`,
  'twupiargma': R`<p>Pecahan hanya dapat dijumlahkan atau dikurangkan jika <b>penyebutnya sama</b>. Samakan penyebutnya (gunakan KPK dari penyebut-penyebutnya), lalu jumlahkan atau kurangkan pembilangnya.</p>`,
  'cscyf10ta5': R`\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \qquad\qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}`,
  'bcas553r7s': R`<p>Jangan pernah menjumlahkan penyebut: $\frac{1}{2} + \frac{1}{3}$ hasilnya $\frac{5}{6}$, bukan $\frac{2}{5}$.</p>`,
  'ixkiz8sse6': R`Sederhanakan $\frac{⟦0⟧}{⟦1⟧}$ ke bentuk paling sederhana.`,
  '10gte9lmsdd': R`Ketik pecahan seperti 3/4.`,
  '1pjukmxebsh': R`FPB dari ⟦0⟧ dan ⟦1⟧ adalah ⟦2⟧. Bagi keduanya dengan ⟦3⟧: $\frac{⟦4⟧ \div ⟦5⟧}{⟦6⟧ \div ⟦7⟧} = \frac{⟦8⟧}{⟦9⟧}$.`,
  'nvda2ntfzh': R`Hitunglah $\frac{⟦0⟧}{⟦1⟧} + \frac{⟦2⟧}{⟦3⟧}$. Tulis jawaban dalam bentuk paling sederhana.`,
  '227nw1m409d': R`Penyebut yang sama ⟦0⟧: $\frac{⟦1⟧}{⟦2⟧} + \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '1mtmp0absry': R`Hitunglah $\frac{⟦0⟧}{⟦1⟧} - \frac{⟦2⟧}{⟦3⟧}$. Tulis jawaban dalam bentuk paling sederhana.`,
  'gyruuxmt48': R`Penyebut yang sama ⟦0⟧: $\frac{⟦1⟧}{⟦2⟧} - \frac{⟦3⟧}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}⟦7⟧$.`,
  '2amnbki6syc': R`Hitunglah $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧}$. Tulis jawaban dalam bentuk paling sederhana.`,
  '1oq98j0zwy6': R`Kalikan pembilang dengan pembilang dan penyebut dengan penyebut: $\frac{⟦0⟧ \times ⟦1⟧}{⟦2⟧ \times ⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '4ip7z0hj87': R`Hitunglah $\frac{⟦0⟧}{⟦1⟧} \div \frac{⟦2⟧}{⟦3⟧}$. Tulis jawaban dalam bentuk paling sederhana.`,
  '1unu6p3t9n0': R`Tetapkan, ubah, balik: $\frac{⟦0⟧}{⟦1⟧} \times \frac{⟦2⟧}{⟦3⟧} = \frac{⟦4⟧}{⟦5⟧}⟦6⟧$.`,
  '2ebc0tw6di0': R`Berapakah $\frac{⟦0⟧}{⟦1⟧}$ dari ⟦2⟧?`,
  'vi27l05tmq': R`Bagi dengan penyebut, lalu kalikan dengan pembilang: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ dan $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$.`,
  '17rm8piimg0': R`Ubah $⟦0⟧\frac{⟦1⟧}{⟦2⟧}$ menjadi pecahan biasa.`,
  '1vkdspzdrbu': R`Ketik pecahan seperti 11/4.`,
  '1o401nhusn': R`Bilangan bulat × penyebut + pembilang: $⟦0⟧ \times ⟦1⟧ + ⟦2⟧ = ⟦3⟧$. Penyebutnya tetap: $\frac{⟦4⟧}{⟦5⟧}$.`,
  'kune7g17fg': R`Pecahan manakah yang <b>terbesar</b>?`,
  '1lvlk3jpc2g': R`Pecahan manakah yang <b>terkecil</b>?`,
  '1or6yhfdw2': R`Bandingkan dalam bentuk desimal (atau samakan penyebutnya): ⟦0⟧. Yang terbesar adalah $⟦1⟧$.`,
  '2er4a94vvmc': R`Bandingkan dalam bentuk desimal (atau samakan penyebutnya): ⟦0⟧. Yang terkecil adalah $⟦1⟧$.`,

  // decimals
  '2663pva71c8': R`
<p>Bilangan desimal memperluas nilai tempat ke sebelah kanan satuan. Setiap tempat bernilai sepersepuluh tempat di sebelah kirinya.</p>
⟦0⟧
<p>Jadi $47{,}305 = 40 + 7 + \frac{3}{10} + \frac{0}{100} + \frac{5}{1000}$.</p>
<h3>Membandingkan desimal</h3>
<p>Samakan banyak angka di belakang koma dengan menambahkan nol, lalu bandingkan: $0{,}5 = 0{,}50 \gt 0{,}45$. Desimal yang lebih panjang belum tentu lebih besar!</p>
<h3>Penjumlahan dan pengurangan</h3>
⟦1⟧
⟦2⟧
<h3>Perkalian</h3>
<p>Kalikan seolah-olah tidak ada koma, lalu hitung jumlah angka di belakang koma pada kedua faktor — hasilnya memiliki angka di belakang koma sebanyak itu.</p>
⟦3⟧
<h3>Pembagian dan mengubah bentuk</h3>
<p>Mengalikan dengan 10, 100, atau 1000 menggeser angka-angka 1, 2, atau 3 tempat ke kiri (bilangannya membesar); membagi menggesernya ke kanan. Pecahan diubah menjadi desimal dengan membagi pembilang oleh penyebut: $\frac{3}{8} = 3 \div 8 = 0{,}375$.</p>
<h3>Membulatkan desimal</h3>
<p>Aturannya sama dengan bilangan cacah: lihat angka berikutnya. $6{,}847$ dibulatkan ke persepuluhan terdekat menjadi $6{,}8$; ke perseratusan terdekat menjadi $6{,}85$.</p>
⟦4⟧`,
  'yhxj3mz2az': R`Persepuluhan`,
  '1usmp59h50n': R`Perseratusan`,
  'biszmhnvcw': R`Perseribuan`,
  '29ru7wnae4a': R`<p>Luruskan <b>tanda koma</b>, isi tempat kosong dengan nol, lalu jumlahkan atau kurangkan seperti bilangan cacah.</p>`,
  '1refy6cjloa': R`<p>$12{,}7 + 3{,}45$: tulis $12{,}70 + 3{,}45 = 16{,}15$.</p>`,
  '1lqqzrepgzp': R`1{,}3 \times 0{,}24: \quad 13 \times 24 = 312 \;\Rightarrow\; 0{,}312 \quad (1 + 2 = 3 \text{ angka di belakang koma})`,
  'juf948b8yc': R`<p>$\frac{3}{4}$ sama dengan 0,75, bukan 3,4. Garis pecahan berarti pembagian.</p>`,
  '11m0f3xnsds': R`Luruskan tanda koma (tulis ⟦0⟧ sebagai ⟦1⟧), lalu jumlahkan: $⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'qfevgwaqck': R`Luruskan tanda koma, lalu kurangkan: $⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '1p6qy0zwa3u': R`Abaikan tanda koma: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Kedua faktor seluruhnya memiliki ⟦3⟧, jadi hasilnya <b>⟦4⟧</b>.`,
  'uqon6l82ny': R`1 angka di belakang koma`,
  'tx8fdinl8c': R`2 angka di belakang koma`,
  'b7wqcpujtu': R`Ubah $\frac{⟦0⟧}{⟦1⟧}$ menjadi bilangan desimal.`,
  '1ufy8j9fr2y': R`Bagi pembilang dengan penyebut: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$.`,
  'vje0snups3': R`persepuluhan`,
  '1liz42210hc': R`persepuluhan`,
  '104jyqiqg9x': R`perseratusan`,
  '10lk6io95d0': R`perseratusan`,
  '65m0asa80m': R`bilangan bulat`,
  'elqb7vv91e': R`Bulatkan ⟦0⟧ ke ⟦1⟧ terdekat.`,
  '10rdjn6n7af': R`Lihat angka tepat setelah tempat ⟦0⟧, lalu bulatkan ⟦1⟧ menjadi <b>⟦2⟧</b>.`,
  'srl9a8gbof': R`Desimal manakah yang <b>terbesar</b>? &nbsp;⟦0⟧`,
  'gs5zz0z26m': R`Desimal manakah yang <b>terkecil</b>? &nbsp;⟦0⟧`,
  '1ddc7akhylh': R`Tulis semuanya dengan tiga angka di belakang koma: ⟦0⟧. Yang terbesar adalah <b>⟦1⟧</b>.`,
  'clxur1r60o': R`Tulis semuanya dengan tiga angka di belakang koma: ⟦0⟧. Yang terkecil adalah <b>⟦1⟧</b>.`,

  // percent
  'r0jl598zxh': R`
<p><b>Persen</b> berarti "per seratus": $35\% = \frac{35}{100} = 0{,}35$.</p>
⟦0⟧
<h3>Tiga pertanyaan dasar</h3>
⟦1⟧
⟦2⟧
<h3>Kenaikan, penurunan, dan diskon</h3>
<p>Diskon $20\%$ untuk barang seharga 80 ribu rupiah menghemat $0{,}2 \times 80 = 16$ ribu rupiah, jadi harga setelah diskon $80 - 16 = 64$ ribu rupiah. Lebih cepat: kamu membayar $80\%$ dari harga, yaitu $0{,}8 \times 80 = 64$.</p>
<p>Kenaikan $p\%$ berarti dikalikan $1 + \frac{p}{100}$; penurunan berarti dikalikan $1 - \frac{p}{100}$.</p>
⟦3⟧`,
  '2e1ivkcc9wi': R`Pecahan`,
  '21lfn42y4af': R`Desimal`,
  '1vaz29jk1go': R`Persen`,
  '1lj32zs95qv': R`<ul><li><b>Persen dari suatu jumlah:</b> $p\% \text{ dari } N = \frac{p}{100} \times N$.</li><li><b>$a$ berapa persen dari $b$?</b> $\frac{a}{b} \times 100\%$.</li><li><b>Persentase perubahan:</b> $\frac{\text{perubahan}}{\text{nilai awal}} \times 100\%$.</li></ul>`,
  '14zii6dfm6x': R`<p>$15\%$ dari $240 = 0{,}15 \times 240 = 36$. &nbsp; Cara cepat mencongak: $10\% = 24$, $5\% = 12$, jumlahnya $36$.</p>`,
  '1xvrzy7qz2k': R`<p>Persentase perubahan selalu dibagi dengan nilai <b>awal</b>. Harga yang naik dari 50 menjadi 60 mengalami kenaikan $\frac{10}{50} = 20\%$, bukan $\frac{10}{60}$.</p>`,
  '1gobo82ltgo': R`Berapakah ⟦0⟧% dari ⟦1⟧?`,
  '17t3n1yumuv': R`$⟦0⟧\% \text{ dari } ⟦1⟧ = \frac{⟦2⟧}{100} \times ⟦3⟧ = ⟦4⟧$.`,
  'x6d2i6pjon': R`⟦1⟧ adalah berapa persen dari ⟦0⟧?`,
  '166o0aldzl7': R`Ubah $\frac{⟦0⟧}{⟦1⟧}$ menjadi persen.`,
  '1zxz5pk8y96': R`Sebuah jaket seharga ⟦0⟧ ribu rupiah mendapat diskon ⟦1⟧%. Berapa harga setelah diskon?`,
  '1fg7th2fl2k': R`ribu rupiah`,
  '2d5e1injpmi': R`Diskon $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Harga setelah diskon $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ ribu rupiah.`,
  '188c7uiuhvg': R`Sebuah kota berpenduduk ⟦0⟧ jiwa. Jumlah penduduknya naik ⟦1⟧%. Berapa jumlah penduduk sekarang?`,
  '1z4269yh9sc': R`Kenaikan $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$. Jumlah penduduk baru $= ⟦3⟧ + ⟦4⟧ = ⟦5⟧$.`,
  '24ppsoc883t': R`Harga sebuah buku berubah dari ⟦0⟧ ribu rupiah menjadi ⟦1⟧ ribu rupiah. Berapa persen kenaikannya?`,
  '18zivp6w2kh': R`Harga sebuah buku berubah dari ⟦0⟧ ribu rupiah menjadi ⟦1⟧ ribu rupiah. Berapa persen penurunannya?`,
  '275khxq1hou': R`Perubahan: ⟦0⟧ ribu rupiah. Persentase kenaikan: ⟦1⟧ — selalu bagi dengan harga <b>awal</b>.`,
  '260avkxsjev': R`Perubahan: ⟦0⟧ ribu rupiah. Persentase penurunan: ⟦1⟧ — selalu bagi dengan harga <b>awal</b>.`,

  // measurement
  'ymwylkippx': R`
<p>Sistem metrik dibangun dari perpangkatan sepuluh, dengan awalan yang menunjukkan besar suatu satuan.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Waktu</h3>
<p>Waktu <i>tidak</i> desimal: satu jam sama dengan 60 menit, bukan 100. Untuk menghitung lama waktu, hitung maju bertahap: dari 09:35 sampai 13:10 adalah 25 menit (sampai 10:00) + 3 jam (sampai 13:00) + 10 menit = 3 jam 35 menit = 215 menit.</p>
⟦4⟧`,
  '1vt4z8db5g': R`Awalan`,
  '18vrcwaxvwu': R`Arti`,
  '1j1ms4p35q': R`Contoh`,
  '1837d2yv17g': R`kilo- (k)`,
  '6v2px6djsv': R`senti- (c)`,
  'cwnj8q0jlm': R`mili- (m)`,
  '4ynf6btmh8': R`Besaran`,
  '1bcl39yblb4': R`Konversi`,
  '1yt0gqcalpk': R`Panjang`,
  '1pzczs2mse4': R`Massa`,
  '3r7jg1gvau': R`1 t (ton) = 1 000 kg · 1 kg = 1 000 g`,
  '25cg9l2x1fi': R`Volume`,
  '1ellrod4539': R`Waktu`,
  '149iz1sgt': R`1 menit = 60 detik · 1 jam = 60 menit · 1 hari = 24 jam · 1 minggu = 7 hari`,
  '2g0x2qx5tup': R`<p>Dari satuan yang <b>lebih besar</b> ke satuan yang <b>lebih kecil</b>, jumlahnya menjadi lebih banyak — <b>kalikan</b>. Dari yang lebih kecil ke yang lebih besar — <b>bagi</b>.</p>`,
  'x1upmnco35': R`<p>$3{,}5 \text{ km} = 3{,}5 \times 1000 = 3\,500 \text{ m}$. &nbsp; $2\,750 \text{ g} = 2\,750 \div 1000 = 2{,}75 \text{ kg}$.</p>`,
  't9d9f384y5': R`<p>Jangan mengurangkan waktu seperti bilangan biasa: $13{:}10 - 9{:}35$ bukan $1310 - 935 = 375$ menit.</p>`,
  'q3mks7cmvp': R`Ubah ⟦0⟧ ⟦1⟧ ke ⟦2⟧.`,
  '695i1r66ec': R`Dari satuan lebih besar ke lebih kecil, jadi dikalikan: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$`,
  '1y3viru9jwt': R`Dari satuan lebih kecil ke lebih besar, jadi dibagi: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$`,
  '10b6a48v5cr': R`Berapa menit dalam ⟦0⟧ jam ⟦1⟧ menit?`,
  '1jj8c6wfcmv': R`menit`,
  '26onbfrmj2m': R`1 jam = 60 menit: $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ menit.`,
  '2fcfktfjfb2': R`Berapa detik dalam ⟦0⟧ menit ⟦1⟧ detik?`,
  '1qje99e2i79': R`1 menit = 60 detik: $⟦0⟧ \times 60 + ⟦1⟧ = ⟦2⟧$ detik.`,
  '1640fwpwscw': R`Sebuah kereta berangkat pukul ⟦0⟧ dan tiba pukul ⟦1⟧ pada hari yang sama. Berapa menit lama perjalanannya?`,
  '1bvdcgo9oas': R`Dari pukul ⟦0⟧ sampai ⟦1⟧ adalah ⟦2⟧ jam ⟦3⟧ menit, yaitu $⟦4⟧ \times 60 + ⟦5⟧ = ⟦6⟧$ menit.`,
  'jz7sp6v78m': R`Jumlahkan ⟦0⟧ m ⟦1⟧ cm dan ⟦2⟧ m ⟦3⟧ cm. Tulis jawaban dalam sentimeter.`,
  '1v59jh3egmq': R`⟦0⟧ m ⟦1⟧ cm = ⟦2⟧ cm dan ⟦3⟧ m ⟦4⟧ cm = ⟦5⟧ cm. Jumlah: $⟦6⟧ + ⟦7⟧ = ⟦8⟧$ cm.`,
});

/* Bahasa Indonesia — SD (keliling dan luas → data) */
addT('id', {
  // perimeter-area
  '1xtxvjsrb9v': R`
<p><b>Keliling</b> adalah panjang seluruh tepi suatu bangun (diukur dalam cm, m, …). <b>Luas</b> adalah besar permukaan yang ditutupi bangun itu (diukur dalam satuan persegi: cm², m², …).</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
<h3>Bangun gabungan</h3>
<p>Bagi bangun berbentuk L atau bangun gabungan lain menjadi persegi panjang dan segitiga, lalu jumlahkan luasnya — atau ambil satu persegi panjang besar lalu kurangi bagian yang hilang.</p>
⟦4⟧`,
  '1be5xudsubm': R`Persegi panjang, segitiga, dan trapesium — tinggi selalu diukur tegak lurus terhadap alas.`,
  '1vbb9fjurso': R`Bangun`,
  '1bkcetbdzwi': R`Keliling`,
  '9g9qb013dx': R`Luas`,
  '1klcvelpbpq': R`Persegi panjang`,
  '1bkqo8aj6lu': R`Persegi (sisi $s$)`,
  'aioobs5p8o': R`Segitiga`,
  'jpaxz6sbbc': R`jumlah ketiga sisi`,
  '2ch6blse094': R`Jajargenjang`,
  '19b7alat8ps': R`jumlah semua sisi`,
  'tfgy8ywg4m': R`Trapesium`,
  '2glmrmlwat4': R`<p>Segitiga adalah setengah dari persegi panjang (atau jajargenjang) dengan alas dan tinggi yang sama — dari situlah $\frac{1}{2}$ berasal.</p>`,
  'ro993i6hdb': R`<p>Sebuah persegi panjang berukuran 12 m × 5 m. Keliling $= 2(12 + 5) = 34$ m. Luas $= 12 \times 5 = 60$ m².</p>`,
  '23w7bd7ygef': R`<p>Keliling memakai satuan panjang (m); luas memakai satuan persegi (m²). Selain itu, tinggi segitiga tegak lurus terhadap alas — bukan sisi miringnya.</p>`,
  '3o5vcpwyc2': R`Sebuah persegi panjang memiliki panjang ⟦0⟧ cm dan lebar ⟦1⟧ cm. Berapa kelilingnya?`,
  '1mlwgvw7rha': R`$K = 2(l + w) = 2(⟦0⟧ + ⟦1⟧) = ⟦2⟧$ cm.`,
  '29o3zagcnfc': R`Sebuah kebun berbentuk persegi panjang dengan panjang ⟦0⟧ m dan lebar ⟦1⟧ m. Berapa luasnya?`,
  '1icmdazlj61': R`Sebuah persegi memiliki luas ⟦0⟧ cm². Berapa kelilingnya?`,
  '102zowaciba': R`Sisi $= \sqrt{⟦0⟧} = ⟦1⟧$ cm, jadi kelilingnya $4 \times ⟦2⟧ = ⟦3⟧$ cm.`,
  'b1fe5m9ffr': R`Sebuah persegi memiliki keliling ⟦0⟧ cm. Berapa luasnya?`,
  '13amxb9l6l6': R`Sisi $= ⟦0⟧ \div 4 = ⟦1⟧$ cm, jadi luasnya $⟦2⟧ \times ⟦3⟧ = ⟦4⟧$ cm².`,
  'ahhkpun21u': R`Sebuah segitiga memiliki alas ⟦0⟧ cm dan tinggi ⟦1⟧ cm. Berapa luasnya?`,
  'vcwpcnyvdg': R`$L = \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm².`,
  'lassz20hi3': R`Sebuah jajargenjang memiliki alas ⟦0⟧ m dan tinggi ⟦1⟧ m. Berapa luasnya?`,
  '15yoihpm5qi': R`Sebuah trapesium memiliki sisi sejajar ⟦0⟧ cm dan ⟦1⟧ cm serta tinggi ⟦2⟧ cm. Berapa luasnya?`,
  '7f4u2yt2ji': R`$L = \frac{1}{2}(a + b)h = \frac{1}{2}(⟦0⟧ + ⟦1⟧) \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '20cf1i7tqd7': R`Sebuah persegi panjang memiliki keliling ⟦0⟧ m dan panjang ⟦1⟧ m. Berapa lebarnya?`,
  '146lgv8gvtr': R`$2(l + w) = ⟦0⟧$, jadi $l + w = ⟦1⟧$ dan $w = ⟦2⟧ - ⟦3⟧ = ⟦4⟧$ m.`,
  '1cisitk2yw7': R`Sebuah lantai berbentuk L dibuat dengan memotong persegi panjang ⟦0⟧ m × ⟦1⟧ m dari satu sudut persegi panjang ⟦2⟧ m × ⟦3⟧ m. Berapa luas lantai itu?`,
  '4fca853um1': R`Persegi panjang besar dikurangi bagian yang dipotong: $⟦0⟧ \times ⟦1⟧ - ⟦2⟧ \times ⟦3⟧ = ⟦4⟧ - ⟦5⟧ = ⟦6⟧$ m².`,

  // volume-basic
  '27t1x8ik6r5': R`
<p><b>Volume</b> adalah besar ruang yang ditempati suatu bangun ruang, dihitung dalam <b>satuan kubik</b> (cm³, m³). Kubus dengan rusuk 1 cm memiliki volume 1 cm³.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Luas permukaan</h3>
<p>Luas permukaan adalah jumlah luas semua sisi. Balok memiliki tiga pasang persegi panjang yang sama:</p>
⟦3⟧
⟦4⟧`,
  'eqp3lgj8pe': R`\text{Balok: } V = l \times w \times h \qquad\qquad \text{Kubus: } V = s^3`,
  '1v18xwhq9wo': R`<p>Kapasitas berkaitan dengan volume: $1 \text{ cm}^3 = 1 \text{ mL}$ dan $1000 \text{ cm}^3 = 1 \text{ L}$. Selain itu, $1 \text{ m}^3 = 1000 \text{ L}$.</p>`,
  '1y5vqy9gj8b': R`<p>Sebuah akuarium panjangnya 50 cm, lebarnya 30 cm, dan tingginya 40 cm.</p><p>$V = 50 \times 30 \times 40 = 60\,000 \text{ cm}^3 = 60 \text{ L}$.</p>`,
  'n4vhcjq4z5': R`LP = 2(lw + lh + wh) \qquad\qquad \text{Kubus: } LP = 6s^2`,
  '1rmk9dk27r1': R`<p>Volume memakai satuan kubik (cm³); luas permukaan memakai satuan persegi (cm²). Jika volume dan dua rusuk diketahui, bagilah untuk mencari rusuk ketiga: $h = \frac{V}{l \times w}$.</p>`,
  '28sikx14trk': R`Sebuah kubus memiliki rusuk ⟦0⟧ cm. Berapa volumenya?`,
  'n0rlue63yl': R`$V = s^3 = ⟦0⟧^3 = ⟦1⟧$ cm³.`,
  '279nv9sb40d': R`Sebuah kotak memiliki panjang ⟦0⟧ cm, lebar ⟦1⟧ cm, dan tinggi ⟦2⟧ cm. Berapa volumenya?`,
  '18f8h5wvjps': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '2g4aunze98e': R`Sebuah balok bervolume ⟦0⟧ cm³ dengan panjang ⟦1⟧ cm dan lebar ⟦2⟧ cm. Berapa tingginya?`,
  '12q7gqhxt7v': R`$h = \frac{V}{l \times w} = \frac{⟦0⟧}{⟦1⟧ \times ⟦2⟧} = \frac{⟦3⟧}{⟦4⟧} = ⟦5⟧$ cm.`,
  '107zxyhfk8j': R`Sebuah bak air memiliki panjang ⟦0⟧ cm, lebar ⟦1⟧ cm, dan tinggi ⟦2⟧ cm. Berapa liter air yang dapat ditampungnya?`,
  '1xdyfr0a4jd': R`$V = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³, dan $1000 \text{ cm}^3 = 1 \text{ L}$, jadi bak itu menampung $⟦4⟧ \div 1000 = ⟦5⟧$ L.`,
  'j16awwfbde': R`Hitunglah luas permukaan balok berukuran ⟦0⟧ cm × ⟦1⟧ cm × ⟦2⟧ cm.`,
  '15zob952c7': R`$LP = 2(lw + lh + wh) = 2(⟦0⟧ + ⟦1⟧ + ⟦2⟧) = ⟦3⟧$ cm².`,
  'b7w1jgcvao': R`Sebuah kubus bervolume ⟦0⟧ cm³. Berapa panjang setiap rusuknya?`,
  '29p9f2w08h': R`Kita perlu $s^3 = ⟦0⟧$. Karena $⟦1⟧ \times ⟦2⟧ \times ⟦3⟧ = ⟦4⟧$, panjang setiap rusuk adalah ⟦5⟧ cm.`,

  // angles-shapes
  '1zhvjckeb0g': R`
<p>Sudut mengukur besar putaran, dalam satuan <b>derajat</b> (°). Satu putaran penuh adalah $360^\circ$.</p>
⟦0⟧
⟦1⟧
<h3>Segitiga</h3>
<p><b>Sama sisi</b>: ketiga sisinya sama panjang, setiap sudutnya $60^\circ$. <b>Sama kaki</b>: dua sisi sama panjang dan dua sudut alasnya sama besar. <b>Sembarang</b>: tidak ada sisi yang sama panjang. Segitiga <b>siku-siku</b> memiliki satu sudut $90^\circ$.</p>
<h3>Segi banyak</h3>
<p>Segi banyak dengan $n$ sisi dapat dibagi menjadi $n - 2$ segitiga dari satu titik sudut, sehingga</p>
⟦2⟧
<p>Pada segi banyak <b>beraturan</b> semua sudutnya sama besar, jadi setiap sudut besarnya $\frac{(n-2) \times 180^\circ}{n}$. Segi enam beraturan memiliki sudut $\frac{4 \times 180^\circ}{6} = 120^\circ$.</p>
⟦3⟧`,
  'k7wfdtk1dy': R`Jenis`,
  '1czpi6e2j2z': R`Besar`,
  '2eamokno2qd': R`Lancip`,
  '14yb8vum3mx': R`kurang dari $90^\circ$`,
  '10qgoh7fpcr': R`Siku-siku`,
  '96isxim10t': R`tepat $90^\circ$`,
  '29pmtotpc3r': R`Tumpul`,
  '18bc6xajfgk': R`antara $90^\circ$ dan $180^\circ$`,
  'zb7exyin0e': R`Lurus`,
  '1stepofrhwb': R`tepat $180^\circ$`,
  '7pnkzl3606': R`Refleks`,
  '24bbunbptvm': R`antara $180^\circ$ dan $360^\circ$`,
  '2douwrf277u': R`<ul><li>Sudut-sudut pada garis lurus berjumlah $180^\circ$.</li><li>Sudut-sudut di sekeliling satu titik berjumlah $360^\circ$.</li><li>Sudut-sudut yang bertolak belakang sama besar.</li><li>Jumlah sudut dalam segitiga adalah $180^\circ$; pada segi empat, $360^\circ$.</li></ul>`,
  '1g2z1i7tlna': R`\text{jumlah sudut dalam} = (n - 2) \times 180^\circ`,
  '9r6qtn8gpk': R`<p>Sebuah segitiga memiliki sudut $48^\circ$ dan $75^\circ$. Sudut ketiganya $180^\circ - 48^\circ - 75^\circ = 57^\circ$.</p>`,
  'fbd3n0ai0s': R`Dua sudut sebuah segitiga besarnya $⟦0⟧^\circ$ dan $⟦1⟧^\circ$. Berapa besar sudut ketiga?`,
  '1mgnf9acc40': R`Jumlah sudut dalam segitiga $180^\circ$: $180^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ = ⟦2⟧^\circ$.`,
  '17ra9ybal44': R`Dua sudut bersebelahan pada satu garis lurus. Salah satunya $⟦0⟧^\circ$. Berapa besar sudut yang lain?`,
  '1uo9pac72dr': R`Sudut-sudut pada garis lurus berjumlah $180^\circ$: $180^\circ - ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  'lbqlw4yngj': R`Empat sudut bertemu di satu titik. Tiga di antaranya $⟦0⟧^\circ$, $⟦1⟧^\circ$, dan $⟦2⟧^\circ$. Berapa besar sudut keempat?`,
  '1q0g9lewnyf': R`Sudut-sudut di sekeliling titik berjumlah $360^\circ$: $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '1o7rxocgbe4': R`Sudut sebesar $⟦0⟧^\circ$ termasuk jenis sudut apa?`,
  '2087xqcuhit': R`Lancip $\lt 90^\circ$; siku-siku $= 90^\circ$; tumpul antara $90^\circ$ dan $180^\circ$; lurus $= 180^\circ$; refleks antara $180^\circ$ dan $360^\circ$. Jadi sudut $⟦0⟧^\circ$ adalah sudut <b>⟦1⟧</b>.`,
  '1em7emit9v': R`Sebuah segi empat memiliki sudut $⟦0⟧^\circ$, $⟦1⟧^\circ$, dan $⟦2⟧^\circ$. Berapa besar sudut keempat?`,
  '24pznbwnbef': R`Jumlah sudut segi empat $360^\circ$: $360^\circ - ⟦0⟧^\circ - ⟦1⟧^\circ - ⟦2⟧^\circ = ⟦3⟧^\circ$.`,
  '2egzcjm3tpx': R`segi lima`,
  'v80sqcfxpp': R`segi enam`,
  '81gchefl78': R`segi delapan`,
  'ua45cwp3of': R`segi sembilan`,
  'luci9k7vz2': R`segi sepuluh`,
  '1udhvg5ma2x': R`segi dua belas`,
  '27xxu0kf8rx': R`Berapa jumlah sudut dalam segi banyak dengan ⟦0⟧ sisi (⟦1⟧)?`,
  'gm8iaj6tll': R`Bangun itu terbagi menjadi $⟦0⟧ - 2 = ⟦1⟧$ segitiga: $⟦2⟧ \times 180^\circ = ⟦3⟧^\circ$.`,
  'qinptcb6uu': R`Berapa besar setiap sudut dalam segi banyak beraturan dengan ⟦0⟧ sisi (⟦1⟧)?`,
  '1do1n0lapzc': R`Jumlah $= (⟦0⟧ - 2) \times 180^\circ = ⟦1⟧^\circ$, dibagi rata ke ⟦2⟧ sudut yang sama: $⟦3⟧^\circ \div ⟦4⟧ = ⟦5⟧^\circ$.`,
  '2b3ubiiwfr4': R`Pada segitiga sama kaki, sudut di antara dua sisi yang sama panjang besarnya $⟦0⟧^\circ$. Berapa besar masing-masing dua sudut lainnya?`,
  '1m260esohws': R`Kedua sudut alas sama besar: $\frac{180^\circ - ⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // data-basic
  '1rkikmzq9kv': R`
<p>Data adalah informasi yang kita kumpulkan, misalnya nilai ulangan atau buah kesukaan. <b>Tabel frekuensi</b> mencatat berapa kali setiap nilai muncul; <b>diagram batang</b> dan <b>piktogram</b> menampilkan informasi yang sama secara visual.</p>
<h3>Empat ukuran ringkasan</h3>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧`,
  '2fsgim21nih': R`Ukuran`,
  '1fy4t37t415': R`Cara menentukan`,
  '18v4e4ulshl': R`Untuk 3; 7; 7; 8; 10`,
  'ppforkar60': R`Rata-rata`,
  'w9uhnv1ylu': R`jumlahkan semua nilai, bagi dengan banyaknya`,
  '15fhdhxeit5': R`Median`,
  '1bp3iszr2ho': R`nilai tengah setelah diurutkan`,
  '2d8lw4ky362': R`Modus`,
  'n6vk2dz4y0': R`nilai yang paling sering muncul`,
  '8wgrdlq9w9': R`Jangkauan`,
  'u26xwlcm82': R`terbesar − terkecil`,
  '1ddos0ddk6b': R`<p>Jika banyak nilainya <b>genap</b>, median adalah rata-rata dua nilai tengah: median dari 2; 4; 9; 11 adalah $\frac{4 + 9}{2} = 6{,}5$.</p>`,
  '1b84zb92lm7': R`<p>Nilai: 12; 5; 9; 12; 7.</p><ul><li>Rata-rata $= \frac{12 + 5 + 9 + 12 + 7}{5} = \frac{45}{5} = 9$</li><li>Diurutkan: 5; 7; 9; 12; 12 → median 9</li><li>Modus 12 · Jangkauan $12 - 5 = 7$</li></ul>`,
  '1dcnrak0yuf': R`<p>Selalu <b>urutkan</b> data sebelum mencari median. Nilai di tengah daftar yang belum diurutkan biasanya salah.</p>`,
  'x21ub369ei': R`Tentukan rata-rata dari: ⟦0⟧.`,
  '1p52jtmc0cq': R`Jumlahkan semua nilai lalu bagi dengan banyaknya: $\frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$.`,
  'jf7mas4uc8': R`Tentukan median dari: ⟦0⟧.`,
  '1yw7i4urov1': R`Urutkan dulu: ⟦0⟧. Nilai tengahnya — urutan ke-⟦1⟧ dalam daftar yang sudah diurutkan — adalah <b>⟦2⟧</b>.`,
  '2g8sczm66bg': R`Tentukan modus dari: ⟦0⟧.`,
  'tbuacyae4n': R`⟦0⟧ muncul 3 kali — lebih sering daripada nilai lainnya — jadi modusnya <b>⟦1⟧</b>.`,
  '1xtq8j2lty3': R`Tentukan jangkauan dari: ⟦0⟧.`,
  '15se826ipls': R`Jangkauan = terbesar − terkecil $= ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '2epb7vd8j91': R`Apel`,
  '17dpyen9bnr': R`Pisang`,
  '7i14wwudqx': R`Mangga`,
  '2401q57c6t': R`Anggur`,
  '1e2lbgl4i2m': R`Jeruk`,
  '1n92q5m8dcn': R`Durian`,
  '29y8laytfov': R`Pepaya`,
  '1y1q3z5e86a': R`Buah`,
  '282dadyo0i9': R`Banyak siswa`,
  'gcofhmi74h': R`Siswa di sebuah kelas memilih buah kesukaan mereka.⟦0⟧Berapa banyak siswa yang memilih seluruhnya?`,
  '1x3hnjtfgqx': R`Jumlahkan frekuensinya: $⟦0⟧ = ⟦1⟧$.`,
  '13d46zcnc3z': R`Siswa di sebuah kelas memilih buah kesukaan mereka.⟦0⟧Berapa lebih banyak siswa yang memilih "⟦1⟧" daripada "⟦2⟧"?`,
  '1t8yn7xcnqm': R`$⟦0⟧ - ⟦1⟧ = ⟦2⟧$ siswa lebih banyak.`,
});

/* Bahasa Indonesia — SMP (inti, bilangan bulat → perbandingan) */
addT('id', {
  // core
  '1x23luhdn24': R`Ketik bilangan bulat atau pecahan seperti -3/4.`,
  'oe48n1yjho': R`Ketik jawaban seperti 49pi.`,
  '1pwkxeh9gz6': R`Diagram Venn: dua lingkaran A dan B yang beririsan di dalam persegi panjang U. Bagian yang bertumpuk adalah irisan A dan B.`,
  '20fnrxy868c': R`hanya A`,
  '270f53k5ok8': R`hanya B`,
  '1je4zqnj4vo': R`di luar keduanya: (A ∪ B)′`,
  '1mdy4rrlpik': R`Segitiga siku-siku dengan sisi siku-siku a dan b serta sisi miring c di depan sudut siku-siku`,
  '1x3numfhp6n': R`Lingkaran berpusat O dengan jari-jari r, sebuah diameter, sebuah tali busur, dan sebuah juring yang diarsir`,
  '19a9nt12ww1': R`diameter`,
  '2dw7tpqx5ho': R`juring`,
  '187npo1zduj': R`tali busur`,

  // integers
  '1d3b0kga2d8': R`
<p><b>Bilangan bulat</b> terdiri atas bilangan cacah dan lawan-lawannya: $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$ Pada garis bilangan, bilangan makin besar ke arah kanan, jadi $-7 \lt -2$ walaupun 7 lebih besar daripada 2.</p>
<p><b>Nilai mutlak</b> $|a|$ adalah jarak bilangan itu dari 0: $|-6| = 6$ dan $|6| = 6$.</p>
<h3>Penjumlahan dan pengurangan</h3>
⟦0⟧
<h3>Perkalian dan pembagian</h3>
⟦1⟧
⟦2⟧
<p>Penerapan sehari-hari: suhu di bawah nol, ketinggian di bawah permukaan laut, utang, dan lantai di bawah tanah.</p>
⟦3⟧`,
  'y08mdvxdvx': R`<ul><li><b>Tanda sama:</b> jumlahkan nilai mutlaknya, tandanya tetap. $-4 + (-9) = -13$.</li><li><b>Tanda berbeda:</b> kurangkan nilai mutlaknya, ambil tanda bilangan yang nilai mutlaknya lebih besar. $-11 + 5 = -6$.</li><li><b>Mengurangkan</b> berarti menambahkan lawannya: $3 - (-8) = 3 + 8 = 11$.</li></ul>`,
  '265jmr0pgn6': R`Tanda`,
  '18hy4wrreq9': R`Hasil`,
  'smeasc7k44': R`+ dan +`,
  'pch2ir8ey8': R`positif`,
  '1etdbat34sz': R`− dan −`,
  'ziyl69hweo': R`+ dan −`,
  '2ffct8v299o': R`negatif`,
  '238sv1i1dpv': R`− dan +`,
  'woqo0gjqdb': R`<p>$-3^2 = -9$, tetapi $(-3)^2 = 9$. Tanpa tanda kurung, pangkat hanya berlaku untuk 3.</p>`,
  '1vaqzb7dhrg': R`Tanda sama: jumlahkan nilai mutlaknya dan pertahankan tandanya.`,
  '1gzm31e47qm': R`Tanda berbeda: kurangkan nilai mutlaknya dan pakai tanda bilangan yang nilai mutlaknya lebih besar.`,
  '27t807op1rz': R`Mengurangkan berarti menambahkan lawannya: $⟦0⟧ - ⟦1⟧ = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$.`,
  'dkidis5a97': R`Tanda sama menghasilkan bilangan positif`,
  '1htjniy3zg4': R`Tanda berbeda menghasilkan bilangan negatif`,
  'iepdkqxdg4': R`Hitunglah $⟦0⟧ \times ⟦1⟧ - ⟦2⟧$.`,
  'pxi31oj3ys': R`Kalikan dulu: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Lalu $⟦3⟧ - ⟦4⟧ = ⟦5⟧ + ⟦6⟧ = ⟦7⟧$.`,
  '26rnszv74s7': R`Pukul 6 pagi suhu udara $⟦0⟧^\circ\text{C}$. Sampai siang suhu naik $⟦1⟧^\circ\text{C}$, lalu pada tengah malam turun $⟦2⟧^\circ\text{C}$ dari suhu siang hari. Berapa suhu pada tengah malam?`,
  'fyyovqsih2': R`$⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$, jadi suhunya $⟦4⟧^\circ\text{C}$.`,
  '1ag4iuv7vpa': R`Hitunglah $|⟦0⟧| - |⟦1⟧|$.`,
  '1hal8q9tj2u': R`$|⟦0⟧| = ⟦1⟧$ dan $|⟦2⟧| = ⟦3⟧$, jadi nilainya $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,

  // exponents
  '2d43wqplznz': R`
<p><b>Perpangkatan</b> menyatakan perkalian berulang: $a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ faktor}}$. Pada $2^5 = 32$, 2 adalah <b>bilangan pokok</b> dan 5 adalah <b>pangkat</b>.</p>
<h3>Sifat-sifat perpangkatan</h3>
⟦0⟧
⟦1⟧
<h3>Akar</h3>
<p>Akar kuadrat adalah kebalikan dari kuadrat: $\sqrt{81} = 9$ karena $9^2 = 81$. Akar pangkat tiga adalah kebalikan dari pangkat tiga: $\sqrt[3]{64} = 4$ karena $4^3 = 64$.</p>
⟦2⟧
⟦3⟧`,
  '21iigvito9y': R`Sifat`,
  '2du0zx6ztd9': R`<p>Sederhanakan $(2x^3)(5x^4)$: kalikan angkanya dan jumlahkan pangkatnya, $10x^{7}$.</p>`,
  '2b2ar8gx2t7': R`<p>Untuk menyederhanakan akar kuadrat, keluarkan faktor kuadrat sempurna yang terbesar: $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$.</p>$$\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$$`,
  '28pcl4skbrd': R`<p>$x^3 \cdot x^4$ sama dengan $x^7$, bukan $x^{12}$ — pada perkalian bilangan berpangkat dengan bilangan pokok sama, pangkatnya <i>dijumlahkan</i>. Selain itu, $\sqrt{9 + 16} = 5$, bukan $3 + 4$.</p>`,
  's9xs5b9gme': R`Hitunglah $⟦0⟧^{⟦1⟧}$.`,
  'y0efpdptbg': R`$⟦0⟧^{⟦1⟧}$ berarti ⟦2⟧ faktor ⟦3⟧ dikalikan: $⟦4⟧ = ⟦5⟧$.⟦6⟧`,
  'f0v39gimat': R` Banyak faktor negatif yang ganjil menghasilkan bilangan negatif.`,
  '1a0fe39cn50': R` Banyak faktor negatif yang genap menghasilkan bilangan positif.`,
  'gmyxohq5hl': R`Sederhanakan $(⟦0⟧⟦1⟧^{⟦2⟧})(⟦3⟧⟦4⟧^{⟦5⟧})$.`,
  '19i5sbwj9gf': R`Kalikan angkanya dan <b>jumlahkan</b> pangkatnya: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ dan $⟦3⟧^{⟦4⟧} \cdot ⟦5⟧^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$. Jawaban: $⟦9⟧⟦10⟧^{⟦11⟧}$.`,
  'd17nxbyour': R`Sederhanakan $\dfrac{⟦0⟧⟦1⟧^{⟦2⟧}}{⟦3⟧⟦4⟧^{⟦5⟧}}$.`,
  'zvet0x3ty3': R`Bagi angkanya dan <b>kurangkan</b> pangkatnya: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ dan $⟦3⟧^{⟦4⟧ - ⟦5⟧} = ⟦6⟧^{⟦7⟧}$.`,
  'owsivnzbiv': R`Sederhanakan $(⟦0⟧⟦1⟧^{⟦2⟧})^{⟦3⟧}$.`,
  '16p8bz51ffa': R`Pangkatkan setiap faktor dengan ⟦0⟧: $⟦1⟧^{⟦2⟧} = ⟦3⟧$ dan $(⟦4⟧^{⟦5⟧})^{⟦6⟧} = ⟦7⟧^{⟦8⟧}$.`,
  '1xezjl2w04x': R`Hitunglah $⟦0⟧^0 + ⟦1⟧^{-⟦2⟧}$.`,
  '188gl5tkaea': R`Ketik pecahan seperti 9/8.`,
  'ko9qy4d1ca': R`$⟦0⟧^0 = 1$ dan $⟦1⟧^{-⟦2⟧} = \frac{1}{⟦3⟧}$, jadi jumlahnya $1 + \frac{1}{⟦4⟧} = \frac{⟦5⟧}{⟦6⟧}$.`,
  '1n967l6wl5g': R`Hitunglah $⟦0⟧^{-⟦1⟧}$.`,
  'zx2y9sarlt': R`Ketik pecahan seperti 1/8.`,
  'yfk682by4y': R`Pangkat negatif berarti "satu per": $⟦0⟧^{-⟦1⟧} = \frac{1}{⟦2⟧^{⟦3⟧}} = \frac{1}{⟦4⟧}$.`,
  '29kkp8bp96o': R`Hitunglah $\sqrt{⟦0⟧}$.`,
  '130msfu0zcr': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, jadi $\sqrt{⟦3⟧} = ⟦4⟧$.`,
  '2gon6mkcmhb': R`Hitunglah $\sqrt[3]{⟦0⟧}$.`,
  '214ubtovi6i': R`$⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$, jadi $\sqrt[3]{⟦4⟧} = ⟦5⟧$.`,
  '30ljqjiajh': R`Sederhanakan $\sqrt{⟦0⟧}$.`,
  '1dnbn17q9fj': R`Ketik jawaban seperti 3sqrt(2).`,
  'r5mpjrvznb': R`Cari faktor kuadrat sempurna terbesar: $⟦0⟧ = ⟦1⟧ \times ⟦2⟧$. Jadi $\sqrt{⟦3⟧} = \sqrt{⟦4⟧} \cdot \sqrt{⟦5⟧} = ⟦6⟧$.`,

  // sci-notation
  '2855qmmjjc': R`
<p>Para ilmuwan menulis bilangan yang sangat besar atau sangat kecil secara ringkas dalam bentuk</p>
⟦0⟧
<ul><li>Jarak ke Matahari, sekitar $150\,000\,000$ km, adalah $1{,}5 \times 10^{8}$ km.</li><li>Sel darah merah yang lebarnya sekitar $0{,}000\,008$ m berukuran $8 \times 10^{-6}$ m.</li></ul>
⟦1⟧
<h3>Menghitung</h3>
<p>Kalikan (atau bagi) bilangan di depan, lalu jumlahkan (atau kurangkan) pangkatnya. Setelah itu, sesuaikan bilangan di depan jika tidak berada di antara 1 dan 10:</p>
⟦2⟧
⟦3⟧
⟦4⟧`,
  '244so12quwj': R`a \times 10^{n}, \qquad 1 \le a \lt 10, \quad n \text{ bilangan bulat}`,
  '1phwx4rhhb0': R`<p>Hitung berapa tempat tanda koma harus digeser agar di depannya tersisa tepat satu angka bukan nol. Bilangan besar (koma bergeser ke kiri) berpangkat <b>positif</b>; bilangan yang kurang dari 1 (koma bergeser ke kanan) berpangkat <b>negatif</b>.</p>`,
  '17xqz1i19gu': R`(4 \times 10^{5}) \times (3 \times 10^{7}) = 12 \times 10^{12} = 1{,}2 \times 10^{13}`,
  'uws8i7cmm7': R`\frac{6 \times 10^{9}}{8 \times 10^{3}} = 0{,}75 \times 10^{6} = 7{,}5 \times 10^{5}`,
  '1bgde7du4ux': R`<p>$23 \times 10^{4}$ nilainya benar, tetapi bukan notasi ilmiah — bilangan di depan harus kurang dari 10.</p>`,
  '1jl1f7quddk': R`Tulis ⟦0⟧ dalam notasi ilmiah.`,
  '1xhcd6rnqeh': R`Geser tanda koma ⟦0⟧ tempat ke kiri agar di depannya tinggal satu angka: $⟦1⟧ = ⟦2⟧ \times 10^{⟦3⟧}$.`,
  'sb71mbidjv': R`Geser tanda koma ⟦0⟧ tempat ke kanan agar di depannya ada satu angka bukan nol: $⟦1⟧ = ⟦2⟧ \times 10^{-⟦3⟧}$.`,
  '1fxdkt6b40w': R`Tulis $⟦0⟧ \times 10^{⟦1⟧}$ sebagai bilangan biasa.`,
  '1lry42zhbux': R`Geser tanda koma ⟦0⟧ tempat ke kanan: <b>⟦1⟧</b>.`,
  '1x5u9exutdv': R`Geser tanda koma 1 tempat ke kiri: <b>⟦0⟧</b>.`,
  '550xmeglh4': R`Geser tanda koma ⟦0⟧ tempat ke kiri: <b>⟦1⟧</b>.`,
  '1gs42dv9cjp': R`Hitunglah $(⟦0⟧ \times 10^{⟦1⟧}) \times (⟦2⟧ \times 10^{⟦3⟧})$. Tulis jawaban dalam notasi ilmiah.`,
  'fs4t6k5mks': R`Kalikan bilangan di depan dan jumlahkan pangkatnya: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ dan $10^{⟦3⟧} \times 10^{⟦4⟧} = 10^{⟦5⟧}$. ⟦6⟧`,
  '1zt4osszqy5': R`Karena ⟦0⟧ tidak kurang dari 10, tulis ulang $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,
  '1hosaw5g8gs': R`Jawaban: $⟦0⟧ \times 10^{⟦1⟧}$.`,
  '1rhqt7i7pkj': R`Hitunglah $\dfrac{⟦0⟧ \times 10^{⟦1⟧}}{⟦2⟧ \times 10^{⟦3⟧}}$. Tulis jawaban dalam notasi ilmiah.`,
  '3gwofajvgq': R`Bagi bilangan di depan dan kurangkan pangkatnya: $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ dan $10^{⟦3⟧ - ⟦4⟧} = 10^{⟦5⟧}$.⟦6⟧`,
  '1ujla3379au': R` Karena ⟦0⟧ kurang dari 1, tulis ulang $⟦1⟧ \times 10^{⟦2⟧} = ⟦3⟧ \times 10^{⟦4⟧}$.`,

  // ratio
  'j1hx7015fs': R`
<p><b>Perbandingan</b> $a : b$ membandingkan dua besaran. Seperti pecahan, perbandingan dapat disederhanakan dengan membagi kedua sukunya dengan FPB: $18 : 24 = 3 : 4$.</p>
<h3>Membagi menurut perbandingan</h3>
⟦0⟧
<h3>Laju dan nilai satuan</h3>
<p><b>Laju</b> membandingkan besaran dengan satuan berbeda: kilometer per jam, rupiah per kg. Mencari nilai untuk <b>satu</b> satuan (nilai satuan) menyelesaikan sebagian besar soal.</p>
⟦1⟧
<h3>Perbandingan senilai dan berbalik nilai</h3>
⟦2⟧
⟦3⟧
<h3>Skala peta</h3>
<p>Skala $1 : 50\,000$ berarti 1 cm pada peta sama dengan $50\,000$ cm $= 500$ m $= 0{,}5$ km sebenarnya.</p>
⟦4⟧`,
  '1ldxptmm0q1': R`<p>Bagikan 60 permen dengan perbandingan $2 : 3$.</p><ol><li>Jumlah bagian: $2 + 3 = 5$.</li><li>Satu bagian: $60 \div 5 = 12$.</li><li>Bagiannya: $2 \times 12 = 24$ dan $3 \times 12 = 36$.</li></ol>`,
  'mtzadc2zz9': R`\text{kecepatan} = \frac{\text{jarak}}{\text{waktu}} \qquad \text{jarak} = \text{kecepatan} \times \text{waktu}`,
  '1lx74znbkzq': R`<ul><li><b>Senilai:</b> kedua besaran bertambah bersama, $y = kx$. Buku tulis dua kali lebih banyak harganya dua kali lipat.</li><li><b>Berbalik nilai:</b> yang satu bertambah, yang lain berkurang, $xy = k$. Pekerja dua kali lebih banyak menyelesaikan pekerjaan dalam separuh waktu.</li></ul>`,
  'a6l90vp81i': R`<p>6 pekerja membangun sebuah tembok dalam 10 hari. Pekerjaan itu setara $6 \times 10 = 60$ hari-orang, jadi 4 pekerja memerlukan $60 \div 4 = 15$ hari.</p>`,
  '2arjky763hz': R`<p>Sebelum membandingkan, samakan satuannya. Periksa juga apakah situasinya senilai atau berbalik nilai — "pekerja lebih banyak, hari lebih sedikit" adalah berbalik nilai.</p>`,
  '1acmfldad41': R`Sederhanakan perbandingan ⟦0⟧ : ⟦1⟧.`,
  '1y50fzcs3bf': R`Ketik perbandingan seperti 3:4.`,
  '5iztjnzgue': R`FPB kedua suku adalah ⟦0⟧; setelah keduanya dibagi ⟦0⟧, diperoleh ⟦1⟧ : ⟦2⟧ = ⟦3⟧ : ⟦4⟧.`,
  '2crne058qbs': R`Ali`,
  '18poqam78za': R`Siti`,
  '4lzqcmqqd4': R`Rina`,
  'izwfd6xg8i': R`Sam`,
  'bs57t3iign': R`Kim`,
  'h7jorlb8al': R`Sebanyak ⟦0⟧ kelereng dibagi antara ⟦1⟧ dan ⟦2⟧ dengan perbandingan ⟦3⟧ : ⟦4⟧. Berapa kelereng yang diterima ⟦5⟧?`,
  '2ffhbqedp3i': R`Ada $⟦0⟧ + ⟦1⟧ = ⟦2⟧$ bagian, masing-masing bernilai $⟦3⟧ \div ⟦4⟧ = ⟦5⟧$. ⟦6⟧ menerima $⟦7⟧ \times ⟦8⟧ = ⟦9⟧$.`,
  'oh7i0xfb4t': R`buku tulis`,
  'ia267mackq': R`pulpen`,
  'ojwqqxz8z0': R`mangga`,
  '2c5x6tu8q2m': R`tiket`,
  't42rjalvd2': R`Harga ⟦0⟧ ⟦1⟧ adalah ⟦2⟧ ribu rupiah. Dengan harga satuan yang sama, berapa harga ⟦3⟧ ⟦4⟧?`,
  '1j6drw8o3jp': R`Harga satu buah $⟦0⟧ \div ⟦1⟧ = ⟦2⟧$ ribu rupiah, jadi ⟦3⟧ buah harganya $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$ ribu rupiah.`,
  '2cnfx0hut7n': R`⟦0⟧ pekerja dapat membangun sebuah tembok dalam ⟦1⟧ hari. Dengan kecepatan kerja yang sama, berapa hari yang diperlukan ⟦2⟧ pekerja?`,
  '1qn5tzfsu4y': R`hari`,
  '1prw35yduvi': R`Ini perbandingan berbalik nilai. Pekerjaan itu setara $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ hari-orang, jadi ⟦3⟧ pekerja memerlukan $⟦4⟧ \div ⟦5⟧ = ⟦6⟧$ hari.`,
  '294kafpc434': R`Sebuah peta berskala 1 : ⟦0⟧. Jarak dua kota pada peta ⟦1⟧ cm. Berapa jarak sebenarnya, dalam kilometer?`,
  'yvvr6sez8h': R`Jarak sebenarnya $= ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm. Karena $1 \text{ km} = 100\,000 \text{ cm}$, jaraknya $⟦3⟧$ km.`,
  '1q0gzbqlk2i': R`Sebuah mobil menempuh ⟦0⟧ km dalam ⟦1⟧ jam. Berapa kecepatan rata-ratanya?`,
  '1350ox6hh5s': R`$\text{kecepatan} = \frac{\text{jarak}}{\text{waktu}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ km/jam.`,
  '1eoj4cx14t6': R`Sebuah bus melaju dengan kecepatan ⟦0⟧ km/jam selama ⟦1⟧ jam. Berapa jarak yang ditempuhnya?`,
  '1dged1n5jn6': R`$\text{jarak} = \text{kecepatan} \times \text{waktu} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ km.`,
  'aw6tzi78c6': R`Berapa jam waktu yang diperlukan untuk menempuh ⟦0⟧ km dengan kecepatan ⟦1⟧ km/jam?`,
  '2eruzlr62qp': R`jam`,
  '278tsci6f7d': R`$\text{waktu} = \frac{\text{jarak}}{\text{kecepatan}} = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$ jam.`,
});

/* Bahasa Indonesia — SMP (bentuk aljabar → fungsi linear) */
addT('id', {
  // algebra-expr
  '2ngxvisbtd': R`
<p>Pada bentuk $5x^2 - 3xy + 7$, <b>suku-sukunya</b> adalah $5x^2$, $-3xy$, dan $7$; <b>koefisiennya</b> 5 dan $-3$; 7 adalah <b>konstanta</b>. <b>Suku sejenis</b> memiliki variabel dan pangkat yang persis sama ($4ab$ dan $-ab$ sejenis; $x^2$ dan $x$ tidak).</p>
<h3>Menyederhanakan</h3>
<p>Gabungkan suku sejenis dengan menjumlahkan koefisiennya: $6a + 2b - 4a + 5b = 2a + 7b$.</p>
<h3>Menjabarkan tanda kurung</h3>
⟦0⟧
⟦1⟧
<h3>Perkalian istimewa</h3>
⟦2⟧
<h3>Pemfaktoran</h3>
<p>Memfaktorkan adalah kebalikan dari menjabarkan. Keluarkan faktor persekutuan terbesar: $12x - 18 = 6(2x - 3)$.</p>
<h3>Substitusi</h3>
<p>Ganti setiap huruf dengan nilainya, pakai tanda kurung untuk bilangan negatif: jika $x = -2$, maka $3x^2 - x = 3(-2)^2 - (-2) = 12 + 2 = 14$.</p>
⟦3⟧`,
  '107qibv29t1': R`<p><b>Sifat distributif:</b> $a(b + c) = ab + ac$. Kalikan suku di luar dengan <i>setiap</i> suku di dalam kurung.</p><p><b>Dua tanda kurung:</b> $(x + a)(x + b) = x^2 + (a + b)x + ab$.</p>`,
  'evwoax8bsy': R`(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2 \qquad (a + b)(a - b) = a^2 - b^2`,
  'qw20z3i54y': R`<p>$(x + 4)^2 \ne x^2 + 16$. Suku tengahnya, $2 \cdot 4 \cdot x = 8x$, sering terlupa.</p>`,
  '1lzyurkx6yg': R`Sederhanakan $⟦0⟧$.`,
  'c34hz2en6w': R`Kelompokkan suku sejenis: $(⟦0⟧ ⟦1⟧)⟦2⟧ + (⟦3⟧ ⟦4⟧)⟦5⟧ = ⟦6⟧$.`,
  '1u1kf05ab7b': R`Jabarkan $⟦0⟧(⟦1⟧)$.`,
  '1eys0d9g1vl': R`Kalikan setiap suku dalam kurung dengan ⟦0⟧: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ dan $⟦4⟧ \times ⟦5⟧ = ⟦6⟧$. Hasil: $⟦7⟧$.`,
  '1xv73exk1ey': R`Tentukan nilai $⟦0⟧$ untuk $x = ⟦1⟧$.`,
  'lz4v2y9o7u': R`Substitusikan dengan tanda kurung: $⟦0⟧(⟦1⟧)^2 ⟦2⟧(⟦3⟧) ⟦4⟧ = ⟦5⟧ ⟦6⟧ ⟦7⟧ = ⟦8⟧$.`,
  '26qvjy7rwjy': R`Faktorkan sepenuhnya: $⟦0⟧$.`,
  '19u3t9utdnl': R`FPB dari ⟦0⟧ dan ⟦1⟧ adalah ⟦2⟧: $⟦3⟧ = ⟦4⟧(⟦5⟧)$. Periksa dengan menjabarkan.`,
  '1im4ugi7thh': R`Jabarkan dan sederhanakan $(x ⟦0⟧)(x ⟦1⟧)$.`,
  '1bafsr7t5do': R`Kalikan setiap suku dengan setiap suku: $⟦0⟧ = ⟦1⟧$.`,
  '2e60a5izj9m': R`Jabarkan $(x ⟦0⟧)^2$.`,

  // linear-eq
  '2e108zyv3t2': R`
<p>Persamaan menyatakan bahwa dua bentuk bernilai sama. Bayangkan timbangan: apa pun yang dilakukan pada satu sisi, lakukan juga pada sisi lain, maka timbangan tetap seimbang. Tujuannya adalah membuat variabel sendirian di satu ruas.</p>
⟦0⟧
⟦1⟧
<h3>Tanda kurung dan pecahan</h3>
<p>Jabarkan tanda kurung lebih dulu (atau bagi kedua ruas dengan bilangan di luar kurung). Hilangkan pecahan dengan mengalikan setiap suku dengan penyebut persekutuan:</p>
⟦2⟧
<h3>Soal cerita</h3>
<ol><li>Pilih huruf untuk besaran yang dicari dan jelaskan artinya.</li><li>Ubah kalimat soal menjadi persamaan.</li><li>Selesaikan, lalu periksa apakah jawabannya masuk akal.</li></ol>
⟦3⟧
⟦4⟧`,
  '23dcqvv32cf': R`<p>Batalkan operasi dengan urutan terbalik memakai <b>operasi invers</b>: penjumlahan ↔ pengurangan, perkalian ↔ pembagian.</p>`,
  '11eu1q8a3p': R`<p>Selesaikan $5x - 7 = 2x + 11$.</p><ol><li>Kurangi kedua ruas dengan $2x$: $3x - 7 = 11$.</li><li>Tambahkan 7: $3x = 18$.</li><li>Bagi dengan 3: $x = 6$.</li></ol><p>Periksa: $5(6) - 7 = 23$ dan $2(6) + 11 = 23$ ✓</p>`,
  '1wy5h98gkn6': R`<p>Jumlah tiga bilangan bulat berurutan adalah 72. Misalkan $n$, $n + 1$, $n + 2$: $3n + 3 = 72$, jadi $n = 23$. Bilangannya 23, 24, dan 25.</p>`,
  '2cslj9svu1g': R`<p>Jika sebuah suku dipindahkan ke ruas lain, tandanya berubah — karena sebenarnya kamu mengurangkan (atau menambahkan) suku itu pada kedua ruas.</p>`,
  '1655nrncx2v': R`Selesaikan $⟦0⟧ = ⟦1⟧$.`,
  'x5jse5nhwr': R`Ketik nilai x.`,
  '2b0gu3x69ls': R`⟦0⟧: $⟦1⟧ = ⟦2⟧$. Bagi dengan ⟦3⟧: $x = ⟦4⟧$.`,
  '7pot73w6ik': R`Kumpulkan suku ber-$x$ di ruas kiri dan bilangan di ruas kanan: $⟦0⟧ = ⟦1⟧$, jadi $x = ⟦2⟧$.`,
  'xzdgg8oaxi': R`Selesaikan $⟦0⟧(x ⟦1⟧) = ⟦2⟧$.`,
  '9hdqgjqpdz': R`Bagi kedua ruas dengan ⟦0⟧: $x ⟦1⟧ = ⟦2⟧$. Maka $x = ⟦3⟧ ⟦4⟧ = ⟦5⟧$.`,
  '2fru7tuxryf': R`Selesaikan $\frac{x}{⟦0⟧} ⟦1⟧ = ⟦2⟧$.`,
  '1f73j076fzb': R`⟦0⟧: $\frac{x}{⟦1⟧} = ⟦2⟧$. Kalikan kedua ruas dengan ⟦3⟧: $x = ⟦4⟧$.`,
  '211mafg3dgs': R`Jumlah tiga bilangan bulat berurutan adalah ⟦0⟧. Berapakah bilangan yang terbesar?`,
  '8v51kosf3f': R`Jumlah tiga bilangan bulat berurutan adalah ⟦0⟧. Berapakah bilangan yang terkecil?`,
  '28zr6x8xv6r': R`Misalkan $n$, $n + 1$, $n + 2$. Maka $3n + 3 = ⟦0⟧$, jadi $3n = ⟦1⟧$ dan $n = ⟦2⟧$. Bilangannya ⟦3⟧, ⟦4⟧, dan ⟦5⟧.`,
  '6tcx6zie13': R`Andi`,
  'bdnp7aucau': R`Maya`,
  '111efujhij3': R`Nina`,
  '2ffyzeo9a9u': R`Omar`,
  '1o7plzvqsb1': R`Pablo`,
  'xm9ndonr7a': R`⟦0⟧ ⟦1⟧ tahun lebih tua daripada ⟦2⟧. Jumlah umur mereka ⟦3⟧ tahun. Berapa umur ⟦4⟧?`,
  '1dg7mtcy0c9': R`tahun`,
  '1i0et4blzn8': R`Misalkan umur ⟦0⟧ adalah $x$. Maka $x + (x + ⟦1⟧) = ⟦2⟧$, jadi $2x = ⟦3⟧$ dan $x = ⟦4⟧$.`,
  '24q7bzlhbax': R`Aku memikirkan sebuah bilangan, mengalikannya dengan ⟦0⟧, lalu menguranginya dengan ⟦1⟧. Hasilnya ⟦2⟧. Berapa bilangan yang kupikirkan?`,
  'h4vi0amulx': R`$⟦0⟧x - ⟦1⟧ = ⟦2⟧$, jadi $⟦3⟧x = ⟦4⟧$ dan $x = ⟦5⟧$.`,

  // inequalities
  'x75whe4hrd': R`
<p><b>Pertidaksamaan</b> membandingkan dua bentuk: $\lt$ (kurang dari), $\gt$ (lebih dari), $\le$ (kurang dari atau sama dengan), $\ge$ (lebih dari atau sama dengan). Penyelesaiannya biasanya berupa suatu rentang bilangan.</p>
<p>Pada garis bilangan, $x \gt 2$ digambar dengan bulatan <b>kosong</b> di 2 (2 tidak termasuk) dan panah ke kanan; $x \le 2$ memakai bulatan <b>penuh</b> dan panah ke kiri.</p>
<h3>Menyelesaikan</h3>
<p>Selesaikan seperti persamaan — tambah, kurangi, kalikan, atau bagi kedua ruas — dengan satu aturan tambahan:</p>
⟦0⟧
<p>Mengapa? $2 \lt 5$, tetapi jika kedua ruas dikalikan $-1$ diperoleh $-2$ dan $-5$, dan $-2 \gt -5$.</p>
⟦1⟧
<h3>Pertidaksamaan ganda</h3>
<p>Lakukan operasi yang sama pada ketiga bagian: $-1 \lt 2x + 3 \le 9 \Rightarrow -4 \lt 2x \le 6 \Rightarrow -2 \lt x \le 3$. Penyelesaian bulatnya $-1; 0; 1; 2; 3$.</p>
⟦2⟧`,
  '4uypmmfwnv': R`<p>Jika kamu <b>mengalikan atau membagi dengan bilangan negatif</b>, balik arah tanda pertidaksamaannya.</p>$$-3x \gt 12 \;\Rightarrow\; x \lt -4$$`,
  '2g9ptainv5b': R`<p>Selesaikan $7 - 2x \ge 1$.</p><ol><li>Kurangi 7: $-2x \ge -6$.</li><li>Bagi dengan $-2$ dan balik tandanya: $x \le 3$.</li></ol>`,
  'q5ww8c7swj': R`<p>"Bilangan bulat terkecil yang memenuhi $x \gt 4$" adalah 5, bukan 4 — pertidaksamaan tegas tidak memuat titik ujungnya.</p>`,
  '1mxokpl5kuf': R`Selesaikan $⟦0⟧ ⟦1⟧ ⟦2⟧$.`,
  '1iwjn3pne9': R`⟦0⟧: $⟦1⟧ ⟦2⟧ ⟦3⟧$. Bagi dengan ⟦4⟧ (positif, jadi tandanya tetap): $x ⟦5⟧ ⟦6⟧$.`,
  '1s1hpevc8ap': R`⟦0⟧: $⟦1⟧ ⟦2⟧ ⟦3⟧$. Bagi dengan ⟦4⟧. Bilangan itu <b>negatif</b>, jadi tandanya dibalik: $x ⟦5⟧ ⟦6⟧$.`,
  'io0ae9g8yj': R`Bilangan bulat terkecil yang lebih dari ⟦0⟧ adalah <b>⟦1⟧</b>.`,
  'civ81fo6ci': R`Bilangan bulat terkecil yang lebih dari atau sama dengan ⟦0⟧ adalah <b>⟦1⟧</b>.`,
  '62e1f42m8l': R`Bilangan bulat terbesar yang kurang dari ⟦0⟧ adalah <b>⟦1⟧</b>.`,
  '1ime7hqq5cd': R`Bilangan bulat terbesar yang kurang dari atau sama dengan ⟦0⟧ adalah <b>⟦1⟧</b>.`,
  '2cy3ba2hfyd': R`Berapakah bilangan bulat terkecil $x$ yang memenuhi $⟦0⟧$?`,
  'uffp85dcny': R`Berapakah bilangan bulat terbesar $x$ yang memenuhi $⟦0⟧$?`,
  '33ggbvntvo': R`Penyelesaiannya $x ⟦0⟧ ⟦1⟧$. ⟦2⟧`,
  '116sbg7r1dd': R`Ada berapa bilangan bulat $x$ yang memenuhi $⟦0⟧ ⟦1⟧ ⟦2⟧ ⟦3⟧ ⟦4⟧$?`,
  '17y5i2hhz2j': R`⟦0⟧, lalu bagi dengan ⟦1⟧: $⟦2⟧ ⟦3⟧ x ⟦4⟧ ⟦5⟧$. Bilangan bulatnya ⟦6⟧, jadi ada <b>⟦7⟧</b>.`,
  'abjkjjicc6': R`setiap bagian`,

  // sets
  '1upw9az6tpj': R`
<p><b>Himpunan</b> adalah kumpulan benda yang terdefinisi dengan jelas; benda-bendanya disebut <b>anggota</b>. Kita tulis $A = \{2; 4; 6; 8\}$ dan $4 \in A$ ("4 anggota A"), $5 \notin A$. $n(A)$ adalah banyak anggota; di sini $n(A) = 4$. <b>Himpunan kosong</b> $\varnothing$ tidak punya anggota; <b>himpunan semesta</b> $U$ memuat semua yang sedang dibicarakan.</p>
⟦0⟧
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  'zdmpl6ts1e': R`Diagram Venn: setiap daerah adalah kombinasi berbeda dari "di A" dan "di B".`,
  '142ifrt0jkt': R`Notasi`,
  '14czndj1h0b': R`Contoh dengan A = {1; 2; 3; 4}, B = {3; 4; 5}`,
  '17jfg6qecmz': R`irisan: di keduanya`,
  '93vbzoy4wv': R`gabungan: di salah satu (atau keduanya)`,
  'j83k8kg7rg': R`di A tetapi tidak di B`,
  'ul55bfe733': R`komplemen: di U tetapi tidak di A`,
  '1m3czehh1lg': R`semua sisanya di U`,
  '9y4djdoyyu': R`setiap anggota A ada di B`,
  'w227m2d70o': R`$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$<p>Irisannya dikurangkan karena terhitung dua kali. Himpunan dengan $n$ anggota memiliki $2^n$ himpunan bagian (termasuk $\varnothing$ dan himpunan itu sendiri).</p>`,
  '4thfgx5jwf': R`<p>Di kelas berisi 35 siswa, 20 bermain sepak bola, 18 bermain basket, dan 8 bermain keduanya. Maka $n(F \cup B) = 20 + 18 - 8 = 30$ siswa bermain minimal satu olahraga, dan $35 - 30 = 5$ siswa tidak bermain keduanya.</p>`,
  '27eu4624ja8': R`<p>"Berapa yang hanya bermain sepak bola?" jawabannya $20 - 8 = 12$, bukan 20. Isi dulu bagian irisan pada diagram Venn, lalu bergerak ke luar.</p>`,
  '27zhedv4gc': R`Di kelas berisi ⟦0⟧ siswa, ⟦1⟧ siswa suka sepak bola, ⟦2⟧ siswa suka basket, dan ⟦3⟧ siswa suka keduanya. Berapa siswa yang tidak suka kedua olahraga itu?`,
  '26xw5lahqxo': R`$n(F \cup B) = ⟦0⟧ + ⟦1⟧ - ⟦2⟧ = ⟦3⟧$. Tidak keduanya: $⟦4⟧ - ⟦5⟧ = ⟦6⟧$.`,
  '1619zngy4yv': R`Dalam sebuah kelompok, ⟦0⟧ orang bisa berbahasa Inggris, ⟦1⟧ orang bisa berbahasa Prancis, dan ⟦2⟧ orang bisa keduanya. Berapa orang yang bisa minimal salah satu bahasa itu?`,
  '18t2zte9r05': R`Berapa banyak himpunan bagian <b>sejati</b> dari $⟦0⟧$?`,
  '2dvh10c76ll': R`Berapa banyak himpunan bagian dari $⟦0⟧$?`,
  'o8q41j2x4h': R`Himpunan dengan ⟦0⟧ anggota memiliki $2^{⟦1⟧} = ⟦2⟧$ himpunan bagian; tanpa $A$ sendiri, ada ⟦3⟧ himpunan bagian sejati.`,
  '1levxnz2zxu': R`Himpunan dengan ⟦0⟧ anggota memiliki $2^{⟦1⟧} = ⟦2⟧$ himpunan bagian.`,
  'ngdtyzf3i3': R`anggota yang ada di kedua himpunan`,
  'ygni6ry4dh': R`anggota yang ada di salah satu himpunan`,
  'v15s4csij3': R`anggota A yang tidak ada di B`,
  '1j1pykn2kdj': R`Misalkan $A = ⟦0⟧$ dan $B = ⟦1⟧$. Tentukan $A ⟦2⟧ B$.`,
  '256hp0emm8w': R`$A ⟦0⟧ B$ memuat ⟦1⟧: $⟦2⟧$.`,
  '1vmjbk89h3x': R`$U = \{1; 2; 3; \ldots; ⟦0⟧\}$ dan $A = ⟦1⟧$. Berapa banyak anggota $A'$, komplemen dari $A$?`,
  'fzclz65o4l': R`$A'$ memuat anggota $U$ yang tidak ada di $A$: $n(A') = n(U) - n(A) = ⟦0⟧ - ⟦1⟧ = ⟦2⟧$.`,
  '27rc7060yur': R`bilangan prima`,
  '1qm9u9pg5gt': R`bilangan genap`,
  '19ysprsc13w': R`kelipatan 3`,
  '2bluzo1qazo': R`bilangan kuadrat`,
  '1ncphoa2uf2': R`$A$ adalah himpunan bilangan bulat positif kurang dari ⟦0⟧ yang merupakan ⟦1⟧. Tentukan $n(A)$.`,
  '9yersm2gye': R`$A = ⟦0⟧$, jadi $n(A) = ⟦1⟧$.`,

  // linear-functions
  '1dcyn9qstbs': R`
<p><b>Fungsi linear</b> memiliki grafik berupa garis lurus. Dalam <b>bentuk gradien–titik potong</b></p>
⟦0⟧
<p>$m$ adalah <b>gradien</b> (kemiringan): besar perubahan $y$ ketika $x$ bertambah 1. $c$ adalah <b>titik potong sumbu $y$</b>, tempat garis memotong sumbu $y$. Dengan notasi fungsi ditulis $f(x) = mx + c$, jadi $f(3)$ berarti "nilai fungsi ketika $x = 3$".</p>
<h3>Gradien dari dua titik</h3>
⟦1⟧
⟦2⟧
<h3>Titik potong sumbu dan bentuk lain</h3>
<p>Ambil $x = 0$ untuk mencari titik potong sumbu $y$, dan $y = 0$ untuk titik potong sumbu $x$. Garis dapat ditulis $ax + by = c$; ubah menjadi $y = -\frac{a}{b}x + \frac{c}{b}$ untuk membaca gradiennya. Melalui titik $(x_1; y_1)$ dengan gradien $m$: $y - y_1 = m(x - x_1)$.</p>
⟦3⟧
⟦4⟧`,
  'b6i5f4mrw8': R`y = mx + c`,
  '2debyr8clym': R`m = \frac{\text{perubahan tegak}}{\text{perubahan mendatar}} = \frac{y_2 - y_1}{x_2 - x_1}`,
  '2487xq0zh4o': R`<p>Melalui $(1; 2)$ dan $(4; 11)$: $m = \frac{11 - 2}{4 - 1} = 3$. Substitusikan $(1; 2)$ ke $y = 3x + c$: $2 = 3 + c$, jadi $c = -1$ dan garisnya $y = 3x - 1$.</p>`,
  '1jy9kk0ffnl': R`<ul><li>Garis-garis yang <b>sejajar</b> memiliki gradien sama: $m_1 = m_2$.</li><li>Garis-garis yang <b>tegak lurus</b> memiliki gradien yang hasil kalinya $-1$: $m_1 m_2 = -1$, jadi $m_2 = -\frac{1}{m_1}$.</li></ul>`,
  'mf12am34lg': R`<p>Jaga urutannya: jika di atas memakai $y_2 - y_1$, di bawah pakai $x_2 - x_1$. Gradien positif naik ke kanan; gradien negatif turun.</p>`,
  'cmysd7luf4': R`Tentukan gradien garis yang melalui $⟦0⟧$ dan $⟦1⟧$.`,
  'bn7cydwexg': R`Diketahui $f(x) = ⟦0⟧$. Tentukan $f(⟦1⟧)$.`,
  'aaz26bx5zl': R`Di titik berapa garis $⟦0⟧$ memotong sumbu $y$? Tuliskan nilai $y$-nya.`,
  '286d6a0jwny': R`Ambil $x = 0$: $⟦0⟧ = ⟦1⟧$, jadi $y = ⟦2⟧$.`,
  '2aba0g68aq0': R`Berapakah gradien garis $⟦0⟧$?`,
  '2cp0qhukifo': R`Nyatakan $y$ dalam $x$: $y = \frac{⟦0⟧x ⟦1⟧}{⟦2⟧}$. Gradiennya adalah koefisien $x$: $⟦3⟧$.`,
  '9s9um0dbpj': R`Persamaan manakah yang menyatakan garis melalui $⟦0⟧$ dan $⟦1⟧$?`,
  '2ewjcigtyej': R`Gradien: $m = \frac{⟦0⟧ - ⟦1⟧}{⟦2⟧ - ⟦3⟧} = ⟦4⟧$. Substitusikan $⟦5⟧$ ke $y = ⟦6⟧ + c$: $c = ⟦7⟧ - ⟦8⟧ = ⟦9⟧$.`,
  'dog47xwchb': R`Sebuah garis bergradien $⟦0⟧$. Berapakah gradien garis yang tegak lurus terhadapnya?`,
  '22x7dksxq1f': R`Hasil kali gradien dua garis yang tegak lurus adalah $-1$: $m_2 = -\frac{1}{m_1} = ⟦0⟧$.`,
  '1p3mlag1dqo': R`Pada nilai $x$ berapakah garis $y = ⟦0⟧$ memotong sumbu $x$?`,
  'v36n3a0on1': R`Pada sumbu $x$, $y = 0$: $⟦0⟧ ⟦1⟧ = 0$, jadi $x = \frac{⟦2⟧}{⟦3⟧} = ⟦4⟧$.`,
});

/* Bahasa Indonesia — SMP (sistem persamaan → bangun ruang) */
addT('id', {
  // systems
  '1obgwi6un65': R`
<p><b>Sistem</b> dua persamaan linear dalam $x$ dan $y$ meminta nilai yang membuat <i>kedua</i> persamaan benar sekaligus. Secara grafik, penyelesaiannya adalah titik potong kedua garis.</p>
<h3>Metode substitusi</h3>
⟦0⟧
<h3>Metode eliminasi</h3>
⟦1⟧
⟦2⟧
<h3>Kasus khusus</h3>
<p>Garis sejajar (gradien sama, titik potong sumbu-y berbeda) tidak pernah berpotongan: <b>tidak ada penyelesaian</b>. Garis yang berimpit punya <b>tak hingga banyak</b> penyelesaian.</p>
<h3>Soal cerita</h3>
<p>Dua bilangan yang tidak diketahui memerlukan dua informasi. "Ayam dan sapi di sebuah peternakan punya 30 kepala dan 84 kaki": misalkan $c$ = banyak sapi dan $h$ = banyak ayam, maka $c + h = 30$ dan $4c + 2h = 84$.</p>
⟦3⟧`,
  '1jftngyboyy': R`$$\begin{cases} y = 2x - 1 \\ 3x + y = 14 \end{cases}$$<p>Substitusikan persamaan pertama ke persamaan kedua: $3x + (2x - 1) = 14$, jadi $5x = 15$, $x = 3$, dan $y = 2(3) - 1 = 5$. Penyelesaian: $(3; 5)$.</p>`,
  '2g9mhat3jml': R`$$\begin{cases} 2x + 3y = 12 \\ 5x - 3y = 9 \end{cases}$$<p>Jumlahkan kedua persamaan untuk mengeliminasi $y$: $7x = 21$, jadi $x = 3$. Lalu dari $2(3) + 3y = 12$ diperoleh $y = 2$.</p>`,
  '2hm0wzsgn4': R`<p>Kalikan salah satu atau kedua persamaan agar koefisien salah satu variabel sama (atau berlawanan), lalu kurangkan (atau jumlahkan) untuk mengeliminasinya. Selalu periksa jawaban pada <b>kedua</b> persamaan asal.</p>`,
  '1mqyjg4cjt3': R`<p>Saat mengurangkan persamaan, kurangkan <i>setiap</i> suku, termasuk ruas kanan — kesalahan tanda adalah kesalahan paling umum.</p>`,
  '2bus2hrtc7a': R`Selesaikan sistem berikut dan tuliskan nilai $⟦0⟧$: $$\begin{cases} ⟦1⟧ = ⟦2⟧ \\ ⟦3⟧ = ⟦4⟧ \end{cases}$$`,
  'cj3nlbnytd': R`Eliminasi $x$: kalikan persamaan pertama dengan ⟦0⟧ dan persamaan kedua dengan ⟦1⟧, lalu kurangkan: $⟦2⟧y = ⟦3⟧$, jadi $y = ⟦4⟧$. Substitusi balik menghasilkan $x = ⟦5⟧$⟦6⟧.`,
  '1v4b2kwdt1t': R`, jadi $x + y = ⟦0⟧$`,
  '12wz870lrmo': R`Selesaikan sistem berikut: $$\begin{cases} ⟦0⟧ = ⟦1⟧ \\ ⟦2⟧ = ⟦3⟧ \end{cases}$$`,
  '2h37f00sms': R`Tuliskan jawaban sebagai x; y, misalnya 3; -2.`,
  'ji19p5e9vc': R`Eliminasi salah satu variabel menghasilkan $x = ⟦0⟧$ dan $y = ⟦1⟧$. Periksa: $⟦2⟧(⟦3⟧) + ⟦4⟧(⟦5⟧) = ⟦6⟧$ ✓ dan $⟦7⟧(⟦8⟧) + ⟦9⟧(⟦10⟧) = ⟦11⟧$ ✓`,
  '1uhjqjwpqgq': R`Sebuah bioskop menjual ⟦0⟧ tiket dengan total pendapatan ⟦1⟧ ribu rupiah. Tiket dewasa seharga ⟦2⟧ ribu rupiah dan tiket anak ⟦3⟧ ribu rupiah. Berapa tiket anak yang terjual?`,
  '1w5sbgqln74': R`Misalkan $a$ = banyak tiket dewasa dan $c$ = banyak tiket anak: $a + c = ⟦0⟧$ dan $⟦1⟧a + ⟦2⟧c = ⟦3⟧$. Substitusi $a = ⟦4⟧ - c$: $⟦5⟧ - ⟦6⟧c = ⟦7⟧$, jadi $c = ⟦8⟧$.`,
  '5gcbu3n7lh': R`Di sebuah peternakan ada ayam dan sapi. Seluruhnya ada ⟦0⟧ kepala dan ⟦1⟧ kaki. Berapa banyak sapi di peternakan itu?`,
  '1q9pdlsduw3': R`Di sebuah peternakan ada ayam dan sapi. Seluruhnya ada ⟦0⟧ kepala dan ⟦1⟧ kaki. Berapa banyak ayam di peternakan itu?`,
  '20g4l7cyliz': R`Misalkan $c$ = banyak sapi dan $h$ = banyak ayam: $c + h = ⟦0⟧$ dan $4c + 2h = ⟦1⟧$. Kurangkan dua kali persamaan pertama: $2c = ⟦2⟧$, jadi $c = ⟦3⟧$ dan $h = ⟦4⟧$.`,
  '18lm53yd624': R`Jumlah dua bilangan adalah ⟦0⟧ dan selisihnya ⟦1⟧. Berapakah bilangan yang lebih besar?`,
  '1juzg4bgiuw': R`Jumlah dua bilangan adalah ⟦0⟧ dan selisihnya ⟦1⟧. Berapakah bilangan yang lebih kecil?`,
  '15xzu54of35': R`$a + b = ⟦0⟧$ dan $a - b = ⟦1⟧$. Jumlahkan: $2a = ⟦2⟧$, jadi $a = ⟦3⟧$ dan $b = ⟦4⟧$.`,

  // pythagoras
  '18dtbjhvgbb': R`
<p>Pada segitiga siku-siku, sisi terpanjang yang berhadapan dengan sudut siku-siku disebut <b>hipotenusa</b> (sisi miring) $c$. Dua sisi lainnya, $a$ dan $b$, adalah <b>sisi siku-siku</b>.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Tripel Pythagoras</h3>
<p>Penyelesaian bilangan bulat beserta kelipatannya layak dihafal: $(3; 4; 5)$, $(5; 12; 13)$, $(8; 15; 17)$, $(7; 24; 25)$, serta $(6; 8; 10)$, $(9; 12; 15)$, …</p>
<h3>Jarak antara dua titik</h3>
⟦3⟧
<h3>Kebalikan teorema</h3>
<p>Jika $c$ sisi terpanjang: $a^2 + b^2 = c^2$ berarti segitiga <b>siku-siku</b>; $a^2 + b^2 \gt c^2$ berarti segitiga <b>lancip</b>; $a^2 + b^2 \lt c^2$ berarti segitiga <b>tumpul</b>.</p>
⟦4⟧`,
  '29quz32s0mq': R`$$a^2 + b^2 = c^2$$<p>Untuk mencari hipotenusa, jumlahkan kuadratnya; untuk mencari sisi siku-siku, kurangkan: $b = \sqrt{c^2 - a^2}$.</p>`,
  '266inyds4fo': R`<p>Tangga sepanjang 10 m disandarkan ke dinding dengan kaki tangga 6 m dari dinding. Tinggi yang dicapai: $\sqrt{10^2 - 6^2} = \sqrt{64} = 8$ m.</p>`,
  '2f1i3z4fpqs': R`<p>$\sqrt{a^2 + b^2} \ne a + b$. Untuk sisi siku-siku 3 dan 4, hipotenusanya 5, bukan 7.</p>`,
  'tzct4b0jzc': R`Sisi siku-siku sebuah segitiga siku-siku adalah ⟦0⟧ cm dan ⟦1⟧ cm. Berapa panjang hipotenusanya?`,
  'w85jfl9xou': R`$c^2 = ⟦0⟧^2 + ⟦1⟧^2 = ⟦2⟧ + ⟦3⟧ = ⟦4⟧$, jadi $c = \sqrt{⟦5⟧} = ⟦6⟧$ cm.`,
  '14oj6g8m8ly': R`Hipotenusa sebuah segitiga siku-siku adalah ⟦0⟧ m dan salah satu sisi siku-sikunya ⟦1⟧ m. Berapa panjang sisi siku-siku yang lain?`,
  'ucdvtq6bkq': R`Tentukan jarak antara titik $⟦0⟧$ dan $⟦1⟧$.`,
  '174wwwvihed': R`Sebuah tangga sepanjang ⟦0⟧ m disandarkan ke dinding tegak. Kaki tangga berada ⟦1⟧ m dari dinding. Seberapa tinggi tangga mencapai dinding?`,
  'fb02yp437s': R`Tangga adalah hipotenusa: $h = \sqrt{⟦0⟧^2 - ⟦1⟧^2} = \sqrt{⟦2⟧} = ⟦3⟧$ m.`,
  '1gtgjvulgbd': R`Sisi siku-siku sebuah segitiga siku-siku adalah ⟦0⟧ cm dan ⟦1⟧ cm. Tentukan panjang hipotenusanya sampai 2 angka di belakang koma.`,
  '1cost2rf2x0': R`$c = \sqrt{⟦0⟧^2 + ⟦1⟧^2} = \sqrt{⟦2⟧} \approx ⟦3⟧$ cm.`,
  '14ejxhzoxmd': R`Segitiga siku-siku`,
  '1s09bctuu2d': R`siku-siku`,
  '1fk5t91if9w': R`Segitiga lancip`,
  '7ds33wq0ok': R`lancip`,
  '1kp4g4kchcj': R`Segitiga tumpul`,
  'imjds8cff1': R`tumpul`,
  'fvjprzss2k': R`Sisi-sisi sebuah segitiga adalah ⟦0⟧. Termasuk jenis apakah segitiga itu?`,
  '5pal2wak00': R`Bandingkan dengan sisi terpanjang, ⟦0⟧: $⟦1⟧^2 + ⟦2⟧^2 = ⟦3⟧$ dan $⟦4⟧^2 = ⟦5⟧$. Karena $⟦6⟧ ⟦7⟧ ⟦8⟧$, segitiga itu <b>⟦9⟧</b>.`,

  // circles
  '162uvssoo3s': R`
⟦0⟧
<p>Perbandingan keliling dengan diameter selalu sama untuk setiap lingkaran: $\pi \approx 3{,}14159\ldots$ (sering didekati dengan $3{,}14$ atau $\frac{22}{7}$).</p>
⟦1⟧
⟦2⟧
<h3>Busur dan juring</h3>
<p>Juring dengan sudut pusat $\theta$ adalah bagian $\frac{\theta}{360^\circ}$ dari seluruh lingkaran:</p>
⟦3⟧
<h3>Sudut pada lingkaran</h3>
<ul><li>Sudut pusat besarnya <b>dua kali</b> sudut keliling yang menghadap busur yang sama.</li><li>Sudut keliling yang menghadap diameter besarnya $90^\circ$.</li><li>Garis singgung tegak lurus jari-jari di titik singgungnya.</li></ul>
⟦4⟧`,
  '20wibo4oznt': R`Bagian-bagian lingkaran. Diameter adalah dua kali jari-jari: d = 2r.`,
  '1y041ovnv67': R`<p>Jari-jari 5 cm: $C = 2\pi(5) = 10\pi \approx 31{,}4$ cm dan $A = \pi(5)^2 = 25\pi \approx 78{,}5$ cm². Menuliskan jawaban "dalam $\pi$" membuatnya tetap eksak.</p>`,
  '1ljhd2tb7ca': R`\text{Panjang busur} = \frac{\theta}{360^\circ} \times 2\pi r \qquad \text{Luas juring} = \frac{\theta}{360^\circ} \times \pi r^2`,
  '1aglezoi0gp': R`<p>Perhatikan apakah yang diberikan jari-jari atau diameter. Memasukkan $d$ ke $\pi r^2$ membuat luasnya empat kali lipat.</p>`,
  '1iocjvynzqe': R`Dengan $\pi \approx 3{,}14$, tentukan keliling lingkaran berdiameter ⟦0⟧ cm.`,
  '18sb05q1pm7': R`Dengan $\pi \approx 3{,}14$, tentukan keliling lingkaran berjari-jari ⟦0⟧ cm.`,
  '143d0xflci4': R`\pi d = 3{,}14 \times ⟦0⟧`,
  '25yf5bhyvhn': R`2\pi r = 2 \times 3{,}14 \times ⟦0⟧`,
  'upb5nulrwg': R`$C = ⟦0⟧ = ⟦1⟧$ cm.`,
  '1stzke7qj3q': R`Dengan $\pi \approx \frac{22}{7}$, tentukan keliling lingkaran berjari-jari ⟦0⟧ cm.`,
  'vghbcaja6w': R`$C = 2\pi r = 2 \times \frac{22}{7} \times ⟦0⟧ = ⟦1⟧$ cm.`,
  '91md2imk84': R`Tentukan luas lingkaran berdiameter ⟦0⟧ cm, nyatakan dalam $\pi$.`,
  '6f1a511ku9': R`Tentukan luas lingkaran berjari-jari ⟦0⟧ cm, nyatakan dalam $\pi$.`,
  'ctkfkfiuaj': R`⟦0⟧$A = \pi r^2 = \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1uvm4lzorf9': R`Jari-jari adalah setengah diameter: ⟦0⟧ cm. `,
  '2et0owexep4': R`Sebuah juring memiliki jari-jari ⟦0⟧ cm dan sudut pusat $⟦1⟧^\circ$. Tentukan panjang busurnya dalam $\pi$.`,
  '1fpgoxe9d0': R`Busur $= \frac{⟦0⟧}{360} \times 2\pi \times ⟦1⟧ = ⟦2⟧$ cm.`,
  '72i5kpinty': R`Sebuah juring memiliki jari-jari ⟦0⟧ cm dan sudut pusat $⟦1⟧^\circ$. Tentukan luasnya dalam $\pi$.`,
  '1ayxkyrhaid': R`Luas $= \frac{⟦0⟧}{360} \times \pi \times ⟦1⟧^2 = ⟦2⟧$ cm².`,
  '1fzoa3xapl2': R`Keliling sebuah lingkaran adalah $⟦0⟧$ cm. Tentukan luasnya dalam $\pi$.`,
  '22u3ive551m': R`Dari $2\pi r = ⟦0⟧$ diperoleh $r = ⟦1⟧$. Jadi $A = \pi r^2 = ⟦2⟧$ cm².`,
  '1rcge82c97m': R`Sebuah sudut keliling besarnya $⟦0⟧^\circ$. Berapa besar sudut pusat yang menghadap busur yang sama?`,
  '10ccm4ku9vc': R`Sudut pusat = dua kali sudut keliling: $2 \times ⟦0⟧^\circ = ⟦1⟧^\circ$.`,
  '1ak5mj5jm7n': R`Sebuah sudut pusat besarnya $⟦0⟧^\circ$. Berapa besar sudut keliling yang menghadap busur yang sama?`,
  'kfe0atvapi': R`Sudut keliling = setengah sudut pusat: $\frac{⟦0⟧^\circ}{2} = ⟦1⟧^\circ$.`,

  // solids
  '57zv1tsefg': R`
<p><b>Prisma</b> memiliki penampang yang sama sepanjang tubuhnya, jadi volumenya cukup luas penampang dikali panjangnya. Limas atau kerucut yang pas masuk ke dalamnya memiliki tepat sepertiga volume itu.</p>
⟦0⟧
<p>Pada kerucut, $s$ adalah <b>garis pelukis</b>; menurut Pythagoras, $s = \sqrt{r^2 + h^2}$.</p>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '1uywbz6o84t': R`Bangun`,
  'alc1a0j1b0': R`Volume`,
  'bt7ak3o2ct': R`Luas permukaan`,
  'm6y2tibz7j': R`Prisma`,
  '3d3lt4gyiq': R`$A_{\text{alas}} \times h$`,
  '2e5o3mkaw4p': R`jumlah luas semua sisi`,
  '17avl8a1nf0': R`Tabung`,
  'w68av9so54': R`Limas`,
  '1xyfnhsvdp5': R`$\frac{1}{3} A_{\text{alas}} \times h$`,
  '1u5rq973ap9': R`alas + segitiga-segitiga`,
  '40atij69zq': R`Kerucut`,
  '1cebx8i383a': R`Bola`,
  'u0gc3phvmz': R`<p>Tabung dengan $r = 3$ cm dan $h = 10$ cm:</p><p>$V = \pi (3)^2 (10) = 90\pi$ cm³ $\approx 282{,}7$ cm³. &nbsp; $S = 2\pi(9) + 2\pi(3)(10) = 18\pi + 60\pi = 78\pi$ cm².</p>`,
  '706fqlfv6n': R`<p>Selimut tabung jika dibuka menjadi persegi panjang: satu sisinya tinggi $h$, sisi lainnya keliling alas $2\pi r$. Dari sinilah $2\pi r h$ berasal.</p>`,
  '20ndnd7mfh9': R`<p>Setengah bola: volumenya setengah volume bola, tetapi luas permukaannya $2\pi r^2$ (bagian lengkung) $+ \pi r^2$ (lingkaran datar) $= 3\pi r^2$.</p>`,
  '6nduvxh56u': R`Tentukan volume tabung berjari-jari ⟦0⟧ cm dan bertinggi ⟦1⟧ cm, nyatakan dalam $\pi$.`,
  '1u7xsdtlko1': R`$V = \pi r^2 h = \pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '1ao9a1zkfz0': R`Tentukan volume kerucut berjari-jari ⟦0⟧ cm dan bertinggi ⟦1⟧ cm, nyatakan dalam $\pi$.`,
  '11qtlcks0z2': R`$V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  'qcz5afk27t': R`Tentukan volume bola berjari-jari ⟦0⟧ cm, nyatakan dalam $\pi$.`,
  '1a5wzmqqnbb': R`$V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi \times ⟦0⟧ = ⟦1⟧$ cm³.`,
  '2boy4rshpla': R`Tentukan luas permukaan bola berjari-jari ⟦0⟧ cm, nyatakan dalam $\pi$.`,
  'myifdpmpki': R`$S = 4\pi r^2 = 4\pi \times ⟦0⟧ = ⟦1⟧$ cm².`,
  '225sd035ctc': R`Tentukan luas permukaan tabung tertutup berjari-jari ⟦0⟧ cm dan bertinggi ⟦1⟧ cm, nyatakan dalam $\pi$.`,
  'e5stvcnm4w': R`$S = 2\pi r^2 + 2\pi r h = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'ud0ddpzcpo': R`Sebuah kerucut memiliki jari-jari ⟦0⟧ cm dan tinggi ⟦1⟧ cm. Berapa panjang garis pelukisnya?`,
  '1ds61tt8krc': R`$s = \sqrt{r^2 + h^2} = \sqrt{⟦0⟧ + ⟦1⟧} = ⟦2⟧$ cm.`,
  '1xg851dcel': R`Sebuah kerucut memiliki jari-jari ⟦0⟧ cm dan garis pelukis ⟦1⟧ cm. Tentukan luas permukaannya dalam $\pi$.`,
  '1l881dmx8vq': R`$S = \pi r^2 + \pi r s = ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ cm².`,
  'fb33rdkq1e': R`Sebuah limas persegi memiliki rusuk alas ⟦0⟧ cm dan tinggi ⟦1⟧ cm. Berapa volumenya?`,
  '113p07j0igk': R`$V = \frac{1}{3} \times \text{luas alas} \times h = \frac{1}{3} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm³.`,
  '15qifiaqosu': R`Penampang sebuah prisma segitiga berbentuk segitiga dengan alas ⟦0⟧ cm dan tinggi ⟦1⟧ cm. Panjang prisma ⟦2⟧ cm. Berapa volumenya?`,
  '2b2ytzrzz4n': R`Luas penampang $= \frac{1}{2} \times ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ cm². Volume $= ⟦3⟧ \times ⟦4⟧ = ⟦5⟧$ cm³.`,
});

/* Bahasa Indonesia — SMP (statistika → kesebangunan) */
addT('id', {
  // statistics-jh
  '1gkv2j833s3': R`
<p><b>Ukuran pemusatan</b> merangkum sekumpulan data dengan satu nilai khas; <b>ukuran penyebaran</b> menunjukkan seberapa tersebar nilai-nilainya.</p>
⟦0⟧
<h3>Rata-rata dari tabel frekuensi</h3>
⟦1⟧
⟦2⟧
<h3>Bekerja mundur</h3>
⟦3⟧
<p>Jika banyak data genap, median adalah rata-rata dua nilai di tengah.</p>
⟦4⟧`,
  'zy4hmws2f9': R`Cocok jika…`,
  'j0p0vvrwxf': R`data tidak memiliki nilai ekstrem (pencilan)`,
  '2ajydntyvld': R`data miring atau memiliki pencilan — mis. harga rumah`,
  '1d4nmjapkp8': R`data berupa kategori — mis. warna favorit`,
  '12wlbpcje5l': R`ingin gambaran cepat tentang sebaran (tetapi peka terhadap pencilan)`,
  '21qgjzyanwp': R`⟦0⟧<p>$\sum f = 20$ dan $\sum fx = 3 + 10 + 24 + 16 = 53$, jadi rata-ratanya $\frac{53}{20} = 2{,}65$. Modusnya 3 (frekuensi terbesar). Median adalah rata-rata data ke-10 dan ke-11 — keduanya 3 — jadi mediannya 3.</p>`,
  '1j97et5mff': R`Nilai $x$`,
  'gm8elt7xjs': R`Frekuensi $f$`,
  '1rnz21lc9g1': R`<p>$\text{jumlah} = \text{rata-rata} \times \text{banyak data}$. Jika 5 bilangan memiliki rata-rata 12, jumlahnya 60 — jadi jika empat di antaranya berjumlah 47, bilangan kelima adalah 13.</p>`,
  '1ksrbyf4x6z': R`<p>Pada tabel frekuensi, bagilah $\sum fx$ dengan frekuensi total $\sum f$, bukan dengan banyaknya kolom.</p>`,
  '15d8a2aae5e': R`Diurutkan: ⟦0⟧. Ada ⟦1⟧ data, jadi median adalah rata-rata dua data di tengah: $\frac{⟦2⟧ + ⟦3⟧}{2} = ⟦4⟧$.`,
  '3npude2io3': R`Tentukan rata-rata nilai dari tabel frekuensi berikut. Bulatkan sampai 2 angka di belakang koma jika perlu.⟦0⟧`,
  '1kkkmzzlb29': R`Nilai`,
  'nph0ner2hr': R`Frekuensi`,
  'c68abpawgf': R`$\sum f = ⟦0⟧$ dan $\sum fx = ⟦1⟧ = ⟦2⟧$. Rata-rata $= \frac{⟦3⟧}{⟦4⟧} ⟦5⟧ ⟦6⟧$.`,
  'aevfr1f0xw': R`Rata-rata lima bilangan adalah ⟦0⟧. Empat di antaranya adalah ⟦1⟧. Berapakah bilangan kelima?`,
  '2ddgia0tp1j': R`Jumlah kelima bilangan adalah $5 \times ⟦0⟧ = ⟦1⟧$. Keempat bilangan yang diketahui berjumlah ⟦2⟧, jadi bilangan kelima $⟦3⟧ - ⟦4⟧ = ⟦5⟧$.`,
  '5e5w5tzrl1': R`Setelah ⟦0⟧ kali ulangan, rata-rata nilai Rudi adalah ⟦1⟧. Setelah satu ulangan lagi, rata-ratanya menjadi ⟦2⟧. Berapa nilai Rudi pada ulangan terakhir?`,
  '23zlk0k5oq4': R`Jumlah sebelumnya: $⟦0⟧ \times ⟦1⟧ = ⟦2⟧$. Jumlah sesudahnya: $⟦3⟧ \times ⟦4⟧ = ⟦5⟧$. Nilai terakhir $= ⟦6⟧ - ⟦7⟧ = ⟦8⟧$.`,
  '1tdgm1yju18': R`Berapakah modus data pada tabel ini?⟦0⟧`,
  '2cqua50kina': R`Banyak buku yang dibaca`,
  'ypw9p4zjlu': R`Banyak siswa`,
  '22iugjzjcbh': R`Modus adalah nilai dengan frekuensi terbesar. ⟦0⟧ memiliki frekuensi ⟦1⟧, yang terbesar.`,

  // probability-jh
  '1s529z7x9mx': R`
<p>Sebuah <b>percobaan</b> (melempar dadu, mengambil kartu) memiliki <b>hasil</b> yang mungkin. Himpunan semua hasil disebut <b>ruang sampel</b> $S$; sebuah <b>kejadian</b> $E$ adalah himpunan beberapa hasil. Jika semua hasil sama mungkinnya:</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Dua dadu</h3>
<p>Melempar dua dadu menghasilkan $6 \times 6 = 36$ hasil yang sama mungkin. Jumlah 7 muncul dengan 6 cara — (1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1) — jadi $P(\text{jumlah} = 7) = \frac{6}{36} = \frac{1}{6}$. Secara umum, banyak cara memperoleh jumlah $s$ adalah $6 - |s - 7|$.</p>
<h3>Satu set kartu remi</h3>
<p>52 kartu: 4 jenis (♠ ♣ hitam, ♥ ♦ merah) masing-masing 13 nilai (A, 2–10, J, Q, K). Ada 12 kartu bergambar (J, Q, K).</p>
⟦3⟧`,
  '2zwk9a7b7o': R`<ul><li>$0 \le P(E) \le 1$: 0 berarti mustahil, 1 berarti pasti.</li><li><b>Komplemen:</b> $P(\text{bukan } E) = 1 - P(E)$.</li><li><b>Frekuensi harapan</b> dalam $n$ percobaan $= P(E) \times n$.</li></ul>`,
  'sp7ttiactv': R`<p>Sebuah kantong berisi 3 kelereng merah, 5 biru, dan 2 hijau. $P(\text{biru}) = \frac{5}{10} = \frac{1}{2}$, dan $P(\text{bukan hijau}) = 1 - \frac{2}{10} = \frac{4}{5}$.</p>`,
  '1quguehv908': R`<p>Peluang empiris (dari percobaan nyata) makin mendekati peluang teoretis seiring bertambahnya banyak percobaan — tetapi jarang tepat sama.</p>`,
  '2jkb08f2dg': R`merah`,
  '1a43z74k2oy': R`biru`,
  '1719de5b71t': R`hijau`,
  '7kkile34lr': R`Sebuah kantong berisi ⟦0⟧ bola merah, ⟦1⟧ bola biru, dan ⟦2⟧ bola hijau. Satu bola diambil secara acak. Berapa peluang terambil bola ⟦3⟧?`,
  '26hhfp8us6o': R`Tuliskan pecahan seperti 2/7.`,
  '34i4syx68n': R`$P(\text{⟦0⟧}) = \frac{\text{banyak bola ⟦1⟧}}{\text{banyak semua bola}} = \frac{⟦2⟧}{⟦3⟧}⟦4⟧$.`,
  '17fighwohx4': R`Dua dadu seimbang dilempar. Berapa peluang jumlah mata dadunya ⟦0⟧?`,
  '1zfipt2db8x': R`Tuliskan pecahan seperti 5/36.`,
  '1xyubi5yqtq': R`Ada 36 hasil yang sama mungkin, dan jumlah ⟦0⟧ muncul pada ⟦1⟧ di antaranya. $P = \frac{⟦2⟧}{36}⟦3⟧$.`,
  '2cy3xut293b': R`besok hujan`,
  'lo67u7j66d': R`sebuah bus terlambat`,
  '2dk6yd5lp5u': R`sebuah biji berkecambah`,
  '1cur3c8r655': R`sebuah tim memenangkan pertandingan berikutnya`,
  '9jb4uxp8mo': R`Peluang ⟦0⟧ adalah ⟦1⟧. Berapa peluang hal itu <b>tidak</b> terjadi?`,
  '1459jtc2vnw': R`$P(\text{bukan } E) = 1 - P(E) = 1 - ⟦0⟧ = ⟦1⟧$.`,
  '1m5z09mwtae': R`mata dadu 6`,
  '2goj7cvo26g': R`mata dadu genap`,
  '16jy1hpm8uh': R`mata dadu lebih dari 4`,
  '9psh7q2zqv': R`mata dadu prima`,
  'd1r3jk3fi5': R`mata dadu kelipatan 3`,
  'pkpby3rsiu': R`Sebuah dadu seimbang dilempar ⟦0⟧ kali. Berapa kali diharapkan muncul ⟦1⟧?`,
  '1m2zbe7u1ww': R`$P = \frac{⟦0⟧}{6}$, jadi frekuensi harapannya $\frac{⟦1⟧}{6} \times ⟦2⟧ = ⟦3⟧$.`,
  '1eipzgu94sk': R`mata dadu kurang dari 3`,
  '1i6lu5hyvob': R`mata dadu faktor dari 6`,
  'uzgsjc3e5d': R`mata dadu lebih dari 1`,
  '1u2i7hb5c5n': R`mata dadu bilangan kuadrat`,
  'rjfh61539i': R`Sebuah dadu seimbang bersisi enam dilempar. Berapa peluang muncul ⟦0⟧?`,
  '2a86ul8z5e6': R`Tuliskan pecahan seperti 1/3.`,
  'wfhq8l2euu': R`Hasil yang diharapkan: ⟦0⟧ — yaitu ⟦1⟧ dari 6. $P = \frac{⟦2⟧}{6}⟦3⟧$.`,
  '1s7i7y0snm7': R`kartu hati`,
  '1tvznlpjqb2': R`13 kartu hati`,
  '19nwtn8arbx': R`kartu raja (K)`,
  'gy4518kzl1': R`4 kartu raja`,
  '207cuaz509r': R`kartu merah`,
  '1qvhvp7e8k8': R`26 kartu merah`,
  '1sakrbqn5x6': R`kartu raja merah`,
  'c3s60n5sor': R`2 kartu raja merah`,
  '1671qt85c28': R`kartu bergambar (J, Q, atau K)`,
  '29hha1vs7b6': R`12 kartu bergambar`,
  'pavjeefc8d': R`kartu as atau raja`,
  '2cy5fpo3esg': R`4 kartu as dan 4 kartu raja`,
  '1rpplt11syb': R`kartu 7 hitam`,
  '13zshtnr8nq': R`7 sekop dan 7 keriting`,
  '71sptgg3ka': R`Sebuah kartu diambil secara acak dari satu set kartu remi berisi 52 kartu. Berapa peluang terambil ⟦0⟧?`,
  '1wkkibr9nk7': R`Tuliskan pecahan seperti 1/13.`,
  '23r35ol6pkt': R`Ada ⟦0⟧ dari 52 kartu: $P = \frac{⟦1⟧}{52} = ⟦2⟧$.`,

  // social-arith
  '28qmmxd3nnk': R`
<p>Soal uang sehari-hari sebenarnya adalah soal persen yang menyamar.</p>
⟦0⟧
⟦1⟧
⟦2⟧
<h3>Diskon dan pajak</h3>
<p>Terapkan persentase satu per satu: diskon 20% lalu pajak 10% atas 150 ribu rupiah menghasilkan $150 \times 0{,}8 \times 1{,}1 = 132$ ribu rupiah.</p>
<h3>Bunga tunggal</h3>
⟦3⟧
<p>Tabungan 1 500 ribu rupiah dengan bunga 6% per tahun selama 3 tahun menghasilkan $1\,500 \times 0{,}06 \times 3 = 270$ ribu rupiah; totalnya menjadi 1 770 ribu rupiah. Jika waktunya dalam bulan, gunakan $t = \frac{\text{bulan}}{12}$.</p>
<h3>Bruto, tara, dan neto</h3>
<p><b>Bruto</b> = berat keseluruhan; <b>tara</b> = berat kemasan; <b>neto</b> = bruto − tara. Karung 50 kg dengan tara 2% memiliki berat neto $50 \times 0{,}98 = 49$ kg.</p>
⟦4⟧`,
  '104nn3vx4at': R`Istilah`,
  '1mb9fntmked': R`Harga beli (HB)`,
  '12bh5c74j0l': R`yang dibayar penjual`,
  'p4v89gjsks': R`Harga jual (HJ)`,
  'ixzwuufb5k': R`yang dibayar pembeli`,
  '2dj314tvgil': R`Untung`,
  '1b41ckd5mix': R`HJ − HB (jika HJ > HB)`,
  '8exalr20f0': R`Rugi`,
  '2acjs1v6cv9': R`HB − HJ (jika HJ < HB)`,
  '8cl7h0h70q': R`$$\text{persen untung} = \frac{\text{untung}}{\text{harga beli}} \times 100\% \qquad\qquad \text{HJ} = \text{HB} \times \left(1 + \frac{p}{100}\right)$$`,
  '2251p3nt91s': R`<p>Sebuah ponsel dibeli seharga 400 ribu rupiah dan dijual 460 ribu rupiah. Untung $= 60$, jadi persen untung $= \frac{60}{400} \times 100\% = 15\%$.</p>`,
  '16966flk4n0': R`B = M \times i \times t \qquad \text{(modal} \times \text{suku bunga per tahun} \times \text{lama dalam tahun)}`,
  '8dx80n4t33': R`<p>Persen untung selalu dihitung dari harga <b>beli</b>, bukan dari harga jual.</p>`,
  'zmoygr0th3': R`Seorang pedagang membeli sepeda seharga ⟦0⟧ ribu rupiah dan menjualnya ⟦1⟧ ribu rupiah. Berapa persen untungnya?`,
  'hr5vewyo1d': R`Seorang pedagang membeli sepeda seharga ⟦0⟧ ribu rupiah dan menjualnya ⟦1⟧ ribu rupiah. Berapa persen ruginya?`,
  'w2dibc5j0k': R`⟦0⟧ $= ⟦1⟧$. Persentase $= \frac{⟦2⟧}{⟦3⟧} \times 100\% = ⟦4⟧\%$.`,
  '1mg15vgrrsq': R`Sebuah toko membeli lampu seharga ⟦0⟧ ribu rupiah dan ingin untung ⟦1⟧%. Berapa harga jualnya?`,
  '1znpgx1zz3k': R`$\text{HJ} = ⟦0⟧ \times ⟦1⟧ = ⟦2⟧$ ribu rupiah.`,
  '1qynlkevtzf': R`selama 1 tahun`,
  '265o2h9psz8': R`selama ⟦0⟧ tahun`,
  'z7uavwhcj6': R`Uang ⟦0⟧ ribu rupiah ditabung dengan bunga tunggal ⟦1⟧% per tahun ⟦2⟧. Berapa jumlah uang di akhir?`,
  '158pfsp5k1j': R`Uang ⟦0⟧ ribu rupiah ditabung dengan bunga tunggal ⟦1⟧% per tahun ⟦2⟧. Berapa bunga yang diperoleh?`,
  '35ywrebltu': R`$B = M i t = ⟦0⟧ \times ⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ ribu rupiah.⟦4⟧`,
  '26yfs6y8h5o': R` Total $= ⟦0⟧ + ⟦1⟧ = ⟦2⟧$ ribu rupiah.`,
  '11eyk8p87p8': R`Sepasang sepatu berharga ⟦0⟧ ribu rupiah. Ada diskon ⟦1⟧%, lalu pajak penjualan ⟦2⟧% ditambahkan pada harga setelah diskon. Berapa harga akhirnya?`,
  '1ebjr2t3r5v': R`$⟦0⟧ \times ⟦1⟧ = ⟦2⟧$, lalu $\times ⟦3⟧ = ⟦4⟧$ ribu rupiah.`,
  'j3cdki7hbr': R`Sekarung beras memiliki berat bruto ⟦0⟧ kg. Taranya ⟦1⟧% dari berat bruto. Berapa berat netonya?`,
  '91s53sp2z': R`Tara $= ⟦0⟧\% \times ⟦1⟧ = ⟦2⟧$ kg. Neto $= ⟦3⟧ - ⟦4⟧ = ⟦5⟧$ kg.`,
  '1kvwyquko78': R`Sebuah jam tangan dijual seharga ⟦0⟧ ribu rupiah dengan untung ⟦1⟧%. Berapa harga belinya?`,
  'g36e4lpvm4': R`$\text{HJ} = \text{HB} \times ⟦0⟧$, jadi $\text{HB} = \frac{⟦1⟧}{⟦2⟧} = ⟦3⟧$ ribu rupiah. (Mengurangi ⟦4⟧% dari harga jual adalah cara yang salah.)`,

  // patterns
  '2bajjwmyt59': R`
<p><b>Barisan</b> adalah daftar bilangan yang berurutan; setiap bilangannya disebut <b>suku</b>. Dengan menemukan aturannya, kamu bisa melanjutkan pola atau langsung mencari suku mana pun.</p>
<h3>Barisan aritmetika</h3>
<p>Setiap kali ditambah bilangan yang sama $d$ (<b>beda</b>): 5; 8; 11; 14; … memiliki $d = 3$.</p>
⟦0⟧
<h3>Barisan geometri</h3>
<p>Setiap suku dikalikan dengan <b>rasio</b> yang sama $r$: 3; 6; 12; 24; … ($r = 2$); 80; 40; 20; … ($r = \frac{1}{2}$).</p>
<h3>Barisan khusus</h3>
⟦1⟧
⟦2⟧
⟦3⟧`,
  '11v4eu8405a': R`$$u_n = a + (n - 1)d$$<p>dengan $a$ suku pertama. Untuk 5; 8; 11; …: $u_n = 5 + 3(n - 1) = 3n + 2$, jadi $u_{50} = 152$.</p>`,
  '7gqysfvinh': R`Nama`,
  'mwgm16sn11': R`Suku-suku`,
  '24evmkf6e6r': R`Suku ke-n`,
  'xt4guw3yrj': R`Bilangan persegi`,
  'l2hgs4w3i2': R`Bilangan kubik`,
  'lutv3xfjp0': R`Bilangan segitiga`,
  '2g9qzgo3ylf': R`Fibonacci`,
  'vjhbyyj0jc': R`setiap suku = jumlah dua suku sebelumnya`,
  'k4xtnyrrtm': R`<p>Suku ke berapa dari 7; 11; 15; … yang sama dengan 95? $u_n = 4n + 3 = 95$, jadi $n = 23$: suku ke-23.</p>`,
  'sceh7pz7y9': R`<p>Koefisien $n$ pada rumus suku ke-n adalah beda — bukan suku pertama.</p>`,
  '73l5vk6u1l': R`Berapakah suku berikutnya dari barisan ⟦0⟧; …?`,
  '273m8h7rqm0': R`Bedanya ⟦0⟧, jadi suku berikutnya $⟦1⟧ ⟦2⟧ = ⟦3⟧$.`,
  'e7rskm3cuq': R`Tentukan suku $u_{⟦0⟧}$ dari barisan ⟦1⟧; …`,
  '1zj05x9ucbg': R`Rumus manakah yang memberikan suku ke-n dari ⟦0⟧; …?`,
  '10p4kmsov0h': R`Suku-sukunya bertambah ⟦0⟧, jadi rumusnya diawali $⟦1⟧n$. Untuk $n = 1$, $⟦2⟧(1) + c = ⟦3⟧$ memberikan $c = ⟦4⟧$: $u_n = ⟦5⟧$.`,
  'kmsujsbacm': R`Setiap suku dikalikan ⟦0⟧, jadi suku berikutnya $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$.`,
  '1tqcntwvtfu': R`Suku ke berapa dari barisan ⟦0⟧; … yang sama dengan ⟦1⟧?`,
  '1i1kg83c5xj': R`$u_n = ⟦0⟧ + (n - 1) \times ⟦1⟧ = ⟦2⟧$, jadi $(n - 1) \times ⟦3⟧ = ⟦4⟧$, $n - 1 = ⟦5⟧$, dan $n = ⟦6⟧$.`,
  '1ru4k9e3ubn': R`Bilangan segitiga adalah 1; 3; 6; 10; 15; … Tentukan bilangan segitiga $T_{⟦0⟧}$.`,
  '1kom1e2tuqt': R`Barisan 1; 4; 9; 16; 25; … berlanjut. Tentukan suku $u_{⟦0⟧}$.`,
  '29es9j5bth6': R`Ini bilangan persegi, $u_n = n^2$, jadi $u_{⟦0⟧} = ⟦1⟧$.`,
  '1jl1l3ooto1': R`Pada suatu barisan, setiap suku mulai suku ketiga adalah jumlah dua suku sebelumnya. Dua suku pertamanya ⟦0⟧ dan ⟦1⟧. Berapakah suku ke-7?`,
  'o3oiu9pprw': R`Suku-sukunya adalah ⟦0⟧. Suku ke-7 adalah ⟦1⟧.`,

  // similarity
  '165d9zkx0zx': R`
<p><b>Transformasi</b> memindahkan bangun atau mengubah ukurannya. Pada translasi, refleksi, dan rotasi, bayangannya <b>kongruen</b> (bentuk dan ukuran sama); pada dilatasi, bayangannya <b>sebangun</b> (bentuk sama, ukuran berbeda).</p>
⟦0⟧
<h3>Bangun yang sebangun</h3>
⟦1⟧
⟦2⟧
⟦3⟧
⟦4⟧`,
  '8do2aamvnn': R`Transformasi`,
  'jmpbrf5c1s': R`Aturan untuk titik (x; y)`,
  '2b0j70wot2h': R`Translasi oleh $\binom{a}{b}$`,
  '53ydgkbdv': R`Refleksi terhadap sumbu-$x$`,
  '1y0gzwc8g5l': R`Refleksi terhadap sumbu-$y$`,
  '2c65j86o1iv': R`Refleksi terhadap $y = x$`,
  '2az2vuuewqg': R`Rotasi $90^\circ$ berlawanan arah jarum jam dengan pusat O`,
  '1bwu4k8y4fc': R`Rotasi $180^\circ$ dengan pusat O`,
  '24she08dmbo': R`Rotasi $90^\circ$ searah jarum jam dengan pusat O`,
  '1kfzbnkpyo2': R`Dilatasi dengan faktor skala $k$ dan pusat O`,
  '1u5zflf6nl6': R`<p>Pada bangun yang sebangun, sudut-sudut yang bersesuaian sama besar dan sisi-sisi yang bersesuaian memiliki perbandingan yang sama, yaitu <b>faktor skala</b> $k$. Luas berubah $k^2$ kali dan volume $k^3$ kali.</p>`,
  'f54rct691f': R`<p>Segitiga $ABC$ dan $PQR$ sebangun dengan $AB = 6$, $BC = 8$, dan $PQ = 9$. Faktor skala $k = \frac{9}{6} = 1{,}5$, jadi $QR = 8 \times 1{,}5 = 12$. Jika luas segitiga $ABC$ adalah 24, luas segitiga $PQR$ adalah $24 \times 1{,}5^2 = 54$.</p>`,
  '111he4idz8g': R`<p>Tiang setinggi 1,5 m memiliki bayangan 2 m pada saat yang sama sebatang pohon memiliki bayangan 12 m. Kedua segitiga sebangun: $\frac{h}{12} = \frac{1{,}5}{2}$, jadi $h = 9$ m.</p>`,
  '1ag7324gyvl': R`<p>Sisi-sisi yang sebangun berbeda dengan <b>kelipatan</b>, bukan dengan selisih tetap. Jika satu sisi bertambah dari 6 menjadi 9, sisi yang panjangnya 8 menjadi 12, bukan 11.</p>`,
  'grtkq2tz50': R`refleksi terhadap sumbu-$x$`,
  '2b146agxtl5': R`refleksi terhadap sumbu-$y$`,
  '12ufv3upbre': R`refleksi terhadap garis $y = x$`,
  '1efbacf7mos': R`rotasi $90^\circ$ berlawanan arah jarum jam dengan pusat titik asal`,
  '2ettdugdvou': R`rotasi $180^\circ$ dengan pusat titik asal`,
  'y4ewc1f7tf': R`rotasi $90^\circ$ searah jarum jam dengan pusat titik asal`,
  '147bj1yruac': R`translasi oleh $⟦0⟧$`,
  'q8g4eu6egm': R`Titik $P⟦0⟧$ ditransformasi oleh ⟦1⟧. Tentukan koordinat bayangannya.`,
  'px6a8rprin': R`Tuliskan koordinat sebagai x; y.`,
  '199eqilp9e9': R`Aturannya ⟦0⟧, jadi bayangannya $⟦1⟧$.`,
  '141nr4eramb': R`Segitiga $ABC$ dan $PQR$ sebangun, dengan $AB \leftrightarrow PQ$, $BC \leftrightarrow QR$, dan $CA \leftrightarrow RP$. Diketahui $AB = ⟦0⟧$, $BC = ⟦1⟧$, $CA = ⟦2⟧$, dan $⟦3⟧ = ⟦4⟧$. Tentukan $⟦5⟧$.`,
  '1kimjtrunz7': R`Faktor skala $k = \frac{⟦0⟧}{⟦1⟧} = ⟦2⟧$. Jadi $⟦3⟧ = ⟦4⟧ \times ⟦5⟧ = ⟦6⟧$.`,
  'bj1shpkj9u': R`Dua bangun ruang sebangun memiliki faktor skala ⟦0⟧. Volume bangun yang lebih kecil ⟦1⟧ cm³. Berapa volume bangun yang lebih besar?`,
  'ld6jtpizu2': R`Volume berubah $k^3 = ⟦0⟧$ kali: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm³.`,
  '11duhh78e55': R`Dua bangun datar sebangun memiliki faktor skala ⟦0⟧. Luas bangun yang lebih kecil ⟦1⟧ cm². Berapa luas bangun yang lebih besar?`,
  'hfezjn5dnm': R`Luas berubah $k^2 = ⟦0⟧$ kali: $⟦1⟧ \times ⟦2⟧ = ⟦3⟧$ cm².`,
  '2eojcpktunl': R`Sebatang tongkat setinggi ⟦0⟧ m memiliki bayangan ⟦1⟧ m. Pada saat yang sama, sebatang pohon memiliki bayangan ⟦2⟧ m. Berapa tinggi pohon itu?`,
  '196fpe0msid': R`Kedua segitiga sebangun: $\frac{h}{⟦0⟧} = \frac{⟦1⟧}{⟦2⟧}$, jadi $h = ⟦3⟧ \times \frac{⟦4⟧}{⟦5⟧} = ⟦6⟧$ m.`,
  '1iy8baeb4jd': R`Titik $⟦0⟧$ didilatasi dengan pusat titik asal dan faktor skala ⟦1⟧. Di manakah bayangannya?`,
  '1fyw56nqicr': R`Kalikan kedua koordinat dengan ⟦0⟧: $(⟦1⟧ \times ⟦2⟧;\; ⟦3⟧ \times ⟦4⟧) = ⟦5⟧$.`,
});
