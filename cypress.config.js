// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${PORT}/`,
    setupNodeEvents() {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/*.spec.ts',
  },
});
