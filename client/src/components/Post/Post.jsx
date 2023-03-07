import React from "react";
// import imgs from "../../"
import PropTypes from "prop-types";

export default function Post({ image, title, post }) {
  return (
    <>
      <h3>{title}</h3>
      <img
        src={image}
        alt="blog post"
        width="350"
        height="350"
        className="d-inline-block align-text-top"
      />
      {/* <p>
        <strong>Post ID</strong> {_id}
      </p> */}
      <p>{post}</p>
      <br />
    </>
  );
}

Post.propTypes = {
  // _id: PropTypes.number.isRequired,
  // userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

//rfcp//
