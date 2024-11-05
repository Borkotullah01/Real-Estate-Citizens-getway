import {createBrowserRouter} from "react-router-dom";
import Root from "../../Components/Root/Root";
import Home from "../../Components/Pages/Home/Home";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
    ]
    },
  ]);