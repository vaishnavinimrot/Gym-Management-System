 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "123456") {
      navigate("/dashboard"); // Redirect to admin dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header" >Admin Login</h2>
      <input  className="login-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="login-button" >Login</button>
    </div>
  );
}

export default Login;
