import React from "react";
//import "./Footer.css";
//import { Link, useNavigate } from "react-router-dom";

function Footer() {
  //const nagivate = useNavigate();

  return (
    <div>
      <div className="space-before-footer"></div>
      {/* <div className="popular-work">
        <div id="first-popular-work"></div>
        <div id="first-popular-work"></div>
        <div id="first-popular-work"></div>
        <div id="first-popular-work"></div>
      </div>
      <div>
        <div className="popular-work">
          <div id="first-popular-work"></div>
          <div id="first-popular-work"></div>
          <div id="first-popular-work"></div>
          <div id="first-popular-work"></div>
        </div>
      </div> */}

      <footer id="footer" className="footer" style={{ marginTop: "10em" }}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 ">
              <a href="index.html" className="logo">
                <span style={{ color: "white" }}>Spread Love Organisation</span>
              </a>
              <p>
                Our group provides a variety of services and assistance to
                underprivileged children and orphans. We are committed to
                establishing a supportive atmosphere where children can
                flourish, from planning educational programs and recreational
                activities to supplying basic requirements.
              </p>
              {/*
              <div className="social-links d-flex mt-4">
                <a href="https://twitter.com/home" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://web.facebook.com/?_rdc=1&_rdr"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://web.facebook.com/?_rdc=1&_rdr"
                  className="twitter"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
               */}
            </div>

            <div className="col-lg-4 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>Education and Skill Development</li>
                <li>Initiatives for Wellness and Healthcare</li>
                <li>Outreach and Community Involvement</li>
                <li>Providing Necessary Materials</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                [Address]
                <br />
                [Country] <br />
                <br />
                <strong>Phone:</strong> [Number]
                <br />
                <strong>Email:</strong> [your email]
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            <p>&copy; 2024 Copyright . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
