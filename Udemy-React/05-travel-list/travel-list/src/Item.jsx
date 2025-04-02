// Item Component
export default function Item({ item, onDeleteItem, onUpdateItem }) {
  // function handleClick() {}
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      {/* <button onClick={}>❌</button> */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
