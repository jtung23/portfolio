import React, {Component} from "react";
import Background from '../../images/bnw-me-brisk.jpg';
import {Animated} from "react-animated-css";
import './About.css';

const styles = {
  content: {
    // width: '80%',
    minHeight : '80vh',
    // background: '#cdddf7',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100%"
  }
}

const profpic = require('../../images/heashot.jpg')

// div to holid picture
// div to hold about me paragraph
class About extends Component {
	render() {
		return (
			<div className="main">
				<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
					<div className="layout container" style={styles.content} >
						<div className="profpic-div">
							<img className="profpic" alt="profile pic" src={profpic} />
						</div>
						<div className="text profsummary-div">
							<p className="profsummary">

							</p>
						</div>
					</div>
				</Animated>
			</div>
		)
	}

}

export default About