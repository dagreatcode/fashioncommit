const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  // url string for thumbnail image
  image: {
    type: String,
    required: false,
    // default: ""
  },
  title: {
    type: String,
    required: false,
  },
  post: {
    type: String,
    required: "false",
  },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
