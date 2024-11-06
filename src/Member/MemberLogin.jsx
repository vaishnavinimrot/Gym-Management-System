// src/components/MemberLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MemberLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "member" && password === "password") {
      navigate("/member-dashboard"); // Redirect to member dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Member Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default MemberLogin;
