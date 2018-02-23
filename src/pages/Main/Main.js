import React, {Component} from "react";
import './Main.css';
import Background from '../../images/L1050384.jpg';
import Heashot from '../../images/heashot.jpg';
import Image from '../../components/Image';

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
        <div className="mainAbout">
          <Image className="mainImage" image={Heashot} />
          <div className="mainBio">
            <p>
              Full-Stack Web Developer with a passion for Javascript, Python, and Smoking Meat
            </p>
          </div>
        </div>
			</div>
		)
	}

}

export default Main
