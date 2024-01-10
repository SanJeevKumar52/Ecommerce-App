// FilterSidebar.js
import React, { useState } from 'react';
import styles from './filter.module.css';

const FilterSidebar = () => {
  const [price, setPrice] = useState(20000);

  const handlePriceChange = (event) => {
    setPrice(parseInt(event.target.value));
  };

  return (
    <aside className={styles.Sidebarcontainer}>
      <h2>Filter</h2>
      <form className={styles.SidebarcontainerContent}>
        <div className={styles.PriceContainer}>
          <label htmlFor="price"> Price: {price}</label>
          <input
            type="range"
            id="price"
            min="100"
            max="100000"
            value={price}
            onChange={handlePriceChange}
            className={styles.PriceRange}
          />
          <span>Category</span>
        </div>
        
        <div className={styles.CategoryContent}>
          <div className={styles.ContentRow}>
            <input type="checkbox" id="mensCheckbox" name="mensCheckbox" />
            <label htmlFor="mensCheckbox">Men's Clothing</label>
          </div>
          <div className={styles.ContentRow}>
            <input type="checkbox" id="womensCheckbox" name="womensCheckbox" />
            <label htmlFor="womensCheckbox">Women's Clothing</label>
          </div>
          <div className={styles.ContentRow}>
            <input type="checkbox" id="jewelryCheckbox" name="jewelryCheckbox" />
            <label htmlFor="jewelryCheckbox">Jewelry</label>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default FilterSidebar;
