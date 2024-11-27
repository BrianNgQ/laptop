import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Discount.css";

const Discounts = () => (
  <div className="container my-5 discounts">
    <div className="back-to-home">
      <Link to="/" className="btn btn-primary center-text">
        Back
      </Link>
    </div>

    <div className="text-center mb-4">
      <h2 className="mb-3">Special Discounts</h2>
      <p className="lead">Discover the best deals on laptops and accessories!</p>
    </div>
    <div className="row">
      {/* Card 1: 10% Off Gaming Laptops */}
      <div className="col-md-4">
        <Link to="/sale-off" className="text-decoration-none">
          <div className="card discount-card">
            <img
              src="/images/discount1.jpg"
              className="card-img-top"
              alt="Gaming Laptops Discount"
            />
            <div className="card-body">
              <h5 className="card-title">10% Off Gaming Laptops</h5>
              <p className="card-text">
                Upgrade your gaming setup with amazing discounts on top brands.
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Card 2: Free Shipping */}
      <div className="col-md-4">
        <Link to="/free-shipping" className="text-decoration-none">
          <div className="card discount-card">
            <img
              src="/images/discount2.jpg"
              className="card-img-top"
              alt="Free Shipping Discount"
            />
            <div className="card-body">
              <h5 className="card-title">Free Shipping</h5>
              <p className="card-text">
                Enjoy free shipping on all orders above $500. Limited time only!
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Card 3: Free Mouse with Select Purchases */}
      <div className="col-md-4">
        <Link to="/free-mouse" className="text-decoration-none">
          <div className="card discount-card">
            <img
              src="/images/discount3.jpg"
              className="card-img-top"
              alt="Free Mouse Discount"
            />
            <div className="card-body">
              <h5 className="card-title">Free Mouse with Select Purchases</h5>
              <p className="card-text">
                Get a high-quality wireless mouse free with select laptops.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Discounts;
