import gql from 'graphql-tag';

export const POSTS_QUERY = gql`
query Posts($limit: Int) {
  posts(limit: {limit: $limit}) {
    collection {
      id
      title
      date
      perex
      createdAt
      smallImage
      path
    }
  }
}
`;
