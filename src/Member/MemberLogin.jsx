import React from "react";

const MemberLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Member Login Successful");
  };

  return (
    <form onSubmit={handleSubmit}
    style={{ marginTop: "8%", textAlign: "center" }}
    >
      <h2>Member Login</h2>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default MemberLogin;
