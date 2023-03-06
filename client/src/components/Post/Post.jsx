import React from "react";
// import PropTypes from 'prop-types'

export default function Post({ _id, image, title, post }) {
  return (
    <>
      <h1>{title}</h1>
      <p>
        <strong>Image</strong>
        <img
          src={image}
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
      </p>
      <p>
        <strong>Post ID</strong> {_id}
      </p>
      <p>
        <h3>Post</h3>
        {post}
      </p>
    </>
  );
}

// Post.propTypes = {
// id: PropTypes.number.isRequired,
// userId: PropTypes.number.isRequired,
// title: PropTypes.string.isRequired,
// body: PropTypes.string.isRequired,
// }

//rfcp//
