import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import { navLinks } from "../data/routesData";
import "../styles/navigation.css";

function NavigationList({ onNavigate }) {
  return navLinks.map(({ path, hash, label }) => (
    <li key={`${path}${hash}`}>
      <Link
        className="pf-button"
        to={`${path}${hash ? `#${hash}` : ""}`}
        onClick={onNavigate}
      >
        {label}
      </Link>
    </li>
  ));
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`pf-nav-bar${isScrolled ? " -scrolled" : ""}${
          menuOpen ? " -open" : ""
        }`}
      >
        <div className="pf-nav-icon">
          <Link to="/" className="pf-button">
            DM
          </Link>
        </div>

        <ul className="pf-nav pf-desktop-links">
          <NavigationList />
        </ul>

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
            <FaTimes aria-hidden="true" focusable="false" />
          ) : (
            <FaBars aria-hidden="true" focusable="false" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="pf-mobile-menu"
            className="pf-nav pf-mobile-links"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <NavigationList onNavigate={closeMenu} />
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
