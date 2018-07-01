import { get } from '../get.js';

//返回 promise 对象
export function getSearchData(page,cityName,category,keyword){
	const keywordStr = keyword ? '/' + keyword : '';
	const url = '/api/search/' + '/' + page + '/' + cityName + '/' + category + '/' + keywordStr;
	const result = get(url); 
	return result;
}
