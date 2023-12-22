import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Happy Bakery 🍰 </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio 🏠 </Link>
        </li>
        <li>
          <Link to="/contact">Contacto​ ✉️ </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
