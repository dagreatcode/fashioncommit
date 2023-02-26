const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  // url string for thumbnail image
  image: {
    type: String
    // default: ""
  },
  title: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: "true"
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
