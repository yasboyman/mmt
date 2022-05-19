import React from "react";
import "./index.css";

const Items = ({ name, amount, price, onAdd, id,onRemove, lastItem }) => {
  // lastItem is a boolean that checks if its the last item in the array => to display dashed seperator //
  
  return (
    <div className="basket">
      <div className="items_container">
        <p className="item_name">{name} </p>
        <p className="amount_box" onClick={()=> onAdd(id)}>{amount} </p>
        <p className="price">
          ${price} <span  className="remove_btn" onClick={() => onRemove(id)}>x</span>
        </p>
      </div>
      { !lastItem && <hr className="dotted"/>}
      {/*{lastItem && <aside className="total_container">*/}
      {/*  <p className="total_price">$12.99</p>*/}
      
      {/*</aside>}*/}
    </div>
  );
};

export default Items;
