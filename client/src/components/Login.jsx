import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Forms.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignIn = async () => navigate('/');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/user/login', {
        username,
        password,
      });

      if (response.status === 200) navigate('/welcome');
      console.log(response.data);
    } catch (error) {
      console.error('error: ', error.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <table>
        <thead>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="username"> username </label>
            </td>
            <td>
              <input
                type="text"
                id="username"
                className="text-zinc-900	"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="mt-3 w-full border border-white">
        submit
      </button>
      <button
        type="button"
        onClick={handleSignIn}
        className="mt-3 w-full border border-white"
      >
        sign in
      </button>
    </form>
  );
}
