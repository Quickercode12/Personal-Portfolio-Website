import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Header() {
  const onlinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="header_container">
      <nav>
        <div className="header_container_div1">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="header_container_div2">
          <ul>
            <li>
              <FaInstagram
                onClick={() => {
                  onlinkClick("######");
                }}
              />
            </li>
            <li>
              <FaLinkedinIn
                onClick={() => {
                  onlinkClick(
                    "https://www.linkedin.com/in/ gautam-sharma-41252b255"
                  );
                }}
              />
            </li>
            <li>
              <SiLeetcode
                onClick={() => {
                  onlinkClick("https://leetcode.com/Just_coder12/");
                }}
              />
            </li>
            <li>
              <FaTwitter
                onClick={() => {
                  onlinkClick("https://x.com/GautamG20600019");
                }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
