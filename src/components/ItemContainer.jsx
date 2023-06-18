import React from "react";
import Context from "./Store/context";
import { useContext } from "react";
import "./ItemContainer.css";

const ItemContainer = (props) => {
  const ctx = useContext(Context);

  const addToCart=(e)=>{
    console.log(e.target.value,'in cart')
  }

  return (
    <>
      {" "}
      {ctx.items.map((ele,index) => (
        
        <div className="main">
          <div className="element" >Name: {ele.med}</div>
          <div className="element" > Description: {ele.desc}</div>
          <div className="element" > Price: {ele.price}</div>
       
        </div>
      ))}
    </>
  );
};

export default ItemContainer;
