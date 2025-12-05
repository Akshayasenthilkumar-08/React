import React, { useEffect, useState } from "react";

const Converter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currency, setCurrency] = useState([]);
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);

  // 🔹 Fetch currency data
  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setCurrency(Object.keys(data.rates));
          setRates(data.rates);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // 🔹 Convert function
  const convertcurrency = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (!rates[fromCurrency] || !rates[toCurrency]) {
      alert("Rates not loaded yet");
      return;
    }

    const rate = rates[toCurrency] / rates[fromCurrency];
    const converted = amount * rate;
    setResult(converted.toFixed(2));
  };

  return (
    <div className="first">
      <h1 style={{ color: "white", marginBottom: "20px" }}>💱 Currency Converter</h1>

      {/* Input for amount */}
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

<div className="selects">
      {/* From currency */}
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        
      >
        {currency.slice(0,10).map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      {/* To currency */}
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
    
      >
        {currency.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
</div>


      {/* Convert button */}
      <button id="btn"
        onClick={convertcurrency}
      >
        Convert
      </button>

      {/* Result */}
      {result && (
        <h2 >
          {amount} {fromCurrency} = {result} {toCurrency}
        </h2>
      )}
    </div>
  );
};

export default Converter;
