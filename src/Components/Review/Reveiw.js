import React from 'react';
import Indicator from "../../Assets/Image/indicator.svg";


const Reveiw = ({ blog }) => {
   
    const { imageURL, title, blog: blogBody, admin, _id, month, sell, investment,rate } = blog;
    return (
        <div className='blog'>
            
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
                    <p className='blog-preview'>Rate:{rate}</p>
                    
                    <p className='blog-preview'>Investment:{investment}</p>
                    <p className='blog-preview'>

                        {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
                        
                        
                        
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Reveiw;