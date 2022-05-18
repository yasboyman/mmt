import React, { useState } from "react";
import "./index.css";
import Items from "../items";

const Basket = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Mountain Dew",
      amount: 1,
      price: 3.6,
    },
    {
      id: 2,
      name: "Desperados",
      amount: 1,
      price: 3.6,
    },
    {
      id: 3,
      name: "Jack Daniels",
      amount: 2,
      price: 3.6,
    },
  ]);
  
  console.log(items);
  return (
    <>
      <div className="basket_container">
        {items.map((item, index) => {
          return (
            <Items
              name={item.name}
              amount={item.amount}
              price={Number(item.price * item.amount).toFixed(2)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Basket;