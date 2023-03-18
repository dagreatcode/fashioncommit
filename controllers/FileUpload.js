const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const db = require("../models");
const cloudinary = require("../utils/cloudinary");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "client/public/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      // `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
      // Date.now() + path.extname(file.originalname)
      `${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

router.get("/upload", (req, res) => {
  //   res.render("upload");
  res.send("helloWorld");
});

router.post("/", upload.single("image"), async (req, res) => {
  const data = `${req.body.title}`;
  const data2 = `${req.body.post}`;
  // const url = cloudinary.url(req.file.filename, {
  //   width: 100,
  //   height: 150,
  //   Crop: "fill",
  // });

  try {
    const thePic = await cloudinary.uploader.upload(req.file.path);
    console.log(thePic.secure_url);
    const theBase = await db.Blog.create({
      title: `${data}`,
      post: `${data2}`,
      image: thePic.secure_url,
    });
    res.json({ theBase });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// const c = { prompt: a.body.prompt };

router.post("/uploads", upload.single("image"), (req, res) => {
  const clout = cloudinary.uploader.upload(req.file.path);
  const url = cloudinary.url(req.file.filename, {
    width: 100,
    height: 150,
    Crop: "fill",
  });
  const data = `${req.body.title}`;
  const data2 = `${req.body.post}`;
  const c = {
    title: `${data}`,
    post: `${data2}`,
    image: `${url}`,
  };

  // TODO: Async Await
  clout
    .then((data) => {
      console.log(data.secure_url);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to upload To Cloudinary",
      });
    });

  // const data3 = `${url}`;

  db.Blog.create(c)
    .then((newBlog) => {
      res.json(newBlog);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to upload To DB",
      });
    });
});

router.get("/post", (req, res) => {
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
  db.Blog.findOne({ _id: req.params.id }).then((foundBlogs) => {
    res.json(foundBlogs);
  });
});

router.put("/post/:id", (req, res) => {
  db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updateBlog) => {
      res.json(updateBlog);
    }
  );
});

router.delete("/post/:id", (req, res) => {
  db.Blog.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

// router.post("/", upload.single("image"), (req, res) => {
//   db.Blog.create({
//     image: req.file.path,
//     title: req.body.title,
//     post: req.body.post
//   })
//     .then((newBlog) => {
//       res.json(newBlog);
//       console.log(newBlog);
//       // res.send("Image Uploaded");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         err: true,
//         data: null,
//         message: "Failed to upload",
//       });
//     });
// });

// router.post("/", (req, res) => {
//   const newPost = {
//     image: req.body.image,
//     title: req.body.title,
//     post: req.body.post,
//   };
//   db.Blog.create(newPost).then(() => {
//     res.json(newPost);
//   }).catch((err) => {
//     console.log(err);
//     res.status(500).json({
//       err: true,
//       data: null,
//       message: "Failed to upload",
//     });
//   });
// });

// router.post("/blogPost", upload.single("image"), (req, res) => {
//   const newPost = {
//     image: req.body.image,
//     title: req.body.title,
//     post: req.body.post
//   };
//   db.Blog.create(newPost).then(() => {
//     res.json(newPost);
//   });
//   //   try{

//   //   }catch(err){

//   //   }
// });

// router.post("/", upload.single("image"),(req, res) => {
//   db.Blog.create(req.body).then((newUser) => {
//     res.json(newUser);
//       res.send("Image Uploaded");
//   });
// });

router.post("/back", upload.single("image"), (req, res) => {
  db.Blog.create({
    image: req.file.path,
    title: req.body.title,
    post: req.body.post,
  })
    .then((newUser) => {
      res.json(newUser);
      res.send("Image Uploaded");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: true,
        data: null,
        message: "Failed to upload",
      });
    });
});

// router.post("/blogPost", async (req, res) => {
//   const newPost = new Blog(req.body);
//   try {
//     const savePost = await newPost.save();
//     res.status(200).json(savePost);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.post("/blogPost", (req, res) => {

//   db.Blog.create({
//     image: req.body.image,
//     title: req.body.title,
//     post: req.body.post
//   })
// });

// router.post("/blogPost", upload.single("image"), (req, res, next) => {
//   db.Blog.create(Blog).then((newBlog) => {
//     console.log(newBlog);
//     res.json(newBlog);
//   });
//   res
//     .json({
//       err: false,
//       data: newBlog,
//       message: "Successfully added Post.",
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "Unable to add Post.",
//       });
//     });
// });

// router.post("/", upload.single("image"), (req, res) => {
//   db.Blog.create({
//     image: req.file.path,
//     title: req.body.title,
//     post: req.body.post,
//   }).then((newBlog) => {
//     res.render(newBlog);
//     // res.send("Post Uploaded");
//     console.log("newBlog", newBlog);
//     console.log("req.body", req.body);
//     console.log("path", req.file.path);
//   }).catch((err) => {
//     console.log(err);
//     res.status(500).json({
//       err: true,
//       data: null,
//       message: "Failed to upload",
//     });
//   });
// });

// router.post("/blogPost", upload.single("image"),(req, res) => {
//     const newPost = {
//         image: req.body.image,
//         title: req.body.title,
//         post: req.body.post
//       };
//       db.Blog.create(newPost).then(() => {
//         res.json(newPost);
//       });
// });
module.exports = router;
