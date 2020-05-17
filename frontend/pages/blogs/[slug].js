import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { readBlog, listRelatedBlogs } from '../../actions/blogAction';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import CardRelatedBlog from '../../components/blog/CardRelatedBlog';
import Comment from '../../components/blog/Comment';
import {
  getCommentsByBlogID,
  createComment,
  createCommentReply,
} from '../../actions/commentAction';

const SingleBlog = ({ blog, router, query }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [replyCommentShowing, setReplyCommentShowing] = useState(false);
  const [replyCommentValues, setReplyCommentValues] = useState({
    error: '',
    success: '',
    replyCommentFormData: '',
    replyCommentUsername: '',
    replyCommentEmail: '',
    replyCommentText: '',
  });

  const [values, setValues] = useState({
    error: '',
    success: '',
    formData: '',
    username: '',
    email: '',
    commentText: '',
  });

  const loadRelatedBlog = () => {
    listRelatedBlogs({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelatedBlogs(data);
      }
    });
  };

  const loadComments = () => {
    getCommentsByBlogID(blog._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComments(data);
      }
    });
  };

  //fire loadRelatedBlog() when componentDidMount
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    setReplyCommentValues({
      ...replyCommentValues,
      replyCommentFormData: new FormData(),
    });
    loadRelatedBlog();
    loadComments();
  }, []);

  const { error, success, formData, username, commentText, email } = values;
  const {
    replyCommentUsername,
    replyCommentFormData,
    replyCommentText,
    replyCommentEmail,
  } = replyCommentValues;

  const showRelatedBlogs = () => {
    return relatedBlogs.map((blog, index) => (
      <div key={index} className='col-md-4'>
        <article>
          <CardRelatedBlog blog={blog} />
        </article>
      </div>
    ));
  };

  const head = () => (
    <Head>
      <title>
        {blog.title} | {APP_NAME}
      </title>
      <meta name='description' content={blog.mdesc} />
      <link rel='canonical' href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property='og:title' content={`${blog.title} | ${APP_NAME}`} />
      <meta name='og:description' content={blog.mdesc} />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta name='og:site_name' content={`${APP_NAME}`} />

      {/* social-media */}
      <meta name='og:image' content={`${API}/blog/photo/${blog.slug}`} />
      <meta
        name='og:image:secure_url'
        content={`${DOMAIN}/static/images/avatar.jpg`}
      />
      <meta name='og:image:type' content='image/jpg' />
      <meta name='fb:app_id' content={`${FB_APP_ID}`} />
    </Head>
  );

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

  const toggleReplyCommentForm = (index) => {
    let formId = `replyCommentForm-${index}`;
    document.getElementById(formId).style.display =
      document.getElementById(formId).style.display == 'none'
        ? 'block'
        : 'none';
  };

  const handleChangeReply = (name, commentId) => (e) => {
    const value = e.target.value;
    //  console.log(formData);
    if (commentId) {
      replyCommentFormData.set('commentId', commentId);
      replyCommentFormData.set(name, value);
    } else {
      replyCommentFormData.set(name, value);
      replyCommentFormData.set('blogId', blog._id);
    }

    setReplyCommentValues({
      ...replyCommentValues,
      [name]: value,
      replyCommentFormData,
    });
  };

  const submitReplyComment = (e) => {
    e.preventDefault();
    // for (var value of replyCommentFormData.values()) {
    //   console.log(value);
    // }
    createCommentReply(replyCommentFormData).then((data) => {
      if (data.error) {
        console.log('err:', data.error);
        setReplyCommentValues({ ...replyCommentValues, error: data.error });
      } else {
        setReplyCommentValues({
          ...replyCommentValues,

          error: '',
          success: `Comment created successfully`,
        });
        loadComments();
      }
    });
  };

  const showBlogComments = () => {
    return comments.map((comment, index) => {
      return (
        <li key={index} className='media mb-5'>
          <img
            className='mr-3 d-flex rounded-circle'
            src={`${DOMAIN}/static/images/n1.png`}
            alt='Generic placeholder image'
            style={{ width: '64px', height: '64px' }}
          />
          <div className='media-body'>
            <h5 className='mt-0 mb-1'>{comment.username}</h5>
            <p>{comment.email}</p>
            {comment.commentText}
            {comment.reply.map((reply, replyIndex) => {
            console.log(reply)
              return (
                <div key={replyIndex} className='media-body ml-5 mt-2'>
                  <h5 className='mt-0 mb-1'>{reply.username}</h5>
                  <p>{reply.email}</p>
                  {reply.replyText}
                </div>
              );
            })}
          </div>
          <button onClick={() => toggleReplyCommentForm(index)}>
            Reply Comment
          </button>

          <form
            id={`replyCommentForm-${index}`}
            onSubmit={submitReplyComment}
            style={{ display: 'none' }}
          >
            <h5>Leave a comment</h5>
            <input
              type='text'
              value={comment._id}
              onChange={handleChangeReply('commentId')}
              name='commentId'
              className='form-control'
            />
            <div className='form-group'>
              <input
                type='text'
                value={replyCommentUsername}
                onChange={handleChangeReply('replyCommentUsername')}
                name='replyCommentUsername'
                placeholder='Username'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                value={replyCommentEmail}
                onChange={handleChangeReply('replyCommentEmail')}
                name='replyCommentEmail'
                placeholder='Email'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <textarea
                value={replyCommentText}
                onChange={handleChangeReply('replyCommentText', comment._id)}
                type='text'
                name='replyCommentText'
                row={3}
                className='form-control'
                placeholder='Comment...'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Reply
            </button>
          </form>
        </li>
      );
    });
  };

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    formData.set(name, value);
    formData.set('blogId', blog._id);
    setValues({ ...values, [name]: value, formData, error: '' });
  };

  const submitComment = (e) => {
    e.preventDefault();
    // for (var value of formData.values()) {
    //   console.log(value);
    // }
    createComment(formData).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,

          error: '',
          success: `Comment created successfully`,
        });
        loadComments();
      }
    });
  };

  return (
    <React.Fragment>
      {head()}
   
        <main>
          <article>
            <div className='container-fluid'>
              <section>
                <div className='row mx-auto' style={{ marginTop: '-30px' }}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className='img img-fluid featured-image'
                  />
                </div>
              </section>
              <section>
                <div className='container'>
                  <h1 className=' pb-3 text-center font-weight-bold'>
                    {blog.title}
                  </h1>
                  <p className='lead mt-3 mark'>
                    Written by {blog.postedBy.name} | Published in{' '}
                    {moment(blog.updatedAt).format('MMMM Do YYYY')}
                  </p>
                </div>

                <div className='pb-3'>
                  {showBlogCategories(blog)}
                  {showBlogTags(blog)}
                  <br />
                  <br />
                </div>
              </section>
            </div>

            <div className='container'>
              <section>
                <div className='col-md-12 lead'>{renderHTML(blog.body)}</div>
              </section>
            </div>

            <div className='container pb-5'>
              <h4 className='text-center pt-5 pb-5 h2'>Related Blogs</h4>
              <hr />
              <div className='row mx-auto'>{showRelatedBlogs()}</div>
            </div>
            <div className='container pb-5'>
              <div className='row mx-auto'>
                <div className='col-md-12'>
                  <ul className='list-unstyled'>{showBlogComments()}</ul>
                </div>
              </div>
              <div className='container pb-5'>
                <hr />
                <form onSubmit={submitComment}>
                  <h5>Leave a comment</h5>
                  <div className='form-group'>
                    <input
                      type='text'
                      value={username}
                      onChange={handleChange('username')}
                      name='username'
                      placeholder='Username'
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      value={email}
                      onChange={handleChange('email')}
                      name='email'
                      placeholder='Email'
                      className='form-control'
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      value={commentText}
                      onChange={handleChange('commentText')}
                      type='text'
                      name='comment'
                      row={3}
                      className='form-control'
                      placeholder='Comment...'
                    />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </article>
        </main>
     
    </React.Fragment>
  );
};

//this will get slug before client side was rendered so we can only access slug parameter through query instead of router
//router is used when client side was rendered successfully
SingleBlog.getInitialProps = ({ query }) => {
  return readBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data, query };
    }
  });
};

export default withRouter(SingleBlog);
