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
            <div id='footer-contact-form' className='half-div'>
              <form id='contact-us'>
                <input type='text' name='name' placeholder='Name' /><br/>
                <input type='text' name='email' placeholder='E-mail' /><br/>
                <textarea /><br/>
                <input type='submit' value='Send' className='btn-white' />
              </form>
            </div>
            <div id='footer-contact-data' className='half-div'>
              <h4>Lorem Med ltd.</h4>
              <span>
                Street: Lorem Ave. 158<br/>
                City: 96029 Lipsm <br/>
                Phone: 44 2242 212 3<br/>
                E-mail: <a href='mailto: lorem@med.uk'>lorem@med.uk</a>
              </span>
            </div>
          </div>          
        </section>
        <div id='copy'>
          <span>Daniel Chrapczynski &copy;2017</span>
        </div>
      </footer>
    );
}

export default Footer;