import React from "react";
import {
  FaGithub,
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
              <FaGithub />
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
        <p>Designed by Gautam Gaur</p>
      </div>
    </div>
  );
}

export default Footer;
