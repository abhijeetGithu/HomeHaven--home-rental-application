import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Page.scss";

const ReturnAndRefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>Return & Refund Policy</h1>
        <p>
          At Dream Nest, we strive to ensure customer satisfaction. If your travel plans change, you can request cancellations, returns, or refunds in accordance with our policy. Please refer to our detailed terms for eligibility and processing timelines.
        </p>
        <ul>
          <li>Full refund for cancellations made within 48 hours of booking.</li>
          <li>Partial refunds may apply for cancellations made later.</li>
          <li>No refunds for cancellations made within 24 hours of check-in.</li>
        </ul>
      </div>
    </>
  );
};

export default ReturnAndRefundPolicy;
