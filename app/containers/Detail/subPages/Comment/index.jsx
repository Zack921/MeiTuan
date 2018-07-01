import React from 'react';

import './index.less';
import { getCommentData } from '../../../../fetch/detail';
import CommentList from '../../../../components/CommentList';
import ListLoadMore from '../../../../components/ListLoadMore';

class Comment extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			data: [],
			hasMore: false, //是否有下一页数据
			isLoadingMore: false, //是否正在 加载更多
			nextPage: 1 //下一页
		};
	}
	render(){
		return (
			<div className="detail-comment-subpage">
				<h2>用户点评</h2>
				{
					this.state.data
					? <CommentList data={this.state.data} />
					: <div>加载中...</div>
				}
				{
					this.state.hasMore
					? <ListLoadMore 
						isLoadingMore={this.state.isLoadingMore}
						loadMoreFn={this.loadListMore.bind(this)}  />
					: ''
				}
			</div>	
		);
	}
	componentDidMount(){
		const infoData = getCommentData(0,this.props.id);
		this.handlePromise2Json(infoData);
	}
	//处理加载的数据 promise->json
	handlePromise2Json(promiseData){
		promiseData.then(res => {
			return res.json();
		}).then(json => {
			const hasMore = json.hasMore;
			const data = json.data;
			this.setState({
				data: this.state.data.concat(data),
				hasMore: hasMore
			});
		});
	}
	//加载更多 List 数据
	loadListMore(){
		//更新状态
		this.setState({
			isLoadingMore: true
		});
		//加载数据
		const id = this.props.id;
		const page = this.state.nextPage;
		const promiseData = getCommentData(page,id);
		this.handlePromise2Json(promiseData);
		//更新状态
		this.setState({
			isLoadingMore:false,
			nextPage: this.state.nextPage + 1
		});
	}
}

export default Comment;