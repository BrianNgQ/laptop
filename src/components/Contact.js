import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css"; 

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
        
        <h2 className="text-center mb-4 custom-heading">Contact Us</h2>

         
          <div className="text-center mb-4">
            <img
              src="/images/logo.jpg"
              alt="Laptop Store Logo"
              className="img-fluid logo"
            />
          </div>

    
          <p className="text-center">
            You can reach us via email at{" "}
            <a href="mailto:support@laptopstore.com">support@laptopstore.com</a>
          </p>

          
          <div className="contact-form">
            <h3 className="mb-3">Contact Form</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
