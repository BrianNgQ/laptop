import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchedcategory = ["Romance", "Thriller", "Sci-fi", "Cooking", "Health"];
    setCategory(fetchedcategory);

  
    setProducts([
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
    ]);
  }, []);

  const handleCategorySelect = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="container my-5">
     
      <div className="mb-4">
        <select
          className="form-select"
          onChange={(e) => handleCategorySelect(e.target.value)}
        >
          <option value="">Select a category</option>
          {category.map((category) => (
            <option key={category} value={category}>
              {category}
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
