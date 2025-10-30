import React, { useState } from "react";

export default function App() {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div style={{ fontFamily: "Arial", margin: "30px" }}>
      <h2>🧾 Checkout - Payment Method Selection</h2>

      <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h3>1️⃣ Select Payment Method</h3>

        <label style={{ display: "block", marginBottom: "8px" }}>
          <input
            type="radio"
            value="Cash on Delivery"
            checked={selectedMethod === "Cash on Delivery"}
            onChange={handleChange}
          />
          {" "}Cash on Delivery
        </label>

        <label style={{ display: "block", marginBottom: "8px" }}>
          <input
            type="radio"
            value="UPI"
            checked={selectedMethod === "UPI"}
            onChange={handleChange}
          />
          {" "}UPI
        </label>

        <label style={{ display: "block", marginBottom: "8px" }}>
          <input
            type="radio"
            value="Debit/Credit Card"
            checked={selectedMethod === "Debit/Credit Card"}
            onChange={handleChange}
          />
          {" "}Debit/Credit Card
        </label>
      </div>

      <div style={{ marginTop: "30px", padding: "10px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h3>2️⃣ Order Summary</h3>
        {selectedMethod ? (
          <p>
            <strong>Selected Payment Method:</strong> {selectedMethod}
          </p>
        ) : (
          <p style={{ color: "gray" }}>No payment method selected yet.</p>
        )}
      </div>
    </div>
  );
}
