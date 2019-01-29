import React, { Component } from 'react';

import '../static/css/header.less';

export default class App extends Component {
    render() {
        return (
            <div className='header'>
                <div className='title'>International Journal of Management Science Research</div>
                <div className='num'>(IJMSR, ISSN: 2536-605X)</div>
                <div>
                    <a href='http://www.ijmsr.org'>www.ijmsr.org</a>
                </div>
            </div>
        );
    }
}