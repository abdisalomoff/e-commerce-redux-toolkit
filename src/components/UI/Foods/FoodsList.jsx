// FoodsList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import "../../../App.css";
import { fetchData } from "@/redux/slice/fetchData.slice";
import Product from "./Product";
import Footer from "../Footer/Footer";

const FoodsList = () => {
  const dispatch = useDispatch();
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

  useEffect(() => {
    dispatch(fetchData(url));
  }, []);

  const dataState = useSelector((state) => state.data);
  console.log(dataState.data?.meals);

  return (
    <>
      <div className="mt-8 mb-16 container mx-auto px-28">
      <h1 className="text-3xl font-bold text-center mb-6">THE MEALS</h1>
      {dataState.loading && <Loader />}
      {dataState.error && <p className="text-red-500">Fetch data error</p>}
      <ul className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataState.data?.meals?.map((item) => (
          <Product key={item?.idMeal} meal={item} />
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default FoodsList;
