const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.Blogs.find({})
      // .populate("Blogs")
      .then((foundBlogs) => {
        res.json(foundBlogs);
      });
  });

  router.post("/", (req, res) => {
    db.Blogs.create(req.body).then((newBlogs) => {
      res.json(newBlogs);
    });
  });
  
  router.put("/:id", (req, res) => {
    db.Blogs.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (updateBlogs) => {
        res.json(updateBlogs);
      }
    );
  });
  
  router.delete("/:id", (req, res) => {
    db.Blogs.findByIdAndDelete(req.params.id).then((result) => {
      res.json(result);
    });
  });
  
  module.exports = router;