import React, { useEffect, useState } from "react";

function ExchangeRates() {
  const [rates, setRates] = useState({});
  const [base, setBase] = useState("USD");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/a3d42d8678221ebbb1785c0a/latest/${base}`)
      .then(res => res.json())
      .then(data => {
        setRates(data.conversion_rates);
        setDate(data.time_last_update_utc);
      })
      .catch(err => console.log("Error:", err));
  }, [base]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{fontSize:"24px"}}>💱 Exchange Rates (Base: {base})</h2>
      <p>Last Updated: {date}</p>

      <select
        value={base}
        onChange={(e) => setBase(e.target.value)}
       
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>

      <table
        border="1"
      >
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rates)
            .slice(0, 10) // only first 10 currencies
            .map((cur) => (
              <tr key={cur}>
                <td>{cur}</td>
                <td>{rates[cur]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExchangeRates;
