'use client'
import React from 'react'
import { getStudents, addStudent } from '@/api/prisma-db'

const reg_btn = () => {
    const handleRegister = async () => {
        await addStudent({
            IDNo: 1,
            Lastname: "test",
            Firstname: "test",
            Midname: "test",
            Course: "test",
            YearLevel: 1,
            Email: "test",
            username: "test",
            password: "test",
            createdAt: new Date(),
            updatedAt: new Date()
            
        })
        console.log("Successful")
    }
  return (
    <>
        <button onClick={handleRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
            Register
        </button>
    </>
  )
}

export default reg_btn