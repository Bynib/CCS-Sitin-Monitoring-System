"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const login = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/login" && pathname !== "/registration" && (
        <>
          <Link href={"/login"}>
            <button className="bg-blue-500 p-2 rounded w-20 text-purple-100">Login</button>
          </Link>
          <Link href="/registration">
            <button className='py-2 text-purple-100'>Register</button>
          </Link>
        </>
      )}
    </>
  );
};

export default login;
