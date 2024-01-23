// Import necessary modules and components
import React from 'react';
import styles from './cart.module.css';
import CartCard from '../../components/Cart/CartCard';
import { useCustomhook } from '../../productitemContext';
import { useAuthValue } from '../../authContext';

// Import react-router functions for navigation
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Cart component definition
const Cart = () => {
  // Destructure values from custom hook for managing cart items
  const { cart, total, purchaseAll, itemInCart } = useCustomhook();

  // Destructure userLoggedIn from authentication context
  const { userLoggedIn } = useAuthValue();

  // React Router navigate function
  const navigate = useNavigate();

  // Purchase button handler
  function handlePurchase() {
    // If the cart is empty, display an error message and return
    if (itemInCart === 0) {
      toast.error("Nothing to purchase in Cart!!");
      return;
    }

    // Perform the purchase operation
    purchaseAll();

    // Show success notification for placing the order
    toast.success("Your order has been Placed!!!");

    // Navigate to the myorder page
    navigate("/myorder");
  }

  // JSX structure for the Cart component
  return (
    <> 
      {/* Conditional rendering based on user login status and cart content */}
      {userLoggedIn && cart.length === 0 ? (
        // Display a message if the cart is empty for a logged-in user
        <p className={styles.emptyCartMessage}>Cart is empty</p>
      ) : (
        // Display cart details if the user is logged in and the cart is not empty
        <>
          {/* Total price and Purchase button */}
          <div className={styles.totalPrice}>
            <h1>Total: {total}</h1>
            <span className={styles.Purchase} onClick={handlePurchase}>Purchase: {total}</span>
          </div>

          {/* Cart item cards */}
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

// Export the Cart component
export default Cart;
