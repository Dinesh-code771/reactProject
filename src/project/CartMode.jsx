import React from "react";
import ProjectCard from "./ProductCard";
export default function CartMode({ onIsCart,cartDetails }) {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] flex flex-col h-screen w-full absolute top-0 z-[100] overflow-auto ">
      <div className="text-end w-[97%] m-[1rem]">
        <button
          onClick={() => onIsCart(false)}
          className="border px-[1rem] py-[0.5rem] rounded-[0.5rem] bg-white"
        >
          Close
        </button>
      </div>

      <div className="cards flex flex-wrap gap-10">
        {cartDetails.map((product) => {
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
              onCartDetails={()=>{}}    
            />
          );
        })}
      </div>
    </div>
  );
}
