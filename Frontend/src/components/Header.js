import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

class Header extends Component{

	render(){
		return(

			<nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <div className="container">
			    <NavLink to="/" className="navbar-brand" ><img id="logo" src={logo} alt="logo" width="80"/></NavLink>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarNav">
			      <ul className="navbar-nav">
			          <li className="nav-item active">
			            <NavLink to="new"className="nav-link" >Nuevos artículos <span className="sr-only"></span></NavLink>
			          </li>
			          <li className="nav-item">
			            <NavLink to="archived" className="nav-link" >Archivados</NavLink>
			          </li>
			      </ul>      
			    </div>
			  </div>
			</nav>
		);
	}
}
export default Header;