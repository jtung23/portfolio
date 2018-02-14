import React from 'react';
import './HeaderBar.css';
import brisketbg from './croppedlogo.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from '../../pages/Main';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Bbq from '../../pages/Bbq';

const HeaderBar = props => (
	<div className="header-div">
		<div className="header">
			<h1 className="header-txt">
				Jonathan Tung
			</h1>
			<p className="header-txt">
			Full-Stack Web Developer with a passion for Javascript, Python, and smoking meat
			</p>
		</div>
		<div>
			<Router>
				<div>
					<Link to="/" class="myButton">Home</Link>
					<Link to="/about" class="myButton">About</Link>
					<Link to="/portfolio" class="myButton">Portfolio</Link>
					<Link to="/bbq" class="myButton">BBQ</Link>
			    <Route exact path="/" component={Main}/>
			    <Route path="/about" component={About}/>
			    <Route path="/portfolio" component={Portfolio}/>
			    <Route path="/bbq" component={Bbq}/>		
				</div>
			</Router>
	  </div>
	</div>
)

export default HeaderBar