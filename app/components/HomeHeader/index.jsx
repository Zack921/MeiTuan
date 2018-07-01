import React from 'react';
import { Link } from 'react-router-dom';

import './index.less';
import SearchInput from '../SearchInput';

class HomeHeader extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div id="home-header" className="clear-fix">
				<div className="home-header-left float-left">
					<Link to='/city'>
						<span>{this.props.cityName}</span>
						&nbsp;
						<i className="icon-angle-down"></i>
					</Link>				
				</div>
				<div className="home-header-right float-right">
					<Link to='/login'>
					<i className="icon-user"></i>
					</Link>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						<SearchInput value="" handleEnter={this.handleEnter.bind(this)} />
					</div>				
				</div>
			</div>
		);
	}
	handleEnter(value){
		this.props.history.push('/search/all/' + encodeURIComponent(value));
	}
}

export default HomeHeader;