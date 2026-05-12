import "../styles/profilePicture.css";
import profileImage from "../assets/DavidMasonSquare.png";

export default function ProfilePicture() {
  return (
    <div className="pf-profile-picture-container">
      <img
        src={profileImage}
        className="pf-profile-picture-image"
        alt="David Mason"
      />
    </div>
  );
}
