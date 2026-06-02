import Button from "../shared/button";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLongArrowAltRight,
} from "react-icons/fa";

import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="pf-hero">
      <p className="pf-availability">Open to new opportunities</p>
      <h1 className="pf-hero-title">David Mason</h1>
      <p className="pf-hero-headline">
        Full-stack developer crafting elegant solutions to complex problems.
        Passionate about clean code, user experience, and building products that
        matter.
      </p>
      <div className="pf-hero-section-buttons">
        <Button className="-primary-button" href="#/#projects" target="_self">
          View My Work <FaLongArrowAltRight />
        </Button>
        <Button className="-white-button" href="#/#contact" target="_self">
          Get in Touch
        </Button>
      </div>
      <div className="pf-hero-socials">
        <Button
          ariaLabel="GitHub Profile"
          href="https://github.com/David-RMason"
        >
          <FaGithub size={32} />
        </Button>
        <Button
          ariaLabel="LinkedIn Profile"
          href="https://www.linkedin.com/in/david-r-mason/"
        >
          <FaLinkedin size={32} />
        </Button>
        <Button ariaLabel="Email" href="mailto:masondr@hotmail.co.uk">
          <FaEnvelope size={32} />
        </Button>
      </div>
    </section>
  );
}
