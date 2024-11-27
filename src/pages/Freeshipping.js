import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FreeShipping.css";

const FreeShipping = () => (
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
      Free Shipping
    </h2>
    <div className="row align-items-center">
      {/* Hình ảnh bên trái */}
      <div className="col-md-6 text-center">
        <img
          src="/images/discount2.jpg"
          alt="Free Shipping Offer"
          className="img-fluid rounded"
        />
      </div>
      {/* Văn bản bên phải */}
      <div className="col-md-6">
        <h3>Why Choose Our Free Shipping Offer?</h3>
        <p>
          Shop stress-free knowing you won’t have to pay extra for delivery. Enjoy free shipping on all orders over $500.
        </p>
        <h4>Offer Details:</h4>
        <ul>
          <li>Available for all products over $500.</li>
          <li>No hidden fees or additional charges.</li>
          <li>Applies to both domestic and international orders.</li>
        </ul>
        <h4>Benefits of Free Shipping:</h4>
        <p>
          Save on delivery costs, enjoy timely shipping, and make your shopping experience effortless.
        </p>
      </div>
    </div>
  </div>
);

export default FreeShipping;
