// react hook
import { useRef } from "react";

// react router
import { NavLink, useNavigate } from "react-router-dom";
import styles from './signinpage.module.css';
import { useAuthValue } from "../../authContext";

const SignInpage = () => {

   // signin function 
   const {signIn}=useAuthValue();

   // navigate variable to navigate to some page
   const navigate=useNavigate();
   
   // ref variables for email, password
   const emailRef=useRef();
   const passwordRef=useRef();

     // form submit function
     async function handleSubmit(e){
      e.preventDefault();
      // storing user's data
      const data={
          email:emailRef.current.value,
          password:passwordRef.current.value
      }
      // sign in user
      const status=await signIn(data);
      // if user signed in redirect to corresponding page
      {status?navigate("/"):navigate("/signin")};        
  }  

  return (
    <div className={styles.signInPageContainer}>
      <form className={styles.signInform} onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="email" 
               id="email"
               name="email" 
               placeholder="Enter Email" 
               required 
               ref={emailRef} />
        <input type="password"
               id="password" 
               name="password" 
               placeholder="Enter Password" 
               required 
               ref={passwordRef}/>
        <button type="submit">Sign In</button>
        <p>
          Don't have an account? <NavLink to="/signUp">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
}

export default SignInpage;
