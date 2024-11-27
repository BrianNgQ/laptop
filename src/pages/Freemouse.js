import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FreeMouse.css";

const FreeMouse = () => (
  <div className="container my-5">
    <div className="mt-4">
      <Link to="/discounts" className="btn btn-primary center-text">
        Back
      </Link>
    </div>
    <h2
      className="text-center mb-4"
      style={{
        fontWeight: "bold",
        fontSize: "2.0rem",
      }}
    >
      Free Mouse with Select Purchases
    </h2>
    <div className="row align-items-center">
      {/* Hình ảnh bên trái */}
      <div className="col-md-6 text-center">
        <img
          src="/images/discount3.jpg"
          alt="Free Mouse Offer"
          className="img-fluid rounded"
        />
      </div>
      {/* Văn bản bên phải */}
      <div className="col-md-6">
        <h3>Why Choose Our Free Mouse Offer?</h3>
        <p>
          Elevate your productivity with a high-quality wireless mouse, included free with select laptop purchases.
        </p>
        <h4>Offer Details:</h4>
        <ul>
          <li>Available on selected laptop models from trusted brands.</li>
          <li>High-quality, ergonomic design for better productivity.</li>
          <li>Perfect for work, gaming, or casual use.</li>
        </ul>
        <h4>Benefits of the Free Mouse:</h4>
        <p>
          Enjoy a premium accessory for free and enhance your laptop’s usability and style.
        </p>
      </div>
    </div>
  </div>
);

export default FreeMouse;
