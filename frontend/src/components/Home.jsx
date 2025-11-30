import React from "react";
import userImage from "../assets/images/gautamImageOne.jpg";
import "../styles/home.css";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <main className="main_container">
      {/* Left side content */}
      <section className="main_section_01">
        <h1>
          Hello, I'm <span className="highlight">Gautam</span>
        </h1>
        <h1 className="lastname">Gaur</h1>

        <p className="skills">
          Creative{" "}
          <ReactTyped
            className="skiil_All"
            strings={[
              "Software Developer",
              "AI with Cybersecurity Specialist",
              "Trader",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
            showCursor={true}
            cursorChar="|"
          />
        </p>

        <h4 className="description">
          I am a dedicated software developer who enjoys building clean,
          efficient, and user-friendly applications. I work across both frontend
          and backend technologies and love solving real-world problems through
          code. Every day, My aim to learn, improve, and create products that
          make an impact.
        </h4>
      </section>

      {/* Right side image */}
      <section className="main_section_02">
        <img src={userImage} alt="Gautam Gaur" className="profile_image" />
      </section>
    </main>
  );
}

export default Home;
