import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage/HomePage";
import SignUppage from "./pages/SignUppage/SignUppage"
import SignInpage from './pages/SignInpage/SignInpage'
import MyOrder from './pages/MyOrder/MyOrder';
import Cart from './pages/Cart/Cart';
import CustomeitemContext from './productitemContext';
import { CustomAuthContext } from './authContext';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/signUp', element: <SignUppage /> },
        { path: '/signIn', element: <SignInpage /> },
        { path: '/cart', element: <Cart /> },
        { path: 'myorder', element: <MyOrder /> }
      ],
    },
  ])
  return (
    <>

      <CustomAuthContext>
        <CustomeitemContext>
          <RouterProvider router={router} />
        </CustomeitemContext>
      </CustomAuthContext>

    </>

  );
}

export default App;
