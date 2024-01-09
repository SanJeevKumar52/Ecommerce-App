import React from 'react';
import styles from './navbar.module.css'; // Make sure the path is correct
import homeIcon from './icons/home.png';
import cartIcon from './icons/cart.png';
import myorderIcon from './icons/myorder.png';
import logoutIcon from './icons/logout.png';
import signinIcon from './icons/signin.png';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navlogo}>BusyBuy</div>
        <div className={styles.navbarContent}>
          <div>
            <span>
              <img src={homeIcon} alt="Home Icon" />
            </span>
            <span>Home</span>
          </div>
          <div>
            <span>
              <img src={cartIcon} alt="Cart Icon" />
            </span>
            <span>Cart</span>
          </div>
          <div>
            <span>
              <img src={myorderIcon} alt="My Order Icon" />
            </span>
            <span>My Order</span>
          </div>
          <div>
            <span>
              <img src={logoutIcon} alt="Logout Icon" />
            </span>
            <span>Logout</span>
          </div>
          <div>
            <span>
              <img src={signinIcon} alt="Logout Icon" />
            </span>
            <span>signIn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
