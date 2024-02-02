import { useDispatch, useSelector } from "react-redux";
// import { addToCard } from "@/redux/slice/cart.slice";
import { SlBasket } from "react-icons/sl";
import { addToCart } from "@/redux/slice/cart.slice";

const Product = ({ meal }) => {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.cart)

const handleClick = () =>{
  dispatch(addToCart(meal));
}

// console.log(meal);
  return (
    <li className="grid border rounded-md shadow-md">
      <img width={310} className="card-img" src={meal?.strMealThumb} alt={meal?.strMeal} />
      <p className="text-xl font-bold px-3 pt-3">{meal?.strMeal}</p>
      <p className="font-bold text-green-500 px-3 mb-auto">
         {/* SUM-ga IDI-si berilgan API-da PRICE  yoq!!! */}
        {meal?.idMeal ? meal.idMeal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "0"} SUM
    </p>
      <div className="px-3 mt-3 mb-3 card-button flex justify-center">
        <button onClick={handleClick} className="flex items-center px-7 py-2 bg-green-500 text-white rounded-md">
          <SlBasket size={20} className="inline-block mr-2" /> <span>Add to cart</span>
        </button>
      </div>
    </li>
  );
};

export default Product;
