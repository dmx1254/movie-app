import React from 'react';
import { URL_IMG,  IMG_SIZE_XL, } from "../config";
import { CircularProgress } from '@material-ui/core';
import "./wrapper.css";


const Wrapper = ({ data, handleLeftClick, handleRightClick }) => {


    if(!data) return <CircularProgress />
    return (
        <div className='wrapper__fetch'>
            <img src={URL_IMG+IMG_SIZE_XL+data.backdrop_path} alt="movie" />
            <div className="wrapper__fetch-container">
                <h1>{data.original_title}</h1>
                <p>{data.overview.toString().substring(0, 200)}...</p>
            </div>
            <i className="fas fa-chevron-left" onClick={handleLeftClick}></i>
            <i className="fas fa-chevron-right" onClick={handleRightClick}></i>
        </div>
    );
};

export default Wrapper;