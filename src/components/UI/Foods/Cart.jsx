import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeToCart } from "@/redux/slice/cart.slice";
import { BsFillCartXFill } from "react-icons/bs";
import EmptyCart from "../EmptyCard/EmptyCard";
import { useState } from "react";
import CheckoutModal from "../CheckOutModal/CheckOutModal";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (idMeal) =>{
    dispatch(removeToCart({idMeal}))
  }

  const handleAddToCart = (item) =>{
    dispatch(addToCart(item))
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat((item.idMeal / 1000).toFixed(3));
      return total + itemPrice * item?.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="container mx-auto px-28 mt-5">
      <div className="flex justify-between">
        <h2>Cart Items</h2>
        <button className="flex items-center text-red-500 hover:text-red-700 focus:outline-none" onClick={handleClearCart}>
            <BsFillCartXFill size={20} className="text-red-500" /> <span className="text-red-500 ml-2">Clear Cart</span>
        </button>

      </div>
      {cartItems.length === 0 ? ( <EmptyCart/> ) : 
      (
        <div className="flex gap-12">
        <ul className="grid border w-[700px] rounded-md shadow-md mb-4 p-4 mt-4">
          {cartItems.map((item) => (
            <li className="flex items-center min-h-[50px] gap-3 py-1" key={item.idMeal}>
              <img className="rounded-md" width={50} src={item?.strMealThumb} alt={item?.strMeal} />
              <div>
                <div className="text-sm font-semibold">{item?.strMeal}</div>
              </div>
              <div className="flex justify-between font-bold w-24 border-slate-800 ms-auto items-center border px-3 py-1 rounded-3xl">
                <button className="text-sm" onClick={()=> handleRemoveFromCart(item.idMeal)}>-</button>
                <span>{item?.quantity}</span>
                <button onClick={()=> handleAddToCart(item)}>+</button>
              </div>
                <p className="font-semibold ms-8 text-green-500">
                  {item?.idMeal ? item.idMeal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "0"} SUM
                </p>
            </li>
          ))}
        </ul>
        <div className="w-[300px] max-h-[200px] border rounded-md shadow-md mb-4 p-4 mt-4">
            <h2 className="text-xl font-semibold mb-4">Total Price</h2>
            <p className="text-green-500 text-2xl font-bold">{calculateTotalPrice().toFixed(3)} SUM </p>
            <button  onClick={handleCheckout} className="mt-10 mx-14 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none"> Go to checkout </button>
          </div>
        </div>
      )}
      <CheckoutModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default Cart;