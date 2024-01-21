import styles from './cartcard.module.css';

const CartCard = () => {
    return (
        <>
            <div className={styles.ItemcardContainer}>

                {/* Container for the image display */}
                <div className={styles.imageContainer}>
                    <img src='' alt='category' />
                </div>

                {/* Container for the item information */}
                <div className={styles.itemInfoContainer}>

                    {/* Displaying the item name */}
                    <div className={styles.name}>name</div>

                    {/* Displaying the item price with the currency symbol */}
                    <div className={styles.price}>₹price</div>

                    {/* Container for the button */}
                    <div className={styles.btnContainer}>
                        {/* Button for adding the item to the cart */}
                        <button
                            className={styles.addBtn}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard