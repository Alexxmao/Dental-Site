//MAIN FILE FOR ROUTING EVERYTHING
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='page-container'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' component={Services} />
				</Switch>
			</Router>
			<div className='footer'>
				<Footer />
			</div>
		</div>
	);
}

export default App;
