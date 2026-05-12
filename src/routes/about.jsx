import Card from "../components/shared/card";
import profileImage from "../assets/DavidMason.png";

import { coreProficiencies } from "../data/aboutData";
import "../styles/about.css";

export default function About() {
  return (
    <main className="pf-about-container">
      <Card as="section" className="pf-about-me">
        <h2>About Me</h2>
        <p>
          I'm a web developer based in Birmingham with experience building
          accessible, responsive, and user-focused websites using WordPress,
          React, and modern frontend technologies.
        </p>
        <p>
          I’ve worked on both agency and freelance projects, developing custom
          WordPress websites, React applications, and landing pages from concept
          through to deployment and maintenance. I enjoy creating clean,
          maintainable code and building web experiences that balance
          performance, usability, and design.
        </p>
        <p>
          Accessibility and performance are a big focus in my work, and I’m
          always looking for ways to improve both the user experience and the
          quality of the code behind it. I’m currently continuing to expand my
          frontend skills with Next.js and modern React workflows.
        </p>
        <p>
          Before moving into web development, I worked in data and operations
          roles, which helped me develop strong problem-solving, organisation,
          and communication skills that I bring into every project I work on.
        </p>
      </Card>
      <Card as="figure" className="pf-about-image">
        <img src={profileImage} alt="Portait of David Mason" />
      </Card>
      <section className="pf-about-values">
        {coreProficiencies.map(({ value, detail, icon: Icon }) => (
          <Card as="article" key={value} className="pf-about-value">
            <Icon />
            <div>
              <h3>{value}</h3>
              <p>{detail}</p>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
