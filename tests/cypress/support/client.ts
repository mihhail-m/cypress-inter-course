import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject } from '@apollo/client';
import BookService from './bookService';
import AuthorService from './authorService';

class LibraryAppGqlClient {

    private readonly apolloClient: ApolloClient<NormalizedCacheObject>;
    private bookService: BookService;
    private authorService: AuthorService;

    constructor() {
        this.apolloClient = new ApolloClient({
            uri: 'http://localhost:5050/gql',
            cache: new InMemoryCache()
        });
        this.bookService = new BookService(this.apolloClient);
        this.authorService = new AuthorService(this.apolloClient);
    }

    resetBooks() {
        this.bookService.resetBooks();
    }

    addBook(title: string, isbn: string) {
        return this.bookService.addBook(title, isbn);
    }

    // TODO
    resetAuthors() {
    }

    // TODO
    addAuthor(firstName: string, lastName: string) {

    }

};

export default LibraryAppGqlClient;
