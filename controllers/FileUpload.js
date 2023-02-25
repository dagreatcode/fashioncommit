const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// router.get("/upload", (req, res) => {
//   res.render("upload");
// });

router.post("/upload", upload.single("image"), (req, res, next) => {
  res.send("Image Uploaded");
});

module.exports = router;