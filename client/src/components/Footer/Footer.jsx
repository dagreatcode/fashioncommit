import React from "react";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div>
        <div className="card text-center">
          <div className="card-header" style={{backgroundColor: "#bcad76"}}>
            <ul className="nav nav-tabs card-header-tabs" >
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
          <div className="card-body" style={{color: "#bcad76", backgroundColor: "#3330E4"}}>
            <h5 className="card-title">Fashion Commit</h5>
            <p className="card-text">
              Watch my journey & be inspired by my commitment
            </p>
            <Link href="/" className="btn btn-primary" style={{color: "#3330E4", backgroundColor: "#bcad76"}}>
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
