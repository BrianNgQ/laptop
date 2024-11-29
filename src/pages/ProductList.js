import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchedBrands = ["Dell", "HP", "Lenovo", "Apple"];
    setBrands(fetchedBrands);

  
    setProducts([
      {
        id: 1,
        name: "Dell  Inspiron 15 5000",
        brand: "Dell",
        price: "$500",
        image: "/images/laptop1.jpg",
      },
      {
        id: 2,
        name: "Dell Latitude 5410",
        brand: "Dell",
        price: "$500",
        image: "/images/laptop2.jpg",
      },
      {
        id: 3,
        name: "Dell Inspiron 3530",
        brand: "Dell",
        price: "$500",
        image: "/images/laptop3.jpg",
      },
      {
        id: 4,
        name: "HP Paviion 15",
        brand: "HP",
        price: "$600",
        image: "/images/laptop4.jpg",
      },
      {
        id: 5,
        name: "HP Pavilion Aero 13",
        brand: "HP",
        price: "$600",
        image: "/images/laptop5.jpg",
      },
      {
        id: 6,
        name: "HP Gaming Victus 15",
        brand: "HP",
        price: "$600",
        image: "/images/laptop6.jpg",
      },
      {
        id: 7,
        name: "Lenovo LOQ 15IAX9",
        brand: "Lenovo",
        price: "$700",
        image: "/images/laptop7.jpg",
      },
      {
        id: 8,
        name: "Lenovo Thinkbook 16 G6+",
        brand: "Lenovo",
        price: "$700",
        image: "/images/laptop8.jpg",
      },
      {
        id: 9,
        name: "Lenovo Ideapad Slim 5",
        brand: "Lenovo",
        price: "$700",
        image: "/images/laptop9.jpg",
      },
      {
        id: 10,
        name: "Macbook Air M2 2022",
        brand: "Apple",
        price: "$800",
        image: "/images/laptop10.jpg",
      },
      {
        id: 11,
        name: "Macbook Pro M1 Pro",
        brand: "Apple",
        price: "$800",
        image: "/images/laptop11.jpg",
      },
      {
        id: 12,
        name: "MacBook Air 13 inch",
        brand: "Apple",
        price: "$800",
        image: "/images/laptop12.jpg",
      },
    ]);
  }, []);

  const handleBrandSelect = (brand) => {
    navigate(`/products/${brand}`);
  };

  return (
    <div className="container my-5">
     
      <div className="mb-4">
        <select
          className="form-select"
          onChange={(e) => handleBrandSelect(e.target.value)}
        >
          <option value="">Select a Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
