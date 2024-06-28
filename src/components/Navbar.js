
import React from 'react';

const Navbar = ({ changePage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" onClick={() => changePage('home')}>Orphanage</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => changePage('home')}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => changePage('about')}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => changePage('donate')}>Donate</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
