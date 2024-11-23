import React, { useState } from "react";

const AssignFeePackage = () => {
  const [packageData, setPackageData] = useState({ member: "", package: "" });

  const handleChange = (e) => {
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Fee Package Assigned");
    console.log(packageData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Assign Fee Package</h2>
      <input
        type="text"
        name="member"
        placeholder="Member Name"
        value={packageData.member}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="package"
        placeholder="Package"
        value={packageData.package}
        onChange={handleChange}
        required
      />
      <button type="submit">Assign Package</button>
    </form>
  );
};

export default AssignFeePackage;
