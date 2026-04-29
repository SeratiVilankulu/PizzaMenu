import React from "react";
import Pizza from "./pizza";
import { pizzaData } from "../data.js";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.id} />
          ))}
        </ul>
      ) : (
        <p>We're still wrking on our menu. Please come back later</p>
      )}
    </main>
  );
}

export default Menu;
