import 'whatwg-fetch';
import 'es6-promise';

//将对象拼接成 key1=value1&key2=value2 的字符串形式
function obj2params(obj){
	var result = '';
	var item;
	for(item in obj){
		result += '&' + item + '=' + encodeURIComponent(obj[item]); 
	}

	if(result){
		result = result.slice(1);//清除第一个&
	}

	return result;
}

//返回 promise 对象
export function post(url,paramsObj){
	var result = fetch(url,{
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'applicaton/json, text/plain, */*',
			'Content-Type': 'applicaton/x-www-form-urlencoded'
		},
		body: obj2params(paramsObj)
	});
	return result;
}