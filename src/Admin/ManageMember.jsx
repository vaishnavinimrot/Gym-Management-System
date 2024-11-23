import React, { useState } from "react";

const ManageMembers = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);

  const handleDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
    alert(`Member with ID ${id} deleted`);
  };

  return (
    <div>
      <h2>Manage Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name}
            <button onClick={() => handleDelete(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageMembers;
