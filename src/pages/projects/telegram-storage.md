---
layout: ../../layouts/ProjectLayout.astro
title: Telegram Storage (Cloud Storage Gratis)
category: Open Source Tool
date: Juli 2026
github: "https://github.com/Nakula4/telegram-storage"
---

Penyimpanan awan (_cloud storage_) sering kali menjadi beban biaya tak terlihat bagi pengembang independen maupun pengguna awam. Di sisi lain, Telegram memiliki infrastruktur pengiriman _file_ yang sangat kuat dengan kapasitas tak terbatas, namun fungsi utamanya adalah sebagai aplikasi pesan instan.

Melihat potensi ini, saya merancang **Telegram Storage**, sebuah tools _open source_ yang tidak perlu memikirkan batas penyimpanan awan

## Fitur

Inti dari proyek ini adalah "memanfaatkan" secara legal fitur penyimpanan tak terbatas dari Telegram. Bot ini memiliki fitur:

- **Penyortiran Otomatis:** Setiap user mengunggah file di bagian _general_ , maka bot akan otomatis menyortir file sesuai formatnya.
- **Auto Tag (Format & Tanggal):** File yang diunggah akan otomatis diberikan tag sesuai _format_ #gambar #tanggal.
- **Auto Cleanup:** Menghapus pesan setelah upload setelah 3 detik.

## Mengapa Ini Dibutuhkan?

Ini adalah solusi ketika user tidak ingin berlangganan cloud storage atau mencari cloud storage yang simpel dan tidak perlu membutuhkan aplikasi tambahan.

## Cara Penggunaan

Cara penggunaan dapat dilihat direpositori _github_ saya

> _"Terkadang, inovasi terbaik bukan berasal dari penciptaan teknologi baru dari nol, melainkan dari cara kita memanfaatkan sumber daya yang sudah ada dengan perspektif yang benar-benar berbeda."_
