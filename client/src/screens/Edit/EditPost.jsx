import React from "react";
// import PropTypes from 'prop-types'
// import EModal from "../../components/UpLoadModal/EditModal";
import { useSelector } from "react-redux";
import Posts from "../../components/Posts/EditPosts";

const Edit = () => {
  const myPosts = useSelector((state) => state.myArticles);

  return (
    <>
      <h1>Edit Page</h1>
      {/* <EModal /> */}
      <Posts posts={myPosts} title="Time to Edit✒️" />

    </>
  );
};

// Edit.propTypes = {}

export default Edit;
