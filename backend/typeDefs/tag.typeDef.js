const tagTypeDef = `#graphql
  type Tag {
    _id: ID!
    name: String!
  }

  type Query {
    tags: [Tag!]
    tag(tagId: ID!): Tag
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag!
    updateTag(input: UpdateTagInput!): Tag!
    deleteTag(tagId: ID!): Tag!
  }

  input CreateTagInput {
    name: String!
  }

  input UpdateTagInput {
    tagId: ID!
    name: String
  }
`;

export default tagTypeDef;
