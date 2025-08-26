import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(), // Allows path aliases from tsconfig.json
  ],
  root: '.', // project root
  base: './', // ensures asset paths work correctly
  publicDir: 'public', // default, can be omitted
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
