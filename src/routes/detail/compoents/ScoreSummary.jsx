/**
 * @author gaopeng
 *
 * @date 2018/5/28 上午9:15
 *
 * 电影详情 - 分数统计模块
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../../components/Star';
import './ScoreSummary.css'

const ScoreSummary = (props) => {
    return (
        <div className="score-summary">

            <div className="score-summary__top">
                <div className="summary-item">
                    <div className="summary-item__value">9.3 <Star value={9}/> </div>
                    <div className="summary-item__title">观众评分123人</div>
                </div>
                <div className="summary-item">
                    <div className="summary-item__value">83%</div>
                    <div className="summary-item__title">V淘推荐度</div>
                </div>
                <div className="summary-item">
                    <div className="summary-item__value">71787</div>
                    <div className="summary-item__title">想看人数</div>
                </div>
            </div>

            <div className="summary-btn">
                <div className="summary-btn__item summary-btn__item--want"><i className='summary-btn__item--heart' />想看</div>
                <div className="summary-btn__item summary-btn__item--seen">看过</div>
            </div>

        </div>
    );
};

ScoreSummary.propTypes = {};

export default ScoreSummary;
