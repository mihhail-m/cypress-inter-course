import {gql} from '@apollo/client';

const Query = {
  getBooks: gql`
    query GetBooks {
      getBooks {
        id
        isbn
        title
        authors {
          id
          firstName
          lastName
        }
      }
    }
  `,

  getAuthors: gql`
    query GetAuthors {
      getAuthors {
        id
        firstName
        lastName
        books {
          id
        }
      }
    }
  `,
};

export default Query;
