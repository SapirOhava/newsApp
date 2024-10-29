const categoryTypeDef = `#graphql
  type Category {
    _id: ID!
    name: String!
    description: String
  }

  type Query {
    categories: [Category!]
    category(categoryId: ID!): Category
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
    updateCategory(input: UpdateCategoryInput!): Category!
    deleteCategory(categoryId: ID!): Category!
  }

  input CreateCategoryInput {
    name: String!
    description: String
  }

  input UpdateCategoryInput {
    categoryId: ID!
    name: String
    description: String
  }
`;

export default categoryTypeDef;
