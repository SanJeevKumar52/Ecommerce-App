import React from 'react';
import styles from './homepage.module.css';
import SearchBar from '../../components/Home/SearchBar/SearchBar';
import FilterSidebar from '../../components/Home/FilterSidebar/FilterSidebar';
import ItemsContainer from '../../components/Home/ItemsContainer/ItemsContainer';
import { useCustomhook } from '../../productitemContext';

const HomePage = () => {
  const{count} = useCustomhook();
  console.log(count);
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.sidebarContainer}>
        <FilterSidebar />
      </div>
      <div className={styles.mainContentContainer}>
        <div className={styles.searchBarContainer} >
        <SearchBar />
        </div>
        <div className= {styles.itemsContainer}>
        <ItemsContainer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
