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
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
       
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
      
    </Router>
  );
};

export default App;
