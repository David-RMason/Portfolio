import Card from "../shared/card";
import { FaBriefcase } from "react-icons/fa";

import { workExperience } from "../../data/cvData";

export default function WorkExperience() {
  return (
    <Card as="section" className="pf-professional-experience-container">
      <h2>
        <FaBriefcase />
        Work Experience
      </h2>

      {workExperience.map((job) => (
        <article
          className="pf-job-container"
          key={`${job.title}-${job.company}`}
        >
          <header>
            <h3>{job.title}</h3>

            <h4>
              {job.company} | {job.dates}
            </h4>
          </header>

          <ul className="pf-job-list">
            {job.achievements?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </Card>
  );
}
