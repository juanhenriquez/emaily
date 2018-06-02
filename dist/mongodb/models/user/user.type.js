"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = () => [User];
//# sourceMappingURL=user.type.js.map