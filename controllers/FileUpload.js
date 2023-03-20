const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const db = require("../models");
const cloudinary = require("../utils/cloudinary");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const thePic = await cloudinary.uploader.upload(req.file.path);
    console.log(thePic.secure_url);
    const theBase = await db.Blog.create({
      title: req.body.title,
      post: req.body.post,
      image: `${thePic.secure_url}`,
    });
    res.json({ theBase });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get("/search/:title", async (req, res) => {
  try {
    const looking = await db.Blog.findOne({ title: req.params.id });
    console.log(looking);
    res.json(looking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get("/getPosts", (req, res) => {
  db.Blog.find({})
    // .populate("user")
    .then((foundPosts) => {
      res.json(foundPosts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to get all post",
      });
    });
});

router.get("/post/:id", (req, res) => {
  db.Blog.findOne({ _id: req.params.id })
    .then((foundBlogs) => {
      res.json(foundBlogs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to get one post",
      });
    });
});

router.put("/post/:id", (req, res) => {
  db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updateBlog) => {
      res.json(updateBlog);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to update post",
      });
    });
});

router.delete("/post/:id", (req, res) => {
  db.Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to delete post",
      });
    });
});

module.exports = router;
