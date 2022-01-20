import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Link to="/home">Home</Link> | {''}
      <Link to="/contact">Contact</Link>
      <Outlet />
    </div>
  );
}
