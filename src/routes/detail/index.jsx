/**
 * @author gaopeng
 *
 * @date 2018/5/27 下午1:19
 *
 * 电影详情页面
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BaseInfo from './compoents/BaseInfo';
import ScoreSummary from './compoents/ScoreSummary';
import CollapsibleParagraph from './compoents/CollapsibleParagraph';
import Artist from './compoents/Artist';
import request from '../../helpers/request';
import './index.css';

class Detail extends React.Component {

    state = {
        artist: []
    }


    componentWillMount() {
        this.getArtist();
    }

    getArtist = async () => {
        const data = await request('/artist');
        if(data && data.length) {
            this.setState({
                artist: data
            })
        }
    };


    render() {
        const {artist} = this.state;
        return(
            <div className="detail">
                <div className="detail__top">
                    <div className="tOperator">
                        <div className="tOperator__icon tOperator__icon--back" />
                        <div className="tOperator__icon tOperator__icon--share" />
                    </div>
                    <BaseInfo />
                </div>
                <div className="detail__content">
                    <div className="detail__module">
                        <ScoreSummary />
                    </div>

                    <div className="detail__module">
                        <CollapsibleParagraph>
                            唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁
                            唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁唐仁，唐仁
                        </CollapsibleParagraph>
                    </div>

                    <div className="detail__module">
                        <h2 className='module__title'>演职人员</h2>
                        <Artist data={artist}/>
                    </div>
                </div>
            </div>
        );
    }
}

Detail.propTypes = {};

export default Detail;
