import React from "react";

const UserLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Login Successful");
  };

  return (
    <form onSubmit={handleSubmit}
    style={{ marginTop: "8%", textAlign: "center" }}
    >
      <h2>User Login</h2>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
