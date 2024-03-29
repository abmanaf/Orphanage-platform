import React from "react";
import { WhatsAppIcon } from "../../WhatsApp_icon/WhatsAppIcon";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div style={{ marginTop: "10em" }}>
      <div style={{ margin: "3em" }}>
        <h1
          style={{ textAlign: "center", marginBottom: "2em", color: "#0E1D34" }}
        >
          Contact Us
        </h1>
        <div id="contact-page">
          {/*
        <div id="empty-folder">
          <div id="move">
            <h2 data-text="&nbsp; Reach Us Page comming soon &nbsp;">
              &nbsp; Reach Us Page comming soon &nbsp;
            </h2>
          </div>
        </div>
         */}
          <div>
            <div style={{ textAlign: "center" }}>
              <p>Get in touch with us via whatsApp</p>
            </div>
            <div
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                padding: "3em",
                textAlign: "center",
                marginBottom: "4em",
              }}
            >
              <WhatsAppIcon />
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center" }}>
              <p>Get in touch with us via email</p>
            </div>
            <div
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                padding: "3em",
                textAlign: "center",
              }}
            >
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
    </div>
  );
}

export default ContactUs;
