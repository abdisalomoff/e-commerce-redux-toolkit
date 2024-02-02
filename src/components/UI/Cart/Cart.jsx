import React, { useState } from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-2">
              <span className="font-semibold">{item.name}</span> - ${item.price}
              <button className="ml-2 text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-4">
            <strong>Total: ${calculateTotal()}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
