import React, { useEffect, useState } from "react";
import Posts from "./components/Posts/Posts";
import axios from "axios";

// import { response } from "express";

function App() {
  const [posts,setPosts] = useState([]);
  const [myPosts,setMyPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data)
        const filteredPosts = response.data.filter(post => post.userId === 1)
        setMyPosts(filteredPosts)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Posts posts={posts} title="All Posts"/>
        <Posts posts={myPosts} title="My Posts"/>
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
