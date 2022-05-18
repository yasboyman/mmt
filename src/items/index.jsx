import React from "react";
import "./index.css";

const Items = ({ name, amount, price }) => {
  return (
    <div className="items_container">
      <p className="item_name">{name} </p>
      <p className="amount_box">{amount} </p>
      <p className="price">${price}</p>
    </div>
  );
};

export default Items;
