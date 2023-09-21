import React from "react";
import { Link } from "react-router-dom";
import img1 from "./images/Logo.png";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header>
       <Navbar />
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TourPal</h1>
          <p>Your Trusted Travel Companion</p>
          <Link to="/explore" className="btn">
            Explore Now
          </Link>
        </div>
        <img src={img1} alt="Travel Destinations" />
      </section>

      <section className="features">
        <div className="feature">
          <h2>Discover New Places</h2>
          <p>Explore exciting travel destinations and hidden gems.</p>
        </div>
        <div className="feature">
          <h2>Plan Your Adventures</h2>
          <p>Create personalized itineraries and save your favorite trips.</p>
        </div>
        <div className="feature">
          <h2>Connect with Guides</h2>
          <p>Find experienced guides for your travel adventures.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <Link to="/register" className="btn">
          Sign Up Now
        </Link>
      </section>

      <footer>
        <p>&copy; 2023 TourPal. All rights reserved.</p>
      </footer>
    </div>
  );
}
