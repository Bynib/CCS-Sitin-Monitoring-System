import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import RegisterButton from "@/components/reg_btn";
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
        <h1 className="text-4xl font-bold flex justify-center p-5 text-center mt-7">
          REGISTER
        </h1>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <form className="form flex flex-col justify-center  gap-4">
            <input
              id="idno"
              type="text"
              placeholder="IDNo"
              className="input"
              required
            />
            <input
              id="lastname"
              type="text"
              placeholder="Lastname"
              className="input"
              required
            />
            <input
              id="firstname"
              type="text"
              placeholder="Firstname"
              className="input"
              required
            />
            <input
              id="midname"
              type="text"
              placeholder="Midname"
              className="input"
            />
            <select name="Course" id="course" className="required bg-transparent color">
              <option value="">Course</option>
              <option value="BSIT">BSIT</option>
              <option value="BSCS">BSCS</option>
              <option value="BSIS">BSIS</option>
              <option value="BSED">BSED</option>
              <option value="BSHM">BSPH</option>
              <option value="BSCE">BSCE</option>
            </select>
            <select name="Year Level" id="yearLevel" className="required bg-transparent color">
              <option value="">Year Level</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input
              id="email"
              type="text"
              placeholder="Email Address"
              className="input required"
            />
            <input
              id="username"
              type="text"
              placeholder="username"
              className="input required"
            />
            <input
              id="password"
              type="password"
              placeholder="password"
              className="input required"
            />
              <RegisterButton />
            <div className="flex flex-col gap-1 md:flex-row sm:flex-col">
              <h6 className="pt-4">Already have an account?</h6>
              <Link
                href="/login"
                className="bg-0 dark:text-white text-blue-400 font-bold py-4 flex justify-center"
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
