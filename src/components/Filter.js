import React, { useState } from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory); // Pass selected category to parent
  }

  function handleSearchChange(event) {
    onSearchChange(event.target.value); // Pass search text to parent
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Use `search` prop for value
        onChange={handleSearchChange}
      />
      <select
        name="filter"
        value={selectedCategory} // Controlled by local state
        onChange={handleCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
