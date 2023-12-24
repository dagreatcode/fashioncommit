const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  // url string for thumbnail image
  title: {
    type: String,
    required: false,
  },
  post: {
    type: String,
    required: "false",
  },
  image: {
    type: String,
    required: false,
    // default: ""
  },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
