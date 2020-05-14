import React, { useState, useEffect, useRef } from 'react';
import Scrollspy from 'react-scrollspy';
import Particles from 'react-particles-js';
import { typeWriter } from './typeWriter';

const Home = () => {
  const [isOnTop, setIsOnTop] = useState(true);
 
  const [isExpand, setIsExpand] = useState(false);
  const selector = useRef();
  useEffect(() => {
    typeWriter();
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== isOnTop) {
        setIsOnTop(scrollCheck);
      }
    });
  });

 
  const onExpandMenu = () => {
    setIsExpand(!isExpand);
    document.body.classList.toggle('noscroll-active');
    document.querySelector('.hamburger').classList.toggle('hamburger--active');
  };

  return (
    <React.Fragment>
    

      <section id='section-1' className='home-section'>
        <div className='home-banner__bg'>
        

          <div
            className={`menu-area row mx-0  ${
              isExpand ? 'menu-area-active' : ''
            }`}
          >
            <div
              className={`row mx-0 w-100 ${isOnTop ? '' : 'sticky_navigation'}`}
            >
              <div className='col-xl-3 col-6 logo-area'>
                <div className='logo'>
                  <a href='index.html' className='navbar-brand-cus'>
                    <span className='logo'>MATTHEW</span>
                  </a>
                </div>
              </div>
              <div className='col-xl-9 col-6 expand-btn-area'>
                <div className='nav-button float-right'>
                  <button
                    className='hamburger hamburger--steps'
                    onClick={onExpandMenu}
                  >
                    <div className='hamburger__line'></div>
                    <div className='hamburger__line'></div>
                    <div className='hamburger__line'></div>
                  </button>
                </div>
              </div>
            </div>
            {isExpand && (
              <React.Fragment>
                <div className='particle-area'>
                  <Particles
                    params={{
                      particles: {
                        number: {
                          value: 160,
                          density: {
                            enable: false,
                          },
                        },
                        size: {
                          value: 3,
                          random: true,
                          anim: {
                            speed: 4,
                            size_min: 0.3,
                          },
                        },
                        line_linked: {
                          enable: false,
                        },
                        move: {
                          random: true,
                          speed: 1,
                          direction: 'top',
                          out_mode: 'out',
                        },
                      },
                      interactivity: {
                        events: {
                          onhover: {
                            enable: true,
                            mode: 'bubble',
                          },
                          onclick: {
                            enable: true,
                            mode: 'repulse',
                          },
                        },
                        modes: {
                          bubble: {
                            distance: 250,
                            duration: 2,
                            size: 0,
                            opacity: 0,
                          },
                          repulse: {
                            distance: 400,
                            duration: 4,
                          },
                        },
                      },
                    }}
                  />
                </div>
                <div className='nav-area'>
                  <nav>
                    <Scrollspy
                      className='nav navbar-nav navbar-right'
                      items={[
                        'section-1',
                        'section-2',
                        'section-3',
                        'section-4',
                        'section-5',
                        'section-6',
                        'section-7',
                        'section-8',
                      ]}
                      currentClassName='active'
                    >
                      <li className=''>
                        <a className='smooth-menu' href='#section-1'>
                          Home
                        </a>
                      </li>
                      <li className=''>
                        <a className='smooth-menu' href='#section-2'>
                          About
                        </a>
                      </li>

                      <li className=''>
                        <a className='smooth-menu' href='#section-3'>
                          Skills
                        </a>
                      </li>

                      <li className=''>
                        <a className='smooth-menu' href='#section-4'>
                          Services
                        </a>
                      </li>

                      <li className=''>
                        <a className='smooth-menu' href='#section-5'>
                          Experience
                        </a>
                      </li>

                      <li className=''>
                        <a className='smooth-menu' href='#section-6'>
                          Portfolio
                        </a>
                      </li>

                      <li className=''>
                        <a className='smooth-menu' href='#section-7'>
                          Blog
                        </a>
                      </li>

                      <li className=''>
                        <a className='smooth-menu' href='#section-8'>
                          Contact
                        </a>
                      </li>
                    </Scrollspy>
                  </nav>
                </div>
              </React.Fragment>
            )}
          </div>

        

          <div className='banner-table'>
            <div className='banner-table-cell'>
              <div className='welcome-text'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12 col-xs-12'>
                      <section className='intro animate-scale'>
                        {/* <div className='img-area'>
                          <img src='images/home/1.png' alt='' />
                        </div> */}

                        {/* <h3>I'm Thang</h3> */}
                        <div ref={selector} className='header-caption'>
                          <h1 className='cd-headline clip is-full-width'>
                            <span className='cd-words-wrapper'>
                              <b className='is-visible'>Welcome !</b>
                              <b className='is-hidden'>I am Matthew</b>
                              <b className='is-hidden'>Scroll down for more.</b>
                            </span>
                          </h1>
                        </div>
                      </section>

                      <div className='clearfix'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='social-mouse-area'>
            <div className='social-icon'>
              <ul className='social-icon-list'>
                <li>
                  <button className='button'>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'
                      title='Facebook'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-facebook' aria-hidden='true'></i>
                    </a>
                    <div className='button__horizontal'></div>
                    <div className='button__vertical'></div>
                  </button>
                </li>
                <li>
                  <button className='button'>
                    <a
                      href='https://twitter.com/'
                      target='_blank'
                      title='Twitter'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-twitter'></i>
                    </a>
                    <div className='button__horizontal'></div>
                    <div className='button__vertical'></div>
                  </button>
                </li>
                <li>
                  <button className='button'>
                    <a
                      href='https://www.linkedin.com/'
                      target='_blank'
                      title='Linkedin'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-linkedin'></i>
                    </a>
                    <div className='button__horizontal'></div>
                    <div className='button__vertical'></div>
                  </button>
                </li>
                <li>
                  <button className='button'>
                    <a
                      href='https://plus.google.com/'
                      target='_blank'
                      title='Google Plus'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-google-plus'></i>
                    </a>
                    <div className='button__horizontal'></div>
                    <div className='button__vertical'></div>
                  </button>
                </li>
                <li>
                  <button className='button'>
                    <a
                      href='https://www.pinterest.com/'
                      target='_blank'
                      title='Pinterest'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-pinterest'></i>
                    </a>
                    <div className='button__horizontal'></div>
                    <div className='button__vertical'></div>
                  </button>
                </li>
              </ul>
            </div>
            <div className='mouse-area'>
              <a className='mouse-scroll hidden-xs dadada' href='#about'>
                <span className='mouse'>
                  <span className='mouse-movement'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
