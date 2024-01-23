import styles from './cartcard.module.css';
import { useCustomhook } from '../../productitemContext';
const CartCard = (props) => {
    // product data from props
  const { name, image, price } = props.product;
  const{removeFromCart} = useCustomhook();
    return (
        <>
            <div className={styles.ItemcardContainer}>

                {/* Container for the image display */}
                <div className={styles.imageContainer}>
                    <img src={image} alt='category' />
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
                            onClick={removeFromCart}
                        >
                            Remove from cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard