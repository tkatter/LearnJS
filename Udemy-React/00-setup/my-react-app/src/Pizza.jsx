/*
function Pizza(props) {
  // const ingredients = pizzaData[2].ingredients;
  const { name, photoName, ingredient, price } = props;

  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>${price * 10}</span>
      </div>
    </div>
  );
}
*/

function Pizza(props) {
  const { name, photoName, ingredients, price } = props.pizza;

  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default Pizza;
