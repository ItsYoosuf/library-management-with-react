import React from 'react';
import { Fragment } from 'react';
import '../Assets/styles/navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Fragment>
    <nav id="options">
  <Link to="/add-book" className="butn">Add Book</Link>
  <a href="/add-user" className="butn">Add User</a>
  <a href="/borrow-book" className="butn">Borrow Book</a>
  <a href="/return-book" className="butn">Return Book</a>
  <a href="/display-books" className="butn">Display Books</a>
  <a href="/display-users" className="butn">Display Users</a>
  <a href="/display-specific-book" className="butn">Display Specific Book</a>
  <a href="/" className="butn">Refresh</a>
</nav>
    </Fragment>
  );
};

export default Navbar;