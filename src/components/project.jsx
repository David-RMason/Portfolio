import { Link } from "react-router-dom";
import Card from "./shared/card";

import "../styles/project.css";

export default function Project({ name, image, description, techStack, link }) {
  return (
    <Card as="article" className="pf-project-container">
      <img className="pf-project-image" src={image} alt={name} />
      <div className="pf-project-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <ul className="pf-tech-stack-list">
          {techStack.map((tech, index) => (
            <li className="pf-tech-stack-item" key={index}>
              {tech}
            </li>
          ))}
        </ul>
        <Link to={link} target="_blank" rel="noopener noreferer">
          {link}
        </Link>
      </div>
    </Card>
  );
}
