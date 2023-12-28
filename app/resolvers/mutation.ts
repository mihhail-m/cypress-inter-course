import {Author, Book, Context} from '../gql';
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
};
