import styles from './searchbar.module.css';
import { useCustomhook } from '../../../productitemContext';
const Searchbar = () => {

  const{setSearch} = useCustomhook();

   
  return (
    <div className={styles.SearchContainer}>
      <form>
        <input type="text"
              placeholder="Search By Name"
              onChange={(e) => setSearch(e.target.value)}/>
      </form>
    </div>
  )
}

export default Searchbar