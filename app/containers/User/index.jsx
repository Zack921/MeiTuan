import React from 'react';
import { connect } from 'react-redux';

import Header from './../../components/Header';
import UserInfo from './../../components/UserInfo';
import OrderList from './subPages/OrderList';

class User extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				<Header title="用户中心" router="/" history={this.props.history} />
				<UserInfo userName={this.props.userInfo.userName} cityName={this.props.userInfo.cityName} />
				<OrderList userName={this.props.userInfo.userName} />
			</div>
		);
	}
}

// react-redux 绑定
function mapStateToProps(state){
	return {
		userInfo: state.userInfo
	};
}

function mapDispatchToProps(dispatch){
	return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(User);