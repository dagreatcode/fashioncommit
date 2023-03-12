const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const db = require("../models");

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
      `/${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

router.get("/upload", (req, res) => {
  //   res.render("upload");
  res.send("helloWorld");
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image Uploaded");
});

// const c = { prompt: a.body.prompt };

router.post("/", upload.single("image"), (req, res) => {
  // console.log(req.file)
  const data = `${req.body.title}`;
  const data2 = `${req.body.post}`;
  const data3 = `${req.file.filename}`;
  console.log(req.file)
  const c = {
    title: `${data}`,
    post: `${data2}`,
    image: `${data3}`,
  };
  db.Blog.create(c)
    .then((newBlog) => {
      res.json(newBlog);
      // console.log(newUser);
      // console.log(c)
      // res.send("Image Uploaded");
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
