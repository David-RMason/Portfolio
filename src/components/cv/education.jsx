import Card from "../shared/card";
import { FaGraduationCap } from "react-icons/fa";

import { education } from "../../data/cvData";

export default function Education() {
  return (
    <Card as="section" className="pf-education-container">
      <h2>
        <FaGraduationCap />
        Education
      </h2>

      {education.map((item) => (
        <article>
          <h3>
            {item.qualification} | {item.detail}
          </h3>
          <p>
            <strong>{item.institution}</strong>
          </p>
          <p>{item.dates}</p>
        </article>
      ))}
    </Card>
  );
}
