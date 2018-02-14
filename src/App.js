import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import HeaderBar from './components/HeaderBar';

const style = {
  header: {
    'position': 'absolute',
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar className="headerbar" style={style.header} />
        <Main style={style.header} />
      </div>
    );
  }
}

export default App;
