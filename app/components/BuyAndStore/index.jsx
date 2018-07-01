import React from 'react';

import './index.less';

class BuyAndStore extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div className="buy-and-store-container clear-fix">
				<div className="item-container float-left">
					{
						this.props.isStored
						? <button className="selected" onClick={this.handleStore.bind(this)}>已收藏</button>
						: <button onClick={this.handleStore.bind(this)}>收藏</button>
					}
				</div>
				<div className="item-container float-right">
					<button onClick={this.handleBuy.bind(this)}>购买</button>
				</div>
			</div>
		);
	}
	// 点击收藏
	handleStore(){
		this.props.handleStoreFn();
	}
	// 点击购买
	handleBuy(){
		this.props.handleBuyFn();
	}
}

export default BuyAndStore;