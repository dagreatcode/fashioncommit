require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const cors = require("cors");
// const UserController = require("./controllers/UsersController");
const AuthController = require("./controllers/AuthController");
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
app.use(express.static("images"));
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fashioncommit_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // family: 4,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useNewUrlParser: !0,
    // useUnifiedTopology: !0,
    // useCreateIndex: !0,
    // useFindAndModify: !1,
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
app.use("/api", AuthController);
app.use("/blogPost", FileUpload);
app.use('/healthCheck', require("./controllers/HealthCheck"));

// app.post("/api/users", (req, res) => {
//   var newUser = req.body;
//   console.log(newUser);
//   users.push(newUser);
//   res.json(newUser);
// });
// app.use(cors());
// app.use((req,res, next)=>{
//   res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
//   res.setHeader('Access-Control-Allow-Headers',"*");
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 App is running on http://localhost:${PORT}`);
});
