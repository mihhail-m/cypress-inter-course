/* eslint-disable @typescript-eslint/no-unused-vars */
import {Context} from '../gql';

export const Query = {
  getAuthors: (_: {}, __: {}, contextValue: Context) => {
    return contextValue.database.authors;
  },

  getAuthorByName: (
    _: {},
    args: {firstName: string; lastName: string},
    contextValue: Context
  ) => {
    return contextValue.database.authors.find(
      author =>
        author.firstName === args.firstName && author.lastName === args.lastName
    );
  },

  getAuthorById: (_: {}, args: {id: string}, contextValue: Context) => {
    return contextValue.database.authors.find(author => author.id === args.id);
  },

  getBooks: (_: {}, __: {}, contextValue: Context) => {
    return contextValue.database.books;
  },

  getBookByTitle: (_: {}, args: {title: string}, contextValue: Context) => {
    return contextValue.database.books.find(book => book.title === args.title);
  },

  getBookById: (_: {}, args: {id: string}, contextValue: Context) => {
    return contextValue.database.books.find(book => book.id === args.id);
  },
};
