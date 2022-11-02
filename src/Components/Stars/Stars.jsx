import React from "react";

const Stars = () => {
  return (
    <div
      style={{
        marginTop: "-650px",
        width: "65%",
        height: "650px",
        marginLeft: "500px",
        color: "#fff",
      }}
    >
      <h3>Stars</h3>

      <div className="container" style={{ borderBottom: "1px solid #5E6369" }}>
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-8">
            <nav class="navbar bg-dark">
              <div class="container">
                <input
                  class="form-control bg-dark text-light me-2"
                  type="search"
                  placeholder="Search stars"
                  aria-label="Search"
                />
              </div>
            </nav>
          </div>
          <div className="col-1">
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Type
              </button>
              <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-start dropdown-menu-lg-end">
                <li>
                  <a class="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Public
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Private
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sources
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Forks
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Archived
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Mirrors
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Templates
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </button>
              <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-start dropdown-menu-lg-end">
                
                <li>
                  <a class="dropdown-item" href="#">
                    HTML
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-1" style={{ marginLeft: "-50px" }}>
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-start dropdown-menu-lg-end">
                <li>
                  <a class="dropdown-item" href="#">
                    Recently starred
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Recently active 
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Most stars
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-12">
            <h3></h3>
          </div>
        </div>
      </div>


      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Findtrend" style={{ textDecoration: "none", fontSize: "20px" }}>
            IbrakhimIsmoiljon / Findtrend
            </a>{" "}
            <span
              style={{
                border: "1px solid #5E6369",
                borderRadius: "20px",
                fontSize: "13px",
                padding: "2px",
                color: "#5E6369",
                marginLeft: "15px",
              }}
            >
              Public
            </span>
          </div>
          <div className="col-2">
            <div class="btn-group">
              <button type="button" class="btn btn-secondary">
                Starred
              </button>
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ borderBottom: "1px solid #5E6369" }}
                  >
                    Lists
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ borderBottom: "1px solid #5E6369" }}
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        My stack
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    + Create list
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" style={{"color":'#5E6369'}}>
          <div className="col-1 text-center">
            <div
              className="circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div className="col-1" style={{"marginLeft":"-55px"}}>HTML</div>
          <div className="col-3">Updated on 1 Jul</div>
        </div>
      </div>


      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Restaruant" style={{ textDecoration: "none", fontSize: "20px" }}>
            IbrakhimIsmoiljon / Restaruant
            </a>{" "}
            <span
              style={{
                border: "1px solid #5E6369",
                borderRadius: "20px",
                fontSize: "13px",
                padding: "2px",
                color: "#5E6369",
                marginLeft: "15px",
              }}
            >
              Public
            </span>
          </div>
          <div className="col-2">
            <div class="btn-group">
              <button type="button" class="btn btn-secondary">
                Starred
              </button>
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ borderBottom: "1px solid #5E6369" }}
                  >
                    Lists
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ borderBottom: "1px solid #5E6369" }}
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        My stack
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    + Create list
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" style={{"color":'#5E6369'}}>
          <div className="col-1 text-center">
            <div
              className="circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div className="col-1" style={{"marginLeft":"-55px"}}>HTML</div>
          <div className="col-3">Updated on 1 Jul</div>
        </div>
      </div>


      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Ibrohims-portfolio" style={{ textDecoration: "none", fontSize: "20px" }}>
            IbrakhimIsmoiljon / Ibrohims-portfolio
            </a>{" "}
            <span
              style={{
                border: "1px solid #5E6369",
                borderRadius: "20px",
                fontSize: "13px",
                padding: "2px",
                color: "#5E6369",
                marginLeft: "15px",
              }}
            >
              Public
            </span>
          </div>
          <div className="col-2">
            <div class="btn-group">
              <button type="button" class="btn btn-secondary">
                Starred
              </button>
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ borderBottom: "1px solid #5E6369" }}
                  >
                    Lists
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    style={{ borderBottom: "1px solid #5E6369" }}
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        My stack
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    + Create list
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" style={{"color":'#5E6369'}}>
          <div className="col-1 text-center">
            <div
              className="circle"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div className="col-1" style={{"marginLeft":"-55px"}}>HTML</div>
          <div className="col-3">Updated on 1 Aug</div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
