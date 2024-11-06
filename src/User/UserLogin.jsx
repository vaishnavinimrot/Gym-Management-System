// src/components/UserLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userlogin.css";


function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "user" && password === "123456") {
      navigate("/user-dashboard"); // Redirect to user dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <input className="user-login-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <input className="user-login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button className="user-login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default UserLogin;
