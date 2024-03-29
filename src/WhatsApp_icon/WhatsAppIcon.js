import React from "react";
//import "./whatsAppIcon.css";
import "./WhatsAppIcon.css";

export const WhatsAppIcon = () => {
  const whatsappNumber = "+1(337)717-9792";
  const whatsappMessage = "Hello, I have a question about your website.";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="chat-me">
      <a
        className="whatsup-docaration"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* 
        <span className="inside-whatsup-icon">Need Help? Chat Us</span>
        */}
        <i
          className="fa fa-whatsapp"
          aria-hidden="true"
          style={{ color: "green", fontSize: "4rem" }}
        ></i>
      </a>
    </div>
  );
};
