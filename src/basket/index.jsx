import React, { useState } from "react";
import "./index.css";
import Items from "../items";
import Total from "../total";
import { data } from "../data/data";

const Basket = () => {
  const [items, setItems] = useState(data);

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

  const onReset = () => {
    setItems(data);
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
      <Total items={items} onReset={onReset} />
    </>
  );
};

export default Basket;
