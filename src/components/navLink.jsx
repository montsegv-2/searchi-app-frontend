"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`p-1 ${
        pathName === link.url &&
        "underline hover:underline underline-offset-8 font-bold text-black"
      } `}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
