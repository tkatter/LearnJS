import { pizzaData } from '../data/data';
import Pizza from './Pizza';

function Menu() {
  const pizzas = pizzaData;
  // pizzas.map((pizza, index) => {});
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <Pizza pizza={pizzas[0]} />
        <Pizza pizza={pizzas[1]} />
        <Pizza pizza={pizzas[2]} />
        <Pizza pizza={pizzas[3]} />
        <Pizza pizza={pizzas[4]} />
        <Pizza pizza={pizzas[5]} />
      </div>
    </main>
  );
}

export default Menu;
