import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://media.istockphoto.com/id/483424683/photo/euro-and-dollar-symbol-eur-usd-pair.jpg?s=612x612&w=0&k=20&c=sxpJ59whk1IQbv2O22UE0zYEmZ9zZA76-iJBsrsAa_I="
          alt="logo"
        />
        <h2>Currency<span>X</span></h2>
      </div>

      <ul className="nav-links">
       <li>
  <Link to="/" className="nav-link">Home</Link>
</li>
       <li>
  <Link to="/convert" className="nav-link">Money Transfers</Link>
</li>
      <li>
  <Link to="/exchange" className="nav-link">Exchange Rates</Link>
</li>
  
        <li>
          <Link to="/about" className="nav-link">About</Link>
          </li>
      </ul>
        
      <div className="btns">
  <Link to="/login" className="btn">Login</Link>
  <Link to="/sign" className="btn">Register</Link>
</div>

     
    </nav>
  );
};

export default Header;
