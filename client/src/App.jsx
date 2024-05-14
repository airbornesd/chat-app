import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <main className="italic flex min-h-screen justify-center items-center bg-stone-950 text-white md:place-items-center">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}
