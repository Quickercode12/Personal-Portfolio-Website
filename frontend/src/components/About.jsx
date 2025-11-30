import React from "react";
import userImage from "../assets/images/gautamImageOne.jpg";
import projectOne from "../assets/images/food-delivery-service-design-vector.jpg";
import projectTwo from "../assets/images/hotel management system image.webp";
import projectThree from "../assets/images/the-ultimate-guide-to-chat-app-architecture.png";
import projectFour from "../assets/images/e-commerse image.webp";
import "../styles/about.css";

function About() {
  const handleSubmit = (sectionId) => {
    // Access the Top Skills section
    const topSkillSection = document.querySelector(".div_04");

    if (sectionId === 2) {
      // 👉 This block will run when user clicks "Download Resume"

      const resumeUrl = "../assets/images/Gautam Gaur (1).pdf";

      // Force download
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Gautam Gaur (1).pdf";
      link.click();
    } else if (sectionId === 1) {
      // 👉 This block will run when user clicks "Top Skills"

      if (topSkillSection) {
        topSkillSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("somthing issue");
      }
    } else if (sectionId === 3) {
      // 👉 This block will run when user clicks "View My Work"
      const url = "https://github.com/Quickercode12/Online-Food-Delivery-";

      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.click();
    } else if (sectionId === 4) {
      // 👉 This block will run when user clicks "View My Work"
      const url =
        "https://github.com/Quickercode12/Real--Time-Chat-Application-";

      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.click();
    } else if (sectionId === 5) {
      // 👉 This block will run when user clicks "View My Work"
      const url = "https://github.com/Quickercode12/Hotel-Management-";

      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.click();
    } else if (sectionId === 6) {
      // 👉 This block will run when user clicks "View My Work"
      const url = "https://github.com/Quickercode12/e-commerce-website";

      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.click();
    }
  };
  return (
    <div className="about_container">
      <div className="about_container_div">
        <div className="div_01">
          <h1>About Me</h1>
          <p>
            I’m Gautam Gaur, a Software Developer from Rajasthan, currently
            living in Hyderabad. <br></br>I specialize in the MERN stack and
            have built projects like a Real-Time chat application and a food
            delivery app.<br></br> I love learning new technologies, solving
            coding problems, and creating clean, user-friendly applications.
          </p>
        </div>
        <div className="div_02">
          <div className="div_02_left">
            <p>HELLO THERE</p>
            <h1>
              Hi, I'm Gautam - a calm-minded creative developer crafting serene
              digital journeys
            </h1>
            <h4>
              I am a dedicated software developer who enjoys building clean,
              efficient, and user-friendly applications. I work across both
              frontend and backend technologies and love solving real-world
              problems through code. Every day, My aim to learn, improve, and
              create products that make an impact.
            </h4>

            <button onClick={() => handleSubmit(1)}>View My Work</button>
            <button onClick={() => handleSubmit(2)}>Download Resume</button>
          </div>
          <div className="div_02_left">
            <img src={userImage} alt="Gautam Gaur" className="profile_image" />
          </div>
        </div>
        <div className="div_03">
          <div className="div_03_div_skills">
            <h6>Top Skills</h6>
          </div>

          <div className="div_03_div_container">
            {/* CARD 1 */}
            <div className="skill_card">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <i className="fas fa-laptop-code"></i>
                    <h1>Full-Stack developer</h1>
                  </div>

                  <div className="flip-card-back">
                    <h2>Skills</h2>

                    <p>Frontend</p>
                    <p>Backend</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="skill_card">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <i className="fas fa-brain"></i>
                    <h1>AI + Cybersecurity</h1>
                  </div>

                  <div className="flip-card-back">
                    <h2>Skills</h2>
                    <p>Machine Learning</p>
                    <p>Threat Detection</p>
                    <p>Python Security</p>
                    <p>Automation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="skill_card">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <i className="fas fa-cogs"></i>
                    <h1>Core Fundamentals</h1>
                  </div>

                  <div className="flip-card-back">
                    <h2>Topics</h2>
                    <p>DSA</p>
                    <p>OS</p>
                    <p>DBMS</p>
                    <p>Networks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="div_04">
          <div className="div_04_div_skills">
            <h6>Top Projects</h6>
          </div>

          <div className="div_04_div_container">
            <div className="project_card">
              <img src={projectOne} alt="Food Delivery" className="card_img" />
              <h1>Food Delivery Application</h1>
              <p>A real-time food ordering and tracking platform.</p>
              <button
                className="project_card_button_click"
                onClick={() => handleSubmit(3)}
              >
                Click
              </button>
            </div>

            <div className="project_card">
              <img
                src={projectTwo}
                alt="Hotel Management"
                className="card_img"
              />
              <h1>Hotel Management System</h1>
              <p>Manages rooms, bookings, customers and staff.</p>
              <button
                className="project_card_button_click"
                onClick={() => handleSubmit(5)}
              >
                Click
              </button>
            </div>

            <div className="project_card">
              <img src={projectThree} alt="Chat App" className="card_img" />
              <h1>Real-Time Chat Application</h1>
              <p>Fast live messaging using WebSocket.</p>
              <button
                className="project_card_button_click"
                onClick={() => handleSubmit(3)}
              >
                Click
              </button>
            </div>
            <div className="project_card">
              <img src={projectFour} alt="E-Commerce" className="card_img" />
              <h1>E-Commerce Application</h1>
              <p>Complete shopping website with payments.</p>
              <button
                className="project_card_button_click"
                onClick={() => handleSubmit(6)}
              >
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
