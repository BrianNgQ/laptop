import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./KeyboardRepair.css";

const KeyboardRepair = () => (
  <div className="container my-5">
    <h2
      className="text-center mb-4"
      style={{
        fontWeight: "bold", 
        fontSize: "2.0rem", 
      }}
    >
      Keyboard Repair
    </h2>
    <div className="row align-items-center">
      {/* Hình ảnh bên trái */}
      <div className="col-md-6 text-center">
        <img
          src="/images/keyboard.jpg"
          alt="Keyboard Repair Service"
          className="img-fluid rounded"
        />
      </div>
      {/* Văn bản bên phải */}
      <div className="col-md-6">
        <h3>Professional Keyboard Repair Services</h3>
        <p>
          Is your laptop keyboard not functioning properly? Broken keys, sticky buttons, or unresponsive inputs? Our professional keyboard repair service will restore your laptop’s full functionality.
        </p>
        <h4>Our Repair Solutions Include:</h4>
        <ul>
          <li>Replacing individual broken or missing keys.</li>
          <li>Fixing or replacing the entire keyboard.</li>
          <li>Cleaning and maintenance to ensure smooth operation.</li>
        </ul>
        <h4>Why Choose Us?</h4>
        <p>
          With quick turnaround times, affordable pricing, and experienced technicians, your laptop is in safe hands.
        </p>
      </div>
    </div>
  </div>
);

export default KeyboardRepair;
