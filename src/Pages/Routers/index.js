import Product from "../Product";
import ProductInfo from "../ProductInfo";
import {  createBrowserRouter} from "react-router-dom";
import LogIn from "../LogIn";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Product/>,
    },
    {
      path: "/productinfo/:id",
      element: <ProductInfo/>,
    },
    {
        path: "/login",
        element: <LogIn/>,
      }
  ]);