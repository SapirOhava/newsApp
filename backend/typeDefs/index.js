// here we are going to merge them into this index.js
// file and then export them from here
import { mergeTypeDefs } from "@graphql-tools/merge";

import articleTypeDef from "./article.typeDef.js";
import authorTypeDef from "./author.typeDef.js";
import categoryTypeDef from "./category.typeDef.js";
import tagTypeDef from "./tag.typeDef.js";
import commentTypeDef from "./comment.typeDef.js";
import userTypeDef from "./user.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
  articleTypeDef,
  authorTypeDef,
  categoryTypeDef,
  tagTypeDef,
  commentTypeDef,
  userTypeDef,
]);

export default mergedTypeDefs;
