import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
// import './App.css'

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Undies", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={toggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// Header Component
function Logo() {
  return <h1>🏝️Far Away🧳</h1>;
}

// Stats Footer Component
function Stats({ items }) {
  // Early Return
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list!</em>
      </footer>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPackedItems / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? `You're all packed! ✈️`
          : `You have ${numItems} items on your list. You have already packed ${numPackedItems} (${percentPacked}%) 💼`}
      </em>
    </footer>
  );
}
