// src/components/MemberDashboard.js
import React from "react";
import BillReceipt from "./BillReceipt";

function MemberDashboard() {
  const notifications = [
    { id: 1, message: "Monthly fee due on 1st of the month" },
    { id: 2, message: "New supplement available" },
  ];

  return (
    <div>
      <h2>Member Dashboard</h2>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>

      <h3>Bill Receipts</h3>
      <BillReceipt />
    </div>
  );
}

export default MemberDashboard;
