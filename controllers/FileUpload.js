const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const db = require("../models");
const cloudinary = require("../utils/cloudinary");
const formidable = require("formidable");
const fs = require("fs")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
var storage2 = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/uploads/");
  },
  filename: (req, file, callback) => {
    var filetype = file.mimetype;
    var fileFormate = filetype.split("/")[1];
    callback(null, Date.now() + "." + fileFormate);
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

router.put("/post/edit/:id", upload.single("images"), (req, res) => {
  const id = req.params.id;

  const body = req.body;

  console.log("body:", body);
  console.log("req:", req);

  const title = body.title;
  const post = body.post;
  const image = req.file.filename;

  db.Blog.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title,
        post,
        image,
      },
    },
    { new: true }
  )
    .then((post) => {
      req.flash("success", "Edits submitted successfully");
      res.redirect("/edit");
    })
    .catch((err) => {
      return req.flash("error", "Unable to edit article");
    });
});

router.put("test/:id", upload.single("image"), async (req, res) => {
  const updateThePost = {
    title: req.body.title,
    post: req.body.post,
    // image: `${thePic.secure_url}`,
    // image: `Hello Folks`
    image: req.body.image,
  };
  try {
    console.log("hello");
    await db.Blog.findByIdAndUpdate({ _id: req.params.id }, updateThePost, {
      new: true,
    });
    console.log("found");
    // res.json(updateBlog);
    // let file = req.file;
    // console.log(file);
    // console.log("hello")
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/upload/:id", (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
});

router.put("/:id", upload.single("img"), async (req, res) => {
  try {
    // const thePic = await cloudinary.uploader.upload(req.path);
    // console.log(thePic.secure_url);
    const updatePost = await db.Blog.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        post: req.body.post,
        // image: `${thePic.secure_url}`,
        // image: `Hello Folks`
        image: req.body.image,
      },
      { new: true }
    );
    // console.lod(thePic)
    console.log(updatePost);
    res.json({ updatePost });
  } catch (err) {
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

router.put("/post/:id", async (req, res) => {
  // console.log("req:", req);
  try {
    // const form = await formidable({ multiples: true });
    const form = await new formidable.IncomingForm();
    console.log({ form: form });

    const uploadFolder = path.join("images");
    // form.parse(req)
    form.multiples = true;
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.uploadDir = uploadFolder;

    form.parse(req, async (err, fields, files) => {
      console.log({ fields: fields });
      console.log({ files: files });
      const oldpath = files.img.path;
      const newpath = "images" + files.img.name;
      fs.rename(oldpath, newpath, (err) => {
        // if(err) throw (err):
        res.write("file uploaded");
        res.end();
      });

      // if (err) {
      //   console.log("Error parsing the files");
      //   return res.status(400).json({
      //     status: "Fail",
      //     message: "There was an error parsing the files",
      //     error: err,
      //   });
      // }
    });

    // form.parse(req, (err, fields, files) => {
    //   if (err) {
    //     next(err);
    //     return;
    //   }
    //   res.json({ fields, files });
    // });

    // form.on("fileBegin", (name, file) => {
    //   file.path = __dirname + '/uploads' + file.name
    // })
    // form.on("file", (name, file)=>{
    //   console.log("Uploaded file" + file.name)
    // })
    // res.sendFile(__dirname + "/uploads")

    // const thePic = await cloudinary.uploader.upload(req.file.path);
    // console.log(thePic)
    await db.Blog.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, post: req.body.post },
      { new: true }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err: true,
      data: null,
      message: "Failed to update post",
    });
  }
  // .then((updateBlog) => {
  //   res.json(updateBlog);
  // })
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
