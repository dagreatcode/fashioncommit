import React from "react";
// import PropTypes from "prop-types";
import Post from "../Post/Post";

export default function Posts({ posts, title }) {
  return (
    <>
      <div className="col-6">
        <h1>{title}</h1>
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </>
  );
}

// Posts.propTypes = {
//   posts: PropTypes.array.isRequired,
//   title: PropTypes.string.isRequired,
// };
