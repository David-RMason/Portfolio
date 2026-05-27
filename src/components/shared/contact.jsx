import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import Card from "./card";
import Button from "./button";

import "../../styles/contact.css";

export default function ContactCard({ className = "pf-contact-links" }) {
  return (
    <Card as="section" className={className}>
      <h2>Connect with me</h2>
      <div className="pf-contact-button-wrapper">
        <Button
          className="pf-contact-link"
          href="https://github.com/David-RMason"
        >
          <FaGithub />
          Github
        </Button>
        <Button
          className="pf-contact-link"
          href="https://www.linkedin.com/in/david-r-mason/"
        >
          <FaLinkedin />
          LinkedIn
        </Button>
        <Button className="pf-contact-link" href="mailto:masondr@hotmail.co.uk">
          <FaEnvelope />
          Email
        </Button>
        <Button
          className="-tertiary-bg"
          href="/assets/David Mason CV.pdf"
          download="David Mason CV.pdf"
        >
          <FaFileDownload /> Download my CV
        </Button>
      </div>
    </Card>
  );
}
