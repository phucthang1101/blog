import React from 'react';
import { DOMAIN } from '../../../config';

const About = () => {
  return (
    <section id='section-2' className='about-section'>
      <div className='about-section__title text-center mb-40'>
        <div className='row mx-0'>
          <div className='service-title'>
            <h2>
              About <span>Me </span>
            </h2>
            <div className='horizontal-line'>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
          </div>
        </div>
       
      </div>
      <div className='about-section__content row mx-5 mt-5'>
        <div className='col-md-5 col-sm-12'>
          <div className='about-section__content-avatar'>
            <img src={`${DOMAIN}/static/images/avatar.jpg`} alt='about' />
          </div>
        </div>
        <div className='col-md-7 col-sm-12'>
          <div className='about-section__content--right'>
            <h2>Front-End developer</h2>
            <p>
              I am <span>Matthew Tran</span>. I am a simple , co-operative,
              responsible and weird person. I always analyze things carefully
              before starting any work.
            </p>
            <p>
              I have vast experience in HTML5, CSS3, Javascript, JQuery, Node js
              and on. I have already completed over 500 projecs of different
              buyer throughout the world.{' '}
            </p>

            <div className='row'>
              <div className='col-sm-6'>
                <ul className='about-list'>
                  <li>
                    {' '}
                    <span className='title'>Name</span>{' '}
                    <span className='value'>Matthew Tran</span>{' '}
                  </li>
                  <li>
                    {' '}
                    <span className='title'>Age</span>{' '}
                    <span className='value'>20 Years</span>{' '}
                  </li>
                  <li>
                    {' '}
                    <span className='title'>Email</span>{' '}
                    <span className='value'>phucthangvt1101@gmail.com</span>{' '}
                  </li>
                </ul>
              </div>
              <div className='col-sm-6'>
                <ul className='about-list'>
                  <li>
                    {' '}
                    <span className='title'>Phone</span>{' '}
                    <span className='value'>+123 456 789 012</span>{' '}
                  </li>
                  <li>
                    {' '}
                    <span className='title'>Address</span>{' '}
                    <span className='value'>124, Brik Lane</span>{' '}
                  </li>
                  <li>
                    {' '}
                    <span className='title'>Hobby</span>{' '}
                    <span className='value'>
                      Coding , Blowing balloons by my nose
                    </span>{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <div className='trapdoor'>
                <div className='top door'></div>
                <div className='bottom door'></div>
                <a
                  href='#contact'
                  className='twitter-follow-button'
                  data-show-count='false'
                  data-size='large'
                  data-dnt='false'
                >
                  <i className='fa fa-arrow-down' aria-hidden='true'></i>
                </a>
              </div>
              {/* <a href='#skills-bd' className='skill-btn btn-a'>
              my skills
            </a> */}
              <div className='ct-btn'>
                <button className='border-neon'>Download CV</button>
              </div>
              {/* <div>
            <a
              href='images/about/demo-cv.png'
              className='down-btn btn-a'
              download=''
            >
              download cv
            </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
