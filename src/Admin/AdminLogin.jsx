import React from "react";

const AdminLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin Login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
