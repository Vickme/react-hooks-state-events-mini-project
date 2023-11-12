import React from "react";
import Item from "./Item";
import { useState, useEffect } from "react";

function ShoppingList({ items }) {
  // using the state hook function
  const [selectedCategory, setCat] = useState("");

  let myFilter = items.filter((item) => item.category === selectedCategory);
  console.log(myFilter);

  // this code updates the value of selectedCategory on every reload in real time

  useEffect(() => {
    console.log("state value: " + selectedCategory);
  }, [selectedCategory]);

  // filtering for the selectedCategory in the data;

  function mySelector(e) {
    let myValue = e.target.value;
    setCat(myValue);
    console.log("state value" + selectedCategory);
    console.log(myValue);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={mySelector} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory === ""
          ? items.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : myFilter.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;