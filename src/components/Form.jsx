import React, { useState } from "react";
import classes from "./Form.module.css";
import Context from "./Store/context";
import { useContext } from "react";
import ItemContainer from "./ItemContainer";
import Cart from "./Store/Cart";
const Form = () => {
  const ctx = useContext(Context);
  const [showCart,setShowCart]=useState(false)

  const [med, setMed] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const userText = (e) => {
    setMed(e.target.value);
  };
  const userDesc = (e) => {
    setDesc(e.target.value);
  };
  const userPrice = (e) => {
    setPrice(e.target.value);
  };

  let userDataObj = {
    med: med,
    desc: desc,
    price: price,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userDataObj);
    ctx.dataHandler(userDataObj);
    console.log(ctx.items, "in itemcontainer");
  };
function showCartHandler(){
    setShowCart(!showCart)

}
  return (
    <>
    <div className={classes['main']}>
      <div className={classes["formContainer"]}>
        <form action="" onSubmit={submitHandler}>
          <div>
            <input onChange={userText} type="text" placeholder="Medicine" />
          </div>
          <div>
            <input onChange={userDesc} type="text" placeholder="description" />
          </div>
          <div>
            <input onChange={userPrice} type="number" placeholder="Price" />
          </div>
          <div>
            <button type="submit">Add Product</button>
          </div>
        </form>
      
      </div>
     <div>
        <button onClick={showCartHandler}>Cart</button>
     </div>
     </div>
     <div>
        {showCart && <div> <Cart onClick={showCartHandler} ></Cart> </div> }

     </div>
    </>
  );
};

export default Form;
