import React from 'react';
import { useState, useEffect } from 'react';
import './Nav.css';
const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`nav-container ${show && 'nav-container-black'}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
        className="nav-logo"
      />
      <img
        src="https://avatars.githubusercontent.com/u/96927347?s=96&v=4"
        alt="MgL"
        className="nav-avatar"
      />
    </div>
  );
};

export default Nav;
