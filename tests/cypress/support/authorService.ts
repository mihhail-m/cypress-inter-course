import { ApolloClient, NormalizedCacheObject, gql } from '@apollo/client';

// TODO
class AuthorService {
    private client: ApolloClient<NormalizedCacheObject>

    constructor(client: ApolloClient<NormalizedCacheObject>) {
        this.client = client
    }

    async resetAuthors() {
      const RESET_AUTHORS = gql``;

      this.client.mutate({});
    }

    async addAuthor(firstName: string, lastName: string) {
        const ADD_AUTHOR = gql``;

        const { data } = await this.client.mutate({});

        return data.addAuthor.id;
    }
}

export default AuthorService;
