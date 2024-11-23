import React, { useState } from "react";

const SearchRecords = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const mockData = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];
    setResults(mockData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div>
      <h2>Search Records</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRecords;
