import {createBrowserRouter} from "react-router-dom";
import Root from "../../Components/Root/Root";
import Home from "../../Components/Pages/Home/Home";
import Details from "../../Components/Pages/Details/Details";
import Order from "../../Components/Pages/Order/Order";
import Rent from "../../Components/Pages/Order/Rent";
import Buy from "../../Components/Pages/Order/Buy";
import Error from "../../Components/Pages/Errorpage/Error";
import Login from "../../Components/Pages/Login/Login";
import Register from "../../Components/Pages/Register/Register";
import UserProfile from "../../Components/Pages/UserProfile/UserProfile";
import UpdateProfile from "../../Components/Pages/UpdateProfile/UpdateProfile";
import Support from "../../Components/Pages/Support/Support";
import Private from "../Private/Private";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/user-profile",
          element: <Private><UserProfile></UserProfile></Private>
        },
        {
          path: "/update-profile",
          element: <Private><UpdateProfile/></Private>
        },
        {
          path: "/support",
          element: <Support/>
        },
        {
          path: "/details/:id",
          element: <Private><Details></Details></Private>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/order",
          element: <Private><Order></Order></Private>,
          children: [
            {
              path:"/order",
              element: <Rent></Rent>
            },
            {
              path:"/order/buy",
              element: <Buy></Buy>
            },
          ]
        },
    ]
    },
  ]);