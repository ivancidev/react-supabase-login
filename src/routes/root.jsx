import React from "react";
import { Outlet } from "react-router-dom";
import "./root.css";
import ResponsiveAppBar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <ResponsiveAppBar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
