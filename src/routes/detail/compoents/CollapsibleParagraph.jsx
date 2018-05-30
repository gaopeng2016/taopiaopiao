/**
 * @File CollapsibleParagraph.jsx
 *
 * @Author gaopeng
 *
 * @Date 2018/5/28 下午1:49
 *
 * @Desc 可折叠的文字组件
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './CollapsibleParagraph.css';

class CollapsibleParagraph extends React.Component {

    state = {
        isNeedCollapse: false,
        isCollapse: false,
    };

    componentDidMount() {
        const height = this.props.height || 28 * 3 ;
        const dom = ReactDOM.findDOMNode(this);

        if(dom.clientHeight > height) {
            this.setState({
                isCollapse: true,
                isNeedCollapse: true
            })
        }
    }

    toggleStatus = () => {
        if (this.state.isNeedCollapse) {
            this.setState((prevState) => {
                return {
                    isCollapse: !prevState.isCollapse
                };
            });
        }
    };

    render() {
        const { isCollapse } = this.state;
        const cls = isCollapse ? 'collapsible-paragraph--collapse' : '';
        return (
            <div className={`collapsible-paragraph ${cls}`} style={{maxHeight: isCollapse ? this.props.height : 'auto'}} onClick={this.toggleStatus}>
                { this.props.children }
                { this.state.isCollapse && <div className="collapsible-paragraph__label">展开</div> }
            </div>
        );
    }
}

CollapsibleParagraph.propTypes = {
    height: PropTypes.number,
    children: PropTypes.any
};

export default CollapsibleParagraph;
