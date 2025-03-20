import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col gap-12">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
