import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userInfo';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import localStore from '../../util/localStore';
import { CITYNAME } from '../../config/localStoreKey';

class City extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				<Header title="选择城市" />
				<CurrentCity currentCity={this.props.userInfo.cityName} />
				<CityList updateCity={this.changeCity.bind(this)} />
			</div>
		);
	}
	changeCity(newCity){
		if(newCity == null){
			return;
		}
		//修改 redux
		const userInfo = this.props.userInfo;
		userInfo.cityName = newCity;
		this.props.userInfoAction.update(userInfo);
		//修改 localStorage
		localStore.setItem(CITYNAME,newCity);
		//跳转到首页
		//在路由配置中的相应组件都有history,location,match属性
		this.props.history.push('/');
	}
}

// react redux 绑定
function mapStateToProps(state){
	return {
		userInfo: state.userInfo
	};
}

function mapDispatchToProps(dispatch){
	return {
		userInfoAction: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(City);