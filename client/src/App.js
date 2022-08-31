import React, { useEffect, useState } from "react";
import Post from "./components/Post/Post";
import axios from "axios";
// import { response } from "express";

function App() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
