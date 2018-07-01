import React from 'react';

import './index.less';
import { getOrderList,postComment } from '../../../../fetch/orderList';
import OrderListComponent from '../../../../components/OrderList';

class OrderList extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			data: []
		};
	}
	render(){
		return (
			<div className="order-list-container">
				<h2>您的订单</h2>
				{
					this.state.data.length
					? <OrderListComponent data={this.state.data} submitCommentFn={this.submitComment.bind(this)} />
					: ''
				}
			</div>
		);
	}
	componentDidMount(){
		// 获取用户购买列表数据
		this.loadOrderListData();
	}
	// 获取用户购买列表数据
	loadOrderListData(){
		const userName = this.props.userName;
		const PromiseData = getOrderList(userName);
		this.handlePromise2Json(PromiseData);
	}
	// 处理返回的 Promise 数据
	handlePromise2Json(PromiseData){
		PromiseData.then(res => {
			return res.json();
		}).then(json => {
			this.setState({
				data: json
			});
		});
	}
	submitComment(id,comment,callback){
		const promiseData = postComment(id,comment);
		promiseData.then(res => {
			return res.json();
		}).then(json => {
			if (json.errno === 0) {
				callback();
			}
		});
	}
}

export default OrderList;