import React from 'react';
import Axios from 'axios';
import { configure } from 'axios-hooks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header';
const axios = Axios.create({
	baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
});
configure({ axios });
export function App() {
	return (
		<>
			<NormalizeStyles />
			<BrowserRouter>
				<Header />
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
		</>
	);
}