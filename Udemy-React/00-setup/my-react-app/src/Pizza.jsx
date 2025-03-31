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

function Pizza({ pizzaObj }) {
  const { name, photoName, ingredients, price } = pizzaObj;

  if (pizzaObj.soldOut) {
    return (
      <li className="pizza sold-out">
        <img src={photoName} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>${price}</span>
        </div>
      </li>
    );
  } else {
    return (
      <li className="pizza">
        <img src={photoName} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>${price}</span>
        </div>
      </li>
    );
  }
}

export default Pizza;
