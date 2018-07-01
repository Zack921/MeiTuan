import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BuyAndStore from '../../../../components/BuyAndStore';
import * as userStoreActionsFromFile from '../../../../actions/userStore';

class Buy extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state = {
			isStored: false
		};
	}
	render(){
		return (
			<BuyAndStore 
				isStored={this.state.isStored} 
				handleStoreFn={this.handleStore.bind(this)} 
				handleBuyFn={this.handleBuy.bind(this)}
			/>
		);
	}
	componentDidMount(){
		// 判断该商户是否被收藏
		this.checkStoreState();
	}
	// 判断用户是否登录
	checkLogin(){
		const id = this.props.id;
		const userInfo = this.props.userInfo;
		if(!userInfo.userName){
			// 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
			this.props.history.push('/login/' + encodeURIComponent('/detail/' + id));
			return false;
		}
		return true;
	}
	// 判断该商户是否被收藏
	checkStoreState(){
		const id = this.props.id;
		const userStore = this.props.userStore;

		userStore.some(item => {
			if(item.id === id){
				// 已收藏
				this.setState({
					isStored: true
				});
				return true; // 跳出循环
			}
		});
	}
	// 收藏该商户
	handleStore(){
		// 验证登录，未登录则return
        const loginFlag = this.checkLogin();
        if (!loginFlag) {
            return ;
        }
        
		const id = this.props.id;
		const userStoreActions = this.props.userStoreActions;
		if(this.state.isStored){
			// 已收藏，则取消收藏
			userStoreActions.remove({
				id: id
			});
		}else{
			// 未收藏，则收藏
			userStoreActions.add({
				id: id
			});
		}
		this.setState({
			isStored: !this.state.isStored
		});
	}
	// 购买
	handleBuy(){
		// 验证登录，未登录则return
        const loginFlag = this.checkLogin();
        if (!loginFlag) {
            return ;
        }

        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        this.props.history.push('/User');
	}
}

// react-redux 绑定
function mapStateToProps(state){
	return {
		userInfo: state.userInfo,
		userStore: state.userStore
	};
}

function mapDispatchToProps(dispatch){
	return {
		userStoreActions: bindActionCreators(userStoreActionsFromFile,dispatch)
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Buy);