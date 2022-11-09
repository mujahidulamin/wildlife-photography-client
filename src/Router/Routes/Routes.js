import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AllServices from '../../Pages/AllServices/AllServices'
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoute from './../PrivateRoute/PrivateRoute';






const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <AllServices></AllServices>,
        loader: () => fetch('http://localhost:5000/allServices')
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/allServices/${params.id}`)
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,

      },
    ]
  }
])

export default router;