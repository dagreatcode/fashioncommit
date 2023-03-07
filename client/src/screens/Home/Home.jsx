import React from "react";
import Posts from "../../components/Posts/Posts";
import { useSelector } from "react-redux";
import Nav from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner"

function Home() {
  // const posts = useSelector((state) => state.articles);
  const myPosts = useSelector((state) => state.myArticles);
  return (
    <div className="container">
      <div className="row">
        <Nav/>
        <Banner/>
        {/* <Posts posts={posts} title="All Posts" /> */}
        <Posts posts={myPosts} title="New Post Every Week" />
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
