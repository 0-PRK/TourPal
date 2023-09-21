import React, { useState } from "react";
import "../App.css"; // Import the CSS file
import Footer from "./footer";

export default function Login() {
  // State to manage user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API call)
    // Redirect to the user dashboard upon successful login
  };

  return (
    <div className="aligncenter1">
      <div className="quicksand18">
        <h1 style={{ fontSize: "100px" }}>LOGIN</h1>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
