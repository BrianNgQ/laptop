import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <footer 
    className="bg-secondary text-white py-5" 
   
  >
    <div className="container">
      <div className="row">
        {/* About Section */}
        <div className="col-lg-4 mb-4">
          <h5 className="text-uppercase text-warning mb-3">About Book Haven</h5>
          <p>
            Book Haven is your gateway to an endless library of stories, knowledge, and imagination.
            Discover books across all genres and find your next favorite read today.
          </p>
          <div className="social-icons d-flex">
            <a href="#" className="text-warning me-3">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-warning me-3">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-warning">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="col-lg-4 mb-4">
          <h5 className="text-uppercase text-warning mb-3">Explore</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                Browse by Genre
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                Recommended Reads
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                New Arrivals
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                Popular Authors
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="col-lg-4 mb-4">
          <h5 className="text-uppercase text-warning mb-3">Support</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2025 Book Haven. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
