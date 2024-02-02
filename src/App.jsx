// import Products from "./components/UI/Products/Products";
// import Cart from "./components/UI/Cart/Cart";
import { useSelector } from "react-redux";
import FoodsList from "./components/UI/Foods/FoodsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/UI/NotFound/NotFound";
import Cart from "./components/UI/Foods/Cart";
import Layout from "./components/Layout/Layout";

export default function App() {
  const cartItems = useSelector((state) => state.cart.data);
  console.log("cartItems", cartItems);
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="mt-10 container m-auto bg-black">
          <Products />
          <hr />
          <p className="text-2xl">Cart</p>

          <Cart cartItems={cartItems} />
      </div> */}
        <Route element={<Layout />}>
          <Route path="/" element={<FoodsList />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
