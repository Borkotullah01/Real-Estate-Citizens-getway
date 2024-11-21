import {createBrowserRouter} from "react-router-dom";
import Root from "../../Components/Root/Root";
import Home from "../../Components/Pages/Home/Home";
import Details from "../../Components/Pages/Details/Details";
import Order from "../../Components/Pages/Order/Order";
import Rent from "../../Components/Pages/Order/Rent";
import Buy from "../../Components/Pages/Order/Buy";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/details/:id",
          element: <Details></Details>
        },
        {
          path: "/order",
          element: <Order></Order>,
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