import React, { useEffect } from "react";
import Posts from "./components/Posts/Posts";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getArticels } from "./redux/actions/index";

function App() {
  // const [posts,setPosts] = useState([]);
  // const [myPosts,setMyPosts] = useState([]);

  const posts = useSelector((state) => state.articles);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticels());
    // return () => {};
  }, [dispatch]);

  if (error){
    return <h1>{error}</h1>
  }

  if (loading){
    return <h1>Loading . . .</h1>
  }
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
