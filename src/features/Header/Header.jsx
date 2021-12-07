import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>
          Reddit<span>Minimal</span>
        </p>
      </div>
      <form className="search">
        <input type="text" placeholder="Search" aria-label="Search posts" />
        <button type="submit" aria-label="Search"><HiOutlineSearch /></button>
      </form>
    </header>
  );
};

export default Header;
