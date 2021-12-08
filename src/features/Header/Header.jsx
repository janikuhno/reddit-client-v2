import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p>
            Reddit<span>Minimal</span>
          </p>
        </Link>
      </div>
      <form className="search">
        <input type="text" placeholder="Search" aria-label="Search posts" />
        <button type="submit" aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
