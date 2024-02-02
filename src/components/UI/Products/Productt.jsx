import { addToCard } from "@/redux/slice/cart.slice";
import React from "react";
import { useDispatch } from "react-redux";

const Product = ({ name, price, description, data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCard(data));
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md  border-[1px]">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">${price}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
      <div className="bg-gray-100 p-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
