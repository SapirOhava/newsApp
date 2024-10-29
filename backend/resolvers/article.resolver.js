import Article from "../models/article.model.js";

const articleResolver = {
  Query: {
    articles: async () => {
      return await Article.find();
    },
    article: async (_, { articleId }) => {
      return await Article.findById(articleId);
    },
  },
  Mutation: {
    createArticle: async (_, { input }) => {
      const newArticle = new Article(input);
      return await newArticle.save();
    },
    updateArticle: async (_, { input }) => {
      return await Article.findByIdAndUpdate(input.articleId, input, {
        new: true,
      });
    },
    deleteArticle: async (_, { articleId }) => {
      return await Article.findByIdAndRemove(articleId);
    },
  },
};

export default articleResolver;
