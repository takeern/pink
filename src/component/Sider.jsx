import React, { Component } from 'react';

import '../static/css/sider.less';

export default class Sider extends Component {
    handleClick (e) {
        const { pathMap } = this.props;
        e.preventDefault();
        if (e.target.localName !== 'a') return;
        const item = pathMap.find((item) => item.name === e.target.innerText);
        item && item.path && this.props.history.push(item.path);
    }
    render () {
        const { pathMap } = this.props;
        const list = pathMap.map((item, index) => 
            <li key={index}>
                <a href='/'>{item.name}</a>
            </li>
        );
        return (
            <ul id='nav' onClick={(e) => this.handleClick(e)}>
                {list}
            </ul>
        );
    }
}
Sider.defaultProps = {
    pathMap: [
        {
            name: 'HOME',
            path: '/home',
        },
        {
            name: 'CALL FOR PAPERS',
            path: '/callForPapers',
        },
        {
            name: 'ISSUES',
            path: '/issues',
        },
        {
            name: 'EDITORIAL BOARD',
            path: '/editorial',
        },
        {
            name: 'CONTACT US',
            path: '/contact',
        },
    ],
};
