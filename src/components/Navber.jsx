"use client";

import React from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import ThemeButton from "./ThemeButton";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navber = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Ideas", path: "/ideas" },
    { name: "Add Idea", path: "/add-idea" },
    { name: "My Ideas", path: "/my-idea" },
    { name: "My Interactions", path: "/my-interections" },
  ];
     
  const handleLogout=async()=>{
     await authClient.signOut();
     redirect("/")
  }
   
   

  const { data: session } = authClient.useSession();
  console.log(session, "session");
   const user=session?.user
        console.log("user",user)
  return (
    <div className="navbar   text-black px-4 md:px-10 shadow-lg  bg-base-00">
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content rounded-box z-[100] mt-3 w-60 p-3 shadow-lg gap-2 lg:hidden  "
          >
            {/**/}
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`rounded-lg px-3 py-2 ${
                    pathname === link.path ? " border border-green-500" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-black "
        >
          Idea <span className="text-green-500">Vault</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-4 py-2 rounded-xl  ${
                  pathname === link.path ? "border-b-2 border-green-500" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

 
     <div className="navbar-end gap-2 md:gap-4">
  <ThemeButton className="border-gray-400" />

  {!user ? (
    <>
      <Link href={"/login"}>
        <Button
          variant="outline"
          className="border-gray-500 text-black transition-all duration-300"
        >
          Login
        </Button>
      </Link>

      <Link href={"/register"}>
        <Button className="bg-green-500 text-white rounded-xl transition-all duration-300">
          Register
        </Button>
      </Link>
    </>
  ) : (
    <details className="dropdown dropdown-end">
      <summary className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full overflow-hidden">
          <Image
            src={user?.image}
            alt="user"
            width={40}
            height={40}
          />
        </div>
      </summary>

      <ul className="menu dropdown-content bg-white text-black rounded-box z-[100] mt-3 w-52 p-2 shadow">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>

        <li>
          <Button onClick={handleLogout}>Logout</Button>
        </li>
      </ul>
    </details>
  )}
</div>
      </div> 

  );
};

export default Navber;
