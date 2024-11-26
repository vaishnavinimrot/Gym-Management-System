import React, { useState } from "react";

const SearchRecords = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const mockData = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];
    setResults(mockData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div style={{ textAlign: "center", margin: "20px", padding: "20px", backgroundColor: "#f3f4f6", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <h2>Search Records</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "14px",
          borderRadius: "4px",
          margin: "10px",
          border: "1px solid #ddd",
          width: "200px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          fontSize: "14px",
          borderRadius: "4px",
          margin: "10px",
          border: "1px solid #ddd",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Search
      </button>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {results.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "8px",
              backgroundColor: "#fff",
              borderBottom: "1px solid #ddd",
              margin: "5px 0",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRecords;
