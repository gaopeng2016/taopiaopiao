/**
 * @author gaopeng
 *
 * @date 2018/5/27 下午1:47
 *
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './BaseInfo.css';

const BaseInfo = (props) => {
    return (
        <div className="baseInfo">
            <div className="baseInfo__detail">
                <h3 className="baseInfo__name">唐人街探案2</h3>
                <div className="baseInfo__subTitle">Detective chinatown 2</div>
                <div className="baseInfo__other">喜剧 / 动作 / 剧情</div>
                <div className="baseInfo__other">中国大陆 | 120分钟</div>
                <div className="baseInfo__other">2018-02-16 中国大陆上映</div>
            </div>
            <div className="baseInfo__poster" style={{backgroundImage: 'url("/source/movie/timg-2.jpeg")'}}/>
        </div>
    );
};

BaseInfo.propTypes = {};

export default BaseInfo;
