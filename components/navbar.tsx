import React from "react";
import Link from "next/link";
import Image from "next/image";
import Buttons from "./navbar_btns";

const navbar = () => {
  return (
    <>
      <div className="w-screen h-screen font-bold absolute">
        <div className="flex justify-between items-center p-5">
          <Link href={"/"}>
            <Image
              src={"/CCS_LOGO.png"}
              alt="CCS"
              width={80}
              height={80}
            ></Image>
          </Link>
          <div className="flex gap-5 pr-5">
            <Buttons/>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
