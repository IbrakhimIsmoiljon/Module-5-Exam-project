import React from "react";
import { NavLink } from "react-router-dom";
import myProfile from "../../assets/images/myprofileimg.jpg";
import "./Aside.css";

function Aside() {
  return (
    <>
      <div className="aside bg-dark text-light mt-3 ms-5">
        <a href="https://github.com/settings/profile" className="link">
          <img
            src={myProfile}
            alt="ava"
            style={{ width: "400px", height: "400px", borderRadius: "50%" }}
          />
        </a>

        <br />
        <h2>Ibrakhim</h2>
        <br />
        <h3 className="text-secondary">IbrakhimIsmoiljon</h3>
        <br />
        <button className="btn btn-secondary w-25 text-center mb-5">
          Edit profile
        </button>
        <br />
        <p className="follow">
          <i
            class="fa-solid fa-user-group"
            style={{ borderBottom: "2px solid #474A4F" }}
          ></i>{" "}
          <b>0</b> <NavLink to={'/followers'}>followers ·</NavLink> <b>1</b> <NavLink to={'/following'}>following</NavLink>
        </p>
        <br />
      </div>
    </>
  );
}

export default Aside;
