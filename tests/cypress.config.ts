import {defineConfig} from 'cypress';
import LibraryAppGqlClient from './cypress/support/client';
// HINT
import {mkdir, rename, unlinkSync, writeFile} from 'fs';
import path from 'path';

const cypressDefaultConfig = defineConfig({
  video: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const client = new LibraryAppGqlClient();

      // TODO:
      // Rename screenshots files
      // Screenshots should follow next format: [currentDate]-name-of-the-test.png
      on('after:screenshot', details => {});

      // TODO:
      // Save recordings and save results into JSON file of the failed tests only
      // JSON files should be saved into folder name reports
      // JSON file should follow the next format: [currentDate]-name-of-the-test.json
      on('after:spec', (_, results) => {});

      on('task', {
        resetBooks: (): null => {
          client.resetBooks();

          return null;
        },

        addBook: async ({title, isbn}): Promise<string> => {
          const bookId = await client.addBook(title, isbn);

          return bookId;
        },

        // TODO
        resetAuthors: (): null => {
          return null;
        },

        // TODO
        // Need to return authorId to check that author was actually added in the UI
        addAuthor: async (): Promise<string> => {
          return 'authorId';
        },

        addApplicationEvent: async (): Promise<string> => {
          return 'eventId';
        },
      });
    },
  },
});

export default cypressDefaultConfig;
