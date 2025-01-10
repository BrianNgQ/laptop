import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import "../styles/App.css"; // Import file CSS đã chứa định nghĩa gradient

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPromotion, setShowPromotion] = useState(true); // Trạng thái cho popup promotion

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

  // Đóng popup promotion
  const closePromotion = () => {
    setShowPromotion(false);
  };

  return (
   
      <div className="container text-center my-5">

      {/* Popup Promotion */}
{showPromotion && (
  <div className="promotion-modal d-flex justify-content-center align-items-center">
    <div className="promotion-content shadow-lg p-4 rounded position-relative">
      <button
        className="btn-close position-absolute top-0 end-0 m-2"
        onClick={closePromotion}
        aria-label="Close"
      />
      <img
        src="/images/promotion.jpg" // Hình ảnh liên quan đến sách
        alt="Special Book Promotion"
        className="img-fluid rounded mb-3"
      />
      <h3 className="text-primary">📚 Book Lovers' Special!</h3>
      <p className="lead text-secondary">
        Save up to <strong className="text-success">50%</strong> on bestselling books.
      </p>
      <button
        className="btn btn-success w-100"
        onClick={() => {
          navigate("/sale-off");
          closePromotion();
        }}
      >
        View Deals
      </button>
    </div>
  </div>
)}


        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for books, category or author..."
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

        {/* Banner */}
        <div className="row justify-content-center mb-5">
  <div className="col-12">
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
      {/* View All Books */}
      <span
        onClick={() => navigate("/books")}
        style={{
          cursor: "pointer",
          color: "#6D6D6D",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        View All Books
      </span>

      {/* Book Category */}
      <span
        onClick={() => navigate("/categories")}
        style={{
          cursor: "pointer",
          color: "#6D6D6D",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Book Category
      </span>

      {/* Personal Book */}
      <span
        onClick={() => navigate("/personal-book")}
        style={{
          cursor: "pointer",
          color: "#6D6D6D",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Personal Book
      </span>

      {/* Contact */}
      <span
        onClick={() => navigate("/contact")}
        style={{
          cursor: "pointer",
          color: "#6D6D6D",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Contact
      </span>
    </div>
  </div>
</div>




        {/* Slideshow and Sidebar */}
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

        {/* Filter Cards */}
        <div className="row my-5 filter-card-container">
  <div className="col-12 col-md-4 mb-3">
    <div
      className="card h-100 shadow border-primary filter-card"
      onClick={() => navigate("/books?category=romance")}
      style={{ cursor: "pointer" }}
    >
      <img
        src="/images/romancebook.jpg"
        className="card-img-top"
        alt="Romance Book"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">Romance Books</h5>
        <p className="card-text">Fall in love with heartwarming romantic tales.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-4 mb-3">
    <div
      className="card h-100 shadow border-success filter-card"
      onClick={() => navigate("/books?category=thriller")}
      style={{ cursor: "pointer" }}
    >
      <img
        src="/images/thrillerbook.jpg"
        className="card-img-top"
        alt="Thriller Book"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-success">Thriller Books</h5>
        <p className="card-text">Dive into intense, gripping thrillers full of suspense.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-4 mb-3">
    <div
      className="card h-100 shadow border-warning filter-card"
      onClick={() => navigate("/books?category=sci-fi")}
      style={{ cursor: "pointer" }}
    >
      <img
        src="/images/scifibook.jpg"
        className="card-img-top"
        alt="Sci-Fi Book"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-warning">Sci-Fi Books</h5>
        <p className="card-text">Explore futuristic worlds and thrilling science fiction adventures.</p>
      </div>
    </div>
  </div>
</div>


        {/* Product List */}
        <div className="mt-5">
          <ProductList />
        </div>
      </div>
  );
};

export default Home;
