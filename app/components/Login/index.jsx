import React from 'react';

import './index.less';

class Login extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			value: ''
		}
	}
	render(){
		return (
			<div className="login-container">
				<div className="input-container phone-container">
					<i className="icon-tablet"></i>
					<input 
						type="text"
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
						placeholder="请输入手机号"
					/>
				</div>
				<div className="input-container password-container">
					<i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
				</div>
				<button className="btn-login" onClick={this.handleClick.bind(this)}>登录</button>
			</div>
		);
	}
	componentDidMount(){

	}
	handleChange(e){
		this.setState({
			value: e.target.value
		});
	}
	handleClick(e){
		this.props.handleLogin(this.state.value);
	}
}

export default Login;