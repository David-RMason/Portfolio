import { FaExternalLinkAlt, FaFlask } from "react-icons/fa";
import { projects } from "../../data/projectData";

import Button from "../shared/button";

export default function PersonalProjects() {
  return (
    <article>
      <h3>
        <FaFlask />
        Personal Projects
      </h3>
      <p>Personal projects used to learn and experiment.</p>
      <ul className="pf-personal-project-list">
        {projects.map(({ name, image, link, description }) => (
          <li key={name} className="pf-personal-project-card">
            <img className="pf-project-image" src={image} alt={name} />
            <div className="pf-project-content">
              <div className="pf-project-card-header">
                <h3>{name}</h3>
                <Button href={link} ariaLabel={`${name} Link`}>
                  <FaExternalLinkAlt />
                </Button>
              </div>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
