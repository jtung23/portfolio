import React, {Component} from "react";
import Background from '../../images/bnw-me-brisk.jpg';
import './Portfolio.css';
import {Animated} from "react-animated-css";
import Projects from '../../components/Projects';

// pass same styles to all projects
const styles = {
  content: {
    width: '100%',
    minHeight : '80vh',
    // background: 'Url('+Background+')',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100%"
  },

  projects: {
	 	display: 'inline-block',
		width: '20%',
		backgroundColor: 'white'	
  }
}
class Portfolio extends Component {
	render() {
		return (
			<div className="main" style={styles.content} >
				<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
					<Projects className="projects-div" style={styles.projects} />
					<Projects className="projects-div" style={styles.projects} />
					<Projects className="projects-div" style={styles.projects} />
				</Animated>
			</div>
		)
	}

}

export default Portfolio