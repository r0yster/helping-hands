import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a className="active" href="mailto:webmaster@example.com">
        {" "}
        Contact Us
      </a>
      <div className="footer-right">
        <p>© 2021 RLRS. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
