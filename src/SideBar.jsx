import React, { useState } from 'react';
import './App.css';



function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <a href="/">
          Home
          
          </a>
          <a href="/admin/add-member">Add Member
        </a>
        <a href="/admin/manage-members">Manage Members
        </a>
        <a href="/admin/create-bills">Create Bills
        </a>
        <a href="/admin/assign-fee-package">Assign Fee Package
        </a>
        <a href="/admin/assign-notifications">Assign Notifications
        </a>
        <a href="/admin/export-report">Export Report
        </a>
        <a href="/admin/supplement-store">Supplement Store
        </a>
        <a href="/admin/diet-details">Diet Details
        </a>
        <a href="/user/search-records">Search Records
        </a>
        <a href="/member/view-bill-receipts">View Bill Receipts
        </a>
        <a href="/member/view-bill-notifications">View Bill Notifications
        </a>
        <a href="/user/view-details">View Details
        </a>
        

      </div>

      {/* Content */}
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      </div>

      {/* Button to toggle sidebar */}
      <button onClick={toggleSidebar} className="sidebar-toggle">
        <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </div>
  );
}

export default Sidebar;
