import React from 'react';

import './index.less';

class CurrentCity extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="current-city">
				<h2>{this.props.currentCity}</h2>
			</div>
		);
	}
}

export default CurrentCity;