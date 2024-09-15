import React from "react";
import "./AlertSection.css";
import Marquee from "react-fast-marquee";

const Alert = () => {
  return (
    <div className="Alert">
      <Marquee>
        <a href="/" className="hyperlinks">
          "//grappltech:Web Component//"{" "}
        </a>
        <a href="/" className="hyperlinks">
          <span className="yellow">
            "//May send their queries to
            <span className="ligblue"> grappltech.com</span> for assistence//
          </span>
        </a>
      </Marquee>
    </div>
  );
};

export default Alert;
