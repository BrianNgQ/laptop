import React from "react";
import { Link } from "react-router-dom"; // Import Link từ React Router
import "bootstrap/dist/css/bootstrap.min.css";
import "./News.css";

const News = () => (
  <div className="container my-5 news-page">
    {/* Nút "Back" */}
    <div className="back-to-home">
      <Link to="/" className="btn btn-primary center-text">
        Back
      </Link>
    </div>

    <div className="text-center mb-4">
      <h2 className="mb-3">Latest News</h2>
      <p className="lead">
        Stay updated with the latest news and updates from Laptop Store.
      </p>
    </div>

    <div className="row mt-5">
      <div className="col-md-3">
        <Link to="/top-laptops-student" className="text-decoration-none">
          <div className="card news-card h-100">
            <img
              src="/images/news1.jpg"
              className="card-img-top"
              alt="Top 5 Laptops for Students in 2024"
            />
            <div className="card-body">
              <h5 className="card-title">Top 5 Laptops for Students in 2024</h5>
              <p className="card-text">
                Explore the best laptops for students with performance and value.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-md-3">
        <Link to="/what-is-gaming-laptop" className="text-decoration-none">
          <div className="card news-card h-100">
            <img
              src="/images/news2.jpg"
              className="card-img-top"
              alt="What is a gaming laptop?"
            />
            <div className="card-body">
              <h5 className="card-title">What is a gaming laptop?</h5>
              <p className="card-text">
                Learn what sets gaming laptops apart and their key features.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-md-3">
        <Link to="/back-to-school" className="text-decoration-none">
          <div className="card news-card h-100">
            <img
              src="/images/news3.jpg"
              className="card-img-top"
              alt="Back to school! Super laptop promotion"
            />
            <div className="card-body">
              <h5 className="card-title">Back to school! Super laptop promotion</h5>
              <p className="card-text">
                Get amazing deals on laptops for the new school year.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-md-3">
        <Link to="/best-laptop-brand" className="text-decoration-none">
          <div className="card news-card h-100">
            <img
              src="/images/news4.jpg"
              className="card-img-top"
              alt="Which laptop brand is the best today?"
            />
            <div className="card-body">
              <h5 className="card-title">Which laptop brand is the best today?</h5>
              <p className="card-text">
                Discover the top brands that offer reliability and performance.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default News;
