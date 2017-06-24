import '../styles/Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header id='main-header'>
        <div id='header-content'>
          <div id='header-logo'>
            <div className='logo-img-container'>
              <img src='../images/logo.png' alt='logo' id='header-logo-img' />
            </div>
            <div className='logo-text-container'>
              <h1>Lorem Med</h1>
              <h3>We'll ipsum your disease</h3>
            </div>
          </div>
            <nav id='navbar'>
              <ul className='navigation'>
                <Link to='/' className='navigation-item'><li>Home</li></Link>
                <Link to='/locations' className='navigation-item'><li>Locations</li></Link>
                <Link to='/team' className='navigation-item'><li>Our team</li></Link>
                <Link to='/appointments' className='navigation-item' id='make-appointment'><li>Appointments</li></Link>
                <Link to='/blog' className='navigation-item'><li>Blog</li></Link>
                <Link to='/signup' className='navigation-item' id='sign-up'><li><button className='btn-rounded btn-blue'>Sign up</button></li></Link>
                <Link to='/signin' className='navigation-item' id='sign-in'><li><button className='btn-rounded btn-white'>Sign in</button></li></Link>
              </ul>
            </nav>
        </div>
      </header>
    );
}

export default Header;