import React from 'react';

import ListItem from './subComponents/ListItem';

class OrderList extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				{
					this.props.data.map((item,index) => {
						return <ListItem key={index} data={item} submitCommentFn={this.props.submitCommentFn} />
					})
				}
			</div>
		);
	}
}

export default OrderList;