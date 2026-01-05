import React, { useEffect, useState } from "react";

const Converter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currency, setCurrency] = useState([]);
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(Object.keys(data.rates));
        setRates(data.rates);
      })
      .catch(() => alert("Failed to load rates"));
  }, []);

  const convertCurrency = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    const rate = rates[toCurrency] / rates[fromCurrency];
    setResult((amount * rate).toFixed(2));
  };

  return (
    <div className="align">
      <h1>💱 Currency Converter</h1>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currency.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currency.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </div>

      <button onClick={convertCurrency}>Convert</button>

      {result && (
        <h2>
          {amount} {fromCurrency} = {result} {toCurrency}
        </h2>
      )}
    </div>
  );
};

export default Converter;
