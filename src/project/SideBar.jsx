import React from "react";

export default function SideBar(props) {
  let categories = [
    "All",
    "Men's Clothing",
    "women's Clothing",
    "Jewelery",
    "Electronics",
  ];
  return (
    <div className="flex-[1.5] bg-[black]  p-[2rem] rounded-[0.5rem]">
      {categories.map((cat, index) => {
        return (
          <h2
            key={index}
            onClick={() => props.onSelectCategory(cat)}
            className={`text-white leading-[3rem] ${
              props.selectedCategory === cat ? "bg-[#272727]" : ""
            } pl-[1rem] cursor-pointer text-[1rem] font-[400] hover:bg-[#272727] `}
          >
            {cat}
          </h2>
        );
      })}
    </div>
  );
}
