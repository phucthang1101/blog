import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogWithCategoriesAndTags } from '../../actions/blogAction';
import CardBlog from '../../components/blog/CardBlog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  router,
  blogLimit,
  blogSkip,
}) => {
  const head = () => (
    <Head>
      <title>{APP_NAME}</title>
      <meta
        name='description'
        content='Programming blogs and practice with .NET & JS to become web developer'
      />
      <link rel='canonical' href={`${DOMAIN}${router.pathname}`} />
      <meta
        property='og:title'
        content={`Sharing programming knowledge | ${APP_NAME}`}
      />
      <meta
        name='og:description'
        content='Programming blogs and practice with .NET & JS to become web developer'
      />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${DOMAIN}${router.pathname}`} />
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

  const [limit, setLimit] = useState(blogLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className='btn btn-primary btn-lg'>
          Load More
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, index) => {
      return (
        <article key={index}>
          <CardBlog blog={blog} />
          <hr />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((category, index) => (
      <Link href={`/categories/${category.slug}`} key={index}>
        <a className='btn btn-primary mr-1 ml-1 mt-3'>{category.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((tag, index) => (
      <Link href={`/tags/${tag.slug}`} key={index}>
        <a className='btn btn-outline-primary mr-1 ml-1 mt-3'>{tag.name}</a>
      </Link>
    ));
  };

  const showLoadedBlogs = () => {
    //console.log('loadedBlogs: ', loadedBlogs);
    return loadedBlogs.map((blog, index) => (
      <article key={index}>
        <CardBlog blog={blog} />
      </article>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className='container-fluid'>
            <header>
              <div className='col-md-12 pt-3'>
                <h1 className='display-4 font-weight-bold text-center'>
                  All Blogs
                </h1>
              </div>
              <section>
                <div className='pb-5 text-center'>
                  {showAllCategories()}
                  <br />
                  {showAllTags()}
                </div>
              </section>
            </header>
          </div>
          <div className='container-fluid all-blogs-inner'>
            <div className='row mx-auto'>
              <div className='col-12 col-md-9'>{showAllBlogs()}</div>
              <div className='d-none d-md-block col-md-3'></div>
            </div>
          </div>
          <div className='container-fluid'>{showLoadedBlogs()}</div>
          <div className='text-center pt-5 pb-5 text-center'>
            {loadMoreButton()}
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

//getInitialProps is used only in page not in component
Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 2;
  return listBlogWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogLimit: limit,
        blogSkip: skip,
      };
    }
  });
};

export default withRouter(Blogs); //getInitialProps use for SSR(server side render) => SEO
