import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage/HomePage";
import SignUppage from "./pages/SignUppage/SignUppage"
import SignInpage from './pages/SignInpage/SignInpage'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {index:true, element: <HomePage /> },
        {path: '/signUp', element: <SignUppage />},
        {path:'/signIn',element:<SignInpage/>} 
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
