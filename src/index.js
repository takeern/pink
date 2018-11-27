import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes }from 'react-router-config';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import routes from './route';

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				{renderRoutes(routes)}
			</Switch>
		</ConnectedRouter>
	</Provider>
	, document.getElementById('main')
);

