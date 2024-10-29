const commentTypeDef = `#graphql
  type Comment {
    _id: ID!
    articleId: ID!
    userId: ID!
    content: String!
    timestamp: String!
    likes: Int!
  }

  type Query {
    comments: [Comment!]
    comment(commentId: ID!): Comment
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    updateComment(input: UpdateCommentInput!): Comment!
    deleteComment(commentId: ID!): Comment!
  }

  input CreateCommentInput {
    articleId: ID!
    userId: ID!
    content: String!
  }

  input UpdateCommentInput {
    commentId: ID!
    content: String
  }
`;

export default commentTypeDef;
