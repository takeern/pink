import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import '../static/css/home.less';

const mapStateToProps = (state) => {
    const { message, poweredBy } = state.home;
    return {
        message,
        poweredBy,
    };
};

@connect(mapStateToProps)
export default class Home extends PureComponent {
    render() {
        return (
          <div className="demo">
            <p className="message"> { this.props.message } </p>
            <p className="footer"> { this.props.poweredBy } </p>
          </div>
        );
    }
}