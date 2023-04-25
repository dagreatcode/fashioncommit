import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import Edit from "../UpLoadModal/EditModal";

const API_URL = "https://localhost:3001";

export default function Post({ image, title, post, _id, date }) {
  const [titleState, setTitleState] = useState("");
  const [postState, setPostState] = useState("");
  const [imageState, setImageState] = useState("");

  // const [state, dispatch] = useState();
  // const res = await axios.delete(`${API_URL}/blogPost/deletePost/${_id}`)}
  // const handleSubmit = () => {
  //   // e.preventDefault();
  //   // fetch(API_BASE + _id).then((res) => res.json());
  //   // dispatch({ _id: _id });
  //   // console.log(state);
  // };
  const handleSubmit2 = (_id) => {
    //  try{
    console.log("hello");
    //  }catch(error){
    //   console.log(error)
    //  }
    const bill = {
      title: titleState,
      post: postState,
      image: imageState,
    };
    console.log(bill);
    axios.put(`/blogPost/post/${_id}`, bill, {
      method: "PUT",
      enctype: "multipart/form-data"
    });
    console.log(_id);
  };
  const handleSubmit = (_id) => {
    //  try{
    console.log("hello");
    //  }catch(error){
    //   console.log(error)
    //  }
    axios.delete(`/blogPost/delete/${_id}`, {
      method: "DELETE",
    });
    console.log(_id);
    console.log(`${API_URL}/blogPost/delete/${_id}`);
  };
  // riz()

  return (
    <>
      <form
      // onClick={() =>{deletePhone(val._id)}}
      >
        <h3>{title}</h3>
        <div>
          <textarea
            onChange={(e) => {
              setTitleState(e.target.value);
            }}
            placeholder={title}
            value={titleState.title}
          ></textarea>
        </div>
        <img
          src={image}
          alt="blog post"
          width="350"
          // height="350"
          className="d-inline-block align-text-top"
        />
        <div style={{textAlign: "center"}} className="container col-sm-5">
        <input
          multiple="multiple"
          type="file"
          name="img"
          className="form-control form-control-lg"
          id="file"
          accept=".jpg, .png, .jpeg"
          // value="update image"
          value={imageState}
          onChange={(e) => {
            setImageState(e.target.value);
          }}
        />
        </div>
        <div>{post}</div>
        <div>
          <textarea
            onChange={(e) => {
              setPostState(e.target.value);
            }}
            placeholder={post}
            value={postState.post}
          ></textarea>
        </div>

        <p>{date}</p>
        <p>{_id}</p>
      </form>
      {/* <Edit _id={_id} title={title} post={post} image={image} /> */}
      <button
        // onClick={() => axios.delete(`${API_URL}/blogPost/deletePost/${_id}`)}
        onClick={() => handleSubmit2(_id)}
        // value={state}
        method="PUT"
        // action="/edit"
        type="button"
        className="btn btn-success update"
      >
        Update
      </button>
      <button
        // onClick={() => axios.delete(`${API_URL}/blogPost/deletePost/${_id}`)}
        onClick={() => handleSubmit(_id)}
        // value={state}
        method="DELETE"
        // action="/blogPost/dPost/:id"
        type="button"
        className="btn btn-danger delete"
      >
        Delete
      </button>
      <br />
    </>
  );
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  // userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

//rfcp//
