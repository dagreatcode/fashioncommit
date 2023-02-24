const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: [String],
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
