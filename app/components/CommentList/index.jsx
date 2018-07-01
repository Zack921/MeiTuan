import React from 'react';

import ListItem from './subComponents/ListItem';
import './index.less';

class CommentList extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div className="comment-list">
				{
					this.props.data.map((item,index) => {
						return <ListItem key={index} data={item} />
					})
				}
			</div>
		);
	}
}

export default CommentList;