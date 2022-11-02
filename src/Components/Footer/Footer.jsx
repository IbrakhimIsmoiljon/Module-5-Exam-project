import React from "react";
import githubLogo1 from "../../assets/images/icons/github-fill(1).svg";

const Footer = () => {
  return (
    <>
      <div
        className="container bg-dark"
        style={{ borderTop: "2px solid gray" }}
      >
        <div
          className="row"
          style={{
            fontSize: "12px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <div className="row">
              <div className="col-3">
                <a href="https://github.com/" className="link">
                  <img
                    src={githubLogo1}
                    alt=""
                    style={{ width: "35px", height: "35px" }}
                  />
                </a>
              </div>
              <div className="col-9">
                <p className="text text-secondary mx-auto">
                  © {new Date().getFullYear()} GitHub, Inc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Terms
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Privacy
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://github.com/security"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Security
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://www.githubstatus.com/"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Status
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://docs.github.com/en"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Docs
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://support.github.com/?tags=dotcom-footer"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Contact GitHub
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://github.com/pricing"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Pricing
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://docs.github.com/en"
              className="link"
              style={{ textDecoration: "none" }}
            >
              API
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://services.github.com/"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Training
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://github.blog/"
              className="link"
              style={{ textDecoration: "none" }}
            >
              Blog
            </a>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-3 mx-sm-auto">
            <a
              href="https://github.com/about"
              className="link"
              style={{ textDecoration: "none" }}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
