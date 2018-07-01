import React from 'react';

import DetailHeader from './../../components/Header';
import Info from './subPages/Info';
import Comment from './subPages/Comment';
import Buy from './subPages/Buy';

class Detail extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		// 获取商户ID
		const id = this.props.match.params.id;

		return (
			<div>
				<DetailHeader title="商户详情" />
				<Info id={id} />
				<Buy history={this.props.history} id={id} />
				<Comment id={id} />
			</div>
		);
	}
}

export default Detail;