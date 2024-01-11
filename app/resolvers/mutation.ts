import {ApplicationEvent, Author, Book, Context} from '../gql';
import {faker} from '@faker-js/faker';

export const Mutation = {
  addBook: async (
    _: {},
    args: {title: string; isbn: string},
    contextValue: Context
  ) => {
    const bookId = faker.string.uuid();
    const book: Book = {
      id: bookId,
      isbn: args.isbn,
      title: args.title,
      authors: [],
    };

    contextValue.database.books.push(book);

    return book;
  },

  addAuthor: async (
    _: {},
    args: {firstName: string; lastName: string},
    contextValue: Context
  ) => {
    const authorId = faker.string.uuid();
    const author: Author = {
      id: authorId,
      firstName: args.firstName,
      lastName: args.lastName,
    };

    contextValue.database.authors.push(author);

    return author;
  },

  addBookToAuthor: async (
    _: {},
    args: {authorId: string; bookId: string},
    contextValue: Context
  ) => {
    const book = contextValue.database.books.find(
      book => book.id === args.bookId
    )!;
    const author = contextValue.database.authors.find(
      author => author.id === args.authorId
    )!;

    author.books?.push(book);

    return author;
  },

  deleteBookById: async (
    _: {},
    args: {bookId: string},
    contextValue: Context
  ) => {
    const deletedBook = contextValue.database.books.find(
      book => book.id === args.bookId
    );
    const newBooks = contextValue.database.books.filter(
      book => book.id !== deletedBook?.id
    );
    contextValue.database.books = newBooks;

    return deletedBook;
  },

  deleteAllBooks: async (_: {}, __: {}, contextValue: Context) => {
    contextValue.database.books = [];

    return true;
  },

  addApplicationEvent: async (
    _: {},
    args: {name: string},
    contextValue: Context
  ) => {
    const newEvent: ApplicationEvent = {
      id: faker.string.uuid(),
      name: args.name,
      created_at: Date.now().toString(),
    };
    contextValue.database.events.push(newEvent);

    return newEvent;
  },

  deleteAllApplicationEvents: async (_: {}, __: {}, contextValue: Context) => {
    contextValue.database.events = [];

    return true;
  },
};
