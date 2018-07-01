import React from 'react';
import localStore from '../../util/localStore';
import { CITYNAME } from '../../config/localStoreKey';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userInfo';

import HomeHeader from '../../components/HomeHeader';
import Banner from '../../components/Banner';
import Ad from './subPages/Ad';
import List from './subPages/List';

class Home extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				<HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history} />
				<Banner />
				<div style={{height:'15px'}}>{/*分割线*/}</div>
				<Ad />
				<List cityName={this.props.userInfo.cityName} />
			</div>
		);
	}
	componentWillUnmount(){
		console.log('Home unmount');
	}
	componentDidMount(){
		console.log('Home did mount');
		this.changeCity();
	}
	changeCity(){
		// 从 localStorage 中获取城市
		let cityName = localStore.getItem(CITYNAME);
		const userName = this.props.userInfo.userName;
		if(cityName == null){
			cityName = '北京';
		}
		// 将城市信息存储到 redux 中
		this.props.userInfoActions.update({
			cityName: cityName,
			userName: userName
		});
	}
}

// react redux 绑定
function mapStateToProps(state){
	return {
		userInfo : state.userInfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions : bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);