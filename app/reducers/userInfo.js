// reduce 定义规则，处理相应的 action
import * as actionTypes from '../constants/userInfo';

const initialState = {};

export default function userInfo(state = initialState,action){
	switch(action.type){
		case actionTypes.USERINFO_UPDATE:
			return action.data;
		default:
			return state;
	}
}