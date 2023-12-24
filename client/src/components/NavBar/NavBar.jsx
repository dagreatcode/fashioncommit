import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#3330E4" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/icon.ico"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // style={{backgroundColor: "#65c9ff"}}
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item" style={{ color: "white" }}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/UpLoadFile"
                >
                  Up Load
                </Link>
              </li> */}
              <li className="nav-item">
                {/* <a className="nav-link" href="https://www.bkprofile.ga">
                  Portfolio Website
                </a> */}
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                style={{ backgroundColor: "white", color: "#3330E4" }}
                type="submit"
              >
                Search
              </button>
            </form>

            <br />
            {/* <div className="dropdown">
              <button
                style={{
                  margin: "5px",
                  backgroundColor: "white",
                  color: "#3330E4",
                }}
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                Sign In
              </button>
              <form className="dropdown-menu p-4">
                <div className="mb-3">
                  <label
                    htmlFor="exampleDropdownFormEmail2"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleDropdownFormEmail2"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleDropdownFormPassword2"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleDropdownFormPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="dropdownCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
