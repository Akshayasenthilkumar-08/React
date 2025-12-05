import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <h1>Currency QuickConvert</h1>
      <p className="tagline">
        Fast, simple and accurate currency conversions — anytime, anywhere.
      </p>

      <div className="about-container">
        <section>
          <h2>What it does</h2>
          <p>
            Convert between 100+ world currencies in real-time. Save your
            favorites, view your past conversions, and even access the last
            known rates offline.
          </p>
        </section>


        <section>
          <h2> Privacy</h2>
          <p>
            We don’t collect personal data. Conversion logs are stored locally
            in your browser. No external tracking or analytics are used.
          </p>
        </section>

        <section>
          <h2> Tech Stack</h2>
          <p>
            Built using <strong>React</strong>, styled with{" "}
            <strong>CSS3</strong>, and powered by a real-time currency API for
            exchange rates.
          </p>
        </section>

        <section className="links">
          <h2>Quick Links</h2>
          <div className="link-buttons">
            <Link to="/convert" className="btn">
               Converter
            </Link>
            <Link to="/login" className="btn">
               Login
            </Link>
          </div>
        </section>

        <section>
          <h2> Contact</h2>
          <p>Email: support@example.com</p>
          <small>Version 1.2 • Updated: Oct 2025</small>
        </section>
      </div>
    </div>
  );
}

export default About;
