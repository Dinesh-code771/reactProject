import React from "react";
import "../Home.css";
import { useState } from "react";

export default function Home() {
  // state to store users
  const [users, setUsers] = useState([
    {
      name: "sgf",
      age: 345,
    },
    {
      name: "dshg",
      age: 536,
    },
  ]);
  const [name, setInput] = useState("");

  // funtion for input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  //UI
  return (
    <div className="main">
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
        );
      })}
      <input type="text" value={name} onChange={handleInputChange} />
    </div>
  );
}
