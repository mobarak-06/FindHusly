import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Properties from "../pages/State/Properties";
import PropertyDetails from "../pages/State/PropertyDetails";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/residensial.json")
        },
        {
            path: "/properties",
            element: <Properties></Properties>,
            loader: () => fetch("public/residensial.json")
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
            path: "/property/:id",
            element: <PropertyDetails/>,
            loader: () => fetch('public/residensial.json')
        },
      ]
    },
  ]);