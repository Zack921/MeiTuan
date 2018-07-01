import React from 'react';

import './index.less';

class ListItem extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			commentState: 0 // 0-未评价，1-评价中，2-已评价
		}
	}
	render(){
		const data = this.props.data;
		return (
			<div className="order-list-item-container clear-fix">
				<div className="item-img float-left">
					<img src={data.img} />
				</div>
				<div className="item-comment float-right">
					{
						this.state.commentState === 0
						// 未评价
						? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
						: 
							this.state.commentState === 1
							// 评价中
							? ''
							// 已评价
							: <button className="btn btn-unselected">已评价</button>
					}
				</div>
				<div className="item-content">
					<span>商户：{data.title}</span>
					<span>数量：{data.count}</span>
					<span>价格：￥{data.price}</span>
				</div>
					{
						// 评价中才会显示输入框
						this.state.commentState === 1
						? (
							<div className="comment-text-container">
								<textArea className="comment-text" ref="commentText"></textArea>
								<button className="btn" onClick={this.handleSubmitComment.bind(this)}>提交</button>
								<button className="btn btn-unselected" onClick={this.hideComment.bind(this)}>取消</button>
							</div>
						  )
						: ''
					}
				
			</div>
		);
	}
	componentDidMount(){
		this.setState({
			commentState: this.props.data.commentState
		});
	}
	// 显示评价模块
	showComment(){
		this.setState({
			commentState: 1
		});
	}
	// 隐藏评价模块
	hideComment(){
		this.setState({
			commentState: 0
		});
	}
	// 提交评价
	handleSubmitComment(){
		const id = this.props.data.id;
		const commentText = this.refs.commentText;
		const comment = commentText.value.trim();
		if(!comment){
			return ;
		}
		// 提交数据
		this.props.submitCommentFn(id,comment,this.commentOk.bind(this));

	}
	// 成功提交评价，修改按钮状态
	commentOk(){
		this.setState({
			commentState: 2
		})
	}
}

export default ListItem;