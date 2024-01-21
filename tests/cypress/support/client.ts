import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import BookService from './bookService';
import AuthorService from './authorService';
import ApplicationEventsService from './applicationEventService';

class LibraryAppGqlClient {
  private readonly apolloClient: ApolloClient<NormalizedCacheObject>;
  private bookService: BookService;
  private authorService: AuthorService;
  private applicationEventService: ApplicationEventsService;

  constructor() {
    this.apolloClient = new ApolloClient({
      // TODO (optional): Read uri value from .env file
      uri: 'http://localhost:5050/gql',
      cache: new InMemoryCache(),
    });
    this.bookService = new BookService(this.apolloClient);
    this.authorService = new AuthorService(this.apolloClient);
    this.applicationEventService = new ApplicationEventsService(
      this.apolloClient
    );
  }

  resetBooks() {
    this.bookService.resetBooks();
  }

  addBook(title: string, isbn: string) {
    return this.bookService.addBook(title, isbn);
  }

  // TODO
  // HINT: Inspect available mutation in the Apollo dashboard
  resetAuthors() {}

  // TODO
  // HINT: Inspect application network tab
  addAuthor(firstName: string, lastName: string) {}

  // TODO
  // HINT: Inspect application network tab
  addApplicationEvent(eventName: string) {}
}

export default LibraryAppGqlClient;
