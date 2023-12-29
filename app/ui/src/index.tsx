import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './index.css';
import App from './App';

const gqlUri = process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:5050/gql';
const client = new ApolloClient({
  uri: gqlUri,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
