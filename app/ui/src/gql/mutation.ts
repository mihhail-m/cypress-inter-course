import {gql} from '@apollo/client';

const Mutation = {
  addNewBookAndAuthor: gql`
    mutation AddNewBookAndAuhor(
      $title: String!
      $isbn: String!
      $firstName: String!
      $lastName: String!
    ) {
      addBook(title: $title, isbn: $isbn) {
        id
        isbn
        title
      }

      addAuthor(firstName: $firstName, lastName: $lastName) {
        id
        firstName
        lastName
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

  addApplicationEvent: gql`
    mutation AddApplicationEvent($name: String!) {
      addApplicationEvent(name: $name) {
        id
        name
        createdAt
      }
    }
  `,
};

export default Mutation;
