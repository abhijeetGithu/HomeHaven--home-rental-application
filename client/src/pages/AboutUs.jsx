import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Page.scss";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>About Us</h1>
        <p>
          Welcome to Dream Nest! We are dedicated to providing our customers with the best services for their dream stays. Our mission is to make your travel and accommodation seamless and memorable.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
