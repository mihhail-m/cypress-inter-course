// Typescript declaration of GQL types
export interface Context {
  database: Database;
}
// All built-in and custom scalars, mapped to their actual values
export type Scalars = {
  ID: string;
  String: string;
  Int: number;
};

export type Database = {
  books: Book[];
  authors: Author[];
};

export type Book = {
  id: Scalars['ID'];
  isbn: Scalars['String'];
  title: Scalars['String'];
  authors?: Author[];
};

export type Author = {
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  books?: Book[];
};
