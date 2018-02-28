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
    backgroundSize: "100%",
    position: 'relative'
  },
  image: {
    height: '25%',
    width: '30%',
    margin: '5px'
  }
}
class Main extends Component {
	render() {
		return (
			<div className="main" style={styles.content} >
        <div className="mainAbout">
          <Image className="mainImage" image={Heashot} style={styles.image} />
          <div className="mainBio">
            <h1>
              Jonathan Tung
            </h1>
            <p>
              Portfolio
            </p>
            <p>
              BBQ
            </p>
          </div>
        </div>
			</div>
		)
	}

}

export default Main
