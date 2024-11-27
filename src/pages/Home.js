import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";

const Home = () => {
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

      <div className="row mt-5">
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
