import React from "react";
import "./Blog.css";
import Indicator from "../../Assets/Image/indicator.svg";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const { imageURL, title, blog: blogBody, admin, _id, month, sell, investment } = blog;
  return (
    <div>
      <div className='blog-container'>
        <div className='blog-image-container'>
          <img src={imageURL} alt='' />
        </div>
        <div className='blog-content'>
          <div>
            <h1>{title}</h1>

            <div className='author-name'>
              <img src={Indicator} alt='' />

            </div>
          </div>
          <p className='blog-preview'>Month:{month}</p>
          <p className='blog-preview'>Sell:{sell}</p>
          <p className='blog-preview'>Investment:{investment}</p>
          <p className='blog-preview'>

            {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
            <span className='read-more' onClick={() => navigate(`/blog/${_id}`)}>
              ...Read More
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Blog;
