import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-900">
        <Navbar />
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-relaxed">
            Welcome to <br />
            <div className="text-yellow-300">CCS Sitin Monitoring System :)</div>
          </h1>
          <br />
          <p className="font-extralight italic">
            Where you are well informed with the laboratory status of the
            department.
          </p>
        </div>
      </div>
    </>
  );
}
