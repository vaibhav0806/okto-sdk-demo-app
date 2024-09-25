"use client";
import React, { useState } from "react";
import { ArrowIcon } from "./Icon";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="px-3 lg:px-10 md:h-screen md:overflow-hidden flex flex-col gap-6">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center justify-center gap-2">
          <Image src="/img/okto-logo.png" height={36} width={36} alt="logo" />
          <div className="text-3xl font-semibold">okto</div>
          <div className="bg-[#f5f6fe] text-[#6679ef] rounded-full text-xs px-2 py-1 font-bold">
            Demo
          </div>
        </div>

        {/* Desktop Nav Buttons */}
        <div className="hidden sm:flex scale-[0.8] gap-2 sm:gap-5">
          <button
            type="submit"
            className="text-[#161616] duration-300 hover:bg-black hover:text-white text-[13px] sm:text-[16px] font-semibold h-10 sm:h-[44px] rounded-[120px] border bg-white border-[rgba(22,22,22,0.12)] px-2 sm:px-4 "
          >
            Reset
          </button>
          <button
            type="submit"
            className="text-[#161616] duration-300 hover:bg-black hover:text-white text-[13px] sm:text-[16px] font-semibold h-10 sm:h-[44px] rounded-[120px] border bg-white border-[rgba(22,22,22,0.12)] px-2 sm:px-4 "
          >
            Export Config
          </button>
          <button
            type="submit"
            className="hover:text-[#161616] group flex gap-3 items-center duration-300 bg-black text-white text-[13px] sm:text-[16px] font-semibold h-10 sm:h-[44px] rounded-[120px] border hover:bg-white border-[rgba(22,22,22,0.12)] px-2 sm:px-4 "
          >
            Get Started
            <span>
              <ArrowIcon />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-[#161616]">
            {/* <MenuIcon className="h-8 w-8" /> */}
            {menuOpen ? (
              <XMarkIcon className="size-6 text-blue-500" />
            ) : (
              <Bars3Icon className="size-6 text-blue-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-12 flex flex-col gap-3 sm:hidden p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <button
            type="submit"
            className="text-[#161616] duration-300 hover:bg-black hover:text-white text-[14px] font-semibold h-10 rounded-md border bg-white border-[rgba(22,22,22,0.12)] px-4"
          >
            Reset
          </button>
          <button
            type="submit"
            className="text-[#161616] duration-300 hover:bg-black hover:text-white text-[14px] font-semibold h-10 rounded-md border bg-white border-[rgba(22,22,22,0.12)] px-4"
          >
            Export Config
          </button>
          <button
            type="submit"
            className="hover:text-[#161616] group flex gap-3 items-center duration-300 bg-black text-white text-[14px] font-semibold h-10 rounded-md border hover:bg-white border-[rgba(22,22,22,0.12)] px-4"
          >
            Get Started
            <span className="transition-all duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </button>
        </div>
      )}

      {/* Page Content */}
      <div className="w-full md:h-[calc(100vh-68px)] overflow-auto md:overflow-hidden max-md:mb-5">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
