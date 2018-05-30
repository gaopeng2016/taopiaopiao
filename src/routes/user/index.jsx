import React from 'react';
import PropTypes from 'prop-types';
import LineLink from '../../components/LineLink';
import TabMenu from '../../components/TabMenu';
import './index.css';

/**
 * 我的页面
 */
class User extends React.Component {
    render() {
        return (
            <div className='user'>
                <div className='user__top'>
                    <div className='tOperator'>
                        <div className='tOperator__icon tOperator__icon--setting'/>
                        <div className='tOperator__icon tOperator__icon--message'/>
                    </div>
                    <div className='user__info'>
                        <div className='user__avatar' style={{backgroundImage: 'url()'}}/>
                        <div className='user__detail'>
                            <div className='user__name'>周杰伦</div>
                            <div className='user__fellow'>关注 100</div>
                            <div className='user__fans'>被关注 100</div>
                        </div>
                    </div>
                </div>
                <div className="user__content">
                    <LineLink title='收藏过的电影' extra='anything'/>
                    <LineLink title='看过的电影'/>
                </div>
                <TabMenu current='user'/>
            </div>

        );
    }
};

User.propTypes = {};

export default User;
