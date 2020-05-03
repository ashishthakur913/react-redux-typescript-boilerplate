import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={TodoApp} />
		</Switch>
	</BrowserRouter>
));
