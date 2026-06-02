import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { professionalWork } from "../../data/projectData";

import Button from "../shared/button";

export default function ProfessionalWork() {
  return (
    <article>
      <h3>
        <FaBriefcase />
        Professional Work
      </h3>
      <p>Websites built and maintained for agency clients.</p>
      <ul className="pf-project-list">
        {professionalWork.map(
          ({ name, employer, employerLink, link, description }) => (
            <li key={name} className="pf-project-card">
              <div className="pf-project-card-header">
                <h3>{name}</h3>
                <Button
                  className="pf-project-external-link"
                  href={link}
                  ariaLabel={`${name} Homepage`}
                >
                  <FaExternalLinkAlt />
                </Button>
              </div>
              <p>{description}</p>
              <hr />
              <p className="pf-project-attribution">
                Delivered while at
                <Button
                  className="pf-project-employer-link"
                  href={employerLink}
                >
                  {employer}
                </Button>
              </p>
            </li>
          ),
        )}
      </ul>
    </article>
  );
}
