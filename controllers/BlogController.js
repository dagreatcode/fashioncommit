const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.Blog.find({})
      // .populate("Blog")
      .then((foundBlog) => {
        res.json(foundBlog);
      });
  });

  router.post("/", (req, res) => {
    db.Blog.create(req.body).then((newBlog) => {
      res.json(newBlog);
    });
  });
  
  router.put("/:id", (req, res) => {
    db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (updateBlog) => {
        res.json(updateBlog);
      }
    );
  });
  
  router.delete("/:id", (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id).then((result) => {
      res.json(result);
    });
  });
  
  module.exports = router;