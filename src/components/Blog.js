import '../styles/Blog.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
      <section id='blog'>
        <div className='centered section-title'>
          <h3>Recent articles</h3>
        </div>
            <div className='blog-row'>
              <Link to='/blog'>
                <figure className='slide-up-effect'>
                  <img src='../images/blog/article1.jpg' alt='Lorem ipsum' />
                  <figcaption>
                    <div>
                      <h3>Lorem ipsum</h3>
                    <p>Date: 26.06.2017</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
              <Link to='/blog'>
                <figure className='slide-up-effect'>
                  <img src='../images/blog/article1.jpg' alt='Lorem ipsum' />
                  <figcaption>
                    <div>
                      <h3>Lorem ipsum</h3>
                    <p>Date: 26.06.2017</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </div>
            <div className='blog-row'>
              <Link to='/blog'>
                <figure className='slide-up-effect'>
                  <img src='../images/blog/article1.jpg' alt='Lorem ipsum' />
                  <figcaption>
                    <div>
                      <h3>Lorem ipsum</h3>
                    <p>Date: 26.06.2017</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
              <Link to='/blog'>
                <figure className='slide-up-effect'>
                  <img src='../images/blog/article1.jpg' alt='Lorem ipsum' />
                  <figcaption>
                    <div>
                      <h3>Lorem ipsum</h3>
                    <p>Date: 26.06.2017</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </div>
            <div className='blog-row'>
              <Link to='/blog'>
                <figure className='slide-up-effect'>
                  <img src='../images/blog/article1.jpg' alt='Lorem ipsum' />
                  <figcaption>
                    <div>
                      <h3>Lorem ipsum</h3>
                    <p>Date: 26.06.2017</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
              <Link to='/blog'>
                <figure className='slide-up-effect'>
                  <img src='../images/blog/article1.jpg' alt='Lorem ipsum' />
                  <figcaption>
                    <div>
                      <h3>Lorem ipsum</h3>
                    <p>Date: 26.06.2017</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </div>
        <div className='clearfix'></div>
      </section>
    );
}

export default Blog;