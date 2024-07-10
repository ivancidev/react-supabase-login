import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root";
import Products from "./Products";
import Pricing from "./Pricing";
import Blog from "./Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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

export default function Home() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
