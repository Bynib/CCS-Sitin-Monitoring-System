// components/loginform.js
'use client'
import React, { useState } from 'react';

const loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      window.location.href = "/student/" + username;
      alert("Login successful!");
    } else {
      console.log('Login failed');
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit ={handleSubmit} className="form flex flex-col justify-center items-center gap-7 w-1/2">
    <input
      type="text"
      placeholder="username"
      className="input w-full required"
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="password"
      className="input w-full required"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
    />
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded flex justify-center w-full">
      Login
    </button>
  </form>
  );
};

export default loginform;