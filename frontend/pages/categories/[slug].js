import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { readBlog, listRelatedBlogs } from '../../actions/blogAction';
import { singleCategory } from '../../actions/categoryAction';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import CardBlog from '../../components/blog/CardBlog';

const Categories = ({ category, blogs, query, categories }) => {
  const [separatorHeight, setSeparatorHeight] = useState(0);
  const [categoryWithLength, setCategoryWithLength] = useState([]);

  const head = () => (
    <Head>
      <title>
        {category.name} | {APP_NAME}
      </title>
      <meta
        name='description'
        content={`Categories on Matthew's Blog ${category.name}`}
      />
      <link rel='canonical' href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property='og:title' content={`${category.name} | ${APP_NAME}`} />
      <meta
        name='og:description'
        content={`Categories on Matthew's Blog ${category.name}`}
      />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${DOMAIN}/categories/${query.slug}`} />
      <meta name='og:site_name' content={`${APP_NAME}`} />

      {/* social-media */}
      <meta name='og:image' content={`${DOMAIN}/static/images/avatar.jpg`} />
      <meta
        name='og:image:secure_url'
        content={`${DOMAIN}/static/images/avatar.jpg`}
      />
      <meta name='og:image:type' content='image/jpg' />
      <meta name='fb:app_id' content={`${FB_APP_ID}`} />
    </Head>
  );
  const setHeight = (height) => {
    // console.log(height)
    setSeparatorHeight(height);
  };
  return (
    <React.Fragment>
      {head()}
      <Layout categories={categories} activeSlide={category}>
        <main>
          <div className='container-fluid text-center'>
            <header>
              <div className='col-md-12 mt-3'>
                <h1 className='display-4 font-weight-bold'>{category.name}</h1>
                {blogs.map((blog, index) => (
                  <div>
                    <CardBlog
                      key={index}
                      blog={blog}
                      getHeightHeader={(height) => setHeight(height)}
                    />
                    <hr />
                  </div>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Categories.getInitialProps = ({ query }) => {
  return singleCategory(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        category: data.category,
        blogs: data.blogs,
        query,
        categories: data.listCategories,
      };
    }
  });
};

export default Categories;
