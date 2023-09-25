import React from "react";
import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import TouristMap from "./TouristMap"; // Import your Google Map component

export default function HomePage() {
  return (
    <div>
      <TouristMap />
    </div>
  );
}
