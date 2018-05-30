import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
/**
 * BEM 模式
 * Block
 * Element
 * Modifier
 *
 * .block{}
 * .block__element{}
 * .block--modifier{}
 *
 */
const TopBar = ({city, showCityLayer}) => {

    return (
        <div className='topBar'>
            <div className='topBar__city' onClick={showCityLayer}>{city}</div>
            <div className='topBar__search'/>
            <div className='topBar__QR'/>
        </div>
    );
};

TopBar.propTypes = {
    city: PropTypes.string.isRequired,
    showCityLayer: PropTypes.func.isRequired
};

export default TopBar;
