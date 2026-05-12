import Card from "../shared/card";
import Button from "../shared/button";
import { FaFileDownload } from "react-icons/fa";

export default function CvDownload() {
  return (
    <Card className="pf-cv-intro-container">
      <div>
        <h2>David Mason</h2>
        <h3>Junior Web Developer</h3>
        <p>Birmingham</p>
      </div>
      <Button
        className="-tertiary-bg"
        href="/assets/David Mason CV.pdf"
        download="David Mason CV.pdf"
      >
        <FaFileDownload /> Download my CV
      </Button>
    </Card>
  );
}
