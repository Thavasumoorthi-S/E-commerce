import React,{ useState } from "react";

const Cards = ({ item, shows }) => {
  const { price, img } = item;

  const [sec,setsec]=useState("ADD TO CART");
  const [count,setcount]=useState(1);
   const eventchange=()=>{
        if(count===0)
        {
          setsec("ADD TO CART");
          setcount(1)
        }
        if(count===1)
        {
          setsec("REMOVE FROM CART");
          setcount(0);
        }
     }  
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>Price - {price}/-</p>
        <button onClick={()=>{shows(item,item.id);eventchange()}}>{sec}</button>
      </div>
    </div>
  );
};

export default Cards;
