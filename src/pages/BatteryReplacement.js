import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BatteryReplacement.css";

const BatteryReplacement = () => (
  <div className="container my-5">
    <h2
      className="text-center mb-4"
      style={{
        fontWeight: "bold", 
        fontSize: "2.0rem", 
      }}
    >
      Battery Replacement
    </h2>
    <div className="row align-items-center">
  
      <div className="col-md-6 text-center">
        <img
          src="/images/battery.jpg"
          alt="Battery Replacement Service"
          className="img-fluid rounded"
        />
      </div>
    
      <div className="col-md-6">
        <h3>Why Replace Your Laptop Battery?</h3>
        <p>
          A faulty or old battery can affect your laptop's performance and portability. Our battery replacement service ensures your laptop runs efficiently and reliably.
        </p>
        <h4>Our Service Includes:</h4>
        <ul>
          <li>High-quality replacement batteries.</li>
          <li>Professional installation by experienced technicians.</li>
          <li>Testing to ensure optimal performance.</li>
        </ul>
        <h4>Benefits of Our Service:</h4>
        <p>
          Enjoy longer battery life, improved performance, and peace of mind knowing your laptop is in good hands.
        </p>
      </div>
    </div>
  </div>
);

export default BatteryReplacement;
