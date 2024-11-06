// src/components/SearchRecords.js
import React, { useState } from "react";

function SearchRecords() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock search function, replace with API call if available
    const mockData = [
      { id: 1, record: "Payment on 2024-01-01" },
      { id: 2, record: "Attendance on 2024-01-05" },
    ];
    const filteredResults = mockData.filter((data) => data.record.toLowerCase().includes(query.toLowerCase()));
    setResults(filteredResults);
  };

  return (
    <div className="search-container">
      <input  className="search-input" type="text" placeholder="Search records" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className="search-button" onClick={handleSearch}>Search</button>
      <ul className="results-list">
        {results.map((result) => (
          <li key={result.id}>{result.record}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchRecords;
