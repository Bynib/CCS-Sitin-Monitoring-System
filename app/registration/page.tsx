import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-center bg-gray-900">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-30 mx-auto h-1/1 bg-gray-100/10 rounded backdrop-blur-sm dark:bg-gray-950 w-7/10 xl:w-1/3 lg:w-2/5 md:w-3/5 sm:w-3/7 ">
        <h1 className="text-4xl font-bold flex justify-center p-5 text-center mt-7">
          REGISTER
        </h1>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <form className="form flex flex-col justify-center items-center gap-4">
            <input
              type="text"
              placeholder="IDNo"
              className="input"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="input"
            />
            <input
              type="text"
              placeholder="Firstname"
              className="input"
            />
            <input
              type="text"
              placeholder="Midname"
              className="input"
            />
            <input
              type="text"
              placeholder="Course"
              className="input"
            />
            <input
              type="text"
              placeholder="Year Level"
              className="input"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="input"
            />
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
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                Register
              </button>
            </div>
            <div className="flex flex-col gap-1 md:flex-row sm:flex-col">
              <h6 className="pt-4">Already have an account?</h6>
              <Link
                href="/login"
                className="bg-0 dark:text-white text-black font-bold py-4 flex justify-center"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
