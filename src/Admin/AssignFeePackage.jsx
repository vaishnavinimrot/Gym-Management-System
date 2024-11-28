import React, { useState } from "react";

const AssignFeePackage = () => {
  const [packageData, setPackageData] = useState({ member: "", package: "" });
  const [assignedPackages, setAssignedPackages] = useState([]); // State to store assigned packages

  const handleChange = (e) => {
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAssignedPackages([...assignedPackages, packageData]); // Add new data to the list
    setPackageData({ member: "", package: "" }); // Reset the form
  };

  return (
    <div style={{ textAlign: "center", marginTop: "8%" }}>
      <form
        style={{
          margin: "20px auto",
          padding: "20px",
          maxWidth: "400px",
          borderRadius: "8px",
          backgroundColor: "#f9fafb",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Assign Fee Package</h2>
        <input
          type="text"
          name="member"
          placeholder="Member Name"
          value={packageData.member}
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
          type="text"
          name="package"
          placeholder="Package"
          value={packageData.package}
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
          Assign Package
        </button>
      </form>

      {/* Display the list of assigned packages */}
      {assignedPackages.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "20px auto",
            maxWidth: "400px",
          }}
        >
          {assignedPackages.map((pkg, index) => (
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
                Member: <span style={{ fontWeight: "normal" }}>{pkg.member}</span>
              </p>
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                Package: <span style={{ fontWeight: "normal" }}>{pkg.package}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssignFeePackage;
