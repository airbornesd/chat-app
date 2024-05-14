import React, { useState } from 'react';
import axios from 'axios';

import './Forms.css';

export default function SignIn2() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/user/create-user',
        {
          email,
          username,
          password,
        }
      );
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <table>
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="email">email</label>
            </td>
            <td>
              <input
                type="text"
                id="email"
                className="text-zinc-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="username"> username </label>
            </td>
            <td>
              <input
                type="text"
                id="username"
                className="text-zinc-900"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password"> password </label>
            </td>
            <td>
              <input
                type="password"
                id="password"
                className="text-zinc-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="mt-3 w-full border border-white">
        submit
      </button>
      <button className="mt-3 w-full border border-white">log in</button>
    </form>
  );
}
