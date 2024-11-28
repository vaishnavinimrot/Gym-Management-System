import React, { useState } from "react";

const ViewBillReceipts = () => {
  // Sample bill receipt data
  const [bills, setBills] = useState([
    { id: 1, member: "John Doe", amount: 100, date: "2024-11-01" },
    { id: 2, member: "Jane Doe", amount: 150, date: "2024-11-05" },
    { id: 3, member: "Alex Smith", amount: 200, date: "2024-11-10" },
    { id: 4, member: "Emily Johnson", amount: 250, date: "2024-11-12" }
  ]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>View Bill Receipts</h2>
      <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Member</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Amount</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{bill.member}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>${bill.amount}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{bill.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBillReceipts;
