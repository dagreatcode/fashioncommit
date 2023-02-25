const express = require("express");
const router = express.Router();

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
router.set("view engine", "ejs");

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.render("Image Uploaded");
});
