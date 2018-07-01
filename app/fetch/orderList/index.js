import { get } from '../get.js';
import { post } from '../post.js';

// 返回 promise 对象
export function getOrderList(userName){
	const url = '/api/orderList/' + userName;
	const result = get(url); 
	return result;
}

// 返回 Promise 对象
export function postComment(id,comment){
	const url = '/api/submitComment';
	const dataObj = {
		id: id,
		comment: comment
	};
	const result = post(url,dataObj);
	return result;
}
