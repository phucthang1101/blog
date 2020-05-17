import Link from 'next/link';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { isAuth, signout } from '../actions/authAction';
import { APP_NAME } from '../config';
import NProgress from 'nprogress';
import SearchBlog from './blog/SearchBlog';
import FullWidthNavs from '../pages/components/ImageSlider/fullWidthNav';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== isOnTop) {
        setIsOnTop(scrollCheck);
      }
    });
  });
  return (
    <React.Fragment>
      <div className='layout-header__area row mx-0'>
        <div
          className={`row mx-0 layout-header__content ${
            isOnTop ? '' : 'layout-header__sticky-navigation'
          }`}
        
        >
          <span className='blog-home__brand-name'>MATTHEW</span>
          <FullWidthNavs
            slides={props.categories}
            activeSlide={props.activeSlide}
            //  handleDotsClick={dotsHandleClick}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
{
  /*
    <SearchBlog/>
     <Navbar color='light' light expand='md'>
<Link href='/'>
  <NavbarBrand style={{ cursor: 'pointer' }}>{APP_NAME}</NavbarBrand>
</Link>
<NavbarToggler onClick={toggle} />
<Collapse isOpen={isOpen} navbar>
  <Nav className='ml-auto' navbar>
  <NavItem>
          <Link href='/blogs'>
            <NavLink style={{ cursor: 'pointer' }}>Blogs</NavLink>
          </Link>
        </NavItem>
    {!isAuth() && (
      <React.Fragment>
        <NavItem>
          <Link href='/signup'>
            <NavLink style={{ cursor: 'pointer' }}>Sign Up</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/signin'>
            <NavLink style={{ cursor: 'pointer' }}>Sign In</NavLink>
          </Link>
        </NavItem>
      </React.Fragment>
    )}
    {isAuth() && (
      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          onClick={() => signout(() => Router.replace('/signin'))}
        >
          Sign Out
        </NavLink>
      </NavItem>
    )}

    {isAuth() && isAuth().role === 0 && (
      <NavItem>
        <Link href='/user'>
          <NavLink style={{ cursor: 'pointer' }}>
            {`${isAuth().name}'s Dashboard`}
          </NavLink>
        </Link>
      </NavItem>
    )}
    {isAuth() && isAuth().role === 1 && (
      <NavItem>
        <Link href='/admin'>
          <NavLink style={{ cursor: 'pointer' }}>
            {`${isAuth().name}'s Dashboard`}
          </NavLink>
        </Link>
      </NavItem>
    )}
  </Nav>
</Collapse>
</Navbar> */
}
