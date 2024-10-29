import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  profileImage: { type: String },
});

const Author = mongoose.model("Author", authorSchema);
export default Author;
