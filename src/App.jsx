
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import AddMember from "./Member/AddMember";
import MemberList from "./Member/MemberList";
import Billing from "./Billing";
import MemberLogin from "./Member/MemberLogin";
import MemberDashboard from "./Member/MemberDashboard";
import UserLogin from "./User/UserLogin";
import UserDashboard from "./User/UserDashboard";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/members" element={<MemberList />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/" element={<MemberLogin />} />
          <Route path="/member-dashboard" element={<MemberDashboard />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
