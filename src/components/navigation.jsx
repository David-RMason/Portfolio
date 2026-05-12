import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { routes } from "../data/routes";
import "../styles/navigation.css";

function NavigationLinks({ onNavigate }) {
  return routes.map(({ path, label, icon: Icon }) => (
    <NavLink key={path} className="pf-button" to={path} onClick={onNavigate}>
      <Icon aria-hidden="true" focusable="false" />
      {label}
    </NavLink>
  ));
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const currentRoute = routes.find((route) => route.path === location.pathname);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="pf-nav-container -card" aria-label="Primary">
      {/* Mobile nav */}
      <div className="pf-mobile-wrapper">
        <div className="pf-mobile-nav">
          {currentRoute && (
            <span className="pf-current-page">
              <currentRoute.icon aria-hidden="true" focusable="false" />
              {currentRoute.label}
            </span>
          )}

          <button
            type="button"
            className="pf-hamburger"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="pf-mobile-menu"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {menuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="pf-mobile-menu"
              className="pf-mobile-links"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <NavigationLinks onNavigate={closeMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop nav */}
      <div className="pf-desktop-links">
        <NavigationLinks />
      </div>
    </nav>
  );
}
