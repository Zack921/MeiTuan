import React from 'react';

class App extends React.Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				{
					this.props.children
					? this.props.children
					: <div>加载中...</div>
				}				
			</div>
		);
	}
}

export default App;