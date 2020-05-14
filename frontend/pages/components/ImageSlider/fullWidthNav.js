/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const FullWidthNav = (props) => {
  const { active, index, slide } = props;
  const handleClick = (index) => {
    //  console.log('index: ',index)
    props.handleDotsClick(index);
  };
  return (
    <li className={`item -${active ? 'active' : ''}`}>
      <a className='link' title={slide.name} onClick={() => handleClick(slide.index)}>
        {slide.name}
      </a>
    </li>
  );
};

const FullWidthNavs = (props) => {
  const { slides, activeSlide } = props;
  return (
    <ul class='navbar-category-menu -twitter'>
      {slides.map((slide, index) => (
        <FullWidthNav
          key={index}
          active={activeSlide === index}
          slide={slide}
          {...props}
        />
      ))}
    </ul>
  );
};

export default FullWidthNavs;
