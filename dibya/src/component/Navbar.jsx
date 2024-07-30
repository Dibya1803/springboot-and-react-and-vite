// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div style={{ width: "100dvw" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/login">
            Product Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/addProduct"
                  className="nav-link active"
                  aria-current="page"
                >
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;