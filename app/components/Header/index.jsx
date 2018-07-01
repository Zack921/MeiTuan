import React from 'react';

import './index.less'

class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="common-header">
				<span className="back-icon" onClick={this.handleClick.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
	handleClick(){
		const history = this.props.history;
		const router = this.props.router;
		if(router){
			history.push(router);
		}else{
			window.history.back();
		}
	}
}

export default Header;