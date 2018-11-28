import React, { Component } from 'react';
import { withRouter, Route } from 'react-router';
import { matchRoutes } from 'react-router-config';

const loadAllData = (store, routes, location) => {
    const components = matchRoutes(routes, location.pathname);
    const pros = components.map(({ route, match }) => {
        const { loadData } = route.component; 
        return loadData
            ? loadData(store, match, location)
            : Promise.resolve(null);
    });
    return Promise.all(pros);
};

class AsyncRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousLocation: null,
            showChildren: false,
            shouldGetInfo : true,
        };
        props = {
            shouldGetInfo : true,
        };
    }
    // static getDerivedStateFromProps(props, prevState) {
    //     console.log(props, prevState);
    //     const { routes, store, location } = props;
    //     const m = loadAllData(store, routes, location).then(a =>
    //         console.log('hellp')   
    //     )
    //     console.log(m)
    //     return null;
    // }
    render () {
        const { routes, store, location, children } = this.props;
        if(this.state.shouldGetInfo) {
            if(!this.props.initState) {
                loadAllData(store, routes, location).then(() => {
                    this.props.shouldGetInfo = false;
                    this.setState({
                        showChildren: true,
                        shouldGetInfo: false,
                    });
                });
            } else {
                this.setState({
                    showChildren: true,
                    shouldGetInfo: false,
                });
            }
        } 
        const { showChildren } = this.state;
        console.log(showChildren);
        return (
            <Route
                location={location}
                render={() => showChildren? children : null}
            />    
        );
    }
}
export default withRouter(AsyncRouter);
