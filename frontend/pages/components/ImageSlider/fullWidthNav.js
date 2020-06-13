/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { DOMAIN } from '../../../config';
import SearchBlog from '../../../components/blog/SearchBlog';

const FullWidthNav = (props) => {
  const { active, index, slide, page, singleBlog } = props;
  const handleClick = (index) => {
    //  console.log('index: ',index)
    props.handleDotsClick(index);
  };

  // console.log(page);
  return (
    <React.Fragment>
      {page === 'layout' ? (
        <li className={`item -${active ? 'active' : ''}`}>
          <a
            className='link'
            title={slide.name}
            href={`${DOMAIN}/categories/${slide.slug}`}
            style={{ color: singleBlog ? 'white' : '' }}
          >
            {slide.name}
          </a>
        </li>
      ) : (
        <li className={`item -${active ? 'active' : ''}`}>
          <a
            className='link'
            title={slide.name}
            onClick={() => handleClick(slide.index)}
          >
            {slide.name}
          </a>
        </li>
      )}
    </React.Fragment>
  );
};

const FullWidthNavs = (props) => {
  const { slides, activeSlide } = props;
  const [openSearch, setOpenSearch] = useState(false);
  const toggleOpenSearch = () => {
    setOpenSearch(!openSearch);
   
  };
  useEffect(() => {
    if (openSearch) document.body.classList.toggle('has-search-open');
    else document.body.classList.remove('has-search-open');
  }, [openSearch]);

  return (
    <React.Fragment>
      <ul className='navbar-category-menu -twitter'>
        {props.page === 'layout' ? (
          <li className={`item`}>
            <a
              className='link'
              title='Home'
              href={`${DOMAIN}/blogs`}
              style={{ color: props.singleBlog ? 'white' : '' }}
            >
              Home
            </a>
          </li>
        ) : (
          <div></div>
        )}
        {slides.map((slide, index) => (
          <FullWidthNav
            key={index}
            active={activeSlide === index || activeSlide === slide.name}
            slide={slide}
            {...props}
          />
        ))}
        <li
          className={`fullWidthNavs-searchBtn__item ${
            openSearch ? 'has-search-open' : ''
          }`}
        >
          <button
            class='fullWidthNavs-searchBtn'
            onClick={() => toggleOpenSearch()}
          >
            <div class='c-close-search_wrap'>
              <div class='c-close-search_top'></div>
              <div class='c-close-search_bottom'></div>
            </div>
            <svg class='c-btn-search_icon'>
              <svg id='search' viewBox='0 0 32 32'>
                <path d='M 31.609375 29.722656 L 22.507812 20.625 C 24.273438 18.445312 25.332031 15.679688 25.332031 12.667969 C 25.332031 5.683594 19.652344 0 12.667969 0 C 5.683594 0 0 5.683594 0 12.667969 C 0 19.652344 5.683594 25.332031 12.667969 25.332031 C 15.679688 25.332031 18.445312 24.273438 20.625 22.507812 L 29.722656 31.609375 C 29.984375 31.871094 30.324219 32 30.667969 32 C 31.007812 32 31.347656 31.871094 31.609375 31.609375 C 32.128906 31.085938 32.128906 30.246094 31.609375 29.722656 Z M 12.667969 22.667969 C 7.152344 22.667969 2.667969 18.179688 2.667969 12.667969 C 2.667969 7.152344 7.152344 2.667969 12.667969 2.667969 C 18.179688 2.667969 22.667969 7.152344 22.667969 12.667969 C 22.667969 18.179688 18.179688 22.667969 12.667969 22.667969 Z M 12.667969 22.667969 ' />
              </svg>
            </svg>
          </button>
        </li>
      </ul>
      <div className={`${openSearch ? 'has-search-open' : ''}`}>
        <SearchBlog headerHeight={props.headerHeight}/>
      </div>
    </React.Fragment>
  );
};

export default FullWidthNavs;
