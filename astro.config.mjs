// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. TAMBAHKAN DUA BARIS INI UNTUK GITHUB PAGES
  site: 'https://Nakula4.github.io', 
  base: 'https://github.com/Nakula4/myweb.git', // SESUAIKAN dengan nama repositori GitHub Anda
  
  // Konfigurasi Tailwind Vite Anda (biarkan apa adanya)
  vite: {
    plugins: [tailwindcss()]
  }
});