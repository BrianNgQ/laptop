import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import "../styles/App.css";

const Home = () => {
  const navigate = useNavigate(); 
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
    "/images/banner5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="gradient-background">
      <div className="container text-center my-5">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for laptops, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h1 className="display-4 font-weight-bold">Welcome to Laptop Store</h1>
            <p className="lead mt-3">
              Discover the latest and greatest laptops that fit all your needs.
              Quality, performance, and style—all in one place.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/products")}
              >
                View Products
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => navigate("/discounts")}
              >
                Discounts
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => navigate("/laptop-repair")}
              >
                Laptop Repair
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={() => navigate("/news")}
              >
                News
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="image-wrapper">
              <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  backgroundColor: "#f8f9fa",
                }}
              />
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex flex-column gap-3">
            <img
              src="/images/event1.jpg"
              alt="Sidebar content 1"
              className="img-fluid rounded shadow"
              style={{
                height: "200px",
                objectFit: "cover",
              }}
            />
            <img
              src="/images/event2.jpg"
              alt="Sidebar content 2"
              className="img-fluid rounded shadow"
              style={{
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="row my-5 filter-card-container">
          <div className="col-12 col-md-4 mb-3">
            <div
              className="card h-100 shadow border-primary filter-card"
              onClick={() => navigate("/products?category=gaming")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/images/gaminglaptop.jpg"
                className="card-img-top"
                alt="Gaming Laptop"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Gaming Laptop</h5>
                <p className="card-text">High-performance laptops for gamers.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div
              className="card h-100 shadow border-success filter-card"
              onClick={() => navigate("/products?category=office")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/images/officelaptop.jpg"
                className="card-img-top"
                alt="Office Laptop"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">Office Laptop</h5>
                <p className="card-text">Reliable laptops for productivity.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div
              className="card h-100 shadow border-warning filter-card"
              onClick={() => navigate("/products?category=graphics")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="/images/graphicslaptop.jpg"
                className="card-img-top"
                alt="Graphics Laptop"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-warning">Graphics Laptop</h5>
                <p className="card-text">Powerful laptops for designers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
