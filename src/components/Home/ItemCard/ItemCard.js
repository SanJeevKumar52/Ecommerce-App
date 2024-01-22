import styles from './itemcard.module.css'
import { useCustomhook } from '../../../productitemContext';
const ItemCard = (props) => {
  // Destructuring the properties from 'props.item'
  const { name, image, price, category } = props.item;
  const{addToCart} = useCustomhook();

  return (
    <>
       {/* Outer container for the entire ItemCard component */}
      <div className={styles.ItemcardContainer}>

        {/* Container for the image display */}
        <div className={styles.imageContainer}>
          <img src={image} alt={category} />
        </div>

        {/* Container for the item information */}
        <div className={styles.itemInfoContainer}>
          
          {/* Displaying the item name */}
          <div className={styles.name}>{name}</div>
        
          {/* Displaying the item price with the currency symbol */}
          <div className={styles.price}>₹{price}</div>

          {/* Container for the button */}
          <div className={styles.btnContainer}>
            {/* Button for adding the item to the cart */}
            <button
              className={styles.addBtn}
              onClick={() => addToCart(props.item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCard