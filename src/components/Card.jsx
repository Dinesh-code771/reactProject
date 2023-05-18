import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import "../Sidebar.css";
import "../Card.css";
import { Link } from "react-router-dom";

export default function Card() {
  const [data, setData] = useState({
    name: "",
    age: 0,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="">
      <input
        className="flex flex-row"
        type="text"
        value={data.name}
        name={"name"}
        onChange={handleChange}
        placeholder={"enter name"}
      />
      <input
        className="flex flex-row"
        type="text"
        value={data.age}
        name={"age"}
        onChange={handleChange}
        placeholder={"enter name"}
      />
      {/* <Link to="/about">about page</Link>
      <Link to="/contact">contact</Link> */}
    </div>
  );
}
