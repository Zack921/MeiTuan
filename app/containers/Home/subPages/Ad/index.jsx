import React from 'react';

import { getAdData } from '../../../../fetch/home/index.js';
import HomeAd from '../../../../components/HomeAd';

class Ad extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			adData : []
		}
	}
	render(){
		//交给木偶组件展示
		return (
			<div>
			{
				this.state.adData.length
				? <HomeAd data={this.state.adData} />
				: <div>加载中...</div>
			}
			</div>
		);
	}
	componentDidMount(){
		//获取广告数据-getAdData 返回 promise 对象
		const adData = getAdData();
		adData.then(res => {
			return res.json();
		}).then(json => {
			this.setState({
				adData : json
			});
		}).catch(ex => {
			if(__DEV__){
				console.error('首页广告模块获取数据出错: ' + ex.message);
			}
		});
	}
}

export default Ad;