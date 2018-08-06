import React, { Component } from 'react';

class SvgTapeten extends Component {
	render() {
		var tapeten = [ 
			{extension: ".png", name:"cave-magic", size: 128},
			{extension: ".png", name:"coast-layers", size: 128},
			{extension: ".png", name:"color-chaos", size: 64},
			{extension: ".png", name:"diamonds", size: 64},
			{extension: ".png", name:"energy-ball", size: 64},
			{extension: ".png", name:"first-try", size: 32},
			{extension: ".png", name:"heart-bubbles", size: 128},
			{extension: ".png", name:"leaves", size: 128},
			{extension: ".png", name:"owl", size: 64},
			{extension: ".png", name:"rusty-diamonds", size: 128},
			{extension: ".png", name:"shy-monster", size: 128},
			{extension: ".png", name:"turquoise-paint", size: 64}
		];
		var pattern, patterns = []; 
		for(var i = 0; i < tapeten.length; i++){
			patterns[i] = (
				<pattern 
					key={tapeten[i].name}
					id={tapeten[i].name} 
					patternUnits="userSpaceOnUse" 
					width={tapeten[i].size} 
					height={tapeten[i].size}>
					<image xlinkHref={"/img/tapete/"+tapeten[i].name+tapeten[i].extension} />
				</pattern>
			);
		}		
		return <svg height="0" width="0">{patterns}</svg>;
	}
}
				
export default SvgTapeten;

