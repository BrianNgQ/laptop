import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4 product-card">
      <div
        className="shadow-sm position-relative h-100 card-container"
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        {/* Vùng chứa ảnh và icon */}
        <div
          className="position-relative"
          style={{
            backgroundColor: "#EFEEE8",
            padding: "31.5px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {/* Hình ảnh sản phẩm */}
          <img
            src={product.image}
            alt={product.name}
            style={{
              height: "200px",
              objectFit: "contain",
              maxWidth: "100%",
              display: "block",
            }}
          />

          {/* Lớp overlay cho icon */}
          <div className="icon-overlay d-flex justify-content-center align-items-center gap-3">
            {/* Icon heart */}
            <button
              title="Add to wishlist"
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "18px",
                border: "none",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                color: "black",
                cursor: "pointer",
              }}
            >
              <i className="fa-solid fa-heart"></i>
            </button>

            {/* Icon eye */}
            <button
              title="View this product"
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "18px",
                border: "none",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                color: "black",
                cursor: "pointer",
              }}
            >
              <i className="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div
          className="text-center mt-3"
          style={{
            padding: "10px 5px",
          }}
        >
          <h5
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "8px",
            }}
          >
            {product.name}
          </h5>
          <p
            className="text-success"
            style={{
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
