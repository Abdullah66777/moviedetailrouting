import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <img
        style={{ width: "40px", height: "auto" }}
        src="/movie-camera (1).png"
        alt="logo"
      />
      <h4>Cinematic</h4>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger icon for the toggle button */}
      </button>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>Movies</li>
        <li>Tv Shows</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
