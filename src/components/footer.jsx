"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/searchi.png" alt="Logo" width={54} height={54} />
          <span className="ml-3 text-xl">SearchiStore</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 mgav group —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            present
          </a>
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
          <Link href="/">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/">
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
