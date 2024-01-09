import styles from './searchbar.module.css';
const Searchbar = () => {
  return (
    <div className={styles.SearchContainer}>
      <form>
        <input placeholder='Search By Name'/>
      </form>
    </div>
  )
}

export default Searchbar