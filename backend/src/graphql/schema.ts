import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`;
