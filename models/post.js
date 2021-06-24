import mongoose from "mongoose";

const Schema = mongoose.Schema;
// schema is a data structure, in a specific format.
// defining format below.

const Post = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    entryDate: { type: Date, required: true },
    //possibly use type: textarea for content
    content: { type: String, required: true },
    imgURL: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("posts", Post);

// Post represents a model

// ask data if its set up this way, and if it's required. ensures format.
// using .model method to create a "collection". Another name for an array.
// mongoDB collection === js array. in our example posts = collection. and post is abiding by the document schema
// so these objects can be seen as documents
// mongoDB decouments = js objects.
