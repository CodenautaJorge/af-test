import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import Home from './components/Home';
import Articles from './components/articles/Articles';


class Router extends Component{

	render(){

		return(

			<BrowserRouter>

			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/new" component={() => <Articles isArchived={false} />} />
				<Route exact path="/archived" component={() => <Articles isArchived={true} />} />
				<Route component={Error} />
			</Switch>

			</BrowserRouter>


		);
	}
}

export default Router;