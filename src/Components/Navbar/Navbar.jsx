import React from "react";
import githubLogo from "../../assets/images/icons/github-fill.svg";
import notificationLogo from "../../assets/images/icons/notification-3-line.svg";
import myProfile from "../../assets/images/myprofileimg.jpg";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar text-light navbar-expand-lg bg-dark sticky-top"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img
              src={githubLogo}
              alt=""
              style={{ width: "35px", height: "35px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <nav className="navbar bg-dark">
                <div className="container-fluid">
                  <div className="d-flex" role="search">
                    <input
                      style={{ height: "40px", width: "300px" }}
                      className="form-control me-2 bg-dark text-light"
                      type="search"
                      placeholder="Search or jump to..."
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-dark mt-1"
                      style={{
                        marginLeft: "-50px",
                        width: "30px",
                        height: "30px",
                      }}
                    >
                      /
                    </button>
                  </div>
                </div>
              </nav>
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="https://github.com/pulls"
                >
                  Pull requests
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="https://github.com/issues"
                >
                  Issues
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="https://github.com/marketplace"
                >
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="https://github.com/explore"
                >
                  Explore
                </a>
              </li>
            </ul>

            <ul
              className="navbar-nav position-absolute end-0"
              style={{ justifyContent: "space-between" }}
            >
              <li className="nav-item">
                <a className="nav-link text-light" href="https://github.com/notifications">
                  <img
                    src={notificationLogo}
                    alt=""
                    style={{ width: "15px", height: "15px" }}
                  />
                </a>
              </li>

              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  +
                </button>
                <ul className="dropdown-menu dropdown-menu-dark  dropdown-menu-end dropdown-menu-lg-star">
                  <li>
                    <a className="dropdown-item" href="#">
                      New repository
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Import repository
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New gist
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New organization
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New project
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle myimg"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={myProfile}
                    alt=""
                    style={{ width: "15px", height: "15px" }}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end dropdown-menu-lg-star">
                  <li className="mt-3">
                    <a
                      className="dropdown-item mb-3"
                      href="#"
                      style={{ borderBottom: "1px solid gray" }}
                    >
                      Signed in as <br /> <span>IbrakhimIsmoiljon</span>
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="dropdown-item" href="#">
                      Your profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Your repositories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Your codespaces
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Your organizations
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Your projects
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Your stars
                    </a>
                  </li>
                  <li
                    className="mb-3"
                    style={{ borderBottom: "1px solid gray" }}
                  >
                    <a className="dropdown-item" href="#">
                      Your gists
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Upgrade
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Try Enterprise
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Feature preview
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Help
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
