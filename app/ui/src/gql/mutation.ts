import {gql} from '@apollo/client';

const Mutation = {
  addNewBookAndAuthor: gql`
    mutation addNewBookAndAuhor(
      $title: String!
      $isbn: String!
      $firstName: String!
      $lastName: String!
    ) {
      addBook(title: $title, isbn: $isbn) {
        id
      }

      addAuthor(firstName: $firstName, lastName: $lastName) {
        id
      }
    }
  `,

  addBookToAuthor: gql`
    mutation AddBookToAuthor($authorId: String!, $bookId: String!) {
      addBookToAuthor(authorId: $authorId, bookId: $bookId) {
        id
        firstName
        lastName
      }
    }
  `,
};

export default Mutation;
