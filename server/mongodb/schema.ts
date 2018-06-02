import { makeExecutableSchema } from 'graphql-tools';

// models
import { User } from './models/user/user.model';

// types
import UserType from './models/user/user.type';

// resolvers
import { resolvers, mutations } from './resolvers';

const rootResolvers = {
  Query: { ...resolvers },
  Mutation: { ...mutations },
}

const RootQueryType = `
  type Query {
    getUser(id: ID!): User
  }
`;

const Mutation = `
  type Mutation {
    createUser(
      firstName: String!,
      lastName: String!,
      email: String!,
      password: String!
    ): User

    logout: User
  }
`;

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }
`;

export const publicContext = { User }

export const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQueryType, Mutation, UserType],
  resolvers: rootResolvers,
});