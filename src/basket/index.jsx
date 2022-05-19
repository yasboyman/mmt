import React, { useState } from "react";
import "./index.css";
import Items from "../items";
import Total from "../total";

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

  const onAdd = (id) => {
    setItems((state) => {
      return state.map((item) => {
        return item.id === id ? { ...item, amount: item.amount + 1 } : item;
      });
    });
  };

  const onRemove = (id) => {
    setItems((state) => {
      return state.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <div className="basket_container">
        {items.map((item, index) => {
          return (
            <Items
              name={item.name}
              amount={item.amount}
              price={Number(item.price * item.amount).toFixed(2)}
              onAdd={onAdd}
              onRemove={onRemove}
              id={item.id}
              lastItem={Object.keys(items).length - 1 === index}
            />
          );
        })}
      </div>
      <Total items={items} />
    </>
  );
};

export default Basket;
