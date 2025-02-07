import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import LoginForm from "@/components/loginform";

const page = async () => {
  

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-center bg-gray-900 color">
      <Navbar />

      <div className="flex flex-col items-center justify-center mx-auto h-2/3 bg-gray-100/10 rounded backdrop-blur-sm dark:bg-gray-950 w-7/10 2xl:w-1/3 xl:w-1/3 lg:w-2/5 md:w-3/5 sm:w-3/7 ">
        <h1 className="text-5xl font-bold flex justify-center p-5 text-center">
          LOGIN
        </h1>
        <div className="flex flex-col justify-center items-center w-full h-3/5">
          <LoginForm />
            <div className="flex flex-col gap-1 md:flex-row sm:flex-col">
              <h6 className="pt-4 text-sm">Don't have an account?</h6>
              <Link
                href="/registration"
                className="bg-0  text-blue-400 font-bold py-4 flex justify-center text-sm"
              >
                Register
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
