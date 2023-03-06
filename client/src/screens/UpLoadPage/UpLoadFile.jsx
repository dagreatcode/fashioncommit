import React from "react";
import { Link } from "react-router-dom";

// const [toGo, setToGo] = useState({
//   image: "",
//   title: "",
//   post: ""
// });

export default function UpLoadFile() {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
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
            <form
              method="POST"
              action="/blogPost/"
              encType="multipart/form-data"
            >
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
                 
                  <hr />



                  <div className="mb-3">
                    <label htmlFor="title" className="col-form-label">
                      Title:
                    </label>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      id="title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="post" className="col-form-label">
                      Post:
                    </label>
                    <textarea
                      name="post"
                      type="text"
                      className="form-control"
                      id="post"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="file" className="form-label">
                      Import Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      className="form-control form-control-lg"
                      id="file"
                      // accept=".jpg"
                    />
                  </div>
                  <hr />
                  <h2 className="fs-5">Tooltips in a modal</h2>
                  <p>
                    <Link to="/" data-bs-toggle="tooltip" title="Tooltip">
                      This link
                    </Link>{" "}
                    and{" "}
                    <Link to="/" data-bs-toggle="tooltip" title="Tooltip">
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
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <h1>File Uploader</h1>
      <form method="POST" action="/upload" enctype="multipart/form-data">
        <input type="file" name="image"/>
        <input type="submit" />
      </form> */}
    </>
  );
}
