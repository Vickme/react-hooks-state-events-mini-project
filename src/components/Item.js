import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const[changer,setChanger]=useState("true");
  function handleCart(e){
   setChanger(!changer);
   
   
  }

  return (
    <li className={changer?"":"in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={changer?"add":"remove"}  onClick={(e)=>handleCart(e)}>{changer?"Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;