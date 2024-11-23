import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Admin Components
import AdminLogin from "./Admin/AdminLogin";
import AddMember from "./Admin/AddMember";
import ManageMembers from "./Admin/ManageMember";
import CreateBills from "./Admin/CreateBills";
import AssignFeePackage from "./Admin/AssignFeePackage";
import AssignNotifications from "./Admin/AssignNotifications";
import ExportReport from "./Admin/ExportReport";
import SupplementStore from "./Admin/SupplementStore";
import DietDetails from "./Admin/DietDetails";
import HomePage from "./HomePage";

// Member Components
import MemberLogin from "./Member/MemberLogin";
import ViewBillReceipts from "./Member/ViewBillReceipts";
import ViewBillNotifications from "./Member/ViewBillNotification";

// User Components
import UserLogin from "./User/UserLogin";
import ViewDetails from "./User/ViewDetails";
import SearchRecords from "./User/SearchRecord";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin/login">Admin Login</Link></li>
            <li><Link to="/admin/add-member">Add Member</Link></li>
            <li><Link to="/admin/manage-members">Manage Members</Link></li>
            <li><Link to="/admin/create-bills">Create Bills</Link></li>
            <li><Link to="/admin/assign-fee-package">Assign Fee Package</Link></li>
            <li><Link to="/admin/assign-notifications">Assign Notifications</Link></li>
            <li><Link to="/admin/export-report">Export Report</Link></li>
            <li><Link to="/admin/supplement-store">Supplement Store</Link></li>
            <li><Link to="/admin/diet-details">Diet Details</Link></li>
            <li><Link to="/member/login">Member Login</Link></li>
            <li><Link to="/member/view-bill-receipts">View Bill Receipts</Link></li>
            <li><Link to="/member/view-bill-notifications">View Bill Notifications</Link></li>
            <li><Link to="/user/login">User Login</Link></li>
            <li><Link to="/user/view-details">View Details</Link></li>
            <li><Link to="/user/search-records">Search Records</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/add-member" element={<AddMember />} />
          <Route path="/admin/manage-members" element={<ManageMembers />} />
          <Route path="/admin/create-bills" element={<CreateBills />} />
          <Route path="/admin/assign-fee-package" element={<AssignFeePackage />} />
          <Route path="/admin/assign-notifications" element={<AssignNotifications />} />
          <Route path="/admin/export-report" element={<ExportReport />} />
          <Route path="/admin/supplement-store" element={<SupplementStore />} />
          <Route path="/admin/diet-details" element={<DietDetails />} />

          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/member/view-bill-receipts" element={<ViewBillReceipts />} />
          <Route path="/member/view-bill-notifications" element={<ViewBillNotifications />} />

          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/view-details" element={<ViewDetails />} />
          <Route path="/user/search-records" element={<SearchRecords />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
