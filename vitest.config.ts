import { defineVitestConfig } from '@nuxt/test-utils/config';
import path from 'path';

export default defineVitestConfig({
  plugins: [],
  test: {
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    environment: 'nuxt',
    include: ['**/*.test.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
      '@root': path.resolve(__dirname, './'),
      '@pages': path.resolve(__dirname, 'app/pages'),
    },
  },
});
