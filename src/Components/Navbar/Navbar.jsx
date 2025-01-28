import React from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
        <div className="navbar-logo">
          <BiSolidPlaneAlt />
          <span>Rise of Coding</span>
        </div>
        </Link>

        <Link to="/hotels"><div>
          <button className="navbar-button">Book Now </button>
        </div></Link>
      </div>
    </div>
  );
}

export default Navbar;
