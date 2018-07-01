import React from 'react';

import './index.less';
import Star from '../../../Star';

class ListItem extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const data = this.props.data;
		return (
			<div className="comment-list-item">
				<h3>
					<i className="icon-user"></i>
					&nbsp;
					<span>{data.username}</span>
				</h3>
				<Star star={data.star} />
				<p>{data.comment}</p>
			</div>
		);
	}
}

export default ListItem;