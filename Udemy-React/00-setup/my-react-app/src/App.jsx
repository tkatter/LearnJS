// import { useState } from 'react'
import Menu from './Menu';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Order />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Order() {
  return (
    <div className="order">
      <button className="btn">Order Here!!</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;
  let openStatus;
  if (isOpen) {
    openStatus = `We're currently open!`;
  } else {
    openStatus = `Sorry we're closed!`;
  }
  return <footer className="footer">{openStatus}</footer>;
}

export default App;
