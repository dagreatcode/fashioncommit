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
router.put("/update/:id", upload.single("image"), async (req, res) => {
  try {
    const thePic = await cloudinary.uploader.upload(req.file.path);
    console.log(thePic.secure_url);
    const updatePost = await db.Blog.findByIdAndUpdate(
      {
        _id: req.params.id,
        title: req.body.title,
        post: req.body.post,
        image: `${thePic.secure_url}`,
      },
      { new: true }
    );
    res.json({ updatePost })  } catch (err) {
    console.log(err);
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

router.delete("/delete/:id", async (req, res) => {
  try {
    await db.Blog.findByIdAndDelete(req.params.id).exec();
    console.log("found");
    res.json("DELETE");
  } catch (error) {
    console.log(error);
  }
  // db.Blog.findByIdAndDelete(req.params.id)
  //   .then((result) => {
  //     console.log("Hello");
  //     res.json(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({
  //       err: true,
  //       data: null,
  //       message: "Failed to delete post",
  //     });
  // });
});
router.delete("/dPost/:id", (req, res) => {
  db.Blog.findByIdAndDelete({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
