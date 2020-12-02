//MAIN FILE FOR ROUTING EVERYTHING
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";
import About from "./components/pages/About"
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className='page-container'>
			<Router>
			<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' exact component={Services} />
					<Route path='/services/general-dentistry' exact component={Services} />
					<Route path='/services/specific-dentistry' exact component={Services} />
					<Route path='/services/cosmetic-dentistry' exact component={Services} />
					<Route path='/about' exact component={About} />
				</Switch>
				
				<div className='footer'>
				<Footer />
			</div>
			</Router>
			
		</div>
	);
}

export default App;
