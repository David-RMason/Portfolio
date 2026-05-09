import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Card from "../components/shared/card";

import "../styles/home.css";

import ProfilePicture from "../components/profilePicture";
import BackgroundImage from "../assets/backgroundImage.jpg";

export default function Home() {
  return (
    <main className="pg-home-wrapper">
      <Card classes="pf-intro">
        <ProfilePicture />
        <p className="pf-availability">Open to new opportunities</p>
        <h2>Hi! I'm David</h2>
        <p>Lorem Ipsum set dolor amit</p>
        <img
          src={BackgroundImage}
          className="pf-card-background-image"
          alt=""
        />
      </Card>
      <Card classes="pf-contact-links">
        <h2>Connect with me</h2>
        <a className="pf-contact-link" href="https://github.com/David-RMason">
          <FaGithub />
          Github
        </a>
        <a
          className="pf-contact-link"
          href="https://www.linkedin.com/in/david-r-mason/"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a className="pf-contact-link" href="mailto:masondr@hotmail.co.uk">
          <FaEnvelope />
          Email
        </a>
      </Card>
      {/* <Card classes="pf-stats-container">
        <h2>Quick Stats</h2>
        <div className="pf-stats">
          <div className="pf-stat">
            <h3>Projects</h3>
            <p>4</p>
          </div>
          <div className="pf-stat">
            <h3>Years of Experience</h3>
            <p>1+</p>
          </div>
        </div>
      </Card> */}
      <Card classes="pf-tech-stack-container">
        <h2>Technical Skills</h2>
        <ul className="pf-tech-stack-list">
          <li className="pf-tech-stack-item">HTML</li>
          <li className="pf-tech-stack-item">CSS</li>
          <li className="pf-tech-stack-item">JavaScript</li>
          <li className="pf-tech-stack-item">React</li>
          <li className="pf-tech-stack-item">Git</li>
          <li className="pf-tech-stack-item">BootStrap</li>
          <li className="pf-tech-stack-item">Figma</li>
        </ul>
      </Card>
    </main>
  );
}
