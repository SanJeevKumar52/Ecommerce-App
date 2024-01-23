import React from 'react';
import styles from './cart.module.css';
import CartCard from '../../components/Cart/CartCard';
import { useCustomhook } from '../../productitemContext';
import { useAuthValue } from '../../authContext';

const Cart = () => {
  const { cart, total } = useCustomhook();
  const { userLoggedIn } = useAuthValue();

  return (
    <>
      {userLoggedIn && cart.length === 0 ? (
        <p className={styles.emptyCartMessage}>Cart is empty</p>
      ) : (
        <>
          <div className={styles.totalPrice}>
            <h1>Total: {total}</h1>
            <span>Purchase: {total}</span>
          </div>
          <div className={styles.cardContainer}>
            {cart.map((product, i) => (
              <CartCard key={i} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
