// src/components/MemberList.js
import React, { useState } from "react";
import "./memberlist.css";

const initialMembers = [
  { id: 1, name: "John Doe", age: 25, membershipType: "Gold" },
  { id: 2, name: "Jane Smith", age: 30, membershipType: "Silver" },
];

function MemberList() {
  const [members, setMembers] = useState(initialMembers);

  const handleDeleteMember = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  return (
    <div className="member-list-container">
      <h2>Member List</h2>
      {members.map((member) => (
        <div key={member.id} className="member-item">
          <p>Name: {member.name}</p>
          <p>Age: {member.age}</p>
          <p>Membership Type: {member.membershipType}</p>
          <button className="delete-button" onClick={() => handleDeleteMember(member.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MemberList;
