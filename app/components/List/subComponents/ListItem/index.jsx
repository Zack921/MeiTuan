import React from 'react';
import { Link } from 'react-router-dom';

import './index.less';

class ListItem extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const data = this.props.data;
		return (
			<Link to={'/detail/' + data.id}>
			<div className="home-list-item clear-fix">
				<div className="item-img-container float-left">
					<img src={data.img} alt={data.title}/>
				</div>
				<div className="item-content">
					<div className="item-title-container clear-fix">
						<h3 className="float-left">{data.title}</h3>
						<span className="float-right">{data.distance}</span>
					</div>
					<p className="item-subTitle">
						{data.subTitle}
					</p>
					<div className="item-price-container c">
						<span className="price float-left">￥{data.price}</span>
						<span className="number float-right">已售{data.number}</span>
					</div>
				</div>
			</div>
			</Link>
		);
	}
}

export default ListItem;