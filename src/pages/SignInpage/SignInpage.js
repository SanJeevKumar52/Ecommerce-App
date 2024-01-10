// SignInpage.js
import React from "react";
import { NavLink } from "react-router-dom";
import styles from './signinpage.module.css';

const SignInpage = () => {
  return (
    <div className={styles.signInPageContainer}>
      <form className={styles.signInform}>
        <h2>Sign In</h2>
        <input type="email" id="email" name="email" placeholder="Enter Email" required />
        <input type="password" id="password" name="password" placeholder="Enter Password" required />
        <button type="submit">Sign In</button>
        <p>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
}

export default SignInpage;
