import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post{
    id: Int!
    title: String!
    content: String!
    user: User!
  }

  type Query {
    users: [User!]!
    posts: [Post!]!
  }
`;
