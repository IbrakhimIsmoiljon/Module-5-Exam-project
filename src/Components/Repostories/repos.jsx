import React from "react";
import "./style.scss";
// import book from "../../assets/images/icons/journal-bookmark.svg"

const repos = () => {
  // let baseUrl = fetch("https://api.github.com/users/IbrakhimIsmoiljon/repos").then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data[0].name);
  // });

  return (
    <div
      style={{
        marginTop: "-650px",
        width: "65%",
        height: "2300px",
        marginLeft: "500px",
        color: "#fff",
      }}
    >
      {/* <h3>{data[0].name}</h3> */}

      <div className="container" style={{ borderBottom: "1px solid #5E6369" }}>
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-7">
            <nav class="navbar bg-dark">
              <div class="container">
                <input
                  class="form-control bg-dark text-light me-2"
                  type="search"
                  placeholder="Find a repository..."
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
                    All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    JavaScript
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    HTML
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    CSS
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
                    Last updated
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Name
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Stars
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1">
            <button className="btn btn-success"> New</button>
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
            <a href="https://github.com/IbrakhimIsmoiljon/5-dars" style={{ textDecoration: "none", fontSize: "20px" }}>
              5-dars
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
                Star
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
                backgroundColor: "yellow",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div className="col-1" style={{"marginLeft":"-55px"}}>JavaScript</div>
          <div className="col-3">Updated 19 days ago</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Module-5_lesson-1_project " style={{ textDecoration: "none", fontSize: "20px" }}>
            Module-5_lesson-1_project 
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
                Star
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
          <div className="col-3">Updated 19 days ago</div>
        </div>
      </div>


      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Module-4_Exam_project " style={{ textDecoration: "none", fontSize: "20px" }}>
            Module-4_Exam_project 
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
                Star
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
          <div className="col-3">Updated on 3 Oct</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Todo-list" style={{ textDecoration: "none", fontSize: "20px" }}>
              Todo-list
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
                Star
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
                backgroundColor: "purple",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div className="col-1" style={{"marginLeft":"-55px"}}>CSS</div>
          <div className="col-3">Updated on 21 Sep</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/git-init" style={{ textDecoration: "none", fontSize: "20px" }}>
              git-init
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
                Star
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
          <div className="col-3">Updated on 11 Sep</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/git-init_" style={{ textDecoration: "none", fontSize: "20px" }}>
              git-init_
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
                Star
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
          <div className="col-3">Updated on 11 Sep</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Module-3_Exam" style={{ textDecoration: "none", fontSize: "20px" }}>
            Module-3_Exam 
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
                Star
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
          <div className="col-3">Updated on 6 Sep</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Snap" style={{ textDecoration: "none", fontSize: "20px" }}>
            Snap 
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
                Star
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
                backgroundColor: "purple",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div className="col-1" style={{"marginLeft":"-55px"}}>CSS</div>
          <div className="col-3">Updated on 31 Aug</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Spot.uz_clone" style={{ textDecoration: "none", fontSize: "20px" }}>
            Spot.uz_clone
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
                Star
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
          <div className="col-3">Updated on 9 Aug</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Spot.uz_clone_uzb" style={{ textDecoration: "none", fontSize: "20px" }}>
            Spot.uz_clone_uzb
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
                Star
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
          <div className="col-3">Updated on 9 Aug</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Ibrohims-portfolio" style={{ textDecoration: "none", fontSize: "20px" }}>
            Ibrohims-portfolio
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
                Star
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

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/ALKK.uz_contacts" style={{ textDecoration: "none", fontSize: "20px" }}>
            ALKK.uz_contacts
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
                Star
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
          <div className="col-3">Updated on 25 Jul</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/ALKK.uz_part3" style={{ textDecoration: "none", fontSize: "20px" }}>
            ALKK.uz_part3
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
                Star
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
          <div className="col-3">Updated on 21 Jul</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/ALKK.uz_part2" style={{ textDecoration: "none", fontSize: "20px" }}>
            ALKK.uz_part2
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
                Star
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
          <div className="col-3">Updated on 21 Jul</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/ALKK.uz_part1" style={{ textDecoration: "none", fontSize: "20px" }}>
            ALKK.uz_part1
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
                Star
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
          <div className="col-3">Updated on 21 Jul</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/ALKK.uz_part3" style={{ textDecoration: "none", fontSize: "20px" }}>
            ALKK.uz_part3
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
                Star
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
          <div className="col-3">Updated on 21 Jul</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/---" style={{ textDecoration: "none", fontSize: "20px" }}>
            ---
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
                Star
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
          <div className="col-3">Updated on 14 Jul</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/Restaruant" style={{ textDecoration: "none", fontSize: "20px" }}>
            Restaruant
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
                Star
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
            <a href="https://github.com/IbrakhimIsmoiljon/Findtrend" style={{ textDecoration: "none", fontSize: "20px" }}>
            Findtrend
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
                Star
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
            <a href="https://github.com/IbrakhimIsmoiljon/Uber-Eats" style={{ textDecoration: "none", fontSize: "20px" }}>
            Uber-Eats
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
                Star
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
          <div className="col-3">Updated on 21 Jun</div>
        </div>
      </div>

      <div
        className="container mt-3 pb-4"
        style={{ borderBottom: "1px solid #5E6369" }}
      >
        <div className="row">
          <div className="col-10">
            <a href="https://github.com/IbrakhimIsmoiljon/About_me" style={{ textDecoration: "none", fontSize: "20px" }}>
            About_me
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
                Star
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
          <div className="col-3">Updated on 10 Jun</div>
        </div>
      </div>
    </div>
  );
};

export default repos;
