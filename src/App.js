import React, { Component } from 'react';
import HungrySeparator from './components/HungrySeparator.js';
import SvgTapeten from './components/SvgTapeten.js';
import logo from './logo-black.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
	this.state = {
		width: 100,
		resizeHandler: this.onResize.bind(this)
	}
  }

  onResize() {
	console.log("resizing innerWidth = " + window.innerWidth);
    this.setState({ width: window.innerWidth });
  }

  componentWillMount() {
    window.addEventListener("resize", this.state.resizeHandler);
	this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.state.resizeHandler); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
		<div id="projects" className="page">
			<HungrySeparator 
				width={this.state.width} 
				spread="200" 
				tapete="turquoise-paint" />
			<div className="spacer"></div>
				{this.state.width}
			<div className="spacer"></div>
		</div>
		<div id="team" className="page">
			<HungrySeparator
				width={this.state.width}
				spread="200"
				tapete="owl" />
				hey
		</div>
		<div id="legal" className="page">
			<HungrySeparator
				width={this.state.width}
				spread="200"
				tapete="first-try" />
				hey
		</div>
	  	<SvgTapeten />
      </div>
    );
  }
}

export default App;
