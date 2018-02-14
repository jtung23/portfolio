
import React, {Component} from "react";
import Background from '../Main/bnw-me-brisk.jpg';

const styles = {
  content: {
    width: '100%',
    minHeight : '100vh',
    background: 'Url('+Background+')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
  }
}
class Portfolio extends Component {
	render() {
		return (
			<div className="main" style={styles.content} >
				<div className="navbar">
					PORTFOLIO
				</div>
			</div>
		)
	}

}

export default Portfolio