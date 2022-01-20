import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h3>Home Component</h3>
      <div className="homeRoutes">
        <span>
          <Link to="/messages">Messages</Link>
        </span>
        <span>
          <Link to="/profile">Profile</Link>
        </span>
      </div>
      <Outlet />
    </div>
  );
};
export default Home;
