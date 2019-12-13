import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Search from './components/Search';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div>
				<Route path='/' component={Header}/>
				<Route exact path='/' component={Landing}/>
				<Route path='/search' component={Search}/>

				<Footer/>
			</div>
		</Router>
	);
};

export default App;
