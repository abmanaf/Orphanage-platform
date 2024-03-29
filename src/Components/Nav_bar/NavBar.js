import React from "react";
import Spread from "./spread_love.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
//import "font-awesome/css/font-awesome.min.css";

function NavBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <div>
      <div className="main-header">
        <div>
          <h2>Welcome</h2>
        </div>
        <div className="header">
          <div className="site-logo">
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              <img src={Spread} alt="spread" width={80} height={50} />
            </Link>
          </div>
          <div className={`side-bar ${isSideBarOpen ? "open" : "closed"}`}>
            {/* 
            <div
              className="close-icon"
              onClick={closeSideBar}
              style={{ float: "right" }}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <br />
            <br />
            */}
            <Link
              className="side-bar-context"
              to="/About"
              onClick={closeSideBar}
              style={{
                color: "black",
                textDecoration: "none",
                padding: "10px 10px",
              }}
            >
              About Us
            </Link>
            <br />
            <br />
            {/* 
            <Link
              className="side-bar-context"
              to="/Mission"
              onClick={closeSideBar}
              style={{
                color: "black",
                textDecoration: "none",
                padding: "10px 10px",
              }}
            >
              Our Mission
            </Link>
            <br />
            <br />
*/}
            <Link
              className="side-bar-context"
              to="/Gallery"
              onClick={closeSideBar}
              style={{
                color: "black",
                textDecoration: "none",
                padding: "10px 10px",
              }}
            >
              Gallery
            </Link>
            <br />
            <br />
            <Link
              className="side-bar-context"
              to="/Donate"
              onClick={closeSideBar}
              style={{
                color: "black",
                textDecoration: "none",
                padding: "10px 10px",
              }}
            >
              Donate
            </Link>
            <br />
            <br />
            <div className="reach-us" style={{}}>
              <Link
                onClick={closeSideBar}
                style={{
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "#c35017",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
                to="/ContactUs"
              >
                Reach Us
              </Link>
            </div>
          </div>
          <div>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                textDecoration: "none",
              }}
            >
              <li>
                <Link to="/About">About Us</Link>
              </li>
              {/*
              <li>
                <Link to="/Mission">Our Mission</Link>
              </li>
               */}
              <li>
                <Link to="/Gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/Donate">Donate</Link>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="reach-us">
              <ul>
                <li>
                  <Link style={{ color: "white" }} to="/ContactUs">
                    Reach Us
                  </Link>
                </li>
              </ul>
            </div>
            {isSideBarOpen ? (
              <div
                className="menu-icon"
                onClick={closeSideBar}
                style={{ fontSize: "2em", marginTop: "0" }}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            ) : (
              <div
                className="menu-icon"
                style={{ fontSize: "2em", marginTop: "0" }}
                onClick={openSideBar}
              >
                <Link to="#" style={{ textDecoration: "none" }}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
