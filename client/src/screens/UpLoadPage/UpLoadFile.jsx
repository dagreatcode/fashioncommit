import React from "react";

export default function UpLoadFile() {
  return (
    <>
      <div className="container form">
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
        <input class="form-control" type="text" placeholder="Title" aria-label="default input example"></input>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description/ Post Content
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary">Up Load</button>
      </div>
    </>
  );
}
