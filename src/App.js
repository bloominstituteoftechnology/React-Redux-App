import React from 'react';
import LandingPage from './components/LandingPage';
import Stock from './components/Stock';
import NewLandingPage from './components/NewLandingPage';
import Search from './components/Search';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div>
				<Stock/>

				<Route exact path='/' component={NewLandingPage}/>
				<Route path='/stock' component={Search}/>

				<Footer/>
			</div>
		</Router>
	);
};

export default App;
