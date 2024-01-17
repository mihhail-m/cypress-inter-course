import {defineConfig} from 'cypress';
import LibraryAppGqlClient  from './cypress/support/client';

export default defineConfig({
  e2e: {
    env: {
      variable1: 1
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const client = new LibraryAppGqlClient();

      on('task', {
          resetBooks: (): null => {
            client.resetBooks();

            return null;
          },

          addBook: async ({ title, isbn }): Promise<string> => {
            const bookId = await client.addBook(title, isbn);

            return bookId;
          }
      });
    },
  },
});
