import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { createMemoryHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import Home from './component/Home';

// import './static/css/index.less'
// const debug = require('debug')('app:index'); 

const history = createMemoryHistory();
const store = createStore(history);

const Hello = () => (<div>hello word</div>);

export default (url) => {
    console.log(url);
    return () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <StaticRouter location={url} context={'12'}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/hello" component={Hello} />
            </Switch>
        </StaticRouter>
      </ConnectedRouter>
    </Provider>
  );
};

