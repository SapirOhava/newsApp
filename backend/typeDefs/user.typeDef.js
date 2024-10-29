const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    email: String!
    passwordHash: String!
    role: String!
    createdAt: String!
    profileImage: String
  }

  type Query {
    authUser: User
    # users: [User!]
    user(userId: ID!): User
  }

  type Mutation {
    signUp(input: SignUpInput!): User!
    login(input: LoginInput!): User!
    logout: LogoutResponse!
  }

  type LogoutResponse {
    message: String!
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }
`;

export default userTypeDef;
