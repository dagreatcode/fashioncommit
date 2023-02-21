import React from "react";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="true" href="/">
                  Active
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link disabled">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link href="/" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
