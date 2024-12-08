import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Page.scss";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>Terms & Conditions</h1>
        <p>
          Please read these terms and conditions carefully before using our website. By accessing our platform, you agree to comply with the following terms:
        </p>
        <ul>
          <li>Your account is your responsibility. Keep your credentials secure.</li>
          <li>All bookings must comply with local laws and regulations.</li>
          <li>Dream Nest reserves the right to modify or cancel services at any time.</li>
        </ul>
      </div>
    </>
  );
};

export default TermsAndConditions;
