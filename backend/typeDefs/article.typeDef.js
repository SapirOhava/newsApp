const articleTypeDef = `#graphql
  type Article {
    _id: ID!
    title: String!
    content: String!
    authorId: ID!
    publishedDate: String!
    tags: [String]
    category: String!
    imageUrl: String
    isFeatured: Boolean!
  }

  type Query {
    articles: [Article!]
    article(articleId: ID!): Article
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article!
    updateArticle(input: UpdateArticleInput!): Article!
    deleteArticle(articleId: ID!): Article!
  }

  input CreateArticleInput {
    title: String!
    content: String!
    authorId: ID!
    publishedDate: String!
    tags: [String]
    category: String!
    imageUrl: String
    isFeatured: Boolean
  }

  input UpdateArticleInput {
    articleId: ID!
    title: String
    content: String
    authorId: ID
    publishedDate: String
    tags: [String]
    category: String
    imageUrl: String
    isFeatured: Boolean
  }
`;

export default articleTypeDef;
