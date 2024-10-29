import Category from "../models/category.model.js";

const categoryResolver = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    category: async (_, { categoryId }) => {
      return await Category.findById(categoryId);
    },
  },
  Mutation: {
    createCategory: async (_, { input }) => {
      const newCategory = new Category(input);
      return await newCategory.save();
    },
    updateCategory: async (_, { input }) => {
      return await Category.findByIdAndUpdate(input.categoryId, input, {
        new: true,
      });
    },
    deleteCategory: async (_, { categoryId }) => {
      return await Category.findByIdAndRemove(categoryId);
    },
  },
};

export default categoryResolver;
