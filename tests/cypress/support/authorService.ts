import {ApolloClient, NormalizedCacheObject} from '@apollo/client';

// TODO
class AuthorService {
  private readonly client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  //TODO: add methods
}

export default AuthorService;
