import React from "react";
import { NavLink } from "react-router-dom";

export default function Navlinks(props) {
  return (
    <>
        <ul className="navbar-items">
          <NavLink to="/" onClick={() => props.isMobile && props.closeMobileMenu}>Home</NavLink>
          <NavLink to="/about" onClick={() => props.isMobile && props.closeMobileMenu}>About</NavLink>
          <NavLink to="/projects" onClick={() => props.isMobile && props.closeMobileMenu}>Projects</NavLink>
          <NavLink to="/Contact" onClick={() => props.isMobile && props.closeMobileMenu}>Contact</NavLink>
        </ul>
    </>
  );
}
