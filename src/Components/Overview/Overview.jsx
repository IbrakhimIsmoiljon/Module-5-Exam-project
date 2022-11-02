import React from "react";

const Overview = () => {
  //   fetch('https://api.github.com/users/IbrakhimIsmoiljon/repos').then((response) => {
  //     return response.json()
  //  }).then((data) => {
  //     console.log(data)
  //  })
  return (
    <>
      <div className="container bg-dark">
        <div className="row">
          <div
            className="col-12"
            style={{ marginTop: "-650px", width: "75%", marginLeft: "400px" }}
          >
            <h6 className="text-light">Popular Repositories</h6>
            <div className="row mt-5">
              <div className="col-lg-6 col-sm-12 my-3">
                <div className="card" style={{ border: "3px solid #5E6369" }}>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text text-light">
                      <div className="row">
                        <div className="col-10">
                          <a
                            href="https://github.com/IbrakhimIsmoiljon/Findtrend"
                            className="link"
                            style={{ textDecoration: "none" }}
                          >
                            FindTrend
                          </a>
                        </div>
                        <div className="col-2">
                          <p
                            style={{
                              border: "1px solid #5E6369",
                              borderRadius: "20px",
                              fontSize: "13px",
                              paddingLeft: "7px",
                              color: "#5E6369",
                            }}
                          >
                            Public
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <p style={{ color: "#5E6369" }}>
                          Who want this kind of project yo can write my gmail ->{" "}
                          <br /> usmonismoiljonov@gmail.com
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-1">
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
                        <div className="col-2">
                          <p style={{ fontSize: "10px" }}>HTML</p>
                        </div>
                        <div className="col-1" style={{"cursor":"pointer"}}>
                          <svg
                            aria-label="star"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-star"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                          </svg>
                        </div>
                        <div className="col-1" style={{"cursor":"pointer"}}>
                          <p>1</p>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>



              <div className="col-lg-6 col-sm-12 my-3">
              <div className="card" style={{ border: "3px solid #5E6369"}}>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text text-light">
                      <div className="row" style={{"marginBottom":"65px"}}>
                        <div className="col-10">
                          <a
                            href="https://github.com/IbrakhimIsmoiljon/Restaruant"
                            className="link"
                            style={{ textDecoration: "none" }}
                          >
                            Restaurant
                          </a>
                        </div>
                        <div className="col-2">
                          <p
                            style={{
                              border: "1px solid #5E6369",
                              borderRadius: "20px",
                              fontSize: "13px",
                              paddingLeft: "7px",
                              color: "#5E6369",
                            }}
                          >
                            Public
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
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
                        <div className="col-2">
                          <p style={{ fontSize: "10px" }}>HTML</p>
                        </div>
                        <div className="col-1" style={{"cursor":"pointer"}}>
                          <svg
                            aria-label="star"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-star"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                          </svg>
                        </div>
                        <div className="col-1" style={{"cursor":"pointer"}}>
                          <p>1</p>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>




              <div className="col-lg-6 col-sm-12 my-3">
              <div className="card" style={{ border: "3px solid #5E6369"}}>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text text-light">
                      <div className="row">
                        <div className="col-10">
                          <a
                            href="https://github.com/IbrakhimIsmoiljon/Ibrohims-portfolio"
                            className="link"
                            style={{ textDecoration: "none" }}
                          >
                            Ibrohims-portfolio
                          </a>
                        </div>
                        <div className="col-2">
                          <p
                            style={{
                              border: "1px solid #5E6369",
                              borderRadius: "20px",
                              fontSize: "13px",
                              paddingLeft: "7px",
                              color: "#5E6369",
                            }}
                          >
                            Public
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1">
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
                        <div className="col-2">
                          <p style={{ fontSize: "10px" }}>HTML</p>
                        </div>
                        <div className="col-1" style={{"cursor":"pointer"}}>
                          <svg
                            aria-label="star"
                            role="img"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-star"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                          </svg>
                        </div>
                        <div className="col-1" style={{"cursor":"pointer"}}>
                          <p>1</p>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>





              <div className="col-lg-6 col-sm-12 my-3">
              <div className="card" style={{ border: "3px solid #5E6369"}}>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text text-light">
                      <div className="row" style={{"marginBottom":"40px"}}>
                        <div className="col-10">
                          <a
                            href="https://github.com/IbrakhimIsmoiljon/Ibrohims-portfolio"
                            className="link"
                            style={{ textDecoration: "none" }}
                          >
                            About-me
                          </a>
                        </div>
                        <div className="col-2">
                          <p
                            style={{
                              border: "1px solid #5E6369",
                              borderRadius: "20px",
                              fontSize: "13px",
                              paddingLeft: "7px",
                              color: "#5E6369",
                            }}
                          >
                            Public
                          </p>
                        </div>
                      </div>
                      
                    </p>
                  </div>
                </div>
              </div>




              <div className="col-lg-6 col-sm-12 my-3">
              <div className="card" style={{ border: "3px solid #5E6369"}}>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text text-light">
                      <div className="row" style={{"marginBottom":"23px"}}>
                        <div className="col-10">
                          <a
                            href="https://github.com/IbrakhimIsmoiljon/Ibrohims-portfolio"
                            className="link"
                            style={{ textDecoration: "none" }}
                          >
                            About-me
                          </a>
                        </div>
                        <div className="col-2">
                          <p
                            style={{
                              border: "1px solid #5E6369",
                              borderRadius: "20px",
                              fontSize: "13px",
                              paddingLeft: "7px",
                              color: "#5E6369",
                            }}
                          >
                            Public
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <p style={{ color: "#5E6369" }}>
                        This is project that describe me more.
                        </p>
                      </div>
                      
                    </p>
                  </div>
                </div>
              </div>




              <div className="col-lg-6 col-sm-12 my-3">
              <div className="card" style={{ border: "3px solid #5E6369"}}>
                  <div className="card-body">
                    <p className="card-text text-light">
                      <div className="row">
                        <div className="col-10">
                          <a
                            href="https://github.com/IbrakhimIsmoiljon/Uber-Eats"
                            className="link"
                            style={{ textDecoration: "none" }}
                          >
                            Uber-Eats
                          </a>
                        </div>
                        <div className="col-2">
                          <p
                            style={{
                              border: "1px solid #5E6369",
                              borderRadius: "20px",
                              fontSize: "13px",
                              paddingLeft: "7px",
                              color: "#5E6369",
                            }}
                          >
                            Public
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <p style={{ color: "#5E6369" }}>
                        The name of this project is Uber Eats
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-1">
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
                        <div className="col-2">
                          <p style={{ fontSize: "10px" }}>HTML</p>
                        </div>
                        
                      </div>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
