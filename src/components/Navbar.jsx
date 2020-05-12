import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = ({coins, selectedCoin, setSelectedCoin}) => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const handleChange = e => {
    e.preventDefault();
    setSelectedCoin(e.target.value);
  }

  console.log(coins);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <select id = "coin-select" name = "coins" value = {selectedCoin} onChange = {handleChange}>
        <option value = "">Select a Coin</option>
        {coins.map(coin => <option key = {coin.id} value = {coin.id} >{coin.name}</option>)}
      </select>
      <div className = "dark-mode-toggle-container">
        <p>Dark Mode:</p>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
