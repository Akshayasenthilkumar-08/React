import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
        <div className="img">
            <img src="https://media.istockphoto.com/id/483424683/photo/euro-and-dollar-symbol-eur-usd-pair.jpg?s=612x612&w=0&k=20&c=sxpJ59whk1IQbv2O22UE0zYEmZ9zZA76-iJBsrsAa_I=" alt="" />
        </div>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>Global Currency Converter</span></h1>
          <p>
            Convert currencies instantly, check live exchange rates, and explore
            global trends — all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/convert" className=" primary">Start Converting</Link>
            <Link to="/exchange" className=" secondary">Live Exchange</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h2>💱 Fast & Accurate</h2>
            <p>Get real-time conversion rates for 150+ world currencies.</p>
          </div>
          <div className="feature-card">
            <h2>📊 Live Market Data</h2>
            <p>View current exchange trends and mini-charts instantly.</p>
          </div>
          <div className="feature-card">
            <h2>🔒 Secure & Reliable</h2>
            <p>Your conversions are handled safely with trusted APIs.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h1>Learn More About Our Platform</h1>
        <p>Discover how we calculate rates and what makes our tool special.</p>
        <Link to="/about" className="btn outline">About Us</Link>
      </section>

      <footer className="home-footer">
        <p>© 2025 Global Currency Converter | Built with ❤️ </p>
      </footer>
    </div>
  );
}

export default Home;
