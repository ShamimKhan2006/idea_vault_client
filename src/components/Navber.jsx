"use client";

import React from 'react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navber = () => {

   const pathname = usePathname();

   const links = [
    { name: "Home", path: "/" },
    { name: "Ideas", path: "/ideas" },
    { name: "Add Idea", path: "/add-idea" },
    { name: "My Ideas", path: "/my-idea" },
    { name: "My Interactions", path: "/my-interections" },
   ]

  return (
    <div className="navbar bg-[#04011c] shadow-sm text-white mb-20">

      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl">
          Idea Vault
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">

          {
            links.map(link => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`px-4 py-2 rounded-none transition-all duration-300
                    ${
                      pathname === link.path
                        ? "bg-[#16112b] text-white"
                        : "hover:bg-gray-900"
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            ))
          }

        </ul>
      </div>

      <div className="navbar-end flex gap-4">
        <Button className="rounded-none text-white">
          Login
        </Button>

        <Button className="rounded-none text-white">
          Register
        </Button>
      </div>

    </div>
  );
};

export default Navber;