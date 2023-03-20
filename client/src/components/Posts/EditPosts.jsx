import React from "react";
// import PropTypes from "prop-types";
import EditPost from "../Post/EditPost";

export default function Posts({ posts, title }) {
  return (
    <>
      <div className="col-12" style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        {posts.map((post) => (
          <EditPost {...post} key={post._id} />
        ))}
      </div>
    </>
  );
}

// Posts.propTypes = {
//   posts: PropTypes.array.isRequired,
//   title: PropTypes.string.isRequired,
// };
