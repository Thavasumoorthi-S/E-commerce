import React,{ useState } from "react";

const Cards = ({ item,cart,setCart}) => {
  const { price, img } = item;
  const shows= (item,id) => {
  
    if(cart.indexOf(item) === -1) 
     {
       setCart([...cart, item]);
        return false; 
     }
  else
  {
  const arr = cart.filter((item) => item.id !== id);
   setCart(arr);
   return true;
 }
}
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>Price - {price}/-</p>
        <button onClick={()=>shows(item,item.id)}>{!cart.includes(item)?"ADD TO CART":"REMOVE FROM CART"}</button>
      </div>
    </div>
  );
};

export default Cards;
