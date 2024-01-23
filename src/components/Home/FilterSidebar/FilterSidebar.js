// Importing styles specific to the FilterSidebar component
import styles from './filter.module.css';

// Importing the custom hook from the product item context
import { useCustomhook } from '../../../productitemContext';

// Functional component for the filter sidebar
const FilterSidebar = () => {
  // Destructuring values from the custom hook for ease of use
  const { price, handlePriceChange, selectedCategories, handleCategoryChange } = useCustomhook();

  return (
    <aside className={styles.Sidebarcontainer}>
      <h2>Filter</h2>
      {/* Form for filtering options */}
      <form className={styles.SidebarcontainerContent}>

        {/* Price filter section */}
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
          <span>CATEGORY</span>
        </div>

        {/* Category filter section */}
        <div className={styles.CategoryContent}>
          {/* Individual category checkboxes */}
          <div className={styles.ContentRow}>
            <input
              type="checkbox"
              id="mensCheckbox"
              name="mensCheckbox"
              checked={selectedCategories.includes('men')}
              onChange={() => handleCategoryChange('men')}
            />
            <label htmlFor="mensCheckbox">Men's Clothing</label>
          </div>
          <div className={styles.ContentRow}>
            <input
              type="checkbox"
              id="womensCheckbox"
              name="womensCheckbox"
              checked={selectedCategories.includes('women')}
              onChange={() => handleCategoryChange('women')}
            />
            <label htmlFor="womensCheckbox">Women's Clothing</label>
          </div>
          <div className={styles.ContentRow}>
            <input
              type="checkbox"
              id="electricCheckbox"
              name="electricCheckbox"
              checked={selectedCategories.includes('electric')}
              onChange={() => handleCategoryChange('electric')}
            />
            <label htmlFor="electricCheckbox">Electric</label>
          </div>
          <div className={styles.ContentRow}>
            <input
              type="checkbox"
              id="jewelleryCheckbox"
              name="jewelleryCheckbox"
              checked={selectedCategories.includes('jewellery')}
              onChange={() => handleCategoryChange('jewellery')}
            />
            <label htmlFor="jewelleryCheckbox">Jewellery</label>
          </div>
        </div>
      </form>
    </aside>
  );
};

// Exporting the FilterSidebar component as the default export
export default FilterSidebar;
