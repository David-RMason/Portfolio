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

      {education.map(({ qualification, detail, institution, dates }) => (
        <article key={qualification}>
          <h3>
            {qualification} | {detail}
          </h3>
          <p>
            <strong>{institution}</strong>
          </p>
          <p>{dates}</p>
        </article>
      ))}
    </Card>
  );
}
