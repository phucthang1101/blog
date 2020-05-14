import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  useEffect(()=>{
    if(isLoading)
    document.body.classList.toggle('noscroll-active');
    else
    document.body.classList.remove('noscroll-active');

  },[isLoading])
  return (
    <React.Fragment>
    <div className={`loader_bg noscroll-active ${isLoading ? '' : 'to-hide'}`}>
      <div className={`loader  ${isLoading ? '' : 'to-hide'}`}></div>
    </div>
      <Home />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
   </React.Fragment>
  );
};

export default Index;
