import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => (
  <header>
    <nav 
      className="navbar navbar-expand-lg fixed-top" // class 'fixed-top' để navbar dính trên đầu trang
      style={{ backgroundColor: "#fff8e7", zIndex: 1030 }} // Đảm bảo navbar không bị che khuất, nếu cần
    >
      <div className="container">
        {/* Logo Section */}
        <Link 
          className="navbar-brand fw-bold" 
          to="/" 
          style={{ color: "#4a4a4a", fontSize: "1.5rem" }}
        >
          Intelligent Chapter
        </Link>
        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/" 
                style={{ color: "#6d6d6d", fontSize: "1rem" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/categories" 
                style={{ color: "#6d6d6d", fontSize: "1rem" }}
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/recommendations" 
                style={{ color: "#6d6d6d", fontSize: "1rem" }}
              >
                Recommendations
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/auth" 
                style={{ color: "#6d6d6d", fontSize: "1rem" }}
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
