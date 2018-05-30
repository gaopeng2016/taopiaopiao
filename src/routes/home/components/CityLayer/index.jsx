import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import request from '../../../../helpers/request';
class CityLayer extends React.Component {

    state = {
        hot:[],
        all:{},
    };

    componentWillMount() {
        this.getData();
    }

    getData = async () => {
        const city = await request('/city');
        this.setState({
            hot: city.hot,
            all: city.all
        });
    }

    render() {
        const { onClose, onSelect, city } = this.props;
        const {hot, all} = this.state;
        const keys = Object.keys(all);

        return(
            <div className='cityLayer' >
                <div className='cityLayer__title'>
                    <div className='cityLayer__close' onClick={ onClose }>关闭</div>
                    选择城市
                </div>
                <div className='cityLayer__content'>
                    <div id='定位' className='cityBlock'>
                        <div className='cityBlock__label'>定位城市</div>
                        <div className='cityBlock__wrap'>
                            <div className='cityBlock__item'>{city}</div>
                        </div>
                    </div>

                    <div id='热门' className='cityBlock'>
                        <div className='cityBlock__label'>热门城市</div>
                        <div className='cityBlock__wrap'>
                        {
                            hot.map(item => {
                                return <div key={item.cityCode} onClick={ () =>  onSelect(item.regionName) } className='cityBlock__item'>{item.regionName}</div>;
                            })
                        }
                        </div>
                    </div>
                    {
                        keys.map(key => {
                            const citys = all[key];
                            return (
                                <div id={key} key={key} className='cityList'>
                                    <div className='cityList__label'>{key}</div>
                                    <ul className='cityList__wrap'>
                                        {
                                            citys.map(city => {
                                                return <li key={city.cityCode} className='cityList__item' onClick={ () => onSelect(city.regionName) } >{city.regionName}</li>;
                                            })
                                        }

                                    </ul>
                                </div>
                            );
                        })

                    }

                                {/* <div  className='cityList'>
                                    <div className='cityList__label'>x</div>
                                    <ul className='cityList__wrap'>
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;
                                    <li className='cityList__item'>xxxx</li>;


                                    </ul>
                                </div> */}
                </div>

                <div></div>
            </div>
        );
    }
};

CityLayer.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default CityLayer;
