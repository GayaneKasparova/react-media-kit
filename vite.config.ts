import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.tsx', 'src/main.tsx', 'src/index.ts', 'src/App.tsx'],
    },
  }
} as UserConfig);



