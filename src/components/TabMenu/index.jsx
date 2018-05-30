import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.css';

const TabMenu = ({ current }) => {
    const activeClassName = 'tabMenu__btn--active';
    return (
        <div className='tabMenu'>
            <Link to='/' className={`tabMenu__btn ${current === 'movie' && activeClassName}`}>
                <i className='tabMenu__icon tabMenu__icon--movie'/>
                <span className='tabMenu__text'>电影</span>
            </Link>

            <Link to='/user' className={`tabMenu__btn ${current === 'user' && activeClassName}`}>
                <i className='tabMenu__icon tabMenu__icon--me'/>
                <span className='tabMenu__text'>我的</span>
            </Link>
        </div>
    );
};

TabMenu.propTypes = {
    current: PropTypes.string.isRequired
};

export default TabMenu;

