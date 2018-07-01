import React from 'react';

import ListItem from './subComponents/ListItem';
import './index.less';

class HomeList extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div className="home-list">
				{
					this.props.data.map((item,index) => {
						return <ListItem key={index} data={item} />
					})
				}
			</div>
		);
	}
	componentWillUnmount(){
		console.log('List unmount');
		console.log('---------------');
	}
	componentDidMount(){
		console.log('List did mount');
		console.log('---------------');
	}
}

export default HomeList;