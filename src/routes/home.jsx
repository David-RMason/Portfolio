import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Card from "../components/shared/card";
import PageTransition from "../components/shared/pageTransition";

import "../styles/home.css";

import ProfilePicture from "../components/profilePicture";
import BackgroundImage from "../assets/backgroundImage.webp";

export default function Home() {
  return (
    <PageTransition className="pg-home-wrapper">
      <Card as="section" className="pf-intro">
        <img
          src={BackgroundImage}
          className="pf-card-background-image"
          alt=""
        />
        <div className=".pf-intro-blur" />
        <div className="pf-intro-content">
          <div className="pf-intro-top">
            <ProfilePicture />
            <p className="pf-availability">Open to new opportunities</p>
          </div>
          <div className="pf-intro-about-me">
            <h2>Hi! I'm David</h2>
            <p>
              I’m a Birmingham-based web developer with experience building
              custom WordPress websites and React applications for businesses
              and clients. I’m passionate about creating accessible,
              high-performing web experiences with clean code, responsive
              design, and a strong attention to detail.
            </p>
          </div>
        </div>
      </Card>
      <Card as="section" className="pf-contact-links">
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
      <Card as="section" className="pf-tech-stack-container">
        <h2>Languages & Frameworks/Libraries</h2>
        <ul className="pf-tech-stack-list">
          <li className="pf-tech-stack-item">JavaScript (ES6+)</li>
          <li className="pf-tech-stack-item">TypeScript</li>
          <li className="pf-tech-stack-item">HTML5</li>
          <li className="pf-tech-stack-item">CSS3</li>
          <li className="pf-tech-stack-item">Sass</li>
          <li className="pf-tech-stack-item">React</li>
          <li className="pf-tech-stack-item">Next.js (Learning)</li>
          <li className="pf-tech-stack-item">Bootstrap</li>
        </ul>
      </Card>
    </PageTransition>
  );
}
