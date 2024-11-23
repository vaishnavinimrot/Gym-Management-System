import React from "react";

const AssignNotifications = () => {
  const handleAssign = () => {
    alert("Monthly Notifications Assigned");
  };

  return (
    <div>
      <h2>Assign Notifications</h2>
      <button onClick={handleAssign}>Assign Notifications</button>
    </div>
  );
};

export default AssignNotifications;
