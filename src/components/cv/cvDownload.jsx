import Card from "../shared/card";
import Button from "../shared/button";
import { FaFileDownload } from "react-icons/fa";

export default function CvDownload() {
  return (
    <Card className="pf-cv-intro-container">
      <div>
        <h2>David Mason</h2>
        <h3>Frontend Developer</h3>
        <p>
          Creating Responsive, Accessible Websites | WordPress, React |
          Birmingham
        </p>
      </div>
      <Button
        className="-tertiary-bg"
        href={`${process.env.PUBLIC_URL}/assets/David Mason CV.pdf`}
        download="David Mason CV.pdf"
      >
        <FaFileDownload /> Download my CV
      </Button>
    </Card>
  );
}
