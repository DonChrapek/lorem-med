import '../styles/Footer.css';

import React from 'react';

const Footer = () => {
    return (
      <footer>
        <section id='contact'>
          <div className='section-title'>
            <h3>Contact us</h3>
          </div>
          <div id='contact-content'>
            <form id='contact-us'>
              <input type='text' name='name' placeholder='Name' /><br/>
              <input type='text' name='email' placeholder='E-mail' /><br/>
              <textarea /><br/>
              <input type='submit' value='Send' className='btn-white' />
            </form>
          </div>
        </section>
        <div id='copy'>
          <span>Daniel Chrapczynski &copy;2017</span>
        </div>
      </footer>
    );
}

export default Footer;