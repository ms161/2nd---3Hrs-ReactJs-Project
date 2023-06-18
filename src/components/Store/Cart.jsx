import React from "react";
import Context from "./context";
import { useContext } from "react";
import './Cart.css'

const Cart = (props) => {
  const ctx = useContext(Context);

  return (
    <><div className="mainCart">
      {ctx.items.map((ele) => (
        <>
        <div className="cartItem">
          <div className="element">Name: {ele.med}</div>
          <div className="element"> Description: {ele.desc}</div>
          <div className="element"> Price: {ele.price}</div>
         
          </div>
        </>
      ))}
      <button onClick={props.onClick}>Close Cart</button>
      </div>
    </>
  );
};

export default Cart;
