/**
 * @author gaopeng
 *
 * @date 2018/5/27 上午10:18
 *
 * 通用的链接单行按钮
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const LineLink = ({href, title, extra}) => {
    return (
        <a href={href} className='lineLink'>
            <div className="lineLink__title">{title}</div>
            <div className="lineLink__extra">{extra}</div>
            <i className='lineLink__arrow'/>
        </a>
    );
};

LineLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    extra: PropTypes.string,

};

export default LineLink;
