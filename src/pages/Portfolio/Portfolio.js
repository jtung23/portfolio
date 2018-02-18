import React, {Component} from "react";
import Background from '../Main/bnw-me-brisk.jpg';
import './Portfolio.css';
import {Animated} from "react-animated-css";

const styles = {
  content: {
    width: '100%',
    minHeight : '80vh',
    // background: 'Url('+Background+')',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100%"
  }
}
class Portfolio extends Component {
	render() {
		return (
			<div className="main" style={styles.content} >
				<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
				</Animated>
			</div>
		)
	}

}

export default Portfolio