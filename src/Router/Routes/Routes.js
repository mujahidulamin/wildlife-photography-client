import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AllServices from '../../Pages/AllServices/AllServices'
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import AddService from "../../Pages/AddService/AddService";
import ErrorPage from './../../Pages/ErrorPage/ErrorPage';
import Update from "../../Pages/Update/Update";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch('https://wildlife-photographer-server.vercel.app/allServices')
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
        loader: ({ params }) => fetch(`https://wildlife-photographer-server.vercel.app/allServices/${params.id}`)
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
      },
    ]
  }
])

export default router;