//MAIN FILE FOR ROUTING EVERYTHING
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/services' exact component={Services} />
			</Switch>
		</Router>
	);
}

export default App;
