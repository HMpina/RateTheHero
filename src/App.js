import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
export function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/detalhes/:id" exact>
					<Details />
				</Route>
				<Route path="/" exact>
					<Search />
				</Route>
				<Route path="*">Página não encontrada</Route>
			</Switch>
		</BrowserRouter>
	);
}