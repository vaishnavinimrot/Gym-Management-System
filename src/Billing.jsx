// src/components/Billing.js
import React, { useState } from "react";
import "./billing.css";

function Billing() {
  const [bill, setBill] = useState({ memberId: "", amount: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBill({ ...bill, [name]: value });
  };

  const handleCreateBill = () => {
    // Logic to create a bill, e.g., send data to backend
    console.log("Bill created:", bill);
    alert("Bill created successfully!");
  };

  return (
    <div className="billing-container">
      <h2>Create Bill</h2>
      <input type="text" name="memberId" placeholder="Member ID" value={bill.memberId} onChange={handleInputChange} />
      <input type="number" name="amount" placeholder="Amount" value={bill.amount} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" value={bill.description} onChange={handleInputChange} />
      <button onClick={handleCreateBill}>Create Bill</button>
    </div>
  );
}

export default Billing;
