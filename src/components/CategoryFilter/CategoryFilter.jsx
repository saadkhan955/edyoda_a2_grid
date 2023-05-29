import React from 'react';

const CategoryFilter = () => {
  const categories = [
    'Artificial Intelligence',
    'Cloud Computing',
    'DevOps',
    'Programming Languages',
    'Mobile Application Development',
    'Technology and Tools',
    'Get a Job in a Tech Company',
    'Others',
    'All',
  ];

  return (
    <div>
      <h1>Category Filter</h1>
      <select value={categories[0]} onChange={(event) => {
        const selectedCategory = event.target.value;
        categories.forEach((category, index) => {
          category === selectedCategory && (categories[index] = category);
        });
      }}>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <p>Selected category: {categories[0]}</p>
    </div>
  );
};

export default CategoryFilter;
