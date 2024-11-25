import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom"; // Thêm Bootstrap JavaScript

// Dữ liệu mẫu (đầy đủ 12 sản phẩm của bạn)
const products = [
  {
    id: 1,
    name: "Dell Inspiron 15 5000",
    brand: "Dell",
    price: "$500",
    image: "/images/laptop1.jpg",
    images: ["/images/laptop1.jpg", "/images/laptop1_2.jpg", "/images/laptop1_3.jpg"],
details: `
  <h2>Performance</h2>
  <p>This laptop delivers exceptional performance with its powerful processor.</p>
  <h3>Specifications</h3>
  <ul>
    <li>Display: 15.6 inches Full HD</li>
    <li>Processor: Intel Core i5</li>
    <li>Storage: 512GB SSD</li>
  </ul>
`,
    },
  {
    id: 2,
    name: "Dell Latitude 5410",
    brand: "Dell",
    price: "$500",
    image: "/images/laptop2.jpg",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2_2.jpg",
      "/images/laptop2_3.jpg",
    ],
    details: `
      <h2>Business-Class Laptop</h2>
      <p>Perfect for professionals with a lightweight design and solid performance.</p>
      <h3>Key Highlights</h3>
      <ul>
        <li>14-inch Full HD Display</li>
        <li>Intel Core i5 Processor</li>
        <li>Long Battery Life</li>
      </ul>
    `,
  },
  {
    id: 3,
    name: "Dell Inspiron 3530",
    brand: "Dell",
    price: "$500",
    image: "/images/laptop3.jpg",

    images: [
      "/images/laptop3.jpg",
      "/images/laptop3_2.jpg",
      "/images/laptop3_3.jpg",
    ],
    details: `
      <h2>Compact Design</h2>
      <p>The Dell Inspiron 3530 is designed for portability without sacrificing performance.</p>
      <h3>Features</h3>
      <ul>
        <li>13-inch HD Display</li>
        <li>Intel Core i3 Processor</li>
        <li>500GB HDD Storage</li>
      </ul>
    `,
  },
  {
    id: 4,
    name: "HP Pavilion 15",
    brand: "HP",
    price: "$600",
    image: "/images/laptop4.jpg",
   
    images: [
      "/images/laptop4.jpg",
      "/images/laptop4_2.jpg",
      "/images/laptop4_3.jpg",
    ],
    details: `
      <h2>Elegant Design</h2>
      <p>Combines sleek aesthetics with powerful performance.</p>
      <h3>Specifications</h3>
      <ul>
        <li>15-inch Full HD Display</li>
        <li>Intel Core i7 Processor</li>
        <li>16GB RAM, 1TB SSD</li>
      </ul>
    `,
  },
  {
    id: 5,
    name: "HP Pavilion Aero 13",
    brand: "HP",
    price: "$600",
    image: "/images/laptop5.jpg",
    
    images: [
      "/images/laptop5.jpg",
      "/images/laptop5_2.jpg",
      "/images/laptop5_3.jpg",
    ],
    details: `
      <h2>Portability</h2>
      <p>Designed for students and professionals who need performance on the go.</p>
      <h3>Specifications</h3>
      <ul>
        <li>13-inch Full HD Display</li>
        <li>AMD Ryzen 5 Processor</li>
        <li>8GB RAM, 512GB SSD</li>
      </ul>
    `,
  },
  {
    id: 6,
    name: "HP Gaming Victus 15",
    brand: "HP",
    price: "$600",
    image: "/images/laptop6.jpg",
    
    images: [
      "/images/laptop6.jpg",
      "/images/laptop6_2.jpg",
      "/images/laptop6_3.jpg",
    ],
    details: `
      <h2>Ultimate Gaming Experience</h2>
      <p>Built for gamers with top-notch hardware and advanced cooling technology.</p>
      <h3>Specifications</h3>
      <ul>
        <li>15.6-inch Full HD Display</li>
        <li>NVIDIA GeForce GTX 1650</li>
        <li>Intel Core i7, 16GB RAM</li>
      </ul>
    `,
  },
  {
    id: 7,
    name: "Lenovo LOQ 15IAX9",
    brand: "Lenovo",
    price: "$700",
    image: "/images/laptop7.jpg",
   
    images: [
      "/images/laptop7.jpg",
      "/images/laptop7_2.jpg",
      "/images/laptop7_3.jpg",
    ],
    details: `
    <h2>High Performance</h2>
    <p>Offers an unmatched experience for gamers and power users alike.</p>
    <h3>Specifications</h3>
    <ul>
      <li>15.6-inch Display</li>
      <li>Intel Core i7 Processor</li>
      <li>1TB SSD</li>
    </ul>
  `,
  },
  {
    id: 8,
    name: "Lenovo Thinkbook 16 G6+",
    brand: "Lenovo",
    price: "$700",
    image: "/images/laptop8.jpg",
    
    images: [
      "/images/laptop8.jpg",
      "/images/laptop8_2.jpg",
      "/images/laptop8_3.jpg",
    ],
    details: `
      <h2>Professional Performance</h2>
      <p>Designed for professionals who need power and reliability for everyday tasks and heavy applications.</p>
      <h3>Features</h3>
      <ul>
        <li>16-inch Full HD Display</li>
        <li>Intel Core i7 Processor</li>
        <li>16GB RAM, 512GB SSD</li>
      </ul>
    `,
  },
  {
    id: 9,
    name: "Lenovo Ideapad Slim 5",
    brand: "Lenovo",
    price: "$700",
    image: "/images/laptop9.jpg",
    images: [
      "/images/laptop9.jpg",
      "/images/laptop9_2.jpg",
      "/images/laptop9_3.jpg",
    ],
    details: `
      <h2>Slim and Stylish</h2>
      <p>With a sleek design, the Ideapad Slim 5 is perfect for users who need portability with solid performance.</p>
      <h3>Specifications</h3>
      <ul>
        <li>14-inch Full HD Display</li>
        <li>AMD Ryzen 5 Processor</li>
        <li>8GB RAM, 512GB SSD</li>
      </ul>
    `,
  },
  {
    id: 10,
    name: "Macbook Air M2 2022",
    brand: "Apple",
    price: "$800",
    image: "/images/laptop10.jpg",
    images: [
      "/images/laptop10.jpg",
      "/images/laptop10_2.jpg",
      "/images/laptop10_3.jpg",
    ],
    details: `
      <h2>Power and Portability</h2>
      <p>The Macbook Air M2 offers exceptional performance while remaining ultra-portable and sleek.</p>
      <h3>Features</h3>
      <ul>
        <li>13.3-inch Retina Display</li>
        <li>Apple M2 Chip</li>
        <li>8GB RAM, 256GB SSD</li>
      </ul>
    `,
  },
  {
    id: 11,
    name: "Macbook Pro M1 Pro",
    brand: "Apple",
    price: "$800",
    image: "/images/laptop11.jpg",
    description:
      "High-performance MacBook with M1 Pro chip, 16GB RAM, and 512GB SSD.",
    images: [
      "/images/laptop11.jpg",
      "/images/laptop11_2.jpg",
      "/images/laptop11_3.jpg",
    ],
    details: `
      <h2>For Creative Professionals</h2>
      <p>The Macbook Pro M1 Pro is built for professionals in creative fields with power for demanding applications.</p>
      <h3>Specifications</h3>
      <ul>
        <li>14-inch Retina Display</li>
        <li>Apple M1 Pro Chip</li>
        <li>16GB RAM, 512GB SSD</li>
      </ul>
    `,
  },
  {
    id: 12,
    name: "MacBook Air 13 inch",
    brand: "Apple",
    price: "$800",
    image: "/images/laptop12.jpg",
    images: [
      "/images/laptop12.jpg",
      "/images/laptop12_2.jpg",
      "/images/laptop12_3.jpg",
    ],
    details: `
      <h2>Ultimate Portability</h2>
      <p>The MacBook Air 13-inch offers great performance in a thin and portable form factor, making it ideal for travel.</p>
      <h3>Key Features</h3>
      <ul>
        <li>13.3-inch Retina Display</li>
        <li>Apple M1 Chip</li>
        <li>8GB RAM, 256GB SSD</li>
      </ul>
    `,
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // Use navigate to handle navigation
  const [product, setProduct] = useState(null); // Store the selected product

  // Find the product based on the ID
  useEffect(() => {
    const productData = products.find((p) => p.id.toString() === id);
    setProduct(productData);
  }, [id]);

  // Show a loading message if the product is not yet loaded
  if (!product || !product.images) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      {/* Back button */}
      <button onClick={() => navigate(-1)} className="btn btn-secondary mb-4">
        Back
      </button>

      <div className="row">
        {/* Product images carousel */}
        <div className="col-md-6">
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Product details */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5">{product.name}</h1>
          <p className="text-success h4 font-weight-bold">{product.price}</p>

          {/* Render HTML details */}
          <div dangerouslySetInnerHTML={{ __html: product.details }} />
          <button className="btn btn-primary btn-lg mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
