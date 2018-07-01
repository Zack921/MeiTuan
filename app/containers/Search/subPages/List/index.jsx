import React from 'react';

import './index.less';
import { getSearchData } from '../../../../fetch/search';
import SearchList from '../../../../components/List';
import ListLoadMore from '../../../../components/ListLoadMore';

const initialState = {
	data: [],
	hasMore: false,
	isLoadingMore: false,//是否正在 加载更多
	nextPage: 1//下一页
};

class List extends React.Component{
	constructor(props){
		super(props);
		this.state = initialState;
	}
	render(){
		return (
			<div>
				{
					this.state.data.length
					? <SearchList data={this.state.data} />
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
		console.log('SearchList unmount');
		this._isMounted = false;
	}
	componentDidMount(){
		console.log('SearchList did mount');
		/*console.log('did mount');*/
		//该函数内修改了state 会发生update
		//所以此时的 state.data 为空
		this._isMounted = true;
		this.loadListData();
	}
	shouldComponentUpdate(nextProps,nextState){
		/*console.log('should update');*/
		return true;
	}
	componentWillUpdate(){
		/*console.log('will update');*/
	}
	//处理重新搜索
	componentDidUpdate(nextProps,nextState){
		//更新完成
		//此时的 state.data 已添加新数据
		const oldCategory = this.props.category;
		const oldKeyword = this.props.keyword;
		const newCategory = nextProps.category;
		const newKeyword = nextProps.keyword;
		//搜索条件相等时，不需要重新获取新数据
		if(oldKeyword === newKeyword && oldCategory === newCategory){
			return ;
		}
		//重置 state
		this.setState(initialState);
		//加载数据
		this.loadListData();
	}
	//加载 list 数据
	loadListData(){
		const cityName = this.props.cityName;
		const category = this.props.category;
		const keyword = this.props.keyword;
		const promiseData = getSearchData(0,cityName,category,keyword);
		this.handlePromise2Json(promiseData);
	}
	//处理加载的数据 promise->json
	handlePromise2Json(promiseData){
		promiseData.then(res => {
			return res.json();
		}).then(json => {
			const hasMore = json.hasMore;
			const data = json.data;
			if(this._isMounted){
				this.setState({
					data: this.state.data.concat(data),
					hasMore: hasMore
				});
			}
		});
	}
	//加载更多 List 数据
	loadListMore(){
		//更新状态
		this.setState({
			isLoadingMore: true
		});
		//加载数据
		const cityName = this.props.cityName;
		const category = this.props.category;
		const keyword = this.props.keyword;
		const nextPage = this.state.nextPage;
		const promiseData = getSearchData(nextPage,cityName,category,keyword);
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