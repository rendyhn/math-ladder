# Math Ladder

Materi dan latihan soal matematika dari SD sampai kuliah (66 topik, dalam bahasa Inggris). Soal latihannya dibuat acak setiap kali dibuka, lengkap dengan kunci jawaban dan tombol print. Dibuat oleh **@rendyhn**, 2026.

## Cara membuka di komputer

Klik dua kali `index.html`, lalu buka di Chrome atau Edge. Perlu koneksi internet untuk menampilkan rumus (MathJax) dan font.

Untuk export ke PDF: klik salah satu tombol Print, lalu pilih **Save as PDF**.

## Watermark

- **Di website:** tulisan `@rendyhn 2026` selalu tampil di pojok kanan bawah.
- **Di PDF / hasil print:** setiap halaman punya `Math Ladder · @rendyhn 2026` di kanan bawah dan nomor halaman di kiri bawah. Setelah dipasang di GitHub Pages, alamat situsnya otomatis ikut tercetak, misalnya `Math Ladder · @rendyhn 2026 · rendyhn.github.io/math-ladder`.
- Lembar soal, kunci jawaban, dan materi juga punya baris **Source: …** di bagian atas atau bawahnya, jadi sumbernya tetap terlihat walau dicetak dari browser lain.
- Watermark di margin halaman butuh Chrome atau Edge versi 131 ke atas (rilis akhir 2024).

## Memasang di GitHub Pages (tanpa perlu install git)

1. Login ke [github.com](https://github.com). Kalau belum punya akun, daftar dulu.
2. Klik **+** (kanan atas) → **New repository**.
   - Repository name: `math-ladder`
   - Pilih **Public** (GitHub Pages gratis hanya untuk repository publik)
   - Klik **Create repository**.
3. Di halaman repository yang baru, klik **uploading an existing file**.
4. Seret (drag) file dan folder berikut dari folder ini ke halaman upload:
   - `index.html` dan `.nojekyll` ← **wajib**, ini websitenya
   - `README.md`, `build.py`, `.gitignore`, folder `src` ← opsional, sebagai cadangan kode sumber
   - **Jangan** upload folder `.claude` dan `dist`.
5. Klik **Commit changes**.
6. Buka tab **Settings** → **Pages** (menu kiri).
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → **Save**.
7. Tunggu 1–2 menit, lalu muat ulang halaman Settings → Pages. Alamat situs muncul di bagian atas, misalnya `https://NAMA-AKUN.github.io/math-ladder/`.

## Memperbarui isi website

1. Edit file di folder `src/`.
2. Jalankan `python build.py` di folder ini untuk membuat ulang `index.html`.
3. Di GitHub: **Add file** → **Upload files** → seret `index.html` yang baru → **Commit changes**. Website diperbarui dalam 1–2 menit.

## Isi folder

| File / folder | Fungsi |
|---|---|
| `index.html` | Website lengkap dalam satu file. Ini yang dibuka atau di-upload. |
| `.nojekyll` | Supaya GitHub Pages menyajikan file apa adanya |
| `src/lvl1-elementary.js` … `src/lvl4-university.js` | Materi dan soal SD, SMP, SMA, kuliah |
| `src/core.js` | Fungsi bantu (angka acak, format pecahan dan rumus) |
| `src/app.js` | Navigasi, lembar soal, cek jawaban, kunci, print, watermark |
| `src/style.css` | Tampilan (tema terang/gelap, layout print) |
| `src/head.html`, `src/body.html` | Kerangka halaman |
| `build.py` | Menggabungkan `src/` menjadi `index.html` (`--artifact` juga membuat versi claude.ai di `dist/`) |
| `.gitignore` | Daftar folder yang tidak perlu di-upload |
| `.claude/`, `dist/` | Khusus untuk bekerja dengan Claude, tidak perlu di-upload |
