import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a className="active" href="mailto:helpinghandsdeux@gmailcom">
        {" "}
        Contact Us
      </a>
      <div className="center">
        <a
          href="https://www.orartswatch.org/painting-the-town-in-newberg/"
          target="blank "
        >
          Colorful Hands
        </a>
      </div>
      <div className="footer-right">
        <p>© 2021 RLRS. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
