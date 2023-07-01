"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import NavLinks from "./nav-links";

const Navbar = () => {
  return (
    <div className="border-b px-6">
      <div className="h-16 flex items-center space-x-4">
        <div>Store Switcher</div>
        <NavLinks className="mx-6 flex-1" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
