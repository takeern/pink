import React, { Component } from 'react';

import { renderRoutes } from 'react-router-config';
import Sider from '../component/Sider';

import Header from '../component/Header';

import '../static/css/index.less';

export default class App extends Component {
    render() {
        const { route } = this.props;
        return (
            <div className='warpper'>
                <div className='header'>
                    <Header />
                </div>
                <div className='sider'>
                    <Sider {...this.props}/>
                </div>
                <div className='content'>
                    {renderRoutes(route.routes)}
                </div>
                <div className='footer' >Copyright©2014-2018 Journal of Innovation and Social Science Research. All Rights Reserved.</div>
            </div>
        );
    }
}