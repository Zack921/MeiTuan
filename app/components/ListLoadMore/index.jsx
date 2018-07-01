import React from 'react';

import './index.less';

class ListLoadMore extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="list-load-more" ref='loadMore'>
				{
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span>加载更多</span>
				}
			</div>
		);
	}
	componentDidMount(){
		// 卸载监听
		window.removeEventListener('scroll',handleScroll);
		// 上拉时自动加载更多 list 内容
		let timeoutId;
		const isLoadingMore = this.props.isLoadingMore;
		const loadMoreFn = this.props.loadMoreFn;
		const loadMore = this.refs.loadMore;
		const callback = function(){
			// 获取 加载更多元素 与视窗顶部的距离
			const top = loadMore.getBoundingClientRect().top;
			// 获取可视窗口的高度
			const screenHeight = window.screen.height;
			if(top < screenHeight){
				loadMoreFn();
			}
		};
		// 处理 scroll 事件
		const handleScroll = function(){
			if(isLoadingMore){
				return;
			}
			if(timeoutId){
				//50 毫秒内存在该定时器则清空重置
				clearTimeout(timeoutId);
			}
			timeoutId = setTimeout(callback,50);
		}
		// 利用节流方式监听 scroll 事件，提高性能
		window.addEventListener('scroll',handleScroll);
	}
}

export default ListLoadMore;