import React from "react";
import "./App.css";
import Home from "./components/Home";
import "./Navbar.css";
import NavBar from "./components/Navbar";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  let name = "dionexzh";
  let nav = "asfg";
  const [age, setAge] = useState(0);
  return (
    <div className="App">
      {/* <NavBar userName={name} age={age} /> */}

      <Sidebar userName={name} age={age} onButtonClick={setAge} />

      <Outlet />
    </div>
  );
}

export default App;
