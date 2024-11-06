import React, { useState } from "react";

function AddMember() {
  const [member, setMember] = useState({ name: "", age: "", membershipType: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleAddMember = () => {
    // Logic to add member, e.g., send data to backend
    console.log("Member added:", member);
    alert("Member added successfully!");
  };

  return (
    <div>
      <h2>Add Member</h2>
      <input type="text" name="name" placeholder="Name" value={member.name} onChange={handleInputChange} />
      <input type="number" name="age" placeholder="Age" value={member.age} onChange={handleInputChange} />
      <input type="text" name="membershipType" placeholder="Membership Type" value={member.membershipType} onChange={handleInputChange} />
      <button onClick={handleAddMember}>Add Member</button>
    </div>
  );
}

export default AddMember;
