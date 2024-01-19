import styles from './searchbar.module.css';
import { useCustomhook } from '../../../productitemContext';
const Searchbar = () => {

  const{search,setSearch} = useCustomhook();

  return (
    <div className={styles.SearchContainer}>
      <form>
        <input type="text"
              placeholder="Search By Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}/>
      </form>
    </div>
  )
}

export default Searchbar