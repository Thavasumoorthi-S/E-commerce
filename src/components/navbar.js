import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setDisplay, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setDisplay(true)} style={{paddingLeft:"35%"}}>
          KANNAN ONLINE SHOPPING
        </span>
        <div className="cart" style={{paddingRight:"2px"}} onClick={() => setDisplay(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
        <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
