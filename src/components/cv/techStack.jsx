import Card from "../shared/card";
import { FaCode } from "react-icons/fa";

import { techStack } from "../../data/cvData";

export default function TechStack() {
  return (
    <Card as="section">
      <h2>
        <FaCode />
        Technical Skills
      </h2>
      {techStack.map((group) => (
        <article key={group.category}>
          <h3>{group.category}</h3>
          <ul className="pf-tech-stack-list">
            {group.items.map((item, index) => (
              <li className="pf-tech-stack-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Card>
  );
}
