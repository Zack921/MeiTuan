import React from 'react';

import SearchInput from '../SearchInput';
import './index.less';

class SearchHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id='search-header'>
				<span className="back-icon float-left" onClick={this.handleClick.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<div className="input-container">
					<i className="icon-search"></i>
					&nbsp;
					<SearchInput value={this.props.keyword || ''} handleEnter={this.handleEnter.bind(this)} />
				</div>
			</div>
		);
	}
	handleClick(){
		this.props.history.push('/');
	}
	handleEnter(value){
		this.props.history.push('/search/all/' + value);
	}
}

export default SearchHeader;