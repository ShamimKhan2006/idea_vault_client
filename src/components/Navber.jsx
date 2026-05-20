"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button} from "@heroui/react";
import ThemeButton from "./ThemeButton";
import { authClient } from "@/lib/auth-client";

const Navber = () => {
  const pathname = usePathname();
       
  const links = [
    { name: "Home", path: "/" },
    { name: "Ideas", path: "/ideas" },
    { name: "Add Idea", path: "/add-idea" },
    { name: "My Ideas", path: "/my-idea" },
    { name: "My Interactions", path: "/my-interections" },
  ];
 


const { data: session } = authClient.useSession()
console.log(session, "session")

  return (
    <div className="navbar bg-[#04011c] text-white px-4 md:px-10 shadow-lg">
{/*  */}
      <div className="navbar-start">
   
        <div className="dropdown">
          <div
            tabIndex="-1"
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </div>


          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-[100] mt-3 w-60 p-3 shadow-lg gap-2 lg:hidden"
          >
             {/* bg-[#0b062d] */}
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`rounded-lg px-3 py-2 transition-all duration-300 ${
                    pathname === link.path
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Idea Vault
        </Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2 md:gap-4">
           <ThemeButton></ThemeButton>
        <Link href={"/login"}>
          <Button className="border border-pink-500 bg-transparent text-white rounded-xl hover:bg-pink-500 transition-all duration-300">
            Login
          </Button>
        </Link>

        <Link href={"/register"}>
          {" "}
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navber;
