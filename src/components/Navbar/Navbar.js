// Import necessary modules and components
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './navbar.module.css';
import homeIcon from './icons/home.png';
import cartIcon from './icons/cart.png';
import myorderIcon from './icons/myorder.png';
import logoutIcon from './icons/logout.png';
import signinIcon from './icons/signin.png';
import { useAuthValue } from '../../authContext';

// Navbar component definition
const Navbar = () => {
  // State for managing dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  // Destructure values from the authentication context
  const { isLoggedIn, signOut } = useAuthValue();

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // JSX structure for the Navbar component
  return (
    <>
      {/* Navbar container */}
      <div className={styles.Navbar}>
        <div className={styles.navbarContainer}>
          {/* Logo link */}
          <NavLink to='/' className={styles.navlogo}>BusyBuy</NavLink>

          {/* Hamburger icon for mobile view */}
          <div className={styles.dropdownButton} onClick={toggleDropdown}>
            <span>&#9776;</span> {/* Unicode for hamburger icon */}
          </div>

          {/* Navbar content with conditional rendering based on user authentication */}
          <div className={`${styles.navbarContent} ${showDropdown ? styles.show : ''}`}>
            <NavLink to='/' className={styles.navNavlink}>
              <span>
                <img src={homeIcon} alt="Home Icon" />
              </span>
              <span>Home</span>
            </NavLink>

            {isLoggedIn ? (
              <> 
                {/* My Order link */}
                <NavLink to='/myorder' className={styles.navNavlink}>
                  <span>
                    <img src={myorderIcon} alt="My Order Icon" />
                  </span>
                  <span>My Order</span>
                </NavLink>

                {/* Cart link */}
                <NavLink to='/cart' className={styles.navNavlink}>
                  <span>
                    <img src={cartIcon} alt="Cart Icon" />
                  </span>
                  <span>Cart</span>
                </NavLink>

                {/* Logout link */}
                <NavLink className={styles.navNavlink}>
                  <span>
                    <img src={logoutIcon} alt="Logout Icon" />
                  </span>
                  <span onClick={signOut}>Logout</span>
                </NavLink>
              </>
            ) : (
              // SignIn link for non-logged-in users
              <NavLink to='/signIn' className={styles.navNavlink}>
                <span>
                  <img src={signinIcon} alt="SignIn Icon" />
                </span>
                <span>SignIn</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Outlet for rendering nested routes */}
      <Outlet />
    </>
  );
}

// Export the Navbar component
export default Navbar;
