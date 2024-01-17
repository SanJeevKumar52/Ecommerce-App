import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage/HomePage";
import SignUppage from "./pages/SignUppage/SignUppage"
import SignInpage from './pages/SignInpage/SignInpage'
import CustomeitemContext from './productitemContext';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CustomeitemContext > <Navbar /></CustomeitemContext >,
      children: [
        { index: true, element: <CustomeitemContext ><HomePage /></CustomeitemContext> },
        { path: '/signUp', element: <SignUppage /> },
        { path: '/signIn', element: <SignInpage /> }
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
