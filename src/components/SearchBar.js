import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ priceRange: '', size: '', color: '' });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, filter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        <label>
          Price Range:
          <select name="priceRange" value={filter.priceRange} onChange={handleFilterChange}>
            <option value="">Select</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-150">$101 - $150</option>
            <option value="151+">$151+</option>
          </select>
        </label>
        <label>
          Size:
          <select name="size" value={filter.size} onChange={handleFilterChange}>
            <option value="">Select</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>
        <label>
          Color:
          <select name="color" value={filter.color} onChange={handleFilterChange}>
            <option value="">Select</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
