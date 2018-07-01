import React from 'react';

import './index.less';

class SearchInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: ''
		};
	}
	render(){
		return (
			<input 
				className="search-input" 
				type="text"
				placeholder="请输入关键字"
				value={this.state.value}
				onChange={this.handleChange.bind(this)}
				onKeyUp={this.handleKeyUp.bind(this)} />
		);
	}
	componentDidMount(){
		this.setState({
			value: this.props.value
		});
	}
	handleChange(e){
		//将input值存储到state
		//利用react数据驱动视图-约束性组件(diff算法)
		this.setState({
			value: e.target.value
		});
	}
	handleKeyUp(e){
		//回车跳转
		if(e.keyCode !== 13 || e.target.value == ''){
			return
		}
		this.props.handleEnter(e.target.value);
	}
}

export default SearchInput;