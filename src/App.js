import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Index from './components/Index';
import Collection from './components/Collection';

export default function App() {
	return (
		<Router>

			<Switch>
				<Route exact path="/">
					<Index />
				</Route>
				<Route path="/Collection">
					<Collection />
				</Route>
			</Switch>
		</Router>

	)
}
