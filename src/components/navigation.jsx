import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { routes } from "../data/routes";
import "../styles/navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const currentRoute = routes.find((route) => route.path === location.pathname);

  return (
    <nav className="pf-nav-container -card">
      <div className="pf-mobile-nav">
        {currentRoute && (
          <span className="pf-current-page">
            <currentRoute.icon />
            {currentRoute.label}
          </span>
        )}

        <button
          className="pf-hamburger"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="pf-mobile-menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        <motion.div
          className="pf-nav-links"
          aria-hidden={!menuOpen}
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {routes.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              className="pf-button"
              to={path}
              onClick={() => setMenuOpen(false)}
            >
              <Icon />
              {label}
            </NavLink>
          ))}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
