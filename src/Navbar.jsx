import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">GYM</h1>
        <ul className="nav-links">
        
          <li>
            <Link to="/member/login">
              <i className="fas fa-users"></i> Member
            </Link>
          </li>
          <li>
            <Link to="/user/login">
              <i className="fas fa-user"></i> User
            </Link>
          </li>
          <li>
            <Link to="/admin/login">
              <i className="fas fa-user-shield"></i> Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
