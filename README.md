# Math Ladder

Materi dan latihan soal matematika dari SD sampai kuliah (66 topik) dalam **12 bahasa**: Inggris, Spanyol, Mandarin, Prancis, Jerman, Portugis, Rusia, Arab, Persia, Jepang, Korea, dan Indonesia. Soal latihannya dibuat acak setiap kali dibuka, lengkap dengan kunci jawaban dan tombol print. Dibuat oleh **@rendyhn**, 2026.

## Cara membuka di komputer

Klik dua kali `index.html`, lalu buka di Chrome atau Edge. Perlu koneksi internet untuk menampilkan rumus (MathJax) dan font.

Untuk export ke PDF: klik salah satu tombol Print, lalu pilih **Save as PDF**.

## Pilihan bahasa

- Pilih bahasa lewat menu bahasa di bagian atas halaman. Pilihannya diingat di browser.
- Bisa juga lewat alamat, misalnya `index.html?lang=id` atau `?lang=ar`. Kode bahasa: `en es zh fr de pt ru ar fa ja ko id`.
- Arab dan Persia otomatis tampil dari kanan ke kiri (RTL), termasuk saat dicetak.
- Angka mengikuti kebiasaan tiap bahasa: bahasa dengan koma desimal (es, fr, de, pt, ru, id) menulis `2,5` dan memisahkan daftar angka dengan titik koma (`-2; 5`). Jawaban isian menerima dua-duanya.
- Satuan ditulis dengan huruf setempat untuk Rusia dan Arab (см, кг / سم، كغ). Mata uang di soal cerita disesuaikan per bahasa (dolar, euro, real, 元, ドル, 달러, ribu rupiah, dst.).
- File terjemahan ada di folder `lang/` (satu file per bahasa). **Folder `lang/` harus selalu ikut di-upload bersama `index.html`**; kalau tidak ada, website tetap jalan tapi hanya dalam bahasa Inggris.

## Watermark

- **Di website:** tulisan `@rendyhn 2026` selalu tampil di pojok kanan bawah.
- **Di PDF / hasil print:** setiap halaman punya `Math Ladder · @rendyhn 2026` di kanan bawah dan nomor halaman di kiri bawah. Setelah dipasang di GitHub Pages, alamat situsnya otomatis ikut tercetak, misalnya `Math Ladder · @rendyhn 2026 · rendyhn.github.io/math-ladder`.
- Lembar soal, kunci jawaban, dan materi juga punya baris **Sumber: …** di bagian atas atau bawahnya, jadi sumbernya tetap terlihat walau dicetak dari browser lain.
- Watermark di margin halaman butuh Chrome atau Edge versi 131 ke atas (rilis akhir 2024).

## Memasang di GitHub Pages

Repository ini sudah ada di GitHub (`rendyhn/math-ladder`). GitHub Pages gratis hanya untuk repository **Public**; untuk repository private perlu akun berbayar (GitHub Pro).

1. Buka repository di GitHub → tab **Settings** → **Pages** (menu kiri).
2. Source: **Deploy from a branch**. Branch: **main**, folder **/ (root)** → **Save**.
3. Tunggu 1–2 menit, lalu muat ulang halaman Settings → Pages. Alamat situs muncul di bagian atas, misalnya `https://rendyhn.github.io/math-ladder/`.

Yang dibutuhkan website hanya `index.html`, `.nojekyll`, dan folder `lang/`. File lain (`src/`, `tools/`, `i18n/`, `build.py`) adalah kode sumber.

## Memperbarui isi website

1. Edit file di folder `src/` (materi dan soal) atau `src/lang/<kode>/` (terjemahan).
2. Jalankan `python build.py`. Ini membuat ulang `index.html` dan semua file di `lang/`.
3. Commit dan push (atau upload ulang `index.html` dan folder `lang/` lewat **Add file → Upload files**). Website diperbarui dalam 1–2 menit.

## Menambah atau memperbaiki terjemahan

Semua teks bahasa Inggris di `src/*.js` ditulis sebagai ``T`...` ``. Alat bantunya ada di `tools/i18n.py`:

| Perintah | Fungsi |
|---|---|
| `python tools/i18n.py catalog` | Mengumpulkan semua teks ke `i18n/catalog.json` dan `i18n/catalog/*.txt` (baris `@kunci`, lalu teks Inggrisnya) |
| `python tools/i18n.py status` | Tabel cakupan terjemahan per bahasa dan per jenjang |
| `python tools/i18n.py check [kode]` | Memeriksa paket bahasa: kunci yang kurang, slot `⟦0⟧`, pasangan `$`, tag HTML, format angka. Harus 0 problems |
| `python tools/i18n.py missing <kode> [file]` | Daftar kunci yang belum diterjemahkan |

Aturan menulis paket bahasa (`src/lang/<kode>/*.js`, format `addT('<kode>', { 'kunci': R`...`, … })`):

- Tulis kunci dalam tanda kutip dan nilainya sebagai ``R`...` `` (TeX cukup satu backslash). Jangan pernah menulis `${`.
- Pertahankan semua slot `⟦n⟧` dan tag HTML persis seperti aslinya; urutan slot boleh berubah.
- Rumus murni (tanpa kata) tetap perlu disalin apa adanya bila `check` memintanya; untuk bahasa berkoma desimal, ubah `2.5` menjadi `2{,}5` di dalam `$…$`.
- Untuk menambah bahasa baru: tambahkan kodenya di `LANGS` (`tools/i18n.py`) serta di `LANGS` dan `LANG_CONF` (`src/core.js`), salin salah satu folder `src/lang/<kode>/` sebagai contoh, lalu terjemahkan.

Catatan: semua terjemahan dibuat dengan bantuan AI dan belum ditinjau penutur asli. Laporan perbaikan sangat diterima.

## Isi folder

| File / folder | Fungsi |
|---|---|
| `index.html` | Website lengkap (bahasa Inggris + pemuat bahasa). Ini yang dibuka atau di-upload. |
| `lang/` | Paket bahasa hasil build (`es.js`, `zh.js`, …). Wajib ikut di-upload. |
| `.nojekyll` | Supaya GitHub Pages menyajikan file apa adanya |
| `src/lvl1-elementary.js` … `src/lvl4-university.js` | Materi dan soal SD, SMP, SMA, kuliah |
| `src/lang/<kode>/` | Terjemahan per bahasa: `0-ui.js` (tampilan, judul topik), `1-…` SD, `2-…` SMP, `3-…` SMA, `4-…` kuliah |
| `src/core.js` | Fungsi bantu (angka acak, format pecahan/rumus, sistem terjemahan, format angka per bahasa) |
| `src/app.js` | Navigasi, lembar soal, cek jawaban, kunci, print, watermark, menu bahasa |
| `src/style.css` | Tampilan (tema terang/gelap, layout print, RTL) |
| `src/head.html`, `src/body.html` | Kerangka halaman |
| `i18n/` | Katalog teks sumber untuk penerjemah (`catalog/*.txt`) dan catatan progres (`PROGRESS.md`) |
| `tools/i18n.py` | Alat katalog dan pemeriksa terjemahan |
| `build.py` | Menggabungkan `src/` menjadi `index.html` dan `lang/*.js` (`--artifact` juga membuat versi claude.ai di `dist/`) |
| `.gitignore` | Daftar folder yang tidak perlu di-upload (`.claude/`, `dist/`, `_tmp/`, …) |
