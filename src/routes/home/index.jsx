import React, {Component} from 'react';
import './index.css';
import TopBar from './components/TopBar';
import Swiper from '../../components/Swiper';
import MovieItem from './components/MovieItem';

class Home extends Component {

    componentWillMount() {
        this.imgs = [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527263057026&di=7ca35eed76c0787b25a10828da8681c0&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F02%2F09%2F86%2F54d3189650a83.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527263057026&di=22db2590afa61f1217b286a7551df2a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01481559841b3da801215603a36220.jpg%402o.jpg'
        ];
    }

    showCityLayer = () => {
        console.log('show');
    }

    render() {
        return (
            <div className='home'>
                <TopBar city='杭州' showCityLayer={this.showCityLayer}/>
                <Swiper imgs={this.imgs}/>
                <ul className='home__content '>
                    <li><MovieItem/></li>
                    <li><MovieItem/></li>
                    <li><MovieItem/></li>
                    <li><MovieItem/></li>
                    <li><MovieItem/></li>
                </ul>
                
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;