// reduce 定义规则，处理相应的 action
import * as actionTypes from '../constants/userStore';

const initialState = [];

export default function userInfo(state = initialState,action){
	switch(action.type){
		case actionTypes.USERSTORE_UPDATE:
			return action.data;

		case actionTypes.USERSTORE_ADD:
			state.unshift(action.data);
			return state;

		case actionTypes.USERSTORE_REMOVE:
			return state.filter(item => {
				if (item.id !== action.data.id) {
					return item;
				}
			});

		default:
			return state;
	}
}