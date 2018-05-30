import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class RederToBody extends React.Component {
    componentDidMount() {
        this.popup = document.createElement('div');
        document.body.appendChild(this.popup);
        this.renderToLayer();
    }

    componentDidUpdate(prevProps, prevState) {
        this.renderToLayer();
    }

    componentWillUnmount() {
        this.unrenderToLayer();
    }

    renderToLayer = () => { 
        ReactDOM.render(
            this.props.children,
            this.popup
        );
    }

    unrenderToLayer = () => {
        if(!this.popup) {
            return ;
        }

        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
        this.popup = null;
    }

    render() {
        return null;
    }
}

RederToBody.propTypes = {
    children: PropTypes.any
};


export default RederToBody;