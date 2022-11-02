import React from "react";

const Following = () => {
//   fetch("https://api.github.com/users/IbrakhimIsmoiljon/following")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.login);
//   });
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
      {/* <h3 >Following</h3> */}

      <div className="container my-3">
        <div className="row" style={{"borderBottom":"1px solid #5E6369"}}>
          <div className="col-1">
            <div className="img">
              <img
                src="https://avatars.githubusercontent.com/u/83812247?v=4"
                alt=""
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className="col-9">
            <h6>
              Zurriyotbek Nabiev <span style={{"color":"#5E6369"}}>Zurriyotbek</span>
            </h6>
            <p style={{"color":"#5E6369"}}>
              <span>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-location"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </span>{" "}
              Tashkent, Uzbekistan
            </p>
          </div>
          <div className="col-2">
            <button className="btn btn-dark">Unfollow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Following;
