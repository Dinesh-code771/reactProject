import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function ProjectCard(props) {
  const {
    title,
    id,
    rating,
    decription,
    category,
    price,
    cartDetails,
    onCartDetails,
    product,
  } = props;
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onCartDetails([...cartDetails, product]);
  };
  const isAdded = cartDetails.find((ele) => {
    if (ele.id === product.id) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div className="projectCard bg-[#272727] h-[600px] w-[300px] flex flex-col rounded-[1rem] p-[1rem] overflow-auto">
      <div className="flex-[1]">
        <img
          className="w-full h-[300px] object-cover rounded-[1rem]"
          src={props.imageSrc}
          alt=""
        />
      </div>
      <h2 onClick={()=>navigate(`/${id}`)} className="text-white flex-[1] text-center font-bold text-[1.3rem] mt-[1rem]">
        {title}
      </h2>
      <div className=" flex flex-[1] items-center mt-[3rem]">
        <div className="flex  justify-between items-center w-full">
          <p className="text-white text-center text-[1.2rem] font-bold flex-[9] ">{` $ ${price}`}</p>
          <p className="text-[#ebbb4b] flex-[1] font-bold text-[1rem]">
            {rating.rate}
          </p>
        </div>
      </div>
      <div className="button  flex-[1] flex items-center mt-[3rem] justify-center">
        <button 
          disabled={isAdded}
          onClick={handleAddToCart}
          className={`border px-[1rem] py-[0.5rem] rounded-[0.5rem] ${
            isAdded ? "bg-[lightgreen]" : "bg-white"
          } cursor-pointer`}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
