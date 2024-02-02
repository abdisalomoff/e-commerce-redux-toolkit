import React from "react";

export default function Button({ children }) {
  return (
    <button className="border-gray-500 border bg-primary text-primary rounded-medium">
      {children}
    </button>
  );
}
