// Import necessary modules and components
import React from 'react';
import styles from './homepage.module.css';
import SearchBar from '../../components/Home/SearchBar/SearchBar';
import FilterSidebar from '../../components/Home/FilterSidebar/FilterSidebar';
import ItemsContainer from '../../components/Home/ItemsContainer/ItemsContainer';

// HomePage component definition
const HomePage = () => {
  // JS structure for the HomePage component
  return (
    <div className={styles.homePageContainer}>
      {/* Sidebar container with filter options */}
      <div className={styles.sidebarContainer}>
        <FilterSidebar />
      </div>

      {/* Main content container with search bar and items */}
      <div className={styles.mainContentContainer}>
        {/* Container for the search bar */}
        <div className={styles.searchBarContainer} >
          <SearchBar />
        </div>

        {/* Container for displaying items */}
        <div className={styles.itemsContainer}>
          <ItemsContainer />
        </div>
      </div>
    </div>
  );
}

// Export the HomePage component
export default HomePage;
