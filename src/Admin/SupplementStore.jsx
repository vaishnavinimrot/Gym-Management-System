import React from "react";

const SupplementStore = () => {
  const supplements = [
    { id: 1, name: "Protein Powder", description: "High-quality whey protein for muscle growth.", price: "$40" },
    { id: 2, name: "Multivitamins", description: "Complete daily vitamins for overall health.", price: "$20" },
    { id: 3, name: "Pre-Workout", description: "Energy boost for your workouts.", price: "$30" },
    { id: 4, name: "Fish Oil", description: "Omega-3 fatty acids for heart health.", price: "$15" },
    { id: 5, name: "Creatine", description: "Enhance strength and muscle recovery.", price: "$25" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Supplement Store</h2>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "20px auto",
          maxWidth: "600px",
        }}
      >
        {supplements.map((supplement) => (
          <li
            key={supplement.id}
            style={{
              backgroundColor: "#f9fafb",
              marginBottom: "15px",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <h3 style={{ margin: "5px 0", color: "#007bff" }}>{supplement.name}</h3>
            <p style={{ margin: "5px 0", color: "#555" }}>{supplement.description}</p>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>Price: {supplement.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplementStore;
