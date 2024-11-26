import React from "react";
import { Link } from "react-router-dom"; // Import Link từ React Router
import "bootstrap/dist/css/bootstrap.min.css";
import "./LaptopRepair.css"; // CSS tùy chỉnh

const LaptopRepair = () => (
  <div className="container my-5 laptop-repair">
    {/* Nút "Back" ở bên trái */}
    <div className="back-to-home">
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
    </div>

    <div className="text-center mb-4">
      <h2 className="mb-3">Laptop Repair Services</h2>
      <p className="lead">
        We offer professional and affordable repair services for all laptop issues.
      </p>
    </div>

    <div className="row mt-5">
      <div className="col-md-3">
        <Link to="/screen-replacement" className="text-decoration-none">
          <div className="card repair-card h-100">
            <img
              src="/images/screen.jpg"
              className="card-img-top"
              alt="Screen Replacement"
            />
            <div className="card-body">
              <h5 className="card-title">Screen Replacement</h5>
              <p className="card-text">
                High-quality replacement for cracked or damaged screens.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-md-3">
        <Link to="/battery-replacement" className="text-decoration-none">
          <div className="card repair-card h-100">
            <img
              src="/images/battery.jpg"
              className="card-img-top"
              alt="Battery Replacement"
            />
            <div className="card-body">
              <h5 className="card-title">Battery Replacement</h5>
              <p className="card-text">
                Replace your old or faulty battery with a brand-new one.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-md-3">
        <Link to="/keyboard-repair" className="text-decoration-none">
          <div className="card repair-card h-100">
            <img
              src="/images/keyboard.jpg"
              className="card-img-top"
              alt="Keyboard Repair"
            />
            <div className="card-body">
              <h5 className="card-title">Keyboard Repair</h5>
              <p className="card-text">
                Fix broken keys or replace the entire keyboard quickly.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-md-3">
        <Link to="/software-troubleshooting" className="text-decoration-none">
          <div className="card repair-card h-100">
            <img
              src="/images/software.jpg"
              className="card-img-top"
              alt="Software Troubleshooting"
            />
            <div className="card-body">
              <h5 className="card-title">Software Troubleshooting</h5>
              <p className="card-text">
                Resolve issues with software installations and updates.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default LaptopRepair;
