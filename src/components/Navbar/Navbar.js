// Navbar.js
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './navbar.module.css';
import homeIcon from './icons/home.png';
import cartIcon from './icons/cart.png';
import myorderIcon from './icons/myorder.png';
import logoutIcon from './icons/logout.png';
import signinIcon from './icons/signin.png';


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [login, setLogin] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
    <div className={styles.Navbar}>
      <div className={styles.navbarContainer}>
        <NavLink to='/' className={styles.navlogo}>BusyBuy</NavLink>
        <div className={styles.dropdownButton} onClick={toggleDropdown}>
          <span>&#9776;</span> {/* Unicode for hamburger icon */}
        </div>
        <div className={`${styles.navbarContent} ${showDropdown ? styles.show : ''}`}>
          <NavLink to='/' className={styles.navNavlink}>
            <span>
              <img src={homeIcon} alt="Home Icon" />
            </span>
            <span>Home</span>
          </NavLink>
          {!login ? (

            <> <NavLink className={styles.navNavlink} >
              <span>
                <img src={myorderIcon} alt="My Order Icon" />
              </span>
              <span>My Order</span>
            </NavLink>
            <NavLink className={styles.navNavlink}>
                <span>
                  <img src={cartIcon} alt="Cart Icon" />
                </span>
                <span>Cart</span>
              </NavLink>

              <NavLink className={styles.navNavlink}>
                <span>
                  <img src={logoutIcon} alt="Logout Icon" />
                </span>
                <span>Logout</span>
              </NavLink> </>) : (
            <NavLink to='/signIn' className={styles.navNavlink}>
              <span>
                <img src={signinIcon} alt="SignIn Icon" />
                
              </span>
              <span>SignIn</span>
            </NavLink>)}

        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Navbar;
