import React from "react";
import Spread from "./spread_love.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="header">
        <div>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <img src={Spread} alt="spread" width={80} height={50} />
          </Link>
        </div>
        <div className={`side-bar ${isSideBarOpen ? "open" : "closed"}`}>
          <div
            className="close-icon"
            onClick={closeSideBar}
            style={{ float: "right" }}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <br />
          <br />
          <Link
            className="side-bar-context"
            to="/"
            closeSideBar={closeSideBar}
            style={{ color: "black", textDecoration: "none" }}
          >
            About Us
          </Link>
          <br />
          <br />

          <Link
            className="side-bar-context"
            to="/"
            closeSideBar={closeSideBar}
            style={{ color: "black", textDecoration: "none" }}
          >
            Our Mission
          </Link>
          <br />
          <br />

          <Link
            className="side-bar-context"
            to="/"
            closeSideBar={closeSideBar}
            style={{ color: "black", textDecoration: "none" }}
          >
            Gallery
          </Link>
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
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Our Mission</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="reach-us">
            <ul>
              <li>
                <Link style={{ color: "white" }} to="/">
                  Reach Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="menu-icon"
            style={{ fontSize: "2em", marginTop: "0" }}
            onClick={openSideBar}
          >
            <Link to="/">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        {/* 
        <div className="menu-button">
          <i
            style={{ fontSize: "2em", marginTop: "0" }}
            class="fa fa-bars"
            aria-hidden="true"
          ></i>
        </div>
        */}
      </div>
    </div>
  );
}

export default NavBar;
