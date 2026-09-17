import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from "vite-plugin-sass-dts";
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts()
  ],
  css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [
            path.resolve(import.meta.dirname, "./src/styles")
          ]
        }
      }
    }
});
