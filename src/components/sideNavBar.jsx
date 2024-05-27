"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SideNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menu = [
    {
      id: 1,
      name: "search",
      logo: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
      link: "/locations",
    },
    {
      id: 2,
      name: "Admin",
      logo: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z",
      link: "/admin",
    },
  ];

  return (
    <div
      className={`gap-1 p-4 items-center flex flex-col 
  w-[90px] space-y-4 shadow-md shadow-pink-200
  h-screen sticky top-0 bg-white z-20`}
    >
      <Link href="/">
        <Image src="/searchi.png" alt="logo" width={50} height={50} />
      </Link>

      {menu.map((item, index) => (
        <Link href={item.link} key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            key={index}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setActiveIndex(index)}
            className={`w-10 h-10 hover:text-pink-500
          hover:bg-pink-100
          p-2 cursor-pointer rounded-lg ${
            index == activeIndex ? "text-pink-500 bg-pink-100" : null
          }`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={item.logo} />
          </svg>
        </Link>
      ))}
    </div>
  );
};

export default SideNavBar;
