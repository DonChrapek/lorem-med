import '../styles/Home.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <section id='home-content'>
        <section className='main-banner'>
          <div className='main-banner-content'>
            <span>Access anytime and anywhere</span>
            <h3>Lorem ipsum sit amet dolor</h3>
            <div className='third-wide content-centered'>
              <h3>Locations</h3>
              <span>Find our all locations</span>
              <Link to='/locations'>
                <button className='btn-blue block centered-block uppercase btn-rounded'>Get directions</button>
              </Link>
            </div>
            <div className='third-wide content-centered'>
              <h3>Our team</h3>
              <span>Find by name, specialization</span>
              <Link to='/team'>
                <button className='btn-blue block centered-block uppercase btn-rounded'>Find a doctor</button>
              </Link>
            </div>
            <div className='third-wide content-centered'>
              <h3>Appointments</h3>
              <span>Make or manage your appointments</span>
              <Link to='/appointments'>
                <button className='btn-blue block centered-block uppercase btn-rounded'>Appointments</button>
              </Link>
            </div>
          </div>
        </section>
        <section id='recent-blog'>
          <div className='section-title centered'>
            <h3>Recent articles</h3>
          </div>
          <div className='section-content'>
            <article className='third-wide'>
              <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </article>
            <article className='third-wide'>
              <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </article>
            <article className='third-wide'>
              <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </article>
          </div>
          <div className='centered'>
            <Link to='/blog'><button className='btn-blue btn-rounded uppercase btn-big'>Visit our blog</button></Link>
          </div>
        </section>
      </section>
    );
}

export default Home;