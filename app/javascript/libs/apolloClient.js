import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

const csrfToken = document.querySelector('meta[name=csrf-token]')?.getAttribute('content');

const httpLink = createHttpLink({
  uri: '/graphql',
  headers: {
    'X-CSRF-Token': csrfToken,
  },
});

// Strip __typename from variables
const cleanTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }
  return forward(operation);
});

// Cache implementation
const cache = new InMemoryCache({});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: ApolloLink.from([cleanTypenameLink, httpLink]),
  cache,
});

export default apolloClient;
