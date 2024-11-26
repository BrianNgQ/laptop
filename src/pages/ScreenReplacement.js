import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScreenReplacement.css";

const ScreenReplacement = () => (
  <div className="container my-5">
    <h2
      className="text-center mb-4"
      style={{
        fontWeight: "bold", 
        fontSize: "2.0rem", 
      }}
    >
      Screen Replacement
    </h2>
    <div className="row align-items-center">
      {/* Hình ảnh bên trái */}
      <div className="col-md-6 text-center">
        <img
          src="/images/screen.jpg"
          alt="Screen Replacement Service"
          className="img-fluid rounded"
        />
      </div>
      {/* Văn bản bên phải */}
      <div className="col-md-6">
        <h3>Why Choose Our Screen Replacement Service?</h3>
        <p>
          A cracked or damaged screen can affect your laptop’s usability and aesthetics. Our screen replacement service ensures your laptop looks and performs like new.
        </p>
        <h4>Our Service Includes:</h4>
        <ul>
          <li>Top-quality screen replacements for all major brands.</li>
          <li>Quick and professional installation.</li>
          <li>Thorough testing to guarantee performance and durability.</li>
        </ul>
        <h4>Benefits of Our Service:</h4>
        <p>
          Enjoy a flawless display, improved visual experience, and the confidence of a professional repair service.
        </p>
      </div>
    </div>
  </div>
);

export default ScreenReplacement;
