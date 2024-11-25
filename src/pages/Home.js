import React from "react";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center my-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h1 className="display-4 font-weight-bold">Welcome to Laptop Store</h1>
          <p className="lead mt-3">
            Discover the latest and greatest laptops that fit all your needs.
            Quality, performance, and style—all in one place.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn-custom"
              onClick={() => navigate("/products")}
            >
              View Products
            </button>
            <button
              className="btn-custom"
              onClick={() => navigate("/discounts")}
            >
              Discounts
            </button>
            <button
              className="btn-custom"
              onClick={() => navigate("/laptop-repair")}
            >
              Laptop Repair
            </button>
            <button
              className="btn-custom"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
            <button
              className="btn-custom"
              onClick={() => navigate("/news")}
            >
              News
            </button>
          </div>

         
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
