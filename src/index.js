import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true" //per_page=10&page=1&
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar coins = {coinData} selectedCoin = {selectedCoin} setSelectedCoin = {setSelectedCoin} />
      {
        coinData.length === 0 ? <h2>Loading Coin Charts...</h2> : 
        <Charts coinData={selectedCoin ? coinData.filter(coin =>coin.id === selectedCoin) : coinData} />
      }
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
