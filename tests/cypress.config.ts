import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'e2e/**/*.spec.cy',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
