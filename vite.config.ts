import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // base path for GitHub Pages — change 'Pomo' to your repo name if different
  base: '/Pomo/',
  plugins: [vue()],
  // ...existing config (if you have other settings, merge base into your existing vite.config.ts)...
});