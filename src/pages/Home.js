import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Danh sách hình ảnh
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
    "/images/banner5.jpg",
  ];

  // Tự động thay đổi hình ảnh mỗi 3 giây
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

          {/* Wrapper hiển thị hình ảnh */}
          <div className="image-wrapper mt-5">
  <img
    src={images[currentImageIndex]}
    alt={`Slide ${currentImageIndex + 1}`}
    className="img-fluid rounded shadow"
    style={{
      width: "720px", // Chiều rộng cố định
      height: "385px", // Chiều cao cố định
      objectFit: "contain", // Đảm bảo toàn bộ ảnh hiển thị trong khung
      backgroundColor: "#f8f9fa", // Màu nền để hiển thị viền nếu ảnh nhỏ hơn khung
    }}
  />
</div>

          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
