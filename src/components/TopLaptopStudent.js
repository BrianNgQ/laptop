import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const laptops = [
  {
    id: 1,
    name: "Dell XPS 13",
    memory: "16GB RAM, 512GB SSD",
    price: "$1,200",
    image: "/images/laptop1.jpg",
    hardware: "Intel Core i7-1165G7, 16GB RAM, 512GB SSD, 13.4 inch Full HD screen",
    software: "Windows 10 Home, Dell Mobile Connect",
    description: "The Dell XPS 13 is perfect for students needing a portable and powerful laptop for everyday tasks and light gaming."
  },
  {
    id: 2,
    name: "MacBook Air M2",
    memory: "8GB RAM, 256GB SSD",
    price: "$1,100",
    image: "/images/laptop2.jpg",
    hardware: "Apple M2 chip, 8GB RAM, 256GB SSD, 13.6 inch Retina display",
    software: "macOS Monterey, Universal Control, Handoff",
    description: "The MacBook Air M2 is ideal for students who need a reliable, sleek, and high-performance laptop."
  },
  {
    id: 3,
    name: "Lenovo Ideapad Slim 5",
    memory: "8GB RAM, 512GB SSD",
    price: "$650",
    image: "/images/laptop3.jpg",
    hardware: "AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, 14 inch Full HD screen",
    software: "Windows 11 Home, Windows Hello",
    description: "Lenovo Ideapad Slim 5 is a budget-friendly laptop for students needing reliability and solid performance."
  },
  {
    id: 4,
    name: "HP Pavilion Aero 13",
    memory: "16GB RAM, 512GB SSD",
    price: "$800",
    image: "/images/laptop4.jpg",
    hardware: "AMD Ryzen 7 5800U, 16GB RAM, 512GB SSD, 13.3 inch Full HD display",
    software: "Windows 11, Windows Ink",
    description: "The HP Pavilion Aero 13 is ideal for students looking for a portable and powerful laptop."
  },
  {
    id: 5,
    name: "ASUS ZenBook 14",
    memory: "16GB RAM, 1TB SSD",
    price: "$950",
    image: "/images/laptop5.jpg",
    hardware: "Intel Core i7-1165G7, 16GB RAM, 1TB SSD, 14 inch Full HD NanoEdge display",
    software: "Windows 10 Pro",
    description: "The ASUS ZenBook 14 offers powerful performance in a compact, portable design, perfect for students."
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="card shadow-lg border-0 rounded-3 mb-4">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{
          height: "250px",
          objectFit: "contain",
        }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{product.name}</h5>
        <p className="card-text text-success font-weight-bold text-center">{product.price}</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link
            to={`/product/${product.id}`}
            title="View this product"
            className="btn btn-outline-primary btn-sm"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            title="Add to cart"
            className="btn btn-outline-warning btn-sm"
          >
            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const TopLaptopStudent = () => {
  return (
    <div className="container my-5">
   <h2 className="text-center mb-5 fw-bold fs-1">Top 5 Laptops for Students in 2024</h2>

      <div className="row">
        {laptops.map((laptop) => (
          <div className="col-md-6 mb-4" key={laptop.id}>
            <div className="row">
             
              <div className="col-lg-6">
                <ProductCard product={laptop} />
              </div>

         
              <div className="col-lg-6">
                <h3>{laptop.name}</h3>
                <p><strong>Hardware:</strong> {laptop.hardware}</p>
                <p><strong>Software:</strong> {laptop.software}</p>
                <p>{laptop.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLaptopStudent;
