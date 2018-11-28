import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

//less
import '../static/css/home.less';

//store
import { GOT_LOGO_SRC } from '../redux/home/constans';
import { getLogoSrc } from '../redux/home/action';

const debug = require('debug')('app:home');

const mapStateToProps = (state) => {
    const { message, poweredBy, img_src } = state.home;
    return {
        message,
        poweredBy,
        img_src,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getLogoSrc: () => dispatch(getLogoSrc()),
//     };
// };

@connect(mapStateToProps)
export default class Home extends PureComponent {
    static loadData(store) {
        return new Promise(resolve => {
            getLogoSrc()
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    store.dispatch({
                        type: GOT_LOGO_SRC,
                        payload: data.img_src,
                    });
                    return resolve();
                });
        });
    }
    render() {
        const { img_src } = this.props;
        debug(img_src);
        return (
          <div className="demo">
            <p className="message"> { this.props.message } </p>
            <p className="footer"> { this.props.poweredBy } </p>
            <div>
                {/* <img src={this.porps} /> */}
                <p className="footer"> { img_src } </p>
            </div>
          </div>
        );
    }
}