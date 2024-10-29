import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedDate: { type: Date, required: true },
  tags: [{ type: String }],
  category: { type: String, required: true },
  imageUrl: { type: String },
  isFeatured: { type: Boolean, default: false },
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
