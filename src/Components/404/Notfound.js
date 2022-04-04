import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>You are lost,...!Click back button to navigate the site</h1>
            <button className='back-button' onClick={() => navigate(-1)}>
                <BsChevronLeft />
                <p>Back</p>
            </button>


        </div>
    );
};

export default Notfound;