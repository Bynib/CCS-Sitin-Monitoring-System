import React from 'react'
import Navbar from '@/components/navbar'

const page = ({params} : {params: {username: string}}) => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-gray-900">
        <Navbar />
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-5xl font-extrabold leading-relaxed text-purple-100">
            Welcome to <br />
            <div className="text-yellow-300">CCS Sitin Monitoring System <br />DASHBOARD <br />{params.username} :)</div>
          </h1>
          <br />
          <p className="font-extralight italic text-purple-100">
            Where you are well informed with the laboratory status of the
            department.
          </p>
        </div>
      </div>
    </>
  )
}

export default page