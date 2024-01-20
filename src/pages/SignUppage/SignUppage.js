
import styles from './signup.module.css';
import { useRef } from "react";

// navigation router
import { useNavigate } from "react-router-dom";

// custom context hook (authentication)
import { useAuthValue } from '../../authContext';

const SignUppage = () => {

   // ref variables for name, email, password
   const nameRef=useRef();
   const emailRef=useRef();
   const passwordRef=useRef();

   // navigation variable
   const navigate=useNavigate();

   // function for creating new user
   const {createUser}=useAuthValue();


   // handle form submit
   function handleSubmit(e){
       e.preventDefault();

       // storing user's data
       const data={
           name:nameRef.current.value,
           email:emailRef.current.value,
           password:passwordRef.current.value
       }
       // creating user
       createUser(data);
       // if user created redirect to corresponding page
       navigate("/signin");
   }

  return (
    <>
      <div className={styles.signUpContainer}>
        <form className={styles.signupform} onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input type='text' 
                 id='name' 
                 name='name' 
                 placeholder='Enter Name' 
                 required
                 ref={nameRef}
                 />
          <input type="email" 
                 id="email" 
                 name="email" 
                 placeholder="Enter Email" 
                 required 
                 ref={emailRef}
                 />
          <input type="password"
                 id="password" 
                 name="password" 
                 placeholder="Enter Password" 
                 required
                 ref={passwordRef}  />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default SignUppage;