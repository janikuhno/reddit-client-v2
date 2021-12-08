import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p>
            Reddit<span>Minimal</span>
          </p>
        </Link>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
