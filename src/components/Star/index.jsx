/**
 *
 * @Author gaopeng
 *
 * @Date 2018/5/28 上午10:17
 *
 * @Desc 星星评分组件
 *
 * @Props value 分数/十分制
 *
 *          size 星星的大小
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Star = ({ value, size = 15 }) => {
    return (
        <div className="star" style={{ width: size * 5 , height: size }}>
            <div className="star-show" style={{width: size * value / 2, height: size}}/>
        </div>
    );
};

Star.propTypes = {
    value: PropTypes.number.isRequired,
    size: PropTypes.number
};

export default Star;
