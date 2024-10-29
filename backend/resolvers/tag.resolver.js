import Tag from "../models/tag.model.js";

const tagResolver = {
  Query: {
    tags: async () => {
      return await Tag.find();
    },
    tag: async (_, { tagId }) => {
      return await Tag.findById(tagId);
    },
  },
  Mutation: {
    createTag: async (_, { input }) => {
      const newTag = new Tag(input);
      return await newTag.save();
    },
    updateTag: async (_, { input }) => {
      return await Tag.findByIdAndUpdate(input.tagId, input, { new: true });
    },
    deleteTag: async (_, { tagId }) => {
      return await Tag.findByIdAndRemove(tagId);
    },
  },
};

export default tagResolver;
