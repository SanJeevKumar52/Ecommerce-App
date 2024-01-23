// Import necessary modules and functions from React and Firebase
import { createContext, useContext, useState, useEffect } from "react";
import { db } from "./firebaseInit";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

// Import ToastContainer and toast for notification handling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create context API for authentication
export const authContext = createContext();

// Custom context hook to retrieve context values
export function useAuthValue() {
  const value = useContext(authContext);
  return value;
}

// Custom context Provider for authentication
export function CustomAuthContext({ children }) {
  // State variables for user-related information
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  // Fetch all users from the database on initial page render
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "buybusy"), (snapShot) => {
      const users = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setUserList(users);
    });
  }, [isLoggedIn]);

  // Function to create a new user
  async function createUser(data) {
    // Check if the email address already exists
    const index = userList.findIndex((user) => user.email === data.email);

    if (index !== -1) {
      // Display error notification if email already exists
      toast.error("Email Address already exists, try with another email");
      return;
    }

    // Create a new user in the database
    const docRef = await addDoc(collection(db, "buybusy"), {
      name: data.name,
      email: data.email,
      password: data.password,
      cart: [],
      orders: [],
    });

    // Display success notification for new user creation
    toast.success("New user Created, Please LogIn to Continue !!");
  }

  // Function to sign in a user
  async function signIn(data) {
    // Find the user in the database
    const index = userList.findIndex((user) => user.email === data.email);

    if (index === -1) {
      // Display error notification if user not found
      toast.error("Email does not exist, Try again or SignUp Instead!!!");
      return false;
    }

    // Match the password if the email is found
    if (userList[index].password === data.password) {
      // Display success notification for successful sign-in
      toast.success("Sign In Successfully!!!");

      // Set login status, store user data, and generate user's login token
      setLoggedIn(true);
      setUserLoggedIn(userList[index]);
      window.localStorage.setItem("token", true);
      window.localStorage.setItem("index", JSON.stringify(userList[index]));

      return true;
    } else {
      // Display error notification if password doesn't match
      toast.error("Wrong UserName/Password, Try Again");
      return false;
    }
  }

  // Function to sign out the user
  function signOut() {
    // Remove user data and token from local storage
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("index");

    // Set login status to false and clear user data
    setLoggedIn(false);
    setUserLoggedIn(null);

    // Display success notification for sign-out
    toast.success("Sign Out Successfully!!!!");
  }

  // Return the context API with values
  return (
    <>
      <authContext.Provider
        value={{
          createUser,
          isLoggedIn,
          setLoggedIn,
          signIn,
          userLoggedIn,
          setUserLoggedIn,
          signOut,
        }}
      >
        {/* Display ToastContainer for notifications */}
        <ToastContainer />
        {children}
      </authContext.Provider>
    </>
  );
}
