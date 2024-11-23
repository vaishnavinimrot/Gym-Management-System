import React from "react";

const ExportReport = () => {
  const handleExport = () => {
    alert("Report Exported");
  };

  return (
    <div>
      <h2>Export Report</h2>
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default ExportReport;
