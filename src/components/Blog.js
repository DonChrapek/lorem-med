import '../styles/Blog.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
      <section id='blog'>
        <div className='centered section-title'>
          <h3>Recent articles</h3>
        </div>
        <article className='half-wide'>
          <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
        </article>
        <article className='half-wide'>
          <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
        </article>
        <article className='half-wide'>
          <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
        </article>
        <article className='half-wide'>
          <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
        </article>
        <article className='half-wide'>
          <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
        </article>
        <article className='half-wide'>
          <div className='article-img'>
                <Link to='/blog'><img src='../images/blog/article1.jpg' alt='Lorem ipsum' /></Link>
              </div>
              <h4 className='article-title'>Lorem ipsum</h4>
              <span className='article-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
        </article>
      </section>
    );
}

export default Blog;