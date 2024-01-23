import { createContext, useContext, useState, useEffect } from "react";
import { data } from "./Assets/data";
import { useAuthValue } from "./authContext";
import { db } from './firebaseInit';
import {
  updateDoc,
  doc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";

// toast notification
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const productitemContext = createContext();


export const useCustomhook = () => {
  const value = useContext(productitemContext);
  return value;
}

function CustomeitemContext({ children }) {
  // for searched item by input
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState('100000');
  const [selectedCategories, setSelectedCategories] = useState([]);
  // all products in cart
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  // all order placed by user
  const [myorders, setMyOrders] = useState([]);
  // number of items in cart
  const [itemInCart, setItemInCart] = useState(0);
  // user's login status and loggedIn user
  const { isLoggedIn, userLoggedIn, setLoggedIn, setUserLoggedIn } =
    useAuthValue();

  // return date in yy/mm/dd format
  function getDate() {
    // getting current date
    const date = new Date();
    // day
    let day = date.getDate();

    // month
    let month = date.getMonth() + 1;

    // year
    let year = date.getFullYear();

    // yy/mm/dd format
    if (day < 10) {
      return `${year}-${month}-${0}${day}`;
    }
    if (month < 10) {
      return `${year}-${0}${month}-${day}`;
    }
    return `${year}-${month}-${day}`;
  }

  const handlePriceChange = (event) => {
    setPrice(parseInt(event.target.value));

  };
  // to check if the user is still logged in on page refresh
  useEffect(() => {
    // getting user authentication token from local storage
    const token = window.localStorage.getItem("token");
    if (token) {
      // loggedIn user's data
      const index = window.localStorage.getItem("index");
      const user = JSON.parse(index);
      setLoggedIn(token);
      setUserLoggedIn(user);
    }
  }, [setLoggedIn]);

  const handleCategoryChange = (category) => {
    // Check if the selectedCategories array already includes the given category
    if (selectedCategories.includes(category)) {
      // If the category is already selected, remove it from the selectedCategories array
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      // If the category is not selected, add it to the selectedCategories array
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    // check whether the user is logged in or not
    if (isLoggedIn) {
      // getting real-time update of data
      const unsub = onSnapshot(doc(db, "buybusy", userLoggedIn.id), (doc) => {
        // storing all the data in cart
        setCart(doc.data().cart);
        setMyOrders(doc.data().orders);
  
        // Calculate total amount of products in cart
        let sum = 0;
        doc.data().cart.forEach((item) => {
          sum += item.price * item.quantity;
        });
        
        // Update total and itemInCart after setting cart
        setTotal(sum);
        setItemInCart(doc.data().cart.length);
      });
  
      // Cleanup function for unsubscribing from the snapshot listener
      return () => unsub();
    }
  }, [isLoggedIn]);
  
  // to increase item's quantity
  async function increaseQuant(product) {
    // finding item's index in cart array
    const index = cart.findIndex((item) => item.name === product.name);

    // create a copy of the cart to avoid modifying state directly
    const updatedCart = [...cart];

    // increase product quantity
    updatedCart[index].quantity++;

    // update cart in useState
    setCart(updatedCart);

    // update cart in firebase database
    const userRef = doc(db, "buybusy", userLoggedIn.id);
    await updateDoc(userRef, {
      cart: updatedCart,
    });

    // increase itemCount and total amount
    setItemInCart(itemInCart + 1);
    // update total using the functional form of setTotal
    setTotal(Number(total + cart[index].price));
  }

  // to decrease item's quantity
  async function decreaseQuant(product) {
    // finding item's index
    const index = cart.findIndex((item) => item.name === product.name);
  
    // create a copy of the cart to avoid modifying state directly
    const updatedCart = [...cart];
  
    // reduce total amount
    setTotal((prevTotal) => Number(prevTotal) - updatedCart[index].price);
  
    // change quantity of product and update cart array
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
    } else {
      updatedCart.splice(index, 1);
    }
  
    // update cart and item Count
    setCart(updatedCart);
    setItemInCart(itemInCart - 1);
    
  
    // update cart in the Firebase database
    const userRef = doc(db, "buybusy", userLoggedIn.id);
    await updateDoc(userRef, {
      cart: updatedCart,
    });
    console.log(total);
  }
  
  

  async function removeFromCart(product) {
    // finding item's index in cart array
    const index = cart.findIndex((item) => item.name === product.name);
  
    // create a copy of the cart to avoid modifying state directly
    const updatedCart = [...cart];
  
    // remove the product from the updated cart
    updatedCart.splice(index, 1);
  
    // decrease itemCount and total amount
    setItemInCart(itemInCart - 1);
  
    // update cart in useState
    setCart(updatedCart);
  
    // update total using the functional form of setTotal
    setTotal((prevTotal) => Number(prevTotal - product.price));
  
    // update cart in firebase database
    const userRef = doc(db, "buybusy", userLoggedIn.id);
    await updateDoc(userRef, {
      cart: updatedCart,
    });
  
    toast.success("Removed from your Cart!!");
  }
  
  
  // function to add product to cart
  async function addToCart(product) {
    // check whether user is logged in or not
    if (!isLoggedIn) {
      toast.error("Please first Login !!!");
      return;
    }

    // checking whether the product already in the cart
    const index = cart.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      // if product already in cart then increase quantity
      increaseQuant(cart[index]);
      toast.success("Product Quantity Increased!!");
      return;
    }

    // add product to the cart of loggedIn user
    const userRef = doc(db, "buybusy", userLoggedIn.id);
    await updateDoc(userRef, {
      cart: arrayUnion({ quantity: 1, ...product }),
    });
    // increase item count and total amount
    setTotal(Number(total + product.price));
    setItemInCart(itemInCart + 1);
    toast.success("Added to your Cart!!");
  }


  return (
    <productitemContext.Provider
      value={
        {
          data,
          search,
          setSearch,
          price, setPrice, handlePriceChange,
          selectedCategories,
          handleCategoryChange, cart, addToCart, total, decreaseQuant, increaseQuant,
          removeFromCart
        }}>
      {children}
    </productitemContext.Provider>
  )
}
export { productitemContext };
export default CustomeitemContext;