import React, { useState, useEffect } from "react";
import ProjectCard from "./ProductCard";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
export default function Home() {
  const [
    searchValue,
    selectedCategory,
    onSelectCategory,
    cartDetails,
    onCartDetails,
    isDarkMode,
  ] = useOutletContext();
  //state varaible to store products and filtered products
  const [products, setProducts] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  // this will run only once after components got mounted -(rendered)
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((productsData) => {
        setProducts(productsData.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // this is for filter projects according to search value and when iam click search changeling category to "All"
  useEffect(() => {
    let searchedProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredProjects(searchedProducts);
    onSelectCategory("All");
  }, [searchValue, products]);

  // this will run on every change of category listed in side bar
  useEffect(() => {
    if (selectedCategory === "All") {
      return setFilteredProjects(products);
    }
    let searchedCat = products.filter((product) => {
      return product.category.toLowerCase() === selectedCategory.toLowerCase();
    });
    setFilteredProjects(searchedCat);
  }, [selectedCategory, products]);

  //UI
  return (
    <div
      className={`flex-[9] ${
        isDarkMode ? "bg-[black]" : "bg-[white]"
      }  max-h-[880px] overflow-auto rounded-[0.5rem]`}
    >
      <div className="pl-[9rem] py-[1rem]">
        <h1 className="text-white text-[3.5rem] sticky top-0 z-[30] font-[500] bg-[black] w-full ">
          Products
        </h1>
        <div className="cards flex flex-wrap gap-10">
          {filteredProjects.map((product) => {
            return (
              <ProjectCard
                product={product}
                key={product.id}
                imageSrc={product.image}
                id={product.id}
                title={product.title}
                rating={product.rating}
                price={product.price}
                category={product.category}
                description={product.description}
                cartDetails={cartDetails}
                onCartDetails={onCartDetails}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
