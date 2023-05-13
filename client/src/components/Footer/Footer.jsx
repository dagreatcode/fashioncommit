import React from "react";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div>
        <div className="card text-center">
          <div className="card-header" style={{backgroundColor: "white"}}>
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
          <div className="card-body" style={{color: "white", backgroundColor: "#3330E4"}}>
            <h5 className="card-title">Fashion Commit</h5>
            <p className="card-text">
              Watch my journey & be inspired by my commitment
            </p>
            <Link href="/" className="btn" style={{color: "#3330E4", backgroundColor: "white"}}>
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
