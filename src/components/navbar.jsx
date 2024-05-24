"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/searchi.png" alt="" width={54} height={54} />
          <span className="ml-3 text-xl">SearchiStore</span>
        </a>
      </div>
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 items-center justify-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGGIN BUTTONS */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <span className="pt-2">Sign In</span>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
          Sign Up
        </button>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-pink-500 rounded"></div>
          <div className="w-10 h-1 bg-pink-500 rounded"></div>
          <div className="w-10 h-1 bg-pink-500 rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-indigo-500 text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
