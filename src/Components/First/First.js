import React, { useContext, useEffect } from 'react';
import POP from "../../Assets/Image/banner.png";
import LOl from "../../Assets/Image/app-store.png";
import "./First.css";
import Blog from "../Blog/Blog";

import Reveiw from '../Review/Reveiw';
import useBlog from '../../Hooks/useBlog';

const First = () => {

  const [blogs, setBlogs] = useBlog();
  const limited = blogs.slice(0,3);
    
    return (
        <div classNameName="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center h-100 container pop">
              <h1 className="display-2 fx-bold text-blue">Showcase your app beautifully and gorgeusly</h1>
              <p className="fs-5">This is the best product you will have.Try to grap it for limited time.Don't miss the chance</p>
              <div className="d-flex button">
                <button>
                    <img src={LOl} alt="" />
                </button>
                   
                
                
              </div>
            </div>
          </div>
          <div className="col-md-6 pop">
            <div className="d-flex justify-content-center align-items-center py-3">
              <img className="img-fluid" src={POP} alt=""/>
            </div>
          </div>
          <h1 className='rev'>Customer Reviews</h1>
        </div>

        <div className='blogs-container'>
      {limited.map((blog, index) => (
        <Reveiw key={index} blog={blog} />
      ))}
       </div>
        
      </div>
      
    );
};

export default First;