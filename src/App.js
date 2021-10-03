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
import Shoes from "./components/Shoes";
import RacingBoots from './components/RacingBoots';
import Contact from './components/Contact';

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
				<Route path="/Shoes">
					<Shoes />
				</Route>
				<Route path="/RacingBoots">
					<RacingBoots />
				</Route>
				<Route path="/Contact">
					<Contact />
				</Route>
			</Switch>
		</Router>

	)
}
