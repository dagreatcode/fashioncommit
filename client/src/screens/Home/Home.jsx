import React from "react";
import Posts from "../../components/Posts/Posts"
import { useSelector } from "react-redux";

function Home() {
  const posts = useSelector((state) => state.articles);
  const myPosts = useSelector((state) => state.myArticles);
  return (
    <div className="container">
      <div className="row">
        <Posts posts={posts} title="All Posts" />
        <Posts posts={myPosts} title="My Posts" />
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default Home;
