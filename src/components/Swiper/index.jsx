import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Swiper extends React.Component{

    state = {
        sreenWidth: window.innerWidth
    };

    /**
     * 页面重新改变大小时回调函数
     */
    handleResize = () => {
        this.setState({sreenWidth: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }



    render() {
        const ulWidth = this.props.imgs.length * this.state.sreenWidth;
              
        return(
            <div className='swiper'>
                <div className='swiper__wrapper'>
                    <ul style={{width: ulWidth}}>
                        {
                            this.props.imgs.map((item, index) => (
                                <li key={index}>
                                    <img style={{width: this.state.sreenWidth}} src={item} alt=""/>
                                </li>
                            ))
                        }
                    </ul>
                    
                </div>
            </div>
        );
    }

}

Swiper.propTypes = {
    imgs: PropTypes.array.isRequired
};

export default Swiper;