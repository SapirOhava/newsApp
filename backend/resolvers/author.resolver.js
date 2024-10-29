import Author from "../models/author.model.js";

const authorResolver = {
  Query: {
    authors: async () => {
      return await Author.find();
    },
    author: async (_, { authorId }) => {
      return await Author.findById(authorId);
    },
  },
  Mutation: {
    createAuthor: async (_, { input }) => {
      const newAuthor = new Author(input);
      return await newAuthor.save();
    },
    updateAuthor: async (_, { input }) => {
      return await Author.findByIdAndUpdate(input.authorId, input, {
        new: true,
      });
    },
    deleteAuthor: async (_, { authorId }) => {
      return await Author.findByIdAndRemove(authorId);
    },
  },
};

export default authorResolver;
