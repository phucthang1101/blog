import Header from './Header';

const Layout = (props) => {
  
  return (
    <React.Fragment>
     <Header {...props}/>
      {props.children}
      <p>footer</p>
    </React.Fragment>
  );
};

export default Layout;
