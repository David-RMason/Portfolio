import Card from "../components/shared/card";
import PageTransition from "../components/shared/pageTransition";
import ContactCard from "../components/shared/contact.jsx";

import "../styles/home.css";

import ProfilePicture from "../components/profilePicture";
import BackgroundImage from "../assets/backgroundImage.webp";
import { homepageInfo } from "../data/homeData.js";

export default function Home() {
  return (
    <PageTransition className="pg-home-wrapper">
      <Card as="section" className="pf-intro">
        <img
          src={BackgroundImage}
          className="pf-card-background-image"
          alt=""
        />
        <div className="pf-intro-blur" />
        <div className="pf-intro-content">
          <div className="pf-intro-top">
            <ProfilePicture />
            <p className="pf-availability">Open to new opportunities</p>
          </div>
          <div className="pf-intro-about-me">
            <h2>Hi! I'm David</h2>
            <h3>{homepageInfo.headline}</h3>
            <p>{homepageInfo.summary}</p>
          </div>
        </div>
      </Card>
      <Card as="section" className="pf-tech-stack-container">
        <h2>Tech Stack</h2>

        <div className="pf-tech-stack-content">
          {homepageInfo.techStack.map((category) => (
            <div key={category.title} className="pf-tech-category">
              <h3>{category.title}</h3>

              <ul className="pf-home-tech-stack-list">
                {category.items.map((item) => (
                  <li key={item} className="pf-home-tech-stack-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
      <ContactCard />
    </PageTransition>
  );
}
