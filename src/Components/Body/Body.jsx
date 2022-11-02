import React from "react";
import { NavLink } from "react-router-dom";
import bookIcon from "../../assets/images/icons/book-open-line.svg";
import bookIcon1 from "../../assets/images/icons/book-mark-line (1).svg";
import tableIcon from "../../assets/images/icons/table-line.svg";
import starIcon from "../../assets/images/icons/star-line.svg"
// import Aside from "../Aside/Aside"

const Body = () => {

  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row" style={{ borderBottom: "2px solid #474A4F", "paddingBottom":"15px", "paddingLeft":"600px" }}>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-12 ">
                <NavLink to={'/'} className="navbar-brand me-2 text-light" href="#">
                  <img
                    src={bookIcon}
                    alt=""
                    className="me-2"
                    style={{ width: "20px", height: "20px", fontSize: "5px" }}
                  />
                  Overview
                </NavLink>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 ">
                <NavLink to={'/repositories'} className="navbar-brand me-2 text-light" href="#">
                  <img
                    src={bookIcon1}
                    alt=""
                    className="me-2"
                    style={{ width: "20px", height: "20px", fontSize: "5px" }}
                  />
                  Repositories
                </NavLink>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 ">
                <NavLink to={'/projects'} className="navbar-brand me-2 text-light" href="#">
                  <img
                    src={tableIcon}
                    alt=""
                    className="me-2"
                    style={{ width: "20px", height: "20px", fontSize: "5px" }}
                  />
                  Projects
                </NavLink>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 ">
                <NavLink to={'*'} className="navbar-brand me-2 text-light" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box me-2"
                    viewBox="0 0 16 16"
                    style={{ width: "20px", height: "20px", fontSize: "5px" }}
                  >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                  Packages
                </NavLink>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 ">
                <NavLink to={'/stars'} className="navbar-brand me-2 text-light" href="#">
                  <img
                    src={starIcon}
                    alt=""
                    className="me-2"
                    style={{ width: "20px", height: "20px", fontSize: "5px" }}
                  />
                  Stars
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Body;
