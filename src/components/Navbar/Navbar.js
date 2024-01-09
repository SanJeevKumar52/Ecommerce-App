// Navbar.js
import React, { useState } from 'react';
import styles from './navbar.module.css';
import homeIcon from './icons/home.png';
import cartIcon from './icons/cart.png';
import myorderIcon from './icons/myorder.png';
import logoutIcon from './icons/logout.png';
import signinIcon from './icons/signin.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [login,setLogin] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navlogo}>BusyBuy</div>
        <div className={styles.dropdownButton} onClick={toggleDropdown}>
          <span>&#9776;</span> {/* Unicode for hamburger icon */}
        </div>
        <div className={`${styles.navbarContent} ${showDropdown ? styles.show : ''}`}>
          <div>
            <span>
              <img src={homeIcon} alt="Home Icon" />
            </span>
            <span>Home</span>
          </div>
          {!login ? (<><div>
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
          </div> </>):(
          <div>
            <span>
              <img src={signinIcon} alt="SignIn Icon" />
            </span>
            <span>SignIn</span>
          </div>)}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
