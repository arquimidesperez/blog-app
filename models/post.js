import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    author: { type: String, required: true },
    entryDate: { type: Date, required: true },
    //possibly use type: textarea for content
    content: { type: String, required: true },
    imgURL: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("posts", Post);
