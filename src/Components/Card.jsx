// src/components/Card.jsx
import React from 'react';
import './Card.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

const Card = () => {
  return (
    <div className="card-container">
      <section className="community-section">
        <header>
          <h3>Join our community</h3>
        </header>
        <p>30-day, hassle-free money-back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing
          their skills.
        </p>
      </section>
      <section className="subscription-section">
        <header>
          <h3>Monthly Subscription</h3>
        </header>
        <p><span className="price">$29</span> per month</p>
        <p>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </section>
      <section className="why-us-section">
        <header>
          <h3>Why Us</h3>
        </header>
        <p>
          Tutorials by industry experts Peer &amp; expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </section>
    </div>
  );
};

export default Card;
