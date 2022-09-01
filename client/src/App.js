import React, { useEffect } from "react";
import Posts from "./components/Posts/Posts";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getArticels } from "./redux/actions/index"

function App() {
  // const [posts,setPosts] = useState([]);
  // const [myPosts,setMyPosts] = useState([]);

  const posts = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticels())
    // return () => {};
  }, [dispatch]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       console.log(response.data);
  //       setPosts(response.data)
  //       const filteredPosts = response.data.filter(post => post.userId === 1)
  //       setMyPosts(filteredPosts)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <Posts posts={posts} title="All Posts" />
        {/* <Posts posts={myPosts} title="My Posts" /> */}
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
