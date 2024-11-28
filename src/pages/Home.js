import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";

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
    <div className="container text-center my-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
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
        <div className="col-md-12">
          <h1 className="display-4 font-weight-bold">Welcome to Laptop Store</h1>
          <p className="lead mt-3">
            Discover the latest and greatest laptops that fit all your needs.
            Quality, performance, and style—all in one place.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
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
        <div className="col-md-8">
          <div className="image-wrapper">
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="img-fluid rounded shadow"
              style={{
                width: "100%",
                height: "385px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
              }}
            />
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column gap-3">
          <img
            src="/images/event1.jpg"
            alt="Sidebar content 1"
            className="img-fluid rounded shadow"
            style={{
              height: "185px",
              objectFit: "cover",
            }}
          />
          <img
            src="/images/event2.jpg"
            alt="Sidebar content 2"
            className="img-fluid rounded shadow"
            style={{
              height: "185px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="mt-5">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
