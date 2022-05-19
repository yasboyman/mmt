import React from "react";
import "./index.css";

const Total = ({ items, onReset }) => {
  const totalItems = () => {
    const total = items.reduce((acc, i) => acc + i.price * i.amount, 0);
    return total.toFixed(2);
  };

  return (
    <div className="total_container">
      <p className="total_amount">${totalItems()}</p>

      <aside className="checkout_btn_container">
        <p className="clear_btn" onClick={() => onReset()}>
          Clear
        </p>
        <button className="checkout_btn">Check Out ></button>
      </aside>
    </div>
  );
};

export default Total;
