import React from 'react';
import styles from './signup.module.css';

const SignUppage = () => {
  return (
    <>
      <div className={styles.signUpContainer}>
        <form className={styles.signupform}>
          <h2>Sign Up</h2>
          <input type='text' id='name' name='name' placeholder='Enter Name' required/>
          <input type="email" id="email" name="email" placeholder="Enter Email" required />
          <input type="password" id="password" name="password" placeholder="Enter Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default SignUppage;
