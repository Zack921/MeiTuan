import { get } from '../get.js';

//返回 promise 对象
export function getAdData(){
	const result = get('/api/homeAd');
	return result;
}

//返回 promise 对象
export function getListData(city,page){
	//encodeURIComponent - 将字符串编码成URI需要的格式
	const result = get('/api/homeList/' + encodeURIComponent(city) + '/' + page);
	return result;
}