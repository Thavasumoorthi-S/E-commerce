import React from "react";
import Cards from "./card";
import "../styles/Body.css";
import list from "../data";

const Body = ({ shows,data,check}) => {


  return (
    <section>
      {
       check===0?(

        list.map((item) => (
            <Cards key={item.id} item={item} shows={shows} />
          ))

       ):(
        data.map((item) => (
            <Cards key={item.id} item={item} shows={shows} />
          ))
       )
      }
    </section>
  );
};

export default Body;
