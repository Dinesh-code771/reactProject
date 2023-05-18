import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((productsData) => {
        setProductDetails(productsData.data);
        console.log(productsData.data, "ii");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="wrapper flex border bg-[black]">
      <div className="left flex-[3] p-[1rem] border">
        <div className="image_wrapper p-[1rem] h-1/2 border ">
          <img
            className="w-full h-full object-contain"
            src={productDetails.image}
            alt=""
          />
        </div>
      </div>

      <div className="right flex-[4] text-white flex flex-col gap-5 border p-[1rem]">
        <div className="decription">
          <p className="font-bold text-[2rem] leading-[3rem] font-sans">
            {productDetails.description}
          </p>
        </div>

        <div className="rating">
          <p className="text-[2rem] font-bold text-[gold]">{""}</p>
        </div>

        <div className="buttons w-1/2 flex justify-between">
          <button className="bg-[white] text-black py-[0.8rem] rounded-[0.5rem] px-[2rem]">
            Add To Cart
          </button>
          <button className="bg-[#33ed45] text-black py-[0.8rem] rounded-[0.5rem] px-[2rem]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
