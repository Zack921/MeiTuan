import React from 'react';

import './index.less';

class UserInfo extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div className="userInfo-container">
				<p>
					<i className="icon-user"></i>
					&nbsp;
					<span>{this.props.userName}</span>
				</p>
				<p>
					<i className="icon-map-marker"></i>
					&nbsp;
					<span>{this.props.cityName}</span>
				</p>
			</div>
		);
	}
}

export default UserInfo;