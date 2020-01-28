import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      Navbar <span className="badge badge-pill secondary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;
