import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userInfo';

import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

class Login extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			isChecking: true //是非正在验证登录中
		}
	}
	render(){
		return (
			<div>
				<Header title="登录" />
				{
					this.state.isChecking
					? <div>{/* 等待验证完毕 */}</div>
					: <LoginComponent handleLogin={this.handleLogin.bind(this)} />
				}
			</div>
		);
	}
	componentDidMount(){
		// 判断是否已经登录
		this.doCheck();
	}
	// 验证是否登录
	doCheck(){
		const userInfo = this.props.userInfo;
		if(userInfo.userName){
			// 已登录,跳转到用户主页
			this.props.history.push('/user');
		}else{
			// 未登录，验证结束，显示登录木偶组件
			this.setState({
				isChecking: false
			});
		}
	}
	// 处理点击登录后的逻辑
	handleLogin(userName){
		// 保存用户名
		const actions = this.props.userInfoActions;
		let userInfo = this.props.userInfo;
		userInfo.userName = userName;
		actions.update(userInfo);

		const params = this.props.match.params;
		const router = params.router;
		if(router){
			// 跳转到指定页面
			this.props.history.push(decodeURIComponent(router));
		}else{
			// 跳转到用户主页
			this.props.history.push('/user');
		}
	}
}

// redux react 绑定
function mapStateToProps(state){
	return {
		userInfo: state.userInfo
	}
}
function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);