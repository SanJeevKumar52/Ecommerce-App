import React from 'react';
import styles from './cart.module.css';
import CartCard from '../../components/Cart/CartCard';
import { useCustomhook } from '../../productitemContext';
import { useAuthValue } from '../../authContext';
// react router
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, total, purchaseAll, itemInCart  } = useCustomhook();
  const { userLoggedIn } = useAuthValue();
   // to navigate to some page
   const navigate = useNavigate();
   // purchase button handler
  function handlePurchase() {
    // if cart empty return
    if (itemInCart === 0) {
      toast.error("Nothing to purchase in Cart!!");
      return;
    }

    // purchase function
    purchaseAll();
    // show notification
    toast.success("Your order has been Placed!!!");

    // navigate to myorder page
    navigate("/myorder");
  }
  return (
    <>
      {userLoggedIn && cart.length === 0 ? (
        <p className={styles.emptyCartMessage}>Cart is empty</p>
      ) : (
        <>
          <div className={styles.totalPrice}>
            <h1>Total: {total}</h1>
            <span onClick={handlePurchase}>Purchase: {total}</span>
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
