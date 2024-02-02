import { FaCartPlus  } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="text-center mt-16 border rounded-md w-96 p-12 mx-auto shadow-md">
      <FaCartPlus  className="mx-auto" size={100} color="#22c55e" />
      <p className="text-2xl font-semibold mt-4">Your cart is empty</p>
      <p className="mt-1 text-zinc-600">The items you order will appear here.</p>
      <Link to="/">
        <button className="bg-stone-500 text-white px-4 py-2 mt-4 rounded-md">
            Back to Menu
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
