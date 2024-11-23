import React, { useState } from "react";

const CreateBills = () => {
  const [billData, setBillData] = useState({ member: "", amount: "" });

  const handleChange = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bill Created");
    console.log(billData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Bill</h2>
      <input
        type="text"
        name="member"
        placeholder="Member Name"
        value={billData.member}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={billData.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Bill</button>
    </form>
  );
};

export default CreateBills;
