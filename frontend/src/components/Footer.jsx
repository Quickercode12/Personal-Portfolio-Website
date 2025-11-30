import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container_div">
        <p>© 2024 Your Name. All rights reserved.</p>
        <div className="footer_container_div_socials">
          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <p>Designed by Gautam Sharma</p>
      </div>
    </div>
  );
}

export default Footer;
