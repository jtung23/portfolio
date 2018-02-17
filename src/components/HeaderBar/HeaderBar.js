import React from 'react';
import './HeaderBar.css';
import brisketbg from './croppedlogo.jpg';
import {Link} from 'react-router-dom';

const HeaderBar = props => (
	<div className="header-div">
		<div className="header">
			<h1 className="header-txt">
				Jonathan Tung
			</h1>
			<p className="header-txt">
			Full-Stack Web Developer with a passion for Javascript, Python, and Smoking Meat
			</p>
		</div>
    <Link to="/" className="myButton">Home</Link>
    <Link to="/about" className="myButton">About</Link>
    <Link to="/portfolio" className="myButton">Portfolio</Link>
    <Link to="/bbq" className="myButton">BBQ</Link>
	</div>
)

export default HeaderBar