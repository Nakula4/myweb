---
layout: ../../layouts/ProjectLayout.astro
title: LevelUp - Workout Discipline
category: Mobile App
date: Agustus 2025
github: "https://github.com/Nakula4/projectLevelup"
---

Konsistensi adalah tantangan terbesar dalam berolahraga. Banyak orang memulai rutinitas kebugaran fisik dengan semangat yang tinggi, namun kehilangan motivasi di minggu kedua atau ketiga.

Berangkat dari masalah tersebut, saya mengembangkan **LevelUp**, sebuah aplikasi pelacak kedisiplinan _workout_ yang dirancang untuk mengubah rutinitas olahraga menjadi sebuah kebiasaan yang terukur, visual, dan memotivasi.

## Pendekatan Fitur & Solusi

Alih-alih hanya menjadi aplikasi pencatat biasa, saya merancang aplikasi ini dengan fokus pada retensi pengguna dan performa aplikasi yang ringan:

- **Visualisasi Perkembangan (fl_chart):**
  Angka saja terkadang membosankan. Oleh karena itu, saya mengimplementasikan _library_ **`fl_chart`** untuk menampilkan grafik interaktif. Dengan grafik ini, pengguna dapat melihat fluktuasi intensitas dan frekuensi olahraga mereka dari minggu ke minggu, memberikan dorongan visual yang kuat saat mereka melihat grafik tersebut menanjak.
- **Penyimpanan Lokal (Shared Preferences):**
  Mempertimbangkan bahwa pengguna sering kali berolahraga di area _gym_ atau _basement_ yang minim koneksi internet, aplikasi ini harus bisa berfungsi 100% secara _offline_. Saya memanfaatkan **`shared_preferences`** untuk membaca dan menulis data _streak_ (beruntun) pengguna secara instan dan persisten di dalam perangkat.
- **Performa & Arsitektur Lintas Platform:**
  Dibangun menggunakan ekosistem **Flutter**, antarmuka aplikasi dirancang dengan pemisahan yang jelas antara lapisan antarmuka (UI) dan logika data. Hal ini memastikan animasi perpindahan layar tetap berjalan mulus meskipun aplikasi sedang merender data grafik yang cukup kompleks.

## Hasil Akhir

Membangun LevelUp membuktikan kepada saya bahwa rekayasa perangkat lunak bukan hanya tentang menulis fungsi agar tidak _error_, melainkan tentang bagaimana merancang sebuah sistem yang dapat berinteraksi dengan kebiasaan manusia dan memberikan dampak positif.

> _"Disiplin adalah otot yang sesungguhnya. Semakin sering dilatih, semakin kuat. Aplikasi ini hadir sebagai cermin digital untuk melihat perkembangannya."_
