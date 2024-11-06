
import React, { useState } from "react";
import SearchRecords from "./SearchRecord";

function UserDashboard() {
  const [userDetails] = useState({
    name: "John Doe",
    membershipType: "Gold",
    contact: "123-456-7890",
  });

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>Your Details</h3>
      <p>Name: {userDetails.name}</p>
      <p>Membership Type: {userDetails.membershipType}</p>
      <p>Contact: {userDetails.contact}</p>

      <h3>Search Records</h3>
      <SearchRecords />
    </div>
  );
}

export default UserDashboard;
