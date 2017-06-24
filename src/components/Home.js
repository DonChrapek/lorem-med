import '../styles/Home.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <section id='home-content'>
        <div className='main-banner'>
          <div className='main-banner-content'>
            <span>Access anytime and anywhere</span>
            <h3>Lorem ipsum sit amet dolor</h3>
            <div className='third-div content-centered'>
              <h3>Locations</h3>
              <span>Find our all locations</span>
              <Link to='/locations'>
                <button className='btn-blue block centered uppercase btn-rounded'>Get directions</button>
              </Link>
            </div>
            <div className='third-div content-centered'>
              <h3>Our team</h3>
              <span>Find by name, specialization</span>
              <Link to='/team'>
                <button className='btn-blue block centered uppercase btn-rounded'>Find a doctor</button>
              </Link>
            </div>
            <div className='third-div content-centered'>
              <h3>Appointments</h3>
              <span>Make or manage your appointments</span>
              <Link to='/appointments'>
                <button className='btn-blue block centered uppercase btn-rounded'>Appointments</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home;