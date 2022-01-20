import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Messages from './Components/Messages';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />}>
            <Route path="messages" element={<Messages />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
