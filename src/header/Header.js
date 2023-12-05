import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="container">
        <h2>Logo</h2>
        <div
          className="menu"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="list">
          <ul className={open ? "open" : ""}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
