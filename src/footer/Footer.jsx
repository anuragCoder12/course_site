import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-box">
          <div className="box">
            <div className="lists">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/">Our programs</a>
                </li>
                <li>
                  <a href="/">Our plans</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lists">
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">Support us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
