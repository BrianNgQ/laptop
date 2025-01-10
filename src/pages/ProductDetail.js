import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom"; // Thêm Bootstrap JavaScript

// Dữ liệu mẫu (đầy đủ 12 sản phẩm của bạn)
const products = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10",
    image: "/images/gatsby.jpg",
    images: ["/images/gatsby.jpg", "/images/gatsby_2.jpg", "/images/gatsby_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>The Great Gatsby is a novel about the American Dream in the Roaring Twenties.</p>
      <h3>Plot Summary</h3>
      <p>Nick Carraway narrates the story of Jay Gatsby's tragic pursuit of Daisy Buchanan.</p>
      <h3>Author Bio</h3>
      <p>F. Scott Fitzgerald was a renowned American writer during the Jazz Age.</p>
    `,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$15",
    image: "/images/1984.jpg",
    images: ["/images/1984.jpg", "/images/1984_2.jpg", "/images/1984_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>1984 is a dystopian novel that explores the dangers of totalitarianism.</p>
      <h3>Plot Summary</h3>
      <p>Winston Smith, living in a society controlled by "Big Brother," seeks to rebel.</p>
      <h3>Author Bio</h3>
      <p>George Orwell is a British writer famous for his political allegories.</p>
    `,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12",
    image: "/images/mockingbird.jpg",
    images: ["/images/mockingbird.jpg", "/images/mockingbird_2.jpg", "/images/mockingbird_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>To Kill a Mockingbird addresses issues of racism and injustice in the South.</p>
      <h3>Plot Summary</h3>
      <p>The story of Scout Finch, her father Atticus, and their fight against racial inequality.</p>
      <h3>Author Bio</h3>
      <p>Harper Lee is an American novelist known for her seminal work on racial issues.</p>
    `,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$18",
    image: "/images/pride.jpg",
    images: ["/images/pride.jpg", "/images/pride_2.jpg", "/images/pride_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>Pride and Prejudice is a romantic novel that critiques the English class system.</p>
      <h3>Plot Summary</h3>
      <p>The love story between Elizabeth Bennet and Mr. Darcy and their journey to overcome prejudices.</p>
      <h3>Author Bio</h3>
      <p>Jane Austen was an English author whose works have been widely adapted into film and theatre.</p>
    `,
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    price: "$22",
    image: "/images/mobydick.jpg",
    images: ["/images/mobydick.jpg", "/images/mobydick_2.jpg", "/images/mobydick_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>Moby-Dick is a novel about obsession and revenge, centered around Captain Ahab's pursuit of a whale.</p>
      <h3>Plot Summary</h3>
      <p>The narrative follows Ishmael, a sailor, aboard the Pequod under Ahab's command to hunt Moby Dick.</p>
      <h3>Author Bio</h3>
      <p>Herman Melville was an American author, known for this complex and philosophical novel.</p>
    `,
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: "$25",
    image: "/images/warpeace.jpg",
    images: ["/images/warpeace.jpg", "/images/warpeace_2.jpg", "/images/warpeace_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>War and Peace is an epic novel that spans the Napoleonic wars and Russian society.</p>
      <h3>Plot Summary</h3>
      <p>Following various characters, the story portrays the effects of Napoleon's invasion of Russia.</p>
      <h3>Author Bio</h3>
      <p>Leo Tolstoy was a Russian author, recognized as one of the greatest novelists of all time.</p>
    `,
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: "$14",
    image: "/images/catcher.jpg",
    images: ["/images/catcher.jpg", "/images/catcher_2.jpg", "/images/catcher_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>The Catcher in the Rye explores themes of adolescent rebellion, alienation, and identity.</p>
      <h3>Plot Summary</h3>
      <p>The story follows Holden Caulfield, a teenager grappling with grief and confusion about adulthood.</p>
      <h3>Author Bio</h3>
      <p>J.D. Salinger is best known for this classic work on the complexities of teenage life.</p>
    `,
  },
  {
    id: 8,
    title: "The Odyssey",
    author: "Homer",
    price: "$13",
    image: "/images/odyssey.jpg",
    images: ["/images/odyssey.jpg", "/images/odyssey_2.jpg", "/images/odyssey_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>The Odyssey is an ancient Greek epic, focusing on the hero Odysseus’s journey back home.</p>
      <h3>Plot Summary</h3>
      <p>Odysseus faces a variety of challenges on his long journey to return to Ithaca.</p>
      <h3>Author Bio</h3>
      <p>Homer is regarded as the father of Greek literature, famous for his epic poems.</p>
    `,
  },
  {
    id: 9,
    title: "Catch-22",
    author: "Joseph Heller",
    price: "$20",
    image: "/images/catch22.jpg",
    images: ["/images/catch22.jpg", "/images/catch22_2.jpg", "/images/catch22_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>Catch-22 explores the absurdity of war and the effects of bureaucracy on individuals.</p>
      <h3>Plot Summary</h3>
      <p>The novel follows Yossarian, a US Air Force bomber who becomes caught in the military's absurd regulations.</p>
      <h3>Author Bio</h3>
      <p>Joseph Heller is a renowned American author famous for his satirical take on war and politics.</p>
    `,
  },
  {
    id: 10,
    title: "Frankenstein",
    author: "Mary Shelley",
    price: "$17",
    image: "/images/frankenstein.jpg",
    images: ["/images/frankenstein.jpg", "/images/frankenstein_2.jpg", "/images/frankenstein_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>Frankenstein is the story of Victor Frankenstein and his creation of a monstrous creature.</p>
      <h3>Plot Summary</h3>
      <p>Victor’s creation is abandoned, and he must face the consequences of his reckless scientific ambition.</p>
      <h3>Author Bio</h3>
      <p>Mary Shelley is regarded as the mother of the science fiction genre, known for this gothic novel.</p>
    `,
  },
  {
    id: 11,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: "$19",
    image: "/images/crimepunishment.jpg",
    images: ["/images/crimepunishment.jpg", "/images/crimepunishment_2.jpg", "/images/crimepunishment_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>Crime and Punishment is a psychological exploration of crime, guilt, and redemption.</p>
      <h3>Plot Summary</h3>
      <p>The novel follows Rodion Raskolnikov, who commits murder and faces intense moral conflict.</p>
      <h3>Author Bio</h3>
      <p>Fyodor Dostoevsky is known for his deep psychological insights and philosophical themes in literature.</p>
    `,
  },
  {
    id: 12,
    title: "Dracula",
    author: "Bram Stoker",
    price: "$21",
    image: "/images/dracula.jpg",
    images: ["/images/dracula.jpg", "/images/dracula_2.jpg", "/images/dracula_3.jpg"],
    details: `
      <h2>About the Book</h2>
      <p>Dracula is the quintessential gothic novel about the legendary vampire and his pursuit of victims.</p>
      <h3>Plot Summary</h3>
      <p>The novel follows Jonathan Harker’s journey to Transylvania and his encounter with Count Dracula.</p>
      <h3>Author Bio</h3>
      <p>Bram Stoker is the Irish author credited with creating the most famous vampire novel of all time.</p>
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
