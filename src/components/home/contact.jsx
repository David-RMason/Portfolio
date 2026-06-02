import Button from "../shared/button";
import ContactForm from "./contactForm";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../../styles/contact.css";

export default function Contact() {
  return (
    <section className="pf-contact" id="contact">
      <header>
        <h2>Let's Work Together!</h2>

        <p>
          I'm always interested in hearing about new projects and opportunities
        </p>
      </header>

      <div className="pf-contact-content">
        <div className="pf-contact-info">
          <h3>Get in Touch</h3>

          <p>
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, I'd love to hear from you.
          </p>

          <div className="pf-contact-details">
            <div className="pf-contact-group">
              <FaEnvelope size={20} />

              <div>
                <h4>Email</h4>

                <Button href="mailto:masondr@hotmail.co.uk">
                  masondr@hotmail.co.uk
                </Button>
              </div>
            </div>
            <div className="pf-contact-group">
              <FaGithub size={20} />

              <div>
                <h4>GitHub</h4>
                <Button href="https://github.com/David-RMason">
                  github.com/David-RMason
                </Button>
              </div>
            </div>{" "}
            <div className="pf-contact-group">
              <FaLinkedin size={20} />

              <div>
                <h4>LinkedIn</h4>
                <Button href="https://www.linkedin.com/in/david-r-mason/">
                  linkedin.com/in/david-r-mason/
                </Button>
              </div>
            </div>
            <div className="pf-contact-group">
              <FaMapMarkerAlt size={20} />

              <div>
                <h4>Location</h4>
                <p>Birmingham, UK</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pf-contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
