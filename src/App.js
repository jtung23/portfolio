import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Bbq from './pages/Bbq';


const style = {
  header: {
    'position': 'absolute',
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderBar className="headerbar" style={style.header} />
          <Route exact path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/bbq" component={Bbq}/>
        </div>
      </Router>  
    );
  }
}

export default App;
