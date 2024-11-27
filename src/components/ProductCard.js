import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="col-md-3 mb-4"> 
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{
            height: "200px", 
            objectFit: "contain", 
          }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{product.name}</h5>
          <p className="card-text text-success font-weight-bold text-center">
            {product.price}
          </p>
          <div className="mt-auto d-flex align-items-center justify-content-center">
            
            <Link
              to={`/product/${product.id}`}
              title="View this product" 
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "18px",
                color: "black",
                textDecoration: "none", 
              }}
            >
              <i className="fa-solid fa-eye"></i>
            </Link>

          
            <div
              style={{
                width: "1px",
                height: "25px", 
                backgroundColor: "#ddd",
                margin: "0 8px",
              }}
            ></div>

           
            <button
              onClick={handleAddToCart}
              title="Add to cart" 
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "18px",
                border: "none",
                background: "none", 
                color: "black", 
                cursor: "pointer", 
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
