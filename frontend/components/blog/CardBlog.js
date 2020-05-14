import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const CardBlog = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((category, index) => {
      return (
        <Link key={index} href={`/categories/${category.slug}`}>
          <a className='btn btn-primary mr-1 ml-1 mt-3'>{category.name}</a>
        </Link>
      );
    });

  const showBlogTags = (blog) =>
    blog.tags.map((tag, index) => {
      return (
        <Link key={index} href={`/tags/${tag.slug}`}>
          <a className='btn btn-outline-primary mr-1 ml-1 mt-3'>{tag.name}</a>
        </Link>
      );
    });

  return (
    <div className='lead pb-4'>
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <h2 className=' pt-3 pb-3 font-weight-bold'>{blog.title}</h2>
          </a>
        </Link>
      </header>
      <section>
        <p className='mark ml-1 pt-2 pb-2'>
          Written by {blog.postedBy.name} | Published in{' '}
          {moment(blog.updatedAt).format('MMMM Do YYYY')}
        </p>
      </section>
      <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
        <br />
        <br />
      </section>
      <section>
        <div className='row'>
          <div className='col-md-4'>
            <section>
              <img
                className='img img-fluid'
                style={{ maxHeight: 'auto', width: '100%' }}
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
              />
            </section>
          </div>
          <div className='col-md-8'>
            <section>
              <div className='pb-3'>{renderHTML(blog.excerpt)}</div>

              <Link href={`/blogs/${blog.slug}`}>
                <a className='btn btn-primary pt-2'>Read more</a>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardBlog;
