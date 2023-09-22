import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  rel="stylesheet"
></link>;

const LandingPage = () => {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1488342994276-7c3bc0742042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <div
      className="container-fluid"
      style={{
        background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
        backgroundSize: "cover",
        height: "100vh",
        color: "white",
        paddingTop: "100px",
      }}
    >
      <header className="text-center">
        <h1 className="display-4">Find the Perfect Guide</h1>
        <p className="lead">
          Explore your destination with knowledgeable local guides.
        </p>
      </header>
      <section className="search-section my-5">
        <div
          className="container text-white bg-dark p-4 rounded"
          style={{ opacity: "0.8" }}
        >
          <h2 className="text-center mb-4">Find a Guide Near You</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your destination"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-us-section text-center my-5">
        <div
          className="container text-white bg-dark p-4 rounded"
          style={{ opacity: "0.8" }}
        >
          <h2>Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fas fa-globe fa-4x mb-3"></i>
                <h3>Local Experts</h3>
                <p>Our guides are locals who know the area inside out.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fas fa-star fa-4x mb-3"></i>
                <h3>Top-rated Guides</h3>
                <p>Read reviews and choose from highly-rated guides.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fas fa-lock fa-4x mb-3"></i>
                <h3>Secure Booking</h3>
                <p>Your bookings and payments are secure with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section text-center my-5">
        <div
          className="container text-white bg-dark p-4 rounded"
          style={{ opacity: "0.8" }}
        >
          <h2>Ready to Start Your Adventure?</h2>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Sign Up
          </Link>
          <p className="mt-3 text-white">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
