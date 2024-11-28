import React, { useState } from "react";

const CreateBills = () => {
  const [billData, setBillData] = useState({ member: "", amount: "" });
  const [bills, setBills] = useState([]); // Array to store created bills

  const handleChange = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBills([...bills, billData]); // Add new bill to the bills array
    setBillData({ member: "", amount: "" }); // Reset the form fields
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      {/* Form for creating a bill */}
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "20px auto",
          padding: "20px",
          maxWidth: "400px",
          borderRadius: "8px",
          backgroundColor: "#f9fafb",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Create Bill</h2>
        <input
          type="text"
          name="member"
          placeholder="Member Name"
          value={billData.member}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={billData.amount}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Create Bill
        </button>
      </form>

      {/* Display created bills only if there are any */}
      {bills.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "20px auto",
            maxWidth: "400px",
          }}
        >
          {bills.map((bill, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#fff",
                marginBottom: "10px",
                padding: "10px 15px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
              }}
            >
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                Member: <span style={{ fontWeight: "normal" }}>{bill.member}</span>
              </p>
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                Amount: <span style={{ fontWeight: "normal" }}>${bill.amount}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreateBills;
