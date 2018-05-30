/**
 * @File Artist.jsx
 *
 * @Author gaopeng
 *
 * @Date 2018/5/28 下午7:10
 *
 * @Desc
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Artist.css';

const Artist = ({ data }) => {
    return (
        <div className="artist">
            <ul className="artist__list">
                {
                    data.map((item, index) => {
                        return (
                            <li key={index} className="artist__item">
                                <a href="#" className="artistInfo">
                                    <div className="artistInfo__image" />
                                    <div>
                                        <dl className="artistInfo__name" >{item.name}</dl>
                                        <dd className="artistInfo__job" >{item.job}</dd>
                                    </div>
                                </a>
                            </li>
                        );
                    })
                }

            </ul>
        </div>
    );
};

Artist.propTypes = {
    data: PropTypes.array.isRequired
};

export default Artist;
