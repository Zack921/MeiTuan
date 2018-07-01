// 整合成一个统一的规则模块
import { combineReducers } from 'redux';
import userInfo from './userInfo';
import userStore from './userStore';

export default combineReducers({
	userInfo: userInfo,
	userStore: userStore
});