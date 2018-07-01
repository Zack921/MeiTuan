import React from 'react';

import { getListData } from '../../../../fetch/home';
import HomeList from '../../../../components/List';
import ListLoadMore from '../../../../components/ListLoadMore';
import './index.less';

class List extends React.Component{
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
			<div>
				<h2 className="home-list-title">猜你喜欢</h2>
				{
					this.state.data.length
					? <HomeList data={this.state.data} />
					: <div>加载中...</div>
				}
				{
					this.state.hasMore
					? <ListLoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadListMore.bind(this)} />
					: ''
				}			
			</div>
		);
	}
	componentWillUnmount(){
		console.log('HomeList unmount');
		this._isMounted = false;
	}
	componentDidMount(){
		console.log('HomeList did mount');
		this._isMounted = true;
		this.loadListData();
	}
	//加载 List 数据
	loadListData(){
		const cityName = this.props.cityName;
		const promiseData = getListData(cityName,0);//返回 promise 对象
		this.handlePromise2Json(promiseData);
	}
	//处理加载的数据 promise对象->json
	handlePromise2Json(promiseData){
		promiseData.then(res => {
			return res.json();
		}).then(json => {
			const data = json.data;
			const hasMore = json.hasMore;
			if(this._isMounted){
				this.setState({
					data: this.state.data.concat(data),
					hasMore: hasMore
				});
			}	
		})
	}
	//加载更多 List 数据
	loadListMore(){
		//更新状态
		this.setState({
			isLoadingMore: true
		});
		//加载数据
		const cityName = this.props.cityName;
		const page = this.state.nextPage;
		const promiseData = getListData(cityName,page);
		this.handlePromise2Json(promiseData);
		//更新状态
		if(this._isMounted){
			this.setState({
				isLoadingMore:false,
				nextPage: this.state.nextPage + 1
			});
		}
	}
}

export default List;