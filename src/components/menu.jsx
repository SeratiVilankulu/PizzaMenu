import React from "react";
import Pizza from "./pizza";
import { pizzaData } from "../data.js";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <div>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Menu;
