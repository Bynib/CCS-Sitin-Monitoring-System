import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Form from "@/components/formInput";
import prisma from "@/app/db";

type Student = {
  IDNo: number;
  Lastname: string;
  Firstname: string;
  Midname: string;
  Course: string;
  YearLevel: number;
  Email: string;
  username: string;
  password: string;
}


const page = async () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-center bg-gray-900 color">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-30 mx-auto h-1/1 bg-gray-100/10 rounded backdrop-blur-sm dark:bg-gray-950 w-7/10 xl:w-1/3 lg:w-2/5 md:w-3/5 sm:w-3/7 ">
        
        <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-5xl font-bold flex justify-center p-5 text-center">
          REGISTER
        </h1>
            <Form/>
            <div className="flex flex-col gap-1 md:flex-row sm:flex-col">
              <h6 className="pt-4">Already have an account?</h6>
              <Link
                href="/login"
                className="bg-0 dark:text-white text-blue-400 font-bold py-4 flex justify-center"
              >
                Login
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
