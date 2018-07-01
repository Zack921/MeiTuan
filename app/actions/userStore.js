import * as actionTypes from '../constants/userStore';

export function update(data){
	return {
		type: actionTypes.USERSTORE_UPDATE,
		data: data
	};
}

export function add(item){
	return {
		type: actionTypes.USERSTORE_ADD,
		data: item
	};
}

export function remove(item){
	return {
		type: actionTypes.USERSTORE_REMOVE,
		data: item
	};
}