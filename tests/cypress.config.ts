import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'e2e/**/*.spec.cy',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
