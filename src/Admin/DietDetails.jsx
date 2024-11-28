import React from "react";

const DietDetails = () => {
  const dietPlans = [
    {
      id: 1,
      name: "Keto Diet",
      description: "A low-carb, high-fat diet designed to help burn fat for energy.",
      benefits: ["Promotes fat loss", "Reduces appetite", "Improves energy levels"]
    },
    {
      id: 2,
      name: "Mediterranean Diet",
      description: "A heart-healthy diet that emphasizes fruits, vegetables, whole grains, and healthy fats.",
      benefits: ["Supports heart health", "Reduces risk of chronic diseases", "Improves brain function"]
    },
    {
      id: 3,
      name: "Paleo Diet",
      description: "A diet focused on eating whole foods similar to what early humans consumed, like meat, fish, fruits, and vegetables.",
      benefits: ["Improves digestion", "Boosts energy", "May help with weight loss"]
    },
    {
      id: 4,
      name: "Vegan Diet",
      description: "A plant-based diet excluding all animal products, focusing on vegetables, fruits, and grains.",
      benefits: ["Supports heart health", "Reduces environmental impact", "May lower the risk of certain cancers"]
    },
    {
      id: 5,
      name: "Intermittent Fasting",
      description: "An eating pattern where you cycle between periods of eating and fasting, aiding in fat loss and metabolic health.",
      benefits: ["Improves fat loss", "Increases metabolism", "Improves brain function"]
    },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Diet Plans</h2>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "20px auto",
          maxWidth: "600px",
        }}
      >
        {dietPlans.map((diet) => (
          <li
            key={diet.id}
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
            <h3 style={{ margin: "5px 0", color: "#007bff" }}>{diet.name}</h3>
            <p style={{ margin: "5px 0", color: "#555" }}>{diet.description}</p>
            <ul style={{ margin: "5px 0", paddingLeft: "20px", color: "#555" }}>
              {diet.benefits.map((benefit, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  {benefit}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DietDetails;
