import React from "react";
import { Link } from "react-router-dom";

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
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
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
                  <label for="formFileLg" className="form-label">
                    Import Image
                  </label>
                  <input
                    className="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                  />
                </div>
                <form>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Recipient:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
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
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>File Uploader</h1>
      <form method="POST" action="/upload" enctype="multipart/form-data">
        <input type="file" name="image"/>
        <input type="submit" />
      </form>
    </>
  );
}
