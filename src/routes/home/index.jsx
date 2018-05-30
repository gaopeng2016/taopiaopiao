import React, {Component} from 'react';
import './index.css';
import TabMenu from '../../components/TabMenu';
import TopBar from './components/TopBar';
import Swiper from '../../components/Swiper';
import MovieItem from './components/MovieItem';
import RenderToBody from '../../components/RederToBody';
import CityLayer from './components/CityLayer';
import request from '../../helpers/request';

class Home extends Component {

    state = {
        city: '', //当前城市
        poster: [], // slide海报
        movie: [], // 热映电影
        cityLayerVisible: false // 选择城市浮层显示状态
    };

    componentWillMount() {
        this.imgs = [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527263057026&di=7ca35eed76c0787b25a10828da8681c0&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F02%2F09%2F86%2F54d3189650a83.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527263057026&di=22db2590afa61f1217b286a7551df2a7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01481559841b3da801215603a36220.jpg%402o.jpg'
        ];

        this.getData();
    }

    getData = async () => {
        const data = await request('/index');
        this.setState({
            city: data.city,
            poster: data.poster,
            movie: data.movie
        });
    }

    showCityLayer = () => {
        this.setState({
            cityLayerVisible: true
        });
    }

    closeCityLayer = () => {
        this.setState({
            cityLayerVisible: false
        });
    }

    selectCity = (cityName) => {
        this.setState({
            city: cityName
        });
        this.closeCityLayer();
    }

    render() {
        const { city, movie, cityLayerVisible } = this.state;
        return (
            <div className='home'>
                <TopBar city={city} showCityLayer={this.showCityLayer}/>
                <Swiper imgs={this.imgs}/>
                <ul className='home__content' >
                    {
                        movie.map((item, index) => {
                            return <li key={index}><MovieItem {...item}/></li> ;
                        })
                    }
                </ul>
                <TabMenu current='movie'/>
                {
                    cityLayerVisible &&
                    <RenderToBody>
                        <CityLayer city={city} onClose={this.closeCityLayer} onSelect={this.selectCity}/>
                    </RenderToBody>
                }

            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
