// src/components/BillReceipt.js
import React from "react";

function BillReceipt() {
  const receipts = [
    { id: 1, date: "2024-01-01", amount: "$50" },
    { id: 2, date: "2024-02-01", amount: "$50" },
  ];

  return (
    <div>
      <ul>
        {receipts.map((receipt) => (
          <li key={receipt.id}>
            Date: {receipt.date}, Amount: {receipt.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BillReceipt;
