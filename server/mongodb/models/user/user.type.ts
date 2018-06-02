const User = `
  type User {
    id: ID!
    email: String!
    googleId: String
    firstName: String!
    lastName: String!
    fullName: String
    createdAt: Int
    updatedAt: Int
  }
`;

export default () => [User];