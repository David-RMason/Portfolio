import "../styles/profilePicture.css";
import profileImage from "../assets/Profile_Image_Square.jpeg";

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
