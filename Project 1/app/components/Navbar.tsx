"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 👈 import hook

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-black font-semibold"
      : "text-gray-600 hover:text-black";

  return (
    <nav className="w-full h-[70px] bg-white text-black flex items-center justify-between px-10 shadow-md">

      <div className="flex items-center gap-3">
        <Image
          src="https://i.pinimg.com/564x/4a/a5/34/4aa534605d1afc465c5bdc5dd80f1ecb.jpg"
          alt="WanderWise Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="font-bold text-2xl tracking-wide">WanderWise</h1>
      </div>

      <ul className="flex gap-8 font-medium">
        <li>
          <Link
            href="/"
            className={`${isActive("/")} transition-colors duration-300`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/destinations"
            className={`${isActive(
              "/destinations"
            )} transition-colors duration-300`}
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${isActive("/about")} transition-colors duration-300`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${isActive("/contact")} transition-colors duration-300`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
