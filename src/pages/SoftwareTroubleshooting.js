import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SoftwareTroubleshooting.css";

const SoftwareTroubleshooting = () => (
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
      {/* Hình ảnh bên trái */}
      <div className="col-md-6 text-center">
        <img
          src="/images/software.jpg"
          alt="Software Troubleshooting Service"
          className="img-fluid rounded"
        />
      </div>
      {/* Văn bản bên phải */}
      <div className="col-md-6">
        <h3>Professional Software Troubleshooting</h3>
        <p>
          Facing issues with software installation, updates, or compatibility? Our professional troubleshooting service will resolve your software problems efficiently and affordably.
        </p>
        <h4>Common Issues We Address:</h4>
        <ul>
          <li>Software installation errors or crashes.</li>
          <li>Operating system updates and optimizations.</li>
          <li>Virus and malware removal.</li>
          <li>Driver compatibility and updates.</li>
        </ul>
        <h4>Why Choose Us?</h4>
        <p>
          We combine technical expertise with years of experience to offer the best software solutions tailored to your needs. Let us help you get your laptop running smoothly again.
        </p>
      </div>
    </div>
  </div>
);

export default SoftwareTroubleshooting;
