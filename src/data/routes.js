import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

export const routes = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/about", label: "About", icon: FaUser },
  { path: "/projects", label: "Projects", icon: FaFolderOpen },
  { path: "/cv", label: "CV", icon: FaFileAlt },
  { path: "/contact", label: "Contact", icon: FaEnvelope },
];
