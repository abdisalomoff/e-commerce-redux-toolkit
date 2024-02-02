import React from "react";
import Product from "./Productt";
import { products } from "./data";

export default function Products() {
  return (
    <div className=" flex gap-5">
      {products.map((product) => (
        <Product
          key={product.id}
          data={product}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}
