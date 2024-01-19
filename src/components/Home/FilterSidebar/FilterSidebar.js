
import styles from './filter.module.css';
import { useCustomhook } from '../../../productitemContext';

const FilterSidebar = () => {
  const { price, handlePriceChange, selectedCategories, handleCategoryChange  } = useCustomhook();
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
          <span>CATEGORY</span>
        </div>

        <div className={styles.CategoryContent}>
          <div className={styles.ContentRow}>
            <input type="checkbox"
              id="mensCheckbox"
              name="mensCheckbox"
              checked={selectedCategories.includes('men')}
              onChange={() => handleCategoryChange('men')} />
            <label htmlFor="mensCheckbox">Men's Clothing</label>
          </div>
          <div className={styles.ContentRow}>
            <input type="checkbox"
              id="womensCheckbox"
              name="womensCheckbox"
              checked={selectedCategories.includes('women')}
              onChange={() => handleCategoryChange('women')}
            />
            <label htmlFor="womensCheckbox">Women's Clothing</label>
          </div>
          <div className={styles.ContentRow}>
            <input type="checkbox"
              id="electricCheckbox"
              name="electricCheckbox"
              checked={selectedCategories.includes('electric')}
              onChange={() => handleCategoryChange('electric')}
            />
            <label htmlFor="electricCheckbox">electric</label>
          </div>
          <div className={styles.ContentRow}>
            <input type="checkbox"
              id="jewelleryCheckbox"
              name="jewelleryCheckbox"
              checked={selectedCategories.includes('jewellery')}
              onChange={() => handleCategoryChange('jewellery')}
            />
            <label htmlFor="jewelleryCheckbox">jewellery</label>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default FilterSidebar;
