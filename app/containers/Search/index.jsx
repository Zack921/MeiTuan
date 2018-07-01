import React from 'react';
import { connect } from 'react-redux';

import SearchHeader from './../../components/SearchHeader';
import SearchList from './subPages/List';

class Search extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				<SearchHeader 
					history={this.props.history}
					keyword={this.props.match.params.keyword}
				/>
				<SearchList 
					cityName={this.props.userInfo.cityName} 
					category={this.props.match.params.category}
					keyword={this.props.match.params.keyword}
				/>
			</div>
		);
	}
	componentWillUnmount(){
		console.log('Search unmount');
	}
	componentDidMount(){
		console.log('Search did mount');
	}
}

// react redux 绑定
function mapStateToProps(state){
	return {
		userInfo: state.userInfo
	};
}
function mapDispatchToProps(dispatch){
	return {};
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);