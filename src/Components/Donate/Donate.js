import React from "react";
import "./Donate.css";
import donate from "./donate.png";
import { WhatsAppIcon } from "../../WhatsApp_icon/WhatsAppIcon";

function Donate() {
  return (
    <div style={{ marginTop: "10em" }}>
      <div id="fresh-page">
        <div id="message-to-people">
          <h1 className="orphan-header">
            <strong>Become a Volunteer</strong>
          </h1>
          <p>
            Help the helpless during holidays for better worlds. We believe that
            every child deserves a childhood filled with hope, joy and
            oppotunity to persue their dreams and career.Through your volunteer
            work with us, you can significantly impact the lives of these kids
            and help create a more promising future for our community. Come
            along with us in our.Join us in our mission to spread love,
            compassion, and happiness to those who need it the most.
          </p>
        </div>
        <div className="donate-image">
          <img src={donate} alt="donate" />
        </div>
      </div>
      <hr />
      <div className="" style={{ textAlign: "center" }}>
        <h3>Want to donate?</h3>

        <p>Kindly reach us on </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "3em" }}>
          <div>
            <WhatsAppIcon />
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "green" }}
              href="mailto:spreadloveorg0@gmail.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email"
            >
              <i
                style={{ fontSize: "4em" }}
                class="fa fa-envelope-o"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
