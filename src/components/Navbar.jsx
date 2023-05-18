import React from "react";
import "../Navbar.css";

export default function NavBar(props) {
  let name = props.userName;
  let count = 3;

  return (
    <div className="nav_bar">
      <h1>
        Iam {name} my age = {props.age}
      </h1>
    </div>
  );
}
