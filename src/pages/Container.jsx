import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root";
import Products from "./Products/Products";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Home from "./Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default function Container() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
