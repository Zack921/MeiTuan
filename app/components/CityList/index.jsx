import React from 'react';

import './index.less';

class CityList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="city-list-container">
				<h3>热门城市</h3>
				<ul className="clear-fix">
					<li>
						<span onClick={this.handleClick.bind(this, '北京')}>北京</span>
					</li>
					<li>
						<span onClick={this.handleClick.bind(this, '上海')}>上海</span>
					</li>
					<li>
                        <span onClick={this.handleClick.bind(this, '杭州')}>杭州</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '广州')}>广州</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '苏州')}>苏州</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '深圳')}>深圳</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '南京')}>南京</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '天津')}>天津</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '重庆')}>重庆</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '厦门')}>厦门</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '武汉')}>武汉</span>
                    </li>
                    <li>
                        <span onClick={this.handleClick.bind(this, '西安')}>西安</span>
                    </li>
				</ul>
			</div>
		);
	}
	handleClick(newCity){
		this.props.updateCity(newCity);
	}
}

export default CityList;