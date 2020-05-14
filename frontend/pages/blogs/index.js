import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { getCategories } from '../../actions/categoryAction';
import CardBlog from '../../components/blog/CardBlog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import FullWidthSlider from '../components/ImageSlider/fullWidthSlider';

const Blogs = ({ router, categories }) => {
  const [modalWidth, setModalWidth] = useState(0);
 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setModalWidth(window.innerWidth);
    }
  }, []);

  const receiveActiveSlide = (activeSlide) => {
    setActiveSlide(activeSlide)
  }

  const showCategoriesSlider = () => {
    var tempSlides = [];
    for (var i = 0; i < categories.length; i++) {
      let tempSlide = { images: '', caption: '', name: '', index: 0, slug: '' };
      tempSlide.images = `${API}/category/photo/${categories[i].slug}`;
      tempSlide.caption = categories[i].categoryDesc;
      tempSlide.name = categories[i].name;
      tempSlide.index = i;
      tempSlide.slug = categories[i].slug;
      tempSlides.push(tempSlide);
    
    }

    return (
      modalWidth !== 0 && (
        <FullWidthSlider
          fullWidth={true}
          modalWidth={modalWidth}
          slides={tempSlides}
         
        />
      )
    );
  };

 
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url('../../static/images/hinhblog44.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
     
      {showCategoriesSlider()}
    </div>
  );
};
//getInitialProps is used only in page not in component
Blogs.getInitialProps = () => {
  return getCategories().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        categories: data,
      };
    }
  });
};

export default withRouter(Blogs); //getInitialProps use for SSR(server side render) => SEO
