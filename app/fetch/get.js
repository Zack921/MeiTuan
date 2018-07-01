import 'whatwg-fetch';
import 'es6-promise';

//返回 promise 对象
export function get(url){
	var result = fetch(url,{
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	});

	return result;
}