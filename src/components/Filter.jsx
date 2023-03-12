import React, { useState, useEffect } from 'react';
import { tours as data } from '../utils/data';

const Filter = ({ updateTours, handleFilter }) => {
  const [search, setSearch] = useState('');

  const allContinents = data.map((tour) => tour.continent).sort((a, b) => a.localeCompare(b));
  const continents = ['all', ...new Set(allContinents)];

  useEffect(() => {
    updateTours(search);
  }, [search]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Filter</h3>
      <div className="form-control">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search by country/city"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <h3>Continents</h3>
      {continents.map((c, index) => {
        return (
          <div key={index} className="form-control">
            <input type="checkbox" name={c} id={c} value={c} onChange={handleFilter} />
            <label htmlFor={c}>{c}</label>
          </div>
        );
      })}
      <button type="button" className="btn clear-btn">
        Clear filters
      </button>
    </form>
  );
};

export default Filter;
