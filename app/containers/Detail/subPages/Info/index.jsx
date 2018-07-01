import React from 'react';

import { getInfoData } from '../../../../fetch/detail';
import DetailInfo from '../../../../components/DetailInfo';

class Info extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			data: false
		};
	}
	render(){
		return (
			<div>
				{
					this.state.data
					? <DetailInfo data={this.state.data} />
					: ''
				}
			</div>
		);
	}
	componentDidMount(){
		const infoData = getInfoData(this.props.id);
		this.handlePromise2Json(infoData);
	}
	//处理加载的数据 promise->json
	handlePromise2Json(promiseData){
		promiseData.then(res => {
			return res.json();
		}).then(json => {
			const data = json;
			this.setState({
				data: data
			});
		});
	}
}

export default Info;