const authorTypeDef = `#graphql
  type Author {
    _id: ID!
    name: String!
    email: String!
    bio: String
    profileImage: String
  }

  type Query {
    authors: [Author!]
    author(authorId: ID!): Author
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput!): Author!
    updateAuthor(input: UpdateAuthorInput!): Author!
    deleteAuthor(authorId: ID!): Author!
  }

  input CreateAuthorInput {
    name: String!
    email: String!
    bio: String
    profileImage: String
  }

  input UpdateAuthorInput {
    authorId: ID!
    name: String
    email: String
    bio: String
    profileImage: String
  }
`;

export default authorTypeDef;
