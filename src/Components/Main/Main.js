import React, { useContext, useEffect } from 'react';
import useBlog from '../../Hooks/useBlog';
// import { BlogContext } from '../../App';
import Reveiw from '../Review/Reveiw';

const Main = () => {
    const [blogs, setBlogs] = useBlog();
    

 

    return (
        <div className='blogs-container'>
         
              {blogs.map((blog, index) => (
        <Reveiw key={index} blog={blog} />
      ))}
      
     
        </div>
    );
};

export default Main;