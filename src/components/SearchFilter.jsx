import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
    <p style={{ color: 'lightblue' }}>Food is the Ingredient that binds us together, turning strangers into friends, and meals into memories :)</p>
    <div className="search-container">
     
      
      <input
        type="text"
        placeholder="Search Restaurants"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         className="search-filter-input"
      />
    </div>
    </>
  );
};

export default SearchFilter;
