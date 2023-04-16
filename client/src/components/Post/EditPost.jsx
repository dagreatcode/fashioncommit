import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Edit from "../UpLoadModal/EditModal";

const API_URL = "https://localhost:3001";

export default function Post({ image, title, post, _id, date }) {
  // const [state, dispatch] = useState();
  // const res = await axios.delete(`${API_URL}/blogPost/deletePost/${_id}`)}
  // const handleSubmit = () => {
  //   // e.preventDefault();
  //   // fetch(API_BASE + _id).then((res) => res.json());
  //   // dispatch({ _id: _id });
  //   // console.log(state);
  // };
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
        <img
          src={image}
          alt="blog post"
          width="350"
          // height="350"
          className="d-inline-block align-text-top"
        />
        <p>{post}</p>
        <p>{date}</p>
        <p>{_id}</p>
      </form>
      <Edit _id={_id} title={title} post={post} image={image} />
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
