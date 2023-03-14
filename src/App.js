import  React,{ useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import list from "./data";

import "./styles/App.css";

const App = () => {
  const [display, setDisplay] = useState(true);
  const [cart, setCart] = useState([]);
  

  const [newdata,setnewdata]=useState([])

  const [check,setcheck]=useState(0);


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
const mobile=()=>{
  setnewdata(list.filter(item=>{
    return item.type==="mobile"
  }))
  console.log(newdata);
  
}
  const laptop=()=>{
    setnewdata(list.filter(item=>{
      return item.type==="laptop"
    }))
    console.log(newdata)
    setcheck(1)
  }

  const desktop=()=>{
    setnewdata(list.filter(item=>{
      return item.type==="desktop"
    }))
    console.log(newdata)
    setcheck(1)
  }

  const alldata=()=>{
    setnewdata(list.filter(item=>{
      return item;
    }))
    console.log(newdata)
    setcheck(1)
  }


  return (
    <React.StrictMode>
      <Navbar setDisplay={setDisplay} size={cart.length} />
      <div className='center'>
      <div className="left">
        <button className="btn" onClick={mobile}>MOBILE</button><br/>
        <button className="btn" onClick={laptop} style={{backgroundColor:"green"}}>LAPTOP</button>
        <button className="btn" onClick={desktop} style={{backgroundColor:"purple"}}>DESKTOP</button>
        <button className="btn" onClick={alldata} style={{backgroundColor:"teal"}}>ALLPRODUCT</button>
       </div>
           {display ? (
              <Body shows={shows} data={newdata} check={check}/>
            ) : (
              <Cart cart={cart} />)
           }
      
      </div>
    </React.StrictMode>
  );
};

export default App;
