import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-center bg-gray-900">
      <Navbar />

      <div className="flex flex-col items-center justify-center mx-auto h-2/3 bg-gray-100/10 rounded backdrop-blur-sm dark:bg-gray-950 w-7/10 xl:w-1/3 lg:w-2/5 md:w-3/5 sm:w-3/7 ">
        <h1 className="text-4xl font-bold flex justify-center p-5 text-center mt-5">
          LOGIN
        </h1>
        <div className="flex flex-col justify-center items-center w-full h-2/3">
          <form className="form flex flex-col justify-center items-center gap-7">
            <input
              type="text"
              placeholder="username"
              className="input"
            />
            <input
              type="password"
              placeholder="password"
              className="input"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded flex justify-center w-1/3">
              Login
            </button>
            <div className="flex flex-col gap-1 md:flex-row sm:flex-col">
              <h6 className="pt-4 text-sm">Don't have an account?</h6>
              <Link
                href="/registration"
                className="bg-0 dark:text-white text-black font-bold py-4 flex justify-center text-sm"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
