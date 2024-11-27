import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Saleoff.css";

const Saleoff = () => (
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
      10% Off Gaming Laptops
    </h2>
    <div className="row align-items-center">
      {/* Hình ảnh bên trái */}
      <div className="col-md-6 text-center">
        <img
          src="/images/discount1.jpg"
          alt="Gaming Laptops Discount"
          className="img-fluid rounded"
        />
      </div>
      {/* Văn bản bên phải */}
      <div className="col-md-6">
        <h3>Why Choose Gaming Laptops with 10% Off?</h3>
        <p>
          Upgrade your gaming experience with premium laptops from top brands at an unbeatable price. 
          This exclusive offer is perfect for gamers seeking high performance and reliability.
        </p>
        <h4>Highlights of the Offer:</h4>
        <ul>
          <li>10% discount on gaming laptops from brands like Alienware, ASUS ROG, and MSI.</li>
          <li>Ideal for both professional gamers and casual enthusiasts.</li>
          <li>Limited-time offer, so act quickly!</li>
        </ul>
        <h4>Benefits of Gaming Laptops:</h4>
        <p>
          Enjoy enhanced gaming performance, stunning graphics, and cutting-edge technology—all at a discounted price.
        </p>
      </div>
    </div>
  </div>
);

export default Saleoff;
