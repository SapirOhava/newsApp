import Comment from "../models/comment.model.js";

const commentResolver = {
  Query: {
    comments: async () => {
      return await Comment.find();
    },
    comment: async (_, { commentId }) => {
      return await Comment.findById(commentId);
    },
  },
  Mutation: {
    createComment: async (_, { input }) => {
      const newComment = new Comment(input);
      return await newComment.save();
    },
    updateComment: async (_, { input }) => {
      return await Comment.findByIdAndUpdate(input.commentId, input, {
        new: true,
      });
    },
    deleteComment: async (_, { commentId }) => {
      return await Comment.findByIdAndRemove(commentId);
    },
  },
};

export default commentResolver;
