import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MovieItem = ({actor, description, director, name, poster, score, tags}) => {
    return (
        <div className='movieItem'>
            <div className='movieItem__poster'>
                <img src="/source/movie/timg.jpeg" alt=""/>
            </div>
            <div className='movieItem__detail'>
                 <div className='movieItem__name'>{name}</div>
                 <div className='movieItem__score'>
                    观众评分
                    <span>{score}</span>
                 </div>
                 <div className='movieItem__director'>导演：{director}</div>
                 { actor && <div className='movieItem__actor'>主演：{actor}</div>}
                 <div className='movieItem__tag'>
                 {
                     tags.map((item, index) => {
                         if(index % 2 === 0) {
                            return <span key={index} className='tTag tTag--red'>{item}</span>;
                         }

                        return <span key={index} className='tTag tTag--blue'>{item}</span>;
                     })
                 }
                 </div>
            </div>
            <div className='movieItem__btn'>
                <button className='tBtn'>购票</button>
                <span className='movieItem__price'>9.9元</span>
            </div>
        </div>
    );
};

MovieItem.propTypes = {
    actor: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    name: PropTypes.string,
    poster: PropTypes.string,
    score: PropTypes.number,
    tags: PropTypes.array
};

export default MovieItem;