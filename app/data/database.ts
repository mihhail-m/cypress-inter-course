import {faker} from '@faker-js/faker';
import {Book, Author, Database} from '../gql';

export const createRandomAuthor = (): Author => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    books: [],
  };
};
const authors: Author[] = faker.helpers.multiple(createRandomAuthor, {
  count: 10,
});

export const createRandomBook = (): Book => {
  return {
    id: faker.string.uuid(),
    isbn: faker.commerce.isbn(),
    title: faker.lorem.sentence(5),
    authors: faker.helpers.arrayElements(authors, {min: 1, max: 3}),
  };
};
const books: Book[] = faker.helpers.multiple(createRandomBook, {
  count: 10,
});

const database: Database = {
  books: books,
  authors: authors,
};

export default database;
