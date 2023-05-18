import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { useState } from "react";
import CartMode from "./CartMode";
import SideBar from "./SideBar";
import ProductDetails from "./ProductDetails";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

export default function Project() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartDetails, setCartDetails] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    console.log(cartDetails);
  }, [cartDetails]);
  return (
    <div className="navSection">
      <NavBar
        searchValue={searchValue}
        onSearch={setSearchValue}
        cartDetails={cartDetails}
        onCartDetails={setCartDetails}
        onIsCart={setIsCartOpen}
        isDarkMode={isDarkMode}
        onDarkMode={setIsDarkMode}
      />
      <div className="homeSection flex m-[0.5rem] gap-2">
        <SideBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <Outlet
         context={[searchValue,selectedCategory,setSelectedCategory,cartDetails,setCartDetails,isDarkMode]}
        />
        {/* <Home
          searchValue={searchValue}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          cartDetails={cartDetails}
          onCartDetails={setCartDetails}
        /> */}
        {/* <ProductDetails /> */}
        {isCartOpen ? (
          <CartMode onIsCart={setIsCartOpen} cartDetails={cartDetails} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
