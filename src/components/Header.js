import '../styles/Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header id='main-header'>
        <h1> Hello! It's Header </h1>
        <nav id='navbar'>
          <ul className='navigation'>
            <Link to='/' className='navigation-item'><li>Home</li></Link>
            <Link to='/locations' className='navigation-item'><li>Locations</li></Link>
            <Link to='/team' className='navigation-item'><li>Our team</li></Link>
            <Link to='/blog' className='navigation-item'><li>Blog</li></Link>
            <Link to='/appointments' className='navigation-item' id='make-appointment'><li>Appointments</li></Link>
            <Link to='/signin' className='navigation-item' id='sign-in'><li>Sign in</li></Link>
            <Link to='/signup' className='navigation-item' id='sign-up'><li>Sign up</li></Link>
          </ul>
        </nav>
      </header>
    );
}

export default Header;