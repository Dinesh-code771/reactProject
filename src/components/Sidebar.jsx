import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar.css";
export default function Sidebar(props) {
  const handleIncrement = ()=>{
    props.onButtonClick((previousAge)=>{return previousAge+1});
    props.onButtonClick((previousAge)=>{return previousAge+1});
  }
  return (
    <div className="sidebar">
      {props.userName}
      <p className="pSide">{props.age}</p>
      <Link to="/users">user</Link>
      <Link to="/contact">contact</Link>
     

    </div>
  );
}
