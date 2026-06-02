import ProfessionalWork from "./professionalWork";
import PersonalProjects from "./personalProjects";
import RecentActivity from "./recentActivity";

import "../../styles/projects.css";

export default function NewProjects() {
  return (
    <section className="pf-projects" id="projects">
      <header>
        <h2>My Work</h2>
        <p>
          A selection of professional and personal projects that showcases my
          skills and experience
        </p>
      </header>
      <ProfessionalWork />
      <PersonalProjects />
      <RecentActivity />
    </section>
  );
}
