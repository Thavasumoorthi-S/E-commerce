import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

 useEffect(() => {
   handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
          </div>
          <div style={{display:"flex"}} >
            <span style={{marginRight:"20px",color:"blue"}}>PRICE:{item.price}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span style={{marginTop:"3%"}}>Total Price of your Cart</span>
        <span style={{marginTop:"3%"}}>Rs = {price}/-</span>
      </div>
    </article>
  );
};

export default Cart;
