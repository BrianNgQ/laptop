import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductByBrand = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Dữ liệu sản phẩm với id duy nhất
    const allProducts = [
      {
        id: 1,
        name: "Pride and Prejudice",
        category: "Romance",
        price: "$12.99",
        image: "/images/book1.jpg",
      },
      {
        id: 2,
        name: "The Silent Patient",
        category: "Thriller",
        price: "$14.99",
        image: "/images/book2.jpg",
      },
      {
        id: 3,
        name: "Dune",
        category: "Sci-fi",
        price: "$18.99",
        image: "/images/book3.jpg",
      },
      {
        id: 4,
        name: "Mastering the Art of French Cooking",
        category: "Cooking",
        price: "$20.99",
        image: "/images/book4.jpg",
      },
      {
        id: 5,
        name: "The Body Keeps the Score",
        category: "Health",
        price: "$16.99",
        image: "/images/book5.jpg",
      },
      {
        id: 6,
        name: "The Life-Changing Magic of Tidying Up",
        category: "Lifestyle",
        price: "$15.99",
        image: "/images/book6.jpg",
      },
      {
        id: 7,
        name: "The Great Gatsby",
        category: "Fiction",
        price: "$13.99",
        image: "/images/book7.jpg",
      },
      {
        id: 8,
        name: "Gone Girl",
        category: "Thriller",
        price: "$17.99",
        image: "/images/book8.jpg",
      },
      {
        id: 9,
        name: "The Hobbit",
        category: "Sci-fi",
        price: "$14.99",
        image: "/images/book9.jpg",
      },
      {
        id: 10,
        name: "The 5 Second Rule",
        category: "Health",
        price: "$11.99",
        image: "/images/book10.jpg",
      },
      {
        id: 11,
        name: "The 4-Hour Workweek",
        category: "Lifestyle",
        price: "$19.99",
        image: "/images/book11.jpg",
      },
      {
        id: 12,
        name: "It Ends with Us",
        category: "Romance",
        price: "$14.99",
        image: "/images/book12.jpg",
      },
    ];

    // Lọc sản phẩm theo brand
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
  }, [category]);

  // Hàm quay lại trang trước
  const handleGoBack = () => {
    navigate(-1); // Trở lại trang trước
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Products of {category}</h2>
      <button className="btn btn-secondary mb-4" onClick={handleGoBack}>
        Go Back
      </button>
      <div className="row">
        {products.length === 0 ? (
          <p>No products found for this brand.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductByBrand;
