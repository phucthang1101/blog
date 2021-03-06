import Layout from '../../../components/Layout';
import Link from 'next/link';
import Admin from '../../../components/auth/Admin';
import BlogCreateComponent from '../../../components/crud/BlogCreateComponent';

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 pt-5 pb-5'>
              <h2>Create a new blog</h2>
            </div>
            <div className="col-md-12">
             <BlogCreateComponent/>
            </div>
           
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
