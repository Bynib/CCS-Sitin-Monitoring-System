import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden gap-10">
        <h1 className="text-4xl font-bold">REGISTER</h1>
        <div className="flex flex-col justify-center items-center w-1/3 h-1/3">
            <form className="form flex flex-col justify-center items-center gap-2">
              <input type="text" placeholder="IDNo" className="border border-black "/>
              <input type="text" placeholder="Lastname" className="border border-black "/>
              <input type="text" placeholder="Firstname" className="border border-black "/>
              <input type="text" placeholder="Midname" className="border border-black "/>
              <input type="text" placeholder="Course" className="border border-black "/>
              <input type="text" placeholder="Year Level" className="border border-black "/>
              <input type="text" placeholder="Email Address" className="border border-black "/>
              <input type="text" placeholder="username" className="border border-black "/>
              <input type="password" placeholder="password" className="border border-black " />
              <div>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded'>Register</button>
              </div>
                
            </form>
        </div>
    </div>
  )
}

export default page