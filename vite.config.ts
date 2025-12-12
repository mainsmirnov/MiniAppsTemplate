import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
  ],
  base: './',
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: [{ find: /^@vkontakte\/vkui$/, replacement: '@vkontakte/vkui/dist/cssm' }],
  },
});
