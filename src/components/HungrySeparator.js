import React, { Component } from 'react'; 

class HungrySeparator extends Component {
	constructor(props) {
		super(props); 
		console.log(props); 
		this.state = {
			animationTime: 0, 
			pointParams: this.genPointParams(props.resolution)
		}; 
	}

	genPointParams(resolution) {
		var pointParams = [];
		for(var i = 0; i < resolution*2; i++) {
			pointParams[i] = {
				xfreq: Math.PI * (0.2 + Math.random()*0.7),
				yfreq: Math.PI * (0.2 + Math.random()*0.7)
			};
		}
		return pointParams;
	}

	static defaultProps = {
		width: 600, 
		spread: 50, 
		tapete: "owl",
		strokeColor: "black",
		resolution: 24
	};

	componentDidMount() {
		requestAnimationFrame(this.animate.bind(this));
	}
	
	componentWillReceiveProps(nextProps) {
		if(nextProps.resolution != this.props.resolution) {
			this.setStatus({pointParams: this.genPointParams(nextProps.resolution)});
		}
	}	

	animate(time) {
		this.setState({animationTime: time / 1000});
		requestAnimationFrame(this.animate.bind(this));
	}
	
	render() {
		var viewBox = "0 -" + this.props.spread / 2 +  " " + this.props.width + " " +  this.props.spread;
		return (
			<svg className="HungrySeparator"
				viewBox={viewBox} 
				width={this.props.width} 
				height={this.props.spread} 
				style={{transform:'translate(0, -50%)'}}
				>
				<polygon 
					points={this.buildPoints().map(p => p.x + "," + p.y).join(" ")}
					fill={"url(#" + this.props.tapete + ")"}
					stroke={this.props.strokeColor}
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	buildPoints() {
		var points = [];
		var xPos, amount;
		var xDistance = this.props.width / (this.props.resolution - 1); 
		for(var i = 0; i < this.props.resolution*2; i++){
			xPos = i < this.props.resolution ? i : this.props.resolution * 2 - 1 - i 
			amount = ( 1 - Math.cos(Math.PI * 2 * xPos / (this.props.resolution - 1)) ) / 2;
			points[i] = {
				x: xPos * xDistance,
				y: this.props.spread * 0.25 * ( amount * ( i < this.props.resolution ? -1 : 1 ) )
			};
			points[i].x += amount * xDistance / 2 * Math.cos(this.state.pointParams[i].xfreq * this.state.animationTime);
			points[i].y += this.props.spread / 4 * amount / 2 * Math.sin(this.state.pointParams[i].yfreq * this.state.animationTime); 
		}
		return points; 
	}
}

export default HungrySeparator;
