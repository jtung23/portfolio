import React, {Component} from "react";
import './Main.css';
import Background from './bnw-me-brisk.jpg';

const styles = {
  content: {
    width: '100%',
    minHeight : '100vh',
    background: 'Url('+Background+')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
  }
}
class Main extends Component {
	render() {
		return (
			<div className="main" style={styles.content} >
			</div>
		)
	}

}

export default Main
