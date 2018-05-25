import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MovieItem = () => {
    return (
        <div className='movieItem'>
            <div className='movieItem__poster'>
                <img src="/source/movie/timg.jpeg" alt=""/>
            </div>
            <div className='movieItem__detail'>
                 <div className='movieItem__name'>雨果</div>
                 <div className='movieItem__score'>
                    观众评分
                    <span>9.0</span>
                 </div>
                 <div className='movieItem__director'>导演：周星驰</div>
                 <div className='movieItem__actor'>主演：史蒂夫</div>
                 <div className='movieItem__tag'>
                    <span className='tTag tTag--red'>今日最热</span>
                    <span className='tTag tTag--blue'>今日最热</span>
                 </div>
            </div>
            <div className='movieItem__btn'>
                <button className='tBtn'>购票</button>
                <span className='movieItem__price'>9.9元</span>
            </div>
        </div>
    );
};


export default MovieItem;