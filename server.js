require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const UserController = require("./controllers/UsersController");
// const AuthController = require("./controllers/authController");
// const BlogController = require("./controllers/BlogController");
const FileUpload = require("./controllers/FileUpload");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fashioncommit_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// app.get("/api/config", (req, res) => {
//   res.json({
//     success: true,
//   });
// });

// app.get("/apiFun", (req, res) => {
//   res.send("API FUN");
//   console.log("API works");
//   res.end();
// });

// app.use("/api/blog", BlogController);
// app.use("/api/user", UserController);
// app.use(AuthController);
app.use("/blogPost", FileUpload);

// app.post("/api/users", (req, res) => {
//   var newUser = req.body;
//   console.log(newUser);
//   users.push(newUser);
//   res.json(newUser);
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 App is running on http://localhost:${PORT}`);
});
