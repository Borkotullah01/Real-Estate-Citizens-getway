import {createBrowserRouter} from "react-router-dom";
import Root from "../../Components/Root/Root";
import Home from "../../Components/Pages/Home/Home";
import Details from "../../Components/Pages/Details/Details";

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
          path: "/:id",
          element: <Details></Details>
        },
    ]
    },
  ]);