import {ApolloClient, NormalizedCacheObject, gql} from '@apollo/client';

class BookService {
  // Containeing for books
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async resetBooks() {
    const RESET_BOOKS = gql`
      mutation ResetBooks {
        deleteAllBooks
      }
    `;

    this.client.mutate({
      mutation: RESET_BOOKS,
    });
  }

  async addBook(title: string, isbn: string) {
    const ADD_BOOK = gql`
      mutation AddBook($title: String!, $isbn: String!) {
        addBook(title: $title, isbn: $isbn) {
          id
        }
      }
    `;

    const {data} = await this.client.mutate({
      mutation: ADD_BOOK,
      variables: {
        title: title,
        isbn: isbn,
      },
    });

    return data.addBook.id;
  }
}

export default BookService;
