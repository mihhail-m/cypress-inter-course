import express from 'express';
import cors from 'cors';
import gql from 'graphql-tag';
import {ApolloServer} from '@apollo/server';
import {buildSubgraphSchema} from '@apollo/subgraph';
import {expressMiddleware} from '@apollo/server/express4';
import {readFileSync} from 'fs';
import resolvers from './resolvers';
import {Context} from './gql';
import database from './data/database';

const PORT = process.env.PORT || 5050;
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || '/gql';

const app = express();

app.use(cors());
app.use(express.json());

const typeDefs = gql(
  readFileSync('app/schema.graphql', {
    encoding: 'utf-8',
  })
);

const server = new ApolloServer<Context>({
  // @ts-ignore
  schema: buildSubgraphSchema({typeDefs, resolvers}),
});
await server.start();

app.use(
  GRAPHQL_ENDPOINT,
  cors(),
  express.json(),
  // @ts-ignore
  expressMiddleware(server, {
    context: async () => {
      return {
        database: database,
      };
    },
  })
);
// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
