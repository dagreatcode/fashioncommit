import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Edit({ _id, post, title, image }) {
  const handleUpdate = (_id) => {
    //  try{
    console.log("hello");
    //  }catch(error){
    //   console.log(error)
    //  }
    axios.put(`/blogPost/${_id}`, {
      method: "PUT",
    });
    console.log(_id);
  };
  return (
    <>
      <div className="modal-body">
        {/* <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p> */}
      </div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form method="PUT" action="/Edit" encType="multipart/form-data">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-body">
                  <h2 className="fs-5">Popover in a modal</h2>
                  <p>
                    This{" "}
                    <button
                      className="btn btn-secondary"
                      data-bs-toggle="popover"
                      title="Popover title"
                      data-bs-content="Popover body content is set in this attribute."
                    >
                      button
                    </button>{" "}
                    triggers a popover on click.
                  </p>
                  <hr />
                  <div>
                    <label htmlFor="formFileLg" className="form-label">
                      Import Image{image}
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      title:{title}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">
                      Post:{post}
                      {_id}
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>

                  <hr />
                  <h2 className="fs-5">Tooltips in a modal</h2>
                  <p>
                    <Link to="/" data-bs-toggle="tooltip" title="Tooltip">
                      This link
                    </Link>{" "}
                    and{" "}
                    <Link to="" data-bs-toggle="tooltip" title="Tooltip">
                      that link
                    </Link>{" "}
                    have tooltips on hover.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={() => handleUpdate(_id)}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
