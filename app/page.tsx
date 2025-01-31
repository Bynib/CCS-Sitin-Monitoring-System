import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-center gap-10">
      <div className="flex justify-center gap-10">
        <img
        src="/uc-logo.jpg"
        alt="UC Logo"
        style={{width: 100, height: 100}}
        />
        <img
          src="/CCS_LOGO.png"
          alt="CSS"
          style={{width: 100, height: 100}}
        />
      </div>
        <div className="flex flex-col items-center justify-center mx-auto gap-10 w-1/2 h-1/4 bg-gray-100 rounded">
          <h1 className="text-4xl font-bold flex justify-center  font-extrabold ">
            CSS Sitin Monitoring System
          </h1>
          <div className="flex justify-center gap-10">
            <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded flex justify-center">LOGIN</Link>
            <Link href="/registration" className="bg-0 hover:bg-blue-700 hover:text-white text-black font-bold py-4 px-10 rounded flex justify-center">REGISTER</Link>
          </div>
          
        </div>
    </div>
  );
}
