import styles from './cart.module.css'
import CartCard from '../../components/Cart/CartCard'
import { useCustomhook } from '../../productitemContext'
import { useAuthValue } from '../../authContext'
const Cart = () => {

  // data for product from custom hook (product)
  const { cart ,total} = useCustomhook();
  const { userLoggedIn } = useAuthValue();
  return (
    <>
    <div className={styles.totalPrice}>
        <h1>Total :{total}</h1>
    </div>
    <div className={styles.cardContainer}>
    {cart.map((product, i) => <CartCard key={i} product={product} />)}
    </div>
    
    </>
  )
}

export default Cart