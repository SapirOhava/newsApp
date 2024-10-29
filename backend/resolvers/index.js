import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import articleResolver from "./article.resolver.js"; // New resolver
import authorResolver from "./author.resolver.js"; // New resolver
import categoryResolver from "./category.resolver.js"; // New resolver
import tagResolver from "./tag.resolver.js"; // New resolver
import commentResolver from "./comment.resolver.js"; // New resolver

// Merge all resolvers into one resolver
const mergedResolvers = mergeResolvers([
  userResolver,
  articleResolver,
  authorResolver,
  categoryResolver,
  tagResolver,
  commentResolver,
]);

export default mergedResolvers;
