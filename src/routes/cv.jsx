import PageTransition from "../components/shared/pageTransition";
import CvDownload from "../components/cv/cvDownload";
import ProfessionalSummary from "../components/cv/professionalSummary";
import WorkExperience from "../components/cv/workExperience";
import Education from "../components/cv/education";
import TechStack from "../components/cv/techStack";

import "../styles/cv.css";

export default function CV() {
  return (
    <PageTransition className="pf-cv-container">
      <CvDownload />
      <ProfessionalSummary />
      <WorkExperience />
      <Education />
      <TechStack />
    </PageTransition>
  );
}
