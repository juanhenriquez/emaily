"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
// models
const user_model_1 = require("./models/user/user.model");
// types
const user_type_1 = require("./models/user/user.type");
// resolvers
const resolvers_1 = require("./resolvers");
const rootResolvers = {
    Query: Object.assign({}, resolvers_1.resolvers),
    Mutation: Object.assign({}, resolvers_1.mutations),
};
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
  }
`;
const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }
`;
exports.publicContext = { User: user_model_1.User };
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQueryType, Mutation, user_type_1.default],
    resolvers: rootResolvers,
});
//# sourceMappingURL=schema.js.map