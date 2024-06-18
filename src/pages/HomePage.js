import React from 'react';
import './HomePage.css'; // Assuming a CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Slack</h1>
        <p>Best buy to left pie</p>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Product items would be dynamically loaded here */}
      </section>
      <footer className="homepage-footer">
        <p>© 2023 Slack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
