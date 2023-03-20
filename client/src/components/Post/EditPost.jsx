import React from "react";
import PropTypes from "prop-types";

export default function Post({ image, title, post, _id }) {
  return (
    <>
      <h3>{title}</h3>
      <img
        src={image}
        alt="blog post"
        width="350"
        // height="350"
        className="d-inline-block align-text-top"
      />
      <p>{post}</p>
      <button>Edit</button>
      <button type="submit" className="btn btn-primary">
        Delete
      </button>
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
