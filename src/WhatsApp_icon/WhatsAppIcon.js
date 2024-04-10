import React from "react";
import "./WhatsAppIcon.css";

export const WhatsAppIcon = () => {
  const whatsappNumber = "+233552919011";
  const whatsappMessage = "Hello";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="chat-me">
      <a
        className="whatsapp-decoration"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa fa-whatsapp"
          aria-hidden="true"
          style={{ color: "green", fontSize: "4rem" }}
        ></i>
      </a>
    </div>
  );
};
