'use client'
import React, { useState } from 'react'

const formInput = () => {
  const [idno, setIdno] = useState('')
  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [midname, setMidname] = useState('')
  const [course, setCourse] = useState('')
  const [yearLevel, setYearLevel] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idno: parseInt(idno),
          firstname,
          lastname,
          midname,
          course,
          yearlevel: parseInt(yearLevel),
          email,
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log("Successfully added student");
        alert("Successfully registered. Please Login.");
        window.location.href = "/login";
      } else {
        console.error("Error adding student:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <>
      <div className="form flex flex-col justify-center  gap-4">
        <input
          id="idno"
          type="text"
          placeholder="IDNo"
          className="input"
          required
          value={idno}
          onChange={(e) => setIdno(e.target.value)}
        />
        <input
          id="lastname"
          type="text"
          placeholder="Lastname"
          className="input"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          id="firstname"
          type="text"
          placeholder="Firstname"
          className="input"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          id="midname"
          type="text"
          placeholder="Midname"
          className="input"
          value={midname}
          onChange={(e) => setMidname(e.target.value)}
        />
        <select
          name="Course"
          id="course"
          className="required bg-transparent color"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Course</option>
          <option value="BSIT">BSIT</option>
          <option value="BSCS">BSCS</option>
          <option value="BSIS">BSIS</option>
          <option value="BSED">BSED</option>
          <option value="BSHM">BSPH</option>
          <option value="BSCE">BSCE</option>
        </select>
        <select
          name="Year Level"
          id="yearLevel"
          className="required bg-transparent color"
          value={yearLevel}
          onChange={(e) => setYearLevel(e.target.value)}
        >
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="username"
          type="text"
          placeholder="username"
          className="input required"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="input required"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
            Register
        </button>
      </div>
    </>
  )
}

export default formInput