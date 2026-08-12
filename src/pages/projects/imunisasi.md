---
layout: ../../layouts/ProjectLayout.astro
title: Sistem Pengingat Imunisasi Klinik
category: Mobile App
date: Februari 2026
github: "https://github.com/Nakula4/aplikasi-imunisasi"
---

Proyek ini bermula dari sebuah masalah sederhana namun berdampak besar di lapangan: bagaimana cara memastikan orang tua tidak melewatkan jadwal imunisasi anak mereka di tengah kesibukan sehari-hari?

Sebagai bagian dari proyek tugas akhir saya, saya membangun aplikasi _mobile_ ini untuk menjembatani kesenjangan komunikasi antara pihak klinik dan pasien melalui sistem digital yang terintegrasi.

## Tantangan di Lapangan

Sebelum adanya sistem ini, klinik sering kali mengandalkan pencatatan manual dan buku KMS (Kartu Menuju Sehat) fisik yang rentan terselip atau rusak. Pihak klinik kesulitan melakukan _follow-up_ pasien, sementara orang tua sering kali lupa jadwal imunisasi lanjutan karena tidak ada sistem pengingat yang proaktif. Hal ini berisiko menurunkan tingkat keberhasilan program imunisasi wajib.

## Pendekatan & Solusi Teknis

Tujuan saya bukan sekadar membuat aplikasi yang bisa dibuka, tetapi membangun sistem yang andal di belakang layar. Oleh karena itu, saya menerapkan pendekatan rekayasa perangkat lunak yang terstruktur:

- **Arsitektur Sistem (Sequence Diagram):**
  Saya merancang _System Sequence Diagram_ (SSD) yang komprehensif. Langkah ini krusial untuk memetakan bagaimana data mengalir secara logis antara _user_ (orang tua), sistem penjadwalan, hingga _database_ klinik, sehingga notifikasi dapat dikirimkan secara presisi.
- **Optimalisasi Basis Data:**
  Aplikasi yang baik dimulai dari fondasi data yang kuat. Saya melakukan proses **normalisasi database** secara ketat untuk mencegah anomali atau duplikasi (redudansi) data rekam medis pasien. Ini memastikan aplikasi tetap ringan dan responsif meskipun data pengguna terus bertambah.

- **Fokus pada Pengguna (UAT):**
  Sebuah _software_ hanya berguna jika bisa digunakan. Sebelum perilisan final, saya melibatkan staf klinik secara langsung melalui metode _User Acceptance Testing_ (UAT). Kuesioner dan pengujian langsung ini membantu saya menyesuaikan antarmuka (UI/UX) agar benar-benar selaras dengan kebiasaan dan alur kerja mereka sehari-hari.

## Hasil & Pembelajaran

Membangun sistem pengingat imunisasi ini memberi saya wawasan berharga tentang bagaimana mengonversi masalah bisnis di dunia nyata ke dalam baris kode. Aplikasi ini tidak hanya mendigitalisasi proses administratif klinik, tetapi secara proaktif membantu menjaga kesehatan anak-anak melalui fitur pengingat otomatisnya.

> _"Bagi saya, perangkat lunak terbaik adalah yang teknologinya bekerja tanpa terlihat, namun manfaatnya langsung terasa oleh pengguna."_
